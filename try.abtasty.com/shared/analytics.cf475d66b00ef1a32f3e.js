"use strict";
(self.webpackChunktag = self.webpackChunktag || []).push([
    [142], {
        8450: (e, t, r) => {
            r.r(t), r.d(t, {
                HitType: () => n.Re,
                aggregateActionTracking: () => lt,
                dispatchBatch: () => B,
                dispatchHit: () => st,
                getCurrentScrollPercent: () => ut,
                listenToEvents: () => yt,
                setGlobals: () => gt
            });
            var n = r(6125),
                o = r(4942),
                i = r(5861),
                c = r(1042),
                s = r(4564),
                a = r(7352),
                p = r(6080),
                l = r(6044),
                u = r(8957);

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const f = "https://ariane.abtasty.com",
                b = {
                    "chrome mobile": 78,
                    chrome: 77,
                    firefox: 70,
                    edge: 77,
                    opera: 64,
                    safari: 12,
                    "uc browser": 12
                };
            let O, d, m = [];

            function w(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return h = (0, i.Z)((function*(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
                    const n = new u.yN;
                    if (n.haveConsent([u.RX.collect]) || j(e))
                        if (t) {
                            const [n, o] = yield(0, s.K)(!0, ["browser.name", "browser.version"]);
                            S(n, o) ? P(e, !t, r) : D(r, e)
                        } else if (window.fetch) {
                        let t = {};
                        if (!d) try {
                            d = new AbortController, t = {
                                signal: d.signal
                            }
                        } catch (e) {
                            (0, l.Tb)(e)
                        }
                        O = {
                            args: e,
                            endpoint: r
                        }, yield fetch(r, g(g({}, t), {}, {
                            mode: "no-cors",
                            method: "POST",
                            headers: {
                                "Content-type": "text/plain"
                            },
                            cache: "no-store",
                            body: JSON.stringify(e)
                        })), O = null
                    } else O = {
                        args: e,
                        endpoint: r
                    }, P(e, !t, r);
                    else {
                        if (0 === m.length) {
                            const e = () => {
                                m.forEach((e => {
                                    w(e.args, e.sync, e.endpoint)
                                })), m = []
                            };
                            window.addEventListener(`abtasty_${a.PL.consentValid}`, (t => {
                                const {
                                    detail: r
                                } = t;
                                r && r.consentFor.includes(u.RX.collect) && e()
                            }))
                        }
                        m.push({
                            args: e,
                            sync: t,
                            endpoint: r
                        })
                    }
                })), h.apply(this, arguments)
            }

            function v() {
                d && (d.abort(), (0, p.kK)(O) || w(O.args, !0, O.endpoint))
            }

            function j(e) {
                const t = e.h;
                return !!Array.isArray(t) && t.some((e => e.t === n.Re.consent && "no" === e.co))
            }

            function P(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = arguments.length > 2 ? arguments[2] : void 0;
                try {
                    const n = new XMLHttpRequest;
                    n.open("POST", r, t), n.setRequestHeader("Content-type", "text/plain"), n.send(JSON.stringify(e)), n.onload = function() {
                        O = null
                    }, d || (d = n)
                } catch (e) {
                    console.error(`${e} - Raw UserAgent: ${navigator.userAgent} - Parsed UserAgent: ${JSON.stringify((0,s.r)())}`)
                }
            }

            function D(e, t) {
                navigator.sendBeacon(e, JSON.stringify(t))
            }

            function S(e, t) {
                return !!e && !!t && !!b[e.toLowerCase()] && parseInt(t, 10) <= b[e.toLowerCase()]
            }

            function E(e, t, r) {
                c.Kp(`AB Tasty warning: '${e}' hit cannot be sent, format is not correct.`, ...t, r)
            }
            var T = r(2084),
                q = r(5528),
                R = r(4284),
                A = r(3330),
                k = r(1748);

            function C(e) {
                let t = function(e) {
                    const t = (0, R.wy)().toleranceParams;
                    if (!t || !t.length || !e) return e;
                    try {
                        let r = e;
                        const n = e.split("?")[0],
                            o = (0, T.UO)(e);
                        return 0 === Object.keys(o).length || (t.forEach((e => {
                            delete o[e]
                        })), r = `${n}?${Object.keys(o).map((e=>void 0===o[e]?"":`${e}=${o[e]}`)).join("&")}`), r
                    } catch (t) {
                        return c.Kp(`[ABTasty]: Sensitive data restrication can't be applied:${t}`), e
                    }
                }(e);
                return t = function(e) {
                    const t = (0, R.wy)().toleranceRegex;
                    let r = e;
                    if (!t) return r;
                    try {
                        const e = new RegExp(t).exec(r);
                        e && (e.shift(), r = e.join(""))
                    } catch (e) {
                        c.Kp(`[ABTasty] The sensitive data regexp "${t}" can't be applied:${e}`)
                    }
                    return r
                }(t), t
            }

            function I(e) {
                let {
                    campaignHistory: t,
                    visitorId: r,
                    currentSessionTimestamp: n,
                    numberOfSessions: o
                } = e;
                const i = new q.w;
                let c = i.getReferrer();
                return !c && i.isItNewSession() && (c = document.referrer), {
                    c: (null == t ? void 0 : t()) || {},
                    cid: (0, R.Nn)(),
                    vid: r,
                    dr: encodeURIComponent(C(c)),
                    vp: `${window.innerWidth}x${window.innerHeight}`,
                    sr: `${screen.width}x${screen.height}`,
                    pt: encodeURIComponent(document.title),
                    de: encodeURIComponent(document.characterSet),
                    sd: encodeURIComponent(`${screen.colorDepth}-bits`),
                    ul: navigator.language || navigator.userLanguage,
                    je: navigator.javaEnabled(),
                    dl: encodeURIComponent(C(document.location.href)),
                    cst: n,
                    sn: o,
                    lv: (0, A.aO)(),
                    qa: (0, k.GD)()
                }
            }

            function $(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            let L, x = [];
            const _ = e => t => {
                x.push(t),
                    function(e) {
                        L && "number" == typeof L && clearTimeout(L);
                        L = setTimeout((() => {
                            B(e)()
                        }), 500)
                    }(e), JSON.stringify(x).length >= 40960 && B(e)()
            };
            const B = e => function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!x || !x.length) return void(t && v());
                x.map((e => {
                    e.qt = Date.now() - e.qt
                }));
                const r = N(N({}, I(e)), {}, {
                    tv: "latest",
                    tch: `${"6f119b70".substring(0,5)}`,
                    h: x,
                    t: n.Re.batch
                });
                w(r, t), x = []
            };

            function H(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const V = {
                t: {
                    label: "Hit Type",
                    required: !0,
                    types: [{
                        type: n.OD.String
                    }],
                    allowedValues: Object.values(n.Re)
                },
                ib: {
                    label: "Is a bot",
                    required: !1,
                    types: [{
                        type: n.OD.Boolean
                    }]
                }
            };

            function U(e, t) {
                const {
                    type: r,
                    condition: o,
                    model: i,
                    allowEmpty: c = !0
                } = t, s = typeof e;
                switch (r) {
                    case n.OD.Boolean:
                        return s === r || ["number", "string"].some((e => e === s)) && [0, 1, "true", "false", "0", "1"].includes(e);
                    case n.OD.IntegerArray:
                        return Array.isArray(e) && (!c && e.length > 0 || c) && e.every((e => U(e, {
                            type: n.OD.Integer,
                            condition: o
                        })));
                    case n.OD.Integer:
                        return "boolean" !== s && !isNaN(e) && Number(e) % 1 == 0 && (!o || o && o(Number(e)));
                    case n.OD.FloatArray:
                        return Array.isArray(e) && (!c && e.length > 0 || c) && e.every((e => U(e, {
                            type: n.OD.Float,
                            condition: o
                        })));
                    case n.OD.Float:
                        return "boolean" !== s && !isNaN(e) && (!o || o && o(Number(e)));
                    case n.OD.ArrayArray:
                        return Array.isArray(e) && (!c && e.length > 0 || c) && e.every((e => U(e, {
                            type: n.OD.Array,
                            condition: o
                        })));
                    case n.OD.Array:
                        return Array.isArray(e) && (!c && e.length > 0 || c);
                    case n.OD.ObjectArray:
                        return Array.isArray(e) && (!c && e.length > 0 || c) && e.every((e => U(e, {
                            type: n.OD.Object,
                            model: i,
                            condition: o,
                            allowEmpty: c
                        })));
                    case n.OD.Object:
                        return s === r && !Array.isArray(e) && (!(!c && Object.keys(e).length <= 0) && (!i || Object.entries(e).every((e => {
                            let [t, r] = e;
                            return U(t, i.key) && U(r, i.value)
                        }))));
                    case n.OD.StringArray:
                        return Array.isArray(e) && (!c && e.length > 0 || c) && e.every((e => U(e, {
                            type: n.OD.String,
                            condition: o
                        })));
                    case n.OD.String:
                        return (s === r || ["number", "boolean"].some((e => e === s)) && !isNaN(e)) && !(0, p.kK)(e) && (!c && ("" + e).length > 0 || c) && (!o || o && o("" + e));
                    default:
                        return s === r
                }
            }

            function Z(e, t) {
                const r = M(M({}, V), t);
                return Object.keys(r).reduce(((t, n) => {
                    const o = r[n];
                    if (o) {
                        const {
                            label: r,
                            required: i,
                            types: c,
                            maxLength: s,
                            allowedValues: a
                        } = o, l = e[n];
                        if (i && ((0, p.kK)(l) || (0, p.xb)(l))) t.push(`Argument '${n}' (${r}) is missing`);
                        else if (void 0 !== l && c && c.length > 0) {
                            const o = c.map((t => {
                                const o = e[n],
                                    i = typeof o;
                                if (!U(o, t)) return `Argument '${n}' (${r}) is of wrong type ${i} (expected ${JSON.stringify(t)})`;
                                switch (t.type.toLowerCase()) {
                                    case "boolean":
                                        e[n] = !["0", "false", 0, !1].includes(o) && !!o;
                                        break;
                                    case "integer":
                                    case "float":
                                        e[n] = Number(o);
                                        break;
                                    case "string":
                                        !["number", "boolean"].some((e => e === i)) || isNaN(o) || void 0 === o || (0, p.kK)(o) || (e[n] = "" + o)
                                }
                            }));
                            o.every((e => e && e.length > 0)) && o.forEach((e => t.push(e)))
                        }
                        if (null != l && a && -1 === a.indexOf(l)) {
                            const e = a.map((e => `"${e}"`)).join(", ");
                            t.push(`Argument '${n}' (${r}) value is not allowed (expected one of ${e}, received ${l})`)
                        }
                        null != l && s && l.length > s && t.push(`Argument '${n}' (${r}) is too long (length of ${l.length}, expected ${s})`)
                    }
                    return t
                }), [])
            }
            var X = r(4692);

            function K(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const J = e => t => {
                const r = {};
                (0, X.FU)() && !(0, p.kK)((0, X.QX)().previousLogicalView) && (r.pea = "INVALIDATE", r.pev = (0, X.QX)().previousLogicalView);
                const o = F(F(F({}, t), r), {}, {
                        t: n.Re.pageview
                    }),
                    i = function(e) {
                        return Z(e, {
                            pea: {
                                label: "PostEdit Action",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            pev: {
                                label: "PostEdit LogicalView",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            }
                        })
                    }(o);
                i.length ? E(n.Re.pageview, i, o) : _(e)(o)
            };

            function Y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Q = e => t => {
                const r = window.ABTasty.results,
                    o = t.caid && r && r[t.caid] && Object.keys(r[t.caid].targetings.qaParameters).length > 0 || (0, k.GD)(),
                    i = G(G({}, t), {}, {
                        t: n.Re.campaign,
                        qa: o
                    }),
                    c = function(e) {
                        return Z(e, {
                            caid: {
                                label: "Campaign ID",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            vaid: {
                                label: "Variation ID",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            }
                        })
                    }(i);
                c.length ? E(n.Re.campaign, c, i) : _(e)(i)
            };
            var z = r(763),
                W = r(5168),
                ee = r(7787);

            function te(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ne = (e, t) => e.map((e => {
                for (const r in e) {
                    if ("qt" === r) continue;
                    const n = e[r];
                    (0, p.kK)(t[r]) || t[r] != n || delete e[r]
                }
                return e
            })).filter((e => {
                const t = Object.keys(e);
                return !(1 === t.length && "qt" === t[0])
            }));
            const oe = e => t => {
                const r = re(re({}, t), {}, {
                        t: n.Re.segment
                    }),
                    o = function(e) {
                        return Z(e, {
                            s: {
                                label: "Segments",
                                required: !0,
                                types: [{
                                    type: n.OD.Object,
                                    model: {
                                        key: {
                                            type: n.OD.String
                                        },
                                        value: {
                                            type: n.OD.String
                                        }
                                    }
                                }]
                            },
                            pa: {
                                label: "Provider",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    required: !1
                                }]
                            }
                        })
                    }(r);
                o.length ? E(n.Re.segment, o, r) : (Array.isArray(r.s) ? r.s.forEach((r => {
                    const o = re(re({}, t), {}, {
                        t: n.Re.segment
                    });
                    o.s = r, _(e)(o)
                })) : _(e)(r), function(e) {
                    if (!e.s && "object" != typeof e.s) return;
                    if (e.pa && "string" != typeof e.pa) return;
                    const t = new z.T;
                    let r = t.getSegments() || [];
                    const n = e.pa ? re(re({}, e.s), {}, {
                        pa: e.pa
                    }) : e.s;
                    r = ne(r, n), t.setSegments([...r, re(re({}, n), {}, {
                        qt: e.qt
                    })])
                }(t), (e => {
                    if (!e.s && "object" != typeof e.s) return;
                    if (e.pa && "string" != typeof e.pa) return;
                    let t = JSON.parse(W.Jo.getItem(W.vR, ee.I.CUSTOM_SEGMENTS)) || [];
                    const r = e.pa ? re(re({}, e.s), {}, {
                        pa: e.pa
                    }) : e.s;
                    t = ne(t, r), W.Jo.setItem(W.vR, ee.I.CUSTOM_SEGMENTS, JSON.stringify([...t, re(re({}, r), {}, {
                        qt: e.qt
                    })]))
                })(t))
            };
            r(1155);

            function ie(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ie(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const se = e => t => {
                const r = ce(ce({}, t), {}, {
                        t: n.Re.event
                    }),
                    o = function(e) {
                        return Z(e, {
                            ec: {
                                label: "Event Category",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            ea: {
                                label: "Event Action",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            el: {
                                label: "Event Label",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            ev: {
                                label: "Event Value",
                                required: !1,
                                types: [{
                                    type: n.OD.Integer,
                                    condition: e => e >= 0
                                }]
                            }
                        })
                    }(r);
                o.length ? E(n.Re.event, o, r) : _(e)(r)
            };
            var ae = r(7334);
            const pe = (() => {
                const e = {};
                return (t, r, o, i) => {
                    const c = () => setTimeout((() => ((e, t) => {
                        if (!t || t.itemsPrice.length < 1) return;
                        const r = t.revenue,
                            n = t.itemsPrice.reduce(((e, t) => e + t), 0);
                        if (r !== n) {
                            const o = r > n ? "Transaction revenue higher than item price" : "Item price higher than transaction revenue";
                            (0, ae.X)(e)("Anomaly Detection", {
                                anomaly: o,
                                transactionId: t.id
                            })
                        }
                    })(t, e[o])), 500);
                    return e[o] ? (e[o].timeout && clearTimeout(e[o].timeout), n.Re.transaction === r ? e[o].revenue = i : n.Re.item === r && e[o].itemsPrice.push(i), e[o].timeout = c()) : (e[o] = {
                        id: o,
                        revenue: r === n.Re.transaction ? i : 0,
                        itemsPrice: [...r === n.Re.item ? [i] : []],
                        timeout: null
                    }, e[o].timeout = c()), e[o]
                }
            })();

            function le(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? le(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const ye = e => t => {
                const r = ue(ue({}, t), {}, {
                        t: n.Re.transaction
                    }),
                    o = function(e) {
                        return Z(e, {
                            tid: {
                                label: "Transaction ID",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            ta: {
                                label: "Transaction Affiliation",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            tr: {
                                label: "Transaction Revenue",
                                required: !1,
                                types: [{
                                    type: n.OD.Float,
                                    condition: e => e >= 0
                                }]
                            },
                            ts: {
                                label: "Transaction Shipping",
                                required: !1,
                                types: [{
                                    type: n.OD.Float,
                                    condition: e => e >= 0
                                }]
                            },
                            tt: {
                                label: "Transaction Tax",
                                required: !1,
                                types: [{
                                    type: n.OD.Float,
                                    condition: e => e >= 0
                                }]
                            },
                            tc: {
                                label: "Transaction Currency",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }],
                                maxLength: 10
                            },
                            tcc: {
                                label: "Transaction Coupon Code",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            pm: {
                                label: "Transaction Payment Method",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            sm: {
                                label: "Transaction Shipping Method",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            icn: {
                                label: "Transaction Number of Items",
                                required: !1,
                                types: [{
                                    type: n.OD.Integer,
                                    condition: e => e >= 0
                                }]
                            }
                        })
                    }(r);
                o.length ? E(n.Re.transaction, o, r) : (_(e)(r), function(e) {
                    const t = {
                        id: e.tid || e.id,
                        value: e.tr,
                        shipping: e.sm,
                        payment: e.pm,
                        coupon: e.tcc,
                        tax: e.tt,
                        shipping_cost: e.ts,
                        currency: e.tc,
                        name: e.name,
                        quantity: e.quantity,
                        affiliation: e.ta,
                        time: e.time || (new Date).getTime()
                    };
                    (new z.T).addTransaction(t)
                }(t), t.tr && pe(e, n.Re.transaction, t.tid, t.tr))
            };

            function ge(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ge(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const be = e => t => {
                const r = fe(fe({}, t), {}, {
                        t: n.Re.item
                    }),
                    o = function(e) {
                        return Z(e, {
                            tid: {
                                label: "Transaction ID",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            in: {
                                label: "Item Name",
                                required: !0,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !1
                                }]
                            },
                            ip: {
                                label: "Item Price",
                                required: !1,
                                types: [{
                                    type: "float"
                                }]
                            },
                            iq: {
                                label: "Item Quantity",
                                required: !1,
                                types: [{
                                    type: "integer"
                                }]
                            },
                            ic: {
                                label: "Item Code",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }],
                                maxLength: 500
                            },
                            iv: {
                                label: "Item Category",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }],
                                maxLength: 500
                            }
                        })
                    }(r);
                if (o.length) E(n.Re.item, o, r);
                else {
                    _(e)(r),
                        function(e) {
                            const t = {
                                transactionId: e.tid,
                                name: e.in,
                                quantity: e.iq,
                                revenue: e.iq && e.ip ? e.iq * e.ip : 0,
                                local_revenue: e.iq && e.ip ? e.iq * e.ip : 0,
                                sku: e.ic,
                                category: e.iv,
                                time: (new Date).getTime()
                            };
                            (new z.T).addItem(t)
                        }(t);
                    const o = t.ip || t.iq ? (t.iq || 1) * (t.ip || 0) : 0;
                    pe(e, n.Re.item, t.tid, o)
                }
            };
            const Oe = {
                click: "click",
                over: "over",
                scroll: "scroll"
            };
            var de = r(4925),
                me = r(7947),
                we = r(7649),
                he = r(1943);
            const ve = ["qt"];

            function je(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const De = {
                [he.xz]: "==",
                [he.DC]: "=@",
                [he.o1]: "=~"
            };
            const Se = e => t => {
                let {
                    qt: r
                } = t, o = (0, de.Z)(t, ve);
                const {
                    waitForConsent: i
                } = (0, R.wy)(), c = (e => {
                    let {
                        mode: t,
                        data: r
                    } = e;
                    switch (t) {
                        case me.n8.customJs:
                            return "custom";
                        case me.n8.didomi:
                            return "string" == typeof r && r ? r : we.Y;
                        case me.n8.specificCookie:
                            if ("object" == typeof r) {
                                const {
                                    name: e,
                                    value: t,
                                    condition: n
                                } = r;
                                return `${e}${n&&De[n]?De[n]:De[he.xz]}${t}`
                            }
                        default:
                            return ""
                    }
                })(i), s = (e => {
                    let {
                        campaignRestrictions: t
                    } = e;
                    return Object.keys(t).length > 0 && 0 === Object.values(t).filter((e => e)).length ? n.YX.strict : n.YX.permissive
                })(i), a = (e => {
                    let {
                        mode: t
                    } = e;
                    return Object.keys(n.aB).includes(t) ? n.aB[t] : void 0
                })(i), p = (e => {
                    let {
                        campaignRestrictions: t
                    } = e;
                    return Object.keys(t).filter((e => t[e])).reduce(((e, t) => e + me.s_[t]), 0)
                })(i), l = Date.now(), u = Pe(Pe({}, o), {}, {
                    qt: l - r,
                    me: c,
                    om: s,
                    sco: `${p}`,
                    t: n.Re.consent,
                    ts: l
                });
                a && (u.op = a);
                const y = function(e) {
                        return Z(e, {
                            co: {
                                label: "Consent",
                                required: !0,
                                types: [{
                                    type: n.OD.Boolean,
                                    allowEmpty: !1
                                }]
                            }
                        })
                    }(u),
                    g = Pe(Pe({}, I(e)), {}, {
                        tv: "latest",
                        tch: `${"6f119b70".substring(0,5)}`,
                        h: [u],
                        t: n.Re.batch
                    });
                y.length ? E(n.Re.consent, y, u) : w(g)
            };

            function Ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ee(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const qe = {
                    ps: {
                        label: "Product SKU",
                        required: !0,
                        types: [{
                            type: n.OD.String,
                            allowEmpty: !1
                        }]
                    },
                    pq: {
                        label: "Product quantity",
                        required: !0,
                        types: [{
                            type: n.OD.Integer,
                            allowEmpty: !1
                        }]
                    },
                    pp: {
                        label: "Product price",
                        required: !0,
                        types: [{
                            type: n.OD.Float,
                            allowEmpty: !1
                        }]
                    },
                    pcid: {
                        label: "Product cart Id",
                        required: !0,
                        types: [{
                            type: n.OD.String,
                            allowEmpty: !1
                        }]
                    }
                },
                Re = {
                    pq: {
                        label: "Product quantity",
                        required: !0,
                        types: [{
                            type: n.OD.Integer,
                            allowEmpty: !1
                        }]
                    },
                    pp: {
                        label: "Product price",
                        required: !0,
                        types: [{
                            type: n.OD.Float,
                            allowEmpty: !1
                        }]
                    },
                    pcid: {
                        label: "Product cart Id",
                        required: !0,
                        types: [{
                            type: n.OD.String,
                            allowEmpty: !1
                        }]
                    }
                };
            const Ae = e => t => {
                const r = Te(Te({}, t), {}, {
                        t: n.Re.product
                    }),
                    o = function(e) {
                        return Z(e, Te({
                            pit: {
                                label: "Product interaction type",
                                required: !0,
                                types: [{
                                    type: "string",
                                    allowEmpty: !1,
                                    value: [n.s_.CART_ITEM, n.s_.CART_TOTAL],
                                    condition: e => e === n.s_.CART_ITEM || e === n.s_.CART_TOTAL
                                }]
                            }
                        }, e.pit === n.s_.CART_ITEM ? qe : Re))
                    }(r);
                o.length > 0 ? E(n.Re.product, o, r) : _(e)(r)
            };

            function ke(e) {
                if (!(e instanceof Element)) return null;
                const t = [];
                let r = e;
                for (; r && r.nodeType === Node.ELEMENT_NODE;) {
                    let e = r.nodeName.toLowerCase();
                    if (r.id) {
                        e += "#" + r.id, t.unshift(e);
                        break
                    } {
                        let t = r,
                            n = 1;
                        for (; t = t.previousElementSibling;) t.nodeName.toLowerCase() === e && n++;
                        n > 1 && (e += ":nth-of-type(" + n + ")")
                    }
                    t.unshift(e), r = r.parentNode
                }
                return t.join(" > ")
            }

            function Ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const $e = Object.keys(Oe);

            function Ne(e, t) {
                const r = {};
                if (e && e !== document) {
                    const n = t.elementsMap.get(e);
                    r.tecp = encodeURIComponent(ke(e)), e.id && (r.teid = e.id), n && n.enterTime && (r.otbe = Date.now() - n.enterTime), r.tc = e.getAttribute("class") || "";
                    const {
                        left: o,
                        top: i,
                        width: c,
                        height: s
                    } = function(e) {
                        const t = e.getBoundingClientRect(),
                            r = document.body,
                            n = document.documentElement,
                            o = window.pageYOffset || n.scrollTop || r.scrollTop,
                            i = window.pageXOffset || n.scrollLeft || r.scrollLeft,
                            c = n.clientTop || r.clientTop || 0,
                            s = n.clientLeft || r.clientLeft || 0,
                            a = t.top + o - c,
                            p = t.left + i - s;
                        return {
                            top: Math.round(a),
                            left: Math.round(p),
                            width: Math.round(t.width),
                            height: Math.round(t.height)
                        }
                    }(e);
                    r.tes = `${c}x${s}`, r.tep = `${o}x${i}`, r.tcec = e.childElementCount || 0, r.tet = e.tagName
                }
                return r
            }
            const Le = e => (t, r, o) => {
                const {
                    pageX: i,
                    pageY: c
                } = r.mouse, s = void 0 !== o.pageX ? `${o.pageX}x${o.pageY}` : `${i}x${c}`, a = Ie(Ie(Ie({}, Ne(o.target, r)), {}, {
                    esp: ut(),
                    cp: s
                }, t), {}, {
                    t: n.Re.visitorevent
                }), p = function(e) {
                    return Z(e, {
                        et: {
                            label: "Event Type",
                            required: !0,
                            types: [{
                                type: n.OD.String
                            }],
                            allowedValues: $e
                        }
                    })
                }(a);
                p.length ? E(n.Re.visitorevent, p, a) : _(e)(a)
            };

            function xe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xe(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Be = e => t => {
                const r = _e(_e({}, t), {}, {
                        t: n.Re.nps
                    }),
                    o = function(e) {
                        return Z(e, {
                            ns: {
                                label: "The NPS score ranging from -100 to 100",
                                required: !0,
                                types: [{
                                    type: n.OD.Integer
                                }]
                            },
                            nf: {
                                label: "The NPS feedbacks from visitors",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            caid: {
                                label: "Campaign ID",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            },
                            vaid: {
                                label: "Variation ID",
                                required: !1,
                                types: [{
                                    type: n.OD.String,
                                    allowEmpty: !0
                                }]
                            }
                        })
                    }(r);
                o.length ? E(n.Re.nps, o, r) : _(e)(r)
            };

            function He(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? He(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const Ve = e => t => {
                const r = Me(Me(Me({}, I(e)), t), {}, {
                        t: n.Re.datalayer
                    }),
                    o = function(e) {
                        return Z(e, {
                            dlr: {
                                label: "Datalayer content",
                                required: !0,
                                types: [{
                                    type: n.OD.Object
                                }, {
                                    type: n.OD.Array
                                }]
                            }
                        })
                    }(r);
                o.length ? E(n.Re.datalayer, o, r) : w(r, null, "https://ariane.abtasty.com/datalayer")
            };
            var Ue = r(9572),
                Ze = r(3701);
            const Xe = e => t => {
                (0, Ze.kG)(e)({
                    deprecate: "window._abtasty.push()",
                    el: `push-${t}`,
                    type: "function"
                })
            };

            function Ke(e) {
                window._abtasty.push = function() {
                    return Ge(e)([arguments[0]]), Array.prototype.push.apply(this, arguments)
                }
            }
            const Fe = e => t => {
                    const r = t[1].toString(),
                        o = {
                            tid: t[2],
                            tr: (0, p.kK)(t[3]) ? 0 : parseFloat(t[3].toString().replace(",", ".")),
                            icn: Number(t[4]) || 0,
                            ta: r
                        };
                    st(e)(n.Re.transaction, o)
                },
                Je = e => t => {
                    const r = t[1] || "",
                        o = t[2] || "";
                    if (!("string" == typeof r && "" !== r) || !("string" == typeof o && "" !== o || "number" == typeof o)) return void c.Kp("CV informations are not valid, please, check that your second and third argument are not empty strings");
                    const i = {
                        category: Ue.d.CV,
                        action: r,
                        value: "string" == typeof o ? o.substring(0, 65) : o,
                        time: Date.now()
                    };
                    (new z.T).addCustomVariable(i);
                    const s = {
                        [r]: "string" == typeof o ? o.substring(0, 65) : o
                    };
                    st(e)(n.Re.segment, {
                        s
                    })
                },
                Ye = e => t => {
                    const r = t[1] || "",
                        o = t[2] || "";
                    if (!("string" == typeof r && "" !== r) || !("string" == typeof o && "" !== o || "number" == typeof o)) return void c.Kp("ECO informations are not valid, please, check that your second and third argument are not empty strings");
                    const i = {
                        action: r,
                        category: Ue.d.ECO,
                        value: "string" == typeof o ? o.substring(0, 65) : o,
                        time: Date.now()
                    };
                    (new z.T).addCustomVariable(i);
                    const s = {
                        ec: "eco",
                        ea: r,
                        el: o
                    };
                    st(e)(n.Re.event, s)
                },
                Ge = e => function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window._abtasty;
                    t.forEach((t => {
                        if (Array.isArray(t) && Object.keys(t).length) switch (t[0].toString().toLowerCase()) {
                            case "transaction":
                                Fe(e)(t), Xe(e)("transaction");
                                break;
                            case "cv":
                                Je(e)(t), Xe(e)("cv");
                                break;
                            case "eco":
                                Ye(e)(t), Xe(e)("eco");
                                break;
                            default:
                                const r = "Wrong format to push (nothing was sent)";
                                c.vU(r, t)
                        } else {
                            const e = "Please give at least one parameter for the/these arrays !";
                            c.vU(e, t)
                        }
                    })), window._abtasty = [], Ke(e)
                };
            var Qe = r(1438),
                ze = r(7196),
                We = r(2622);

            function et(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? et(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : et(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const rt = "Action Tracking",
                nt = {
                    elementsMap: new Map,
                    mouse: {
                        pageX: 0,
                        pageY: 0
                    }
                },
                ot = e => ({
                    [n.Re.consent]: Se(e),
                    [n.Re.campaign]: Q(e),
                    [n.Re.event]: se(e),
                    [n.Re.item]: be(e),
                    [n.Re.pageview]: J(e),
                    [n.Re.segment]: oe(e),
                    [n.Re.transaction]: ye(e),
                    [n.Re.visitorevent]: Le(e),
                    [n.Re.nps]: Be(e),
                    [n.Re.datalayer]: Ve(e),
                    [n.Re.product]: Ae(e)
                });
            let it = [];
            const ct = e => t => {
                    ! function(e) {
                        e.pageX && (nt.mouse = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        })
                    }(t), st(e)(n.Re.visitorevent, {
                        et: Oe.click
                    }, t)
                },
                st = e => function(t, n) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                    Promise.resolve().then(r.bind(r, 5717)).then((e => {
                        let {
                            recheckTargetingByHit: r
                        } = e;
                        r(t, n)
                    }));
                    const c = n.qt || Date.now();
                    if (window.frames.ABTastyQaAssistant) {
                        const e = tt(tt({}, n), {}, {
                            qt: c,
                            event: o,
                            path: i,
                            name: "ABTasty_event",
                            type: t.toUpperCase()
                        });
                        window.postMessage(e, document.location.origin), window.frames.ABTastyQaAssistant.postMessage(e, "*")
                    }
                    ot(e)[t.toUpperCase()](tt(tt({}, n), {}, {
                        qt: c
                    }), tt({}, nt), o), ze.d.getInstance().emit(t.toUpperCase(), n, c)
                };

            function at(e) {
                let [t, r] = e;
                document.removeEventListener(t, r)
            }

            function pt(e) {
                let [t, r] = e;
                document.addEventListener(t, r, !0)
            }
            const lt = e => (t, r, o, i, c) => {
                if (t && void 0 !== o ? Object.keys(e.getCampaigns()).length <= 0 : e.hasSeenCampaign(o)) return;
                const s = {
                    name: t,
                    value: 0,
                    time: c || Date.now()
                };
                (new z.T).addActionTracking(s);
                const a = ke(i),
                    p = e.getCampaign(o),
                    l = p ? p.variationID : null,
                    u = {
                        campaignHistory: () => e.getCampaignHistory(),
                        visitorId: e.getVisitorId(),
                        currentSessionTimestamp: e.getCurrentSessionTimestamp(),
                        numberOfSessions: e.getNumberOfSessions()
                    };
                null != o && null != p && null != l ? st(u)(n.Re.event, {
                    ec: rt,
                    ea: t,
                    caid: o.toString(),
                    vaid: l.toString(),
                    qt: c
                }, void 0, a) : st(u)(n.Re.event, {
                    ec: rt,
                    ea: t,
                    qt: c
                }, void 0, a)
            };

            function ut() {
                const e = 100 * (document.body.scrollTop || document.documentElement.scrollTop) / (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight);
                return Math.round(e)
            }

            function yt(e) {
                it.forEach(at), it = [
                    ["click", ct(e)]
                ], it.forEach(pt)
            }
            const gt = e => {
                const t = {
                    campaignHistory: () => e.getCampaignHistory(),
                    visitorId: e.getVisitorId(),
                    currentSessionTimestamp: e.getCurrentSessionTimestamp(),
                    numberOfSessions: e.getNumberOfSessions()
                };
                (e => {
                    if (window.abtasty) {
                        const t = window.abtasty.send;
                        window.abtasty.send = (r, n) => {
                            const o = {
                                campaignHistory: () => e.getCampaignHistory(),
                                visitorId: e.getVisitorId(),
                                currentSessionTimestamp: e.getCurrentSessionTimestamp(),
                                numberOfSessions: e.getNumberOfSessions()
                            };
                            st(o)(r, n), t && t(r, n)
                        }
                    } else window.abtasty = {
                        send: () => {
                            const t = {
                                campaignHistory: () => e.getCampaignHistory(),
                                visitorId: e.getVisitorId(),
                                currentSessionTimestamp: e.getCurrentSessionTimestamp(),
                                numberOfSessions: e.getNumberOfSessions()
                            };
                            st(t)
                        }
                    };
                    if ("function" == typeof window.ABTastyClickTracking) {
                        const t = window.ABTastyClickTracking;
                        window.ABTastyClickTracking = (r, n, o) => {
                            lt(e)(r, n, o, null), t(r, n, o)
                        }
                    } else window.ABTastyClickTracking = lt(e);
                    if ("function" == typeof window.ABTastyEvent) {
                        const t = window.ABTastyEvent;
                        window.ABTastyEvent = (r, n, o) => {
                            lt(e)(r, n, o, null), t(r, n, o)
                        }
                    } else window.ABTastyEvent = lt(e)
                })(e),
                function(e) {
                    window._abtasty = window._abtasty || [], Ge(e)(window._abtasty)
                }(t),
                function(e) {
                    const t = (0, Qe.s)() ? "pagehide" : "beforeunload";
                    window.addEventListener(t, (() => (B(e)(!0), null)))
                }(t), We.j.getCollectHit().forEach((e => {
                    st(t)(e.type, tt({
                        qt: e.time
                    }, e.args), void 0, void 0)
                })), We.j.getEventTracking().forEach((t => {
                    lt(e)(t.name, t.data, t.campaignId, void 0, t.time)
                })), (0, a.hb)(a.PL.analyticsLoaded)
            }
        }
    }
]);