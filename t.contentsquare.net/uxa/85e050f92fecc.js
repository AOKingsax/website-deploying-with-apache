var CS_CONF = {
    "projectId": 1618,
    "status": 1,
    "hostnames": ["prestashop.com", "prestashopready.com"],
    "crossDomainTracking": 0,
    "crossDomainSingleIframeTracking": 0,
    "consentRequired": 1,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 100,
    "replayRecordingRate": 67,
    "validationRate": 10,
    "lastTrackingDraw": null,
    "trackerDomain": "c.contentsquare.net",
    "recordingDomain": "r.contentsquare.net",
    "useMalkaPipeline": 1,
    "ed": "l.contentsquare.net/log/web",
    "eMerchandisingEnabled": 0,
    "mouseMoveHeatmapEnabled": 0,
    "autoInsightsEnabled": 1,
    "jsErrorsEnabled": 1,
    "customErrorsEnabled": 0,
    "jsCustomErrorsEnabled": 0,
    "apiErrorsEnabled": 0,
    "customHashIdEnabled": 0,
    "recordingEncryptionEnabled": 0,
    "recordingEncryptionPublicKey": null,
    "recordingEncryptionPublicKeyId": 0,
    "secureCookiesEnabled": 0,
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null,
    "whitelistedAttributes": [],
    "replayRecordingUnmaskedUrlRegex": "https:\\/\\/addons.prestashop.com(.+|)",
    "replayRecordingMaskedUrlRegex": null,
    "tagDeploymentMode": "CONTENTSQUARE",
    "experimental": null,
    "iframesTracking": 0,
    "textVisibilityEnabled": 0,
    "cookielessTrackingEnabled": 0,
    "malkaUrlEnabled": 0,
    "malkaEtrEnabled": 0,
    "pathComputationRules": {},
    "asyncSerializerEnabled": 1,
    "pendingInactivityTimeout": 5000,
    "accessibilityEnabled": 0,
    "malkaQuotaServiceDomain": "q-aeu1.contentsquare.net",
    "malkaRecordingDomain": "k-aeu1.contentsquare.net"
};
var CS_INTEGRATIONS_CONF = {
    "zendesk-chat": {},
    "ab-tasty": {}
};
/* integration-zendesk-chat 2.0.3 */
! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(i, r, function(n) {
                return e[n]
            }.bind(null, r));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-zendesk-chat-contentsquare","version":"2.0.3","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function i(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", n, e.message])
        }
    }

    function r(e) {
        return "object" == typeof e && null !== e
    }

    function a(e, n, t) {
        if ((t = t || window) && n && e) {
            var i = !1,
                r = t[e];
            r ? n() : Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e, i || (i = !0, n())
                }
            })
        }
    }
    t.r(n);
    var o, u = t(0),
        c = u.name,
        s = u.version,
        d = function(e) {
            var n, t, r, a;
            if (i((function() {
                    var i = e.name;
                    r = e.version;
                    var o = i.replace("@contentsquare/integration-", "");
                    n = o + "-" + r;
                    var u = "-contentsquare";
                    a = new RegExp(u + "$").test(o), t = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), a || (u = "-cap", a = new RegExp(u + "$").test(o), t = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), a) return {
                snippetBuildName: n,
                parameterName: t,
                snippetVersion: r
            }
        }(u);
    d && (o = d.parameterName, c = d.snippetBuildName, s = d.snippetVersion), i((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("Zendesk Chat - v" + s);
        var e = function(e, n) {
                if (r(window.CS_INTEGRATIONS_CONF) && r(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e][n]
            }(o, "settings"),
            n = !1,
            t = "";
        e && (e.indexOf("sendArtificialPageviews") > -1 && (n = !0), e.indexOf("setReplayLinkToFirstPV") > -1 && (t = 0));
        var u = !1;

        function d(e, t, i, r) {
            e = "CH_ZD_" + e, _uxa.push(["trackDynamicVariable", {
                key: e,
                value: t
            }]), u && "etr" === i && _uxa.push(["trackEventTriggerRecording", "@ETS@" + e]), r && n && _uxa.push(["trackPageview", window.location.pathname + "?" + r])
        }

        function p(e) {
            ! function(e, n, t) {
                t = t || window;
                var i = e.split(".");
                if (1 == i.length) a(e, n, t);
                else {
                    var r = t,
                        o = 0;
                    const e = function() {
                        r = o > 0 ? r[i[o - 1]] : window, ++o >= i.length ? a(i[o - 1], n, r) : a(i[o - 1], e, r)
                    };
                    e()
                }
            }("zE", (function() {
                setTimeout((function() {
                    i((function() {
                        if ("classic" == zE.widget) {
                            if (u = _uxa.push(["isRecording"])) {
                                var e = function(e, n) {
                                    e || (e = "missingFromDynamicSnippet");
                                    var t = n;
                                    isNaN(t) && (n = 0);
                                    var i = _uxa.push(["getSessionData"]);
                                    if (i) {
                                        var r = i.projectId,
                                            a = i.userId,
                                            o = i.sessionNumber,
                                            u = i.pageNumber,
                                            c = u - n;
                                        return n >= u && (c = u), 0 === t && (c = 1), "https://app.contentsquare.com/quick-playback/index.html?pid=" + r + "&uu=" + a + "&sn=" + o + "&pvid=" + c + "&recordingType=cs&vd=" + e
                                    }
                                }("zd", t);
                                e && zE("webWidget", "chat:addTags", "ContentsquareReplayLink: " + e)
                            }
                            zE("webWidget:on", "open", (function() {
                                d("Chat Opened", "true")
                            })), zE("webWidget:on", "close", (function() {
                                d("Chat Closed", "true")
                            })), zE("webWidget:on", "chat:start", (function() {
                                d("Chat Started", "true", "etr", "cs_zendesk=chat_started")
                            })), zE("webWidget:on", "chat:end", (function() {
                                d("Chat Ended", "true", 0, "cs_zendesk=chat_ended")
                            })), zE("webWidget:on", "userEvent", (function(e) {
                                e.action && e.action.indexOf("Chat Rating") > -1 && d("Chat Rating", e.action)
                            }))
                        }
                    }), c)
                }), 3e3)
            }))
        }
        var f = !1;
        _uxa.push(["afterPageView", function(e) {
            i((function() {
                f || (f = !0, p())
            }), c)
        }])
    }), c)
}]); /* integration-ab-tasty 3.3.3 */
! function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-ab-tasty-contentsquare","version":"3.3.3","scripts":{"build:snippet":"webpack"}}')
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", t, e.message])
        }
    }

    function r(e, t, n) {
        if ((n = n || window) && t && e) {
            var a = !1,
                r = n[e];
            r ? t() : Object.defineProperty(n, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e, a || (a = !0, t())
                }
            })
        }
    }
    n.r(t);
    var i = n(0),
        o = i.name,
        u = i.version,
        c = function(e) {
            var t, n, r, i;
            if (a((function() {
                    var a = e.name;
                    r = e.version;
                    var o = a.replace("@contentsquare/integration-", "");
                    t = o + "-" + r;
                    var u = "-contentsquare";
                    i = new RegExp(u + "$").test(o), n = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), i || (u = "-cap", i = new RegExp(u + "$").test(o), n = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), i) return {
                snippetBuildName: t,
                parameterName: n,
                snippetVersion: r
            }
        }(i);
    c && (c.parameterName, o = c.snippetBuildName, u = c.snippetVersion), a((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("AB Tasty - v" + u);

        function e(e, t) {
            e = "AB_ABT_" + e, _uxa.push(["trackDynamicVariable", {
                key: e,
                value: t
            }])
        }

        function t(t) {
            var n = t.campaignId,
                a = (t.variationId, function(e, t, n) {
                    if (window.ABTasty && ABTasty.results && ABTasty.results[e]) {
                        var a = ABTasty.results[e],
                            r = a.name || null,
                            i = a.variationName || null,
                            o = null;
                        if ("mpt" === n && ABTasty.accountData && ABTasty.accountData.tests) {
                            var u = ABTasty.accountData.tests[e];
                            if (u) {
                                var c = u.parentID;
                                if (0 !== c) {
                                    var s = ABTasty.accountData.tests[c];
                                    if (s) {
                                        var p = s.name;
                                        p && (o = {
                                            parentName: p
                                        })
                                    }
                                }
                            }
                        }
                        return i || (i = "Variation 1"), {
                            campaignName: r,
                            variationName: i,
                            parentInfo: o
                        }
                    }
                    return ""
                }(n, 0, t.type));
            a.campaignName && e(a.campaignName, a.variationName), a.parentInfo && e(a.parentInfo.parentName, a.variationName)
        }

        function n(e) {
            ! function(e, t, n) {
                n = n || window;
                var a = e.split(".");
                if (1 == a.length) r(e, t, n);
                else {
                    var i = n,
                        o = 0;
                    const e = function() {
                        i = o > 0 ? i[a[o - 1]] : window, ++o >= a.length ? r(a[o - 1], t, i) : r(a[o - 1], e, i)
                    };
                    e()
                }
            }("ABTasty", (function() {
                setTimeout((function() {
                    a((function() {
                        if (ABTasty.eventState && ABTasty.eventState.executedCampaign && "complete" === ABTasty.eventState.executedCampaign.status)
                            for (var e = ABTasty.eventState.executedCampaign.detail, n = 0; n < e.length; n++) t(e[n])
                    }), o)
                }), 500)
            }))
        }
        window.addEventListener("abtasty_executedCampaign", (function(e) {
            a((function() {
                t(e.detail)
            }), o)
        })), _uxa.push(["afterPageView", function(e) {
            a((function() {
                n()
            }), o)
        }])
    }), o)
}]);
! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 5)
}([, , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.extractFrom = e.replaceIn = void 0;
    var r = i(4),
        n = /(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\))/g;

    function o(t, e) {
        return t.replace(n, (function() {
            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
            var n = t[3] || t[4],
                o = t[9] || t[10] || t[11],
                a = (0, r.unescapeCssString)((n || o).trim()),
                c = n ? "@import " : "",
                u = e(a) || a;
            return "".concat(c, "url(").concat(s(u), ")")
        }))
    }

    function s(t) {
        return -1 === t.indexOf('"') ? '"'.concat(t, '"') : -1 === t.indexOf("'") ? "'".concat(t, "'") : t
    }
    e.replaceIn = o, e.extractFrom = function(t) {
        var e = [];
        return o(t, (function(t) {
            return e.push(t), t
        })), e
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.unescapeCssString = void 0, e.unescapeCssString = function(t) {
        return t.replace(/(\\)*\\(?:([a-fA-F0-9]{1,6})|(.))[\n\t\x20]?/g, (function(t, e, i, r) {
            if ("\\" === e) return t.slice(1);
            if (r) return r;
            var n = parseInt(i, 16);
            return 55296 <= n && n <= 57343 || 0 === n || n > 1114111 ? "�" : String.fromCodePoint(n)
        }))
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = {};
    i.r(r), i.d(r, "get", (function() {
        return ft
    })), i.d(r, "getRequestParameters", (function() {
        return yt
    }));
    var n = {};
    i.r(n), i.d(n, "getRequestParameters", (function() {
        return qn
    }));
    var o = ["childNodes", "parentNode", "nextSibling", "firstChild"],
        s = ["shadowRoot"],
        a = ["matches", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"],
        c = ["target"],
        u = ["src"],
        l = {
            Date: "csDate",
            JSON: "csJSON",
            Array: "csArray",
            String: "csString",
            URL: "csURL",
            MutationObserver: "csMutationObserver",
            screen: "csScreen"
        };

    function h(t, e, i) {
        var r = function(t, e) {
            for (var i, r = t; r && !(i = Object.getOwnPropertyDescriptor(r, e));) r = Object.getPrototypeOf(r);
            return i
        }(t, e);
        if (!r) return function() {
            return this[e]
        };
        switch (i) {
            case "get":
                return r.get;
            case "set":
                return r.set;
            case "value":
                return r.value
        }
    }

    function p(t) {
        Object.keys(l).forEach((function(e) {
            window[l[e]] = t[e]
        })), ("Prototype" in window || /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) && (window.csMutationObserver = window.WebKitMutationObserver || window.MutationObserver), d("csNode", o, t.Node.prototype, "get"), d("csElement", s, t.Element.prototype, "get"), d("csElement", a, t.Element.prototype, "value", !1), d("csHTMLImageElement", u, t.HTMLImageElement.prototype, "set"), d("csEvent", c, t.Event.prototype, "get")
    }

    function d(t, e, i, r, n) {
        void 0 === n && (n = !0), e.forEach((function(e) {
            (n || e in i) && (window["".concat(t + e)] = h(i, e, r))
        }))
    }

    function f(t, e) {
        window.CSProtectnativeFunctionsLogs = window.CSProtectnativeFunctionsLogs || {}, window.CSProtectnativeFunctionsLogs[t] = e
    }
    if (! function() {
            try {
                var t = function() {
                    var t = document.createElement("iframe");
                    t.id = "cs-native-frame", t.setAttribute("hidden", ""), t.setAttribute("title", "Intentionally blank");
                    var e = document.createElement("cs-native-frame-holder");
                    if (e.setAttribute("hidden", ""), document.body.appendChild(e), Element.prototype.attachShadow) {
                        var i = e.attachShadow({
                            mode: "closed"
                        });
                        return i.innerHTML = t.outerHTML, i.firstElementChild.contentWindow
                    }
                    return e.innerHTML = t.outerHTML, e.firstElementChild.contentWindow
                }();
                return !!t && (window.CSPureWindow = t, p(window.CSPureWindow), !0)
            } catch (t) {
                return f("Warning", "failed to copy references from pure iframe: ".concat(t.message)), !1
            }
        }()) try {
        p(window)
    } catch (t) {
        f("Critical", "failed to copy references from window: ".concat(t.message))
    }

    function y(t) {
        return csString.prototype.replace.call(t, /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
    }

    function v(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }

    function g(t) {
        return t.nodeType === Node.TEXT_NODE
    }

    function m(t) {
        return v(t) && "a" === t.localName
    }

    function S(t) {
        return function(t) {
            return v(t) && "link" === t.localName
        }(t) && "stylesheet" === t.rel
    }

    function E(t) {
        return v(t) && "img" === t.localName
    }

    function b(t) {
        return v(t) && "style" === t.localName
    }

    function C(t) {
        return v(t) && "script" === t.localName
    }

    function w(t) {
        switch (t.nodeType) {
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                return !0;
            default:
                return !1
        }
    }

    function T(t) {
        return t.nodeType === Node.DOCUMENT_NODE
    }

    function R(t) {
        return w(t) && "host" in t && "mode" in t
    }
    var A = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];

    function k(t) {
        for (var e = t, i = [e]; null !== csNodeparentNode.apply(e);) e = csNodeparentNode.apply(e), csArray.prototype.push.call(i, e);
        return I(e) && csArray.prototype.push.call(i, "detached"), {
            ancestors: i,
            selectionRoot: e
        }
    }

    function I(t) {
        return x.isValidElement(t)
    }
    var _ = window.csElementmatches || window.csElementmatchesSelector || window.csElementmozMatchesSelector || window.csElementmsMatchesSelector || window.csElementoMatchesSelector || window.csElementwebkitMatchesSelector;

    function P(t, e) {
        return !!e && csArray.prototype.some.call(e, (function(e) {
            return _.call(t, e)
        }))
    }
    var N = [/\d{4}/, /^ember\d+$/];

    function O(t, e, i, r) {
        var n = r.dynamicIdRegex || null,
            o = function(t) {
                return y(csString.prototype.toLowerCase.call(t.localName))
            }(t);
        if (function(t, e) {
                var i = M(t);
                return i && csString.prototype.match.call(i, /^[\w-]+$/) && L("data-cs-override-id", i, e)
            }(t, i)) {
            var s = M(t);
            return {
                hasUniqueIdentifier: !0,
                elementSelector: "".concat(o, "[").concat("data-cs-override-id", '="').concat(s, '"]')
            }
        }
        var a = function(t, e, i) {
            if (!i.uniqueAttributes) return {
                success: !1
            };
            for (var r = 0, n = i.uniqueAttributes; r < n.length; r++) {
                var o = n[r],
                    s = t.getAttribute(o);
                if (null !== s)
                    if (L(o, s, e)) return {
                        attributeName: o,
                        attributeValue: s,
                        success: !0
                    }
            }
            return {
                success: !1
            }
        }(t, i, r);
        if (a.success) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#UA[").concat(a.attributeName, '="').concat(a.attributeValue, '"]')
        };
        var c = function(t, e, i) {
            if (!i.uniqueCssSelectors) return;
            for (var r = 0, n = i.uniqueCssSelectors; r < n.length; r++) {
                var o = n[r];
                if (_.call(t, o) && D(o, e)) return o
            }
            return
        }(t, i, r);
        if (c) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#UCS[").concat(c, "]")
        };
        var u = function(t) {
            var e = t.getAttribute("id");
            return e ? y(e) : e
        }(t);
        if (function(t, e, i, r) {
                return e && ! function(t) {
                    return null !== M(t)
                }(t) && ! function(t, e, i) {
                    return t.hasAttribute("data-cs-dynamic-id") || function(t, e) {
                        var i = !1;
                        t && e && (i = e.test(t));
                        return t && (csArray.prototype.some.call(N, (function(e) {
                            return e.test(t)
                        })) || i)
                    }(e, i)
                }(t, e, r) && function(t, e) {
                    return t && L("id", t, e)
                }(e, i)
            }(t, u, i, n)) return {
            hasUniqueIdentifier: !0,
            elementSelector: "".concat(o, "#").concat(u)
        };
        var l = function(t, e) {
            if (!e.reliableSelectors) return;
            for (var i = 0, r = e.reliableSelectors; i < r.length; i++) {
                var n = r[i];
                if (_.call(t, n)) return n
            }
            return
        }(t, r);
        if (l) {
            var h = function(t, e, i) {
                if ("detached" === t || 9 === t.nodeType) return 0;
                for (var r = 0, n = e.previousElementSibling; n;) _.call(n, i) && (r += 1), n = n.previousElementSibling;
                return r
            }(e, t, l);
            return {
                hasUniqueIdentifier: !1,
                elementSelector: "".concat(o, "[").concat(l, "](").concat(h, ")")
            }
        }
        var p = function(t, e, i) {
            if ("detached" === t || 9 === t.nodeType) return 0;
            for (var r = csString.prototype.toLowerCase.call(e.localName), n = 0, o = e.previousElementSibling; o;) o.localName !== r || P(o, i.reliableSelectors) || (n += 1), o = o.previousElementSibling;
            return n
        }(e, t, r);
        return {
            hasUniqueIdentifier: !1,
            elementSelector: "".concat(o, ":eq(").concat(p, ")")
        }
    }

    function M(t) {
        return t.getAttribute("data-cs-override-id")
    }

    function L(t, e, i) {
        try {
            return 1 === i.querySelectorAll("[".concat(t, '="').concat(e, '"]')).length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }

    function D(t, e) {
        try {
            return 1 === e.querySelectorAll(t).length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }
    var x;

    function V(t, e, i) {
        var r = csArray.prototype.shift.call(t);
        if (0 === t.length) return z(r, i);
        var n = O(r, t[0], e, i),
            o = n.elementSelector,
            s = n.hasUniqueIdentifier;
        if (!i.fullPath && s) {
            var a = t[t.length - 1];
            return "".concat(z(a, i)).concat(o)
        }
        var c = V(t, e, i);
        return "".concat(c ? "".concat(c, ">") : "").concat(o)
    }

    function z(t, e) {
        if ("detached" === t) return "|detached|";
        if (t.host) {
            var i = k(t.host),
                r = i.ancestors,
                n = i.selectionRoot;
            return "".concat(V(r, n, e), "|shadow-root|")
        }
        return 11 === t.nodeType ? "|fragment|" : ""
    }! function(t) {
        function e(t) {
            return !!t && "localName" in t && "getAttribute" in t && "hasAttribute" in t && "parentNode" in t
        }

        function i(t) {
            return t && "jquery" in t && 1 === t.length ? t[0] : t
        }
        t.INVALID_ELEMENT = "INVALID_ELEMENT", t.isValidElement = e, t.getElementPath = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return "";
            if (!e(o)) return t.INVALID_ELEMENT;
            var s = k(o);
            return V(s.ancestors, s.selectionRoot, n)
        }, t.getElementPathAndFirstAnchorParent = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return {
                path: "",
                firstAnchorParent: null
            };
            if (!e(o)) return {
                path: t.INVALID_ELEMENT,
                firstAnchorParent: null
            };
            var s = function(t) {
                    for (var e = t, i = [e], r = null; null !== csNodeparentNode.apply(e);) null === r && m(e) && (r = e), csArray.prototype.push.call(i, csNodeparentNode.apply(e)), e = csNodeparentNode.apply(e);
                    return I(e) && csArray.prototype.push.call(i, "detached"), {
                        firstAnchorParent: r,
                        ancestors: i,
                        selectionRoot: e
                    }
                }(o),
                a = s.firstAnchorParent;
            return {
                path: V(s.ancestors, s.selectionRoot, n),
                firstAnchorParent: a
            }
        }
    }(x || (x = {})), window.CSPathComputation = window.CSPathComputation || x;
    var q = function(t, e) {
        return (q = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            })(t, e)
    };

    function U(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
            this.constructor = t
        }
        q(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }
    var B = function() {
        return (B = Object.assign || function(t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    };

    function H(t, e, i, r) {
        var n, o = arguments.length,
            s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
        return o > 3 && s && Object.defineProperty(e, i, s), s
    }

    function F(t, e, i, r) {
        return new(i || (i = Promise))((function(n, o) {
            function s(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((r = r.apply(t, e || [])).next())
        }))
    }

    function G(t, e) {
        var i, r, n, o, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    Object.create;

    function j(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            i = e && t[e],
            r = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function W(t, e, i) {
        if (i || 2 === arguments.length)
            for (var r, n = 0, o = e.length; n < o; n++) !r && n in e || (r || (r = Array.prototype.slice.call(e, 0, n)), r[n] = e[n]);
        return t.concat(r || Array.prototype.slice.call(e))
    }

    function K(t) {
        return this instanceof K ? (this.v = t, this) : new K(t)
    }

    function Y(t, e, i) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, n = i.apply(t, e || []),
            o = [];
        return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
            return this
        }, r;

        function s(t) {
            n[t] && (r[t] = function(e) {
                return new Promise((function(i, r) {
                    o.push([t, e, i, r]) > 1 || a(t, e)
                }))
            })
        }

        function a(t, e) {
            try {
                ! function(t) {
                    t.value instanceof K ? Promise.resolve(t.value.v).then(c, u) : l(o[0][2], t)
                }(n[t](e))
            } catch (t) {
                l(o[0][3], t)
            }
        }

        function c(t) {
            a("next", t)
        }

        function u(t) {
            a("throw", t)
        }

        function l(t, e) {
            t(e), o.shift(), o.length && a(o[0][0], o[0][1])
        }
    }

    function X(t) {
        var e, i;
        return e = {}, r("next"), r("throw", (function(t) {
            throw t
        })), r("return"), e[Symbol.iterator] = function() {
            return this
        }, e;

        function r(r, n) {
            e[r] = t[r] ? function(e) {
                return (i = !i) ? {
                    value: K(t[r](e)),
                    done: "return" === r
                } : n ? n(e) : e
            } : n
        }
    }

    function Q(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, i = t[Symbol.asyncIterator];
        return i ? i.call(t) : (t = j(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function r(i) {
            e[i] = t[i] && function(e) {
                return new Promise((function(r, n) {
                    (function(t, e, i, r) {
                        Promise.resolve(r).then((function(e) {
                            t({
                                value: e,
                                done: i
                            })
                        }), e)
                    })(r, n, (e = t[i](e)).done, e.value)
                }))
            }
        }
    }
    Object.create;
    var J = Number.MAX_SAFE_INTEGER || 9007199254740991;

    function Z() {}

    function $(t, e) {
        return 0 === csString.prototype.lastIndexOf.call(t, e, 0)
    }

    function tt(t, e) {
        return -1 !== csString.prototype.indexOf.call(t, e, t.length - e.length)
    }
    var et = {
            percentage: function() {
                return Math.floor(1e4 * Math.random()) / 100
            },
            boolean: function(t) {
                return this.percentage() < t
            },
            integer: function(t) {
                return void 0 === t && (t = J), Math.floor(Math.random() * t)
            }
        },
        it = "function" == typeof Symbol ? Symbol("json") : null;
    var rt, nt, ot = it ? function(t) {
            if (t[it]) return t[it];
            if (csArray.isArray(t)) {
                if (0 === t.length) return "[]";
                for (var e = "[" + ot(t[0]), i = 1; i < t.length; i++) e += "," + ot(t[i]);
                return e + "]"
            }
            return t[it] = csJSON.stringify(t)
        } : csJSON.stringify,
        st = function() {
            function t(t) {
                var e;
                this.trackerDomain = t.trackerDomain, this.loggerDomain = t.ed, this.minLogLevel = t.logLevel, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.iframesTracking = !!t.iframesTracking, this.crossDomainTracking = !!t.crossDomainTracking, this.crossDomainSingleIframeTracking = !!t.crossDomainSingleIframeTracking, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || 34164e6, this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.recordingDomain = t.recordingDomain, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.mouseMoveHeatmapEnabled = t.mouseMoveHeatmapEnabled, this.jsErrorsEnabled = t.jsErrorsEnabled, this.apiErrors = B({
                    enabled: null !== (e = t.apiErrorsEnabled) && void 0 !== e ? e : 0
                }, t.apiErrors), this.customErrorsEnabled = t.customErrorsEnabled, this.jsCustomErrorsEnabled = t.jsCustomErrorsEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = this.buildRegexFromConfiguration(t.triggerSessionReplayRegex), this.dynamicIdRegex = t.dynamicIdRegex ? new RegExp(t.dynamicIdRegex) : null, this.whitelistedAttributes = t.whitelistedAttributes || [], this.replayRecordingUnmaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingMaskedUrlRegex), this.tagDeploymentMode = t.tagDeploymentMode, this.dualCollectionTagDomain = t.dualCollectionTagDomain || null, this.ptcDomain = t.ptcDomain || null, this.ptcGuid = t.ptcGuid || null, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.ptcSha512 = t.ptcSha512 || null, this.ptcSnapshotPath = t.ptcSnapshotPath || null, this.emitDebugEvents = !1, this.useMalkaPipeline = t.useMalkaPipeline, this.malkaQuotaServiceDomain = t.malkaQuotaServiceDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.textVisibilityEnabled = t.textVisibilityEnabled, this.experimental = t.experimental || {}, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.cookielessTrackingEnabled = t.cookielessTrackingEnabled, this.customHashIdEnabled = !!t.customHashIdEnabled, this.encryptionEnabled = !!t.recordingEncryptionEnabled, this.encryptionPublicKey = t.recordingEncryptionPublicKey || null, this.pathComputationRules = t.pathComputationRules || {}, this.asyncSerializerEnabled = !!t.asyncSerializerEnabled, this.encryptionPublicKeyId = t.recordingEncryptionPublicKeyId, this.pendingInactivityTimeout = t.pendingInactivityTimeout || 5e3
            }
            return t.prototype.getTrackerUri = function() {
                return "".concat(this.protocol(), "://").concat(this.trackerDomain)
            }, t.prototype.getRecordingUri = function() {
                return "".concat(this.protocol(), "://").concat(this.useMalkaPipeline && this.malkaRecordingDomain ? this.malkaRecordingDomain : this.recordingDomain)
            }, t.prototype.getQuotaServiceUri = function() {
                return "".concat(this.protocol(), "://").concat(this.malkaQuotaServiceDomain)
            }, t.prototype.getLoggerUri = function() {
                return "".concat(this.protocol(), "://").concat(this.loggerDomain)
            }, t.prototype.protocol = function() {
                return this.useHttps ? "https" : "http"
            }, t.prototype.isProjectActive = function() {
                return 1 === this.status
            }, t.prototype.processOptionOverrides = function(t) {
                var e = this;
                t && t.forEach && t.forEach((function(t) {
                    var i = t[0],
                        r = t.slice(1);
                    if ("setOption" === i) {
                        var n = r[0],
                            o = r[1];
                        e.setOverridableField(n, o)
                    }
                }))
            }, t.prototype.setOverridableField = function(t, e) {
                "trackerDomain" === t && (this.trackerDomain = e), "recordingDomain" === t && (this.recordingDomain = e), "loggerDomain" === t && (this.loggerDomain = e), "malkaRecordingDomain" === t && (this.malkaRecordingDomain = e), "malkaQuotaServiceDomain" === t && (this.malkaQuotaServiceDomain = e), "minLogLevel" === t && (this.minLogLevel = e), "useHttps" === t && (this.useHttps = !!e)
            }, t.prototype.buildRegexFromConfiguration = function(t) {
                return t ? this.createRegex(t) : null
            }, t.prototype.getRequestParameters = function() {
                return {
                    pid: "".concat(this.projectId)
                }
            }, t.prototype.updateDynamicFields = function(t, e) {
                "emitDebugEvents" === t && (this.emitDebugEvents = e), "minLogLevel" === t && (this.minLogLevel = e)
            }, t.prototype.createRegex = function(t) {
                try {
                    var e = /^\/(.*)\/([gim]*)$/.exec(t);
                    if (e) {
                        var i = e[1],
                            r = e[2];
                        return new RegExp("^".concat(i, "$"), r)
                    }
                    return new RegExp("^".concat(t, "$"))
                } catch (t) {
                    return null
                }
            }, t
        }(),
        at = function() {
            function t(t, e) {
                this.window = t, this.conf = e
            }
            return t.prototype.init = function() {
                this.inIframeContext = this.window.self !== this.window.top, this.conf.iframesTracking && this.inIframeContext ? this.topWindowTracker = !1 : this.topWindowTracker = !0
            }, t.prototype.isInIframeContext = function() {
                return this.inIframeContext
            }, t.prototype.isTopWindowTracker = function() {
                return this.topWindowTracker
            }, t
        }();
    ! function(t) {
        t.debug = "debug", t.warn = "warn", t.error = "error", t.critical = "critical"
    }(rt || (rt = {})),
    function(t) {
        t.toQuery = function(t) {
            return csArray.prototype.join.call(csArray.prototype.map.call(Object.keys(t), (function(e) {
                return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
            })), "&")
        }
    }(nt || (nt = {}));
    var ct = function() {
            function t(t, e) {
                this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
            }
            return t.prototype.setRequestParametersProviders = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }, t.prototype.before = function(t) {
                csArray.prototype.push.call(this.beforeRequestCallbacks, t)
            }, t.prototype.after = function(t) {
                csArray.prototype.push.call(this.afterRequestCallbacks, t)
            }, t.prototype.retrieveParameters = function() {
                return this.requestParametersProviders ? csArray.prototype.reduce.call(csArray.prototype.map.call(this.requestParametersProviders, (function(t) {
                    return t.getRequestParameters()
                })), (function(t, e) {
                    return B(B({}, t), e)
                })) : {}
            }, t
        }(),
        ut = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return U(e, t), e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = this.retrieveParameters();
                this.addCacheBusting(t);
                var e = nt.toQuery(t);
                this.generatePixel(e), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.generatePixel = function(t) {
                var e = new window.Image(1, 1);
                e.onload = Z, e.onerror = Z, csHTMLImageElementsrc.call(e, "".concat(this.domainUri).concat(this.path ? "/".concat(this.path) : "", "?").concat(t))
            }, e.prototype.addCacheBusting = function(t) {
                t.r = csString.prototype.slice.call("".concat(Math.random()), 2, 8)
            }, e
        }(ct),
        lt = function() {
            function t(t, e) {
                this.projectConfiguration = t, this.basicLogRequestParameter = e
            }
            return t.prototype.init = function() {
                this.request = new ut(this.projectConfiguration.getLoggerUri()), this.request.setRequestParametersProviders(this, this.basicLogRequestParameter)
            }, t.prototype.send = function(t) {
                this.log = t, this.request.send()
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: this.log.app,
                    l: this.log.level,
                    m: this.log.message,
                    s: this.log.stacktrace
                }
            }, t
        }(),
        ht = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        pt = /[a-zA-Z0-9+_-](?:@|%40)/,
        dt = function() {
            function t() {}
            return t.prototype.anonymize = function(t) {
                return "string" == typeof t && pt.test(t) ? csString.prototype.replace.call(t, ht, "CS_ANONYMIZED_EMAIL") : t
            }, t.prototype.anonymizeFields = function(t, e) {
                var i = this;
                return csArray.prototype.forEach.call(e, (function(e) {
                    t[e] = i.anonymize(t[e])
                })), t
            }, t
        }();

    function ft() {
        return "11.65.1"
    }

    function yt() {
        return {
            v: "11.65.1"
        }
    }
    var vt = function() {
        return void 0 !== window.performance && window.performance.now ? window.performance.timing.navigationStart + Math.round(window.performance.now()) : csDate.now()
    };

    function gt() {
        return Math.floor(vt() / 1e3)
    }

    function mt() {
        return "function" == typeof window.Promise
    }
    var St, Et, bt = function() {
        function t(t, e) {
            this.configuration = t, this.pii = e
        }
        return t.prototype.getRequestParameters = function() {
            return B(B({
                d: "".concat(vt()),
                p: this.pii.anonymize(window.location.href),
                u: navigator.userAgent
            }, this.configuration.getRequestParameters()), {
                v: "11.65.1"
            })
        }, t
    }();
    ! function(t) {
        t.IMPLEMENTATION = "implementation", t.DYNAMIC = "dynamic"
    }(St || (St = {})),
    function(t) {
        t[t.debug = 0] = "debug", t[t.warn = 1] = "warn", t[t.error = 2] = "error", t[t.critical = 3] = "critical"
    }(Et || (Et = {}));
    var Ct = function() {
            function t(t, e, i) {
                var r;
                this.parentLogContext = e, this.pii = new dt, this.minLogLevel = Et[rt.warn], this.isLoggingActive = !1, this.minLogLevel = Et[t.minLogLevel || rt.warn];
                var n = t.validationRate >= 0 ? t.validationRate : 10;
                this.isLoggingActive = et.boolean(n), this.request = i || new lt(t, new bt(t, this.pii)), this.logTrack = ((r = {})[rt.debug] = [], r[rt.warn] = [], r[rt.error] = [], r[rt.critical] = [], r), this.snippetLogCounter = {
                    implementation: {},
                    dynamic: {}
                }, this.request.init()
            }
            return t.prototype.send = function(t, e, i) {
                if (void 0 === e && (e = ""), void 0 === i && (i = rt.warn), this.isLoggingAllowed(i, e)) {
                    csArray.prototype.push.call(this.logTrack[i], e || "");
                    var r = {
                        message: this.getMessage(t, e),
                        stacktrace: this.getStacktrace(t),
                        app: "uxa",
                        level: i
                    };
                    this.request.send(r)
                }
            }, t.prototype.getMessage = function(t, e) {
                var i = t instanceof Error ? this.pii.anonymize(t.message || t.toString()) : t;
                return e && (i += " ErrorCode: ".concat(e)), i
            }, t.prototype.getStacktrace = function(t) {
                return t instanceof Error ? "".concat(t.stack || "No stacktrace", " ").concat(this.getContext()) : this.getContext()
            }, t.prototype.getContext = function() {
                var t = this.parentLogContext.getVisitorService(),
                    e = null == t ? void 0 : t.getVisitor();
                if (!e) return "No context";
                var i = this.parentLogContext.getSessionService(),
                    r = i && i.getSession(),
                    n = {
                        userId: e.id,
                        sessionNumber: e.visitsCount,
                        pageNumber: r && r.pageNumber
                    };
                return csJSON.stringify(n)
            }, t.prototype.isLoggingAllowed = function(t, e) {
                if (!this.isLoggingActive || Et[t] < this.minLogLevel) return !1;
                if (0 === (null == e ? void 0 : csString.prototype.indexOf.call(e, "implementation-snippet-", 0))) return this.isLoggingAllowedForSnippets(e, St.IMPLEMENTATION);
                if (0 === (null == e ? void 0 : csString.prototype.indexOf.call(e, "snippet-", 0))) return this.isLoggingAllowedForSnippets(e, St.DYNAMIC);
                var i = this.logTrack[t];
                return !(i.length >= 5) && (!e || !csArray.prototype.some.call(i, (function(t) {
                    return t === e
                })))
            }, t.prototype.isLoggingAllowedForSnippets = function(t, e) {
                return t in this.snippetLogCounter[e] ? !(this.snippetLogCounter[e][t] >= 5) && (this.snippetLogCounter[e][t] += 1, !0) : (this.snippetLogCounter[e][t] = 1, !0)
            }, t
        }(),
        wt = document.createElement("a");

    function Tt(t) {
        return wt.href = t, wt.href
    }

    function Rt(t) {
        if (!$(t, "http://") && !$(t, "https://")) return "";
        var e = document.createElement("a");
        return e.href = t, decodeURIComponent(e.hostname)
    }

    function At(t, e) {
        return csArray.prototype.some.call(e, (function(e) {
            return tt(t, ".".concat(e)) || t === e || "" === e
        }))
    }
    var kt, It, _t, Pt, Nt;
    ! function(t) {
        t.AfterPageView = "afterPageView", t.GetSessionKey = "getSessionKey"
    }(kt || (kt = {})),
    function(t) {
        t.Parent = "parent", t.Child = "child"
    }(It || (It = {})),
    function(t) {
        t.Discovery = "discovery", t.Stop = "stop", t.ChildLogMessage = "childLogMessage", t.AnalysisEvent = "analysisEvent", t.JavascriptError = "javascriptError", t.ApiError = "apiError", t.EmerchandisingMessage = "emerchandisingMessage", t.Commands = "commands", t.IntegrationCallback = "integrationCallback"
    }(_t || (_t = {})), (Nt = Pt || (Pt = {})).buildBaseMessage = function(t, e, i, r) {
        var n = {
            type: t,
            from: e,
            pid: i,
            signature: "CS_IFRAME_MESSAGE"
        };
        return void 0 !== r && r >= 0 && (n.id = r), n
    }, Nt.isMessageValid = function(t, e, i, r) {
        var n = Rt(t.origin);
        return !!t.data && !!t.data.type && "CS_IFRAME_MESSAGE" === t.data.signature && t.data.from === e && t.data.pid === i && At(n, r)
    }, Nt.sendPostMessage = function(t, e, i, r) {
        r ? t.postMessage(i, e, r) : t.postMessage(i, e)
    }, Nt.sendChannelMessage = function(t, e) {
        t.postMessage(e)
    }, Nt.closeChannelPort = function(t) {
        t.close()
    };
    var Ot = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.send = function(t, e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = rt.warn);
                var r = {
                        message: t,
                        errorCode: e,
                        level: i
                    },
                    n = Pt.buildBaseMessage(_t.ChildLogMessage, It.Child, this.configuration.projectId);
                n.content = r, Pt.sendPostMessage(window.parent, "*", n)
            }, t
        }(),
        Mt = function() {
            function t() {}
            return t.prototype.setContext = function(t, e) {
                this.visitorService = t, this.sessionService = e
            }, t.prototype.getVisitorService = function() {
                return this.visitorService
            }, t.prototype.getSessionService = function() {
                return this.sessionService
            }, t
        }();

    function Lt(t) {
        return zt(t) && ("number" == typeof t || t instanceof Number) && !isNaN(t)
    }

    function Dt(t) {
        return t === parseInt(t, 10)
    }

    function xt(t) {
        return zt(t) && ("string" == typeof t || t instanceof csString)
    }

    function Vt(t) {
        return "object" == typeof t
    }

    function zt(t) {
        return void 0 !== t
    }

    function qt(t) {
        return zt(t) && null !== t
    }

    function Ut(t) {
        return "function" == typeof t
    }

    function Bt(t) {
        return t instanceof Element
    }
    var Ht, Ft, Gt, jt, Wt = function() {
            function t() {}
            return t.setStrategy = function(e) {
                t.strategy = e
            }, t.getStrategy = function() {
                return t.strategy
            }, t.debug = function(e, i) {
                void 0 === i && (i = ""), t.strategy.send(e, i, rt.debug)
            }, t.warn = function(e, i) {
                void 0 === i && (i = ""), t.strategy.send(e, i, rt.warn)
            }, t.error = function(e, i) {
                void 0 === i && (i = ""), t.strategy.send(e, i, rt.error)
            }, t.critical = function(e, i) {
                void 0 === i && (i = ""), t.strategy.send(e, i, rt.critical)
            }, t.tryToExecute = function(t, e) {
                var i = this;
                return function() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    try {
                        var o = e.apply(void 0, r);
                        return zt(window.Promise) && o instanceof window.Promise ? o.then((function(t) {
                            return t
                        }), (function(e) {
                            return i.error(e, t)
                        })) : o
                    } catch (e) {
                        try {
                            i.error(e, t)
                        } catch (t) {}
                    }
                }
            }, t
        }(),
        Kt = function(t) {
            return function(e, i, r) {
                var n = i.toString(),
                    o = t || "".concat(e.constructor && e.constructor.name, ".").concat(n),
                    s = r.value;
                r.value = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return Wt.tryToExecute(o, s.bind(this)).apply(void 0, t)
                }
            }
        };
    ! function(t) {
        function e(t) {
            var e = new RegExp("(^|;)[ ]*".concat(t, "=([^;]*)")).exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }

        function i(e, i, n, o, s, a) {
            var c = encodeURIComponent("".concat(i)),
                u = n === t.CURRENT_DOMAIN ? void 0 : n,
                l = r(o),
                h = l ? ";expires=".concat(l.toUTCString()) : "",
                p = qt(u) ? ";domain=".concat(u) : "",
                d = "".concat(e, "=").concat(c).concat(h).concat(";path=/").concat(p);
            return zt(s) && s !== Gt.NotSet && (d = "".concat(d, ";SameSite=").concat(s)), zt(a) && a === jt.Yes && (d = "".concat(d, ";Secure")), document.cookie = d, !0
        }

        function r(t) {
            return Lt(t) ? new csDate(vt() + t) : t
        }

        function n(t, r) {
            e(t) && i(t, "", r, new csDate(0)), e(t) && i(t, "", r, new csDate(0), Gt.None, jt.Yes)
        }
        t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.get = e, t.set = i, t.toExpireDate = r, t.remove = n, t.isCookiePresent = function() {
            return document.cookie.length > 0
        }, t.getRootDomain = function(t, r) {
            var o = e("_cs_root-domain");
            if (null !== o && "1" !== o) return o;
            for (var s = csString.prototype.split.call(window.location.hostname, "."), a = csArray.prototype.pop.call(s); s.length && (null === o || "1" === o);) i("_cs_root-domain", a = csArray.prototype.join.call([csArray.prototype.pop.call(s), a], "."), a, void 0, t, r), o = e("_cs_root-domain");
            return n("_cs_root-domain", a), a
        }
    }(Ht || (Ht = {})),
    function(t) {
        t.browserIsSafariV12 = function() {
            return window.navigator.vendor && csString.prototype.indexOf.call(window.navigator.vendor, "Apple") > -1 && window.navigator.appVersion && csString.prototype.indexOf.call(window.navigator.appVersion, "Version/12.") > -1
        }
    }(Ft || (Ft = {})),
    function(t) {
        t.None = "None", t.Lax = "Lax", t.NotSet = "X"
    }(Gt || (Gt = {})),
    function(t) {
        t[t.Yes = 1] = "Yes", t[t.No = 0] = "No"
    }(jt || (jt = {}));
    var Yt = function() {
            function t(t, e, i) {
                this.configuration = t, this.urlService = e, this.cookieChecker = i, this.supportsSameSite = !1, this.sameSiteFlag = Gt.NotSet, this.secureFlag = jt.No
            }
            return t.prototype.getSameSiteFlag = function() {
                return this.sameSiteFlag
            }, t.prototype.getSecureFlag = function() {
                return this.secureFlag
            }, t.prototype.getDomain = function() {
                return this.domain
            }, t.prototype.getRootDomain = function() {
                return this.rootDomain
            }, t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.computeSameSiteFlag(),
                        e = this.computeSecureFlag();
                    this.supportsSameSite = this.checkSameSiteFromContext(t, e), this.supportsSameSite ? (this.sameSiteFlag = t, this.secureFlag = e) : this.configuration.secureCookiesEnabled && "https:" === this.urlService.getUrlProtocol() && (this.secureFlag = jt.Yes), this.rootDomain = this.computeRootDomain(), this.domain = this.computeDomain(this.rootDomain)
                }
            }, t.prototype.checkSameSiteFromContext = function(e, i) {
                return !Ft.browserIsSafariV12() && (Ht.set(t.COOKIE_TEST_FOR_SAME_SITE, "Test same site", t.CURRENT_DOMAIN, void 0, e, i), !!Ht.get(t.COOKIE_TEST_FOR_SAME_SITE) && (Ht.remove(t.COOKIE_TEST_FOR_SAME_SITE, t.CURRENT_DOMAIN), !0))
            }, t.prototype.computeSameSiteFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? Gt.Lax : this.cookieChecker.isSameSiteNoneSecureNeeded() || this.configuration.crossDomainTracking ? Gt.None : Gt.Lax
            }, t.prototype.computeSecureFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? jt.No : this.configuration.secureCookiesEnabled || this.configuration.crossDomainTracking || this.cookieChecker.isSameSiteNoneSecureNeeded() ? jt.Yes : jt.No
            }, t.prototype.isSameSiteSupported = function() {
                return this.supportsSameSite
            }, t.prototype.set = function(t, e, i) {
                var r = Ht.toExpireDate(i);
                Ht.set(t, e, this.domain, r, this.getSameSiteFlag(), this.getSecureFlag())
            }, t.prototype.get = function(t) {
                var e = new RegExp("(^|;)[ ]*".concat(t, "=([^;]*)")).exec(document.cookie);
                return e ? decodeURIComponent(e[2]) : null
            }, t.prototype.delete = function(t, e) {
                var i = e || this.domain;
                Ht.remove(t, i)
            }, t.prototype.computeRootDomain = function() {
                var t = this.cookieChecker.isSameSiteNoneSecureNeeded() && this.isSameSiteSupported(),
                    e = t ? Gt.None : void 0,
                    i = t ? jt.Yes : void 0;
                return Ht.getRootDomain(e, i)
            }, t.prototype.computeDomain = function(t) {
                return this.configuration.allowSubdomains ? t : Ht.CURRENT_DOMAIN
            }, t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site", t
        }(),
        Xt = function() {
            function t(t, e) {
                this.childContext = t, this.configuration = e, this.cookieEnabled = !1, this.useSameSiteNoneSecureCookie = !1
            }
            return t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled && this.childContext.isTopWindowTracker() && "cookie" in document) {
                    if (!this.childContext.isInIframeContext() && Ht.isCookiePresent()) return this.cookieEnabled = !0, void(this.useSameSiteNoneSecureCookie = !1);
                    if (Ht.set("_cs_t", "1", Ht.CURRENT_DOMAIN), null !== Ht.get("_cs_t")) return this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !1, void Ht.remove("_cs_t", Ht.CURRENT_DOMAIN);
                    Ht.set("_cs_t", "1", Ht.CURRENT_DOMAIN, void 0, Gt.None, jt.Yes), null !== Ht.get("_cs_t") && (this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !0, Ht.remove("_cs_t", Ht.CURRENT_DOMAIN))
                }
            }, t.prototype.areCookiesEnabled = function() {
                return this.cookieEnabled
            }, t.prototype.isSameSiteNoneSecureNeeded = function() {
                return this.useSameSiteNoneSecureCookie
            }, t
        }();

    function Qt() {
        var t = "CSLocalStorageTest";
        try {
            return localStorage.setItem(t, t), localStorage.getItem(t) !== t ? !1 : (localStorage.removeItem(t), !0)
        } catch (t) {
            return !1
        }
    }
    var Jt = function() {
        function t() {}
        return t.check = function() {
            return void 0 === Object.assign || this.tryObjectAssign()
        }, t.tryObjectAssign = function() {
            try {
                var t = {},
                    e = Object.assign(t, {
                        a: 1
                    }, {
                        b: 2,
                        c: {
                            d: 4
                        }
                    }),
                    i = {
                        a: 1,
                        b: 2,
                        c: {
                            d: 4
                        }
                    };
                return csJSON.stringify(e) === csJSON.stringify(i) && csJSON.stringify(t) === csJSON.stringify(i)
            } catch (t) {
                return !1
            }
        }, t
    }();
    var Zt, $t, te, ee, ie = function() {
            function t(t, e) {
                this.configuration = t, this.cookieChecker = e
            }
            return t.prototype.canTrack = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject() && this.canUseStorage()
            }, t.prototype.canTrackInChild = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject()
            }, t.prototype.canUseStorage = function() {
                return this.configuration.cookielessTrackingEnabled ? function() {
                    var t = "CSSessionStorageTest";
                    try {
                        return sessionStorage.setItem(t, t), sessionStorage.getItem(t) !== t ? !1 : (sessionStorage.removeItem(t), !0)
                    } catch (t) {
                        return !1
                    }
                }() && Qt() : this.cookieChecker.areCookiesEnabled() && Qt()
            }, t.prototype.canTrackProject = function() {
                return this.configuration.isProjectActive() && At(window.location.hostname, this.configuration.hostnames)
            }, t.prototype.isBrowsingContextSupported = function() {
                return !this.isDocPrerendered() && this.isBrowserSupported() && Jt.check()
            }, t.prototype.isDocPrerendered = function() {
                return "visibilityState" in document && "prerender" === document.visibilityState
            }, t.prototype.isBrowserSupported = function() {
                return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && "JSON" in window && "parse" in window.csJSON && "stringify" in window.csJSON && "addEventListener" in window && "removeEventListener" in window && "Node" in window && "filter" in csArray.prototype && "forEach" in csArray.prototype && "querySelectorAll" in document && "now" in csDate && "keys" in Object && "performance" in window && "Map" in window && "Set" in window
            }, t
        }(),
        re = function() {
            function t(t, e, i, r, n) {
                this.visitorService = t, this.sessionService = e, this.exclusionService = i, this.customVariablesService = r, this.configuration = n
            }
            return t.prototype.get = function() {
                return {
                    exclusion: this.exclusionService.getAppliedTrackingDraw(),
                    visitor: this.visitorService.getVisitor(),
                    session: this.sessionService.getSession(),
                    cvars: this.customVariablesService.getCustomVariablesSession()
                }
            }, t.prototype.apply = function(t) {
                t && (t.exclusion ? this.exclude() : this.include(t))
            }, t.prototype.exclude = function() {
                this.exclusionService.exclude(this.configuration), this.visitorService.removeVisitor(), this.sessionService.removeSession(), this.customVariablesService.removeCustomVariablesSession()
            }, t.prototype.include = function(t) {
                this.exclusionService.removeExclusion(), this.visitorService.setVisitor(t.visitor), t.session ? this.sessionService.setSession(t.session) : this.sessionService.removeSession(), t.cvars ? this.customVariablesService.setCustomVariableSession(t.cvars) : this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        ne = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?$/,
        oe = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                var e;
                return (e = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_id") : this.cookieService.get("_cs_id")) ? t.fromString(e) : null
            }, t.prototype.set = function(e) {
                var i = t.toString(e);
                if (this.configuration.cookielessTrackingEnabled) this.browserSessionStorage.setItem("_cs_id", i);
                else {
                    var r = new csDate(e.expires);
                    this.cookieService.set("_cs_id", i, r), this.crossDomainSingleIframeService.setCookie("_cs_id", i, r)
                }
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_id") : (this.cookieService.delete("_cs_id"), this.crossDomainSingleIframeService.removeCookie("_cs_id"))
            }, t.prototype.handleSubdomainChange = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.get();
                    t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_id", Yt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_id", this.cookieService.getRootDomain()), this.set(t))
                }
            }, t.fromString = function(t) {
                var e = csString.prototype.split.call(t, "."),
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    c = e[6];
                return {
                    id: i,
                    creationTimestamp: Number(r),
                    visitsCount: Number(n),
                    hitTimestamp: Number(o),
                    lastVisitTimestamp: Number(s),
                    appliedTrackingDraw: Number(a),
                    expires: Number(c)
                }
            }, t.toString = function(t) {
                return csArray.prototype.join.call([t.id, t.creationTimestamp, t.visitsCount, t.hitTimestamp, t.lastVisitTimestamp, t.appliedTrackingDraw, t.expires], ".")
            }, t.isValidVisitorString = function(t) {
                return ne.test(t)
            }, t
        }();
    ! function(t) {
        t.REPLAY_RECORDING_DISABLED = "1", t.REPLAY_RECORDING_ENABLED = "3", t.TRIGGER_REPLAY_RECORDING_ENABLED = "5"
    }(Zt || (Zt = {})),
    function(t) {
        t.NOT_RECORDED = "0", t.TEMPORARILY_RECORDED = "T", t.GLOBAL_SAMPLING = "5", t.URL_SAMPLING = "6", t.ETR_SAMPLING = "7"
    }($t || ($t = {})),
    function(t) {
        t.ETR_OFF = "0", t.ETR_ON = "1"
    }(te || (te = {})),
    function(t) {
        t.ETR_LEGACY = "0", t.ETR_SESSION = "1", t.ETR_PAGE = "2"
    }(ee || (ee = {}));
    var se, ae = /^(\d+\.[013567T](\.[01])?)(\.\d+)?$/;
    ! function(t) {
        t[t.NOT_FOUND = 0] = "NOT_FOUND", t[t.EXPIRED = 1] = "EXPIRED", t[t.FOUND = 2] = "FOUND"
    }(se || (se = {}));
    var ce, ue = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r, this.cache = null, this.cacheRefreshed = !1
        }
        return t.prototype.get = function(e) {
            var i = this.getRawSession(e);
            return this.isValid(i) ? t.fromString(i) : null
        }, t.prototype.getRawSession = function(e) {
            if (e) {
                var i = this.getRawValueFromStorage();
                return t.removeSessionTimestamp(i)
            }
            var r = this.getFromCache(),
                n = r.sessionString,
                o = r.status,
                s = t.removeSessionTimestamp(n);
            if (o !== se.EXPIRED) return s;
            if (this.configuration.cookielessTrackingEnabled) return null;
            var a = this.getRawValueFromStorage();
            if (!a) return null;
            var c = csString.prototype.split.call(a, ".");
            if (!t.isSessionWithTimestampValue(c)) return a;
            var u = c[c.length - 1],
                l = parseInt(u, 10);
            return isNaN(l) || this.refreshCache(l), s
        }, t.prototype.set = function(t, e) {
            void 0 === e && (e = 18e5);
            var i = vt() + e,
                r = this.toString(t);
            r += "".concat(".").concat(i), this.setInCache(r, i), this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_s", r) : (this.cookieService.set("_cs_s", r, e), this.crossDomainSingleIframeService.setCookie("_cs_s", r, e))
        }, t.prototype.remove = function() {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_s") : (this.cookieService.delete("_cs_s"), this.crossDomainSingleIframeService.removeCookie("_cs_s")), this.clearCache()
        }, t.prototype.handleSubdomainChange = function() {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.get(!0);
                t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_s", Yt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_s", this.cookieService.getRootDomain()), this.set(t))
            }
        }, t.prototype.isValid = function(e) {
            return null !== e && t.isValidSessionString(e)
        }, t.prototype.toString = function(t) {
            return csArray.prototype.join.call([t.pageNumber, t.recordingState, t.etrState], ".")
        }, t.prototype.setInCache = function(t, e) {
            this.cache = {
                sessionString: t,
                expires: e
            }
        }, t.prototype.getFromCache = function() {
            return this.cache ? this.cache && vt() <= this.cache.expires ? {
                sessionString: this.cache.sessionString,
                status: se.FOUND
            } : {
                sessionString: this.cache.sessionString,
                status: se.EXPIRED
            } : {
                sessionString: this.getRawValueFromStorage(),
                status: se.NOT_FOUND
            }
        }, t.prototype.clearCache = function() {
            this.cache = null
        }, t.prototype.refreshCache = function(t) {
            this.cache && (this.cache.expires = t, this.cacheRefreshed = !0)
        }, t.prototype.isCacheRefreshed = function() {
            return this.cacheRefreshed
        }, t.prototype.resetCacheRefreshed = function() {
            this.cacheRefreshed = !1
        }, t.prototype.getRawValueFromStorage = function() {
            if (this.configuration.cookielessTrackingEnabled) {
                var t = this.browserSessionStorage.getItem("_cs_s");
                return !t || this.hasExpired(t) ? null : t
            }
            return this.cookieService.get("_cs_s")
        }, t.prototype.hasExpired = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = parseInt(e[e.length - 1], 10);
            return !isNaN(i) && vt() > i
        }, t.isSessionWithTimestampValue = function(t) {
            return 13 === t[t.length - 1].length
        }, t.removeSessionTimestamp = function(t) {
            var e;
            if (!t) return null;
            var i = null === (e = csString.prototype.match.call(t, ae)) || void 0 === e ? void 0 : e[1];
            return null != i ? i : null
        }, t.fromRawString = function(e) {
            var i = t.removeSessionTimestamp(e);
            return null !== i ? t.fromString(i) : null
        }, t.fromString = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = e[0],
                r = e[1],
                n = e[2];
            return {
                recordingState: r,
                etrState: null != n ? n : te.ETR_OFF,
                pageNumber: parseInt(i, 10)
            }
        }, t.isValidSessionString = function(t) {
            return ae.test(t)
        }, t
    }();
    (ce || (ce = {})).fromRaw = function(t) {
        return {
            exclusion: Number(t._cs_ex) || 0,
            visitor: t._cs_id ? oe.fromString(t._cs_id) : null,
            session: t._cs_s ? ue.fromRawString(t._cs_s) : null,
            cvars: t._cs_cvars ? window.csJSON.parse(t._cs_cvars) : null
        }
    };
    var le, he = /^[0-9]+$/,
        pe = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? Number(this.browserSessionStorage.getItem("_cs_ex")) : Number(this.cookieService.get("_cs_ex"))
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_ex", t) : (this.cookieService.set("_cs_ex", t, 2592e6), this.crossDomainSingleIframeService.setCookie("_cs_ex", t, 2592e6))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_ex") : (this.cookieService.delete("_cs_ex"), this.crossDomainSingleIframeService.removeCookie("_cs_ex"))
            }, t.isValidExclusionString = function(t) {
                return he.test(t)
            }, t
        }(),
        de = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_cvars") : this.cookieService.get("_cs_cvars")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_cvars", t) : (this.cookieService.set("_cs_cvars", t), this.crossDomainSingleIframeService.setCookie("_cs_cvars", t))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_cvars") : (this.cookieService.delete("_cs_cvars"), this.crossDomainSingleIframeService.removeCookie("_cs_cvars"))
            }, t.isValidCustomVarString = function(t) {
                return "string" == typeof t
            }, t
        }();
    ! function(t) {
        function e(t) {
            var e = ["_cs_ex", "_cs_id", "_cs_s", "_cs_cvars"];
            return csArray.prototype.every.call(Object.keys(t), (function(t) {
                return csArray.prototype.indexOf.call(e, t) >= 0
            }))
        }
        t.isRawDomainState = e, t.isValid = function(t) {
            return !!e(t) && ((!t._cs_id || oe.isValidVisitorString(t._cs_id)) && (!t._cs_s || ue.isValidSessionString(t._cs_s)) && (!t._cs_ex || pe.isValidExclusionString(t._cs_ex)) && (!t._cs_cvars || de.isValidCustomVarString(t._cs_cvars)))
        }
    }(le || (le = {}));
    var fe, ye = function() {
            function t(t, e) {
                this.xdframeOpener = t, this.location = e
            }
            return t.prototype.retrieve = function(e, i) {
                var r = this;
                this.callback = i, this.retrievedStates = [], this.xdframeOrigins = csArray.prototype.map.call(csArray.prototype.filter.call(e, (function(t) {
                    return r.isNotCurrentHostname(t)
                })), t.getXdframeOrigin), this.xdframeOpener.onMessage((function(t) {
                    r.handleXdframeMessage(t)
                })), this.xdframeOpener.onTimeout((function() {
                    r.handleTimeout()
                })), this.xdframeOpener.start(), csArray.prototype.forEach.call(csArray.prototype.map.call(this.xdframeOrigins, t.getXdframeUrl), (function(t) {
                    return r.xdframeOpener.open(t)
                }))
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data;
                    if (!le.isValid(e)) throw this.xdframeOpener.stop(), "Invalid domain state: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin);
                    csArray.prototype.push.call(this.retrievedStates, e)
                }
                this.allMessagesAreIn() && (this.xdframeOpener.stop(), this.callback(csArray.prototype.map.call(this.retrievedStates, ce.fromRaw)))
            }, t.prototype.handleTimeout = function() {
                Wt.warn("xdframe: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return csArray.prototype.indexOf.call(this.xdframeOrigins, t.origin) > -1
            }, t.prototype.allMessagesAreIn = function() {
                return this.retrievedStates.length === this.xdframeOrigins.length
            }, t.prototype.isNotCurrentHostname = function(t) {
                return !tt(this.location.hostname, t)
            }, t.getXdframeOrigin = function(t) {
                return "https://csxd.".concat(t)
            }, t.getXdframeUrl = function(t) {
                return "".concat(t, "/xdframe-").concat("1.0.0", ".html")
            }, t
        }(),
        ve = function() {
            function t() {
                var t = this;
                this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3e3, this.scopedHandleMessage = function(e) {
                    t.handleMessage(e)
                }
            }
            return t.prototype.onMessage = function(t) {
                this.onMessageCallback = t
            }, t.prototype.onTimeout = function(t) {
                this.onTimeoutCallback = t
            }, t.prototype.start = function() {
                var t = this;
                window.addEventListener("message", this.scopedHandleMessage), this.timeoutId = window.setTimeout((function() {
                    t.onTimeoutCallback()
                }), this.ALL_MESSAGES_RECEIVED_TIMEOUT)
            }, t.prototype.open = function(t) {
                var e = document.createElement("iframe");
                return e.src = t, e.setAttribute("hidden", ""), e.setAttribute("title", "Intentionally blank"), document.body.appendChild(e), e
            }, t.prototype.stop = function() {
                window.removeEventListener("message", this.scopedHandleMessage), window.clearTimeout(this.timeoutId), this.onMessageCallback = Z, this.onTimeoutCallback = Z
            }, t.prototype.handleMessage = function(t) {
                this.onMessageCallback(t)
            }, H([Kt("XdframeMessage")], t.prototype, "handleMessage", null), t
        }(),
        ge = function() {
            function t() {
                this.xhr = new XMLHttpRequest
            }
            return t.prototype.send = function(t) {
                var e = this,
                    i = t.path,
                    r = t.domainUri,
                    n = t.query,
                    o = t.headers,
                    s = t.method,
                    a = t.body,
                    c = t.onLoadCallback,
                    u = t.onErrorCallback,
                    l = t.timeout,
                    h = t.onTimeoutCallback,
                    p = r;
                if (i && (p = csString.prototype.concat.call(p, "/", i)), n && (p = csString.prototype.concat.call(p, "?", n)), this.xhr.open(s, p, !0), o)
                    for (var d = 0, f = o; d < f.length; d++) {
                        var y = f[d];
                        this.xhr.setRequestHeader(y.name, y.value)
                    }
                c && (this.xhr.onload = function() {
                    var t = {
                        responseText: e.xhr.responseText,
                        status: e.xhr.status
                    };
                    c(t)
                }), u && (this.xhr.onerror = function() {
                    u()
                }), l && h && (this.xhr.timeout = l, this.xhr.ontimeout = function() {
                    h()
                }), this.xhr.send(a)
            }, t.prototype.abort = function() {
                this.xhr.abort()
            }, t
        }(),
        me = function() {
            function t() {}
            return t.prototype.send = function(t) {
                return F(this, void 0, void 0, (function() {
                    var e, i, r, n, o, s, a, c, u, l, h, p, d, f, y, v, g, m, S, E, b, C = this;
                    return G(this, (function(w) {
                        switch (w.label) {
                            case 0:
                                if (e = t.path, i = t.domainUri, r = t.query, n = t.headers, o = t.method, s = t.body, a = t.onLoadCallback, c = t.onErrorCallback, u = t.timeout, l = t.onTimeoutCallback, this.abortController = new AbortController, h = {
                                        method: o
                                    }, p = {
                                        hasTimedOut: !1
                                    }, u && (d = window.setTimeout((function() {
                                        C.abortRequestAfterTimeout(p)
                                    }), u), h.signal = this.abortController.signal), n) {
                                    for (f = {}, y = 0, v = n; y < v.length; y++) g = v[y], f[g.name] = g.value;
                                    h.headers = f
                                }
                                s && (h.body = s), m = i, e && (m = csString.prototype.concat.call(m, "/", e)), r && (m = csString.prototype.concat.call(m, "?", r)), w.label = 1;
                            case 1:
                                return w.trys.push([1, 5, , 6]), [4, fetch(m, h)];
                            case 2:
                                return S = w.sent(), d && window.clearTimeout(d), a ? [4, S.text()] : [3, 4];
                            case 3:
                                E = w.sent(), b = {
                                    responseText: E,
                                    status: S.status
                                }, a(b), w.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return w.sent(), d && window.clearTimeout(d), p.hasTimedOut && l ? l() : !this.abortController.signal.aborted && c && c(), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.abort = function() {
                this.abortController && this.abortController.abort()
            }, t.prototype.abortRequestAfterTimeout = function(t) {
                this.abortController.abort(), t.hasTimedOut = !0
            }, t
        }(),
        Se = function() {
            function t() {
                this.isFetchSupported() ? this.httpSendStrategy = new me : this.httpSendStrategy = new ge
            }
            return t.prototype.send = function(t) {
                this.httpSendStrategy.send(t)
            }, t.prototype.abort = function() {
                this.httpSendStrategy.abort()
            }, t.prototype.isFetchSupported = function() {
                return "function" == typeof window.fetch && !!window.AbortController
            }, t
        }();

    function Ee(t) {
        for (var e = new Uint8Array(t), i = "", r = 0; r < e.byteLength; r += 1) i += csString.fromCodePoint(e[r]);
        return i
    }

    function be(t) {
        return function(t) {
            for (var e = new ArrayBuffer(t.length), i = new Uint8Array(e), r = 0, n = t.length; r < n; r += 1) i[r] = csString.prototype.charCodeAt.call(t, r);
            return e
        }(self.atob(t))
    }! function(t) {
        t.UNCOMPRESSED = "0", t.LZSTRING = "1", t.GZIP = "2"
    }(fe || (fe = {}));
    var Ce, we, Te = function(t) {
            this.onError = t
        },
        Re = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.algorithm = fe.UNCOMPRESSED, e
            }
            return U(e, t), e.prototype.isSupported = function() {
                return !0
            }, e.prototype.compress = function(t, e, i) {
                if ("base64" === t) return "string" != typeof e && (e = Ee(e)), i(e);
                i(e)
            }, e.prototype.compressSync = function(t) {
                return t
            }, e
        }(Te),
        Ae = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.afterRequestDataRetrievedCallbacks = [], r.requestHeaders = [], r.timeout = 0, r.httpSenderContext = new Se, r
            }
            return U(e, t), e.prototype.setCompressionOptions = function(t, e) {
                this.compressor = t, this.compressionOutputType = e
            }, e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.setRequestHeader = function(t) {
                csArray.prototype.push.call(this.requestHeaders, t)
            }, e.prototype.afterProvidersCalled = function(t) {
                csArray.prototype.push.call(this.afterRequestDataRetrievedCallbacks, t)
            }, e.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, e.prototype.onError = function(t) {
                this.onErrorCallback = t
            }, e.prototype.onTimeout = function(t, e) {
                this.timeout = t, this.onTimeoutCallback = e
            }, e.prototype.send = function(t) {
                var e = this;
                void 0 === t && (t = !0), csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var i = this.retrieveParameters(),
                    r = this.retrievePayload();
                csArray.prototype.forEach.call(this.afterRequestDataRetrievedCallbacks, (function(t) {
                    return t()
                })), t && this.compressor && this.compressionOutputType && "string" == typeof r ? this.compressor.compress(this.compressionOutputType, r, (function(t) {
                    e.doSend(i, t)
                })) : this.doSend(i, r)
            }, e.prototype.abort = function() {
                this.httpSenderContext.abort()
            }, e.prototype.getCompressionOutputType = function() {
                return this.compressionOutputType
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.doSend = function(t, e) {
                var i, r, n, o = this,
                    s = null !== (n = null !== (i = t.ct) && void 0 !== i ? i : null === (r = this.compressor) || void 0 === r ? void 0 : r.algorithm) && void 0 !== n ? n : fe.UNCOMPRESSED;
                t = B(B({}, t), {
                    ct: s
                });
                var a = nt.toQuery(t);
                this.httpSenderContext.send({
                    method: "POST",
                    domainUri: this.domainUri,
                    path: this.path,
                    headers: this.requestHeaders,
                    query: a,
                    body: e,
                    onLoadCallback: this.onLoadCallback,
                    onErrorCallback: function() {
                        o.onErrorCallback && o.onErrorCallback(t, e)
                    },
                    timeout: this.timeout,
                    onTimeoutCallback: this.onTimeoutCallback
                }), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(e) {
                    return e(t)
                }))
            }, H([Kt("POST request")], e.prototype, "doSend", null), e
        }(ct);
    ! function(t) {
        t[t.MUTATION_INSERT = 1] = "MUTATION_INSERT", t[t.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", t[t.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", t[t.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", t[t.INITIAL_DOM = 5] = "INITIAL_DOM", t[t.SCROLL = 6] = "SCROLL", t[t.CLICK = 8] = "CLICK", t[t.RESIZE = 9] = "RESIZE", t[t.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", t[t.INPUT_SELECT = 11] = "INPUT_SELECT", t[t.INPUT_TEXT = 12] = "INPUT_TEXT", t[t.HASH_CHANGE = 13] = "HASH_CHANGE", t[t.CONSENT_GRANTED = 14] = "CONSENT_GRANTED", t[t.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN", t[t.MOUSE_OVER = 16] = "MOUSE_OVER", t[t.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", t[t.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", t[t.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", t[t.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", t[t.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", t[t.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", t[t.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", t[t.PAGE_EVENT = 27] = "PAGE_EVENT", t[t.API_ERROR = 28] = "API_ERROR", t[t.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", t[t.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", t[t.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", t[t.KEY_DOWN = 32] = "KEY_DOWN", t[t.KEY_UP = 33] = "KEY_UP", t[t.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND", t[t.STYLESHEET_RULE_DELETE = 37] = "STYLESHEET_RULE_DELETE", t[t.USER_IDENTIFIER = 38] = "USER_IDENTIFIER", t[t.TOUCH_START = 41] = "TOUCH_START", t[t.TOUCH_MOVE = 42] = "TOUCH_MOVE", t[t.TOUCH_END = 43] = "TOUCH_END", t[t.GESTURE_RECOGNITION = 44] = "GESTURE_RECOGNITION", t[t.POINTER_DOWN = 47] = "POINTER_DOWN", t[t.POINTER_MOVE = 48] = "POINTER_MOVE", t[t.POINTER_UP = 49] = "POINTER_UP", t[t.CUSTOM_ERROR = 50] = "CUSTOM_ERROR", t[t.CUSTOM_ELEMENT_REGISTRATION = 54] = "CUSTOM_ELEMENT_REGISTRATION", t[t.REGISTER_ADOPTED_STYLE_SHEET = 60] = "REGISTER_ADOPTED_STYLE_SHEET", t[t.SET_ADOPTED_STYLE_SHEETS = 61] = "SET_ADOPTED_STYLE_SHEETS", t[t.ADOPTED_STYLESHEET_RULE_INSERT = 62] = "ADOPTED_STYLESHEET_RULE_INSERT", t[t.ADOPTED_STYLESHEET_RULE_DELETE = 63] = "ADOPTED_STYLESHEET_RULE_DELETE"
    }(Ce || (Ce = {})),
    function(t) {
        t[t.SWIPE = 0] = "SWIPE", t[t.PINCH_IN = 1] = "PINCH_IN", t[t.PINCH_OUT = 2] = "PINCH_OUT", t[t.LONG_PRESS = 3] = "LONG_PRESS", t[t.TAP = 4] = "TAP", t[t.DOUBLE_TAP = 5] = "DOUBLE_TAP"
    }(we || (we = {}));

    function ke(t, e) {
        void 0 === e && (e = !0), t.boundElement.addEventListener(t.type, t.listener, e)
    }

    function Ie(t, e) {
        void 0 === e && (e = !0), t.boundElement.removeEventListener(t.type, t.listener, e)
    }
    var _e, Pe, Ne = function() {
        function t(t, e, i, r, n, o, s, a, c, u) {
            this.nodeIdentifier = t, this.projectConfiguration = e, this.asymmetricEncryption = i, this.symmetricEncryption = r, this.textNodesBuffer = n, this.textNodesMutationsBuffer = o, this.inputNodesBuffer = s, this.userIdentifierBuffer = a, this.apiErrorsBuffer = c, this.compressor = u, this.headerMaxSize = 8e3, this.requestBodyMaxSize = 64e3, this.responseBodyMaxSize = 2e3, this.queryParamMaxSize = 2e3, this.suppressedMessageMarker = "…", this.publicKey = null, this.importKeyDone = !1
        }
        return t.prototype.onTextNodeToEncrypt = function(t) {
            this.onTextNodeToEncryptCallback = t
        }, t.prototype.onInputNodeToEncrypt = function(t) {
            this.onInputNodeToEncryptCallback = t
        }, t.prototype.onUserIdentifierToEncrypt = function(t) {
            this.onUserIdentifierToEncryptCallback = t
        }, t.prototype.onApiErrorToEncrypt = function(t) {
            this.onApiErrorToEncryptCallback = t
        }, t.prototype.init = function() {
            var t = this;
            this.isFeatureSupported() && (this.textEncoder = new TextEncoder, this.textNodesBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeToEncrypt(e)
            })), this.textNodesMutationsBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeMutationToEncrypt(e)
            })), this.inputNodesBuffer.onSerializeData((function(e) {
                return t.serializeInputNodeToEncrypt(e)
            })), this.userIdentifierBuffer.onSerializeData((function(e) {
                return t.serializeUserIdentifierToEncrypt(e)
            })), this.apiErrorsBuffer.onSerializeData((function(e) {
                return t.encryptAndProcessApiError(e)
            })), this.importPublicKey(this.projectConfiguration.encryptionPublicKey))
        }, t.prototype.importPublicKey = function(t) {
            return F(this, void 0, void 0, (function() {
                var e;
                return G(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.asymmetricEncryption.importKey(t)];
                        case 1:
                            return e = i.sent(), this.importKeyDone = !0, e ? (this.publicKey = e, this.textNodesBuffer.serializeDataFromBuffer(), this.userIdentifierBuffer.serializeDataFromBuffer()) : (this.textNodesBuffer.clear(), this.userIdentifierBuffer.clear(), Wt.warn("Fail to import public key '".concat(t, "'"))), this.textNodesMutationsBuffer.serializeDataFromBuffer(), this.inputNodesBuffer.serializeDataFromBuffer(), this.apiErrorsBuffer.serializeDataFromBuffer(), [2]
                    }
                }))
            }))
        }, t.prototype.registerTextNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeToEncrypt(t) : this.textNodesBuffer.addData(t))
        }, t.prototype.registerTextNodeMutationToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeMutationToEncrypt(t) : this.textNodesMutationsBuffer.addData(t))
        }, t.prototype.registerInputNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeInputNodeToEncrypt(t) : this.inputNodesBuffer.addData(t))
        }, t.prototype.registerUserIdentifierToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeUserIdentifierToEncrypt(t) : this.userIdentifierBuffer.addData(t))
        }, t.prototype.registerApiErrorToEncrypt = function(t) {
            this.isFeatureSupported() ? this.importKeyDone ? this.encryptAndProcessApiError(t) : this.apiErrorsBuffer.addData(t) : this.fallbackToApiError(t)
        }, t.prototype.isFeatureSupported = function() {
            return this.projectConfiguration.encryptionEnabled && !!this.projectConfiguration.encryptionPublicKey && this.projectConfiguration.encryptionPublicKeyId > 0 && this.asymmetricEncryption.isSupported() && this.symmetricEncryption.isSupported()
        }, t.prototype.serializeTextNodeToEncrypt = function(t) {
            var e = this,
                i = t.textNode,
                r = this.nodeIdentifier.getId(i);
            if (r) {
                if (this.publicKey) {
                    var n = B(B({}, t), {
                        targetId: r,
                        date: vt()
                    });
                    this.encryptAndProcessEvent(n, (function(t) {
                        return t.textNode.data
                    }), (function() {
                        return Wt.warn("Fail to encrypt text node data")
                    }), (function(t, i) {
                        return e.processEncryptedTextMutation(t, i)
                    }))
                }
            } else Wt.warn("serializeTextNodeToEncrypt: node without identifier")
        }, t.prototype.serializeTextNodeMutationToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToCharacterData(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.textNode.data
            }), (function() {
                Wt.warn("Fail to encrypt text node data - Text node processed as MUTATION_CHARACTER_DATA"), e.fallbackToCharacterData(t)
            }), (function(t, i) {
                return e.processEncryptedTextMutation(t, i)
            }))
        }, t.prototype.serializeInputNodeToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToInputText(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.targetValue
            }), (function() {
                Wt.warn("Fail to encrypt input data - Input node processed as INPUT_TEXT"), e.fallbackToInputText(t)
            }), (function(t, i) {
                return e.processEncryptedInputText(t, i)
            }))
        }, t.prototype.serializeUserIdentifierToEncrypt = function(t) {
            var e = this;
            this.publicKey && this.encryptAndProcessEvent(t, (function(t) {
                return t.userIdentifier
            }), (function() {
                Wt.warn("Fail to encrypt userIdentifier")
            }), (function(t, i) {
                return e.processEncryptedUserIdentifier(t, i)
            }))
        }, t.prototype.encryptAndProcessEvent = function(t, e, i, r) {
            return F(this, void 0, void 0, (function() {
                var n, o;
                return G(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return n = e(t), [4, this.asymmetricEncryption.encrypt({
                                publicKey: this.publicKey
                            }, n)];
                        case 1:
                            return (o = s.sent()) ? (r(t, o), [2]) : (i(t), [2])
                    }
                }))
            }))
        }, t.prototype.fallbackToCharacterData = function(t) {
            var e = t.targetId,
                i = t.serializedTextData,
                r = t.date;
            this.onTextNodeToEncryptCallback({
                date: r,
                args: [e, i],
                type: Ce.MUTATION_CHARACTER_DATA
            })
        }, t.prototype.fallbackToInputText = function(t) {
            var e = t.targetId,
                i = t.targetValue,
                r = t.date;
            this.onInputNodeToEncryptCallback({
                date: r,
                args: [e, csString.prototype.replace.call(i, /\S/g, "•")],
                type: Ce.INPUT_TEXT
            })
        }, t.prototype.processEncryptedTextMutation = function(t, e) {
            var i = t.targetId,
                r = t.serializedTextData,
                n = t.date;
            this.onTextNodeToEncryptCallback({
                date: n,
                args: [i, r, e, this.projectConfiguration.encryptionPublicKeyId],
                type: Ce.MUTATION_ENCRYPTED_CHARACTER_DATA
            })
        }, t.prototype.processEncryptedInputText = function(t, e) {
            var i = t.targetId,
                r = t.targetValue,
                n = t.date;
            this.onInputNodeToEncryptCallback({
                date: n,
                args: [i, csString.prototype.replace.call(r, /\S/g, "•"), e, this.projectConfiguration.encryptionPublicKeyId],
                type: Ce.INPUT_ENCRYPTED_TEXT
            })
        }, t.prototype.processEncryptedUserIdentifier = function(t, e) {
            var i = {
                type: Ce.USER_IDENTIFIER,
                args: [e, t.keyId],
                date: t.date
            };
            this.onUserIdentifierToEncryptCallback(i)
        }, t.prototype.encryptAndProcessApiError = function(t) {
            return F(this, void 0, void 0, (function() {
                var e, i, r, n, o, s, a, c, u, l, h;
                return G(this, (function(p) {
                    switch (p.label) {
                        case 0:
                            return this.publicKey ? [4, this.symmetricEncryption.generateEncryptionKey()] : (this.fallbackToApiError(t), [2]);
                        case 1:
                            if (e = p.sent(), i = this.symmetricEncryption.generateInitializationVector(), null === e || null === i) return this.fallbackToApiError(t), [2];
                            p.label = 2;
                        case 2:
                            return p.trys.push([2, 19, , 20]), t.customRequestHeaders ? this.sizeWithinLimit(t.customRequestHeaders, this.headerMaxSize) ? [3, 3] : (t.customRequestHeaders = "", [3, 5]) : [3, 5];
                        case 3:
                            return r = t, [4, this.symmetricEncrypt(e, i, t.customRequestHeaders)];
                        case 4:
                            r.customRequestHeaders = p.sent(), p.label = 5;
                        case 5:
                            return t.customResponseHeaders ? this.sizeWithinLimit(t.customResponseHeaders, this.headerMaxSize) ? [3, 6] : (t.customResponseHeaders = "", [3, 8]) : [3, 8];
                        case 6:
                            return n = t, [4, this.symmetricEncrypt(e, i, t.customResponseHeaders)];
                        case 7:
                            n.customResponseHeaders = p.sent(), p.label = 8;
                        case 8:
                            return t.queryParameters ? this.sizeWithinLimit(t.queryParameters, this.queryParamMaxSize) ? [3, 9] : (t.queryParameters = this.suppressedMessageMarker, [3, 11]) : [3, 11];
                        case 9:
                            return o = this.compressor.compressSync(t.queryParameters), s = t, [4, this.symmetricEncrypt(e, i, o)];
                        case 10:
                            s.queryParameters = p.sent(), p.label = 11;
                        case 11:
                            return t.requestBody ? this.sizeWithinLimit(t.requestBody, this.requestBodyMaxSize) ? [3, 12] : (t.requestBody = this.suppressedMessageMarker, [3, 14]) : [3, 14];
                        case 12:
                            return a = this.compressor.compressSync(t.requestBody), c = t, [4, this.symmetricEncrypt(e, i, a)];
                        case 13:
                            c.requestBody = p.sent(), p.label = 14;
                        case 14:
                            return t.responseBody ? this.sizeWithinLimit(t.responseBody, this.responseBodyMaxSize) ? [3, 15] : (t.responseBody = this.suppressedMessageMarker, [3, 17]) : [3, 17];
                        case 15:
                            return u = this.compressor.compressSync(t.responseBody), l = t, [4, this.symmetricEncrypt(e, i, u)];
                        case 16:
                            l.responseBody = p.sent(), p.label = 17;
                        case 17:
                            return h = t, [4, this.encryptSecret(e, this.publicKey)];
                        case 18:
                            return h.secret = p.sent(), [3, 20];
                        case 19:
                            return p.sent(), this.fallbackToApiError(t), [2];
                        case 20:
                            return t.initializationVector = this.symmetricEncryption.exportInitializationVector(i), t.encryptionKeyId = this.projectConfiguration.encryptionPublicKeyId, this.onApiErrorToEncryptCallback(t), [2]
                    }
                }))
            }))
        }, t.prototype.sizeWithinLimit = function(t, e) {
            return this.textEncoder.encode(t).byteLength <= e
        }, t.prototype.fallbackToApiError = function(t) {
            t.customRequestHeaders = "", t.customResponseHeaders = "", t.queryParameters = "", t.requestBody = "", t.responseBody = "", this.onApiErrorToEncryptCallback(t)
        }, t.prototype.symmetricEncrypt = function(t, e, i) {
            return F(this, void 0, void 0, (function() {
                var r;
                return G(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.symmetricEncryption.encrypt({
                                encryptionKey: t,
                                initializationVector: e
                            }, i)];
                        case 1:
                            if (!(r = n.sent())) throw new Error("Encryption failed");
                            return [2, r]
                    }
                }))
            }))
        }, t.prototype.encryptSecret = function(t, e) {
            return F(this, void 0, void 0, (function() {
                var i, r;
                return G(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.symmetricEncryption.exportSecret(t)];
                        case 1:
                            if (!(i = n.sent())) throw new Error("Export secret failed");
                            return [4, this.asymmetricEncryption.encrypt({
                                publicKey: e
                            }, i)];
                        case 2:
                            if (!(r = n.sent())) throw new Error("Encrypt secret failed");
                            return [2, r]
                    }
                }))
            }))
        }, t
    }();

    function Oe(t) {
        var e = csEventtarget.apply(t);
        return e && v(e) && csElementshadowRoot.apply(e) && t.composedPath ? t.__csOriginalTarget || t.composedPath()[0] : e
    }

    function Me(t) {
        return Math.round(10 * t) / 10
    }

    function Le(t, e) {
        "number" == typeof e && (e = {
            wait: e
        });
        var i, r = e.wait;
        if (e.ignoreThrottledCalls) {
            var n = 0;
            return function() {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                var o = vt();
                if (o - n > r) return n = o, t.apply(this, e)
            }
        }
        var o, s = [],
            a = null,
            c = 0,
            u = function() {
                c = vt(), a = null, o = t.apply(i, s)
            },
            l = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                var l = vt(),
                    h = r - (l - c);
                return i = null != this ? this : window, s = W([], e, !0), h <= 0 || h > r ? (c = l, o = t.apply(i, s), a ? (window.clearTimeout(a), a = null) : s = []) : a || (a = window.setTimeout(u, h)), o
            };
        return l.cancel = function() {
            a && (window.clearTimeout(a), c = 0, a = null, s = [])
        }, l
    }! function(t) {
        t[t.SPACE = 0] = "SPACE", t[t.ENTER = 1] = "ENTER", t[t.BACKSPACE = 2] = "BACKSPACE", t[t.DELETE = 3] = "DELETE", t[t.ARROWUP = 4] = "ARROWUP", t[t.ARROWDOWN = 5] = "ARROWDOWN", t[t.ARROWLEFT = 6] = "ARROWLEFT", t[t.ARROWRIGHT = 7] = "ARROWRIGHT", t[t.CAPSLOCK = 8] = "CAPSLOCK", t[t.SHIFT = 9] = "SHIFT", t[t.TAB = 10] = "TAB", t[t.ALPHANUMERICAL = 11] = "ALPHANUMERICAL", t[t.ESCAPE = 12] = "ESCAPE", t[t.END = 13] = "END", t[t.ALT = 14] = "ALT", t[t.CTRL = 15] = "CTRL", t[t.META = 16] = "META"
    }(_e || (_e = {})),
    function(t) {
        t[t.COPY = 0] = "COPY", t[t.CUT = 1] = "CUT", t[t.PASTE = 2] = "PASTE"
    }(Pe || (Pe = {}));

    function De() {
        return function(t, e, i) {
            var r = i.value;
            i.value = function(t) {
                !1 === (null == t ? void 0 : t.isTrusted) && De.enabled || r.call(this, t)
            }
        }
    }
    De.enabled = !0;
    var xe = function() {
        function t(e, i, r, n) {
            var o = this;
            this.selector = e, this.nodeIdentifier = i, this.sensitiveContentService = r, this.encryptionService = n, this.shadowRoots = new Set, this.onEventCallbacks = [], this.pointerEventHandlers = [{
                type: "pointerup",
                listener: function(t) {
                    return o.pointerUpListener(t)
                },
                boundElement: document
            }, {
                type: "pointermove",
                listener: function(t) {
                    return o.pointerMoveListener(t)
                },
                boundElement: document
            }, {
                type: "pointerdown",
                listener: function(t) {
                    return o.pointerDownListener(t)
                },
                boundElement: document
            }], this.touchEventHandlers = [{
                type: "touchstart",
                listener: function(t) {
                    return o.touchStartListener(t)
                },
                boundElement: document
            }, {
                type: "touchmove",
                listener: function(t) {
                    return o.touchMoveListener(t)
                },
                boundElement: document
            }, {
                type: "touchend",
                listener: function(t) {
                    return o.touchEndListener(t)
                },
                boundElement: document
            }], this.topDocumentListeners = [{
                type: "click",
                listener: function(t) {
                    return o.clickListener(t)
                },
                boundElement: document
            }, {
                type: "keyup",
                listener: this.selector.on(t.whiteListedTextInputSelector, (function(t) {
                    return o.inputTextListener(t)
                })),
                boundElement: document
            }, {
                type: "keyup",
                listener: this.selector.on(t.whiteListedNumberInputsSelector, (function(t) {
                    return o.inputTextListener(t)
                })),
                boundElement: document
            }, {
                type: "keyup",
                listener: function(t) {
                    return o.keyUpListener(t)
                },
                boundElement: document
            }, {
                type: "keydown",
                listener: function(t) {
                    return o.keyDownListener(t)
                },
                boundElement: document
            }, {
                type: "copy",
                listener: function(t) {
                    return o.copyListener(t)
                },
                boundElement: document
            }, {
                type: "cut",
                listener: function(t) {
                    return o.cutListener(t)
                },
                boundElement: document
            }, {
                type: "paste",
                listener: function(t) {
                    return o.pasteListener(t)
                },
                boundElement: document
            }, {
                type: "change",
                listener: this.selector.on(t.whiteListedCheckableInputsSelector, (function(t) {
                    return o.inputCheckableListener(t)
                })),
                boundElement: document
            }, {
                type: "change",
                listener: this.selector.on("select", (function(t) {
                    return o.inputSelectListener(t)
                })),
                boundElement: document
            }, {
                type: "change",
                listener: this.selector.on(t.whiteListedNumberInputsSelector, (function(t) {
                    return o.inputTextListener(t)
                })),
                boundElement: document
            }, {
                type: "scroll",
                listener: function(t) {
                    return o.scrollListener(csEventtarget.apply(t))
                },
                boundElement: document
            }, {
                type: "mouseover",
                listener: function(t) {
                    return o.mouseOverListener(t)
                },
                boundElement: document
            }], this.shadowRootsListeners = [{
                type: "change",
                listener: this.selector.on(t.whiteListedCheckableInputsSelector, (function(t) {
                    return o.inputCheckableListener(t)
                }))
            }, {
                type: "change",
                listener: this.selector.on("select", (function(t) {
                    return o.inputSelectListener(t)
                }))
            }, {
                type: "change",
                listener: this.selector.on(t.whiteListedNumberInputsSelector, (function(t) {
                    return o.inputTextListener(t)
                }))
            }, {
                type: "scroll",
                listener: function(t) {
                    return o.scrollListener(csEventtarget.apply(t))
                }
            }, {
                type: "mouseover",
                listener: function(t) {
                    return o.mouseOverListener(t)
                }
            }]
        }
        var e;
        return t.prototype.init = function() {
            this.initTouchEventHandlers(), this.initPointerEventHandlers(), this.initKeyStrokesMap(), this.initSubscribers(), this.encryptionService.onInputNodeToEncrypt(this.triggerCallbacks.bind(this))
        }, t.prototype.initSubscribers = function() {
            var t = this;
            this.nodeIdentifier.onDocumentIdentified((function(e) {
                t.bindHandlers(e)
            }))
        }, t.prototype.onEvent = function(t) {
            csArray.prototype.push.call(this.onEventCallbacks, t)
        }, t.prototype.triggerCallbacks = function(t) {
            csArray.prototype.forEach.call(this.onEventCallbacks, (function(e) {
                return e(t)
            }))
        }, t.prototype.start = function() {
            this.triggerInitialEvents()
        }, t.prototype.stop = function() {
            this.unbindAllHandlers()
        }, t.prototype.initPointerEventHandlers = function() {
            var t;
            this.arePointerEventsSupported() && (t = csArray.prototype.push).call.apply(t, W([this.topDocumentListeners], this.pointerEventHandlers, !1))
        }, t.prototype.initTouchEventHandlers = function() {
            var t;
            this.areTouchEventsSupported() && (t = csArray.prototype.push).call.apply(t, W([this.topDocumentListeners], this.touchEventHandlers, !1))
        }, t.prototype.bindHandlers = function(t) {
            T(t) ? csArray.prototype.forEach.call(this.topDocumentListeners, (function(t) {
                return ke(t)
            })) : this.shadowRoots.has(t) || (this.shadowRoots.add(t), csArray.prototype.forEach.call(this.shadowRootsListeners, (function(e) {
                var i = e;
                i.boundElement = t, ke(i)
            })))
        }, t.prototype.unbindHandlers = function(t) {
            T(t) ? csArray.prototype.forEach.call(this.topDocumentListeners, (function(t) {
                return Ie(t)
            })) : (this.shadowRoots.delete(t), csArray.prototype.forEach.call(this.shadowRootsListeners, (function(e) {
                var i = e;
                i.boundElement = t, Ie(i)
            })))
        }, t.prototype.arePointerEventsSupported = function() {
            return "PointerEvent" in window && "function" == typeof window.PointerEvent
        }, t.prototype.areTouchEventsSupported = function() {
            return "TouchEvent" in window && "function" == typeof window.TouchEvent
        }, t.prototype.unbindAllHandlers = function() {
            var t = this;
            this.unbindHandlers(document), this.shadowRoots.forEach((function(e) {
                return t.unbindHandlers(e)
            }))
        }, t.prototype.triggerInitialEvents = function() {
            this.initialTextInputListener(t.whiteListedTextInputSelector), this.initialScrollListener(), this.initialSelectListener(), this.initialCheckableListener(), this.initialTextInputListener(t.whiteListedNumberInputsSelector)
        }, t.prototype.initialTextInputListener = function(t) {
            for (var e, i = document.querySelectorAll(t), r = 0; r < i.length; r += 1) {
                var n = i.item(r);
                (null === (e = n.value) || void 0 === e ? void 0 : e.length) > 0 && this.processInputText(n)
            }
        }, t.prototype.initialScrollListener = function() {
            var t = window.pageYOffset,
                e = window.pageXOffset;
            if (0 !== t || 0 !== e) {
                var i = this.nodeIdentifier.getId(document);
                if (!i) return void Wt.warn("scrollListener: document without identifier");
                var r = {
                    type: Ce.SCROLL,
                    args: [i, e, t],
                    date: vt()
                };
                this.triggerCallbacks(r)
            }
        }, t.prototype.initialSelectListener = function() {
            for (var t = document.getElementsByTagName("select"), e = 0; e < t.length; e += 1) this.processInputSelect(t[e])
        }, t.prototype.initialCheckableListener = function() {
            for (var e = document.querySelectorAll(t.whiteListedCheckableInputsSelector), i = 0; i < e.length; i += 1) this.processInputCheckable(e[i])
        }, t.prototype.getScrollPosition = function(t) {
            return t === document ? {
                top: window.pageYOffset,
                left: window.pageXOffset
            } : {
                top: t.scrollTop,
                left: t.scrollLeft
            }
        }, t.prototype.scrollListener = function(t) {
            if (!v(t) || !this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                if (e) {
                    var i = this.getScrollPosition(t);
                    this.triggerCallbacks({
                        type: Ce.SCROLL,
                        args: [e, i.left, i.top],
                        date: vt()
                    })
                } else Wt.warn("scrollListener: node without identifier")
            }
        }, t.prototype.mouseOverListener = function(t) {
            if (!v(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target)) {
                var e = this.nodeIdentifier.getId(t.target);
                e ? this.triggerCallbacks({
                    type: Ce.MOUSE_OVER,
                    args: [e],
                    date: vt()
                }) : Wt.warn("mouseOverListener: node without identifier")
            }
        }, t.prototype.clickListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                i ? this.triggerCallbacks({
                    type: Ce.CLICK,
                    args: [i],
                    date: vt()
                }) : Wt.warn("clickListener: node without identifier")
            }
        }, t.prototype.inputCheckableListener = function(t) {
            var e = Oe(t);
            this.processInputCheckable(e)
        }, t.prototype.processInputCheckable = function(t) {
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                e ? this.triggerCallbacks({
                    type: Ce.INPUT_CHECKABLE,
                    args: [e, t.checked],
                    date: vt()
                }) : Wt.warn("inputCheckableListener: node without identifier")
            }
        }, t.prototype.inputSelectListener = function(t) {
            var e = Oe(t);
            this.processInputSelect(e)
        }, t.prototype.processInputSelect = function(t) {
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var e = this.nodeIdentifier.getId(t);
                e ? this.triggerCallbacks({
                    type: Ce.INPUT_SELECT,
                    args: [e, t.selectedIndex],
                    date: vt()
                }) : Wt.warn("inputSelectListener: node without identifier")
            }
        }, t.prototype.inputTextListener = function(t) {
            var e = Oe(t);
            this.processInputText(e)
        }, t.prototype.processInputText = function(t) {
            var e;
            if (!this.sensitiveContentService.isSensitive(t) && !this.sensitiveContentService.isSensitiveChild(t)) {
                var i = this.nodeIdentifier.getId(t);
                if (i) {
                    var r = null !== (e = t.value) && void 0 !== e ? e : "";
                    if (t.hasAttribute("data-cs-encrypt") && "password" !== t.type) this.encryptionService.registerInputNodeToEncrypt({
                        targetId: i,
                        targetValue: r,
                        date: vt()
                    });
                    else {
                        var n = "number" === t.type ? "0" : "•";
                        this.triggerCallbacks({
                            type: Ce.INPUT_TEXT,
                            args: [i, csString.prototype.replace.call(r, /\S/g, n)],
                            date: vt()
                        })
                    }
                } else Wt.warn("inputTextListener: node without identifier")
            }
        }, t.prototype.keyUpListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                if (i) {
                    var r = this.keyStrokeMap[t.key];
                    void 0 !== r && this.triggerCallbacks({
                        type: Ce.KEY_UP,
                        args: [i, r],
                        date: vt()
                    })
                } else Wt.warn("keyUpListener: node without identifier")
            }
        }, t.prototype.keyDownListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                if (i) {
                    var r = this.keyStrokeMap[t.key];
                    void 0 !== r && this.triggerCallbacks({
                        type: Ce.KEY_DOWN,
                        args: [i, r],
                        date: vt()
                    })
                } else Wt.warn("keyDownListener: node without identifier")
            }
        }, t.prototype.copyListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                i ? this.triggerCallbacks({
                    type: Ce.CLIPBOARD_COMMAND,
                    args: [i, Pe.COPY],
                    date: vt()
                }) : Wt.warn("copyListener: node without identifier")
            }
        }, t.prototype.cutListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                i ? this.triggerCallbacks({
                    type: Ce.CLIPBOARD_COMMAND,
                    args: [i, Pe.CUT],
                    date: vt()
                }) : Wt.warn("cutListener: node without identifier")
            }
        }, t.prototype.pasteListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                i ? this.triggerCallbacks({
                    type: Ce.CLIPBOARD_COMMAND,
                    args: [i, Pe.PASTE],
                    date: vt()
                }) : Wt.warn("pasteListener: node without identifier")
            }
        }, t.prototype.pointerUpListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                if (i) {
                    var r = {
                        type: Ce.POINTER_UP,
                        args: [t.pointerId, t.pointerType, Me(t.clientX), Me(t.clientY), i, t.button],
                        date: vt()
                    };
                    this.triggerCallbacks(r)
                } else Wt.warn("pointerup: node without identifier")
            }
        }, t.prototype.pointerMoveListener = function(t) {
            var e = {
                type: Ce.POINTER_MOVE,
                args: [t.pointerId, t.pointerType, Me(t.clientX), Me(t.clientY)],
                date: vt()
            };
            this.triggerCallbacks(e)
        }, t.prototype.pointerDownListener = function(t) {
            var e = Oe(t);
            if (!v(e) || !this.sensitiveContentService.isSensitiveChild(e)) {
                var i = this.nodeIdentifier.getId(e);
                if (i) {
                    var r = {
                        type: Ce.POINTER_DOWN,
                        args: [t.pointerId, t.pointerType, Me(t.clientX), Me(t.clientY), i, t.button, {
                            pageX: Me(t.pageX),
                            pageY: Me(t.pageY)
                        }],
                        date: vt()
                    };
                    this.triggerCallbacks(r)
                } else Wt.warn("pointerdown: node without identifier")
            }
        }, t.prototype.touchStartListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: Ce.TOUCH_START,
                            args: [r.identifier, Me(r.clientX), Me(r.clientY)],
                            date: vt()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.touchMoveListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: Ce.TOUCH_MOVE,
                            args: [r.identifier, Me(r.clientX), Me(r.clientY)],
                            date: vt()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.touchEndListener = function(t) {
            if (t.changedTouches)
                for (var e = t.changedTouches, i = 0; i < e.length; i += 1) {
                    var r = e[i],
                        n = {
                            type: Ce.TOUCH_END,
                            args: [r.identifier, Me(r.clientX), Me(r.clientY)],
                            date: vt()
                        };
                    this.triggerCallbacks(n)
                }
        }, t.prototype.initKeyStrokesMap = function() {
            this.keyStrokeMap = {}, this.keyStrokeMap[" "] = _e.SPACE, this.keyStrokeMap.Spacebar = _e.SPACE, this.keyStrokeMap.Backspace = _e.BACKSPACE, this.keyStrokeMap.Enter = _e.ENTER, this.keyStrokeMap.Delete = _e.DELETE, this.keyStrokeMap.ArrowUp = _e.ARROWUP, this.keyStrokeMap.ArrowDown = _e.ARROWDOWN, this.keyStrokeMap.ArrowLeft = _e.ARROWLEFT, this.keyStrokeMap.ArrowRight = _e.ARROWRIGHT, this.keyStrokeMap.Up = _e.ARROWUP, this.keyStrokeMap.Down = _e.ARROWDOWN, this.keyStrokeMap.Left = _e.ARROWLEFT, this.keyStrokeMap.Right = _e.ARROWRIGHT, this.keyStrokeMap.CapsLock = _e.CAPSLOCK, this.keyStrokeMap.Shift = _e.SHIFT, this.keyStrokeMap.Tab = _e.TAB, this.keyStrokeMap.Escape = _e.ESCAPE, this.keyStrokeMap.Esc = _e.ESCAPE, this.keyStrokeMap.End = _e.END, this.keyStrokeMap.Alt = _e.ALT, this.keyStrokeMap.Control = _e.CTRL, this.keyStrokeMap.Meta = _e.META
        }, t.whiteListedTextInputSelector = csArray.prototype.join.call(["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="password"]'], ","), t.whiteListedCheckableInputsSelector = csArray.prototype.join.call(['input[type="checkbox"]', 'input[type="radio"]'], ","), t.whiteListedNumberInputsSelector = 'input[type="number"]', H([Kt("scroll")], t.prototype, "scrollListener", null), H([Kt("mouseOver"), De(), function(t, e, i) {
            var r = i.value;
            return r && (i.value = function(t) {
                if (Oe(t) === csEventtarget.apply(t)) return r.call(this, t)
            }), i
        }], t.prototype, "mouseOverListener", null), H([Kt("click"), De()], t.prototype, "clickListener", null), H([Kt("checkable")], t.prototype, "inputCheckableListener", null), H([Kt("select")], t.prototype, "inputSelectListener", null), H([Kt("text")], t.prototype, "inputTextListener", null), H([Kt("Event handler type: keyup")], t.prototype, "keyUpListener", null), H([Kt("Event handler type: keydown")], t.prototype, "keyDownListener", null), H([Kt("Event handler type: copy")], t.prototype, "copyListener", null), H([Kt("Event handler type: cut")], t.prototype, "cutListener", null), H([Kt("Event handler type: paste")], t.prototype, "pasteListener", null), H([Kt("Event handler type: pointerup"), De()], t.prototype, "pointerUpListener", null), H([Kt("Event handler type: pointermove"), De(), (e = {
            wait: 33,
            ignoreThrottledCalls: !0
        }, function(t, i, r) {
            r.value = Le(r.value, e)
        })], t.prototype, "pointerMoveListener", null), H([Kt("Event handler type: pointerdown"), De()], t.prototype, "pointerDownListener", null), H([Kt("Event handler type: touchstart"), De()], t.prototype, "touchStartListener", null), H([Kt("Event handler type: touchmove"), De()], t.prototype, "touchMoveListener", null), H([Kt("Event handler type: touchend"), De()], t.prototype, "touchEndListener", null), t
    }();

    function Ve(t) {
        for (var e = t.length, i = new csArray(e), r = 0; r < e; r += 1) i[r] = t[r];
        return i
    }

    function ze(t, e) {
        for (var i = t.length, r = 0; r < i; r++) e(t[r], r)
    }
    var qe, Ue, Be, He, Fe, Ge = function() {
            function t(t, e, i, r, n, o, s) {
                void 0 === s && (s = document);
                var a = this;
                this.mutationSerializer = t, this.mutationObserver = e, this.staticResourceUrlTracker = i, this.lifeCycleEventsEmitter = r, this.nodeIdentifier = n, this.sensitiveContentService = o, this.refDocument = s, this.onSerializationInitialDomDone = function(t) {
                    a.lifeCycleEventsEmitter.emitInitialDomDone(t)
                }, this.mutationObserver.onCharacterDataMutation((function(t) {
                    a.characterDataMutation(t)
                })), this.mutationObserver.onAttributesMutation((function(t) {
                    E(t.target) && a.sensitiveContentService.isSensitive(t.target) && "src" === t.attributeName && (a.sensitiveContentService.unidentifySensitiveNodes(t.target), a.sensitiveContentService.identifySensitiveNodes(t.target)), a.attributesMutation(t)
                })), this.mutationObserver.onChildListMutation((function(t, e) {
                    ze(t.removedNodes, (function(t) {
                        a.sensitiveContentService.unidentifySensitiveNodes(t)
                    })), ze(t.addedNodes, (function(t) {
                        a.sensitiveContentService.identifySensitiveNodes(t), a.nodeIdentifier.identifyNodes(t, e)
                    })), a.childListMutation(t, e)
                })), this.mutationObserver.onAttachShadowMutation((function(t) {
                    t.target.isConnected && null !== csElementshadowRoot.apply(t.target) && (a.sensitiveContentService.identifySensitiveNodes(t.target), a.nodeIdentifier.identifyNodes(csElementshadowRoot.apply(t.target)), a.attachShadowEvent(t))
                }))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.mutationObserver.start(), this.recordInitialDom()
            }, t.prototype.stop = function() {
                this.sensitiveContentService.unidentifySensitiveNodes(this.refDocument), this.mutationObserver.stop()
            }, t.prototype.flushEvents = function() {
                this.mutationObserver.flushPendingMutations()
            }, t.prototype.recordInitialDom = function() {
                this.lifeCycleEventsEmitter.emitInitialDomStart(), this.sensitiveContentService.identifySensitiveNodes(this.refDocument), this.nodeIdentifier.identifyNodes(this.refDocument), this.mutationSerializer.serializeInitialDom(this.refDocument, this.onSerializationInitialDomDone)
            }, t.prototype.attachShadowEvent = function(t) {
                if (!this.sensitiveContentService.isSensitive(t.target) && !this.sensitiveContentService.isSensitiveChild(t.target)) {
                    var e = this.mutationSerializer.serializeAttachShadowEvent(t);
                    e && this.onEventCallback({
                        args: e,
                        date: t.date,
                        type: Ce.ATTACH_SHADOW
                    })
                }
            }, t.prototype.attributesMutation = function(t) {
                if (!v(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target) && !this.sensitiveContentService.isSensitiveAttribute(t.target, t.attributeName)) {
                    var e = this.mutationSerializer.serializeMutationAttribute(t);
                    e && (this.onEventCallback({
                        args: e,
                        date: t.date,
                        type: Ce.MUTATION_ATTRIBUTE
                    }), this.staticResourceUrlTracker.scanAttribute(t.target, t.attributeName))
                }
            }, t.prototype.characterDataMutation = function(t) {
                var e = t.target.parentElement;
                if (!e || !this.sensitiveContentService.isSensitive(e) && !this.sensitiveContentService.isSensitiveChild(e)) {
                    var i = this.mutationSerializer.serializeMutationCharacterData(t);
                    i && (this.onEventCallback({
                        args: i,
                        date: t.date,
                        type: Ce.MUTATION_CHARACTER_DATA
                    }), this.staticResourceUrlTracker.scanText(t.target))
                }
            }, t.prototype.childListMutation = function(t, e) {
                var i = this;
                if (!v(t.target) && !w(t.target) || !this.sensitiveContentService.isSensitive(t.target) && !this.sensitiveContentService.isSensitiveChild(t.target)) {
                    var r = this.mutationSerializer.serializeMutationChildList(t, e);
                    if (r) {
                        var n = r.removedNodes,
                            o = r.addedNodes;
                        csArray.prototype.forEach.call(n, (function(e) {
                            i.onEventCallback({
                                args: e,
                                date: t.date,
                                type: Ce.MUTATION_REMOVE
                            })
                        })), csArray.prototype.forEach.call(o, (function(e) {
                            i.onEventCallback({
                                args: e,
                                date: t.date,
                                type: Ce.MUTATION_INSERT
                            })
                        }))
                    }
                }
            }, t
        }(),
        je = function() {
            function t(t) {
                this.maxStoredBytes = t, this.storageBytesUsed = 0
            }
            return t.prototype.addString = function(t) {
                this.storageBytesUsed += 2 * t.length
            }, t.prototype.addArrayBuffer = function(t) {
                this.storageBytesUsed += t.byteLength
            }, t.prototype.isThresholdReached = function() {
                return this.storageBytesUsed > this.maxStoredBytes
            }, t.prototype.reset = function() {
                this.storageBytesUsed = 0
            }, t
        }(),
        We = function() {
            function t(t, e, i) {
                void 0 === t && (t = []), void 0 === e && (e = {}), void 0 === i && (i = 512e3), this.events = t, this.requestParameters = e, this.sizeCounter = new je(i)
            }
            return t.prototype.addEvent = function(t) {
                this.sizeCounter.addString(ot(t)), csArray.prototype.push.call(this.events, t)
            }, t.prototype.addEventByTimestamp = function(t) {
                for (var e = 0; e < this.events.length; e += 1) {
                    if (this.events[e].date > t.date) return this.sizeCounter.addString(ot(t)), void csArray.prototype.splice.call(this.events, e, 0, t)
                }
                this.addEvent(t)
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.sizeCounter.reset(), this.events = []
            }, t.prototype.isFull = function() {
                return this.eventsCount() >= 200
            }, t.prototype.isThresholdReached = function() {
                return this.sizeCounter.isThresholdReached()
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.removeRequestParameter = function(t) {
                this.requestParameters.hasOwnProperty(t) && delete this.requestParameters[t]
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.extractEvents = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = [],
                    r = [];
                return csArray.prototype.forEach.call(this.events, (function(e) {
                    -1 !== csArray.prototype.indexOf.call(t, e.type) ? csArray.prototype.push.call(i, e) : csArray.prototype.push.call(r, e)
                })), this.events = r, i
            }, t.prototype.getRequestPayload = function() {
                return ot(this.events)
            }, t.prototype.getRequestParameters = function() {
                var t = B({}, this.requestParameters);
                return this.events.length > 0 && (t.let = this.events[this.events.length - 1].date.toString()), t
            }, t
        }(),
        Ke = function() {
            function t() {
                this.index = 1
            }
            return t.prototype.getCurrentIndex = function() {
                return this.index
            }, t.prototype.increment = function() {
                this.index += 1
            }, t.prototype.reset = function() {
                this.index = 1
            }, t.prototype.getRequestParameters = function() {
                return {
                    ri: "".concat(this.index)
                }
            }, t
        }(),
        Ye = function() {
            function t() {}
            return t.prototype.emit = function(e, i) {
                var r = "".concat(t.prefix, ".").concat(e),
                    n = t.createEvent(r, {
                        detail: i
                    });
                null !== n && document.dispatchEvent(n)
            }, t.createEvent = function(t, e) {
                if (void 0 === e && (e = {}), "function" == typeof CustomEvent) return new CustomEvent(t, e);
                var i = this.tryToCreateCustomEvent();
                if (null === i) return null;
                var r = e.bubbles,
                    n = void 0 !== r && r,
                    o = e.cancelable,
                    s = void 0 !== o && o,
                    a = e.detail;
                return i.initCustomEvent(t, n, s, a), i
            }, t.tryToCreateCustomEvent = function() {
                try {
                    return document.createEvent("CustomEvent")
                } catch (t) {
                    return null
                }
            }, t.prefix = "cs.tracking", t
        }(),
        Xe = function() {
            function t() {
                this.isStarted = !1
            }
            return t.prototype.start = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isStarted || (this.isStarted = !0, this.onStart.apply(this, t))
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.onStop())
            }, t.prototype.restart = function() {
                this.stop(), this.start()
            }, t
        }(),
        Qe = function(t) {
            function e(e, i, r, n, o, s, a, c, u, l, h, p, d, f, y, v, g, m, S, E, b, C, w) {
                var T = t.call(this) || this;
                return T.configuration = e, T.recordingRequest = i, T.recordingBatch = r, T.requestParameters = n, T.requestIndex = o, T.styleSheetRuleTracker = s, T.recordingMutationsTracker = a, T.recordingPageEventsTracker = c, T.recordingBrowserEventsTracker = u, T.recordingGesturesTracker = l, T.sessionRenewer = h, T.sessionService = p, T.staticResourceUrlTracker = d, T.recordingPerformanceTimingsTracker = f, T.javaScriptErrorsTracker = y, T.javaScriptErrorsAnonymizer = v, T.apiErrorsTracker = g, T.textVisibilityTracker = m, T.apiErrorsAnonymizer = S, T.encryptionService = E, T.recoveryService = b, T.customElementRegistrationTracker = C, T.adoptedStylesheetsTracker = w, T.javaScriptErrorsCount = 0, T.apiErrorsCount = 0, T.customErrorsCount = 0, T.eventEmitter = new Ye, T.canSendEventsFlags = {
                    allowFromQuotaService: !0,
                    allowFromSerialization: !0
                }, T.throttledPushEvents = Le((function() {
                    T.pushEvents()
                }), 2e3), T.onBrowserEvent = function(t) {
                    return T.processBrowserEvent(t)
                }, T.onUserEvent = function(t) {
                    return T.processUserEvent(t)
                }, T
            }
            return U(e, t), e.prototype.init = function() {
                this.bindRecordingRequest(), this.bindTrackers()
            }, e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRequest.setRequestPayloadProvider(this.recordingBatch), this.recordingRequest.setRequestParametersProviders(this.recordingBatch), this.recordingRequest.afterProvidersCalled((function() {
                    t.recoveryService.addBatchInProgress("".concat(t.requestIndex.getCurrentIndex()), t.recordingBatch.getRequestParameters(), t.recordingBatch.getEvents()), t.recordingBatch.clearEvents(), t.requestIndex.increment(), t.recordingBatch.setRequestParametersFromProvider(t.requestParameters)
                })), this.recordingRequest.after((function(e) {
                    "ri" in e && t.recoveryService.removeBatchInProgress(e.ri)
                })), this.recordingRequest.onError((function(e, i) {
                    t.recoveryService.saveFailedRecordingEvents(e, i)
                })), this.recordingRequest.onLoad((function(e) {
                    e.status >= 200 && e.status <= 299 ? t.recoveryService.recover() : Wt.warn("recording request failed:".concat(e.status))
                }))
            }, e.prototype.bindTrackers = function() {
                var t = this;
                this.styleSheetRuleTracker.onEvent(this.onBrowserEvent), this.recordingMutationsTracker.onEvent(this.onBrowserEvent), this.recordingBrowserEventsTracker.onEvent(this.onBrowserEvent), this.recordingPageEventsTracker.onEvent(this.onUserEvent), this.staticResourceUrlTracker.onEvent(this.onBrowserEvent), this.recordingPerformanceTimingsTracker.onEvent(this.onBrowserEvent), this.textVisibilityTracker.onEvent(this.onBrowserEvent), this.recordingGesturesTracker.onEvent(this.onUserEvent), this.encryptionService.onTextNodeToEncrypt(this.onBrowserEvent), this.encryptionService.onApiErrorToEncrypt((function(e) {
                    t.processApiError(e)
                })), this.adoptedStylesheetsTracker.onEvent(this.onBrowserEvent), this.encryptionService.onUserIdentifierToEncrypt(this.onBrowserEvent), this.customElementRegistrationTracker.onEvent(this.onBrowserEvent)
            }, e.prototype.blockSendingEventsFromQuotaService = function() {
                this.canSendEventsFlags.allowFromQuotaService = !1
            }, e.prototype.allowSendingEventsFromQuotaService = function() {
                this.canSendEventsFlags.allowFromQuotaService = !0
            }, e.prototype.blockSendingEventsFromSerialization = function() {
                this.canSendEventsFlags.allowFromSerialization = !1
            }, e.prototype.allowSendingEventsFromSerialization = function() {
                this.canSendEventsFlags.allowFromSerialization = !0
            }, e.prototype.canSendEvents = function() {
                return this.canSendEventsFlags.allowFromQuotaService && this.canSendEventsFlags.allowFromSerialization
            }, e.prototype.processBrowserEvent = function(t) {
                this.sessionService.hasValidSession() && this.processEvent(t)
            }, e.prototype.processUserEvent = function(t) {
                this.sessionRenewer.isSessionValid() && this.processEvent(t)
            }, e.prototype.processEvent = function(t) {
                this.recordingBatch.addEvent(t), this.recordingBatch.isThresholdReached() ? this.pushEvents() : this.recordingBatch.isFull() && this.throttledPushEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("recordingEvent", B(B({}, t), {
                    typeName: Ce[t.type]
                }))
            }, e.prototype.onStart = function() {
                var t = this;
                this.initStates(), this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        return {
                            rst: vt().toString()
                        }
                    }
                }), this.customElementRegistrationTracker.start(), this.textVisibilityTracker.start(), this.recordingPerformanceTimingsTracker.start(), this.recordingMutationsTracker.start(), this.styleSheetRuleTracker.start(), this.recordingBrowserEventsTracker.start(), this.recordingGesturesTracker.start(), this.adoptedStylesheetsTracker.start(), this.configuration.jsErrorsEnabled && this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processJavascriptError(e)
                })), this.configuration.apiErrors.enabled && this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.encryptApiError(e)
                }), {
                    detailedEvent: !0
                }), this.configuration.emitDebugEvents && this.eventEmitter.emit("replayRecordingStarted")
            }, e.prototype.onStop = function() {
                this.styleSheetRuleTracker.stop(), this.recordingMutationsTracker.stop(), this.recordingBrowserEventsTracker.stop(), this.recordingPageEventsTracker.stop(), this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER), this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER), this.textVisibilityTracker.stop(), this.recordingGesturesTracker.stop(), this.customElementRegistrationTracker.stop(), this.adoptedStylesheetsTracker.stop()
            }, e.prototype.clearStates = function() {
                this.recordingMutationsTracker.flushEvents(), this.throttledPushEvents.cancel(), this.pushEvents(), this.removeEtrRequestParameters()
            }, e.prototype.initStates = function() {
                this.requestIndex.reset(), this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.javaScriptErrorsCount = 0, this.apiErrorsCount = 0, this.customErrorsCount = 0
            }, e.prototype.pushEvents = function() {
                this.textVisibilityTracker.flushEvents(), this.recordingBatch.eventsCount() > 0 && this.canSendEvents() && (this.isStarted ? this.recordingRequest.send() : this.recordingBatch.clearEvents())
            }, e.prototype.addInitialDom = function(t) {
                this.recordingBatch.addEventByTimestamp(t)
            }, e.prototype.encryptApiError = function(t) {
                t.customRequestHeaders || t.customResponseHeaders || t.queryParameters || t.requestBody || t.responseBody ? this.encryptionService.registerApiErrorToEncrypt(t) : this.processApiError(t)
            }, e.prototype.processApiError = function(t) {
                if (this.apiErrorsCount < e.MAX_API_ERROR_COUNT) {
                    var i = {
                        type: Ce.API_ERROR,
                        date: vt(),
                        args: [this.apiErrorsAnonymizer.anonymize(t)]
                    };
                    this.onBrowserEvent(i), this.apiErrorsCount = this.apiErrorsCount + 1
                }
            }, e.prototype.processJavascriptError = function(t) {
                if (this.javaScriptErrorsCount < e.MAX_JAVASCRIPT_ERROR_COUNT) {
                    var i = {
                        type: Ce.JAVASCRIPT_ERROR,
                        date: vt(),
                        args: [this.javaScriptErrorsAnonymizer.anonymize(t)]
                    };
                    this.onBrowserEvent(i), this.javaScriptErrorsCount = this.javaScriptErrorsCount + 1
                }
            }, e.prototype.processCustomError = function(t) {
                if (this.customErrorsCount < e.MAX_CUSTOM_ERROR_COUNT) {
                    var i = {
                        type: Ce.CUSTOM_ERROR,
                        date: vt(),
                        args: [t]
                    };
                    this.onBrowserEvent(i), this.customErrorsCount = this.customErrorsCount + 1
                }
            }, e.prototype.setEtrRequestParameters = function(t) {
                this.isStarted && (t === ee.ETR_SESSION ? this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRS_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }) : t === ee.ETR_PAGE && this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRP_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }))
            }, e.prototype.removeEtrRequestParameters = function() {
                this.recordingBatch.removeRequestParameter(e.ETRP_PARAMETER), this.recordingBatch.removeRequestParameter(e.ETRS_PARAMETER)
            }, e.prototype.clearEvents = function() {
                this.recordingBatch.clearEvents()
            }, e.prototype.onCustomJavaScriptErrorEvent = function(t) {
                this.processJavascriptError(t)
            }, e.prototype.onCustomErrorEvent = function(t) {
                this.processCustomError(t)
            }, e.prototype.onPageEvent = function(t) {
                this.processPageEvent(t)
            }, e.prototype.onUserIdentifierEvent = function(t) {
                var e = {
                    userIdentifier: t,
                    date: vt(),
                    keyId: this.configuration.encryptionPublicKeyId
                };
                this.encryptionService.registerUserIdentifierToEncrypt(e)
            }, e.prototype.onEventTriggerRecording = function(t, e) {
                this.setEtrRequestParameters(e), this.processPageEvent(t), this.pushEvents()
            }, e.prototype.processPageEvent = function(t) {
                var i = {
                    type: Ce.PAGE_EVENT,
                    date: vt(),
                    args: [{
                        eventName: csString.prototype.slice.call(t, 0, e.MAX_PAGE_EVENT_LENGTH)
                    }]
                };
                this.recordingBatch.addEvent(i)
            }, e.prototype.triggerConsentGranted = function() {
                var t = {
                    date: vt(),
                    type: Ce.CONSENT_GRANTED
                };
                this.recordingBatch.addEvent(t)
            }, e.prototype.triggerConsentWithdrawn = function() {
                var t = {
                    date: vt(),
                    type: Ce.CONSENT_WITHDRAWN
                };
                this.recordingBatch.addEvent(t)
            }, e.SERVICE_IDENTIFIER = "RecordingService", e.MAX_PAGE_EVENT_LENGTH = 255, e.MAX_JAVASCRIPT_ERROR_COUNT = 20, e.MAX_API_ERROR_COUNT = 20, e.MAX_CUSTOM_ERROR_COUNT = 20, e.ETRP_PARAMETER = "etrp", e.ETRS_PARAMETER = "etrs", e.ETR_ACTIVE = "1", e
        }(Xe),
        Je = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingRecoveryRequest = e, s.recordingBatch = i, s.recoveryStorage = r, s.configuration = n, s.lastMessageBeaconRequest = o, s.batchesInProgress = {}, s.lastMessageAllowed = !1, s.handleRecoveredRecordings = function(t) {
                    if (0 !== t.length)
                        for (var e = function(t) {
                                var e = t.metadata,
                                    i = t.events,
                                    r = e.datatype;
                                if (!s.hasValidRecordingType(e.rt)) return "continue";
                                s.recordingRecoveryRequest.setRequestPayloadProvider({
                                    getRequestPayload: function() {
                                        return i
                                    }
                                }), delete e.datatype, s.recordingRecoveryRequest.setRequestParametersProviders({
                                    getRequestParameters: function() {
                                        return e
                                    }
                                });
                                var n = "json" === r;
                                s.recordingRecoveryRequest.send(n)
                            }, i = 0, r = t; i < r.length; i++) {
                            e(r[i])
                        }
                }, s.pageChangeHandler = function() {
                    try {
                        if (!s.lastMessageAllowed) return;
                        s.saveBatchesInProgress();
                        var t = s.recordingBatch.getRequestParameters();
                        if (!s.hasValidRecordingType(t.rt)) return;
                        if (s.sendLastMessageBeacon(), 0 === s.recordingBatch.eventsCount()) return;
                        s.configuration.useMalkaPipeline && (t.hlm = "true"), s.recoveryStorage.save({
                            key: "".concat(t.sn, ".").concat(t.pn, ".").concat(t.ri, ".last"),
                            metadata: B(B({}, t), {
                                datatype: "json"
                            }),
                            events: s.recordingBatch.getRequestPayload()
                        })
                    } catch (t) {}
                }, s.bindRecordingRequest(), s.datatype = s.recordingRecoveryRequest.getCompressionOutputType(), s
            }
            return U(e, t), e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRecoveryRequest.onLoad((function(e) {
                    e.status >= 200 && e.status <= 299 ? t.recover() : Wt.warn("recording request failed:".concat(e.status))
                })), this.recordingRecoveryRequest.onError((function(e, i) {
                    t.saveFailedRecordingEvents(e, i)
                }))
            }, e.prototype.onStart = function() {
                this.batchesInProgress = {}, this.addPageChangeListener()
            }, e.prototype.onStop = function() {
                this.removePageChangeListener()
            }, e.prototype.recover = function() {
                this.recoveryStorage.recover(this.handleRecoveredRecordings)
            }, e.prototype.addBatchInProgress = function(t, e, i) {
                this.batchesInProgress[t] = {
                    metadata: e,
                    events: i
                }
            }, e.prototype.removeBatchInProgress = function(t) {
                delete this.batchesInProgress[t]
            }, e.prototype.blockSendingLastMessage = function() {
                this.lastMessageAllowed = !1
            }, e.prototype.allowSendingLastMessage = function() {
                this.lastMessageAllowed = !0
            }, e.prototype.sendLastMessageBeacon = function() {
                this.configuration.useMalkaPipeline && this.lastMessageAllowed && this.lastMessageBeaconRequest.send()
            }, e.prototype.addPageChangeListener = function() {
                window.addEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.removePageChangeListener = function() {
                window.removeEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.hasValidRecordingType = function(t) {
                return !this.configuration.useMalkaPipeline || !!t && -1 === csString.prototype.indexOf.call(t, $t.TEMPORARILY_RECORDED)
            }, e.prototype.saveFailedRecordingEvents = function(t, e) {
                this.recoveryStorage.save({
                    key: "".concat(t.sn, ".").concat(t.pn, ".").concat(t.ri),
                    metadata: B(B({}, t), {
                        datatype: this.datatype
                    }),
                    events: e
                })
            }, e.prototype.saveBatchesInProgress = function() {
                var t = this;
                csArray.prototype.forEach.call(Object.keys(this.batchesInProgress), (function(e) {
                    var i = t.batchesInProgress[e],
                        r = i.metadata,
                        n = i.events;
                    t.recoveryStorage.save({
                        key: "".concat(r.sn, ".").concat(r.pn, ".").concat(r.ri),
                        metadata: B(B({}, r), {
                            datatype: "json"
                        }),
                        events: csJSON.stringify(n)
                    })
                }))
            }, H([Kt("RecordingRecovery")], e.prototype, "recover", null), e
        }(Xe),
        Ze = /[^\s]/g;

    function $e(t) {
        return csString.prototype.replace.call(t, Ze, "a")
    }(Ue = qe || (qe = {})).getShadowRoot = function(t) {
            return t && v(e = t) && csElementshadowRoot.apply(e) && R(csElementshadowRoot.apply(e)) ? t.shadowRoot : null;
            var e
        }, Ue.getAllShadowHosts = function t(e) {
            for (var i, r, n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, null, !1), o = []; r = n.nextNode();) csElementshadowRoot.apply(r) && (i = csArray.prototype.push).call.apply(i, W([o, r], t(r.shadowRoot), !1));
            return o
        },
        function(t) {
            function e() {
                var t = [r()];
                return document.documentElement && csArray.prototype.push.call(t, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && csArray.prototype.push.call(t, document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, t)
            }

            function i() {
                return document.documentElement.scrollWidth
            }

            function r() {
                return window.innerHeight
            }

            function n() {
                return window.innerWidth
            }

            function o() {
                var t = window.csScreen.width;
                return Dt(t) && t > 0 ? t : window.screen.width
            }

            function s() {
                var t = window.csScreen.height;
                return Dt(t) && t > 0 ? t : window.screen.height
            }
            t.documentHeight = e, t.documentWidth = i, t.windowHeight = r, t.windowWidth = n, t.screenWidth = o, t.screenHeight = s, t.windowOffsetX = function() {
                return window.pageXOffset
            }, t.windowOffsetY = function() {
                return window.pageYOffset
            }, t.getRequestParameters = function() {
                return {
                    dw: "".concat(i()),
                    dh: "".concat(e()),
                    ww: "".concat(n()),
                    wh: "".concat(r()),
                    sw: "".concat(o()),
                    sh: "".concat(s())
                }
            }
        }(Be || (Be = {})),
        function(t) {
            function e(t) {
                var e;
                return t.parentElement ? t.parentElement : t.getRootNode ? null === (e = t.getRootNode()) || void 0 === e ? void 0 : e.host : null
            }

            function i(t) {
                var e, i = window.getComputedStyle(t);
                return "none" === i.display || "hidden" === i.visibility || "collapse" === i.visibility || "0" === i.opacity || "opacity(0)" === i.filter || "0px" === i.width && "0px" === i.height || (e = i.color, /^rgba\(\d+, \d+, \d+, 0\)$/.test(e))
            }

            function r(t) {
                var e = t.getBoundingClientRect(),
                    i = e.left + .5 * e.width,
                    r = e.top + .5 * e.height;
                return n(document, i, r)
            }

            function n(t, e, i) {
                var r = t.elementFromPoint(e, i);
                if (!r) return null;
                var o = qe.getShadowRoot(r);
                return o && o != document.body.getRootNode() && o !== t ? n(o, e, i) : r
            }
            t.isEmpty = function(t) {
                for (var e = t.data, i = e.length, r = 0; r < i; r++) switch (csString.prototype.charCodeAt.call(e, r)) {
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 32:
                    case 160:
                        continue;
                    default:
                        return !1
                }
                return !0
            }, t.getParentElement = e, t.findAllElements = function(t, e) {
                var i;
                void 0 === e && (e = document);
                for (var r = Ve(e.querySelectorAll(t)), n = 0, o = qe.getAllShadowHosts(e); n < o.length; n++) {
                    var s = Ve(o[n].shadowRoot.querySelectorAll(t));
                    (i = csArray.prototype.push).call.apply(i, W([r], s, !1))
                }
                return r
            }, t.isHiddenByCSS = i, t.areAncestorsHiddenByCSS = function t(r) {
                if (i(r)) return !0;
                var n = e(r);
                return null != n && t(n)
            }, t.getTopAncestorHiddenByCSS = function(t) {
                var r = null,
                    n = t;
                do {
                    i(n) && (r = n)
                } while (n = e(n));
                return r
            }, t.createDeepTreeWalker = function(t, e) {
                var i;
                void 0 === e && (e = NodeFilter.SHOW_ALL);
                var r = e | NodeFilter.SHOW_ELEMENT,
                    n = [document.createTreeWalker(t, r, null, !1)];
                return t instanceof Element && (null === (i = csElementshadowRoot.apply(t)) || void 0 === i ? void 0 : i.firstElementChild) && csArray.prototype.push.call(n, document.createTreeWalker(csElementshadowRoot.apply(t), r, null, !1)), {
                    nextNode: function() {
                        for (; n.length > 0;) {
                            var t = n[n.length - 1].nextNode();
                            if (t) {
                                var i = qe.getShadowRoot(t);
                                if (i && csArray.prototype.push.call(n, document.createTreeWalker(i, r, null, !1)), 0 != (ei[t.nodeType] & e)) return t
                            } else csArray.prototype.pop.call(n)
                        }
                        return null
                    }
                }
            }, t.getTopElement = r, t.getTopElementFromPoint = n, t.isVisibleInDocument = function(t) {
                return ! function(t) {
                    var e = t.getBoundingClientRect();
                    return e.right + Be.windowOffsetX() < 0 || e.bottom + Be.windowOffsetY() < 0
                }(t) && !i(t) && ! function(t) {
                    var e = r(t);
                    return null !== e && !t.contains(e)
                }(t)
            }, t.isVisibleInViewportInForeground = function(t) {
                if (i(t)) return !1;
                var e = r(t);
                return t.contains(e)
            }, t.isInViewPort = function(t) {
                var e = r(t);
                return null !== e && (t === e || t.contains(e))
            }, t.getAttributeNS = function(t, e, i) {
                var r = t.getAttributeNS(e, i);
                return "" === r ? t.hasAttributeNS(e, i) ? r : null : r
            }
        }(Fe || (Fe = {}));
    var ti, ei = ((He = {})[Node.ATTRIBUTE_NODE] = NodeFilter.SHOW_ATTRIBUTE, He[Node.CDATA_SECTION_NODE] = NodeFilter.SHOW_CDATA_SECTION, He[Node.COMMENT_NODE] = NodeFilter.SHOW_COMMENT, He[Node.DOCUMENT_FRAGMENT_NODE] = NodeFilter.SHOW_DOCUMENT_FRAGMENT, He[Node.DOCUMENT_NODE] = NodeFilter.SHOW_ALL, He[Node.DOCUMENT_TYPE_NODE] = NodeFilter.SHOW_DOCUMENT_TYPE, He[Node.ELEMENT_NODE] = NodeFilter.SHOW_ELEMENT, He[Node.ENTITY_NODE] = NodeFilter.SHOW_ENTITY, He[Node.ENTITY_REFERENCE_NODE] = NodeFilter.SHOW_ENTITY_REFERENCE, He[Node.NOTATION_NODE] = NodeFilter.SHOW_NOTATION, He[Node.PROCESSING_INSTRUCTION_NODE] = NodeFilter.SHOW_PROCESSING_INSTRUCTION, He[Node.TEXT_NODE] = NodeFilter.SHOW_TEXT, He),
        ii = function() {
            function t(t, e, i, r, n, o, s) {
                this.consentService = t, this.domSerializer = e, this.nodeIdentifier = i, this.anonymization = r, this.encryptionService = n, this.configuration = o, this.urlService = s, this.domSerializationInProgress = !1
            }
            return t.prototype.init = function() {
                this.resetAnonymization()
            }, t.prototype.isDOMSerializationInProgress = function() {
                return this.domSerializationInProgress
            }, t.prototype.serializeInitialDom = function(t, e) {
                if (this.domSerializer.isAsynchronous()) this.serializeDocumentAsync(t).then((function(t) {
                    t && e(t)
                })).catch((function(t) {
                    Wt.error(t)
                }));
                else {
                    var i = this.serializeDocumentSync(t);
                    e(i)
                }
            }, t.prototype.serializeDocumentSync = function(t) {
                return {
                    args: [this.domSerializer.serialize(t, {
                        withAnonymization: this.useAnonymization
                    })],
                    date: vt(),
                    type: Ce.INITIAL_DOM
                }
            }, t.prototype.serializeDocumentAsync = function(t) {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                this.domSerializationInProgress = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, , 3, 4]), [4, this.domSerializer.startSerializeAsync(t, {
                                    withAnonymization: this.useAnonymization
                                })];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return this.domSerializationInProgress = !1, [7];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.serializeMutationCharacterData = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                if (!e) return Wt.warn("serializeMutationCharacterData: node without identifier"), null;
                var i = t.target;
                if (i.data === t.oldValue) return null;
                var r = t.target.parentElement;
                if (g(i) && (null == r ? void 0 : r.hasAttribute("data-cs-encrypt"))) return this.encryptionService.registerTextNodeMutationToEncrypt({
                    targetId: e,
                    textNode: i,
                    serializedTextData: $e(i.data),
                    date: t.date
                }), null;
                var n = [e, this.anonymization.getAnonymizedText(this.useAnonymization, i, i.data)];
                return this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() && this.domSerializer.handleMutationCharacterData(t, n), n
            }, t.prototype.serializeAttachShadowEvent = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                return e ? [e, this.domSerializer.serialize(t.shadowRoot)] : (Wt.warn("serializeAttachShadowEvent: node without identifier"), null)
            }, t.prototype.serializeMutationAttribute = function(t) {
                var e = this.nodeIdentifier.getId(t.target);
                if (!e) return null;
                var i = t.target,
                    r = t.attributeName,
                    n = t.attributeNamespace,
                    o = Fe.getAttributeNS(t.target, n, r);
                o && (o = this.anonymization.getAnonymizedAttributeValue(i, this.useAnonymization, r, o));
                var s = [e, n, r, o];
                return this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() && this.domSerializer.handleMutationAttribute(t.oldValue ? this.anonymization.getAnonymizedAttributeValue(i, this.useAnonymization, r, t.oldValue) : t.oldValue, s), s
            }, t.prototype.serializeMutationChildList = function(t, e) {
                var i = this.nodeIdentifier.getId(t.target);
                return i ? this.isAsyncSerialization(this.domSerializer) && this.isDOMSerializationInProgress() ? this.domSerializer.serializeMutationChildList(t, this.useAnonymization, e) : {
                    removedNodes: this.serializeRemovedNodes(t),
                    addedNodes: this.serializeAddedNodes(t, i, e)
                } : null
            }, t.prototype.isAsyncSerialization = function(t) {
                return t.isAsynchronous()
            }, t.prototype.serializeRemovedNodes = function(t) {
                for (var e = [], i = 0; i < t.removedNodes.length; i += 1) {
                    var r = this.nodeIdentifier.getId(t.removedNodes[i]);
                    r && csArray.prototype.push.call(e, [r])
                }
                return e
            }, t.prototype.serializeAddedNodes = function(t, e, i) {
                var r = [],
                    n = null;
                if (t.nextSibling) {
                    var o = this.nodeIdentifier.getId(t.nextSibling);
                    n = void 0 !== o ? o : null
                }
                for (var s = 0; s < t.addedNodes.length; s += 1) {
                    var a = t.addedNodes[s],
                        c = this.domSerializer.serialize(a, {
                            excludedNodes: i,
                            withAnonymization: this.useAnonymization
                        }),
                        u = i.get(a);
                    u && i.set(a, u - 1), csArray.prototype.push.call(r, [e, n, c])
                }
                return r
            }, t.prototype.resetAnonymization = function() {
                this.useAnonymization = !this.consentService.isAllowedByConsent(), this.useAnonymization ? this.configuration.replayRecordingUnmaskedUrlRegex && this.configuration.replayRecordingUnmaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !1) : this.configuration.replayRecordingMaskedUrlRegex && this.configuration.replayRecordingMaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !0)
            }, t
        }(),
        ri = function() {
            function t(t, e, i, r) {
                var n = this;
                this.monkeyPatcher = t, this.nodeIdentifier = e, this.sensitiveContentService = i, this.staticResourceUrlTracker = r, this.canTrackRuleInsertions() && (this.insertRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "insertRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return n.sendInsertion(e, i)
                    }
                })), this.canTrackRuleDeletions() && (this.deleteRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "deleteRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return n.sendDeletion(e, i)
                    }
                })), this.canTrackStyleDeclarationChanges() && (this.cssTextInterceptor = this.monkeyPatcher.createDescriptorInterceptor(window.CSSStyleDeclaration.prototype, "cssText", (function(t, e) {
                    return n.setStyleDeclarationCssText(t, e)
                })))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.activate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.activate(), this.cssTextInterceptor && this.cssTextInterceptor.activate()
            }, t.prototype.stop = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.deactivate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.deactivate(), this.cssTextInterceptor && this.cssTextInterceptor.deactivate()
            }, t.prototype.setStyleDeclarationCssText = function(t, e) {
                var i = this.getSyleSheet(t);
                if ((null == i ? void 0 : i.ownerNode) && (!Bt(i.ownerNode) || !this.sensitiveContentService.isSensitiveChild(i.ownerNode))) {
                    var r = this.nodeIdentifier.getId(i.ownerNode);
                    if (r) {
                        var n = this.indexOfRule(i.cssRules, t.parentRule);
                        this.onEventCallback({
                            date: vt(),
                            type: Ce.STYLESHEET_CSS_TEXT_UPDATE,
                            args: [r, n, e]
                        }), this.staticResourceUrlTracker.scanCssString(e)
                    }
                }
            }, t.prototype.getSyleSheet = function(t) {
                var e = t.parentRule;
                return e && e.parentStyleSheet
            }, t.prototype.indexOfRule = function(t, e) {
                return csArray.prototype.indexOf.call(csArray.from(t), e)
            }, t.prototype.canTrackRuleInsertions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.insertRule)
            }, t.prototype.canTrackRuleDeletions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.deleteRule)
            }, t.prototype.canTrackStyleDeclarationChanges = function() {
                return window.CSSStyleDeclaration && window.CSSStyleDeclaration.prototype && Object.getOwnPropertyDescriptor(window.CSSStyleDeclaration.prototype, "cssText")
            }, t.prototype.sendInsertion = function(t, e) {
                var i = e[0],
                    r = e[1];
                if (t.ownerNode && (!Bt(t.ownerNode) || !this.sensitiveContentService.isSensitiveChild(t.ownerNode))) {
                    var n = this.nodeIdentifier.getId(t.ownerNode);
                    n && (this.onEventCallback({
                        date: vt(),
                        type: Ce.STYLESHEET_RULE_INSERT,
                        args: zt(r) ? [n, i, r] : [n, i]
                    }), this.staticResourceUrlTracker.scanCssString(i))
                }
            }, t.prototype.sendDeletion = function(t, e) {
                var i = e[0];
                if (t.ownerNode && (!Bt(t.ownerNode) || !this.sensitiveContentService.isSensitiveChild(t.ownerNode))) {
                    var r = this.nodeIdentifier.getId(t.ownerNode);
                    r && this.onEventCallback({
                        date: vt(),
                        type: Ce.STYLESHEET_RULE_DELETE,
                        args: [r, i]
                    })
                }
            }, H([Kt("styleSheetRuleTracker.setStyleDeclarationCssText")], t.prototype, "setStyleDeclarationCssText", null), H([Kt("styleSheetRuleTracker.sendInsertion")], t.prototype, "sendInsertion", null), H([Kt("styleSheetRuleTracker.sendDeletion")], t.prototype, "sendDeletion", null), t
        }(),
        ni = function() {
            function t() {
                this.documentIdentifiedHandlers = [], this.currentCsId = 1
            }
            return t.prototype.identifyNodes = function(t, e) {
                for (var i = [document.createTreeWalker(t, NodeFilter.SHOW_ALL, null, !1)], r = !1; i.length > 0;)
                    for (var n = csArray.prototype.pop.call(i), o = n.root; null !== o;)
                        if (r && e && e.get(o) > 0) {
                            for (var s = n.nextSibling(); null === s && null !== n.parentNode();) s = n.nextSibling();
                            o = s
                        } else o.__contentsquare_identifier = this.currentCsId, this.currentCsId += 1, v(o) && csElementshadowRoot.apply(o) ? csArray.prototype.push.call(i, document.createTreeWalker(csElementshadowRoot.apply(o), NodeFilter.SHOW_ALL, null, !1)) : w(o) && this.notifySubscribers(o), o = n.nextNode(), r = !0
            }, t.prototype.getId = function(t) {
                return t.__contentsquare_identifier
            }, t.getId = function(t) {
                return t.__contentsquare_identifier
            }, t.prototype.getIds = function(t) {
                for (var e, i = new Set, r = document.createNodeIterator(t, NodeFilter.SHOW_ALL, null, !1); e = r.nextNode();) {
                    var n = e.__contentsquare_identifier;
                    if (n && i.add(n), v(e) && csElementshadowRoot.apply(e)) {
                        var o = csElementshadowRoot.apply(e);
                        this.getIds(o).forEach((function(t) {
                            return i.add(t)
                        }))
                    }
                }
                return i
            }, t.prototype.onDocumentIdentified = function(t) {
                csArray.prototype.push.call(this.documentIdentifiedHandlers, t)
            }, t.prototype.notifySubscribers = function(t) {
                for (var e = 0, i = this.documentIdentifiedHandlers; e < i.length; e++) {
                    (0, i[e])(t)
                }
            }, t
        }(),
        oi = function() {
            function t(t) {
                this.sensitiveContentService = t
            }
            return t.prototype.beforeSerializeChildren = function(t, e) {
                return this.isSensitiveElementNode(t) || this.hasSensitiveShadowHost(t) ? [] : e
            }, t.prototype.beforeSerializeAttributes = function(t, e) {
                var i = this;
                return this.isSensitiveElementNode(t) && !C(t) && (csArray.prototype.push.call(e, this.createSensitiveElementDimensionsAttribute(t)), t.hasAttribute("data-cs-mask") || csArray.prototype.push.call(e, document.createAttribute("data-cs-mask"))), csArray.prototype.filter.call(e, (function(e) {
                    return !i.sensitiveContentService.isSensitiveAttribute(t, e.name)
                }))
            }, t.prototype.isSensitiveElementNode = function(t) {
                return v(t) && this.sensitiveContentService.isSensitive(t)
            }, t.prototype.hasSensitiveShadowHost = function(t) {
                return R(t) && this.sensitiveContentService.isSensitive(t.host)
            }, t.prototype.createSensitiveElementDimensionsAttribute = function(t) {
                var e = t.getBoundingClientRect(),
                    i = document.createAttribute("style");
                return i.value = "width: ".concat(e.width, "px !important; height: ").concat(e.height, "px !important;"), i
            }, t
        }(),
        si = ["id", "class", "style", "src", "srcset", "sizes", "href", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "data-cs-override-id"],
        ai = function() {
            function t(t, e) {
                this.pii = t, this.configuration = e, this.allWhitelistedAttributes = []
            }
            return t.prototype.init = function() {
                this.allWhitelistedAttributes = W(W([], si, !0), this.configuration.whitelistedAttributes, !0)
            }, t.prototype.beforeSerializeChildren = function(t, e, i) {
                return (b(t) || this.isWhitelistedElement(t)) && (i.withAnonymization = !1), e
            }, t.prototype.serializeNode = function(t, e, i) {
                return e.anonymized = i.withAnonymization, e
            }, t.prototype.serializeAttribute = function(t, e, i, r) {
                i.anonymized = r.withAnonymization;
                var n = this.getAnonymizedAttributeValue(t, r.withAnonymization, i.name, i.value);
                return i.value = n, i
            }, t.prototype.serializeTextNode = function(t, e, i) {
                return e.data = this.getAnonymizedText(i.withAnonymization, t, e.data), e
            }, t.prototype.serializeCDATASectionNode = function(t, e, i) {
                var r = t.data;
                return e.data = i.withAnonymization ? $e(r) : this.pii.anonymize(r), e
            }, t.prototype.getAnonymizedText = function(t, e, i) {
                if (csNodeparentNode.apply(e)) {
                    if (b(csNodeparentNode.apply(e))) return i;
                    if (this.isWhitelistedElement(csNodeparentNode.apply(e))) return this.pii.anonymize(i)
                }
                return t ? $e(i) : this.pii.anonymize(i)
            }, t.prototype.getAnonymizedAttributeValue = function(t, e, i, r) {
                return this.isWhitelistedAttribute(i) || v(n = t) && "ownerSVGElement" in n ? r : e ? "" : this.pii.anonymize(r);
                var n
            }, t.prototype.setWhitelistedElementsSelector = function(t) {
                this.whitelistedElementsSelector = t
            }, t.prototype.isWhitelistedAttribute = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.allWhitelistedAttributes, t)
            }, t.prototype.isWhitelistedElement = function(t) {
                return v(t) && (t.hasAttribute("data-cs-capture") || this.elementMatchesWhitelistedSelectors(t))
            }, t.prototype.elementMatchesWhitelistedSelectors = function(t) {
                return !!this.whitelistedElementsSelector && _.call(t, this.whitelistedElementsSelector)
            }, t
        }(),
        ci = function() {
            function t(t) {
                this.ramStorage = {}, this.byteSizeCounter = new je(t)
            }
            return t.prototype.save = function(t) {
                var e = t.key,
                    i = t.metadata,
                    r = t.events;
                this.byteSizeCounter.isThresholdReached() || (this.byteSizeCounter.addString(e), "string" == typeof r ? this.byteSizeCounter.addString(r) : this.byteSizeCounter.addArrayBuffer(r), this.byteSizeCounter.isThresholdReached() || (this.ramStorage[e] = {
                    metadata: i,
                    events: r
                }))
            }, t.prototype.recover = function(t) {
                var e = this,
                    i = [];
                csArray.prototype.forEach.call(this.getStorageKeys(), (function(t) {
                    var r = e.ramStorage[t];
                    void 0 !== r && (csArray.prototype.push.call(i, r), e.removeItem(t))
                })), 0 !== i.length && (t(i), this.byteSizeCounter.reset())
            }, t.prototype.getStorageKeys = function() {
                return Object.keys(this.ramStorage)
            }, t.prototype.removeItem = function(t) {
                delete this.ramStorage[t]
            }, t
        }();
    ! function(t) {
        t[t.NOT_STARTED = 0] = "NOT_STARTED", t[t.OPEN_IN_PROGRESS = 1] = "OPEN_IN_PROGRESS", t[t.OPEN_FAILED = 2] = "OPEN_FAILED", t[t.READY = 3] = "READY"
    }(ti || (ti = {}));
    var ui = function() {
            function t(t, e, i) {
                this.storageName = t, this.onOpenError = i, this.cacheState = ti.NOT_STARTED, this.toBeSavedBuffer = [], this.recoveryInProgress = !1, this.byteSizeCounter = new je(e), this.init()
            }
            return t.prototype.init = function() {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.openCache()];
                            case 1:
                                return t.sent(), this.cacheState === ti.READY ? this.flushToBeSavedBuffer() : this.onOpenError(this.toBeSavedBuffer), [2]
                        }
                    }))
                }))
            }, t.prototype.flushToBeSavedBuffer = function() {
                var t = this;
                csArray.prototype.forEach.call(this.toBeSavedBuffer, (function(e) {
                    t.save(e)
                })), this.toBeSavedBuffer = []
            }, t.prototype.save = function(t) {
                return F(this, void 0, void 0, (function() {
                    var e, i, r;
                    return G(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), this.cacheState === ti.OPEN_IN_PROGRESS ? (csArray.prototype.push.call(this.toBeSavedBuffer, t), [2]) : this.cacheState !== ti.READY || this.byteSizeCounter.isThresholdReached() ? [2] : (e = t.key, i = t.metadata, r = t.events, this.byteSizeCounter.addString(e), "string" == typeof r ? this.byteSizeCounter.addString(r) : this.byteSizeCounter.addArrayBuffer(r), this.byteSizeCounter.isThresholdReached() ? [2] : [4, this.cache.put(e, new Response(r, {
                                    headers: i
                                }))]);
                            case 1:
                                return n.sent(), [3, 3];
                            case 2:
                                return n.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.recover = function(t) {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.cache ? [3, 2] : [4, this.openCache()];
                            case 1:
                                if (e.sent(), this.cacheState !== ti.READY) return [2];
                                e.label = 2;
                            case 2:
                                return this.doRecover(t), [2]
                        }
                    }))
                }))
            }, t.prototype.openCache = function() {
                return F(this, void 0, void 0, (function() {
                    var t;
                    return G(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), this.cacheState = ti.OPEN_IN_PROGRESS, t = this, [4, window.caches.open(this.storageName)];
                            case 1:
                                return t.cache = e.sent(), this.cacheState = ti.READY, [3, 3];
                            case 2:
                                return e.sent(), this.cacheState = ti.OPEN_FAILED, [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.doRecover = function(t) {
                return F(this, void 0, void 0, (function() {
                    var e, i, r, n, o = this;
                    return G(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, , 5, 6]), this.recoveryInProgress ? [2] : (this.recoveryInProgress = !0, [4, this.cache.keys()]);
                            case 1:
                                return 0 === (e = s.sent()).length ? [2] : [4, this.cache.matchAll()];
                            case 2:
                                return i = s.sent(), r = csArray.prototype.map.call(i, (function(t) {
                                    var e = {};
                                    t.headers.forEach((function(t, i) {
                                        e[i] = t
                                    })), delete e["content-type"];
                                    var i = e.datatype;
                                    return "json" === i || "base64" === i ? t.text().then((function(t) {
                                        return {
                                            metadata: e,
                                            events: t
                                        }
                                    })) : t.arrayBuffer().then((function(t) {
                                        return {
                                            metadata: e,
                                            events: t
                                        }
                                    }))
                                })), [4, Promise.all(r)];
                            case 3:
                                return n = s.sent(), [4, Promise.all(csArray.prototype.map.call(e, (function(t) {
                                    return o.cache.delete(t)
                                })))];
                            case 4:
                                return s.sent(), t(n), this.byteSizeCounter.reset(), [3, 6];
                            case 5:
                                return this.recoveryInProgress = !1, [7];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t
        }(),
        li = function() {
            function t(t) {
                "caches" in window ? this.setCachesStrategy(t) : this.setRamStorageStrategy()
            }
            return t.prototype.save = function(t) {
                this.storageStrategy.save(t)
            }, t.prototype.recover = function(t) {
                this.storageStrategy.recover(t)
            }, t.prototype.setCachesStrategy = function(e) {
                var i = this;
                this.storageStrategy = new ui(e, t.MAX_SIZE, (function(t) {
                    i.setRamStorageStrategy(t)
                }))
            }, t.prototype.setRamStorageStrategy = function(e) {
                var i = this;
                this.storageStrategy = new ci(t.MAX_SIZE), e && csArray.prototype.forEach.call(e, (function(t) {
                    i.storageStrategy.save(t)
                }))
            }, t.MAX_SIZE = 16777216, t
        }(),
        hi = function() {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }
            return t.prototype.addProvider = function(t) {
                csArray.prototype.push.call(this.requestParametersProviders, t)
            }, t.prototype.getRequestParameters = function() {
                return csArray.prototype.reduce.call(this.requestParametersProviders, (function(t, e) {
                    return B(B({}, e.getRequestParameters()), t)
                }), {})
            }, t
        }(),
        pi = function() {
            function t(t, e) {
                this.asyncTaskFactory = t, this.configuration = e, this.userActive = !1, this.pendingInactivity = null
            }
            return t.prototype.start = function() {
                this.userActive = !0, this.createPendingInactivity()
            }, t.prototype.stop = function() {
                this.userActive = !1, this.clearPendingInactivity()
            }, t.prototype.trackActivity = function() {
                this.userActive || (this.userActive = !0, this.onActivityResumedCallback()), this.clearPendingInactivity(), this.createPendingInactivity()
            }, t.prototype.createPendingInactivity = function() {
                var t = this;
                this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", (function() {
                    t.userActive = !1, t.clearPendingInactivity(), t.onActivityStoppedCallback()
                }), this.configuration.pendingInactivityTimeout)
            }, t.prototype.clearPendingInactivity = function() {
                null !== this.pendingInactivity && (this.pendingInactivity.cancel(), this.pendingInactivity = null)
            }, t.prototype.isUserActive = function() {
                return this.userActive
            }, t.prototype.onActivityStopped = function(t) {
                this.onActivityStoppedCallback = t
            }, t.prototype.onActivityResumed = function(t) {
                this.onActivityResumedCallback = t
            }, t
        }(),
        di = function() {
            function t(t, e, i) {
                var r = this;
                this.taskName = t, this.task = e, this.timeout = i, this.timeoutId = setTimeout((function() {
                    r.execute()
                }), this.timeout)
            }
            return t.prototype.execute = function() {
                var t = this;
                Wt.tryToExecute(this.taskName, (function() {
                    t.task()
                }))()
            }, t.prototype.cancel = function() {
                clearTimeout(this.timeoutId)
            }, t
        }(),
        fi = function() {
            function t() {}
            return t.prototype.create = function(t, e, i) {
                return new di(t, e, i)
            }, t
        }(),
        yi = function() {
            function t(t, e) {
                var i = this;
                this.location = t, this.pii = e, this.eventHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return i.resizeListener()
                    }
                }, {
                    boundElement: window,
                    type: "hashchange",
                    listener: function() {
                        return i.hashChangeListener()
                    }
                }, {
                    boundElement: document,
                    type: "visibilitychange",
                    listener: function() {
                        return i.visibilityChangeListener()
                    }
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = function(e) {
                    t(e)
                }
            }, t.prototype.start = function() {
                this.bindHandlers(), this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindHandlers()
            }, t.prototype.bindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return ke(t)
                }))
            }, t.prototype.unbindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return Ie(t)
                }))
            }, t.prototype.triggerInitialEvents = function() {
                this.resizeListener(), this.hashChangeListener()
            }, t.prototype.resizeListener = function() {
                this.onEventCallback({
                    type: Ce.RESIZE,
                    args: [Be.windowWidth(), Be.windowHeight()],
                    date: vt()
                })
            }, t.prototype.hashChangeListener = function() {
                this.onEventCallback({
                    type: Ce.HASH_CHANGE,
                    args: [this.pii.anonymize(this.location.href)],
                    date: vt()
                })
            }, t.prototype.visibilityChangeListener = function() {
                this.onEventCallback({
                    type: Ce.VISIBILITY_CHANGE,
                    args: [document.visibilityState],
                    date: vt()
                })
            }, H([Kt("resize")], t.prototype, "resizeListener", null), H([Kt("hashChange")], t.prototype, "hashChangeListener", null), H([Kt("visibilityChange")], t.prototype, "visibilityChangeListener", null), t
        }(),
        vi = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingPageEventsTracker = e, s.recordingMutationsTracker = i, s.recordingActivityTracker = r, s.recordingRequest = n, s.mutationSerializer = o, s.recordingRequestDuringInactivityCount = 0, s.isMutationTrackerStopped = !1, s
            }
            return U(e, t), e.prototype.init = function() {
                var t = this;
                this.recordingPageEventsTracker.onEvent((function() {
                    t.recordingActivityTracker.trackActivity(), t.recordingRequestDuringInactivityCount = 0
                })), this.recordingRequest.after((function() {
                    t.recordingRequestDuringInactivityCount += 1, t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityStopped((function() {
                    t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityResumed((function() {
                    t.isMutationTrackerStopped && (t.recordingMutationsTracker.start(), t.isMutationTrackerStopped = !1)
                }))
            }, e.prototype.onStart = function() {
                this.recordingActivityTracker.start()
            }, e.prototype.onStop = function() {
                this.recordingActivityTracker.stop()
            }, e.prototype.stopMutationTrackerIfNeeded = function() {
                !this.isMutationTrackerStopped && !this.mutationSerializer.isDOMSerializationInProgress() && !this.recordingActivityTracker.isUserActive() && this.recordingRequestDuringInactivityCount >= 2 && (this.recordingMutationsTracker.stop(), this.isMutationTrackerStopped = !0)
            }, e
        }(Xe),
        gi = i(3);

    function mi(t) {
        var e = csString.prototype.trim.call(t);
        if ("" === t) return [];
        var i, r = (i = e, csString.prototype.split.call(i, /\s(.+)/)),
            n = r[0],
            o = r[1];
        return o ? (tt(n, ",") || (o = function(t) {
            return csString.prototype.split.call(t, /,(.+)/)[1] || ""
        }(o)), W([Si(n)], mi(o), !0)) : [Si(n)]
    }

    function Si(t) {
        return csString.prototype.split.call(t, /,$/)[0]
    }
    var Ei, bi = function() {
        function t() {}
        return t.prototype.onEvent = function(t) {
            this.onEventCallback = t
        }, t.prototype.serializeElementNode = function(t, e, i) {
            return this.scanElement(t), e
        }, t.prototype.beforeSerializeChildren = function(t, e, i) {
            return this.scanStyleElement(t, e), e
        }, t.prototype.scanElement = function(t) {
            this.scanElementAttributes(t)
        }, t.prototype.scanAttribute = function(t, e) {
            this.scanElementAttributes(t, e)
        }, t.prototype.scanText = function(t) {
            g(t) && csNodeparentNode.apply(t) && b(csNodeparentNode.apply(t)) && this.scanCssString(t.data)
        }, t.prototype.scanStyleElement = function(t, e) {
            if (b(t))
                for (var i = 0, r = e; i < r.length; i++) {
                    var n = r[i];
                    g(n) && this.scanCssString(n.data)
                }
        }, t.prototype.scanElementAttributes = function(t, e) {
            this.scanCssLink(t, e), this.scanImage(t, e), this.scanStyleAttribute(t, e)
        }, t.prototype.scanCssLink = function(t, e) {
            !S(t) || e && "href" !== e || !t.href || this.onStaticResourceUrl(t.href)
        }, t.prototype.scanImage = function(t, e) {
            E(t) && (e && "src" !== e || !t.src || this.isDataUrl(t.src) || null === t.getAttribute("src") || this.isHashStartUrl(t.getAttribute("src")) || this.onStaticResourceUrl(t.src), e && "srcset" !== e || !t.srcset || this.scanSrcset(t.srcset))
        }, t.prototype.scanStyleAttribute = function(t, e) {
            if ((!e || "style" === e) && t.hasAttribute("style")) {
                var i = t.getAttribute("style");
                if ("string" != typeof i) throw new Error("Unexpected style: " + t.outerHTML);
                this.scanCssString(i)
            }
        }, t.prototype.isHashStartUrl = function(t) {
            return $(t, "#")
        }, t.prototype.isDataUrl = function(t) {
            return $(t, "data:")
        }, t.prototype.scanCssString = function(t) {
            this.processRawUrls(Object(gi.extractFrom)(t))
        }, t.prototype.scanSrcset = function(t) {
            this.processRawUrls(mi(t))
        }, t.prototype.processRawUrls = function(t) {
            var e = this;
            return csArray.prototype.forEach.call(csArray.prototype.map.call(csArray.prototype.filter.call(csArray.prototype.filter.call(t, (function(t) {
                return !e.isDataUrl(t)
            })), (function(t) {
                return !e.isHashStartUrl(t)
            })), (function(t) {
                return Tt(t)
            })), (function(t) {
                return e.onStaticResourceUrl(t)
            }))
        }, t.prototype.onStaticResourceUrl = function(t) {
            this.onEventCallback({
                date: vt(),
                type: Ce.STATIC_RESOURCE_URL,
                args: [t]
            })
        }, t
    }();
    ! function(t) {
        t.REQUEST_START = "requestStart", t.DOM_INTERACTIVE = "domInteractive"
    }(Ei || (Ei = {}));
    var Ci = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.areTimingsAvailable() && this.recordPerformanceTimings()
            }, t.prototype.recordPerformanceTimings = function() {
                var t = this.getPerformanceTimings();
                this.onEventCallback({
                    args: t,
                    date: vt(),
                    type: Ce.PERFORMANCE_TIMINGS
                })
            }, t.prototype.areTimingsAvailable = function() {
                return !(!this.windowPerformance || !this.windowPerformance.timing)
            }, t.prototype.getPerformanceTimings = function() {
                return [{
                    performanceTiming: Ei.REQUEST_START,
                    timestamp: this.windowPerformance.timing.requestStart
                }, {
                    performanceTiming: Ei.DOM_INTERACTIVE,
                    timestamp: this.windowPerformance.timing.domInteractive
                }]
            }, t
        }(),
        wi = function() {
            function t(t, e) {
                void 0 === t && (t = 40), void 0 === e && (e = 0), this.maxProcessingTime = t, this.waitDuration = e, this.taskQueue = [], this.isActive = !1, this.usedBudget = 0, this.timeoutId = -1
            }
            return t.prototype.schedule = function(t) {
                csArray.prototype.push.call(this.taskQueue, t), this.run()
            }, t.prototype.run = function() {
                return F(this, void 0, void 0, (function() {
                    var t, e, i, r = this;
                    return G(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (this.isActive) return [2];
                                this.isActive = !0, window.clearTimeout(this.timeoutId), n.label = 1;
                            case 1:
                                return this.taskQueue.length ? this.usedBudget >= this.maxProcessingTime ? [4, this.wait()] : [3, 3] : [3, 4];
                            case 2:
                                n.sent(), this.usedBudget = 0, n.label = 3;
                            case 3:
                                return t = window.performance.now(), (e = csArray.prototype.shift.call(this.taskQueue)) ? (this.runTask(e), i = window.performance.now() - t, this.usedBudget += i, [3, 1]) : [3, 4];
                            case 4:
                                return this.isActive = !1, this.timeoutId = window.setTimeout((function() {
                                    r.usedBudget = 0
                                })), [2]
                        }
                    }))
                }))
            }, t.prototype.runTask = function(t) {
                t()
            }, t.prototype.runPendingTasks = function() {
                var t = this;
                csArray.prototype.forEach.call(this.taskQueue, (function(e) {
                    t.runTask(e)
                })), this.taskQueue = []
            }, t.prototype.clearQueue = function() {
                this.taskQueue = []
            }, t.prototype.wait = function() {
                var t = this;
                return new Promise((function(e) {
                    return setTimeout((function() {
                        e()
                    }), t.waitDuration)
                }))
            }, t.prototype.isEmpty = function() {
                return 0 === this.taskQueue.length
            }, t.isSupported = function() {
                return mt()
            }, H([Kt("TaskScheduler")], t.prototype, "runTask", null), t
        }(),
        Ti = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.monkeyPatcher = e, r.handleMutations = r.handleMutationsSync, r.addedNodesMap = new Map, i && i.experimentalMutationObserver && wi.isSupported() && (r.taskScheduler = new wi(i.experimentalMutationObserver.maxProcessingTime, i.experimentalMutationObserver.waitDuration), r.handleMutations = r.handleMutationsAsync), r
            }
            return U(e, t), e.prototype.init = function() {
                this.initInterceptors(), this.initMutationObserver()
            }, e.prototype.initMutationObserver = function() {
                var t = this;
                this.observer = new csMutationObserver((function(e) {
                    t.handleMutations(e)
                }))
            }, e.prototype.initInterceptors = function() {
                var t = this;
                this.supportAttachShadow() && (this.attachShadowInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "attachShadow",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                })), this.supportCreateShadowRoot() && (this.createShadowRootInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "createShadowRoot",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                }))
            }, e.prototype.onChildListMutation = function(t) {
                this.childListMutationCallback = t
            }, e.prototype.onCharacterDataMutation = function(t) {
                this.characterDataMutationCallback = t
            }, e.prototype.onAttributesMutation = function(t) {
                this.attributesMutationCallback = t
            }, e.prototype.onAttachShadowMutation = function(t) {
                this.attachShadowMutationCallback = t
            }, e.prototype.observe = function(t, e) {
                this.isStarted && this.observer.observe(t, e)
            }, e.prototype.onStart = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.activate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.activate()
            }, e.prototype.onStop = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.deactivate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.deactivate(), this.taskScheduler && this.taskScheduler.clearQueue(), this.observer.disconnect()
            }, e.prototype.flushPendingMutations = function() {
                if (this.isStarted) {
                    this.taskScheduler && this.taskScheduler.runPendingTasks();
                    var t = this.observer.takeRecords();
                    this.handleMutationsSync(t)
                }
            }, e.prototype.supportAttachShadow = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.attachShadow
            }, e.prototype.supportCreateShadowRoot = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.createShadowRoot
            }, e.prototype.handleMutationsSync = function(t) {
                var e = vt(),
                    i = t.length > 1 ? this.filterUselessAttributesMutations(t) : t;
                this.addedNodesMap.clear(), this.updateAddedNodes(i);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r];
                    n.date = e, this.processMutation(n, this.addedNodesMap)
                }
            }, e.prototype.handleMutationsAsync = function(t) {
                var e = vt(),
                    i = t.length > 1 ? this.filterUselessAttributesMutations(t) : t;
                this.taskScheduler.isEmpty() && this.addedNodesMap.clear(), this.updateAddedNodes(i);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r];
                    n.date = e, this.scheduleProcessMutation(n, this.addedNodesMap)
                }
            }, e.prototype.filterUselessAttributesMutations = function(t) {
                for (var e = new Map, i = 0; i < t.length; i += 1) {
                    if ("attributes" === (h = t[i]).type) {
                        var r = h.target,
                            n = h.attributeNamespace,
                            o = h.attributeName,
                            s = "".concat(n || "", " ").concat(o),
                            a = e.get(r),
                            c = Fe.getAttributeNS(r, n, o) === h.oldValue ? "none" : "last";
                        if (a) a.has(s) || a.set(s, c);
                        else {
                            var u = new Map;
                            u.set(s, c), e.set(r, u)
                        }
                    }
                }
                var l = [];
                for (i = t.length - 1; i >= 0; i -= 1) {
                    var h;
                    if ("attributes" === (h = t[i]).type) {
                        r = h.target, n = h.attributeNamespace, o = h.attributeName, s = "".concat(n || "", " ").concat(o);
                        "last" === (a = e.get(r)).get(s) && (csArray.prototype.push.call(l, h), a.set(s, "none"))
                    } else csArray.prototype.push.call(l, h)
                }
                return csArray.prototype.reverse.call(l)
            }, e.prototype.handleAttachShadow = function(t, e) {
                this.attachShadowMutationCallback({
                    shadowRoot: e,
                    date: vt(),
                    target: t
                })
            }, e.prototype.processMutation = function(t, e) {
                switch (t.type) {
                    case "attributes":
                        this.attributesMutationCallback(t);
                        break;
                    case "characterData":
                        this.characterDataMutationCallback(t);
                        break;
                    case "childList":
                        this.childListMutationCallback(t, e);
                        break;
                    default:
                        throw new Error("mutation type is not supported")
                }
            }, e.prototype.scheduleProcessMutation = function(t, e) {
                var i = this;
                this.taskScheduler.schedule((function() {
                    i.processMutation(t, e)
                }))
            }, e.prototype.updateAddedNodes = function(t) {
                var e = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    ze(t.addedNodes, (function(t) {
                        var i = e.addedNodesMap.get(t);
                        i ? e.addedNodesMap.set(t, i + 1) : e.addedNodesMap.set(t, 1)
                    }))
                }))
            }, H([Kt("handleMutationsSync")], e.prototype, "handleMutationsSync", null), H([Kt("handleMutationsAsync")], e.prototype, "handleMutationsAsync", null), e
        }(Xe),
        Ri = function(t) {
            function e(e, i, r) {
                var n = t.call(this, e, null == r ? void 0 : r.experimental) || this;
                return n.nodeIdentifier = i, n.recordingMutationObserverOptions = {
                    subtree: !0,
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0
                }, n
            }
            return U(e, t), e.prototype.init = function() {
                t.prototype.init.call(this), this.initSubscribers()
            }, e.prototype.initSubscribers = function() {
                var t = this;
                this.nodeIdentifier.onDocumentIdentified((function(e) {
                    t.observe(e, t.recordingMutationObserverOptions)
                }))
            }, e
        }(Ti);

    function Ai() {
        var t, e = (t = new Error).stack ? csArray.prototype.filter.call(csString.prototype.split.call(t.stack, "\n"), (function(t) {
            return "Error" !== t && -1 === csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(t), "promise ") && -1 === csString.prototype.indexOf.call(t, "[native code]")
        })) : [];
        if (0 === e.length) return "";
        var i = function(t) {
            return t.length > 0 ? ki(t[0]) : ""
        }(e);
        return "" === i || 0 === (e = function(t, e) {
            return csArray.prototype.filter.call(t, (function(t) {
                return -1 === csString.prototype.indexOf.call(t, e)
            }))
        }(e, i)).length ? "" : ki(e[0])
    }

    function ki(t) {
        var e, i = "";
        e = t;
        var r = (-1 !== csString.prototype.indexOf.call(e, "@") ? new RegExp("@(.+):(\\d+):(\\d+)$") : new RegExp("\\((.+):(\\d+):(\\d+)\\)")).exec(t);
        return r && (i = r[1]), i
    }
    var Ii, _i = function() {
        function t() {
            this.defaultHookPrepareArgs = function(t, e) {
                return {
                    context: t,
                    args: e
                }
            }
        }
        return t.prototype.copyFunctionSignature = function(t, e) {
            t.prototype = e.prototype, Object.defineProperty(t, "toString", {
                value: function() {
                    return e.toString()
                }
            })
        }, t.prototype.createSyncFunctionInterceptor = function(t) {
            var e, i = t.target,
                r = t.methodName,
                n = t.hook,
                o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o,
                a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return Wt.warn("Cannot intercept read only function '".concat(csString(r), "' of object '").concat(i, "'")), null;
            var c = !1,
                u = i[r];
            if ("function" == typeof u) {
                var l = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var i, r = s(this, t),
                        o = u.apply(this, t);
                    c && (a && a.withCallerName && (i = Ai()), Wt.tryToExecute("SyncFunctionInterceptor", (function() {
                        n(B(B({
                            result: o
                        }, r), {
                            callerName: i
                        }))
                    }))());
                    return o
                };
                this.copyFunctionSignature(l, u), i[r] = l
            }
            return {
                activate: function() {
                    return c = !0
                },
                deactivate: function() {
                    return c = !1
                }
            }
        }, t.prototype.createAsyncFunctionInterceptor = function(t) {
            var e, i = t.target,
                r = t.methodName,
                n = t.hook,
                o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o,
                a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return Wt.warn("Cannot intercept read only function '".concat(csString(r), "' of object '").concat(i, "'")), null;
            var c = !1,
                u = i[r];
            if ("function" == typeof u) {
                var l = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return F(this, void 0, void 0, (function() {
                        var e, i, r;
                        return G(this, (function(o) {
                            return e = s(this, t), i = u.apply(this, t), c && (a && a.withCallerName && (r = Ai()), Wt.tryToExecute("AsyncFunctionInterceptor", (function() {
                                n(B(B({
                                    result: i
                                }, e), {
                                    callerName: r
                                }))
                            }))()), [2, i]
                        }))
                    }))
                };
                this.copyFunctionSignature(l, u), i[r] = l
            }
            return {
                activate: function() {
                    return c = !0
                },
                deactivate: function() {
                    return c = !1
                }
            }
        }, t.prototype.createDescriptorInterceptor = function(t, e, i) {
            var r = !1,
                n = Object.getOwnPropertyDescriptor(t, e);
            if (n) {
                if (!n.configurable) return Wt.warn("Cannot intercept read only property '".concat(csString(e), "' of object '").concat(t, "'")), null;
                Object.defineProperty(t, e, B(B({}, n.get ? {
                    get: function() {
                        return n.get.apply(this, arguments)
                    }
                } : {}), n.set ? {
                    set: function() {
                        var t = this,
                            e = arguments,
                            o = n.set.apply(this, e);
                        return r && Wt.tryToExecute("DescriptorInterceptor", (function() {
                            i(t, e[0])
                        }))(), o
                    }
                } : {}))
            }
            return {
                activate: function() {
                    return r = !0
                },
                deactivate: function() {
                    return r = !1
                }
            }
        }, t
    }();
    ! function(t) {
        t.COMPRESSION_DISABLED = "compressionDisabled"
    }(Ii || (Ii = {}));
    var Pi = function() {
        function t() {}
        return t.init = function(t) {
            var e;
            void 0 === t && (t = document.cookie);
            var i = null === (e = /_cs_debug=((\w|\.|\:|=)+)/g.exec(t)) || void 0 === e ? void 0 : e[1];
            if (this.debugFlags = new Map, i)
                for (var r = csString.prototype.split.call(i, "."), n = 0; n < r.length; n++) {
                    var o = csString.prototype.split.call(r[n], "="),
                        s = o[0],
                        a = o[1];
                    this.debugFlags.set(s, a || "true")
                }
        }, t.getBoolean = function(t) {
            var e = this.getString(t);
            return null != e && "false" !== e && 0 !== parseInt(e)
        }, t.getString = function(t) {
            var e;
            return null === (e = this.debugFlags) || void 0 === e ? void 0 : e.get(t)
        }, t.isCompressionEnabled = function() {
            return !this.getBoolean(Ii.COMPRESSION_DISABLED)
        }, t.Log = function(e) {
            return function(i, r, n) {
                var o, s = r.toString(),
                    a = "".concat(null === (o = i.constructor) || void 0 === o ? void 0 : o.name, ".").concat(s),
                    c = n.value;
                (function(t, e) {
                    var i;
                    if (null == t) return !1;
                    return t === e || !!(null === (i = csString.prototype.match.call(t, new RegExp("(^|,)(" + e + ")(,|$)"))) || void 0 === i ? void 0 : i.length)
                })(t.getString("debugLog"), e) && (n.value = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return console.log.apply(console, W([a], t, !1)), c.bind(this).apply(void 0, t)
                })
            }
        }, t
    }();
    Pi.init();
    var Ni = function() {
        function t() {
            this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
        }
        return t.prototype.isFull = function() {
            return this.seenGloballyBuffer.length >= t.BATCH_SIZE || this.seenInViewPortBuffer.length >= t.BATCH_SIZE
        }, t.prototype.isEmpty = function() {
            return 0 === this.seenGloballyBuffer.length && 0 === this.seenInViewPortBuffer.length
        }, t.prototype.addIdInGlobally = function(t) {
            csArray.prototype.push.call(this.seenGloballyBuffer, t)
        }, t.prototype.addIdInViewPort = function(t) {
            csArray.prototype.push.call(this.seenInViewPortBuffer, t)
        }, t.prototype.clear = function() {
            this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
        }, t.prototype.flushIdsSeenGlobally = function() {
            var t = W([], this.seenGloballyBuffer, !0);
            return this.seenGloballyBuffer = [], t
        }, t.prototype.flushIdsSeenInViewport = function() {
            var t = W([], this.seenInViewPortBuffer, !0);
            return this.seenInViewPortBuffer = [], t
        }, t.BATCH_SIZE = 20, t
    }();

    function Oi(t) {
        return "$$" + t
    }
    Oi.asyncIterator = "$$asyncIterator";
    var Mi = void 0 !== window.Symbol ? window.Symbol : Oi,
        Li = !!window.IntersectionObserver && !!window.IntersectionObserverEntry;

    function Di(t, e) {
        if (!Li) throw new Error("IntersectionObserver is not supported");
        if ((null == e ? void 0 : e.delay) < 100) throw new Error("Visibility delay should be > 100ms");
        var i = "isVisible" in IntersectionObserverEntry.prototype;
        return (null == e ? void 0 : e.trackVisibility) && (t = i ? function(t) {
            return function(e, i) {
                e = csArray.prototype.map.call(e, (function(t) {
                    return {
                        boundingClientRect: t.boundingClientRect,
                        intersectionRatio: t.intersectionRatio,
                        intersectionRect: t.intersectionRect,
                        isIntersecting: t.isIntersecting,
                        isVisible: t.isVisible || Fe.isInViewPort(t.target),
                        rootBounds: t.rootBounds,
                        target: t.target,
                        time: t.time
                    }
                })), t(e, i)
            }
        }(t) : function(t) {
            return function(e, i) {
                csArray.prototype.forEach.call(e, (function(t) {
                    return t.isVisible = Fe.isInViewPort(t.target)
                })), t(e, i)
            }
        }(t)), new IntersectionObserver(t, e)
    }
    var xi, Vi = function() {
        function t(t, e) {
            var i = this;
            this.source = t, this.IS_VISIBLE = Mi("isVisible"), this.KNOWN_ELEMENT = Mi("knownElement"), this.TRACKED = Mi("Tracked"), this.callbacks = [], this.stopped = !0, this.handleIntersection = function(t) {
                for (var e = !1, r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (n.isVisible) {
                        var o = null == n.target[i.IS_VISIBLE];
                        n.target[i.IS_VISIBLE] = n.isVisible, e = e || !!i.options.delay && n.isVisible, o && n.isVisible && !i.options.delay && i.onVisibilityChanged(n.target, xi.VisibleInViewPort)
                    } else {
                        var s = Fe.isVisibleInDocument(n.target) ? xi.VisibleOutsideViewPort : n.isIntersecting ? xi.HiddenByAnother : xi.Hidden;
                        i.onVisibilityChanged(n.target, s), i.watchMutation(n.target)
                    }
                }
                e && setTimeout((function() {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e],
                            n = r.isIntersecting && r.isVisible;
                        r.target[i.IS_VISIBLE] && n && i.onVisibilityChanged(r.target, xi.VisibleInViewPort)
                    }
                }), i.options.delay)
            }, this.options = B(B({}, zi), e), this.start()
        }
        return t.prototype.onVisibilityChange = function(t) {
            csArray.prototype.push.call(this.callbacks, t)
        }, t.prototype.stop = function() {
            this.stopped = !0
        }, t.prototype.start = function() {
            var t, e;
            return F(this, void 0, void 0, (function() {
                var i, r, n, o, s, a = this;
                return G(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            this.stopped = !1, i = {
                                root: null,
                                rootMargin: "0px",
                                threshold: .5,
                                trackVisibility: !0,
                                delay: 300
                            }, this.intersectionObserver = Di(this.handleIntersection, i), this.mutationObserver = new csMutationObserver((function(t) {
                                return csArray.prototype.forEach.call(t, (function(t) {
                                    a.handleMutation(t.target)
                                }))
                            })), c.label = 1;
                        case 1:
                            c.trys.push([1, 6, 7, 12]), r = Q(this.source), c.label = 2;
                        case 2:
                            return [4, r.next()];
                        case 3:
                            if ((n = c.sent()).done) return [3, 5];
                            if (o = n.value, this.stopped) return [2];
                            this.watchIntersection(o), c.label = 4;
                        case 4:
                            return [3, 2];
                        case 5:
                            return [3, 12];
                        case 6:
                            return s = c.sent(), t = {
                                error: s
                            }, [3, 12];
                        case 7:
                            return c.trys.push([7, , 10, 11]), n && !n.done && (e = r.return) ? [4, e.call(r)] : [3, 9];
                        case 8:
                            c.sent(), c.label = 9;
                        case 9:
                            return [3, 11];
                        case 10:
                            if (t) throw t.error;
                            return [7];
                        case 11:
                            return [7];
                        case 12:
                            return [2]
                    }
                }))
            }))
        }, t.prototype.handleMutation = function(t) {
            if (t.isConnected && !Fe.areAncestorsHiddenByCSS(t))
                for (var e, i = this.source.getElements(t); e = i.next().value;) this.watchIntersection(e)
        }, t.prototype.watchIntersection = function(t) {
            if (!t[this.KNOWN_ELEMENT]) {
                this.intersectionObserver.unobserve(t);
                var e = Fe.getTopAncestorHiddenByCSS(t);
                e ? this.watchMutation(e) : (t[this.KNOWN_ELEMENT] = !0, this.intersectionObserver.observe(t))
            }
        }, t.prototype.watchMutation = function(e) {
            delete e[this.IS_VISIBLE], delete e[this.KNOWN_ELEMENT], this.intersectionObserver.unobserve(e), this.mutationObserver.observe(e, {
                attributeFilter: t.MUTATION_ATTRIBUTE_FILTER,
                subtree: !0
            })
        }, t.prototype.onVisibilityChanged = function(t, e) {
            if (e === xi.VisibleInViewPort && this.options.trackOnce) {
                if (t[this.TRACKED]) return;
                t[this.TRACKED] = !0, this.intersectionObserver.unobserve(t)
            }
            csArray.prototype.forEach.call(this.callbacks, (function(i) {
                return i(t, e)
            }))
        }, t.MUTATION_ATTRIBUTE_FILTER = ["style", "class", "hidden"], t
    }();
    ! function(t) {
        t.VisibleInViewPort = "VisibleInViewPort", t.VisibleOutsideViewPort = "VisibleOutsideViewPort", t.HiddenByAnother = "HiddenByAnother", t.Hidden = "Hidden"
    }(xi || (xi = {}));
    var zi = {
        delay: 1e3,
        trackOnce: !0
    };

    function qi(t, e) {
        var i, r, n, o, s = function() {
                r = null;
                var e = vt() - n;
                o = t.apply(void 0, W([e], i, !1)), n = null
            },
            a = function() {
                for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                return n || (n = vt()), r && window.clearTimeout(r), i = W([], t, !0), r = window.setTimeout(s, e), o
            };
        return a.flushPending = function() {
            r && (window.clearTimeout(r), s())
        }, a
    }
    var Ui, Bi, Hi = function(t) {
            return void 0 === t && (t = 0),
                function(e, i, r) {
                    var n = r.value,
                        o = !1;
                    r.value = function() {
                        for (var e = this, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        o || (o = !0, setTimeout((function() {
                            o = !1, n.apply(e, i)
                        }), t))
                    }
                }
        },
        Fi = function() {
            function t(t) {
                void 0 === t && (t = 5), this.flushDelay = t, this.isDone = !1, this.buffer = []
            }
            return t.prototype.push = function(t) {
                this.isDone || (csArray.prototype.push.call(this.buffer, t), 1 === this.buffer.length && this.flush(!0))
            }, t.prototype.done = function() {
                this.flush(!1), this.isDone = !0
            }, t.prototype[Mi.asyncIterator] = function() {
                return Y(this, arguments, (function() {
                    var t, e = this;
                    return G(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return t = function() {
                                    return new Promise((function(t) {
                                        e.signal = function() {
                                            e.signal = void 0, t()
                                        }
                                    }))
                                }, this.buffer.length ? [5, j(X(Q(this.buffer)))] : [3, 3];
                            case 1:
                                return [4, K.apply(void 0, [i.sent()])];
                            case 2:
                                i.sent(), this.buffer = [], i.label = 3;
                            case 3:
                                return this.isDone ? [3, 7] : [4, K(t())];
                            case 4:
                                return i.sent(), [5, j(X(Q(this.buffer)))];
                            case 5:
                                return [4, K.apply(void 0, [i.sent()])];
                            case 6:
                                return i.sent(), this.buffer = [], [3, 3];
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.flush = function(t) {
                void 0 === t && (t = !1);
                var e = this.signal;
                e && (t ? qi(e, this.flushDelay)() : e())
            }, t
        }(),
        Gi = function() {
            function t(t) {
                this.sensitiveContentService = t
            }
            return t.prototype[Mi.asyncIterator] = function() {
                return this.asynQueue[Mi.asyncIterator]()
            }, t.prototype.serializeTextNode = function(t, e, i) {
                if (i.withAnonymization) return e;
                var r = this.getTextParent(t);
                return r && this.asynQueue.push(r), e
            }, t.prototype.getElements = function(t) {
                var e, i, r;
                return G(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            e = Fe.createDeepTreeWalker(t, NodeFilter.SHOW_TEXT), n.label = 1;
                        case 1:
                            return (i = e.nextNode()) ? (r = this.getTextParent(i)) ? [4, r] : [3, 3] : [3, 4];
                        case 2:
                            n.sent(), n.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [2]
                    }
                }))
            }, t.prototype.start = function() {
                this.asynQueue = new Fi
            }, t.prototype.stop = function() {
                this.asynQueue.done()
            }, t.prototype.getTextParent = function(t) {
                var e = Fe.getParentElement(t);
                return !e || !e.isConnected || this.sensitiveContentService.isSensitive(e) || this.sensitiveContentService.isSensitiveChild(e) || b(e) || C(e) || Fe.isEmpty(t) ? null : e
            }, t
        }(),
        ji = function() {
            function t(t, e) {
                var i = this;
                this.sensitiveContentService = t, this.textVisibilityDelay = e, this.isStarted = !1, this.seenInViewPort = new Set, this.seenGlobally = new Set, this.textVisibilityBatch = new Ni, this.onVisibilityChanged = function(t, e) {
                    switch (e) {
                        case xi.VisibleInViewPort:
                            i.onVisibleInViewPort(t);
                            break;
                        case xi.VisibleOutsideViewPort:
                            i.onVisibleOutsideViewPort(t)
                    }
                    i.textVisibilityBatch.isFull() && i.onTextVisibility()
                }
            }
            return t.isSupported = function() {
                return !!window.IntersectionObserver
            }, t.prototype.serializeTextNode = function(e, i, r) {
                return this.source || (Wt.warn("TextVisibility: Source was not initialized. (".concat(t.isSupported(), ")")), this.start()), this.source.serializeTextNode(e, i, r)
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.isStarted || (this.source = new Gi(this.sensitiveContentService), this.source.start(), this.elementVisibilityTracker = new Vi(this.source, {
                    delay: this.textVisibilityDelay
                }), this.elementVisibilityTracker.onVisibilityChange(this.onVisibilityChanged), this.isStarted = !0)
            }, t.prototype.stop = function() {
                this.isStarted && (this.source.stop(), this.elementVisibilityTracker && this.elementVisibilityTracker.stop(), this.textVisibilityBatch.clear(), this.seenInViewPort.clear(), this.seenGlobally.clear(), this.isStarted = !1)
            }, t.prototype.flushEvents = function() {
                this.isStarted && this.onTextVisibility()
            }, t.prototype.onVisibleInViewPort = function(t) {
                var e = ni.getId(t);
                this.onVisibleOutsideViewPort(t), this.seenInViewPort.has(e) || (this.seenInViewPort.add(e), this.textVisibilityBatch.addIdInViewPort(e))
            }, t.prototype.onVisibleOutsideViewPort = function(t) {
                var e = ni.getId(t);
                this.seenGlobally.has(e) || (this.seenGlobally.add(e), this.textVisibilityBatch.addIdInGlobally(e))
            }, t.prototype.onTextVisibility = function() {
                if (!this.textVisibilityBatch.isEmpty()) {
                    var t = {
                        visibleGlobally: this.textVisibilityBatch.flushIdsSeenGlobally(),
                        visibleInViewPort: this.textVisibilityBatch.flushIdsSeenInViewport()
                    };
                    this.onEventCallback({
                        type: Ce.TEXT_VISIBILITY,
                        date: vt(),
                        args: [t]
                    })
                }
            }, H([Pi.Log("VisibleInViewport")], t.prototype, "onVisibleInViewPort", null), H([Pi.Log("VisibleInDocument")], t.prototype, "onVisibleOutsideViewPort", null), t
        }(),
        Wi = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.onBeaconSuccessCallbacks = [], r.onBeaconFailureCallbacks = [], r
            }
            return U(e, t), e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.onBeaconSuccess = function(t) {
                csArray.prototype.push.call(this.onBeaconSuccessCallbacks, t)
            }, e.prototype.onBeaconFailure = function(t) {
                csArray.prototype.push.call(this.onBeaconFailureCallbacks, t)
            }, e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = this.retrieveParameters(),
                    e = nt.toQuery(t),
                    i = this.retrievePayload();
                this.sendBeacon(e, i) ? csArray.prototype.forEach.call(this.onBeaconSuccessCallbacks, (function(t) {
                    return t()
                })) : csArray.prototype.forEach.call(this.onBeaconFailureCallbacks, (function(t) {
                    return t()
                })), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.sendBeacon = function(t, e) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon("".concat(this.domainUri, "/").concat(this.path, "?").concat(t), e)
            }, e
        }(ct),
        Ki = function() {
            function t(t) {
                this.encryptionService = t
            }
            return t.prototype.serializeTextNode = function(t, e) {
                var i;
                return (null === (i = t.parentElement) || void 0 === i ? void 0 : i.hasAttribute("data-cs-encrypt")) && (e.data = $e(t.data), this.encryptionService.registerTextNodeToEncrypt({
                    textNode: t,
                    serializedTextData: e.data
                })), e
            }, t
        }(),
        Yi = function() {
            function t() {
                this.dataToEncryptBuffer = []
            }
            return t.prototype.onSerializeData = function(t) {
                this.onSerializeDataCallback = t
            }, t.prototype.addData = function(t) {
                csArray.prototype.push.call(this.dataToEncryptBuffer, t)
            }, t.prototype.serializeDataFromBuffer = function() {
                for (; this.dataToEncryptBuffer.length > 0;) {
                    var t = csArray.prototype.shift.call(this.dataToEncryptBuffer);
                    this.onSerializeDataCallback(t)
                }
            }, t.prototype.clear = function() {
                this.dataToEncryptBuffer = []
            }, t
        }(),
        Xi = function() {
            function t(t) {
                this.crypto = t, this.isEncryptionSupported = !1
            }
            return t.prototype.init = function() {
                this.isEncryptionSupported = this.canSupportEncryption(), this.isEncryptionSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.isSupported = function() {
                return this.isEncryptionSupported
            }, t.prototype.canSupportEncryption = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.encrypt && self.CryptoKey && self.TextEncoder && csString.fromCodePoint)
            }, t
        }(),
        Qi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.exportInitializationVector = function(t) {
                return Ee(t)
            }, e.prototype.exportSecret = function(t) {
                var e;
                return F(this, void 0, void 0, (function() {
                    var i;
                    return G(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.exportKey("jwk", t)];
                            case 2:
                                return i = r.sent(), [2, null !== (e = i.k) && void 0 !== e ? e : null];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateEncryptionKey = function() {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.crypto.subtle.generateKey({
                                    name: "AES-CTR",
                                    length: 128
                                }, !0, ["encrypt", "decrypt"])];
                            case 2:
                                return [2, t.sent()];
                            case 3:
                                return t.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateInitializationVector = function() {
                return this.isSupported() ? this.crypto.getRandomValues(new Uint8Array(16)) : null
            }, e.prototype.encrypt = function(t, e) {
                return F(this, void 0, void 0, (function() {
                    var i, r;
                    return G(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                i = {
                                    counter: t.initializationVector,
                                    name: "AES-CTR",
                                    length: 64
                                }, r = this.textEncoder.encode(e), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt(i, t.encryptionKey, r)];
                            case 2:
                                return [2, Ee(n.sent())];
                            case 3:
                                return n.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.getRandomValues && !!this.crypto.subtle.generateKey && !!this.crypto.subtle.exportKey
            }, e
        }(Xi),
        Ji = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.importKey = function(t) {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("spki", be(t), {
                                    name: "RSA-OAEP",
                                    hash: "SHA-256"
                                }, !1, ["encrypt"])];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.encrypt = function(t, e) {
                return F(this, void 0, void 0, (function() {
                    var i;
                    return G(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                if (!(i = this.truncateAndEncode(e, 190))) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt({
                                    name: "RSA-OAEP"
                                }, t.publicKey, i)];
                            case 2:
                                return [2, Ee(r.sent())];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.truncateAndEncode = function(t, e) {
                for (var i = 0, r = 0, n = 0; n < t.length; n++) {
                    var o = csString.prototype.codePointAt.call(t, n);
                    if (!o) return null;
                    var s = this.getByteSize(o);
                    if (s + i > e) break;
                    r++, i += s
                }
                var a = csString.prototype.slice.call(t, 0, r);
                return this.textEncoder.encode(a)
            }, e.prototype.getByteSize = function(t) {
                return t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.subtle.importKey
            }, e
        }(Xi);
    ! function(t) {
        t[t.TAP = 0] = "TAP", t[t.LONG_PRESS = 1] = "LONG_PRESS", t[t.DRAG = 2] = "DRAG", t[t.FLICK = 3] = "FLICK", t[t.PINCH_IN = 4] = "PINCH_IN", t[t.PINCH_OUT = 5] = "PINCH_OUT"
    }(Ui || (Ui = {})),
    function(t) {
        t[t.UP = 1] = "UP", t[t.DOWN = 2] = "DOWN", t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 4] = "RIGHT"
    }(Bi || (Bi = {}));
    var Zi = function() {
        function t(t, e, i) {
            this.gestureTracker = t, this.nodeIdentifier = e, this.sensitiveContentService = i
        }
        return t.prototype.start = function() {
            var e = this;
            this.gestureTracker.subscribe(t.TRACKER_IDENTIFIER, (function(t) {
                return e.processGesture(t)
            }))
        }, t.prototype.stop = function() {
            this.gestureTracker.unsubscribe(t.TRACKER_IDENTIFIER)
        }, t.prototype.onEvent = function(t) {
            this.onEventCallback = t
        }, t.prototype.processGesture = function(t) {
            if (t.target && (!v(t.target) || !this.sensitiveContentService.isSensitiveChild(t.target))) {
                var e = this.nodeIdentifier.getId(t.target);
                if (e) switch (t.type) {
                    case Ui.DRAG:
                    case Ui.FLICK:
                        this.triggerGestureRecognitionEvent(we.SWIPE, t, e);
                        break;
                    case Ui.LONG_PRESS:
                        this.triggerGestureRecognitionEvent(we.LONG_PRESS, t, e);
                        break;
                    case Ui.TAP:
                        this.triggerGestureRecognitionEvent(we.TAP, t, e);
                        break;
                    case Ui.PINCH_IN:
                        this.triggerGestureRecognitionEvent(we.PINCH_IN, t, e);
                        break;
                    case Ui.PINCH_OUT:
                        this.triggerGestureRecognitionEvent(we.PINCH_OUT, t, e)
                } else Wt.warn("processGesture: node without identifier")
            }
        }, t.prototype.triggerGestureRecognitionEvent = function(t, e, i) {
            var r = this.buildGestureEvent(e, t),
                n = {
                    type: Ce.GESTURE_RECOGNITION,
                    args: [i, r],
                    date: vt()
                };
            this.onEventCallback(n)
        }, t.prototype.buildGestureEvent = function(t, e) {
            var i = {
                type: e
            };
            return t.direction && (i.direction = t.direction), t.distance && (i.distance = t.distance), t.velocity && (i.velocity = t.velocity), i
        }, t.TRACKER_IDENTIFIER = "RecordingGesturesTracker", t
    }();

    function $i(t) {
        return "csId" in t
    }

    function tr(t) {
        return $i(t) && "children" in t
    }
    var er, ir = function() {
        function t(t) {
            this.nodeIdentifier = t, this.enabled = !1, this.serializationMap = new Map, this.defaultOptions = {}, this.initialCharacterDataRegistry = new Map, this.initialAttributesRegistry = new Map, this.addedNodesDuringSerialization = new Set, this.removedNodesDuringSerialization = new Map
        }
        return t.prototype.beforeSerializeChildren = function(t, e) {
            var i = this;
            return this.enabled ? csArray.prototype.filter.call(e, (function(t) {
                return !i.isAddedNodeDuringSerialization(t)
            })) : e
        }, t.prototype.beforeSerializeAttributes = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.nodeIdentifier.getId(t);
            if (!r) return e;
            var n = this.initialAttributesRegistry.get(r);
            return n ? csArray.prototype.filter.call(e, (function(t) {
                var e = "".concat(t.name).concat(t.namespaceURI || ""),
                    i = n.get(e);
                return !(i && null === i.value)
            })) : e
        }, t.prototype.serializeTextNode = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.initialCharacterDataRegistry.get(e.csId);
            return r && (e.data = r), e
        }, t.prototype.serializeCommentNode = function(t, e, i) {
            if (!this.enabled) return e;
            var r = this.initialCharacterDataRegistry.get(e.csId);
            return r && (e.data = r), e
        }, t.prototype.afterSerialize = function(t, e, i) {
            return this.enabled ? (csNodeparentNode.apply(t) && !this.getSerializedNodeByNode(csNodeparentNode.apply(t)) || i.skipRegisterNode || this.registerNode(e, i), e) : e
        }, t.prototype.afterSerializeShadowRoot = function(t, e, i) {
            return this.enabled ? (i.skipRegisterNode || this.registerNode(e, i), e) : e
        }, t.prototype.enable = function() {
            this.enabled = !0, this.clear()
        }, t.prototype.disable = function() {
            this.enabled = !1, this.clear()
        }, t.prototype.deleteNode = function(t) {
            this.serializationMap.delete(t)
        }, t.prototype.setDefaultSerializationOptions = function(t) {
            this.defaultOptions = t
        }, t.prototype.getSerializedNodeById = function(t) {
            var e;
            return null === (e = this.serializationMap.get(t)) || void 0 === e ? void 0 : e.serializedNode
        }, t.prototype.getSerializedNodeByNode = function(t) {
            var e, i = this.nodeIdentifier.getId(t);
            if (i) return null === (e = this.serializationMap.get(i)) || void 0 === e ? void 0 : e.serializedNode
        }, t.prototype.getOptions = function(t) {
            var e, i = this.nodeIdentifier.getId(t);
            return i && (null === (e = this.serializationMap.get(i)) || void 0 === e ? void 0 : e.options) || this.defaultOptions
        }, t.prototype.registerInitialCharacterData = function(t, e) {
            this.initialCharacterDataRegistry.get(t) || this.initialCharacterDataRegistry.set(t, e)
        }, t.prototype.registerInitialAttributes = function(t, e, i, r) {
            var n = this.initialAttributesRegistry.get(t),
                o = "".concat(i).concat(e || "");
            if (n) {
                if (n.has(o)) return
            } else n = new Map, this.initialAttributesRegistry.set(t, n);
            var s = {
                name: i,
                namespaceURI: e || "",
                value: r
            };
            n.set(o, s)
        }, t.prototype.markAddedTreeAsProcessed = function(t) {
            for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_ALL, null, !1); e = i.nextNode();) {
                var r = this.nodeIdentifier.getId(e);
                r && this.addedNodesDuringSerialization.add(r)
            }
        }, t.prototype.markRemovedNodeAsProcessed = function(t, e, i) {
            var r = this.nodeIdentifier.getId(i),
                n = this.nodeIdentifier.getId(t);
            if (r && n) {
                var o = this.removedNodesDuringSerialization.get(r);
                if (o) csArray.prototype.push.call(o.removedNodeIds, n);
                else {
                    for (var s = [], a = e ? this.nodeIdentifier.getId(e) : null, c = 0; c < csNodechildNodes.apply(i).length; c += 1) {
                        var u = this.nodeIdentifier.getId(csNodechildNodes.apply(i)[c]);
                        u && !this.addedNodesDuringSerialization.has(u) && (a && u === a && csArray.prototype.push.call(s, n), csArray.prototype.push.call(s, u))
                    }
                    null === a && csArray.prototype.push.call(s, n);
                    var l = [n];
                    this.removedNodesDuringSerialization.set(r, {
                        childNodeIds: s,
                        removedNodeIds: l
                    })
                }
            }
        }, t.prototype.addSerializedChildToParent = function(t, e, i) {
            var r = this.getSerializedNodeByNode(t);
            r && tr(r) && this.updateParentSerializedChildren(e, r, i)
        }, t.prototype.isAddedNodeDuringSerialization = function(t) {
            var e = this.nodeIdentifier.getId(t);
            return !!e && this.addedNodesDuringSerialization.has(e)
        }, t.prototype.getInitialIndexInParent = function(t, e) {
            var i = this.nodeIdentifier.getId(e),
                r = this.nodeIdentifier.getId(t);
            if (!i || !r) return -1;
            var n = this.removedNodesDuringSerialization.get(i);
            return n ? csArray.prototype.indexOf.call(n.childNodeIds, r) : -1
        }, t.prototype.clear = function() {
            this.serializationMap.clear(), this.initialCharacterDataRegistry.clear(), this.initialAttributesRegistry.clear(), this.addedNodesDuringSerialization.clear(), this.removedNodesDuringSerialization.clear()
        }, t.prototype.registerNode = function(t, e) {
            t.csId && (this.restoreInitialAttributes(t.csId, t, e), this.addRemovedChildrenToParent(t.csId, t), this.serializationMap.set(t.csId, {
                serializedNode: t,
                options: e
            }))
        }, t.prototype.restoreInitialAttributes = function(t, e, i) {
            if (function(t) {
                    return tr(t) && "attributes" in t && "localName" in t && "namespaceURI" in t
                }(e)) {
                var r = this.initialAttributesRegistry.get(t);
                if (r) {
                    for (var n = 0, o = e.attributes; n < o.length; n++) {
                        var s = o[n],
                            a = "".concat(s.name).concat(s.namespaceURI || ""),
                            c = r.get(a);
                        c && null !== c.value && (s.value = c.value, r.delete(a))
                    }
                    r.forEach((function(t) {
                        null !== t.value && csArray.prototype.push.call(e.attributes, {
                            name: t.name,
                            value: t.value,
                            namespaceURI: t.namespaceURI,
                            anonymized: i.withAnonymization || !1
                        })
                    }))
                }
            }
        }, t.prototype.updateParentSerializedChildren = function(t, e, i) {
            var r;
            t >= 0 && $i(i) ? csArray.prototype.splice.call(e.children, t, 0, i) : !("csId" in (r = i)) && "artificial" in r && csArray.prototype.push.call(e.children, i)
        }, t.prototype.addRemovedChildrenToParent = function(t, e) {
            var i;
            if (tr(e)) {
                var r = this.removedNodesDuringSerialization.get(t);
                if (r)
                    for (var n = 0, o = r.removedNodeIds; n < o.length; n++) {
                        var s = o[n],
                            a = csArray.prototype.indexOf.call(r.childNodeIds, s);
                        if (-1 !== a) {
                            var c = null === (i = this.serializationMap.get(s)) || void 0 === i ? void 0 : i.serializedNode;
                            void 0 !== c && this.updateParentSerializedChildren(a, e, c)
                        }
                    }
            }
        }, t
    }();

    function rr() {
        return F(this, void 0, void 0, (function() {
            return G(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 0)
                        }))];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }! function(t) {
        t[t.WebElement = 0] = "WebElement", t[t.MobileView = 1] = "MobileView", t[t.WebViewContainer = 2] = "WebViewContainer"
    }(er || (er = {}));
    var nr, or, sr, ar = function() {
            function t(t) {
                this.processors = t
            }
            return t.prototype.serialize = function(t, e) {
                void 0 === e && (e = {});
                var i, r = B({}, e),
                    n = t.nodeType;
                switch (n) {
                    case Node.ELEMENT_NODE:
                        i = this.serializeElementNode(t, r);
                        break;
                    case Node.TEXT_NODE:
                        i = this.serializeTextNode(t, r);
                        break;
                    case Node.CDATA_SECTION_NODE:
                        i = this.serializeCDATASectionNode(t, r);
                        break;
                    case Node.COMMENT_NODE:
                        i = this.serializeCommentNode(t, r);
                        break;
                    case Node.DOCUMENT_TYPE_NODE:
                        i = this.serializeDoctypeNode(t, r);
                        break;
                    case Node.DOCUMENT_NODE:
                        i = this.serializeDocumentNode(t, r);
                        break;
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        i = this.serializeDocumentFragmentNode(t, r);
                        break;
                    default:
                        throw new Error("serialization is not supported (nodeType: ".concat(n, ")"))
                }
                return i = csArray.prototype.reduce.call(this.processors, (function(e, i) {
                    return i.afterSerialize ? i.afterSerialize(t, e, r) : e
                }), i)
            }, t.prototype.serializeElementNode = function(t, e) {
                var i, r = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeElementNode ? r.serializeElementNode(t, n, e) : n
                }), {
                    attributes: []
                });
                (i = csArray.prototype.push).call.apply(i, W([r.attributes], this.serializeAttributes(t, e), !1));
                var n = csElementshadowRoot.apply(t);
                return n && (r.shadowRoot = this.serializeShadowRootNode(n, e)), r.children = this.serializeChildren(t, e), r
            }, t.prototype.serializeAttributes = function(t, e) {
                var i = this,
                    r = Ve(t.attributes);
                return csArray.prototype.map.call(csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeAttributes ? r.beforeSerializeAttributes(t, i, e) : i
                }), r), (function(r) {
                    return i.serializeAttribute(t, r, e)
                }))
            }, t.prototype.serializeAttribute = function(t, e, i) {
                return csArray.prototype.reduce.call(this.processors, (function(r, n) {
                    return n.serializeAttribute ? n.serializeAttribute(t, e, r, i) : r
                }), {})
            }, t.prototype.runBeforeSerializeChildrenHook = function(t, e) {
                var i = e.excludedNodes ? function(t, e) {
                    for (var i = t.length, r = [], n = 0; n < i; n += 1) {
                        var o = t[n];
                        e(o) && csArray.prototype.push.call(r, o)
                    }
                    return r
                }(csNodechildNodes.apply(t), (function(t) {
                    return !e.excludedNodes.get(t)
                })) : Ve(csNodechildNodes.apply(t));
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeChildren ? r.beforeSerializeChildren(t, i, e) : i
                }), i)
            }, t.prototype.serializeChildren = function(t, e) {
                var i = this;
                if (e.skipChildrenSerialization) return [];
                var r = this.runBeforeSerializeChildrenHook(t, e);
                return csArray.prototype.map.call(r, (function(t) {
                    return i.serialize(t, e)
                }))
            }, t.prototype.serializeTextNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeTextNode ? r.serializeTextNode(t, n, e) : n
                }), {})
            }, t.prototype.serializeCDATASectionNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeCDATASectionNode ? r.serializeCDATASectionNode(t, n, e) : n
                }), {})
            }, t.prototype.serializeCommentNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeCommentNode ? r.serializeCommentNode(t, n, e) : n
                }), {})
            }, t.prototype.serializeDoctypeNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeDoctypeNode ? r.serializeDoctypeNode(t, n, e) : n
                }), {})
            }, t.prototype.serializeDocumentNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeDocumentNode ? r.serializeDocumentNode(t, n, e) : n
                }), {});
                return i.children = this.serializeChildren(t, e), i
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = i;
                    return r.serializeNode && (n = r.serializeNode(t, i, e)), r.serializeShadowRootNode ? r.serializeShadowRootNode(t, n, e) : n
                }), {});
                return i.children = this.serializeChildren(t, e), i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.afterSerializeShadowRoot ? r.afterSerializeShadowRoot(t, i, e) : i
                }), i)
            }, t.prototype.serializeDocumentFragmentNode = function(t, e) {
                if (t.mode) return this.serializeShadowRootNode(t, e);
                throw new Error("Not implemented yet.")
            }, t
        }(),
        cr = function(t) {
            return Object.getOwnPropertyDescriptor(t.prototype, "localName")
        },
        ur = null !== (nr = cr(Element)) && void 0 !== nr ? nr : cr(Node),
        lr = function() {
            function t() {
                this.inlineCssToRulesCount = new Map, this.virtualDoc = document.implementation.createHTMLDocument("")
            }
            return t.prototype.beforeSerializeChildren = function(t, e) {
                if (b(t)) {
                    var i = this.getAllCssRules(t);
                    if (null === i || 0 === i.length) return e;
                    if (this.isEmptyStyleElement(t)) csArray.prototype.push.call(e, this.createTextNodeFromRules(i));
                    else {
                        var r = this.lengthOfInlineCssRules(t);
                        if (r === i.length) return e;
                        for (var n = new csArray(i.length - r), o = r, s = 0; o < i.length; o += 1, s += 1) n[s] = i[o];
                        csArray.prototype.push.call(e, this.createTextNodeFromRules(n))
                    }
                }
                return e
            }, t.prototype.lengthOfInlineCssRules = function(t) {
                var e = this.inlineCssToRulesCount.get(t.textContent);
                if (e) return e;
                var i = t.cloneNode(!0);
                i.textContent = t.textContent, this.virtualDoc.head.appendChild(i);
                var r = this.getAllCssRules(i);
                return e = r ? r.length : 0, this.inlineCssToRulesCount.set(t.textContent, e), this.virtualDoc.head.removeChild(i), e
            }, t.prototype.getAllCssRules = function(t) {
                try {
                    var e = t.sheet;
                    return e ? e.cssRules || e.rules : null
                } catch (t) {
                    if ("SecurityError" !== t.name && "InvalidAccessError" !== t.name) throw t;
                    return null
                }
            }, t.prototype.isEmptyStyleElement = function(t) {
                var e = t.textContent || "";
                return /^\s*$/.test(e)
            }, t.prototype.createTextNodeFromRules = function(t) {
                var e = "";
                ze(t, (function(t) {
                    return e += t.cssText
                }));
                var i = document.createTextNode(e);
                return i.__contentsquare_artificial = !0, i
            }, t.prototype.serializeNode = function(t, e) {
                return e.nodeType = t.nodeType, e.format = er.WebElement, t.__contentsquare_artificial && (e.artificial = t.__contentsquare_artificial), e
            }, t.prototype.serializeElementNode = function(t, e) {
                var i;
                return e.localName = (i = t, ur.get.call(i)), e.namespaceURI = t.namespaceURI, e
            }, t.prototype.serializeAttribute = function(t, e, i) {
                return i.name = e.name, i.value = e.value, i.namespaceURI = null !== e.namespaceURI ? e.namespaceURI : "", i
            }, t.prototype.serializeTextNode = function(t, e) {
                return e.data = t.data, e
            }, t.prototype.serializeCDATASectionNode = function(t, e) {
                return e.data = t.data, e
            }, t.prototype.serializeCommentNode = function(t, e) {
                return e.data = t.data, e
            }, t.prototype.serializeDoctypeNode = function(t, e) {
                return e.name = t.name, e.publicId = t.publicId, e.systemId = t.systemId, e
            }, t.prototype.serializeDocumentNode = function(e, i) {
                return i.baseURI = t.getBaseURI(e), i
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                return e.mode = t.mode, e
            }, t.getBaseURI = function(t) {
                var e = t.baseURI;
                if (null == e) {
                    var i = t.getElementsByTagName("base");
                    e = 0 !== i.length ? i[0].href : t.URL
                }
                return e
            }, t
        }(),
        hr = function(t) {
            function e(e, i) {
                return t.call(this, W([new lr, e], i, !0)) || this
            }
            return U(e, t), e
        }(ar),
        pr = {
            taskTime: 25
        },
        dr = function(t) {
            function e(e, i, r, n, o) {
                void 0 === o && (o = pr);
                var s = t.call(this, i, W([r], n, !0)) || this;
                return s.nodeIdentifierService = e, s.asyncSerializerMapProcessor = r, s.asyncSerializerOptions = o, s.lastSerializationId = 0, s.taskTime = s.asyncSerializerOptions.taskTime, s
            }
            return U(e, t), e.prototype.isAsynchronous = function() {
                return !0
            }, e.prototype.handleMutationAttribute = function(t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2];
                this.asyncSerializerMapProcessor.getSerializedNodeById(i) || this.asyncSerializerMapProcessor.registerInitialAttributes(i, r, n, t)
            }, e.prototype.handleMutationCharacterData = function(t, e) {
                var i = e[0];
                this.asyncSerializerMapProcessor.getSerializedNodeById(i) || this.asyncSerializerMapProcessor.registerInitialCharacterData(i, t.oldValue || "")
            }, e.prototype.serializeMutationChildList = function(t, e, i) {
                var r = this.serializeAddedNodes(t, e, i);
                return this.markAddedTreeAsProcessed(t), {
                    removedNodes: this.serializeRemovedNodes(t, e),
                    addedNodes: r
                }
            }, e.prototype.startSerializeAsync = function(t, e) {
                return void 0 === e && (e = {}), F(this, void 0, void 0, (function() {
                    return G(this, (function(i) {
                        return this.lastSerializationId += 1, this.asyncSerializerMapProcessor.setDefaultSerializationOptions(e), [2, this.traverseAndSerialize(t, e)]
                    }))
                }))
            }, e.prototype.serializeAddedNodes = function(t, e, i) {
                var r = [],
                    n = null;
                if (t.nextSibling) {
                    var o = this.nodeIdentifierService.getId(t.nextSibling);
                    n = void 0 !== o ? o : null
                }
                for (var s = this.nodeIdentifierService.getId(t.target), a = 0; a < t.addedNodes.length; a += 1) {
                    var c = t.addedNodes[a],
                        u = this.serialize(c, {
                            excludedNodes: i,
                            skipRegisterNode: !0,
                            withAnonymization: e
                        }),
                        l = i.get(c);
                    l && i.set(c, l - 1), csArray.prototype.push.call(r, [s, n, u])
                }
                return r
            }, e.prototype.markAddedTreeAsProcessed = function(t) {
                for (var e = 0; e < t.addedNodes.length; e += 1) {
                    var i = t.addedNodes[e];
                    this.asyncSerializerMapProcessor.markAddedTreeAsProcessed(i)
                }
            }, e.prototype.indexInParent = function(t, e) {
                if (!e) return -1;
                var i = this.asyncSerializerMapProcessor.getInitialIndexInParent(t, e);
                return i >= 0 ? i : csArray.prototype.indexOf.call(csNodechildNodes.apply(e), t)
            }, e.prototype.serializeRemovedNodes = function(t, e) {
                for (var i = [], r = 0; r < t.removedNodes.length; r += 1) {
                    var n = t.removedNodes[r];
                    if (this.asyncSerializerMapProcessor.markRemovedNodeAsProcessed(n, t.nextSibling, t.target), this.isSerializedNodeProcessed(n)) this.isAlreadySerialized(n) && this.traverseAndSerializeUnprocessedNodes(n, e);
                    else {
                        var o = this.serialize(n, {
                            withAnonymization: e
                        });
                        if (this.isAlreadySerialized(t.target)) {
                            var s = this.indexInParent(n, t.target);
                            this.asyncSerializerMapProcessor.addSerializedChildToParent(t.target, s, o)
                        }
                    }
                    var a = this.nodeIdentifierService.getId(n);
                    a && csArray.prototype.push.call(i, [a])
                }
                return i
            }, e.prototype.traverseAndSerializeUnprocessedNodes = function(t, e) {
                for (var i = 0; i < csNodechildNodes.apply(t).length; i += 1) {
                    var r = csNodechildNodes.apply(t)[i];
                    if (this.isAlreadySerialized(r)) this.traverseAndSerializeUnprocessedNodes(r, e);
                    else if (!this.asyncSerializerMapProcessor.isAddedNodeDuringSerialization(r)) {
                        var n = this.serialize(r, {
                                withAnonymization: e
                            }),
                            o = this.indexInParent(r, t);
                        this.asyncSerializerMapProcessor.addSerializedChildToParent(t, o, n)
                    }
                }
            }, e.prototype.isAlreadySerialized = function(t) {
                return !!this.asyncSerializerMapProcessor.getSerializedNodeByNode(t)
            }, e.prototype.isSerializedNodeProcessed = function(t) {
                return this.isAlreadySerialized(t) || this.asyncSerializerMapProcessor.isAddedNodeDuringSerialization(t)
            }, e.prototype.traverseAndSerialize = function(t, e) {
                return void 0 === e && (e = {}), F(this, void 0, void 0, (function() {
                    var i, r, n, o, s, a, c, u, l, h, p;
                    return G(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                return i = this.lastSerializationId, r = vt(), this.asyncSerializerMapProcessor.enable(), e.skipChildrenSerialization = !0, n = [t], [4, rr()];
                            case 1:
                                if (d.sent(), i !== this.lastSerializationId) return [2, null];
                                this.timer = csDate.now(), this.serialize(t, e), d.label = 2;
                            case 2:
                                if (!(n.length > 0)) return [3, 7];
                                o = csArray.prototype.pop.call(n), s = this.asyncSerializerMapProcessor.getOptions(o), a = this.runBeforeSerializeChildrenHook(o, s), c = csArray.prototype.shift.call(a), d.label = 3;
                            case 3:
                                return c ? csDate.now() - this.timer > this.taskTime ? [4, rr()] : [3, 5] : [3, 6];
                            case 4:
                                if (d.sent(), i !== this.lastSerializationId) return [2, null];
                                this.timer = csDate.now(), d.label = 5;
                            case 5:
                                return this.isSerializedNodeProcessed(c) ? (c = csArray.prototype.shift.call(a), [3, 3]) : (csArray.prototype.push.call(n, c), u = this.serialize(c, s), l = this.indexInParent(c, o), this.asyncSerializerMapProcessor.addSerializedChildToParent(o, l, u), v(c) && csElementshadowRoot.apply(c) && (h = csElementshadowRoot.apply(c), csArray.prototype.push.call(n, h)), c = csArray.prototype.shift.call(a), [3, 3]);
                            case 6:
                                return [3, 2];
                            case 7:
                                if (!(p = this.asyncSerializerMapProcessor.getSerializedNodeByNode(t))) throw this.asyncSerializerMapProcessor.disable(), new Error("traverseAndSerialize : fail to serialize");
                                return this.asyncSerializerMapProcessor.disable(), [2, {
                                    args: [p],
                                    date: r,
                                    type: Ce.INITIAL_DOM
                                }]
                        }
                    }))
                }))
            }, e
        }(hr),
        fr = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.isAsynchronous = function() {
                return !1
            }, e
        }(hr),
        yr = function() {
            function t() {
                this.isRunning = !1
            }
            return t.prototype.isSupported = function() {
                return "object" == typeof window.customElements && "function" == typeof window.customElements.whenDefined && "function" == typeof window.Promise
            }, t.prototype.start = function() {
                !this.isRunning && this.isSupported() && (this.elements ? this.elements.clear() : this.elements = new Set, this.isRunning = !0)
            }, t.prototype.stop = function() {
                this.isRunning && (this.isRunning = !1)
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.register = function(t) {
                return F(this, void 0, void 0, (function() {
                    return G(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.elements.has(t) ? [2] : (this.elements.add(t), [4, window.customElements.whenDefined(t)]);
                            case 1:
                                return e.sent(), this.onRegistration(t), [2]
                        }
                    }))
                }))
            }, t.prototype.onRegistration = function(t) {
                this.isRunning && this.onEventCallback({
                    type: Ce.CUSTOM_ELEMENT_REGISTRATION,
                    date: vt(),
                    args: [t]
                })
            }, t.prototype.getProcessor = function() {
                return new(function() {
                    function t(t) {
                        this.tracker = t
                    }
                    return t.prototype.serializeElementNode = function(t, e) {
                        return function(t) {
                            return v(t) && csString.prototype.indexOf.call(t.tagName, "-") > 0 && csArray.prototype.indexOf.call(A, csString.prototype.toLocaleLowerCase.call(t.tagName)) < 0
                        }(t) && this.tracker.register(csString.prototype.toLowerCase.call(t.tagName)), e
                    }, t
                }())(this)
            }, t
        }(),
        vr = function() {
            function t(t) {
                this.recordingBatch = t
            }
            return t.prototype.getRequestPayload = function() {
                var t = this.recordingBatch.extractEvents(Ce.JAVASCRIPT_ERROR, Ce.API_ERROR, Ce.CUSTOM_ERROR);
                return t.length ? ot(t) : ""
            }, t
        }(),
        gr = function() {
            function t(t) {
                this.nodeIdentifierService = t
            }
            return t.prototype.serializeNode = function(t, e, i) {
                var r = this.nodeIdentifierService.getId(t);
                return r && (e.csId = r), e
            }, t
        }(),
        mr = function() {
            function t(t, e) {
                this.monkeyPatcher = t, this.nodeIdentifier = e, this.sheetId = 1
            }
            return t.isAdoptedStyleSheetsSupported = function() {
                return "adoptedStyleSheets" in Document.prototype && "queueMicrotask" in window
            }, t.prototype.init = function() {
                var e = this;
                t.isAdoptedStyleSheetsSupported() && (this.stylesheets = new Set, this.insertRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "insertRule",
                    hook: function(t) {
                        var i = t.context,
                            r = t.args;
                        e.insertRuleStylesheet(i, r)
                    }
                }), this.deleteRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "deleteRule",
                    hook: function(t) {
                        var i = t.context,
                            r = t.args;
                        e.deleteRuleStylesheet(i, r)
                    }
                }), this.adoptedStyleSheetsSetShadowRoot = this.monkeyPatcher.createDescriptorInterceptor(window.ShadowRoot.prototype, "adoptedStyleSheets", this.setStylesheets.bind(this)), this.adoptedStyleSheetsSetDocument = this.monkeyPatcher.createDescriptorInterceptor(window.Document.prototype, "adoptedStyleSheets", this.setStylesheets.bind(this)))
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                t.isAdoptedStyleSheetsSupported() && (this.insertRuleInterceptor && this.insertRuleInterceptor.activate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.activate(), this.adoptedStyleSheetsSetShadowRoot && this.adoptedStyleSheetsSetShadowRoot.activate(), this.adoptedStyleSheetsSetDocument && this.adoptedStyleSheetsSetDocument.activate())
            }, t.prototype.stop = function() {
                t.isAdoptedStyleSheetsSupported() && (this.stylesheets.clear(), this.insertRuleInterceptor && this.insertRuleInterceptor.deactivate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.deactivate(), this.adoptedStyleSheetsSetShadowRoot && this.adoptedStyleSheetsSetShadowRoot.deactivate(), this.adoptedStyleSheetsSetDocument && this.adoptedStyleSheetsSetDocument.deactivate())
            }, t.prototype.serializeDocumentNode = function(t, e) {
                return t.adoptedStyleSheets && this.setStylesheets(t, t.adoptedStyleSheets), e
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                return t.adoptedStyleSheets && this.setStylesheets(t, t.adoptedStyleSheets), e
            }, t.prototype.setStylesheets = function(t, e) {
                var i = this;
                csArray.prototype.forEach.call(e, (function(t) {
                    return i.registerStylesheet(t)
                }));
                var r = csArray.prototype.map.call(e, (function(t) {
                        return i.getStylesheetId(t)
                    })),
                    n = this.nodeIdentifier.getId(t);
                n && queueMicrotask((function() {
                    var t = {
                        type: Ce.SET_ADOPTED_STYLE_SHEETS,
                        args: [n, r],
                        date: vt()
                    };
                    i.onEventCallback(t)
                }))
            }, t.prototype.getStylesheetId = function(t) {
                return t.__adopted_stylesheet_id
            }, t.prototype.insertRuleStylesheet = function(t, e) {
                var i = e[0],
                    r = e[1],
                    n = this.getAdoptedStylesheetId(t);
                n && this.onEventCallback({
                    date: vt(),
                    type: Ce.ADOPTED_STYLESHEET_RULE_INSERT,
                    args: zt(r) ? [n, i, r] : [n, i]
                })
            }, t.prototype.deleteRuleStylesheet = function(t, e) {
                var i = e[0],
                    r = this.getAdoptedStylesheetId(t);
                r && r && this.onEventCallback({
                    date: vt(),
                    type: Ce.ADOPTED_STYLESHEET_RULE_DELETE,
                    args: [r, i]
                })
            }, t.prototype.getAdoptedStylesheetId = function(t) {
                return this.stylesheets.has(t) && t.__adopted_stylesheet_id ? t.__adopted_stylesheet_id : null
            }, t.prototype.registerStylesheet = function(t) {
                if (!this.stylesheets.has(t)) {
                    var e = this.sheetId++;
                    t.__adopted_stylesheet_id = e, this.stylesheets.add(t);
                    var i = this.serializeStyleSheet(t),
                        r = {
                            type: Ce.REGISTER_ADOPTED_STYLE_SHEET,
                            args: [e, i],
                            date: vt()
                        };
                    this.onEventCallback(r)
                }
            }, t.prototype.serializeStyleSheet = function(t) {
                var e = [];
                try {
                    e = csArray.prototype.map.call(t.cssRules, (function(t) {
                        return t.cssText
                    }))
                } catch (t) {
                    Wt.warn("AdoptedStylesheetsTracker.serializeStyleSheet: could not extract cssRules")
                }
                return {
                    cssRules: e
                }
            }, t
        }(),
        Sr = function() {
            function t(t, e, i, r, n, o, s, a, c, u, l, h, p, d, f, y, v, g) {
                this.sessionService = t, this.configuration = e, this.compressor = i, this.selector = r, this.consentService = n, this.basicParameters = o, this.commandsService = s, this.pii = a, this.sessionRenewer = c, this.urlService = u, this.sensitiveContentService = l, this.javaScriptErrorsTracker = h, this.javaScriptErrorsAnonymizer = p, this.apiErrorsTracker = d, this.gestureTracker = f, this.apiErrorsAnonymizer = y, this.lifeCycleEventsEmitter = v, this.customEventEmitter = g
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new _i,
                    i = new ni,
                    r = new oi(this.sensitiveContentService);
                this.anonymizationService = new ai(this.pii, this.configuration), this.anonymizationService.init();
                var n = new bi,
                    o = new Ri(e, i, this.configuration),
                    s = new Qi(window.crypto),
                    a = new Ji(window.crypto);
                a.init(), s.init();
                var c = new Yi,
                    u = new Yi,
                    l = new Yi,
                    h = new Yi,
                    p = new Yi,
                    d = new Ne(i, this.configuration, a, s, c, u, l, p, h, this.compressor);
                d.init();
                var f = new Ki(d),
                    y = [r, this.anonymizationService, f, n],
                    v = new mr(e, i);
                v.init(), mr.isAdoptedStyleSheetsSupported() && csArray.prototype.push.call(y, v);
                var g = new ji(this.sensitiveContentService, 1e3);
                this.configuration.textVisibilityEnabled && ji.isSupported() && csArray.prototype.push.call(y, g);
                var m, S = new gr(i),
                    E = new yr;
                if (E.isSupported() && csArray.prototype.push.call(y, E.getProcessor()), this.isAsynchronousSerialization()) {
                    var b = new ir(i);
                    m = new dr(i, S, b, y)
                } else m = new fr(S, y);
                this.recordingBatch = new We;
                var C = new Ke,
                    w = new hi(C, this.basicParameters),
                    T = new Wi(this.configuration.getRecordingUri(), "v2/recording");
                this.configuration.useMalkaPipeline && (w.addProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates())
                        }
                    }
                }), T.setRequestParametersProviders(this.basicParameters, {
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates()),
                            ct: fe.UNCOMPRESSED,
                            hlm: "true"
                        }
                    }
                }), T.setRequestPayloadProvider(new vr(this.recordingBatch)));
                var R = this.createRecordingPostRequest(this.compressor);
                this.mutationSerializer = new ii(this.consentService, m, i, this.anonymizationService, d, this.configuration, this.urlService), this.mutationSerializer.init(), this.recordingPageEventsTracker = new xe(this.selector, i, this.sensitiveContentService, d), this.recordingPageEventsTracker.init();
                var A = new Ge(this.mutationSerializer, o, n, this.lifeCycleEventsEmitter, i, this.sensitiveContentService),
                    k = new li("csPersisted"),
                    I = this.createRecordingPostRequest(this.compressor);
                this.recordingRecoveryService = new Je(I, this.recordingBatch, k, this.configuration, T), this.recordingService = new Qe(this.configuration, R, this.recordingBatch, w, C, new ri(e, i, this.sensitiveContentService, n), A, this.recordingPageEventsTracker, new yi(window.location, this.pii), new Zi(this.gestureTracker, i, this.sensitiveContentService), this.sessionRenewer, this.sessionService, n, new Ci(window), this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, g, this.apiErrorsAnonymizer, d, this.recordingRecoveryService, E, v), this.customEventEmitter.addListeners(this.recordingService), this.recordingInactivityService = new vi(this.recordingPageEventsTracker, A, new pi(new fi, this.configuration), R, this.mutationSerializer), o.init(), this.recordingInactivityService.init(), this.recordingService.init(), this.commandsService.register(["isRecording"], (function() {
                    return t.sessionService.isReplayRecorded()
                })), this.commandsService.register(["setCapturedElementsSelector"], (function(e) {
                    t.anonymizationService.setWhitelistedElementsSelector(e)
                })), this.commandsService.register(["setPIISelectors"], (function(e) {
                    t.sensitiveContentService.setPIISelectors(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.recordingRecoveryService.recover(), this.sessionService.isReplayRecorded() && (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.recordingInactivityService.start(), this.recordingService.start(), this.recordingRecoveryService.start())
            }, t.prototype.onArtificialPageViewEnd = function() {
                this.recordingService.clearStates(), this.sessionService.isReplayRecorded() && !this.sessionService.isTemporarilyRecorded() && this.recordingRecoveryService.sendLastMessageBeacon()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.mutationSerializer.resetAnonymization(), this.sessionService.isReplayRecorded() ? (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.recordingInactivityService.restart(), this.recordingService.restart(), this.recordingRecoveryService.restart()) : (this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop())
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.recordingService.clearStates(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onOptout = function() {
                this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onConsentGranted = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentGranted()
            }, t.prototype.onConsentWithdrawn = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentWithdrawn()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                var i = this;
                this.configuration.useMalkaPipeline && (t === $t.NOT_RECORDED && e === te.ETR_OFF ? (this.recordingService.clearEvents(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()) : (this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(i.sessionService.getRecordingStates())
                        }
                    }
                }), this.recordingService.allowSendingEventsFromQuotaService(), this.mutationSerializer.isDOMSerializationInProgress() || this.recordingService.pushEvents()))
            }, t.prototype.onInitialDomStart = function() {
                this.recordingService.blockSendingEventsFromSerialization(), this.recordingRecoveryService.blockSendingLastMessage()
            }, t.prototype.onInitialDomDone = function(t) {
                this.recordingPageEventsTracker.start(), this.recordingService.addInitialDom(t), this.recordingService.allowSendingEventsFromSerialization(), this.recordingRecoveryService.allowSendingLastMessage()
            }, t.prototype.createRecordingPostRequest = function(t) {
                var e = this.configuration.useMalkaPipeline ? "v2/recording" : "recording",
                    i = this.configuration.useMalkaPipeline ? "byteArray" : "base64",
                    r = new Ae(this.configuration.getRecordingUri(), e);
                return r.setCompressionOptions(t, i), r
            }, t.prototype.isAsynchronousSerialization = function() {
                return mt() && "findIndex" in csArray.prototype && this.configuration.asyncSerializerEnabled
            }, t.isSupported = function() {
                return "MutationObserver" in window && "visibilityState" in document
            }, t
        }(),
        Er = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.configuration = i, this.naturalPageViewSent = !1
            }
            return t.prototype.isNaturalPageViewSent = function() {
                return this.naturalPageViewSent
            }, t.prototype.setNaturalPageViewSent = function(t) {
                this.naturalPageViewSent = t
            }, t.prototype.getTrackingContext = function() {
                var t = this.getSessionKey(),
                    e = this.getPageNumber(),
                    i = this.getProjectId();
                return t && e ? {
                    projectId: i,
                    sessionKey: t,
                    pageNumber: e
                } : null
            }, t.prototype.getSessionKey = function() {
                var t = this.visitorService.getVisitor();
                return t ? "".concat(t.id, ".").concat(t.visitsCount) : null
            }, t.prototype.getPageNumber = function() {
                return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null
            }, t.prototype.getProjectId = function() {
                return this.configuration.projectId
            }, t
        }(),
        br = function() {
            function t(t) {
                this.trackingContextService = t, this.registeredCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                if (Ut(t) && (this.registerCallback(t), this.trackingContextService.isNaturalPageViewSent())) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && this.executeAsync(t, e)
                }
            }, t.prototype.registerCallback = function(t) {
                csArray.prototype.push.call(this.registeredCallbacks, t)
            }, t.prototype.executeRegisteredCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getTrackingContext();
                null !== e && csArray.prototype.map.call(this.registeredCallbacks, (function(i) {
                    return t.executeAsync(i, e)
                }))
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Cr = function() {
            function t(t) {
                this.trackingContextService = t, this.pendingCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(t) : void this.addPendingCallback(t)
            }, t.prototype.applyGetSessionKey = function(t) {
                var e = this.trackingContextService.getSessionKey();
                return this.hasCallback(t) && null !== e && this.executeAsync(t.callback, e), e
            }, t.prototype.addPendingCallback = function(t) {
                this.hasCallback(t) && csArray.prototype.push.call(this.pendingCallbacks, t.callback)
            }, t.prototype.flushPendingCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getSessionKey();
                null !== e && csArray.prototype.forEach.call(this.pendingCallbacks, (function(i) {
                    t.executeAsync(i, e)
                })), this.pendingCallbacks = []
            }, t.prototype.hasCallback = function(t) {
                return t && "function" == typeof t.callback
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        wr = function() {
            function t(t, e) {
                this.iframeParentToChildrenCommunicationService = t, this.trackingContextService = e
            }
            return t.prototype.onIframeIntegrationCallback = function(t) {
                if (this.trackingContextService.isNaturalPageViewSent()) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && (t.trackingContext = e, this.iframeParentToChildrenCommunicationService.sendToChildren(_t.IntegrationCallback, t))
                }
            }, t.prototype.sendAfterPageViewCallbackToChildren = function() {
                var t = this.trackingContextService.getTrackingContext();
                if (null !== t) {
                    var e = {
                        trackingContext: t,
                        initiator: kt.AfterPageView
                    };
                    this.iframeParentToChildrenCommunicationService.sendToChildren(_t.IntegrationCallback, e)
                }
            }, t
        }(),
        Tr = ["afterPageView"],
        Rr = ["getSessionKey"],
        Ar = function() {
            function t(t, e, i, r, n, o) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i, this.iframeEventsEmitter = r, this.iframeParentToChildrenCommunicationService = n, this.configuration = o
            }
            return t.prototype.init = function() {
                var t = this;
                this.trackingContextService = new Er(this.visitorService, this.sessionService, this.configuration), this.afterPageViewService = new br(this.trackingContextService), this.getSessionKeyService = new Cr(this.trackingContextService), this.parentToChildrenIntegrationService = new wr(this.iframeParentToChildrenCommunicationService, this.trackingContextService), this.iframeEventsEmitter.addListeners(this.parentToChildrenIntegrationService), this.commandsService.register(Rr, (function(e) {
                    return t.getSessionKeyService.handleCommand(e)
                })), this.commandsService.register(Tr, (function(e) {
                    t.afterPageViewService.handleCommand(e)
                }))
            }, t.prototype.onAfterNaturalPageView = function() {
                this.trackingContextService.setNaturalPageViewSent(!0), this.getSessionKeyService.flushPendingCallbacks(), this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t
        }(),
        kr = function() {
            function t(t, e) {
                this.key = csString.prototype.slice.call(t, 0, 512), this.value = xt(e) ? csString.prototype.slice.call(e, 0, 255) : e
            }
            return t.isValid = function(t, e) {
                return xt(t) && (xt(e) || Dt(e))
            }, t
        }(),
        Ir = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.batch = e, r.pii = i, r.dynamicVariablesQueue = [], r
            }
            return U(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.dynamicVariablesQueue, (function(e) {
                    return t.trackDynamicVariable(e.key, e.value)
                })), this.dynamicVariablesQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackDynamicVariable = function(t, e) {
                this.isStarted ? kr.isValid(t, e) && this.batch.add(new kr(this.pii.anonymize(t), this.pii.anonymize(e))) : csArray.prototype.push.call(this.dynamicVariablesQueue, {
                    key: t,
                    value: e
                })
            }, e
        }(Xe),
        _r = function() {
            function t(t) {
                this.compressor = t, this.batch = []
            }
            return t.prototype.add = function(t) {
                csArray.prototype.push.call(this.batch, t), this.setBatchReadyCall()
            }, t.prototype.clear = function() {
                this.batch = []
            }, t.prototype.onBatchReady = function(t) {
                this.batchReadyCallback = t
            }, t.prototype.getRequestParameters = function() {
                for (var t = {}, e = 0, i = this.batch; e < i.length; e++) {
                    var r = i[e];
                    t[r.key] = r.value
                }
                return {
                    dv: this.compressor.compressSync(csJSON.stringify(t)),
                    ct: this.compressor.algorithm
                }
            }, t.prototype.setBatchReadyCall = function() {
                this.batchReadyCallback()
            }, H([Hi(), Kt("dynamicVariablesBatchReady")], t.prototype, "setBatchReadyCall", null), t
        }(),
        Pr = ["trackDynamicVariable"],
        Nr = function() {
            function t(t, e, i, r, n, o) {
                this.commandsService = t, this.sessionService = e, this.configuration = i, this.basicParameters = r, this.compressor = n, this.pii = o, this.request = new ut(this.configuration.getTrackerUri(), "dvar"), this.batch = new _r(this.compressor), this.service = new Ir(this.batch, this.pii)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicParameters, this.batch), this.sessionService.setDynamicVariablesService(this.service), this.batch.onBatchReady((function() {
                    return t.request.send()
                })), this.request.after((function() {
                    return t.batch.clear()
                })), this.commandsService.register(Pr, (function(e) {
                    var i = void 0 === e ? {} : e,
                        r = i.key,
                        n = i.value;
                    t.service.trackDynamicVariable(r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.service.start()
            }, t
        }(),
        Or = function() {
            function t(t, e) {
                this.id = t, this.revenue = e
            }
            return t.from = function(e) {
                var i = new t(e.id, parseFloat(e.revenue));
                return isNaN(parseFloat(e.tax)) || (i.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (i.shipping = parseFloat(e.shipping)), xt(e.currency) && e.currency.length <= 10 && (i.currency = e.currency), i
            }, t.prototype.hasValidRevenue = function() {
                return !isNaN(this.revenue) && this.revenue >= 0
            }, t
        }(),
        Mr = function() {
            function t(t, e, i, r) {
                this.id = t, this.name = e, this.price = i, this.quantity = r
            }
            return t.from = function(e) {
                if (!t.isValid(e)) return null;
                var i = new t(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
                return zt(e.sku) && (i.sku = e.sku), zt(e.category) && (i.category = e.category), zt(e.merchant) && e.merchant.length > 0 && (i.merchant = e.merchant.slice(0, 100)), i
            }, t.isValid = function(t) {
                return xt(t.id) && xt(t.name) && Lt(parseFloat(t.price)) && Dt(parseInt(t.quantity, 10)) && (!zt(t.sku) || xt(t.sku)) && (!zt(t.category) || xt(t.category)) && (!zt(t.merchant) || xt(t.merchant))
            }, t
        }(),
        Lr = function() {
            function t(t, e, i) {
                this.pii = t, this.transactionRequest = e, this.sessionRenewer = i, this.clear()
            }
            return t.prototype.addTransaction = function(t) {
                var e = this.pii.anonymizeFields(t, ["id"]);
                this.transaction = Or.from(e)
            }, t.prototype.getTransaction = function() {
                return this.transaction
            }, t.prototype.sendTransaction = function() {
                this.sessionRenewer.isSessionValid() && (this.transaction.hasValidRevenue() ? this.transactionRequest.send() : Wt.warn("Transaction Service: unable to send transaction with invalid parameters"))
            }, t.prototype.addItem = function(t) {
                if (!Ut(t)) {
                    var e = this.pii.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        i = Mr.from(e);
                    null !== i && csArray.prototype.push.call(this.transactionItems, i)
                }
            }, t.prototype.getItems = function() {
                return this.transactionItems
            }, t.prototype.clear = function() {
                this.transaction = Or.from({
                    revenue: NaN
                }), this.transactionItems = []
            }, t.prototype.getRequestParameters = function() {
                var t = {
                    id: this.transaction.id ? "".concat(this.transaction.id) : "",
                    revenue: "".concat(this.transaction.revenue)
                };
                return zt(this.transaction.tax) && (t.tax = "".concat(this.transaction.tax)), zt(this.transaction.shipping) && (t.shipping = "".concat(this.transaction.shipping)), zt(this.transaction.currency) && (t.cu = "".concat(this.transaction.currency)), t.items = window.csJSON.stringify(this.transactionItems), t
            }, t
        }(),
        Dr = function() {
            function t(t, e) {
                this.skuItem = csString.prototype.slice.call(t, 0, 100), this.merchantItem = e && csString.prototype.slice.call(e, 0, 100)
            }
            return Object.defineProperty(t.prototype, "sku", {
                get: function() {
                    return this.skuItem
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "merchant", {
                get: function() {
                    return this.merchantItem
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(),
        xr = function() {
            function t(t, e) {
                this.cartItemRequest = t, this.sessionRenewer = e, this.cartItem = null
            }
            return t.prototype.addToCart = function(t) {
                !this.isValidSku(t.sku) || zt(t.merchant) && !xt(t.merchant) || (this.cartItem = new Dr(t.sku, t.merchant), this.sendCartItem())
            }, t.prototype.isValidSku = function(t) {
                return xt(t) && t.length > 0
            }, t.prototype.getCartItem = function() {
                return this.cartItem
            }, t.prototype.sendCartItem = function() {
                this.sessionRenewer.isSessionValid() && this.cartItemRequest.send()
            }, t.prototype.clear = function() {
                this.cartItem = null
            }, t.prototype.getRequestParameters = function() {
                if (!this.cartItem) return {};
                var t = {
                    sku: "".concat(this.cartItem.sku)
                };
                return zt(this.cartItem.merchant) && this.cartItem.merchant.length > 0 && (t.me = this.cartItem.merchant), t
            }, t
        }(),
        Vr = ["ecommerce:addToCart", "ec:cart:add"],
        zr = ["ecommerce:addTransaction", "ec:transaction:create"],
        qr = ["ecommerce:addItem", "ec:transaction:items:add"],
        Ur = ["ecommerce:send", "ec:transaction:send"],
        Br = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.commandsService = r, this.pii = n, this.sessionRenewer = o, this.urlService = s
            }
            return t.prototype.init = function() {
                var t = new ut(this.configuration.getTrackerUri(), "transaction"),
                    e = new ut(this.configuration.getTrackerUri(), "addtocart"),
                    i = new Lr(this.pii, t, this.sessionRenewer),
                    n = new xr(e, this.sessionRenewer);
                t.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, i, r), t.after((function() {
                    i.clear()
                })), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, n, r), e.after((function() {
                    n.clear()
                })), this.commandsService.register(zr, (function(t) {
                    i.addTransaction(t)
                })), this.commandsService.register(qr, (function(t) {
                    return i.addItem(t)
                })), this.commandsService.register(Ur, (function() {
                    return i.sendTransaction()
                })), this.commandsService.register(Vr, (function(t) {
                    n.addToCart(t)
                }))
            }, t
        }(),
        Hr = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.getRequestParameters = function() {
                if (this.areTimingsUnavailable()) return {};
                var t = this.compute();
                return {
                    str: t.startRender,
                    di: t.domInteractive,
                    dc: t.domComplete,
                    fl: t.fullyLoaded
                }
            }, t.prototype.compute = function() {
                var t = this.windowPerformance.timing;
                return {
                    startRender: "".concat(t.domLoading - t.requestStart),
                    domInteractive: "".concat(t.domInteractive - t.requestStart),
                    domComplete: "".concat(t.domComplete - t.requestStart),
                    fullyLoaded: "".concat(t.loadEventEnd - t.requestStart)
                }
            }, t.prototype.areTimingsUnavailable = function() {
                return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0)
            }, t
        }();

    function Fr(t) {
        return void 0 !== t.tgt
    }! function(t) {
        t[t.RESIZE = 0] = "RESIZE", t[t.SCROLL = 1] = "SCROLL", t[t.MOUSEMOVE = 2] = "MOUSEMOVE", t[t.MOUSEDOWN = 3] = "MOUSEDOWN", t[t.MOUSEUP = 4] = "MOUSEUP", t[t.CLICK = 5] = "CLICK", t[t.MOUSEOVER = 6] = "MOUSEOVER", t[t.MOUSEOUT = 7] = "MOUSEOUT", t[t.CHANGE = 10] = "CHANGE", t[t.FOCUSIN = 11] = "FOCUSIN", t[t.FOCUSOUT = 12] = "FOCUSOUT", t[t.TAP = 14] = "TAP", t[t.KEYDOWN = 15] = "KEYDOWN", t[t.KEYUP = 16] = "KEYUP", t[t.COMMAND = 17] = "COMMAND", t[t.SUBMIT = 18] = "SUBMIT", t[t.PERFORMANCE = 19] = "PERFORMANCE", t[t.DRAG = 20] = "DRAG", t[t.FLICK = 21] = "FLICK"
    }(or || (or = {})),
    function(t) {
        t.SUCCESS = "success", t.FAILURE = "failure", t.ATTEMPT = "attempt"
    }(sr || (sr = {}));
    var Gr, jr, Wr = function() {
            function t() {}
            return t.prototype.isEventTypeSupported = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.supportedEventTypes, t)
            }, t.prototype.enhanceAnalysisEvent = function(t, e) {
                return this.isEventTypeSupported(e.type) ? this.baseEnhanceAnalysisEvent(t, e) : e
            }, t
        }(),
        Kr = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [or.MOUSEDOWN, or.MOUSEUP, or.CLICK, or.MOUSEOVER, or.TAP], r
            }
            return U(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (this.projectConfiguration.eMerchandisingEnabled) {
                    var i = this.pathComputation.getEventTargetPathAndTargetLink(t),
                        r = i.path,
                        n = i.targetLink;
                    e.tgt = r, e.tgtLk = n
                }
                return e
            }, e
        }(Wr),
        Yr = function() {
            function t() {}
            return t.build = function(t, e, i) {
                return csArray.prototype.reduce.call(i, (function(e, i) {
                    return i.enhanceAnalysisEvent(t, e)
                }), e)
            }, t
        }(),
        Xr = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.pathComputation = e, i.supportedEventTypes = [or.MOUSEDOWN, or.MOUSEUP, or.CLICK, or.MOUSEOVER, or.TAP, or.DRAG, or.FLICK], i
            }
            return U(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                return e.tgt || (e.tgt = this.pathComputation.getEventTargetPath(t)), e
            }, e
        }(Wr),
        Qr = function() {
            function t(t, e, i) {
                this.configuration = t, this.pathComputation = e, this.gestureTracker = i, this.analysisEventsEnhancers = [new Kr(this.configuration, this.pathComputation), new Xr(this.pathComputation)]
            }
            return t.prototype.processGesture = function(t, e) {
                switch (t.type) {
                    case Ui.TAP:
                        this.processTap(e);
                        break;
                    case Ui.FLICK:
                        this.processFlick(t, e);
                        break;
                    case Ui.DRAG:
                        this.processDrag(t, e)
                }
            }, t.prototype.processTap = function(t) {
                var e = {
                        type: or.TAP,
                        ts: 0,
                        x: 0,
                        y: 0,
                        tgt: ""
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                i.tgt !== x.INVALID_ELEMENT && this.onEventCallback(i)
            }, t.prototype.processDrag = function(t, e) {
                var i = {
                        type: or.DRAG,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    },
                    r = Yr.build(e, i, this.analysisEventsEnhancers);
                r.tgt !== x.INVALID_ELEMENT && this.onEventCallback(r)
            }, t.prototype.processFlick = function(t, e) {
                var i = {
                        type: or.FLICK,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    },
                    r = Yr.build(e, i, this.analysisEventsEnhancers);
                r.tgt !== x.INVALID_ELEMENT && this.onEventCallback(r)
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                var e = this;
                this.gestureTracker.subscribe(t.TRACKER_IDENTIFIER, (function(t, i) {
                    return e.processGesture(t, i)
                }))
            }, t.prototype.stop = function() {
                this.gestureTracker.unsubscribe(t.TRACKER_IDENTIFIER)
            }, t.TRACKER_IDENTIFIER = "AnalysisGestureTracker", t
        }();
    (jr = Gr || (Gr = {})).isEventOnScrollContainer = function(t) {
        return !!(qt(t) && function(t) {
            try {
                if (qt(csEventtarget.apply(t))) return !0
            } catch (t) {}
            return !1
        }(t) && Bt(csEventtarget.apply(t)) && null !== csEventtarget.apply(t).getAttribute("data-cs-scroll-container"))
    }, jr.getScrollContainer = function() {
        return document.querySelector("[".concat("data-cs-scroll-container", "]"))
    };
    var Jr;
    (Jr || (Jr = {})).getRelativePosition = function(t) {
        var e = Oe(t);
        if (!(e && Bt(e) && Ut(e.getBoundingClientRect) && qt(t.pageX) && qt(t.pageY))) return {
            xRel: -1,
            yRel: -1,
            valid: !1
        };
        var i = e.getBoundingClientRect(),
            r = t.pageX - i.left - Be.windowOffsetX(),
            n = t.pageY - i.top - Be.windowOffsetY();
        e !== document.documentElement && (r += e.scrollLeft, n += e.scrollTop);
        var o = Math.max(e.scrollWidth, i.width),
            s = Math.max(e.scrollHeight, i.height);
        return {
            xRel: Math.round(r / o * 65535),
            yRel: Math.round(n / s * 65535),
            valid: !0
        }
    };
    var Zr, $r, tn, en, rn, nn = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [or.MOUSEMOVE], r.currentMouseMovePath = "", r
            }
            return U(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (!this.projectConfiguration.mouseMoveHeatmapEnabled) return e;
                var i = Jr.getRelativePosition(t),
                    r = i.valid,
                    n = i.xRel,
                    o = i.yRel;
                if (r) {
                    var s = this.pathComputation.getEventTargetPath(t);
                    s !== x.INVALID_ELEMENT && (e.xRel = n, e.yRel = o, s !== this.currentMouseMovePath || this.projectConfiguration.iframesTracking ? (this.currentMouseMovePath = s, e.tgtHM = s) : e.tgtHM = "")
                } else this.currentMouseMovePath = "";
                return e
            }, e
        }(Wr),
        on = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.supportedEventTypes = [or.CHANGE], e.validInputTypes = ["text", "email", "number", "search", "tel", "url", "password"], e
            }
            return U(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                var i, r = Oe(t);
                return v(i = r) && "input" === i.localName && csArray.prototype.indexOf.call(this.validInputTypes, r.type) >= 0 && (e.isBlank = "" === r.value), e
            }, e
        }(Wr),
        sn = function() {
            function t(t, e, i) {
                var r = this;
                this.projectConfiguration = t, this.pathComputation = e, this.selector = i, this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.CHANGEABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea", this.KEYSTROKE_ELEMENTS_SELECTOR = "input, select, textarea", this.DEBOUNCE_DURATION = 150, this.THROTTLE_DURATION = 400, this.scrollContainerDimensionSent = !1, this.debouncedScrollEventCallback = qi((function(t, e) {
                    return r.scrollListener(t, e)
                }), this.DEBOUNCE_DURATION), this.debouncedResizeEventCallback = qi((function(t) {
                    return r.resizeListener(t)
                }), this.DEBOUNCE_DURATION), this.throttledMouseMoveCallback = Le((function(t) {
                    return r.mouseMoveListener(t)
                }), this.THROTTLE_DURATION), this.globalHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return r.debouncedResizeEventCallback()
                    }
                }, {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return r.debouncedScrollEventCallback(t)
                    }
                }, {
                    boundElement: window,
                    type: "mousemove",
                    listener: function(t) {
                        r.throttledMouseMoveCallback(r.preserveEventForAsyncUse(t))
                    }
                }, {
                    boundElement: document,
                    type: "mousedown",
                    listener: function(t) {
                        return r.mouseDownListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mouseup",
                    listener: function(t) {
                        return r.mouseUpListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "click",
                    listener: function(t) {
                        return r.clickListener(t)
                    }
                }], this.onSelectorHandlers = [{
                    boundElement: document,
                    type: "mouseover",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.mouseOverListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "mouseout",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.mouseOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusin",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.focusInListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusout",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.focusOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "change",
                    listener: this.selector.on(this.CHANGEABLE_ELEMENTS_SELECTOR, (function(t) {
                        return r.changeListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keyup",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.keyUpListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keydown",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.keyDownListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "copy",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.copyListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "cut",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.cutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "paste",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return r.pasteListener(t)
                    }))
                }], this.analysisEventsEnhancers = [new Kr(this.projectConfiguration, this.pathComputation), new nn(this.projectConfiguration, this.pathComputation), new on, new Xr(this.pathComputation)], this.keyStrokeMap = {}, this.initKeyStrokesMap()
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return ke(t)
                })), this.resizeListener()
            }, t.prototype.stop = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return Ie(t)
                }))
            }, t.prototype.flushPendingDebouncedListeners = function() {
                this.debouncedScrollEventCallback.flushPending(), this.debouncedResizeEventCallback.flushPending()
            }, t.prototype.getSupportedHandlers = function() {
                return this.selector.isMatchesSelectorSupported() ? W(W([], this.globalHandlers, !0), this.onSelectorHandlers, !0) : (Wt.warn("Element.matches is not implemented yet"), this.globalHandlers)
            }, t.prototype.resizeListener = function(t) {
                var e = Gr.getScrollContainer(),
                    i = Bt(e);
                i && (this.scrollContainerDimensionSent = !0);
                var r = {
                    type: or.RESIZE,
                    ts: 0,
                    x: i ? e.clientWidth : Be.windowWidth(),
                    y: i ? e.clientHeight : Be.windowHeight()
                };
                void 0 !== t && (r.d = t), this.onEventCallback(r)
            }, t.prototype.scrollListener = function(t, e) {
                var i = Gr.isEventOnScrollContainer(e);
                !this.scrollContainerDimensionSent && i && this.resizeListener();
                var r = {
                        type: or.SCROLL,
                        ts: 0,
                        x: i ? csEventtarget.apply(e).scrollLeft : Be.windowOffsetX(),
                        y: i ? csEventtarget.apply(e).scrollTop : Be.windowOffsetY(),
                        d: t
                    },
                    n = Yr.build(e, r, this.analysisEventsEnhancers);
                this.onEventCallback(n)
            }, t.prototype.mouseMoveListener = function(t) {
                var e = {
                        type: or.MOUSEMOVE,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallback(i)
            }, t.prototype.mouseDownListener = function(t) {
                var e = {
                        type: or.MOUSEDOWN,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseUpListener = function(t) {
                var e = {
                        type: or.MOUSEUP,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.clickListener = function(t) {
                var e = {
                        type: or.CLICK,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOverListener = function(t) {
                var e = {
                        type: or.MOUSEOVER,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOutListener = function(t) {
                var e = {
                        type: or.MOUSEOUT,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusInListener = function(t) {
                var e = {
                        type: or.FOCUSIN,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusOutListener = function(t) {
                var e = {
                        type: or.FOCUSOUT,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.changeListener = function(t) {
                var e = {
                        type: or.CHANGE,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = Yr.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.copyListener = function(t) {
                var e = {
                    type: or.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: Pe.COPY
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.cutListener = function(t) {
                var e = {
                    type: or.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: Pe.CUT
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.pasteListener = function(t) {
                var e = {
                    type: or.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: Pe.PASTE
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyUpListener = function(t) {
                var e = {
                    type: or.KEYUP,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyDownListener = function(t) {
                var e = {
                    type: or.KEYDOWN,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.computeKeystrokeKey = function(t) {
                var e = this.keyStrokeMap[t.key];
                return void 0 === e ? _e.ALPHANUMERICAL : e
            }, t.prototype.onEventCallbackIfValidTarget = function(t) {
                Fr(t) && t.tgt !== x.INVALID_ELEMENT && this.onEventCallback(t)
            }, t.prototype.preserveEventForAsyncUse = function(t) {
                return t.composedPath && Object.defineProperty(t, "__csOriginalTarget", {
                    value: t.composedPath()[0],
                    writable: !1,
                    enumerable: !1
                }), t
            }, t.prototype.initKeyStrokesMap = function() {
                this.keyStrokeMap[" "] = _e.SPACE, this.keyStrokeMap.Spacebar = _e.SPACE, this.keyStrokeMap.Enter = _e.ENTER, this.keyStrokeMap.Backspace = _e.BACKSPACE, this.keyStrokeMap.Delete = _e.DELETE, this.keyStrokeMap.ArrowUp = _e.ARROWUP, this.keyStrokeMap.ArrowDown = _e.ARROWDOWN, this.keyStrokeMap.ArrowLeft = _e.ARROWLEFT, this.keyStrokeMap.ArrowRight = _e.ARROWRIGHT, this.keyStrokeMap.Up = _e.ARROWUP, this.keyStrokeMap.Down = _e.ARROWDOWN, this.keyStrokeMap.Left = _e.ARROWLEFT, this.keyStrokeMap.Right = _e.ARROWRIGHT, this.keyStrokeMap.CapsLock = _e.CAPSLOCK, this.keyStrokeMap.Shift = _e.SHIFT, this.keyStrokeMap.Tab = _e.TAB
            }, H([Kt("Event handler type: resize")], t.prototype, "resizeListener", null), H([Kt("Event handler type: scroll")], t.prototype, "scrollListener", null), H([Kt("Event handler type: mouseMove"), De()], t.prototype, "mouseMoveListener", null), H([Kt("Event handler type: mouseDown"), De()], t.prototype, "mouseDownListener", null), H([Kt("Event handler type: mouseUp"), De()], t.prototype, "mouseUpListener", null), H([Kt("Event handler type: click"), De()], t.prototype, "clickListener", null), H([Kt("Event handler type: mouseOver"), De()], t.prototype, "mouseOverListener", null), H([Kt("Event handler type: mouseOut"), De()], t.prototype, "mouseOutListener", null), H([Kt("Event handler type: focusIn")], t.prototype, "focusInListener", null), H([Kt("Event handler type: focusOut")], t.prototype, "focusOutListener", null), H([Kt("Event handler type: change")], t.prototype, "changeListener", null), H([Kt("Event handler type: copy")], t.prototype, "copyListener", null), H([Kt("Event handler type: cut")], t.prototype, "cutListener", null), H([Kt("Event handler type: paste")], t.prototype, "pasteListener", null), H([Kt("Event handler type: keyup")], t.prototype, "keyUpListener", null), H([Kt("Event handler type: keydown")], t.prototype, "keyDownListener", null), t
        }(),
        an = function() {
            function t() {
                var t = this;
                this.MAX_SCROLL_RATE_THRESHOLD = 100, this.maxScrollRate = 0, this.maxDocumentHeight = Be.documentHeight(), this.maxScrollRateHandler = {
                    boundElement: document,
                    type: "scroll",
                    listener: function(e) {
                        return t.maxScrollRateListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                ke(this.maxScrollRateHandler), this.reset()
            }, t.prototype.stop = function() {
                Ie(this.maxScrollRateHandler)
            }, t.prototype.reset = function() {
                this.maxDocumentHeight = Be.documentHeight();
                var t = Gr.getScrollContainer();
                if (null === t) this.maxScrollRate = this.currentScrollRate(Be.documentHeight());
                else {
                    var e = this.computePaddingTop(t);
                    this.maxScrollRate = this.currentScrollRateWithScrollContainer(t, e)
                }
                this.onEventCallback()
            }, t.prototype.maxScrollRateListener = function(t) {
                var e, i;
                if (Gr.isEventOnScrollContainer(t)) {
                    var r = csEventtarget.apply(t),
                        n = this.computePaddingTop(r);
                    e = this.documentHeightWithScrollContainer(r, n), i = this.currentScrollRateWithScrollContainer(r, n)
                } else e = Be.documentHeight(), i = this.currentScrollRate(e);
                (i > this.maxScrollRate || e > this.maxDocumentHeight) && (this.maxScrollRate = i, e > this.maxDocumentHeight && (this.maxDocumentHeight = e), this.onEventCallback())
            }, t.prototype.currentScrollRate = function(t) {
                var e = Math.round(this.lastPixelLine() / t * 100);
                return Math.min(e, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.lastPixelLine = function() {
                var t = Be.windowHeight();
                return Be.windowOffsetY() + t
            }, t.prototype.currentScrollRateWithScrollContainer = function(t, e) {
                var i = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                    r = this.documentHeightWithScrollContainer(t, e),
                    n = Math.round(i / r * 100);
                return Math.min(n, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.computePaddingTop = function(t) {
                var e = window.getComputedStyle(t).paddingTop || "0px";
                return parseInt(e, 10)
            }, t.prototype.documentHeightWithScrollContainer = function(t, e) {
                return t.scrollHeight + t.getBoundingClientRect().top + e
            }, t.prototype.getRequestParameters = function() {
                return {
                    sr: "".concat(this.maxScrollRate),
                    mdh: "".concat(this.maxDocumentHeight)
                }
            }, H([Kt("MaxScrollRate handler")], t.prototype, "maxScrollRateListener", null), t
        }(),
        cn = function() {
            function t(t, e, i, r, n, o, s, a, c, u, l, h, p, d, f) {
                this.configuration = t, this.analysisEventsTracker = e, this.gestureTracker = i, this.maxScrollRateTracker = r, this.performanceTimingMetrics = n, this.analysisEventsBatch = o, this.analysisEventsRequest = s, this.analysisLastEventsRequest = a, this.analysisEventRequestParameters = c, this.sessionRenewer = u, this.sessionService = l, this.recoveryStorage = h, this.projectPathComputation = p, this.performanceTracker = d, this.lastEventsTracker = f, this.eventEmitter = new Ye
            }
            return t.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processUserEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processUserEvent(e)
                })), this.maxScrollRateTracker.onEvent((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.maxScrollRateTracker)
                })), this.performanceTracker.onEvent((function(e) {
                    return t.processBrowserEvent(e)
                })), this.lastEventsTracker.onEvent((function() {
                    t.analysisEventsBatch.isEmpty() || t.analysisLastEventsRequest.send()
                })), this.bindRequests()
            }, t.prototype.bindRequests = function() {
                var t = this;
                this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.enableCompression()
                })), this.analysisEventsRequest.after((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisEventsRequest.afterProvidersCalled((function() {
                    return t.analysisEventsBatch.clearEvents()
                })), this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisLastEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisLastEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.disableCompression()
                })), this.analysisLastEventsRequest.onBeaconSuccess((function() {
                    t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisLastEventsRequest.onBeaconFailure((function() {
                    t.saveLastEvents()
                }))
            }, t.prototype.initStates = function() {
                this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters), this.resetStartTime()
            }, t.prototype.start = function(t) {
                this.lastEventsTracker.start(), this.analysisEventsTracker.start(), this.maxScrollRateTracker.start(), this.gestureTracker.start(), t || this.performanceTracker.start()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.processEvent(t)
            }, t.prototype.processBrowserEvent = function(t) {
                this.sessionService.hasValidSession() && this.processEvent(t)
            }, t.prototype.processUserEvent = function(t) {
                this.sessionRenewer.isSessionValid() && this.processEvent(t)
            }, t.prototype.processEvent = function(t) {
                this.analysisEventsBatch.addEvent(this.addTimestamp(t)), this.analysisEventsBatch.isFull() && this.sendEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("analysisEvent", B(B({}, t), {
                    typeName: or[t.type]
                }))
            }, t.prototype.addTimestamp = function(t) {
                return t.ts = this.getRelativeTime(), t
            }, t.prototype.sendEvents = function() {
                this.analysisEventsBatch.isEmpty() || this.analysisEventsRequest.send()
            }, t.prototype.stop = function() {
                this.lastEventsTracker.stop(), this.analysisEventsTracker.stop(), this.maxScrollRateTracker.stop(), this.gestureTracker.stop(), this.performanceTracker.stop(), this.analysisEventsBatch.empty()
            }, t.prototype.clearStates = function() {
                this.analysisEventsTracker.flushPendingDebouncedListeners(), this.sendEvents(), this.maxScrollRateTracker.reset(), this.performanceTracker.stop()
            }, t.prototype.resetStartTime = function() {
                this.startTime = vt()
            }, t.prototype.getRelativeTime = function() {
                return vt() - this.startTime
            }, t.prototype.saveLastEvents = function() {
                try {
                    this.analysisEventsBatch.isEmpty() || this.recoveryStorage.save({
                        events: this.analysisEventsBatch.getEvents(),
                        metadata: this.analysisEventsBatch.getMetadata()
                    })
                } catch (t) {}
            }, t.prototype.pushSubmitEvent = function(t, e) {
                if (function(t) {
                        return t === sr.SUCCESS || t === sr.FAILURE || t === sr.ATTEMPT
                    }(t))
                    if (Bt(e)) {
                        var i = {
                            status: t,
                            type: or.SUBMIT,
                            ts: 0,
                            tgt: this.projectPathComputation.getElementPath(e)
                        };
                        i.tgt !== x.INVALID_ELEMENT && this.processBrowserEvent(i)
                    } else Wt.warn("AnalysisEvents Service: invalid element: ".concat(e));
                else Wt.warn("AnalysisEvents Service: invalid submit status: ".concat(t))
            }, t
        }(),
        un = function() {
            function t(t) {
                var e = t.events,
                    i = void 0 === e ? [] : e,
                    r = t.requestParameters,
                    n = void 0 === r ? {} : r,
                    o = t.stringCompression;
                this.compressed = !0, this.events = [], this.requestParameters = {}, this.events = i, this.requestParameters = n, this.stringCompression = o
            }
            return t.prototype.getRequestPayload = function() {
                return this.isCompressed() ? this.stringCompression.compressSync(csJSON.stringify(this.events)) : csJSON.stringify(this.events)
            }, t.prototype.addEvent = function(t) {
                csArray.prototype.push.call(this.events, t)
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.events = []
            }, t.prototype.empty = function() {
                this.clearEvents()
            }, t.prototype.isFull = function() {
                return this.eventsCount() >= 50
            }, t.prototype.isEmpty = function() {
                return 0 === this.events.length
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getMetadata = function() {
                return this.requestParameters
            }, t.prototype.getRequestParameters = function() {
                return B(B({}, this.requestParameters), {
                    ct: this.isCompressed() ? this.stringCompression.algorithm : fe.UNCOMPRESSED
                })
            }, t.prototype.enableCompression = function() {
                this.compressed = !0
            }, t.prototype.disableCompression = function() {
                this.compressed = !1
            }, t.prototype.isCompressed = function() {
                return this.compressed
            }, t
        }(),
        ln = function() {
            function t(t, e, i) {
                var r = this;
                this.analysisEventsRecoveryRequest = t, this.recoveryStorage = e, this.stringCompression = i, this.visibilityChangeHandler = function() {
                    "visible" === document.visibilityState && r.sendPersistedEvents()
                }
            }
            return t.prototype.start = function() {
                this.sendPersistedEvents(), this.addVisibilityChangeListener()
            }, t.prototype.stop = function() {
                this.removeVisibilityChangeListener()
            }, t.prototype.getRecoveryStorage = function() {
                return this.recoveryStorage
            }, t.prototype.sendPersistedEvents = function() {
                var t = this.recoveryStorage.recover();
                if (null !== t) {
                    var e = t,
                        i = e.metadata,
                        r = e.events,
                        n = new un({
                            events: r,
                            requestParameters: i,
                            stringCompression: this.stringCompression
                        });
                    this.analysisEventsRecoveryRequest.setRequestParametersProviders(n), this.analysisEventsRecoveryRequest.before((function() {
                        n.enableCompression()
                    })), this.analysisEventsRecoveryRequest.setRequestPayloadProvider(n), this.analysisEventsRecoveryRequest.afterProvidersCalled((function() {
                        return n.clearEvents()
                    })), this.analysisEventsRecoveryRequest.send()
                }
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t
        }(),
        hn = function() {
            function t(t) {
                this.storageName = t
            }
            return t.prototype.save = function(t) {
                localStorage.setItem(this.storageName, csJSON.stringify(t))
            }, t.prototype.clear = function() {
                localStorage.removeItem(this.storageName)
            }, t.prototype.recover = function() {
                var t = localStorage.getItem(this.storageName);
                if (null === t) return null;
                var e = null;
                try {
                    e = csJSON.parse(t)
                } catch (e) {
                    Wt.error("Invalid item in localStorage.\n         (key:".concat(this.storageName, "; value:").concat(t, ")"))
                } finally {
                    this.clear()
                }
                return e
            }, t
        }(),
        pn = function() {
            function t(t) {
                var e = this;
                this.webVitalsProvider = t, this.metricHandler = function(t) {
                    return e.processMetric(t)
                }, this.isStarted = !1
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.webVitalsProvider.onFCP(this.metricHandler), this.webVitalsProvider.onCLS(this.metricHandler), this.webVitalsProvider.onFID(this.metricHandler), this.webVitalsProvider.onLCP(this.metricHandler), this.webVitalsProvider.onTTFB(this.metricHandler))
            }, t.prototype.stop = function() {
                this.isStarted = !1
            }, t.prototype.processMetric = function(t) {
                if (this.isStarted) {
                    var e = {
                        type: or.PERFORMANCE,
                        name: t.name,
                        val: t.value,
                        ts: 0
                    };
                    this.onEventCallback(e)
                }
            }, H([Kt("Performance metric handler")], t.prototype, "processMetric", null), t
        }(),
        dn = function(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        fn = function(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming" in self)) return;
                    var i = new PerformanceObserver((function(t) {
                        return t.getEntries().map(e)
                    }));
                    return i.observe({
                        type: t,
                        buffered: !0
                    }), i
                }
            } catch (t) {}
        },
        yn = function(t, e) {
            var i = function i(r) {
                "pagehide" !== r.type && "hidden" !== document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", i, !0), removeEventListener("pagehide", i, !0)))
            };
            addEventListener("visibilitychange", i, !0), addEventListener("pagehide", i, !0)
        },
        vn = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && t(e)
            }), !0)
        },
        gn = function(t, e, i) {
            var r;
            return function(n) {
                e.value >= 0 && (n || i) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
            }
        },
        mn = -1,
        Sn = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        En = function() {
            yn((function(t) {
                var e = t.timeStamp;
                mn = e
            }), !0)
        },
        bn = function() {
            return mn < 0 && (mn = Sn(), En(), vn((function() {
                setTimeout((function() {
                    mn = Sn(), En()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return mn
                }
            }
        },
        Cn = function(t, e) {
            var i, r = bn(),
                n = dn("FCP"),
                o = function(t) {
                    "first-contentful-paint" === t.name && (a && a.disconnect(), t.startTime < r.firstHiddenTime && (n.value = t.startTime, n.entries.push(t), i(!0)))
                },
                s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                a = s ? null : fn("paint", o);
            (s || a) && (i = gn(t, n, e), s && o(s), vn((function(r) {
                n = dn("FCP"), i = gn(t, n, e), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        n.value = performance.now() - r.timeStamp, i(!0)
                    }))
                }))
            })))
        },
        wn = !1,
        Tn = -1,
        Rn = {
            passive: !0,
            capture: !0
        },
        An = new Date,
        kn = function(t, e) {
            Zr || (Zr = e, $r = t, tn = new Date, Pn(removeEventListener), In())
        },
        In = function() {
            if ($r >= 0 && $r < tn - An) {
                var t = {
                    entryType: "first-input",
                    name: Zr.type,
                    target: Zr.target,
                    cancelable: Zr.cancelable,
                    startTime: Zr.timeStamp,
                    processingStart: Zr.timeStamp + $r
                };
                en.forEach((function(e) {
                    e(t)
                })), en = []
            }
        },
        _n = function(t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function(t, e) {
                    var i = function() {
                            kn(t, e), n()
                        },
                        r = function() {
                            n()
                        },
                        n = function() {
                            removeEventListener("pointerup", i, Rn), removeEventListener("pointercancel", r, Rn)
                        };
                    addEventListener("pointerup", i, Rn), addEventListener("pointercancel", r, Rn)
                }(e, t) : kn(e, t)
            }
        },
        Pn = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, _n, Rn)
            }))
        },
        Nn = {},
        On = function() {
            function t() {}
            return t.prototype.onFCP = function(t) {
                Cn(t, !0)
            }, t.prototype.onCLS = function(t) {
                ! function(t, e) {
                    wn || (Cn((function(t) {
                        Tn = t.value
                    })), wn = !0);
                    var i, r = function(e) {
                            Tn > -1 && t(e)
                        },
                        n = dn("CLS", 0),
                        o = 0,
                        s = [],
                        a = function(t) {
                            if (!t.hadRecentInput) {
                                var e = s[0],
                                    r = s[s.length - 1];
                                o && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, s.push(t)) : (o = t.value, s = [t]), o > n.value && (n.value = o, n.entries = s, i())
                            }
                        },
                        c = fn("layout-shift", a);
                    c && (i = gn(r, n, e), yn((function() {
                        c.takeRecords().map(a), i(!0)
                    })), vn((function() {
                        o = 0, Tn = -1, n = dn("CLS", 0), i = gn(r, n, e)
                    })))
                }(t, !0)
            }, t.prototype.onFID = function(t) {
                ! function(t, e) {
                    var i, r = bn(),
                        n = dn("FID"),
                        o = function(t) {
                            t.startTime < r.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), i(!0))
                        },
                        s = fn("first-input", o);
                    i = gn(t, n, e), s && yn((function() {
                        s.takeRecords().map(o), s.disconnect()
                    }), !0), s && vn((function() {
                        var r;
                        n = dn("FID"), i = gn(t, n, e), en = [], $r = -1, Zr = null, Pn(addEventListener), r = o, en.push(r), In()
                    }))
                }(t, !0)
            }, t.prototype.onLCP = function(t) {
                ! function(t, e) {
                    var i, r = bn(),
                        n = dn("LCP"),
                        o = function(t) {
                            var e = t.startTime;
                            e < r.firstHiddenTime && (n.value = e, n.entries.push(t), i())
                        },
                        s = fn("largest-contentful-paint", o);
                    if (s) {
                        i = gn(t, n, e);
                        var a = function() {
                            Nn[n.id] || (s.takeRecords().map(o), s.disconnect(), Nn[n.id] = !0, i(!0))
                        };
                        ["keydown", "click"].forEach((function(t) {
                            addEventListener(t, a, {
                                once: !0,
                                capture: !0
                            })
                        })), yn(a, !0), vn((function(r) {
                            n = dn("LCP"), i = gn(t, n, e), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    n.value = performance.now() - r.timeStamp, Nn[n.id] = !0, i(!0)
                                }))
                            }))
                        }))
                    }
                }(t, !0)
            }, t.prototype.onTTFB = function(t) {
                ! function(t) {
                    var e, i = dn("TTFB");
                    e = function() {
                        try {
                            var e = performance.getEntriesByType("navigation")[0] || function() {
                                var t = performance.timing,
                                    e = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var i in t) "navigationStart" !== i && "toJSON" !== i && (e[i] = Math.max(t[i] - t.navigationStart, 0));
                                return e
                            }();
                            if (i.value = i.delta = e.responseStart, i.value < 0 || i.value > performance.now()) return;
                            i.entries = [e], t(i)
                        } catch (t) {}
                    }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("load", (function() {
                        return setTimeout(e, 0)
                    }))
                }(t)
            }, t
        }(),
        Mn = function() {
            function t() {
                var t = this;
                this.isStarted = !1, this.sendLastEvents = function(e) {
                    try {
                        if (("pagehide" === e.type || "visibilitychange" === e.type) && "hidden" !== document.visibilityState) return;
                        t.eventCallback()
                    } catch (t) {}
                }
            }
            return t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.addVisibilityChangeListener(), this.addPageHideListener(), this.addBlurListener())
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.removeVisibilityChangeListener(), this.removePageHideListener(), this.removeBlurListener())
            }, t.prototype.onEvent = function(t) {
                this.eventCallback = t
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.addPageHideListener = function() {
                window.addEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.removePageHideListener = function() {
                window.removeEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.addBlurListener = function() {
                window.addEventListener("blur", this.sendLastEvents)
            }, t.prototype.removeBlurListener = function() {
                window.removeEventListener("blur", this.sendLastEvents)
            }, t
        }(),
        Ln = ["submit"],
        Dn = function() {
            function t(t, e, i, r, n, o, s, a, c, u) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.projectPathComputation = r, this.selector = n, this.commandsService = o, this.sessionRenewer = s, this.gestureTracker = a, this.iframeEventsEmitter = c, this.stringCompression = u
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new un({
                        stringCompression: this.stringCompression
                    });
                this.analysisEventsRecovery = this.createRecovery(), this.analysisEventsService = this.createService(e, this.analysisEventsRecovery.getRecoveryStorage()), this.analysisEventsService.init(), this.iframeEventsEmitter.addListeners(this.analysisEventsService), this.commandsService.register(Ln, (function(e, i) {
                    t.analysisEventsService.pushSubmitEvent(e, i)
                }))
            }, t.prototype.onStartTracking = function(t) {
                this.analysisEventsRecovery.start(), this.analysisEventsService.start(t)
            }, t.prototype.onAfterNaturalPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.analysisEventsService.clearStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.analysisEventsService.clearStates(), this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.onOptout = function() {
                this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.createService = function(t, e) {
                var i = new Hr(window),
                    n = new an,
                    o = new sn(this.configuration, this.projectPathComputation, this.selector),
                    s = new Qr(this.configuration, this.projectPathComputation, this.gestureTracker),
                    a = new pn(new On),
                    c = new Mn,
                    u = new Ae(this.configuration.getTrackerUri(), "v2/events"),
                    l = new Wi(this.configuration.getTrackerUri(), "v2/events"),
                    h = new hi(this.configuration, this.visitorService, this.sessionService, n, i, r);
                return new cn(this.configuration, o, s, n, i, t, u, l, h, this.sessionRenewer, this.sessionService, e, this.projectPathComputation, a, c)
            }, t.prototype.createRecovery = function() {
                var t = new Ae(this.configuration.getTrackerUri(), "v2/events");
                return new ln(t, new hn("csAnalysisEventsPersisted"), this.stringCompression)
            }, t
        }();
    ! function(t) {
        t.Artificial = "a", t.Renewal = "r", t.Natural = "n"
    }(rn || (rn = {}));
    var xn = function() {
            function t() {
                this.pageViewType = rn.Natural
            }
            return t.prototype.setPageViewType = function(t) {
                this.pageViewType = t
            }, t.prototype.getRequestParameters = function() {
                return {
                    pvt: this.pageViewType
                }
            }, t
        }(),
        Vn = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.lifeCycleEventsEmitter = e, o.pageViewRequest = i, o.urlService = r, o.pageViewTypeMarker = n, o
            }
            return U(e, t), e.prototype.init = function() {
                this.addPageShowListener()
            }, e.prototype.onStart = function(t) {
                t ? this.sendRenewalPageView() : this.sendNaturalPageView()
            }, e.prototype.onStop = function() {}, e.prototype.triggerArtificialPageView = function(t) {
                this.isStarted ? this.sendArtificialPageView(t) : this.urlService.overridePath(t)
            }, e.prototype.sendNaturalPageView = function() {
                this.pageViewTypeMarker.setPageViewType(rn.Natural), this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendRenewalPageView = function() {
                this.pageViewTypeMarker.setPageViewType(rn.Renewal), this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendArtificialPageView = function(t) {
                this.pageViewTypeMarker.setPageViewType(rn.Artificial), this.lifeCycleEventsEmitter.emitArtificialPageViewEnd(), t && this.urlService.overridePath(t), this.lifeCycleEventsEmitter.emitBeforeArtificialPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterArtificialPageView()
            }, e.prototype.addPageShowListener = function() {
                var t = this;
                window.addEventListener("pageshow", (function(e) {
                    t.isStarted && e.persisted && t.sendArtificialPageView()
                }))
            }, e
        }(Xe),
        zn = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function qn() {
        return {
            la: zn
        }
    }
    var Un, Bn = function() {
            function t(t) {
                this.urlAnonymizer = t, this.urlMaskingPatterns = [], this.removeQueryString = !1
            }
            return t.prototype.getRequestParameters = function() {
                return {
                    dr: this.get()
                }
            }, t.prototype.addUrlMaskingPattern = function(t) {
                var e = this.urlAnonymizer.getUrlMaskingPattern(t);
                csArray.prototype.push.call(this.urlMaskingPatterns, e)
            }, t.prototype.enableRemoveQueryString = function() {
                this.removeQueryString = !0
            }, t.prototype.disableRemoveQueryString = function() {
                this.removeQueryString = !1
            }, t.prototype.get = function() {
                var t = this.removeQueryString ? this.urlAnonymizer.removeQueryString(this.getReferrer()) : this.getReferrer();
                return this.urlAnonymizer.anonymizeUrl(t, this.urlMaskingPatterns)
            }, t.prototype.getReferrer = function() {
                var t = "";
                try {
                    t = window.top.document.referrer
                } catch (e) {
                    if (window.parent) try {
                        t = window.parent.document.referrer
                    } catch (e) {
                        t = ""
                    }
                }
                return "" === t && (t = document.referrer), t
            }, t
        }(),
        Hn = function() {
            function t(t) {
                this.sessionService = t, this.IS_SUPPORTED = this.isGetEntriesByNameSupported() && "currentScript" in document
            }
            return t.prototype.getTagDownloadTime = function() {
                var t = document.currentScript;
                if (!t) return null;
                var e = window.performance.getEntriesByName(t.src, "resource")[0];
                return !e || this.isCacheHit(e) ? null : Math.round(e.responseEnd - e.fetchStart)
            }, t.prototype.isCacheHit = function(t) {
                var e = t.transferSize;
                return void 0 !== e ? 0 === e || e < t.encodedBodySize : t.connectStart === t.domainLookupEnd
            }, t.prototype.getRequestParameters = function() {
                if (!this.IS_SUPPORTED || 1 !== this.getPageNumber()) return {};
                var t = this.getTagDownloadTime();
                return null === t ? {} : {
                    dt: "".concat(Math.min(t, 99999))
                }
            }, t.prototype.getPageNumber = function() {
                var t;
                return (null === (t = this.sessionService.getSession()) || void 0 === t ? void 0 : t.pageNumber) || null
            }, t.prototype.isGetEntriesByNameSupported = function() {
                return "object" == typeof window.performance && "function" == typeof window.performance.getEntriesByName
            }, t
        }(),
        Fn = ["trackPageview"],
        Gn = ["setPath"],
        jn = ["setQuery"],
        Wn = ["referrer:maskUrl"],
        Kn = ["referrer:removeQueryString"],
        Yn = ["referrer:keepQueryString"],
        Xn = function() {
            function t(t, e, i, r, n, o, s, a, c) {
                this.configuration = t, this.commandsService = e, this.lifeCycleEventsEmitter = i, this.visitorService = r, this.sessionService = n, this.consentService = o, this.customVariablesService = s, this.urlAnonymizer = a, this.urlService = c
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new ut(this.configuration.getTrackerUri(), "pageview"),
                    i = new xn;
                this.pageViewService = new Vn(this.lifeCycleEventsEmitter, e, this.urlService, i);
                var o = new Bn(this.urlAnonymizer);
                this.pageViewService.init(), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, Be, o, this.urlService, this.consentService, n, this.customVariablesService, r, i, new Hn(this.sessionService)), this.commandsService.register(Fn, (function(e) {
                    return t.pageViewService.triggerArtificialPageView(e)
                })), this.commandsService.register(Gn, (function(e) {
                    return t.urlService.overridePath(e)
                })), this.commandsService.register(jn, (function(e) {
                    return t.urlService.overrideQuery(e)
                })), this.commandsService.register(Wn, (function(t) {
                    return o.addUrlMaskingPattern(t)
                })), this.commandsService.register(Kn, (function() {
                    return o.enableRemoveQueryString()
                })), this.commandsService.register(Yn, (function() {
                    return o.disableRemoveQueryString()
                }))
            }, t.prototype.start = function(t) {
                this.pageViewService.start(t)
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.pageViewService.stop()
            }, t
        }(),
        Qn = function() {
            function t(t, e) {
                this.pathComputation = t, this.configuration = e
            }
            return t.prototype.getEventTargetPath = function(t) {
                var e = Oe(t);
                return this.pathComputation.getElementPath(e, B({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.getEventTargetPathAndTargetLink = function(t) {
                var e = Oe(t),
                    i = this.pathComputation.getElementPathAndFirstAnchorParent(e, B({
                        dynamicIdRegex: this.configuration.dynamicIdRegex
                    }, this.configuration.pathComputationRules)),
                    r = i.path,
                    n = i.firstAnchorParent;
                return {
                    path: r,
                    targetLink: this.hasValidTargetLink(n) ? n.href : ""
                }
            }, t.prototype.hasValidEventTarget = function(t) {
                var e = Oe(t);
                return this.pathComputation.isValidElement(e)
            }, t.prototype.getElementPath = function(t) {
                return this.pathComputation.getElementPath(t, B({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.hasValidTargetLink = function(t) {
                var e;
                return null !== t && t.hasAttribute("href") && !$(null !== (e = t.getAttribute("href")) && void 0 !== e ? e : "", "#")
            }, t
        }(),
        Jn = function() {
            function t(t) {
                this.pathComputation = t
            }
            return t.prototype.on = function(t, e) {
                var i = this;
                return function(r) {
                    i.pathComputation.hasValidEventTarget(r) && i.targetMatchesSelector(r, t) && e(r)
                }
            }, t.prototype.targetMatchesSelector = function(t, e) {
                var i = Oe(t);
                return _.call(i, e)
            }, t.prototype.isMatchesSelectorSupported = function() {
                return !!_
            }, t
        }(),
        Zn = function() {
            function t() {}
            return t.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, t.prototype.onLoadCallbackExecute = function() {
                this.onLoadCallback()
            }, t.prototype.start = function() {
                var t = this.onLoadCallbackExecute.bind(this);
                this.onDocumentLoaded(t)
            }, t.prototype.onDocumentLoaded = function(t) {
                function e() {
                    document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), t()
                }
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(t) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e))
            }, H([Kt("onLoad")], t.prototype, "onLoadCallbackExecute", null), t
        }(),
        $n = ["clearSession"],
        to = ["extendSession"],
        eo = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register($n, (function() {
                    return t.sessionService.removeSession()
                })), this.commandsService.register(to, (function() {
                    return t.sessionService.extendSessionPeriodically()
                }))
            }, t.prototype.onBeforeNaturalPageView = function() {
                this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.sessionService.abortQuotaServiceRequest(), this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onOptout = function() {
                this.visitorService.removeVisitor(), this.sessionService.removeSession()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                this.sessionService.updateRecordingState(t, e)
            }, t
        }(),
        io = function() {
            function t(t, e) {
                this.sessionService = t, this.visitorService = e
            }
            return t.prototype.onSessionExpired = function(t) {
                this.onSessionExpiredCallback = t
            }, t.prototype.isSessionValid = function() {
                var t = this.sessionService.hasValidSession(),
                    e = !1;
                return this.sessionService.pollCacheRefreshEvent() && (e = this.visitorService.isSessionRenewed()), t && !e || !this.canRenewSession() ? t : (this.lastSessionRenewalTime = vt(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession())
            }, t.prototype.canRenewSession = function() {
                return !zt(this.lastSessionRenewalTime) || vt() - this.lastSessionRenewalTime > 6e4
            }, t
        }(),
        ro = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this) || this;
                return a.urlService = e, a.eMerchandisingLazyLoadedProductsTracker = i, a.lastEventsTracker = r, a.eMerchandisingRequest = n, a.eMerchandisingMessageBatch = o, a.eMerchandisingProductExposureService = s, a
            }
            return U(e, t), e.prototype.init = function() {
                this.eMerchandisingRequest.init(), this.initProductsTracker(), this.initLastEventsTracker(), this.initProductExposureService()
            }, e.prototype.collectInitialProducts = function() {
                var t = this.eMerchandisingLazyLoadedProductsTracker.collectProductsAndAnchors(),
                    e = t.products,
                    i = t.anchors;
                this.trackProductsExposure(i), this.eMerchandisingRequest.send(this.buildEmerchandisingData(e))
            }, e.prototype.trackProductsExposure = function(t) {
                var e = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    e.eMerchandisingProductExposureService.track(t)
                }))
            }, e.prototype.onIframeEmerchandisingMessage = function(t) {
                this.eMerchandisingRequest.send(t)
            }, e.prototype.clearState = function() {
                this.eMerchandisingProductExposureService.clearState(), this.eMerchandisingLazyLoadedProductsTracker.flushEvents(), this.eMerchandisingMessageBatch.isEmpty() || this.sendProductsInBatch(!1)
            }, e.prototype.initStates = function() {
                this.eMerchandisingRequest.initStates()
            }, e.prototype.onStart = function() {
                this.lastEventsTracker.start(), this.eMerchandisingLazyLoadedProductsTracker.start(), this.eMerchandisingProductExposureService.start()
            }, e.prototype.onStop = function() {
                this.lastEventsTracker.stop(), this.eMerchandisingLazyLoadedProductsTracker.stop(), this.eMerchandisingProductExposureService.stop()
            }, e.prototype.initProductExposureService = function() {
                var t = this;
                this.eMerchandisingProductExposureService.init(), this.eMerchandisingProductExposureService.onProductExposed((function(e) {
                    t.eMerchandisingMessageBatch.addProductExposure(e), t.eMerchandisingMessageBatch.isFull() && t.sendProductsInBatch(!1)
                }))
            }, e.prototype.buildEmerchandisingData = function(t, e) {
                void 0 === e && (e = []);
                var i = {
                    products: t,
                    targetUrl: this.urlService.getUrl(),
                    windowWidth: Be.windowWidth(),
                    windowHeight: Be.windowHeight()
                };
                return e.length > 0 && (i.exposures = e), i
            }, e.prototype.initProductsTracker = function() {
                var t = this;
                this.eMerchandisingLazyLoadedProductsTracker.init(), this.eMerchandisingLazyLoadedProductsTracker.onProductsDetection((function(e) {
                    var i = e.products,
                        r = e.anchors;
                    t.eMerchandisingMessageBatch.addProducts(i), t.eMerchandisingMessageBatch.isFull() && t.sendProductsInBatch(!1), t.trackProductsExposure(r)
                }))
            }, e.prototype.initLastEventsTracker = function() {
                var t = this;
                this.lastEventsTracker.onEvent((function() {
                    t.eMerchandisingProductExposureService.clearState(), t.sendLastProducts()
                }))
            }, e.prototype.sendLastProducts = function() {
                this.eMerchandisingMessageBatch.isEmpty() || this.sendProductsInBatch(!0)
            }, e.prototype.sendProductsInBatch = function(t) {
                var e = this.buildEmerchandisingData(this.eMerchandisingMessageBatch.getProducts(), this.eMerchandisingMessageBatch.getProductsExposure());
                t ? this.eMerchandisingRequest.sendBeacon(e) : this.eMerchandisingRequest.send(e)
            }, e
        }(Xe),
        no = function() {
            function t(t, e) {
                this.configuration = t, this.projectPathComputation = e
            }
            return t.prototype.collectProductsAndAnchors = function(t) {
                void 0 === t && (t = document);
                for (var e = [], i = this.getAllValidAnchors(this.configuration.hostnames, t), r = 0, n = i; r < n.length; r++) {
                    var o = n[r];
                    csArray.prototype.push.call(e, this.buildProductFromAnchor(o))
                }
                return {
                    products: e,
                    anchors: i
                }
            }, t.prototype.getAllValidAnchors = function(t, e) {
                var i = this;
                return void 0 === e && (e = document), csArray.prototype.filter.call(Fe.findAllElements("a", e), (function(e) {
                    return i.isAnchorValid(e, t)
                }))
            }, t.prototype.isAnchorValid = function(t, e) {
                return ("https:" === t.protocol || "http:" === t.protocol) && t.offsetHeight > 0 && t.offsetWidth > 0 && "" !== t.hostname && At(t.hostname, e)
            }, t.prototype.buildProductFromAnchor = function(t) {
                return {
                    targetPath: this.projectPathComputation.getElementPath(t),
                    href: t.href
                }
            }, t
        }(),
        oo = function(t) {
            function e(e, i, r) {
                var n = t.call(this, e, i) || this;
                return n.mutationObserver = r, n.mutationObserverOptions = {
                    subtree: !0,
                    childList: !0
                }, n
            }
            return U(e, t), e.prototype.init = function() {
                this.initMutationObserver()
            }, e.prototype.start = function() {
                this.mutationObserver.start(), this.observeDom()
            }, e.prototype.stop = function() {
                this.mutationObserver.stop()
            }, e.prototype.flushEvents = function() {
                this.mutationObserver.flushPendingMutations()
            }, e.prototype.onProductsDetection = function(t) {
                this.productsDetectionCallback = t
            }, e.prototype.initMutationObserver = function() {
                this.mutationObserver.init(), this.initMutationCallbacks()
            }, e.prototype.initMutationCallbacks = function() {
                var t = this;
                this.mutationObserver.onChildListMutation((function(e) {
                    return t.handleChildListMutation(e)
                })), this.mutationObserver.onAttachShadowMutation((function(e) {
                    return t.handleAttachShadowMutation(e)
                }))
            }, e.prototype.handleChildListMutation = function(t) {
                for (var e = 0; e < t.addedNodes.length; e += 1) {
                    var i = t.addedNodes[e];
                    if (m(i) && this.isAnchorValid(i, this.configuration.hostnames)) {
                        var r = this.buildProductFromAnchor(i);
                        this.emitProductsEvent({
                            products: [r],
                            anchors: [i]
                        })
                    } else if (Bt(i)) {
                        var n = this.collectProductsAndAnchors(i);
                        this.emitProductsEvent(n)
                    }
                }
            }, e.prototype.handleAttachShadowMutation = function(t) {
                var e = t.shadowRoot;
                this.emitProductsEvent(this.collectProductsAndAnchors(e)), this.mutationObserver.observe(e, this.mutationObserverOptions)
            }, e.prototype.emitProductsEvent = function(t) {
                t.products.length > 0 && this.productsDetectionCallback(t)
            }, e.prototype.observeDom = function() {
                this.mutationObserver.observe(document, this.mutationObserverOptions), this.observeShadowRoots(document)
            }, e.prototype.observeShadowRoots = function(t) {
                var e = this,
                    i = qe.getAllShadowHosts(t);
                csArray.prototype.forEach.call(i, (function(t) {
                    t.shadowRoot && e.mutationObserver.observe(t.shadowRoot, e.mutationObserverOptions)
                }))
            }, e
        }(no),
        so = function() {
            function t(e) {
                void 0 === e && (e = t.DEFAULT_BATCH_SIZE), this.requestParameters = {}, this.products = [], this.productsExposure = [], this.bytesCounter = new je(e)
            }
            return t.prototype.addProducts = function(t) {
                var e;
                this.bytesCounter.addString(csJSON.stringify(t)), (e = csArray.prototype.push).call.apply(e, W([this.products], t, !1))
            }, t.prototype.addProductExposure = function(t) {
                this.bytesCounter.addString(csJSON.stringify(t)), csArray.prototype.push.call(this.productsExposure, t)
            }, t.prototype.reset = function() {
                this.bytesCounter.reset(), this.products = [], this.productsExposure = []
            }, t.prototype.isEmpty = function() {
                return 0 === this.products.length && 0 === this.productsExposure.length
            }, t.prototype.isFull = function() {
                return this.bytesCounter.isThresholdReached()
            }, t.prototype.getProducts = function() {
                return this.products
            }, t.prototype.getProductsExposure = function() {
                return this.productsExposure
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.getRequestParameters = function() {
                return B({}, this.requestParameters)
            }, t.DEFAULT_BATCH_SIZE = 10240, t
        }(),
        ao = function() {
            function t() {
                var t = this;
                this.isStarted = !1, this.isIntersectionObserverSupported = "function" == typeof window.IntersectionObserver, this.isGetRootNodeSupported = "getRootNode" in Node.prototype, this.onTabChange = function() {
                    "visible" === document.visibilityState ? t.processElementsWhenTabSwitchesToActive() : t.processElementsWhenTabSwitchesToInactive()
                }
            }
            return t.prototype.init = function() {
                this.isIntersectionObserverSupported && this.isGetRootNodeSupported && (this.rootNodeElementsMap = new Map, this.elementVisibilityMap = new Map, this.initIntersectionObserver(), this.initMutationObserver())
            }, t.prototype.start = function() {
                !this.isStarted && this.isIntersectionObserverSupported && this.isGetRootNodeSupported && (document.addEventListener("visibilitychange", this.onTabChange), this.isStarted = !0)
            }, t.prototype.stop = function() {
                this.isStarted && (this.intersectionObserver.disconnect(), this.mutationObserver.disconnect(), this.rootNodeElementsMap.clear(), this.elementVisibilityMap.clear(), this.isStarted = !1, document.removeEventListener("visibilitychange", this.onTabChange))
            }, t.prototype.processElementsWhenTabSwitchesToActive = function() {
                var t = this;
                this.elementVisibilityMap.forEach((function(e, i) {
                    t.intersectionObserver.unobserve(i), t.intersectionObserver.observe(i)
                }))
            }, t.prototype.processElementsWhenTabSwitchesToInactive = function() {
                var t = this;
                this.elementVisibilityMap.forEach((function(e, i) {
                    !1 !== t.elementVisibilityMap.get(i) && (t.elementVisibilityMap.set(i, !1), t.emitElementVisiblityChangeEvent(i, !1))
                }))
            }, t.prototype.onEvent = function(t) {
                this.elementVisibilityCallback = t
            }, t.prototype.track = function(t) {
                this.isStarted && (this.intersectionObserver.observe(t), this.trackElementRootNodeInMutationObserver(t))
            }, t.prototype.initIntersectionObserver = function() {
                var e = this;
                this.intersectionObserver = new IntersectionObserver((function(t) {
                    e.handleIntersectionEntries(t)
                }), t.INTERSECTION_OBSERVER_OPTIONS)
            }, t.prototype.initMutationObserver = function() {
                var t = this;
                this.mutationObserver = new csMutationObserver((function(e) {
                    csArray.prototype.forEach.call(e, (function(e) {
                        return t.handleMutation(e)
                    }))
                }))
            }, t.prototype.trackElementRootNodeInMutationObserver = function(e) {
                var i = e.getRootNode();
                this.mutationObserver.observe(i, t.MUTATION_OBSERVER_OPTIONS), this.addElementToRootNodeElementsMap(e, i)
            }, t.prototype.addElementToRootNodeElementsMap = function(t, e) {
                var i = this.rootNodeElementsMap.get(e);
                i ? i.add(t) : this.rootNodeElementsMap.set(e, new Set([t]))
            }, t.prototype.handleIntersectionEntries = function(t) {
                for (var e = 0, i = t; e < i.length; e++) {
                    var r = i[e];
                    this.processElementVisiblityFromIntersection(r.target, r.isIntersecting)
                }
            }, t.prototype.handleMutation = function(t) {
                var e = this,
                    i = t.target.getRootNode(),
                    r = this.rootNodeElementsMap.get(i);
                r && r.forEach((function(t) {
                    e.intersectionObserver.unobserve(t), e.intersectionObserver.observe(t)
                }))
            }, t.prototype.processElementVisiblityFromIntersection = function(t, e) {
                var i = "visible" === document.visibilityState,
                    r = this.elementVisibilityMap.get(t),
                    n = i && e && Fe.isVisibleInViewportInForeground(t);
                r !== n && (this.elementVisibilityMap.set(t, n), this.emitElementVisiblityChangeEvent(t, n))
            }, t.prototype.emitElementVisiblityChangeEvent = function(t, e) {
                this.elementVisibilityCallback({
                    target: t,
                    isVisible: e
                })
            }, t.prototype.isSupported = function() {
                return this.isIntersectionObserverSupported && this.isGetRootNodeSupported
            }, t.VISIBILITY_ATTRIBUTES = ["style", "class", "hidden"], t.MUTATION_OBSERVER_OPTIONS = {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: t.VISIBILITY_ATTRIBUTES
            }, t.INTERSECTION_OBSERVER_OPTIONS = {
                root: null,
                rootMargin: "0px",
                threshold: 1
            }, t
        }(),
        co = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.configuration = e, r.elementVisibilityTracker = i, r.isSupported = r.elementVisibilityTracker.isSupported(), r
            }
            return U(e, t), e.prototype.init = function() {
                this.isSupported && (this.productVisibleTimestampMap = new Map, this.initElementVisibilityTracker())
            }, e.prototype.onProductExposed = function(t) {
                this.onProductExposedCallback = t
            }, e.prototype.track = function(t) {
                this.isSupported && this.elementVisibilityTracker.track(t)
            }, e.prototype.clearState = function() {
                this.isSupported && this.isStarted && this.processStoredVisibleProducts()
            }, e.prototype.onStart = function() {
                this.isSupported && this.elementVisibilityTracker.start()
            }, e.prototype.onStop = function() {
                this.isSupported && (this.processStoredVisibleProducts(), this.elementVisibilityTracker.stop())
            }, e.prototype.initElementVisibilityTracker = function() {
                var t = this;
                this.elementVisibilityTracker.init(), this.elementVisibilityTracker.onEvent((function(e) {
                    var i = e.target;
                    e.isVisible ? t.handleVisibleProduct(i) : t.handleHiddenProduct(i)
                }))
            }, e.prototype.processStoredVisibleProducts = function() {
                var t = this;
                this.productVisibleTimestampMap.forEach((function(e, i) {
                    t.handleHiddenProduct(i)
                })), this.productVisibleTimestampMap.clear()
            }, e.prototype.handleVisibleProduct = function(t) {
                this.productVisibleTimestampMap.set(t, vt())
            }, e.prototype.handleHiddenProduct = function(t) {
                var i = this.productVisibleTimestampMap.get(t);
                if (void 0 !== i) {
                    var r = vt() - i;
                    this.productVisibleTimestampMap.delete(t), r < e.EXPOSURE_DURATION_THRESHOLD || this.onProductExposedCallback(this.buildExposureEvent(t, r))
                }
            }, e.prototype.buildExposureEvent = function(t, e) {
                var i = t.href;
                return {
                    targetPath: x.getElementPath(t, {
                        dynamicIdRegex: this.configuration.dynamicIdRegex
                    }),
                    duration: e,
                    href: i
                }
            }, e.EXPOSURE_DURATION_THRESHOLD = 150, e
        }(Xe),
        uo = function() {
            function t(t, e, i, r, n) {
                this.postRequest = t, this.beaconRequest = e, this.eMerchandisingMessageBatch = i, this.compressor = r, this.eMerchandisingRequestParameters = n
            }
            return t.prototype.init = function() {
                this.initPostRequest(), this.initBeaconRequest()
            }, t.prototype.initStates = function() {
                this.setBatchRequestParameters(!0)
            }, t.prototype.send = function(t) {
                this.sendPostRequest(t)
            }, t.prototype.sendBeacon = function(t) {
                this.sendBeaconRequest(t)
            }, t.prototype.initPostRequest = function() {
                var t = this,
                    e = Pi.isCompressionEnabled();
                e && this.addCompressionToPostRequest(), this.postRequest.afterProvidersCalled((function() {
                    t.eMerchandisingMessageBatch.reset()
                })), this.postRequest.setRequestParametersProviders(this.eMerchandisingMessageBatch), this.postRequest.after((function() {
                    t.setBatchRequestParameters(e)
                }))
            }, t.prototype.setBatchRequestParameters = function(t) {
                var e = this;
                this.eMerchandisingMessageBatch.setRequestParametersFromProvider(new hi(this.eMerchandisingRequestParameters, {
                    getRequestParameters: function() {
                        return {
                            ct: t ? e.compressor.algorithm : fe.UNCOMPRESSED
                        }
                    }
                }))
            }, t.prototype.initBeaconRequest = function() {
                var t = this;
                this.beaconRequest.before((function() {
                    t.setBatchRequestParameters(!1)
                })), this.beaconRequest.setRequestParametersProviders(this.eMerchandisingMessageBatch), this.beaconRequest.after((function() {
                    t.eMerchandisingMessageBatch.reset(), t.setBatchRequestParameters(!0)
                }))
            }, t.prototype.sendPostRequest = function(t) {
                this.postRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify(t)
                    }
                }), this.postRequest.send()
            }, t.prototype.sendBeaconRequest = function(t) {
                this.beaconRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify(t)
                    }
                }), this.beaconRequest.send()
            }, t.prototype.addCompressionToPostRequest = function() {
                this.postRequest.setCompressionOptions(this.compressor, "base64"), this.postRequest.setRequestHeader({
                    name: "Content-type",
                    value: "text/plain; charset=UTF-8"
                })
            }, t
        }(),
        lo = function() {
            function t(t, e, i, r, n, o, s, a) {
                this.configuration = t, this.projectPathComputation = e, this.compressor = i, this.basicRequestParameters = r, this.customVariablesService = n, this.urlService = o, this.iframeEventsEmitter = s, this.commandsService = a
            }
            return t.prototype.init = function() {
                var t = new Ti(new _i),
                    e = new oo(this.configuration, this.projectPathComputation, t),
                    i = new Mn,
                    r = new ao,
                    n = new co(this.configuration, r),
                    o = new so,
                    s = new uo(new Ae(this.configuration.getTrackerUri(), "display"), new Wi(this.configuration.getTrackerUri(), "display"), o, this.compressor, new hi(this.basicRequestParameters, this.customVariablesService));
                this.eMerchandisingService = new ro(this.urlService, e, i, s, o, n), this.eMerchandisingService.init(), this.iframeEventsEmitter.addListeners(this.eMerchandisingService)
            }, t.prototype.onStartTracking = function() {
                this.eMerchandisingService.start(), this.eMerchandisingService.collectInitialProducts()
            }, t.prototype.onArtificialPageViewEnd = function() {
                this.eMerchandisingService.clearState()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.eMerchandisingService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.eMerchandisingService.initStates(), this.eMerchandisingService.collectInitialProducts()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.eMerchandisingService.clearState(), this.eMerchandisingService.stop()
            }, t.prototype.onOptout = function() {
                this.eMerchandisingService.stop()
            }, t
        }();

    function ho(t) {
        return t.tagDeploymentMode === Un.DualCollectionReview || t.tagDeploymentMode === Un.DualCollection
    }! function(t) {
        t.ContentSquare = "CONTENTSQUARE", t.LoadedByClicktale = "LOADED_BY_CLICKTALE", t.LoadClicktalePtc = "LOAD_CLICKTALE_PTC", t.DualCollectionReview = "DUAL_COLLECTION_REVIEW", t.DualCollection = "DUAL_COLLECTION"
    }(Un || (Un = {}));
    var po, fo = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.visitorService = e, this.sessionService = i, this.sensitiveContentService = r
        }
        return t.prototype.init = function() {
            this.isClicktalePtcLoaded = !1, this.isContentSquareDataCollectionStarted = !1
        }, t.prototype.loadClicktalePtc = function() {
            !this.isClicktalePtcLoaded && this.configuration.ptcDomain && this.configuration.ptcGuid && this.doLoadClicktalePtc()
        }, t.prototype.getSessionData = function() {
            var t = this.configuration.projectId,
                e = this.visitorService.getVisitor();
            null == e && Wt.warn("Visitor is null. This happen when a snippet try to get Session Data before the tag was initialized");
            var i = null != e ? e : {};
            return {
                projectId: t,
                userId: i.id,
                sessionNumber: i.visitsCount,
                pageNumber: this.sessionService.getSession().pageNumber
            }
        }, t.prototype.startDataCollection = function(t) {
            this.isContentSquareDataCollectionStarted || (this.configuration.tagDeploymentMode === Un.LoadClicktalePtc && this.isReplayRecordedInMalka() && this.sensitiveContentService.initCTPII(), ho(this.configuration) && (this.sensitiveContentService.initCTPII(), t(), this.isContentSquareDataCollectionStarted = !0))
        }, t.prototype.isReplayRecordedInMalka = function() {
            return this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded()
        }, t.prototype.doLoadClicktalePtc = function() {
            this.isClicktalePtcLoaded = !0;
            var t = this.buildScriptElement();
            document.getElementsByTagName("head")[0].appendChild(t)
        }, t.prototype.buildScriptElement = function() {
            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "script");
            return t.async = !0, t.crossOrigin = "anonymous", t.type = "text/javascript", this.configuration.ptcSha512 && this.configuration.ptcSnapshotPath ? (t.integrity = "sha512-".concat(this.configuration.ptcSha512), t.src = "https://".concat(this.configuration.ptcDomain, "/").concat(this.configuration.ptcSnapshotPath, "/ptc.js")) : t.src = "https://".concat(this.configuration.ptcDomain, "/ptc/").concat(this.configuration.ptcGuid, ".js"), t
        }, t
    }();
    ! function(t) {
        t.isRecording = function() {
            return window.ClickTaleIsRecording && window.ClickTaleIsRecording()
        }, t.stopRecording = function() {
            window.ClickTaleStop && window.ClickTaleStop()
        }, t.triggerLogicalPageView = function(t) {
            window.ClickTaleLogicalWithUploadPage && window.ClickTaleLogicalWithUploadPage(t)
        }, t.sendPageEvent = function(t) {
            window.ClickTaleEvent && window.ClickTaleEvent(t)
        }, t.sendEventTriggerRecording = function(t) {
            window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(t)
        }
    }(po || (po = {}));
    var yo, vo = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.urlService = r, this.commandsService = n, this.startDataCollectionCallback = o, this.sensitiveContentService = s
            }
            return t.prototype.init = function() {
                var t = this;
                this.clicktaleIntegrationService = new fo(this.configuration, this.visitorService, this.sessionService, this.sensitiveContentService), this.clicktaleIntegrationService.init(), this.loadPtcForDualCollection(), this.commandsService.register(["getSessionData"], (function() {
                    return t.clicktaleIntegrationService.getSessionData()
                })), this.commandsService.register(["startDataCollection"], (function() {
                    t.clicktaleIntegrationService.startDataCollection(t.startDataCollectionCallback)
                }))
            }, t.prototype.loadPtcForDualCollection = function() {
                ho(this.configuration) && this.clicktaleIntegrationService.loadClicktalePtc()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.configuration.tagDeploymentMode === Un.LoadClicktalePtc && (!this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded() || this.clicktaleIntegrationService.loadClicktalePtc())
            }, t.prototype.onAfterArtificialPageView = function() {
                !this.sessionService.isReplayRecorded() && po.isRecording() && this.configuration.tagDeploymentMode === Un.LoadClicktalePtc && po.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onAfterSessionRenewal = function() {
                !this.sessionService.isReplayRecorded() && po.isRecording() && po.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onOptout = function() {
                po.isRecording() && po.stopRecording()
            }, t
        }(),
        go = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.configuration = e, s.pageEventRequest = i, s.compressor = r, s.customEventsEmitter = n, s.hashHelper = o, s.pageEventsQueue = [], s.etrQueue = [], s
            }
            return U(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.pageEventsQueue, (function(e) {
                    return t.trackPageEvent(e)
                })), this.pageEventsQueue = [], csArray.prototype.forEach.call(this.etrQueue, (function(e) {
                    return t.trackEventTriggerRecording(e)
                })), this.etrQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackPageEvent = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.isUserIdentifierEvent(t) ? this.hashHelper.isSupported() && this.trackEventWithUserIdentifier(t) : this.trackEvent(t)) : csArray.prototype.push.call(this.pageEventsQueue, t)
            }, e.prototype.isUserIdentifierEvent = function(t) {
                return $(t, "@user-identifier@")
            }, e.prototype.trackEventWithUserIdentifier = function(t) {
                return F(this, void 0, void 0, (function() {
                    var e, i;
                    return G(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.configuration.customHashIdEnabled ? (e = csString.prototype.slice.call(t, "@user-identifier@".length), this.hashHelper.isValidInput(e) ? [4, this.hashHelper.digest(e, this.configuration.projectId)] : (Wt.warn("UserIdentifier event: invalid user identifier"), [2])) : [2];
                            case 1:
                                return (i = r.sent()) ? (this.pageEventRequestParameter = {
                                    eventName: i,
                                    isETR: !1,
                                    isCustomHashId: !0
                                }, this.sendPageEvent()) : Wt.warn("Page event: unable to compute customHashId"), this.configuration.encryptionEnabled ? (this.customEventsEmitter.emitUserIdentifierEvent(e), [2]) : [2]
                        }
                    }))
                }))
            }, e.prototype.trackEvent = function(t) {
                this.customEventsEmitter.emitPageEvent(t), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !1,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Un.LoadClicktalePtc && po.sendPageEvent(t)
            }, e.prototype.trackEventTriggerRecording = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.configuration.useMalkaPipeline && this.configuration.malkaEtrEnabled ? this.trackMalkaEventTriggerRecording(t) : this.trackLegacyEventTriggerRecording(t)) : csArray.prototype.push.call(this.etrQueue, t)
            }, e.prototype.trackMalkaEventTriggerRecording = function(t) {
                $(t, "@ETP@") ? this.customEventsEmitter.emitEventTriggerRecording(t, ee.ETR_PAGE) : this.customEventsEmitter.emitEventTriggerRecording(t, ee.ETR_SESSION), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent()
            }, e.prototype.trackLegacyEventTriggerRecording = function(t) {
                var e;
                (ho(e = this.configuration) || e.tagDeploymentMode === Un.LoadClicktalePtc) && (this.customEventsEmitter.emitEventTriggerRecording(t, ee.ETR_LEGACY), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Un.LoadClicktalePtc && po.sendEventTriggerRecording(t))
            }, e.prototype.getRequestParameters = function() {
                return {
                    value: this.compressor.compressSync(this.pageEventRequestParameter.eventName),
                    ct: this.compressor.algorithm,
                    isETR: "".concat(this.pageEventRequestParameter.isETR),
                    isCustomHashId: "".concat(this.pageEventRequestParameter.isCustomHashId)
                }
            }, e.prototype.sendPageEvent = function() {
                this.pageEventRequest.send()
            }, e.isValidEventName = function(t) {
                return xt(t) && !!csString.prototype.trim.call(t)
            }, e
        }(Xe),
        mo = function() {
            function t(t) {
                this.crypto = t, this.isHashingSupported = !1
            }
            return t.prototype.init = function() {
                this.isHashingSupported = this.canSupportHashing(), this.isHashingSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.canSupportHashing = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.digest && self.TextEncoder && csArray.from)
            }, t.prototype.isSupported = function() {
                return this.isHashingSupported
            }, t.prototype.isValidInput = function(t) {
                return !!t && t.length <= 100
            }, t.prototype.formatInput = function(t, e) {
                var i = csString.prototype.toLowerCase.call(csString.prototype.trim.call(t));
                return "".concat(i, ":").concat(e)
            }, t.prototype.digest = function(t, e) {
                return F(this, void 0, void 0, (function() {
                    var i, r, n;
                    return G(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.isHashingSupported) return [2, null];
                                i = this.formatInput(t, e), r = this.textEncoder.encode(i), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, crypto.subtle.digest("SHA-1", r)];
                            case 2:
                                return n = o.sent(), [2, (s = n, a = csArray.from(new Uint8Array(s)), csArray.prototype.join.call(csArray.prototype.map.call(a, (function(t) {
                                    return csString.prototype.padStart.call(t.toString(16), 2, "0")
                                })), ""))];
                            case 3:
                                return o.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                        var s, a
                    }))
                }))
            }, t
        }(),
        So = ["trackPageEvent"],
        Eo = ["trackEventTriggerRecording"],
        bo = function() {
            function t(t, e, i, r, n) {
                this.configuration = t, this.commandsService = e, this.compressor = i, this.basicParameters = r, this.customEventsEmitter = n
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new ut(this.configuration.getTrackerUri(), "pageEvent"),
                    i = new mo(window.crypto);
                i.init(), this.pageEventService = new go(this.configuration, e, this.compressor, this.customEventsEmitter, i), e.setRequestParametersProviders(this.pageEventService, this.basicParameters), this.commandsService.register(So, (function(e) {
                    t.pageEventService.trackPageEvent(e)
                })), this.commandsService.register(Eo, (function(e) {
                    t.pageEventService.trackEventTriggerRecording(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.pageEventService.start()
            }, t
        }();
    ! function(t) {
        t[t.Sensitive = 1] = "Sensitive", t[t.SensitiveChild = 2] = "SensitiveChild"
    }(yo || (yo = {}));
    var Co, wo = ["value", "checked", "src", "data", "alt"],
        To = ["[data-cs-mask]", "img[src^='data:']", "script"],
        Ro = [{
            selector: "input:not([type=button])",
            attrName: "value"
        }],
        Ao = [".ctHidden, textarea"],
        ko = [{
            selector: ".ctHidden, input:not([type=button])",
            attrName: "value"
        }],
        Io = function() {
            function t(t) {
                var e;
                this.configuration = t, this.sensitiveAttributeSelector = [], this.sensitiveElementSelector = "", this.dummyElement = document.createElement("div"), ho(this.configuration) || (this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, To), (e = csArray.prototype.push).call.apply(e, W([this.sensitiveAttributeSelector], Ro, !1)))
            }
            return t.prototype.setPIISelectors = function(t) {
                var e, i = this;
                if (!ho(this.configuration) && t) {
                    if (null === (e = t.PIISelectors) || void 0 === e ? void 0 : e.length) {
                        var r = csArray.prototype.filter.call(t.PIISelectors, (function(t) {
                            return i.isValidSelector(t)
                        }));
                        this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, r)
                    }
                    t.Attributes instanceof Array && csArray.prototype.forEach.call(t.Attributes, (function(t) {
                        t && t.attrName && i.isValidSelector(t.selector) && csArray.prototype.push.call(i.sensitiveAttributeSelector, t)
                    }))
                }
            }, t.prototype.initCTPII = function() {
                var t, e, i, r = this;
                if (this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, Ao), null === (i = null === (e = null === window || void 0 === window ? void 0 : window.ClickTaleSettings) || void 0 === e ? void 0 : e.DOM) || void 0 === i ? void 0 : i.PII) {
                    var n = csArray.prototype.filter.call(window.ClickTaleSettings.DOM.PII.Text, (function(t) {
                        return r.isValidSelector(t)
                    }));
                    this.sensitiveElementSelector = this.appendSelectors(this.sensitiveElementSelector, n), (t = csArray.prototype.push).call.apply(t, W([this.sensitiveAttributeSelector], ko, !1)), csArray.prototype.forEach.call(window.ClickTaleSettings.DOM.PII.Attributes, (function(t) {
                        t.attr && r.isValidSelector(t.rule) && csArray.prototype.push.call(r.sensitiveAttributeSelector, {
                            selector: t.rule,
                            attrName: t.attr
                        })
                    }))
                }
            }, t.prototype.isSensitiveAttribute = function(t, e) {
                return this.isSensitive(t) && -1 !== csArray.prototype.indexOf.call(wo, e) || this.isElementMatchingAttributes(t, e, this.sensitiveAttributeSelector)
            }, t.prototype.isSensitive = function(t) {
                return t.__contentsquare_sensitive === yo.Sensitive
            }, t.prototype.isSensitiveChild = function(t) {
                return t.__contentsquare_sensitive === yo.SensitiveChild
            }, t.prototype.identifySensitiveNodes = function(t) {
                var e = this;
                if (v(t) || w(t)) {
                    this.findAndMarkSensitiveNodes(t);
                    var i = qe.getAllShadowHosts(t);
                    csArray.prototype.forEach.call(i, (function(t) {
                        return t.shadowRoot && e.findAndMarkSensitiveNodes(t.shadowRoot)
                    }))
                }
            }, t.prototype.unidentifySensitiveNodes = function(t) {
                var e = this;
                if (v(t) || w(t)) {
                    this.findAndUnmarkSensitiveNodes(t);
                    var i = qe.getAllShadowHosts(t);
                    csArray.prototype.forEach.call(i, (function(t) {
                        return t.shadowRoot && e.findAndUnmarkSensitiveNodes(t.shadowRoot)
                    }))
                }
            }, t.prototype.findAndUnmarkSensitiveNodes = function(t) {
                for (var e, i = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, null, !1); e = i.nextNode();) "__contentsquare_sensitive" in e && delete e.__contentsquare_sensitive
            }, t.prototype.findAndMarkSensitiveNodes = function(t) {
                var e = this;
                if (this.hasSensitiveParent(t)) return this.markAsSensitiveChild(t), void this.markSubtreeAsSensitiveChild(t);
                this.isMatchingSelectors(t, this.sensitiveElementSelector) ? (this.markAsSensitive(t), this.markSubtreeAsSensitiveChild(t)) : ze(t.querySelectorAll(this.sensitiveElementSelector), (function(t) {
                    e.isAllowedBase64Image(t) || (e.markAsSensitive(t), e.markSubtreeAsSensitiveChild(t))
                }))
            }, t.prototype.isAllowedBase64Image = function(t) {
                return E(t) && $(t.src, "data:image/svg+xml") && t.src.length <= 1024
            }, t.prototype.markAsSensitive = function(t) {
                t.__contentsquare_sensitive = yo.Sensitive
            }, t.prototype.markAsSensitiveChild = function(t) {
                t.__contentsquare_sensitive = yo.SensitiveChild
            }, t.prototype.markSubtreeAsSensitiveChild = function(t) {
                var e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, null, !1),
                    i = e.nextNode();
                for (t === i && (i = e.nextNode()); i;) this.markAsSensitiveChild(i), i = e.nextNode()
            }, t.prototype.hasSensitiveParent = function(t) {
                return !(!csNodeparentNode.apply(t) || !v(csNodeparentNode.apply(t)) && !w(csNodeparentNode.apply(t)) || !this.isSensitive(csNodeparentNode.apply(t)) && !this.isSensitiveChild(csNodeparentNode.apply(t))) || R(t) && (this.isSensitive(t.host) || this.isSensitiveChild(t.host))
            }, t.prototype.isMatchingSelectors = function(t, e) {
                return v(t) && _.call(t, e)
            }, t.prototype.isElementMatchingAttributes = function(t, e, i) {
                return csArray.prototype.some.call(i, (function(i) {
                    return t.hasAttribute(e) && csString.prototype.indexOf.call(i.attrName, e) > -1 && _.call(t, i.selector)
                }))
            }, t.prototype.isValidSelector = function(t) {
                if (!(!!t && xt(t))) return Wt.warn("SensitiveContentService: invalid selector provided '".concat(t, "'")), !1;
                try {
                    return _.call(this.dummyElement, t), !0
                } catch (e) {
                    return Wt.warn("SensitiveContentService: invalid selector provided '".concat(t, "'")), !1
                }
            }, t.prototype.appendSelectors = function(t, e) {
                return 0 === e.length ? t : 0 === t.length ? csArray.prototype.join.call(e, ",") : "".concat(t, ",").concat(csArray.prototype.join.call(e, ","))
            }, t
        }(),
        _o = function() {
            function t(t) {
                this.commandsService = t
            }
            return t.prototype.init = function() {
                this.registerSnippetErrorCommand(t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND, "implementation-snippet-"), this.registerSnippetErrorCommand(t.DYNAMIC_SNIPPETS_LOG_COMMAND, "snippet-")
            }, t.prototype.registerSnippetErrorCommand = function(t, e) {
                this.commandsService.register([t], (function(t, i) {
                    xt(t) && xt(i) && Wt.error(i, "".concat(e).concat(t))
                }))
            }, t.DYNAMIC_SNIPPETS_LOG_COMMAND = "logSnippetError", t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND = "logImplementationSnippetError", t
        }(),
        Po = function() {
            function t(t, e, i) {
                this.configuration = t, this.iframeParentToChildrenCommunicationService = e, this.iframeEventsEmitter = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.stop()
            }, t
        }(),
        No = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.configuration = e, i.currentChildId = 0, i.children = new Map, i.postMessageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return i.postMessagesListener(t)
                    }
                }, i
            }
            return U(e, t), e.prototype.onChildMessage = function(t) {
                this.onChildMessageCallback = t
            }, e.prototype.sendToChildren = function(t, e) {
                var i = Pt.buildBaseMessage(t, It.Parent, this.configuration.projectId);
                i.content = e, this.sendMessageToChildren(i)
            }, e.prototype.onStart = function() {
                ke(this.postMessageHandler, !1), this.discoverValidIframes()
            }, e.prototype.onStop = function() {
                this.sendStopMessages(), Ie(this.postMessageHandler, !1), this.removeAllChildren()
            }, e.prototype.discoverValidIframes = function() {
                var t = this,
                    e = this.getAllValidIframes();
                this.removeChildrenAbsentFromDOM(e), csArray.prototype.forEach.call(e, (function(e) {
                    if (null === t.getIframeId(e)) {
                        var i = {
                            iframe: e
                        };
                        t.children.set(t.currentChildId, i), t.currentChildId += 1
                    }
                })), this.sendDiscoveryMessages()
            }, e.prototype.getAllValidIframes = function() {
                var t = this;
                return csArray.prototype.filter.call(Fe.findAllElements("iframe"), (function(e) {
                    return t.isIframeValid(e)
                }))
            }, e.prototype.removeChildrenAbsentFromDOM = function(t) {
                var e = this;
                this.children.forEach((function(i, r) {
                    i.iframe && -1 === csArray.prototype.indexOf.call(t, i.iframe) && e.removeChild(r, i)
                }))
            }, e.prototype.removeChild = function(t, e) {
                e.port && Pt.closeChannelPort(e.port), this.children.delete(t)
            }, e.prototype.removeAllChildren = function() {
                this.children.forEach((function(t) {
                    t.port && Pt.closeChannelPort(t.port)
                })), this.children.clear()
            }, e.prototype.getIframeId = function(t) {
                var e = null;
                return this.children.forEach((function(i, r) {
                    null === e && i.iframe === t && (e = r)
                })), e
            }, e.prototype.isIframeValid = function(t) {
                return "cs-native-frame" !== t.id && (!t.src || At(Rt(t.src), this.configuration.hostnames))
            }, e.prototype.sendMessageToChildren = function(t) {
                var e = this;
                this.children.forEach((function(i) {
                    e.sendMessageToChild(t, i)
                }))
            }, e.prototype.sendMessageToChild = function(t, e) {
                e.port ? Pt.sendChannelMessage(e.port, t) : e.iframe.contentWindow && Pt.sendPostMessage(e.iframe.contentWindow, "*", t)
            }, e.prototype.sendDiscoveryMessages = function() {
                var t = this;
                this.children.forEach((function(e, i) {
                    if (e.iframe.contentWindow) {
                        var r = t.buildDiscoveryMessage(i);
                        Pt.sendPostMessage(e.iframe.contentWindow, "*", r)
                    }
                }))
            }, e.prototype.sendStopMessages = function() {
                this.sendMessageToChildren(this.buildStopMessage())
            }, e.prototype.buildDiscoveryMessage = function(t) {
                return Pt.buildBaseMessage(_t.Discovery, It.Parent, this.configuration.projectId, t)
            }, e.prototype.buildStopMessage = function() {
                return Pt.buildBaseMessage(_t.Stop, It.Parent, this.configuration.projectId)
            }, e.prototype.initChildChannelMessaging = function(t, e) {
                var i = this,
                    r = this.children.get(t);
                void 0 !== r ? (r.port = e, r.port.onmessage = function(e) {
                    i.channelMessageListener(e, t)
                }) : Wt.error("Parent received channel messaging initialization from unknow child id : ".concat(t, " (").concat(this.currentChildId, ")"))
            }, e.prototype.channelMessageListener = function(t, e) {
                var i = this.children.get(e);
                if (void 0 !== i) {
                    var r = x.getElementPath(i.iframe, {
                            dynamicIdRegex: this.configuration.dynamicIdRegex
                        }),
                        n = t.data.type,
                        o = t.data.content;
                    this.onChildMessageCallback(i.iframe, r, n, o)
                } else Wt.error("Parent received channelMessage from unknown child : ".concat(csJSON.stringify(t.data)))
            }, e.prototype.postMessagesListener = function(t) {
                if (Pt.isMessageValid(t, It.Child, this.configuration.projectId, this.configuration.hostnames)) switch (t.data.type) {
                    case _t.Discovery:
                        if (void 0 === t.data.id) return void this.discoverValidIframes();
                        if (t.ports && 1 === t.ports.length && this.children.has(t.data.id)) return void this.initChildChannelMessaging(t.data.id, t.ports[0]);
                        Wt.error("Parent received wrong channelMessage initialization : (".concat(t.origin, ") : ").concat(csJSON.stringify(t.data)));
                        break;
                    case _t.ChildLogMessage:
                        this.onChildMessageCallback(null, "", _t.ChildLogMessage, t.data.content);
                        break;
                    default:
                        Wt.warn("Parent received unexpected postMessage type from child (".concat(t.origin, ") : ").concat(csJSON.stringify(t.data)))
                }
            }, e
        }(Xe),
        Oo = function() {
            function t() {}
            return t.prototype.compute = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    r = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y),
                    n = e.time - t.time;
                return {
                    duration: n,
                    distance: this.computeGestureDistance(i, r),
                    direction: this.computeGestureDirection(i, r),
                    velocity: this.computeGestureVelocity(i, r, n)
                }
            }, t.prototype.computePinchMetrics = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    r = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y);
                return {
                    duration: e.time - t.time,
                    distance: this.computeGestureDistance(i, r)
                }
            }, t.prototype.getScale = function(t, e) {
                return Math.abs(e / t - 1)
            }, t.prototype.convertPixelsToDPs = function(t) {
                return t / window.devicePixelRatio
            }, t.prototype.computeGestureDistance = function(t, e) {
                return Math.round(Math.sqrt(t * t + e * e))
            }, t.prototype.computeGestureVelocity = function(t, e, i) {
                var r = i / 1e3,
                    n = t / r,
                    o = e / r;
                return Math.round(Math.abs(n) + Math.abs(o))
            }, t.prototype.computeGestureDirection = function(t, e) {
                return Math.abs(t) > Math.abs(e) ? t > 0 ? Bi.RIGHT : Bi.LEFT : e > 0 ? Bi.DOWN : Bi.UP
            }, t
        }(),
        Mo = function() {
            function t() {
                this.pinchState = {}, this.metricsComputer = new Oo, this.reset()
            }
            return t.prototype.onGesture = function(t) {
                this.onGestureCallback = t
            }, t.prototype.isValidTouchEvent = function(t) {
                return "touches" in t && "changedTouches" in t
            }, t.prototype.processActionDown = function(t) {
                if (this.isValidTouchStart(t)) {
                    this.isGestureStart(t) && this.reset();
                    var e = {
                        x: t.touches[0].clientX,
                        y: t.touches[0].clientY,
                        time: vt()
                    };
                    if (1 === t.touches.length) this.pinchState.startPinchTime = e.time, this.pinchState.firstTouch = e;
                    else if (2 === t.touches.length && (this.pinchState.secondTouch = {
                            x: t.touches[1].clientX,
                            y: t.touches[1].clientY,
                            time: vt()
                        }, this.pinchState.firstTouch && this.pinchState.secondTouch)) {
                        var i = this.metricsComputer.computePinchMetrics(this.pinchState.firstTouch, this.pinchState.secondTouch);
                        this.pinchInitialDistance = i.distance
                    }
                    csArray.prototype.push.call(this.pendingInputs, e), this.target = Oe(t)
                }
            }, t.prototype.processActionMove = function() {
                this.hasMove = !0
            }, t.prototype.processActionUp = function(t) {
                if (this.isValidTouchEnd(t)) {
                    if (csArray.prototype.push.call(this.pendingInputs, {
                            x: t.changedTouches[0].clientX,
                            y: t.changedTouches[0].clientY,
                            time: vt()
                        }), this.isSecondFingerRaisedAfterPinch(t) && this.pinchState.startPinchTime) {
                        var e = {
                                x: t.touches[0].clientX,
                                y: t.touches[0].clientY,
                                time: this.pinchState.startPinchTime
                            },
                            i = {
                                x: t.changedTouches[0].clientX,
                                y: t.changedTouches[0].clientY,
                                time: vt()
                            };
                        this.pinchState.firstTouch && (this.pinchState.firstTouch = e, this.pinchState.secondTouch = i), this.triggerPinchGesture(t)
                    }
                    this.pinchInitialDistance || this.isValidSingleTouchGesture() && this.runDetection(t)
                }
            }, t.prototype.reset = function() {
                this.pendingInputs = [], this.target = null, this.hasMove = !1, this.pinchInitialDistance = null
            }, t.prototype.runDetection = function(t) {
                var e = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]),
                    i = this.hasMove ? this.computeSwipeGesture(e) : this.computePressGesture(e);
                this.onGestureCallback(i, t)
            }, t.prototype.triggerPinchGesture = function(t) {
                if (this.pinchState.firstTouch && this.pinchState.secondTouch) {
                    var e = this.metricsComputer.computePinchMetrics(this.pinchState.firstTouch, this.pinchState.secondTouch),
                        i = this.computePinchGesture(e);
                    i && this.onGestureCallback(i, t)
                }
            }, t.prototype.computePinchGesture = function(t) {
                if (this.pinchInitialDistance && !(this.metricsComputer.getScale(this.pinchInitialDistance, t.distance) < .1)) return {
                    type: this.pinchInitialDistance > t.distance ? Ui.PINCH_IN : Ui.PINCH_OUT,
                    target: this.target,
                    distance: t.distance
                }
            }, t.prototype.computeSwipeGesture = function(t) {
                return {
                    type: t.velocity < 100 ? Ui.DRAG : Ui.FLICK,
                    target: this.target,
                    velocity: t.velocity,
                    distance: t.distance,
                    direction: t.direction
                }
            }, t.prototype.computePressGesture = function(t) {
                return {
                    type: t.duration < 1e3 ? Ui.TAP : Ui.LONG_PRESS,
                    target: this.target
                }
            }, t.prototype.isGestureStart = function(t) {
                return 1 === t.touches.length
            }, t.prototype.isValidSingleTouchGesture = function() {
                return 2 === this.pendingInputs.length
            }, t.prototype.isValidTouchStart = function(t) {
                return t.touches.length > 0
            }, t.prototype.isValidTouchEnd = function(t) {
                return t.changedTouches.length > 0
            }, t.prototype.isSecondFingerRaisedAfterPinch = function(t) {
                return this.hasMove && !!this.pinchInitialDistance && 1 === t.changedTouches.length && 1 === t.touches.length
            }, t
        }(),
        Lo = function() {
            function t() {
                this.subscriptions = {}
            }
            return t.prototype.subscribe = function(t, e) {
                this.subscriptions[t] = e, 1 === Object.keys(this.subscriptions).length && this.onStartTracking()
            }, t.prototype.unsubscribe = function(t) {
                delete this.subscriptions[t], 0 === Object.keys(this.subscriptions).length && this.onStopTracking()
            }, t
        }(),
        Do = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.logger = e, i.eventHandlers = [{
                    boundElement: document,
                    type: "touchstart",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchmove",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchend",
                    listener: function(t) {
                        return i.processEvent(t)
                    }
                }], i.detector = new Mo, i.detector.onGesture((function(t, e) {
                    return i.processGesture(t, e)
                })), i
            }
            return U(e, t), e.prototype.processGesture = function(t, e) {
                for (var i in this.subscriptions) {
                    (0, this.subscriptions[i])(t, e)
                }
            }, e.prototype.onStartTracking = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return ke(t)
                }))
            }, e.prototype.onStopTracking = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return Ie(t)
                }))
            }, e.prototype.canDetectGesture = function() {
                return void 0 !== window.devicePixelRatio
            }, e.prototype.processEvent = function(t) {
                var e = this;
                this.logger.tryToExecute("process gesture event", (function() {
                    if (e.detector.isValidTouchEvent(t)) switch (t.type) {
                        case "touchstart":
                            e.detector.processActionDown(t);
                            break;
                        case "touchmove":
                            e.detector.processActionMove();
                            break;
                        case "touchend":
                            e.detector.processActionUp(t)
                    }
                }))()
            }, e.isSwipe = function(t) {
                return t.type === Ui.FLICK || t.type === Ui.DRAG
            }, e
        }(Lo),
        xo = function() {
            function t(t, e, i, r, n, o, s, a, c, u, l, h, p, d, f, y, v, g, m, S, E, b, C, w) {
                var T = this;
                this.basicRequestParameters = t, this.compressor = e, this.visitorService = i, this.sessionService = r, this.lifeCycleEventsEmitter = n, this.commandsService = o, this.commandsModule = s, this.configuration = a, this.optoutModule = c, this.optoutService = u, this.consentModule = l, this.consentService = h, this.pii = p, this.urlAnonymizer = d, this.urlService = f, this.projectConfigurationModule = y, this.customEventsEmitter = v, this.javaScriptErrorsTracker = g, this.javaScriptErrorsAnonymizer = m, this.apiErrorsTracker = S, this.apiErrorsAnonymizer = E, this.iframeEventsEmitter = b, this.customVariablesService = C, this.customVariablesModule = w, this.startDataCollection = function(t) {
                    void 0 === t && (t = !1), T.pageViewModule.start(t), T.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this;
                if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
                    var e = new io(this.sessionService, this.visitorService),
                        i = new Qn(x, this.configuration),
                        r = new Jn(i),
                        n = new Do(Wt),
                        o = new Dn(this.configuration, this.visitorService, this.sessionService, i, r, this.commandsService, e, n, this.iframeEventsEmitter, this.compressor),
                        s = new Nr(this.commandsService, this.sessionService, this.configuration, this.basicRequestParameters, this.compressor, this.pii),
                        a = new No(this.configuration),
                        c = new Po(this.configuration, a, this.iframeEventsEmitter);
                    c.init();
                    var u = new Ar(this.visitorService, this.sessionService, this.commandsService, this.iframeEventsEmitter, a, this.configuration),
                        l = new Br(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, e, this.urlService);
                    this.pageViewModule = new Xn(this.configuration, this.commandsService, this.lifeCycleEventsEmitter, this.visitorService, this.sessionService, this.consentService, this.customVariablesService, this.urlAnonymizer, this.urlService);
                    var h = new eo(this.visitorService, this.sessionService, this.commandsService),
                        p = new Io(this.configuration),
                        d = new vo(this.configuration, this.visitorService, this.sessionService, this.urlService, this.commandsService, this.startDataCollection, p),
                        f = new bo(this.configuration, this.commandsService, this.compressor, this.basicRequestParameters, this.customEventsEmitter),
                        y = new _o(this.commandsService);
                    if (this.loadTracker = new Zn, this.consentModule.init(), u.init(), s.init(), l.init(), this.customVariablesModule.init(), this.pageViewModule.init(), h.init(), d.init(), f.init(), this.projectConfigurationModule.init(), y.init(), this.lifeCycleEventsEmitter.addListeners(h, this.commandsModule, o, this.consentModule, u, this.customVariablesModule, this.pageViewModule, d, f, s, c), Sr.isSupported() && this.compressor.isSupported()) {
                        var v = new Sr(this.sessionService, this.configuration, this.compressor, r, this.consentService, this.basicRequestParameters, this.commandsService, this.pii, e, this.urlService, p, this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, n, this.apiErrorsAnonymizer, this.lifeCycleEventsEmitter, this.customEventsEmitter);
                        v.init(), this.lifeCycleEventsEmitter.addListeners(v)
                    }
                    if (this.configuration.eMerchandisingEnabled) {
                        var g = new lo(this.configuration, i, this.compressor, this.basicRequestParameters, this.customVariablesService, this.urlService, this.iframeEventsEmitter, this.commandsService);
                        g.init(), this.lifeCycleEventsEmitter.addListeners(g)
                    }
                    o.init(), e.onSessionExpired((function() {
                        t.lifeCycleEventsEmitter.emitBeforeSessionRenewal(), t.doStart(!0), t.lifeCycleEventsEmitter.emitAfterSessionRenewal()
                    })), this.doStart()
                }
            }, t.prototype.doStart = function(t) {
                var e = this;
                void 0 === t && (t = !1), this.commandsService.start(), this.loadTracker.onLoad((function() {
                    e.lifeCycleEventsEmitter.emitStartTracking(t)
                })), ho(this.configuration) && !t || this.startDataCollection(t)
            }, t
        }(),
        Vo = function() {
            function t(t, e, i, r, n, o, s, a) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i, this.outdatedState = r, this.allowSubdomainsChange = n, this.crossDomainService = o, this.crossDomainSingleIframeService = s, this.forceInclusionService = a
            }
            return t.prototype.compute = function(t) {
                var e = this;
                this.configuration.crossDomainTracking && !this.configuration.cookielessTrackingEnabled ? this.configuration.crossDomainSingleIframeTracking ? this.crossDomainSingleIframeService.start((function() {
                    return e.computeState(t)
                })) : this.crossDomainService.applyUpToDate((function() {
                    return e.computeState(t)
                })) : this.computeState(t)
            }, t.prototype.computeState = function(t) {
                this.allowSubdomainsChange.handle(), this.outdatedState.clear(), this.isIncluded() ? (this.outdatedState.restoreClearedVisitor(), t(!0)) : (this.exclusionService.exclude(this.configuration), t(!1))
            }, t.prototype.isIncluded = function() {
                var t = et.boolean(this.configuration.sampleRate);
                return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && t
            }, t
        }();
    ! function(t) {
        t.generate = function() {
            var t = navigator.userAgent + navigator.language + navigator.platform,
                e = csString.prototype.slice.call(function(t) {
                    for (var e = 0, i = 0; i < t.length; i += 1) e = csString.prototype.charCodeAt.call(t, i) + (e << 6) + (e << 16) - e;
                    return Math.abs(e)
                }(t).toString(16), -4),
                i = (new csDate).getTime(),
                r = "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var e = (i + 16 * Math.random()) % 16 | 0;
                    return i = Math.floor(i / 16), ("x" === t ? e : 7 & e | 8).toString(16)
                }));
            return csString.prototype.replace.call(r, "hhhh", e)
        }
    }(Co || (Co = {}));
    var zo, qo = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.sessionService = i
            }
            return t.prototype.createOrUpdateVisitor = function() {
                var t = this.getVisitor();
                null === t && (t = this.createVisitor(), this.sessionService.removeSession()), this.updateVisitor(t), this.setVisitor(t)
            }, t.prototype.createVisitor = function() {
                return {
                    id: Co.generate(),
                    visitsCount: 0,
                    appliedTrackingDraw: this.configuration.lastTrackingDraw,
                    creationTimestamp: gt(),
                    lastVisitTimestamp: 0,
                    hitTimestamp: 0,
                    expires: vt() + this.configuration.visitorCookieTimeout
                }
            }, t.prototype.updateVisitor = function(t) {
                var e = gt();
                this.sessionService.doesSessionExist() || (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.configuration.lastTrackingDraw, this.currentVisitsCount = t.visitsCount
            }, t.prototype.getRequestParameters = function() {
                var t = this.getVisitor();
                return t ? {
                    uu: t.id,
                    sn: "".concat(t.visitsCount),
                    hd: "".concat(t.hitTimestamp)
                } : {}
            }, t.prototype.getVisitor = function() {
                return this.storage.get()
            }, t.prototype.setVisitor = function(t) {
                this.storage.set(t)
            }, t.prototype.doesVisitorExist = function() {
                return null !== this.storage.get()
            }, t.prototype.removeVisitor = function() {
                this.storage.remove()
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t.prototype.isSessionRenewed = function() {
                var t = this.getVisitor();
                return null !== t && void 0 !== this.currentVisitsCount && t.visitsCount !== this.currentVisitsCount
            }, t
        }(),
        Uo = function() {
            function t(t, e) {
                this.configuration = t, this.compressor = e
            }
            return t.prototype.isCompressionSupported = function() {
                return this.compressor.isSupported()
            }, t
        }(),
        Bo = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this, e, i) || this;
                return o.configuration = e, o.compressor = i, o.forceInclusionService = r, o.urlService = n, o
            }
            return U(e, t), e.prototype.sanitizeSessionRecordingState = function(t) {
                return t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && (this.forceInclusionService.isForceLegacyReplayRecorded() || et.percentage() < this.configuration.replayRecordingRate && Sr.isSupported()) ? Zt.REPLAY_RECORDING_ENABLED : Zt.REPLAY_RECORDING_DISABLED
            }, e.prototype.updateRecordingState = function(t) {
                return t.recordingState
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === Zt.REPLAY_RECORDING_ENABLED || this.computeTriggerSessionReplayStatus(t)
            }, e.prototype.computeTriggerSessionReplayStatus = function(t) {
                if (this.configuration.triggerSessionReplayEnabled && this.configuration.triggerSessionReplayRegex && t.recordingState !== Zt.REPLAY_RECORDING_ENABLED) {
                    var e = this.urlService.getUrl();
                    return this.configuration.triggerSessionReplayRegex.test(e)
                }
                return !1
            }, e.prototype.getDisabledRecordingState = function() {
                return Zt.REPLAY_RECORDING_DISABLED
            }, e.prototype.setVisitorService = function(t) {}, e
        }(Uo),
        Ho = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this, e, i) || this;
                return a.configuration = e, a.compressor = i, a.quotaServiceRequest = r, a.lifeCycleEventsEmitter = n, a.forceInclusionService = o, a.urlService = s, a.requestedRecordingTypes = [], a
            }
            return U(e, t), e.prototype.init = function() {
                this.bindQuotaServiceRequest()
            }, e.prototype.sanitizeSessionRecordingState = function(t) {
                return t.recordingState === $t.TEMPORARILY_RECORDED && (t.recordingState = $t.NOT_RECORDED), t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && Sr.isSupported() ? (this.requestedRecordingTypes = [], et.percentage() < this.configuration.replayRecordingRate || this.forceInclusionService.isForceMalkaReplayRecorded() ? csArray.prototype.push.call(this.requestedRecordingTypes, $t.GLOBAL_SAMPLING) : this.configuration.malkaUrlEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, $t.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, $t.ETR_SAMPLING), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), $t.TEMPORARILY_RECORDED) : $t.NOT_RECORDED) : $t.NOT_RECORDED
            }, e.prototype.updateRecordingState = function(t) {
                return this.isCompressionSupported() && Sr.isSupported() ? t.recordingState === $t.GLOBAL_SAMPLING ? $t.GLOBAL_SAMPLING : (this.requestedRecordingTypes = [], this.configuration.malkaUrlEnabled && (csArray.prototype.push.call(this.requestedRecordingTypes, $t.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, $t.ETR_SAMPLING)), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), $t.TEMPORARILY_RECORDED) : $t.NOT_RECORDED) : $t.NOT_RECORDED
            }, e.prototype.sendSamplingRequest = function(t) {
                var e, i = this,
                    r = null === (e = this.visitorService) || void 0 === e ? void 0 : e.getVisitor();
                this.quotaServiceRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify({
                            recordingTypes: csArray.prototype.map.call(i.requestedRecordingTypes, Number),
                            url: i.urlService.getUrl(),
                            projectId: i.configuration.projectId,
                            uu: (null == r ? void 0 : r.id) || "",
                            sn: (null == r ? void 0 : r.visitsCount) || "",
                            pn: (null == t ? void 0 : t.pageNumber) || ""
                        })
                    }
                }), this.quotaServiceRequest.send()
            }, e.prototype.abortQuotaServiceRequest = function() {
                this.quotaServiceRequest.abort()
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === $t.TEMPORARILY_RECORDED || t.recordingState === $t.GLOBAL_SAMPLING || t.recordingState === $t.URL_SAMPLING || t.etrState === te.ETR_ON
            }, e.prototype.bindQuotaServiceRequest = function() {
                var t = this;
                this.quotaServiceRequest.setRequestHeader({
                    name: "Content-Type",
                    value: "application/json"
                }), this.quotaServiceRequest.onError((function() {
                    return t.quotaServiceErrorHandler("NetworkError")
                })), this.quotaServiceRequest.onTimeout(3e3, (function() {
                    return t.quotaServiceTimeoutHandler()
                })), this.quotaServiceRequest.onLoad((function(e) {
                    return t.quotaServiceLoadHandler(e)
                }))
            }, e.prototype.quotaServiceErrorHandler = function(t) {
                this.emitRecordingStateOnError(), Wt.warn("Quota Service: request error - ".concat(t))
            }, e.prototype.quotaServiceTimeoutHandler = function() {
                this.emitRecordingStateOnError(), Wt.warn("Quota Service: request timeout")
            }, e.prototype.emitRecordingStateOnError = function() {
                var t = $t.NOT_RECORDED;
                this.isGlobalSamplingAllowed(this.requestedRecordingTypes) && (t = $t.GLOBAL_SAMPLING), this.lifeCycleEventsEmitter.emitRecordingStateChange(t, te.ETR_OFF)
            }, e.prototype.quotaServiceLoadHandler = function(t) {
                if (200 === t.status) {
                    var e;
                    try {
                        e = csJSON.parse(t.responseText)
                    } catch (e) {
                        return void this.quotaServiceErrorHandler("Unable to parse the quota service response: ".concat(t.responseText))
                    }
                    var i = null == e.allowedRecordingTypes ? void 0 : csArray.prototype.map.call(e.allowedRecordingTypes, csString);
                    if (i) {
                        var r = te.ETR_OFF,
                            n = $t.NOT_RECORDED;
                        this.isGlobalSamplingAllowed(i) ? n = $t.GLOBAL_SAMPLING : this.isUrlSamplingAllowed(i) && (n = $t.URL_SAMPLING), this.isEtrSamplingAllowed(i) && (r = te.ETR_ON), this.lifeCycleEventsEmitter.emitRecordingStateChange(n, r)
                    } else this.quotaServiceErrorHandler("recording types missing from quota service response")
                } else this.quotaServiceErrorHandler("Status code: ".concat(t.status))
            }, e.prototype.isGlobalSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === $t.GLOBAL_SAMPLING
                }))
            }, e.prototype.isUrlSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === $t.URL_SAMPLING
                }))
            }, e.prototype.isEtrSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === $t.ETR_SAMPLING
                }))
            }, e.prototype.setVisitorService = function(t) {
                this.visitorService = t
            }, e.prototype.getDisabledRecordingState = function() {
                return $t.NOT_RECORDED
            }, H([Kt("Quota Service: onerror")], e.prototype, "quotaServiceErrorHandler", null), H([Kt("Quota Service: ontimeout")], e.prototype, "quotaServiceTimeoutHandler", null), H([Kt("Quota Service: onload")], e.prototype, "quotaServiceLoadHandler", null), e
        }(Uo),
        Fo = function() {
            function t(t, e) {
                this.sessionStorage = t, this.recordingStateStrategy = e, this.triggerSessionReplayOngoing = !1, this.extendedSessionTimeoutId = null, this.sessionExtensionCount = 0
            }
            return t.prototype.setDynamicVariablesService = function(t) {
                this.dynamicVariablesService = t
            }, t.prototype.createOrUpdateSession = function() {
                this.stopSessionExtension(), this.beginSession = vt(), this.sessionExtensionCount = 0;
                var t = this.getSessionWithoutCache();
                null === t ? (t = this.buildSessionObject(), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t)) : (t = this.recordingStateStrategy.sanitizeSessionRecordingState(t), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.updateRecordingState(t)), this.setSession(t), this.setTriggerSessionReplayStatus(t)
            }, t.prototype.buildSessionObject = function() {
                return {
                    pageNumber: 0,
                    recordingState: this.recordingStateStrategy.getDisabledRecordingState(),
                    etrState: te.ETR_OFF
                }
            }, t.prototype.setTriggerSessionReplayStatus = function(t) {
                this.recordingStateStrategy instanceof Bo ? this.triggerSessionReplayOngoing = this.recordingStateStrategy.computeTriggerSessionReplayStatus(t) : this.triggerSessionReplayOngoing = !1
            }, t.prototype.createExtendedSession = function() {
                var t = this.buildSessionObject();
                return this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t), this.setTriggerSessionReplayStatus(t), t
            }, t.prototype.incrementSessionPageNumber = function(t) {
                t.pageNumber += 1
            }, t.prototype.isReplayRecorded = function() {
                var t = this.getSession();
                return !!t && this.recordingStateStrategy.isReplayRecorded(t)
            }, t.prototype.isTemporarilyRecorded = function() {
                var t = this.getSession();
                return (null == t ? void 0 : t.recordingState) === $t.TEMPORARILY_RECORDED
            }, t.prototype.abortQuotaServiceRequest = function() {
                this.recordingStateStrategy instanceof Ho && this.recordingStateStrategy.abortQuotaServiceRequest()
            }, t.prototype.getRequestParameters = function() {
                var t = {},
                    e = this.getSession();
                return null !== e && (t.pn = "".concat(e.pageNumber), this.recordingStateStrategy instanceof Bo && (t.re = this.triggerSessionReplayOngoing ? Zt.TRIGGER_REPLAY_RECORDING_ENABLED : e.recordingState)), t
            }, t.prototype.getSession = function() {
                return this.sessionStorage.get()
            }, t.prototype.getSessionWithoutCache = function() {
                return this.sessionStorage.get(!0)
            }, t.prototype.doesSessionExist = function() {
                return null !== this.sessionStorage.get()
            }, t.prototype.setSession = function(t) {
                this.sessionStorage.set(t)
            }, t.prototype.removeSession = function() {
                this.sessionStorage.remove()
            }, t.prototype.getRecordingStates = function() {
                var t = this.getSession(),
                    e = [];
                return t && (t.recordingState !== $t.NOT_RECORDED && csArray.prototype.push.call(e, t.recordingState), t.etrState === te.ETR_ON && csArray.prototype.push.call(e, $t.ETR_SAMPLING)), e
            }, t.prototype.updateRecordingState = function(t, e) {
                var i = this.getSession();
                null !== i && (i.recordingState = t, i.etrState = e, this.setSession(i))
            }, t.prototype.hasValidSession = function() {
                var t = this.sessionStorage.getRawSession();
                return this.sessionStorage.isValid(t)
            }, t.prototype.handleSubdomainChange = function() {
                this.sessionStorage.handleSubdomainChange()
            }, t.prototype.pollCacheRefreshEvent = function() {
                var t = this.sessionStorage.isCacheRefreshed();
                return t && this.sessionStorage.resetCacheRefreshed(), t
            }, t.prototype.extendSessionPeriodically = function() {
                this.extendedSessionTimeoutId || this.extendSession()
            }, t.prototype.extendSession = function() {
                if (this.hasReachedMaxDuration()) this.stopSessionExtension();
                else {
                    var t = this.getSession();
                    null === t && (t = this.createExtendedSession()), this.sessionStorage.set(t, 174e4), this.sendDynamicVar(), this.scheduleNextSessionUpdate()
                }
            }, t.prototype.scheduleNextSessionUpdate = function() {
                var t = this;
                this.extendedSessionTimeoutId = window.setTimeout((function() {
                    t.extendSession()
                }), 174e4)
            }, t.prototype.hasReachedMaxDuration = function() {
                return 1434e4 - (vt() + 18e5 - this.beginSession) < 0
            }, t.prototype.stopSessionExtension = function() {
                this.extendedSessionTimeoutId && (window.clearTimeout(this.extendedSessionTimeoutId), this.extendedSessionTimeoutId = null)
            }, t.prototype.sendDynamicVar = function() {
                this.sessionExtensionCount += 1, this.dynamicVariablesService.trackDynamicVariable("session_expiry_update", this.sessionExtensionCount)
            }, t
        }(),
        Go = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i
            }
            return t.prototype.clear = function() {
                this.isVisitorOutdated() && (this.savedVisitor = this.visitorService.getVisitor(), this.visitorService.removeVisitor()), this.isExclusionOutdated() && this.exclusionService.removeExclusion()
            }, t.prototype.isVisitorOutdated = function() {
                return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw
            }, t.prototype.isExclusionOutdated = function() {
                return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw
            }, t.prototype.restoreClearedVisitor = function() {
                this.savedVisitor && this.visitorService.setVisitor(this.savedVisitor)
            }, t
        }(),
        jo = function() {
            function t(t, e) {
                this.visitorService = t, this.sessionService = e
            }
            return t.prototype.handle = function() {
                this.handleVisitor(), this.handleSession()
            }, t.prototype.handleVisitor = function() {
                this.visitorService.handleSubdomainChange()
            }, t.prototype.handleSession = function() {
                this.sessionService.handleSubdomainChange()
            }, t
        }(),
        Wo = function() {
            function t() {
                this.listeners = []
            }
            return t.prototype.addListeners = function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                (t = csArray.prototype.push).call.apply(t, W([this.listeners], e, !1))
            }, t
        }(),
        Ko = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.emitBeforeNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeNaturalPageView && i.onBeforeNaturalPageView()
                }
            }, e.prototype.emitAfterNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterNaturalPageView && i.onAfterNaturalPageView()
                }
            }, e.prototype.emitInitTracking = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitTracking && i.onInitTracking()
                }
            }, e.prototype.emitStartTracking = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onStartTracking && r.onStartTracking(t)
                }
            }, e.prototype.emitArtificialPageViewEnd = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onArtificialPageViewEnd && i.onArtificialPageViewEnd()
                }
            }, e.prototype.emitBeforeArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeArtificialPageView && i.onBeforeArtificialPageView()
                }
            }, e.prototype.emitAfterArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterArtificialPageView && i.onAfterArtificialPageView()
                }
            }, e.prototype.emitBeforeSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeSessionRenewal && i.onBeforeSessionRenewal()
                }
            }, e.prototype.emitAfterSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterSessionRenewal && i.onAfterSessionRenewal()
                }
            }, e.prototype.emitOptout = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onOptout && i.onOptout()
                }
            }, e.prototype.emitConsentGranted = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentGranted && i.onConsentGranted()
                }
            }, e.prototype.emitConsentWithdrawn = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentWithdrawn && i.onConsentWithdrawn()
                }
            }, e.prototype.emitRecordingStateChange = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onRecordingStateChange && n.onRecordingStateChange(t, e)
                }
            }, e.prototype.emitInitialDomStart = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitialDomStart && i.onInitialDomStart()
                }
            }, e.prototype.emitInitialDomDone = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onInitialDomDone && r.onInitialDomDone(t)
                }
            }, e
        }(Wo);
    ! function(t) {
        t[t.NOT_REQUIRED = 0] = "NOT_REQUIRED", t[t.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", t[t.GRANTED = 2] = "GRANTED", t[t.WITHDRAWN = 3] = "WITHDRAWN"
    }(zo || (zo = {}));
    var Yo, Xo = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                var t;
                return null === (t = this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_c") : this.cookieService.get("_cs_c")) ? t : Number(t)
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_c", csString(t)) : this.cookieService.set("_cs_c", csString(t), 34164e6)
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.removeItem("_cs_c") : this.cookieService.delete("_cs_c")
            }, t.prototype.handleSubdomainChange = function() {
                this.configuration.cookielessTrackingEnabled || (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_c", Yt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_c", this.cookieService.getRootDomain()))
            }, t
        }(),
        Qo = ["trackConsentGranted"],
        Jo = ["trackConsentWithdrawn"],
        Zo = function() {
            function t(t, e) {
                this.commandsService = t, this.service = e
            }
            return t.prototype.init = function() {
                this.service.handleSubdomainChange(), this.service.setInitialConsent(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(Qo, (function() {
                    t.service.grantConsent()
                })), this.commandsService.register(Jo, (function() {
                    t.service.withdrawConsent()
                }))
            }, t.prototype.onOptout = function() {
                this.service.removeConsent()
            }, t
        }(),
        $o = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.lifeCycleEventsEmitter = i
            }
            return t.prototype.setInitialConsent = function() {
                var t = this.storage.get();
                (null === t || this.hasConsentRequiredChanged(t)) && this.setDefault()
            }, t.prototype.hasConsentRequiredChanged = function(t) {
                var e = this.configuration.consentRequired;
                return e && t === zo.NOT_REQUIRED || !e && t !== zo.NOT_REQUIRED
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t.prototype.setDefault = function() {
                var t = this.configuration.consentRequired ? zo.NOT_EXPRESSED : zo.NOT_REQUIRED;
                this.storage.set(t)
            }, t.prototype.grantConsent = function() {
                this.configuration.consentRequired && (this.storage.set(zo.GRANTED), this.lifeCycleEventsEmitter.emitConsentGranted())
            }, t.prototype.withdrawConsent = function() {
                this.configuration.consentRequired && (this.storage.set(zo.WITHDRAWN), this.lifeCycleEventsEmitter.emitConsentWithdrawn())
            }, t.prototype.removeConsent = function() {
                this.storage.remove()
            }, t.prototype.isAllowedByConsent = function() {
                return !this.configuration.consentRequired || this.storage.get() === zo.GRANTED
            }, t.prototype.getRequestParameters = function() {
                return {
                    uc: "".concat(this.storage.get())
                }
            }, t
        }(),
        ts = function() {
            function t(t, e, i, r, n, o, s) {
                this.lifeCycleEventsEmitter = t, this.commandsService = e, this.commandsModule = i, this.optoutModule = r, this.optoutService = n, this.exclusionModule = o, this.consentModule = s
            }
            return t.prototype.start = function() {
                this.lifeCycleEventsEmitter.addListeners(this.exclusionModule, this.consentModule, this.commandsModule), this.consentModule.init(), this.optoutModule.init(), this.optoutService.init(), this.optoutService.isActive() || this.commandsService.start()
            }, t
        }(),
        es = function() {
            function t(t, e) {
                this.location = t, this.storage = e
            }
            return t.prototype.exclude = function(t) {
                this.storage.set(csString(t.lastTrackingDraw))
            }, t.prototype.removeExclusion = function() {
                this.storage.remove()
            }, t.prototype.isExcluded = function() {
                return this.hasExclusionInStorage() || this.hasExclusionInURL()
            }, t.prototype.hasExclusionInStorage = function() {
                return 0 !== this.getAppliedTrackingDraw()
            }, t.prototype.getAppliedTrackingDraw = function() {
                return this.storage.get()
            }, t.prototype.hasExclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_ex") > 0
            }, t
        }(),
        is = function() {
            function t(t) {
                this.service = t
            }
            return t.prototype.onOptout = function() {
                this.service.removeExclusion()
            }, t
        }(),
        rs = function() {
            function t(t, e) {
                this.location = t, this.cookieService = e
            }
            return t.prototype.isForceIncluded = function() {
                return this.hasForceInclusionCookie() || this.hasForceInclusionInURL()
            }, t.prototype.isForceLegacyReplayRecorded = function() {
                return this.hasForceInclusionCookieValue(Zt.REPLAY_RECORDING_ENABLED) || this.hasForceInclusionValueInURL(Zt.REPLAY_RECORDING_ENABLED)
            }, t.prototype.isForceMalkaReplayRecorded = function() {
                return this.hasForceInclusionCookieValue($t.GLOBAL_SAMPLING)
            }, t.prototype.hasForceInclusionCookie = function() {
                return null !== this.cookieService.get("_cs_inc")
            }, t.prototype.hasForceInclusionCookieValue = function(t) {
                return this.cookieService.get("_cs_inc") === t
            }, t.prototype.hasForceInclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_inc") > 0
            }, t.prototype.hasForceInclusionValueInURL = function(t) {
                return csString.prototype.indexOf.call(this.location.href, "".concat("_cs_inc", "=").concat(t)) > 0
            }, t
        }(),
        ns = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_optout") : this.cookieService.get("_cs_optout")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_optout", t) : this.cookieService.set("_cs_optout", t, 34164e6)
            }, t
        }(),
        os = function() {
            function t(t, e, i) {
                this.lifeCycleEventsEmitter = t, this.location = e, this.storage = i
            }
            return t.prototype.init = function() {
                !this.isActive() && this.hasOptoutInURL() && this.activate()
            }, t.prototype.isActive = function() {
                return "1" === this.storage.get()
            }, t.prototype.activate = function() {
                this.lifeCycleEventsEmitter.emitOptout(), this.storage.set("1")
            }, t.prototype.hasOptoutInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_optout") > 0
            }, t
        }(),
        ss = ["optout"],
        as = function() {
            function t(t, e) {
                this.commandsService = t, this.optoutService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(ss, (function() {
                    t.optoutService.activate()
                }))
            }, t
        }();

    function cs(t, e) {
        return e.visitor.visitsCount !== t.visitor.visitsCount ? e.visitor.visitsCount - t.visitor.visitsCount : t.session ? e.session ? e.session.pageNumber - t.session.pageNumber : -1 : 1
    }! function(t) {
        t.select = function(t, e) {
            var i = function(t, e) {
                    return csArray.prototype.filter.call(t, (function(t) {
                        return t.exclusion === e
                    }))[0]
                }(t, e),
                r = function(t, e) {
                    return csArray.prototype.sort.call(csArray.prototype.filter.call(t, (function(t) {
                        return function(t, e) {
                            return t.visitor && t.visitor.appliedTrackingDraw === e
                        }(t, e)
                    })), cs)[0]
                }(t, e);
            return i || r
        }
    }(Yo || (Yo = {}));
    var us = function() {
            function t(t, e, i) {
                this.configuration = t, this.currentDomainState = e, this.otherDomainStates = i
            }
            return t.prototype.applyUpToDate = function(t) {
                var e = this;
                this.otherDomainStates.retrieve(this.configuration.hostnames, (function(i) {
                    var r = W([e.currentDomainState.get()], i, !0),
                        n = Yo.select(r, e.configuration.lastTrackingDraw);
                    e.currentDomainState.apply(n), t()
                }))
            }, t
        }(),
        ls = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeEventsEmitter = e
            }
            return t.prototype.init = function() {
                this.iframeEventsEmitter.addListeners(this.commandsService)
            }, t.prototype.onOptout = function() {
                this.commandsService.stop()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.commandsService.stop()
            }, t
        }();
    var hs, ps = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.registry = {}, e
            }
            return U(e, t), e.prototype.register = function(t, e) {
                for (var i = 0, r = t; i < r.length; i++) {
                    var n = r[i];
                    this.registry[n] = e, this.registry
                }
            }, e.prototype.onStart = function() {
                this.applyPending(), this.enableImmediateApplication()
            }, e.prototype.onStop = function() {
                window._uxa = []
            }, e.prototype.onIframeCommands = function(t) {
                for (var e = 0, i = t.commands; e < i.length; e++) {
                    var r = i[e];
                    this.applyFromIframe(r.name, r.params, t.iframePath)
                }
            }, e.prototype.applyFromIframe = function(t, e, i) {
                var r = this;
                Wt.tryToExecute("Commands.apply.from.iframe: ".concat(i), (function() {
                    var i;
                    if (r.registry[t]) return (i = r.registry)[t].apply(i, e)
                }))()
            }, e.prototype.applyPending = function() {
                var t = this;
                window._uxa.forEach((function(e) {
                    var i = e[0],
                        r = e.slice(1);
                    return t.apply(i, r)
                }))
            }, e.prototype.enableImmediateApplication = function() {
                var t = this;
                window._uxa = {
                    push: function(e) {
                        var i = e[0],
                            r = e.slice(1);
                        return t.apply(i, r)
                    }
                }
            }, e.prototype.apply = function(t, e) {
                var i;
                if (this.registry[t]) return (i = this.registry)[t].apply(i, e)
            }, H([Kt("Commands.apply")], e.prototype, "apply", null), e
        }(Xe),
        ds = function() {
            function t() {
                var t = this;
                this.eventHandler = {
                    boundElement: document,
                    type: "securitypolicyviolation",
                    listener: function(e) {
                        return t.securityPolicyViolationListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                ke(this.eventHandler)
            }, t.prototype.stop = function() {
                Ie(this.eventHandler)
            }, t.prototype.isSecurityErrorRelevant = function(e) {
                if (!e) return !1;
                var i = e.disposition;
                return xt(e.sourceFile) && csArray.prototype.some.call(t.whilelistDomains, (function(t) {
                    return csString.prototype.indexOf.call(e.sourceFile, t) > 0
                })) && "report" !== i
            }, t.prototype.securityPolicyViolationListener = function(t) {
                this.isSecurityErrorRelevant(t) && this.onEventCallback({
                    violatedDirective: t.violatedDirective,
                    sourceFile: t.sourceFile
                })
            }, t.whilelistDomains = ["contentsquare", "cdnssl.clicktale.net", "localhost", "website.com/build/e2e"], H([Kt("Event handler type: securitypolicyviolation")], t.prototype, "securityPolicyViolationListener", null), t
        }(),
        fs = function() {
            function t(t) {
                this.contentSecurityPolicyErrorsTracker = t
            }
            return t.prototype.init = function() {
                var t = this;
                this.contentSecurityPolicyErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, t.prototype.start = function() {
                this.contentSecurityPolicyErrorsTracker.start()
            }, t.prototype.stop = function() {
                this.contentSecurityPolicyErrorsTracker.stop()
            }, t.prototype.processEvent = function(t) {
                var e = "Content Security Policy error. Violated directive: ".concat(t.violatedDirective, " - Source file: ").concat(t.sourceFile);
                Wt.warn(e)
            }, t
        }(),
        ys = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this) || this;
                return a.javaScriptErrorsTracker = e, a.javaScriptErrorsRequest = i, a.basicRequestParameters = r, a.javaScriptErrorsAnonymizer = n, a.customEventEmitter = o, a.urlService = s, a.javaScriptErrorsBatch = [], a.javaScriptErrorsCount = 0, a.customErrorsBuffer = [], a
            }
            return U(e, t), e.prototype.init = function() {
                this.bindRequest()
            }, e.prototype.initStates = function() {
                this.startTime = vt(), this.javaScriptErrorsBatch = [], this.javaScriptErrorsCount = 0
            }, e.prototype.onStart = function() {
                var t = this;
                this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                })), this.processCustomErrorsInBuffer()
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.javaScriptErrorsBatch
                })
            }, e.prototype.onIframeJavascriptError = function(t) {
                this.processEvent(t)
            }, e.prototype.trackCustomError = function(t) {
                var e = {
                    errorType: "jsError",
                    message: "".concat("Custom Error:", " ").concat(t),
                    lineno: 1,
                    colno: 1,
                    filename: "https://cserror.com/texterror.js"
                };
                this.processCustomErrorEvent(e)
            }, e.prototype.processCustomErrorEvent = function(t) {
                var e = this;
                this.isStarted ? this.processEvent(t, (function(t) {
                    return e.customEventEmitter.emitCustomJavaScriptErrorEvent(t)
                })) : csArray.prototype.push.call(this.customErrorsBuffer, t)
            }, e.prototype.processCustomErrorsInBuffer = function() {
                var t = this;
                this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function(e) {
                    return t.processCustomErrorEvent(e)
                })), this.customErrorsBuffer = [])
            }, e.prototype.processEvent = function(t, e) {
                if (this.isStarted && this.javaScriptErrorsCount < 20) {
                    var i = B(B({}, t), {
                        pageUrl: this.urlService.getUrl(),
                        rt: this.getRelativeTime()
                    });
                    this.javaScriptErrorsAnonymizer.anonymize(i), csArray.prototype.push.call(this.javaScriptErrorsBatch, i), this.sendErrors(), e && e(i)
                }
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.javaScriptErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.javaScriptErrorsRequest.setRequestPayloadProvider(this), this.javaScriptErrorsRequest.after((function() {
                    t.javaScriptErrorsBatch = [], t.javaScriptErrorsCount += 1
                }))
            }, e.prototype.getRelativeTime = function() {
                return vt() - this.startTime
            }, e.prototype.sendErrors = function() {
                this.javaScriptErrorsRequest.send()
            }, e.SERVICE_IDENTIFIER = "JavaScriptErrorsService", e
        }(Xe),
        vs = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.apiErrorsTracker = e, o.apiErrorsRequest = i, o.basicRequestParameters = r, o.apiErrorsAnonymizer = n, o.apiErrorsBatch = [], o.apiErrorsCount = 0, o
            }
            return U(e, t), e.prototype.init = function() {
                this.apiErrorsTracker.init(), this.bindRequest()
            }, e.prototype.initStates = function() {
                this.apiErrorsBatch = [], this.apiErrorsCount = 0, this.resetStartTime()
            }, e.prototype.resetStartTime = function() {
                this.startTime = vt()
            }, e.prototype.getRelativeTime = function() {
                return vt() - this.startTime
            }, e.prototype.onStart = function() {
                var t = this;
                this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.apiErrorsBatch
                })
            }, e.prototype.onIframeApiError = function(t) {
                this.processEvent(t)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.apiErrorsCount < e.MAX_ERRORS && (t.relativeTime = this.getRelativeTime(), csArray.prototype.push.call(this.apiErrorsBatch, this.apiErrorsAnonymizer.anonymize(t)), this.sendErrors())
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.apiErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.apiErrorsRequest.setRequestPayloadProvider(this), this.apiErrorsRequest.after((function() {
                    t.apiErrorsBatch = [], t.apiErrorsCount += 1
                }))
            }, e.prototype.sendErrors = function() {
                this.apiErrorsRequest.send()
            }, e.SERVICE_IDENTIFIER = "ApiErrorsService", e.MAX_ERRORS = 20, e
        }(Xe),
        gs = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.customErrorsRequest = e, o.basicRequestParameters = i, o.piiAnonymizer = r, o.customEventsEmitter = n, o.customErrorsBatch = [], o.customErrorsCount = 0, o.customErrorsBuffer = [], o
            }
            return U(e, t), e.prototype.init = function() {
                this.bindRequest()
            }, e.prototype.initStates = function() {
                this.startTime = vt(), this.customErrorsBatch = [], this.customErrorsCount = 0
            }, e.prototype.trackCustomError = function(t, e) {
                if (void 0 === e && (e = {}), xt(t) && Vt(e)) {
                    var i = {
                        message: csString.prototype.slice.call(t, 0, 300),
                        errorType: "customError"
                    };
                    this.isAttributesValid(e) && (i.attributes = e), this.processCustomErrorEvent(i)
                }
            }, e.prototype.isAttributesValid = function(t) {
                var e = Object.keys(t).length;
                if (0 === e || e > 5) return !1;
                for (var i in t)
                    if (i.length > 30 || t[i].length > 30) return !1;
                return !0
            }, e.prototype.onStart = function() {
                this.processCustomErrorsInBuffer()
            }, e.prototype.onStop = function() {}, e.prototype.processCustomErrorsInBuffer = function() {
                var t = this;
                this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function(e) {
                    return t.processCustomErrorEvent(e)
                })), this.customErrorsBuffer = [])
            }, e.prototype.processCustomErrorEvent = function(t) {
                if (this.isStarted) {
                    var e = this.buildCustomError(t);
                    this.processEvent(e), this.customEventsEmitter.emitCustomErrorEvent(e)
                } else csArray.prototype.push.call(this.customErrorsBuffer, t)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.customErrorsCount < 20 && (csArray.prototype.push.call(this.customErrorsBatch, t), this.sendErrors())
            }, e.prototype.buildCustomError = function(t) {
                var e = B(B({}, t), {
                    rt: this.getRelativeTime()
                });
                return e.message = this.piiAnonymizer.anonymize(t.message), e
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.customErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.customErrorsRequest.setRequestPayloadProvider(this), this.customErrorsRequest.after((function() {
                    t.customErrorsBatch = [], t.customErrorsCount += 1
                }))
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.customErrorsBatch
                })
            }, e.prototype.getRelativeTime = function() {
                return vt() - this.startTime
            }, e.prototype.sendErrors = function() {
                this.customErrorsRequest.send()
            }, e
        }(Xe);
    ! function(t) {
        t.CONTENTSQUARE = "contentsquare.net", t.CLICKTALE = "clicktale.net", t.FAKE_TRACKER = "fake-tracker.content-square.fr"
    }(hs || (hs = {}));
    var ms, Ss = ["trackError"],
        Es = ["api-errors:maskUrl"],
        bs = function() {
            function t(t, e, i, r, n, o, s, a, c, u, l) {
                this.javaScriptErrorsTracker = t, this.javaScriptErrorsAnonymizer = e, this.apiErrorsTracker = i, this.apiErrorsAnonymizer = r, this.piiAnonymizer = n, this.configuration = o, this.basicRequestParameters = s, this.iframeEventsEmitter = a, this.commandsService = c, this.customEventEmitter = u, this.urlService = l
            }
            return t.prototype.init = function() {
                this.contentSecurityPolicyErrorsService = new fs(new ds), this.contentSecurityPolicyErrorsService.init();
                var t = new Ae(this.configuration.getTrackerUri(), "errors");
                this.javaScriptErrorsService = new ys(this.javaScriptErrorsTracker, t, this.basicRequestParameters, this.javaScriptErrorsAnonymizer, this.customEventEmitter, this.urlService), this.javaScriptErrorsService.init(), this.iframeEventsEmitter.addListeners(this.javaScriptErrorsService);
                var e = new Ae(this.configuration.getTrackerUri(), "api-errors");
                this.apiErrorsTracker.excludeDomains([hs.CONTENTSQUARE, hs.CLICKTALE, hs.FAKE_TRACKER]), this.apiErrorsService = new vs(this.apiErrorsTracker, e, this.basicRequestParameters, this.apiErrorsAnonymizer), this.apiErrorsService.init(), this.iframeEventsEmitter.addListeners(this.apiErrorsService);
                var i = new Ae(this.configuration.getTrackerUri(), "custom-errors");
                this.customErrorsService = new gs(i, this.basicRequestParameters, this.piiAnonymizer, this.customEventEmitter), this.customErrorsService.init(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(Es, (function(e) {
                    return t.apiErrorsAnonymizer.addUrlMaskingPattern(e)
                })), this.commandsService.register(Ss, (function(e, i) {
                    t.configuration.customErrorsEnabled ? t.customErrorsService.trackCustomError(e, i) : t.configuration.jsCustomErrorsEnabled && t.javaScriptErrorsService.trackCustomError(e)
                }))
            }, t.prototype.onInitTracking = function() {
                this.contentSecurityPolicyErrorsService.start()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.javaScriptErrorsService.start(), this.configuration.apiErrors.enabled && this.apiErrorsService.start(), this.configuration.customErrorsEnabled && this.customErrorsService.start()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates(), this.customErrorsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates(), this.customErrorsService.initStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.javaScriptErrorsService.stop(), this.apiErrorsService.stop(), this.customErrorsService.stop()
            }, t.prototype.onOptout = function() {
                this.contentSecurityPolicyErrorsService.stop(), this.javaScriptErrorsService.stop(), this.apiErrorsService.stop(), this.customErrorsService.stop()
            }, t
        }();
    ! function(t) {
        t.Set = "set", t.Remove = "remove"
    }(ms || (ms = {}));
    var Cs = function() {
            function t(t, e) {
                this.configuration = t, this.cookieService = e, this.sameSite = Gt.None, this.isActivated = !1, this.setCookieBatch = [], this.removeCookieBatch = []
            }
            return t.prototype.init = function() {
                this.sameSite = this.cookieService.isSameSiteSupported() ? Gt.None : Gt.NotSet
            }, t.prototype.setStates = function(t, e) {
                this.currentDomainState = t, this.iframeDomainState = e
            }, t.prototype.start = function(t) {
                var e = this;
                this.iframeDomainState.init(this.getIframeDomain(), (function(i, r) {
                    var n = [e.currentDomainState.get()];
                    r && csArray.prototype.push.call(n, i);
                    var o = Yo.select(n, e.configuration.lastTrackingDraw);
                    e.isActivated = !0, e.currentDomainState.apply(o), t()
                })), this.iframe = this.iframeDomainState.openIframe()
            }, t.prototype.setCookie = function(t, e, i) {
                if (this.isActivated) {
                    var r = {
                        name: t,
                        value: e,
                        samesite: this.sameSite,
                        secure: jt.Yes
                    };
                    i && (r.expires = Ht.toExpireDate(i).getTime()), this.addToSetCookieBatch(r)
                }
            }, t.prototype.removeCookie = function(t) {
                this.isActivated && this.addToRemoveCookieBatch(t)
            }, t.prototype.addToRemoveCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t
                })), csArray.prototype.push.call(this.removeCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.addToSetCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t.name
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t.name
                })), csArray.prototype.push.call(this.setCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.setBatchReadyCall = function() {
                this.sendMessagesBatchs()
            }, t.prototype.sendMessagesBatchs = function() {
                if (this.setCookieBatch.length > 0) {
                    var t = this.buildMessage(ms.Set, this.setCookieBatch);
                    this.sendMessage(t), this.setCookieBatch = []
                }
                if (this.removeCookieBatch.length > 0) {
                    var e = this.buildMessage(ms.Remove, this.removeCookieBatch);
                    this.sendMessage(e), this.removeCookieBatch = []
                }
            }, t.prototype.buildMessage = function(t, e) {
                return {
                    command: t,
                    cookies: e,
                    domain: null,
                    pid: this.configuration.projectId
                }
            }, t.prototype.sendMessage = function(t) {
                var e = "https://".concat(this.getIframeDomain());
                this.iframe.contentWindow && this.iframe.contentWindow.postMessage(t, e)
            }, t.prototype.getIframeDomain = function() {
                return this.configuration.dualCollectionTagDomain && "contentsquare.net" !== this.configuration.dualCollectionTagDomain ? "cdnssl.".concat(this.configuration.dualCollectionTagDomain) : "csxd.".concat("contentsquare.net")
            }, H([Hi(), Kt("send xdframe-single-iframe batch")], t.prototype, "setBatchReadyCall", null), t
        }(),
        ws = function() {
            function t(t, e) {
                this.configuration = t, this.xdframeOpener = e
            }
            return t.prototype.init = function(t, e) {
                this.xdframeOrigin = "https://".concat(t), this.callback = e
            }, t.prototype.openIframe = function() {
                var t = this;
                this.xdframeOpener.onMessage((function(e) {
                    t.handleXdframeMessage(e)
                })), this.xdframeOpener.onTimeout((function() {
                    t.handleTimeout()
                })), this.xdframeOpener.start();
                var e = this.getXdframeUrl(this.xdframeOrigin);
                return this.xdframeOpener.open(e)
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data,
                        i = !0;
                    if (this.isXdframeErrorMessage(t)) return void Wt.warn("Error xdframe single domain: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin));
                    if (!le.isRawDomainState(e)) return void Wt.warn("Unknown message format from xdframe single domain: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin));
                    le.isValid(e) || (Wt.warn("Invalid xdframe single domain state: ".concat(csJSON.stringify(t.data), " from ").concat(t.origin)), i = !1), this.xdframeOpener.stop(), this.callback(i ? ce.fromRaw(e) : {}, i)
                }
            }, t.prototype.handleTimeout = function() {
                Wt.warn("xdframe single domain: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return t.origin === this.xdframeOrigin && Vt(t.data)
            }, t.prototype.isXdframeErrorMessage = function(t) {
                return !!t.data.error
            }, t.prototype.getXdframeUrl = function(t) {
                var e = this.configuration.projectId;
                return "".concat(t, "/uxa/xdframe-single-domain-").concat("1.1.1", ".html?pid=").concat(e)
            }, t
        }(),
        Ts = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.sessionService = i
            }
            return t.prototype.getRequestParameters = function() {
                if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) return {};
                var t = this.visitorService.getVisitor();
                return B(B(B({}, {
                    v: "11.65.1"
                }), this.configuration.getRequestParameters()), {
                    uu: t.id,
                    sn: "".concat(t.visitsCount),
                    pn: "".concat(this.sessionService.getSession().pageNumber)
                })
            }, t
        }(),
        Rs = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.useCapture = !1, e.eventHandler = {
                    boundElement: window,
                    type: "error",
                    listener: function(t) {
                        return e.errorListener(t)
                    }
                }, e
            }
            return U(e, t), e.prototype.onStartTracking = function() {
                ke(this.eventHandler, this.useCapture)
            }, e.prototype.onStopTracking = function() {
                Ie(this.eventHandler, this.useCapture)
            }, e.prototype.errorListener = function(t) {
                var e = this.buildJavaScriptError(t);
                for (var i in this.subscriptions) {
                    (0, this.subscriptions[i])(e)
                }
            }, e.prototype.decorateErrorMessage = function(t) {
                return (t = null != t ? t : "[NO ERROR MESSAGE]").length <= e.MAX_ERROR_MESSAGE_LENGTH ? t : csString.prototype.slice.call(t, 0, e.MAX_ERROR_MESSAGE_LENGTH - e.truncatedErrorMessageMarker.length) + e.truncatedErrorMessageMarker
            }, e.prototype.buildJavaScriptError = function(t) {
                return {
                    errorType: "jsError",
                    message: this.decorateErrorMessage(t.message),
                    filename: t.filename,
                    lineno: t.lineno,
                    colno: t.colno
                }
            }, e.truncatedErrorMessageMarker = "…", e.MAX_ERROR_MESSAGE_LENGTH = 1024, H([Kt("Event handler type: error")], e.prototype, "errorListener", null), e
        }(Lo),
        As = function() {
            function t(t, e) {
                this.commandsService = t, this.projectConfiguration = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(["debugEvents"], (function(e) {
                    "boolean" == typeof e && t.projectConfiguration.updateDynamicFields("emitDebugEvents", e)
                }))
            }, t
        }();

    function ks(t, e, i) {
        if (!zt(e) && !zt(i)) return t.href;
        var r = zt(e) ? function(t) {
                return $(t, "/") ? t : "/".concat(t)
            }(e) : t.pathname,
            n = zt(i) ? function(t) {
                return $(t, "?") || "" === t ? t : "?".concat(t)
            }(i) : t.search;
        return "".concat(t.protocol, "//").concat(t.host).concat(r).concat(n)
    }
    var Is, _s, Ps, Ns = function() {
            function t(t, e) {
                this.location = t, this.pii = e
            }
            return t.prototype.overridePath = function(t) {
                zt(t) && xt(t) && (this.path = "" === t ? void 0 : t)
            }, t.prototype.overrideQuery = function(t) {
                zt(t) && xt(t) && (this.query = t)
            }, t.prototype.computeOverriddenUrl = function(t) {
                return this.isCurrentPageUrl(t) ? this.getUrl() : t
            }, t.prototype.isCurrentPageUrl = function(t) {
                var e = this.normalizeUrl(this.location.href);
                return this.normalizeUrl(t) === e
            }, t.prototype.normalizeUrl = function(t) {
                return tt(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t
            }, t.prototype.getUrl = function() {
                return ks(this.location, this.path, this.query)
            }, t.prototype.getUrlProtocol = function() {
                return this.location.protocol
            }, t.prototype.getRequestParameters = function() {
                var t = this.getUrl();
                return {
                    url: this.pii.anonymize(t)
                }
            }, t
        }(),
        Os = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.emitPageEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onPageEvent && r.onPageEvent(t)
                }
            }, e.prototype.emitEventTriggerRecording = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onEventTriggerRecording && n.onEventTriggerRecording(t, e)
                }
            }, e.prototype.emitCustomJavaScriptErrorEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onCustomJavaScriptErrorEvent && r.onCustomJavaScriptErrorEvent(t)
                }
            }, e.prototype.emitCustomErrorEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onCustomErrorEvent && r.onCustomErrorEvent(t)
                }
            }, e.prototype.emitUserIdentifierEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onUserIdentifierEvent && r.onUserIdentifierEvent(t)
                }
            }, e
        }(Wo),
        Ms = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.xhrRequestTracker = e, r.fetchRequestTracker = i, r.excludedDomains = [], r
            }
            return U(e, t), e.prototype.subscribe = function(e, i, r) {
                (null == r ? void 0 : r.detailedEvent) && Object.defineProperty(i, "detailedEvent", {
                    value: r.detailedEvent
                }), t.prototype.subscribe.call(this, e, i)
            }, e.prototype.init = function() {
                var t = this;
                this.xhrRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                })), this.fetchRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                }))
            }, e.prototype.onStartTracking = function() {
                this.xhrRequestTracker.start(), this.fetchRequestTracker.start()
            }, e.prototype.onStopTracking = function() {
                this.xhrRequestTracker.stop(), this.fetchRequestTracker.stop()
            }, e.prototype.apiErrorListener = function(t) {
                if (t.url && t.statusCode) {
                    if (this.isExcludedDomain(t.url)) return;
                    if (t.statusCode >= 400)
                        for (var e in this.subscriptions) {
                            var i = this.subscriptions[e];
                            if (i.hasOwnProperty("detailedEvent")) i(this.buildDetailedApiError(t));
                            else i(this.buildApiError(t))
                        }
                }
            }, e.prototype.buildApiError = function(t) {
                return {
                    errorType: "apiError",
                    url: t.url,
                    method: t.method,
                    requestTime: t.requestTime,
                    responseTime: t.responseTime,
                    statusCode: t.statusCode,
                    library: t.library
                }
            }, e.prototype.buildDetailedApiError = function(t) {
                var e = this.buildApiError(t);
                return Object.keys(t.standardRequestHeaders).length > 0 && (e.standardRequestHeaders = t.standardRequestHeaders), Object.keys(t.standardResponseHeaders).length > 0 && (e.standardResponseHeaders = t.standardResponseHeaders), Object.keys(t.customRequestHeaders).length > 0 && (e.customRequestHeaders = csJSON.stringify(t.customRequestHeaders)), Object.keys(t.customResponseHeaders).length > 0 && (e.customResponseHeaders = csJSON.stringify(t.customResponseHeaders)), t.queryParameters && (e.queryParameters = t.queryParameters), t.requestBody && (e.requestBody = t.requestBody), t.responseBody && (e.responseBody = t.responseBody), e
            }, e.prototype.isExcludedDomain = function(t) {
                return csArray.prototype.some.call(this.excludedDomains, (function(e) {
                    return -1 !== csString.prototype.indexOf.call(t, e)
                }))
            }, e.prototype.excludeDomains = function(t) {
                var e;
                (e = csArray.prototype.push).call.apply(e, W([this.excludedDomains], t, !1))
            }, e.truncatedErrorMessageMarker = "…", e
        }(Lo),
        Ls = function() {
            function t() {
                this.validContentTypes = ["application/json", "application/graphql", "application/xml", "text/plain", "text/csv", "text/html", "text/xml"]
            }
            return t.prototype.isValidUrl = function(t, e) {
                return !!e && csArray.prototype.some.call(e, (function(e) {
                    return -1 !== csString.prototype.indexOf.call(t, e)
                }))
            }, t.prototype.isValidBodyType = function(t) {
                var e = t["content-type"];
                if (!e) return !1;
                var i = csString.prototype.toLocaleLowerCase.call(e);
                return csArray.prototype.some.call(this.validContentTypes, (function(t) {
                    return $(i, t)
                }))
            }, t
        }(),
        Ds = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.monkeyPatcher = e, n.validHeaders = i, n.configuration = r, n.isStarted = !1, n.openInterceptor = null, n.setRequestHeaderInterceptor = null, n.sendInterceptor = null, n.callbacks = [], n.openHook = function(t) {
                    var e = t.context,
                        i = t.args,
                        r = t.callerName;
                    return n.interceptOpen(e, i, r)
                }, n.setRequestHeaderHook = function(t) {
                    var e = t.context,
                        i = t.args;
                    return n.interceptSetRequestHeader(e, i)
                }, n.sendHook = function(t) {
                    var e = t.context,
                        i = t.args;
                    return n.interceptSend(e, i)
                }, n
            }
            return U(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || (this.createInterceptors(), this.openInterceptor && this.openInterceptor.activate(), this.setRequestHeaderInterceptor && this.setRequestHeaderInterceptor.activate(), this.sendInterceptor && this.sendInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.openInterceptor && this.openInterceptor.deactivate(), this.setRequestHeaderInterceptor && this.setRequestHeaderInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.createInterceptors = function() {
                this.openInterceptor || (this.openInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "open",
                    hook: this.openHook,
                    options: {
                        withCallerName: !0
                    }
                })), this.setRequestHeaderInterceptor || (this.setRequestHeaderInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "setRequestHeader",
                    hook: this.setRequestHeaderHook
                })), this.sendInterceptor || (this.sendInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "send",
                    hook: this.sendHook
                }))
            }, e.prototype.interceptOpen = function(t, e, i) {
                var r = this;
                if (e[1] && xt(e[1])) {
                    var n = csString.prototype.split.call(e[1], "?"),
                        o = n[0],
                        s = n[1],
                        a = Tt(o);
                    t.apiCall = {
                        url: a,
                        method: e[0],
                        standardRequestHeaders: {},
                        standardResponseHeaders: {},
                        customRequestHeaders: {},
                        customResponseHeaders: {},
                        requestTime: vt(),
                        responseTime: 0,
                        statusCode: 0,
                        library: i
                    }, s && this.isValidUrl(a, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectQueryParam && (t.apiCall.queryParameters = s), t.addEventListener("readystatechange", (function() {
                        return r.readyStateChangeListener(t)
                    }))
                }
            }, e.prototype.readyStateChangeListener = function(t) {
                var e = this;
                t.apiCall && t.readyState === XMLHttpRequest.DONE && t.status >= 400 && (t.apiCall.responseTime = vt(), t.apiCall.statusCode = t.status, this.isHeaderCollectionActive() && csArray.prototype.forEach.call(null == t.getAllResponseHeaders() ? void 0 : csString.prototype.split.call(t.getAllResponseHeaders(), /[\r\n]+/), (function(i) {
                    var r = csString.prototype.split.call(i, /:(.*)/),
                        n = r[0],
                        o = r[1];
                    e.configuration.apiErrors.collectStandardHeaders && e.validHeaders.isValidStandardHeader(n) ? t.apiCall.standardResponseHeaders[n] = csString.prototype.trim.call(o) : e.validHeaders.isValidCustomHeader(n) && (t.apiCall.customResponseHeaders[n] = csString.prototype.trim.call(o))
                })), this.isValidUrl(t.apiCall.url, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectResponseBody && this.isValidBodyType(t.apiCall.standardResponseHeaders) && (t.apiCall.responseBody = t.responseText), csArray.prototype.forEach.call(this.callbacks, (function(e) {
                    return e(t.apiCall)
                })))
            }, e.prototype.interceptSetRequestHeader = function(t, e) {
                if (t.apiCall && this.isHeaderCollectionActive()) {
                    var i = e[0],
                        r = e[1];
                    this.configuration.apiErrors.collectStandardHeaders && this.validHeaders.isValidStandardHeader(i) && r ? t.apiCall.standardRequestHeaders[i] = r.trim() : this.validHeaders.isValidCustomHeader(i) && r && (t.apiCall.customRequestHeaders[i] = r.trim())
                }
            }, e.prototype.interceptSend = function(t, e) {
                var i = e[0];
                t.apiCall && this.isValidUrl(t.apiCall.url, this.configuration.apiErrors.validUrls) && this.configuration.apiErrors.collectRequestBody && this.isValidBodyType(t.apiCall.standardRequestHeaders) && "string" == typeof i && (t.apiCall.requestBody = i)
            }, e.prototype.isHeaderCollectionActive = function() {
                return this.configuration.apiErrors.collectStandardHeaders || this.configuration.apiErrors.validCustomHeaders && 0 !== this.configuration.apiErrors.validCustomHeaders.length
            }, H([Kt("XhrRequestTracker.interceptOpen")], e.prototype, "interceptOpen", null), H([Kt("XhrRequestTracker.readyStateChangeListener")], e.prototype, "readyStateChangeListener", null), H([Kt("XhrRequestTracker.interceptSetRequestHeader")], e.prototype, "interceptSetRequestHeader", null), H([Kt("XhrRequestTracker.interceptSend")], e.prototype, "interceptSend", null), e
        }(Ls),
        xs = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.monkeyPatcher = e, n.validHeaders = i, n.configuration = r, n.isStarted = !1, n.fetchInterceptor = null, n.callbacks = [], n.hook = function(t) {
                    var e = t.result,
                        i = t.args,
                        r = t.callerName;
                    n.interceptFetch(e, i, r)
                }, n
            }
            return U(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || this.canTrackFetch() && (this.createFetchInterceptor(), this.fetchInterceptor && this.fetchInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.fetchInterceptor && this.fetchInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.canTrackFetch = function() {
                return !!window.fetch && "function" == typeof window.fetch
            }, e.prototype.prepareArgs = function(t, e) {
                var i = W([], e, !0);
                return i[0] && "function" == typeof i[0].clone && (i[0] = e[0].clone()), {
                    context: t,
                    args: i
                }
            }, e.prototype.createFetchInterceptor = function() {
                this.fetchInterceptor || (this.fetchInterceptor = this.monkeyPatcher.createAsyncFunctionInterceptor({
                    target: window,
                    methodName: "fetch",
                    hook: this.hook,
                    hookPrepareArgs: this.prepareArgs,
                    options: {
                        withCallerName: !0
                    }
                }))
            }, e.prototype.collectApiCall = function(t, e, i) {
                return F(this, void 0, void 0, (function() {
                    var r, n, o, s, a, c, u;
                    return G(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return r = csString.prototype.split.call(e.url, "?"), n = r[0], o = r[1], s = Tt(n), a = B(B({}, t), {
                                    url: s,
                                    method: e.method,
                                    responseTime: vt(),
                                    standardRequestHeaders: {},
                                    standardResponseHeaders: {},
                                    customRequestHeaders: {},
                                    customResponseHeaders: {}
                                }), this.configuration.apiErrors.collectStandardHeaders && (a.standardRequestHeaders = this.extractStandardHeaders(e.headers), a.standardResponseHeaders = this.extractStandardHeaders(i.headers)), this.configuration.apiErrors.validCustomHeaders && 0 !== this.configuration.apiErrors.validCustomHeaders.length && (a.customRequestHeaders = this.extractCustomHeaders(e.headers), a.customResponseHeaders = this.extractCustomHeaders(i.headers)), this.isValidUrl(n, this.configuration.apiErrors.validUrls) ? (this.configuration.apiErrors.collectQueryParam && o && (a.queryParameters = o), this.configuration.apiErrors.collectResponseBody && this.isValidBodyType(a.standardResponseHeaders) ? i.bodyUsed ? [3, 2] : (c = a, [4, i.clone().text()]) : [3, 2]) : [3, 4];
                            case 1:
                                c.responseBody = l.sent(), l.label = 2;
                            case 2:
                                return this.configuration.apiErrors.collectRequestBody && this.isValidBodyType(a.standardRequestHeaders) ? (u = a, [4, e.text()]) : [3, 4];
                            case 3:
                                u.requestBody = l.sent(), l.label = 4;
                            case 4:
                                return csArray.prototype.forEach.call(this.callbacks, (function(t) {
                                    return t(a)
                                })), [2]
                        }
                    }))
                }))
            }, e.prototype.interceptFetch = function(t, e, i) {
                return F(this, void 0, void 0, (function() {
                    var r, n, o, s, a, c, u;
                    return G(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (r = e[0], n = e[1], !xt((o = new Request(r, n)).url)) return [2];
                                s = vt(), l.label = 1;
                            case 1:
                                return l.trys.push([1, 3, , 4]), [4, t];
                            case 2:
                                return a = l.sent(), [3, 4];
                            case 3:
                                if (c = l.sent(), this.isNetworkError(c) || this.isAbortedRequestError(c) || this.isTrustTokenOperationError(c)) return [2];
                                throw c;
                            case 4:
                                return u = -1, -1 === a.type.indexOf("opaque") && (u = a.status), u >= 400 ? [4, this.collectApiCall({
                                    statusCode: u,
                                    library: i,
                                    requestTime: s
                                }, o, a)] : [3, 6];
                            case 5:
                                l.sent(), l.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.extractStandardHeaders = function(t) {
                var e = this,
                    i = {};
                return t.forEach((function(t, r) {
                    e.validHeaders.isValidStandardHeader(r) && t && (i[r] = csString.prototype.trim.call(t))
                })), i
            }, e.prototype.extractCustomHeaders = function(t) {
                var e = this,
                    i = {};
                return t.forEach((function(t, r) {
                    e.validHeaders.isValidCustomHeader(r) && t && (i[r] = csString.prototype.trim.call(t))
                })), i
            }, e.prototype.isNetworkError = function(t) {
                return t instanceof TypeError
            }, e.prototype.isAbortedRequestError = function(t) {
                return t instanceof DOMException && "AbortError" === t.name
            }, e.prototype.isTrustTokenOperationError = function(t) {
                return t instanceof DOMException && csArray.prototype.some.call(e.TRUST_TOKEN_OPERATION_ERROR_NAMES, (function(e) {
                    return e === t.name
                }))
            }, e.TRUST_TOKEN_OPERATION_ERROR_NAMES = ["NoModificationAllowedError", "InvalidStateError", "OperationError"], H([Kt("FetchRequestTracker.interceptFetch")], e.prototype, "interceptFetch", null), e
        }(Ls);
    (Is || (Is = {})).transformEvent = function(t, e, i) {
        return function(t, e) {
            return Fr(e) && (e.tgt = "".concat(t).concat(Vs).concat(e.tgt)), void 0 !== e.tgtHM && (e.tgtHM = "".concat(t).concat(Vs).concat(e.tgtHM)),
                function(t) {
                    return void 0 !== t.tgtLk
                }(e) && (e.tgtLk = "".concat(t).concat(Vs).concat(e.tgtLk)), e
        }(e, function(t, e) {
            if (void 0 !== (r = e).x && void 0 !== r.y) {
                var i = t.getBoundingClientRect();
                e.x = Math.round(i.left + e.x + Be.windowOffsetX()), e.y = Math.round(i.top + e.y + Be.windowOffsetY())
            }
            var r;
            return e
        }(t, i))
    }, (_s || (_s = {})).transformCommandsBatch = function(t, e) {
        return {
            iframePath: e.iframePath ? "".concat(t).concat(Vs).concat(e.iframePath) : t,
            commands: e.commands
        }
    }, (Ps || (Ps = {})).transformEmerchandisingMessage = function(t, e) {
        if (0 === e.products.length) return e;
        var i = csArray.prototype.map.call(e.products, (function(e) {
            return B(B({}, e), {
                targetPath: "".concat(t).concat(Vs).concat(e.targetPath)
            })
        }));
        return B(B({}, e), {
            products: i
        })
    };
    var Vs = "|iframe|",
        zs = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.emitIframeEvent = function(t, e, i, r) {
                switch (i) {
                    case _t.ChildLogMessage:
                        this.logMessage(r);
                        break;
                    case _t.AnalysisEvent:
                        if (null === t) {
                            Wt.error("iframeEventEmitter received analysis event with null iframe : iframePath:".concat(e, ", content:").concat(csJSON.stringify(r)));
                            break
                        }
                        var n = Is.transformEvent(t, e, r);
                        this.emitIframeAnalysisEvent(n);
                        break;
                    case _t.JavascriptError:
                        this.emitIframeJavascriptError(r);
                        break;
                    case _t.ApiError:
                        this.emitIframeApiError(r);
                        break;
                    case _t.EmerchandisingMessage:
                        var o = Ps.transformEmerchandisingMessage(e, r);
                        this.emitIframeEmerchandisingMessage(o);
                        break;
                    case _t.Commands:
                        var s = _s.transformCommandsBatch(e, r);
                        this.emitIframeCommands(s);
                        break;
                    case _t.IntegrationCallback:
                        this.emitIframeIntegrationCallback(r);
                        break;
                    default:
                        Wt.error("Parent received unknown data type from iframe : ".concat(csJSON.stringify(r)))
                }
            }, e.prototype.logMessage = function(t) {
                var e = t.message,
                    i = t.errorCode;
                switch (t.level) {
                    case rt.debug:
                        Wt.debug(e, i);
                        break;
                    case rt.warn:
                        Wt.warn(e, i);
                        break;
                    case rt.error:
                        Wt.error(e, i);
                        break;
                    case rt.critical:
                        Wt.critical(e, i)
                }
            }, e.prototype.emitIframeAnalysisEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeAnalysisEvent && r.onIframeAnalysisEvent(t)
                }
            }, e.prototype.emitIframeJavascriptError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeJavascriptError && r.onIframeJavascriptError(t)
                }
            }, e.prototype.emitIframeApiError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeApiError && r.onIframeApiError(t)
                }
            }, e.prototype.emitIframeEmerchandisingMessage = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeEmerchandisingMessage && r.onIframeEmerchandisingMessage(t)
                }
            }, e.prototype.emitIframeCommands = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeCommands && r.onIframeCommands(t)
                }
            }, e.prototype.emitIframeIntegrationCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeIntegrationCallback && r.onIframeIntegrationCallback(t)
                }
            }, e
        }(Wo),
        qs = function(t) {
            function e(e, i) {
                var r = t.call(this, i) || this;
                return r.compressionFactory = e, r.worker = r.tryCreateCompressionWorker(), r.callbacks = {}, r.callbackId = 0, r._compressSync = e(), r
            }
            return U(e, t), e.prototype.isSupported = function() {
                return !0
            }, e.prototype.compress = function(t, e, i) {
                if (this.worker) {
                    var r = this.getNewCallbackId();
                    /*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
                    this.callbacks[r] = i, this.worker.postMessage(["CS_WORKER_SIGNATURE", t, e, r])
                } else {
                    var n = this._compressSync(t, e);
                    n.then ? n.then(i) : i(n)
                }
            }, e.prototype.compressSync = function(t) {
                return this._compressSync("base64", t)
            }, e.prototype.handleWorkerMessage = function(t) {
                var e = t.data,
                    i = e[0],
                    r = e[1],
                    n = e[2];
                "CS_WORKER_SIGNATURE" === i && (this.callbacks[r](n), delete this.callbacks[r])
            }, e.prototype.getNewCallbackId = function() {
                return this.callbackId += 1
            }, e.prototype.tryCreateCompressionWorker = function() {
                try {
                    var t = csArray.prototype.join.call(["\nvar WORKER_SIGNATURE = ".concat(csJSON.stringify("CS_WORKER_SIGNATURE"), ";"), "var compress = (".concat(this.compressionFactory.toString(), ")();"), "(".concat(Us.toString(), ")()\n\n//compression algo")], "\n");
                    return this.createWorker(t)
                } catch (t) {
                    return null
                }
            }, e.prototype.createWorker = function(t) {
                var e = this,
                    i = window.csURL || window.webkitURL,
                    r = window.Blob,
                    n = window.Worker;
                if (!i || !r || !n) return null;
                var o = new r([t], {
                        type: "application/javascript"
                    }),
                    s = new n(i.createObjectURL(o));
                return s.onerror = function(t) {
                    return e.handleWorkerError(t)
                }, s.onmessage = function(t) {
                    return e.handleWorkerMessage(t)
                }, s
            }, e.prototype.handleWorkerError = function(t) {
                var e = "WorkerError: ".concat(t.message ? t.message : "No message");
                return this.onError(e)
            }, H([Kt("Worker message handler")], e.prototype, "handleWorkerMessage", null), e
        }(Te),
        Us = function() {
            self.addEventListener("message", (function(t) {
                var e = t.data,
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3];
                if ("CS_WORKER_SIGNATURE" === i) {
                    var s = compress(r, n);
                    s.then ? s.then((function(t) {
                        return self.postMessage(["CS_WORKER_SIGNATURE", o, t])
                    })) : self.postMessage(["CS_WORKER_SIGNATURE", o, s])
                }
            }))
        };

    function Bs() {
        function t(t) {
            for (var e = t.length; --e >= 0;) t[e] = 0
        }
        var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            i = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            n = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            o = new Array(576);
        t(o);
        var s = new Array(60);
        t(s);
        var a = new Array(512);
        t(a);
        var c = new Array(256);
        t(c);
        var u = new Array(29);
        t(u);
        var l, h, p, d = new Array(30);

        function f(t, e, i, r, n) {
            this.static_tree = t, this.extra_bits = e, this.extra_base = i, this.elems = r, this.max_length = n, this.has_stree = t && t.length
        }

        function y(t, e) {
            this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
        }
        t(d);
        var v = function(t) {
                return t < 256 ? a[t] : a[256 + (t >>> 7)]
            },
            g = function(t, e) {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            },
            m = function(t, e, i) {
                t.bi_valid > 16 - i ? (t.bi_buf |= e << t.bi_valid & 65535, g(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += i - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += i)
            },
            S = function(t, e, i) {
                m(t, i[2 * e], i[2 * e + 1])
            },
            E = function(t, e) {
                var i = 0;
                do {
                    i |= 1 & t, t >>>= 1, i <<= 1
                } while (--e > 0);
                return i >>> 1
            },
            b = function(t, e, i) {
                var r, n, o = new Array(16),
                    s = 0;
                for (r = 1; r <= 15; r++) o[r] = s = s + i[r - 1] << 1;
                for (n = 0; n <= e; n++) {
                    var a = t[2 * n + 1];
                    0 !== a && (t[2 * n] = E(o[a]++, a))
                }
            },
            C = function(t) {
                var e;
                for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            },
            w = function(t) {
                t.bi_valid > 8 ? g(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            },
            T = function(t, e, i, r) {
                var n = 2 * e,
                    o = 2 * i;
                return t[n] < t[o] || t[n] === t[o] && r[e] <= r[i]
            },
            R = function(t, e, i) {
                for (var r = t.heap[i], n = i << 1; n <= t.heap_len && (n < t.heap_len && T(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !T(e, r, t.heap[n], t.depth));) t.heap[i] = t.heap[n], i = n, n <<= 1;
                t.heap[i] = r
            },
            A = function(t, r, n) {
                var o, s, a, l, h = 0;
                if (0 !== t.last_lit)
                    do {
                        o = t.pending_buf[t.d_buf + 2 * h] << 8 | t.pending_buf[t.d_buf + 2 * h + 1], s = t.pending_buf[t.l_buf + h], h++, 0 === o ? S(t, s, r) : (a = c[s], S(t, a + 256 + 1, r), 0 !== (l = e[a]) && (s -= u[a], m(t, s, l)), o--, a = v(o), S(t, a, n), 0 !== (l = i[a]) && (o -= d[a], m(t, o, l)))
                    } while (h < t.last_lit);
                S(t, 256, r)
            },
            k = function(t, e) {
                var i, r, n, o = e.dyn_tree,
                    s = e.stat_desc.static_tree,
                    a = e.stat_desc.has_stree,
                    c = e.stat_desc.elems,
                    u = -1;
                for (t.heap_len = 0, t.heap_max = 573, i = 0; i < c; i++) 0 !== o[2 * i] ? (t.heap[++t.heap_len] = u = i, t.depth[i] = 0) : o[2 * i + 1] = 0;
                for (; t.heap_len < 2;) o[2 * (n = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1, t.depth[n] = 0, t.opt_len--, a && (t.static_len -= s[2 * n + 1]);
                for (e.max_code = u, i = t.heap_len >> 1; i >= 1; i--) R(t, o, i);
                n = c;
                do {
                    i = t.heap[1], t.heap[1] = t.heap[t.heap_len--], R(t, o, 1), r = t.heap[1], t.heap[--t.heap_max] = i, t.heap[--t.heap_max] = r, o[2 * n] = o[2 * i] + o[2 * r], t.depth[n] = (t.depth[i] >= t.depth[r] ? t.depth[i] : t.depth[r]) + 1, o[2 * i + 1] = o[2 * r + 1] = n, t.heap[1] = n++, R(t, o, 1)
                } while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1],
                    function(t, e) {
                        var i, r, n, o, s, a, c = e.dyn_tree,
                            u = e.max_code,
                            l = e.stat_desc.static_tree,
                            h = e.stat_desc.has_stree,
                            p = e.stat_desc.extra_bits,
                            d = e.stat_desc.extra_base,
                            f = e.stat_desc.max_length,
                            y = 0;
                        for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
                        for (c[2 * t.heap[t.heap_max] + 1] = 0, i = t.heap_max + 1; i < 573; i++)(o = c[2 * c[2 * (r = t.heap[i]) + 1] + 1] + 1) > f && (o = f, y++), c[2 * r + 1] = o, r > u || (t.bl_count[o]++, s = 0, r >= d && (s = p[r - d]), a = c[2 * r], t.opt_len += a * (o + s), h && (t.static_len += a * (l[2 * r + 1] + s)));
                        if (0 !== y) {
                            do {
                                for (o = f - 1; 0 === t.bl_count[o];) o--;
                                t.bl_count[o]--, t.bl_count[o + 1] += 2, t.bl_count[f]--, y -= 2
                            } while (y > 0);
                            for (o = f; 0 !== o; o--)
                                for (r = t.bl_count[o]; 0 !== r;)(n = t.heap[--i]) > u || (c[2 * n + 1] !== o && (t.opt_len += (o - c[2 * n + 1]) * c[2 * n], c[2 * n + 1] = o), r--)
                        }
                    }(t, e), b(o, u, t.bl_count)
            },
            I = function(t, e, i) {
                var r, n, o = -1,
                    s = e[1],
                    a = 0,
                    c = 7,
                    u = 4;
                for (0 === s && (c = 138, u = 3), e[2 * (i + 1) + 1] = 65535, r = 0; r <= i; r++) n = s, s = e[2 * (r + 1) + 1], ++a < c && n === s || (a < u ? t.bl_tree[2 * n] += a : 0 !== n ? (n !== o && t.bl_tree[2 * n]++, t.bl_tree[32]++) : a <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, a = 0, o = n, 0 === s ? (c = 138, u = 3) : n === s ? (c = 6, u = 3) : (c = 7, u = 4))
            },
            _ = function(t, e, i) {
                var r, n, o = -1,
                    s = e[1],
                    a = 0,
                    c = 7,
                    u = 4;
                for (0 === s && (c = 138, u = 3), r = 0; r <= i; r++)
                    if (n = s, s = e[2 * (r + 1) + 1], !(++a < c && n === s)) {
                        if (a < u)
                            do {
                                S(t, n, t.bl_tree)
                            } while (0 != --a);
                        else 0 !== n ? (n !== o && (S(t, n, t.bl_tree), a--), S(t, 16, t.bl_tree), m(t, a - 3, 2)) : a <= 10 ? (S(t, 17, t.bl_tree), m(t, a - 3, 3)) : (S(t, 18, t.bl_tree), m(t, a - 11, 7));
                        a = 0, o = n, 0 === s ? (c = 138, u = 3) : n === s ? (c = 6, u = 3) : (c = 7, u = 4)
                    }
            },
            P = !1,
            N = function(t, e, i, r) {
                m(t, 0 + (r ? 1 : 0), 3),
                    function(t, e, i, r) {
                        w(t), r && (g(t, i), g(t, ~i)), t.pending_buf.set(t.window.subarray(e, e + i), t.pending), t.pending += i
                    }(t, e, i, !0)
            },
            O = {
                _tr_init: function(t) {
                    P || (! function() {
                        var t, n, y, v, g, m = new Array(16);
                        for (y = 0, v = 0; v < 28; v++)
                            for (u[v] = y, t = 0; t < 1 << e[v]; t++) c[y++] = v;
                        for (c[y - 1] = v, g = 0, v = 0; v < 16; v++)
                            for (d[v] = g, t = 0; t < 1 << i[v]; t++) a[g++] = v;
                        for (g >>= 7; v < 30; v++)
                            for (d[v] = g << 7, t = 0; t < 1 << i[v] - 7; t++) a[256 + g++] = v;
                        for (n = 0; n <= 15; n++) m[n] = 0;
                        for (t = 0; t <= 143;) o[2 * t + 1] = 8, t++, m[8]++;
                        for (; t <= 255;) o[2 * t + 1] = 9, t++, m[9]++;
                        for (; t <= 279;) o[2 * t + 1] = 7, t++, m[7]++;
                        for (; t <= 287;) o[2 * t + 1] = 8, t++, m[8]++;
                        for (b(o, 287, m), t = 0; t < 30; t++) s[2 * t + 1] = 5, s[2 * t] = E(t, 5);
                        l = new f(o, e, 257, 286, 15), h = new f(s, i, 0, 30, 15), p = new f(new Array(0), r, 0, 19, 7)
                    }(), P = !0), t.l_desc = new y(t.dyn_ltree, l), t.d_desc = new y(t.dyn_dtree, h), t.bl_desc = new y(t.bl_tree, p), t.bi_buf = 0, t.bi_valid = 0, C(t)
                },
                _tr_stored_block: N,
                _tr_flush_block: function(t, e, i, r) {
                    var a, c, u = 0;
                    t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
                        var e, i = 4093624447;
                        for (e = 0; e <= 31; e++, i >>>= 1)
                            if (1 & i && 0 !== t.dyn_ltree[2 * e]) return 0;
                        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                        for (e = 32; e < 256; e++)
                            if (0 !== t.dyn_ltree[2 * e]) return 1;
                        return 0
                    }(t)), k(t, t.l_desc), k(t, t.d_desc), u = function(t) {
                        var e;
                        for (I(t, t.dyn_ltree, t.l_desc.max_code), I(t, t.dyn_dtree, t.d_desc.max_code), k(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * n[e] + 1]; e--);
                        return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                    }(t), a = t.opt_len + 3 + 7 >>> 3, (c = t.static_len + 3 + 7 >>> 3) <= a && (a = c)) : a = c = i + 5, i + 4 <= a && -1 !== e ? N(t, e, i, r) : 4 === t.strategy || c === a ? (m(t, 2 + (r ? 1 : 0), 3), A(t, o, s)) : (m(t, 4 + (r ? 1 : 0), 3), function(t, e, i, r) {
                        var o;
                        for (m(t, e - 257, 5), m(t, i - 1, 5), m(t, r - 4, 4), o = 0; o < r; o++) m(t, t.bl_tree[2 * n[o] + 1], 3);
                        _(t, t.dyn_ltree, e - 1), _(t, t.dyn_dtree, i - 1)
                    }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, u + 1), A(t, t.dyn_ltree, t.dyn_dtree)), C(t), r && w(t)
                },
                _tr_tally: function(t, e, i) {
                    return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & i, t.last_lit++, 0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++, e--, t.dyn_ltree[2 * (c[i] + 256 + 1)]++, t.dyn_dtree[2 * v(e)]++), t.last_lit === t.lit_bufsize - 1
                },
                _tr_align: function(t) {
                    m(t, 2, 3), S(t, 256, o),
                        function(t) {
                            16 === t.bi_valid ? (g(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                        }(t)
                }
            },
            M = function(t, e, i, r) {
                for (var n = 65535 & t | 0, o = t >>> 16 & 65535 | 0, s = 0; 0 !== i;) {
                    i -= s = i > 2e3 ? 2e3 : i;
                    do {
                        o = o + (n = n + e[r++] | 0) | 0
                    } while (--s);
                    n %= 65521, o %= 65521
                }
                return n | o << 16 | 0
            },
            L = new Uint32Array(function() {
                for (var t, e = [], i = 0; i < 256; i++) {
                    t = i;
                    for (var r = 0; r < 8; r++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                    e[i] = t
                }
                return e
            }()),
            D = function(t, e, i, r) {
                var n = L,
                    o = r + i;
                t ^= -1;
                for (var s = r; s < o; s++) t = t >>> 8 ^ n[255 & (t ^ e[s])];
                return -1 ^ t
            },
            x = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            },
            V = 0,
            z = 2,
            q = 3,
            U = 4,
            B = 0,
            H = 1,
            F = -1,
            G = 0,
            j = 8,
            W = O._tr_init,
            K = O._tr_stored_block,
            Y = O._tr_flush_block,
            X = O._tr_tally,
            Q = O._tr_align,
            J = V,
            Z = 1,
            $ = q,
            tt = U,
            et = 5,
            it = B,
            rt = H,
            nt = -2,
            ot = -3,
            st = -5,
            at = F,
            ct = 1,
            ut = 2,
            lt = 3,
            ht = 4,
            pt = G,
            dt = 2,
            ft = j,
            yt = function(t, e) {
                return t.msg = x[e], e
            },
            vt = function(t) {
                return (t << 1) - (t > 4 ? 9 : 0)
            },
            gt = function(t) {
                for (var e = t.length; --e >= 0;) t[e] = 0
            },
            mt = function(t, e, i) {
                return (e << t.hash_shift ^ i) & t.hash_mask
            },
            St = function(t) {
                var e = t.state,
                    i = e.pending;
                i > t.avail_out && (i = t.avail_out), 0 !== i && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out), t.next_out += i, e.pending_out += i, t.total_out += i, t.avail_out -= i, e.pending -= i, 0 === e.pending && (e.pending_out = 0))
            },
            Et = function(t, e) {
                Y(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, St(t.strm)
            },
            bt = function(t, e) {
                t.pending_buf[t.pending++] = e
            },
            Ct = function(t, e) {
                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
            },
            wt = function(t, e) {
                var i, r, n = t.max_chain_length,
                    o = t.strstart,
                    s = t.prev_length,
                    a = t.nice_match,
                    c = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0,
                    u = t.window,
                    l = t.w_mask,
                    h = t.prev,
                    p = t.strstart + 258,
                    d = u[o + s - 1],
                    f = u[o + s];
                t.prev_length >= t.good_match && (n >>= 2), a > t.lookahead && (a = t.lookahead);
                do {
                    if (u[(i = e) + s] === f && u[i + s - 1] === d && u[i] === u[o] && u[++i] === u[o + 1]) {
                        o += 2, i++;
                        do {} while (u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && u[++o] === u[++i] && o < p);
                        if (r = 258 - (p - o), o = p - 258, r > s) {
                            if (t.match_start = e, s = r, r >= a) break;
                            d = u[o + s - 1], f = u[o + s]
                        }
                    }
                } while ((e = h[e & l]) > c && 0 != --n);
                return s <= t.lookahead ? s : t.lookahead
            },
            Tt = function(t) {
                var e, i, r, n, o, s, a, c, u, l, h = t.w_size;
                do {
                    if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= h + (h - 262)) {
                        t.window.set(t.window.subarray(h, h + h), 0), t.match_start -= h, t.strstart -= h, t.block_start -= h, e = i = t.hash_size;
                        do {
                            r = t.head[--e], t.head[e] = r >= h ? r - h : 0
                        } while (--i);
                        e = i = h;
                        do {
                            r = t.prev[--e], t.prev[e] = r >= h ? r - h : 0
                        } while (--i);
                        n += h
                    }
                    if (0 === t.strm.avail_in) break;
                    if (s = t.strm, a = t.window, c = t.strstart + t.lookahead, u = n, l = void 0, (l = s.avail_in) > u && (l = u), i = 0 === l ? 0 : (s.avail_in -= l, a.set(s.input.subarray(s.next_in, s.next_in + l), c), 1 === s.state.wrap ? s.adler = M(s.adler, a, l, c) : 2 === s.state.wrap && (s.adler = D(s.adler, a, l, c)), s.next_in += l, s.total_in += l, l), t.lookahead += i, t.lookahead + t.insert >= 3)
                        for (o = t.strstart - t.insert, t.ins_h = t.window[o], t.ins_h = mt(t, t.ins_h, t.window[o + 1]); t.insert && (t.ins_h = mt(t, t.ins_h, t.window[o + 3 - 1]), t.prev[o & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = o, o++, t.insert--, !(t.lookahead + t.insert < 3)););
                } while (t.lookahead < 262 && 0 !== t.strm.avail_in)
            },
            Rt = function(t, e) {
                for (var i, r;;) {
                    if (t.lookahead < 262) {
                        if (Tt(t), t.lookahead < 262 && e === J) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (i = 0, t.lookahead >= 3 && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== i && t.strstart - i <= t.w_size - 262 && (t.match_length = wt(t, i)), t.match_length >= 3)
                        if (r = X(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                            t.match_length--;
                            do {
                                t.strstart++, t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                            } while (0 != --t.match_length);
                            t.strstart++
                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 1]);
                    else r = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                    if (r && (Et(t, !1), 0 === t.strm.avail_out)) return 1
                }
                return t.insert = t.strstart < 2 ? t.strstart : 2, e === tt ? (Et(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Et(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            },
            At = function(t, e) {
                for (var i, r, n;;) {
                    if (t.lookahead < 262) {
                        if (Tt(t), t.lookahead < 262 && e === J) return 1;
                        if (0 === t.lookahead) break
                    }
                    if (i = 0, t.lookahead >= 3 && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - 262 && (t.match_length = wt(t, i), t.match_length <= 5 && (t.strategy === ct || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                        n = t.strstart + t.lookahead - 3, r = X(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                        do {
                            ++t.strstart <= n && (t.ins_h = mt(t, t.ins_h, t.window[t.strstart + 3 - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                        } while (0 != --t.prev_length);
                        if (t.match_available = 0, t.match_length = 2, t.strstart++, r && (Et(t, !1), 0 === t.strm.avail_out)) return 1
                    } else if (t.match_available) {
                        if ((r = X(t, 0, t.window[t.strstart - 1])) && Et(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
                    } else t.match_available = 1, t.strstart++, t.lookahead--
                }
                return t.match_available && (r = X(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === tt ? (Et(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Et(t, !1), 0 === t.strm.avail_out) ? 1 : 2
            };

        function kt(t, e, i, r, n) {
            this.good_length = t, this.max_lazy = e, this.nice_length = i, this.max_chain = r, this.func = n
        }
        var It = [new kt(0, 0, 0, 0, (function(t, e) {
            var i = 65535;
            for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5);;) {
                if (t.lookahead <= 1) {
                    if (Tt(t), 0 === t.lookahead && e === J) return 1;
                    if (0 === t.lookahead) break
                }
                t.strstart += t.lookahead, t.lookahead = 0;
                var r = t.block_start + i;
                if ((0 === t.strstart || t.strstart >= r) && (t.lookahead = t.strstart - r, t.strstart = r, Et(t, !1), 0 === t.strm.avail_out)) return 1;
                if (t.strstart - t.block_start >= t.w_size - 262 && (Et(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = 0, e === tt ? (Et(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (Et(t, !1), t.strm.avail_out), 1)
        })), new kt(4, 4, 8, 4, Rt), new kt(4, 5, 16, 8, Rt), new kt(4, 6, 32, 32, Rt), new kt(4, 4, 16, 16, At), new kt(8, 16, 32, 32, At), new kt(8, 16, 128, 128, At), new kt(8, 32, 128, 256, At), new kt(32, 128, 258, 1024, At), new kt(32, 258, 258, 4096, At)];

        function _t() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ft, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), gt(this.dyn_ltree), gt(this.dyn_dtree), gt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), gt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), gt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        var Pt = function(t) {
                if (!t || !t.state) return yt(t, nt);
                t.total_in = t.total_out = 0, t.data_type = dt;
                var e = t.state;
                return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? 42 : 113, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = J, W(e), it
            },
            Nt = function(t) {
                var e = Pt(t);
                return e === it && function(t) {
                    t.window_size = 2 * t.w_size, gt(t.head), t.max_lazy_match = It[t.level].max_lazy, t.good_match = It[t.level].good_length, t.nice_match = It[t.level].nice_length, t.max_chain_length = It[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0
                }(t.state), e
            },
            Ot = function(t, e, i, r, n, o) {
                if (!t) return nt;
                var s = 1;
                if (e === at && (e = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), n < 1 || n > 9 || i !== ft || r < 8 || r > 15 || e < 0 || e > 9 || o < 0 || o > ht) return yt(t, nt);
                8 === r && (r = 9);
                var a = new _t;
                return t.state = a, a.strm = t, a.wrap = s, a.gzhead = null, a.w_bits = r, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = n + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + 3 - 1) / 3), a.window = new Uint8Array(2 * a.w_size), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << n + 6, a.pending_buf_size = 4 * a.lit_bufsize, a.pending_buf = new Uint8Array(a.pending_buf_size), a.d_buf = 1 * a.lit_bufsize, a.l_buf = 3 * a.lit_bufsize, a.level = e, a.strategy = o, a.method = i, Nt(t)
            },
            Mt = {
                deflateInit: function(t, e) {
                    return Ot(t, e, ft, 15, 8, pt)
                },
                deflateInit2: Ot,
                deflateReset: Nt,
                deflateResetKeep: Pt,
                deflateSetHeader: function(t, e) {
                    return t && t.state ? 2 !== t.state.wrap ? nt : (t.state.gzhead = e, it) : nt
                },
                deflate: function(t, e) {
                    var i, r;
                    if (!t || !t.state || e > et || e < 0) return t ? yt(t, nt) : nt;
                    var n = t.state;
                    if (!t.output || !t.input && 0 !== t.avail_in || 666 === n.status && e !== tt) return yt(t, 0 === t.avail_out ? st : nt);
                    n.strm = t;
                    var o = n.last_flush;
                    if (n.last_flush = e, 42 === n.status)
                        if (2 === n.wrap) t.adler = 0, bt(n, 31), bt(n, 139), bt(n, 8), n.gzhead ? (bt(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), bt(n, 255 & n.gzhead.time), bt(n, n.gzhead.time >> 8 & 255), bt(n, n.gzhead.time >> 16 & 255), bt(n, n.gzhead.time >> 24 & 255), bt(n, 9 === n.level ? 2 : n.strategy >= ut || n.level < 2 ? 4 : 0), bt(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (bt(n, 255 & n.gzhead.extra.length), bt(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (t.adler = D(t.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (bt(n, 0), bt(n, 0), bt(n, 0), bt(n, 0), bt(n, 0), bt(n, 9 === n.level ? 2 : n.strategy >= ut || n.level < 2 ? 4 : 0), bt(n, 3), n.status = 113);
                        else {
                            var s = ft + (n.w_bits - 8 << 4) << 8;
                            s |= (n.strategy >= ut || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6, 0 !== n.strstart && (s |= 32), s += 31 - s % 31, n.status = 113, Ct(n, s), 0 !== n.strstart && (Ct(n, t.adler >>> 16), Ct(n, 65535 & t.adler)), t.adler = 1
                        }
                    if (69 === n.status)
                        if (n.gzhead.extra) {
                            for (i = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), St(t), i = n.pending, n.pending !== n.pending_buf_size));) bt(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                            n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73)
                        } else n.status = 73;
                    if (73 === n.status)
                        if (n.gzhead.name) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), St(t), i = n.pending, n.pending === n.pending_buf_size)) {
                                    r = 1;
                                    break
                                }
                                r = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, bt(n, r)
                            } while (0 !== r);
                            n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), 0 === r && (n.gzindex = 0, n.status = 91)
                        } else n.status = 91;
                    if (91 === n.status)
                        if (n.gzhead.comment) {
                            i = n.pending;
                            do {
                                if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), St(t), i = n.pending, n.pending === n.pending_buf_size)) {
                                    r = 1;
                                    break
                                }
                                r = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, bt(n, r)
                            } while (0 !== r);
                            n.gzhead.hcrc && n.pending > i && (t.adler = D(t.adler, n.pending_buf, n.pending - i, i)), 0 === r && (n.status = 103)
                        } else n.status = 103;
                    if (103 === n.status && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && St(t), n.pending + 2 <= n.pending_buf_size && (bt(n, 255 & t.adler), bt(n, t.adler >> 8 & 255), t.adler = 0, n.status = 113)) : n.status = 113), 0 !== n.pending) {
                        if (St(t), 0 === t.avail_out) return n.last_flush = -1, it
                    } else if (0 === t.avail_in && vt(e) <= vt(o) && e !== tt) return yt(t, st);
                    if (666 === n.status && 0 !== t.avail_in) return yt(t, st);
                    if (0 !== t.avail_in || 0 !== n.lookahead || e !== J && 666 !== n.status) {
                        var a = n.strategy === ut ? function(t, e) {
                            for (var i;;) {
                                if (0 === t.lookahead && (Tt(t), 0 === t.lookahead)) {
                                    if (e === J) return 1;
                                    break
                                }
                                if (t.match_length = 0, i = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (Et(t, !1), 0 === t.strm.avail_out)) return 1
                            }
                            return t.insert = 0, e === tt ? (Et(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Et(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                        }(n, e) : n.strategy === lt ? function(t, e) {
                            for (var i, r, n, o, s = t.window;;) {
                                if (t.lookahead <= 258) {
                                    if (Tt(t), t.lookahead <= 258 && e === J) return 1;
                                    if (0 === t.lookahead) break
                                }
                                if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (r = s[n = t.strstart - 1]) === s[++n] && r === s[++n] && r === s[++n]) {
                                    o = t.strstart + 258;
                                    do {} while (r === s[++n] && r === s[++n] && r === s[++n] && r === s[++n] && r === s[++n] && r === s[++n] && r === s[++n] && r === s[++n] && n < o);
                                    t.match_length = 258 - (o - n), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                }
                                if (t.match_length >= 3 ? (i = X(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = X(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (Et(t, !1), 0 === t.strm.avail_out)) return 1
                            }
                            return t.insert = 0, e === tt ? (Et(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (Et(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                        }(n, e) : It[n.level].func(n, e);
                        if (3 !== a && 4 !== a || (n.status = 666), 1 === a || 3 === a) return 0 === t.avail_out && (n.last_flush = -1), it;
                        if (2 === a && (e === Z ? Q(n) : e !== et && (K(n, 0, 0, !1), e === $ && (gt(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), St(t), 0 === t.avail_out)) return n.last_flush = -1, it
                    }
                    return e !== tt ? it : n.wrap <= 0 ? rt : (2 === n.wrap ? (bt(n, 255 & t.adler), bt(n, t.adler >> 8 & 255), bt(n, t.adler >> 16 & 255), bt(n, t.adler >> 24 & 255), bt(n, 255 & t.total_in), bt(n, t.total_in >> 8 & 255), bt(n, t.total_in >> 16 & 255), bt(n, t.total_in >> 24 & 255)) : (Ct(n, t.adler >>> 16), Ct(n, 65535 & t.adler)), St(t), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? it : rt)
                },
                deflateEnd: function(t) {
                    if (!t || !t.state) return nt;
                    var e = t.state.status;
                    return 42 !== e && 69 !== e && 73 !== e && 91 !== e && 103 !== e && 113 !== e && 666 !== e ? yt(t, nt) : (t.state = null, 113 === e ? yt(t, ot) : it)
                },
                deflateSetDictionary: function(t, e) {
                    var i = e.length;
                    if (!t || !t.state) return nt;
                    var r = t.state,
                        n = r.wrap;
                    if (2 === n || 1 === n && 42 !== r.status || r.lookahead) return nt;
                    if (1 === n && (t.adler = M(t.adler, e, i, 0)), r.wrap = 0, i >= r.w_size) {
                        0 === n && (gt(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
                        var o = new Uint8Array(r.w_size);
                        o.set(e.subarray(i - r.w_size, i), 0), e = o, i = r.w_size
                    }
                    var s = t.avail_in,
                        a = t.next_in,
                        c = t.input;
                    for (t.avail_in = i, t.next_in = 0, t.input = e, Tt(r); r.lookahead >= 3;) {
                        var u = r.strstart,
                            l = r.lookahead - 2;
                        do {
                            r.ins_h = mt(r, r.ins_h, r.window[u + 3 - 1]), r.prev[u & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = u, u++
                        } while (--l);
                        r.strstart = u, r.lookahead = 2, Tt(r)
                    }
                    return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, t.next_in = a, t.input = c, t.avail_in = s, r.wrap = n, it
                },
                deflateInfo: "pako deflate (from Nodeca project)"
            },
            Lt = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            Dt = function(t) {
                for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                    var i = e.shift();
                    if (i) {
                        if ("object" != typeof i) throw new TypeError(i + "must be non-object");
                        for (var r in i) Lt(i, r) && (t[r] = i[r])
                    }
                }
                return t
            },
            xt = function(t) {
                for (var e = 0, i = 0, r = t.length; i < r; i++) e += t[i].length;
                var n = new Uint8Array(e),
                    o = (i = 0, 0);
                for (r = t.length; i < r; i++) {
                    var s = t[i];
                    n.set(s, o), o += s.length
                }
                return n
            },
            Vt = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (t) {
            Vt = !1
        }
        for (var zt = new Uint8Array(256), qt = 0; qt < 256; qt++) zt[qt] = qt >= 252 ? 6 : qt >= 248 ? 5 : qt >= 240 ? 4 : qt >= 224 ? 3 : qt >= 192 ? 2 : 1;
        zt[254] = zt[254] = 1;
        var Ut = function(t, e) {
                if (void 0 === e && (e = t.length), e < 65534 && t.subarray && Vt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
                for (var i = "", r = 0; r < e; r++) i += String.fromCharCode(t[r]);
                return i
            },
            Bt = function(t) {
                if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
                var e, i, r, n, o, s = t.length,
                    a = 0;
                for (n = 0; n < s; n++) 55296 == (64512 & (i = t.charCodeAt(n))) && n + 1 < s && 56320 == (64512 & (r = t.charCodeAt(n + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), n++), a += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
                for (e = new Uint8Array(a), o = 0, n = 0; o < a; n++) 55296 == (64512 & (i = t.charCodeAt(n))) && n + 1 < s && 56320 == (64512 & (r = t.charCodeAt(n + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), n++), i < 128 ? e[o++] = i : i < 2048 ? (e[o++] = 192 | i >>> 6, e[o++] = 128 | 63 & i) : i < 65536 ? (e[o++] = 224 | i >>> 12, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i) : (e[o++] = 240 | i >>> 18, e[o++] = 128 | i >>> 12 & 63, e[o++] = 128 | i >>> 6 & 63, e[o++] = 128 | 63 & i);
                return e
            };
        var Ht = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            },
            Ft = Object.prototype.toString,
            Gt = V,
            jt = z,
            Wt = q,
            Kt = U,
            Yt = B,
            Xt = H,
            Qt = F,
            Jt = G,
            Zt = j;

        function $t(t) {
            this.options = Dt({
                level: Qt,
                method: Zt,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: Jt
            }, t || {});
            var e = this.options;
            e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Ht, this.strm.avail_out = 0;
            var i = Mt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
            if (i !== Yt) throw new Error(x[i]);
            if (e.header && Mt.deflateSetHeader(this.strm, e.header), e.dictionary) {
                var r = void 0;
                if (r = "string" == typeof e.dictionary ? Bt(e.dictionary) : "[object ArrayBuffer]" === Ft.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (i = Mt.deflateSetDictionary(this.strm, r)) !== Yt) throw new Error(x[i]);
                this._dict_set = !0
            }
        }

        function te(t, e) {
            return (e = e || {}).gzip = !0,
                function(t, e) {
                    var i = new $t(e = e || {});
                    if (i.push(t, !0), i.err) throw i.msg || x[i.err];
                    return i.result
                }(t, e)
        }
        return $t.prototype.push = function(t, e) {
                var i, r, n = this.strm,
                    o = this.options.chunkSize;
                if (this.ended) return !1;
                for (r = e === ~~e ? e : !0 === e ? Kt : Gt, "string" == typeof t ? n.input = Bt(t) : "[object ArrayBuffer]" === Ft.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;)
                    if (0 === n.avail_out && (n.output = new Uint8Array(o), n.next_out = 0, n.avail_out = o), (r === jt || r === Wt) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                    else {
                        if ((i = Mt.deflate(n, r)) === Xt) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), i = Mt.deflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === Yt;
                        if (0 !== n.avail_out) {
                            if (r > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                            else if (0 === n.avail_in) break
                        } else this.onData(n.output)
                    }
                return !0
            }, $t.prototype.onData = function(t) {
                this.chunks.push(t)
            }, $t.prototype.onEnd = function(t) {
                t === Yt && (this.result = xt(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            },
            function(t, e) {
                var i = te(e);
                return "base64" === t ? btoa(Ut(i)) : i
            }
    }
    var Hs = function(t) {
            function e(e) {
                var i = t.call(this, Bs, e) || this;
                return i.algorithm = fe.GZIP, i
            }
            return U(e, t), e
        }(qs),
        Fs = function(t) {
            function e(e) {
                var i = t.call(this, Gs, e) || this;
                return i.syncCompressor = Bs(), i.algorithm = fe.GZIP, i
            }
            return U(e, t), e.prototype.compressSync = function(t) {
                return this.syncCompressor("base64", t)
            }, e
        }(qs);

    function Gs() {
        return function(t, e) {
            var i = new Response(e).body.pipeThrough(new CompressionStream("gzip")),
                r = new Response(i).arrayBuffer();
            return "base64" === t ? r.then((function(t) {
                return e = t, new Promise((function(t) {
                    var i = new FileReader;
                    i.onload = function(e) {
                        return t(e.target.result.split(",")[1])
                    }, i.readAsDataURL(new Blob([e]))
                }));
                var e
            })) : r
        }
    }
    var js, Ws, Ks = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e
        }("undefined" != typeof CompressionStream ? Fs : Hs),
        Ys = function() {
            function t() {}
            return t.create = function(t) {
                return this.instance ? this.instance : Pi.isCompressionEnabled() ? this.instance = new Ks(t) : new Re(t)
            }, t
        }(),
        Xs = function() {
            function t(t) {
                this.urlAnonymizer = t, this.urlMaskingPatterns = []
            }
            return t.prototype.addUrlMaskingPattern = function(t) {
                var e = this.urlAnonymizer.getUrlMaskingPattern(t);
                csArray.prototype.push.call(this.urlMaskingPatterns, e)
            }, t.prototype.anonymize = function(t) {
                var e = this.urlAnonymizer.removeQueryString(t.url);
                return B(B({}, t), {
                    url: this.urlAnonymizer.anonymizeUrl(e, this.urlMaskingPatterns)
                })
            }, t
        }(),
        Qs = function() {
            function t(t, e) {
                this.pii = t, this.urlService = e
            }
            return t.prototype.anonymize = function(t) {
                return xt(t.message) && (t.message = this.anonymiseErrorValue(t.message), t.message = this.pii.anonymize(t.message)), xt(t.filename) && (t.filename = this.pii.anonymize(this.urlService.computeOverriddenUrl(t.filename))), xt(t.pageUrl) && (t.pageUrl = this.pii.anonymize(t.pageUrl)), t
            }, t.prototype.anonymiseErrorValue = function(t) {
                return csString.prototype.replace.call(t, /(value\s*=\s*".*"|value\s*=\s*'.*')/, "value='".concat("CS_ANONYMIZED_VALUE", "'"))
            }, t
        }(),
        Js = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.sessionStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.sessionStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.sessionStorage.removeItem(t)
            }, t
        }(),
        Zs = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.localStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.localStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.localStorage.removeItem(t)
            }, t
        }(),
        $s = ["visit", 2],
        ta = ["page", 3],
        ea = ["nextPageOnly", 4],
        ia = function() {
            function t(t, e) {
                this.pii = t, this.storage = e, this.customVariablesPage = {}, this.customVariablesNextPageOnly = {}
            }
            return t.prototype.set = function(t, e, i, r) {
                var n, o;
                if (t > 0 && qt(e) && qt(i) && !Ut(e) && !Ut(i)) {
                    var s = this.pii.anonymize(csString(e)),
                        a = this.pii.anonymize(csString(i));
                    if (n = [s.slice(0, 512), a.slice(0, 255)], o = "" !== i, !zt(r) || csArray.prototype.indexOf.call($s, r) >= 0) {
                        var c = this.getCustomVariablesSession();
                        o ? c[t] = n : delete c[t], this.setCustomVariableSession(c)
                    }(!zt(r) || csArray.prototype.indexOf.call(ta, r) >= 0) && (o ? this.customVariablesPage[t] = n : delete this.customVariablesPage[t]), zt(r) && csArray.prototype.indexOf.call(ea, r) >= 0 && (o ? this.customVariablesNextPageOnly[t] = n : delete this.customVariablesNextPageOnly[t])
                }
            }, t.prototype.getCustomVariablesSession = function() {
                var t = this.storage.get();
                if (!t) return {};
                var e = window.csJSON.parse(t);
                return null !== e && Vt(e) ? e : {}
            }, t.prototype.setCustomVariableSession = function(t) {
                this.storage.set(window.csJSON.stringify(t))
            }, t.prototype.removeCustomVariablesSession = function() {
                this.storage.remove()
            }, t.prototype.getRequestParameters = function() {
                var t = this.getCustomVariablesSession();
                for (var e in this.customVariablesNextPageOnly) this.customVariablesNextPageOnly.hasOwnProperty(e) && (this.customVariablesPage[e] = this.customVariablesNextPageOnly[e]);
                for (var e in this.customVariablesPage) this.customVariablesPage.hasOwnProperty(e) && (t[e] = this.customVariablesPage[e]);
                if (window.csJSON.stringify(t).length <= 2) return {};
                var i = {
                    cvars: this.getValidCustomVars(t)
                };
                return this.customVariablesPage && window.csJSON.stringify(this.customVariablesPage).length > 2 && (i.cvarp = this.getValidCustomVars(this.customVariablesPage)), i
            }, t.prototype.deleteNextPageOnlyCustomVariables = function() {
                if (Object.keys(this.customVariablesNextPageOnly).length > 0)
                    for (var t in this.customVariablesNextPageOnly) this.customVariablesNextPageOnly[t] === this.customVariablesPage[t] && (delete this.customVariablesPage[t], delete this.customVariablesNextPageOnly[t])
            }, t.prototype.getValidCustomVars = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = parseInt(e, 10),
                            r = t[e],
                            n = r[0],
                            o = r[1];
                        a = 1, c = 20, (!(Dt(s = i) && s >= a && s <= c) || n.length > 512 || o.length > 255) && delete t[e]
                    }
                var s, a, c, u = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }(t) ? [] : t;
                return window.csJSON.stringify(u)
            }, t
        }(),
        ra = ["setCustomVariable"],
        na = function() {
            function t(t, e) {
                this.commandsService = t, this.customVariablesService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(ra, (function(e, i, r, n) {
                    t.customVariablesService.set(e, i, r, n)
                }))
            }, t.prototype.onAfterArtificialPageView = function() {
                this.customVariablesService.deleteNextPageOnlyCustomVariables()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.customVariablesService.deleteNextPageOnlyCustomVariables()
            }, t.prototype.onOptout = function() {
                this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        oa = function() {
            function t(t) {
                this.configuration = t, this.validStandardHeadersToLower = ["age", "cache-control", "clear-site-data", "expires", "pragma", "warning", "downlink", "ect", "rtt", "last-modified", "connection", "keep-alive", "accept", "accept-encoding", "accept-language", "expect", "access-control-allow-origin", "access-control-allow-credentials", "access-control-allow-headers", "access-control-allow-methods", "access-control-expose-headers", "access-control-max-age", "access-control-request-headers", "access-control-request-method", "origin", "timing-allow-origin", "content-length", "content-type", "content-encoding", "content-language", "via", "host", "referrer-policy", "user-agent", "allow", "server", "accept-ranges", "range", "if-range", "content-range", "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "sec-fetch-site", "sec-fetch-mode", "sec-fetch-user", "sec-fetch-dest"]
            }
            return t.prototype.isValidStandardHeader = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.validStandardHeadersToLower, csString.prototype.toLowerCase.call(t))
            }, t.prototype.isValidCustomHeader = function(t) {
                if (!this.configuration.apiErrors.validCustomHeaders) return !1;
                var e = csString.prototype.toLowerCase.call(t);
                return csArray.prototype.some.call(this.configuration.apiErrors.validCustomHeaders, (function(t) {
                    return csString.prototype.toLowerCase.call(t) === e
                }))
            }, t
        }(),
        sa = function() {
            function t(t) {
                this.pii = t
            }
            return t.prototype.getUrlMaskingPattern = function(e) {
                for (var i = [], r = 0, n = csString.prototype.split.call(e, "/"); r < n.length; r++) {
                    var o = n[r];
                    $(o, t.ROUTE_PARAMETER_START) ? csArray.prototype.push.call(i, {
                        key: o,
                        value: "CS_ANONYMIZED_".concat(csString.prototype.toUpperCase.call(csString.prototype.slice.call(o, 1)))
                    }) : csArray.prototype.push.call(i, {
                        key: o,
                        value: null
                    })
                }
                return i
            }, t.prototype.anonymizeUrl = function(t, e) {
                var i = this.pii.anonymize(t);
                return e.length > 0 ? this.maskUrl(i, e) : i
            }, t.prototype.removeQueryString = function(t) {
                var e = this.getPathAndQueryString(t),
                    i = e.path;
                return "" !== e.queryString ? "".concat(i, "?") : i
            }, t.prototype.getPathAndQueryString = function(t) {
                var e = csString.prototype.indexOf.call(t, "?"),
                    i = "",
                    r = "";
                return -1 !== e ? (i = csString.prototype.slice.call(t, 0, e), r = csString.prototype.slice.call(t, e, t.length)) : i = t, {
                    path: i,
                    queryString: r
                }
            }, t.prototype.maskUrl = function(t, e) {
                for (var i = this.getPathAndQueryString(t), r = i.path, n = i.queryString, o = csString.prototype.split.call(r, "/"), s = 0, a = e; s < a.length; s++) {
                    var c = a[s],
                        u = this.getAnonymizedUrl(o, c);
                    if (null !== u) return "".concat(u).concat(n)
                }
                return t
            }, t.prototype.getAnonymizedUrl = function(e, i) {
                if (e.length < i.length) return null;
                for (var r = "", n = 0; n < e.length; n += 1)
                    if (n >= i.length) r += "".concat(e[n], "/");
                    else if ($(i[n].key, t.ROUTE_PARAMETER_START)) r += "".concat(i[n].value, "/");
                else {
                    if (e[n] !== i[n].key) return null;
                    r += "".concat(e[n], "/")
                }
                return csString.prototype.slice.call(r, 0, -1)
            }, t.ROUTE_PARAMETER_START = ":", t
        }(),
        aa = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieChecker = e, this.parentLogContext = i
            }
            return t.prototype.init = function() {
                var t, e, i, r = this;
                (null === (t = window.performance) || void 0 === t ? void 0 : t.mark) && window.performance.mark("cs-start-".concat("boot"));
                var n = new Ko,
                    o = new dt,
                    s = new Ns(window.location, o),
                    a = new Yt(this.configuration, s, this.cookieChecker);
                a.init();
                var c = new Js,
                    u = new Zs,
                    l = new rs(window.location, a),
                    h = new Cs(this.configuration, a);
                h.init();
                var p, d = Ys.create(Wt.warn);
                if (this.configuration.useMalkaPipeline) {
                    var f = new Ae(this.configuration.getQuotaServiceUri(), "quota");
                    (p = new Ho(this.configuration, d, f, n, l, s)).init()
                } else p = new Bo(this.configuration, d, l, s);
                var y = new ue(this.configuration, a, h, c),
                    v = new Fo(y, p),
                    g = new oe(this.configuration, a, h, c),
                    m = new qo(this.configuration, g, v);
                this.parentLogContext.setContext(m, v), p.setVisitorService(m);
                var S = new jo(m, v),
                    E = new pe(this.configuration, a, h, c),
                    b = new es(window.location, E),
                    C = new is(b),
                    w = new Go(this.configuration, m, b),
                    T = new zs,
                    R = new ps,
                    A = new ls(R, T),
                    k = new de(this.configuration, a, h, c),
                    I = new ia(o, k),
                    _ = new na(R, I),
                    P = new re(m, v, b, I, this.configuration),
                    N = new ve,
                    O = new ye(N, window.location),
                    M = new us(this.configuration, P, O),
                    L = new ws(this.configuration, N);
                h.setStates(P, L), new Vo(this.configuration, m, b, w, S, M, h, l).compute((function(t) {
                    var e;
                    A.init();
                    var i = new Os,
                        c = new Xo(r.configuration, a, u),
                        l = new $o(r.configuration, c, n),
                        h = new Zo(R, l),
                        p = new ns(r.configuration, a, u),
                        f = new os(n, window.location, p),
                        y = new as(R, f),
                        g = new As(R, r.configuration),
                        S = new Ts(r.configuration, m, v),
                        E = new Rs,
                        b = new _i,
                        w = new oa(r.configuration),
                        k = new Ds(b, w, r.configuration),
                        P = new xs(b, w, r.configuration),
                        N = new Ms(k, P),
                        O = new sa(o),
                        M = new Xs(O),
                        L = new Qs(o, s),
                        D = new bs(E, L, N, M, o, r.configuration, S, T, R, i, s);
                    (D.init(), (null === (e = window.performance) || void 0 === e ? void 0 : e.mark) && window.performance.mark("cs-step2-".concat("boot")), n.addListeners(D), t) ? (n.emitInitTracking(), new xo(S, d, m, v, n, R, A, r.configuration, y, f, h, l, o, O, s, g, i, E, L, N, M, T, I, _).start()) : new ts(n, R, A, y, f, C, h).start()
                })), (null === (e = window.performance) || void 0 === e ? void 0 : e.mark) && (null === (i = window.performance) || void 0 === i ? void 0 : i.measure) && (window.performance.mark("cs-end-".concat("boot")), window.performance.measure("cs-measure-".concat("boot"), "cs-start-".concat("boot"), "cs-end-".concat("boot")))
            }, t
        }();
    ! function(t) {
        var e, i = {
            loadBundle: function(t) {
                var s = t.source,
                    a = t.data;
                if (n(a)) {
                    var l = function() {
                        var e, i, n, o = r("{domain}/tag/tag.bundle.js?v={version}", a);
                        e = o, i = function() {
                            return s.postMessage("csBundleLoaded", t.origin)
                        }, (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, n.onload = i, n.charset = "utf-8", document.head.appendChild(n)
                    };
                    e = a.token, u(i.loadBundle), o(t.origin) ? l() : function(t, e) {
                        var i = function(t) {
                                var e = document.createElement("iframe");
                                return e.src = t, e.id = "content-square-bridge", e.setAttribute("style", "display: none !important; visibility: hidden !important;"), e
                            }(r("{domain}/tag/bridge.html?v={version}#{token}", t)),
                            n = function(t) {
                                t.source === i.contentWindow && "TOKEN_VALID" === t.data && (u(n), i.remove(), e())
                            };
                        c(n), document.head.appendChild(i)
                    }(a, l)
                }
            }
        };

        function r(t, e) {
            return csString.prototype.replace.call(csString.prototype.replace.call(csString.prototype.replace.call(t, "{version}", e.version), "{token}", e.token), "{domain}", e.domain)
        }

        function n(t) {
            return t && "csBundleInjection" === t.type && o(t.domain) && a(t.version) && s(t.token)
        }

        function o(t) {
            return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(t)
        }

        function s(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        }

        function a(t) {
            return /^[a-zA-Z0-9\.]+$/.test(t)
        }

        function c(t) {
            window.addEventListener("message", t, !1)
        }

        function u(t) {
            window.removeEventListener("message", t, !1)
        }
        t.getToken = function() {
            return e
        }, t.isAuthorizedIncomingMessage = n, t.isAuthorizedDomain = o, t.isAuthorizedToken = s, t.isAuthorizedTagVersion = a, t.isActivable = function() {
            var t = window.opener || window.parent;
            return window !== t && window.addEventListener
        }, t.waitForBundleInjection = function() {
            c(i.loadBundle)
        }, t.listen = c, t.removeListener = u
    }(js || (js = {})),
    function(t) {
        var e, i = window.opener || window.parent,
            r = [/^https:\/\/app\.contentsquare\.com$/, /^https:\/\/dev-app\.contentsquare\.com$/, /^https:\/\/staging-app\.contentsquare\.com$/, /^https:\/\/.*\.test\.contentsquare\.com$/],
            n = {
                ping: function(t) {
                    "ping" === t.data && o(t.origin) && (e = t.origin, c(n.ping), a(n.insertMessageScript), s("".concat("utils.js", "?cb=").concat((new csDate).getTime())))
                },
                insertMessageScript: u((function(t) {
                    var e = t.data;
                    "string" == typeof e && "ping" !== e && (c(n.insertMessageScript), s(e))
                }))
            };

        function o(t) {
            return csArray.prototype.some.call(r, (function(e) {
                return e.test(t)
            }))
        }

        function s(t, i) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0;
            var n = csString.prototype.replace.call(e, /^https?:/, "");
            r.src = "".concat(n, "/").concat("tag", "/").concat(t), r.onload = i, r.charset = "utf-8", document.getElementsByTagName("head")[0].appendChild(r)
        }

        function a(t) {
            window.addEventListener("message", t, !1)
        }

        function c(t) {
            window.removeEventListener("message", t, !1)
        }

        function u(t) {
            return function(i) {
                i.origin === e && t(i)
            }
        }
        t.getToken = function() {
            return js.getToken()
        }, t.isActivable = function() {
            return window !== i && window.addEventListener
        }, t.isAuthorizedDomain = o, t.waitForConnection = function() {
            a(n.ping), js.waitForBundleInjection()
        }, t.listen = a, t.removeListener = c, t.secureListener = u, t.post = function(t) {
            e && i.postMessage(t, e)
        }
    }(Ws || (Ws = {}));
    var ca, ua = window.CSFrameCommunication || Ws,
        la = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e.prototype.emitAfterPageViewCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onAfterPageViewCallback && r.onAfterPageViewCallback(t)
                }
            }, e.prototype.emitIntegrationSessionKeyCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIntegrationSessionKeyCallback && r.onIntegrationSessionKeyCallback(t)
                }
            }, e
        }(Wo),
        ha = function() {
            function t(t) {
                this.iframeCommandsSenderService = t
            }
            return t.prototype.init = function() {
                this.iframeCommandsSenderService.register(Pr), this.iframeCommandsSenderService.register(ra), this.iframeCommandsSenderService.register(Gn), this.iframeCommandsSenderService.register(jn), this.iframeCommandsSenderService.register(Fn), this.iframeCommandsSenderService.register(Vr), this.iframeCommandsSenderService.register(zr), this.iframeCommandsSenderService.register(qr), this.iframeCommandsSenderService.register(Ur), this.iframeCommandsSenderService.register($n), this.iframeCommandsSenderService.register(to), this.iframeCommandsSenderService.register(ss), this.iframeCommandsSenderService.register(So), this.iframeCommandsSenderService.register(Eo), this.iframeCommandsSenderService.register(Qo), this.iframeCommandsSenderService.register(Jo), this.iframeCommandsSenderService.register(Es), this.iframeCommandsSenderService.register(Ss)
            }, t.prototype.onStartTracking = function() {
                this.iframeCommandsSenderService.start()
            }, t.prototype.onOptout = function() {
                this.iframeCommandsSenderService.stop()
            }, t
        }(),
        pa = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.commandsService = e, r.iframeChildToParentCommunicationService = i, r.batch = [], r
            }
            return U(e, t), e.prototype.onStart = function() {
                this.commandsBatchReady()
            }, e.prototype.onStop = function() {
                this.batch = []
            }, e.prototype.register = function(t) {
                for (var e = this, i = function(t) {
                        r.commandsService.register([t], (function() {
                            for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                            return e.send(t, i)
                        }))
                    }, r = this, n = 0, o = t; n < o.length; n++) {
                    i(o[n])
                }
            }, e.prototype.send = function(t, e) {
                csArray.prototype.push.call(this.batch, {
                    name: t,
                    params: e
                }), this.isStarted && this.commandsBatchReady()
            }, e.prototype.commandsBatchReady = function() {
                if (0 !== this.batch.length) {
                    var t = {
                        commands: this.batch
                    };
                    this.iframeChildToParentCommunicationService.sendToParent(_t.Commands, t), this.batch = []
                }
            }, H([Kt("Commands.iframe.commandsBatch.send")], e.prototype, "send", null), H([Hi(), Kt("send iframe commands batch")], e.prototype, "commandsBatchReady", null), e
        }(Xe),
        da = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.configuration = e, n.lifeCycleEventsEmitter = i, n.childLifeCycleEventEmitter = r, n.parentPort = null, n.maxMessagesBuffer = 25, n.messageBuffer = [], n.messageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return n.postMessagesListener(t)
                    }
                }, n
            }
            return U(e, t), e.prototype.onStart = function() {
                ke(this.messageHandler, !1), this.sendDiscovery()
            }, e.prototype.onStop = function() {
                Ie(this.messageHandler, !1), this.parentPort && (Pt.closeChannelPort(this.parentPort), this.parentPort = null)
            }, e.prototype.sendToParent = function(t, e) {
                var i = this.buildChildBaseMessage(t, e);
                this.sendMessage(i)
            }, e.prototype.sendDiscovery = function() {
                var t = this.buildChildBaseMessage(_t.Discovery);
                Pt.sendPostMessage(window.parent, "*", t)
            }, e.prototype.buildChildBaseMessage = function(t, e) {
                var i = Pt.buildBaseMessage(t, It.Child, this.configuration.projectId);
                return e && (i.content = e), i
            }, e.prototype.sendMessage = function(t) {
                null !== this.parentPort ? Pt.sendChannelMessage(this.parentPort, t) : this.addMessageToBuffer(t)
            }, e.prototype.initParentChannelMessaging = function(t, e) {
                var i = this,
                    r = new MessageChannel;
                this.parentPort = r.port1, this.parentPort.onmessage = function(t) {
                    i.channelMessageListener(t)
                };
                var n = this.buildChildBaseMessage(_t.Discovery);
                n.id = e, Pt.sendPostMessage(window.parent, t, n, [r.port2]), this.sendAllBufferedMessages()
            }, e.prototype.channelMessageListener = function(t) {
                switch (t.data.type) {
                    case _t.IntegrationCallback:
                        var e = t.data.content;
                        e.initiator === kt.AfterPageView ? this.childLifeCycleEventEmitter.emitAfterPageViewCallback(e) : e.initiator === kt.GetSessionKey ? this.childLifeCycleEventEmitter.emitIntegrationSessionKeyCallback(e) : Wt.warn("Iframe child received unknown IntegrationCallback type from parent : ".concat(csJSON.stringify(t.data)));
                        break;
                    case _t.Stop:
                        this.lifeCycleEventsEmitter.emitOptout();
                        break;
                    default:
                        Wt.warn("Iframe child received unknown channelMessage type from parent : ".concat(csJSON.stringify(t.data)))
                }
            }, e.prototype.postMessagesListener = function(t) {
                if (null === this.parentPort && Pt.isMessageValid(t, It.Parent, this.configuration.projectId, this.configuration.hostnames)) switch (t.data.type) {
                    case _t.Stop:
                        this.lifeCycleEventsEmitter.emitOptout();
                        break;
                    case _t.Discovery:
                        if (!Dt(t.data.id) || t.data.id < 0) return void Wt.warn("Iframe child received discovery without valid id from parent (".concat(t.origin, ") : ").concat(csJSON.stringify(t.data)));
                        this.initParentChannelMessaging(t.origin, t.data.id);
                        break;
                    default:
                        Wt.warn("Iframe child received unknown postMessage type from parent (".concat(t.origin, ") : ").concat(csJSON.stringify(t.data)))
                }
            }, e.prototype.addMessageToBuffer = function(t) {
                this.messageBuffer.length < this.maxMessagesBuffer && csArray.prototype.push.call(this.messageBuffer, t)
            }, e.prototype.sendAllBufferedMessages = function() {
                if (null !== this.parentPort) {
                    for (var t = 0, e = this.messageBuffer; t < e.length; t++) {
                        var i = e[t];
                        Pt.sendChannelMessage(this.parentPort, i)
                    }
                    this.messageBuffer = []
                }
            }, e
        }(Xe),
        fa = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.apiErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return U(e, t), e.prototype.init = function() {
                this.apiErrorsTracker.init()
            }, e.prototype.onStart = function() {
                var t = this;
                this.apiErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(_t.ApiError, t)
            }, e.SERVICE_IDENTIFIER = "ChildApiErrorsService", e
        }(Xe),
        ya = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.javaScriptErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return U(e, t), e.prototype.onStart = function() {
                var t = this;
                this.javaScriptErrorsTracker.subscribe(e.SERVICE_IDENTIFIER, (function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.unsubscribe(e.SERVICE_IDENTIFIER)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(_t.JavascriptError, t)
            }, e.SERVICE_IDENTIFIER = "ChildJavaScriptErrorsService", e
        }(Xe),
        va = function() {
            function t(t, e, i, r) {
                this.javaScriptErrorsTracker = t, this.apiErrorsTracker = e, this.configuration = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                this.childJavaScriptErrorsService = new ya(this.javaScriptErrorsTracker, this.iframeChildToParentCommunicationService), this.apiErrorsTracker.excludeDomains([hs.CONTENTSQUARE, hs.CLICKTALE, hs.FAKE_TRACKER]), this.childApiErrorsService = new fa(this.apiErrorsTracker, this.iframeChildToParentCommunicationService), this.childApiErrorsService.init()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.childJavaScriptErrorsService.start(), this.configuration.apiErrors.enabled && this.childApiErrorsService.start()
            }, t.prototype.onOptout = function() {
                this.childJavaScriptErrorsService.stop(), this.childApiErrorsService.stop()
            }, t
        }(),
        ga = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t
            }
            return t.prototype.onStartTracking = function() {
                this.iframeChildToParentCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeChildToParentCommunicationService.stop()
            }, t
        }(),
        ma = function() {
            function t(t, e, i) {
                this.iframeParentToChildrenCommunicationService = t, this.iframeEventsEmitter = e, this.iframeChildToParentCommunicationService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeParentToChildrenCommunicationService.stop()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.AnalysisEvent, t)
            }, t.prototype.onIframeJavascriptError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.JavascriptError, t)
            }, t.prototype.onIframeApiError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.ApiError, t)
            }, t.prototype.onIframeEmerchandisingMessage = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.EmerchandisingMessage, t)
            }, t.prototype.onIframeCommands = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.Commands, t)
            }, t.prototype.onIframeIntegrationCallback = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(_t.IntegrationCallback, t)
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(_t.IntegrationCallback, t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(_t.IntegrationCallback, t)
            }, t
        }(),
        Sa = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.analysisEventsTracker = e, n.gestureTracker = i, n.iframeChildToParentCommunicationService = r, n
            }
            return U(e, t), e.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStart = function() {
                this.analysisEventsTracker.start(), this.gestureTracker.start()
            }, e.prototype.onStop = function() {
                this.analysisEventsTracker.stop(), this.gestureTracker.stop()
            }, e.prototype.processEvent = function(t) {
                this.isStarted && t.type !== or.RESIZE && this.iframeChildToParentCommunicationService.sendToParent(_t.AnalysisEvent, t)
            }, e
        }(Xe),
        Ea = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.projectPathComputation = e, this.selector = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                var t = new sn(this.configuration, this.projectPathComputation, this.selector),
                    e = new Qr(this.configuration, this.projectPathComputation, new Do(Wt));
                this.childAnalysisEventsService = new Sa(t, e, this.iframeChildToParentCommunicationService), this.childAnalysisEventsService.init()
            }, t.prototype.onStartTracking = function() {
                this.childAnalysisEventsService.start()
            }, t.prototype.onOptout = function() {
                this.childAnalysisEventsService.stop()
            }, t
        }(),
        ba = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return U(e, t), e
        }(no),
        Ca = function() {
            function t(t, e, i) {
                this.urlService = t, this.eMerchandisingTracker = e, this.iframeChildToParentCommunicationService = i, this.products = []
            }
            return t.prototype.collect = function() {
                var t = this.eMerchandisingTracker.collectProductsAndAnchors().products;
                this.products = t, this.targetUrl = this.urlService.getUrl(), this.sendEMerchandisingData()
            }, t.prototype.clearProducts = function() {
                this.products = []
            }, t.prototype.sendEMerchandisingData = function() {
                var t = {
                    targetUrl: this.targetUrl,
                    windowWidth: Be.windowWidth(),
                    windowHeight: Be.windowHeight(),
                    products: this.products
                };
                this.iframeChildToParentCommunicationService.sendToParent(_t.EmerchandisingMessage, t)
            }, t
        }(),
        wa = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.projectPathComputation = e, this.urlService = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                var t = new ba(this.configuration, this.projectPathComputation);
                this.childEmerchandisingService = new Ca(this.urlService, t, this.iframeChildToParentCommunicationService)
            }, t.prototype.onStartTracking = function() {
                this.childEmerchandisingService.clearProducts(), this.childEmerchandisingService.collect()
            }, t.prototype.onAfterPageViewCallback = function() {
                this.childEmerchandisingService.clearProducts(), this.childEmerchandisingService.collect()
            }, t
        }(),
        Ta = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.registeredCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                Ut(t) && this.registerCallback(t)
            }, t.prototype.executeRegisteredCallbacks = function(t) {
                var e = t.trackingContext;
                if (e)
                    if (t.callbackId) {
                        var i = this.registeredCallbacks[t.callbackId];
                        i && this.executeAsync(i, e)
                    } else
                        for (var r in this.registeredCallbacks) this.executeAsync(this.registeredCallbacks[r], e)
            }, t.prototype.registerCallback = function(t) {
                var e = et.integer(),
                    i = {
                        callbackId: e,
                        initiator: kt.AfterPageView
                    };
                this.registeredCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(_t.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Ra = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.pendingCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                Vt(t) && Ut(t.callback) && this.addPendingCallback(t.callback)
            }, t.prototype.executePendingCallbacks = function(t) {
                var e = t.trackingContext,
                    i = t.callbackId;
                if (i && e) {
                    var r = this.pendingCallbacks[i];
                    r && (delete this.pendingCallbacks[i], this.executeAsync(r, e.sessionKey))
                }
            }, t.prototype.addPendingCallback = function(t) {
                var e = et.integer(),
                    i = {
                        callbackId: e,
                        initiator: kt.GetSessionKey
                    };
                this.pendingCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(_t.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Aa = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeChildToParentCommunicationService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeAfterPageViewService = new Ta(this.iframeChildToParentCommunicationService), this.iframeGetSessionKeyService = new Ra(this.iframeChildToParentCommunicationService), this.commandsService.register(Tr, (function(e) {
                    t.iframeAfterPageViewService.handleCommand(e)
                })), this.commandsService.register(Rr, (function(e) {
                    return t.iframeGetSessionKeyService.handleCommand(e)
                }))
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeAfterPageViewService.executeRegisteredCallbacks(t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeGetSessionKeyService.executePendingCallbacks(t)
            }, t
        }(),
        ka = function() {
            function t(t, e, i, r, n) {
                var o = this;
                this.childLifeCycleEventsEmitter = t, this.lifeCycleEventsEmitter = e, this.configuration = i, this.iframeChildToParentCommunicationService = r, this.commandsService = n, this.startDataCollection = function() {
                    o.commandsService.start(), o.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this,
                    e = new Qn(x, this.configuration),
                    i = new Jn(e),
                    r = new Ea(this.configuration, e, i, this.iframeChildToParentCommunicationService),
                    n = new ga(this.iframeChildToParentCommunicationService);
                if (this.configuration.eMerchandisingEnabled) {
                    var o = new dt,
                        s = new Ns(window.location, o),
                        a = new wa(this.configuration, e, s, this.iframeChildToParentCommunicationService);
                    this.childLifeCycleEventsEmitter.addListeners(a), this.lifeCycleEventsEmitter.addListeners(a), a.init()
                }
                var c = new Aa(this.commandsService, this.iframeChildToParentCommunicationService);
                this.childLifeCycleEventsEmitter.addListeners(c), c.init();
                var u = new No(this.configuration),
                    l = new zs,
                    h = new ma(u, l, this.iframeChildToParentCommunicationService);
                l.addListeners(h), this.childLifeCycleEventsEmitter.addListeners(h), this.lifeCycleEventsEmitter.addListeners(n, h, r), h.init(), r.init(), this.loadTracker = new Zn, this.loadTracker.onLoad((function() {
                    t.lifeCycleEventsEmitter.emitStartTracking()
                })), this.startDataCollection()
            }, t
        }(),
        Ia = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.init = function() {
                var t = new Ko,
                    e = new la,
                    i = new da(this.configuration, t, e),
                    r = new ps,
                    n = new pa(r, i),
                    o = new ha(n);
                o.init();
                var s = new Rs,
                    a = new oa(this.configuration),
                    c = new _i,
                    u = new Ds(c, a, this.configuration),
                    l = new xs(c, a, this.configuration),
                    h = new Ms(u, l),
                    p = new va(s, h, this.configuration, i);
                p.init(), t.addListeners(o, p), t.emitInitTracking(), new ka(e, t, this.configuration, i, r).start()
            }, t
        }(),
        _a = function() {
            function t(t, e, i) {
                this.configuration = t, this.childContext = e, this.parentLogContext = i
            }
            return t.prototype.start = function() {
                var t, e;
                if (!window.UXAnalytics) {
                    var i = new Xt(this.childContext, this.configuration);
                    i.init();
                    var r = new ie(this.configuration, i);
                    if (this.childContext.isTopWindowTracker() && r.canTrack()) {
                        if ((null === (t = window.CSProtectnativeFunctionsLogs) || void 0 === t ? void 0 : t.Warning) && Wt.warn("protectNativeFunctions failed: ".concat(window.CSProtectnativeFunctionsLogs.Warning)), null === (e = window.CSProtectnativeFunctionsLogs) || void 0 === e ? void 0 : e.Critical) return void Wt.error("protectNativeFunctions failed: ".concat(window.CSProtectnativeFunctionsLogs.Critical));
                        new aa(this.configuration, i, this.parentLogContext).init()
                    } else if (!this.childContext.isTopWindowTracker() && r.canTrackInChild()) {
                        new Ia(this.configuration).init()
                    }
                    window.UXAnalytics = {}, !window.CSFrameCommunication && ua.isActivable() && (window.CSFrameCommunication = ua, ua.waitForConnection())
                }
            }, H([Kt("main.start")], t.prototype, "start", null), t
        }();
    try {
        (null === (ca = window.performance) || void 0 === ca ? void 0 : ca.mark) && window.performance.mark("cs-start-tag");
        var Pa = new st(window.CS_CONF);
        window._uxa = window._uxa || [], Pa.processOptionOverrides(window._uxa);
        var Na = new at(window, Pa);
        Na.init();
        var Oa = new Mt;
        if (Na.isTopWindowTracker()) {
            var Ma = new Ct(Pa, Oa);
            Wt.setStrategy(Ma)
        } else {
            var La = new Ot(Pa);
            Wt.setStrategy(La)
        }
        new _a(Pa, Na, Oa).start()
    } catch (t) {}
}]);