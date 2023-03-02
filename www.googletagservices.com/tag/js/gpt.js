(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        m = {},
        ha = {},
        p = function(a, b) {
            var c = ha[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        q = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in m ? f = m : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(m, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    q("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.h
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    q("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, m.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");
    var ia = function(a) {
            a = {
                next: a
            };
            a[p(m.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ja = function(a) {
            return a.raw = a
        },
        r = function(a) {
            var b = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && a[p(m.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: ba(a)
            }
        },
        ka = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        t = function(a) {
            return a instanceof Array ? a : ka(r(a))
        },
        ma = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        na = fa && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ma(d, e) && (a[e] = d[e])
            }
            return a
        };
    q("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa,
        v = function(a, b) {
            a.prototype = oa(b.prototype);
            a.prototype.constructor = a;
            if (ta) ta(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ra = b.prototype
        },
        ua = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    q("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.h = (e += Math.random() + 1).toString();
                if (g) {
                    g = r(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!ma(g, d)) {
                var k = new b;
                ca(g, d, {
                    value: k
                })
            }
            if (!ma(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.h] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && ma(g, d) ? g[d][this.h] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && ma(g, d) && ma(g[d], this.h)
        };
        f.prototype.delete = function(g) {
            return c(g) && ma(g, d) && ma(g[d], this.h) ? delete g[d][this.h] : !1
        };
        return f
    }, "es6");
    q("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(r([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (u) {
                    return !1
                }
            }()) return a;
        var b = new m.WeakMap,
            c = function(h) {
                this.i = {};
                this.h = f();
                this.size = 0;
                if (h) {
                    h = r(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.s ? l.s.value = k : (l.s = {
                next: this.h,
                C: this.h.C,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.s), this.h.C.next = l.s, this.h.C = l.s, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.s && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.s.C.next = h.s.next, h.s.next.C = h.s.C, h.s.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.i = {};
            this.h = this.h.C = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).s
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).s) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[p(m.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.i[l];
                if (n && ma(h.i, l))
                    for (h = 0; h < n.length; h++) {
                        var u = n[h];
                        if (k !== k && u.key !== u.key || k === u.key) return {
                            id: l,
                            list: n,
                            index: h,
                            s: u
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    s: void 0
                }
            },
            e = function(h, k) {
                var l = h.h;
                return ia(function() {
                    if (l) {
                        for (; l.head != h.h;) l = l.C;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.C = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    var va = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(m.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    q("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(r([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.h = new m.Map;
            if (c) {
                c = r(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return p(this.h, "values").call(this.h)
        };
        b.prototype.keys = p(b.prototype, "values");
        b.prototype[p(m.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var wa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = wa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    q("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? p(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || p(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== wa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var w = this || self,
        xa = function(a) {
            a = a.split(".");
            for (var b = w, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Aa = function(a) {
            return Object.prototype.hasOwnProperty.call(a, ya) && a[ya] || (a[ya] = ++za)
        },
        ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        za = 0,
        Ba = function(a, b) {
            a = a.split(".");
            var c = w;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Ca = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ka = function(a) {
            if (!Da.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ia, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ja, "&#0;"));
            return a
        },
        Ea = /&/g,
        Fa = /</g,
        Ga = />/g,
        Ha = /"/g,
        Ia = /'/g,
        Ja = /\x00/g,
        Da = /[\x00&<>"']/,
        Ma = function(a, b) {
            var c = 0;
            a = Ca(String(a)).split(".");
            b = Ca(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        La = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Na() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Oa(a) {
        return -1 != Na().indexOf(a)
    };
    var Pa = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Qa = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Ra = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Sa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Va(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Wa = function(a) {
        Wa[" "](a);
        return a
    };
    Wa[" "] = function() {};
    var Xa = {},
        Ya = null,
        $a = function(a) {
            var b;
            void 0 === b && (b = 0);
            Za();
            b = Xa[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        bb = function(a) {
            var b = [];
            ab(a, function(c) {
                b.push(c)
            });
            return b
        },
        ab = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Ya[l];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Za();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Za = function() {
            if (!Ya) {
                Ya = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Xa[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Ya[f] && (Ya[f] = e)
                    }
                }
            }
        };
    var cb = "undefined" !== typeof Uint8Array,
        db = {};
    var eb, fb = function(a) {
        if (db !== db) throw Error("illegal external caller");
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    fb.prototype.isEmpty = function() {
        return null == this.T
    };
    var y = "function" === typeof m.Symbol && "symbol" === typeof(0, m.Symbol)() ? (0, m.Symbol)() : void 0;

    function z(a, b) {
        if (y) return a[y] |= b;
        if (void 0 !== a.A) return a.A |= b;
        Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function gb(a, b) {
        y ? a[y] && (a[y] &= ~b) : void 0 !== a.A && (a.A &= ~b)
    }

    function A(a) {
        var b;
        y ? b = a[y] : b = a.A;
        return null == b ? 0 : b
    }

    function B(a, b) {
        y ? a[y] = b : void 0 !== a.A ? a.A = b : Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function hb(a) {
        z(a, 1);
        return a
    }

    function C(a) {
        return !!(A(a) & 2)
    }

    function ib(a) {
        z(a, 16);
        return a
    }

    function jb(a, b) {
        B(b, (a | 0) & -51)
    }

    function kb(a, b) {
        B(b, (a | 18) & -41)
    };
    var lb = {};

    function mb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var nb, ob, pb = [];
    B(pb, 23);
    ob = Object.freeze(pb);
    var qb = function(a) {
        if (C(a.l)) throw Error("Cannot mutate an immutable Message");
    };

    function rb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && mb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    var sb;

    function tb(a, b) {
        sb = b;
        a = new a(b);
        sb = void 0;
        return a
    };

    function ub(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (A(a) & 128)) return a = Array.prototype.slice.call(a), rb(a), a
                    } else {
                        if (cb && null != a && a instanceof Uint8Array) return $a(a);
                        if (a instanceof fb) {
                            var b = a.T;
                            return null == b ? "" : "string" === typeof b ? b : a.T = $a(b)
                        }
                    }
        }
        return a
    };

    function vb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = wb(a, b, c, void 0 !== d);
            else if (mb(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = vb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function wb(a, b, c, d) {
        var e = A(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = vb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function xb(a) {
        return a.R === lb ? a.toJSON() : ub(a)
    }

    function yb(a, b) {
        a & 128 && rb(b)
    };
    var zb = function(a) {
            return a.h || (a.h = a.l[a.i + a.F] = {})
        },
        D = function(a, b, c) {
            return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.l[b + a.F]
        },
        G = function(a, b, c, d) {
            qb(a);
            return F(a, b, c, d)
        };

    function F(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return zb(a)[b] = c, a;
        a.l[b + a.F] = c;
        (c = a.h) && b in c && delete c[b];
        return a
    }

    function Cb(a, b, c, d, e) {
        var f = D(a, b, d);
        Array.isArray(f) || (f = ob);
        var g = A(f);
        g & 1 || hb(f);
        if (e) g & 2 || z(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && gb(f, 16) : (f = hb(Array.prototype.slice.call(f)), F(a, b, f, d))
        }
        return f
    }

    function Db(a, b) {
        var c = C(a.l),
            d = Cb(a, b, 1, !1, c),
            e = A(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = hb(d.slice()), F(a, b, d, !1));
            for (var f = 0, g = 0; f < d.length; f++) {
                var h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            z(d, 5);
            c && (z(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), z(d, 5), Eb(a, b, d, !1));
        return d
    }
    var H = function(a, b) {
        a = D(a, b);
        return null == a ? 0 : a
    };

    function Fb(a, b, c) {
        if (null == c) G(a, b, ob);
        else {
            var d = A(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (var e = 0; e < c.length; e++) c[e] = c[e];
                B(c, d | 5)
            }
            G(a, b, c)
        }
    }
    var Eb = function(a, b, c, d) {
        if (null == c) c = ob;
        else {
            var e = A(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), B(c, e | 1))
        }
        return G(a, b, c, d)
    };

    function J(a, b, c, d) {
        qb(a);
        c !== d ? F(a, b, c) : F(a, b, void 0, !1);
        return a
    }
    var Hb = function(a, b, c, d) {
            qb(a);
            (c = Gb(a, c)) && c !== b && null != d && F(a, c, void 0, !1);
            return F(a, b, d)
        },
        K = function(a, b, c) {
            return Gb(a, b) === c ? c : -1
        },
        Gb = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != D(a, e) && (0 !== c && F(a, c, void 0, !1), c = e)
            }
            return c
        },
        Ib = function(a, b, c, d) {
            var e = D(a, c, d);
            var f = !1;
            var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.R !== lb ? f ? new b(e) : void 0 : e;
            g !== e && null != g && (F(a, c, g, d), z(g.l, A(a.l) & 18));
            return g
        },
        L = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Ib(a, b, c, d);
            if (null == b) return b;
            if (!C(a.l)) {
                var e = Jb(b);
                e !== b && (b = e, F(a, c, b, d))
            }
            return b
        },
        M = function(a, b, c) {
            var d = C(a.l);
            a.u || (a.u = {});
            var e = a.u[c];
            var f = Cb(a, c, 3, void 0, d);
            if (e) d || (Object.isFrozen(e) ? d || (e = Array.prototype.slice.call(e), a.u[c] = e) : d && Object.freeze(e));
            else {
                e = [];
                var g = !!(A(a.l) & 16),
                    h = C(f);
                !d && h && (f = hb(Array.prototype.slice.call(f)), F(a, c, f));
                for (var k = h, l = 0; l < f.length; l++) {
                    var n = f[l];
                    var u = b;
                    var x = g,
                        I = !1;
                    I = void 0 === I ? !1 : I;
                    x = void 0 === x ? !1 : x;
                    u = Array.isArray(n) ? new u(x ? ib(n) : n) : I ? new u : void 0;
                    void 0 !== u && (k = k || C(n), e.push(u), h && z(u.l, 2))
                }
                a.u[c] = e;
                Object.isFrozen(f) || (b = A(f) | 33, B(f, k ? b & -9 : b | 8));
                (d || d && h) && z(e, 2);
                (d || d) && Object.freeze(e)
            }
            a = Cb(a, c, 3, void 0, d);
            if (!(d || A(a) & 8)) {
                for (d = 0; d < e.length; d++) c = e[d], f = Jb(c), c !== f && (e[d] = f, a[d] = e[d].l);
                z(a, 8)
            }
            return e
        },
        Kb = function(a, b, c) {
            qb(a);
            null == c && (c = void 0);
            return F(a, b, c)
        },
        Lb = function(a, b, c, d) {
            qb(a);
            null == d && (d = void 0);
            return Hb(a, b, c, d)
        },
        Mb = function(a, b, c, d) {
            qb(a);
            if (null != c) {
                var e = hb([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].l, f = f || C(e[g]);
                a.u || (a.u = {});
                a.u[b] = c;
                c = e;
                f ? gb(c, 8) : z(c, 8)
            } else a.u && (a.u[b] = void 0), e = ob;
            return F(a, b, e, d)
        };

    function N(a, b) {
        return null == a ? b : a
    }
    var Nb = function(a, b) {
            return N(D(a, b), "")
        },
        Ob = function(a, b) {
            a = D(a, b);
            return N(null == a ? a : !!a, !1)
        },
        Pb = function(a, b) {
            a = D(a, b);
            return N(null == a ? a : +a, 0)
        };

    function Qb(a) {
        var b = A(a);
        if (b & 2) return a;
        a = Ra(a, Rb);
        kb(b, a);
        Object.freeze(a);
        return a
    }

    function Sb(a, b, c) {
        c = void 0 === c ? kb : c;
        if (null != a) {
            if (cb && a instanceof Uint8Array) return a.length ? new fb(new Uint8Array(a)) : eb || (eb = new fb(null));
            if (Array.isArray(a)) {
                var d = A(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return B(a, d | 2), a;
                a = wb(a, Sb, c, !0);
                b = A(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.R === lb ? Rb(a) : a
        }
    }

    function Rb(a) {
        if (C(a.l)) return a;
        a = Tb(a, !0);
        z(a.l, 2);
        return a
    }

    function Tb(a, b) {
        var c = a.l,
            d = ib([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (A(c) & 128) && rb(d);
        b = b || C(a.l) ? kb : jb;
        d = tb(a.constructor, d);
        a.ja && (d.ja = a.ja.slice());
        e = !!(A(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && mb(g))
                for (var h in g) {
                    var k = +h;
                    if (p(Number, "isNaN").call(Number, k)) zb(d)[k] = g[k];
                    else {
                        var l = g[h],
                            n = a.u && a.u[k];
                        n ? Mb(d, k, Qb(n), !0) : G(d, k, Sb(l, e, b), !0)
                    }
                } else k = f - a.F, (l = a.u && a.u[k]) ? Mb(d, k, Qb(l), !1) : G(d, k, Sb(g, e, b), !1)
        }
        return d
    }

    function Jb(a) {
        if (!C(a.l)) return a;
        var b = Tb(a, !1);
        b.j = a;
        return b
    };
    var O = function(a, b, c) {
        null == a && (a = sb);
        sb = void 0;
        var d = this.constructor.h || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            B(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = z(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var n = a[a.length - 1];
                        if (mb(n) && "g" in n) {
                            d = 0;
                            l |= 128;
                            delete n.g;
                            var u = !0,
                                x;
                            for (x in n) {
                                u = !1;
                                break
                            }
                            u && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && B(a, l)
        }
        this.F = (f ? 0 : -1) - d;
        this.u = void 0;
        this.l = a;
        a: {
            f = this.l.length;d = f - 1;
            if (f && (f = this.l[d], mb(f))) {
                this.h = f;
                this.i = d - this.F;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.F), this.h = void 0) : this.i = Number.MAX_VALUE
        }
        if (!e && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.i;
            var I;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.F, (d = a[g]) ? Ub(d, b) : a[g] = ob) : (I || (I = zb(this)), (d = I[g]) ? Ub(d, b) : I[g] = ob)
        }
    };
    O.prototype.toJSON = function() {
        var a = this.l;
        return nb ? a : wb(a, xb, yb)
    };

    function Ub(a, b) {
        if (Array.isArray(a)) {
            var c = A(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && B(a, c | d)
        }
    }
    O.prototype.R = lb;

    function Vb(a, b) {
        return ub(b)
    };
    var Wb = void 0;

    function Xb() {
        var a = !P(Yb).h,
            b = Wb;
        Wb = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var ac = function(a, b) {
        this.i = a === Zb && b || "";
        this.j = $b
    };
    ac.prototype.H = !0;
    ac.prototype.h = function() {
        return this.i
    };
    var bc = function(a) {
            return a instanceof ac && a.constructor === ac && a.j === $b ? a.i : "type_error:Const"
        },
        Q = function(a) {
            return new ac(Zb, a)
        },
        $b = {},
        Zb = {};
    var cc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var dc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ec(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var fc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var R = function(a, b) {
        this.i = b === gc ? a : ""
    };
    R.prototype.toString = function() {
        return this.i + ""
    };
    R.prototype.H = !0;
    R.prototype.h = function() {
        return this.i.toString()
    };
    var kc = function(a, b) {
            a = hc.exec(ic(a).toString());
            var c = a[3] || "";
            return new R(a[1] + jc("?", a[2] || "", b) + jc("#", c), gc)
        },
        ic = function(a) {
            return a instanceof R && a.constructor === R ? a.i : "type_error:TrustedResourceUrl"
        },
        hc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        lc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += bc(a[c]);
            return new R(b, gc)
        },
        gc = {},
        jc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var S = function(a, b) {
        this.i = b === mc ? a : ""
    };
    S.prototype.toString = function() {
        return this.i.toString()
    };
    S.prototype.H = !0;
    S.prototype.h = function() {
        return this.i.toString()
    };
    var nc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        oc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        mc = {},
        pc = new S("about:invalid#zClosurez", mc);
    var qc = {},
        rc = function(a, b) {
            this.i = b === qc ? a : "";
            this.H = !0
        };
    rc.prototype.h = function() {
        return this.i.toString()
    };
    rc.prototype.toString = function() {
        return this.i.toString()
    };
    var sc = function(a) {
            return a instanceof rc && a.constructor === rc ? a.i : "type_error:SafeHtml"
        },
        tc = function(a) {
            return a instanceof rc ? a : new rc(Ka("object" == typeof a && a.H ? a.h() : String(a)), qc)
        },
        xc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!uc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof ac) c = bc(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in vc)
                                    if (c instanceof R) c = ic(c).toString();
                                    else if (c instanceof S) c = c instanceof S && c.constructor === S ? c.i : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof S || (c = "object" == typeof c && c.H ? c.h() : String(c), oc.test(c) ? c = new S(c, mc) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(nc) ? new S(c, mc) : null)), c = (c || pc).h();
                                else throw Error("");
                            }
                            c.H && (c = c.h());
                            g = g + '="' + Ka(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === fc.script ? k += ">" : (h = wc(h), k += ">" + sc(h).toString() + "\x3c/script>");
            return new rc(k, qc)
        },
        zc = function(a) {
            var b = tc(yc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = tc(e), c.push(sc(e).toString()))
                };
            a.forEach(d);
            return new rc(c.join(sc(b).toString()), qc)
        },
        wc = function(a) {
            return zc(Array.prototype.slice.call(arguments))
        },
        uc = /^[a-zA-Z0-9-]+$/,
        vc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        yc = new rc(w.trustedTypes && w.trustedTypes.emptyHTML || "", qc);
    var Bc = function() {
            a: {
                var a = w.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ac.test(a)) break a;a = ""
            }
            return a
        },
        Ac = /^[\w+/_-]+[=]{0,2}$/;
    var Cc = function() {
        return Oa("iPad") || Oa("Android") && !Oa("Mobile") || Oa("Silk")
    };
    var Dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ec = function(a) {
            return a ? decodeURI(a) : a
        },
        Fc = /#|$/,
        Gc = function(a, b) {
            var c = a.search(Fc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Hc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Ic(a, b) {
        a.write(sc(b))
    };
    var Jc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Wa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Kc = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? w : c;
            for (var d = 0; c && 40 > d++ && (!b && !Jc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Lc = function(a) {
            var b = a;
            Kc(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Pc = function(a, b) {
            if (!Mc() && !Nc()) {
                var c = Math.random();
                if (c < b) return c = Oc(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Oc = function() {
            if (!m.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                m.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Qc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Rc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Nc = cc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Sc, void 0) || 1E-4 > Math.random()
        }),
        Mc = cc(function() {
            return Sc("MSIE")
        }),
        Sc = function(a) {
            return -1 != Na().indexOf(a)
        },
        Tc = /^(-?[0-9.]{1,30})$/;

    function Uc(a) {
        if (!Tc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Vc = cc(function() {
            return !Cc() && (Oa("iPod") || Oa("iPhone") || Oa("Android") || Oa("IEMobile")) ? 2 : Cc() ? 1 : 0
        }),
        Wc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Xc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Yc(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return new R(a[0], gc);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new R(c.join(""), gc)
    };
    var Zc = {
        Ha: 0,
        Ga: 1,
        Da: 2,
        ya: 3,
        Ea: 4,
        za: 5,
        Fa: 6,
        Ba: 7,
        Ca: 8,
        xa: 9,
        Aa: 10
    };
    var $c = {
        Ja: 0,
        Ka: 1,
        Ia: 2
    };
    var ad = "a".charCodeAt(),
        bd = ec(Zc),
        cd = ec($c);
    var dd = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.i = a;
            this.h = 0
        },
        gd = function(a) {
            var b = T(a, 16);
            return !0 === !!T(a, 1) ? (a = ed(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : fd(a, b)
        },
        ed = function(a) {
            for (var b = T(a, 12), c = []; b--;) {
                var d = !0 === !!T(a, 1),
                    e = T(a, 16);
                if (d)
                    for (d = T(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        fd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (T(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        T = function(a, b) {
            if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.i.substring(a.h, a.h + b);
            a.h += b;
            return parseInt(c, 2)
        };
    var id = function(a, b) {
            try {
                var c = bb(a.split(".")[0]).map(function(e) {
                        return (aa = e.toString(2), p(aa, "padStart")).call(aa, 8, "0")
                    }).join(""),
                    d = new dd(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.h += 78;
                c.cmpId = T(d, 12);
                c.cmpVersion = T(d, 12);
                d.h += 30;
                c.tcfPolicyVersion = T(d, 6);
                c.isServiceSpecific = !!T(d, 1);
                c.useNonStandardStacks = !!T(d, 1);
                c.specialFeatureOptins = hd(fd(d, 12, cd), cd);
                c.purpose = {
                    consents: hd(fd(d, 24, bd), bd),
                    legitimateInterests: hd(fd(d, 24, bd), bd)
                };
                c.purposeOneTreatment = !!T(d, 1);
                c.publisherCC = String.fromCharCode(ad + T(d, 6)) + String.fromCharCode(ad + T(d, 6));
                c.vendor = {
                    consents: hd(gd(d), b),
                    legitimateInterests: hd(gd(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        hd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = r(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function jd(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ma] = b.message.toJSON(), c)]
        })])
    };
    var kd = function(a, b) {
        if (m.globalThis.fetch) m.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var md = function(a) {
        O.call(this, a, -1, ld)
    };
    v(md, O);
    var nd = function(a, b) {
            return Kb(a, 1, b)
        },
        od = function(a, b) {
            return Mb(a, 2, b)
        },
        pd = function(a, b) {
            return Eb(a, 4, b)
        },
        qd = function(a, b) {
            return Mb(a, 5, b)
        },
        rd = function(a, b) {
            return J(a, 6, b, 0)
        },
        sd = function(a) {
            O.call(this, a)
        };
    v(sd, O);
    sd.prototype.G = function() {
        return H(this, 1)
    };
    var td = function(a, b) {
            return J(a, 1, b, 0)
        },
        ud = function(a, b) {
            return J(a, 2, b, 0)
        },
        vd = function(a) {
            O.call(this, a)
        };
    v(vd, O);
    var ld = [2, 4, 5],
        wd = [1, 2];
    var yd = function(a) {
        O.call(this, a, -1, xd)
    };
    v(yd, O);
    var Ad = function(a) {
        O.call(this, a, -1, zd)
    };
    v(Ad, O);
    var xd = [2, 3],
        zd = [5],
        Bd = [1, 2, 3, 4];
    var Cd = function(a) {
        O.call(this, a)
    };
    v(Cd, O);
    Cd.prototype.getTagSessionCorrelator = function() {
        return N(D(this, 2), 0)
    };
    var Ed = function(a) {
            var b = new Cd;
            return Lb(b, 4, Dd, a)
        },
        Dd = [4, 5, 7];
    var Gd = function(a) {
        O.call(this, a, -1, Fd)
    };
    v(Gd, O);
    var Fd = [3];
    var Id = function(a) {
        O.call(this, a, -1, Hd)
    };
    v(Id, O);
    var Hd = [4];
    var Kd = function(a) {
        O.call(this, a, -1, Jd)
    };
    v(Kd, O);
    Kd.prototype.getTagSessionCorrelator = function() {
        return N(D(this, 1), 0)
    };
    var Jd = [2];
    var Ld = function(a) {
        O.call(this, a)
    };
    v(Ld, O);
    var Md = [4];

    function Nd(a) {
        a.la.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                ma: 2,
                message: b
            }
        })))
    }

    function Od(a) {
        a.la.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                ma: 4,
                message: b
            }
        })))
    };
    var Pd = function() {
        this.j = this.j;
        this.m = this.m
    };
    Pd.prototype.j = !1;
    Pd.prototype.I = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };
    var Qd = function(a, b, c, d, e) {
            this.B = a;
            this.o = b;
            this.D = c;
            this.j = d;
            this.m = e;
            this.h = [];
            this.i = null
        },
        Rd = function(a) {
            null !== a.i && (clearTimeout(a.i), a.i = null);
            if (a.h.length) {
                var b = jd(a.h);
                a.o(a.B + "?e=1", b);
                a.h = []
            }
        };
    Qd.prototype.la = function() {
        var a = ua.apply(0, arguments),
            b = this;
        this.m && 65536 <= jd(this.h.concat(a)).length && Rd(this);
        this.h.push.apply(this.h, t(a));
        this.h.length >= this.j && Rd(this);
        this.h.length && null === this.i && (this.i = setTimeout(function() {
            Rd(b)
        }, this.D))
    };
    var Sd = function(a, b, c) {
        Qd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", kd, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!m.globalThis.fetch)
    };
    v(Sd, Qd);
    var Td = function(a) {
            this.h = a;
            this.defaultValue = !1
        },
        Ud = function(a) {
            this.h = a;
            this.defaultValue = 0
        };
    var Vd = new Td(427549339),
        Wd = new Ud(428094087),
        Xd = new Ud(24),
        Yd = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.h = a;
            this.defaultValue = b
        }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        Zd = new Td(203);
    var $d = function() {
        this.h = {}
    };
    var ae = function(a) {
        O.call(this, a)
    };
    v(ae, O);
    var be = function(a) {
        O.call(this, a)
    };
    v(be, O);
    var ce = function(a) {
        O.call(this, a)
    };
    v(ce, O);
    var de = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 25, 26];
    var ee = function() {};
    var ge = function(a) {
        O.call(this, a, -1, fe)
    };
    v(ge, O);
    var he = function(a) {
        O.call(this, a)
    };
    v(he, O);
    var ie = function(a) {
        O.call(this, a)
    };
    v(ie, O);
    var fe = [7];
    var je = function(a) {
        this.h = a || {
            cookie: ""
        }
    };
    je.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Oa;
            d = c.Pa || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ta
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    je.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ca(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    je.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    je.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            ta: 0,
            path: void 0,
            domain: void 0
        })
    };
    var ke = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }("45369554");
    var le = function() {
            this.h = {};
            var a = w.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.h = JSON.parse(a)
            } catch (d) {}
        },
        me;
    v(le, $d);

    function ne(a) {
        return (a = oe(a)) ? L(a, he, 4) : null
    }

    function oe(a) {
        if (a = (new je(a)).get("FCCDCF", ""))
            if (p(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (e) {
                pe(1), b = null
            } else b = a;
            else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new ge;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw Error(void 0);
                    c = tb(ge, ib(d))
                }
            else c = null;
            return c
        } catch (e) {
            return pe(2), null
        }
    }

    function pe(a) {
        new ee;
        var b = new be;
        a = G(b, 7, a);
        b = new ae;
        a = Kb(b, 1, a);
        b = new ce;
        Lb(b, 22, de, a);
        me || (me = new le);
        a = me.h[ke.key];
        if ("proto" === ke.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    ec(Zc).map(function(a) {
        return Number(a)
    });
    ec($c).map(function(a) {
        return Number(a)
    });
    var qe = function(a) {
            this.h = a;
            this.i = null
        },
        se = function(a) {
            a.__tcfapiPostMessageReady || re(new qe(a))
        },
        re = function(a) {
            a.i = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.h.addEventListener("message", a.i);
            a.h.__tcfapiPostMessageReady = !0
        };
    var te = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Xc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var ue = function(a) {
            this.h = a;
            this.i = a.document;
            this.o = (a = (a = oe(this.i)) ? L(a, ie, 5) || null : null) ? D(a, 2) : null;
            this.j = (a = ne(this.i)) && null != D(a, 1) ? D(a, 1) : null;
            this.m = (a = ne(this.i)) && null != D(a, 2) ? D(a, 2) : null
        },
        xe = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new ue(a), ve(a), we(a))
        },
        ve = function(a) {
            !a.o || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", te(a.h, "__uspapiLocator"), Ba("__uspapi", function() {
                return a.D.apply(a, t(ua.apply(0, arguments)))
            }))
        };
    ue.prototype.D = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var we = function(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", te(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ba("__tcfapi", function() {
            return a.B.apply(a, t(ua.apply(0, arguments)))
        }), se(a.h))
    };
    ue.prototype.B = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(ye(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(ye(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var ye = function(a, b, c) {
        if (!a.j) return null;
        b = id(a.j, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var ze = function(a) {
        return "string" === typeof a
    };
    var Ae = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Be = null,
        Ce = function() {
            if (null === Be) {
                Be = "";
                try {
                    var a = "";
                    try {
                        a = w.top.location.hash
                    } catch (c) {
                        a = w.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Be = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Be
        };
    var Ee = function(a) {
        O.call(this, a, -1, De)
    };
    v(Ee, O);
    var De = [2, 8],
        Fe = [3, 4, 5],
        Ge = [6, 7];
    var He;
    He = {
        La: 0,
        na: 3,
        oa: 4,
        pa: 5
    };
    var Ie = He.na,
        U = He.oa,
        Je = He.pa,
        Ke = function(a) {
            return null != a ? !a : a
        },
        Le = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Ne = function(a, b) {
            var c = M(a, Ee, 2);
            if (!c.length) return Me(a, b);
            a = H(a, 1);
            if (1 === a) return Ke(Ne(c[0], b));
            c = Ra(c, function(d) {
                return function() {
                    return Ne(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Le(c, !1);
                case 3:
                    return Le(c, !0)
            }
        },
        Me = function(a, b) {
            var c = Gb(a, Fe);
            a: {
                switch (c) {
                    case Ie:
                        var d = H(a, K(a, Fe, 3));
                        break a;
                    case U:
                        d = H(a, K(a, Fe, 4));
                        break a;
                    case Je:
                        d = H(a, K(a, Fe, 5));
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, t(Db(a, 8)))
                } catch (f) {
                    return
                }
                b = H(a, 1);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Nb(a, K(a, Ge, 7));
                else a: {
                    switch (c) {
                        case U:
                            a = Pb(a, K(a, Ge, 6));
                            break a;
                        case Je:
                            a = Nb(a, K(a, Ge, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Ma(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return ze(a) && ze(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Ma(String(e), a);
                        case 11:
                            return null != e && 1 === Ma(String(e), a)
                    }
                }
            }
        },
        Oe = function(a, b) {
            return !a || !(!b || !Ne(a, b))
        };
    var Qe = function(a) {
        O.call(this, a, -1, Pe)
    };
    v(Qe, O);
    var Pe = [4];
    var Re = function(a) {
        O.call(this, a)
    };
    v(Re, O);
    var Te = function(a) {
        O.call(this, a, -1, Se)
    };
    v(Te, O);
    var Se = [5],
        Ue = [1, 2, 3, 6, 7];
    var Ve = function(a, b, c) {
            var d = void 0 === d ? new Sd(b) : d;
            this.i = a;
            this.o = c;
            this.j = d;
            this.h = [];
            this.m = 0 < this.i && Oc() < 1 / this.i
        },
        Xe = function(a, b, c, d, e, f) {
            var g = ud(td(new sd, b), c);
            b = rd(od(nd(qd(pd(new md, d), e), g), a.h.slice()), f);
            b = Ed(b);
            a.m && Od(a.j, We(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                    return h.G() === g.G() && H(h, 2) === c
                })) a.h.push(g), 100 < a.h.length && a.h.shift()
        },
        Ye = function(a, b, c, d) {
            if (a.o) {
                var e = new yd;
                b = Mb(e, 2, b);
                c = Mb(b, 3, c);
                d && J(c, 1, d, 0);
                d = new Cd;
                d = Lb(d, 7, Dd, c);
                a.m && Od(a.j, We(a, d))
            }
        },
        We = function(a, b) {
            b = J(b, 1, Date.now(), 0);
            var c = Wc(window);
            b = J(b, 2, c, 0);
            return J(b, 6, a.i, 0)
        };
    var P = function(a) {
        var b = "O";
        if (a.O && a.hasOwnProperty(b)) return a.O;
        b = new a;
        return a.O = b
    };
    var Ze = function() {
        var a = {};
        this.h = (a[Ie] = {}, a[U] = {}, a[Je] = {}, a)
    };
    var $e = /^true$/.test("false"),
        af = function(a, b) {
            switch (b) {
                case 1:
                    return H(a, K(a, Ue, 1));
                case 2:
                    return H(a, K(a, Ue, 2));
                case 3:
                    return H(a, K(a, Ue, 3));
                case 6:
                    return H(a, K(a, Ue, 6));
                default:
                    return null
            }
        },
        bf = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Ob(a, 1);
                case 7:
                    return Nb(a, 3);
                case 2:
                    return Pb(a, 2);
                case 3:
                    return Nb(a, 3);
                case 6:
                    return Db(a, 4);
                default:
                    return null
            }
        },
        cf = cc(function() {
            if (!$e) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        gf = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, g;
            P(df).j[e] = null != (g = null == (f = P(df).j[e]) ? void 0 : f.add(b)) ? g : (new m.Set).add(b);
            e = cf();
            if (null != e[b]) return e[b];
            b = ef(d)[b];
            if (!b) return c;
            b = new Te(b);
            b = ff(b);
            a = bf(b, a);
            return null != a ? a : c
        },
        ff = function(a) {
            var b = P(Ze).h;
            if (b) {
                var c = Ua(M(a, Re, 5), function(f) {
                    return Oe(L(f, Ee, 1), b)
                });
                if (c) {
                    var d;
                    return null != (d = L(c, Qe, 2)) ? d : null
                }
            }
            var e;
            return null != (e = L(a, Qe, 4)) ? e : null
        },
        df = function() {
            this.i = {};
            this.m = [];
            this.j = {};
            this.h = new m.Map
        },
        hf = function(a, b, c) {
            return !!gf(1, a, void 0 === b ? !1 : b, c)
        },
        jf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(gf(2, a, b, c));
            return isNaN(a) ? b : a
        },
        kf = function(a, b, c) {
            return gf(3, a, void 0 === b ? "" : b, c)
        },
        lf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return gf(6, a, b, c)
        },
        ef = function(a) {
            return P(df).i[a] || (P(df).i[a] = {})
        },
        mf = function(a, b) {
            var c = ef(b);
            Qc(a, function(d, e) {
                return c[e] = d
            })
        },
        nf = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Pa(b, function(h) {
                var k = ef(h);
                Pa(a, function(l) {
                    var n = Gb(l, Ue),
                        u = af(l, n);
                    if (u) {
                        var x, I, Ab;
                        var Bb = null != (Ab = null == (x = P(df).h.get(h)) ? void 0 : null == (I = x.get(u)) ? void 0 : I.slice(0)) ? Ab : [];
                        a: {
                            x = new Ad;
                            switch (n) {
                                case 1:
                                    Hb(x, 1, Bd, u);
                                    break;
                                case 2:
                                    Hb(x, 2, Bd, u);
                                    break;
                                case 3:
                                    Hb(x, 3, Bd, u);
                                    break;
                                case 6:
                                    Hb(x, 4, Bd, u);
                                    break;
                                default:
                                    n = void 0;
                                    break a
                            }
                            Eb(x, 5, Bb);n = x
                        }
                        if (Bb = n) {
                            var Ta;
                            Bb = !(null == (Ta = P(df).j[h]) || !Ta.has(u))
                        }
                        Bb && f.push(n);
                        if (Ta = n) {
                            var la;
                            Ta = !(null == (la = P(df).h.get(h)) || !la.has(u))
                        }
                        Ta && g.push(n);
                        e || (la = P(df), la.h.has(h) || la.h.set(h, new m.Map), la.h.get(h).has(u) || la.h.get(h).set(u, []), d && la.h.get(h).get(u).push(d));
                        k[u] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && Ye(c, f, g, null != d ? d : void 0)
        },
        of = function(a, b) {
            var c = ef(b);
            Pa(a, function(d) {
                var e = new Te(d),
                    f = Gb(e, Ue);
                (e = af(e, f)) && (c[e] || (c[e] = d))
            })
        },
        pf = function() {
            return Ra(p(Object, "keys").call(Object, P(df).i), function(a) {
                return Number(a)
            })
        },
        qf = function(a) {
            Va(P(df).m, a) || mf(ef(4), a)
        };
    var V = function(a) {
            this.methodName = a
        },
        rf = new V(1),
        sf = new V(16),
        tf = new V(15),
        uf = new V(2),
        vf = new V(3),
        wf = new V(4),
        xf = new V(5),
        yf = new V(6),
        zf = new V(7),
        Af = new V(8),
        Bf = new V(9),
        Cf = new V(10),
        Df = new V(11),
        Ef = new V(12),
        Ff = new V(13),
        Gf = new V(14),
        W = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        X = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        Hf = function(a) {
            W(xf, hf, a);
            W(yf, jf, a);
            W(zf, kf, a);
            W(Af, lf, a);
            W(Ff, of , a);
            W(tf, qf, a)
        },
        If = function(a) {
            W(wf, function(b) {
                P(Ze).h = b
            }, a);
            W(Bf, function(b, c) {
                var d = P(Ze);
                d.h[Ie][b] || (d.h[Ie][b] = c)
            }, a);
            W(Cf, function(b, c) {
                var d = P(Ze);
                d.h[U][b] || (d.h[U][b] = c)
            }, a);
            W(Df, function(b, c) {
                var d = P(Ze);
                d.h[Je][b] || (d.h[Je][b] = c)
            }, a);
            W(Gf, function(b) {
                for (var c = P(Ze), d = r([Ie, U, Je]), e = d.next(); !e.done; e = d.next()) e = e.value, p(Object, "assign").call(Object, c.h[e], b[e])
            }, a)
        },
        Jf = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Kf = function() {
            this.i = function() {};
            this.h = function() {
                return []
            }
        },
        Lf = function(a, b, c) {
            a.i = function(d) {
                X(uf, b, function() {
                    return []
                })(d, c)
            };
            a.h = function() {
                return X(vf, b, function() {
                    return []
                })(c)
            }
        };

    function Mf(a, b) {
        b = void 0 === b ? window.document : b;
        if (a.length && b.head) {
            a = r(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Xc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    var Nf = function(a, b) {
            try {
                var c = a.split(".");
                a = w;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (g) {}
        },
        Of = function() {
            var a = {};
            this[Ie] = (a[8] = function(b) {
                try {
                    return null != xa(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = xa(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Va(P(Kf).h(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = Nf(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!w.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.features(), p(aa, "includes")).call(aa, b))
            }, a[70] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), p(aa, "includes")).call(aa, b))
            }, a);
            a = {};
            this[U] = (a[3] = function() {
                return Vc()
            }, a[6] = function(b) {
                b = Nf(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = Ec(w.location.href.match(Dc)[3] || null);
                b = c ? Rc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Je] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = Nf(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = w.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = xa("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = p(d, "find").call(d, function(g) {
                        return "Google Chrome" === g.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (g) {
                    return ""
                }
            }, a)
        };
    var Pf = function() {
        var a = void 0 === a ? w : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Rf = function(a) {
        O.call(this, a, -1, Qf)
    };
    v(Rf, O);
    Rf.prototype.getId = function() {
        return N(D(this, 1), 0)
    };
    Rf.prototype.G = function() {
        return H(this, 7)
    };
    var Qf = [2];
    var Tf = function(a) {
        O.call(this, a, -1, Sf)
    };
    v(Tf, O);
    Tf.prototype.G = function() {
        return H(this, 5)
    };
    var Sf = [2];
    var Vf = function(a) {
        O.call(this, a, -1, Uf)
    };
    v(Vf, O);
    var Xf = function(a) {
        O.call(this, a, -1, Wf)
    };
    v(Xf, O);
    Xf.prototype.G = function() {
        return H(this, 1)
    };
    var Yf = function(a) {
        O.call(this, a)
    };
    v(Yf, O);
    var Uf = [1, 4, 2, 3],
        Wf = [2];
    var Zf = [12, 13, 20],
        $f = function() {},
        ag = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ga ? !1 : e.ga,
                g = void 0 === e.ua ? {} : e.ua;
            e = void 0 === e.ka ? [] : e.ka;
            a.m = b;
            a.B = {};
            a.D = f;
            a.o = g;
            b = {};
            a.i = (b[c] = [], b[4] = [], b);
            a.j = {};
            (c = Ce()) && Pa(c.split(",") || [], function(h) {
                (h = parseInt(h, 10)) && (a.j[h] = !0)
            });
            Pa(e, function(h) {
                a.j[h] = !0
            });
            a.h = d;
            return a
        },
        eg = function(a, b, c) {
            var d = [],
                e = bg(a.m, b),
                f;
            if (f = 9 !== b) a.B[b] ? f = !0 : (a.B[b] = !0, f = !1);
            if (f) return Xe(a.h, b, c, d, [], 4), d;
            if (!e.length) return Xe(a.h, b, c, d, [], 3), d;
            var g = Va(Zf, b),
                h = [];
            Pa(e, function(k) {
                var l = new vd;
                if (k = cg(a, k, c, l)) 0 !== Gb(l, wd) && h.push(l), l = k.getId(), d.push(l), dg(a, l, g ? 4 : c), (k = M(k, Te, 2)) && (g ? nf(k, pf(), a.h, l) : nf(k, [c], a.h, l))
            });
            Xe(a.h, b, c, d, h, 1);
            return d
        },
        dg = function(a, b, c) {
            a.i[c] || (a.i[c] = []);
            a = a.i[c];
            Va(a, b) || a.push(b)
        },
        fg = function(a, b) {
            a.m.push.apply(a.m, t(Qa(Ra(b, function(c) {
                return new Xf(c)
            }), function(c) {
                return !Va(Zf, c.G())
            })))
        },
        cg = function(a, b, c, d) {
            var e = P(Ze).h;
            if (!Oe(L(b, Ee, 3), e)) return null;
            var f = M(b, Rf, 2),
                g = H(b, 6);
            if (g) {
                Hb(d, 1, wd, g);
                f = e[U];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), J(d, 3, c, 0)
                } catch (k) {}
                return (b = gg(b, c)) ? hg(a, [b], 1) : null
            }
            if (g = H(b, 10)) {
                Hb(d, 2, wd, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[U][9];
                        break;
                    case 2:
                        h = e[U][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === H(b, 11)) return null;
                void 0 !== c && J(d, 3, c, 0);
                return (b = gg(b, c)) ? hg(a, [b], 1) : null
            }
            d = e ? Qa(f, function(k) {
                return Oe(L(k, Ee, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * N(D(b, 1), 0);
            return (b = H(b, 4)) ? ig(a, b, c, d) : hg(a, d, c / 1E3)
        },
        ig = function(a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1E3;
            if (0 >= e) return null;
            d = hg(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d
        },
        hg = function(a, b, c) {
            var d = a.j,
                e = Sa(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.D ? null : Pc(b, c)
        },
        jg = function(a, b) {
            W(rf, function(c) {
                a.j[c] = !0
            }, b);
            W(uf, function(c, d) {
                return eg(a, c, d)
            }, b);
            W(vf, function(c) {
                return (a.i[c] || []).concat(a.i[4])
            }, b);
            W(Ef, function(c) {
                return void fg(a, c)
            }, b);
            W(sf, function(c, d) {
                return void dg(a, c, d)
            }, b)
        },
        bg = function(a, b) {
            return (a = Sa(a, function(c) {
                return c.G() == b
            })) && M(a, Tf, 2) || []
        },
        gg = function(a, b) {
            var c = M(a, Rf, 2),
                d = c.length,
                e = N(D(a, 8), 0);
            a = d * N(D(a, 1), 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Oc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = P(Ze).h;
            return !c || e && !Oe(L(c, Ee, 3), e) ? null : c
        };
    var kg = function() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    };
    var lg = function() {
            this.h = function() {}
        },
        mg = function(a) {
            P(lg).h(a)
        };
    var ng, og, pg, qg, rg, sg, vg = function(a, b) {
            var c = {
                    ga: tg(211),
                    ka: tg(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? Pf() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new Ve(null != (qg = null == (ng = L(a, Yf, 5)) ? void 0 : N(D(ng, 2), 0)) ? qg : 0, null != (rg = null == (og = L(a, Yf, 5)) ? void 0 : N(D(og, 4), 0)) ? rg : 0, null != (sg = null == (pg = L(a, Yf, 5)) ? void 0 : Ob(pg, 3)) ? sg : !1) : f;
            d.hasOwnProperty("init-done") ? (X(Ef, d)(Ra(M(a, Xf, 2), function(g) {
                return g.toJSON()
            })), X(Ff, d)(Ra(M(a, Te, 1), function(g) {
                return g.toJSON()
            }), e), b && X(Gf, d)(b), ug(e, d)) : (jg(ag(P($f), M(a, Xf, 2), e, f, c), d), Hf(d), If(d), Jf(d), ug(e, d), nf(M(a, Te, 1), [e], f, void 0, !0), $e = $e || !(!c || !c.Ma), mg(P(Of)), b && mg(b))
        },
        ug = function(a, b) {
            var c = b = void 0 === b ? Pf() : b;
            Lf(P(Kf), c, a);
            wg(b, a);
            a = b;
            P(lg).h = X(Gf, a);
            P(kg).m()
        },
        wg = function(a, b) {
            var c = P(kg);
            c.h = function(d, e) {
                return X(xf, a, function() {
                    return !1
                })(d, e, b)
            };
            c.i = function(d, e) {
                return X(yf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.o = function(d, e) {
                return X(zf, a, function() {
                    return ""
                })(d, e, b)
            };
            c.j = function(d, e) {
                return X(Af, a, function() {
                    return []
                })(d, e, b)
            };
            c.m = function() {
                X(tf, a)(b)
            }
        };
    var xg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        yg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? Yc(xg) : c;
            this.j = a;
            this.i = b;
            this.h = c
        };

    function zg(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Xc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            dc(d, "load", e);
            dc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Bg = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
            Qc(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Ag(c, b)
        },
        Ag = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : zg(c, a, void 0 === b ? !1 : b)
        };
    var Cg = Q("gpt/pubads_impl_"),
        Dg = Q("pagead/managed/js/gpt/");

    function Eg(a) {
        a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Fg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Gg = function(a, b) {
            var c = Eg(b);
            c && Fg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Hg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Eg(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Fg(p(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Eg() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Ig = function(a, b) {
            return Hg(a, b, function(c, d) {
                var e = new yg;
                var f = void 0 === f ? e.i : f;
                var g = void 0 === g ? e.j : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Ae(d, {
                    context: c,
                    id: g
                })), w.google_js_errors = w.google_js_errors || [], w.google_js_errors.push(d), w.error_rep_loaded || (f = w.document, c = Xc("SCRIPT", f), c.src = ic(e.h), Hc(c), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), w.error_rep_loaded = !0))
            })
        };

    function Y(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Jg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Kg() {
        var a = new m.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = r(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Lg(a) {
        a = a.id;
        return null != a && (Kg().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }

    function Mg(a, b, c) {
        if (!a.sources) return !1;
        switch (Ng(a)) {
            case 2:
                var d = Og(a);
                if (d) return c.some(function(f) {
                    return Pg(d, f)
                });
            case 1:
                var e = Qg(a);
                if (e) return b.some(function(f) {
                    return Pg(e, f)
                })
        }
        return !1
    }

    function Ng(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Qg(a) {
        return Rg(a, function(b) {
            return b.currentRect
        })
    }

    function Og(a) {
        return Rg(a, function(b) {
            return b.previousRect
        })
    }

    function Rg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var Sg = function() {
        Pd.call(this);
        this.i = this.h = this.L = this.K = this.S = 0;
        this.ca = this.Z = Number.NEGATIVE_INFINITY;
        this.V = this.X = this.Y = this.aa = this.fa = this.B = this.ea = this.N = 0;
        this.W = !1;
        this.M = this.J = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.da = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.ba = !1;
        this.U = function() {}
    };
    v(Sg, Pd);
    var Vg = function() {
            var a = new Sg;
            if (P(kg).h(Zd.h, Zd.defaultValue)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = r(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, Tg(a).observe({
                        type: c,
                        buffered: !0
                    });
                    Ug(a)
                }
            }
        },
        Tg = function(a) {
            a.o || (a.o = new PerformanceObserver(Ig(640, function(b) {
                var c = Wg !== window.scrollX || Xg !== window.scrollY ? [] : Yg,
                    d = Zg();
                b = r(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.S += Number(e.value);
                            Number(e.value) > f.K && (f.K = Number(e.value));
                            f.L += 1;
                            var g = Mg(e, c, d);
                            g && (f.B += e.value, f.aa++);
                            if (5E3 < e.startTime - f.Z || 1E3 < e.startTime - f.ca) f.Z = e.startTime, f.h = 0, f.i = 0;
                            f.ca = e.startTime;
                            f.h += e.value;
                            g && (f.i += e.value);
                            f.h > f.N && (f.N = f.h, f.fa = f.i, f.ea = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Y = Math.floor(e.renderTime || e.loadTime);
                        a.X = e.size;
                        break;
                    case "first-input":
                        a.V = Number((e.processingStart - e.startTime).toFixed(3));
                        a.W = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.D += e, a.J = Math.max(a.J, e), a.M += 1
                }
            })));
            return a.o
        },
        Ug = function(a) {
            var b = Ig(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && $g(a)
                }),
                c = Ig(641, function() {
                    return void $g(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.U = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Tg(a).disconnect()
            }
        };
    Sg.prototype.I = function() {
        Pd.prototype.I.call(this);
        this.U()
    };
    var $g = function(a) {
            if (!a.ba) {
                a.ba = !0;
                Tg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Jg("cls", a.S), b += Jg("mls", a.K), b += Y("nls", a.L), window.LayoutShiftAttribution && (b += Jg("cas", a.B), b += Y("nas", a.aa)), b += Jg("wls", a.N), b += Jg("tls", a.ea), window.LayoutShiftAttribution && (b += Jg("was", a.fa)));
                window.LargestContentfulPaint && (b += Y("lcp", a.Y), b += Y("lcps", a.X));
                window.PerformanceEventTiming && a.W && (b += Y("fid", a.V));
                window.PerformanceLongTaskTiming && (b += Y("cbt", a.D), b += Y("mbt", a.J), b += Y("nlt", a.M));
                for (var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Lg(e.value) && c++;
                b += Y("nif", c);
                c = window.google_unique_id;
                b += Y("ifi", "number" === typeof c ? c : 0);
                c = P(Kf).h();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (w === w.top ? 1 : 0);
                b += a.da ? "&qqid=" + encodeURIComponent(a.da) : Y("pvsid", Wc(w));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.j || (a.j = !0, a.I())
            }
        },
        Pg = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        Zg = function() {
            var a = [].concat(t(document.getElementsByTagName("iframe"))).filter(Lg),
                b = [].concat(t(Kg())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            Wg = window.scrollX;
            Xg = window.scrollY;
            return Yg = [].concat(t(a), t(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Wg = void 0,
        Xg = void 0,
        Yg = [];
    var bh = function(a) {
        O.call(this, a, -1, ah)
    };
    v(bh, O);
    var ch = function(a, b) {
            return G(a, 2, b)
        },
        dh = function(a, b) {
            return G(a, 3, b)
        },
        eh = function(a, b) {
            return G(a, 4, b)
        },
        fh = function(a, b) {
            return G(a, 5, b)
        },
        gh = function(a, b) {
            return G(a, 9, b)
        },
        hh = function(a, b) {
            return Mb(a, 10, b)
        },
        ih = function(a, b) {
            return G(a, 11, b)
        },
        jh = function(a, b) {
            return G(a, 1, b)
        },
        kh = function(a, b) {
            return G(a, 7, b)
        },
        lh = function(a) {
            O.call(this, a)
        };
    v(lh, O);
    lh.prototype.getVersion = function() {
        return Nb(this, 2)
    };
    var ah = [10, 6];
    var mh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function nh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function oh(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ph(a) {
        if (!oh(a)) return null;
        var b = nh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(mh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function qh(a) {
        var b;
        return ih(hh(fh(ch(jh(eh(kh(gh(dh(new bh, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new lh;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function rh(a) {
        var b, c;
        return null != (c = null == (b = ph(a)) ? void 0 : b.then(function(d) {
            return qh(d)
        })) ? c : null
    };
    var Z = {},
        sh = (Z[23] = .001, Z[211] = !1, Z[253] = !1, Z[246] = [], Z[226] = [], Z[150] = ".google.com.ng", Z[221] = /^true$/.test(""), Z[36] = /^true$/.test("false"), Z[172] = null, Z[260] = void 0, Z[251] = null, Z),
        Yb = function() {
            this.h = !1
        };

    function tg(a) {
        P(Yb).h = !0;
        return sh[a]
    }

    function th(a, b) {
        P(Yb).h = !0;
        sh[a] = b
    };
    var uh = new m.WeakMap,
        vh = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var wh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        xh = function(a, b) {
            b = void 0 === b ? vh : b;
            var c = Aa(a),
                d = function(e) {
                    e = r(e);
                    e.next();
                    e = ka(e);
                    return b(c, e)
                };
            return function() {
                var e = ua.apply(0, arguments),
                    f = this || w,
                    g = uh.get(f);
                g || (g = {}, uh.set(f, g));
                f = g;
                g = [this].concat(t(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = r(g);
                    g = h.next().value;
                    h = ka(h);
                    g = a.apply(g, h);
                    f = f[e] = g
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? wh.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function yh() {
        return 0 === xh(tg(172))
    };

    function zh(a, b) {
        var c = {},
            d = {},
            e = {};
        return e[Ie] = (c[3] = yh, c[59] = function() {
            var f = ua.apply(0, arguments),
                g = p(f, "includes"),
                h = String,
                k;
            var l = void 0 === l ? window : l;
            var n;
            l = null != (n = null == (k = Ec(l.location.href.match(Dc)[3] || null)) ? void 0 : k.split(".")) ? n : [];
            k = 2 > l.length ? null : "uk" === l[l.length - 1] ? 3 > l.length ? null : Rc(l.splice(l.length - 3).join(".")) : Rc(l.splice(l.length - 2).join("."));
            return g.call(f, h(k))
        }, c[61] = function() {
            return tg(221)
        }, c[63] = function() {
            return tg(221) || ".google.ch" === tg(150)
        }, c[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }, c), e[U] = (d[1] = function() {
            var f;
            return null != (f = Uc("{{MOD}}")) ? f : -1
        }, d[4] = function() {
            return Uc("1") || 0
        }, d[12] = function() {
            if (a) {
                var f = RegExp("[?&]gmeid=([^&]*)").exec(a.src);
                var g;
                f = f ? null != (g = Uc(f[1])) ? g : -1 : -1
            } else f = -1;
            return f
        }, d[13] = function() {
            return b
        }, d), e
    };

    function Ah(a, b, c) {
        var d = new Vf(tg(246));
        if (!M(d, Te, 1).length && M(a, Te, 1).length) {
            var e = M(a, Te, 1);
            Mb(d, 1, e)
        }!M(d, Xf, 2).length && M(a, Xf, 2).length && (e = M(a, Xf, 2), Mb(d, 2, e));
        void 0 === Ib(d, Yf, 5, !1) && void 0 !== Ib(a, Yf, 5, !1) && (a = L(a, Yf, 5), Kb(d, 5, a));
        vg(d, zh(b, c))
    };
    var Bh = function(a) {
        O.call(this, a)
    };
    v(Bh, O);
    var Dh = function() {
            return [].concat(t(p(Ch, "values").call(Ch))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Ch = new m.Map;

    function Eh() {
        var a;
        return null != (a = w.googletag) ? a : w.googletag = {
            cmd: []
        }
    }

    function Fh(a, b) {
        var c = Eh();
        c.hasOwnProperty(a) || (c[a] = b)
    };

    function Gh() {
        var a = Hh,
            b = Eh(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = Ih(),
            g = new Bh;
        Xb();
        p(Object, "assign").call(Object, sh, b._vars_);
        b._vars_ = sh;
        g && (Ob(g, 3) && th(36, !0), Ob(g, 5) && th(221, !0), Nb(g, 6) && th(150, Nb(g, 6)));
        Fh("_loaded_", !0);
        var h = Jh(f, g);
        Fh("getVersion", function() {
            return String(h.ra || h.ha)
        });
        Fh("cmd", []);
        var k = Kh(e),
            l;
        f = null != (l = Lh(e)) ? l : Mh(e);
        Nh(void 0 !== Ib(g, Vf, 1, !1) ? L(g, Vf, 1) : new Vf(a), d, f, N(D(g, 2), 0));
        try {
            Vg()
        } catch (Ab) {}
        Gg("1", d);
        a = Oh(h, f);
        if (!k) {
            d = "gpt-impl-" + Math.random();
            try {
                Ic(e, xc(a, {
                    id: d,
                    nonce: Bc()
                }))
            } catch (Ab) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            var n = Xc("SCRIPT");
            n.src = ic(a);
            Hc(n);
            n.async = !0;
            e = b.fifWin ? c.document : e;
            a = e.body;
            d = e.documentElement;
            var u, x, I = null != (x = null != (u = e.head) ? u : a) ? x : d;
            "complete" !== c.document.readyState && b.fifWin ? dc(c, "load", function() {
                return void I.appendChild(n)
            }) : I.appendChild(n);
            b._loadStarted_ = !0
        }
        c === c.top && xe(c);
        Lc(c) === (Jc(c.top) ? c.top : null) && Ph(c.top, f)
    }

    function Ih() {
        var a = Number("2022120501");
        1 > a || Math.floor(a) !== a ? (Bg({
            v: "2022120501"
        }), a = "1") : a = "2022120501";
        return {
            ha: a,
            P: "",
            va: new Sd,
            wa: .01 > Oc(),
            qa: 100
        }
    }

    function Jh(a, b) {
        var c = Q("2022120501");
        var d = a.P;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && Bg({
            mjsv: d
        }), d = void 0);
        return p(Object, "assign").call(Object, {}, a, {
            ia: c,
            ra: d,
            sa: Q(""),
            Na: Wc(window),
            Qa: b
        })
    }

    function Lh(a) {
        return (a = a.currentScript) ? a : null
    }

    function Mh(a) {
        var b;
        a = r(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, p(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Oh(a, b) {
        b = Qh(b) ? Q("https://pagead2.googlesyndication.com/") : Q("https://securepubads.g.doubleclick.net/");
        a = a.P ? lc([b, Dg, a.sa, Q("/pubads_impl.js")]) : P(kg).h(Vd.h, Vd.defaultValue) ? lc([b, Dg, Q("m"), a.ia, Q("/pubads_impl.js")]) : lc([b, Cg, a.ia, Q(".js")]);
        b = {};
        var c = P(kg).i(Xd.h, Xd.defaultValue),
            d = P(kg).i(Wd.h, Wd.defaultValue);
        c && (b.cb = c);
        d && (b.mcb = d);
        return p(Object, "keys").call(Object, b).length ? kc(a, b) : a
    }

    function Nh(a, b, c, d) {
        th(172, c);
        Ah(a, c, d);
        P(Kf).i(12);
        P(Kf).i(5);
        (a = rh(b)) && a.then(function(e) {
            a: {
                nb = !0;
                try {
                    var f = JSON.stringify(e.toJSON(), Vb);
                    break a
                } finally {
                    nb = !1
                }
                f = void 0
            }
            return void th(251, f)
        });
        Mf(P(kg).j(Yd.h, Yd.defaultValue), b.document)
    }

    function Kh(a) {
        var b = Lh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    var Rh = function() {
        this.h = []
    };
    Rh.prototype.addListener = function(a) {
        void 0 !== this.i || this.error ? a(this.i, this.error) : this.h.push(a)
    };
    var Sh = function(a, b, c) {
        a.i = b;
        a.error = c;
        for (var d = r(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.h.length = 0
    };

    function Ph(a, b) {
        var c = new Rh;
        th(260, function(e) {
            return void c.addListener(e)
        });
        if (a = Th(a, b)) {
            var d = new m.globalThis.XMLHttpRequest;
            d.open("GET", a.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Gg("13", window), Sh(c, 204 === d.status ? "" : d.responseText)) : Sh(c, void 0, new m.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void Sh(c, void 0, new m.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else Sh(c, void 0, new m.globalThis.Error("no provided or inferred data"))
    }

    function Th(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Gc(b.src, "domain"),
            d = Gc(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = Qh(b) ? Q("https://pagead2.googlesyndication.com") : Q("https://securepubads.g.doubleclick.net");
        return kc(lc([b, Q("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function Qh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Ec(a.src.match(Dc)[3] || null)
    };
    var Hh;
    a: {
        try {
            if (Array.isArray(E)) {
                Hh = E;
                break a
            }
        } catch (a) {}
        Hh = []
    }
    try {
        Gh()
    } catch (a) {
        try {
            var Uh = Ih();
            if (Uh.wa) {
                var Vh, Wh = a.error && a.meta && a.id ? a.error : a,
                    Xh, Yh = new Ld,
                    Zh = new Kd;
                try {
                    var $h;
                    $h = Wc(window);
                    J(Zh, 1, $h, 0)
                } catch (b) {}
                try {
                    var ai = P(Kf).h();
                    Eb(Zh, 2, ai)
                } catch (b) {}
                try {
                    J(Zh, 3, window.document.URL, "")
                } catch (b) {}
                Xh = Kb(Yh, 2, Zh);
                var bi, ci = new Id;
                bi = J(ci, 1, 420, 0);
                try {
                    var di = ze(null == Wh ? void 0 : Wh.name) ? Wh.name : "Unknown error";
                    J(bi, 2, di, "")
                } catch (b) {}
                try {
                    var ei = ze(null == Wh ? void 0 : Wh.message) ? Wh.message : "Caught " + Wh;
                    J(bi, 3, ei, "")
                } catch (b) {}
                try {
                    var fi = ze(null == Wh ? void 0 : Wh.stack) ? Wh.stack : Error().stack;
                    fi && Fb(bi, 4, fi.split(/\n\s*/))
                } catch (b) {}
                Vh = Kb(Xh, 1, bi);
                var gi = new Gd;
                try {
                    J(gi, 1, Uh.P || Uh.ha, "")
                } catch (b) {}
                try {
                    var hi = Dh();
                    J(gi, 2, hi, 0)
                } catch (b) {}
                try {
                    var ii = [].concat(t(p(Ch, "keys").call(Ch)));
                    Fb(gi, 3, ii)
                } catch (b) {}
                Lb(Vh, 4, Md, gi);
                J(Vh, 5, Uh.qa, 0);
                Nd(Uh.va, Vh)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 472785970, null, [null, 500]],
        [447540098, null, null, [1]],
        [447540095, null, null, [1]],
        [447540096, null, null, [1]],
        [null, 7, null, [null, 0.1]],
        [null, 448338836, null, [null, 0.01]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 10000]],
        [null, 471890184, null, [null, 0.01]],
        [null, 517, null, [null, 0.01]],
        [485597276, null, null, [1]],
        [488720814, null, null, [1]],
        [null, 492, null, [null, 0.01]],
        [464128744, null, null, [1]],
        [null, 45374287, null, [null, 1000]],
        [null, 398776877, null, [null, 60000]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 376149757, null, [null, 0.0025]],
        [476447134, null, null, [1]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-40"]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [4, null, 68],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [null, 397316938, null, [null, 1000]],
        [444587044, null, null, [1]],
        [440148284, null, null, [1]],
        [440148282, null, null, [1]],
        [489509230, null, null, null, [
            [
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!10[0-8])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]]
                ]],
                [1]
            ]
        ]],
        [480068022, null, null, null, [
            [
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!10[0-6])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]]
                ]],
                [1]
            ]
        ]],
        [null, null, null, [], null, 489560439],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 12]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [478498873, null, null, [1]],
        [null, null, null, [null, null, null, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1947, null, null, [1]],
        [1971, null, null, [1]],
        [null, 1972, null, []],
        [null, 1142, null, [null, 8]],
        [null, 1195, null, [null, 1]],
        [null, 1119, null, [null, 300]],
        [null, 1193, null, [null, 100]],
        [null, 1114, null, [null, 1]],
        [null, 1116, null, [null, 300]],
        [null, 1117, null, [null, 100]],
        [null, 1110, null, [null, 5]],
        [null, 1111, null, [null, 5]],
        [null, 1112, null, [null, 5]],
        [null, 1113, null, [null, 5]],
        [null, 1115, null, [null, -1]],
        [null, 1194, null, [null, 1]],
        [null, 469675170, null, [null, 30000]],
        [479047366, null, null, [1]],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []],
        [485990406, null, null, []]
    ],
    [
        [2, [
            [1, [
                [31071053],
                [31071054]
            ], null, null, null, null, null, null, null, 102],
            [5, [
                [44780194],
                [44780195, [
                    [1122, null, null, [1]]
                ]],
                [44780196, [
                    [1122, null, null, [1]]
                ]],
                [44780197, [
                    [1122, null, null, [1]]
                ]],
                [44780198, [
                    [1122, null, null, [1]]
                ]]
            ], null, null, null, null, null, 601, null, 102],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [10, [
                [31069101]
            ]],
            [10, [
                [31069102],
                [31069103]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                [31070908],
                [31070909, [
                    [null, 474872234, null, [null, 1]]
                ]]
            ]],
            [100, [
                    [31071083],
                    [31071084, [
                        [null, null, null, [null, null, null, ["[\"424397508\",[[\"pubcid.org\",null,true]]]", "[\"23202586\",[[\"pubcid.org\",null,true]]]", "[\"170737076\",[[\"pubcid.org\",null,true]]]", "[\"24132379\",[[\"pubcid.org\",null,true]]]", "[\"21869819039\",[[\"pubcid.org\",null,true]]]", "[\"6556\",[[\"pubcid.org\",null,true]]]", "[\"344101295\",[[\"pubcid.org\",null,true]]]", "[\"62532913\",[[\"pubcid.org\",null,true]]]", "[\"152344380\",[[\"pubcid.org\",null,true]]]", "[\"127641337\",[[\"pubcid.org\",null,true]]]"]], null, 471270390]
                    ]]
                ],
                [3, [
                    [4, null, 15, null, null, null, null, ["424397508"]],
                    [4, null, 15, null, null, null, null, ["23202586"]],
                    [4, null, 15, null, null, null, null, ["170737076"]],
                    [4, null, 15, null, null, null, null, ["24132379"]],
                    [4, null, 15, null, null, null, null, ["21869819039"]],
                    [4, null, 15, null, null, null, null, ["6556"]],
                    [4, null, 15, null, null, null, null, ["344101295"]],
                    [4, null, 15, null, null, null, null, ["62532913"]],
                    [4, null, 15, null, null, null, null, ["152344380"]],
                    [4, null, 15, null, null, null, null, ["127641337"]]
                ]], 67
            ],
            [10, [
                    [31071187],
                    [31071188, [
                        [501, null, null, [1]]
                    ]],
                    [31071189, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]]
                    ]],
                    [31071190, [
                        [501, null, null, [1]],
                        [484598396, null, null, [1]]
                    ]],
                    [31071191, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]],
                        [484598396, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [6, null, null, 3, null, 2],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, null, null, 114
            ],
            [1, [
                    [31071192],
                    [31071193, [
                        [441529989, null, null, [1]],
                        [501, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, 500, null, 114
            ],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44777628],
                    [44777629, [
                        [392065905, null, null, []]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982998]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31069125, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 5]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 35]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 39],
                                [7, null, null, 1, null, 45]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ],
                [31069126, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]],
                        [437292966, null, null, [1]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 4],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 34],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 44],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]
            ], null, 67],
            [10, [
                [31069595],
                [31069596, [
                    [472976668, null, null, [1]]
                ]]
            ]],
            [1, [
                [31071119],
                [31071120],
                [31071121],
                [31071122],
                [31071123],
                [31071124]
            ]],
            [1, [
                [31071125],
                [31071126, [
                    [480068022, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071159],
                [31071160, [
                    [489509230, null, null, [1]]
                ]]
            ], null, 59],
            [1000, [
                    [31071234, [
                        [477812799, null, null, [1]]
                    ]]
                ],
                [4, null, 8, null, null, null, null, ["sharedStorage"]]
            ]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [50, [
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [44776073],
                    [44777420],
                    [44779108],
                    [44779905]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ],
            [100, [
                [31070872],
                [31070873, [
                    [485860314, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31071023, [
                            [null, 24, null, [null, 31071023]]
                        ],
                        [6, null, null, 13, null, 31071023]
                    ],
                    [31071024, [
                            [null, 24, null, [null, 31071024]]
                        ],
                        [6, null, null, 13, null, 31071024]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                [31071051, [
                        [null, 428094087, null, [null, 31071051]]
                    ],
                    [6, null, null, 12, null, 31071051]
                ],
                [31071052, [
                        [null, 428094087, null, [null, 31071052]]
                    ],
                    [6, null, null, 12, null, 31071052]
                ]
            ]],
            [null, [
                [31071057],
                [31071058, [
                    [null, 434620574, null, [null, 300]],
                    [474159377, null, null, [1]]
                ]]
            ], null, 69],
            [1000, [
                    [31071073, [
                            [null, 24, null, [null, 31071073]]
                        ],
                        [6, null, null, 13, null, 31071073]
                    ],
                    [31071074, [
                            [null, 24, null, [null, 31071074]]
                        ],
                        [6, null, null, 13, null, 31071074]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31071089],
                [31071090, [
                    [486663050, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071091],
                [31071092, [
                    [488463535, null, null, [1]]
                ]]
            ]],
            [100, [
                [31071093],
                [31071094, [
                    [488999963, null, null, [1]]
                ]]
            ]],
            [1, [
                [31071142],
                [31071143, [
                    [489217043, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071144],
                [31071145, [
                    [486708758, null, null, [1]]
                ]]
            ]],
            [100, [
                [31071150],
                [31071151, [
                    [45385570, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071185],
                [31071186, [
                    [485091276, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071197],
                [31071198, [
                    [422917270, null, null, [1]]
                ]]
            ]],
            [1000, [
                    [31071221, [
                            [null, 24, null, [null, 31071221]]
                        ],
                        [6, null, null, 4, null, 4]
                    ],
                    [31071222, [
                            [null, 24, null, [null, 31071222]]
                        ],
                        [6, null, null, 4, null, 5]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31071256, [
                            [null, 24, null, [null, 31071256]]
                        ],
                        [6, null, null, 4, null, 6]
                    ],
                    [31071257, [
                            [null, 24, null, [null, 31071257]]
                        ],
                        [6, null, null, 4, null, 7]
                    ]
                ],
                [4, null, 3], 1
            ],
            [1000, [
                    [31071294, [
                            [null, 24, null, [null, 31071294]]
                        ],
                        [6, null, null, 4, null, 8]
                    ],
                    [31071295, [
                            [null, 24, null, [null, 31071295]]
                        ],
                        [6, null, null, 4, null, 9]
                    ]
                ],
                [4, null, 3], 1
            ],
            [10, [
                [31071296],
                [31071297, [
                    [484113279, null, null, [1]]
                ]]
            ]],
            [10, [
                [31071298],
                [31071299, [
                    [492198798, null, null, [1]]
                ]]
            ]],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]],
            [10, [
                    [44776366],
                    [44776367],
                    [44779256]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ]
        ]],
        [25, [
            [10, [
                    [31064132],
                    [31064133, [
                        [null, 438663674, null, [null, 1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ],
            [50, [
                [31068366],
                [31068367, [
                    [null, 455645877, null, [null, 0.1]]
                ]]
            ]],
            [10, [
                [31068825],
                [31068826, [
                    [null, 462420536, null, [null, 0.1]]
                ]]
            ]],
            [50, [
                [31070232],
                [31070233, [
                    [476475256, null, null, [1]]
                ]]
            ]],
            [1, [
                [44777085, null, [4, null, 68]],
                [44777086, [
                        [null, 438663674, null, [null, 1]]
                    ],
                    [4, null, 68]
                ],
                [44777087, [
                        [null, 438663674, null, [null, 500]]
                    ],
                    [4, null, 68]
                ],
                [44777088, [
                        [null, 438663674, null, [null, 1000]]
                    ],
                    [4, null, 68]
                ],
                [44777089, [
                        [null, 438663674, null, [null, 1500]]
                    ],
                    [4, null, 68]
                ],
                [44777090, [
                        [null, 438663674, null, [null, 2000]]
                    ],
                    [4, null, 68]
                ],
                [44777091, [
                        [null, 438663674, null, [null, 2500]]
                    ],
                    [4, null, 68]
                ],
                [44777092, [
                        [null, 438663674, null, [null, 3000]]
                    ],
                    [4, null, 68]
                ]
            ], null, 40]
        ]],
        [12, [
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ], null, 61],
            [10, [
                [44769661],
                [44769662, [
                    [1973, null, null, [1]]
                ]]
            ]]
        ]],
        [13, [
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 69, null, null, null, null, ["attribution-reporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068556, null, [4, null, 8, null, null, null, null, ["sharedStorage"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068557, null, [2, [
                        [4, null, 69, null, null, null, null, ["shared-storage"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["shared-storage"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [10, [
                    [31070380],
                    [31070381, [
                        [477209535, null, null, [1]],
                        [487608180, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
            ],
            [null, [
                    [31070383, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]],
                    [31070384, [
                            [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                            [439828594, null, null, [1]]
                        ],
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                    ]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [null, [
                    [31070594],
                    [31070595, [
                        [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                        [439828594, null, null, [1]],
                        [483962503, null, null, [1]]
                    ]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [10, [
                [31071010],
                [31071011, [
                    [1974, null, null, [1]]
                ]]
            ]],
            [null, [
                [44768158, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44768159, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776500, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776501, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776502, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776503, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]]
        ]],
        [20, [
            [1000, [
                    [31070530, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070531, null, [2, [
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]],
                        [4, null, 8, null, null, null, null, ["credentialless"]]
                    ]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070532, null, [4, null, 9, null, null, null, null, ["SharedArrayBuffer"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])