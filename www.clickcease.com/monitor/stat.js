! function() {
    "use strict";

    function T() {
        T = function() {
            return a
        };
        var a = {},
            e = Object.prototype,
            l = e.hasOwnProperty,
            d = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            },
            t = "function" == typeof Symbol ? Symbol : {},
            o = t.iterator || "@@iterator",
            n = t.asyncIterator || "@@asyncIterator",
            r = t.toStringTag || "@@toStringTag";

        function i(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            i({}, "")
        } catch (e) {
            i = function(e, t, n) {
                return e[t] = n
            }
        }

        function s(e, t, n, r) {
            var i, a, s, c, o = t && t.prototype instanceof h ? t : h,
                u = Object.create(o.prototype),
                l = new I(r || []);
            return d(u, "_invoke", {
                value: (i = e, a = n, s = l, c = "suspendedStart", function(e, t) {
                    if ("executing" === c) throw new Error("Generator is already running");
                    if ("completed" === c) {
                        if ("throw" === e) throw t;
                        return C()
                    }
                    for (s.method = e, s.arg = t;;) {
                        var n = s.delegate;
                        if (n) {
                            var r = S(n, s);
                            if (r) {
                                if (r === p) continue;
                                return r
                            }
                        }
                        if ("next" === s.method) s.sent = s._sent = s.arg;
                        else if ("throw" === s.method) {
                            if ("suspendedStart" === c) throw c = "completed", s.arg;
                            s.dispatchException(s.arg)
                        } else "return" === s.method && s.abrupt("return", s.arg);
                        c = "executing";
                        var o = f(i, a, s);
                        if ("normal" === o.type) {
                            if (c = s.done ? "completed" : "suspendedYield", o.arg === p) continue;
                            return {
                                value: o.arg,
                                done: s.done
                            }
                        }
                        "throw" === o.type && (c = "completed", s.method = "throw", s.arg = o.arg)
                    }
                })
            }), u
        }

        function f(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        a.wrap = s;
        var p = {};

        function h() {}

        function c() {}

        function u() {}
        var m = {};
        i(m, o, function() {
            return this
        });
        var v = Object.getPrototypeOf,
            y = v && v(v(k([])));
        y && y !== e && l.call(y, o) && (m = y);
        var g = u.prototype = h.prototype = Object.create(m);

        function b(e) {
            ["next", "throw", "return"].forEach(function(t) {
                i(e, t, function(e) {
                    return this._invoke(t, e)
                })
            })
        }

        function w(c, u) {
            var t;
            d(this, "_invoke", {
                value: function(n, r) {
                    function e() {
                        return new u(function(e, t) {
                            ! function t(e, n, r, o) {
                                var i = f(c[e], c, n);
                                if ("throw" !== i.type) {
                                    var a = i.arg,
                                        s = a.value;
                                    return s && "object" == typeof s && l.call(s, "__await") ? u.resolve(s.__await).then(function(e) {
                                        t("next", e, r, o)
                                    }, function(e) {
                                        t("throw", e, r, o)
                                    }) : u.resolve(s).then(function(e) {
                                        a.value = e, r(a)
                                    }, function(e) {
                                        return t("throw", e, r, o)
                                    })
                                }
                                o(i.arg)
                            }(n, r, e, t)
                        })
                    }
                    return t = t ? t.then(e, e) : e()
                }
            })
        }

        function S(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return p;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return p
            }
            var r = f(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
        }

        function x(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function E(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function I(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(x, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        r = function e() {
                            for (; ++n < t.length;)
                                if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return r.next = r
                }
            }
            return {
                next: C
            }
        }

        function C() {
            return {
                value: void 0,
                done: !0
            }
        }
        return d(g, "constructor", {
            value: c.prototype = u,
            configurable: !0
        }), d(u, "constructor", {
            value: c,
            configurable: !0
        }), c.displayName = i(u, r, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === c || "GeneratorFunction" === (t.displayName || t.name))
        }, a.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, i(e, r, "GeneratorFunction")), e.prototype = Object.create(g), e
        }, a.awrap = function(e) {
            return {
                __await: e
            }
        }, b(w.prototype), i(w.prototype, n, function() {
            return this
        }), a.AsyncIterator = w, a.async = function(e, t, n, r, o) {
            void 0 === o && (o = Promise);
            var i = new w(s(e, t, n, r), o);
            return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                return e.done ? e.value : i.next()
            })
        }, b(g), i(g, r, "Generator"), i(g, o, function() {
            return this
        }), i(g, "toString", function() {
            return "[object Generator]"
        }), a.keys = function(e) {
            var n = Object(e),
                r = [];
            for (var t in n) r.push(t);
            return r.reverse(),
                function e() {
                    for (; r.length;) {
                        var t = r.pop();
                        if (t in n) return e.value = t, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, a.values = k, I.prototype = {
            constructor: I,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                    for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(n) {
                if (this.done) throw n;
                var r = this;

                function e(e, t) {
                    return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = void 0), !!t
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var o = this.tryEntries[t],
                        i = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var a = l.call(o, "catchLoc"),
                            s = l.call(o, "finallyLoc");
                        if (a && s) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), p
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            E(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), p
            }
        }, a
    }

    function Wt(e) {
        return (Wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t, n, r, o, i, a) {
        try {
            var s = e[i](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
    }

    function i(s) {
        return function() {
            var e = this,
                a = arguments;
            return new Promise(function(t, n) {
                var r = s.apply(e, a);

                function o(e) {
                    c(r, t, n, o, i, "next", e)
                }

                function i(e) {
                    c(r, t, n, o, i, "throw", e)
                }
                o(void 0)
            })
        }
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, o, i = [],
                a = !0,
                s = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
            return i
        }(e, t) || n(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || n(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function n(e, t) {
        if (e) {
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }! function(e) {
        var t = function(a) {
            var c, e = Object.prototype,
                l = e.hasOwnProperty,
                d = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                t = "function" == typeof Symbol ? Symbol : {},
                o = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";

            function i(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                i({}, "")
            } catch (e) {
                i = function(e, t, n) {
                    return e[t] = n
                }
            }

            function s(e, t, n, r) {
                var i, a, s, c, o = t && t.prototype instanceof g ? t : g,
                    u = Object.create(o.prototype),
                    l = new L(r || []);
                return d(u, "_invoke", {
                    value: (i = e, a = n, s = l, c = p, function(e, t) {
                        if (c === m) throw new Error("Generator is already running");
                        if (c === v) {
                            if ("throw" === e) throw t;
                            return R()
                        }
                        for (s.method = e, s.arg = t;;) {
                            var n = s.delegate;
                            if (n) {
                                var r = C(n, s);
                                if (r) {
                                    if (r === y) continue;
                                    return r
                                }
                            }
                            if ("next" === s.method) s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if (c === p) throw c = v, s.arg;
                                s.dispatchException(s.arg)
                            } else "return" === s.method && s.abrupt("return", s.arg);
                            c = m;
                            var o = f(i, a, s);
                            if ("normal" === o.type) {
                                if (c = s.done ? v : h, o.arg === y) continue;
                                return {
                                    value: o.arg,
                                    done: s.done
                                }
                            }
                            "throw" === o.type && (c = v, s.method = "throw", s.arg = o.arg)
                        }
                    })
                }), u
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            a.wrap = s;
            var p = "suspendedStart",
                h = "suspendedYield",
                m = "executing",
                v = "completed",
                y = {};

            function g() {}

            function u() {}

            function b() {}
            var w = {};
            i(w, o, function() {
                return this
            });
            var S = Object.getPrototypeOf,
                x = S && S(S(_([])));
            x && x !== e && l.call(x, o) && (w = x);
            var E = b.prototype = g.prototype = Object.create(w);

            function I(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    i(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }

            function k(c, u) {
                var t;
                d(this, "_invoke", {
                    value: function(n, r) {
                        function e() {
                            return new u(function(e, t) {
                                ! function t(e, n, r, o) {
                                    var i = f(c[e], c, n);
                                    if ("throw" !== i.type) {
                                        var a = i.arg,
                                            s = a.value;
                                        return s && "object" == typeof s && l.call(s, "__await") ? u.resolve(s.__await).then(function(e) {
                                            t("next", e, r, o)
                                        }, function(e) {
                                            t("throw", e, r, o)
                                        }) : u.resolve(s).then(function(e) {
                                            a.value = e, r(a)
                                        }, function(e) {
                                            return t("throw", e, r, o)
                                        })
                                    }
                                    o(i.arg)
                                }(n, r, e, t)
                            })
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                })
            }

            function C(e, t) {
                var n = e.iterator[t.method];
                if (n === c) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = c, C(e, t), "throw" === t.method)) return y;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var r = f(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, y;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = c), t.delegate = null, y) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
            }

            function T(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function L(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(T, this), this.reset(!0)
            }

            function _(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function e() {
                                for (; ++n < t.length;)
                                    if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = c, e.done = !0, e
                            };
                        return r.next = r
                    }
                }
                return {
                    next: R
                }
            }

            function R() {
                return {
                    value: c,
                    done: !0
                }
            }
            return d(E, "constructor", {
                value: u.prototype = b,
                configurable: !0
            }), d(b, "constructor", {
                value: u,
                configurable: !0
            }), u.displayName = i(b, r, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === u || "GeneratorFunction" === (t.displayName || t.name))
            }, a.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, i(e, r, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, a.awrap = function(e) {
                return {
                    __await: e
                }
            }, I(k.prototype), i(k.prototype, n, function() {
                return this
            }), a.AsyncIterator = k, a.async = function(e, t, n, r, o) {
                void 0 === o && (o = Promise);
                var i = new k(s(e, t, n, r), o);
                return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                    return e.done ? e.value : i.next()
                })
            }, I(E), i(E, r, "Generator"), i(E, o, function() {
                return this
            }), i(E, "toString", function() {
                return "[object Generator]"
            }), a.keys = function(e) {
                var n = Object(e),
                    r = [];
                for (var t in n) r.push(t);
                return r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in n) return e.value = t, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, a.values = _, L.prototype = {
                constructor: L,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(M), !e)
                        for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = c), !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var o = this.tryEntries[t],
                            i = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var a = l.call(o, "catchLoc"),
                                s = l.call(o, "finallyLoc");
                            if (a && s) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                M(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: _(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = c), y
                }
            }, a
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
        }
    }(e = {
        exports: {}
    });
    var e, t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

    function f(t) {
        var n = this.constructor;
        return this.then(function(e) {
            return n.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return n.resolve(t()).then(function() {
                return n.reject(e)
            })
        })
    }

    function p(n) {
        return new this(function(r, e) {
            if (!n || void 0 === n.length) return e(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var o = Array.prototype.slice.call(n);
            if (0 === o.length) return r([]);
            var i = o.length;

            function a(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if ("function" == typeof n) return void n.call(e, function(e) {
                        a(t, e)
                    }, function(e) {
                        o[t] = {
                            status: "rejected",
                            reason: e
                        }, 0 == --i && r(o)
                    })
                }
                o[t] = {
                    status: "fulfilled",
                    value: e
                }, 0 == --i && r(o)
            }
            for (var t = 0; t < o.length; t++) a(t, o[t])
        })
    }
    var h = setTimeout;

    function m(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function v() {}

    function y(e) {
        if (!(this instanceof y)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], E(e, this)
    }

    function g(n, r) {
        for (; 3 === n._state;) n = n._value;
        0 !== n._state ? (n._handled = !0, y._immediateFn(function() {
            var e = 1 === n._state ? r.onFulfilled : r.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(n._value)
                } catch (e) {
                    return void w(r.promise, e)
                }
                b(r.promise, t)
            } else(1 === n._state ? b : w)(r.promise, n._value)
        })) : n._deferreds.push(r)
    }

    function b(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof y) return t._state = 3, t._value = e, void S(t);
                if ("function" == typeof n) return void E((r = n, o = e, function() {
                    r.apply(o, arguments)
                }), t)
            }
            t._state = 1, t._value = e, S(t)
        } catch (e) {
            w(t, e)
        }
        var r, o
    }

    function w(e, t) {
        e._state = 2, e._value = t, S(e)
    }

    function S(e) {
        2 === e._state && 0 === e._deferreds.length && y._immediateFn(function() {
            e._handled || y._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) g(e, e._deferreds[t]);
        e._deferreds = null
    }

    function x(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function E(e, t) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0, b(t, e))
            }, function(e) {
                n || (n = !0, w(t, e))
            })
        } catch (e) {
            if (n) return;
            n = !0, w(t, e)
        }
    }
    y.prototype.catch = function(e) {
        return this.then(null, e)
    }, y.prototype.then = function(e, t) {
        var n = new this.constructor(v);
        return g(this, new x(e, t, n)), n
    }, y.prototype.finally = f, y.all = function(t) {
        return new y(function(r, o) {
            if (!m(t)) return o(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return r([]);
            var a = i.length;

            function s(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if ("function" == typeof n) return void n.call(e, function(e) {
                            s(t, e)
                        }, o)
                    }
                    i[t] = e, 0 == --a && r(i)
                } catch (e) {
                    o(e)
                }
            }
            for (var e = 0; e < i.length; e++) s(e, i[e])
        })
    }, y.allSettled = p, y.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === y ? t : new y(function(e) {
            e(t)
        })
    }, y.reject = function(n) {
        return new y(function(e, t) {
            t(n)
        })
    }, y.race = function(o) {
        return new y(function(e, t) {
            if (!m(o)) return t(new TypeError("Promise.race accepts an array"));
            for (var n = 0, r = o.length; n < r; n++) y.resolve(o[n]).then(e, t)
        })
    }, y._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        h(e, 0)
    }, y._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var I = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== t) return t;
        throw new Error("unable to locate global object")
    }();
    "function" != typeof I.Promise ? I.Promise = y : (I.Promise.prototype.finally || (I.Promise.prototype.finally = f), I.Promise.allSettled || (I.Promise.allSettled = p)), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e, t) {
            if (null == this) throw TypeError('"this" is null or not defined');
            var n = Object(this),
                r = n.length >>> 0;
            if ("function" != typeof e) throw TypeError("predicate must be a function");
            for (var o = t, i = 0; i < r;) {
                var a = n[i];
                if (e.call(o, a, i, n)) return a;
                i++
            }
        },
        configurable: !0,
        writable: !0
    }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        if (e instanceof RegExp) throw TypeError("first argument must not be a RegExp");
        return void 0 === t && (t = 0), -1 !== this.indexOf(e, t)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n, r, o = Object(this),
                i = o.length >>> 0;
            if (0 == i) return !1;
            for (var a = 0 | t, s = Math.max(0 <= a ? a : i - Math.abs(a), 0); s < i;) {
                if ((n = o[s]) === (r = e) || "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r)) return !0;
                s++
            }
            return !1
        },
        configurable: !0,
        writable: !0
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(e, t) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                if (null != o)
                    for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            }
            return n
        },
        writable: !0,
        configurable: !0
    });

    function k() {
        for (var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], t = "", n = 0; n < 36; n++) t += 8 === n || 13 === n || 18 === n || 23 === n ? "-" : e[Math.floor(Math.random() * e.length)];
        return t
    }

    function C(e) {
        return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e)
    }
    var M = "ccai_hash",
        L = "cc_page_id",
        _ = "cc_visit_id",
        R = ["gclid", "msclkid", "fbclid"],
        N = "cc_recording_time_elapsed",
        O = s(function e() {
            var i = this,
                t = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).empty;
            a(this, e), this.scriptResolvedTime = 0, this.times = {}, this.styles = ["display: block", "font-size: ".concat(11, "px"), "font-weight: bold", "background: url('https://www.clickcease.com/assets/img/cc-logo.png') no-repeat", "background-size: auto ".concat(22, "px"), "padding: ".concat(2.75, "px ").concat(5.5, "px ").concat(2.75, "px ").concat(71.5, "px")].join(";");

            function n(o) {
                console.hasOwnProperty(o) && (i[o] = t ? function() {} : function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return (e = console)[o].apply(e, ["%c |", i.styles].concat(n))
                })
            }
            for (var r in console) n(r);
            this.time = function(e) {
                i.times[e] = {
                    start: performance.now()
                }
            }, this.timeEnd = function(e) {
                if (i.times[e]) {
                    var t = performance.now() - i.times[e].start;
                    delete i.times[e], i.log.apply(i, [e].concat(u(D(t + i.scriptResolvedTime))))
                }
            }
        }),
        A = window.ccConsole = new O,
        F = /ccdebug/i.test(window.location) ? A : new O({
            empty: !0
        }),
        D = function(e) {
            return [parseInt(e), "ms"]
        },
        P = Date.now(),
        W = function() {
            return (W = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function j(e, a, s, c) {
        return new(s = s || Promise)(function(n, t) {
            function r(e) {
                try {
                    i(c.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    i(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function i(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                    e(t)
                })).then(r, o)
            }
            i((c = c.apply(e, a || [])).next())
        })
    }

    function V(n, r) {
        var o, i, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function e(t) {
            return function(e) {
                return function(t) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s && t[s = 0] && (c = 0), c;) try {
                        if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                        switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                            case 0:
                            case 1:
                                a = t;
                                break;
                            case 4:
                                return c.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, i = t[1], t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                    c.label = t[1];
                                    break
                                }
                                if (6 === t[0] && c.label < a[1]) {
                                    c.label = a[1], a = t;
                                    break
                                }
                                if (a && c.label < a[2]) {
                                    c.label = a[2], c.ops.push(t);
                                    break
                                }
                                a[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        t = r.call(n, c)
                    } catch (e) {
                        t = [6, e], i = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function G() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
            o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
    }
    var X = "3.3.6";

    function Y(t, n) {
        return new Promise(function(e) {
            return setTimeout(e, t, n)
        })
    }

    function Z(e, t) {
        try {
            var n = e();
            (r = n) && "function" == typeof r.then ? n.then(function(e) {
                return t(!0, e)
            }, function(e) {
                return t(!1, e)
            }) : t(!0, n)
        } catch (e) {
            t(!1, e)
        }
        var r
    }

    function H(o, i, a) {
        return void 0 === a && (a = 16), j(this, void 0, void 0, function() {
            var t, n, r;
            return V(this, function(e) {
                switch (e.label) {
                    case 0:
                        t = Date.now(), n = 0, e.label = 1;
                    case 1:
                        return n < o.length ? (i(o[n], n), r = Date.now(), t + a <= r ? (t = r, [4, Y(0)]) : [3, 3]) : [3, 4];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return ++n, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function z(e) {
        e.then(void 0, function() {})
    }

    function B(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function J(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
    }

    function U(e, t) {
        return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }

    function Q(e, t) {
        return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }

    function q(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }

    function K(e) {
        return e = q(e, [0, e[0] >>> 1]), e = q(e = J(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = q(e = J(e, [3301882366, 444984403]), [0, e[0] >>> 1])
    }

    function $(e, t) {
        return ! function(e, t) {
            for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return 1
        }(e, t)
    }

    function ee(e) {
        return parseInt(e)
    }

    function te(e) {
        return parseFloat(e)
    }

    function ne(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
    }

    function re(e) {
        return e.reduce(function(e, t) {
            return e + (t ? 1 : 0)
        }, 0)
    }

    function oe(e, t) {
        if (void 0 === t && (t = 1), 1 <= Math.abs(t)) return Math.round(e / t) * t;
        var n = 1 / t;
        return Math.round(e * n) / n
    }

    function ie(e) {
        return e && "object" == typeof e && "message" in e ? e : {
            message: e
        }
    }

    function ae(o, a, t) {
        var s = Object.keys(o).filter(function(e) {
                return $(t, e)
            }),
            c = Array(s.length);
        return H(s, function(e, t) {
                var n, i, r;
                c[t] = (n = o[e], i = a, z(r = new Promise(function(r) {
                    var o = Date.now();
                    Z(n.bind(null, i), function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var i = Date.now() - o;
                        if (!e[0]) return r(function() {
                            return {
                                error: ie(e[1]),
                                duration: i
                            }
                        });
                        var n = e[1];
                        if ("function" != typeof n) return r(function() {
                            return {
                                value: n,
                                duration: i
                            }
                        });
                        r(function() {
                            return new Promise(function(r) {
                                var o = Date.now();
                                Z(n, function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = i + Date.now() - o;
                                    if (!e[0]) return r({
                                        error: ie(e[1]),
                                        duration: n
                                    });
                                    r({
                                        value: e[1],
                                        duration: n
                                    })
                                })
                            })
                        })
                    })
                })), function() {
                    return r.then(function(e) {
                        return e()
                    })
                })
            }),
            function() {
                return j(this, void 0, void 0, function() {
                    var o, t, n, r, i, a;
                    return V(this, function(e) {
                        switch (e.label) {
                            case 0:
                                for (o = {}, t = 0, n = s; t < n.length; t++) r = n[t], o[r] = void 0;
                                i = Array(s.length), a = function() {
                                    var r;
                                    return V(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return r = !0, [4, H(s, function(t, e) {
                                                    if (!i[e])
                                                        if (c[e]) {
                                                            var n = c[e]().then(function(e) {
                                                                return o[t] = e
                                                            });
                                                            z(n), i[e] = n
                                                        } else r = !1
                                                })];
                                            case 1:
                                                return e.sent(), r ? [2, "break"] : [4, Y(1)];
                                            case 2:
                                                return e.sent(), [2]
                                        }
                                    })
                                }, e.label = 1;
                            case 1:
                                return [5, a()];
                            case 2:
                                if ("break" === e.sent()) return [3, 4];
                                e.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [4, Promise.all(i)];
                            case 5:
                                return e.sent(), [2, o]
                        }
                    })
                })
            }
    }

    function se() {
        var e = window,
            t = navigator;
        return 4 <= re(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t])
    }

    function ce() {
        var e = window,
            t = navigator;
        return 5 <= re(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e])
    }

    function ue() {
        var e = window,
            t = navigator;
        return 4 <= re(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e])
    }

    function le() {
        var e = window;
        return 3 <= re(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)])
    }

    function de() {
        var e, t, n, r = ce(),
            o = (n = window, 4 <= re(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]));
        if (!r && !o) return !1;
        var i = window;
        return 2 <= re(["onorientationchange" in i, "orientation" in i, r && !("SharedWorker" in i), o && /android/i.test(navigator.appVersion)])
    }

    function fe(e) {
        var t = new Error(e);
        return t.name = e, t
    }

    function pe(t, c, n) {
        var r, o, i;
        return void 0 === n && (n = 50), j(this, void 0, void 0, function() {
            var a, s;
            return V(this, function(e) {
                switch (e.label) {
                    case 0:
                        a = document, e.label = 1;
                    case 1:
                        return a.body ? [3, 3] : [4, Y(n)];
                    case 2:
                        return e.sent(), [3, 1];
                    case 3:
                        s = a.createElement("iframe"), e.label = 4;
                    case 4:
                        return e.trys.push([4, , 10, 11]), [4, new Promise(function(e, t) {
                            function n() {
                                r = !0, e()
                            }
                            var r = !1;
                            s.onload = n, s.onerror = function(e) {
                                r = !0, t(e)
                            };
                            var o = s.style;
                            o.setProperty("display", "block", "important"), o.position = "absolute", o.top = "0", o.left = "0", o.visibility = "hidden", c && "srcdoc" in s ? s.srcdoc = c : s.src = "about:blank", a.body.appendChild(s);
                            var i = function() {
                                var e, t;
                                r || ("complete" === (null === (t = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? n() : setTimeout(i, 10))
                            };
                            i()
                        })];
                    case 5:
                        e.sent(), e.label = 6;
                    case 6:
                        return null !== (o = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) && void 0 !== o && o.body ? [3, 8] : [4, Y(n)];
                    case 7:
                        return e.sent(), [3, 6];
                    case 8:
                        return [4, t(s, s.contentWindow)];
                    case 9:
                        return [2, e.sent()];
                    case 10:
                        return null !== (i = s.parentNode) && void 0 !== i && i.removeChild(s), [7];
                    case 11:
                        return [2]
                }
            })
        })
    }

    function he(e) {
        for (var t = function(e) {
                for (var t, n, r = "Unexpected syntax '" + e + "'", o = /^\s*([a-z-]*)(.*)$/i.exec(e), i = o[1] || void 0, a = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                        a[e] = a[e] || [], a[e].push(t)
                    };;) {
                    var u = s.exec(o[2]);
                    if (!u) break;
                    var l = u[0];
                    switch (l[0]) {
                        case ".":
                            c("class", l.slice(1));
                            break;
                        case "#":
                            c("id", l.slice(1));
                            break;
                        case "[":
                            var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                            if (!d) throw new Error(r);
                            c(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                            break;
                        default:
                            throw new Error(r)
                    }
                }
                return [i, a]
            }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : "div"), i = 0, a = Object.keys(r); i < a.length; i++) {
            var s = a[i],
                c = r[s].join(" ");
            "style" === s ? me(o.style, c) : o.setAttribute(s, c)
        }
        return o
    }

    function me(e, t) {
        for (var n = 0, r = t.split(";"); n < r.length; n++) {
            var o = r[n],
                i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
            if (i) {
                var a = i[1],
                    s = i[2],
                    c = i[4];
                e.setProperty(a, s, c || "")
            }
        }
    }
    var ve = ["monospace", "sans-serif", "serif"],
        ye = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

    function ge(e) {
        return e.toDataURL()
    }
    var be, we, Se = 2500;

    function xe() {
        var e = this;
        return function() {
                if (void 0 === we) {
                    var t = function() {
                        var e = Ee();
                        we = Ie(e) ? setTimeout(t, Se) : void(be = e)
                    };
                    t()
                }
            }(),
            function() {
                return j(e, void 0, void 0, function() {
                    var r;
                    return V(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return Ie(r = Ee()) ? be ? [2, G(be)] : (n = document).fullscreenElement || n.msFullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement ? [4, ((t = document).exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t)] : [3, 2] : [3, 2];
                            case 1:
                                e.sent(), r = Ee(), e.label = 2;
                            case 2:
                                return Ie(r) || (be = r), [2, r]
                        }
                        var t, n
                    })
                })
            }
    }

    function Ee() {
        var e = screen;
        return [ne(te(e.availTop), null), ne(te(e.width) - te(e.availWidth) - ne(te(e.availLeft), 0), null), ne(te(e.height) - te(e.availHeight) - ne(te(e.availTop), 0), null), ne(te(e.availLeft), null)]
    }

    function Ie(e) {
        for (var t = 0; t < 4; ++t)
            if (e[t]) return;
        return 1
    }

    function ke(e) {
        e.style.setProperty("display", "block", "important")
    }

    function Ce(e) {
        return matchMedia("(inverted-colors: " + e + ")").matches
    }

    function Te(e) {
        return matchMedia("(forced-colors: " + e + ")").matches
    }

    function Me(e) {
        return matchMedia("(prefers-contrast: " + e + ")").matches
    }

    function Le(e) {
        return matchMedia("(prefers-reduced-motion: " + e + ")").matches
    }

    function _e(e) {
        return matchMedia("(dynamic-range: " + e + ")").matches
    }

    function Re() {
        return 0
    }
    var Ne = Math;
    var Oe = {
        default: [],
        apple: [{
            font: "-apple-system-body"
        }],
        serif: [{
            fontFamily: "serif"
        }],
        sans: [{
            fontFamily: "sans-serif"
        }],
        mono: [{
            fontFamily: "monospace"
        }],
        min: [{
            fontSize: "1px"
        }],
        system: [{
            fontFamily: "system-ui"
        }]
    };
    var Ae = {
        fonts: function() {
            return pe(function(e, t) {
                var r = t.document,
                    n = r.body;
                n.style.fontSize = "48px";

                function o(e) {
                    var t = r.createElement("span"),
                        n = t.style;
                    return n.position = "absolute", n.top = "0", n.left = "0", n.fontFamily = e, t.textContent = "mmMwWLliI0O&1", i.appendChild(t), t
                }
                var i = r.createElement("div"),
                    a = {},
                    s = {},
                    c = ve.map(o),
                    u = function() {
                        for (var e = {}, t = function(t) {
                                e[t] = ve.map(function(e) {
                                    return o("'" + t + "'," + e)
                                })
                            }, n = 0, r = ye; n < r.length; n++) {
                            t(r[n])
                        }
                        return e
                    }();
                n.appendChild(i);
                for (var l = 0; l < ve.length; l++) a[ve[l]] = c[l].offsetWidth, s[ve[l]] = c[l].offsetHeight;
                return ye.filter(function(e) {
                    return n = u[e], ve.some(function(e, t) {
                        return n[t].offsetWidth !== a[e] || n[t].offsetHeight !== s[e]
                    });
                    var n
                })
            })
        },
        domBlockers: function(e) {
            var s = (void 0 === e ? {} : e).debug;
            return j(this, void 0, void 0, function() {
                var n, r, o, i, a;
                return V(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return ue() || de() ? (t = atob, n = {
                                abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", t("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"), '[title="ALIENBOLA" i]'],
                                abpvn: ["#quangcaomb", t("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="), ".quangcao", t("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="), t("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],
                                adBlockFinland: [".mainostila", t("LnNwb25zb3JpdA=="), ".ylamainos", t("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", t("I2FkMl9pbmxpbmU=")],
                                adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", t("LmhlYWRlci1ibG9ja2VkLWFk"), t("I2FkX2Jsb2NrZXI=")],
                                adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
                                adGuardBase: [".BetterJsPopOverlay", t("I2FkXzMwMFgyNTA="), t("I2Jhbm5lcmZsb2F0MjI="), t("I2FkLWJhbm5lcg=="), t("I2NhbXBhaWduLWJhbm5lcg==")],
                                adGuardChinese: [t("LlppX2FkX2FfSA=="), t("YVtocmVmKj0iL29kMDA1LmNvbSJd"), t("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), ".qq_nr_lad", "#widget-quan"],
                                adGuardFrench: [t("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"), "#pavePub", t("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv"],
                                adGuardGerman: [t("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="), t("LmJveHN0YXJ0d2VyYnVuZw=="), t("LndlcmJ1bmcz"), t("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="), t("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],
                                adGuardJapanese: ["#kauli_yad_1", t("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), t("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), t("LmFkZ29vZ2xl"), t("LmFkX3JlZ3VsYXIz")],
                                adGuardMobile: [t("YW1wLWF1dG8tYWRz"), t("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", t("I2FkX2ludmlld19hcmVh")],
                                adGuardRussian: [t("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), t("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', t("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), t("I2FkX3NxdWFyZQ==")],
                                adGuardSocial: [t("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), t("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", t("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],
                                adGuardTrackingProtection: ["#qoo-counter", t("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), t("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), t("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                adGuardTurkish: ["#backkapat", t("I3Jla2xhbWk="), t("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), t("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), t("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                bulgarian: [t("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers", t("I25ld0Fk")],
                                easyList: [t("I0FEX0NPTlRST0xfMjg="), t("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"), ".universalboxADVBOX03", t("LmFkdmVydGlzZW1lbnQtNzI4eDkw"), t("LnNxdWFyZV9hZHM=")],
                                easyListChina: [t("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="), t("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), t("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box"],
                                easyListCookie: ["#AdaCompliance.app-notice", ".text-center.rgpd", ".panel--cookie", ".js-cookies-andromeda", ".elxtr-consent"],
                                easyListCzechSlovak: ["#onlajny-stickers", t("I3Jla2xhbW5pLWJveA=="), t("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", t("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                easyListDutch: [t("I2FkdmVydGVudGll"), t("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", t("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                easyListGermany: [t("I0FkX1dpbjJkYXk="), t("I3dlcmJ1bmdzYm94MzAw"), t("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"), t("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"), t("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],
                                easyListItaly: [t("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", t("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                easyListLithuania: [t("LnJla2xhbW9zX3RhcnBhcw=="), t("LnJla2xhbW9zX251b3JvZG9z"), t("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), t("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), t("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                estonian: [t("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
                                fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
                                frellwitSwedish: [t("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), t("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", t("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                greekAdBlock: [t("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), t("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), t("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                hungarian: ["#cemp_doboz", ".optimonk-iframe-container", t("LmFkX19tYWlu"), t("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
                                icelandicAbp: [t("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                latvian: [t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                listKr: [t("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), t("I2xpdmVyZUFkV3JhcHBlcg=="), t("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), t("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                listeAr: [t("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", t("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), t("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), t("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                listeFr: [t("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), t("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), t("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                officialPolish: ["#ceneo-placeholder-ceneo-12", t("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), t("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), t("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), t("ZGl2I3NrYXBpZWNfYWQ=")],
                                ro: [t("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), 'a[href^="/magazin/"]', t("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), t("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],
                                ruAd: [t("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), t("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), t("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                thaiAds: ["a[href*=macau-uta-popup]", t("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), t("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", t("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                            }, r = Object.keys(n), [4, function(c) {
                                var u;
                                return j(this, void 0, void 0, function() {
                                    var t, n, r, o, i, a, s;
                                    return V(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                for (t = document, n = t.createElement("div"), r = new Array(c.length), o = {}, ke(n), s = 0; s < c.length; ++s) i = he(c[s]), ke(a = t.createElement("div")), a.appendChild(i), n.appendChild(a), r[s] = i;
                                                e.label = 1;
                                            case 1:
                                                return t.body ? [3, 3] : [4, Y(50)];
                                            case 2:
                                                return e.sent(), [3, 1];
                                            case 3:
                                                t.body.appendChild(n);
                                                try {
                                                    for (s = 0; s < c.length; ++s) r[s].offsetParent || (o[c[s]] = !0)
                                                } finally {
                                                    null !== (u = n.parentNode) && void 0 !== u && u.removeChild(n)
                                                }
                                                return [2, o]
                                        }
                                    })
                                })
                            }((a = []).concat.apply(a, r.map(function(e) {
                                return n[e]
                            })))]) : [2, void 0];
                        case 1:
                            return o = e.sent(), s && function(e, t) {
                                for (var n = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                                    var i = o[r];
                                    n += "\n" + i + ":";
                                    for (var a = 0, s = e[i]; a < s.length; a++) {
                                        var c = s[a];
                                        n += "\n  " + (t[c] ? "🚫" : "➡️") + " " + c
                                    }
                                }
                                console.log(n + "\n```")
                            }(n, o), (i = r.filter(function(e) {
                                var t = n[e];
                                return re(t.map(function(e) {
                                    return o[e]
                                })) > .6 * t.length
                            })).sort(), [2, i]
                    }
                    var t
                })
            })
        },
        fontPreferences: function() {
            return function(a, s) {
                void 0 === s && (s = 4e3);
                return pe(function(e, t) {
                    var n = t.document,
                        r = n.body,
                        o = r.style;
                    o.width = s + "px", o.webkitTextSizeAdjust = o.textSizeAdjust = "none", ce() ? r.style.zoom = "" + 1 / t.devicePixelRatio : ue() && (r.style.zoom = "reset");
                    var i = n.createElement("div");
                    return i.textContent = G(Array(s / 20 << 0)).map(function() {
                        return "word"
                    }).join(" "), r.appendChild(i), a(n, r)
                }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
            }(function(e, t) {
                for (var n = {}, r = {}, o = 0, i = Object.keys(Oe); o < i.length; o++) {
                    var a = i[o],
                        s = Oe[a],
                        c = s[0],
                        u = void 0 === c ? {} : c,
                        l = s[1],
                        d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                        f = e.createElement("span");
                    f.textContent = d, f.style.whiteSpace = "nowrap";
                    for (var p = 0, h = Object.keys(u); p < h.length; p++) {
                        var m = h[p],
                            v = u[m];
                        void 0 !== v && (f.style[m] = v)
                    }
                    n[a] = f, t.appendChild(e.createElement("br")), t.appendChild(f)
                }
                for (var y = 0, g = Object.keys(Oe); y < g.length; y++) {
                    r[a = g[y]] = n[a].getBoundingClientRect().width
                }
                return r
            })
        },
        audio: function() {
            var e = window,
                t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (ue() && !le() && ! function() {
                    var e = window;
                    return 3 <= re(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e])
                }()) return -1;
            var n = new t(1, 5e3, 44100),
                r = n.createOscillator();
            r.type = "triangle", r.frequency.value = 1e4;
            var o = n.createDynamicsCompressor();
            o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, r.connect(o), o.connect(n.destination), r.start(0);
            var s, c, i = (s = n, c = function() {}, [new Promise(function(t, n) {
                    var e = !1,
                        r = 0,
                        o = 0;

                    function i() {
                        setTimeout(function() {
                            return n(fe("timeout"))
                        }, Math.min(500, o + 5e3 - Date.now()))
                    }
                    s.oncomplete = function(e) {
                        return t(e.renderedBuffer)
                    };
                    var a = function() {
                        try {
                            switch (s.startRendering(), s.state) {
                                case "running":
                                    o = Date.now(), e && i();
                                    break;
                                case "suspended":
                                    document.hidden || r++, e && 3 <= r ? n(fe("suspended")) : setTimeout(a, 500)
                            }
                        } catch (e) {
                            n(e)
                        }
                    };
                    a(), c = function() {
                        e || (e = !0, 0 < o && i())
                    }
                }), c]),
                a = i[1],
                u = i[0].then(function(e) {
                    return function(e) {
                        for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                        return t
                    }(e.getChannelData(0).subarray(4500))
                }, function(e) {
                    if ("timeout" === e.name || "suspended" === e.name) return -3;
                    throw e
                });
            return z(u),
                function() {
                    return a(), u
                }
        },
        screenFrame: function() {
            var e = this,
                r = xe();
            return function() {
                return j(e, void 0, void 0, function() {
                    var t, n;
                    return V(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, r()];
                            case 1:
                                return t = e.sent(), [2, [(n = function(e) {
                                    return null === e ? null : oe(e, 10)
                                })(t[0]), n(t[1]), n(t[2]), n(t[3])]]
                        }
                    })
                })
            }
        },
        osCpu: function() {
            return navigator.oscpu
        },
        languages: function() {
            var e, t = navigator,
                n = [],
                r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) ce() && 3 <= re([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) || n.push(t.languages);
            else if ("string" == typeof t.languages) {
                var o = t.languages;
                o && n.push(o.split(","))
            }
            return n
        },
        colorDepth: function() {
            return window.screen.colorDepth
        },
        deviceMemory: function() {
            return ne(te(navigator.deviceMemory), void 0)
        },
        screenResolution: function() {
            function e(e) {
                return ne(ee(e), null)
            }
            var t = screen,
                n = [e(t.width), e(t.height)];
            return n.sort().reverse(), n
        },
        hardwareConcurrency: function() {
            return ne(ee(navigator.hardwareConcurrency), void 0)
        },
        timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
                var n = (new t).resolvedOptions().timeZone;
                if (n) return n
            }
            var r, o = (r = (new Date).getFullYear(), -Math.max(te(new Date(r, 0, 1).getTimezoneOffset()), te(new Date(r, 6, 1).getTimezoneOffset())));
            return "UTC" + (0 <= o ? "+" : "") + Math.abs(o)
        },
        sessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        localStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        indexedDB: function() {
            var e, t;
            if (!(se() || (e = window, t = navigator, 3 <= re(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) && !se()))) try {
                return !!window.indexedDB
            } catch (e) {
                return !0
            }
        },
        openDatabase: function() {
            return !!window.openDatabase
        },
        cpuClass: function() {
            return navigator.cpuClass
        },
        platform: function() {
            var e = navigator.platform;
            return "MacIntel" === e && ue() && !le() ? function() {
                if ("iPad" === navigator.platform) return 1;
                var e = screen,
                    t = e.width / e.height;
                return 2 <= re(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, .65 < t && t < 1.53])
            }() ? "iPad" : "iPhone" : e
        },
        plugins: function() {
            var e = navigator.plugins;
            if (e) {
                for (var t = [], n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r) {
                        for (var o = [], i = 0; i < r.length; ++i) {
                            var a = r[i];
                            o.push({
                                type: a.type,
                                suffixes: a.suffixes
                            })
                        }
                        t.push({
                            name: r.name,
                            description: r.description,
                            mimeTypes: o
                        })
                    }
                }
                return t
            }
        },
        canvas: function() {
            var e, t, n, r, o, i = !1,
                a = ((n = document.createElement("canvas")).width = 1, n.height = 1, [n, n.getContext("2d")]),
                s = a[0],
                c = a[1];
            if (o = s, c && o.toDataURL) {
                (r = c).rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), i = !r.isPointInPath(5, 5, "evenodd"),
                    function(e, t) {
                        e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                        var n = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
                        t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
                    }(s, c);
                var u = ge(s);
                e = u !== ge(s) ? t = "unstable" : (t = u, function(e, t) {
                    e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                    for (var n = 0, r = [
                            ["#f2f", 40, 40],
                            ["#2ff", 80, 40],
                            ["#ff2", 60, 80]
                        ]; n < r.length; n++) {
                        var o = r[n],
                            i = o[0],
                            a = o[1],
                            s = o[2];
                        t.fillStyle = i, t.beginPath(), t.arc(a, s, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                    }
                    t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
                }(s, c), ge(s))
            } else e = t = "";
            return {
                winding: i,
                geometry: e,
                text: t
            }
        },
        touchSupport: function() {
            var t, e = navigator,
                n = 0;
            void 0 !== e.maxTouchPoints ? n = ee(e.maxTouchPoints) : void 0 !== e.msMaxTouchPoints && (n = e.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"), t = !0
            } catch (e) {
                t = !1
            }
            return {
                maxTouchPoints: n,
                touchEvent: t,
                touchStart: "ontouchstart" in window
            }
        },
        vendor: function() {
            return navigator.vendor || ""
        },
        vendorFlavors: function() {
            for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                var r = n[t],
                    o = window[r];
                o && "object" == typeof o && e.push(r)
            }
            return e.sort()
        },
        cookiesEnabled: function() {
            var e = document;
            try {
                e.cookie = "cookietest=1; SameSite=Strict;";
                var t = -1 !== e.cookie.indexOf("cookietest=");
                return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
            } catch (e) {
                return !1
            }
        },
        colorGamut: function() {
            for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                var n = t[e];
                if (matchMedia("(color-gamut: " + n + ")").matches) return n
            }
        },
        invertedColors: function() {
            return !!Ce("inverted") || !Ce("none") && void 0
        },
        forcedColors: function() {
            return !!Te("active") || !Te("none") && void 0
        },
        monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
                for (var e = 0; e <= 100; ++e)
                    if (matchMedia("(max-monochrome: " + e + ")").matches) return e;
                throw new Error("Too high value")
            }
        },
        contrast: function() {
            return Me("no-preference") ? 0 : Me("high") || Me("more") ? 1 : Me("low") || Me("less") ? -1 : Me("forced") ? 10 : void 0
        },
        reducedMotion: function() {
            return !!Le("reduce") || !Le("no-preference") && void 0
        },
        hdr: function() {
            return !!_e("high") || !_e("standard") && void 0
        },
        math: function() {
            var e, t, n, r, o, i, a, s, c, u = Ne.acos || Re,
                l = Ne.acosh || Re,
                d = Ne.asin || Re,
                f = Ne.asinh || Re,
                p = Ne.atanh || Re,
                h = Ne.atan || Re,
                m = Ne.sin || Re,
                v = Ne.sinh || Re,
                y = Ne.cos || Re,
                g = Ne.cosh || Re,
                b = Ne.tan || Re,
                w = Ne.tanh || Re,
                S = Ne.exp || Re,
                x = Ne.expm1 || Re,
                E = Ne.log1p || Re;
            return {
                acos: u(.12312423423423424),
                acosh: l(1e308),
                acoshPf: (c = 1e154, Ne.log(c + Ne.sqrt(c * c - 1))),
                asin: d(.12312423423423424),
                asinh: f(1),
                asinhPf: (s = 1, Ne.log(s + Ne.sqrt(s * s + 1))),
                atanh: p(.5),
                atanhPf: (a = .5, Ne.log((1 + a) / (1 - a)) / 2),
                atan: h(.5),
                sin: m(-1e300),
                sinh: v(1),
                sinhPf: (i = 1, Ne.exp(i) - 1 / Ne.exp(i) / 2),
                cos: y(10.000000000123),
                cosh: g(1),
                coshPf: (o = 1, (Ne.exp(o) + 1 / Ne.exp(o)) / 2),
                tan: b(-1e300),
                tanh: w(1),
                tanhPf: (r = 1, (Ne.exp(2 * r) - 1) / (Ne.exp(2 * r) + 1)),
                exp: S(1),
                expm1: x(1),
                expm1Pf: (n = 1, Ne.exp(n) - 1),
                log1p: E(10),
                log1pPf: (t = 10, Ne.log(1 + t)),
                powPI: (e = -100, Ne.pow(Ne.PI, e))
            }
        }
    };
    var Fe = "$ if upgrade to Pro: https://fpjs.dev/pro";

    function De(e) {
        var t = function(e) {
                if (de()) return .4;
                if (ue()) return le() ? .5 : .3;
                var t = e.platform.value || "";
                if (/^Win/.test(t)) return .6;
                if (/^Mac/.test(t)) return .5;
                return .7
            }(e),
            n = oe(.99 + .01 * t, 1e-4);
        return {
            score: t,
            comment: Fe.replace(/\$/g, "" + n)
        }
    }

    function Pe(e) {
        return JSON.stringify(e, function(e, t) {
            return t instanceof Error ? W({
                name: (n = t).name,
                message: n.message,
                stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split("\n")
            }, n) : t;
            var n, r
        }, 2)
    }

    function We(e) {
        return function(e, t) {
            t = t || 0;
            var n, r = (e = e || "").length % 16,
                o = e.length - r,
                i = [0, t],
                a = [0, t],
                s = [0, 0],
                c = [0, 0],
                u = [2277735313, 289559509],
                l = [1291169091, 658871167];
            for (n = 0; n < o; n += 16) s = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], c = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], s = U(s = J(s, u), 31), i = B(i = U(i = q(i, s = J(s, l)), 27), a), i = B(J(i, [0, 5]), [0, 1390208809]), c = U(c = J(c, l), 33), a = B(a = U(a = q(a, c = J(c, u)), 31), i), a = B(J(a, [0, 5]), [0, 944331445]);
            switch (s = [0, 0], c = [0, 0], r) {
                case 15:
                    c = q(c, Q([0, e.charCodeAt(n + 14)], 48));
                case 14:
                    c = q(c, Q([0, e.charCodeAt(n + 13)], 40));
                case 13:
                    c = q(c, Q([0, e.charCodeAt(n + 12)], 32));
                case 12:
                    c = q(c, Q([0, e.charCodeAt(n + 11)], 24));
                case 11:
                    c = q(c, Q([0, e.charCodeAt(n + 10)], 16));
                case 10:
                    c = q(c, Q([0, e.charCodeAt(n + 9)], 8));
                case 9:
                    c = J(c = q(c, [0, e.charCodeAt(n + 8)]), l), a = q(a, c = J(c = U(c, 33), u));
                case 8:
                    s = q(s, Q([0, e.charCodeAt(n + 7)], 56));
                case 7:
                    s = q(s, Q([0, e.charCodeAt(n + 6)], 48));
                case 6:
                    s = q(s, Q([0, e.charCodeAt(n + 5)], 40));
                case 5:
                    s = q(s, Q([0, e.charCodeAt(n + 4)], 32));
                case 4:
                    s = q(s, Q([0, e.charCodeAt(n + 3)], 24));
                case 3:
                    s = q(s, Q([0, e.charCodeAt(n + 2)], 16));
                case 2:
                    s = q(s, Q([0, e.charCodeAt(n + 1)], 8));
                case 1:
                    s = J(s = q(s, [0, e.charCodeAt(n)]), u), i = q(i, s = J(s = U(s, 31), l))
            }
            return i = B(i = q(i, [0, e.length]), a = q(a, [0, e.length])), a = B(a, i), i = B(i = K(i), a = K(a)), a = B(a, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
        }(function(e) {
            for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
                var o = r[n],
                    i = e[o],
                    a = i.error ? "error" : JSON.stringify(i.value);
                t += (t ? "|" : "") + o.replace(/([:|\\])/g, "\\$1") + ":" + a
            }
            return t
        }(e))
    }

    function je(e) {
        return void 0 === e && (e = 50),
            function(e, t) {
                void 0 === t && (t = 1 / 0);
                var n = window.requestIdleCallback;
                return n ? new Promise(function(e) {
                    return n.call(window, function() {
                        return e()
                    }, {
                        timeout: t
                    })
                }) : Y(Math.min(e, t))
            }(e, 2 * e)
    }

    function Ve(c, u) {
        var l = Date.now();
        return {
            get: function(s) {
                return j(this, void 0, void 0, function() {
                    var o, i, a;
                    return V(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return o = Date.now(), [4, c()];
                            case 1:
                                return i = e.sent(), r = De(t = i), a = {
                                    get visitorId() {
                                        return void 0 === n && (n = We(this.components)), n
                                    },
                                    set visitorId(e) {
                                        n = e
                                    },
                                    confidence: r,
                                    components: t,
                                    version: X
                                }, (u || null != s && s.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: " + a.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (o - l) + "\nvisitorId: " + a.visitorId + "\ncomponents: " + Pe(i) + "\n```"), [2, a]
                        }
                        var t, n, r
                    })
                })
            }
        }
    }

    function Ge(e) {
        return e.href.split(/(&|\?)?utm_content/)[0]
    }

    function Xe(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : window.location,
            n = function(e) {
                return (0 < arguments.length && void 0 !== e ? e : window.location).hostname.replace("www.", "")
            }(t),
            r = Qe[n];
        return r ? r(t) : t.href
    }

    function Ye(e) {
        return sessionStorage.getItem(e)
    }

    function Ze(e) {
        return sessionStorage.setItem(e, k())
    }

    function He(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = t.location,
            r = void 0 === n ? window.location : n,
            o = t.referrer,
            i = void 0 === o ? document.referrer : o;
        return function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : window.location;
            return /utm_source=(facebook|fb)/.test(t)
        }(r) || /fbclid/i.test(r) || /\.facebook\./i.test(i)
    }

    function ze(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = t.location,
            r = void 0 === n ? window.location : n,
            o = t.referrer,
            i = void 0 === o ? document.referrer : o,
            a = t.html,
            s = void 0 === a ? document.documentElement.innerHTML : a,
            c = t.ids,
            u = void 0 === c ? [] : c;
        return !He({
            location: r,
            referrer: i
        }) || (F.log("FACEBOOK: is coming from facebook"), window.fbq ? function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                n = t.clientIDS,
                r = t.eventName,
                o = void 0 === r ? "ClickCease Protection – Invalid User" : r;
            F.log("FACEBOOK: fbq", window.fbq), n.forEach(function(e) {
                window.fbq("init", e)
            }), F.log("FACEBOOK: Init users", n), window.fbq("trackCustom", o), F.log("FACEBOOK: Sent event:", "[".concat(o, "]"), "to", n)
        }({
            clientIDS: u || function(e) {
                return ((0 < arguments.length && void 0 !== e ? e : document.documentElement.innerHTML).match(it) || []).map(function(e, t) {
                    return l(e.match(ot) || [], 2)[1]
                })
            }(s)
        }) : F.log("FACEBOOK: has not facebook script"), 1)
    }
    var Be, Je = {
            load: function(e) {
                var t = void 0 === e ? {} : e,
                    n = t.delayFallback,
                    r = t.debug,
                    o = t.monitoring,
                    i = void 0 === o || o;
                return j(this, void 0, void 0, function() {
                    return V(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return i && function() {
                                    if (!(window.__fpjs_d_m || .001 <= Math.random())) try {
                                        var e = new XMLHttpRequest;
                                        e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v" + X + "/npm-monitoring", !0), e.send()
                                    } catch (e) {
                                        console.error(e)
                                    }
                                }(), [4, je(n)];
                            case 1:
                                return e.sent(), [2, Ve(ae(Ae, {
                                    debug: r
                                }, []), r)]
                        }
                    })
                })
            },
            hashComponents: We,
            componentsToDebugString: Pe
        }.load(),
        Ue = function() {
            var e = i(T().mark(function e() {
                var t;
                return T().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (Be) return e.abrupt("return", Be);
                            e.next = 2;
                            break;
                        case 2:
                            return e.next = 4, Je;
                        case 4:
                            return t = e.sent, e.next = 7, t.get();
                        case 7:
                            return Be = e.sent, e.abrupt("return", Be);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Qe = {
            "discounttire.com": Ge,
            "americastire.com": Ge
        },
        qe = {
            BROWSER_NOT_SUPPORTED: 0,
            BROWSER_COOCKIES_DISABLED: 1
        },
        Ke = new(function() {
            function e() {
                a(this, e), this.events = [], this.fingerprint = 0
            }
            var t, n, r, o;
            return s(e, [{
                key: "ccai",
                get: function() {
                    return sessionStorage.getItem(M)
                },
                set: function(e) {
                    return sessionStorage.setItem(M, e)
                }
            }, {
                key: "generateFP",
                value: (o = i(T().mark(function e() {
                    var t;
                    return T().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Ue();
                            case 2:
                                return t = e.sent, e.abrupt("return", t.visitorId);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function() {
                    return o.apply(this, arguments)
                })
            }, {
                key: "genStatsV2Body",
                value: (r = i(T().mark(function e() {
                    var t, n, r = arguments;
                    return T().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = (0 < r.length && void 0 !== r[0] ? r[0] : {}).fp, e.next = 3, this.generateFP();
                            case 3:
                                if (e.t1 = e.sent, e.t1) {
                                    e.next = 6;
                                    break
                                }
                                e.t1 = t;
                            case 6:
                                if (e.t0 = e.t1, e.t0) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 10, k();
                            case 10:
                                e.t0 = e.sent;
                            case 11:
                                return n = e.t0, e.abrupt("return", {
                                    referrer: decodeURI(document.referrer),
                                    Fp: n,
                                    href: Xe(window.location),
                                    ccai: this.ccai
                                });
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return r.apply(this, arguments)
                })
            }, {
                key: "getStatsV2",
                value: (n = i(T().mark(function e() {
                    var r;
                    return T().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.genStatsV2Body();
                            case 2:
                                return r = e.sent, e.abrupt("return", new Promise(function(e, t) {
                                    var n = new XMLHttpRequest;
                                    n.open("POST", "https://monitor.clickcease.com/monitor/api/statsV2?type=object", !0), n.onreadystatechange = function() {
                                        4 === n.readyState && (e(n.response), F.timeEnd("start -> clientAuth[RES]"))
                                    }, n.send(JSON.stringify(r)), F.timeEnd("start -> clientAuth[REQ]")
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "stop",
                value: (t = i(T().mark(function e() {
                    var r = arguments;
                    return T().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = 0 < r.length && void 0 !== r[0] ? r[0] : 0, n = Object.keys(qe)[t], F.log("Engine stop reason : ".concat(n)), this.getStatsV2();
                            case 3:
                            case "end":
                                return e.stop()
                        }
                        var t, n
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }]), e
        }()),
        $e = function(te) {
            var Y, e, ne = function() {
                return (ne = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function re(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function ie() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(oe(arguments[t]));
                return e
            }

            function G(e) {
                return e.nodeType === e.ELEMENT_NODE
            }

            function X(e) {
                var t = null === e || void 0 === e ? void 0 : e.host;
                return Boolean(t && t.shadowRoot && t.shadowRoot === e)
            }

            function ae(e) {
                var t = e.maskInputOptions,
                    n = e.tagName,
                    r = e.type,
                    o = e.value,
                    i = e.maskInputFn,
                    a = o || "";
                return (t[n.toLowerCase()] || t[r]) && (a = i ? i(a) : "*".repeat(a.length)), a
            }(e = Y = Y || {})[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
            var Z, H, z = "__rrweb_original__",
                B = 1,
                J = new RegExp("[^a-z0-9-_:]");

            function U(e) {
                try {
                    var t = e.rules || e.cssRules;
                    return t ? Array.from(t).map(n).join("") : null
                } catch (e) {
                    return null
                }
            }

            function n(e) {
                var t = e.cssText;
                if ("styleSheet" in e) try {
                    t = U(e.styleSheet) || t
                } catch (e) {}
                return t
            }
            var t = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                m = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
                v = /^(data:)([^,]*),(.*)/i;

            function Q(e, h) {
                return (e || "").replace(t, function(e, t, n, r, o, i) {
                    var a, s = n || o || i,
                        c = t || r || "";
                    if (!s) return e;
                    if (!m.test(s)) return "url(" + c + s + c + ")";
                    if (v.test(s)) return "url(" + c + s + c + ")";
                    if ("/" === s[0]) return "url(" + c + ((-1 < (a = h).indexOf("//") ? a.split("/").slice(0, 3).join("/") : a.split("/")[0]).split("?")[0] + s) + c + ")";
                    var u = h.split("/"),
                        l = s.split("/");
                    u.pop();
                    for (var d = 0, f = l; d < f.length; d++) {
                        var p = f[d];
                        "." !== p && (".." === p ? u.pop() : u.push(p))
                    }
                    return "url(" + c + u.join("/") + c + ")"
                })
            }
            var u = /^[^ \t\n\r\u000c]+/,
                l = /^[, \t\n\r\u000c]+/;

            function d(e, t) {
                if (!t || "" === t.trim()) return t;
                var n = e.createElement("a");
                return n.href = t, n.href
            }

            function q() {
                var e = document.createElement("a");
                return e.href = "", e.href
            }

            function K(e, t, n, r) {
                return !("src" === n || "href" === n && r || "xlink:href" === n && r && "#" !== r[0] || "background" === n && r && ("table" === t || "td" === t || "th" === t)) ? "srcset" === n && r ? function(e, r) {
                    if ("" === r.trim()) return r;
                    var o = 0;

                    function t(e) {
                        var t, n = e.exec(r.substring(o));
                        return n ? (t = n[0], o += t.length, t) : ""
                    }
                    for (var n = []; t(l), !(o >= r.length);) {
                        var i = t(u);
                        if ("," === i.slice(-1)) i = d(e, i.substring(0, i.length - 1)), n.push(i);
                        else {
                            var a = "";
                            i = d(e, i);
                            for (var s = !1;;) {
                                var c = r.charAt(o);
                                if ("" === c) {
                                    n.push((i + a).trim());
                                    break
                                }
                                if (s) ")" === c && (s = !1);
                                else {
                                    if ("," === c) {
                                        o += 1, n.push((i + a).trim());
                                        break
                                    }
                                    "(" === c && (s = !0)
                                }
                                a += c, o += 1
                            }
                        }
                    }
                    return n.join(", ")
                }(e, r) : "style" === n && r ? Q(r, q()) : "object" === t && "data" === n && r ? d(e, r) : r : d(e, r)
            }

            function $(e, t, n) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return e.nodeType, e.TEXT_NODE, $(e.parentNode, t, n);
                if ("string" == typeof t) {
                    if (e.classList.contains(t)) return !0
                } else e.classList.forEach(function(e) {
                    if (t.test(e)) return !0
                });
                return !(!n || !e.matches(n)) || $(e.parentNode, t, n)
            }

            function ee(e) {
                return void 0 === e ? "" : e.toLowerCase()
            }

            function se(n, e) {
                var t, r = e.doc,
                    o = e.map,
                    i = e.blockClass,
                    a = e.blockSelector,
                    s = e.maskTextClass,
                    c = e.maskTextSelector,
                    u = e.skipChild,
                    l = void 0 !== u && u,
                    d = e.inlineStylesheet,
                    f = void 0 === d || d,
                    p = e.maskInputOptions,
                    h = void 0 === p ? {} : p,
                    m = e.maskTextFn,
                    v = e.maskInputFn,
                    y = e.slimDOMOptions,
                    g = e.dataURLOptions,
                    b = void 0 === g ? {} : g,
                    w = e.inlineImages,
                    S = void 0 !== w && w,
                    x = e.recordCanvas,
                    E = void 0 !== x && x,
                    I = e.onSerialize,
                    k = e.onIframeLoad,
                    C = e.iframeLoadTimeout,
                    T = void 0 === C ? 5e3 : C,
                    M = e.keepIframeSrcFn,
                    L = void 0 === M ? function() {
                        return !1
                    } : M,
                    _ = e.preserveWhiteSpace,
                    R = void 0 === _ || _,
                    N = function(t, e) {
                        var n, r, o, i = e.doc,
                            a = e.blockClass,
                            s = e.blockSelector,
                            c = e.maskTextClass,
                            u = e.maskTextSelector,
                            l = e.inlineStylesheet,
                            d = e.maskInputOptions,
                            f = void 0 === d ? {} : d,
                            p = e.maskTextFn,
                            h = e.maskInputFn,
                            m = e.dataURLOptions,
                            v = void 0 === m ? {} : m,
                            y = e.inlineImages,
                            g = e.recordCanvas,
                            b = e.keepIframeSrcFn;
                        if (i.__sn) {
                            var w = i.__sn.id;
                            r = 1 === w ? void 0 : w
                        }
                        switch (t.nodeType) {
                            case t.DOCUMENT_NODE:
                                return "CSS1Compat" !== t.compatMode ? {
                                    type: Y.Document,
                                    childNodes: [],
                                    compatMode: t.compatMode,
                                    rootId: r
                                } : {
                                    type: Y.Document,
                                    childNodes: [],
                                    rootId: r
                                };
                            case t.DOCUMENT_TYPE_NODE:
                                return {
                                    type: Y.DocumentType,
                                    name: t.name,
                                    publicId: t.publicId,
                                    systemId: t.systemId,
                                    rootId: r
                                };
                            case t.ELEMENT_NODE:
                                for (var S = function(e, t, n) {
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (var r = 0; r < e.classList.length; r++) {
                                                var o = e.classList[r];
                                                if (t.test(o)) return !0
                                            }
                                        return !!n && e.matches(n)
                                    }(t, a, s), x = function() {
                                        if (t instanceof HTMLFormElement) return "form";
                                        var e = t.tagName.toLowerCase().trim();
                                        return J.test(e) ? "div" : e
                                    }(), E = {}, I = 0, k = Array.from(t.attributes); I < k.length; I++) {
                                    var C = k[I],
                                        T = C.name,
                                        M = C.value;
                                    E[T] = K(i, x, T, M)
                                }
                                if ("link" === x && l) {
                                    var L = Array.from(i.styleSheets).find(function(e) {
                                            return e.href === t.href
                                        }),
                                        _ = null;
                                    L && (_ = U(L)), _ && (delete E.rel, delete E.href, E._cssText = Q(_, L.href))
                                }
                                if ("style" === x && t.sheet && !(t.innerText || t.textContent || "").trim().length && (_ = U(t.sheet)) && (E._cssText = Q(_, q())), "input" !== x && "textarea" !== x && "select" !== x || (M = t.value, "radio" !== E.type && "checkbox" !== E.type && "submit" !== E.type && "button" !== E.type && M ? E.value = ae({
                                        type: E.type,
                                        tagName: x,
                                        value: M,
                                        maskInputOptions: f,
                                        maskInputFn: h
                                    }) : t.checked && (E.checked = t.checked)), "option" === x && (t.selected && !f.select ? E.selected = !0 : delete E.selected), "canvas" === x && g)
                                    if ("2d" === t.__context) ! function(e) {
                                        var t = e.getContext("2d");
                                        if (!t) return 1;
                                        for (var n = 0; n < e.width; n += 50)
                                            for (var r = 0; r < e.height; r += 50) {
                                                var o = t.getImageData,
                                                    i = z in o ? o.__rrweb_original__ : o;
                                                if (new Uint32Array(i.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(function(e) {
                                                        return 0 !== e
                                                    })) return
                                            }
                                        return 1
                                    }(t) && (E.rr_dataURL = t.toDataURL(v.type, v.quality));
                                    else if (!("__context" in t)) {
                                    var R = t.toDataURL(v.type, v.quality),
                                        N = document.createElement("canvas");
                                    N.width = t.width, N.height = t.height, R !== N.toDataURL(v.type, v.quality) && (E.rr_dataURL = R)
                                }
                                if ("img" === x && y) {
                                    Z || (Z = i.createElement("canvas"), H = Z.getContext("2d"));
                                    var O = t,
                                        A = O.crossOrigin;
                                    O.crossOrigin = "anonymous";
                                    var F = function() {
                                        try {
                                            Z.width = O.naturalWidth, Z.height = O.naturalHeight, H.drawImage(O, 0, 0), E.rr_dataURL = Z.toDataURL(v.type, v.quality)
                                        } catch (e) {
                                            console.warn("Cannot inline img src=" + O.currentSrc + "! Error: " + e)
                                        }
                                        A ? E.crossOrigin = A : delete E.crossOrigin
                                    };
                                    O.complete && 0 !== O.naturalWidth ? F() : O.onload = F
                                }
                                if ("audio" !== x && "video" !== x || (E.rr_mediaState = t.paused ? "paused" : "played", E.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (E.rr_scrollLeft = t.scrollLeft), t.scrollTop && (E.rr_scrollTop = t.scrollTop), S) {
                                    var D = t.getBoundingClientRect(),
                                        P = D.width,
                                        W = D.height;
                                    E = {
                                        class: E.class,
                                        rr_width: P + "px",
                                        rr_height: W + "px"
                                    }
                                }
                                return "iframe" !== x || b(E.src) || (t.contentDocument || (E.rr_src = E.src), delete E.src), {
                                    type: Y.Element,
                                    tagName: x,
                                    attributes: E,
                                    childNodes: [],
                                    isSVG: Boolean("svg" === t.tagName || t.ownerSVGElement) || void 0,
                                    needBlock: S,
                                    rootId: r
                                };
                            case t.TEXT_NODE:
                                var j = t.parentNode && t.parentNode.tagName,
                                    V = t.textContent,
                                    G = "STYLE" === j || void 0,
                                    X = "SCRIPT" === j || void 0;
                                if (G && V) {
                                    try {
                                        null !== (n = t.parentNode.sheet) && void 0 !== n && n.cssRules && (V = (o = t.parentNode.sheet).cssRules ? Array.from(o.cssRules).map(function(e) {
                                            return e.cssText || ""
                                        }).join("") : "")
                                    } catch (e) {
                                        console.warn("Cannot get CSS styles from text's parentNode. Error: " + e, t)
                                    }
                                    V = Q(V, q())
                                }
                                return X && (V = "SCRIPT_PLACEHOLDER"), !G && !X && $(t, c, u) && V && (V = p ? p(V) : V.replace(/[\S]/g, "*")), {
                                    type: Y.Text,
                                    textContent: V || "",
                                    isStyle: G,
                                    rootId: r
                                };
                            case t.CDATA_SECTION_NODE:
                                return {
                                    type: Y.CDATA,
                                    textContent: "",
                                    rootId: r
                                };
                            case t.COMMENT_NODE:
                                return {
                                    type: Y.Comment,
                                    textContent: t.textContent || "",
                                    rootId: r
                                };
                            default:
                                return !1
                        }
                    }(n, {
                        doc: r,
                        blockClass: i,
                        blockSelector: a,
                        maskTextClass: s,
                        maskTextSelector: c,
                        inlineStylesheet: f,
                        maskInputOptions: h,
                        maskTextFn: m,
                        maskInputFn: v,
                        dataURLOptions: b,
                        inlineImages: S,
                        recordCanvas: E,
                        keepIframeSrcFn: L
                    });
                if (!N) return console.warn(n, "not serialized"), null;
                t = "__sn" in n ? n.__sn.id : ! function(e, t) {
                    if (t.comment && e.type === Y.Comment) return 1;
                    if (e.type === Y.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && "preload" === e.attributes.rel && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js"))) return 1;
                        if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (ee(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ee(e.attributes.name) || "icon" === ee(e.attributes.rel) || "apple-touch-icon" === ee(e.attributes.rel) || "shortcut icon" === ee(e.attributes.rel)))) return 1;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && ee(e.attributes.name).match(/^description|keywords$/)) return 1;
                            if (t.headMetaSocial && (ee(e.attributes.property).match(/^(og|twitter|fb):/) || ee(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === ee(e.attributes.name))) return 1;
                            if (t.headMetaRobots && ("robots" === ee(e.attributes.name) || "googlebot" === ee(e.attributes.name) || "bingbot" === ee(e.attributes.name))) return 1;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return 1;
                            if (t.headMetaAuthorship && ("author" === ee(e.attributes.name) || "generator" === ee(e.attributes.name) || "framework" === ee(e.attributes.name) || "publisher" === ee(e.attributes.name) || "progid" === ee(e.attributes.name) || ee(e.attributes.property).match(/^article:/) || ee(e.attributes.property).match(/^product:/))) return 1;
                            if (t.headMetaVerification && ("google-site-verification" === ee(e.attributes.name) || "yandex-verification" === ee(e.attributes.name) || "csrf-token" === ee(e.attributes.name) || "p:domain_verify" === ee(e.attributes.name) || "verify-v1" === ee(e.attributes.name) || "verification" === ee(e.attributes.name) || "shopify-checkout-api-token" === ee(e.attributes.name))) return 1
                        }
                    }
                }(N, y) && (R || N.type !== Y.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? B++ : -2;
                var O = Object.assign(N, {
                    id: t
                });
                if (n.__sn = O, -2 === t) return null;
                o[t] = n, I && I(n);
                var A = !l;
                if (O.type === Y.Element && (A = A && !O.needBlock, delete O.needBlock), (O.type === Y.Document || O.type === Y.Element) && A) {
                    y.headWhitespace && N.type === Y.Element && "head" === N.tagName && (R = !1);
                    for (var F = {
                            doc: r,
                            map: o,
                            blockClass: i,
                            blockSelector: a,
                            maskTextClass: s,
                            maskTextSelector: c,
                            skipChild: l,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskTextFn: m,
                            maskInputFn: v,
                            slimDOMOptions: y,
                            dataURLOptions: b,
                            inlineImages: S,
                            recordCanvas: E,
                            preserveWhiteSpace: R,
                            onSerialize: I,
                            onIframeLoad: k,
                            iframeLoadTimeout: T,
                            keepIframeSrcFn: L
                        }, D = 0, P = Array.from(n.childNodes); D < P.length; D++)(V = se(P[D], F)) && O.childNodes.push(V);
                    if (G(n) && n.shadowRoot) {
                        O.isShadowHost = !0;
                        for (var W = 0, j = Array.from(n.shadowRoot.childNodes); W < j.length; W++) {
                            var V;
                            (V = se(j[W], F)) && (V.isShadow = !0, O.childNodes.push(V))
                        }
                    }
                }
                return n.parentNode && X(n.parentNode) && (O.isShadow = !0), O.type === Y.Element && "iframe" === O.tagName && function(e, t, n) {
                    var r = e.contentWindow;
                    if (r) {
                        var o, i = !1;
                        try {
                            o = r.document.readyState
                        } catch (e) {
                            return
                        }
                        if ("complete" === o) {
                            var a = "about:blank";
                            r.location.href === a && e.src !== a && "" !== e.src ? e.addEventListener("load", t) : setTimeout(t, 0)
                        } else {
                            var s = setTimeout(function() {
                                i || (t(), i = !0)
                            }, n);
                            e.addEventListener("load", function() {
                                clearTimeout(s), i = !0, t()
                            })
                        }
                    }
                }(n, function() {
                    var e = n.contentDocument;
                    if (e && k) {
                        var t = se(e, {
                            doc: e,
                            map: o,
                            blockClass: i,
                            blockSelector: a,
                            maskTextClass: s,
                            maskTextSelector: c,
                            skipChild: !1,
                            inlineStylesheet: f,
                            maskInputOptions: h,
                            maskTextFn: m,
                            maskInputFn: v,
                            slimDOMOptions: y,
                            dataURLOptions: b,
                            inlineImages: S,
                            recordCanvas: E,
                            preserveWhiteSpace: R,
                            onSerialize: I,
                            onIframeLoad: k,
                            iframeLoadTimeout: T,
                            keepIframeSrcFn: L
                        });
                        t && k(n, t)
                    }
                }, T), O
            }
            var C = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

            function s(o, n) {
                void 0 === n && (n = {});
                var r = 1,
                    i = 1;

                function a(e) {
                    var t = e.match(/\n/g);
                    t && (r += t.length);
                    var n = e.lastIndexOf("\n");
                    i = -1 === n ? i + e.length : e.length - n
                }

                function s() {
                    var t = {
                        line: r,
                        column: i
                    };
                    return function(e) {
                        return e.position = new c(t), m(), e
                    }
                }
                var c = function(e) {
                    this.start = e, this.end = {
                        line: r,
                        column: i
                    }, this.source = n.source
                };
                c.prototype.content = o;
                var u = [];

                function l(e) {
                    var t = new Error(n.source + ":" + r + ":" + i + ": " + e);
                    if (t.reason = e, t.filename = n.source, t.line = r, t.column = i, t.source = o, !n.silent) throw t;
                    u.push(t)
                }

                function d() {
                    return h(/^{\s*/)
                }

                function f() {
                    return h(/^}/)
                }

                function p() {
                    var e, t, n, r = [];
                    for (m(), v(r); o.length && "}" !== o.charAt(0) && (e = k() || (t = void 0, t = s(), (n = g()) ? (v(), t({
                            type: "rule",
                            selectors: n,
                            declarations: w()
                        })) : l("selector missing")));) !1 !== e && (r.push(e), v(r));
                    return r
                }

                function h(e) {
                    var t = e.exec(o);
                    if (t) {
                        var n = t[0];
                        return a(n), o = o.slice(n.length), t
                    }
                }

                function m() {
                    h(/^\s*/)
                }

                function v(e) {
                    var t;
                    for (void 0 === e && (e = []); t = y();) !1 !== t && e.push(t), t = y();
                    return e
                }

                function y() {
                    var e = s();
                    if ("/" === o.charAt(0) && "*" === o.charAt(1)) {
                        for (var t = 2;
                            "" !== o.charAt(t) && ("*" !== o.charAt(t) || "/" !== o.charAt(t + 1));) ++t;
                        if (t += 2, "" === o.charAt(t - 1)) return l("End of comment missing");
                        var n = o.slice(2, t - 2);
                        return i += 2, a(n), o = o.slice(t), i += 2, e({
                            type: "comment",
                            comment: n
                        })
                    }
                }

                function g() {
                    var e = h(/^([^{]+)/);
                    if (e) return T(e[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(e) {
                        return e.replace(/,/g, "‌")
                    }).split(/\s*(?![^(]*\)),\s*/).map(function(e) {
                        return e.replace(/\u200C/g, ",")
                    })
                }

                function b() {
                    var e = s(),
                        t = h(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
                    if (t) {
                        var n = T(t[0]);
                        if (!h(/^:\s*/)) return l("property missing ':'");
                        var r = h(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
                            o = e({
                                type: "declaration",
                                property: n.replace(C, ""),
                                value: r ? T(r[0]).replace(C, "") : ""
                            });
                        return h(/^[;\s]*/), o
                    }
                }

                function w() {
                    var e, t = [];
                    if (!d()) return l("missing '{'");
                    for (v(t); e = b();) !1 !== e && (t.push(e), v(t)), e = b();
                    return f() ? t : l("missing '}'")
                }

                function S() {
                    for (var e, t = [], n = s(); e = h(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), h(/^,\s*/);
                    if (t.length) return n({
                        type: "keyframe",
                        values: t,
                        declarations: w()
                    })
                }
                var e, t = I("import"),
                    x = I("charset"),
                    E = I("namespace");

                function I(r) {
                    var o = new RegExp("^@" + r + "\\s*([^;]+);");
                    return function() {
                        var e = s(),
                            t = h(o);
                        if (t) {
                            var n = {
                                type: r
                            };
                            return n[r] = t[1].trim(), e(n)
                        }
                    }
                }

                function k() {
                    if ("@" === o[0]) return function() {
                        var e = s(),
                            t = h(/^@([-\w]+)?keyframes\s*/);
                        if (t) {
                            var n = t[1];
                            if (!(t = h(/^([-\w]+)\s*/))) return l("@keyframes missing name");
                            var r, o = t[1];
                            if (!d()) return l("@keyframes missing '{'");
                            for (var i = v(); r = S();) i.push(r), i = i.concat(v());
                            return f() ? e({
                                type: "keyframes",
                                name: o,
                                vendor: n,
                                keyframes: i
                            }) : l("@keyframes missing '}'")
                        }
                    }() || function() {
                        var e = s(),
                            t = h(/^@media *([^{]+)/);
                        if (t) {
                            var n = T(t[1]);
                            if (!d()) return l("@media missing '{'");
                            var r = v().concat(p());
                            return f() ? e({
                                type: "media",
                                media: n,
                                rules: r
                            }) : l("@media missing '}'")
                        }
                    }() || function() {
                        var e = s(),
                            t = h(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                        if (t) return e({
                            type: "custom-media",
                            name: T(t[1]),
                            media: T(t[2])
                        })
                    }() || function() {
                        var e = s(),
                            t = h(/^@supports *([^{]+)/);
                        if (t) {
                            var n = T(t[1]);
                            if (!d()) return l("@supports missing '{'");
                            var r = v().concat(p());
                            return f() ? e({
                                type: "supports",
                                supports: n,
                                rules: r
                            }) : l("@supports missing '}'")
                        }
                    }() || t() || x() || E() || function() {
                        var e = s(),
                            t = h(/^@([-\w]+)?document *([^{]+)/);
                        if (t) {
                            var n = T(t[1]),
                                r = T(t[2]);
                            if (!d()) return l("@document missing '{'");
                            var o = v().concat(p());
                            return f() ? e({
                                type: "document",
                                document: r,
                                vendor: n,
                                rules: o
                            }) : l("@document missing '}'")
                        }
                    }() || function() {
                        var e = s();
                        if (h(/^@page */)) {
                            var t = g() || [];
                            if (!d()) return l("@page missing '{'");
                            for (var n, r = v(); n = b();) r.push(n), r = r.concat(v());
                            return f() ? e({
                                type: "page",
                                selectors: t,
                                declarations: r
                            }) : l("@page missing '}'")
                        }
                    }() || function() {
                        var e = s();
                        if (h(/^@host\s*/)) {
                            if (!d()) return l("@host missing '{'");
                            var t = v().concat(p());
                            return f() ? e({
                                type: "host",
                                rules: t
                            }) : l("@host missing '}'")
                        }
                    }() || function() {
                        var e = s();
                        if (h(/^@font-face\s*/)) {
                            if (!d()) return l("@font-face missing '{'");
                            for (var t, n = v(); t = b();) n.push(t), n = n.concat(v());
                            return f() ? e({
                                type: "font-face",
                                declarations: n
                            }) : l("@font-face missing '}'")
                        }
                    }()
                }
                return function t(e, n) {
                    for (var r = e && "string" == typeof e.type, o = r ? e : n, i = 0, a = Object.keys(e); i < a.length; i++) {
                        var s = e[a[i]];
                        Array.isArray(s) ? s.forEach(function(e) {
                            t(e, o)
                        }) : s && "object" == Wt(s) && t(s, o)
                    }
                    return r && Object.defineProperty(e, "parent", {
                        configurable: !0,
                        writable: !0,
                        enumerable: !1,
                        value: n || null
                    }), e
                }((e = p(), {
                    type: "stylesheet",
                    stylesheet: {
                        source: n.source,
                        rules: e,
                        parsingErrors: u
                    }
                }))
            }

            function T(e) {
                return e ? e.replace(/^\s+|\s+$/g, "") : ""
            }
            var r, o, i, w, a, c, f, p, y = {
                    script: "noscript",
                    altglyph: "altGlyph",
                    altglyphdef: "altGlyphDef",
                    altglyphitem: "altGlyphItem",
                    animatecolor: "animateColor",
                    animatemotion: "animateMotion",
                    animatetransform: "animateTransform",
                    clippath: "clipPath",
                    feblend: "feBlend",
                    fecolormatrix: "feColorMatrix",
                    fecomponenttransfer: "feComponentTransfer",
                    fecomposite: "feComposite",
                    feconvolvematrix: "feConvolveMatrix",
                    fediffuselighting: "feDiffuseLighting",
                    fedisplacementmap: "feDisplacementMap",
                    fedistantlight: "feDistantLight",
                    fedropshadow: "feDropShadow",
                    feflood: "feFlood",
                    fefunca: "feFuncA",
                    fefuncb: "feFuncB",
                    fefuncg: "feFuncG",
                    fefuncr: "feFuncR",
                    fegaussianblur: "feGaussianBlur",
                    feimage: "feImage",
                    femerge: "feMerge",
                    femergenode: "feMergeNode",
                    femorphology: "feMorphology",
                    feoffset: "feOffset",
                    fepointlight: "fePointLight",
                    fespecularlighting: "feSpecularLighting",
                    fespotlight: "feSpotLight",
                    fetile: "feTile",
                    feturbulence: "feTurbulence",
                    foreignobject: "foreignObject",
                    glyphref: "glyphRef",
                    lineargradient: "linearGradient",
                    radialgradient: "radialGradient"
                },
                h = /([^\\]):hover/,
                g = new RegExp(h.source, "g");

            function b(e, t) {
                var n = null == t ? void 0 : t.stylesWithHoverClass.get(e);
                if (n) return n;
                var r = s(e, {
                    silent: !0
                });
                if (!r.stylesheet) return e;
                var o = [];
                if (r.stylesheet.rules.forEach(function(e) {
                        "selectors" in e && (e.selectors || []).forEach(function(e) {
                            h.test(e) && o.push(e)
                        })
                    }), 0 === o.length) return e;
                var i = new RegExp(o.filter(function(e, t) {
                        return o.indexOf(e) === t
                    }).sort(function(e, t) {
                        return t.length - e.length
                    }).map(function(e) {
                        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                    }).join("|"), "g"),
                    a = e.replace(i, function(e) {
                        var t = e.replace(g, "$1.\\:hover");
                        return e + ", " + t
                    });
                return null == t || t.stylesWithHoverClass.set(e, a), a
            }

            function S() {
                return {
                    stylesWithHoverClass: new Map
                }
            }

            function x(e, t) {
                var n = t.doc,
                    r = t.map,
                    o = t.skipChild,
                    i = void 0 !== o && o,
                    a = t.hackCss,
                    s = void 0 === a || a,
                    c = t.afterAppend,
                    u = t.cache,
                    l = function(l, e) {
                        var t, d = e.doc,
                            f = e.hackCss,
                            p = e.cache;
                        switch (l.type) {
                            case Y.Document:
                                return d.implementation.createDocument(null, "", null);
                            case Y.DocumentType:
                                return d.implementation.createDocumentType(l.name || "html", l.publicId, l.systemId);
                            case Y.Element:
                                var h, m = ("link" === (t = y[l.tagName] ? y[l.tagName] : l.tagName) && l.attributes._cssText && (t = "style"), t);
                                h = l.isSVG ? d.createElementNS("http://www.w3.org/2000/svg", m) : d.createElement(m);
                                var n = function(e) {
                                    if (!l.attributes.hasOwnProperty(e)) return "continue";
                                    var t = l.attributes[e];
                                    if ("option" === m && "selected" === e && !1 === t) return "continue";
                                    if (t = "boolean" == typeof t || "number" == typeof t ? "" : t, e.startsWith("rr_")) {
                                        if ("canvas" === m && "rr_dataURL" === e) {
                                            var n = document.createElement("img");
                                            n.src = t, n.onload = function() {
                                                var e = h.getContext("2d");
                                                e && e.drawImage(n, 0, 0, n.width, n.height)
                                            }
                                        } else if ("img" === m && "rr_dataURL" === e) {
                                            var r = h;
                                            r.currentSrc.startsWith("data:") || (r.setAttribute("rrweb-original-src", l.attributes.src), r.src = t)
                                        }
                                        if ("rr_width" === e) h.style.width = t;
                                        else if ("rr_height" === e) h.style.height = t;
                                        else if ("rr_mediaCurrentTime" === e) h.currentTime = l.attributes.rr_mediaCurrentTime;
                                        else if ("rr_mediaState" === e) switch (t) {
                                            case "played":
                                                h.play().catch(function(e) {
                                                    return console.warn("media playback error", e)
                                                });
                                                break;
                                            case "paused":
                                                h.pause()
                                        }
                                    } else {
                                        var o = "textarea" === m && "value" === e,
                                            i = "style" === m && "_cssText" === e;
                                        if (i && f && (t = b(t, p)), o || i) {
                                            for (var a = d.createTextNode(t), s = 0, c = Array.from(h.childNodes); s < c.length; s++) {
                                                var u = c[s];
                                                u.nodeType === h.TEXT_NODE && h.removeChild(u)
                                            }
                                            return h.appendChild(a), "continue"
                                        }
                                        try {
                                            if (l.isSVG && "xlink:href" === e) h.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
                                            else if ("onload" === e || "onclick" === e || "onmouse" === e.substring(0, 7)) h.setAttribute("_" + e, t);
                                            else {
                                                if ("meta" === m && "Content-Security-Policy" === l.attributes["http-equiv"] && "content" === e) return h.setAttribute("csp-content", t), "continue";
                                                "link" === m && "preload" === l.attributes.rel && "script" === l.attributes.as || "link" === m && "prefetch" === l.attributes.rel && "string" == typeof l.attributes.href && l.attributes.href.endsWith(".js") || ("img" === m && l.attributes.srcset && l.attributes.rr_dataURL ? h.setAttribute("rrweb-original-srcset", l.attributes.srcset) : h.setAttribute(e, t))
                                            }
                                        } catch (e) {}
                                    }
                                };
                                for (var r in l.attributes) n(r);
                                if (l.isShadowHost)
                                    if (h.shadowRoot)
                                        for (; h.shadowRoot.firstChild;) h.shadowRoot.removeChild(h.shadowRoot.firstChild);
                                    else h.attachShadow({
                                        mode: "open"
                                    });
                                return h;
                            case Y.Text:
                                return d.createTextNode(l.isStyle && f ? b(l.textContent, p) : l.textContent);
                            case Y.CDATA:
                                return d.createCDATASection(l.textContent);
                            case Y.Comment:
                                return d.createComment(l.textContent);
                            default:
                                return null
                        }
                    }(e, {
                        doc: n,
                        hackCss: s,
                        cache: u
                    });
                if (!l) return null;
                if (e.rootId && console.assert(r[e.rootId] === n, "Target document should has the same root id."), e.type === Y.Document && (n.close(), n.open(), "BackCompat" === e.compatMode && e.childNodes && e.childNodes[0].type !== Y.DocumentType && (e.childNodes[0].type === Y.Element && "xmlns" in e.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === e.childNodes[0].attributes.xmlns ? n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : n.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), l = n), r[(l.__sn = e).id] = l, (e.type === Y.Document || e.type === Y.Element) && !i)
                    for (var d = 0, f = e.childNodes; d < f.length; d++) {
                        var p = f[d],
                            h = x(p, {
                                doc: n,
                                map: r,
                                skipChild: !1,
                                hackCss: s,
                                afterAppend: c,
                                cache: u
                            });
                        h ? (p.isShadow && G(l) && l.shadowRoot ? l.shadowRoot.appendChild(h) : l.appendChild(h), c && c(h)) : console.warn("Failed to rebuild", p)
                    }
                return l
            }

            function E(e, t) {
                var n = t.doc,
                    r = t.onVisit,
                    o = t.hackCss,
                    i = {},
                    a = x(e, {
                        doc: n,
                        map: i,
                        skipChild: !1,
                        hackCss: void 0 === o || o,
                        afterAppend: t.afterAppend,
                        cache: t.cache
                    });
                return function(e) {
                    for (var t in e) e[t] && (o = e[t], r && r(o), function() {
                        var e = o.__sn;
                        if (e.type === Y.Element) {
                            var t = o;
                            for (var n in e.attributes)
                                if (e.attributes.hasOwnProperty(n) && n.startsWith("rr_")) {
                                    var r = e.attributes[n];
                                    "rr_scrollLeft" === n && (t.scrollLeft = r), "rr_scrollTop" === n && (t.scrollTop = r)
                                }
                        }
                    }());
                    var o
                }(i), [a, i]
            }

            function ce(e, t, n) {
                void 0 === n && (n = document);
                var r = {
                    capture: !0,
                    passive: !0
                };
                return n.addEventListener(e, t, r),
                    function() {
                        return n.removeEventListener(e, t, r)
                    }
            }
            te.EventType = void 0, (r = te.EventType || (te.EventType = {}))[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", te.IncrementalSource = void 0, (o = te.IncrementalSource || (te.IncrementalSource = {}))[o.Mutation = 0] = "Mutation", o[o.MouseMove = 1] = "MouseMove", o[o.MouseInteraction = 2] = "MouseInteraction", o[o.Scroll = 3] = "Scroll", o[o.ViewportResize = 4] = "ViewportResize", o[o.Input = 5] = "Input", o[o.TouchMove = 6] = "TouchMove", o[o.MediaInteraction = 7] = "MediaInteraction", o[o.StyleSheetRule = 8] = "StyleSheetRule", o[o.CanvasMutation = 9] = "CanvasMutation", o[o.Font = 10] = "Font", o[o.Log = 11] = "Log", o[o.Drag = 12] = "Drag", o[o.StyleDeclaration = 13] = "StyleDeclaration", te.MouseInteractions = void 0, (i = te.MouseInteractions || (te.MouseInteractions = {}))[i.MouseUp = 0] = "MouseUp", i[i.MouseDown = 1] = "MouseDown", i[i.Click = 2] = "Click", i[i.ContextMenu = 3] = "ContextMenu", i[i.DblClick = 4] = "DblClick", i[i.Focus = 5] = "Focus", i[i.Blur = 6] = "Blur", i[i.TouchStart = 7] = "TouchStart", i[i.TouchMove_Departed = 8] = "TouchMove_Departed", i[i.TouchEnd = 9] = "TouchEnd", i[i.TouchCancel = 10] = "TouchCancel", (p = w = w || {})[p["2D"] = 0] = "2D", p[p.WebGL = 1] = "WebGL", p[p.WebGL2 = 2] = "WebGL2", (f = a = a || {})[f.Play = 0] = "Play", f[f.Pause = 1] = "Pause", f[f.Seeked = 2] = "Seeked", f[f.VolumeChange = 3] = "VolumeChange", te.ReplayerEvents = void 0, (c = te.ReplayerEvents || (te.ReplayerEvents = {})).Start = "start", c.Pause = "pause", c.Resume = "resume", c.Resize = "resize", c.Finish = "finish", c.FullsnapshotRebuilded = "fullsnapshot-rebuilded", c.LoadStylesheetStart = "load-stylesheet-start", c.LoadStylesheetEnd = "load-stylesheet-end", c.SkipStart = "skip-start", c.SkipEnd = "skip-end", c.MouseInteraction = "mouse-interaction", c.EventCast = "event-cast", c.CustomEvent = "custom-event", c.Flush = "flush", c.StateChange = "state-change", c.PlayBack = "play-back";
            var I = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";

            function ue(i, a, s) {
                void 0 === s && (s = {});
                var c = null,
                    u = 0;
                return function(e) {
                    var t = Date.now();
                    u || !1 !== s.leading || (u = t);
                    var n = a - (t - u),
                        r = this,
                        o = arguments;
                    n <= 0 || a < n ? (c && (clearTimeout(c), c = null), u = t, i.apply(r, o)) : c || !1 === s.trailing || (c = setTimeout(function() {
                        u = !1 === s.leading ? 0 : Date.now(), c = null, i.apply(r, o)
                    }, n))
                }
            }

            function le(e, t, n, r, o) {
                void 0 === o && (o = window);
                var i = o.Object.getOwnPropertyDescriptor(e, t);
                return o.Object.defineProperty(e, t, r ? n : {
                        set: function(e) {
                            var t = this;
                            setTimeout(function() {
                                n.set.call(t, e)
                            }, 0), i && i.set && i.set.call(this, e)
                        }
                    }),
                    function() {
                        return le(e, t, i || {}, !0)
                    }
            }

            function de(e, t, n) {
                try {
                    if (!(t in e)) return function() {};
                    var r = e[t],
                        o = n(r);
                    return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                            __rrweb_original__: {
                                enumerable: !1,
                                value: r
                            }
                        })), e[t] = o,
                        function() {
                            e[t] = r
                        }
                } catch (e) {
                    return function() {}
                }
            }

            function fe() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function pe() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function he(e, t) {
                if (!e) return !1;
                if (e.nodeType !== e.ELEMENT_NODE) return e.nodeType, e.TEXT_NODE, he(e.parentNode, t);
                var n = !1;
                if ("string" == typeof t) {
                    if (void 0 !== e.closest) return null !== e.closest("." + t);
                    n = e.classList.contains(t)
                } else e.classList.forEach(function(e) {
                    t.test(e) && (n = !0)
                });
                return n || he(e.parentNode, t)
            }

            function k(e) {
                return "__sn" in e && -2 === e.__sn.id
            }

            function M(e, t) {
                if (X(e)) return !1;
                var n = t.getId(e);
                return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || M(e.parentNode, t))
            }

            function me(e) {
                return Boolean(e.changedTouches)
            }

            function ve(e) {
                void 0 === e && (e = window), "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = function(e) {
                    if (!(0 in arguments)) throw new TypeError("1 argument is required");
                    do {
                        if (this === e) return !0
                    } while (e = e && e.parentNode);
                    return !1
                })
            }
            te.mirror = {
                map: {},
                getId: function() {
                    return console.error(I), -1
                },
                getNode: function() {
                    return console.error(I), null
                },
                removeNodeFromMap: function() {
                    console.error(I)
                },
                has: function() {
                    return console.error(I), !1
                },
                reset: function() {
                    console.error(I)
                }
            }, "undefined" != typeof window && window.Proxy && window.Reflect && (te.mirror = new Proxy(te.mirror, {
                get: function(e, t, n) {
                    return "map" === t && console.error(I), Reflect.get(e, t, n)
                }
            }));
            var L = (_.prototype.add = function(e) {
                var t = this.indexes.get(e.parentId),
                    n = {
                        id: e.node.id,
                        mutation: e,
                        children: [],
                        texts: [],
                        attributes: []
                    };
                t ? (n.parent = t).children[n.id] = n : this.tree[n.id] = n, this.indexes.set(n.id, n)
            }, _.prototype.remove = function(r, o) {
                function i(e) {
                    a.removeIdSet.add(e.id), Object.values(e.children).forEach(function(e) {
                        return i(e)
                    });
                    var t = a.indexes.get(e.id);
                    if (t) {
                        var n = t.parent;
                        n && (delete t.parent, delete n.children[t.id], a.indexes.delete(r.id))
                    }
                }
                var a = this,
                    e = this.indexes.get(r.parentId),
                    t = this.indexes.get(r.id);
                t ? (e ? (delete t.parent, delete e.children[t.id], this.indexes.delete(r.id)) : (delete this.tree[t.id], this.indexes.delete(t.id)), i(t)) : (this.removeNodeMutations.push(r), function t(e) {
                    a.removeIdSet.add(e);
                    var n = o.getNode(e);
                    null == n || n.childNodes.forEach(function(e) {
                        "__sn" in e && t(e.__sn.id)
                    })
                }(r.id))
            }, _.prototype.text = function(e) {
                var t = this.indexes.get(e.id);
                t ? t.texts.push(e) : this.textMutations.push(e)
            }, _.prototype.attribute = function(e) {
                var t = this.indexes.get(e.id);
                t ? t.attributes.push(e) : this.attributeMutations.push(e)
            }, _.prototype.scroll = function(e) {
                this.scrollMap.set(e.id, e)
            }, _.prototype.input = function(e) {
                this.inputMap.set(e.id, e)
            }, _.prototype.flush = function() {
                var t, e, n, r, o = this,
                    i = this.tree,
                    a = this.removeNodeMutations,
                    s = this.textMutations,
                    c = this.attributeMutations,
                    u = {
                        source: te.IncrementalSource.Mutation,
                        removes: a,
                        texts: s,
                        attributes: c,
                        adds: []
                    };
                Object.values(i).forEach(function(e) {
                    return function t(e, n) {
                        n && o.removeIdSet.add(e.id), u.texts = u.texts.concat(n ? [] : e.texts).filter(function(e) {
                            return !o.removeIdSet.has(e.id)
                        }), u.attributes = u.attributes.concat(n ? [] : e.attributes).filter(function(e) {
                            return !o.removeIdSet.has(e.id)
                        }), o.removeIdSet.has(e.id) || o.removeIdSet.has(e.mutation.parentId) || n ? Object.values(e.children).forEach(function(e) {
                            return t(e, !0)
                        }) : (u.adds.push(e.mutation), e.children && Object.values(e.children).forEach(function(e) {
                            return t(e, !1)
                        }))
                    }(e, !1)
                });
                try {
                    for (var l = re(this.scrollMap.keys()), d = l.next(); !d.done; d = l.next()) {
                        var f = d.value;
                        this.removeIdSet.has(f) && this.scrollMap.delete(f)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        d && !d.done && (e = l.return) && e.call(l)
                    } finally {
                        if (t) throw t.error
                    }
                }
                try {
                    for (var p = re(this.inputMap.keys()), h = p.next(); !h.done; h = p.next()) f = h.value, this.removeIdSet.has(f) && this.inputMap.delete(f)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (r = p.return) && r.call(p)
                    } finally {
                        if (n) throw n.error
                    }
                }
                var m = new Map(this.scrollMap),
                    v = new Map(this.inputMap);
                return this.reset(), {
                    mutationData: u,
                    scrollMap: m,
                    inputMap: v
                }
            }, _.prototype.reset = function() {
                this.tree = [], this.indexes = new Map, this.removeNodeMutations = [], this.textMutations = [], this.attributeMutations = [], this.removeIdSet = new Set, this.scrollMap = new Map, this.inputMap = new Map
            }, _.prototype.idRemoved = function(e) {
                return this.removeIdSet.has(e)
            }, _);

            function _() {
                this.reset()
            }

            function R(e) {
                function t(e, t) {
                    var n = {
                        value: e,
                        parent: t,
                        children: []
                    };
                    return o[e.node.id] = n
                }
                var n, r, o = {},
                    i = [];
                try {
                    for (var a = re(e), s = a.next(); !s.done; s = a.next()) {
                        var c = s.value,
                            u = c.nextId,
                            l = c.parentId;
                        if (u && u in o) {
                            var d = o[u];
                            if (d.parent) {
                                var f = d.parent.children.indexOf(d);
                                d.parent.children.splice(f, 0, t(c, d.parent))
                            } else f = i.indexOf(d), i.splice(f, 0, t(c, null))
                        } else if (l in o) {
                            var p = o[l];
                            p.children.push(t(c, p))
                        } else i.push(t(c, null))
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = a.return) && r.call(a)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return i
            }

            function N(e, t) {
                t(e.value);
                for (var n = e.children.length - 1; 0 <= n; n--) N(e.children[n], t)
            }

            function ye(e) {
                return "__sn" in e && e.__sn.type === Y.Element && "iframe" === e.__sn.tagName
            }

            function O(e, t) {
                var n, r, o = null === (r = null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView) || void 0 === r ? void 0 : r.frameElement;
                if (!o || o === t) return {
                    x: 0,
                    y: 0,
                    relativeScale: 1,
                    absoluteScale: 1
                };
                var i = o.getBoundingClientRect(),
                    a = O(o, t),
                    s = i.height / o.clientHeight;
                return {
                    x: i.x * a.relativeScale + a.x,
                    y: i.y * a.relativeScale + a.y,
                    relativeScale: s,
                    absoluteScale: a.absoluteScale * s
                }
            }

            function ge(e) {
                return Boolean(null === e || void 0 === e ? void 0 : e.shadowRoot)
            }
            var A = Object.freeze({
                __proto__: null,
                on: ce,
                createMirror: function() {
                    return {
                        map: {},
                        getId: function(e) {
                            return e && e.__sn ? e.__sn.id : -1
                        },
                        getNode: function(e) {
                            return this.map[e] || null
                        },
                        removeNodeFromMap: function(e) {
                            var t = this,
                                n = e.__sn && e.__sn.id;
                            delete this.map[n], e.childNodes && e.childNodes.forEach(function(e) {
                                return t.removeNodeFromMap(e)
                            })
                        },
                        has: function(e) {
                            return this.map.hasOwnProperty(e)
                        },
                        reset: function() {
                            this.map = {}
                        }
                    }
                },
                get _mirror() {
                    return te.mirror
                },
                throttle: ue,
                hookSetter: le,
                patch: de,
                getWindowHeight: fe,
                getWindowWidth: pe,
                isBlocked: he,
                isIgnored: k,
                isAncestorRemoved: M,
                isTouchEvent: me,
                polyfill: ve,
                TreeIndex: L,
                queueToResolveTrees: R,
                iterateResolveTree: N,
                isIframeINode: ye,
                getBaseDimension: O,
                hasShadowRoot: ge
            });

            function F(e) {
                return "__ln" in e
            }

            function D(e, t) {
                return e + "@" + t
            }
            var P = (W.prototype.get = function(e) {
                if (e >= this.length) throw new Error("Position outside of list range");
                for (var t = this.head, n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null;
                return t
            }, W.prototype.addNode = function(e) {
                var t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t, e.previousSibling && F(e.previousSibling)) {
                    var n = e.previousSibling.__ln.next;
                    t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
                } else e.nextSibling && F(e.nextSibling) && e.nextSibling.__ln.previous ? (n = e.nextSibling.__ln.previous, t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)) : (this.head && (this.head.previous = t), t.next = this.head, this.head = t);
                this.length++
            }, W.prototype.removeNode = function(e) {
                var t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next, t.next && (t.next.previous = t.previous)) : (this.head = t.next, this.head && (this.head.previous = null)), e.__ln && delete e.__ln, this.length--)
            }, W);

            function W() {
                this.length = 0, this.head = null
            }

            function j(e) {
                return "__sn" in e
            }
            var V = (be.prototype.init = function(t) {
                var n = this;
                ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(function(e) {
                    n[e] = t[e]
                })
            }, be.prototype.freeze = function() {
                this.frozen = !0, this.canvasManager.freeze()
            }, be.prototype.unfreeze = function() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
            }, be.prototype.isFrozen = function() {
                return this.frozen
            }, be.prototype.lock = function() {
                this.locked = !0, this.canvasManager.lock()
            }, be.prototype.unlock = function() {
                this.locked = !1, this.canvasManager.unlock(), this.emit()
            }, be.prototype.reset = function() {
                this.canvasManager.reset()
            }, be);

            function be() {
                var w = this;
                this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = function(e) {
                    e.forEach(w.processMutation), w.emit()
                }, this.emit = function() {
                    var t, e, n, r;
                    if (!w.frozen && !w.locked) {
                        for (var s = [], c = new P, u = function(e) {
                                for (var t = e, n = -2; - 2 === n;) n = (t = t && t.nextSibling) && w.mirror.getId(t);
                                return n
                            }, o = function(t) {
                                var e, n = t.getRootNode ? null === (e = t.getRootNode()) || void 0 === e ? void 0 : e.host : null,
                                    r = !(w.doc.contains(t) || n instanceof Node && w.doc.contains(n));
                                if (t.parentNode && !r) {
                                    var o = X(t.parentNode) ? w.mirror.getId(n) : w.mirror.getId(t.parentNode),
                                        i = u(t);
                                    if (-1 === o || -1 === i) return c.addNode(t);
                                    var a = se(t, {
                                        doc: w.doc,
                                        map: w.mirror.map,
                                        blockClass: w.blockClass,
                                        blockSelector: w.blockSelector,
                                        maskTextClass: w.maskTextClass,
                                        maskTextSelector: w.maskTextSelector,
                                        skipChild: !0,
                                        inlineStylesheet: w.inlineStylesheet,
                                        maskInputOptions: w.maskInputOptions,
                                        maskTextFn: w.maskTextFn,
                                        maskInputFn: w.maskInputFn,
                                        slimDOMOptions: w.slimDOMOptions,
                                        recordCanvas: w.recordCanvas,
                                        inlineImages: w.inlineImages,
                                        onSerialize: function(e) {
                                            ye(e) && w.iframeManager.addIframe(e), ge(t) && w.shadowDomManager.addShadowRoot(t.shadowRoot, document)
                                        },
                                        onIframeLoad: function(e, t) {
                                            w.iframeManager.attachIframe(e, t)
                                        }
                                    });
                                    a && s.push({
                                        parentId: o,
                                        nextId: i,
                                        node: a
                                    })
                                }
                            }; w.mapRemoves.length;) w.mirror.removeNodeFromMap(w.mapRemoves.shift());
                        try {
                            for (var i = re(w.movedSet), a = i.next(); !a.done; a = i.next()) {
                                var l = a.value;
                                Se(w.removes, l, w.mirror) && !w.movedSet.has(l.parentNode) || o(l)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (e = i.return) && e.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        try {
                            for (var d = re(w.addedSet), f = d.next(); !f.done; f = d.next()) l = f.value, !xe(w.droppedSet, l) && !Se(w.removes, l, w.mirror) || xe(w.movedSet, l) ? o(l) : w.droppedSet.add(l)
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                f && !f.done && (r = d.return) && r.call(d)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        for (var p = null; c.length;) {
                            var h = null;
                            if (p) {
                                var m = w.mirror.getId(p.value.parentNode),
                                    v = u(p.value); - 1 !== m && -1 !== v && (h = p)
                            }
                            if (!h)
                                for (var y = c.length - 1; 0 <= y; y--) {
                                    var g = c.get(y);
                                    if (g && (m = w.mirror.getId(g.value.parentNode), v = u(g.value), -1 !== m && -1 !== v)) {
                                        h = g;
                                        break
                                    }
                                }
                            if (!h) {
                                for (; c.head;) c.removeNode(c.head.value);
                                break
                            }
                            p = h.previous, c.removeNode(h.value), o(h.value)
                        }
                        var b = {
                            texts: w.texts.map(function(e) {
                                return {
                                    id: w.mirror.getId(e.node),
                                    value: e.value
                                }
                            }).filter(function(e) {
                                return w.mirror.has(e.id)
                            }),
                            attributes: w.attributes.map(function(e) {
                                return {
                                    id: w.mirror.getId(e.node),
                                    attributes: e.attributes
                                }
                            }).filter(function(e) {
                                return w.mirror.has(e.id)
                            }),
                            removes: w.removes,
                            adds: s
                        };
                        (b.texts.length || b.attributes.length || b.removes.length || b.adds.length) && (w.texts = [], w.attributes = [], w.removes = [], w.addedSet = new Set, w.movedSet = new Set, w.droppedSet = new Set, w.movedMap = {}, w.mutationCb(b))
                    }
                }, this.processMutation = function(r) {
                    var t, e, n, o;
                    if (!k(r.target)) switch (r.type) {
                        case "characterData":
                            var i = r.target.textContent;
                            he(r.target, w.blockClass) || i === r.oldValue || w.texts.push({
                                value: $(r.target, w.maskTextClass, w.maskTextSelector) && i ? w.maskTextFn ? w.maskTextFn(i) : i.replace(/[\S]/g, "*") : i,
                                node: r.target
                            });
                            break;
                        case "attributes":
                            var a = r.target;
                            if (i = r.target.getAttribute(r.attributeName), "value" === r.attributeName && (i = ae({
                                    maskInputOptions: w.maskInputOptions,
                                    tagName: r.target.tagName,
                                    type: r.target.getAttribute("type"),
                                    value: i,
                                    maskInputFn: w.maskInputFn
                                })), he(r.target, w.blockClass) || i === r.oldValue) return;
                            var s = w.attributes.find(function(e) {
                                return e.node === r.target
                            });
                            if (s || (s = {
                                    node: r.target,
                                    attributes: {}
                                }, w.attributes.push(s)), "style" === r.attributeName) {
                                var c = w.doc.createElement("span");
                                r.oldValue && c.setAttribute("style", r.oldValue), void 0 !== s.attributes.style && null !== s.attributes.style || (s.attributes.style = {});
                                var u = s.attributes.style;
                                try {
                                    for (var l = re(Array.from(a.style)), d = l.next(); !d.done; d = l.next()) {
                                        var f = d.value,
                                            p = a.style.getPropertyValue(f),
                                            h = a.style.getPropertyPriority(f);
                                        p === c.style.getPropertyValue(f) && h === c.style.getPropertyPriority(f) || (u[f] = "" === h ? p : [p, h])
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (e = l.return) && e.call(l)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                try {
                                    for (var m = re(Array.from(c.style)), v = m.next(); !v.done; v = m.next()) f = v.value, "" === a.style.getPropertyValue(f) && (u[f] = !1)
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (o = m.return) && o.call(m)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            } else s.attributes[r.attributeName] = K(w.doc, r.target.tagName, r.attributeName, i);
                            break;
                        case "childList":
                            r.addedNodes.forEach(function(e) {
                                return w.genAdds(e, r.target)
                            }), r.removedNodes.forEach(function(e) {
                                var t = w.mirror.getId(e),
                                    n = X(r.target) ? w.mirror.getId(r.target.host) : w.mirror.getId(r.target);
                                he(r.target, w.blockClass) || k(e) || (w.addedSet.has(e) ? (we(w.addedSet, e), w.droppedSet.add(e)) : w.addedSet.has(r.target) && -1 === t || M(r.target, w.mirror) || (w.movedSet.has(e) && w.movedMap[D(t, n)] ? we(w.movedSet, e) : w.removes.push({
                                    parentId: n,
                                    id: t,
                                    isShadow: !!X(r.target) || void 0
                                })), w.mapRemoves.push(e))
                            })
                    }
                }, this.genAdds = function(e, t) {
                    if (!t || !he(t, w.blockClass)) {
                        if (j(e)) {
                            if (k(e)) return;
                            w.movedSet.add(e);
                            var n = null;
                            t && j(t) && (n = t.__sn.id), n && (w.movedMap[D(e.__sn.id, n)] = !0)
                        } else w.addedSet.add(e), w.droppedSet.delete(e);
                        he(e, w.blockClass) || e.childNodes.forEach(function(e) {
                            return w.genAdds(e)
                        })
                    }
                }
            }

            function we(t, e) {
                t.delete(e), e.childNodes.forEach(function(e) {
                    return we(t, e)
                })
            }

            function Se(e, t, n) {
                var r = t.parentNode;
                if (!r) return !1;
                var o = n.getId(r);
                return !!e.some(function(e) {
                    return e.id === o
                }) || Se(e, r, n)
            }

            function xe(e, t) {
                var n = t.parentNode;
                return !!n && (!!e.has(n) || xe(e, n))
            }
            var Ee = [],
                Ie = "undefined" != typeof CSSGroupingRule,
                ke = "undefined" != typeof CSSMediaRule,
                Ce = "undefined" != typeof CSSSupportsRule,
                Te = "undefined" != typeof CSSConditionRule;

            function Me(e) {
                try {
                    if ("composedPath" in e) {
                        var t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0];
                    return e.target
                } catch (t) {
                    return e.target
                }
            }

            function Le(e, t) {
                var n, r, o, i = new V;
                Ee.push(i), i.init(e);
                var a = window.MutationObserver || window.__rrMutationObserver,
                    s = null === (o = null === (r = null === (n = window) || void 0 === n ? void 0 : n.Zone) || void 0 === r ? void 0 : r.__symbol__) || void 0 === o ? void 0 : o.call(r, "MutationObserver");
                s && window[s] && (a = window[s]);
                var c = new a(i.processMutations.bind(i));
                return c.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), c
            }

            function _e(e) {
                var s = e.mouseInteractionCb,
                    r = e.doc,
                    c = e.mirror,
                    u = e.blockClass,
                    t = e.sampling;
                if (!1 === t.mouseInteraction) return function() {};
                var n = !0 === t.mouseInteraction || void 0 === t.mouseInteraction ? {} : t.mouseInteraction,
                    o = [];
                return Object.keys(te.MouseInteractions).filter(function(e) {
                        return Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== n[e]
                    }).forEach(function(e) {
                        var a, t = e.toLowerCase(),
                            n = (a = e, function(e) {
                                var t = Me(e);
                                if (!he(t, u)) {
                                    var n = me(e) ? e.changedTouches[0] : e;
                                    if (n) {
                                        var r = c.getId(t),
                                            o = n.clientX,
                                            i = n.clientY;
                                        s({
                                            type: te.MouseInteractions[a],
                                            id: r,
                                            x: o,
                                            y: i
                                        })
                                    }
                                }
                            });
                        o.push(ce(t, n, r))
                    }),
                    function() {
                        o.forEach(function(e) {
                            return e()
                        })
                    }
            }

            function Re(e) {
                var o = e.scrollCb,
                    i = e.doc,
                    a = e.mirror,
                    s = e.blockClass;
                return ce("scroll", ue(function(e) {
                    var t = Me(e);
                    if (t && !he(t, s)) {
                        var n = a.getId(t);
                        if (t === i) {
                            var r = i.scrollingElement || i.documentElement;
                            o({
                                id: n,
                                x: r.scrollLeft,
                                y: r.scrollTop
                            })
                        } else o({
                            id: n,
                            x: t.scrollLeft,
                            y: t.scrollTop
                        })
                    }
                }, e.sampling.scroll || 100), i)
            }

            function Ne(e, t) {
                var n = ne({}, e);
                return t || delete n.userTriggered, n
            }
            var Oe = ["INPUT", "TEXTAREA", "SELECT"],
                Ae = new WeakMap;

            function Fe(e) {
                return function(e, t) {
                    if (Ie && e.parentRule instanceof CSSGroupingRule || ke && e.parentRule instanceof CSSMediaRule || Ce && e.parentRule instanceof CSSSupportsRule || Te && e.parentRule instanceof CSSConditionRule) {
                        var n = Array.from(e.parentRule.cssRules).indexOf(e);
                        t.unshift(n)
                    } else n = Array.from(e.parentStyleSheet.cssRules).indexOf(e), t.unshift(n);
                    return t
                }(e, [])
            }

            function De(d, e) {
                var t, n;
                void 0 === e && (e = {});
                var r, o, i, a, s, c, u, l, f, p, h, m, v, y = d.doc.defaultView;
                if (!y) return function() {};
                o = e, i = (r = d).mutationCb, a = r.mousemoveCb, s = r.mouseInteractionCb, c = r.scrollCb, u = r.viewportResizeCb, l = r.inputCb, f = r.mediaInteractionCb, p = r.styleSheetRuleCb, h = r.styleDeclarationCb, m = r.canvasMutationCb, v = r.fontCb, r.mutationCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.mutation && o.mutation.apply(o, ie(e)), i.apply(void 0, ie(e))
                }, r.mousemoveCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.mousemove && o.mousemove.apply(o, ie(e)), a.apply(void 0, ie(e))
                }, r.mouseInteractionCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.mouseInteraction && o.mouseInteraction.apply(o, ie(e)), s.apply(void 0, ie(e))
                }, r.scrollCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.scroll && o.scroll.apply(o, ie(e)), c.apply(void 0, ie(e))
                }, r.viewportResizeCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.viewportResize && o.viewportResize.apply(o, ie(e)), u.apply(void 0, ie(e))
                }, r.inputCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.input && o.input.apply(o, ie(e)), l.apply(void 0, ie(e))
                }, r.mediaInteractionCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.mediaInteaction && o.mediaInteaction.apply(o, ie(e)), f.apply(void 0, ie(e))
                }, r.styleSheetRuleCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.styleSheetRule && o.styleSheetRule.apply(o, ie(e)), p.apply(void 0, ie(e))
                }, r.styleDeclarationCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.styleDeclaration && o.styleDeclaration.apply(o, ie(e)), h.apply(void 0, ie(e))
                }, r.canvasMutationCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.canvasMutation && o.canvasMutation.apply(o, ie(e)), m.apply(void 0, ie(e))
                }, r.fontCb = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    o.font && o.font.apply(o, ie(e)), v.apply(void 0, ie(e))
                };
                var g, b, w, S, x, E, I, k, C, T, M, L, _, R, N, O, A, F, D, P, W = Le(d, d.doc),
                    j = function() {
                        var n = d.mousemoveCb,
                            e = d.sampling,
                            t = d.doc,
                            i = d.mirror;
                        if (!1 === e.mousemove) return function() {};
                        var a, r = "number" == typeof e.mousemove ? e.mousemove : 50,
                            o = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                            s = [],
                            c = ue(function(e) {
                                var t = Date.now() - a;
                                n(s.map(function(e) {
                                    return e.timeOffset -= t, e
                                }), e), s = [], a = null
                            }, o),
                            u = ue(function(e) {
                                var t = Me(e),
                                    n = me(e) ? e.changedTouches[0] : e,
                                    r = n.clientX,
                                    o = n.clientY;
                                a = a || Date.now(), s.push({
                                    x: r,
                                    y: o,
                                    id: i.getId(t),
                                    timeOffset: Date.now() - a
                                }), c("undefined" != typeof DragEvent && e instanceof DragEvent ? te.IncrementalSource.Drag : e instanceof MouseEvent ? te.IncrementalSource.MouseMove : te.IncrementalSource.TouchMove)
                            }, r, {
                                trailing: !1
                            }),
                            l = [ce("mousemove", u, t), ce("touchmove", u, t), ce("drag", u, t)];
                        return function() {
                            l.forEach(function(e) {
                                return e()
                            })
                        }
                    }(),
                    V = _e(d),
                    G = Re(d),
                    X = (F = d.viewportResizeCb, P = D = -1, ce("resize", ue(function() {
                        var e = fe(),
                            t = pe();
                        D === e && P === t || (F({
                            width: Number(t),
                            height: Number(e)
                        }), D = e, P = t)
                    }, 200), window)),
                    Y = (E = d.inputCb, I = d.doc, k = d.mirror, C = d.blockClass, T = d.ignoreClass, M = d.maskInputOptions, L = d.maskInputFn, _ = d.sampling, R = d.userTriggeredOnInput, N = ("last" === _.input ? ["change"] : ["input", "change"]).map(function(e) {
                        return ce(e, Q, I)
                    }), O = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"), A = [
                        [HTMLInputElement.prototype, "value"],
                        [HTMLInputElement.prototype, "checked"],
                        [HTMLSelectElement.prototype, "value"],
                        [HTMLTextAreaElement.prototype, "value"],
                        [HTMLSelectElement.prototype, "selectedIndex"],
                        [HTMLOptionElement.prototype, "selected"]
                    ], O && O.set && N.push.apply(N, ie(A.map(function(e) {
                        return le(e[0], e[1], {
                            set: function() {
                                Q({
                                    target: this
                                })
                            }
                        })
                    }))), function() {
                        N.forEach(function(e) {
                            return e()
                        })
                    }),
                    Z = (g = d.mediaInteractionCb, b = d.blockClass, w = d.mirror, S = d.sampling, x = [ce("play", U(0)), ce("pause", U(1)), ce("seeked", U(2)), ce("volumechange", U(3))], function() {
                        x.forEach(function(e) {
                            return e()
                        })
                    }),
                    H = function(e) {
                        var o = d.styleSheetRuleCb,
                            i = d.mirror,
                            t = e.win,
                            r = t.CSSStyleSheet.prototype.insertRule;
                        t.CSSStyleSheet.prototype.insertRule = function(e, t) {
                            var n = i.getId(this.ownerNode);
                            return -1 !== n && o({
                                id: n,
                                adds: [{
                                    rule: e,
                                    index: t
                                }]
                            }), r.apply(this, arguments)
                        };
                        var n = t.CSSStyleSheet.prototype.deleteRule;
                        t.CSSStyleSheet.prototype.deleteRule = function(e) {
                            var t = i.getId(this.ownerNode);
                            return -1 !== t && o({
                                id: t,
                                removes: [{
                                    index: e
                                }]
                            }), n.apply(this, arguments)
                        };
                        var a = {};
                        Ie ? a.CSSGroupingRule = t.CSSGroupingRule : (ke && (a.CSSMediaRule = t.CSSMediaRule), Te && (a.CSSConditionRule = t.CSSConditionRule), Ce && (a.CSSSupportsRule = t.CSSSupportsRule));
                        var s = {};
                        return Object.entries(a).forEach(function(e) {
                                var t = oe(e, 2),
                                    r = t[0],
                                    n = t[1];
                                s[r] = {
                                    insertRule: n.prototype.insertRule,
                                    deleteRule: n.prototype.deleteRule
                                }, n.prototype.insertRule = function(e, t) {
                                    var n = i.getId(this.parentStyleSheet.ownerNode);
                                    return -1 !== n && o({
                                        id: n,
                                        adds: [{
                                            rule: e,
                                            index: ie(Fe(this), [t || 0])
                                        }]
                                    }), s[r].insertRule.apply(this, arguments)
                                }, n.prototype.deleteRule = function(e) {
                                    var t = i.getId(this.parentStyleSheet.ownerNode);
                                    return -1 !== t && o({
                                        id: t,
                                        removes: [{
                                            index: ie(Fe(this), [e])
                                        }]
                                    }), s[r].deleteRule.apply(this, arguments)
                                }
                            }),
                            function() {
                                t.CSSStyleSheet.prototype.insertRule = r, t.CSSStyleSheet.prototype.deleteRule = n, Object.entries(a).forEach(function(e) {
                                    var t = oe(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    r.prototype.insertRule = s[n].insertRule, r.prototype.deleteRule = s[n].deleteRule
                                })
                            }
                    }({
                        win: y
                    }),
                    z = function(e) {
                        var a = d.styleDeclarationCb,
                            s = d.mirror,
                            t = e.win,
                            c = t.CSSStyleDeclaration.prototype.setProperty;
                        t.CSSStyleDeclaration.prototype.setProperty = function(e, t, n) {
                            var r, o, i = s.getId(null === (o = null === (r = this.parentRule) || void 0 === r ? void 0 : r.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                            return -1 !== i && a({
                                id: i,
                                set: {
                                    property: e,
                                    value: t,
                                    priority: n
                                },
                                index: Fe(this.parentRule)
                            }), c.apply(this, arguments)
                        };
                        var o = t.CSSStyleDeclaration.prototype.removeProperty;
                        return t.CSSStyleDeclaration.prototype.removeProperty = function(e) {
                                var t, n, r = s.getId(null === (n = null === (t = this.parentRule) || void 0 === t ? void 0 : t.parentStyleSheet) || void 0 === n ? void 0 : n.ownerNode);
                                return -1 !== r && a({
                                    id: r,
                                    remove: {
                                        property: e
                                    },
                                    index: Fe(this.parentRule)
                                }), o.apply(this, arguments)
                            },
                            function() {
                                t.CSSStyleDeclaration.prototype.setProperty = c, t.CSSStyleDeclaration.prototype.removeProperty = o
                            }
                    }({
                        win: y
                    }),
                    B = d.collectFonts ? function() {
                        var n = d.fontCb,
                            e = d.doc,
                            t = e.defaultView;
                        if (!t) return function() {};
                        var r = [],
                            o = new WeakMap,
                            i = t.FontFace;
                        t.FontFace = function(e, t, n) {
                            var r = new i(e, t, n);
                            return o.set(r, {
                                family: e,
                                buffer: "string" != typeof t,
                                descriptors: n,
                                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                            }), r
                        };
                        var a = de(e.fonts, "add", function(e) {
                            return function(t) {
                                return setTimeout(function() {
                                    var e = o.get(t);
                                    e && (n(e), o.delete(t))
                                }, 0), e.apply(this, [t])
                            }
                        });
                        return r.push(function() {
                                t.FontFace = i
                            }), r.push(a),
                            function() {
                                r.forEach(function(e) {
                                    return e()
                                })
                            }
                    }() : function() {},
                    J = [];

                function U(i) {
                    return ue(function(e) {
                        var t = Me(e);
                        if (t && !he(t, b)) {
                            var n = t.currentTime,
                                r = t.volume,
                                o = t.muted;
                            g({
                                type: i,
                                id: w.getId(t),
                                currentTime: n,
                                volume: r,
                                muted: o
                            })
                        }
                    }, S.media || 500)
                }

                function Q(e) {
                    var t = Me(e),
                        n = e.isTrusted;
                    if (t && "OPTION" === t.tagName && (t = t.parentElement), t && t.tagName && !(Oe.indexOf(t.tagName) < 0) && !he(t, C)) {
                        var r = t.type;
                        if (!t.classList.contains(T)) {
                            var o = t.value,
                                i = !1;
                            "radio" === r || "checkbox" === r ? i = t.checked : (M[t.tagName.toLowerCase()] || M[r]) && (o = ae({
                                maskInputOptions: M,
                                tagName: t.tagName,
                                type: r,
                                value: o,
                                maskInputFn: L
                            })), q(t, Ne({
                                text: o,
                                isChecked: i,
                                userTriggered: n
                            }, R));
                            var a = t.name;
                            "radio" === r && a && i && I.querySelectorAll('input[type="radio"][name="' + a + '"]').forEach(function(e) {
                                e !== t && q(e, Ne({
                                    text: e.value,
                                    isChecked: !i,
                                    userTriggered: !1
                                }, R))
                            })
                        }
                    }
                }

                function q(e, t) {
                    var n = Ae.get(e);
                    if (!n || n.text !== t.text || n.isChecked !== t.isChecked) {
                        Ae.set(e, t);
                        var r = k.getId(e);
                        E(ne(ne({}, t), {
                            id: r
                        }))
                    }
                }
                try {
                    for (var K = re(d.plugins), $ = K.next(); !$.done; $ = K.next()) {
                        var ee = $.value;
                        J.push(ee.observer(ee.callback, y, ee.options))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        $ && !$.done && (n = K.return) && n.call(K)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return function() {
                    Ee.forEach(function(e) {
                        return e.reset()
                    }), W.disconnect(), j(), V(), G(), X(), Y(), Z(), H(), z(), B(), J.forEach(function(e) {
                        return e()
                    })
                }
            }
            var Pe = (Ve.prototype.addIframe = function(e) {
                    this.iframes.set(e, !0)
                }, Ve.prototype.addLoadListener = function(e) {
                    this.loadListener = e
                }, Ve.prototype.attachIframe = function(e, t) {
                    var n;
                    this.mutationCb({
                        adds: [{
                            parentId: e.__sn.id,
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), null === (n = this.loadListener) || void 0 === n || n.call(this, e)
                }, Ve),
                We = (je.prototype.addShadowRoot = function(e, t) {
                    Le(ne(ne({}, this.bypassOptions), {
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), e), Re(ne(ne({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    }))
                }, je);

            function je(e) {
                this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror
            }

            function Ve(e) {
                this.iframes = new WeakMap, this.mutationCb = e.mutationCb
            }
            for (var Ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xe = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ye = 0; Ye < Ge.length; Ye++) Xe[Ge.charCodeAt(Ye)] = Ye;
            var Ze = new Map,
                He = function(e, t, n) {
                    if (e && (Be(e, t) || "object" == Wt(e))) {
                        var r = (i = n, a = e.constructor.name, (s = Ze.get(i)) || (s = new Map, Ze.set(i, s)), s.has(a) || s.set(a, []), s.get(a)),
                            o = r.indexOf(e);
                        return -1 === o && (o = r.length, r.push(e)), o
                    }
                    var i, a, s
                };

            function ze(e, t, n) {
                return ie(e).map(function(e) {
                    return function t(o, n, r) {
                        return o instanceof Array ? o.map(function(e) {
                            return t(e, n, r)
                        }) : null === o ? o : o instanceof Float32Array || o instanceof Float64Array || o instanceof Int32Array || o instanceof Uint32Array || o instanceof Uint8Array || o instanceof Uint16Array || o instanceof Int16Array || o instanceof Int8Array || o instanceof Uint8ClampedArray ? {
                            rr_type: o.constructor.name,
                            args: [Object.values(o)]
                        } : o instanceof ArrayBuffer ? {
                            rr_type: o.constructor.name,
                            base64: function() {
                                var e, t = new Uint8Array(o),
                                    n = t.length,
                                    r = "";
                                for (e = 0; e < n; e += 3) r += Ge[t[e] >> 2], r += Ge[(3 & t[e]) << 4 | t[e + 1] >> 4], r += Ge[(15 & t[e + 1]) << 2 | t[e + 2] >> 6], r += Ge[63 & t[e + 2]];
                                return n % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                            }()
                        } : o instanceof DataView ? {
                            rr_type: o.constructor.name,
                            args: [t(o.buffer, n, r), o.byteOffset, o.byteLength]
                        } : o instanceof HTMLImageElement ? {
                            rr_type: o.constructor.name,
                            src: o.src
                        } : o instanceof ImageData ? {
                            rr_type: o.constructor.name,
                            args: [t(o.data, n, r), o.width, o.height]
                        } : Be(o, n) || "object" == Wt(o) ? {
                            rr_type: o.constructor.name,
                            index: He(o, n, r)
                        } : o
                    }(e, t, n)
                })
            }
            var Be = function(t, n) {
                var e = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(function(e) {
                    return "function" == typeof n[e]
                });
                return Boolean(e.find(function(e) {
                    return t instanceof n[e]
                }))
            };

            function Je(s, c, u, l, d, f) {
                function e(a) {
                    try {
                        if ("function" != typeof s[a]) return 1;
                        var e = de(s, a, function(i) {
                            return function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var n = i.apply(this, e);
                                if (He(n, f, s), !he(this.canvas, l)) {
                                    d.getId(this.canvas);
                                    var r = ze(ie(e), f, s),
                                        o = {
                                            type: c,
                                            property: a,
                                            args: r
                                        };
                                    u(this.canvas, o)
                                }
                                return n
                            }
                        });
                        r.push(e)
                    } catch (e) {
                        var t = le(s, a, {
                            set: function(e) {
                                u(this.canvas, {
                                    type: c,
                                    property: a,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        r.push(t)
                    }
                }
                var t, n, r = [],
                    o = Object.getOwnPropertyNames(s);
                try {
                    for (var i = re(o), a = i.next(); !a.done; a = i.next()) e(a.value)
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        a && !a.done && (n = i.return) && n.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return r
            }
            var Ue, Qe, qe = (Ke.prototype.reset = function() {
                this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
            }, Ke.prototype.freeze = function() {
                this.frozen = !0
            }, Ke.prototype.unfreeze = function() {
                this.frozen = !1
            }, Ke.prototype.lock = function() {
                this.locked = !0
            }, Ke.prototype.unlock = function() {
                this.locked = !1
            }, Ke.prototype.initCanvasMutationObserver = function(e, t) {
                this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                var n, r, o, i, a, s = function(e, o) {
                        var t = [];
                        try {
                            var n = de(e.HTMLCanvasElement.prototype, "getContext", function(r) {
                                return function(e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                    return he(this, o) || "__context" in this || (this.__context = e), r.apply(this, ie([e], t))
                                }
                            });
                            t.push(n)
                        } catch (e) {
                            console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                        }
                        return function() {
                            t.forEach(function(e) {
                                return e()
                            })
                        }
                    }(e, t),
                    c = function(c, n, r) {
                        function e(s) {
                            try {
                                if ("function" != typeof n.CanvasRenderingContext2D.prototype[s]) return 1;
                                var e = de(n.CanvasRenderingContext2D.prototype, s, function(t) {
                                    return function() {
                                        for (var i = this, a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e];
                                        return he(this.canvas, r) || setTimeout(function() {
                                            var e = ie(a);
                                            if ("drawImage" === s && e[0] && e[0] instanceof HTMLCanvasElement) {
                                                var t = e[0],
                                                    n = t.getContext("2d"),
                                                    r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                                                    o = null == r ? void 0 : r.data;
                                                e[0] = JSON.stringify(o)
                                            }
                                            c(i.canvas, {
                                                type: w["2D"],
                                                property: s,
                                                args: e
                                            })
                                        }, 0), t.apply(this, a)
                                    }
                                });
                                i.push(e)
                            } catch (e) {
                                var t = le(n.CanvasRenderingContext2D.prototype, s, {
                                    set: function(e) {
                                        c(this.canvas, {
                                            type: w["2D"],
                                            property: s,
                                            args: [e],
                                            setter: !0
                                        })
                                    }
                                });
                                i.push(t)
                            }
                        }
                        var t, o, i = [],
                            a = Object.getOwnPropertyNames(n.CanvasRenderingContext2D.prototype);
                        try {
                            for (var s = re(a), u = s.next(); !u.done; u = s.next()) e(u.value)
                        } catch (c) {
                            t = {
                                error: c
                            }
                        } finally {
                            try {
                                u && !u.done && (o = s.return) && o.call(s)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return function() {
                            i.forEach(function(e) {
                                return e()
                            })
                        }
                    }(this.processMutation.bind(this), e, t, this.mirror),
                    u = (n = this.processMutation.bind(this), r = e, o = t, i = this.mirror, (a = []).push.apply(a, ie(Je(r.WebGLRenderingContext.prototype, w.WebGL, n, o, i, r))), void 0 !== r.WebGL2RenderingContext && a.push.apply(a, ie(Je(r.WebGL2RenderingContext.prototype, w.WebGL2, n, o, i, r))), function() {
                        a.forEach(function(e) {
                            return e()
                        })
                    });
                this.resetObservers = function() {
                    s(), c(), u()
                }
            }, Ke.prototype.startPendingCanvasMutationFlusher = function() {
                var e = this;
                requestAnimationFrame(function() {
                    return e.flushPendingCanvasMutations()
                })
            }, Ke.prototype.startRAFTimestamping = function() {
                var n = this;
                requestAnimationFrame(function e(t) {
                    n.rafStamps.latestId = t, requestAnimationFrame(e)
                })
            }, Ke.prototype.flushPendingCanvasMutations = function() {
                var r = this;
                this.pendingCanvasMutations.forEach(function(e, t) {
                    var n = r.mirror.getId(t);
                    r.flushPendingCanvasMutationFor(t, n)
                }), requestAnimationFrame(function() {
                    return r.flushPendingCanvasMutations()
                })
            }, Ke.prototype.flushPendingCanvasMutationFor = function(e, t) {
                if (!this.frozen && !this.locked) {
                    var n = this.pendingCanvasMutations.get(e);
                    if (n && -1 !== t) {
                        var r = n.map(function(e) {
                                return e.type,
                                    function(e, t) {
                                        var n = {};
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                            var o = 0;
                                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                                        }
                                        return n
                                    }(e, ["type"])
                            }),
                            o = n[0].type;
                        this.mutationCb({
                            id: t,
                            type: o,
                            commands: r
                        }), this.pendingCanvasMutations.delete(e)
                    }
                }
            }, Ke);

            function Ke(e) {
                this.pendingCanvasMutations = new Map, this.rafStamps = {
                    latestId: 0,
                    invokeId: null
                }, this.frozen = !1, this.locked = !1, this.processMutation = function(e, t) {
                    (!this.rafStamps.invokeId || this.rafStamps.latestId === this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                }, this.mutationCb = e.mutationCb, this.mirror = e.mirror, !0 === e.recordCanvas && this.initCanvasMutationObserver(e.win, e.blockClass)
            }

            function $e(e) {
                return ne(ne({}, e), {
                    timestamp: Date.now()
                })
            }
            var et = {
                map: {},
                getId: function(e) {
                    return e && e.__sn ? e.__sn.id : -1
                },
                getNode: function(e) {
                    return this.map[e] || null
                },
                removeNodeFromMap: function(e) {
                    var t = this,
                        n = e.__sn && e.__sn.id;
                    delete this.map[n], e.childNodes && e.childNodes.forEach(function(e) {
                        return t.removeNodeFromMap(e)
                    })
                },
                has: function(e) {
                    return this.map.hasOwnProperty(e)
                },
                reset: function() {
                    this.map = {}
                }
            };

            function tt(e) {
                void 0 === e && (e = {});
                var i = e.emit,
                    a = e.checkoutEveryNms,
                    s = e.checkoutEveryNth,
                    t = e.blockClass,
                    E = void 0 === t ? "rr-block" : t,
                    n = e.blockSelector,
                    I = void 0 === n ? null : n,
                    r = e.ignoreClass,
                    o = void 0 === r ? "rr-ignore" : r,
                    c = e.maskTextClass,
                    k = void 0 === c ? "rr-mask" : c,
                    u = e.maskTextSelector,
                    C = void 0 === u ? null : u,
                    l = e.inlineStylesheet,
                    T = void 0 === l || l,
                    d = e.maskAllInputs,
                    f = e.maskInputOptions,
                    p = e.slimDOMOptions,
                    h = e.maskInputFn,
                    M = e.maskTextFn,
                    m = e.hooks,
                    v = e.packFn,
                    y = e.sampling,
                    g = void 0 === y ? {} : y,
                    b = e.mousemoveWait,
                    w = e.recordCanvas,
                    L = void 0 !== w && w,
                    S = e.userTriggeredOnInput,
                    x = void 0 !== S && S,
                    _ = e.collectFonts,
                    R = void 0 !== _ && _,
                    N = e.inlineImages,
                    O = void 0 !== N && N,
                    A = e.plugins,
                    F = e.keepIframeSrcFn,
                    D = void 0 === F ? function() {
                        return !1
                    } : F;
                if (!i) throw new Error("emit function is required");
                void 0 !== b && void 0 === g.mousemove && (g.mousemove = b);
                var P, W = !0 === d ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0
                    } : void 0 !== f ? f : {
                        password: !0
                    },
                    j = !0 === p || "all" === p ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === p,
                        headMetaDescKeywords: "all" === p
                    } : p || {};
                ve();
                var V = 0;
                Ue = function(e, t) {
                    var n;
                    if (null === (n = Ee[0]) || void 0 === n || !n.isFrozen() || e.type === te.EventType.FullSnapshot || e.type === te.EventType.IncrementalSnapshot && e.data.source === te.IncrementalSource.Mutation || Ee.forEach(function(e) {
                            return e.unfreeze()
                        }), i(function(e) {
                            var t, n;
                            try {
                                for (var r = re(A || []), o = r.next(); !o.done; o = r.next()) {
                                    var i = o.value;
                                    i.eventProcessor && (e = i.eventProcessor(e))
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return v && (e = v(e)), e
                        }(e), t), e.type === te.EventType.FullSnapshot) P = e, V = 0;
                    else if (e.type === te.EventType.IncrementalSnapshot) {
                        if (e.data.source === te.IncrementalSource.Mutation && e.data.isAttachIframe) return;
                        V++;
                        var r = s && s <= V,
                            o = a && e.timestamp - P.timestamp > a;
                        (r || o) && Qe(!0)
                    }
                };

                function G(e) {
                    Ue($e({
                        type: te.EventType.IncrementalSnapshot,
                        data: ne({
                            source: te.IncrementalSource.Mutation
                        }, e)
                    }))
                }

                function X(e) {
                    return Ue($e({
                        type: te.EventType.IncrementalSnapshot,
                        data: ne({
                            source: te.IncrementalSource.Scroll
                        }, e)
                    }))
                }

                function Y(e) {
                    return Ue($e({
                        type: te.EventType.IncrementalSnapshot,
                        data: ne({
                            source: te.IncrementalSource.CanvasMutation
                        }, e)
                    }))
                }
                var Z = new Pe({
                        mutationCb: G
                    }),
                    H = new qe({
                        recordCanvas: L,
                        mutationCb: Y,
                        win: window,
                        blockClass: E,
                        mirror: et
                    }),
                    z = new We({
                        mutationCb: G,
                        scrollCb: X,
                        bypassOptions: {
                            blockClass: E,
                            blockSelector: I,
                            maskTextClass: k,
                            maskTextSelector: C,
                            inlineStylesheet: T,
                            maskInputOptions: W,
                            maskTextFn: M,
                            maskInputFn: h,
                            recordCanvas: L,
                            inlineImages: O,
                            sampling: g,
                            slimDOMOptions: j,
                            iframeManager: Z,
                            canvasManager: H
                        },
                        mirror: et
                    });
                Qe = function(e) {
                    var t, n, r, o;
                    void 0 === e && (e = !1), Ue($e({
                        type: te.EventType.Meta,
                        data: {
                            href: window.location.href,
                            width: pe(),
                            height: fe()
                        }
                    }), e), Ee.forEach(function(e) {
                        return e.lock()
                    });
                    var i, a, s, c, u, l, d, f, p, h, m, v, y, g, b, w = oe([se(i = document, {
                            doc: i,
                            map: b = {},
                            blockClass: void 0 === (s = (a = {
                                blockClass: E,
                                blockSelector: I,
                                maskTextClass: k,
                                maskTextSelector: C,
                                inlineStylesheet: T,
                                maskAllInputs: W,
                                maskTextFn: M,
                                slimDOM: j,
                                recordCanvas: L,
                                inlineImages: O,
                                onSerialize: function(e) {
                                    ye(e) && Z.addIframe(e), ge(e) && z.addShadowRoot(e.shadowRoot, document)
                                },
                                onIframeLoad: function(e, t) {
                                    Z.attachIframe(e, t)
                                },
                                keepIframeSrcFn: D
                            }).blockClass) ? "rr-block" : s,
                            blockSelector: void 0 === (c = a.blockSelector) ? null : c,
                            maskTextClass: void 0 === (u = a.maskTextClass) ? "rr-mask" : u,
                            maskTextSelector: void 0 === (l = a.maskTextSelector) ? null : l,
                            skipChild: !1,
                            inlineStylesheet: void 0 === (d = a.inlineStylesheet) || d,
                            maskInputOptions: !0 === (m = void 0 !== (h = a.maskAllInputs) && h) ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0,
                                password: !0
                            } : !1 === m ? {
                                password: !0
                            } : m,
                            maskTextFn: a.maskTextFn,
                            maskInputFn: a.maskInputFn,
                            slimDOMOptions: !0 === (y = void 0 !== (v = a.slimDOM) && v) || "all" === y ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === y,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === y ? {} : y,
                            dataURLOptions: a.dataURLOptions,
                            inlineImages: void 0 !== (f = a.inlineImages) && f,
                            recordCanvas: void 0 !== (p = a.recordCanvas) && p,
                            preserveWhiteSpace: a.preserveWhiteSpace,
                            onSerialize: a.onSerialize,
                            onIframeLoad: a.onIframeLoad,
                            iframeLoadTimeout: a.iframeLoadTimeout,
                            keepIframeSrcFn: void 0 === (g = a.keepIframeSrcFn) ? function() {
                                return !1
                            } : g
                        }), b], 2),
                        S = w[0],
                        x = w[1];
                    if (!S) return console.warn("Failed to snapshot the document");
                    et.map = x, Ue($e({
                        type: te.EventType.FullSnapshot,
                        data: {
                            node: S,
                            initialOffset: {
                                left: void 0 !== window.pageXOffset ? window.pageXOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (t = null === document || void 0 === document ? void 0 : document.body) || void 0 === t ? void 0 : t.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null === document || void 0 === document ? void 0 : document.body.scrollLeft) || 0,
                                top: void 0 !== window.pageYOffset ? window.pageYOffset : (null === document || void 0 === document ? void 0 : document.documentElement.scrollTop) || (null === (o = null === (r = null === document || void 0 === document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === o ? void 0 : o.scrollTop) || (null === document || void 0 === document ? void 0 : document.body.scrollTop) || 0
                            }
                        }
                    })), Ee.forEach(function(e) {
                        return e.unlock()
                    })
                };
                try {
                    var B = [];
                    B.push(ce("DOMContentLoaded", function() {
                        Ue($e({
                            type: te.EventType.DomContentLoaded,
                            data: {}
                        }))
                    }));
                    var J = function(e) {
                        var t;
                        return De({
                            mutationCb: G,
                            mousemoveCb: function(e, t) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: {
                                        source: t,
                                        positions: e
                                    }
                                }))
                            },
                            mouseInteractionCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.MouseInteraction
                                    }, e)
                                }))
                            },
                            scrollCb: X,
                            viewportResizeCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.ViewportResize
                                    }, e)
                                }))
                            },
                            inputCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.Input
                                    }, e)
                                }))
                            },
                            mediaInteractionCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.MediaInteraction
                                    }, e)
                                }))
                            },
                            styleSheetRuleCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.StyleSheetRule
                                    }, e)
                                }))
                            },
                            styleDeclarationCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.StyleDeclaration
                                    }, e)
                                }))
                            },
                            canvasMutationCb: Y,
                            fontCb: function(e) {
                                return Ue($e({
                                    type: te.EventType.IncrementalSnapshot,
                                    data: ne({
                                        source: te.IncrementalSource.Font
                                    }, e)
                                }))
                            },
                            blockClass: E,
                            ignoreClass: o,
                            maskTextClass: k,
                            maskTextSelector: C,
                            maskInputOptions: W,
                            inlineStylesheet: T,
                            sampling: g,
                            recordCanvas: L,
                            inlineImages: O,
                            userTriggeredOnInput: x,
                            collectFonts: R,
                            doc: e,
                            maskInputFn: h,
                            maskTextFn: M,
                            blockSelector: I,
                            slimDOMOptions: j,
                            mirror: et,
                            iframeManager: Z,
                            shadowDomManager: z,
                            canvasManager: H,
                            plugins: (null === (t = null == A ? void 0 : A.filter(function(e) {
                                return e.observer
                            })) || void 0 === t ? void 0 : t.map(function(t) {
                                return {
                                    observer: t.observer,
                                    options: t.options,
                                    callback: function(e) {
                                        return Ue($e({
                                            type: te.EventType.Plugin,
                                            data: {
                                                plugin: t.name,
                                                payload: e
                                            }
                                        }))
                                    }
                                }
                            })) || []
                        }, m)
                    };
                    Z.addLoadListener(function(e) {
                        B.push(J(e.contentDocument))
                    });
                    var U = function() {
                        Qe(), B.push(J(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? U() : B.push(ce("load", function() {
                            Ue($e({
                                type: te.EventType.Load,
                                data: {}
                            })), U()
                        }, window)),
                        function() {
                            B.forEach(function(e) {
                                return e()
                            })
                        }
                } catch (e) {
                    console.warn(e)
                }
            }

            function nt(r) {
                return r = r || Object.create(null), {
                    on: function(e, t) {
                        (r[e] || (r[e] = [])).push(t)
                    },
                    off: function(e, t) {
                        r[e] && r[e].splice(r[e].indexOf(t) >>> 0, 1)
                    },
                    emit: function(t, n) {
                        (r[t] || []).slice().map(function(e) {
                            e(n)
                        }), (r["*"] || []).slice().map(function(e) {
                            e(t, n)
                        })
                    }
                }
            }
            tt.addCustomEvent = function(e, t) {
                if (!Ue) throw new Error("please add custom event after start recording");
                Ue($e({
                    type: te.EventType.Custom,
                    data: {
                        tag: e,
                        payload: t
                    }
                }))
            }, tt.freezePage = function() {
                Ee.forEach(function(e) {
                    return e.freeze()
                })
            }, tt.takeFullSnapshot = function(e) {
                if (!Qe) throw new Error("please take full snapshot after start recording");
                Qe(e)
            }, tt.mirror = et;
            Object.freeze({
                __proto__: null,
                default: nt
            });

            function rt(c, u) {
                if (void 0 === c && (c = window), void 0 === u && (u = document), !("scrollBehavior" in u.documentElement.style) || !0 === c.__forceSmoothScrollPolyfill__) {
                    var e, t = c.HTMLElement || c.Element,
                        l = {
                            scroll: c.scroll || c.scrollTo,
                            scrollBy: c.scrollBy,
                            elementScroll: t.prototype.scroll || f,
                            scrollIntoView: t.prototype.scrollIntoView
                        },
                        d = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now,
                        n = (e = c.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0);
                    c.scroll = c.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== r(arguments[0]) ? a.call(c, u.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset) : l.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != Wt(arguments[0]) ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset))
                    }, c.scrollBy = function() {
                        void 0 !== arguments[0] && (r(arguments[0]) ? l.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != Wt(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : a.call(c, u.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)))
                    }, t.prototype.scroll = t.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== r(arguments[0])) {
                                var e = arguments[0].left,
                                    t = arguments[0].top;
                                a.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != Wt(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }, t.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== r(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, t.prototype.scrollIntoView = function() {
                        if (!0 !== r(arguments[0])) {
                            var e = function(e) {
                                    for (; e !== u.body && !1 === (t = e, n = o(t, "Y") && i(t, "Y"), r = o(t, "X") && i(t, "X"), n || r);) e = e.parentNode || e.host;
                                    var t, n, r;
                                    return e
                                }(this),
                                t = e.getBoundingClientRect(),
                                n = this.getBoundingClientRect();
                            e !== u.body ? (a.call(this, e, e.scrollLeft + n.left - t.left, e.scrollTop + n.top - t.top), "fixed" !== c.getComputedStyle(e).position && c.scrollBy({
                                left: t.left,
                                top: t.top,
                                behavior: "smooth"
                            })) : c.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })
                        } else l.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function f(e, t) {
                    this.scrollLeft = e, this.scrollTop = t
                }

                function r(e) {
                    if (null === e || "object" != Wt(e) || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                    if ("object" == Wt(e) && "smooth" === e.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function o(e, t) {
                    return "Y" === t ? e.clientHeight + n < e.scrollHeight : "X" === t ? e.clientWidth + n < e.scrollWidth : void 0
                }

                function i(e, t) {
                    var n = c.getComputedStyle(e, null)["overflow" + t];
                    return "auto" === n || "scroll" === n
                }

                function a(e, t, n) {
                    var r, o, i, a, s = d();
                    a = e === u.body ? (o = (r = c).scrollX || c.pageXOffset, i = c.scrollY || c.pageYOffset, l.scroll) : (o = (r = e).scrollLeft, i = e.scrollTop, f),
                        function e(t) {
                            var n, r, o, i, a = (d() - t.startTime) / 468;
                            i = a = 1 < a ? 1 : a, n = .5 * (1 - Math.cos(Math.PI * i)), r = t.startX + (t.x - t.startX) * n, o = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, r, o), r === t.x && o === t.y || c.requestAnimationFrame(e.bind(c, t))
                        }({
                            scrollable: r,
                            method: a,
                            startTime: s,
                            startX: o,
                            startY: i,
                            x: t,
                            y: n
                        })
                }
            }
            var ot, it, at = (st.prototype.addAction = function(e) {
                var t = this.findActionIndex(e);
                this.actions.splice(t, 0, e)
            }, st.prototype.addActions = function(e) {
                this.actions = this.actions.concat(e)
            }, st.prototype.start = function() {
                this.timeOffset = 0;
                var r = performance.now(),
                    o = this.actions,
                    i = this;
                this.raf = requestAnimationFrame(function e() {
                    var t = performance.now();
                    for (i.timeOffset += (t - r) * i.speed, r = t; o.length;) {
                        var n = o[0];
                        if (!(i.timeOffset >= n.delay)) break;
                        o.shift(), n.doAction()
                    }(0 < o.length || i.liveMode) && (i.raf = requestAnimationFrame(e))
                })
            }, st.prototype.clear = function() {
                this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
            }, st.prototype.setSpeed = function(e) {
                this.speed = e
            }, st.prototype.toggleLiveMode = function(e) {
                this.liveMode = e
            }, st.prototype.isActive = function() {
                return null !== this.raf
            }, st.prototype.findActionIndex = function(e) {
                for (var t = 0, n = this.actions.length - 1; t <= n;) {
                    var r = Math.floor((t + n) / 2);
                    if (this.actions[r].delay < e.delay) t = r + 1;
                    else {
                        if (!(this.actions[r].delay > e.delay)) return r + 1;
                        n = r - 1
                    }
                }
                return t
            }, st);

            function st(e, t) {
                void 0 === e && (e = []), this.timeOffset = 0, this.raf = null, this.actions = e, this.speed = t
            }

            function ct(e, t) {
                if (e.type !== te.EventType.IncrementalSnapshot || e.data.source !== te.IncrementalSource.MouseMove) return e.delay = e.timestamp - t, e.delay;
                var n = e.data.positions[0].timeOffset,
                    r = e.timestamp + n;
                return e.delay = r - t, r - t
            }

            function ut(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }(it = ot = ot || {})[it.NotStarted = 0] = "NotStarted", it[it.Running = 1] = "Running", it[it.Stopped = 2] = "Stopped";
            var lt = {
                type: "xstate.init"
            };

            function dt(e) {
                return void 0 === e ? [] : [].concat(e)
            }

            function ft(e) {
                return {
                    type: "xstate.assign",
                    assignment: e
                }
            }

            function pt(e, t) {
                return "string" == typeof(e = "string" == typeof e && t && t[e] ? t[e] : e) ? {
                    type: e
                } : "function" == typeof e ? {
                    type: e.name,
                    exec: e
                } : e
            }

            function ht(t) {
                return function(e) {
                    return t === e
                }
            }

            function mt(e) {
                return "string" == typeof e ? {
                    type: e
                } : e
            }

            function vt(e, t) {
                return {
                    value: e,
                    context: t,
                    actions: [],
                    changed: !1,
                    matches: ht(e)
                }
            }

            function yt(e, t, r) {
                var o = t,
                    i = !1;
                return [e.filter(function(t) {
                    if ("xstate.assign" !== t.type) return !0;
                    i = !0;
                    var n = Object.assign({}, o);
                    return "function" == typeof t.assignment ? n = t.assignment(o, r) : Object.keys(t.assignment).forEach(function(e) {
                        n[e] = "function" == typeof t.assignment[e] ? t.assignment[e](o, r) : t.assignment[e]
                    }), o = n, !1
                }), o, i]
            }

            function gt(T, t) {
                void 0 === t && (t = {});
                var e = ut(yt(dt(T.states[T.initial].entry).map(function(e) {
                        return pt(e, t.actions)
                    }), T.context, lt), 2),
                    n = e[0],
                    r = e[1],
                    M = {
                        config: T,
                        _options: t,
                        initialState: {
                            value: T.initial,
                            actions: n,
                            context: r,
                            matches: ht(T.initial)
                        },
                        transition: function(e, t) {
                            var n, r, o = "string" == typeof e ? {
                                    value: e,
                                    context: T.context
                                } : e,
                                i = o.value,
                                a = o.context,
                                s = mt(t),
                                c = T.states[i];
                            if (c.on) {
                                var u = dt(c.on[s.type]);
                                try {
                                    for (var l = function(e) {
                                            var t = "function" == typeof Symbol && Symbol.iterator,
                                                n = t && e[t],
                                                r = 0;
                                            if (n) return n.call(e);
                                            if (e && "number" == typeof e.length) return {
                                                next: function() {
                                                    return e && r >= e.length && (e = void 0), {
                                                        value: e && e[r++],
                                                        done: !e
                                                    }
                                                }
                                            };
                                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                                        }(u), d = l.next(); !d.done; d = l.next()) {
                                        var f = d.value;
                                        if (void 0 === f) return vt(i, a);
                                        var p = "string" == typeof f ? {
                                                target: f
                                            } : f,
                                            h = p.target,
                                            m = p.actions,
                                            v = void 0 === m ? [] : m,
                                            y = p.cond,
                                            g = void 0 === y ? function() {
                                                return !0
                                            } : y,
                                            b = void 0 === h,
                                            w = null != h ? h : i,
                                            S = T.states[w];
                                        if (g(a, s)) {
                                            var x = ut(yt((b ? dt(v) : [].concat(c.exit, v, S.entry).filter(function(e) {
                                                    return e
                                                })).map(function(e) {
                                                    return pt(e, M._options.actions)
                                                }), a, s), 3),
                                                E = x[0],
                                                I = x[1],
                                                k = x[2],
                                                C = null != h ? h : i;
                                            return {
                                                value: C,
                                                context: I,
                                                actions: E,
                                                changed: h !== i || 0 < E.length || k,
                                                matches: ht(C)
                                            }
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (r = l.return) && r.call(l)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }
                            return vt(i, a)
                        }
                    };
                return M
            }
            var bt, wt, St = function(n, r) {
                return n.actions.forEach(function(e) {
                    var t = e.exec;
                    return t && t(n.context, r)
                })
            };

            function xt(n) {
                var r = n.initialState,
                    o = ot.NotStarted,
                    t = new Set,
                    i = {
                        _machine: n,
                        send: function(e) {
                            o === ot.Running && (r = n.transition(r, e), St(r, mt(e)), t.forEach(function(e) {
                                return e(r)
                            }))
                        },
                        subscribe: function(e) {
                            return t.add(e), e(r), {
                                unsubscribe: function() {
                                    return t.delete(e)
                                }
                            }
                        },
                        start: function(e) {
                            if (e) {
                                var t = "object" == Wt(e) ? e : {
                                    context: n.config.context,
                                    value: e
                                };
                                r = {
                                    value: t.value,
                                    actions: [],
                                    context: t.context,
                                    matches: ht(t.value)
                                }
                            }
                            return o = ot.Running, St(r, lt), i
                        },
                        stop: function() {
                            return o = ot.Stopped, t.clear(), i
                        },
                        get state() {
                            return r
                        },
                        get status() {
                            return o
                        }
                    };
                return i
            }

            function Et(e, t) {
                var b = t.getCastFn,
                    w = t.applyEventsSynchronously,
                    S = t.emitter;
                return xt(gt({
                    id: "player",
                    context: e,
                    initial: "paused",
                    states: {
                        playing: {
                            on: {
                                PAUSE: {
                                    target: "paused",
                                    actions: ["pause"]
                                },
                                CAST_EVENT: {
                                    target: "playing",
                                    actions: "castEvent"
                                },
                                END: {
                                    target: "paused",
                                    actions: ["resetLastPlayedEvent", "pause"]
                                },
                                ADD_EVENT: {
                                    target: "playing",
                                    actions: ["addEvent"]
                                }
                            }
                        },
                        paused: {
                            on: {
                                PLAY: {
                                    target: "playing",
                                    actions: ["recordTimeOffset", "play"]
                                },
                                CAST_EVENT: {
                                    target: "paused",
                                    actions: "castEvent"
                                },
                                TO_LIVE: {
                                    target: "live",
                                    actions: ["startLive"]
                                },
                                ADD_EVENT: {
                                    target: "paused",
                                    actions: ["addEvent"]
                                }
                            }
                        },
                        live: {
                            on: {
                                ADD_EVENT: {
                                    target: "live",
                                    actions: ["addEvent"]
                                },
                                CAST_EVENT: {
                                    target: "live",
                                    actions: ["castEvent"]
                                }
                            }
                        }
                    }
                }, {
                    actions: {
                        castEvent: ft({
                            lastPlayedEvent: function(e, t) {
                                return "CAST_EVENT" === t.type ? t.payload.event : e.lastPlayedEvent
                            }
                        }),
                        recordTimeOffset: ft(function(e, t) {
                            var n = e.timeOffset;
                            return "payload" in t && "timeOffset" in t.payload && (n = t.payload.timeOffset), ne(ne({}, e), {
                                timeOffset: n,
                                baselineTime: e.events[0].timestamp + n
                            })
                        }),
                        play: function(e) {
                            var t, n, r, o, i, a = e.timer,
                                s = e.events,
                                c = e.baselineTime,
                                u = e.lastPlayedEvent;
                            a.clear();
                            try {
                                for (var l = re(s), d = l.next(); !d.done; d = l.next()) ct(d.value, c)
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    d && !d.done && (n = l.return) && n.call(l)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            var f = function(e, t) {
                                    for (var n = e.length - 1; 0 <= n; n--) {
                                        var r = e[n];
                                        if (r.type === te.EventType.Meta && r.timestamp <= t) return e.slice(n)
                                    }
                                    return e
                                }(s, c),
                                p = null == u ? void 0 : u.timestamp;
                            (null == u ? void 0 : u.type) === te.EventType.IncrementalSnapshot && u.data.source === te.IncrementalSource.MouseMove && (p = u.timestamp + (null === (i = u.data.positions[0]) || void 0 === i ? void 0 : i.timeOffset)), c < (p || 0) && S.emit(te.ReplayerEvents.PlayBack);

                            function h(e) {
                                if (p && p < c && (e.timestamp <= p || e === u)) return 1;
                                if (e.timestamp < c) m.push(e);
                                else {
                                    var t = b(e, !1);
                                    v.push({
                                        doAction: function() {
                                            t()
                                        },
                                        delay: e.delay
                                    })
                                }
                            }
                            var m = new Array,
                                v = new Array;
                            try {
                                for (var y = re(f), g = y.next(); !g.done; g = y.next()) h(g.value)
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    g && !g.done && (o = y.return) && o.call(y)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            w(m), S.emit(te.ReplayerEvents.Flush), a.addActions(v), a.start()
                        },
                        pause: function(e) {
                            e.timer.clear()
                        },
                        resetLastPlayedEvent: ft(function(e) {
                            return ne(ne({}, e), {
                                lastPlayedEvent: null
                            })
                        }),
                        startLive: ft({
                            baselineTime: function(e, t) {
                                return e.timer.toggleLiveMode(!0), e.timer.start(), "TO_LIVE" === t.type && t.payload.baselineTime ? t.payload.baselineTime : Date.now()
                            }
                        }),
                        addEvent: ft(function(e, t) {
                            var n = e.baselineTime,
                                r = e.timer,
                                o = e.events;
                            if ("ADD_EVENT" === t.type) {
                                var i = t.payload.event;
                                ct(i, n);
                                var a = o.length - 1;
                                if (!o[a] || o[a].timestamp <= i.timestamp) o.push(i);
                                else {
                                    for (var s = -1, c = 0; c <= a;) {
                                        var u = Math.floor((c + a) / 2);
                                        o[u].timestamp <= i.timestamp ? c = u + 1 : a = u - 1
                                    } - 1 === s && (s = c), o.splice(s, 0, i)
                                }
                                var l = i.timestamp < n,
                                    d = b(i, l);
                                l ? d() : r.isActive() && r.addAction({
                                    doAction: function() {
                                        d()
                                    },
                                    delay: i.delay
                                })
                            }
                            return ne(ne({}, e), {
                                events: o
                            })
                        })
                    }
                }))
            }

            function It(e, t) {
                var n = e[t[0]];
                return 1 === t.length ? n : It(n.cssRules[t[1]].cssRules, t.slice(2))
            }

            function kt(e) {
                var t = ie(e),
                    n = t.pop();
                return {
                    positions: t,
                    index: n
                }
            }(wt = bt = bt || {})[wt.Insert = 0] = "Insert", wt[wt.Remove = 1] = "Remove", wt[wt.Snapshot = 2] = "Snapshot", wt[wt.SetProperty = 3] = "SetProperty", wt[wt.RemoveProperty = 4] = "RemoveProperty";
            var Ct = new Map;

            function Tt(e, t) {
                var n = Ct.get(e);
                return n || (n = new Map, Ct.set(e, n)), n.has(t) || n.set(t, []), n.get(t)
            }
            var Mt = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];

            function Lt(e) {
                var t = e.mutation,
                    n = e.target,
                    r = e.type,
                    o = e.imageMap,
                    i = e.errorHandler;
                try {
                    var a = function(e, t) {
                        try {
                            return t === w.WebGL ? e.getContext("webgl") || e.getContext("experimental-webgl") : e.getContext("webgl2")
                        } catch (e) {
                            return null
                        }
                    }(n, r);
                    if (!a) return;
                    if (t.setter) return void(a[t.property] = t.args[0]);
                    var s = a[t.property],
                        c = t.args.map(function c(u, l) {
                            return function(e) {
                                if (e && "object" == Wt(e) && "rr_type" in e) {
                                    if ("index" in e) {
                                        var t = e.rr_type,
                                            n = e.index;
                                        return Tt(l, t)[n]
                                    }
                                    if ("args" in e) {
                                        var r = e.rr_type,
                                            o = e.args,
                                            i = window[r];
                                        return new(i.bind.apply(i, ie([void 0], o.map(c(u, l)))))
                                    }
                                    if ("base64" in e) return function(e) {
                                        var t, n, r, o, i, a = .75 * e.length,
                                            s = e.length,
                                            c = 0;
                                        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                                        var u = new ArrayBuffer(a),
                                            l = new Uint8Array(u);
                                        for (t = 0; t < s; t += 4) n = Xe[e.charCodeAt(t)], r = Xe[e.charCodeAt(t + 1)], o = Xe[e.charCodeAt(t + 2)], i = Xe[e.charCodeAt(t + 3)], l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | o >> 2, l[c++] = (3 & o) << 6 | 63 & i;
                                        return u
                                    }(e.base64);
                                    if ("src" in e) {
                                        var a = u.get(e.src);
                                        if (a) return a;
                                        var s = new Image;
                                        return s.src = e.src, u.set(e.src, s), s
                                    }
                                } else if (Array.isArray(e)) return e.map(c(u, l));
                                return e
                            }
                        }(o, a));
                    ! function(e, t) {
                        if (null != t && t.constructor) {
                            var n = t.constructor.name;
                            if (Mt.includes(n)) {
                                var r = Tt(e, n);
                                r.includes(t) || r.push(t)
                            }
                        }
                    }(a, s.apply(a, c))
                } catch (e) {
                    i(t, e)
                }
            }
            var _t = nt,
                Rt = "[replayer]",
                Nt = {
                    duration: 500,
                    lineCap: "round",
                    lineWidth: 3,
                    strokeStyle: "red"
                };

            function Ot(e) {
                return e.type == te.EventType.IncrementalSnapshot && (e.data.source == te.IncrementalSource.TouchMove || e.data.source == te.IncrementalSource.MouseInteraction && e.data.type == te.MouseInteractions.TouchStart)
            }
            var At = (Object.defineProperty(Pt.prototype, "timer", {
                    get: function() {
                        return this.service.state.context.timer
                    },
                    enumerable: !1,
                    configurable: !0
                }), Pt.prototype.on = function(e, t) {
                    return this.emitter.on(e, t), this
                }, Pt.prototype.off = function(e, t) {
                    return this.emitter.off(e, t), this
                }, Pt.prototype.setConfig = function(t) {
                    var n = this;
                    Object.keys(t).forEach(function(e) {
                        n.config[e] = t[e]
                    }), this.config.skipInactive || this.backToNormal(), void 0 !== t.speed && this.speedService.send({
                        type: "SET_SPEED",
                        payload: {
                            speed: t.speed
                        }
                    }), void 0 !== t.mouseTail && (!1 === t.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
                }, Pt.prototype.getMetaData = function() {
                    var e = this.service.state.context.events[0],
                        t = this.service.state.context.events[this.service.state.context.events.length - 1];
                    return {
                        startTime: e.timestamp,
                        endTime: t.timestamp,
                        totalTime: t.timestamp - e.timestamp
                    }
                }, Pt.prototype.getCurrentTime = function() {
                    return this.timer.timeOffset + this.getTimeOffset()
                }, Pt.prototype.getTimeOffset = function() {
                    var e = this.service.state.context;
                    return e.baselineTime - e.events[0].timestamp
                }, Pt.prototype.getMirror = function() {
                    return this.mirror
                }, Pt.prototype.play = function(e) {
                    var t;
                    void 0 === e && (e = 0), this.service.state.matches("paused") || this.service.send({
                        type: "PAUSE"
                    }), this.service.send({
                        type: "PLAY",
                        payload: {
                            timeOffset: e
                        }
                    }), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.remove("rrweb-paused"), this.emitter.emit(te.ReplayerEvents.Start)
                }, Pt.prototype.pause = function(e) {
                    var t;
                    void 0 === e && this.service.state.matches("playing") && this.service.send({
                        type: "PAUSE"
                    }), "number" == typeof e && (this.play(e), this.service.send({
                        type: "PAUSE"
                    })), null === (t = this.iframe.contentDocument) || void 0 === t || t.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(te.ReplayerEvents.Pause)
                }, Pt.prototype.resume = function(e) {
                    void 0 === e && (e = 0), console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface."), this.play(e), this.emitter.emit(te.ReplayerEvents.Resume)
                }, Pt.prototype.startLive = function(e) {
                    this.service.send({
                        type: "TO_LIVE",
                        payload: {
                            baselineTime: e
                        }
                    })
                }, Pt.prototype.addEvent = function(e) {
                    var t = this,
                        n = this.config.unpackFn ? this.config.unpackFn(e) : e;
                    Ot(n) && this.mouse.classList.add("touch-device"), Promise.resolve().then(function() {
                        return t.service.send({
                            type: "ADD_EVENT",
                            payload: {
                                event: n
                            }
                        })
                    })
                }, Pt.prototype.enableInteract = function() {
                    this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
                }, Pt.prototype.disableInteract = function() {
                    this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
                }, Pt.prototype.resetCache = function() {
                    this.cache = S()
                }, Pt.prototype.setupDom = function() {
                    this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.iframe = document.createElement("iframe");
                    var e = ["allow-same-origin"];
                    this.config.UNSAFE_replayCanvas && e.push("allow-scripts"), this.iframe.style.display = "none", this.iframe.setAttribute("sandbox", e.join(" ")), this.disableInteract(), this.wrapper.appendChild(this.iframe), this.iframe.contentWindow && this.iframe.contentDocument && (rt(this.iframe.contentWindow, this.iframe.contentDocument), ve(this.iframe.contentWindow))
                }, Pt.prototype.handleResize = function(e) {
                    var t, n;
                    this.iframe.style.display = "inherit";
                    try {
                        for (var r = re([this.mouseTail, this.iframe]), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            i && (i.setAttribute("width", String(e.width)), i.setAttribute("height", String(e.height)))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }, Pt.prototype.applyEventsSynchronously = function(e) {
                    var t, n;
                    try {
                        for (var r = re(e), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            switch (i.type) {
                                case te.EventType.DomContentLoaded:
                                case te.EventType.Load:
                                case te.EventType.Custom:
                                    continue;
                                case te.EventType.FullSnapshot:
                                case te.EventType.Meta:
                                case te.EventType.Plugin:
                                    break;
                                case te.EventType.IncrementalSnapshot:
                                    switch (i.data.source) {
                                        case te.IncrementalSource.MediaInteraction:
                                            continue
                                    }
                            }
                            this.getCastFn(i, !0)()
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    this.mousePos && this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), !(this.mousePos = null) === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null
                }, Pt.prototype.getCastFn = function(s, c) {
                    var a, u = this;
                    switch (void 0 === c && (c = !1), s.type) {
                        case te.EventType.DomContentLoaded:
                        case te.EventType.Load:
                            break;
                        case te.EventType.Custom:
                            a = function() {
                                u.emitter.emit(te.ReplayerEvents.CustomEvent, s)
                            };
                            break;
                        case te.EventType.Meta:
                            a = function() {
                                return u.emitter.emit(te.ReplayerEvents.Resize, {
                                    width: s.data.width,
                                    height: s.data.height
                                })
                            };
                            break;
                        case te.EventType.FullSnapshot:
                            a = function() {
                                if (u.firstFullSnapshot) {
                                    if (u.firstFullSnapshot === s) return void(u.firstFullSnapshot = !0)
                                } else u.firstFullSnapshot = !0;
                                u.rebuildFullSnapshot(s, c), u.iframe.contentWindow.scrollTo(s.data.initialOffset)
                            };
                            break;
                        case te.EventType.IncrementalSnapshot:
                            a = function() {
                                var t, e;
                                if (u.applyIncremental(s, c), !c && (s === u.nextUserInteractionEvent && (u.nextUserInteractionEvent = null, u.backToNormal()), u.config.skipInactive && !u.nextUserInteractionEvent)) {
                                    try {
                                        for (var n = re(u.service.state.context.events), r = n.next(); !r.done; r = n.next()) {
                                            var o = r.value;
                                            if (!(o.timestamp <= s.timestamp) && u.isUserInteraction(o)) {
                                                o.delay - s.delay > 1e4 * u.speedService.state.context.timer.speed && (u.nextUserInteractionEvent = o);
                                                break
                                            }
                                        }
                                    } catch (e) {
                                        t = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            r && !r.done && (e = n.return) && e.call(n)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                    }
                                    if (u.nextUserInteractionEvent) {
                                        var i = u.nextUserInteractionEvent.delay - s.delay,
                                            a = {
                                                speed: Math.min(Math.round(i / 5e3), u.config.maxSpeed)
                                            };
                                        u.speedService.send({
                                            type: "FAST_FORWARD",
                                            payload: a
                                        }), u.emitter.emit(te.ReplayerEvents.SkipStart, a)
                                    }
                                }
                            }
                    }
                    return function() {
                        var t, e;
                        a && a();
                        try {
                            for (var n = re(u.config.plugins || []), r = n.next(); !r.done; r = n.next()) r.value.handler(s, c, {
                                replayer: u
                            })
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        u.service.send({
                            type: "CAST_EVENT",
                            payload: {
                                event: s
                            }
                        });
                        var o = u.service.state.context.events.length - 1;
                        if (s === u.service.state.context.events[o]) {
                            var i = function() {
                                o < u.service.state.context.events.length - 1 || (u.backToNormal(), u.service.send("END"), u.emitter.emit(te.ReplayerEvents.Finish))
                            };
                            s.type === te.EventType.IncrementalSnapshot && s.data.source === te.IncrementalSource.MouseMove && s.data.positions.length ? setTimeout(function() {
                                i()
                            }, Math.max(0, 50 - s.data.positions[0].timeOffset)) : i()
                        }
                        u.emitter.emit(te.ReplayerEvents.EventCast, s)
                    }
                }, Pt.prototype.rebuildFullSnapshot = function(e, t) {
                    var n, r, o = this;
                    if (void 0 === t && (t = !1), !this.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
                    Object.keys(this.legacy_missingNodeRetryMap).length && console.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
                    var i = [];

                    function a(t, e) {
                        s.attachDocumentToIframe(t, e), s.newDocumentQueue = s.newDocumentQueue.filter(function(e) {
                            return e !== t
                        })
                    }
                    this.mirror.map = E(e.data.node, {
                        doc: this.iframe.contentDocument,
                        afterAppend: function(e) {
                            o.collectIframeAndAttachDocument(i, e)
                        },
                        cache: this.cache
                    })[1];
                    var s = this;
                    try {
                        for (var c = re(i), u = c.next(); !u.done; u = c.next()) {
                            var l = u.value;
                            a(l.mutationInQueue, l.builtNode)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = c.return) && r.call(c)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    var d = this.iframe.contentDocument,
                        f = d.documentElement,
                        p = d.head;
                    this.insertStyleRules(f, p), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(te.ReplayerEvents.FullsnapshotRebuilded, e), t || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
                }, Pt.prototype.insertStyleRules = function(e, t) {
                    var n = document.createElement("style");
                    e.insertBefore(n, t);
                    var r = ["." + this.config.blockClass + " { background: currentColor }", "noscript { display: none !important; }"].concat(this.config.insertStyleRules);
                    this.config.pauseAnimation && r.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }");
                    for (var o = 0; o < r.length; o++) n.sheet.insertRule(r[o], o)
                }, Pt.prototype.attachDocumentToIframe = function(e, o) {
                    var t, n, i = this,
                        a = [];
                    if (!o.contentDocument)
                        for (var r = o.parentNode; r;) {
                            if (this.fragmentParentMap.has(r)) {
                                var s = r,
                                    c = this.fragmentParentMap.get(s);
                                this.restoreRealParent(s, c);
                                break
                            }
                            r = r.parentNode
                        }

                    function u(t, e) {
                        l.attachDocumentToIframe(t, e), l.newDocumentQueue = l.newDocumentQueue.filter(function(e) {
                            return e !== t
                        })
                    }
                    x(e.node, {
                        doc: o.contentDocument,
                        map: this.mirror.map,
                        hackCss: !0,
                        skipChild: !1,
                        afterAppend: function(e) {
                            if (i.collectIframeAndAttachDocument(a, e), e.__sn.type === Y.Element && "HTML" === e.__sn.tagName.toUpperCase()) {
                                var t = o.contentDocument,
                                    n = t.documentElement,
                                    r = t.head;
                                i.insertStyleRules(n, r)
                            }
                        },
                        cache: this.cache
                    });
                    var l = this;
                    try {
                        for (var d = re(a), f = d.next(); !f.done; f = d.next()) {
                            var p = f.value;
                            u(p.mutationInQueue, p.builtNode)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (n = d.return) && n.call(d)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }, Pt.prototype.collectIframeAndAttachDocument = function(e, t) {
                    if (ye(t)) {
                        var n = this.newDocumentQueue.find(function(e) {
                            return e.parentId === t.__sn.id
                        });
                        n && e.push({
                            mutationInQueue: n,
                            builtNode: t
                        })
                    }
                }, Pt.prototype.waitForStylesheetLoad = function() {
                    var e, t = this,
                        n = null === (e = this.iframe.contentDocument) || void 0 === e ? void 0 : e.head;
                    if (n) {
                        var r, o = new Set,
                            i = this.service.state,
                            a = function() {
                                i = t.service.state
                            };
                        this.emitter.on(te.ReplayerEvents.Start, a), this.emitter.on(te.ReplayerEvents.Pause, a);
                        var s = function() {
                            t.emitter.off(te.ReplayerEvents.Start, a), t.emitter.off(te.ReplayerEvents.Pause, a)
                        };
                        n.querySelectorAll('link[rel="stylesheet"]').forEach(function(e) {
                            e.sheet || (o.add(e), e.addEventListener("load", function() {
                                o.delete(e), 0 === o.size && -1 !== r && (i.matches("playing") && t.play(t.getCurrentTime()), t.emitter.emit(te.ReplayerEvents.LoadStylesheetEnd), r && clearTimeout(r), s())
                            }))
                        }), 0 < o.size && (this.service.send({
                            type: "PAUSE"
                        }), this.emitter.emit(te.ReplayerEvents.LoadStylesheetStart), r = setTimeout(function() {
                            i.matches("playing") && t.play(t.getCurrentTime()), r = -1, s()
                        }, this.config.loadTimeout))
                    }
                }, Pt.prototype.hasImageArg = function(e) {
                    var t, n;
                    try {
                        for (var r = re(e), o = r.next(); !o.done; o = r.next()) {
                            var i = o.value;
                            if (i && "object" == Wt(i))
                                if ("rr_type" in i && "args" in i) {
                                    if (this.hasImageArg(i.args)) return !0
                                } else {
                                    if ("rr_type" in i && "HTMLImageElement" === i.rr_type) return !0;
                                    if (i instanceof Array && this.hasImageArg(i)) return !0
                                }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !1
                }, Pt.prototype.getImageArgs = function(e) {
                    var t, n, r = [];
                    try {
                        for (var o = re(e), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            a && "object" == Wt(a) && ("rr_type" in a && "args" in a ? r.push.apply(r, ie(this.getImageArgs(a.args))) : "rr_type" in a && "HTMLImageElement" === a.rr_type ? r.push(a.src) : a instanceof Array && r.push.apply(r, ie(this.getImageArgs(a))))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return r
                }, Pt.prototype.preloadAllImages = function() {
                    var t, e, n = this;

                    function r() {
                        n.service.state
                    }

                    function o(t) {
                        t.type === te.EventType.IncrementalSnapshot && t.data.source === te.IncrementalSource.CanvasMutation && ("commands" in t.data ? t.data.commands.forEach(function(e) {
                            return n.preloadImages(e, t)
                        }) : i.preloadImages(t.data, t))
                    }
                    this.service.state, this.emitter.on(te.ReplayerEvents.Start, r), this.emitter.on(te.ReplayerEvents.Pause, r);
                    var i = this;
                    try {
                        for (var a = re(this.service.state.context.events), s = a.next(); !s.done; s = a.next()) o(s.value)
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (e = a.return) && e.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }, Pt.prototype.preloadImages = function(e, t) {
                    var n = this;
                    if ("drawImage" !== e.property || "string" != typeof e.args[0] || this.imageMap.has(t)) this.hasImageArg(e.args) && this.getImageArgs(e.args).forEach(function(e) {
                        var t = new Image;
                        t.src = e, n.imageMap.set(e, t)
                    });
                    else {
                        var r = document.createElement("canvas"),
                            o = r.getContext("2d"),
                            i = null == o ? void 0 : o.createImageData(r.width, r.height);
                        null == i || i.data, JSON.parse(e.args[0]), null == o || o.putImageData(i, 0, 0)
                    }
                }, Pt.prototype.applyIncremental = function(n, r) {
                    var e, t, o = this,
                        i = n.data;
                    switch (i.source) {
                        case te.IncrementalSource.Mutation:
                            r && (i.adds.forEach(function(e) {
                                return o.treeIndex.add(e)
                            }), i.texts.forEach(function(e) {
                                return o.treeIndex.text(e)
                            }), i.attributes.forEach(function(e) {
                                return o.treeIndex.attribute(e)
                            }), i.removes.forEach(function(e) {
                                return o.treeIndex.remove(e, o.mirror)
                            }));
                            try {
                                this.applyMutation(i, r)
                            } catch (e) {
                                this.warn("Exception in mutation " + (e.message || e), i)
                            }
                            break;
                        case te.IncrementalSource.Drag:
                        case te.IncrementalSource.TouchMove:
                        case te.IncrementalSource.MouseMove:
                            if (r) {
                                var a = i.positions[i.positions.length - 1];
                                this.mousePos = {
                                    x: a.x,
                                    y: a.y,
                                    id: a.id,
                                    debugData: i
                                }
                            } else i.positions.forEach(function(e) {
                                var t = {
                                    doAction: function() {
                                        o.moveAndHover(e.x, e.y, e.id, r, i)
                                    },
                                    delay: e.timeOffset + n.timestamp - o.service.state.context.baselineTime
                                };
                                o.timer.addAction(t)
                            }), this.timer.addAction({
                                doAction: function() {},
                                delay: n.delay - (null === (e = i.positions[0]) || void 0 === e ? void 0 : e.timeOffset)
                            });
                            break;
                        case te.IncrementalSource.MouseInteraction:
                            if (-1 === i.id) break;
                            var s = new Event(te.MouseInteractions[i.type].toLowerCase());
                            if (!(g = this.mirror.getNode(i.id))) return this.debugNodeNotFound(i, i.id);
                            this.emitter.emit(te.ReplayerEvents.MouseInteraction, {
                                type: i.type,
                                target: g
                            });
                            var c = this.config.triggerFocus;
                            switch (i.type) {
                                case te.MouseInteractions.Blur:
                                    "blur" in g && g.blur();
                                    break;
                                case te.MouseInteractions.Focus:
                                    c && g.focus && g.focus({
                                        preventScroll: !0
                                    });
                                    break;
                                case te.MouseInteractions.Click:
                                case te.MouseInteractions.TouchStart:
                                case te.MouseInteractions.TouchEnd:
                                    r ? (i.type === te.MouseInteractions.TouchStart ? this.touchActive = !0 : i.type === te.MouseInteractions.TouchEnd && (this.touchActive = !1), this.mousePos = {
                                        x: i.x,
                                        y: i.y,
                                        id: i.id,
                                        debugData: i
                                    }) : (i.type === te.MouseInteractions.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(i.x, i.y, i.id, r, i), i.type === te.MouseInteractions.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : i.type === te.MouseInteractions.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : i.type === te.MouseInteractions.TouchEnd && this.mouse.classList.remove("touch-active"));
                                    break;
                                case te.MouseInteractions.TouchCancel:
                                    r ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                                    break;
                                default:
                                    g.dispatchEvent(s)
                            }
                            break;
                        case te.IncrementalSource.Scroll:
                            if (-1 === i.id) break;
                            if (r) {
                                this.treeIndex.scroll(i);
                                break
                            }
                            this.applyScroll(i, !1);
                            break;
                        case te.IncrementalSource.ViewportResize:
                            this.emitter.emit(te.ReplayerEvents.Resize, {
                                width: i.width,
                                height: i.height
                            });
                            break;
                        case te.IncrementalSource.Input:
                            if (-1 === i.id) break;
                            if (r) {
                                this.treeIndex.input(i);
                                break
                            }
                            this.applyInput(i);
                            break;
                        case te.IncrementalSource.MediaInteraction:
                            if (!(g = this.mirror.getNode(i.id))) return this.debugNodeNotFound(i, i.id);
                            var u = g;
                            try {
                                i.currentTime && (u.currentTime = i.currentTime), i.volume && (u.volume = i.volume), i.muted && (u.muted = i.muted), 1 === i.type && u.pause(), 0 === i.type && u.play()
                            } catch (e) {
                                this.config.showWarning && console.warn("Failed to replay media interactions: " + (e.message || e))
                            }
                            break;
                        case te.IncrementalSource.StyleSheetRule:
                            if (!(g = this.mirror.getNode(i.id))) return this.debugNodeNotFound(i, i.id);
                            var l, d = g,
                                f = g.parentNode,
                                p = this.fragmentParentMap.has(f),
                                h = p ? null : d.sheet;
                            h || (this.virtualStyleRulesMap.has(g) ? l = this.virtualStyleRulesMap.get(g) : (l = [], this.virtualStyleRulesMap.set(g, l))), i.adds && i.adds.forEach(function(e) {
                                var t = e.rule,
                                    n = e.index;
                                if (h) try {
                                    if (Array.isArray(n)) {
                                        var r = kt(n),
                                            o = r.positions,
                                            i = r.index;
                                        It(h.cssRules, o).insertRule(t, i)
                                    } else i = void 0 === n ? void 0 : Math.min(n, h.cssRules.length), h.insertRule(t, i)
                                } catch (e) {} else null == l || l.push({
                                    cssText: t,
                                    index: n,
                                    type: bt.Insert
                                })
                            }), i.removes && i.removes.forEach(function(e) {
                                var t = e.index;
                                if (p) null == l || l.push({
                                    index: t,
                                    type: bt.Remove
                                });
                                else try {
                                    if (Array.isArray(t)) {
                                        var n = kt(t),
                                            r = n.positions,
                                            o = n.index;
                                        It(h.cssRules, r).deleteRule(o || 0)
                                    } else null == h || h.deleteRule(t)
                                } catch (e) {}
                            });
                            break;
                        case te.IncrementalSource.StyleDeclaration:
                            if (!(g = this.mirror.getNode(i.id))) return this.debugNodeNotFound(i, i.id);
                            var m = (d = g).parentNode,
                                v = this.fragmentParentMap.has(m) ? null : d.sheet,
                                y = [];
                            v || (this.virtualStyleRulesMap.has(g) ? y = this.virtualStyleRulesMap.get(g) : (y = [], this.virtualStyleRulesMap.set(g, y))), i.set && (v ? It(v.rules, i.index).style.setProperty(i.set.property, i.set.value, i.set.priority) : y.push(ne({
                                type: bt.SetProperty,
                                index: i.index
                            }, i.set))), i.remove && (v ? It(v.rules, i.index).style.removeProperty(i.remove.property) : y.push(ne({
                                type: bt.RemoveProperty,
                                index: i.index
                            }, i.remove)));
                            break;
                        case te.IncrementalSource.CanvasMutation:
                            if (!this.config.UNSAFE_replayCanvas) return;
                            var g;
                            if (!(g = this.mirror.getNode(i.id))) return this.debugNodeNotFound(i, i.id);
                            ! function(e) {
                                var t = e.event,
                                    n = e.mutation,
                                    r = e.target,
                                    o = e.imageMap,
                                    i = e.errorHandler;
                                try {
                                    var a = "commands" in n ? n.commands : [n];
                                    [w.WebGL, w.WebGL2].includes(n.type) ? a.forEach(function(e) {
                                        Lt({
                                            mutation: e,
                                            type: n.type,
                                            target: r,
                                            imageMap: o,
                                            errorHandler: i
                                        })
                                    }) : a.forEach(function(e) {
                                        ! function(e) {
                                            var t = e.event,
                                                n = e.mutation,
                                                r = e.target,
                                                o = e.imageMap,
                                                i = e.errorHandler;
                                            try {
                                                var a = r.getContext("2d");
                                                if (n.setter) return a[n.property] = n.args[0];
                                                var s = a[n.property];
                                                if ("drawImage" === n.property && "string" == typeof n.args[0]) {
                                                    var c = o.get(t);
                                                    n.args[0] = c, s.apply(a, n.args)
                                                } else s.apply(a, n.args)
                                            } catch (e) {
                                                i(n, e)
                                            }
                                        }({
                                            event: t,
                                            mutation: e,
                                            target: r,
                                            imageMap: o,
                                            errorHandler: i
                                        })
                                    })
                                } catch (e) {
                                    i(n, e)
                                }
                            }({
                                event: n,
                                mutation: i,
                                target: g,
                                imageMap: this.imageMap,
                                errorHandler: this.warnCanvasMutationFailed.bind(this)
                            });
                            break;
                        case te.IncrementalSource.Font:
                            try {
                                var b = new FontFace(i.family, i.buffer ? new Uint8Array(JSON.parse(i.fontSource)) : i.fontSource, i.descriptors);
                                null === (t = this.iframe.contentDocument) || void 0 === t || t.fonts.add(b)
                            } catch (e) {
                                this.config.showWarning && console.warn(e)
                            }
                    }
                }, Pt.prototype.applyMutation = function(u, g) {
                    var e, t, b = this;

                    function n(e) {
                        var t, n, r;
                        if (!b.iframe.contentDocument) return console.warn("Looks like your replayer has been destroyed.");
                        var o = b.mirror.getNode(e.parentId);
                        if (!o) return e.node.type === Y.Document ? b.newDocumentQueue.push(e) : S.push(e);
                        var i = null;
                        b.iframe.contentDocument.contains ? i = b.iframe.contentDocument.contains(o) : b.iframe.contentDocument.body.contains && (i = b.iframe.contentDocument.body.contains(o));
                        var a = 0 < (null === (r = o.getElementsByTagName) || void 0 === r ? void 0 : r.call(o, "iframe").length);
                        if (g && i && !ye(o) && !a) {
                            var s = document.createDocumentFragment();
                            for (b.mirror.map[e.parentId] = s, b.fragmentParentMap.set(s, o), b.storeState(o); o.firstChild;) s.appendChild(o.firstChild);
                            o = s
                        }
                        e.node.isShadow && ge(o) && (o = o.shadowRoot);
                        var c, u, l = null,
                            d = null;
                        if (e.previousId && (l = b.mirror.getNode(e.previousId)), e.nextId && (d = b.mirror.getNode(e.nextId)), u = null, (c = e).nextId && (u = b.mirror.getNode(c.nextId)), null !== c.nextId && void 0 !== c.nextId && -1 !== c.nextId && !u) return S.push(e);
                        if (!e.node.rootId || b.mirror.getNode(e.node.rootId)) {
                            var f = e.node.rootId ? b.mirror.getNode(e.node.rootId) : b.iframe.contentDocument;
                            if (ye(o)) b.attachDocumentToIframe(e, o);
                            else {
                                var p = x(e.node, {
                                    doc: f,
                                    map: b.mirror.map,
                                    skipChild: !0,
                                    hackCss: !0,
                                    cache: b.cache
                                });
                                if (-1 !== e.previousId && -1 !== e.nextId) {
                                    if ("__sn" in o && o.__sn.type === Y.Element && "textarea" === o.__sn.tagName && e.node.type === Y.Text) try {
                                        for (var h = re(Array.from(o.childNodes)), m = h.next(); !m.done; m = h.next()) {
                                            var v = m.value;
                                            v.nodeType === o.TEXT_NODE && o.removeChild(v)
                                        }
                                    } catch (e) {
                                        t = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            m && !m.done && (n = h.return) && n.call(h)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                    }
                                    if (l && l.nextSibling && l.nextSibling.parentNode) o.insertBefore(p, l.nextSibling);
                                    else if (d && d.parentNode) o.contains(d) ? o.insertBefore(p, d) : o.insertBefore(p, null);
                                    else {
                                        if (o === f)
                                            for (; f.firstChild;) f.removeChild(f.firstChild);
                                        o.appendChild(p)
                                    }
                                    if (ye(p)) {
                                        var y = b.newDocumentQueue.find(function(e) {
                                            return e.parentId === p.__sn.id
                                        });
                                        y && (b.attachDocumentToIframe(y, p), b.newDocumentQueue = b.newDocumentQueue.filter(function(e) {
                                            return e !== y
                                        }))
                                    }(e.previousId || e.nextId) && b.legacy_resolveMissingNode(w, o, p, e)
                                } else w[e.node.id] = {
                                    node: p,
                                    mutation: e
                                }
                            }
                        }
                    }
                    u.removes.forEach(function(t) {
                        var e = b.mirror.getNode(t.id);
                        if (!e) {
                            if (u.removes.find(function(e) {
                                    return e.id === t.parentId
                                })) return;
                            return b.warnNodeNotFound(u, t.id)
                        }
                        b.virtualStyleRulesMap.has(e) && b.virtualStyleRulesMap.delete(e);
                        var n = b.mirror.getNode(t.parentId);
                        if (!n) return b.warnNodeNotFound(u, t.parentId);
                        if (t.isShadow && ge(n) && (n = n.shadowRoot), b.mirror.removeNodeFromMap(e), n) {
                            var r = null,
                                o = "__sn" in n ? b.fragmentParentMap.get(n) : void 0;
                            o && o.contains(e) ? n = o : b.fragmentParentMap.has(e) && (r = b.fragmentParentMap.get(e), b.fragmentParentMap.delete(e), e = r);
                            try {
                                n.removeChild(e)
                            } catch (t) {
                                if (!(t instanceof DOMException)) throw t;
                                b.warn("parent could not remove child in mutation", n, o, e, r, u)
                            }
                        }
                    });
                    var w = ne({}, this.legacy_missingNodeRetryMap),
                        S = [];
                    u.adds.forEach(function(e) {
                        n(e)
                    });
                    for (var r = Date.now(); S.length;) {
                        var o = R(S);
                        if (S.length = 0, 500 < Date.now() - r) {
                            this.warn("Timeout in the loop, please check the resolve tree data:", o);
                            break
                        }
                        try {
                            for (var i = (e = void 0, re(o)), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                this.mirror.getNode(s.value.parentId) ? N(s, function(e) {
                                    n(e)
                                }) : this.debug("Drop resolve tree since there is no parent for the root node.", s)
                            }
                        } catch (u) {
                            e = {
                                error: u
                            }
                        } finally {
                            try {
                                a && !a.done && (t = i.return) && t.call(i)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }
                    Object.keys(w).length && Object.assign(this.legacy_missingNodeRetryMap, w), u.texts.forEach(function(t) {
                        var e = b.mirror.getNode(t.id);
                        if (!e) {
                            if (u.removes.find(function(e) {
                                    return e.id === t.id
                                })) return;
                            return b.warnNodeNotFound(u, t.id)
                        }
                        b.fragmentParentMap.has(e) && (e = b.fragmentParentMap.get(e)), e.textContent = t.value
                    }), u.attributes.forEach(function(t) {
                        var e = b.mirror.getNode(t.id);
                        if (!e) {
                            if (u.removes.find(function(e) {
                                    return e.id === t.id
                                })) return;
                            return b.warnNodeNotFound(u, t.id)
                        }
                        for (var n in b.fragmentParentMap.has(e) && (e = b.fragmentParentMap.get(e)), t.attributes)
                            if ("string" == typeof n) {
                                var r = t.attributes[n];
                                if (null === r) e.removeAttribute(n);
                                else if ("string" == typeof r) try {
                                    e.setAttribute(n, r)
                                } catch (e) {
                                    b.config.showWarning && console.warn("An error occurred may due to the checkout feature.", e)
                                } else if ("style" === n) {
                                    var o = r,
                                        i = e;
                                    for (var a in o)
                                        if (!1 === o[a]) i.style.removeProperty(a);
                                        else if (o[a] instanceof Array) {
                                        var s = o[a];
                                        i.style.setProperty(a, s[0], s[1])
                                    } else {
                                        var c = o[a];
                                        i.style.setProperty(a, c)
                                    }
                                }
                            }
                    })
                }, Pt.prototype.applyScroll = function(e, t) {
                    var n = this.mirror.getNode(e.id);
                    if (!n) return this.debugNodeNotFound(e, e.id);
                    if (n === this.iframe.contentDocument) this.iframe.contentWindow.scrollTo({
                        top: e.y,
                        left: e.x,
                        behavior: t ? "auto" : "smooth"
                    });
                    else if (n.__sn.type === Y.Document) n.defaultView.scrollTo({
                        top: e.y,
                        left: e.x,
                        behavior: t ? "auto" : "smooth"
                    });
                    else try {
                        n.scrollTop = e.y, n.scrollLeft = e.x
                    } catch (e) {}
                }, Pt.prototype.applyInput = function(e) {
                    var t = this.mirror.getNode(e.id);
                    if (!t) return this.debugNodeNotFound(e, e.id);
                    try {
                        t.checked = e.isChecked, t.value = e.text
                    } catch (e) {}
                }, Pt.prototype.legacy_resolveMissingNode = function(e, t, n, r) {
                    var o = r.previousId,
                        i = r.nextId,
                        a = o && e[o],
                        s = i && e[i];
                    if (a) {
                        var c = a.node,
                            u = a.mutation;
                        t.insertBefore(c, n), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u)
                    }
                    s && (c = s.node, u = s.mutation, t.insertBefore(c, n.nextSibling), delete e[u.node.id], delete this.legacy_missingNodeRetryMap[u.node.id], (u.previousId || u.nextId) && this.legacy_resolveMissingNode(e, t, c, u))
                }, Pt.prototype.moveAndHover = function(e, t, n, r, o) {
                    var i = this.mirror.getNode(n);
                    if (!i) return this.debugNodeNotFound(o, n);
                    var a = O(i, this.iframe),
                        s = e * a.absoluteScale + a.x,
                        c = t * a.absoluteScale + a.y;
                    this.mouse.style.left = s + "px", this.mouse.style.top = c + "px", r || this.drawMouseTail({
                        x: s,
                        y: c
                    }), this.hoverElements(i)
                }, Pt.prototype.drawMouseTail = function(t) {
                    var e = this;
                    if (this.mouseTail) {
                        var n = !0 === this.config.mouseTail ? Nt : Object.assign({}, Nt, this.config.mouseTail),
                            r = n.lineCap,
                            o = n.lineWidth,
                            i = n.strokeStyle,
                            a = n.duration,
                            s = function() {
                                if (e.mouseTail) {
                                    var t = e.mouseTail.getContext("2d");
                                    t && e.tailPositions.length && (t.clearRect(0, 0, e.mouseTail.width, e.mouseTail.height), t.beginPath(), t.lineWidth = o, t.lineCap = r, t.strokeStyle = i, t.moveTo(e.tailPositions[0].x, e.tailPositions[0].y), e.tailPositions.forEach(function(e) {
                                        return t.lineTo(e.x, e.y)
                                    }), t.stroke())
                                }
                            };
                        this.tailPositions.push(t), s(), setTimeout(function() {
                            e.tailPositions = e.tailPositions.filter(function(e) {
                                return e !== t
                            }), s()
                        }, a / this.speedService.state.context.timer.speed)
                    }
                }, Pt.prototype.hoverElements = function(e) {
                    var t;
                    null === (t = this.iframe.contentDocument) || void 0 === t || t.querySelectorAll(".\\:hover").forEach(function(e) {
                        e.classList.remove(":hover")
                    });
                    for (var n = e; n;) n.classList && n.classList.add(":hover"), n = n.parentElement
                }, Pt.prototype.isUserInteraction = function(e) {
                    return e.type === te.EventType.IncrementalSnapshot && e.data.source > te.IncrementalSource.Mutation && e.data.source <= te.IncrementalSource.Input
                }, Pt.prototype.backToNormal = function() {
                    this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
                        type: "BACK_TO_NORMAL"
                    }), this.emitter.emit(te.ReplayerEvents.SkipEnd, {
                        speed: this.speedService.state.context.normalSpeed
                    }))
                }, Pt.prototype.restoreRealParent = function(e, t) {
                    (this.mirror.map[t.__sn.id] = t).__sn.type === Y.Element && "textarea" === t.__sn.tagName && e.textContent && (t.value = e.textContent), t.appendChild(e), this.restoreState(t)
                }, Pt.prototype.storeState = function(e) {
                    var t, n;
                    if (e && e.nodeType === e.ELEMENT_NODE) {
                        var r = e;
                        (r.scrollLeft || r.scrollTop) && this.elementStateMap.set(e, {
                            scroll: [r.scrollLeft, r.scrollTop]
                        }), "STYLE" === r.tagName && function(e, t) {
                            var n;
                            try {
                                var r = Array.from((null === (n = e.sheet) || void 0 === n ? void 0 : n.cssRules) || []).map(function(e) {
                                    return e.cssText
                                });
                                t.set(e, [{
                                    type: bt.Snapshot,
                                    cssTexts: r
                                }])
                            } catch (e) {}
                        }(r, this.virtualStyleRulesMap);
                        var o = r.children;
                        try {
                            for (var i = re(Array.from(o)), a = i.next(); !a.done; a = i.next()) {
                                var s = a.value;
                                this.storeState(s)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                }, Pt.prototype.restoreState = function(e) {
                    var t, n;
                    if (e.nodeType === e.ELEMENT_NODE) {
                        var r = e;
                        if (this.elementStateMap.has(e)) {
                            var o = this.elementStateMap.get(e);
                            o.scroll && (r.scrollLeft = o.scroll[0], r.scrollTop = o.scroll[1]), this.elementStateMap.delete(e)
                        }
                        var i = r.children;
                        try {
                            for (var a = re(Array.from(i)), s = a.next(); !s.done; s = a.next()) {
                                var c = s.value;
                                this.restoreState(c)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                }, Pt.prototype.restoreNodeSheet = function(e) {
                    var t, i, a, n = this.virtualStyleRulesMap.get(e);
                    "STYLE" === e.nodeName && n && (t = n, (a = (i = e).sheet) && t.forEach(function(e) {
                        if (e.type === bt.Insert) try {
                            if (Array.isArray(e.index)) {
                                var t = kt(e.index),
                                    n = t.positions,
                                    r = t.index;
                                It(a.cssRules, n).insertRule(e.cssText, r)
                            } else a.insertRule(e.cssText, e.index)
                        } catch (e) {} else if (e.type === bt.Remove) try {
                            if (Array.isArray(e.index)) {
                                var o = kt(e.index);
                                n = o.positions, r = o.index, It(a.cssRules, n).deleteRule(r || 0)
                            } else a.deleteRule(e.index)
                        } catch (e) {} else e.type === bt.Snapshot ? function(a, s) {
                            var e;
                            try {
                                var t = Array.from((null === (e = s.sheet) || void 0 === e ? void 0 : e.cssRules) || []).map(function(e) {
                                        return e.cssText
                                    }),
                                    n = Object.entries(t).reverse(),
                                    c = t.length;
                                n.forEach(function(e) {
                                    var t, n = oe(e, 2),
                                        r = n[0],
                                        o = n[1],
                                        i = a.indexOf(o);
                                    if (-1 === i || c < i) try {
                                        null === (t = s.sheet) || void 0 === t || t.deleteRule(Number(r))
                                    } catch (e) {}
                                    c = i
                                }), a.forEach(function(e, t) {
                                    var n, r, o;
                                    try {
                                        (null === (r = null === (n = s.sheet) || void 0 === n ? void 0 : n.cssRules[t]) || void 0 === r ? void 0 : r.cssText) !== e && (null === (o = s.sheet) || void 0 === o || o.insertRule(e, t))
                                    } catch (e) {}
                                })
                            } catch (a) {}
                        }(e.cssTexts, i) : e.type === bt.SetProperty ? It(a.cssRules, e.index).style.setProperty(e.property, e.value, e.priority) : e.type === bt.RemoveProperty && It(a.cssRules, e.index).style.removeProperty(e.property)
                    }))
                }, Pt.prototype.warnNodeNotFound = function(e, t) {
                    this.treeIndex.idRemoved(t) ? this.warn("Node with id '" + t + "' was previously removed. ", e) : this.warn("Node with id '" + t + "' not found. ", e)
                }, Pt.prototype.warnCanvasMutationFailed = function(e, t) {
                    this.warn("Has error on canvas update", t, "canvas mutation:", e)
                }, Pt.prototype.debugNodeNotFound = function(e, t) {
                    this.treeIndex.idRemoved(t) ? this.debug(Rt, "Node with id '" + t + "' was previously removed. ", e) : this.debug(Rt, "Node with id '" + t + "' not found. ", e)
                }, Pt.prototype.warn = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.config.showWarning && console.warn.apply(console, ie([Rt], e))
                }, Pt.prototype.debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.config.showDebug && console.log.apply(console, ie([Rt], e))
                }, Pt),
                Ft = tt.addCustomEvent,
                Dt = tt.freezePage;

            function Pt(e, t) {
                var y = this;
                if (this.mouseTail = null, this.tailPositions = [], this.emitter = _t(), this.legacy_missingNodeRetryMap = {}, this.cache = S(), this.imageMap = new Map, this.mirror = {
                        map: {},
                        getId: function(e) {
                            return e && e.__sn ? e.__sn.id : -1
                        },
                        getNode: function(e) {
                            return this.map[e] || null
                        },
                        removeNodeFromMap: function(e) {
                            var t = this,
                                n = e.__sn && e.__sn.id;
                            delete this.map[n], e.childNodes && e.childNodes.forEach(function(e) {
                                return t.removeNodeFromMap(e)
                            })
                        },
                        has: function(e) {
                            return this.map.hasOwnProperty(e)
                        },
                        reset: function() {
                            this.map = {}
                        }
                    }, this.firstFullSnapshot = null, this.newDocumentQueue = [], this.mousePos = null, ((this.touchActive = null) == t || !t.liveMode) && e.length < 2) throw new Error("Replayer need at least 2 events.");
                var n = {
                    speed: 1,
                    maxSpeed: 360,
                    root: document.body,
                    loadTimeout: 0,
                    skipInactive: !1,
                    showWarning: !0,
                    showDebug: !1,
                    blockClass: "rr-block",
                    liveMode: !1,
                    insertStyleRules: [],
                    triggerFocus: !0,
                    UNSAFE_replayCanvas: !1,
                    pauseAnimation: !0,
                    mouseTail: Nt
                };
                this.config = Object.assign({}, n, t), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(te.ReplayerEvents.Resize, this.handleResize), this.setupDom(), this.treeIndex = new L, this.fragmentParentMap = new Map, this.elementStateMap = new Map, this.virtualStyleRulesMap = new Map, this.emitter.on(te.ReplayerEvents.Flush, function() {
                    var e, t, n, r, o, i, a = y.treeIndex.flush(),
                        s = a.scrollMap,
                        c = a.inputMap;
                    y.fragmentParentMap.forEach(function(e, t) {
                        return y.restoreRealParent(t, e)
                    });
                    try {
                        for (var u = re(y.virtualStyleRulesMap.keys()), l = u.next(); !l.done; l = u.next()) {
                            var d = l.value;
                            y.restoreNodeSheet(d)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            l && !l.done && (t = u.return) && t.call(u)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    y.fragmentParentMap.clear(), y.elementStateMap.clear(), y.virtualStyleRulesMap.clear();
                    try {
                        for (var f = re(s.values()), p = f.next(); !p.done; p = f.next()) {
                            var h = p.value;
                            y.applyScroll(h, !0)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (r = f.return) && r.call(f)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    try {
                        for (var m = re(c.values()), v = m.next(); !v.done; v = m.next()) h = v.value, y.applyInput(h)
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            v && !v.done && (i = m.return) && i.call(m)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }), this.emitter.on(te.ReplayerEvents.PlayBack, function() {
                    y.firstFullSnapshot = null, y.mirror.reset()
                });
                var r = new at([], (null == t ? void 0 : t.speed) || n.speed);
                this.service = Et({
                    events: e.map(function(e) {
                        return t && t.unpackFn ? t.unpackFn(e) : e
                    }).sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    }),
                    timer: r,
                    timeOffset: 0,
                    baselineTime: 0,
                    lastPlayedEvent: null
                }, {
                    getCastFn: this.getCastFn,
                    applyEventsSynchronously: this.applyEventsSynchronously,
                    emitter: this.emitter
                }), this.service.start(), this.service.subscribe(function(e) {
                    y.emitter.emit(te.ReplayerEvents.StateChange, {
                        player: e
                    })
                }), this.speedService = xt(gt({
                    id: "speed",
                    context: {
                        normalSpeed: -1,
                        timer: r
                    },
                    initial: "normal",
                    states: {
                        normal: {
                            on: {
                                FAST_FORWARD: {
                                    target: "skipping",
                                    actions: ["recordSpeed", "setSpeed"]
                                },
                                SET_SPEED: {
                                    target: "normal",
                                    actions: ["setSpeed"]
                                }
                            }
                        },
                        skipping: {
                            on: {
                                BACK_TO_NORMAL: {
                                    target: "normal",
                                    actions: ["restoreSpeed"]
                                },
                                SET_SPEED: {
                                    target: "normal",
                                    actions: ["setSpeed"]
                                }
                            }
                        }
                    }
                }, {
                    actions: {
                        setSpeed: function(e, t) {
                            "payload" in t && e.timer.setSpeed(t.payload.speed)
                        },
                        recordSpeed: ft({
                            normalSpeed: function(e) {
                                return e.timer.speed
                            }
                        }),
                        restoreSpeed: function(e) {
                            e.timer.setSpeed(e.normalSpeed)
                        }
                    }
                })), this.speedService.start(), this.speedService.subscribe(function(e) {
                    y.emitter.emit(te.ReplayerEvents.StateChange, {
                        speed: e
                    })
                });
                var o = this.service.state.context.events.find(function(e) {
                        return e.type === te.EventType.Meta
                    }),
                    i = this.service.state.context.events.find(function(e) {
                        return e.type === te.EventType.FullSnapshot
                    });
                if (o) {
                    var a = o.data,
                        s = a.width,
                        c = a.height;
                    setTimeout(function() {
                        y.emitter.emit(te.ReplayerEvents.Resize, {
                            width: s,
                            height: c
                        })
                    }, 0)
                }
                i && setTimeout(function() {
                    y.firstFullSnapshot || (y.firstFullSnapshot = i, y.rebuildFullSnapshot(i), y.iframe.contentWindow.scrollTo(i.data.initialOffset))
                }, 1), this.service.state.context.events.find(Ot) && this.mouse.classList.add("touch-device")
            }
            return te.Replayer = At, te.addCustomEvent = Ft, te.freezePage = Dt, te.record = tt, te.utils = A, Object.defineProperty(te, "__esModule", {
                value: !0
            }), te
        }({}),
        et = 0,
        tt = 1,
        nt = 2,
        rt = new(function() {
            function e() {
                a(this, e), this.events = [], this.saveInterval = 0, this.firstEvent = !0, this.stopRecordingEvents = function() {}
            }
            return s(e, [{
                key: "eventsProxy",
                get: function() {
                    return this.events
                },
                set: function(e) {
                    this.events.push(e), (this.firstEvent && 4 === e.type || 150 < this.events.length) && (this.save(), this.resetInterval())
                }
            }, {
                key: "hasInvalidGUIDS",
                get: function() {
                    return !C(Ye(_)) || !C(Ye(L))
                }
            }, {
                key: "recordingTimeElapsed",
                get: function() {
                    var e = +sessionStorage.getItem(N);
                    return isNaN(e) || !e ? 0 : e
                },
                set: function(e) {
                    return sessionStorage.setItem(N, e)
                }
            }, {
                key: "isReachedMaxTime",
                get: function() {
                    return 6e4 < this.recordingTimeElapsed
                }
            }, {
                key: "start",
                value: function() {
                    var r = this;
                    return F.time("start -> recorder created"), this.stopRecordingEvents = $e.record({
                        SlimDOMOptions: {
                            script: !1,
                            comment: !1,
                            headFavicon: !1,
                            headWhitespace: !1,
                            headMetaDescKeywords: !1,
                            headMetaSocial: !1,
                            headMetaRobots: !1,
                            headMetaHttpEquiv: !1,
                            headMetaAuthorship: !1,
                            headMetaVerification: !1
                        },
                        maskAllInputs: !0,
                        sampling: {
                            mousemove: !0,
                            scroll: 150,
                            media: 600,
                            input: "last"
                        },
                        emit: function(e) {
                            var t, n;
                            4 === e.type && (e.user_agent = encodeURIComponent(navigator.userAgent.replace('"', "")), e.sizes = (t = document.body, n = document.documentElement, {
                                window_inner_width: window.innerWidth,
                                window_inner_height: window.innerHeight,
                                window_outer_width: window.outerWidth,
                                window_outer_height: window.outerHeight,
                                window_screen_width: window.screen.width,
                                window_screen_height: window.screen.height,
                                body_scroll_width: t.scrollWidth,
                                body_scroll_height: t.scrollHeight,
                                body_offset_width: t.offsetWidth,
                                body_offset_height: t.offsetHeight,
                                html_client_width: n.clientWidth,
                                html_client_height: n.clientHeight,
                                html_scroll_width: n.scrollWidth,
                                html_scroll_height: n.scrollHeight,
                                html_offset_width: n.offsetWidth,
                                html_offset_height: n.offsetHeight
                            }), e.meta = {
                                recorder_version: "1.1.6"
                            }, e.startTime = (performance.timing || {}).connectStart || P), r.eventsProxy = e, F.timeEnd("start -> first recorded event")
                        }
                    }), F.timeEnd("start -> recorder created"), this.stopRecordingEvents
                }
            }, {
                key: "stop",
                value: function(e) {
                    var t, n, r = 0 < arguments.length && void 0 !== e ? e : 0;
                    return t = r, (o(n = {}, et, function() {
                        return F.log("Session ended")
                    }), o(n, tt, function() {
                        return F.error("No visit id or page id")
                    }), o(n, nt, function() {
                        return F.log("Recording not allowed.")
                    }), n)[t](), this.stopRecordingEvents(), sessionStorage.removeItem(_), sessionStorage.removeItem(L), clearInterval(this.saveInterval), {
                        stopReason: r
                    }
                }
            }, {
                key: "genEventsBody",
                value: function(e) {
                    var t = e.events,
                        n = this.firstEvent ? "start" : "events",
                        r = location.href,
                        o = {
                            action: n,
                            page_id: Ye(L),
                            visit_id: Ye(_),
                            location: r,
                            action_log: {
                                events: t
                            }
                        };
                    return JSON.stringify(o)
                }
            }, {
                key: "save",
                value: function() {
                    if (this.recordingTimeElapsed = Date.now() - P, this.isReachedMaxTime) return this.stop(et);
                    if (this.hasInvalidGUIDS) return this.stop(tt);
                    if (this.eventsProxy.length) {
                        var e = this.genEventsBody({
                            events: this.events
                        });
                        return this.events = [], this.firstEvent = !1, this.sendEvents(e)
                    }
                }
            }, {
                key: "sendEvents",
                value: function(e) {
                    return F.timeEnd("start -> first save sent"), fetch("https://monitor.clickcease.com/V2/recorder/entry2", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: e
                    }).then(function() {
                        F.timeEnd("start -> after first save")
                    })
                }
            }, {
                key: "resetInterval",
                value: function() {
                    var e = this;
                    clearInterval(this.saveInterval), this.saveInterval = setInterval(function() {
                        return e.save()
                    }, 2500)
                }
            }, {
                key: "startSaving",
                value: function() {
                    var e = this;
                    Ye(_) ? Ze(L) : (Ze(L), Ze(_)), setTimeout(function() {
                        void 0 === (e.save() || {}).stopReason && e.resetInterval()
                    }, 1)
                }
            }]), e
        }()),
        ot = /fbq\(['|"]*init['|"]*,\s*['|"]*(.*?)['|"]*\)/,
        it = new RegExp(ot.source, "g");

    function at() {
        return (at = i(T().mark(function e() {
            var t, n, r, o, i, a, s, c = arguments;
            return T().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = 0 < c.length && void 0 !== c[0] ? c[0] : 0, n = {}, e.prev = 2, e.next = 5, Ke.getStatsV2();
                    case 5:
                        return r = e.sent, e.next = 8, JSON.parse(r);
                    case 8:
                        if (e.t0 = e.sent, e.t0) {
                            e.next = 11;
                            break
                        }
                        e.t0 = {};
                    case 11:
                        n = e.t0, e.next = 17;
                        break;
                    case 14:
                        e.prev = 14, e.t1 = e.catch(2), F.log(e.t1);
                    case 17:
                        if (o = n.cc, i = n.fb || {
                                fb_enabled: 0,
                                fb_ids: []
                            }, a = i.fb_ids, s = i.fb_enabled && a.length, F.log("response:", n), F.log("fraudType", t), F.log("shoudSendFBEvents", s), s && Number(t) && ze({
                                ids: a[0].split("\n").filter(function(e) {
                                    return !!e
                                })
                            }), o) return e.abrupt("return", rt.startSaving());
                        e.next = 26;
                        break;
                    case 26:
                        return e.abrupt("return", rt.stop(nt));
                    case 27:
                    case "end":
                        return e.stop()
                }
            }, e, null, [
                [2, 14]
            ])
        }))).apply(this, arguments)
    }
    window.ccinstalled ? A.error("Duplicated clickcease <script/> found, Please remove one of them.") : (window.ccinstalled = !0, F.log("Debug mode."), F.time("start -> first save sent"), F.time("start -> clientAuth[REQ]"), F.time("start -> clientAuth[RES]"), F.time("start -> after first save"), F.time("start -> first recorded event"), F.time("start -> CHEQ response"), function() {
        var e = "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
        return 0 < window.navigator.userAgent.indexOf("MSIE") || e
    }() ? Ke.stop(qe.BROWSER_NOT_SUPPORTED) : navigator.cookieEnabled ? function() {
        try {
            if (sessionStorage.getItem(_)) return 1;
            var e = window.location,
                t = e.hash,
                n = e.search,
                r = new RegExp(R.join("|"), "i"),
                o = n.includes("utm_source") && ["=ms", "=microsoft", "=bing"].some(function(e) {
                    return n.includes(e)
                });
            return r.test(t) || r.test(n) || o
        } catch (e) {
            return console.error(e), 0
        }
    }() ? (rt.start(), function() {
        at.apply(this, arguments)
    }()) : F.warn("No keys detected.") : Ke.stop(qe.BROWSER_COOCKIES_DISABLED))
}();