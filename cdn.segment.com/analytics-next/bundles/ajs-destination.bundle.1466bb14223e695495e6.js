(self.webpackChunk_segment_analytics_next = self.webpackChunk_segment_analytics_next || []).push([
    [464], {
        9254: function(t, n, i) {
            "use strict";

            function e(t, n) {
                var i, e;
                return "boolean" == typeof(null == n ? void 0 : n.enabled) ? n.enabled : null === (e = null === (i = null == t ? void 0 : t.__default) || void 0 === i ? void 0 : i.enabled) || void 0 === e || e
            }
            i.d(n, {
                n: function() {
                    return e
                }
            })
        },
        8711: function(t, n, i) {
            "use strict";
            i.r(n), i.d(n, {
                LegacyDestination: function() {
                    return k
                },
                ajsDestinations: function() {
                    return P
                }
            });
            var e = i(5163),
                r = i(4122),
                o = i(94),
                s = i(7547),
                a = i(204),
                u = i(1365),
                c = i(9254),
                l = i(5944),
                d = i(8044),
                h = i(4443),
                f = i(3061),
                v = i(6338),
                p = i(7566),
                g = i(7070);

            function m(t) {
                return t.toLowerCase().replace(".", "").replace(/\s+/g, "-")
            }

            function y(t, n) {
                return void 0 === n && (n = !1), n ? btoa(t).replace(/=/g, "") : void 0
            }

            function w(t, n, i, r) {
                return (0, e.mG)(this, void 0, Promise, (function() {
                    var o, s, a, u, c, l;
                    return (0, e.Jh)(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                o = m(n), s = y(o, r), a = (0, p.Kg)(), u = "".concat(a, "/integrations/").concat(null != s ? s : o, "/").concat(i, "/").concat(null != s ? s : o, ".dynamic.js.gz"), d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]), [4, (0, g.v)(u)];
                            case 2:
                                return d.sent(),
                                    function(t, n, i) {
                                        var r, o;
                                        try {
                                            var s = (null !== (o = null === (r = null === window || void 0 === window ? void 0 : window.performance) || void 0 === r ? void 0 : r.getEntriesByName(t, "resource")) && void 0 !== o ? o : [])[0];
                                            s && n.stats.gauge("legacy_destination_time", Math.round(s.duration), (0, e.ev)([i], s.duration < 100 ? ["cached"] : [], !0))
                                        } catch (t) {}
                                    }(u, t, n), [3, 4];
                            case 3:
                                throw c = d.sent(), t.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(n), "failed"]), c;
                            case 4:
                                return l = window["".concat(o, "Deps")], [4, Promise.all(l.map((function(t) {
                                    return (0, g.v)(a + t + ".gz")
                                })))];
                            case 5:
                                return d.sent(), window["".concat(o, "Loader")](), [2, window["".concat(o, "Integration")]]
                        }
                    }))
                }))
            }

            function b(t) {
                return "object" === Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
            }

            function _(t, n) {
                return (0, e.mG)(this, void 0, Promise, (function() {
                    var i, r = this;
                    return (0, e.Jh)(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return i = [], (0, o.s)() ? [2, n] : [4, (0, d.x)((function() {
                                    return n.length > 0 && (0, o.G)()
                                }), (function() {
                                    return (0, e.mG)(r, void 0, void 0, (function() {
                                        var r, o;
                                        return (0, e.Jh)(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return (r = n.pop()) ? [4, (0, u.a)(r, t)] : [2];
                                                case 1:
                                                    return o = e.sent(), o instanceof s._ || i.push(r), [2]
                                            }
                                        }))
                                    }))
                                }))];
                            case 1:
                                return a.sent(), i.map((function(t) {
                                    return n.pushWithBackoff(t)
                                })), [2, n]
                        }
                    }))
                }))
            }
            var k = function() {
                function t(t, n, i, r, o) {
                    void 0 === i && (i = {}), this.options = {}, this.type = "destination", this.middleware = [], this._ready = !1, this._initialized = !1, this.flushing = !1, this.name = t, this.version = n, this.settings = (0, e.pi)({}, i), this.disableAutoISOConversion = r.disableAutoISOConversion || !1, this.integrationSource = o, this.settings.type && "browser" === this.settings.type && delete this.settings.type, this.options = r, this.buffer = r.disableClientPersistence ? new h.Z(4, []) : new f.$(4, "dest-".concat(t)), this.scheduleFlush()
                }
                return t.prototype.isLoaded = function() {
                    return this._ready
                }, t.prototype.ready = function() {
                    var t;
                    return null !== (t = this.onReady) && void 0 !== t ? t : Promise.resolve()
                }, t.prototype.load = function(t, n) {
                    var i;
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        var r, o, s = this;
                        return (0, e.Jh)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this._ready || void 0 !== this.onReady ? [2] : null === (i = this.integrationSource) || void 0 === i ? [3, 1] : (o = i, [3, 3]);
                                case 1:
                                    return [4, w(t, this.name, this.version, this.options.obfuscate)];
                                case 2:
                                    o = e.sent(), e.label = 3;
                                case 3:
                                    r = o, this.integration = function(t, n, i) {
                                        var e;
                                        "Integration" in t ? (t({
                                            user: function() {
                                                return i.user()
                                            },
                                            addIntegration: function() {}
                                        }), e = t.Integration) : e = t;
                                        var r = new e(n);
                                        return r.analytics = i, r
                                    }(r, this.settings, n), this.onReady = new Promise((function(t) {
                                        s.integration.once("ready", (function() {
                                            s._ready = !0, t(!0)
                                        }))
                                    })), this.onInitialize = new Promise((function(t) {
                                        s.integration.on("initialize", (function() {
                                            s._initialized = !0, t(!0)
                                        }))
                                    }));
                                    try {
                                        t.stats.increment("analytics_js.integration.invoke", 1, ["method:initialize", "integration_name:".concat(this.name)]), this.integration.initialize()
                                    } catch (n) {
                                        throw t.stats.increment("analytics_js.integration.invoke.error", 1, ["method:initialize", "integration_name:".concat(this.name)]), n
                                    }
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.unload = function(t, n) {
                    return function(t, n, i) {
                        return (0, e.mG)(this, void 0, Promise, (function() {
                            var r, o, s, a;
                            return (0, e.Jh)(this, (function(e) {
                                return r = (0, p.Kg)(), o = m(t), s = y(t, i), a = "".concat(r, "/integrations/").concat(null != s ? s : o, "/").concat(n, "/").concat(null != s ? s : o, ".dynamic.js.gz"), [2, (0, g.t)(a)]
                            }))
                        }))
                    }(this.name, this.version, this.options.obfuscate)
                }, t.prototype.addMiddleware = function() {
                    for (var t, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
                    this.middleware = (t = this.middleware).concat.apply(t, n)
                }, t.prototype.shouldBuffer = function(t) {
                    return "page" !== t.event.type && ((0, o.s)() || !1 === this._ready || !1 === this._initialized)
                }, t.prototype.send = function(t, n, i) {
                    var r, o;
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        var a, u, l, d, h, f;
                        return (0, e.Jh)(this, (function(p) {
                            switch (p.label) {
                                case 0:
                                    if (this.shouldBuffer(t)) return this.buffer.push(t), this.scheduleFlush(), [2, t];
                                    if (a = null === (o = null === (r = this.options) || void 0 === r ? void 0 : r.plan) || void 0 === o ? void 0 : o.track, u = t.event.event, a && u && "Segment.io" !== this.name) {
                                        if (l = a[u], !(0, c.n)(a, l)) return t.updateEvent("integrations", (0, e.pi)((0, e.pi)({}, t.event.integrations), {
                                            All: !1,
                                            "Segment.io": !0
                                        })), t.cancel(new s.Y({
                                            retry: !1,
                                            reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                            type: "Dropped by plan"
                                        })), [2, t];
                                        if (t.updateEvent("integrations", (0, e.pi)((0, e.pi)({}, t.event.integrations), null == l ? void 0 : l.integrations)), (null == l ? void 0 : l.enabled) && !1 === (null == l ? void 0 : l.integrations[this.name])) return t.cancel(new s.Y({
                                            retry: !1,
                                            reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                            type: "Dropped by plan"
                                        })), [2, t]
                                    }
                                    return [4, (0, v.applyDestinationMiddleware)(this.name, t.event, this.middleware)];
                                case 1:
                                    if (null === (d = p.sent())) return [2, t];
                                    h = new n(d, {
                                        traverse: !this.disableAutoISOConversion
                                    }), t.stats.increment("analytics_js.integration.invoke", 1, ["method:".concat(i), "integration_name:".concat(this.name)]), p.label = 2;
                                case 2:
                                    return p.trys.push([2, 5, , 6]), this.integration ? [4, this.integration.invoke.call(this.integration, i, h)] : [3, 4];
                                case 3:
                                    p.sent(), p.label = 4;
                                case 4:
                                    return [3, 6];
                                case 5:
                                    throw f = p.sent(), t.stats.increment("analytics_js.integration.invoke.error", 1, ["method:".concat(i), "integration_name:".concat(this.name)]), f;
                                case 6:
                                    return [2, t]
                            }
                        }))
                    }))
                }, t.prototype.track = function(t) {
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        return (0, e.Jh)(this, (function(n) {
                            return [2, this.send(t, r.Track, "track")]
                        }))
                    }))
                }, t.prototype.page = function(t) {
                    var n;
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        var i = this;
                        return (0, e.Jh)(this, (function(e) {
                            return (null === (n = this.integration) || void 0 === n ? void 0 : n._assumesPageview) && !this._initialized && this.integration.initialize(), [2, this.onInitialize.then((function() {
                                return i.send(t, r.Page, "page")
                            }))]
                        }))
                    }))
                }, t.prototype.identify = function(t) {
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        return (0, e.Jh)(this, (function(n) {
                            return [2, this.send(t, r.Identify, "identify")]
                        }))
                    }))
                }, t.prototype.alias = function(t) {
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        return (0, e.Jh)(this, (function(n) {
                            return [2, this.send(t, r.Alias, "alias")]
                        }))
                    }))
                }, t.prototype.group = function(t) {
                    return (0, e.mG)(this, void 0, Promise, (function() {
                        return (0, e.Jh)(this, (function(n) {
                            return [2, this.send(t, r.Group, "group")]
                        }))
                    }))
                }, t.prototype.scheduleFlush = function() {
                    var t = this;
                    this.flushing || setTimeout((function() {
                        return (0, e.mG)(t, void 0, void 0, (function() {
                            var t;
                            return (0, e.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.flushing = !0, t = this, [4, _(this, this.buffer)];
                                    case 1:
                                        return t.buffer = n.sent(), this.flushing = !1, this.buffer.todo > 0 && this.scheduleFlush(), [2]
                                }
                            }))
                        }))
                    }), 5e3 * Math.random())
                }, t
            }();

            function P(t, n, i, r, o) {
                var s, u;
                if (void 0 === n && (n = {}), void 0 === i && (i = {}), (0, a.s)()) return [];
                t.plan && ((i = null != i ? i : {}).plan = t.plan);
                var c = null !== (u = null === (s = t.middlewareSettings) || void 0 === s ? void 0 : s.routingRules) && void 0 !== u ? u : [],
                    d = t.integrations,
                    h = i.integrations,
                    f = (0, l.o)(t, null != i ? i : {}),
                    v = null == o ? void 0 : o.reduce((function(t, n) {
                        var i;
                        return (0, e.pi)((0, e.pi)({}, t), ((i = {})[function(t) {
                            return ("Integration" in t ? t.Integration : t).prototype.name
                        }(n)] = n, i))
                    }), {}),
                    p = new Set((0, e.ev)((0, e.ev)([], Object.keys(d).filter((function(t) {
                        return function(t, n) {
                            var i, e = n.type,
                                r = n.bundlingStatus,
                                o = n.versionSettings,
                                s = "unbundled" !== r && ("browser" === e || (null === (i = null == o ? void 0 : o.componentTypes) || void 0 === i ? void 0 : i.includes("browser")));
                            return !t.startsWith("Segment") && "Iterable" !== t && s
                        }(t, d[t])
                    })), !0), Object.keys(v || {}).filter((function(t) {
                        return b(d[t]) || b(null == h ? void 0 : h[t])
                    })), !0));
                return Array.from(p).filter((function(t) {
                    return ! function(t, n) {
                        var i = !1 === n.All && void 0 === n[t];
                        return !1 === n[t] || i
                    }(t, n)
                })).map((function(t) {
                    var n = function(t) {
                            var n, i, e, r;
                            return null !== (r = null !== (i = null === (n = null == t ? void 0 : t.versionSettings) || void 0 === n ? void 0 : n.override) && void 0 !== i ? i : null === (e = null == t ? void 0 : t.versionSettings) || void 0 === e ? void 0 : e.version) && void 0 !== r ? r : "latest"
                        }(d[t]),
                        e = new k(t, n, f[t], i, null == v ? void 0 : v[t]);
                    return c.filter((function(n) {
                        return n.destinationName === t
                    })).length > 0 && r && e.addMiddleware(r), e
                }))
            }
        }
    }
]);
//# sourceMappingURL=ajs-destination.bundle.1466bb14223e695495e6.js.map