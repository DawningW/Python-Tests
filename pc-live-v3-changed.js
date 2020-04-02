!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = ".package/",
    n(n.s = 163)
}([function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    ;
    var i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return l
    });
    var i = n(0)
      , r = n(37)
      , o = n(135)
      , a = n(9)
      , s = n(115)
      , u = n(48)
      , c = n(113)
      , l = function(t) {
        function e(n, i, r) {
            var a = t.call(this) || this;
            switch (a.syncErrorValue = null,
            a.syncErrorThrown = !1,
            a.syncErrorThrowable = !1,
            a.isStopped = !1,
            arguments.length) {
            case 0:
                a.destination = o.a;
                break;
            case 1:
                if (!n) {
                    a.destination = o.a;
                    break
                }
                if ("object" == typeof n) {
                    n instanceof e ? (a.syncErrorThrowable = n.syncErrorThrowable,
                    a.destination = n,
                    n.add(a)) : (a.syncErrorThrowable = !0,
                    a.destination = new d(a,n));
                    break
                }
            default:
                a.syncErrorThrowable = !0,
                a.destination = new d(a,n,i,r)
            }
            return a
        }
        return i.a(e, t),
        e.prototype[s.a] = function() {
            return this
        }
        ,
        e.create = function(t, n, i) {
            var r = new e(t,n,i);
            return r.syncErrorThrowable = !1,
            r
        }
        ,
        e.prototype.next = function(t) {
            this.isStopped || this._next(t)
        }
        ,
        e.prototype.error = function(t) {
            this.isStopped || (this.isStopped = !0,
            this._error(t))
        }
        ,
        e.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0,
            this._complete())
        }
        ,
        e.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            t.prototype.unsubscribe.call(this))
        }
        ,
        e.prototype._next = function(t) {
            this.destination.next(t)
        }
        ,
        e.prototype._error = function(t) {
            this.destination.error(t),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.destination.complete(),
            this.unsubscribe()
        }
        ,
        e.prototype._unsubscribeAndRecycle = function() {
            var t = this._parentOrParents;
            return this._parentOrParents = null,
            this.unsubscribe(),
            this.closed = !1,
            this.isStopped = !1,
            this._parentOrParents = t,
            this
        }
        ,
        e
    }(a.a)
      , d = function(t) {
        function e(e, n, i, a) {
            var s, u = t.call(this) || this;
            u._parentSubscriber = e;
            var c = u;
            return Object(r.a)(n) ? s = n : n && (s = n.next,
            i = n.error,
            a = n.complete,
            n !== o.a && (c = Object.create(n),
            Object(r.a)(c.unsubscribe) && u.add(c.unsubscribe.bind(c)),
            c.unsubscribe = u.unsubscribe.bind(u))),
            u._context = c,
            u._next = s,
            u._error = i,
            u._complete = a,
            u
        }
        return i.a(e, t),
        e.prototype.next = function(t) {
            if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
        }
        ,
        e.prototype.error = function(t) {
            if (!this.isStopped) {
                var e = this._parentSubscriber
                  , n = u.a.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                    n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t),
                    this.unsubscribe()) : (this.__tryOrUnsub(this._error, t),
                    this.unsubscribe());
                else if (e.syncErrorThrowable)
                    n ? (e.syncErrorValue = t,
                    e.syncErrorThrown = !0) : Object(c.a)(t),
                    this.unsubscribe();
                else {
                    if (this.unsubscribe(),
                    n)
                        throw t;
                    Object(c.a)(t)
                }
            }
        }
        ,
        e.prototype.complete = function() {
            var t = this;
            if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                    var n = function() {
                        return t._complete.call(t._context)
                    };
                    u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n),
                    this.unsubscribe()) : (this.__tryOrUnsub(n),
                    this.unsubscribe())
                } else
                    this.unsubscribe()
            }
        }
        ,
        e.prototype.__tryOrUnsub = function(t, e) {
            try {
                t.call(this._context, e)
            } catch (t) {
                if (this.unsubscribe(),
                u.a.useDeprecatedSynchronousErrorHandling)
                    throw t;
                Object(c.a)(t)
            }
        }
        ,
        e.prototype.__tryOrSetError = function(t, e, n) {
            if (!u.a.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
            try {
                e.call(this._context, n)
            } catch (e) {
                return u.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e,
                t.syncErrorThrown = !0,
                !0) : (Object(c.a)(e),
                !0)
            }
            return !1
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this._parentSubscriber;
            this._context = null,
            this._parentSubscriber = null,
            t.unsubscribe()
        }
        ,
        e
    }(l)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return u
    });
    var i = n(112)
      , r = n(230)
      , o = n(28)
      , a = n(116)
      , s = n(48)
      , u = function() {
        function t(t) {
            this._isScalar = !1,
            t && (this._subscribe = t)
        }
        return t.prototype.lift = function(e) {
            var n = new t;
            return n.source = this,
            n.operator = e,
            n
        }
        ,
        t.prototype.subscribe = function(t, e, n) {
            var i = this.operator
              , o = Object(r.a)(t, e, n);
            if (i ? o.add(i.call(o, this.source)) : o.add(this.source || s.a.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)),
            s.a.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1,
            o.syncErrorThrown))
                throw o.syncErrorValue;
            return o
        }
        ,
        t.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (e) {
                s.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0,
                t.syncErrorValue = e),
                Object(i.a)(t) ? t.error(e) : console.warn(e)
            }
        }
        ,
        t.prototype.forEach = function(t, e) {
            var n = this;
            return new (e = c(e))(function(e, i) {
                var r;
                r = n.subscribe(function(e) {
                    try {
                        t(e)
                    } catch (t) {
                        i(t),
                        r && r.unsubscribe()
                    }
                }, i, e)
            }
            )
        }
        ,
        t.prototype._subscribe = function(t) {
            var e = this.source;
            return e && e.subscribe(t)
        }
        ,
        t.prototype[o.a] = function() {
            return this
        }
        ,
        t.prototype.pipe = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return 0 === t.length ? this : Object(a.b)(t)(this)
        }
        ,
        t.prototype.toPromise = function(t) {
            var e = this;
            return new (t = c(t))(function(t, n) {
                var i;
                e.subscribe(function(t) {
                    return i = t
                }, function(t) {
                    return n(t)
                }, function() {
                    return t(i)
                })
            }
            )
        }
        ,
        t.create = function(e) {
            return new t(e)
        }
        ,
        t
    }();
    function c(t) {
        if (t || (t = s.a.Promise || Promise),
        !t)
            throw new Error("no Promise impl found");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(e)
        }
        ,
        e.prototype.notifyError = function(t, e) {
            this.destination.error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.destination.complete()
        }
        ,
        e
    }(n(1).a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n, a, s) {
        void 0 === s && (s = new i.a(t,n,a));
        if (s.closed)
            return;
        if (e instanceof o.a)
            return e.subscribe(s);
        return Object(r.a)(e)(s)
    }
    ;
    var i = n(21)
      , r = n(122)
      , o = n(2)
}
, function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var n = this[e];
                n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
            }
            return t.join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var o = this[r][0];
                "number" == typeof o && (i[o] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a))
            }
        }
        ,
        t
    }
}
, function(t, e, n) {
    var i = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !i)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var r = n(32)
      , o = {}
      , a = i && (document.head || document.getElementsByTagName("head")[0])
      , s = null
      , u = 0
      , c = !1
      , l = function() {}
      , d = null
      , f = "data-vue-ssr-id"
      , p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function h(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e]
              , i = o[n.id];
            if (i) {
                i.refs++;
                for (var r = 0; r < i.parts.length; r++)
                    i.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++)
                    i.parts.push(g(n.parts[r]));
                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
            } else {
                var a = [];
                for (r = 0; r < n.parts.length; r++)
                    a.push(g(n.parts[r]));
                o[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function v() {
        var t = document.createElement("style");
        return t.type = "text/css",
        a.appendChild(t),
        t
    }
    function g(t) {
        var e, n, i = document.querySelector("style[" + f + '~="' + t.id + '"]');
        if (i) {
            if (c)
                return l;
            i.parentNode.removeChild(i)
        }
        if (p) {
            var r = u++;
            i = s || (s = v()),
            e = b.bind(null, i, r, !1),
            n = b.bind(null, i, r, !0)
        } else
            i = v(),
            e = function(t, e) {
                var n = e.css
                  , i = e.media
                  , r = e.sourceMap;
                i && t.setAttribute("media", i);
                d.ssrId && t.setAttribute(f, e.id);
                r && (n += "\n/*# sourceURL=" + r.sources[0] + " */",
                n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, i),
            n = function() {
                i.parentNode.removeChild(i)
            }
            ;
        return e(t),
        function(i) {
            if (i) {
                if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap)
                    return;
                e(t = i)
            } else
                n()
        }
    }
    t.exports = function(t, e, n, i) {
        c = n,
        d = i || {};
        var a = r(t, e);
        return h(a),
        function(e) {
            for (var n = [], i = 0; i < a.length; i++) {
                var s = a[i];
                (u = o[s.id]).refs--,
                n.push(u)
            }
            e ? h(a = r(t, e)) : a = [];
            for (i = 0; i < n.length; i++) {
                var u;
                if (0 === (u = n[i]).refs) {
                    for (var c = 0; c < u.parts.length; c++)
                        u.parts[c]();
                    delete o[u.id]
                }
            }
        }
    }
    ;
    var _, m = (_ = [],
    function(t, e) {
        return _[t] = e,
        _.filter(Boolean).join("\n")
    }
    );
    function b(t, e, n, i) {
        var r = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = m(e, r);
        else {
            var o = document.createTextNode(r)
              , a = t.childNodes;
            a[e] && t.removeChild(a[e]),
            a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
        }
    }
}
, function(t, e) {
    t.exports = function(t, e, n, i, r, o) {
        var a, s = t = t || {}, u = typeof t.default;
        "object" !== u && "function" !== u || (a = t,
        s = t.default);
        var c, l = "function" == typeof s ? s.options : s;
        if (e && (l.render = e.render,
        l.staticRenderFns = e.staticRenderFns,
        l._compiled = !0),
        n && (l.functional = !0),
        r && (l._scopeId = r),
        o ? (c = function(t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
            i && i.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(o)
        }
        ,
        l._ssrRegister = c) : i && (c = i),
        c) {
            var d = l.functional
              , f = d ? l.render : l.beforeCreate;
            d ? (l._injectStyles = c,
            l.render = function(t, e) {
                return c.call(e),
                f(t, e)
            }
            ) : l.beforeCreate = f ? [].concat(f, c) : [c]
        }
        return {
            esModule: a,
            exports: s,
            options: l
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(63)
      , r = i
      , o = n(73)
      , a = o
      , s = n(35)
      , u = s
      , c = n(24);
    e.Language = c.Language;
    var l = n(36)
      , d = n(81)
      , f = s.default || u
      , p = o.default || a
      , h = i.default || r;
    e.i18next = h;
    var v = "translation";
    e.supportLngTypes = [c.Language[c.Language.zh_CN], c.Language[c.Language.zh_TW], c.Language[c.Language.zh_HK], c.Language[c.Language.en_US], c.Language[c.Language.ja_JP], c.Language[c.Language.vi_VN], c.Language[c.Language.th_TH], c.Language[c.Language.ne_NP], c.Language[c.Language.id_ID], c.Language[c.Language.ms_MY]];
    var g = []
      , _ = h.t.bind(h);
    function m(t) {
        return c.Language[l.getStandardLanguage(t)]
    }
    function b() {
        return l.getStandardLanguage(h.language)
    }
    e.supportLngDesc = [{
        text: "简体中文",
        type: c.Language[c.Language.zh_CN]
    }, {
        text: "繁體中文（台灣）",
        type: c.Language[c.Language.zh_TW]
    }, {
        text: "繁體中文（香港）",
        type: c.Language[c.Language.zh_HK]
    }, {
        text: "English",
        type: c.Language[c.Language.en_US]
    }, {
        text: "日本語",
        type: c.Language[c.Language.ja_JP]
    }, {
        text: "ไทย",
        type: c.Language[c.Language.th_TH]
    }, {
        text: "नेपाली",
        type: c.Language[c.Language.ne_NP]
    }, {
        text: "Bahasa indonesia",
        type: c.Language[c.Language.id_ID]
    }, {
        text: "Melayu",
        type: c.Language[c.Language.ms_MY]
    }],
    e.languageMap = {
        "zh-CN": c.Language[c.Language.zh_CN],
        zh_CN: c.Language[c.Language.zh_CN],
        zh: c.Language[c.Language.zh_CN],
        zh_cn: c.Language[c.Language.zh_CN],
        en_US: c.Language[c.Language.en_US],
        "en-US": c.Language[c.Language.en_US],
        en: c.Language[c.Language.en_US],
        zh_TW: c.Language[c.Language.zh_TW],
        "zh-TW": c.Language[c.Language.zh_TW],
        "zh-HK": c.Language[c.Language.zh_HK],
        zh_HK: c.Language[c.Language.zh_HK],
        "zh-Hans": c.Language[c.Language.zh_CN],
        zh_Hans: c.Language[c.Language.zh_CN],
        "zh-Hant": c.Language[c.Language.zh_TW],
        zh_Hant: c.Language[c.Language.zh_TW],
        "zh-Hans-CN": c.Language[c.Language.zh_CN],
        "zh-Hant-CN": c.Language[c.Language.zh_TW],
        "zh-Hant-HK": c.Language[c.Language.zh_HK],
        "zh-Hant-MO": c.Language[c.Language.zh_TW],
        "zh-Hant-SG": c.Language[c.Language.zh_TW],
        "zh-Hant-TW": c.Language[c.Language.zh_TW],
        ja: c.Language[c.Language.ja_JP],
        ja_JP: c.Language[c.Language.ja_JP],
        "ja-JP": c.Language[c.Language.ja_JP],
        vi: c.Language[c.Language.vi_VN],
        vi_VN: c.Language[c.Language.vi_VN],
        th: c.Language[c.Language.th_TH],
        th_TH: c.Language[c.Language.th_TH],
        ne: c.Language[c.Language.ne_NP],
        ne_NP: c.Language[c.Language.ne_NP],
        id: c.Language[c.Language.id_ID],
        id_ID: c.Language[c.Language.id_ID],
        ms: c.Language[c.Language.ms_MY],
        ms_MY: c.Language[c.Language.ms_MY]
    },
    e.languageMapping = m,
    e.isChinese = function(t) {
        void 0 === t && (t = {
            simplifiedOnly: !0
        });
        var e = b();
        return t.simplifiedOnly ? e === c.Language.zh_CN : [c.Language.zh_CN, c.Language.zh_TW, c.Language.zh_HK].indexOf(e) >= 0
    }
    ,
    e.getCurrentLanguage = b;
    var y = !1;
    function w() {
        var t;
        g.length > 0 && (t = g,
        g = [],
        t.forEach(function(t) {
            k(t.resource, t.namespace)
        }))
    }
    function x(t, n, i) {
        if (y)
            throw new Error("Do not repeat init i18n");
        y = !0;
        var r = {};
        t && (t = m(t)),
        n && Object.keys(e.languageMap).forEach(function(t) {
            r[t] = {
                translation: n[e.languageMap[t]]
            }
        });
        var o = i || {};
        o.fallbackLng = {
            zh_HK: ["zh_TW", "zh_CN"],
            "zh-HK": ["zh_TW", "zh_CN"],
            default: ["en_US"]
        },
        o.resources = r,
        t ? (o.lng = t,
        h.init(o)) : (o.detection = {
            order: ["navigator"],
            caches: []
        },
        h.use(p).init(o)),
        w()
    }
    function k(t, n) {
        var i = n || v;
        y ? Object.keys(e.languageMap).forEach(function(n) {
            t[e.languageMap[n]] && h.addResourceBundle(n, i, t[e.languageMap[n]])
        }) : g.push({
            namespace: i,
            resource: t
        })
    }
    e.initI18Next = x,
    e.hasInitFromOtherLib = function() {
        y = !0,
        w()
    }
    ,
    e.addResourceBundle = k,
    e.changeLanguage = function(t) {
        h.changeLanguage(t)
    }
    ,
    e.clear = function(t) {
        var n = v;
        h.t = _,
        t && (n = t),
        Object.keys(e.languageMap).forEach(function(t) {
            h.removeResourceBundle && h.removeResourceBundle(t, n)
        }),
        y = !1
    }
    ,
    e.autoInit = function(t, e, n) {
        var i, r, o, a, s;
        i = c.SHOW_MCMS_KEY_INDICATOR.toLowerCase(),
        r = l.hasWindow() && window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().indexOf(i) >= 0,
        o = l.hasWindow() && window.location && window.location.href && window.location.host && 0 === window.location.host.indexOf("pre-") && window.location.href.toLowerCase().indexOf(i) >= 0,
        a = "1" === f.get(c.SHOW_MCMS_KEY_INDICATOR),
        (r || o || a) && (h.t = function(t) {
            return l.hasWindow() && window.console.log(t, _(t)),
            t
        }
        ),
        x(e || (null !== (s = d.default()) ? c.Language[s] : null) || "", t, n)
    }
    ,
    e.setLanguageCookie = function(t, e) {
        if (void 0 === e && (e = !1),
        l.hasWindow()) {
            var n = window.location.hostname
              , i = n.split(".")
              , r = i.length
              , o = e ? n : "." + i[r - 2] + "." + i[r - 1];
            f.remove(c.COOKIE_NAME),
            f.set(c.COOKIE_NAME, t, {
                expires: 365,
                domain: o
            })
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var i = n(12)
      , r = n(114)
      , o = n(37)
      , a = n(136)
      , s = function() {
        function t(t) {
            this.closed = !1,
            this._parentOrParents = null,
            this._subscriptions = null,
            t && (this._unsubscribe = t)
        }
        var e;
        return t.prototype.unsubscribe = function() {
            var e;
            if (!this.closed) {
                var n = this._parentOrParents
                  , s = this._unsubscribe
                  , c = this._subscriptions;
                if (this.closed = !0,
                this._parentOrParents = null,
                this._subscriptions = null,
                n instanceof t)
                    n.remove(this);
                else if (null !== n)
                    for (var l = 0; l < n.length; ++l) {
                        n[l].remove(this)
                    }
                if (Object(o.a)(s))
                    try {
                        s.call(this)
                    } catch (t) {
                        e = t instanceof a.a ? u(t.errors) : [t]
                    }
                if (Object(i.a)(c)) {
                    l = -1;
                    for (var d = c.length; ++l < d; ) {
                        var f = c[l];
                        if (Object(r.a)(f))
                            try {
                                f.unsubscribe()
                            } catch (t) {
                                e = e || [],
                                t instanceof a.a ? e = e.concat(u(t.errors)) : e.push(t)
                            }
                    }
                }
                if (e)
                    throw new a.a(e)
            }
        }
        ,
        t.prototype.add = function(e) {
            var n = e;
            if (!e)
                return t.EMPTY;
            switch (typeof e) {
            case "function":
                n = new t(e);
            case "object":
                if (n === this || n.closed || "function" != typeof n.unsubscribe)
                    return n;
                if (this.closed)
                    return n.unsubscribe(),
                    n;
                if (!(n instanceof t)) {
                    var i = n;
                    (n = new t)._subscriptions = [i]
                }
                break;
            default:
                throw new Error("unrecognized teardown " + e + " added to Subscription.")
            }
            var r = n._parentOrParents;
            if (null === r)
                n._parentOrParents = this;
            else if (r instanceof t) {
                if (r === this)
                    return n;
                n._parentOrParents = [r, this]
            } else {
                if (-1 !== r.indexOf(this))
                    return n;
                r.push(this)
            }
            var o = this._subscriptions;
            return null === o ? this._subscriptions = [n] : o.push(n),
            n
        }
        ,
        t.prototype.remove = function(t) {
            var e = this._subscriptions;
            if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1)
            }
        }
        ,
        t.EMPTY = ((e = new t).closed = !0,
        e),
        t
    }();
    function u(t) {
        return t.reduce(function(t, e) {
            return t.concat(e instanceof a.a ? e.errors : e)
        }, [])
    }
}
, function(t, e, n) {
    "use strict";
    var i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    var r = {
        type: "logger",
        log: function(t) {
            this.output("log", t)
        },
        warn: function(t) {
            this.output("warn", t)
        },
        error: function(t) {
            this.output("error", t)
        },
        output: function(t, e) {
            var n;
            console && console[t] && (n = console)[t].apply(n, function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }(e))
        }
    }
      , o = function() {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.init(e, n)
        }
        return t.prototype.init = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.prefix = e.prefix || "i18next:",
            this.logger = t || r,
            this.options = e,
            this.debug = e.debug
        }
        ,
        t.prototype.setDebug = function(t) {
            this.debug = t
        }
        ,
        t.prototype.log = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return this.forward(e, "log", "", !0)
        }
        ,
        t.prototype.warn = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return this.forward(e, "warn", "", !0)
        }
        ,
        t.prototype.error = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return this.forward(e, "error", "")
        }
        ,
        t.prototype.deprecate = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
        }
        ,
        t.prototype.forward = function(t, e, n, i) {
            return i && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]),
            this.logger[e](t))
        }
        ,
        t.prototype.create = function(e) {
            return new t(this.logger,i({
                prefix: this.prefix + ":" + e + ":"
            }, this.options))
        }
        ,
        t
    }();
    e.a = new o
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return l
    }),
    n.d(e, "a", function() {
        return d
    });
    var i = n(0)
      , r = n(2)
      , o = n(1)
      , a = n(9)
      , s = n(50)
      , u = n(138)
      , c = n(115)
      , l = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.destination = e,
            n
        }
        return i.a(e, t),
        e
    }(o.a)
      , d = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.observers = [],
            e.closed = !1,
            e.isStopped = !1,
            e.hasError = !1,
            e.thrownError = null,
            e
        }
        return i.a(e, t),
        e.prototype[c.a] = function() {
            return new l(this)
        }
        ,
        e.prototype.lift = function(t) {
            var e = new f(this,this);
            return e.operator = t,
            e
        }
        ,
        e.prototype.next = function(t) {
            if (this.closed)
                throw new s.a;
            if (!this.isStopped)
                for (var e = this.observers, n = e.length, i = e.slice(), r = 0; r < n; r++)
                    i[r].next(t)
        }
        ,
        e.prototype.error = function(t) {
            if (this.closed)
                throw new s.a;
            this.hasError = !0,
            this.thrownError = t,
            this.isStopped = !0;
            for (var e = this.observers, n = e.length, i = e.slice(), r = 0; r < n; r++)
                i[r].error(t);
            this.observers.length = 0
        }
        ,
        e.prototype.complete = function() {
            if (this.closed)
                throw new s.a;
            this.isStopped = !0;
            for (var t = this.observers, e = t.length, n = t.slice(), i = 0; i < e; i++)
                n[i].complete();
            this.observers.length = 0
        }
        ,
        e.prototype.unsubscribe = function() {
            this.isStopped = !0,
            this.closed = !0,
            this.observers = null
        }
        ,
        e.prototype._trySubscribe = function(e) {
            if (this.closed)
                throw new s.a;
            return t.prototype._trySubscribe.call(this, e)
        }
        ,
        e.prototype._subscribe = function(t) {
            if (this.closed)
                throw new s.a;
            return this.hasError ? (t.error(this.thrownError),
            a.a.EMPTY) : this.isStopped ? (t.complete(),
            a.a.EMPTY) : (this.observers.push(t),
            new u.a(this,t))
        }
        ,
        e.prototype.asObservable = function() {
            var t = new r.a;
            return t.source = this,
            t
        }
        ,
        e.create = function(t, e) {
            return new f(t,e)
        }
        ,
        e
    }(r.a)
      , f = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.destination = e,
            i.source = n,
            i
        }
        return i.a(e, t),
        e.prototype.next = function(t) {
            var e = this.destination;
            e && e.next && e.next(t)
        }
        ,
        e.prototype.error = function(t) {
            var e = this.destination;
            e && e.error && this.destination.error(t)
        }
        ,
        e.prototype.complete = function() {
            var t = this.destination;
            t && t.complete && this.destination.complete()
        }
        ,
        e.prototype._subscribe = function(t) {
            return this.source ? this.source.subscribe(t) : a.a.EMPTY
        }
        ,
        e
    }(d)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        return Array.isArray || function(t) {
            return t && "number" == typeof t.length
        }
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(38)
      , r = new (n(39).a)(i.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            if ("function" != typeof t)
                throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.project = t,
            this.thisArg = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.project,this.thisArg))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.project = n,
            r.count = 0,
            r.thisArg = i || r,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e;
            try {
                e = this.project.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    var i = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.observers = {}
        }
        return t.prototype.on = function(t, e) {
            var n = this;
            t.split(" ").forEach(function(t) {
                n.observers[t] = n.observers[t] || [],
                n.observers[t].push(e)
            })
        }
        ,
        t.prototype.off = function(t, e) {
            var n = this;
            this.observers[t] && this.observers[t].forEach(function() {
                if (e) {
                    var i = n.observers[t].indexOf(e);
                    i > -1 && n.observers[t].splice(i, 1)
                } else
                    delete n.observers[t]
            })
        }
        ,
        t.prototype.emit = function(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i];
            this.observers[t] && [].concat(this.observers[t]).forEach(function(t) {
                t.apply(void 0, n)
            });
            this.observers["*"] && [].concat(this.observers["*"]).forEach(function(e) {
                var i;
                e.apply(e, (i = [t]).concat.apply(i, n))
            })
        }
        ,
        t
    }();
    e.a = i
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    }),
    e.b = function(t) {
        return t ? function(t) {
            return new i.a(function(e) {
                return t.schedule(function() {
                    return e.complete()
                })
            }
            )
        }(t) : r
    }
    ;
    var i = n(2)
      , r = new i.a(function(t) {
        return t.complete()
    }
    )
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t && "function" == typeof t.schedule
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return e ? Object(o.a)(t, e) : t instanceof i.a ? t : new i.a(Object(r.a)(t))
    }
    ;
    var i = n(2)
      , r = n(122)
      , o = n(150)
}
, function(t, e, n) {
    "use strict";
    function i(t, e, n) {
        function i(t) {
            return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
        }
        function r() {
            return !t || "string" == typeof t
        }
        for (var o = "string" != typeof e ? [].concat(e) : e.split("."); o.length > 1; ) {
            if (r())
                return {};
            var a = i(o.shift());
            !t[a] && n && (t[a] = new n),
            t = t[a]
        }
        return r() ? {} : {
            obj: t,
            k: i(o.shift())
        }
    }
    e.e = function(t) {
        return null == t ? "" : "" + t
    }
    ,
    e.a = function(t, e, n) {
        t.forEach(function(t) {
            e[t] && (n[t] = e[t])
        })
    }
    ,
    e.h = function(t, e, n) {
        var r = i(t, e, Object)
          , o = r.obj
          , a = r.k;
        o[a] = n
    }
    ,
    e.f = function(t, e, n, r) {
        var o = i(t, e, Object)
          , a = o.obj
          , s = o.k;
        a[s] = a[s] || [],
        r && (a[s] = a[s].concat(n));
        r || a[s].push(n)
    }
    ,
    e.d = function(t, e) {
        var n = i(t, e)
          , r = n.obj
          , o = n.k;
        return r ? r[o] : void 0
    }
    ,
    e.b = function t(e, n, i) {
        for (var r in n)
            r in e ? "string" == typeof e[r] || e[r]instanceof String || "string" == typeof n[r] || n[r]instanceof String ? i && (e[r] = n[r]) : t(e[r], n[r], i) : e[r] = n[r];
        return e
    }
    ,
    e.g = function(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    ,
    e.c = function(t) {
        if ("string" == typeof t)
            return t.replace(/[&<>"'\/]/g, function(t) {
                return r[t]
            });
        return t
    }
    ;
    var r = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.checkIsClassGroup = e.getBaseConversation = e.isEducationConv = e.boolValueForModuleKey = e.toast = e.BSearchUpperBoundOfBarrage = e.compareVersion = e.formatTime = e.padLeft = e.parse = e.getColor = void 0,
    e.transformEmoji = function(t) {
        if ("string" != typeof t)
            return "";
        return e = t,
        n = [f],
        i = "",
        function t(e, n) {
            var i = e;
            return n.forEach(function(e, n) {
                i = i.map(function(n, i) {
                    if ("string" == typeof n) {
                        var r = e.regExp;
                        r.lastIndex = 0;
                        for (var o = [], a = 0; ; ) {
                            var s = r.exec(n);
                            if (!s) {
                                o.push(n.slice(a));
                                break
                            }
                            s.index !== a && o.push(n.slice(a, s.index)),
                            o.push(e.transform(s[0], s.slice(1))),
                            a = r.lastIndex
                        }
                        return 0 === o.length ? o[0] : {
                            htmlTag: "",
                            text: "",
                            preventChildTransform: !1,
                            children: o
                        }
                    }
                    return !0 === n.preventChildTransform || !0 === n.selfClose ? n : (Array.isArray(n.children) ? n.children = t(n.children, [e]) : n.text && (n.children = t([n.text], [e])),
                    n)
                })
            }),
            i
        }([e], n).forEach(function(t) {
            i += function t(e) {
                if ("string" == typeof e)
                    return l(e);
                var n = "";
                return "" !== e.htmlTag && (n += "<" + e.htmlTag,
                e.attr && Object.keys(e.attr).length > 0 && Object.keys(e.attr).forEach(function(t) {
                    e.attr && (n += " " + l(t) + '="' + d(e.attr[t]) + '"')
                }),
                !0 === e.selfClose ? n += " />" : n += ">"),
                !0 !== e.selfClose && (e.children && Array.isArray(e.children) && e.children.length > 0 ? n += e.children.reduce(function(e, n) {
                    return e + t(n)
                }, "") : n += l(e.text || ""),
                "" !== e.htmlTag && (n += "</" + e.htmlTag + ">")),
                n
            }(t)
        }),
        i;
        var e, n, i
    }
    ;
    var i = n(82)
      , r = a(n(83))
      , o = a(n(47));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = ["#17c295", "#4da9eb", "#f7b55e", "#f2725e", "#568aad", "#b38979", "#5f70a7"]
      , u = s.length
      , c = (e.getColor = function(t) {
        if ("string" != typeof t)
            return s[0];
        var e = 0
          , n = void 0;
        for (n = 0; n < t.length; n++)
            e += t.charCodeAt(n);
        return s[e % u]
    }
    ,
    {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    })
      , l = function(t) {
        return t.replace(/[&<>"'\/]/g, function(t) {
            return c[t]
        })
    }
      , d = function(t) {
        return t.replace(/"/g, function(t) {
            return c[t]
        })
    };
    var f = {
        regExp: /((?:\ud83c\udde8\ud83c\uddf3|\ud83c\uddfa\ud83c\uddf8|\ud83c\uddf7\ud83c\uddfa|\ud83c\uddf0\ud83c\uddf7|\ud83c\uddef\ud83c\uddf5|\ud83c\uddee\ud83c\uddf9|\ud83c\uddec\ud83c\udde7|\ud83c\uddeb\ud83c\uddf7|\ud83c\uddea\ud83c\uddf8|\ud83c\udde9\ud83c\uddea|\u0039\ufe0f?\u20e3|\u0038\ufe0f?\u20e3|\u0037\ufe0f?\u20e3|\u0036\ufe0f?\u20e3|\u0035\ufe0f?\u20e3|\u0034\ufe0f?\u20e3|\u0033\ufe0f?\u20e3|\u0032\ufe0f?\u20e3|\u0031\ufe0f?\u20e3|\u0030\ufe0f?\u20e3|\u0023\ufe0f?\u20e3|\ud83d\udeb3|\ud83d\udeb1|\ud83d\udeb0|\ud83d\udeaf|\ud83d\udeae|\ud83d\udea6|\ud83d\udea3|\ud83d\udea1|\ud83d\udea0|\ud83d\ude9f|\ud83d\ude9e|\ud83d\ude9d|\ud83d\ude9c|\ud83d\ude9b|\ud83d\ude98|\ud83d\ude96|\ud83d\ude94|\ud83d\ude90|\ud83d\ude8e|\ud83d\ude8d|\ud83d\ude8b|\ud83d\ude8a|\ud83d\ude88|\ud83d\ude86|\ud83d\ude82|\ud83d\ude81|\ud83d\ude36|\ud83d\ude34|\ud83d\ude2f|\ud83d\ude2e|\ud83d\ude2c|\ud83d\ude27|\ud83d\ude26|\ud83d\ude1f|\ud83d\ude1b|\ud83d\ude19|\ud83d\ude17|\ud83d\ude15|\ud83d\ude11|\ud83d\ude10|\ud83d\ude0e|\ud83d\ude08|\ud83d\ude07|\ud83d\ude00|\ud83d\udd67|\ud83d\udd66|\ud83d\udd65|\ud83d\udd64|\ud83d\udd63|\ud83d\udd62|\ud83d\udd61|\ud83d\udd60|\ud83d\udd5f|\ud83d\udd5e|\ud83d\udd5d|\ud83d\udd5c|\ud83d\udd2d|\ud83d\udd2c|\ud83d\udd15|\ud83d\udd09|\ud83d\udd08|\ud83d\udd07|\ud83d\udd06|\ud83d\udd05|\ud83d\udd04|\ud83d\udd02|\ud83d\udd01|\ud83d\udd00|\ud83d\udcf5|\ud83d\udcef|\ud83d\udced|\ud83d\udcec|\ud83d\udcb7|\ud83d\udcb6|\ud83d\udcad|\ud83d\udc6d|\ud83d\udc6c|\ud83d\udc65|\ud83d\udc2a|\ud83d\udc16|\ud83d\udc15|\ud83d\udc13|\ud83d\udc10|\ud83d\udc0f|\ud83d\udc0b|\ud83d\udc0a|\ud83d\udc09|\ud83d\udc08|\ud83d\udc07|\ud83d\udc06|\ud83d\udc05|\ud83d\udc04|\ud83d\udc03|\ud83d\udc02|\ud83d\udc01|\ud83d\udc00|\ud83c\udfe4|\ud83c\udfc9|\ud83c\udfc7|\ud83c\udf7c|\ud83c\udf50|\ud83c\udf4b|\ud83c\udf33|\ud83c\udf32|\ud83c\udf1e|\ud83c\udf1d|\ud83c\udf1c|\ud83c\udf1a|\ud83c\udf18|\ud83c\udccf|\ud83c\udd70|\ud83c\udd71|\ud83c\udd7e|\ud83c\udd8e|\ud83c\udd91|\ud83c\udd92|\ud83c\udd93|\ud83c\udd94|\ud83c\udd95|\ud83c\udd96|\ud83c\udd97|\ud83c\udd98|\ud83c\udd99|\ud83c\udd9a|\ud83d\udc77|\ud83d\udec5|\ud83d\udec4|\ud83d\udec3|\ud83d\udec2|\ud83d\udec1|\ud83d\udebf|\ud83d\udeb8|\ud83d\udeb7|\ud83d\udeb5|\ud83c\ude01|\ud83c\ude02|\ud83c\ude32|\ud83c\ude33|\ud83c\ude34|\ud83c\ude35|\ud83c\ude36|\ud83c\ude37|\ud83c\ude38|\ud83c\ude39|\ud83c\ude3a|\ud83c\ude50|\ud83c\ude51|\ud83c\udf00|\ud83c\udf01|\ud83c\udf02|\ud83c\udf03|\ud83c\udf04|\ud83c\udf05|\ud83c\udf06|\ud83c\udf07|\ud83c\udf08|\ud83c\udf09|\ud83c\udf0a|\ud83c\udf0b|\ud83c\udf0c|\ud83c\udf0f|\ud83c\udf11|\ud83c\udf13|\ud83c\udf14|\ud83c\udf15|\ud83c\udf19|\ud83c\udf1b|\ud83c\udf1f|\ud83c\udf20|\ud83c\udf30|\ud83c\udf31|\ud83c\udf34|\ud83c\udf35|\ud83c\udf37|\ud83c\udf38|\ud83c\udf39|\ud83c\udf3a|\ud83c\udf3b|\ud83c\udf3c|\ud83c\udf3d|\ud83c\udf3e|\ud83c\udf3f|\ud83c\udf40|\ud83c\udf41|\ud83c\udf42|\ud83c\udf43|\ud83c\udf44|\ud83c\udf45|\ud83c\udf46|\ud83c\udf47|\ud83c\udf48|\ud83c\udf49|\ud83c\udf4a|\ud83c\udf4c|\ud83c\udf4d|\ud83c\udf4e|\ud83c\udf4f|\ud83c\udf51|\ud83c\udf52|\ud83c\udf53|\ud83c\udf54|\ud83c\udf55|\ud83c\udf56|\ud83c\udf57|\ud83c\udf58|\ud83c\udf59|\ud83c\udf5a|\ud83c\udf5b|\ud83c\udf5c|\ud83c\udf5d|\ud83c\udf5e|\ud83c\udf5f|\ud83c\udf60|\ud83c\udf61|\ud83c\udf62|\ud83c\udf63|\ud83c\udf64|\ud83c\udf65|\ud83c\udf66|\ud83c\udf67|\ud83c\udf68|\ud83c\udf69|\ud83c\udf6a|\ud83c\udf6b|\ud83c\udf6c|\ud83c\udf6d|\ud83c\udf6e|\ud83c\udf6f|\ud83c\udf70|\ud83c\udf71|\ud83c\udf72|\ud83c\udf73|\ud83c\udf74|\ud83c\udf75|\ud83c\udf76|\ud83c\udf77|\ud83c\udf78|\ud83c\udf79|\ud83c\udf7a|\ud83c\udf7b|\ud83c\udf80|\ud83c\udf81|\ud83c\udf82|\ud83c\udf83|\ud83c\udf84|\ud83c\udf85|\ud83c\udf86|\ud83c\udf87|\ud83c\udf88|\ud83c\udf89|\ud83c\udf8a|\ud83c\udf8b|\ud83c\udf8c|\ud83c\udf8d|\ud83c\udf8e|\ud83c\udf8f|\ud83c\udf90|\ud83c\udf91|\ud83c\udf92|\ud83c\udf93|\ud83c\udfa0|\ud83c\udfa1|\ud83c\udfa2|\ud83c\udfa3|\ud83c\udfa4|\ud83c\udfa5|\ud83c\udfa6|\ud83c\udfa7|\ud83c\udfa8|\ud83c\udfa9|\ud83c\udfaa|\ud83c\udfab|\ud83c\udfac|\ud83c\udfad|\ud83c\udfae|\ud83c\udfaf|\ud83c\udfb0|\ud83c\udfb1|\ud83c\udfb2|\ud83c\udfb3|\ud83c\udfb4|\ud83c\udfb5|\ud83c\udfb6|\ud83c\udfb7|\ud83c\udfb8|\ud83c\udfb9|\ud83c\udfba|\ud83c\udfbb|\ud83c\udfbc|\ud83c\udfbd|\ud83c\udfbe|\ud83c\udfbf|\ud83c\udfc0|\ud83c\udfc1|\ud83c\udfc2|\ud83c\udfc3|\ud83c\udfc4|\ud83c\udfc6|\ud83c\udfc8|\ud83c\udfca|\ud83c\udfe0|\ud83c\udfe1|\ud83c\udfe2|\ud83c\udfe3|\ud83c\udfe5|\ud83c\udfe6|\ud83c\udfe7|\ud83c\udfe8|\ud83c\udfe9|\ud83c\udfea|\ud83c\udfeb|\ud83c\udfec|\ud83c\udfed|\ud83c\udfee|\ud83c\udfef|\ud83c\udff0|\ud83d\udc0c|\ud83d\udc0d|\ud83d\udc0e|\ud83d\udc11|\ud83d\udc12|\ud83d\udc14|\ud83d\udc17|\ud83d\udc18|\ud83d\udc19|\ud83d\udc1a|\ud83d\udc1b|\ud83d\udc1c|\ud83d\udc1d|\ud83d\udc1e|\ud83d\udc1f|\ud83d\udc20|\ud83d\udc21|\ud83d\udc22|\ud83d\udc23|\ud83d\udc24|\ud83d\udc25|\ud83d\udc26|\ud83d\udc27|\ud83d\udc28|\ud83d\udc29|\ud83d\udc2b|\ud83d\udc2c|\ud83d\udc2d|\ud83d\udc2e|\ud83d\udc2f|\ud83d\udc30|\ud83d\udc31|\ud83d\udc32|\ud83d\udc33|\ud83d\udc34|\ud83d\udc35|\ud83d\udc36|\ud83d\udc37|\ud83d\udc38|\ud83d\udc39|\ud83d\udc3a|\ud83d\udc3b|\ud83d\udc3c|\ud83d\udc3d|\ud83d\udc3e|\ud83d\udc40|\ud83d\udc42|\ud83d\udc43|\ud83d\udc44|\ud83d\udc45|\ud83d\udc46|\ud83d\udc47|\ud83d\udc48|\ud83d\udc49|\ud83d\udc4a|\ud83d\udc4b|\ud83d\udc4c|\ud83d\udc4d|\ud83d\udc4e|\ud83d\udc4f|\ud83d\udc50|\ud83d\udc51|\ud83d\udc52|\ud83d\udc53|\ud83d\udc54|\ud83d\udc55|\ud83d\udc56|\ud83d\udc57|\ud83d\udc58|\ud83d\udc59|\ud83d\udc5a|\ud83d\udc5b|\ud83d\udc5c|\ud83d\udc5d|\ud83d\udc5e|\ud83d\udc5f|\ud83d\udc60|\ud83d\udc61|\ud83d\udc62|\ud83d\udc63|\ud83d\udc64|\ud83d\udc66|\ud83d\udc67|\ud83d\udc68|\ud83d\udc69|\ud83d\udc6a|\ud83d\udc6b|\ud83d\udc6e|\ud83d\udc6f|\ud83d\udc70|\ud83d\udc71|\ud83d\udc72|\ud83d\udc73|\ud83d\udc74|\ud83d\udc75|\ud83d\udc76|\ud83d\udeb4|\ud83d\udc78|\ud83d\udc79|\ud83d\udc7a|\ud83d\udc7b|\ud83d\udc7c|\ud83d\udc7d|\ud83d\udc7e|\ud83d\udc7f|\ud83d\udc80|\ud83d\udc81|\ud83d\udc82|\ud83d\udc83|\ud83d\udc84|\ud83d\udc85|\ud83d\udc86|\ud83d\udc87|\ud83d\udc88|\ud83d\udc89|\ud83d\udc8a|\ud83d\udc8b|\ud83d\udc8c|\ud83d\udc8d|\ud83d\udc8e|\ud83d\udc8f|\ud83d\udc90|\ud83d\udc91|\ud83d\udc92|\ud83d\udc93|\ud83d\udc94|\ud83d\udc95|\ud83d\udc96|\ud83d\udc97|\ud83d\udc98|\ud83d\udc99|\ud83d\udc9a|\ud83d\udc9b|\ud83d\udc9c|\ud83d\udc9d|\ud83d\udc9e|\ud83d\udc9f|\ud83d\udca0|\ud83d\udca1|\ud83d\udca2|\ud83d\udca3|\ud83d\udca4|\ud83d\udca5|\ud83d\udca6|\ud83d\udca7|\ud83d\udca8|\ud83d\udca9|\ud83d\udcaa|\ud83d\udcab|\ud83d\udcac|\ud83d\udcae|\ud83d\udcaf|\ud83d\udcb0|\ud83d\udcb1|\ud83d\udcb2|\ud83d\udcb3|\ud83d\udcb4|\ud83d\udcb5|\ud83d\udcb8|\ud83d\udcb9|\ud83d\udcba|\ud83d\udcbb|\ud83d\udcbc|\ud83d\udcbd|\ud83d\udcbe|\ud83d\udcbf|\ud83d\udcc0|\ud83d\udcc1|\ud83d\udcc2|\ud83d\udcc3|\ud83d\udcc4|\ud83d\udcc5|\ud83d\udcc6|\ud83d\udcc7|\ud83d\udcc8|\ud83d\udcc9|\ud83d\udcca|\ud83d\udccb|\ud83d\udccc|\ud83d\udccd|\ud83d\udcce|\ud83d\udccf|\ud83d\udcd0|\ud83d\udcd1|\ud83d\udcd2|\ud83d\udcd3|\ud83d\udcd4|\ud83d\udcd5|\ud83d\udcd6|\ud83d\udcd7|\ud83d\udcd8|\ud83d\udcd9|\ud83d\udcda|\ud83d\udcdb|\ud83d\udcdc|\ud83d\udcdd|\ud83d\udcde|\ud83d\udcdf|\ud83d\udce0|\ud83d\udce1|\ud83d\udce2|\ud83d\udce3|\ud83d\udce4|\ud83d\udce5|\ud83d\udce6|\ud83d\udce7|\ud83d\udce8|\ud83d\udce9|\ud83d\udcea|\ud83d\udceb|\ud83d\udcee|\ud83d\udcf0|\ud83d\udcf1|\ud83d\udcf2|\ud83d\udcf3|\ud83d\udcf4|\ud83d\udcf6|\ud83d\udcf7|\ud83d\udcf9|\ud83d\udcfa|\ud83d\udcfb|\ud83d\udcfc|\ud83d\udd03|\ud83d\udd0a|\ud83d\udd0b|\ud83d\udd0c|\ud83d\udd0d|\ud83d\udd0e|\ud83d\udd0f|\ud83d\udd10|\ud83d\udd11|\ud83d\udd12|\ud83d\udd13|\ud83d\udd14|\ud83d\udd16|\ud83d\udd17|\ud83d\udd18|\ud83d\udd19|\ud83d\udd1a|\ud83d\udd1b|\ud83d\udd1c|\ud83d\udd1d|\ud83d\udd1e|\ud83d\udd1f|\ud83d\udd20|\ud83d\udd21|\ud83d\udd22|\ud83d\udd23|\ud83d\udd24|\ud83d\udd25|\ud83d\udd26|\ud83d\udd27|\ud83d\udd28|\ud83d\udd29|\ud83d\udd2a|\ud83d\udd2b|\ud83d\udd2e|\ud83d\udd2f|\ud83d\udd30|\ud83d\udd31|\ud83d\udd32|\ud83d\udd33|\ud83d\udd34|\ud83d\udd35|\ud83d\udd36|\ud83d\udd37|\ud83d\udd38|\ud83d\udd39|\ud83d\udd3a|\ud83d\udd3b|\ud83d\udd3c|\ud83d\udd3d|\ud83d\udd50|\ud83d\udd51|\ud83d\udd52|\ud83d\udd53|\ud83d\udd54|\ud83d\udd55|\ud83d\udd56|\ud83d\udd57|\ud83d\udd58|\ud83d\udd59|\ud83d\udd5a|\ud83d\udd5b|\ud83d\uddfb|\ud83d\uddfc|\ud83d\uddfd|\ud83d\uddfe|\ud83d\uddff|\ud83d\ude01|\ud83d\ude02|\ud83d\ude03|\ud83d\ude04|\ud83d\ude05|\ud83d\ude06|\ud83d\ude09|\ud83d\ude0a|\ud83d\ude0b|\ud83d\ude0c|\ud83d\ude0d|\ud83d\ude0f|\ud83d\ude12|\ud83d\ude13|\ud83d\ude14|\ud83d\ude16|\ud83d\ude18|\ud83d\ude1a|\ud83d\ude1c|\ud83d\ude1d|\ud83d\ude1e|\ud83d\ude20|\ud83d\ude21|\ud83d\ude22|\ud83d\ude23|\ud83d\ude24|\ud83d\ude25|\ud83d\ude28|\ud83d\ude29|\ud83d\ude2a|\ud83d\ude2b|\ud83d\ude2d|\ud83d\ude30|\ud83d\ude31|\ud83d\ude32|\ud83d\ude33|\ud83d\ude35|\ud83d\ude37|\ud83d\ude38|\ud83d\ude39|\ud83d\ude3a|\ud83d\ude3b|\ud83d\ude3c|\ud83d\ude3d|\ud83d\ude3e|\ud83d\ude3f|\ud83d\ude40|\ud83d\ude45|\ud83d\ude46|\ud83d\ude47|\ud83d\ude48|\ud83d\ude49|\ud83d\ude4a|\ud83d\ude4b|\ud83d\ude4c|\ud83d\ude4d|\ud83d\ude4e|\ud83d\ude4f|\ud83d\ude80|\ud83d\ude83|\ud83d\ude84|\ud83d\ude85|\ud83d\ude87|\ud83d\ude89|\ud83d\ude8c|\ud83d\ude8f|\ud83d\ude91|\ud83d\ude92|\ud83d\ude93|\ud83d\ude95|\ud83d\ude97|\ud83d\ude99|\ud83d\ude9a|\ud83d\udea2|\ud83d\udea4|\ud83d\udea5|\ud83d\udea7|\ud83d\udea8|\ud83d\udea9|\ud83d\udeaa|\ud83d\udeab|\ud83d\udeac|\ud83d\udead|\ud83d\udeb2|\ud83d\udeb6|\ud83d\udeb9|\ud83d\udeba|\ud83d\udebb|\ud83d\udebc|\ud83d\udebd|\ud83d\udebe|\ud83d\udec0|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ue50a|\u3030|\u27b0|\u2797|\u2796|\u2795|\u2755|\u2754|\u2753|\u274e|\u274c|\u2728|\u270b|\u270a|\u2705|\u26ce|\u23f3|\u23f0|\u23ec|\u23eb|\u23ea|\u23e9|\u2122|\u27bf|\u00a9|\u00ae)|(?:(?:\ud83c\udc04|\ud83c\udd7f|\ud83c\ude1a|\ud83c\ude2f|\u3299|\u303d|\u2b55|\u2b50|\u2b1c|\u2b1b|\u2b07|\u2b06|\u2b05|\u2935|\u2934|\u27a1|\u2764|\u2757|\u2747|\u2744|\u2734|\u2733|\u2716|\u2714|\u2712|\u270f|\u270c|\u2709|\u2708|\u2702|\u26fd|\u26fa|\u26f5|\u26f3|\u26f2|\u26ea|\u26d4|\u26c5|\u26c4|\u26be|\u26bd|\u26ab|\u26aa|\u26a1|\u26a0|\u2693|\u267f|\u267b|\u3297|\u2666|\u2665|\u2663|\u2660|\u2653|\u2652|\u2651|\u2650|\u264f|\u264e|\u264d|\u264c|\u264b|\u264a|\u2649|\u2648|\u263a|\u261d|\u2615|\u2614|\u2611|\u260e|\u2601|\u2600|\u25fe|\u25fd|\u25fc|\u25fb|\u25c0|\u25b6|\u25ab|\u25aa|\u24c2|\u231b|\u231a|\u21aa|\u21a9|\u2199|\u2198|\u2197|\u2196|\u2195|\u2194|\u2139|\u2049|\u203c|\u2668|\ud83e\udd12|\ud83c\udf99|\ud83c\udfd5|\ud83c\udff8|\ud83d\udcf8|\ud83d\udd6f|\ud83d\udd8b|\ud83d\udda5|\ud83d\ude41|\ud83d\ude44|\ud83d\udecf|\ud83e\udd10|\ud83e\udd11|\ud83c\udfc5|\ud83e\udd13|\ud83e\udd14|\ud83e\udd15|\ud83e\udd17|\ud83e\udd18|\ud83e\udd1b|\ud83e\udd1c|\ud83e\udd1d|\ud83e\udd26|\ud83e\udd33|\ud83e\udd47|\ud83e\udd4b|\u26f1)([\uFE0E\uFE0F]?)))/g,
        transform: function(t, e) {
            var n = e[0]
              , r = e[1];
            return "︎" !== r ? (n = function(t, e) {
                return function(t) {
                    for (var e = [], n = 0, i = 0, r = 0; r < t.length; )
                        n = t.charCodeAt(r++),
                        i ? (e.push((65536 + (i - 55296 << 10) + (n - 56320)).toString(16)),
                        i = 0) : 55296 <= n && n <= 56319 ? i = n : e.push(n.toString(16));
                    return e.join("-")
                }("️" === e ? t.slice(0, -1) : 3 === t.length && "️" === t.charAt(1) ? t.charAt(0) + t.charAt(2) : t)
            }(n, r),
            {
                htmlTag: "img",
                selfClose: !0,
                attr: {
                    src: (0,
                    i.assetsResolve)("img/emoji/36x36/" + n + ".png"),
                    alt: t,
                    class: "emoji",
                    draggable: "false"
                }
            }) : t
        }
    };
    e.parse = function(t) {
        try {
            if ("string" == typeof t)
                return JSON.parse(t)
        } catch (t) {
            return {}
        }
        return t
    }
    ;
    var p = e.padLeft = function(t) {
        return t >= 10 ? t.toString() : "0" + t
    }
      , h = (e.formatTime = function(t) {
        if (void 0 === t)
            return "00:00:00";
        var e = Math.floor(t / 36e5)
          , n = Math.floor((t - 36e5 * e) / 6e4)
          , i = Math.floor((t - 36e5 * e - 6e4 * n) / 1e3);
        return p(e) + ":" + p(n) + ":" + p(i)
    }
    ,
    e.compareVersion = function(t, e, n) {
        if ("string" != typeof t || "string" != typeof e)
            return !1;
        for (var i, r, o = t.split("."), a = e.split("."); i === r && a.length > 0; )
            i = o.shift(),
            r = a.shift();
        return n ? (0 | r) >= (0 | i) : (0 | r) > (0 | i)
    }
    ,
    e.BSearchUpperBoundOfBarrage = function(t, e) {
        var n = 0
          , i = t.length - 1;
        if (n > i || e <= t[i].time)
            return -1;
        for (var r = Math.floor((n + i) / 2); i > n; )
            t[r].time < e ? i = r : n = r + 1,
            r = Math.floor((n + i) / 2);
        return r
    }
    ,
    e.toast = function(t, e) {
        dingtalk && dingtalk.window && dingtalk.window.toast && dingtalk.window.toast({
            SUCCESS: 0,
            INFO: 1,
            ERROR: 2
        }[t], e || "")
    }
    ,
    e.boolValueForModuleKey = function(t, e) {
        return new Promise(function(n, i) {
            (0,
            o.default)("INFO", "[boolValueForModuleKey start][module]" + t + "[key]" + e),
            dingtalk && dingtalk.graySwitchLemon && dingtalk.graySwitchLemon.boolValueForModuleKey ? dingtalk.graySwitchLemon.boolValueForModuleKey(t, e, function(r, a) {
                r ? (i(!1),
                (0,
                o.default)("INFO", "[boolValueForModuleKey fail][module]" + t + "[key]" + e + "[value]false")) : (n(a),
                (0,
                o.default)("INFO", "[boolValueForModuleKey success][module]" + t + "[key]" + e + "[value]" + a))
            }) : (n(!1),
            (0,
            o.default)("INFO", "[boolValueForModuleKey fail][module]" + t + "[key]" + e + "[value]false[error]dingtalk undefined"))
        }
        )
    }
    ,
    e.isEducationConv = function(t) {
        return "education" === (0,
        r.default)(t, "extension.groupTagConfig")
    }
    )
      , v = e.getBaseConversation = function(t) {
        return new Promise(function(e, n) {
            dingtalk && dingtalk.conversation && dingtalk.conversation.getBaseConversation ? dingtalk.conversation.getBaseConversation(t, function(t, i) {
                t ? n(t) : e(i)
            }) : n()
        }
        )
    }
    ;
    e.checkIsClassGroup = function(t) {
        return new Promise(function(e, n) {
            v(t).then(function(t) {
                e(h(t))
            }, function(t) {
                e(!1)
            })
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n, i) {
            var r = t.call(this) || this;
            return r.parent = e,
            r.outerValue = n,
            r.outerIndex = i,
            r.index = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
        }
        ,
        e.prototype._error = function(t) {
            this.parent.notifyError(t, this),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.parent.notifyComplete(this),
            this.unsubscribe()
        }
        ,
        e
    }(n(1).a)
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        function n(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
        }
        function i(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }
        function r(t, e) {
            for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++)
                n[i[r]] = !0;
            return e ? function(t) {
                return n[t.toLowerCase()]
            }
            : function(t) {
                return n[t]
            }
        }
        var o = r("slot,component", !0);
        function a(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1)
                    return t.splice(n, 1)
            }
        }
        var s = Object.prototype.hasOwnProperty;
        function u(t, e) {
            return s.call(t, e)
        }
        function c(t) {
            return "string" == typeof t || "number" == typeof t
        }
        function l(t) {
            var e = Object.create(null);
            return function(n) {
                return e[n] || (e[n] = t(n))
            }
        }
        var d = /-(\w)/g
          , f = l(function(t) {
            return t.replace(d, function(t, e) {
                return e ? e.toUpperCase() : ""
            })
        })
          , p = l(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        })
          , h = /([^-])([A-Z])/g
          , v = l(function(t) {
            return t.replace(h, "$1-$2").replace(h, "$1-$2").toLowerCase()
        });
        function g(t, e) {
            function n(n) {
                var i = arguments.length;
                return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }
            return n._length = t.length,
            n
        }
        function _(t, e) {
            e = e || 0;
            for (var n = t.length - e, i = new Array(n); n--; )
                i[n] = t[n + e];
            return i
        }
        function m(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }
        function b(t) {
            return null !== t && "object" == typeof t
        }
        var y = Object.prototype.toString
          , w = "[object Object]";
        function x(t) {
            return y.call(t) === w
        }
        function k(t) {
            for (var e = {}, n = 0; n < t.length; n++)
                t[n] && m(e, t[n]);
            return e
        }
        function O() {}
        var E = function() {
            return !1
        }
          , S = function(t) {
            return t
        };
        function C(t, e) {
            var n = b(t)
              , i = b(e);
            return n && i ? JSON.stringify(t) === JSON.stringify(e) : !n && !i && String(t) === String(e)
        }
        function T(t, e) {
            for (var n = 0; n < t.length; n++)
                if (C(t[n], e))
                    return n;
            return -1
        }
        var j = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            devtools: !1,
            errorHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: E,
            isUnknownElement: E,
            getTagNamespace: O,
            parsePlatformTagName: S,
            mustUseProp: E,
            _assetTypes: ["component", "directive", "filter"],
            _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
            _maxUpdateCount: 100
        };
        function L(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
        }
        function P(t, e, n, i) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!i,
                writable: !0,
                configurable: !0
            })
        }
        var A = /[^\w.$]/;
        function I(t) {
            if (!A.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t)
                            return;
                        t = t[e[n]]
                    }
                    return t
                }
            }
        }
        var N, R = "__proto__"in {}, M = "undefined" != typeof window, V = M && window.navigator.userAgent.toLowerCase(), D = V && /msie|trident/.test(V), X = V && V.indexOf("msie 9.0") > 0, U = V && V.indexOf("edge/") > 0, B = V && V.indexOf("android") > 0, F = V && /iphone|ipad|ipod|ios/.test(V), W = function() {
            return void 0 === N && (N = !M && void 0 !== e && "server" === e.process.env.VUE_ENV),
            N
        }, H = M && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function $(t) {
            return /native code/.test(t.toString())
        }
        var z, Y = function() {
            var t, e = [], n = !1;
            function i() {
                n = !1;
                var t = e.slice(0);
                e.length = 0;
                for (var i = 0; i < t.length; i++)
                    t[i]()
            }
            if ("undefined" != typeof Promise && $(Promise)) {
                var r = Promise.resolve()
                  , o = function(t) {
                    console.error(t)
                };
                t = function() {
                    r.then(i).catch(o),
                    F && setTimeout(O)
                }
            } else if ("undefined" == typeof MutationObserver || !$(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
                t = function() {
                    setTimeout(i, 0)
                }
                ;
            else {
                var a = 1
                  , s = new MutationObserver(i)
                  , u = document.createTextNode(String(a));
                s.observe(u, {
                    characterData: !0
                }),
                t = function() {
                    a = (a + 1) % 2,
                    u.data = String(a)
                }
            }
            return function(i, r) {
                var o;
                if (e.push(function() {
                    i && i.call(r),
                    o && o(r)
                }),
                n || (n = !0,
                t()),
                !i && "undefined" != typeof Promise)
                    return new Promise(function(t) {
                        o = t
                    }
                    )
            }
        }();
        z = "undefined" != typeof Set && $(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t]
            }
            ,
            t.prototype.add = function(t) {
                this.set[t] = !0
            }
            ,
            t.prototype.clear = function() {
                this.set = Object.create(null)
            }
            ,
            t
        }();
        var G, K = O, q = 0, J = function() {
            this.id = q++,
            this.subs = []
        };
        J.prototype.addSub = function(t) {
            this.subs.push(t)
        }
        ,
        J.prototype.removeSub = function(t) {
            a(this.subs, t)
        }
        ,
        J.prototype.depend = function() {
            J.target && J.target.addDep(this)
        }
        ,
        J.prototype.notify = function() {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
                t[e].update()
        }
        ,
        J.target = null;
        var Q = [];
        var Z = Array.prototype
          , tt = Object.create(Z);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = Z[t];
            P(tt, t, function() {
                for (var n = arguments, i = arguments.length, r = new Array(i); i--; )
                    r[i] = n[i];
                var o, a = e.apply(this, r), s = this.__ob__;
                switch (t) {
                case "push":
                case "unshift":
                    o = r;
                    break;
                case "splice":
                    o = r.slice(2)
                }
                return o && s.observeArray(o),
                s.dep.notify(),
                a
            })
        });
        var et = Object.getOwnPropertyNames(tt)
          , nt = {
            shouldConvert: !0,
            isSettingProps: !1
        }
          , it = function(t) {
            (this.value = t,
            this.dep = new J,
            this.vmCount = 0,
            P(t, "__ob__", this),
            Array.isArray(t)) ? ((R ? rt : ot)(t, tt, et),
            this.observeArray(t)) : this.walk(t)
        };
        function rt(t, e) {
            t.__proto__ = e
        }
        function ot(t, e, n) {
            for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                P(t, o, e[o])
            }
        }
        function at(t, e) {
            var n;
            if (b(t))
                return u(t, "__ob__") && t.__ob__ instanceof it ? n = t.__ob__ : nt.shouldConvert && !W() && (Array.isArray(t) || x(t)) && Object.isExtensible(t) && !t._isVue && (n = new it(t)),
                e && n && n.vmCount++,
                n
        }
        function st(t, e, n, i) {
            var r = new J
              , o = Object.getOwnPropertyDescriptor(t, e);
            if (!o || !1 !== o.configurable) {
                var a = o && o.get
                  , s = o && o.set
                  , u = at(n);
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var e = a ? a.call(t) : n;
                        return J.target && (r.depend(),
                        u && u.dep.depend(),
                        Array.isArray(e) && function t(e) {
                            for (var n = void 0, i = 0, r = e.length; i < r; i++)
                                (n = e[i]) && n.__ob__ && n.__ob__.dep.depend(),
                                Array.isArray(n) && t(n)
                        }(e)),
                        e
                    },
                    set: function(e) {
                        var i = a ? a.call(t) : n;
                        e === i || e != e && i != i || (s ? s.call(t, e) : n = e,
                        u = at(e),
                        r.notify())
                    }
                })
            }
        }
        function ut(t, e, n) {
            if (Array.isArray(t))
                return t.length = Math.max(t.length, e),
                t.splice(e, 1, n),
                n;
            if (u(t, e))
                t[e] = n;
            else {
                var i = t.__ob__;
                if (!(t._isVue || i && i.vmCount)) {
                    if (i)
                        return st(i.value, e, n),
                        i.dep.notify(),
                        n;
                    t[e] = n
                }
            }
        }
        function ct(t, e) {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || u(t, e) && (delete t[e],
            n && n.dep.notify())
        }
        it.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++)
                st(t, e[n], t[e[n]])
        }
        ,
        it.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++)
                at(t[e])
        }
        ;
        var lt = j.optionMergeStrategies;
        function dt(t, e) {
            if (!e)
                return t;
            for (var n, i, r, o = Object.keys(e), a = 0; a < o.length; a++)
                i = t[n = o[a]],
                r = e[n],
                u(t, n) ? x(i) && x(r) && dt(i, r) : ut(t, n, r);
            return t
        }
        function ft(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
        }
        function pt(t, e) {
            var n = Object.create(t || null);
            return e ? m(n, e) : n
        }
        lt.data = function(t, e, n) {
            return n ? t || e ? function() {
                var i = "function" == typeof e ? e.call(n) : e
                  , r = "function" == typeof t ? t.call(n) : void 0;
                return i ? dt(i, r) : r
            }
            : void 0 : e ? "function" != typeof e ? t : t ? function() {
                return dt(e.call(this), t.call(this))
            }
            : e : t
        }
        ,
        j._lifecycleHooks.forEach(function(t) {
            lt[t] = ft
        }),
        j._assetTypes.forEach(function(t) {
            lt[t + "s"] = pt
        }),
        lt.watch = function(t, e) {
            if (!e)
                return t;
            if (!t)
                return e;
            var n = {};
            for (var i in m(n, t),
            e) {
                var r = n[i]
                  , o = e[i];
                r && !Array.isArray(r) && (r = [r]),
                n[i] = r ? r.concat(o) : [o]
            }
            return n
        }
        ,
        lt.props = lt.methods = lt.computed = function(t, e) {
            if (!e)
                return t;
            if (!t)
                return e;
            var n = Object.create(null);
            return m(n, t),
            m(n, e),
            n
        }
        ;
        var ht = function(t, e) {
            return void 0 === e ? t : e
        };
        function vt(t, e, n) {
            (function(t) {
                var e = t.props;
                if (e) {
                    var n, i, r = {};
                    if (Array.isArray(e))
                        for (n = e.length; n--; )
                            "string" == typeof (i = e[n]) && (r[f(i)] = {
                                type: null
                            });
                    else if (x(e))
                        for (var o in e)
                            i = e[o],
                            r[f(o)] = x(i) ? i : {
                                type: i
                            };
                    t.props = r
                }
            }
            )(e),
            function(t) {
                var e = t.directives;
                if (e)
                    for (var n in e) {
                        var i = e[n];
                        "function" == typeof i && (e[n] = {
                            bind: i,
                            update: i
                        })
                    }
            }(e);
            var i = e.extends;
            if (i && (t = vt(t, "function" == typeof i ? i.options : i, n)),
            e.mixins)
                for (var r = 0, o = e.mixins.length; r < o; r++) {
                    var a = e.mixins[r];
                    a.prototype instanceof de && (a = a.options),
                    t = vt(t, a, n)
                }
            var s, c = {};
            for (s in t)
                l(s);
            for (s in e)
                u(t, s) || l(s);
            function l(i) {
                var r = lt[i] || ht;
                c[i] = r(t[i], e[i], n, i)
            }
            return c
        }
        function gt(t, e, n, i) {
            if ("string" == typeof n) {
                var r = t[e];
                if (u(r, n))
                    return r[n];
                var o = f(n);
                if (u(r, o))
                    return r[o];
                var a = p(o);
                return u(r, a) ? r[a] : r[n] || r[o] || r[a]
            }
        }
        function _t(t, e, n, i) {
            var r = e[t]
              , o = !u(n, t)
              , a = n[t];
            if (bt(Boolean, r.type) && (o && !u(r, "default") ? a = !1 : bt(String, r.type) || "" !== a && a !== v(t) || (a = !0)),
            void 0 === a) {
                a = function(t, e, n) {
                    if (!u(e, "default"))
                        return;
                    var i = e.default;
                    b(i);
                    if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t[n])
                        return t[n];
                    return "function" == typeof i && e.type !== Function ? i.call(t) : i
                }(i, r, t);
                var s = nt.shouldConvert;
                nt.shouldConvert = !0,
                at(a),
                nt.shouldConvert = s
            }
            return a
        }
        function mt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e && e[1]
        }
        function bt(t, e) {
            if (!Array.isArray(e))
                return mt(e) === mt(t);
            for (var n = 0, i = e.length; n < i; n++)
                if (mt(e[n]) === mt(t))
                    return !0;
            return !1
        }
        var yt = Object.freeze({
            defineReactive: st,
            _toString: n,
            toNumber: i,
            makeMap: r,
            isBuiltInTag: o,
            remove: a,
            hasOwn: u,
            isPrimitive: c,
            cached: l,
            camelize: f,
            capitalize: p,
            hyphenate: v,
            bind: g,
            toArray: _,
            extend: m,
            isObject: b,
            isPlainObject: x,
            toObject: k,
            noop: O,
            no: E,
            identity: S,
            genStaticKeys: function(t) {
                return t.reduce(function(t, e) {
                    return t.concat(e.staticKeys || [])
                }, []).join(",")
            },
            looseEqual: C,
            looseIndexOf: T,
            isReserved: L,
            def: P,
            parsePath: I,
            hasProto: R,
            inBrowser: M,
            UA: V,
            isIE: D,
            isIE9: X,
            isEdge: U,
            isAndroid: B,
            isIOS: F,
            isServerRendering: W,
            devtools: H,
            nextTick: Y,
            get _Set() {
                return z
            },
            mergeOptions: vt,
            resolveAsset: gt,
            get warn() {
                return K
            },
            get formatComponentName() {
                return G
            },
            validateProp: _t
        })
          , wt = function(t, e, n, i, r, o, a) {
            this.tag = t,
            this.data = e,
            this.children = n,
            this.text = i,
            this.elm = r,
            this.ns = void 0,
            this.context = o,
            this.functionalContext = void 0,
            this.key = e && e.key,
            this.componentOptions = a,
            this.componentInstance = void 0,
            this.parent = void 0,
            this.raw = !1,
            this.isStatic = !1,
            this.isRootInsert = !0,
            this.isComment = !1,
            this.isCloned = !1,
            this.isOnce = !1
        }
          , xt = {
            child: {}
        };
        xt.child.get = function() {
            return this.componentInstance
        }
        ,
        Object.defineProperties(wt.prototype, xt);
        var kt = function() {
            var t = new wt;
            return t.text = "",
            t.isComment = !0,
            t
        };
        function Ot(t) {
            return new wt(void 0,void 0,void 0,String(t))
        }
        function Et(t) {
            var e = new wt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);
            return e.ns = t.ns,
            e.isStatic = t.isStatic,
            e.key = t.key,
            e.isCloned = !0,
            e
        }
        function St(t) {
            for (var e = new Array(t.length), n = 0; n < t.length; n++)
                e[n] = Et(t[n]);
            return e
        }
        var Ct = {
            init: function(t, e, n, i) {
                if (!t.componentInstance || t.componentInstance._isDestroyed) {
                    var r = t.componentInstance = function(t, e, n, i) {
                        var r = t.componentOptions
                          , o = {
                            _isComponent: !0,
                            parent: e,
                            propsData: r.propsData,
                            _componentTag: r.tag,
                            _parentVnode: t,
                            _parentListeners: r.listeners,
                            _renderChildren: r.children,
                            _parentElm: n || null,
                            _refElm: i || null
                        }
                          , a = t.data.inlineTemplate;
                        a && (o.render = a.render,
                        o.staticRenderFns = a.staticRenderFns);
                        return new r.Ctor(o)
                    }(t, Yt, n, i);
                    r.$mount(e ? t.elm : void 0, e)
                } else if (t.data.keepAlive) {
                    var o = t;
                    Lt(o, o)
                }
            },
            prepatch: Lt,
            insert: function(t) {
                t.componentInstance._isMounted || (t.componentInstance._isMounted = !0,
                Gt(t.componentInstance, "mounted"));
                t.data.keepAlive && (t.componentInstance._inactive = !1,
                Gt(t.componentInstance, "activated"))
            },
            destroy: function(t) {
                t.componentInstance._isDestroyed || (t.data.keepAlive ? (t.componentInstance._inactive = !0,
                Gt(t.componentInstance, "deactivated")) : t.componentInstance.$destroy())
            }
        }
          , Tt = Object.keys(Ct);
        function jt(t, e, n, i, r) {
            if (t) {
                var o = n.$options._base;
                if (b(t) && (t = o.extend(t)),
                "function" == typeof t) {
                    if (!t.cid)
                        if (t.resolved)
                            t = t.resolved;
                        else if (!(t = function(t, e, n) {
                            if (!t.requested) {
                                t.requested = !0;
                                var i = t.pendingCallbacks = [n]
                                  , r = !0
                                  , o = function(n) {
                                    if (b(n) && (n = e.extend(n)),
                                    t.resolved = n,
                                    !r)
                                        for (var o = 0, a = i.length; o < a; o++)
                                            i[o](n)
                                }
                                  , a = function(t) {}
                                  , s = t(o, a);
                                return s && "function" == typeof s.then && !t.resolved && s.then(o, a),
                                r = !1,
                                t.resolved
                            }
                            t.pendingCallbacks.push(n)
                        }(t, o, function() {
                            n.$forceUpdate()
                        })))
                            return;
                    le(t);
                    var a = function(t, e) {
                        var n = e.options.props;
                        if (!n)
                            return;
                        var i = {}
                          , r = t.attrs
                          , o = t.props
                          , a = t.domProps;
                        if (r || o || a)
                            for (var s in n) {
                                var u = v(s);
                                Pt(i, o, s, u, !0) || Pt(i, r, s, u) || Pt(i, a, s, u)
                            }
                        return i
                    }(e = e || {}, t);
                    if (t.options.functional)
                        return function(t, e, n, i, r) {
                            var o = {}
                              , a = t.options.props;
                            if (a)
                                for (var s in a)
                                    o[s] = _t(s, a, e);
                            var u = Object.create(i)
                              , c = t.options.render.call(null, function(t, e, n, i) {
                                return Ft(u, t, e, n, i, !0)
                            }, {
                                props: o,
                                data: n,
                                parent: i,
                                children: r,
                                slots: function() {
                                    return Wt(r, i)
                                }
                            });
                            c instanceof wt && (c.functionalContext = i,
                            n.slot && ((c.data || (c.data = {})).slot = n.slot));
                            return c
                        }(t, a, e, n, i);
                    var s = e.on;
                    e.on = e.nativeOn,
                    t.options.abstract && (e = {}),
                    function(t) {
                        t.hook || (t.hook = {});
                        for (var e = 0; e < Tt.length; e++) {
                            var n = Tt[e]
                              , i = t.hook[n]
                              , r = Ct[n];
                            t.hook[n] = i ? At(r, i) : r
                        }
                    }(e);
                    var u = t.options.name || r;
                    return new wt("vue-component-" + t.cid + (u ? "-" + u : ""),e,void 0,void 0,void 0,n,{
                        Ctor: t,
                        propsData: a,
                        listeners: s,
                        tag: r,
                        children: i
                    })
                }
            }
        }
        function Lt(t, e) {
            var n = e.componentOptions;
            (e.componentInstance = t.componentInstance)._updateFromParent(n.propsData, n.listeners, e, n.children)
        }
        function Pt(t, e, n, i, r) {
            if (e) {
                if (u(e, n))
                    return t[n] = e[n],
                    r || delete e[n],
                    !0;
                if (u(e, i))
                    return t[n] = e[i],
                    r || delete e[i],
                    !0
            }
            return !1
        }
        function At(t, e) {
            return function(n, i, r, o) {
                t(n, i, r, o),
                e(n, i, r, o)
            }
        }
        function It(t, e, n, i) {
            i += e;
            var r = t.__injected || (t.__injected = {});
            if (!r[i]) {
                r[i] = !0;
                var o = t[e];
                t[e] = o ? function() {
                    o.apply(this, arguments),
                    n.apply(this, arguments)
                }
                : n
            }
        }
        var Nt = l(function(t) {
            var e = "~" === t.charAt(0)
              , n = "!" === (t = e ? t.slice(1) : t).charAt(0);
            return {
                name: t = n ? t.slice(1) : t,
                once: e,
                capture: n
            }
        });
        function Rt(t) {
            var e = {
                fn: t,
                invoker: function() {
                    var t = arguments
                      , n = e.fn;
                    if (Array.isArray(n))
                        for (var i = 0; i < n.length; i++)
                            n[i].apply(null, t);
                    else
                        n.apply(null, arguments)
                }
            };
            return e
        }
        function Mt(t, e, n, i, r) {
            var o, a, s, u;
            for (o in t)
                a = t[o],
                s = e[o],
                u = Nt(o),
                a && (s ? a !== s && (s.fn = a,
                t[o] = s) : (a.invoker || (a = t[o] = Rt(a)),
                n(u.name, a.invoker, u.once, u.capture)));
            for (o in e)
                t[o] || i((u = Nt(o)).name, e[o].invoker, u.capture)
        }
        function Vt(t) {
            return c(t) ? [Ot(t)] : Array.isArray(t) ? function t(e, n) {
                var i = [];
                var r, o, a;
                for (r = 0; r < e.length; r++)
                    null != (o = e[r]) && "boolean" != typeof o && (a = i[i.length - 1],
                    Array.isArray(o) ? i.push.apply(i, t(o, (n || "") + "_" + r)) : c(o) ? a && a.text ? a.text += String(o) : "" !== o && i.push(Ot(o)) : o.text && a && a.text ? i[i.length - 1] = Ot(a.text + o.text) : (o.tag && null == o.key && null != n && (o.key = "__vlist" + n + "_" + r + "__"),
                    i.push(o)));
                return i
            }(t) : void 0
        }
        function Dt(t) {
            return t && t.filter(function(t) {
                return t && t.componentOptions
            })[0]
        }
        var Xt, Ut = 1, Bt = 2;
        function Ft(t, e, n, i, r, o) {
            return (Array.isArray(n) || c(n)) && (r = i,
            i = n,
            n = void 0),
            o && (r = Bt),
            function(t, e, n, i, r) {
                if (n && n.__ob__)
                    return kt();
                if (!e)
                    return kt();
                Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
                    default: i[0]
                },
                i.length = 0);
                r === Bt ? i = Vt(i) : r === Ut && (i = function(t) {
                    for (var e = 0; e < t.length; e++)
                        if (Array.isArray(t[e]))
                            return Array.prototype.concat.apply([], t);
                    return t
                }(i));
                var o, a;
                if ("string" == typeof e) {
                    var s;
                    a = j.getTagNamespace(e),
                    o = j.isReservedTag(e) ? new wt(j.parsePlatformTagName(e),n,i,void 0,void 0,t) : (s = gt(t.$options, "components", e)) ? jt(s, n, t, i, e) : new wt(e,n,i,void 0,void 0,t)
                } else
                    o = jt(e, n, t, i);
                return o ? (a && function t(e, n) {
                    e.ns = n;
                    if ("foreignObject" === e.tag)
                        return;
                    if (e.children)
                        for (var i = 0, r = e.children.length; i < r; i++) {
                            var o = e.children[i];
                            o.tag && !o.ns && t(o, n)
                        }
                }(o, a),
                o) : kt()
            }(t, e, n, i, r)
        }
        function Wt(t, e) {
            var n = {};
            if (!t)
                return n;
            for (var i, r, o = [], a = 0, s = t.length; a < s; a++)
                if (((r = t[a]).context === e || r.functionalContext === e) && r.data && (i = r.data.slot)) {
                    var u = n[i] || (n[i] = []);
                    "template" === r.tag ? u.push.apply(u, r.children) : u.push(r)
                } else
                    o.push(r);
            return o.length && (1 !== o.length || " " !== o[0].text && !o[0].isComment) && (n.default = o),
            n
        }
        function Ht(t, e, n) {
            n ? Xt.$once(t, e) : Xt.$on(t, e)
        }
        function $t(t, e) {
            Xt.$off(t, e)
        }
        function zt(t, e, n) {
            Xt = t,
            Mt(e, n || {}, Ht, $t)
        }
        var Yt = null;
        function Gt(t, e) {
            var n = t.$options[e];
            if (n)
                for (var i = 0, r = n.length; i < r; i++)
                    n[i].call(t);
            t._hasHookEvent && t.$emit("hook:" + e)
        }
        var Kt = []
          , qt = {}
          , Jt = !1
          , Qt = !1
          , Zt = 0;
        function te() {
            var t, e, n;
            for (Qt = !0,
            Kt.sort(function(t, e) {
                return t.id - e.id
            }),
            Zt = 0; Zt < Kt.length; Zt++)
                e = (t = Kt[Zt]).id,
                qt[e] = null,
                t.run();
            for (Zt = Kt.length; Zt--; )
                (n = (t = Kt[Zt]).vm)._watcher === t && n._isMounted && Gt(n, "updated");
            H && j.devtools && H.emit("flush"),
            Kt.length = 0,
            qt = {},
            Jt = Qt = !1
        }
        var ee = 0
          , ne = function(t, e, n, i) {
            this.vm = t,
            t._watchers.push(this),
            i ? (this.deep = !!i.deep,
            this.user = !!i.user,
            this.lazy = !!i.lazy,
            this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1,
            this.cb = n,
            this.id = ++ee,
            this.active = !0,
            this.dirty = this.lazy,
            this.deps = [],
            this.newDeps = [],
            this.depIds = new z,
            this.newDepIds = new z,
            this.expression = "",
            "function" == typeof e ? this.getter = e : (this.getter = I(e),
            this.getter || (this.getter = function() {}
            )),
            this.value = this.lazy ? void 0 : this.get()
        };
        ne.prototype.get = function() {
            var t;
            t = this,
            J.target && Q.push(J.target),
            J.target = t;
            var e, n = this.getter.call(this.vm, this.vm);
            return this.deep && (e = n,
            ie.clear(),
            function t(e, n) {
                var i, r, o = Array.isArray(e);
                if ((o || b(e)) && Object.isExtensible(e)) {
                    if (e.__ob__) {
                        var a = e.__ob__.dep.id;
                        if (n.has(a))
                            return;
                        n.add(a)
                    }
                    if (o)
                        for (i = e.length; i--; )
                            t(e[i], n);
                    else
                        for (r = Object.keys(e),
                        i = r.length; i--; )
                            t(e[r[i]], n)
                }
            }(e, ie)),
            J.target = Q.pop(),
            this.cleanupDeps(),
            n
        }
        ,
        ne.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e),
            this.newDeps.push(t),
            this.depIds.has(e) || t.addSub(this))
        }
        ,
        ne.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--; ) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds,
            this.newDepIds = n,
            this.newDepIds.clear(),
            n = this.deps,
            this.deps = this.newDeps,
            this.newDeps = n,
            this.newDeps.length = 0
        }
        ,
        ne.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                var e = t.id;
                if (null == qt[e]) {
                    if (qt[e] = !0,
                    Qt) {
                        for (var n = Kt.length - 1; n >= 0 && Kt[n].id > t.id; )
                            n--;
                        Kt.splice(Math.max(n, Zt) + 1, 0, t)
                    } else
                        Kt.push(t);
                    Jt || (Jt = !0,
                    Y(te))
                }
            }(this)
        }
        ,
        ne.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || b(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t,
                    this.user)
                        try {
                            this.cb.call(this.vm, t, e)
                        } catch (t) {
                            if (!j.errorHandler)
                                throw t;
                            j.errorHandler.call(null, t, this.vm)
                        }
                    else
                        this.cb.call(this.vm, t, e)
                }
            }
        }
        ,
        ne.prototype.evaluate = function() {
            this.value = this.get(),
            this.dirty = !1
        }
        ,
        ne.prototype.depend = function() {
            for (var t = this.deps.length; t--; )
                this.deps[t].depend()
        }
        ,
        ne.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || a(this.vm._watchers, this);
                for (var t = this.deps.length; t--; )
                    this.deps[t].removeSub(this);
                this.active = !1
            }
        }
        ;
        var ie = new z;
        function re(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && function(t, e) {
                var n = t.$options.propsData || {}
                  , i = t.$options._propKeys = Object.keys(e)
                  , r = !t.$parent;
                nt.shouldConvert = r;
                for (var o = function(r) {
                    var o = i[r];
                    st(t, o, _t(o, e, n, t))
                }, a = 0; a < i.length; a++)
                    o(a);
                nt.shouldConvert = !0
            }(t, e.props),
            e.methods && function(t, e) {
                for (var n in e)
                    t[n] = null == e[n] ? O : g(e[n], t)
            }(t, e.methods),
            e.data ? function(t) {
                var e = t.$options.data;
                x(e = t._data = "function" == typeof e ? e.call(t) : e || {}) || (e = {});
                var n = Object.keys(e)
                  , i = t.$options.props
                  , r = n.length;
                for (; r--; )
                    i && u(i, n[r]) || ue(t, n[r]);
                at(e, !0)
            }(t) : at(t._data = {}, !0),
            e.computed && function(t, e) {
                for (var n in e) {
                    0;
                    var i = e[n];
                    "function" == typeof i ? (oe.get = ae(i, t),
                    oe.set = O) : (oe.get = i.get ? !1 !== i.cache ? ae(i.get, t) : g(i.get, t) : O,
                    oe.set = i.set ? g(i.set, t) : O),
                    Object.defineProperty(t, n, oe)
                }
            }(t, e.computed),
            e.watch && function(t, e) {
                for (var n in e) {
                    var i = e[n];
                    if (Array.isArray(i))
                        for (var r = 0; r < i.length; r++)
                            se(t, n, i[r]);
                    else
                        se(t, n, i)
                }
            }(t, e.watch)
        }
        var oe = {
            enumerable: !0,
            configurable: !0,
            get: O,
            set: O
        };
        function ae(t, e) {
            var n = new ne(e,t,O,{
                lazy: !0
            });
            return function() {
                return n.dirty && n.evaluate(),
                J.target && n.depend(),
                n.value
            }
        }
        function se(t, e, n) {
            var i;
            x(n) && (i = n,
            n = n.handler),
            "string" == typeof n && (n = t[n]),
            t.$watch(e, n, i)
        }
        function ue(t, e) {
            L(e) || Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return t._data[e]
                },
                set: function(n) {
                    t._data[e] = n
                }
            })
        }
        var ce = 0;
        function le(t) {
            var e = t.options;
            if (t.super) {
                var n = t.super.options
                  , i = t.superOptions
                  , r = t.extendOptions;
                n !== i && (t.superOptions = n,
                r.render = e.render,
                r.staticRenderFns = e.staticRenderFns,
                r._scopeId = e._scopeId,
                (e = t.options = vt(n, r)).name && (e.components[e.name] = t))
            }
            return e
        }
        function de(t) {
            this._init(t)
        }
        de.prototype._init = function(t) {
            var e = this;
            e._uid = ce++,
            e._isVue = !0,
            t && t._isComponent ? function(t, e) {
                var n = t.$options = Object.create(t.constructor.options);
                n.parent = e.parent,
                n.propsData = e.propsData,
                n._parentVnode = e._parentVnode,
                n._parentListeners = e._parentListeners,
                n._renderChildren = e._renderChildren,
                n._componentTag = e._componentTag,
                n._parentElm = e._parentElm,
                n._refElm = e._refElm,
                e.render && (n.render = e.render,
                n.staticRenderFns = e.staticRenderFns)
            }(e, t) : e.$options = vt(le(e.constructor), t || {}, e),
            e._renderProxy = e,
            e._self = e,
            function(t) {
                var e = t.$options
                  , n = e.parent;
                if (n && !e.abstract) {
                    for (; n.$options.abstract && n.$parent; )
                        n = n.$parent;
                    n.$children.push(t)
                }
                t.$parent = n,
                t.$root = n ? n.$root : t,
                t.$children = [],
                t.$refs = {},
                t._watcher = null,
                t._inactive = !1,
                t._isMounted = !1,
                t._isDestroyed = !1,
                t._isBeingDestroyed = !1
            }(e),
            function(t) {
                t._events = Object.create(null),
                t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && zt(t, e)
            }(e),
            function(t) {
                t.$vnode = null,
                t._vnode = null,
                t._staticTrees = null;
                var e = t.$options._parentVnode
                  , n = e && e.context;
                t.$slots = Wt(t.$options._renderChildren, n),
                t.$scopedSlots = {},
                t._c = function(e, n, i, r) {
                    return Ft(t, e, n, i, r, !1)
                }
                ,
                t.$createElement = function(e, n, i, r) {
                    return Ft(t, e, n, i, r, !0)
                }
            }(e),
            Gt(e, "beforeCreate"),
            re(e),
            Gt(e, "created"),
            e.$options.el && e.$mount(e.$options.el)
        }
        ,
        function(t) {
            var e = {
                get: function() {
                    return this._data
                }
            };
            Object.defineProperty(t.prototype, "$data", e),
            t.prototype.$set = ut,
            t.prototype.$delete = ct,
            t.prototype.$watch = function(t, e, n) {
                (n = n || {}).user = !0;
                var i = new ne(this,t,e,n);
                return n.immediate && e.call(this, i.value),
                function() {
                    i.teardown()
                }
            }
        }(de),
        function(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                return (this._events[t] || (this._events[t] = [])).push(n),
                e.test(t) && (this._hasHookEvent = !0),
                this
            }
            ,
            t.prototype.$once = function(t, e) {
                var n = this;
                function i() {
                    n.$off(t, i),
                    e.apply(n, arguments)
                }
                return i.fn = e,
                n.$on(t, i),
                n
            }
            ,
            t.prototype.$off = function(t, e) {
                var n = this;
                if (!arguments.length)
                    return n._events = Object.create(null),
                    n;
                var i, r = n._events[t];
                if (!r)
                    return n;
                if (1 === arguments.length)
                    return n._events[t] = null,
                    n;
                for (var o = r.length; o--; )
                    if ((i = r[o]) === e || i.fn === e) {
                        r.splice(o, 1);
                        break
                    }
                return n
            }
            ,
            t.prototype.$emit = function(t) {
                var e = this._events[t];
                if (e) {
                    e = e.length > 1 ? _(e) : e;
                    for (var n = _(arguments, 1), i = 0, r = e.length; i < r; i++)
                        e[i].apply(this, n)
                }
                return this
            }
        }(de),
        function(t) {
            t.prototype._mount = function(t, e) {
                var n = this;
                return n.$el = t,
                n.$options.render || (n.$options.render = kt),
                Gt(n, "beforeMount"),
                n._watcher = new ne(n,function() {
                    n._update(n._render(), e)
                }
                ,O),
                e = !1,
                null == n.$vnode && (n._isMounted = !0,
                Gt(n, "mounted")),
                n
            }
            ,
            t.prototype._update = function(t, e) {
                var n = this;
                n._isMounted && Gt(n, "beforeUpdate");
                var i = n.$el
                  , r = n._vnode
                  , o = Yt;
                Yt = n,
                n._vnode = t,
                n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm),
                Yt = o,
                i && (i.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }
            ,
            t.prototype._updateFromParent = function(t, e, n, i) {
                var r = this
                  , o = !(!r.$options._renderChildren && !i);
                if (r.$options._parentVnode = n,
                r.$vnode = n,
                r._vnode && (r._vnode.parent = n),
                r.$options._renderChildren = i,
                t && r.$options.props) {
                    nt.shouldConvert = !1;
                    for (var a = r.$options._propKeys || [], s = 0; s < a.length; s++) {
                        var u = a[s];
                        r[u] = _t(u, r.$options.props, t, r)
                    }
                    nt.shouldConvert = !0,
                    r.$options.propsData = t
                }
                if (e) {
                    var c = r.$options._parentListeners;
                    r.$options._parentListeners = e,
                    zt(r, e, c)
                }
                o && (r.$slots = Wt(i, n.context),
                r.$forceUpdate())
            }
            ,
            t.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }
            ,
            t.prototype.$destroy = function() {
                var t = this;
                if (!t._isBeingDestroyed) {
                    Gt(t, "beforeDestroy"),
                    t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || a(e.$children, t),
                    t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--; )
                        t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--,
                    t._isDestroyed = !0,
                    Gt(t, "destroyed"),
                    t.$off(),
                    t.$el && (t.$el.__vue__ = null),
                    t.__patch__(t._vnode, null)
                }
            }
        }(de),
        function(t) {
            function e(t, e, n) {
                if (Array.isArray(t))
                    for (var i = 0; i < t.length; i++)
                        t[i] && "string" != typeof t[i] && r(t[i], e + "_" + i, n);
                else
                    r(t, e, n)
            }
            function r(t, e, n) {
                t.isStatic = !0,
                t.key = e,
                t.isOnce = n
            }
            t.prototype.$nextTick = function(t) {
                return Y(t, this)
            }
            ,
            t.prototype._render = function() {
                var t, e = this, n = e.$options, i = n.render, r = n.staticRenderFns, o = n._parentVnode;
                if (e._isMounted)
                    for (var a in e.$slots)
                        e.$slots[a] = St(e.$slots[a]);
                o && o.data.scopedSlots && (e.$scopedSlots = o.data.scopedSlots),
                r && !e._staticTrees && (e._staticTrees = []),
                e.$vnode = o;
                try {
                    t = i.call(e._renderProxy, e.$createElement)
                } catch (n) {
                    if (!j.errorHandler)
                        throw n;
                    j.errorHandler.call(null, n, e),
                    t = e._vnode
                }
                return t instanceof wt || (t = kt()),
                t.parent = o,
                t
            }
            ,
            t.prototype._s = n,
            t.prototype._v = Ot,
            t.prototype._n = i,
            t.prototype._e = kt,
            t.prototype._q = C,
            t.prototype._i = T,
            t.prototype._m = function(t, n) {
                var i = this._staticTrees[t];
                return i && !n ? Array.isArray(i) ? St(i) : Et(i) : (e(i = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), "__static__" + t, !1),
                i)
            }
            ,
            t.prototype._o = function(t, n, i) {
                return e(t, "__once__" + n + (i ? "_" + i : ""), !0),
                t
            }
            ,
            t.prototype._f = function(t) {
                return gt(this.$options, "filters", t) || S
            }
            ,
            t.prototype._l = function(t, e) {
                var n, i, r, o, a;
                if (Array.isArray(t) || "string" == typeof t)
                    for (n = new Array(t.length),
                    i = 0,
                    r = t.length; i < r; i++)
                        n[i] = e(t[i], i);
                else if ("number" == typeof t)
                    for (n = new Array(t),
                    i = 0; i < t; i++)
                        n[i] = e(i + 1, i);
                else if (b(t))
                    for (o = Object.keys(t),
                    n = new Array(o.length),
                    i = 0,
                    r = o.length; i < r; i++)
                        a = o[i],
                        n[i] = e(t[a], a, i);
                return n
            }
            ,
            t.prototype._t = function(t, e, n, i) {
                var r = this.$scopedSlots[t];
                if (r)
                    return n = n || {},
                    i && m(n, i),
                    r(n) || e;
                var o = this.$slots[t];
                return o || e
            }
            ,
            t.prototype._b = function(t, e, n, i) {
                if (n && b(n))
                    for (var r in Array.isArray(n) && (n = k(n)),
                    n)
                        if ("class" === r || "style" === r)
                            t[r] = n[r];
                        else {
                            var o = t.attrs && t.attrs.type;
                            (i || j.mustUseProp(e, o, r) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {}))[r] = n[r]
                        }
                return t
            }
            ,
            t.prototype._k = function(t, e, n) {
                var i = j.keyCodes[e] || n;
                return Array.isArray(i) ? -1 === i.indexOf(t) : i !== t
            }
        }(de);
        var fe = [String, RegExp];
        function pe(t) {
            return t && (t.Ctor.options.name || t.tag)
        }
        function he(t, e) {
            return "string" == typeof t ? t.split(",").indexOf(e) > -1 : t.test(e)
        }
        function ve(t, e) {
            for (var n in t) {
                var i = t[n];
                if (i) {
                    var r = pe(i.componentOptions);
                    r && !e(r) && (ge(i),
                    t[n] = null)
                }
            }
        }
        function ge(t) {
            t && (t.componentInstance._inactive || Gt(t.componentInstance, "deactivated"),
            t.componentInstance.$destroy())
        }
        var _e = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: fe,
                    exclude: fe
                },
                created: function() {
                    this.cache = Object.create(null)
                },
                destroyed: function() {
                    for (var t in this.cache)
                        ge(this.cache[t])
                },
                watch: {
                    include: function(t) {
                        ve(this.cache, function(e) {
                            return he(t, e)
                        })
                    },
                    exclude: function(t) {
                        ve(this.cache, function(e) {
                            return !he(t, e)
                        })
                    }
                },
                render: function() {
                    var t = Dt(this.$slots.default)
                      , e = t && t.componentOptions;
                    if (e) {
                        var n = pe(e);
                        if (n && (this.include && !he(this.include, n) || this.exclude && he(this.exclude, n)))
                            return t;
                        var i = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                        this.cache[i] ? t.componentInstance = this.cache[i].componentInstance : this.cache[i] = t,
                        t.data.keepAlive = !0
                    }
                    return t
                }
            }
        };
        !function(t) {
            var e = {
                get: function() {
                    return j
                }
            };
            Object.defineProperty(t, "config", e),
            t.util = yt,
            t.set = ut,
            t.delete = ct,
            t.nextTick = Y,
            t.options = Object.create(null),
            j._assetTypes.forEach(function(e) {
                t.options[e + "s"] = Object.create(null)
            }),
            t.options._base = t,
            m(t.options.components, _e),
            function(t) {
                t.use = function(t) {
                    if (!t.installed) {
                        var e = _(arguments, 1);
                        return e.unshift(this),
                        "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e),
                        t.installed = !0,
                        this
                    }
                }
            }(t),
            function(t) {
                t.mixin = function(t) {
                    this.options = vt(this.options, t)
                }
            }(t),
            function(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this
                      , i = n.cid
                      , r = t._Ctor || (t._Ctor = {});
                    if (r[i])
                        return r[i];
                    var o = t.name || n.options.name
                      , a = function(t) {
                        this._init(t)
                    };
                    return (a.prototype = Object.create(n.prototype)).constructor = a,
                    a.cid = e++,
                    a.options = vt(n.options, t),
                    a.super = n,
                    a.extend = n.extend,
                    a.mixin = n.mixin,
                    a.use = n.use,
                    j._assetTypes.forEach(function(t) {
                        a[t] = n[t]
                    }),
                    o && (a.options.components[o] = a),
                    a.superOptions = n.options,
                    a.extendOptions = t,
                    r[i] = a,
                    a
                }
            }(t),
            function(t) {
                j._assetTypes.forEach(function(e) {
                    t[e] = function(t, n) {
                        return n ? ("component" === e && x(n) && (n.name = n.name || t,
                        n = this.options._base.extend(n)),
                        "directive" === e && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }),
                        this.options[e + "s"][t] = n,
                        n) : this.options[e + "s"][t]
                    }
                })
            }(t)
        }(de),
        Object.defineProperty(de.prototype, "$isServer", {
            get: W
        }),
        de.version = "2.1.10";
        var me = r("input,textarea,option,select")
          , be = r("contenteditable,draggable,spellcheck")
          , ye = r("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible")
          , we = "http://www.w3.org/1999/xlink"
          , xe = function(t) {
            return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
        }
          , ke = function(t) {
            return xe(t) ? t.slice(6, t.length) : ""
        }
          , Oe = function(t) {
            return null == t || !1 === t
        };
        function Ee(t) {
            for (var e = t.data, n = t, i = t; i.componentInstance; )
                (i = i.componentInstance._vnode).data && (e = Se(i.data, e));
            for (; n = n.parent; )
                n.data && (e = Se(e, n.data));
            return function(t) {
                var e = t.class
                  , n = t.staticClass;
                if (n || e)
                    return Ce(n, Te(e));
                return ""
            }(e)
        }
        function Se(t, e) {
            return {
                staticClass: Ce(t.staticClass, e.staticClass),
                class: t.class ? [t.class, e.class] : e.class
            }
        }
        function Ce(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }
        function Te(t) {
            var e = "";
            if (!t)
                return e;
            if ("string" == typeof t)
                return t;
            if (Array.isArray(t)) {
                for (var n, i = 0, r = t.length; i < r; i++)
                    t[i] && (n = Te(t[i])) && (e += n + " ");
                return e.slice(0, -1)
            }
            if (b(t)) {
                for (var o in t)
                    t[o] && (e += o + " ");
                return e.slice(0, -1)
            }
            return e
        }
        var je = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        }
          , Le = r("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template")
          , Pe = r("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0)
          , Ae = function(t) {
            return Le(t) || Pe(t)
        };
        var Ie = Object.create(null);
        var Ne = Object.freeze({
            createElement: function(t, e) {
                var n = document.createElement(t);
                return "select" !== t ? n : (e.data && e.data.attrs && "multiple"in e.data.attrs && n.setAttribute("multiple", "multiple"),
                n)
            },
            createElementNS: function(t, e) {
                return document.createElementNS(je[t], e)
            },
            createTextNode: function(t) {
                return document.createTextNode(t)
            },
            createComment: function(t) {
                return document.createComment(t)
            },
            insertBefore: function(t, e, n) {
                t.insertBefore(e, n)
            },
            removeChild: function(t, e) {
                t.removeChild(e)
            },
            appendChild: function(t, e) {
                t.appendChild(e)
            },
            parentNode: function(t) {
                return t.parentNode
            },
            nextSibling: function(t) {
                return t.nextSibling
            },
            tagName: function(t) {
                return t.tagName
            },
            setTextContent: function(t, e) {
                t.textContent = e
            },
            setAttribute: function(t, e, n) {
                t.setAttribute(e, n)
            }
        })
          , Re = {
            create: function(t, e) {
                Me(e)
            },
            update: function(t, e) {
                t.data.ref !== e.data.ref && (Me(t, !0),
                Me(e))
            },
            destroy: function(t) {
                Me(t, !0)
            }
        };
        function Me(t, e) {
            var n = t.data.ref;
            if (n) {
                var i = t.context
                  , r = t.componentInstance || t.elm
                  , o = i.$refs;
                e ? Array.isArray(o[n]) ? a(o[n], r) : o[n] === r && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) && o[n].indexOf(r) < 0 ? o[n].push(r) : o[n] = [r] : o[n] = r
            }
        }
        var Ve = new wt("",{},[])
          , De = ["create", "activate", "update", "remove", "destroy"];
        function Xe(t) {
            return null == t
        }
        function Ue(t) {
            return null != t
        }
        function Be(t, e) {
            return t.key === e.key && t.tag === e.tag && t.isComment === e.isComment && !t.data == !e.data
        }
        function Fe(t, e, n) {
            var i, r, o = {};
            for (i = e; i <= n; ++i)
                Ue(r = t[i].key) && (o[r] = i);
            return o
        }
        var We = {
            create: He,
            update: He,
            destroy: function(t) {
                He(t, Ve)
            }
        };
        function He(t, e) {
            (t.data.directives || e.data.directives) && function(t, e) {
                var n, i, r, o = t === Ve, a = e === Ve, s = ze(t.data.directives, t.context), u = ze(e.data.directives, e.context), c = [], l = [];
                for (n in u)
                    i = s[n],
                    r = u[n],
                    i ? (r.oldValue = i.value,
                    Ge(r, "update", e, t),
                    r.def && r.def.componentUpdated && l.push(r)) : (Ge(r, "bind", e, t),
                    r.def && r.def.inserted && c.push(r));
                if (c.length) {
                    var d = function() {
                        for (var n = 0; n < c.length; n++)
                            Ge(c[n], "inserted", e, t)
                    };
                    o ? It(e.data.hook || (e.data.hook = {}), "insert", d, "dir-insert") : d()
                }
                l.length && It(e.data.hook || (e.data.hook = {}), "postpatch", function() {
                    for (var n = 0; n < l.length; n++)
                        Ge(l[n], "componentUpdated", e, t)
                }, "dir-postpatch");
                if (!o)
                    for (n in s)
                        u[n] || Ge(s[n], "unbind", t, t, a)
            }(t, e)
        }
        var $e = Object.create(null);
        function ze(t, e) {
            var n, i, r = Object.create(null);
            if (!t)
                return r;
            for (n = 0; n < t.length; n++)
                (i = t[n]).modifiers || (i.modifiers = $e),
                r[Ye(i)] = i,
                i.def = gt(e.$options, "directives", i.name);
            return r
        }
        function Ye(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }
        function Ge(t, e, n, i, r) {
            var o = t.def && t.def[e];
            o && o(n.elm, t, n, i, r)
        }
        var Ke = [Re, We];
        function qe(t, e) {
            if (t.data.attrs || e.data.attrs) {
                var n, i, r = e.elm, o = t.data.attrs || {}, a = e.data.attrs || {};
                for (n in a.__ob__ && (a = e.data.attrs = m({}, a)),
                a)
                    i = a[n],
                    o[n] !== i && Je(r, n, i);
                for (n in X && a.value !== o.value && Je(r, "value", a.value),
                o)
                    null == a[n] && (xe(n) ? r.removeAttributeNS(we, ke(n)) : be(n) || r.removeAttribute(n))
            }
        }
        function Je(t, e, n) {
            ye(e) ? Oe(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : be(e) ? t.setAttribute(e, Oe(n) || "false" === n ? "false" : "true") : xe(e) ? Oe(n) ? t.removeAttributeNS(we, ke(e)) : t.setAttributeNS(we, e, n) : Oe(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
        }
        var Qe = {
            create: qe,
            update: qe
        };
        function Ze(t, e) {
            var n = e.elm
              , i = e.data
              , r = t.data;
            if (i.staticClass || i.class || r && (r.staticClass || r.class)) {
                var o = Ee(e)
                  , a = n._transitionClasses;
                a && (o = Ce(o, Te(a))),
                o !== n._prevClass && (n.setAttribute("class", o),
                n._prevClass = o)
            }
        }
        var tn, en = {
            create: Ze,
            update: Ze
        };
        function nn(t, e, n, i) {
            if (n) {
                var r = e
                  , o = tn;
                e = function(n) {
                    rn(t, e, i, o),
                    1 === arguments.length ? r(n) : r.apply(null, arguments)
                }
            }
            tn.addEventListener(t, e, i)
        }
        function rn(t, e, n, i) {
            (i || tn).removeEventListener(t, e, n)
        }
        function on(t, e) {
            if (t.data.on || e.data.on) {
                var n = e.data.on || {}
                  , i = t.data.on || {};
                tn = e.elm,
                Mt(n, i, nn, rn, e.context)
            }
        }
        var an = {
            create: on,
            update: on
        };
        function sn(t, e) {
            if (t.data.domProps || e.data.domProps) {
                var n, i, r = e.elm, o = t.data.domProps || {}, a = e.data.domProps || {};
                for (n in a.__ob__ && (a = e.data.domProps = m({}, a)),
                o)
                    null == a[n] && (r[n] = "");
                for (n in a)
                    if (i = a[n],
                    "textContent" !== n && "innerHTML" !== n || (e.children && (e.children.length = 0),
                    i !== o[n]))
                        if ("value" === n) {
                            r._value = i;
                            var s = null == i ? "" : String(i);
                            un(r, e, s) && (r.value = s)
                        } else
                            r[n] = i
            }
        }
        function un(t, e, n) {
            return !t.composing && ("option" === e.tag || function(t, e) {
                return document.activeElement !== t && t.value !== e
            }(t, n) || function(t, e) {
                var n = t.elm.value
                  , r = t.elm._vModifiers;
                if (r && r.number || "number" === t.elm.type)
                    return i(n) !== i(e);
                if (r && r.trim)
                    return n.trim() !== e.trim();
                return n !== e
            }(e, n))
        }
        var cn = {
            create: sn,
            update: sn
        }
          , ln = l(function(t) {
            var e = {}
              , n = /:(.+)/;
            return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                if (t) {
                    var i = t.split(n);
                    i.length > 1 && (e[i[0].trim()] = i[1].trim())
                }
            }),
            e
        });
        function dn(t) {
            var e = fn(t.style);
            return t.staticStyle ? m(t.staticStyle, e) : e
        }
        function fn(t) {
            return Array.isArray(t) ? k(t) : "string" == typeof t ? ln(t) : t
        }
        var pn, hn = /^--/, vn = /\s*!important$/, gn = function(t, e, n) {
            hn.test(e) ? t.style.setProperty(e, n) : vn.test(n) ? t.style.setProperty(e, n.replace(vn, ""), "important") : t.style[mn(e)] = n
        }, _n = ["Webkit", "Moz", "ms"], mn = l(function(t) {
            if (pn = pn || document.createElement("div"),
            "filter" !== (t = f(t)) && t in pn.style)
                return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < _n.length; n++) {
                var i = _n[n] + e;
                if (i in pn.style)
                    return i
            }
        });
        function bn(t, e) {
            var n = e.data
              , i = t.data;
            if (n.staticStyle || n.style || i.staticStyle || i.style) {
                var r, o, a = e.elm, s = t.data.staticStyle, u = t.data.style || {}, c = s || u, l = fn(e.data.style) || {};
                e.data.style = l.__ob__ ? m({}, l) : l;
                var d = function(t, e) {
                    var n, i = {};
                    if (e)
                        for (var r = t; r.componentInstance; )
                            (r = r.componentInstance._vnode).data && (n = dn(r.data)) && m(i, n);
                    (n = dn(t.data)) && m(i, n);
                    for (var o = t; o = o.parent; )
                        o.data && (n = dn(o.data)) && m(i, n);
                    return i
                }(e, !0);
                for (o in c)
                    null == d[o] && gn(a, o, "");
                for (o in d)
                    (r = d[o]) !== c[o] && gn(a, o, null == r ? "" : r)
            }
        }
        var yn = {
            create: bn,
            update: bn
        };
        var wn = M && !X
          , xn = "transition"
          , kn = "animation"
          , On = "transition"
          , En = "transitionend"
          , Sn = "animation"
          , Cn = "animationend";
        wn && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (On = "WebkitTransition",
        En = "webkitTransitionEnd"),
        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Sn = "WebkitAnimation",
        Cn = "webkitAnimationEnd"));
        var Tn = M && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
        function jn(t) {
            Tn(function() {
                Tn(t)
            })
        }
        function Ln(t, e) {
            (t._transitionClasses || (t._transitionClasses = [])).push(e),
            function(t, e) {
                if (e && e.trim())
                    if (t.classList)
                        e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                            return t.classList.add(e)
                        }) : t.classList.add(e);
                    else {
                        var n = " " + t.getAttribute("class") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                    }
            }(t, e)
        }
        function Pn(t, e) {
            t._transitionClasses && a(t._transitionClasses, e),
            function(t, e) {
                if (e && e.trim())
                    if (t.classList)
                        e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                            return t.classList.remove(e)
                        }) : t.classList.remove(e);
                    else {
                        for (var n = " " + t.getAttribute("class") + " ", i = " " + e + " "; n.indexOf(i) >= 0; )
                            n = n.replace(i, " ");
                        t.setAttribute("class", n.trim())
                    }
            }(t, e)
        }
        function An(t, e, n) {
            var i = Nn(t, e)
              , r = i.type
              , o = i.timeout
              , a = i.propCount;
            if (!r)
                return n();
            var s = r === xn ? En : Cn
              , u = 0
              , c = function() {
                t.removeEventListener(s, l),
                n()
            }
              , l = function(e) {
                e.target === t && ++u >= a && c()
            };
            setTimeout(function() {
                u < a && c()
            }, o + 1),
            t.addEventListener(s, l)
        }
        var In = /\b(transform|all)(,|$)/;
        function Nn(t, e) {
            var n, i = window.getComputedStyle(t), r = i[On + "Delay"].split(", "), o = i[On + "Duration"].split(", "), a = Rn(r, o), s = i[Sn + "Delay"].split(", "), u = i[Sn + "Duration"].split(", "), c = Rn(s, u), l = 0, d = 0;
            return e === xn ? a > 0 && (n = xn,
            l = a,
            d = o.length) : e === kn ? c > 0 && (n = kn,
            l = c,
            d = u.length) : d = (n = (l = Math.max(a, c)) > 0 ? a > c ? xn : kn : null) ? n === xn ? o.length : u.length : 0,
            {
                type: n,
                timeout: l,
                propCount: d,
                hasTransform: n === xn && In.test(i[On + "Property"])
            }
        }
        function Rn(t, e) {
            for (; t.length < e.length; )
                t = t.concat(t);
            return Math.max.apply(null, e.map(function(e, n) {
                return Mn(e) + Mn(t[n])
            }))
        }
        function Mn(t) {
            return 1e3 * Number(t.slice(0, -1))
        }
        function Vn(t, e) {
            var n = t.elm;
            n._leaveCb && (n._leaveCb.cancelled = !0,
            n._leaveCb());
            var i = Xn(t.data.transition);
            if (i && !n._enterCb && 1 === n.nodeType) {
                for (var r = i.css, o = i.type, a = i.enterClass, s = i.enterToClass, u = i.enterActiveClass, c = i.appearClass, l = i.appearToClass, d = i.appearActiveClass, f = i.beforeEnter, p = i.enter, h = i.afterEnter, v = i.enterCancelled, g = i.beforeAppear, _ = i.appear, m = i.afterAppear, b = i.appearCancelled, y = Yt, w = Yt.$vnode; w && w.parent; )
                    y = (w = w.parent).context;
                var x = !y._isMounted || !t.isRootInsert;
                if (!x || _ || "" === _) {
                    var k = x ? c : a
                      , O = x ? d : u
                      , E = x ? l : s
                      , S = x && g || f
                      , C = x && "function" == typeof _ ? _ : p
                      , T = x && m || h
                      , j = x && b || v
                      , L = !1 !== r && !X
                      , P = C && (C._length || C.length) > 1
                      , A = n._enterCb = Bn(function() {
                        L && (Pn(n, E),
                        Pn(n, O)),
                        A.cancelled ? (L && Pn(n, k),
                        j && j(n)) : T && T(n),
                        n._enterCb = null
                    });
                    t.data.show || It(t.data.hook || (t.data.hook = {}), "insert", function() {
                        var e = n.parentNode
                          , i = e && e._pending && e._pending[t.key];
                        i && i.tag === t.tag && i.elm._leaveCb && i.elm._leaveCb(),
                        C && C(n, A)
                    }, "transition-insert"),
                    S && S(n),
                    L && (Ln(n, k),
                    Ln(n, O),
                    jn(function() {
                        Ln(n, E),
                        Pn(n, k),
                        A.cancelled || P || An(n, o, A)
                    })),
                    t.data.show && (e && e(),
                    C && C(n, A)),
                    L || P || A()
                }
            }
        }
        function Dn(t, e) {
            var n = t.elm;
            n._enterCb && (n._enterCb.cancelled = !0,
            n._enterCb());
            var i = Xn(t.data.transition);
            if (!i)
                return e();
            if (!n._leaveCb && 1 === n.nodeType) {
                var r = i.css
                  , o = i.type
                  , a = i.leaveClass
                  , s = i.leaveToClass
                  , u = i.leaveActiveClass
                  , c = i.beforeLeave
                  , l = i.leave
                  , d = i.afterLeave
                  , f = i.leaveCancelled
                  , p = i.delayLeave
                  , h = !1 !== r && !X
                  , v = l && (l._length || l.length) > 1
                  , g = n._leaveCb = Bn(function() {
                    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null),
                    h && (Pn(n, s),
                    Pn(n, u)),
                    g.cancelled ? (h && Pn(n, a),
                    f && f(n)) : (e(),
                    d && d(n)),
                    n._leaveCb = null
                });
                p ? p(_) : _()
            }
            function _() {
                g.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t),
                c && c(n),
                h && (Ln(n, a),
                Ln(n, u),
                jn(function() {
                    Ln(n, s),
                    Pn(n, a),
                    g.cancelled || v || An(n, o, g)
                })),
                l && l(n, g),
                h || v || g())
            }
        }
        function Xn(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return !1 !== t.css && m(e, Un(t.name || "v")),
                    m(e, t),
                    e
                }
                return "string" == typeof t ? Un(t) : void 0
            }
        }
        var Un = l(function(t) {
            return {
                enterClass: t + "-enter",
                leaveClass: t + "-leave",
                appearClass: t + "-enter",
                enterToClass: t + "-enter-to",
                leaveToClass: t + "-leave-to",
                appearToClass: t + "-enter-to",
                enterActiveClass: t + "-enter-active",
                leaveActiveClass: t + "-leave-active",
                appearActiveClass: t + "-enter-active"
            }
        });
        function Bn(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                t())
            }
        }
        function Fn(t, e) {
            e.data.show || Vn(e)
        }
        var Wn = function(t) {
            var e, n, i = {}, o = t.modules, a = t.nodeOps;
            for (e = 0; e < De.length; ++e)
                for (i[De[e]] = [],
                n = 0; n < o.length; ++n)
                    void 0 !== o[n][De[e]] && i[De[e]].push(o[n][De[e]]);
            function s(t) {
                var e = a.parentNode(t);
                e && a.removeChild(e, t)
            }
            function u(t, e, n, r, o) {
                if (t.isRootInsert = !o,
                !function(t, e, n, r) {
                    var o = t.data;
                    if (Ue(o)) {
                        var a = Ue(t.componentInstance) && o.keepAlive;
                        if (Ue(o = o.hook) && Ue(o = o.init) && o(t, !1, n, r),
                        Ue(t.componentInstance))
                            return l(t, e),
                            a && function(t, e, n, r) {
                                for (var o, a = t; a.componentInstance; )
                                    if (a = a.componentInstance._vnode,
                                    Ue(o = a.data) && Ue(o = o.transition)) {
                                        for (o = 0; o < i.activate.length; ++o)
                                            i.activate[o](Ve, a);
                                        e.push(a);
                                        break
                                    }
                                d(n, t.elm, r)
                            }(t, e, n, r),
                            !0
                    }
                }(t, e, n, r)) {
                    var s = t.data
                      , u = t.children
                      , c = t.tag;
                    Ue(c) ? (t.elm = t.ns ? a.createElementNS(t.ns, c) : a.createElement(c, t),
                    v(t),
                    f(t, u, e),
                    Ue(s) && h(t, e),
                    d(n, t.elm, r)) : t.isComment ? (t.elm = a.createComment(t.text),
                    d(n, t.elm, r)) : (t.elm = a.createTextNode(t.text),
                    d(n, t.elm, r))
                }
            }
            function l(t, e) {
                t.data.pendingInsert && e.push.apply(e, t.data.pendingInsert),
                t.elm = t.componentInstance.$el,
                p(t) ? (h(t, e),
                v(t)) : (Me(t),
                e.push(t))
            }
            function d(t, e, n) {
                t && (n ? a.insertBefore(t, e, n) : a.appendChild(t, e))
            }
            function f(t, e, n) {
                if (Array.isArray(e))
                    for (var i = 0; i < e.length; ++i)
                        u(e[i], n, t.elm, null, !0);
                else
                    c(t.text) && a.appendChild(t.elm, a.createTextNode(t.text))
            }
            function p(t) {
                for (; t.componentInstance; )
                    t = t.componentInstance._vnode;
                return Ue(t.tag)
            }
            function h(t, n) {
                for (var r = 0; r < i.create.length; ++r)
                    i.create[r](Ve, t);
                Ue(e = t.data.hook) && (e.create && e.create(Ve, t),
                e.insert && n.push(t))
            }
            function v(t) {
                var e;
                Ue(e = t.context) && Ue(e = e.$options._scopeId) && a.setAttribute(t.elm, e, ""),
                Ue(e = Yt) && e !== t.context && Ue(e = e.$options._scopeId) && a.setAttribute(t.elm, e, "")
            }
            function g(t, e, n, i, r, o) {
                for (; i <= r; ++i)
                    u(n[i], o, t, e)
            }
            function _(t) {
                var e, n, r = t.data;
                if (Ue(r))
                    for (Ue(e = r.hook) && Ue(e = e.destroy) && e(t),
                    e = 0; e < i.destroy.length; ++e)
                        i.destroy[e](t);
                if (Ue(e = t.children))
                    for (n = 0; n < t.children.length; ++n)
                        _(t.children[n])
            }
            function m(t, e, n, i) {
                for (; n <= i; ++n) {
                    var r = e[n];
                    Ue(r) && (Ue(r.tag) ? (b(r),
                    _(r)) : s(r.elm))
                }
            }
            function b(t, n) {
                if (n || Ue(t.data)) {
                    var r = i.remove.length + 1;
                    for (n ? n.listeners += r : n = function(t, e) {
                        function n() {
                            0 == --n.listeners && s(t)
                        }
                        return n.listeners = e,
                        n
                    }(t.elm, r),
                    Ue(e = t.componentInstance) && Ue(e = e._vnode) && Ue(e.data) && b(e, n),
                    e = 0; e < i.remove.length; ++e)
                        i.remove[e](t, n);
                    Ue(e = t.data.hook) && Ue(e = e.remove) ? e(t, n) : n()
                } else
                    s(t.elm)
            }
            function y(t, e, n, r) {
                if (t !== e) {
                    if (e.isStatic && t.isStatic && e.key === t.key && (e.isCloned || e.isOnce))
                        return e.elm = t.elm,
                        void (e.componentInstance = t.componentInstance);
                    var o, s = e.data, c = Ue(s);
                    c && Ue(o = s.hook) && Ue(o = o.prepatch) && o(t, e);
                    var l = e.elm = t.elm
                      , d = t.children
                      , f = e.children;
                    if (c && p(e)) {
                        for (o = 0; o < i.update.length; ++o)
                            i.update[o](t, e);
                        Ue(o = s.hook) && Ue(o = o.update) && o(t, e)
                    }
                    Xe(e.text) ? Ue(d) && Ue(f) ? d !== f && function(t, e, n, i, r) {
                        for (var o, s, c, l = 0, d = 0, f = e.length - 1, p = e[0], h = e[f], v = n.length - 1, _ = n[0], b = n[v], w = !r; l <= f && d <= v; )
                            Xe(p) ? p = e[++l] : Xe(h) ? h = e[--f] : Be(p, _) ? (y(p, _, i),
                            p = e[++l],
                            _ = n[++d]) : Be(h, b) ? (y(h, b, i),
                            h = e[--f],
                            b = n[--v]) : Be(p, b) ? (y(p, b, i),
                            w && a.insertBefore(t, p.elm, a.nextSibling(h.elm)),
                            p = e[++l],
                            b = n[--v]) : Be(h, _) ? (y(h, _, i),
                            w && a.insertBefore(t, h.elm, p.elm),
                            h = e[--f],
                            _ = n[++d]) : (Xe(o) && (o = Fe(e, l, f)),
                            Xe(s = Ue(_.key) ? o[_.key] : null) ? (u(_, i, t, p.elm),
                            _ = n[++d]) : Be(c = e[s], _) ? (y(c, _, i),
                            e[s] = void 0,
                            w && a.insertBefore(t, _.elm, p.elm),
                            _ = n[++d]) : (u(_, i, t, p.elm),
                            _ = n[++d]));
                        l > f ? g(t, Xe(n[v + 1]) ? null : n[v + 1].elm, n, d, v, i) : d > v && m(0, e, l, f)
                    }(l, d, f, n, r) : Ue(f) ? (Ue(t.text) && a.setTextContent(l, ""),
                    g(l, null, f, 0, f.length - 1, n)) : Ue(d) ? m(0, d, 0, d.length - 1) : Ue(t.text) && a.setTextContent(l, "") : t.text !== e.text && a.setTextContent(l, e.text),
                    c && Ue(o = s.hook) && Ue(o = o.postpatch) && o(t, e)
                }
            }
            function w(t, e, n) {
                if (n && t.parent)
                    t.parent.data.pendingInsert = e;
                else
                    for (var i = 0; i < e.length; ++i)
                        e[i].data.hook.insert(e[i])
            }
            var x = r("attrs,style,class,staticClass,staticStyle,key");
            function k(t, n, i) {
                n.elm = t;
                var r = n.tag
                  , o = n.data
                  , a = n.children;
                if (Ue(o) && (Ue(e = o.hook) && Ue(e = e.init) && e(n, !0),
                Ue(e = n.componentInstance)))
                    return l(n, i),
                    !0;
                if (Ue(r)) {
                    if (Ue(a))
                        if (t.hasChildNodes()) {
                            for (var s = !0, u = t.firstChild, c = 0; c < a.length; c++) {
                                if (!u || !k(u, a[c], i)) {
                                    s = !1;
                                    break
                                }
                                u = u.nextSibling
                            }
                            if (!s || u)
                                return !1
                        } else
                            f(n, a, i);
                    if (Ue(o))
                        for (var d in o)
                            if (!x(d)) {
                                h(n, i);
                                break
                            }
                } else
                    t.data !== n.text && (t.data = n.text);
                return !0
            }
            return function(t, e, n, r, o, s) {
                if (e) {
                    var c, l = !1, d = [];
                    if (t) {
                        var f = Ue(t.nodeType);
                        if (!f && Be(t, e))
                            y(t, e, d, r);
                        else {
                            if (f) {
                                if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"),
                                n = !0),
                                n && k(t, e, d))
                                    return w(e, d, !0),
                                    t;
                                c = t,
                                t = new wt(a.tagName(c).toLowerCase(),{},[],void 0,c)
                            }
                            var h = t.elm
                              , v = a.parentNode(h);
                            if (u(e, d, h._leaveCb ? null : v, a.nextSibling(h)),
                            e.parent) {
                                for (var g = e.parent; g; )
                                    g.elm = e.elm,
                                    g = g.parent;
                                if (p(e))
                                    for (var b = 0; b < i.create.length; ++b)
                                        i.create[b](Ve, e.parent)
                            }
                            null !== v ? m(0, [t], 0, 0) : Ue(t.tag) && _(t)
                        }
                    } else
                        l = !0,
                        u(e, d, o, s);
                    return w(e, d, l),
                    e.elm
                }
                t && _(t)
            }
        }({
            nodeOps: Ne,
            modules: [Qe, en, an, cn, yn, M ? {
                create: Fn,
                activate: Fn,
                remove: function(t, e) {
                    t.data.show ? e() : Dn(t, e)
                }
            } : {}].concat(Ke)
        });
        function Hn(t, e, n) {
            var i = e.value
              , r = t.multiple;
            if (!r || Array.isArray(i)) {
                for (var o, a, s = 0, u = t.options.length; s < u; s++)
                    if (a = t.options[s],
                    r)
                        o = T(i, zn(a)) > -1,
                        a.selected !== o && (a.selected = o);
                    else if (C(zn(a), i))
                        return void (t.selectedIndex !== s && (t.selectedIndex = s));
                r || (t.selectedIndex = -1)
            }
        }
        function $n(t, e) {
            for (var n = 0, i = e.length; n < i; n++)
                if (C(zn(e[n]), t))
                    return !1;
            return !0
        }
        function zn(t) {
            return "_value"in t ? t._value : t.value
        }
        function Yn(t) {
            t.target.composing = !0
        }
        function Gn(t) {
            t.target.composing = !1,
            Kn(t.target, "input")
        }
        function Kn(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0),
            t.dispatchEvent(n)
        }
        function qn(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : qn(t.componentInstance._vnode)
        }
        X && document.addEventListener("selectionchange", function() {
            var t = document.activeElement;
            t && t.vmodel && Kn(t, "input")
        });
        var Jn = {
            model: {
                inserted: function(t, e, n) {
                    if ("select" === n.tag) {
                        var i = function() {
                            Hn(t, e, n.context)
                        };
                        i(),
                        (D || U) && setTimeout(i, 0)
                    } else
                        "textarea" !== n.tag && "text" !== t.type || (t._vModifiers = e.modifiers,
                        e.modifiers.lazy || (B || (t.addEventListener("compositionstart", Yn),
                        t.addEventListener("compositionend", Gn)),
                        X && (t.vmodel = !0)))
                },
                componentUpdated: function(t, e, n) {
                    "select" === n.tag && (Hn(t, e, n.context),
                    (t.multiple ? e.value.some(function(e) {
                        return $n(e, t.options)
                    }) : e.value !== e.oldValue && $n(e.value, t.options)) && Kn(t, "change"))
                }
            },
            show: {
                bind: function(t, e, n) {
                    var i = e.value
                      , r = (n = qn(n)).data && n.data.transition
                      , o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                    i && r && !X ? (n.data.show = !0,
                    Vn(n, function() {
                        t.style.display = o
                    })) : t.style.display = i ? o : "none"
                },
                update: function(t, e, n) {
                    var i = e.value;
                    i !== e.oldValue && ((n = qn(n)).data && n.data.transition && !X ? (n.data.show = !0,
                    i ? Vn(n, function() {
                        t.style.display = t.__vOriginalDisplay
                    }) : Dn(n, function() {
                        t.style.display = "none"
                    })) : t.style.display = i ? t.__vOriginalDisplay : "none")
                },
                unbind: function(t, e, n, i, r) {
                    r || (t.style.display = t.__vOriginalDisplay)
                }
            }
        }
          , Qn = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String
        };
        function Zn(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? Zn(Dt(e.children)) : t
        }
        function ti(t) {
            var e = {}
              , n = t.$options;
            for (var i in n.propsData)
                e[i] = t[i];
            var r = n._parentListeners;
            for (var o in r)
                e[f(o)] = r[o].fn;
            return e
        }
        function ei(t, e) {
            return /\d-keep-alive$/.test(e.tag) ? t("keep-alive") : null
        }
        var ni = {
            name: "transition",
            props: Qn,
            abstract: !0,
            render: function(t) {
                var e = this
                  , n = this.$slots.default;
                if (n && (n = n.filter(function(t) {
                    return t.tag
                })).length) {
                    0;
                    var i = this.mode;
                    0;
                    var r = n[0];
                    if (function(t) {
                        for (; t = t.parent; )
                            if (t.data.transition)
                                return !0
                    }(this.$vnode))
                        return r;
                    var o = Zn(r);
                    if (!o)
                        return r;
                    if (this._leaving)
                        return ei(t, r);
                    var a = "__transition-" + this._uid + "-"
                      , s = o.key = null == o.key ? a + o.tag : c(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key
                      , u = (o.data || (o.data = {})).transition = ti(this)
                      , l = Zn(this._vnode);
                    if (o.data.directives && o.data.directives.some(function(t) {
                        return "show" === t.name
                    }) && (o.data.show = !0),
                    l && l.data && !function(t, e) {
                        return e.key === t.key && e.tag === t.tag
                    }(o, l)) {
                        var d = l && (l.data.transition = m({}, u));
                        if ("out-in" === i)
                            return this._leaving = !0,
                            It(d, "afterLeave", function() {
                                e._leaving = !1,
                                e.$forceUpdate()
                            }, s),
                            ei(t, r);
                        if ("in-out" === i) {
                            var f, p = function() {
                                f()
                            };
                            It(u, "afterEnter", p, s),
                            It(u, "enterCancelled", p, s),
                            It(d, "delayLeave", function(t) {
                                f = t
                            }, s)
                        }
                    }
                    return r
                }
            }
        }
          , ii = m({
            tag: String,
            moveClass: String
        }, Qn);
        function ri(t) {
            t.elm._moveCb && t.elm._moveCb(),
            t.elm._enterCb && t.elm._enterCb()
        }
        function oi(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }
        function ai(t) {
            var e = t.data.pos
              , n = t.data.newPos
              , i = e.left - n.left
              , r = e.top - n.top;
            if (i || r) {
                t.data.moved = !0;
                var o = t.elm.style;
                o.transform = o.WebkitTransform = "translate(" + i + "px," + r + "px)",
                o.transitionDuration = "0s"
            }
        }
        delete ii.mode;
        var si = {
            Transition: ni,
            TransitionGroup: {
                props: ii,
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], a = ti(this), s = 0; s < r.length; s++) {
                        var u = r[s];
                        if (u.tag)
                            if (null != u.key && 0 !== String(u.key).indexOf("__vlist"))
                                o.push(u),
                                n[u.key] = u,
                                (u.data || (u.data = {})).transition = a;
                            else
                                ;
                    }
                    if (i) {
                        for (var c = [], l = [], d = 0; d < i.length; d++) {
                            var f = i[d];
                            f.data.transition = a,
                            f.data.pos = f.elm.getBoundingClientRect(),
                            n[f.key] ? c.push(f) : l.push(f)
                        }
                        this.kept = t(e, null, c),
                        this.removed = l
                    }
                    return t(e, null, o)
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0),
                    this._vnode = this.kept
                },
                updated: function() {
                    var t = this.prevChildren
                      , e = this.moveClass || (this.name || "v") + "-move";
                    if (t.length && this.hasMove(t[0].elm, e)) {
                        t.forEach(ri),
                        t.forEach(oi),
                        t.forEach(ai);
                        document.body.offsetHeight;
                        t.forEach(function(t) {
                            if (t.data.moved) {
                                var n = t.elm
                                  , i = n.style;
                                Ln(n, e),
                                i.transform = i.WebkitTransform = i.transitionDuration = "",
                                n.addEventListener(En, n._moveCb = function t(i) {
                                    i && !/transform$/.test(i.propertyName) || (n.removeEventListener(En, t),
                                    n._moveCb = null,
                                    Pn(n, e))
                                }
                                )
                            }
                        })
                    }
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!wn)
                            return !1;
                        if (null != this._hasMove)
                            return this._hasMove;
                        Ln(t, e);
                        var n = Nn(t);
                        return Pn(t, e),
                        this._hasMove = n.hasTransform
                    }
                }
            }
        };
        de.config.isUnknownElement = function(t) {
            if (!M)
                return !0;
            if (Ae(t))
                return !1;
            if (t = t.toLowerCase(),
            null != Ie[t])
                return Ie[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? Ie[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ie[t] = /HTMLUnknownElement/.test(e.toString())
        }
        ,
        de.config.isReservedTag = Ae,
        de.config.getTagNamespace = function(t) {
            return Pe(t) ? "svg" : "math" === t ? "math" : void 0
        }
        ,
        de.config.mustUseProp = function(t, e, n) {
            return "value" === n && me(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
        }
        ,
        m(de.options.directives, Jn),
        m(de.options.components, si),
        de.prototype.__patch__ = M ? Wn : O,
        de.prototype.$mount = function(t, e) {
            return t = t && M ? function(t) {
                if ("string" == typeof t && !(t = document.querySelector(t)))
                    return document.createElement("div");
                return t
            }(t) : void 0,
            this._mount(t, e)
        }
        ,
        setTimeout(function() {
            j.devtools && H && H.emit("init", de)
        }, 0),
        t.exports = de
    }
    ).call(e, n(23))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t) {
        t[t.zh_CN = 0] = "zh_CN",
        t[t.zh_TW = 1] = "zh_TW",
        t[t.zh_HK = 2] = "zh_HK",
        t[t.en_US = 3] = "en_US",
        t[t.ja_JP = 4] = "ja_JP",
        t[t.vi_VN = 5] = "vi_VN",
        t[t.th_TH = 6] = "th_TH",
        t[t.ne_NP = 7] = "ne_NP",
        t[t.id_ID = 8] = "id_ID",
        t[t.ms_MY = 9] = "ms_MY"
    }(i = e.Language || (e.Language = {})),
    e.COOKIE_NAME = "dd_l",
    e.SHOW_MCMS_KEY_INDICATOR = "ShowMcmsKey",
    e.LANGUAGE_DICTIONARY = {
        zh: i.zh_CN,
        en: i.en_US,
        zh_tw: i.zh_TW,
        zh_hk: i.zh_HK,
        zh_hant: i.zh_TW,
        zh_hant_hk: i.zh_HK,
        ja: i.ja_JP,
        vi: i.vi_VN,
        th: i.th_TH,
        ne: i.ne_NP,
        id: i.id_ID,
        ms: i.ms_MY
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.apiList = {
        startTimingV2: "/r/Adaptor/LiveStatistics/startTimingV2",
        endTimingV2: "/r/Adaptor/LiveStatistics/endTimingV2",
        continueTiming: "/r/Adaptor/LiveStatistics/continueTiming",
        punch: "/r/Adaptor/LivePunchI/punch",
        sendLiveTextMsg: "/r/Adaptor/LiveComment/sendLiveTextMsg"
    },
    e.commonRpc = function(t, e, n) {
        if (window.dingtalk && window.dingtalk.net)
            try {
                var r = JSON.stringify(n);
                return new Promise(function(o, a) {
                    dingtalk.net.rpc(t, e, r, function(e, r) {
                        e ? (a(e),
                        i(t, e, n)) : o(JSON.parse(r))
                    })
                }
                )
            } catch (t) {
                return Promise.reject(t)
            }
    }
    ;
    var i = e.retCodeRpcLog = function(t, e, n) {
        if (e && n)
            try {
                var i = "rpc " + t + " error: " + JSON.stringify(e) + ", request body: " + JSON.stringify(n);
                window.__WPO && window.__WPO.log(i, 1)
            } catch (e) {}
    }
    ;
    e.getGrayValueOfCssconfigByKey = function(t) {
        return new Promise(function(e, n) {
            dingtalk.orgFeatureSwitcher.getValueByKeyForOrg(t, function(t, i) {
                t ? n(t) : e(i)
            })
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = c(n(22))
      , r = c(n(46))
      , o = n(8)
      , a = n(20)
      , s = n(25)
      , u = n(27);
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    (0,
    o.autoInit)(r.default);
    var l = new i.default
      , d = {
        INFO: 0,
        WARN: 1,
        ERROR: 2
    }
      , f = {
        created: function() {
            this.$eventBus = l
        },
        methods: {
            toast: function(t, e) {
                var n = document.createElement("div")
                  , i = document.createElement("p");
                n.className = "toast-wrap",
                n.appendChild(i),
                i.className = "toast",
                i.innerHTML = t,
                document.body.appendChild(n),
                setTimeout(function() {
                    document.body.removeChild(n),
                    e && e()
                }, 2e3)
            },
            messageBox: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = arguments[2];
                window.dingtalk.window.openMsgBox("", t, e[0] || "Ok", e[1] || "", function(t, e) {
                    n && n(e)
                })
            },
            signLiveUrl: function(t, e, n) {
                var i = this;
                return new Promise(function(r, o) {
                    window.dingtalk.grouplive.signLiveUrl(t, e, n, function(t, a) {
                        if (t)
                            return i.localLog("ERROR", "signLiveUrl faild: " + JSON.stringify(t) + "; live uuid=" + e + " , url=" + n),
                            void o(t);
                        i.localLog("INFO", "signLiveUrl success: live uuid=" + e + " , url=" + n),
                        r(a.replace("http://", "//"))
                    })
                }
                )
            },
            signPlaybackUrl: function(t, e, n, i) {
                var r = this;
                return new Promise(function(o, a) {
                    window.dingtalk.grouplive.signPlaybackUrl(t, e, n, i, function(t, i) {
                        if (t)
                            return r.localLog("ERROR", "signPlaybackUrl faild: " + JSON.stringify(t) + "; live uuid=" + e + " , url=" + n),
                            void a(t);
                        r.localLog("INFO", "signPlaybackUrl success: live uuid=" + e + " , url=" + n),
                        o(i.replace("http://", "//"))
                    })
                }
                )
            },
            generatorPlayUrlArr: function(t) {
                for (var e = Object.keys(t), n = [], i = 0, r = e.length; i < r; i++) {
                    var a = e[i];
                    t[a] && ("liveUrlUltraLow" === a ? n.push({
                        name: o.i18next.t("dt_lv_live_bit_rate_1"),
                        url: t[a],
                        enumNumber: u.VIDDEO_CLARITY_ENUM.ULTRALOW
                    }) : "liveUrlVeryLow" === a ? n.push({
                        name: o.i18next.t("dt_lv_live_bit_rate_2"),
                        url: t[a],
                        enumNumber: u.VIDDEO_CLARITY_ENUM.VERYLOW
                    }) : "liveUrlLow" === a ? n.push({
                        name: o.i18next.t("dt_lv_live_bit_rate_3"),
                        url: t[a],
                        enumNumber: u.VIDDEO_CLARITY_ENUM.LOW
                    }) : "liveUrlNormal" === a ? n.push({
                        name: o.i18next.t("dt_lv_live_bit_rate_4"),
                        url: t[a],
                        enumNumber: u.VIDDEO_CLARITY_ENUM.NORMAL
                    }) : "liveUrlHigh" === a && n.push({
                        name: o.i18next.t("dt_lv_live_bit_rate_5"),
                        url: t[a],
                        enumNumber: u.VIDDEO_CLARITY_ENUM.HIGH
                    }))
                }
                return n
            },
            addQuery: function(t, e, n) {
                var i = encodeURIComponent(n);
                return t.indexOf("?") > -1 ? t + "&" + e + "=" + i : t + "?" + e + "=" + i
            },
            getLiveStats: function(t, e) {
                var n = this;
                return new Promise(function(i, r) {
                    window.dingtalk && window.dingtalk.grouplive ? window.dingtalk.grouplive.getLiveStats(t, e, function(t, e) {
                        if (t)
                            return n.toast(t.message),
                            void r(t.message);
                        i(e)
                    }) : r("no dingtalk")
                }
                )
            },
            getData: function(t, e, n) {
                var i = this;
                return new Promise(function(r, o) {
                    if (window.dingtalk && window.dingtalk.grouplive) {
                        var a = "live" === i.type;
                        i.localLog("INFO", "start to getData, isLive=" + a + " and live uuid=" + e),
                        window.dingtalk.grouplive.getLivePageInfo(t, e, n, a, function(n, s) {
                            if (n)
                                return i.toast(n.message),
                                void o(n);
                            var u = s.anchorUserProfile
                              , c = s.liveInfo
                              , l = c.liveType;
                            if (i.coverUrl = c.coverUrl,
                            i.title = c.title,
                            i.avatarUrl = u.avatarUrl,
                            i.displayName = u.displayName,
                            i.anchorName = u.displayName,
                            i._key = c.key,
                            c.enableLinkMic && (i.enableLinkMic = c.enableLinkMic),
                            i.liveType = l,
                            i.localLog("INFO", "getData success: live uuid=" + e + ", isLive=" + a + ", liveTitle=" + i.title + ", displayName=" + i.displayName),
                            a) {
                                var d = c.playUrl;
                                if (c.liveUrlUltraLow) {
                                    var f = c.liveUrlHigh
                                      , p = c.liveUrlNormal
                                      , h = c.liveUrlLow
                                      , v = c.liveUrlVeryLow
                                      , g = c.liveUrlUltraLow
                                      , _ = c.playUrl;
                                    i.liveUrlVO = {
                                        liveUrlHigh: f,
                                        liveUrlNormal: p,
                                        liveUrlLow: h,
                                        liveUrlVeryLow: v,
                                        liveUrlUltraLow: g,
                                        playUrl: _
                                    },
                                    i.playUrlArr = i.generatorPlayUrlArr(i.liveUrlVO),
                                    i.currentUrlVO ? d = i.currentUrlVO.url : (i.currentUrlVO = i.playUrlArr[0] ? i.playUrlArr[0] : null,
                                    f ? d = f : h && (d = h))
                                }
                                i.signLiveUrl(t, e, d).then(function(t) {
                                    return i.playUrl = t
                                }).catch(function(t) {
                                    return i.toast(t.message)
                                }).then(function(t) {
                                    r(s)
                                })
                            } else {
                                var m = c.datetime
                                  , b = c.duration
                                  , y = c.viewerShareType;
                                i.viewerShareType = y,
                                m && b && (i.liveDatetime = m,
                                dingtalk.grouplive.getLiveBarrage && (i.liveDatetime = parseInt(m) + b + "")),
                                i.signPlaybackUrl(t, e, c.playUrl, i._key).then(function(t) {
                                    return i.playUrl = t
                                }).catch(function(t) {
                                    return i.toast(t.message)
                                }).then(function(t) {
                                    r(s)
                                })
                            }
                        })
                    } else
                        o("no dingtalk")
                }
                )
            },
            bindLog: function(t, e, n) {
                var i = this;
                n = n || 1;
                var r = this.genUuid();
                this.startTimingV2(t, e, n, r),
                window.addEventListener("beforeunload", function(o) {
                    i.stopTimingV2(t, e, n, r)
                })
            },
            bindOverEvent: function(t, e, n) {
                var i = this;
                window.dingtalk && window.dingtalk.grouplive && dingtalk.event.register(function(r, a) {
                    if ("live.statusChanged" === r && (a.cid == t && a.uuid == e && "stopped" == a.status && (t = encodeURIComponent(t),
                    e = encodeURIComponent(e),
                    dingtalk.window.openModalWithLocalPage("", "liveDetail.html?cid=" + t + "&uuid=" + e + "&anchorId=" + n + "&from=liveover", {
                        height: 588,
                        width: 420
                    })),
                    console.log("live.statusChanged:: eventData %o", a)),
                    "live.endImmediately" === r && a.cid === t && a.uuid === e && (i.globalHasEndedLive = !0),
                    a && a.hasOwnProperty("liveUuid") && a.liveUuid === e && ("live.viewsCountChanged" === r && i.viewsCountChanged && i.viewsCountChanged(a),
                    "live.likesCountChanged" === r && (i.likesCountChanged && i.likesCountChanged(a),
                    i.$eventBus.$emit("video:like")),
                    "live.videoStreamBreak" === r && (i.videoStreamBreak && i.videoStreamBreak(),
                    i.addBarrageMessage && i.addBarrageMessage({
                        username: "",
                        content: o.i18next.t("pc_grouplive_live_player_status_anchors_leave"),
                        type: 0
                    }),
                    i.isFirstTimePlay && (i.isFirstTimePlay = !1),
                    i.$eventBus.$emit("video:pause")),
                    "live.videoStreamRestore" === r && (i.videoStreamRestore && i.videoStreamRestore(),
                    i.addBarrageMessage && !i.isFirstTimePlay && i.addBarrageMessage({
                        username: "",
                        content: o.i18next.t("pc_grouplive_live_player_status_anchors_back"),
                        type: 0
                    })),
                    "live.punchEvent" === r && (i.localLog("INFO", "receive punch event, uuid: " + e + ", activeLivePunch: " + JSON.stringify(a)),
                    i.addLivePunchInfo(a))),
                    "im.conversation.disband" === r && ("live" === i.type ? i.messageText = o.i18next.t("pc_grouplive_disband") : i.messageText = o.i18next.t("pc_grouplive_playback_disband"),
                    a.cId && a.cId === t && (i.showMessage = !0,
                    i.$eventBus.$emit("video:pause"),
                    console.log("im.conversation.disband:: eventData %o", a))),
                    "im.conversation.kickedStatusChange" === r && ("live" === i.type ? i.messageText = o.i18next.t("pc_grouplive_kicked") : i.messageText = o.i18next.t("pc_grouplive_playback_kicked"),
                    a.cId && a.cId === t && (i.showMessage = !0,
                    i.$eventBus.$emit("video:pause"),
                    console.log("im.conversation.kickedStatusChange:: eventData %o", a))),
                    "im.conversation.quit" === r && ("live" === i.type ? i.messageText = o.i18next.t("pc_grouplive_quit") : i.messageText = o.i18next.t("pc_grouplive_playback_quit"),
                    a.cId && a.cId === t && (i.showMessage = !0,
                    i.$eventBus.$emit("video:pause"),
                    console.log("im.conversation.quit:: eventData %o", a))),
                    "live.barrageMesasge" === r)
                        if (i.showCrossBarrage) {
                            if (i.canvasBarrage) {
                                var s = a.username + ": " + a.content;
                                i.canvasBarrage.add({
                                    value: s
                                })
                            }
                        } else
                            i.addBarrageMessage && i.addBarrageMessage({
                                username: a.username,
                                content: a.content
                            });
                    "live.applyCountChange" === r && (i.applyCountChange && i.applyCountChange(a),
                    console.log("live.applyCountChange:: eventData %o", a))
                })
            },
            localLog: function(t, e) {
                window.dingtalk && window.dingtalk.util.log && (e = "【GroupLive】" + e,
                dingtalk.util.log(d[t], e))
            },
            vipAlarm: function(t, e) {
                if (window.dingtalk && window.dingtalk.util.vipAlarm) {
                    var n = !1;
                    try {
                        var i = /DingTalk\((\d+\.\d+\.\d+)/.exec(window.navigator.userAgent)[1];
                        n = (0,
                        a.compareVersion)("4.3.5", i, !0)
                    } catch (t) {}
                    n && (t = t || "Play Live Failed",
                    e = e || [],
                    window.dingtalk.util.vipAlarm("live", 6004, t, e))
                }
            },
            liveToggleFullScreen: function() {
                console.log("toggleFullScreen"),
                window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.liveToggleFullScreen && window.dingtalk.grouplive.liveToggleFullScreen()
            },
            applyLink: function(t, e) {
                return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.applyLink ? new Promise(function(n, i) {
                    window.dingtalk.grouplive.applyLink(t, e, function(t, e) {
                        t ? i(t) : n(e)
                    })
                }
                ) : Promise.reject()
            },
            cancelApplyLink: function(t, e) {
                return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.cancelApplyLink ? new Promise(function(n, i) {
                    window.dingtalk.grouplive.cancelApplyLink(t, e, function(t, e) {
                        t ? i(t) : n(e)
                    })
                }
                ) : Promise.reject()
            },
            getApplyLinkData: function(t, e) {
                return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getApplyLinkData ? new Promise(function(n, i) {
                    window.dingtalk.grouplive.getApplyLinkData(t, e, function(t, e) {
                        t ? i(t) : n(e)
                    })
                }
                ) : Promise.reject()
            },
            startTimingV2: function(t, e, n, i) {
                var r = this;
                this.continueTimingTimer && clearInterval(this.continueTimingTimer),
                (0,
                s.commonRpc)(s.apiList.startTimingV2, {}, [{
                    cid: t,
                    uuid: e,
                    type: n,
                    transId: i
                }]).then(function(o) {
                    if (o) {
                        var a = o.heartbeatIntervalSeconds;
                        a && (r.continueTimingTimer = setInterval(function() {
                            (0,
                            s.commonRpc)(s.apiList.continueTiming, {}, [{
                                cid: t,
                                uuid: e,
                                type: n,
                                transId: i
                            }])
                        }, 1e3 * a))
                    }
                })
            },
            stopTimingV2: function(t, e, n, i) {
                this.continueTimingTimer && clearInterval(this.continueTimingTimer),
                (0,
                s.commonRpc)(s.apiList.endTimingV2, {}, [{
                    cid: t,
                    uuid: e,
                    type: n,
                    transId: i
                }])
            },
            genUuid: function(t, e) {
                var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
                  , i = []
                  , r = void 0;
                if (e = e || n.length,
                t)
                    for (r = 0; r < t; r++)
                        i[r] = n[0 | Math.random() * e];
                else {
                    var o = void 0;
                    for (i[8] = i[13] = i[18] = i[23] = "-",
                    i[14] = "4",
                    r = 0; r < 36; r++)
                        i[r] || (o = 0 | 16 * Math.random(),
                        i[r] = n[19 == r ? 3 & o | 8 : o])
                }
                return i.join("")
            },
            isFirstTimeUserApplyLinkFunc: function() {
                return window.dingtalk.grouplive.hasApplied ? new Promise(function(t, e) {
                    window.dingtalk.grouplive.hasApplied(function(n, i) {
                        n ? e(n) : t(i)
                    })
                }
                ) : Promise.reject()
            },
            setNativeHasApplied: function() {
                window.dingtalk.grouplive.setApplied && window.dingtalk.grouplive.setApplied()
            },
            recordLiveQuota: function(t, e, n) {
                window.dingtalk.grouplive.liveStat && window.dingtalk.grouplive.liveStat(t, e, n, function(t) {})
            },
            startWatching: function(t, e, n) {
                window.dingtalk.grouplive && window.dingtalk.grouplive.startWatching && window.dingtalk.grouplive.startWatching(t, e, n, function(t, e) {})
            },
            getLiveBarrage: function(t, e, n) {
                return new Promise(function(i, r) {
                    window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLiveBarrage ? window.dingtalk.grouplive.getLiveBarrage(t, e, n, function(t, e) {
                        t && r(t),
                        i(e)
                    }) : i([])
                }
                )
            },
            getPlaybackBarrage: function(t, e, n) {
                var i = this;
                return new Promise(function(r, o) {
                    window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getPlaybackBarrage ? window.dingtalk.grouplive.getPlaybackBarrage(t, e, n, function(a, s) {
                        if (a)
                            o(a),
                            i.localLog("INFO", "getPlaybackBarrage failed: [cid]" + t + ",[msgTime]" + e + ",[count]" + n);
                        else {
                            r(s);
                            var u = s.msgs
                              , c = (void 0 === u ? [] : u).length || 0;
                            i.localLog("INFO", "getPlaybackBarrage success: [cid]" + t + ",[msgTime]" + e + ",[count]" + n + ",[result length]" + c)
                        }
                    }) : r({
                        end: !0,
                        msgs: []
                    })
                }
                )
            },
            getLiveLatestMessage: function(t, e, n) {
                var i = this;
                return new Promise(function(r, o) {
                    window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLiveLatestMessage ? window.dingtalk.grouplive.getLiveLatestMessage(t, e, n, function(a, s) {
                        if (a)
                            o(a),
                            i.localLog("INFO", "getLiveLatestMessage failed: [cid]" + t + ",[msgTime]" + e + ",[count]" + n);
                        else {
                            r(s);
                            var u = s.length || 0;
                            i.localLog("INFO", "getLiveLatestMessage success: [cid]" + t + ",[msgTime]" + e + ",[count]" + n + ",[result length]" + u)
                        }
                    }) : r([])
                }
                )
            },
            getLiveSignedPlayUrl: function(t, e) {
                var n = this;
                return new Promise(function(i, r) {
                    window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLivePlayUrl ? window.dingtalk.grouplive.getLivePlayUrl(t, e, function(t, o) {
                        if (t)
                            r(t),
                            n.localLog("INFO", "getLivePlayUrl failed: live uuid=" + e);
                        else {
                            var a = o.signedPlayUrl;
                            a && (n.playUrl = a.replace("http://", "//")),
                            i(a),
                            n.localLog("INFO", "getLivePlayUrl success: live uuid=" + e)
                        }
                    }) : r("no dingtalk.grouplive.getLivePlayUrl")
                }
                )
            }
        }
    };
    e.default = f
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LIVE_OPEN_CODE = {
        OPEN_LIVE_SUCCESS: 0,
        OPEN_LIVE_PAUSE: 1,
        NETWORK_TIMEOUT: 2,
        CEF_NOT_SUPPORT_FLV: 3,
        NETWORK_NO_SOURCE: 4,
        OPEN_LIVE_OTHERS: 49
    },
    e.LIVE_ERROR_CODE = {
        LIVE_SUCCESS: 0,
        NETWORK_TIMEOUT: 1,
        NETWORK_NO_SOURCE: 2,
        CEF_NOT_SUPPORT_FLV: 3,
        OTHERS_ERROR: 49
    },
    e.LIVE_TYPE = {
        LIVE: 1,
        PLAYBACK: 2
    },
    e.MAX_BARRAGE_PAGE_SIZE = 20,
    e.LATEST_LIVE_BARRAGE_COUNT = 10,
    e.MAX_BARRAGE_COUNT = 500,
    e.VIDDEO_CLARITY_ENUM = {
        ULTRALOW: 4,
        VERYLOW: 3,
        LOW: 2,
        NORMAL: 1,
        HIGH: 0,
        OTHERS: 999
    },
    e.LIVE_OPEN_SUCCESS_CODE = {
        OPEN_LIVE_SUCCESS: 1,
        OPEN_LIVE_FAIL: 0
    },
    e.PUBLIC_GROUP_LIVE_TYPE = {
        PRIVATE: 0,
        PUBLIC: 1
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        return "function" == typeof Symbol && Symbol.observable || "@@observable"
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.predicate = t,
            this.thisArg = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate,this.thisArg))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.predicate = n,
            r.thisArg = i,
            r.count = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e;
            try {
                e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (t) {
                return void this.destination.error(t)
            }
            e && this.destination.next(t)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            var o;
            if (o = "function" == typeof t ? t : function() {
                return t
            }
            ,
            "function" == typeof e)
                return n.lift(new r(o,e));
            var a = Object.create(n, i.b);
            return a.source = n,
            a.subjectFactory = o,
            a
        }
    }
    ;
    var i = n(137);
    var r = function() {
        function t(t, e) {
            this.subjectFactory = t,
            this.selector = e
        }
        return t.prototype.call = function(t, e) {
            var n = this.selector
              , i = this.subjectFactory()
              , r = n(i).subscribe(t);
            return r.add(e.subscribe(i)),
            r
        }
        ,
        t
    }()
}
, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
            var o = e[r]
              , a = o[0]
              , s = {
                id: t + ":" + r,
                css: o[1],
                media: o[2],
                sourceMap: o[3]
            };
            i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }
}
, function(t, e, n) {
    "use strict";
    e.a = {
        processors: {},
        addPostProcessor: function(t) {
            this.processors[t.name] = t
        },
        handle: function(t, e, n, i, r) {
            var o = this;
            return t.forEach(function(t) {
                o.processors[t] && (e = o.processors[t].process(e, n, i, r))
            }),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.b = function(t) {
        t.resStore && (t.resources = t.resStore);
        t.ns && t.ns.defaultNs ? (t.defaultNS = t.ns.defaultNs,
        t.ns = t.ns.namespaces) : t.defaultNS = t.ns || "translation";
        t.fallbackToDefaultNS && t.defaultNS && (t.fallbackNS = t.defaultNS);
        t.saveMissing = t.sendMissing,
        t.saveMissingTo = t.sendMissingTo || "current",
        t.returnNull = !t.fallbackOnNull,
        t.returnEmptyString = !t.fallbackOnEmpty,
        t.returnObjects = t.returnObjectTrees,
        t.joinArrays = "\n",
        t.returnedObjectHandler = t.objectTreeKeyHandler,
        t.parseMissingKeyHandler = t.parseMissingKey,
        t.appendNamespaceToMissingKey = !0,
        t.nsSeparator = t.nsseparator || ":",
        t.keySeparator = t.keyseparator || ".",
        "sprintf" === t.shortcutFunction && (t.overloadTranslationOptionHandler = function(t) {
            for (var e = [], n = 1; n < t.length; n++)
                e.push(t[n]);
            return {
                postProcess: "sprintf",
                sprintf: e
            }
        }
        );
        t.whitelist = t.lngWhitelist,
        t.preload = t.preload,
        "current" === t.load && (t.load = "currentOnly");
        "unspecific" === t.load && (t.load = "languageOnly");
        t.backend = t.backend || {},
        t.backend.loadPath = t.resGetPath || "locales/__lng__/__ns__.json",
        t.backend.addPath = t.resPostPath || "locales/add/__lng__/__ns__",
        t.backend.allowMultiLoading = t.dynamicLoad,
        t.cache = t.cache || {},
        t.cache.prefix = "res_",
        t.cache.expirationTime = 6048e5,
        t.cache.enabled = t.useLocalStorage,
        (t = r(t)).defaultVariables && (t.interpolation.defaultVariables = t.defaultVariables);
        return t
    }
    ,
    e.c = function(t) {
        return (t = r(t)).joinArrays = "\n",
        t
    }
    ,
    e.d = function(t) {
        (t.interpolationPrefix || t.interpolationSuffix || void 0 !== t.escapeInterpolation) && (t = r(t));
        return t.nsSeparator = t.nsseparator,
        t.keySeparator = t.keyseparator,
        t.returnObjects = t.returnObjectTrees,
        t
    }
    ,
    e.a = function(t) {
        t.lng = function() {
            return i.a.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),
            t.services.languageUtils.toResolveHierarchy(t.language)[0]
        }
        ,
        t.preload = function(e, n) {
            i.a.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),
            t.loadLanguages(e, n)
        }
        ,
        t.setLng = function(e, n, r) {
            return i.a.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),
            "function" == typeof n && (r = n,
            n = {}),
            n || (n = {}),
            !0 === n.fixLng && r ? r(null, t.getFixedT(e)) : t.changeLanguage(e, r)
        }
        ,
        t.addPostProcessor = function(e, n) {
            i.a.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),
            t.use({
                type: "postProcessor",
                name: e,
                process: n
            })
        }
    }
    ;
    var i = n(10);
    function r(t) {
        return t.interpolation = {
            unescapeSuffix: "HTML"
        },
        t.interpolation.prefix = t.interpolationPrefix || "__",
        t.interpolation.suffix = t.interpolationSuffix || "__",
        t.interpolation.escapeValue = t.escapeInterpolation || !1,
        t.interpolation.nestingPrefix = t.reusePrefix || "$t(",
        t.interpolation.nestingSuffix = t.reuseSuffix || ")",
        t
    }
}
, function(t, e, n) {
    var i, r;
    !function(o) {
        if (void 0 === (r = "function" == typeof (i = o) ? i.call(e, n, e, t) : i) || (t.exports = r),
        !0,
        t.exports = o(),
        !!0) {
            var a = window.Cookies
              , s = window.Cookies = o();
            s.noConflict = function() {
                return window.Cookies = a,
                s
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    e[i] = n[i]
            }
            return e
        }
        function e(t) {
            return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(i) {
            function r() {}
            function o(e, n, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = t({
                        path: "/"
                    }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a)
                    } catch (t) {}
                    n = i.write ? i.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var u in o)
                        o[u] && (s += "; " + u,
                        !0 !== o[u] && (s += "=" + o[u].split(";")[0]));
                    return document.cookie = e + "=" + n + s
                }
            }
            function a(t, n) {
                if ("undefined" != typeof document) {
                    for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                        var s = o[a].split("=")
                          , u = s.slice(1).join("=");
                        n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                        try {
                            var c = e(s[0]);
                            if (u = (i.read || i)(u, c) || e(u),
                            n)
                                try {
                                    u = JSON.parse(u)
                                } catch (t) {}
                            if (r[c] = u,
                            t === c)
                                break
                        } catch (t) {}
                    }
                    return t ? r[t] : r
                }
            }
            return r.set = o,
            r.get = function(t) {
                return a(t, !1)
            }
            ,
            r.getJSON = function(t) {
                return a(t, !0)
            }
            ,
            r.remove = function(e, n) {
                o(e, "", t(n, {
                    expires: -1
                }))
            }
            ,
            r.defaults = {},
            r.withConverter = n,
            r
        }(function() {})
    })
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(24);
    e.getStandardLanguage = function(t) {
        return function(t) {
            for (; t.length > 0; ) {
                var e = t.join("_");
                if (i.LANGUAGE_DICTIONARY.hasOwnProperty(e))
                    return i.LANGUAGE_DICTIONARY[e];
                t.pop()
            }
            return i.Language.en_US
        }(t.toLowerCase().split(/[-_]/g))
    }
    ,
    e.hasWindow = function() {
        return "undefined" != typeof window
    }
    ,
    e.NAVIGATOR_LANGUAGE_REGEX = /language\/(\S+)/
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return "function" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n) {
            var i = t.call(this, e, n) || this;
            return i.scheduler = e,
            i.work = n,
            i.pending = !1,
            i
        }
        return i.a(e, t),
        e.prototype.schedule = function(t, e) {
            if (void 0 === e && (e = 0),
            this.closed)
                return this;
            this.state = t;
            var n = this.id
              , i = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(i, n, e)),
            this.pending = !0,
            this.delay = e,
            this.id = this.id || this.requestAsyncId(i, this.id, e),
            this
        }
        ,
        e.prototype.requestAsyncId = function(t, e, n) {
            return void 0 === n && (n = 0),
            setInterval(t.flush.bind(t, this), n)
        }
        ,
        e.prototype.recycleAsyncId = function(t, e, n) {
            if (void 0 === n && (n = 0),
            null !== n && this.delay === n && !1 === this.pending)
                return e;
            clearInterval(e)
        }
        ,
        e.prototype.execute = function(t, e) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(t, e);
            if (n)
                return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        ,
        e.prototype._execute = function(t, e) {
            var n = !1
              , i = void 0;
            try {
                this.work(t)
            } catch (t) {
                n = !0,
                i = !!t && t || new Error(t)
            }
            if (n)
                return this.unsubscribe(),
                i
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.id
              , e = this.scheduler
              , n = e.actions
              , i = n.indexOf(this);
            this.work = null,
            this.state = null,
            this.pending = !1,
            this.scheduler = null,
            -1 !== i && n.splice(i, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            this.delay = null
        }
        ,
        e
    }(n(232).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var i = n(0)
      , r = n(142)
      , o = function(t) {
        function e(n, i) {
            void 0 === i && (i = r.a.now);
            var o = t.call(this, n, function() {
                return e.delegate && e.delegate !== o ? e.delegate.now() : i()
            }) || this;
            return o.actions = [],
            o.active = !1,
            o.scheduled = void 0,
            o
        }
        return i.a(e, t),
        e.prototype.schedule = function(n, i, r) {
            return void 0 === i && (i = 0),
            e.delegate && e.delegate !== this ? e.delegate.schedule(n, i, r) : t.prototype.schedule.call(this, n, i, r)
        }
        ,
        e.prototype.flush = function(t) {
            var e = this.actions;
            if (this.active)
                e.push(t);
            else {
                var n;
                this.active = !0;
                do {
                    if (n = t.execute(t.state, t.delay))
                        break
                } while (t = e.shift());if (this.active = !1,
                n) {
                    for (; t = e.shift(); )
                        t.unsubscribe();
                    throw n
                }
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return e ? Object(o.a)(t, e) : new i.a(Object(r.a)(t))
    }
    ;
    var i = n(2)
      , r = n(144)
      , o = n(119)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t() {
            return Error.call(this),
            this.message = "argument out of range",
            this.name = "ArgumentOutOfRangeError",
            this
        }
        return t.prototype = Object.create(Error.prototype),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t() {
            return Error.call(this),
            this.message = "no elements in sequence",
            this.name = "EmptyError",
            this
        }
        return t.prototype = Object.create(Error.prototype),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n, i) {
        void 0 === i && (i = Number.POSITIVE_INFINITY);
        if ("function" == typeof n)
            return function(r) {
                return r.pipe(t(function(t, i) {
                    return Object(u.a)(e(t, i)).pipe(Object(s.a)(function(e, r) {
                        return n(t, e, i, r)
                    }))
                }, i))
            }
            ;
        "number" == typeof n && (i = n);
        return function(t) {
            return t.lift(new c(e,i))
        }
    }
    ;
    var i = n(0)
      , r = n(4)
      , o = n(3)
      , a = n(21)
      , s = n(14)
      , u = n(18);
    var c = function() {
        function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
            this.project = t,
            this.concurrent = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new l(t,this.project,this.concurrent))
        }
        ,
        t
    }()
      , l = function(t) {
        function e(e, n, i) {
            void 0 === i && (i = Number.POSITIVE_INFINITY);
            var r = t.call(this, e) || this;
            return r.project = n,
            r.concurrent = i,
            r.hasCompleted = !1,
            r.buffer = [],
            r.active = 0,
            r.index = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
        }
        ,
        e.prototype._tryNext = function(t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.active++,
            this._innerSub(e, t, n)
        }
        ,
        e.prototype._innerSub = function(t, e, n) {
            var i = new a.a(this,e,n)
              , o = this.destination;
            o.add(i);
            var s = Object(r.a)(this, t, void 0, void 0, i);
            s !== i && o.add(s)
        }
        ,
        e.prototype._complete = function() {
            this.hasCompleted = !0,
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(e)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            var e = this.buffer;
            this.remove(t),
            this.active--,
            e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = null);
        return function(e) {
            return e.lift(new o(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t) {
            this.defaultValue = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.defaultValue))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.defaultValue = n,
            i.isEmpty = !0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.isEmpty = !1,
            this.destination.next(t)
        }
        ,
        e.prototype._complete = function() {
            this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = u(n(58))
      , r = u(n(59))
      , o = u(n(60))
      , a = u(n(61))
      , s = u(n(62));
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var c = {
        en_US: i.default,
        zh_CN: r.default,
        zh_TW: o.default,
        zh_HK: a.default,
        ja_JP: s.default
    };
    e.default = c
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        INFO: 0,
        WARN: 1,
        ERROR: 2
    };
    e.default = function(t, e) {
        window.dingtalk && window.dingtalk.util.log && (e = "【GroupLive】" + e,
        dingtalk.util.log(i[t], e))
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = !1
      , r = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
            t && (new Error).stack;
            i = t
        },
        get useDeprecatedSynchronousErrorHandling() {
            return i
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function() {}
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t() {
            return Error.call(this),
            this.message = "object unsubscribed",
            this.name = "ObjectUnsubscribedError",
            this
        }
        return t.prototype = Object.create(Error.prototype),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return i
    }),
    n.d(e, "a", function() {
        return s
    });
    var i, r = n(16), o = n(52), a = n(120);
    i || (i = {});
    var s = function() {
        function t(t, e, n) {
            this.kind = t,
            this.value = e,
            this.error = n,
            this.hasValue = "N" === t
        }
        return t.prototype.observe = function(t) {
            switch (this.kind) {
            case "N":
                return t.next && t.next(this.value);
            case "E":
                return t.error && t.error(this.error);
            case "C":
                return t.complete && t.complete()
            }
        }
        ,
        t.prototype.do = function(t, e, n) {
            switch (this.kind) {
            case "N":
                return t && t(this.value);
            case "E":
                return e && e(this.error);
            case "C":
                return n && n()
            }
        }
        ,
        t.prototype.accept = function(t, e, n) {
            return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
        }
        ,
        t.prototype.toObservable = function() {
            switch (this.kind) {
            case "N":
                return Object(o.a)(this.value);
            case "E":
                return Object(a.a)(this.error);
            case "C":
                return Object(r.b)()
            }
            throw new Error("unexpected notification kind value")
        }
        ,
        t.createNext = function(e) {
            return void 0 !== e ? new t("N",e) : t.undefinedValueNotification
        }
        ,
        t.createError = function(e) {
            return new t("E",void 0,e)
        }
        ,
        t.createComplete = function() {
            return t.completeNotification
        }
        ,
        t.completeNotification = new t("C"),
        t.undefinedValueNotification = new t("N",void 0),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(i.a)(n) ? (t.pop(),
        Object(o.a)(t, n)) : Object(r.a)(t)
    }
    ;
    var i = n(17)
      , r = n(40)
      , o = n(119)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    });
    var i = n(0)
      , r = n(11)
      , o = n(9)
      , a = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.value = null,
            e.hasNext = !1,
            e.hasCompleted = !1,
            e
        }
        return i.a(e, t),
        e.prototype._subscribe = function(e) {
            return this.hasError ? (e.error(this.thrownError),
            o.a.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value),
            e.complete(),
            o.a.EMPTY) : t.prototype._subscribe.call(this, e)
        }
        ,
        e.prototype.next = function(t) {
            this.hasCompleted || (this.value = t,
            this.hasNext = !0)
        }
        ,
        e.prototype.error = function(e) {
            this.hasCompleted || t.prototype.error.call(this, e)
        }
        ,
        e.prototype.complete = function() {
            this.hasCompleted = !0,
            this.hasNext && t.prototype.next.call(this, this.value),
            t.prototype.complete.call(this)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return Object(r.a)()(i.a.apply(void 0, t))
    }
    ;
    var i = n(52)
      , r = n(149)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return !Object(i.a)(t) && t - parseFloat(t) + 1 >= 0
    }
    ;
    var i = n(12)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = u);
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(42)
      , o = n(1);
    var a = function() {
        function t(t) {
            this.errorFactory = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.errorFactory))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.errorFactory = n,
            i.hasValue = !1,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.hasValue = !0,
            this.destination.next(t)
        }
        ,
        e.prototype._complete = function() {
            if (this.hasValue)
                return this.destination.complete();
            var t = void 0;
            try {
                t = this.errorFactory()
            } catch (e) {
                t = e
            }
            this.destination.error(t)
        }
        ,
        e
    }(o.a);
    function u() {
        return new r.a
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (arguments.length >= 2)
            return function(n) {
                return Object(a.a)(Object(i.a)(t, e), Object(r.a)(1), Object(o.a)(e))(n)
            }
            ;
        return function(e) {
            return Object(a.a)(Object(i.a)(function(e, n, i) {
                return t(e, n, i + 1)
            }), Object(r.a)(1))(e)
        }
    }
    ;
    var i = n(128)
      , r = n(127)
      , o = n(45)
      , a = n(116)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        pc_grouplive_all_live: "All",
        pc_grouplive_my_live: "My Live",
        pc_grouplive_expire_notice_playback: "Playback List (recent 12 months)",
        pc_grouplive_data_live_over: "Great. Congratulations on completing a live broadcast.",
        pc_grouplive_data_duration: "Duration",
        pc_grouplive_data_view_count: "Views",
        pc_grouplive_data_total_count: "Watched",
        pc_grouplive_data_member_count: "Members",
        pc_grouplive_data_view_detail_member: "View details",
        pc_grouplive_view_playback: "View Playback",
        pc_grouplive_data_join: "Attendee",
        pc_grouplive_data_unjoin: "Absence",
        pc_grouplive_data_view_time: "Duration",
        pc_grouplive_data_anchor_title: "Host",
        pc_grouplive_data_thumbs_up: "Likes",
        pc_grouplive_data_message_count: "Messages",
        pc_grouplive_data_detail_entry_prompt: 'You can view data details again in "Live Playback List" and set playback download permissions',
        pc_grouplive_data_export: "Export data",
        pc_grouplive_data_exporting: "Exporting",
        pc_grouplive_disband: "Group owner disband the group. Live window will close.",
        pc_grouplive_quit: "You quit from the group. Live window will close.",
        pc_grouplive_kicked: "You have been removed from the group. Live window will close.",
        pc_grouplive_playback_kicked: "You have been removed from this group, the playback window will close automatically",
        pc_grouplive_playback_disband: "This group has been disbanded by the owner, the playback window will close automatically",
        pc_grouplive_playback_quit: "You have left this group, the playback window will close automatically ",
        pc_grouplive_i_know: "OK",
        pc_grouplive_notice: "Notice",
        pc_grouplive_live_position: "Chat position",
        pc_grouplive_live_status: "Live",
        pc_grouplive_live_views: "watching",
        pc_grouplive_h5_my_live: "My Live",
        pc_groupsetting_h5_set_anchor: "Select anchors",
        pc_grouplive_pause_status: "Live paused",
        pc_grouplive_live_over_save: 'This live replay has been saved to "Live Playback"',
        pc_grouplive_live_over_fail: "broadcast time less than 1 minutes, do not keep looking back on",
        pc_grouplive_playback_all_viewer: "All members have viewed",
        pc_grouplive_playback_no_viewer: "No one has viewed",
        pc_grouplive_playback_no_live: "No live playback",
        pc_grouplive_view_more: "See more",
        dt_lv_group_live_title_placeholder: "Live in {{value1}}",
        pc_grouplive_back_to_conversation: "Back",
        pc_grouplive_data_export_success: "Live statistics has been exported successfully.",
        pc_grouplive_data_export_failure: "Live statistics export failed!",
        dt_common_confirm: "OK",
        dt_common_cancel: "Cancel",
        pc_grouplive_live_praise: "like",
        pc_grouplive_live_player_error_text: "Host is on leave, wait minutes",
        pc_grouplive_live_player_force_stop: "Do you want to end current live?",
        pc_grouplive_live_player_force_stop_title: "End the Live",
        pc_grouplive_live_message_box_cancel: "Cancel",
        pc_grouplive_live_player_force_stop_ok_btn: "End",
        pc_grouplive_live_player_report: "Report",
        pc_grouplive_live_player_stalled_text: "Error, please try again",
        pc_grouplive_live_player_pausing: "Live pause",
        pc_grouplive_live_player_status_anchors_leave: "Anchors away, live pause",
        pc_grouplive_live_player_status_anchors_back: "Anchor back it, the forthcoming resumption of broadcast content",
        pc_grouplive_live_player_rotate_btn_tips: "Screen rotation",
        pc_grouplive_live_player_barrage_btn_tips: "Barrage",
        dt_lv_live_bit_rate_1: "180P",
        dt_lv_live_bit_rate_2: "270P",
        dt_lv_live_bit_rate_3: "360P",
        dt_lv_live_bit_rate_4: "480P",
        dt_lv_live_bit_rate_5: "720P",
        pc_grouplive_live_player_network_timeout_text: "Network timeout, please try again later",
        pc_grouplive_live_player_unsurpport_text: "The current version does not support video playback",
        pc_grouplive_apply_link_preview_title: "Effect Preview",
        pc_grouplive_apply_link_cancel_text: "Later",
        pc_grouplive_apply_link_confirm_text: "Apply",
        pc_grouplive_apply_link_btn_text: "Apply for connecting",
        pc_grouplive_apply_link_waiting_number_text: "{{value1}} applying",
        pc_grouplive_apply_link_webrtc_permission_deny_text: "Permission denied",
        pc_grouplive_apply_link_webrtc_notfound_text: "Camera not found",
        pc_grouplive_apply_link_webrtc_default_error_text: "Current version does not support preview",
        pc_grouplive_apply_linking_member_list: "Apply linking member list",
        pc_grouplive_apply_link_cancel_btn_text: "Cancel",
        pc_grouplive_introduction_btn_text: "Live Introduction",
        pc_grouplive_multi_live_tag: "Cross Group Live",
        pc_grouplive_playback_playrate: "Speed",
        pc_grouplive_apply_link_waiting_text: "Applying",
        pc_grouplive_live_player_share_btn_tips: "Share",
        pc_grouplive_live_favor_ban_tips: "The anchor has turned on disable like, not like at present",
        pc_grouplive_live_local_preview_btn_text: "Local Preview",
        pc_grouplive_live_send_comment_btn_text: "Send",
        pc_grouplive_live_send_comment_input_placeholder: "Leave a comment",
        pc_grouplive_live_send_comment_exception_text: "Sending exception",
        pc_text_too_long: "Message too long , please reduce to {{value1}}",
        pc_grouplive_switch_clarity_success_text: "Has been switched to {{value1}}",
        pc_grouplive_invite_you_to_punch: "{{value1}} Invite you to sign in",
        pc_grouplive_count_down: "Countdown to % @ seconds",
        pc_grouplive_punch_rightnow: "Sign in now",
        pc_grouplive_close_punch_confirm_text: "Pop-up close after will not be able to sign in OK to close?",
        pc_grouplive_confirm: "Tips",
        pc_grouplive_edu_apply_link_btn_text: "Raise hand",
        pc_grouplive_edu_apply_link_cancle_btn_text: "Cancel"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        pc_grouplive_all_live: "全部直播",
        pc_grouplive_my_live: "我的直播",
        pc_grouplive_expire_notice_playback: "保存群内近12个月的回放视频",
        pc_grouplive_data_live_over: "太棒了，恭喜你完成一场直播",
        pc_grouplive_data_duration: "直播时长",
        pc_grouplive_data_view_count: "观看次数",
        pc_grouplive_data_total_count: "观看人数",
        pc_grouplive_data_member_count: "群人数",
        pc_grouplive_data_view_detail_member: "查看详细数据",
        pc_grouplive_view_playback: "查看回放",
        pc_grouplive_data_join: "参与人员",
        pc_grouplive_data_unjoin: "未参与人员",
        pc_grouplive_data_view_time: "观看时长",
        pc_grouplive_data_anchor_title: "讲师",
        pc_grouplive_data_thumbs_up: "点赞数",
        pc_grouplive_data_message_count: "消息数",
        pc_grouplive_data_detail_entry_prompt: "你可以在“直播回放”中再次查看数据详情， 并设置回放下载权限",
        pc_grouplive_data_export: "导出数据",
        pc_grouplive_data_exporting: "导出中",
        pc_grouplive_disband: "此群已被群主解散，直播窗口将自动关闭",
        pc_grouplive_quit: "你已退出此群，直播窗口将自动关闭",
        pc_grouplive_kicked: "你已被移除此群，直播窗口将自动关闭",
        pc_grouplive_playback_kicked: "你已被移除此群，回放窗口将自动关闭",
        pc_grouplive_playback_disband: "此群已被群主解散，回放窗口将自动关闭",
        pc_grouplive_playback_quit: "你已退出此群，回放窗口将自动关闭",
        pc_grouplive_i_know: "我知道了",
        pc_grouplive_notice: "通知",
        pc_grouplive_live_position: "定位聊天",
        pc_grouplive_live_status: "直播中",
        pc_grouplive_live_views: "人观看",
        pc_grouplive_h5_my_live: "我发起的直播",
        pc_groupsetting_h5_set_anchor: "设置讲师",
        pc_grouplive_pause_status: "直播暂停",
        pc_grouplive_live_over_save: "本次直播回放已保存到“直播回放”中",
        pc_grouplive_live_over_fail: "直播时间不足1分钟，不保存回看",
        pc_grouplive_playback_all_viewer: "全部成员已观看",
        pc_grouplive_playback_no_viewer: "暂无人观看",
        pc_grouplive_playback_no_live: "暂无直播回放",
        pc_grouplive_view_more: "查看更多",
        dt_lv_group_live_title_placeholder: "{{value1}}群直播",
        pc_grouplive_back_to_conversation: "返回群聊",
        pc_grouplive_data_export_success: "直播数据导出成功。",
        pc_grouplive_data_export_failure: "直播数据导出失败！",
        dt_common_confirm: "确定",
        dt_common_cancel: "取消",
        pc_grouplive_live_praise: "赞",
        pc_grouplive_live_player_error_text: "主播离开一会，稍等片刻",
        pc_grouplive_live_player_force_stop: "确定要结束直播吗？",
        pc_grouplive_live_player_force_stop_title: "结束直播",
        pc_grouplive_live_message_box_cancel: "取消",
        pc_grouplive_live_player_force_stop_ok_btn: "结束",
        pc_grouplive_live_player_report: "举报",
        pc_grouplive_live_player_stalled_text: "出错了，请重试",
        pc_grouplive_live_player_pausing: "直播暂停中",
        pc_grouplive_live_player_status_anchors_leave: "主播离开，直播暂停",
        pc_grouplive_live_player_status_anchors_back: "主播回来啦，直播内容即将恢复",
        pc_grouplive_live_player_rotate_btn_tips: "屏幕旋转",
        pc_grouplive_live_player_barrage_btn_tips: "消息弹幕",
        dt_lv_live_bit_rate_1: "极速",
        dt_lv_live_bit_rate_2: "流畅",
        dt_lv_live_bit_rate_3: "标清",
        dt_lv_live_bit_rate_4: "高清",
        dt_lv_live_bit_rate_5: "超清",
        pc_grouplive_live_player_network_timeout_text: "网络超时，请稍后重试",
        pc_grouplive_live_player_unsurpport_text: "当前版本不支持视频播放",
        pc_grouplive_apply_link_preview_title: "效果预览",
        pc_grouplive_apply_link_cancel_text: "稍后再说",
        pc_grouplive_apply_link_confirm_text: "申请连麦",
        pc_grouplive_apply_link_btn_text: "申请连麦",
        pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申请",
        pc_grouplive_apply_link_webrtc_permission_deny_text: "用户代理或者当前平台不允许请求使用摄像设备",
        pc_grouplive_apply_link_webrtc_notfound_text: "未找到摄像设备",
        pc_grouplive_apply_link_webrtc_default_error_text: "当前版本不支持效果预览",
        pc_grouplive_apply_linking_member_list: "连麦申请",
        pc_grouplive_apply_link_cancel_btn_text: "取消申请",
        pc_grouplive_introduction_btn_text: "群直播介绍",
        pc_grouplive_multi_live_tag: "联播",
        pc_grouplive_playback_playrate: "倍速",
        pc_grouplive_apply_link_waiting_text: "连麦申请中",
        pc_grouplive_live_player_share_btn_tips: "分享",
        pc_grouplive_live_favor_ban_tips: "主播开启了禁用点赞，当前不可点赞",
        pc_grouplive_live_local_preview_btn_text: "本地预览",
        pc_grouplive_live_send_comment_btn_text: "发送",
        pc_grouplive_live_send_comment_input_placeholder: "说点什么...",
        pc_grouplive_live_send_comment_exception_text: "发送异常",
        pc_text_too_long: "消息过长，请调整至 {{value1}} 字以内",
        pc_grouplive_switch_clarity_success_text: "已切换为{{value1}}",
        pc_grouplive_invite_you_to_punch: "{{value1}}邀请你签到",
        pc_grouplive_count_down: "倒计时{{value1}}秒",
        pc_grouplive_punch_rightnow: "立即签到",
        pc_grouplive_close_punch_confirm_text: "弹窗关闭后将无法签到，确定关闭吗？",
        pc_grouplive_confirm: "提示",
        pc_grouplive_edu_apply_link_btn_text: "举手连麦",
        pc_grouplive_edu_apply_link_cancle_btn_text: "取消举手"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        pc_grouplive_all_live: "全部直播",
        pc_grouplive_my_live: "我的直播",
        pc_grouplive_expire_notice_playback: "保存群內近12個月的重播視頻",
        pc_grouplive_data_live_over: "太棒了，恭喜你完成一場直播",
        pc_grouplive_data_duration: "直播時長",
        pc_grouplive_data_view_count: "观看次数",
        pc_grouplive_data_total_count: "觀看人數",
        pc_grouplive_data_member_count: "群人数",
        pc_grouplive_data_view_detail_member: "查看詳細數據",
        pc_grouplive_view_playback: "查看回放",
        pc_grouplive_data_join: "參與人員",
        pc_grouplive_data_unjoin: "未参与人员",
        pc_grouplive_data_view_time: "观看时长",
        pc_grouplive_data_anchor_title: "主播",
        pc_grouplive_data_thumbs_up: "點贊數",
        pc_grouplive_data_message_count: "消息數",
        pc_grouplive_data_detail_entry_prompt: "你可以在「直播重播」中再次查看資料詳情， 並設置重播下載許可權",
        pc_grouplive_data_export: "匯出數據",
        pc_grouplive_data_exporting: "匯出中",
        pc_grouplive_disband: "此群已被群主解散，直播窗口将自动关闭",
        pc_grouplive_quit: "你已退出此群，直播窗口将自动关闭",
        pc_grouplive_kicked: "你已被移除此群，直播窗口将自动关闭",
        pc_grouplive_playback_kicked: "你已被移除此群，回放窗口将自动关闭",
        pc_grouplive_playback_disband: "此群已被群主解散，回放窗口将自动关闭",
        pc_grouplive_playback_quit: "你已退出此群，回放窗口将自动关闭",
        pc_grouplive_i_know: "我知道了",
        pc_grouplive_notice: "通知",
        pc_grouplive_live_position: "定位聊天",
        pc_grouplive_live_status: "直播中",
        pc_grouplive_live_views: "人觀看",
        pc_grouplive_h5_my_live: "我發起的直播",
        pc_groupsetting_h5_set_anchor: "設置讲师",
        pc_grouplive_pause_status: "直播暫停",
        pc_grouplive_live_over_save: "本次直播重播已保存到“直播重播”中",
        pc_grouplive_live_over_fail: "直播時間不足1分鐘，不保存回看",
        pc_grouplive_playback_all_viewer: "全部成员已观看",
        pc_grouplive_playback_no_viewer: "暂无人观看",
        pc_grouplive_playback_no_live: "暫無直播重播",
        pc_grouplive_view_more: "查看更多",
        dt_lv_group_live_title_placeholder: "{{value1}}群直播",
        pc_grouplive_back_to_conversation: "返回群聊",
        pc_grouplive_data_export_success: "直播數據匯出成功。",
        pc_grouplive_data_export_failure: "直播數據匯出失敗！",
        dt_common_confirm: "確定",
        dt_common_cancel: "取消",
        pc_grouplive_live_praise: "赞",
        pc_grouplive_live_player_error_text: "主播离开一会，稍等片刻",
        pc_grouplive_live_player_force_stop: "確定要結束直播嗎？",
        pc_grouplive_live_player_force_stop_title: "結束直播",
        pc_grouplive_live_message_box_cancel: "取消",
        pc_grouplive_live_player_force_stop_ok_btn: "結束",
        pc_grouplive_live_player_report: "舉報",
        pc_grouplive_live_player_stalled_text: "出错了，请重试",
        pc_grouplive_live_player_pausing: "直播暫停中",
        pc_grouplive_live_player_status_anchors_leave: "主播離開，直播暫停",
        pc_grouplive_live_player_status_anchors_back: "主播回來啦，直播內容即將恢復",
        pc_grouplive_live_player_rotate_btn_tips: "荧幕旋轉",
        pc_grouplive_live_player_barrage_btn_tips: "消息彈幕",
        dt_lv_live_bit_rate_1: "極速",
        dt_lv_live_bit_rate_2: "流暢",
        dt_lv_live_bit_rate_3: "標清",
        dt_lv_live_bit_rate_4: "高清",
        dt_lv_live_bit_rate_5: "超清",
        pc_grouplive_live_player_network_timeout_text: "網絡超時，請稍後重試",
        pc_grouplive_live_player_unsurpport_text: "當前版本不支持視頻播放",
        pc_grouplive_apply_link_preview_title: "效果預覽",
        pc_grouplive_apply_link_cancel_text: "稍後再說",
        pc_grouplive_apply_link_confirm_text: "申請連麥",
        pc_grouplive_apply_link_btn_text: "申請連麥",
        pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申請",
        pc_grouplive_apply_link_webrtc_permission_deny_text: "用戶代理或者當前平臺不允許請求使用攝像設備",
        pc_grouplive_apply_link_webrtc_notfound_text: "未找到攝像設備",
        pc_grouplive_apply_link_webrtc_default_error_text: "當前版本不支持效果預覽",
        pc_grouplive_apply_linking_member_list: "連麥申請",
        pc_grouplive_apply_link_cancel_btn_text: "取消申請",
        pc_grouplive_introduction_btn_text: "群直播介紹",
        pc_grouplive_multi_live_tag: "聯播",
        pc_grouplive_playback_playrate: "倍速",
        pc_grouplive_apply_link_waiting_text: "連麥申請中",
        pc_grouplive_live_player_share_btn_tips: "分享",
        pc_grouplive_live_favor_ban_tips: "主播開啟了禁用點贊，當前不可點贊",
        pc_grouplive_live_local_preview_btn_text: "本地預覽",
        pc_grouplive_live_send_comment_btn_text: "發送",
        pc_grouplive_live_send_comment_input_placeholder: "說點什麼...x",
        pc_grouplive_live_send_comment_exception_text: "發送異常",
        pc_text_too_long: "訊息過長，請調整至 {{value1}} 字以內再發送",
        pc_grouplive_switch_clarity_success_text: "已切換為{{value1}}",
        pc_grouplive_invite_you_to_punch: "{{value1}}邀請你簽到",
        pc_grouplive_count_down: "倒計時{{value1}}秒",
        pc_grouplive_punch_rightnow: "立即簽到",
        pc_grouplive_close_punch_confirm_text: "彈窗關閉後將無法簽到，確定關閉嗎？",
        pc_grouplive_confirm: "提示",
        pc_grouplive_edu_apply_link_btn_text: "舉手連麥",
        pc_grouplive_edu_apply_link_cancle_btn_text: "取消舉手"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        pc_grouplive_all_live: "全部直播",
        pc_grouplive_my_live: "我的直播",
        pc_grouplive_expire_notice_playback: "保存群內近12個月的回放視像",
        pc_grouplive_data_live_over: "太棒了，恭喜你完成一場直播",
        pc_grouplive_data_duration: "直播時長",
        pc_grouplive_data_view_count: "觀看次數",
        pc_grouplive_data_total_count: "觀看人數",
        pc_grouplive_data_member_count: "群人數",
        pc_grouplive_data_view_detail_member: "查看詳細數據",
        pc_grouplive_view_playback: "查看回放",
        pc_grouplive_data_join: "參與人員",
        pc_grouplive_data_unjoin: "未參與人員",
        pc_grouplive_data_view_time: "觀看時長",
        pc_grouplive_data_anchor_title: "講師",
        pc_grouplive_data_thumbs_up: "點贊數",
        pc_grouplive_data_message_count: "消息數",
        pc_grouplive_data_detail_entry_prompt: "你可以在「直播重播」中再次查看資料詳情， 並設置重播下載許可權",
        pc_grouplive_data_export: "導出數據",
        pc_grouplive_data_exporting: "導出中",
        pc_grouplive_disband: "此群已被群主解散，直播窗口將自動關閉",
        pc_grouplive_quit: "你已退出此群，直播窗口將自動關閉",
        pc_grouplive_kicked: "你已被移除此群，直播窗口將自動關閉",
        pc_grouplive_playback_kicked: "你已被移除此群，回放窗口將自動關閉",
        pc_grouplive_playback_disband: "此群已被群主解散，回放窗口將自動關閉",
        pc_grouplive_playback_quit: "你已退出此群，回放窗口將自動關閉",
        pc_grouplive_i_know: "我知道了",
        pc_grouplive_notice: "通知",
        pc_grouplive_live_position: "定位聊天",
        pc_grouplive_live_status: "直播中",
        pc_grouplive_live_views: "人觀看",
        pc_grouplive_h5_my_live: "我發起的直播",
        pc_groupsetting_h5_set_anchor: "設置講師",
        pc_grouplive_pause_status: "直播暫停",
        pc_grouplive_live_over_save: "本次直播回放已保存到“直播回放”中",
        pc_grouplive_live_over_fail: "直播時間不足1分鐘，不保存回看",
        pc_grouplive_playback_all_viewer: "全部成員已觀看",
        pc_grouplive_playback_no_viewer: "暫無人觀看",
        pc_grouplive_playback_no_live: "暫無直播回放",
        pc_grouplive_view_more: "查看更多",
        dt_lv_group_live_title_placeholder: "{{value1}}群直播",
        pc_grouplive_back_to_conversation: "返回群聊",
        pc_grouplive_data_export_success: "直播數據導出成功。",
        pc_grouplive_data_export_failure: "直播數據導出失敗！",
        dt_common_confirm: "確定",
        dt_common_cancel: "取消",
        pc_grouplive_live_praise: "贊",
        pc_grouplive_live_player_error_text: "主播離開一會，稍等片刻",
        pc_grouplive_live_player_force_stop: "確定要結束直播嗎？",
        pc_grouplive_live_player_force_stop_title: "結束直播",
        pc_grouplive_live_message_box_cancel: "取消",
        pc_grouplive_live_player_force_stop_ok_btn: "結束",
        pc_grouplive_live_player_report: "舉報",
        pc_grouplive_live_player_stalled_text: "出错了，请重试",
        pc_grouplive_live_player_pausing: "直播暫停中",
        pc_grouplive_live_player_status_anchors_leave: "主播離開，直播暫停",
        pc_grouplive_live_player_status_anchors_back: "主播回來啦，直播內容即將恢復",
        pc_grouplive_live_player_rotate_btn_tips: "荧幕旋轉",
        pc_grouplive_live_player_barrage_btn_tips: "消息彈幕",
        dt_lv_live_bit_rate_1: "極速",
        dt_lv_live_bit_rate_2: "流暢",
        dt_lv_live_bit_rate_3: "標清",
        dt_lv_live_bit_rate_4: "高清",
        dt_lv_live_bit_rate_5: "超清",
        pc_grouplive_live_player_network_timeout_text: "網絡超時，請稍後重試",
        pc_grouplive_live_player_unsurpport_text: "當前版本不支持視頻播放",
        pc_grouplive_apply_link_preview_title: "效果預覽",
        pc_grouplive_apply_link_cancel_text: "稍後再說",
        pc_grouplive_apply_link_confirm_text: "申請連麥",
        pc_grouplive_apply_link_btn_text: "申請連麥",
        pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申請",
        pc_grouplive_apply_link_webrtc_permission_deny_text: "用戶代理或者當前平臺不允許請求使用攝像設備",
        pc_grouplive_apply_link_webrtc_notfound_text: "未找到攝像設備",
        pc_grouplive_apply_link_webrtc_default_error_text: "當前版本不支持效果預覽",
        pc_grouplive_apply_linking_member_list: "連麥申請",
        pc_grouplive_apply_link_cancel_btn_text: "取消申請",
        pc_grouplive_introduction_btn_text: "群直播介紹",
        pc_grouplive_multi_live_tag: "聯播",
        pc_grouplive_playback_playrate: "倍速",
        pc_grouplive_apply_link_waiting_text: "連麥申請中",
        pc_grouplive_live_player_share_btn_tips: "分享",
        pc_grouplive_live_favor_ban_tips: "主播開啟了禁用點贊，當前不可點贊",
        pc_grouplive_live_local_preview_btn_text: "本地預覽",
        pc_grouplive_live_send_comment_btn_text: "發送",
        pc_grouplive_live_send_comment_input_placeholder: "說點什麼...",
        pc_grouplive_live_send_comment_exception_text: "發送異常",
        pc_text_too_long: "消息過長，請調整至 {{value1}} 字以內",
        pc_grouplive_switch_clarity_success_text: "已切換為{{value1}}",
        pc_grouplive_invite_you_to_punch: "{{value1}}邀请你签到",
        pc_grouplive_count_down: "倒计时{{value1}}秒",
        pc_grouplive_punch_rightnow: "立即签到",
        pc_grouplive_close_punch_confirm_text: "弹窗关闭后将无法签到，确定关闭吗？",
        pc_grouplive_confirm: "提示",
        pc_grouplive_edu_apply_link_btn_text: "舉手連麥",
        pc_grouplive_edu_apply_link_cancle_btn_text: "取消舉手"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        pc_grouplive_all_live: "全てのライブ",
        pc_grouplive_my_live: "私のライブ",
        pc_grouplive_expire_notice_playback: "最近12ヶ月のライブ再生のみ保存されます",
        pc_grouplive_data_live_over: "あまりにも偉大おめでとう完了フィールドライブ",
        pc_grouplive_data_duration: "ライブタイム",
        pc_grouplive_data_view_count: "ビュー",
        pc_grouplive_data_total_count: "視聴者の人数",
        pc_grouplive_data_member_count: "グループ人数",
        pc_grouplive_data_view_detail_member: "詳細データを見る",
        pc_grouplive_view_playback: "再生を見る",
        pc_grouplive_data_join: "参加者",
        pc_grouplive_data_unjoin: "未参加者",
        pc_grouplive_data_view_time: "視聴時間",
        pc_grouplive_data_anchor_title: "講師",
        pc_grouplive_data_thumbs_up: "いいね数",
        pc_grouplive_data_message_count: "メッセージ数",
        pc_grouplive_data_detail_entry_prompt: "ライブ再生でデータの詳細を再度表示し、再生ダウンロード権限を設定できます。",
        pc_grouplive_data_export: "データのエクスポート",
        pc_grouplive_data_exporting: "エクスポート",
        pc_grouplive_disband: "このグループはグループ管理者により解散され、ライブウィンドウは自動的に閉じられます",
        pc_grouplive_quit: "このグループから退出しました、ライブウィンドウが自動的に閉じます",
        pc_grouplive_kicked: "あなたはこのグループから削除され、ライブウィンドウは自動的に閉じます",
        pc_grouplive_playback_kicked: "あなたはこのグループから削除され、再生ウィンドウが自動的に閉じます",
        pc_grouplive_playback_disband: "このグループは管理者により解散され、ライブ再生ウィンドウは自動的に閉じられます",
        pc_grouplive_playback_quit: "このグループから退出しました、ライブ再生ウィンドウが自動的に閉じます",
        pc_grouplive_i_know: "OK",
        pc_grouplive_notice: "通知",
        pc_grouplive_live_position: "ターゲットチャット",
        pc_grouplive_live_status: "ライブ放送",
        pc_grouplive_live_views: "人が視聴中",
        pc_grouplive_h5_my_live: "私はライブ放送を開始した",
        pc_groupsetting_h5_set_anchor: "インストラクターの設定",
        pc_grouplive_pause_status: "ライブサスペンション",
        pc_grouplive_live_over_save: "このライブ再生は「ライブ再生」に保存されました",
        pc_grouplive_live_over_fail: "ライブ時間は1分未満です。ライブ再生は保存しません",
        pc_grouplive_playback_all_viewer: "すべてのメンバーが視聴しました",
        pc_grouplive_playback_no_viewer: "視聴者なし",
        pc_grouplive_playback_no_live: "ライブ再生なし",
        pc_grouplive_view_more: "もっと見る",
        dt_lv_group_live_title_placeholder: "{{value1}}にライブ",
        pc_grouplive_back_to_conversation: "グループチャットに戻る",
        pc_grouplive_data_export_success: "ライブデータのエクスポートに成功しました。",
        pc_grouplive_data_export_failure: "ライブデータのエクスポートに失敗しました！",
        dt_common_confirm: "確定",
        dt_common_cancel: "キャンセル",
        pc_grouplive_live_praise: "いいね",
        pc_grouplive_live_player_error_text: "アンカーがしばらく離れます、ちょっと待ってください",
        pc_grouplive_live_player_force_stop: "ライブを終了しますか？",
        pc_grouplive_live_player_force_stop_title: "ライブを終了",
        pc_grouplive_live_message_box_cancel: "キャンセル",
        pc_grouplive_live_player_force_stop_ok_btn: "終了する",
        pc_grouplive_live_player_report: "報告",
        pc_grouplive_live_player_stalled_text: "出错了，请重试",
        pc_grouplive_live_player_pausing: "ライブ一時停止",
        pc_grouplive_live_player_status_anchors_leave: "アンカー離れ、ライブ一時停止",
        pc_grouplive_live_player_status_anchors_back: "アンカーバックそれ、を今後の再開放送コンテンツ",
        pc_grouplive_live_player_rotate_btn_tips: "スクリーン回転",
        pc_grouplive_live_player_barrage_btn_tips: "ニュース弾幕",
        dt_lv_live_bit_rate_1: "180P",
        dt_lv_live_bit_rate_2: "270P",
        dt_lv_live_bit_rate_3: "360P",
        dt_lv_live_bit_rate_4: "480P",
        dt_lv_live_bit_rate_5: "720P",
        pc_grouplive_live_player_network_timeout_text: "ネットワークタイムアウト、再度お試しください後",
        pc_grouplive_live_player_unsurpport_text: "を現在のバージョンはサポートビデオ再生",
        pc_grouplive_apply_link_preview_title: "効果プレビュー",
        pc_grouplive_apply_link_cancel_text: "それについて話後。",
        pc_grouplive_apply_link_confirm_text: "アプリケーションも",
        pc_grouplive_apply_link_btn_text: "アプリケーションも",
        pc_grouplive_apply_link_waiting_number_text: "% @ 人に適用",
        pc_grouplive_apply_link_webrtc_permission_deny_text: "ユーザーエージェントまたは電流プラットフォームはできませんあなたに要求に使用ビデオ機器",
        pc_grouplive_apply_link_webrtc_notfound_text: "カメラ機材を見られない",
        pc_grouplive_apply_link_webrtc_default_error_text: "現在のバージョンサポートしていない効果プレビュー",
        pc_grouplive_apply_linking_member_list: "でも Mr アプリケーション",
        pc_grouplive_apply_link_cancel_btn_text: "キャンセル要求",
        pc_grouplive_introduction_btn_text: "グループのライブ導入",
        pc_grouplive_multi_live_tag: "放送",
        pc_grouplive_playback_playrate: "倍速",
        pc_grouplive_apply_link_waiting_text: "でも Mr アプリケーション",
        pc_grouplive_live_player_share_btn_tips: "シェアします",
        pc_grouplive_live_favor_ban_tips: "アナウンサーがスタートしました。無効点賛です。今はいい評価をしてはいけません。",
        pc_grouplive_live_local_preview_btn_text: "プレビュー",
        pc_grouplive_live_send_comment_btn_text: "送信",
        pc_grouplive_live_send_comment_input_placeholder: "メッセージを入力",
        pc_grouplive_live_send_comment_exception_text: "例外の送信",
        pc_text_too_long: "メッセージが長すぎ、{{value1}} 字までに調整してください",
        pc_grouplive_switch_clarity_success_text: "{{value1}} に切り替えられた",
        pc_grouplive_invite_you_to_punch: "{{value1}} 招待あなたに署名",
        pc_grouplive_count_down: "カウントダウンに % @ 秒",
        pc_grouplive_punch_rightnow: "今ログイン",
        pc_grouplive_close_punch_confirm_text: "ポップアップことができなくなり後に終了サインで ok にクローズ?",
        pc_grouplive_confirm: "ヒント",
        pc_grouplive_edu_apply_link_btn_text: "手を上げる",
        pc_grouplive_edu_apply_link_cancle_btn_text: "手を上げる"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    n.d(e, "changeLanguage", function() {
        return r
    }),
    n.d(e, "cloneInstance", function() {
        return o
    }),
    n.d(e, "createInstance", function() {
        return a
    }),
    n.d(e, "dir", function() {
        return s
    }),
    n.d(e, "exists", function() {
        return u
    }),
    n.d(e, "getFixedT", function() {
        return c
    }),
    n.d(e, "init", function() {
        return l
    }),
    n.d(e, "loadLanguages", function() {
        return d
    }),
    n.d(e, "loadNamespaces", function() {
        return f
    }),
    n.d(e, "loadResources", function() {
        return p
    }),
    n.d(e, "off", function() {
        return h
    }),
    n.d(e, "on", function() {
        return v
    }),
    n.d(e, "setDefaultNamespace", function() {
        return g
    }),
    n.d(e, "t", function() {
        return _
    }),
    n.d(e, "use", function() {
        return m
    });
    var i = n(64);
    e.default = i.a;
    var r = i.a.changeLanguage.bind(i.a)
      , o = i.a.cloneInstance.bind(i.a)
      , a = i.a.createInstance.bind(i.a)
      , s = i.a.dir.bind(i.a)
      , u = i.a.exists.bind(i.a)
      , c = i.a.getFixedT.bind(i.a)
      , l = i.a.init.bind(i.a)
      , d = i.a.loadLanguages.bind(i.a)
      , f = i.a.loadNamespaces.bind(i.a)
      , p = i.a.loadResources.bind(i.a)
      , h = i.a.off.bind(i.a)
      , v = i.a.on.bind(i.a)
      , g = i.a.setDefaultNamespace.bind(i.a)
      , _ = i.a.t.bind(i.a)
      , m = i.a.use.bind(i.a)
}
, function(t, e, n) {
    "use strict";
    var i = n(10)
      , r = n(15)
      , o = n(65)
      , a = n(66)
      , s = n(67)
      , u = n(68)
      , c = n(69)
      , l = n(70)
      , d = n(71)
      , f = n(72)
      , p = n(33)
      , h = n(34)
      , v = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function g(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function _(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
            for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = Object.getOwnPropertyDescriptor(e, r);
                o && o.configurable && void 0 === t[r] && Object.defineProperty(t, r, o)
            }
        }(t, e))
    }
    function m() {}
    var b = function(t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = arguments[1];
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = g(this, t.call(this));
            if (o.options = Object(f.b)(n),
            o.services = {},
            o.logger = i.a,
            o.modules = {
                external: []
            },
            r && !o.isInitialized && !n.isClone) {
                var a;
                if (!o.options.initImmediate)
                    return a = o.init(n, r),
                    g(o, a);
                setTimeout(function() {
                    o.init(n, r)
                }, 0)
            }
            return o
        }
        return _(e, t),
        e.prototype.init = function(t, e) {
            var n = this;
            function r(t) {
                return t ? "function" == typeof t ? new t : t : null
            }
            if ("function" == typeof t && (e = t,
            t = {}),
            t || (t = {}),
            "v1" === t.compatibilityAPI ? this.options = v({}, Object(f.a)(), Object(f.b)(h.b(t)), {}) : "v1" === t.compatibilityJSON ? this.options = v({}, Object(f.a)(), Object(f.b)(h.c(t)), {}) : this.options = v({}, Object(f.a)(), this.options, Object(f.b)(t)),
            this.format = this.options.interpolation.format,
            e || (e = m),
            !this.options.isClone) {
                this.modules.logger ? i.a.init(r(this.modules.logger), this.options) : i.a.init(null, this.options);
                var p = new s.a(this.options);
                this.store = new o.a(this.options.resources,this.options);
                var g = this.services;
                g.logger = i.a,
                g.resourceStore = this.store,
                g.resourceStore.on("added removed", function(t, e) {
                    g.cacheConnector.save()
                }),
                g.languageUtils = p,
                g.pluralResolver = new u.a(p,{
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }),
                g.interpolator = new c.a(this.options),
                g.backendConnector = new l.a(r(this.modules.backend),g.resourceStore,g,this.options),
                g.backendConnector.on("*", function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        i[r - 1] = arguments[r];
                    n.emit.apply(n, [t].concat(i))
                }),
                g.backendConnector.on("loaded", function(t) {
                    g.cacheConnector.save()
                }),
                g.cacheConnector = new d.a(r(this.modules.cache),g.resourceStore,g,this.options),
                g.cacheConnector.on("*", function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        i[r - 1] = arguments[r];
                    n.emit.apply(n, [t].concat(i))
                }),
                this.modules.languageDetector && (g.languageDetector = r(this.modules.languageDetector),
                g.languageDetector.init(g, this.options.detection, this.options)),
                this.translator = new a.a(this.services,this.options),
                this.translator.on("*", function(t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        i[r - 1] = arguments[r];
                    n.emit.apply(n, [t].concat(i))
                }),
                this.modules.external.forEach(function(t) {
                    t.init && t.init(n)
                })
            }
            ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"].forEach(function(t) {
                n[t] = function() {
                    var e;
                    return (e = n.store)[t].apply(e, arguments)
                }
            }),
            "v1" === this.options.compatibilityAPI && h.a(this);
            var _ = function() {
                n.changeLanguage(n.options.lng, function(t, i) {
                    n.isInitialized = !0,
                    n.logger.log("initialized", n.options),
                    n.emit("initialized", n.options),
                    e(t, i)
                })
            };
            return this.options.resources || !this.options.initImmediate ? _() : setTimeout(_, 0),
            this
        }
        ,
        e.prototype.loadResources = function() {
            var t = this
              , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
            if (this.options.resources)
                e(null);
            else {
                if (this.language && "cimode" === this.language.toLowerCase())
                    return e();
                var n = []
                  , i = function(e) {
                    e && t.services.languageUtils.toResolveHierarchy(e).forEach(function(t) {
                        n.indexOf(t) < 0 && n.push(t)
                    })
                };
                if (this.language)
                    i(this.language);
                else
                    this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t) {
                        return i(t)
                    });
                this.options.preload && this.options.preload.forEach(function(t) {
                    return i(t)
                }),
                this.services.cacheConnector.load(n, this.options.ns, function() {
                    t.services.backendConnector.load(n, t.options.ns, e)
                })
            }
        }
        ,
        e.prototype.reloadResources = function(t, e) {
            t || (t = this.languages),
            e || (e = this.options.ns),
            this.services.backendConnector.reload(t, e)
        }
        ,
        e.prototype.use = function(t) {
            return "backend" === t.type && (this.modules.backend = t),
            "cache" === t.type && (this.modules.cache = t),
            ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t),
            "languageDetector" === t.type && (this.modules.languageDetector = t),
            "postProcessor" === t.type && p.a.addPostProcessor(t),
            "3rdParty" === t.type && this.modules.external.push(t),
            this
        }
        ,
        e.prototype.changeLanguage = function(t, e) {
            var n = this
              , i = function(t) {
                t && (n.language = t,
                n.languages = n.services.languageUtils.toResolveHierarchy(t),
                n.translator.changeLanguage(t),
                n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)),
                n.loadResources(function(i) {
                    !function(t, i) {
                        i && (n.emit("languageChanged", i),
                        n.logger.log("languageChanged", i)),
                        e && e(t, function() {
                            return n.t.apply(n, arguments)
                        })
                    }(i, t)
                })
            };
            t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(t) : i(this.services.languageDetector.detect())
        }
        ,
        e.prototype.getFixedT = function(t, e) {
            var n = this
              , i = function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = v({}, i);
                return r.lng = r.lng || t.lng,
                r.lngs = r.lngs || t.lngs,
                r.ns = r.ns || t.ns,
                n.t(e, r)
            };
            return "string" == typeof t ? i.lng = t : i.lngs = t,
            i.ns = e,
            i
        }
        ,
        e.prototype.t = function() {
            var t;
            return this.translator && (t = this.translator).translate.apply(t, arguments)
        }
        ,
        e.prototype.exists = function() {
            var t;
            return this.translator && (t = this.translator).exists.apply(t, arguments)
        }
        ,
        e.prototype.setDefaultNamespace = function(t) {
            this.options.defaultNS = t
        }
        ,
        e.prototype.loadNamespaces = function(t, e) {
            var n = this;
            if (!this.options.ns)
                return e && e();
            "string" == typeof t && (t = [t]),
            t.forEach(function(t) {
                n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
            }),
            this.loadResources(e)
        }
        ,
        e.prototype.loadLanguages = function(t, e) {
            "string" == typeof t && (t = [t]);
            var n = this.options.preload || []
              , i = t.filter(function(t) {
                return n.indexOf(t) < 0
            });
            if (!i.length)
                return e();
            this.options.preload = n.concat(i),
            this.loadResources(e)
        }
        ,
        e.prototype.dir = function(t) {
            if (t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
            !t)
                return "rtl";
            return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr"
        }
        ,
        e.prototype.createInstance = function() {
            return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},arguments[1])
        }
        ,
        e.prototype.cloneInstance = function() {
            var t = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m
              , r = v({}, this.options, n, {
                isClone: !0
            })
              , o = new e(r,i);
            return ["store", "services", "language"].forEach(function(e) {
                o[e] = t[e]
            }),
            o.translator = new a.a(o.services,o.options),
            o.translator.on("*", function(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                o.emit.apply(o, [t].concat(n))
            }),
            o.init(r, i),
            o
        }
        ,
        e
    }(r.a);
    e.a = new b
}
, function(t, e, n) {
    "use strict";
    var i = n(15)
      , r = n(19)
      , o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
            for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = Object.getOwnPropertyDescriptor(e, r);
                o && o.configurable && void 0 === t[r] && Object.defineProperty(t, r, o)
            }
        }(t, e))
    }
    var s = function(t) {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                ns: ["translation"],
                defaultNS: "translation"
            };
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return r.data = n,
            r.options = i,
            r
        }
        return a(e, t),
        e.prototype.addNamespaces = function(t) {
            this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
        }
        ,
        e.prototype.removeNamespaces = function(t) {
            var e = this.options.ns.indexOf(t);
            e > -1 && this.options.ns.splice(e, 1)
        }
        ,
        e.prototype.getResource = function(t, e, n) {
            var i = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).keySeparator || this.options.keySeparator;
            void 0 === i && (i = ".");
            var o = [t, e];
            return n && "string" != typeof n && (o = o.concat(n)),
            n && "string" == typeof n && (o = o.concat(i ? n.split(i) : n)),
            t.indexOf(".") > -1 && (o = t.split(".")),
            r.d(this.data, o)
        }
        ,
        e.prototype.addResource = function(t, e, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                silent: !1
            }
              , a = this.options.keySeparator;
            void 0 === a && (a = ".");
            var s = [t, e];
            n && (s = s.concat(a ? n.split(a) : n)),
            t.indexOf(".") > -1 && (i = e,
            e = (s = t.split("."))[1]),
            this.addNamespaces(e),
            r.h(this.data, s, i),
            o.silent || this.emit("added", t, e, n, i)
        }
        ,
        e.prototype.addResources = function(t, e, n) {
            for (var i in n)
                "string" == typeof n[i] && this.addResource(t, e, i, n[i], {
                    silent: !0
                });
            this.emit("added", t, e, n)
        }
        ,
        e.prototype.addResourceBundle = function(t, e, n, i, a) {
            var s = [t, e];
            t.indexOf(".") > -1 && (i = n,
            n = e,
            e = (s = t.split("."))[1]),
            this.addNamespaces(e);
            var u = r.d(this.data, s) || {};
            i ? r.b(u, n, a) : u = o({}, u, n),
            r.h(this.data, s, u),
            this.emit("added", t, e, n)
        }
        ,
        e.prototype.removeResourceBundle = function(t, e) {
            this.hasResourceBundle(t, e) && delete this.data[t][e],
            this.removeNamespaces(e),
            this.emit("removed", t, e)
        }
        ,
        e.prototype.hasResourceBundle = function(t, e) {
            return void 0 !== this.getResource(t, e)
        }
        ,
        e.prototype.getResourceBundle = function(t, e) {
            return e || (e = this.options.defaultNS),
            "v1" === this.options.compatibilityAPI ? o({}, this.getResource(t, e)) : this.getResource(t, e)
        }
        ,
        e.prototype.toJSON = function() {
            return this.data
        }
        ,
        e
    }(i.a);
    e.a = s
}
, function(t, e, n) {
    "use strict";
    var i = n(10)
      , r = n(15)
      , o = n(33)
      , a = n(34)
      , s = n(19)
      , u = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
      , c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
            for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = Object.getOwnPropertyDescriptor(e, r);
                o && o.configurable && void 0 === t[r] && Object.defineProperty(t, r, o)
            }
        }(t, e))
    }
    var d = function(t) {
        function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return s.a(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, o),
            o.options = r,
            o.logger = i.a.create("translator"),
            o
        }
        return l(e, t),
        e.prototype.changeLanguage = function(t) {
            t && (this.language = t)
        }
        ,
        e.prototype.exists = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                interpolation: {}
            };
            return "v1" === this.options.compatibilityAPI && (e = a.d(e)),
            void 0 !== this.resolve(t, e)
        }
        ,
        e.prototype.extractFromKey = function(t, e) {
            var n = e.nsSeparator || this.options.nsSeparator;
            void 0 === n && (n = ":");
            var i = e.keySeparator || this.options.keySeparator || "."
              , r = e.ns || this.options.defaultNS;
            if (n && t.indexOf(n) > -1) {
                var o = t.split(n);
                (n !== i || n === i && this.options.ns.indexOf(o[0]) > -1) && (r = o.shift()),
                t = o.join(i)
            }
            return "string" == typeof r && (r = [r]),
            {
                key: t,
                namespaces: r
            }
        }
        ,
        e.prototype.translate = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("object" !== (void 0 === e ? "undefined" : c(e)) ? e = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (e = a.d(e)),
            void 0 === t || null === t || "" === t)
                return "";
            "number" == typeof t && (t = String(t)),
            "string" == typeof t && (t = [t]);
            var n = e.keySeparator || this.options.keySeparator || "."
              , i = this.extractFromKey(t[t.length - 1], e)
              , r = i.key
              , o = i.namespaces
              , s = o[o.length - 1]
              , l = e.lng || this.language
              , d = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (l && "cimode" === l.toLowerCase())
                return d ? s + (e.nsSeparator || this.options.nsSeparator) + r : r;
            var f = this.resolve(t, e)
              , p = Object.prototype.toString.apply(f)
              , h = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays;
            if (f && "string" != typeof f && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(p) < 0 && (!h || "[object Array]" !== p)) {
                if (!e.returnObjects && !this.options.returnObjects)
                    return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                    this.options.returnedObjectHandler ? this.options.returnedObjectHandler(r, f, e) : "key '" + r + " (" + this.language + ")' returned an object instead of string.";
                if (e.keySeparator || this.options.keySeparator) {
                    var v = "[object Array]" === p ? [] : {};
                    for (var g in f)
                        Object.prototype.hasOwnProperty.call(f, g) && (v[g] = this.translate("" + r + n + g, u({}, e, {
                            joinArrays: !1,
                            ns: o
                        })));
                    f = v
                }
            } else if (h && "[object Array]" === p)
                (f = f.join(h)) && (f = this.extendTranslation(f, r, e));
            else {
                var _ = !1
                  , m = !1;
                if (this.isValidLookup(f) || void 0 === e.defaultValue || (_ = !0,
                f = e.defaultValue),
                this.isValidLookup(f) || (m = !0,
                f = r),
                m || _) {
                    this.logger.log("missingKey", l, s, r, f);
                    var b = []
                      , y = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && y && y[0])
                        for (var w = 0; w < y.length; w++)
                            b.push(y[w]);
                    else
                        "all" === this.options.saveMissingTo ? b = this.languageUtils.toResolveHierarchy(e.lng || this.language) : b.push(e.lng || this.language);
                    this.options.saveMissing && (this.options.missingKeyHandler ? this.options.missingKeyHandler(b, s, r, f) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(b, s, r, f)),
                    this.emit("missingKey", b, s, r, f)
                }
                f = this.extendTranslation(f, r, e),
                m && f === r && this.options.appendNamespaceToMissingKey && (f = s + ":" + r),
                m && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(f))
            }
            return f
        }
        ,
        e.prototype.extendTranslation = function(t, e, n) {
            var i = this;
            n.interpolation && this.interpolator.init(u({}, n, {
                interpolation: u({}, this.options.interpolation, n.interpolation)
            }));
            var r = n.replace && "string" != typeof n.replace ? n.replace : n;
            this.options.interpolation.defaultVariables && (r = u({}, this.options.interpolation.defaultVariables, r)),
            t = this.interpolator.interpolate(t, r, n.lng || this.language),
            !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                return i.translate.apply(i, arguments)
            }, n)),
            n.interpolation && this.interpolator.reset();
            var a = n.postProcess || this.options.postProcess
              , s = "string" == typeof a ? [a] : a;
            return void 0 !== t && s && s.length && !1 !== n.applyPostProcessor && (t = o.a.handle(s, t, e, n, this)),
            t
        }
        ,
        e.prototype.resolve = function(t) {
            var e = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , i = void 0;
            return "string" == typeof t && (t = [t]),
            t.forEach(function(t) {
                if (!e.isValidLookup(i)) {
                    var r = e.extractFromKey(t, n)
                      , o = r.key
                      , a = r.namespaces;
                    e.options.fallbackNS && (a = a.concat(e.options.fallbackNS));
                    var s = void 0 !== n.count && "string" != typeof n.count
                      , u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context
                      , c = n.lngs ? n.lngs : e.languageUtils.toResolveHierarchy(n.lng || e.language);
                    a.forEach(function(t) {
                        e.isValidLookup(i) || c.forEach(function(r) {
                            if (!e.isValidLookup(i)) {
                                var a = o
                                  , c = [a]
                                  , l = void 0;
                                s && (l = e.pluralResolver.getSuffix(r, n.count)),
                                s && u && c.push(a + l),
                                u && c.push(a += "" + e.options.contextSeparator + n.context),
                                s && c.push(a += l);
                                for (var d = void 0; d = c.pop(); )
                                    e.isValidLookup(i) || (i = e.getResource(r, t, d, n))
                            }
                        })
                    })
                }
            }),
            i
        }
        ,
        e.prototype.isValidLookup = function(t) {
            return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
        }
        ,
        e.prototype.getResource = function(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return this.resourceStore.getResource(t, e, n, i)
        }
        ,
        e
    }(r.a);
    e.a = d
}
, function(t, e, n) {
    "use strict";
    var i = n(10);
    function r(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    var o = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.options = e,
            this.whitelist = this.options.whitelist || !1,
            this.logger = i.a.create("languageUtils")
        }
        return t.prototype.getScriptPartFromCode = function(t) {
            if (!t || t.indexOf("-") < 0)
                return null;
            var e = t.split("-");
            return 2 === e.length ? null : (e.pop(),
            this.formatLanguageCode(e.join("-")))
        }
        ,
        t.prototype.getLanguagePartFromCode = function(t) {
            if (!t || t.indexOf("-") < 0)
                return t;
            var e = t.split("-");
            return this.formatLanguageCode(e[0])
        }
        ,
        t.prototype.formatLanguageCode = function(t) {
            if ("string" == typeof t && t.indexOf("-") > -1) {
                var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                  , n = t.split("-");
                return this.options.lowerCaseLng ? n = n.map(function(t) {
                    return t.toLowerCase()
                }) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                n[1] = n[1].toUpperCase(),
                e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = r(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                2 === n[1].length && (n[1] = n[1].toUpperCase()),
                "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = r(n[1].toLowerCase())),
                e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = r(n[2].toLowerCase()))),
                n.join("-")
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
        }
        ,
        t.prototype.isWhitelisted = function(t) {
            return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)),
            !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1
        }
        ,
        t.prototype.getFallbackCodes = function(t, e) {
            if (!t)
                return [];
            if ("string" == typeof t && (t = [t]),
            "[object Array]" === Object.prototype.toString.apply(t))
                return t;
            if (!e)
                return t.default || [];
            var n = t[e];
            return n || (n = t[this.getScriptPartFromCode(e)]),
            n || (n = t[this.formatLanguageCode(e)]),
            n || (n = t.default),
            n || []
        }
        ,
        t.prototype.toResolveHierarchy = function(t, e) {
            var n = this
              , i = this.getFallbackCodes(e || this.options.fallbackLng || [], t)
              , r = []
              , o = function(t) {
                t && (n.isWhitelisted(t) ? r.push(t) : n.logger.warn("rejecting non-whitelisted language code: " + t))
            };
            return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(t)),
            "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(t)),
            "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(t))) : "string" == typeof t && o(this.formatLanguageCode(t)),
            i.forEach(function(t) {
                r.indexOf(t) < 0 && o(n.formatLanguageCode(t))
            }),
            r
        }
        ,
        t
    }();
    e.a = o
}
, function(t, e, n) {
    "use strict";
    var i = n(10);
    var r = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }]
      , o = {
        1: function(t) {
            return Number(t > 1)
        },
        2: function(t) {
            return Number(1 != t)
        },
        3: function(t) {
            return 0
        },
        4: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        5: function(t) {
            return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
        },
        6: function(t) {
            return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
        },
        7: function(t) {
            return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        8: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
        },
        9: function(t) {
            return Number(t >= 2)
        },
        10: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
        },
        11: function(t) {
            return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
        },
        12: function(t) {
            return Number(t % 10 != 1 || t % 100 == 11)
        },
        13: function(t) {
            return Number(0 !== t)
        },
        14: function(t) {
            return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
        },
        15: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
        },
        16: function(t) {
            return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
        },
        17: function(t) {
            return Number(1 == t || t % 10 == 1 ? 0 : 1)
        },
        18: function(t) {
            return Number(0 == t ? 0 : 1 == t ? 1 : 2)
        },
        19: function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
        },
        20: function(t) {
            return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
        },
        21: function(t) {
            return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
        }
    };
    var a = function() {
        function t(e) {
            var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.languageUtils = e,
            this.options = a,
            this.logger = i.a.create("pluralResolver"),
            this.rules = (n = {},
            r.forEach(function(t) {
                t.lngs.forEach(function(e) {
                    n[e] = {
                        numbers: t.nr,
                        plurals: o[t.fc]
                    }
                })
            }),
            n)
        }
        return t.prototype.addRule = function(t, e) {
            this.rules[t] = e
        }
        ,
        t.prototype.getRule = function(t) {
            return this.rules[this.languageUtils.getLanguagePartFromCode(t)]
        }
        ,
        t.prototype.needsPlural = function(t) {
            var e = this.getRule(t);
            return e && e.numbers.length > 1
        }
        ,
        t.prototype.getSuffix = function(t, e) {
            var n = this
              , i = this.getRule(t);
            if (i) {
                if (1 === i.numbers.length)
                    return "";
                var r = i.noAbs ? i.plurals(e) : i.plurals(Math.abs(e))
                  , o = i.numbers[r];
                this.options.simplifyPluralSuffix && 2 === i.numbers.length && 1 === i.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                var a = function() {
                    return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                };
                return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_" + o.toString() : a() : "v2" === this.options.compatibilityJSON || 2 === i.numbers.length && 1 === i.numbers[0] ? a() : 2 === i.numbers.length && 1 === i.numbers[0] ? a() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
            }
            return this.logger.warn("no plural rule found for: " + t),
            ""
        }
        ,
        t
    }();
    e.a = a
}
, function(t, e, n) {
    "use strict";
    var i = n(19)
      , r = n(10)
      , o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    var a = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.logger = r.a.create("interpolator"),
            this.init(e, !0)
        }
        return t.prototype.init = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            arguments[1] && (this.options = t,
            this.format = t.interpolation && t.interpolation.format || function(t) {
                return t
            }
            ,
            this.escape = t.interpolation && t.interpolation.escape || i.c),
            t.interpolation || (t.interpolation = {
                escapeValue: !0
            });
            var e = t.interpolation;
            this.escapeValue = void 0 === e.escapeValue || e.escapeValue,
            this.prefix = e.prefix ? i.g(e.prefix) : e.prefixEscaped || "{{",
            this.suffix = e.suffix ? i.g(e.suffix) : e.suffixEscaped || "}}",
            this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",",
            this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-",
            this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "",
            this.nestingPrefix = e.nestingPrefix ? i.g(e.nestingPrefix) : e.nestingPrefixEscaped || i.g("$t("),
            this.nestingSuffix = e.nestingSuffix ? i.g(e.nestingSuffix) : e.nestingSuffixEscaped || i.g(")"),
            this.resetRegExp()
        }
        ,
        t.prototype.reset = function() {
            this.options && this.init(this.options)
        }
        ,
        t.prototype.resetRegExp = function() {
            var t = this.prefix + "(.+?)" + this.suffix;
            this.regexp = new RegExp(t,"g");
            var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
            this.regexpUnescape = new RegExp(e,"g");
            var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
            this.nestingRegexp = new RegExp(n,"g")
        }
        ,
        t.prototype.interpolate = function(t, e, n) {
            var r = this
              , o = void 0
              , a = void 0;
            function s(t) {
                return t.replace(/\$/g, "$$$$")
            }
            var u = function(t) {
                if (t.indexOf(r.formatSeparator) < 0)
                    return i.d(e, t);
                var o = t.split(r.formatSeparator)
                  , a = o.shift().trim()
                  , s = o.join(r.formatSeparator).trim();
                return r.format(i.d(e, a), s, n)
            };
            for (this.resetRegExp(); o = this.regexpUnescape.exec(t); )
                a = u(o[1].trim()),
                t = t.replace(o[0], a),
                this.regexpUnescape.lastIndex = 0;
            for (; o = this.regexp.exec(t); )
                "string" != typeof (a = u(o[1].trim())) && (a = i.e(a)),
                a || (this.logger.warn("missed to pass in variable " + o[1] + " for interpolating " + t),
                a = ""),
                a = this.escapeValue ? s(this.escape(a)) : s(a),
                t = t.replace(o[0], a),
                this.regexp.lastIndex = 0;
            return t
        }
        ,
        t.prototype.nest = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = void 0
              , a = void 0
              , s = o({}, n);
            function u(t) {
                if (t.indexOf(",") < 0)
                    return t;
                var e = t.split(",");
                t = e.shift();
                var n = e.join(",");
                n = (n = this.interpolate(n, s)).replace(/'/g, '"');
                try {
                    s = JSON.parse(n)
                } catch (e) {
                    this.logger.error("failed parsing options string in nesting for key " + t, e)
                }
                return t
            }
            for (s.applyPostProcessor = !1; r = this.nestingRegexp.exec(t); ) {
                if ((a = e(u.call(this, r[1].trim()), s)) && r[0] === t && "string" != typeof a)
                    return a;
                "string" != typeof a && (a = i.e(a)),
                a || (this.logger.warn("missed to resolve " + r[1] + " for nesting " + t),
                a = ""),
                t = t.replace(r[0], a),
                this.regexp.lastIndex = 0
            }
            return t
        }
        ,
        t
    }();
    e.a = a
}
, function(t, e, n) {
    "use strict";
    var i = n(19)
      , r = n(10)
      , o = n(15)
      , a = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
      , s = function() {
        return function(t, e) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return function(t, e) {
                    var n = []
                      , i = !0
                      , r = !1
                      , o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                        !e || n.length !== e); i = !0)
                            ;
                    } catch (t) {
                        r = !0,
                        o = t
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r)
                                throw o
                        }
                    }
                    return n
                }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    function u(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
            for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = Object.getOwnPropertyDescriptor(e, r);
                o && o.configurable && void 0 === t[r] && Object.defineProperty(t, r, o)
            }
        }(t, e))
    }
    var c = function(t) {
        function e(n, i, o) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return s.backend = n,
            s.store = i,
            s.services = o,
            s.options = a,
            s.logger = r.a.create("backendConnector"),
            s.state = {},
            s.queue = [],
            s.backend && s.backend.init && s.backend.init(o, a.backend, a),
            s
        }
        return u(e, t),
        e.prototype.queueLoad = function(t, e, n) {
            var i = this
              , r = []
              , o = []
              , a = []
              , s = [];
            return t.forEach(function(t) {
                var n = !0;
                e.forEach(function(e) {
                    var a = t + "|" + e;
                    i.store.hasResourceBundle(t, e) ? i.state[a] = 2 : i.state[a] < 0 || (1 === i.state[a] ? o.indexOf(a) < 0 && o.push(a) : (i.state[a] = 1,
                    n = !1,
                    o.indexOf(a) < 0 && o.push(a),
                    r.indexOf(a) < 0 && r.push(a),
                    s.indexOf(e) < 0 && s.push(e)))
                }),
                n || a.push(t)
            }),
            (r.length || o.length) && this.queue.push({
                pending: o,
                loaded: {},
                errors: [],
                callback: n
            }),
            {
                toLoad: r,
                pending: o,
                toLoadLanguages: a,
                toLoadNamespaces: s
            }
        }
        ,
        e.prototype.loaded = function(t, e, n) {
            var r = this
              , o = t.split("|")
              , a = s(o, 2)
              , u = a[0]
              , c = a[1];
            e && this.emit("failedLoading", u, c, e),
            n && this.store.addResourceBundle(u, c, n),
            this.state[t] = e ? -1 : 2,
            this.queue.forEach(function(n) {
                i.f(n.loaded, [u], c),
                function(t, e) {
                    for (var n = t.indexOf(e); -1 !== n; )
                        t.splice(n, 1),
                        n = t.indexOf(e)
                }(n.pending, t),
                e && n.errors.push(e),
                0 !== n.pending.length || n.done || (r.emit("loaded", n.loaded),
                n.done = !0,
                n.errors.length ? n.callback(n.errors) : n.callback())
            }),
            this.queue = this.queue.filter(function(t) {
                return !t.done
            })
        }
        ,
        e.prototype.read = function(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , r = this
              , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250
              , a = arguments[5];
            return t.length ? this.backend[n](t, e, function(s, u) {
                s && u && i < 5 ? setTimeout(function() {
                    r.read.call(r, t, e, n, i + 1, 2 * o, a)
                }, o) : a(s, u)
            }) : a(null, {})
        }
        ,
        e.prototype.load = function(t, e, n) {
            var r = this;
            if (!this.backend)
                return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                n && n();
            var o = a({}, this.backend.options, this.options.backend);
            "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)),
            "string" == typeof e && (e = [e]);
            var u = this.queueLoad(t, e, n);
            if (!u.toLoad.length)
                return u.pending.length || n(),
                null;
            o.allowMultiLoading && this.backend.readMulti ? this.read(u.toLoadLanguages, u.toLoadNamespaces, "readMulti", null, null, function(t, e) {
                t && r.logger.warn("loading namespaces " + u.toLoadNamespaces.join(", ") + " for languages " + u.toLoadLanguages.join(", ") + " via multiloading failed", t),
                !t && e && r.logger.log("successfully loaded namespaces " + u.toLoadNamespaces.join(", ") + " for languages " + u.toLoadLanguages.join(", ") + " via multiloading", e),
                u.toLoad.forEach(function(n) {
                    var o = n.split("|")
                      , a = s(o, 2)
                      , u = a[0]
                      , c = a[1]
                      , l = i.d(e, [u, c]);
                    if (l)
                        r.loaded(n, t, l);
                    else {
                        var d = "loading namespace " + c + " for language " + u + " via multiloading failed";
                        r.loaded(n, d),
                        r.logger.error(d)
                    }
                })
            }) : u.toLoad.forEach(function(t) {
                r.loadOne(t)
            })
        }
        ,
        e.prototype.reload = function(t, e) {
            var n = this;
            this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
            var r = a({}, this.backend.options, this.options.backend);
            "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)),
            "string" == typeof e && (e = [e]),
            r.allowMultiLoading && this.backend.readMulti ? this.read(t, e, "readMulti", null, null, function(r, o) {
                r && n.logger.warn("reloading namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading failed", r),
                !r && o && n.logger.log("successfully reloaded namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading", o),
                t.forEach(function(t) {
                    e.forEach(function(e) {
                        var a = i.d(o, [t, e]);
                        if (a)
                            n.loaded(t + "|" + e, r, a);
                        else {
                            var s = "reloading namespace " + e + " for language " + t + " via multiloading failed";
                            n.loaded(t + "|" + e, s),
                            n.logger.error(s)
                        }
                    })
                })
            }) : t.forEach(function(t) {
                e.forEach(function(e) {
                    n.loadOne(t + "|" + e, "re")
                })
            })
        }
        ,
        e.prototype.loadOne = function(t) {
            var e = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , i = t.split("|")
              , r = s(i, 2)
              , o = r[0]
              , a = r[1];
            this.read(o, a, "read", null, null, function(i, r) {
                i && e.logger.warn(n + "loading namespace " + a + " for language " + o + " failed", i),
                !i && r && e.logger.log(n + "loaded namespace " + a + " for language " + o, r),
                e.loaded(t, i, r)
            })
        }
        ,
        e.prototype.saveMissing = function(t, e, n, i) {
            this.backend && this.backend.create && this.backend.create(t, e, n, i),
            t && t[0] && this.store.addResource(t[0], e, n, i)
        }
        ,
        e
    }(o.a);
    e.a = c
}
, function(t, e, n) {
    "use strict";
    var i = n(10)
      , r = n(15)
      , o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ;
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
            for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                var r = n[i]
                  , o = Object.getOwnPropertyDescriptor(e, r);
                o && o.configurable && void 0 === t[r] && Object.defineProperty(t, r, o)
            }
        }(t, e))
    }
    var s = function(t) {
        function e(n, r, o) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, t.call(this));
            return s.cache = n,
            s.store = r,
            s.services = o,
            s.options = a,
            s.logger = i.a.create("cacheConnector"),
            s.cache && s.cache.init && s.cache.init(o, a.cache, a),
            s
        }
        return a(e, t),
        e.prototype.load = function(t, e, n) {
            var i = this;
            if (!this.cache)
                return n && n();
            var r = o({}, this.cache.options, this.options.cache)
              , a = "string" == typeof t ? this.services.languageUtils.toResolveHierarchy(t) : t;
            r.enabled ? this.cache.load(a, function(t, e) {
                if (t && i.logger.error("loading languages " + a.join(", ") + " from cache failed", t),
                e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r))
                            for (var o in e[r])
                                if (Object.prototype.hasOwnProperty.call(e[r], o) && "i18nStamp" !== o) {
                                    var s = e[r][o];
                                    s && i.store.addResourceBundle(r, o, s)
                                }
                n && n()
            }) : n && n()
        }
        ,
        e.prototype.save = function() {
            this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
        }
        ,
        e
    }(r.a);
    e.a = s
}
, function(t, e, n) {
    "use strict";
    function i() {
        return {
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            whitelist: !1,
            nonExplicitWhitelist: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            saveMissing: !1,
            saveMissingTo: "fallback",
            missingKeyHandler: !1,
            postProcess: !1,
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: function() {},
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: function(t) {
                return {
                    defaultValue: t[1]
                }
            },
            interpolation: {
                escapeValue: !0,
                format: function(t, e, n) {
                    return t
                },
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                defaultVariables: void 0
            }
        }
    }
    n.d(e, "a", function() {
        return i
    }),
    e.b = function(t) {
        "string" == typeof t.ns && (t.ns = [t.ns]);
        "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]);
        "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]);
        t.whitelist && t.whitelist.indexOf("cimode") < 0 && t.whitelist.push("cimode");
        return t
    }
}
, function(t, e, n) {
    t.exports = n(74).default
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , r = function(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t,
        e
    }(n(75))
      , o = l(n(76))
      , a = l(n(77))
      , s = l(n(78))
      , u = l(n(79))
      , c = l(n(80));
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var d = function() {
        function t(e) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.type = "languageDetector",
            this.detectors = {},
            this.init(e, n)
        }
        return i(t, [{
            key: "init",
            value: function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
                  , n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                this.services = t,
                this.options = r.defaults(e, this.options || {}, {
                    order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
                    lookupQuerystring: "lng",
                    lookupCookie: "i18next",
                    lookupLocalStorage: "i18nextLng",
                    caches: ["localStorage"]
                }),
                this.i18nOptions = n,
                this.addDetector(o.default),
                this.addDetector(a.default),
                this.addDetector(s.default),
                this.addDetector(u.default),
                this.addDetector(c.default)
            }
        }, {
            key: "addDetector",
            value: function(t) {
                this.detectors[t.name] = t
            }
        }, {
            key: "detect",
            value: function(t) {
                var e = this;
                t || (t = this.options.order);
                var n = [];
                t.forEach(function(t) {
                    if (e.detectors[t]) {
                        var i = e.detectors[t].lookup(e.options);
                        i && "string" == typeof i && (i = [i]),
                        i && (n = n.concat(i))
                    }
                });
                var i = void 0;
                return n.forEach(function(t) {
                    if (!i) {
                        var n = e.services.languageUtils.formatLanguageCode(t);
                        e.services.languageUtils.isWhitelisted(n) && (i = n)
                    }
                }),
                i || this.i18nOptions.fallbackLng[0]
            }
        }, {
            key: "cacheUserLanguage",
            value: function(t, e) {
                var n = this;
                e || (e = this.options.caches),
                e && e.forEach(function(e) {
                    n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options)
                })
            }
        }]),
        t
    }();
    d.type = "languageDetector",
    e.default = d
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.defaults = function(t) {
        return r.call(o.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    ,
    e.extend = function(t) {
        return r.call(o.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    t[n] = e[n]
        }),
        t
    }
    ;
    var i = []
      , r = i.forEach
      , o = i.slice
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(t, e, n, i) {
        var r = void 0;
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 60 * n * 1e3),
            r = "; expires=" + o.toGMTString()
        } else
            r = "";
        i = i ? "domain=" + i + ";" : "",
        document.cookie = t + "=" + e + r + ";" + i + "path=/"
    }
      , r = function(t) {
        for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var r = n[i]; " " === r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 === r.indexOf(e))
                return r.substring(e.length, r.length)
        }
        return null
    };
    e.default = {
        name: "cookie",
        lookup: function(t) {
            var e = void 0;
            if (t.lookupCookie && "undefined" != typeof document) {
                var n = r(t.lookupCookie);
                n && (e = n)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupCookie && "undefined" != typeof document && i(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "querystring",
        lookup: function(t) {
            var e = void 0;
            if ("undefined" != typeof window)
                for (var n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++) {
                    var r = n[i].indexOf("=");
                    if (r > 0)
                        n[i].substring(0, r) === t.lookupQuerystring && (e = n[i].substring(r + 1))
                }
            return e
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = void 0;
    try {
        i = "undefined" !== window && null !== window.localStorage;
        window.localStorage.setItem("i18next.translate.boo", "foo"),
        window.localStorage.removeItem("i18next.translate.boo")
    } catch (t) {
        i = !1
    }
    e.default = {
        name: "localStorage",
        lookup: function(t) {
            var e = void 0;
            if (t.lookupLocalStorage && i) {
                var n = window.localStorage.getItem(t.lookupLocalStorage);
                n && (e = n)
            }
            return e
        },
        cacheUserLanguage: function(t, e) {
            e.lookupLocalStorage && i && window.localStorage.setItem(e.lookupLocalStorage, t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "navigator",
        lookup: function(t) {
            var e = [];
            if ("undefined" != typeof navigator) {
                if (navigator.languages)
                    for (var n = 0; n < navigator.languages.length; n++)
                        e.push(navigator.languages[n]);
                navigator.userLanguage && e.push(navigator.userLanguage),
                navigator.language && e.push(navigator.language)
            }
            return e.length > 0 ? e : void 0
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        name: "htmlTag",
        lookup: function(t) {
            var e = void 0
              , n = t.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
            return n && "function" == typeof n.getAttribute && (e = n.getAttribute("lang")),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(24)
      , r = n(36)
      , o = n(35)
      , a = o
      , s = o.default || a;
    e.default = function() {
        var t = null;
        return r.hasWindow() && (t || (t = function() {
            var t = null
              , e = window.navigator.userAgent.match(r.NAVIGATOR_LANGUAGE_REGEX);
            return e && e.length > 0 && (t = e[1]),
            t
        }()),
        t || (t = function() {
            var t = null;
            try {
                var e = JSON.parse(window.name);
                e && e.language && (t = e.language)
            } catch (e) {
                t = null
            }
            return t
        }()),
        t || (t = s.get(i.COOKIE_NAME) || null)),
        t ? r.getStandardLanguage(t) : null
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.assetsResolve = function(t) {
        if ("//" === t.slice(0, 2))
            return "https:" + t;
        if ("http" === t.slice(0, 4))
            return t;
        return "https://" + i + "/dingding/desktop-assets/" + r + "/" + t
    }
    ;
    var i = "g.alicdn.com"
      , r = e.ASSETS_V = "1.1.1"
}
, function(t, e, n) {
    (function(e) {
        var n = "Expected a function"
          , i = "__lodash_hash_undefined__"
          , r = 1 / 0
          , o = "[object Function]"
          , a = "[object GeneratorFunction]"
          , s = "[object Symbol]"
          , u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , c = /^\w*$/
          , l = /^\./
          , d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , f = /\\(\\)?/g
          , p = /^\[object .+?Constructor\]$/
          , h = "object" == typeof e && e && e.Object === Object && e
          , v = "object" == typeof self && self && self.Object === Object && self
          , g = h || v || Function("return this")();
        var _, m = Array.prototype, b = Function.prototype, y = Object.prototype, w = g["__core-js_shared__"], x = (_ = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _ : "", k = b.toString, O = y.hasOwnProperty, E = y.toString, S = RegExp("^" + k.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), C = g.Symbol, T = m.splice, j = U(g, "Map"), L = U(Object, "create"), P = C ? C.prototype : void 0, A = P ? P.toString : void 0;
        function I(t) {
            var e = -1
              , n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        function N(t) {
            var e = -1
              , n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        function R(t) {
            var e = -1
              , n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        function M(t, e) {
            for (var n, i, r = t.length; r--; )
                if ((n = t[r][0]) === (i = e) || n != n && i != i)
                    return r;
            return -1
        }
        function V(t, e) {
            for (var n, i = 0, r = (e = function(t, e) {
                if (H(t))
                    return !1;
                var n = typeof t;
                if ("number" == n || "symbol" == n || "boolean" == n || null == t || z(t))
                    return !0;
                return c.test(t) || !u.test(t) || null != e && t in Object(e)
            }(e, t) ? [e] : H(n = e) ? n : B(n)).length; null != t && i < r; )
                t = t[F(e[i++])];
            return i && i == r ? t : void 0
        }
        function D(t) {
            return !(!$(t) || x && x in t) && (function(t) {
                var e = $(t) ? E.call(t) : "";
                return e == o || e == a
            }(t) || function(t) {
                var e = !1;
                if (null != t && "function" != typeof t.toString)
                    try {
                        e = !!(t + "")
                    } catch (t) {}
                return e
            }(t) ? S : p).test(function(t) {
                if (null != t) {
                    try {
                        return k.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }(t))
        }
        function X(t, e) {
            var n, i, r = t.__data__;
            return ("string" == (i = typeof (n = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }
        function U(t, e) {
            var n = function(t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return D(n) ? n : void 0
        }
        I.prototype.clear = function() {
            this.__data__ = L ? L(null) : {}
        }
        ,
        I.prototype.delete = function(t) {
            return this.has(t) && delete this.__data__[t]
        }
        ,
        I.prototype.get = function(t) {
            var e = this.__data__;
            if (L) {
                var n = e[t];
                return n === i ? void 0 : n
            }
            return O.call(e, t) ? e[t] : void 0
        }
        ,
        I.prototype.has = function(t) {
            var e = this.__data__;
            return L ? void 0 !== e[t] : O.call(e, t)
        }
        ,
        I.prototype.set = function(t, e) {
            return this.__data__[t] = L && void 0 === e ? i : e,
            this
        }
        ,
        N.prototype.clear = function() {
            this.__data__ = []
        }
        ,
        N.prototype.delete = function(t) {
            var e = this.__data__
              , n = M(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : T.call(e, n, 1),
            0))
        }
        ,
        N.prototype.get = function(t) {
            var e = this.__data__
              , n = M(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
        ,
        N.prototype.has = function(t) {
            return M(this.__data__, t) > -1
        }
        ,
        N.prototype.set = function(t, e) {
            var n = this.__data__
              , i = M(n, t);
            return i < 0 ? n.push([t, e]) : n[i][1] = e,
            this
        }
        ,
        R.prototype.clear = function() {
            this.__data__ = {
                hash: new I,
                map: new (j || N),
                string: new I
            }
        }
        ,
        R.prototype.delete = function(t) {
            return X(this, t).delete(t)
        }
        ,
        R.prototype.get = function(t) {
            return X(this, t).get(t)
        }
        ,
        R.prototype.has = function(t) {
            return X(this, t).has(t)
        }
        ,
        R.prototype.set = function(t, e) {
            return X(this, t).set(t, e),
            this
        }
        ;
        var B = W(function(t) {
            var e;
            t = null == (e = t) ? "" : function(t) {
                if ("string" == typeof t)
                    return t;
                if (z(t))
                    return A ? A.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -r ? "-0" : e
            }(e);
            var n = [];
            return l.test(t) && n.push(""),
            t.replace(d, function(t, e, i, r) {
                n.push(i ? r.replace(f, "$1") : e || t)
            }),
            n
        });
        function F(t) {
            if ("string" == typeof t || z(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -r ? "-0" : e
        }
        function W(t, e) {
            if ("function" != typeof t || e && "function" != typeof e)
                throw new TypeError(n);
            var i = function() {
                var n = arguments
                  , r = e ? e.apply(this, n) : n[0]
                  , o = i.cache;
                if (o.has(r))
                    return o.get(r);
                var a = t.apply(this, n);
                return i.cache = o.set(r, a),
                a
            };
            return i.cache = new (W.Cache || R),
            i
        }
        W.Cache = R;
        var H = Array.isArray;
        function $(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function z(t) {
            return "symbol" == typeof t || function(t) {
                return !!t && "object" == typeof t
            }(t) && E.call(t) == s
        }
        t.exports = function(t, e, n) {
            var i = null == t ? void 0 : V(t, e);
            return void 0 === i ? n : i
        }
    }
    ).call(e, n(23))
}
, function(t, e, n) {
    "use strict";
    e.decode = e.parse = n(85),
    e.encode = e.stringify = n(86)
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, n, o) {
        e = e || "&",
        n = n || "=";
        var a = {};
        if ("string" != typeof t || 0 === t.length)
            return a;
        var s = /\+/g;
        t = t.split(e);
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var c = t.length;
        u > 0 && c > u && (c = u);
        for (var l = 0; l < c; ++l) {
            var d, f, p, h, v = t[l].replace(s, "%20"), g = v.indexOf(n);
            g >= 0 ? (d = v.substr(0, g),
            f = v.substr(g + 1)) : (d = v,
            f = ""),
            p = decodeURIComponent(d),
            h = decodeURIComponent(f),
            i(a, p) ? r(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
        }
        return a
    }
    ;
    var r = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}
, function(t, e, n) {
    "use strict";
    var i = function(t) {
        switch (typeof t) {
        case "string":
            return t;
        case "boolean":
            return t ? "true" : "false";
        case "number":
            return isFinite(t) ? t : "";
        default:
            return ""
        }
    };
    t.exports = function(t, e, n, s) {
        return e = e || "&",
        n = n || "=",
        null === t && (t = void 0),
        "object" == typeof t ? o(a(t), function(a) {
            var s = encodeURIComponent(i(a)) + n;
            return r(t[a]) ? o(t[a], function(t) {
                return s + encodeURIComponent(i(t))
            }).join(e) : s + encodeURIComponent(i(t[a]))
        }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""
    }
    ;
    var r = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    function o(t, e) {
        if (t.map)
            return t.map(e);
        for (var n = [], i = 0; i < t.length; i++)
            n.push(e(t[i], i));
        return n
    }
    var a = Object.keys || function(t) {
        var e = [];
        for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(90), n(91), !1, function(t) {
        n(88)
    }, "data-v-376be6a3", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(89);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("651d25d1", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.live-multi-tag[data-v-376be6a3],.live-type-tag-wrap[data-v-376be6a3]{display:-webkit-box;display:-webkit-flex;display:flex\n}\n.live-multi-tag[data-v-376be6a3]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:inherit;height:inherit;margin-left:.133333rem;text-align:center;color:#ff943e\n}\n.live-multi-tag>span[data-v-376be6a3]{display:inline-block;white-space:nowrap;padding:0 .04rem;font-size:.16rem;border-radius:.04rem;border:.013333rem solid #ff943e;-webkit-transform:scale(.8);transform:scale(.8)\n}\n.multi_live_tag[data-v-376be6a3]{margin-right:.133333rem;font-size:.2rem;width:.2rem;height:.2rem;background-image:url(https://img.alicdn.com/tfs/TB16EKyrXkoBKNjSZFEXXbrEVXa-200-200.png);background-repeat:no-repeat;background-size:100%\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8)
      , r = 1;
    e.default = {
        props: {
            liveType: {
                default: 0
            }
        },
        components: {},
        data: function() {
            return {
                tagName: "",
                canShowTag: !1
            }
        },
        created: function() {},
        computed: {
            isChinese: function() {
                return (0,
                i.isChinese)({
                    simplifiedOnly: !1
                })
            }
        },
        watch: {
            liveType: function(t, e) {
                t === r && (this.tagName = i.i18next.t("pc_grouplive_multi_live_tag"),
                this.canShowTag = !0)
            }
        }
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "live-type-tag-wrap"
            }, [this.canShowTag ? e("div", {
                staticClass: "live-multi-tag"
            }, [this.isChinese ? e("span", [this._v(this._s(this.tagName))]) : e("div", {
                staticClass: "multi_live_tag"
            })]) : this._e()])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(95), n(100), !1, function(t) {
        n(93)
    }, "data-v-19be6841", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(94);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("5c657442", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.favor-wrap[data-v-19be6841]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.favor-btn[data-v-19be6841]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(https://gw.alicdn.com/tfs/TB1wd7pfZrI8KJjy0FhXXbfnpXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.favor-btn-release[data-v-19be6841]{background-size:.266667rem .266667rem\n}\n.favor-count[data-v-19be6841]{background-image:-webkit-linear-gradient(231deg,#6163fd 1%,#3296fa);background-image:linear-gradient(-141deg,#6163fd 1%,#3296fa);border-radius:.026667rem;font-size:.16rem;color:#fff;padding:.053333rem .106667rem\n}\n.like-container[data-v-19be6841]{width:1.333333rem;height:4rem;position:absolute;right:0;bottom:.8rem;z-index:100\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(8), o = n(96), a = n(99), s = (i = a) && i.__esModule ? i : {
        default: i
    };
    e.default = {
        props: {
            cid: {
                default: "",
                type: String
            },
            favorCount: {
                default: 0
            },
            favorCountType: {
                default: ""
            }
        },
        components: {},
        data: function() {
            return {
                activitCls: "",
                likeText: r.i18next.t("pc_grouplive_live_praise")
            }
        },
        created: function() {},
        mounted: function() {
            this.initLikeAnim()
        },
        methods: {
            favor: function() {
                var t = this;
                this.activitCls = "favor-btn-release",
                setTimeout(function() {
                    t.activitCls = ""
                }, 300),
                this.$emit("favor")
            },
            initLikeAnim: function() {
                this.likeAnim = new o.LikeAnim({
                    container: "#J_Like_Container",
                    showLikeBtn: !1,
                    xLimitAttenuationRate: 1,
                    ySpeedBase: 6,
                    random: !0,
                    visualSizeRatio: 2.8,
                    icons: s.default
                })
            }
        },
        watch: {
            favorCount: function(t, e) {
                var n = this;
                if ("message" === this.favorCountType || "action" === this.favorCountType) {
                    var i = t - e;
                    isNaN(i) && (i = 1),
                    i = i > 10 ? 10 : i;
                    for (var r = 0; r < i; r++)
                        setTimeout(function() {
                            // n.likeAnim.like()
                        }, 200 * r)
                }
            }
        },
        filters: {
            numOmit: function(t) {
                return /* parseInt(t) > 1e5 ? (t / 1e4).toFixed(1) + "万" :*/ t;
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.LikeAnim = void 0;
    var i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }()
      , r = a(n(97))
      , o = a(n(98));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = {
        canvasId: "J_LiveAnimCanvas",
        showLikeBtn: !0,
        likeBtnImg: "//img.alicdn.com/tfs/TB17.kVLXXXXXXAapXXXXXXXXXX-72-74.png",
        likeBtnWidth: 36,
        likeBtnHeight: 36,
        likeBtnClass: "live-anim-btn",
        likeBtnId: "J_LiveAnimBtn",
        canvasIconOpacity: .8,
        icons: ["//gw.alicdn.com/tfs/TB1lqdXLpXXXXcwXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1T6lgLpXXXXajXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1V.tmLpXXXXaVXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1mHc4LXXXXXaoXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1h.33LXXXXXaGXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1KXtoLpXXXXahXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oqAYLXXXXXaGaXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1uYXjLpXXXXchXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oWMZLXXXXXa.XVXXXXXXXXXX-154-181.png"],
        iconWidth: 80,
        iconWidthRatio: .6,
        iconHeight: 80,
        giftNumberLimit: 40,
        xSpeedBase: 1,
        xSpeedRandomRange: .5,
        xLimitRandomRange: .2,
        xLimitAttenuationRate: .95,
        ySpeedBase: 3,
        ySpeedRandomRange: .3,
        yLimitRandomRange: .3,
        stayDuration: 200,
        visualSizeRatio: 2,
        activeFading: !0
    }
      , u = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            (e = e || {}).container || console.warn("未找到 like-anim 容器!"),
            this.cfg = r.default.merge(s, e),
            this.clickHandler = e.clickHandler || function() {}
            ,
            this.initCanvas(e.container),
            this.initIcon(e)
        }
        return i(t, [{
            key: "initCanvas",
            value: function() {
                try {
                    var t = document.querySelector(this.cfg.container)
                } catch (t) {
                    return void console.warn(t)
                }
                var e = t.clientWidth
                  , n = t.clientHeight;
                if (e && n) {
                    t.className += " live-anim-wrap",
                    this.cfg.canvasWidth = Math.floor(e * this.cfg.visualSizeRatio),
                    this.cfg.canvasHeight = Math.floor(n * this.cfg.visualSizeRatio);
                    var i = document.createElement("canvas");
                    if (i.style.width = e + "px",
                    i.style.height = n + "px",
                    i.setAttribute("id", this.cfg.canvasId),
                    i.setAttribute("width", this.cfg.canvasWidth),
                    i.setAttribute("height", this.cfg.canvasHeight),
                    this.cxt = i.getContext("2d"),
                    this.cxt.globalAlpha = this.cfg.canvasIconOpacity,
                    t.appendChild(i),
                    this.cfg.showLikeBtn) {
                        var r = document.createElement("div");
                        r.style.backgroundImage = "url('" + this.cfg.likeBtnImg + "')",
                        r.style.width = this.cfg.likeBtnWidth + "px",
                        r.style.height = this.cfg.likeBtnHeight + "px",
                        r.style.marginLeft = -this.cfg.likeBtnWidth / 2 + "px",
                        r.className = this.cfg.likeBtnClass,
                        r.setAttribute("id", this.cfg.likeBtnId),
                        r.addEventListener("click", this.clickHandler),
                        t.appendChild(r)
                    }
                    this.initComplete = !0,
                    this.giftArr = []
                }
            }
        }, {
            key: "initIcon",
            value: function(t) {
                this.cfg.iconWidth = t.iconWidth || this.cfg.canvasWidth * this.cfg.iconWidthRatio,
                this.cfg.iconHeight = t.iconHeight || this.cfg.iconWidth
            }
        }, {
            key: "like",
            value: function(t) {
                if (this.initComplete && !(this.giftArr.length > this.cfg.giftNumberLimit)) {
                    if (!(t = t || {}).iconSrc) {
                        if (!this.cfg.icons.length)
                            return;
                        !0 === this.cfg.random ? this.i = Math.floor(Math.random() * this.cfg.icons.length) : this.i = this.i ? (this.i + 1) % this.cfg.icons.length : 1,
                        t.iconSrc = this.cfg.icons[this.i]
                    }
                    t = r.default.merge(this.cfg, t);
                    var e = new o.default(t);
                    this.giftArr.push(e),
                    this.startLoop()
                }
            }
        }, {
            key: "startLoop",
            value: function() {
                var t = this;
                if (!this.animFrame) {
                    this.animFrame = window.requestAnimFrame(function e() {
                        t.cxt.clearRect(0, 0, t.cfg.canvasWidth, t.cfg.canvasHeight),
                        t.recycle(),
                        t.giftArr.length ? (t.giftArr.forEach(function(t) {
                            t.move()
                        }),
                        t.animFrame = window.requestAnimFrame(e)) : t.stopLoop()
                    })
                }
            }
        }, {
            key: "stopLoop",
            value: function() {
                window.cancelAnimationFrame(this.animFrame),
                delete this.animFrame
            }
        }, {
            key: "recycle",
            value: function() {
                var t = [];
                this.giftArr.forEach(function(e) {
                    !e.finished && t.push(e)
                }),
                this.giftArr = t
            }
        }]),
        t
    }();
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(t, 1e3 / 60)
    }
    ,
    e.LikeAnim = u
}
, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    t.exports = {
        mix: function(t, e, n, i, r) {
            var o;
            return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                if (e)
                    for (var n in e)
                        void 0 !== (o = e[n]) && (t[n] = o)
            }),
            t
        },
        merge: function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.mix.apply(null, [{}].concat(t))
        },
        isObject: function(t) {
            return "object" == (void 0 === t ? "undefined" : i(t))
        },
        isRegExp: function(t) {
            return t instanceof RegExp
        },
        isArray: function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        },
        isFunction: function(t) {
            return t instanceof Function
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }();
    var r = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            e = e || {},
            this.cfg = e,
            this.drawIcon()
        }
        return i(t, [{
            key: "drawIcon",
            value: function() {
                var t = this;
                this.iconElem = new Image,
                this.iconElem.onload = function() {
                    var e = document.getElementById(t.cfg.canvasId);
                    t.cxt = e.getContext("2d"),
                    t.x = (t.cfg.canvasWidth - t.cfg.iconWidth) / 2,
                    t.y = t.cfg.canvasHeight - t.cfg.iconHeight - 40,
                    t.directLeft = Math.random() > .5,
                    t.xSpeed = 1 - (1 - 2 * Math.random()) * t.cfg.xSpeedRandomRange,
                    t.ySpeed = 1 - (1 - 2 * Math.random()) * t.cfg.ySpeedRandomRange,
                    t.maxHorizontalOffset = 1 - (1 - Math.random()) * t.cfg.xLimitRandomRange,
                    t.maxVerticalOffset = 1 - (1 - Math.random()) * t.cfg.yLimitRandomRange,
                    t.cxt.drawImage(t.iconElem, t.x, t.y, t.cfg.iconWidth, t.cfg.iconHeight)
                }
                ,
                this.iconElem.src = this.cfg.iconSrc
            }
        }, {
            key: "move",
            value: function() {
                var t = this;
                if (this.cxt && !this.destroy) {
                    var e = this.cfg.xSpeedBase * this.xSpeed
                      , n = this.cfg.ySpeedBase * this.ySpeed;
                    this.y - n > (1 - this.maxVerticalOffset) * this.cfg.canvasHeight ? (this.y -= n,
                    this.directLeft ? this.x - e >= this.cfg.canvasWidth * (1 - this.maxHorizontalOffset) / 2 ? this.x -= e : (this.directLeft = !this.directLeft,
                    this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate) : this.x + this.cfg.iconWidth + e <= this.cfg.canvasWidth * (1 + this.maxHorizontalOffset) / 2 ? this.x += e : (this.directLeft = !this.directLeft,
                    this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate)) : this.finishTimeout = this.finishTimeout || setTimeout(function() {
                        t.finished = !0
                    }, this.cfg.stayDuration),
                    this.cfg.activeFading && (this.cxt.globalAlpha = (this.y / this.cfg.canvasHeight).toFixed(2)),
                    this.cxt.drawImage(this.iconElem, this.x, this.y, this.cfg.iconWidth, this.cfg.iconHeight)
                }
            }
        }]),
        t
    }();
    e.default = r
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = ["//gw.alicdn.com/tfs/TB106EyhRfH8KJjy1XbXXbLdXXa-60-60.png", "//gw.alicdn.com/tfs/TB1Y7AYhIrI8KJjy0FhXXbfnpXa-60-60.png", "//gw.alicdn.com/tfs/TB15FBch3vD8KJjy0FlXXagBFXa-60-60.png", "//gw.alicdn.com/tfs/TB1zaxvh3DD8KJjy0FdXXcjvXXa-60-60.png"]
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "favor-wrap"
            }, [n("div", {
                staticClass: "like-container",
                attrs: {
                    id: "J_Like_Container"
                }
            }), t._v(" "), n("div", {
                staticClass: "favor-count"
            }, [t._v(t._s(t.likeText) + " " + t._s(t._f("numOmit")(t.favorCount)))]), t._v(" "), n("div", {
                ref: "btn",
                class: ["favor-btn", t.activitCls],
                on: {
                    click: t.favor
                }
            })])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    var i;
    "undefined" != typeof self && self,
    i = function() {
        return function(t) {
            function e(n) {
                if (i[n])
                    return i[n].exports;
                var r = i[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(r.exports, r, r.exports, e),
                r.l = !0,
                r.exports
            }
            var n = window.webpackJsonpVideoX;
            window.webpackJsonpVideoX = function(e, i, o) {
                for (var a, s, u = 0, c = []; u < e.length; u++)
                    s = e[u],
                    r[s] && c.push(r[s][0]),
                    r[s] = 0;
                for (a in i)
                    Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
                for (n && n(e, i, o); c.length; )
                    c.shift()()
            }
            ;
            var i = {}
              , r = {
                2: 0
            };
            return e.e = function(t) {
                function n() {
                    s.onerror = s.onload = null,
                    clearTimeout(u);
                    var e = r[t];
                    0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")),
                    r[t] = void 0)
                }
                var i = r[t];
                if (0 === i)
                    return new Promise(function(t) {
                        t()
                    }
                    );
                if (i)
                    return i[2];
                var o = new Promise(function(e, n) {
                    i = r[t] = [e, n]
                }
                );
                i[2] = o;
                var a = document.getElementsByTagName("head")[0]
                  , s = document.createElement("script");
                s.type = "text/javascript",
                s.charset = "utf-8",
                s.async = !0,
                s.timeout = 12e4,
                e.nc && s.setAttribute("nonce", e.nc),
                s.src = e.p + "" + t + ".js";
                var u = setTimeout(n, 12e4);
                return s.onerror = s.onload = n,
                a.appendChild(s),
                o
            }
            ,
            e.m = t,
            e.c = i,
            e.d = function(t, n, i) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }
            ,
            e.n = function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return e.d(n, "a", n),
                n
            }
            ,
            e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            e.p = "",
            e.oe = function(t) {
                throw console.error(t),
                t
            }
            ,
            e(e.s = 167)
        }([function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }
        , function(t, e, n) {
            "use strict";
            e.__esModule = !0,
            e.default = function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
        }
        , function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(77));
            e.default = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        (0,
                        i.default)(t, r.key, r)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n),
                    i && t(e, i),
                    e
                }
            }()
        }
        , function(t, e) {
            var n = t.exports = {
                version: "2.6.11"
            };
            "number" == typeof __e && (__e = n)
        }
        , function(t, e, n) {
            var i = n(19)
              , r = n(56)
              , o = n(36)
              , a = Object.defineProperty;
            e.f = n(5) ? Object.defineProperty : function(t, e, n) {
                if (i(t),
                e = o(e, !0),
                i(n),
                r)
                    try {
                        return a(t, e, n)
                    } catch (t) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (t[e] = n.value),
                t
            }
        }
        , function(t, e, n) {
            t.exports = !n(24)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                return !!t && "object" == typeof t
            }
        }
        , function(t, e, n) {
            var i = n(91)
              , r = n(35);
            t.exports = function(t) {
                return i(r(t))
            }
        }
        , function(t, e, n) {
            var i = n(4)
              , r = n(26);
            t.exports = n(5) ? function(t, e, n) {
                return i.f(t, e, r(1, n))
            }
            : function(t, e, n) {
                return t[e] = n,
                t
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }
        , function(t, e, n) {
            var i = n(41)("wks")
              , r = n(27)
              , o = n(0).Symbol
              , a = "function" == typeof o;
            (t.exports = function(t) {
                return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
            }
            ).store = i
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                VIDEO_ABORT: "video:abort",
                VIDEO_ENDED: "video:ended",
                VIDEO_ERROR: "video:error",
                VIDEO_PLAY: "video:play",
                VIDEO_PLAYING: "video:playing",
                VIDEO_PROGRESS: "video:progress",
                VIDEO_LOADSTART: "video:loadstart",
                VIDEO_SUSPEND: "video:suspend",
                VIDEO_STALLED: "video:stalled",
                VIDEO_WAITING: "video:waiting",
                VIDEO_CANPLAY: "video:canplay",
                VIDEO_CANPLAYTHROUGH: "video:canplaythrough",
                VIDEO_TIMEUPDATE: "video:timeupdate",
                VIDEO_VOLUMECHANGE: "video:volumechange",
                VIDEO_SEEKING: "video:seeking",
                VIDEO_SEEKED: "video:seeked",
                VIDEO_PAUSE: "video:pause",
                VIDEO_REALPLAY: "video:realPlay",
                VIDEO_EXITFULLSCREEN: "video:exitFullscreen",
                VIDEO_ENTERFULLSCREEN: "video:enterFullscreen",
                VIDEO_RECOVERED_EARLY_EOF: "video:recoveredEarlyEOF",
                VIDEO_LOADING_COMPLETE: "video:loadingComplete"
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t) {
                return "string" == typeof t && /\S/.test(t)
            }
            function o(t) {
                if (/\s/.test(t))
                    throw new Error("class has illegal whitespace characters")
            }
            function a(t) {
                return function(e, n) {
                    return r(e) ? (r(n) && (n = document.querySelector(n)),
                    (d(n) ? n : document)[t](e)) : document[t](null)
                }
            }
            function s(t, e) {
                return t.classList ? t.classList.contains(e) : (o(e),
                function(t) {
                    return new RegExp("(^|\\s)" + t + "($|\\s)")
                }(e).test(t.className))
            }
            function u(t, e) {
                return t.classList ? t.classList.add(e) : s(t, e) || (t.className = (t.className + " " + e).trim()),
                t
            }
            function c(t, e) {
                return t.classList ? t.classList.remove(e) : (o(e),
                t.className = t.className.split(/\s+/).filter(function(t) {
                    return t !== e
                }).join(" ")),
                t
            }
            function l(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()),
                !e)
                    return {
                        left: 0,
                        top: 0
                    };
                var n = document.documentElement
                  , i = document.body
                  , r = n.clientLeft || i.clientLeft || 0
                  , o = window.pageXOffset || i.scrollLeft
                  , a = e.left + o - r
                  , s = n.clientTop || i.clientTop || 0
                  , u = window.pageYOffset || i.scrollTop
                  , c = e.top + u - s;
                return {
                    left: Math.round(a),
                    top: Math.round(c)
                }
            }
            function d(t) {
                return !!t && "object" === (void 0 === t ? "undefined" : (0,
                g.default)(t)) && 1 === t.nodeType
            }
            function f(t) {
                return !!t && "object" === (void 0 === t ? "undefined" : (0,
                g.default)(t)) && 3 === t.nodeType
            }
            function p(t) {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                return t
            }
            function h(t) {
                return "function" == typeof t && (t = t()),
                (Array.isArray(t) ? t : [t]).map(function(t) {
                    return "function" == typeof t && (t = t()),
                    d(t) || f(t) ? t : "string" == typeof t && /\S/.test(t) ? document.createTextNode(t) : void 0
                }).filter(function(t) {
                    return t
                })
            }
            function v(t, e) {
                return h(e).forEach(function(e) {
                    return t.appendChild(e)
                }),
                t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.$$ = e.$ = void 0;
            var g = i(n(17));
            e.getEl = function(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)),
                document.getElementById(t)
            }
            ,
            e.createEl = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div"
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = document.createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    var n = e[t];
                    -1 !== t.indexOf("aria-") || "role" === t || "type" === t ? i.setAttribute(t, n) : i[t] = n
                }),
                Object.getOwnPropertyNames(n).forEach(function(t) {
                    n[t],
                    i.setAttribute(t, n[t])
                }),
                i
            }
            ,
            e.textContent = function(t, e) {
                void 0 === t.textContent ? t.innerText = e : t.textContent = e
            }
            ,
            e.insertElFirst = function(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }
            ,
            e.getElData = function(t) {
                var e = t[b];
                return e || (e = t[b] = _.newGUID()),
                m[e] || (m[e] = {}),
                m[e]
            }
            ,
            e.hasElData = function(t) {
                var e = t[b];
                return !!e && !!Object.getOwnPropertyNames(m[e]).length
            }
            ,
            e.removeElData = function(t) {
                var e = t[b];
                if (e) {
                    delete m[e];
                    try {
                        delete t[b]
                    } catch (e) {
                        t.removeAttribute ? t.removeAttribute(b) : t[b] = null
                    }
                }
            }
            ,
            e.hasElClass = s,
            e.addElClass = u,
            e.removeElClass = c,
            e.toggleElClass = function(t, e, n) {
                var i = s(t, e);
                if ("function" == typeof n && (n = n(t, e)),
                "boolean" != typeof n && (n = !i),
                n !== i)
                    return n ? u(t, e) : c(t, e),
                    t
            }
            ,
            e.setElAttributes = function(t, e) {
                Object.getOwnPropertyNames(e).forEach(function(n) {
                    var i = e[n];
                    null === i || void 0 === i || !1 === i ? t.removeAttribute(n) : t.setAttribute(n, !0 === i ? "" : i)
                })
            }
            ,
            e.getElAttributes = function(t) {
                var e, n, i, r, o;
                if (e = {},
                n = ",autoplay,controls,loop,muted,default,",
                t && t.attributes && t.attributes.length > 0)
                    for (var a = (i = t.attributes).length - 1; a >= 0; a--)
                        r = i[a].name,
                        o = i[a].value,
                        "boolean" != typeof t[r] && -1 === n.indexOf("," + r + ",") || (o = null !== o),
                        e[r] = o;
                return e
            }
            ,
            e.blockTextSelection = function() {
                document.body.focus(),
                document.onselectstart = function() {
                    return !1
                }
            }
            ,
            e.unblockTextSelection = function() {
                document.onselectstart = function() {
                    return !0
                }
            }
            ,
            e.findElPosition = l,
            e.getPointerPosition = function(t, e) {
                var n = {}
                  , i = l(t)
                  , r = t.offsetWidth
                  , o = t.offsetHeight
                  , a = i.top
                  , s = i.left
                  , u = e.pageY
                  , c = e.pageX;
                return e.changedTouches && (c = e.changedTouches[0].pageX,
                u = e.changedTouches[0].pageY),
                n.y = Math.max(0, Math.min(1, (a - u + o) / o)),
                n.x = Math.max(0, Math.min(1, (c - s) / r)),
                n
            }
            ,
            e.isEl = d,
            e.isTextNode = f,
            e.emptyEl = p,
            e.normalizeContent = h,
            e.appendContent = v,
            e.insertContent = function(t, e) {
                return v(p(t), e)
            }
            ;
            var _ = function(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }(n(64))
              , m = (i(n(21)),
            {})
              , b = "vdata" + (new Date).getTime();
            e.$ = a("querySelector"),
            e.$$ = a("querySelectorAll")
        }
        , function(t, e) {
            t.exports = function(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
        }
        , function(t, e, n) {
            "use strict";
            e.__esModule = !0;
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(17));
            e.default = function(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== (void 0 === e ? "undefined" : (0,
                i.default)(e)) && "function" != typeof e ? t : e
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(n(112))
              , o = i(n(116))
              , a = i(n(17));
            e.default = function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0,
                    a.default)(e)));
                t.prototype = (0,
                o.default)(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (r.default ? (0,
                r.default)(t, e) : t.__proto__ = e)
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var r = i(n(84))
              , o = i(n(100))
              , a = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t
            }
            ;
            e.default = "function" == typeof o.default && "symbol" === a(r.default) ? function(t) {
                return void 0 === t ? "undefined" : a(t)
            }
            : function(t) {
                return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
            }
        }
        , function(t, e, n) {
            var i = n(0)
              , r = n(3)
              , o = n(55)
              , a = n(9)
              , s = n(6)
              , u = function(t, e, n) {
                var c, l, d, f = t & u.F, p = t & u.G, h = t & u.S, v = t & u.P, g = t & u.B, _ = t & u.W, m = p ? r : r[e] || (r[e] = {}), b = m.prototype, y = p ? i : h ? i[e] : (i[e] || {}).prototype;
                for (c in p && (n = e),
                n)
                    (l = !f && y && void 0 !== y[c]) && s(m, c) || (d = l ? y[c] : n[c],
                    m[c] = p && "function" != typeof y[c] ? n[c] : g && l ? o(d, i) : _ && y[c] == d ? function(t) {
                        var e = function(e, n, i) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e,n)
                                }
                                return new t(e,n,i)
                            }
                            return t.apply(this, arguments)
                        };
                        return e.prototype = t.prototype,
                        e
                    }(d) : v && "function" == typeof d ? o(Function.call, d) : d,
                    v && ((m.virtual || (m.virtual = {}))[c] = d,
                    t & u.R && b && !b[c] && a(b, c, d)))
            };
            u.F = 1,
            u.G = 2,
            u.S = 4,
            u.P = 8,
            u.B = 16,
            u.W = 32,
            u.U = 64,
            u.R = 128,
            t.exports = u
        }
        , function(t, e, n) {
            var i = n(10);
            t.exports = function(t) {
                if (!i(t))
                    throw TypeError(t + " is not an object!");
                return t
            }
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = {
                INIT: "vx:init",
                SOURCE_ATTACHED: "vx:sourceattached",
                LOADING: "vx:loading",
                TRIGGER_PAUSE: "vx:triggerpause",
                TRIGGER_PLAY: "vx:triggerplay",
                VIDEO_CLICK: "vx:videoclick",
                PLAYER_INNER_ERROR: "vx:playererror"
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t, e) {
                var n = Array.prototype.slice.call(e)
                  , i = function() {}
                  , o = window.console || {
                    log: i,
                    warn: i,
                    error: i
                };
                t ? n.unshift(t.toUpperCase() + ":") : t = "log",
                r.history.push(n),
                n.unshift("LIB-PLAYER-VIDEO:"),
                o[t].apply ? o[t].apply(o, n) : o[t](n.join(" "))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                window.libVideoPlayerDebug && i(null, arguments)
            };
            r.history = [],
            r.error = function() {
                i("error", arguments)
            }
            ,
            r.warn = function() {
                i("warn", arguments)
            }
            ,
            e.default = r
        }
        , function(t, e, n) {
            var i = n(133)
              , r = n(23);
            t.exports = function(t) {
                return null != t && r(i(t))
            }
        }
        , function(t, e) {
            var n = 9007199254740991;
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }
        , function(t, e) {
            t.exports = !0
        }
        , function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }
        , function(t, e) {
            var n = 0
              , i = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(1))
              , o = i(n(2))
              , a = function() {
                function t() {
                    (0,
                    r.default)(this, t)
                }
                return (0,
                o.default)(t, [{
                    key: "on",
                    value: function(t, e) {
                        return this._eventCollection = this._eventCollection || {},
                        this._eventCollection[t] = this._eventCollection[t] || [],
                        this._eventCollection[t].push(e),
                        this
                    }
                }, {
                    key: "once",
                    value: function(t, e) {
                        function n() {
                            i.off(t, n),
                            e.apply(this, arguments)
                        }
                        var i = this;
                        return n.listener = e,
                        this.on(t, n),
                        this
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        var n = void 0;
                        return this._eventCollection && (n = this._eventCollection[t]) ? (n.forEach(function(t, i) {
                            t !== e && t.listener !== e || n.splice(i, 1)
                        }),
                        0 === n.length && delete this._eventCollection[t],
                        this) : this
                    }
                }, {
                    key: "emit",
                    value: function(t) {
                        for (var e = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            i[r - 1] = arguments[r];
                        var o = void 0;
                        return this._eventCollection && (o = this._eventCollection[t]) ? ((o = o.slice(0)).forEach(function(t) {
                            return t.apply(e, i)
                        }),
                        this) : this
                    }
                }]),
                t
            }();
            e.default = a
        }
        , function(t, e, n) {
            var i = n(22)
              , r = n(7)
              , o = Object.prototype
              , a = o.hasOwnProperty
              , s = o.propertyIsEnumerable;
            t.exports = function(t) {
                return r(t) && i(t) && a.call(t, "callee") && !s.call(t, "callee")
            }
        }
        , function(t, e) {
            var n = Array.prototype
              , i = Error.prototype
              , r = Object.prototype.propertyIsEnumerable
              , o = n.splice
              , a = {};
            !function(t) {
                var e = function() {
                    this.x = 1
                }
                  , n = {
                    0: 1,
                    length: 1
                }
                  , s = [];
                for (var u in e.prototype = {
                    valueOf: 1,
                    y: 1
                },
                new e)
                    s.push(u);
                a.enumErrorProps = r.call(i, "message") || r.call(i, "name"),
                a.enumPrototypes = r.call(e, "prototype"),
                a.nonEnumShadows = !/valueOf/.test(s),
                a.ownLast = "x" != s[0],
                a.spliceObjects = (o.call(n, 0, 1),
                !n[0]),
                a.unindexedChars = "x"[0] + Object("x")[0] != "xx"
            }(),
            t.exports = a
        }
        , function(t, e, n) {
            var i = n(68)
              , r = n(23)
              , o = n(7)
              , a = Object.prototype.toString
              , s = i(Array, "isArray") || function(t) {
                return o(t) && r(t.length) && "[object Array]" == a.call(t)
            }
            ;
            t.exports = s
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Version = e.params = e.thirdapp = e.aliapp = e.os = e.browser = void 0;
            var r = i(n(150))
              , o = i(n(151))
              , a = i(n(72))
              , s = i(n(152))
              , u = i(n(153))
              , c = i(n(33));
            e.browser = o.default,
            e.os = a.default,
            e.aliapp = r.default,
            e.thirdapp = s.default,
            e.params = u.default,
            e.Version = c.default
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n),
                    i && t(e, i),
                    e
                }
            }()
              , r = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, t),
                    this.val = e ? e.toString() : ""
                }
                return i(t, null, [{
                    key: "compare",
                    value: function(t, e) {
                        t = t.toString().split("."),
                        e = e.toString().split(".");
                        for (var n = 0; n < t.length || n < e.length; n++) {
                            var i = parseInt(t[n], 10)
                              , r = parseInt(e[n], 10);
                            if (isNaN(i) && (i = 0),
                            isNaN(r) && (r = 0),
                            i < r)
                                return -1;
                            if (i > r)
                                return 1
                        }
                        return 0
                    }
                }]),
                i(t, [{
                    key: "gt",
                    value: function(e) {
                        return t.compare(this, e) > 0
                    }
                }, {
                    key: "gte",
                    value: function(e) {
                        return t.compare(this, e) >= 0
                    }
                }, {
                    key: "lt",
                    value: function(e) {
                        return t.compare(this, e) < 0
                    }
                }, {
                    key: "lte",
                    value: function(e) {
                        return t.compare(this, e) <= 0
                    }
                }, {
                    key: "eq",
                    value: function(e) {
                        return 0 === t.compare(this, e)
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.val.toString()
                    }
                }]),
                t
            }();
            e.default = r
        }
        , function(t, e) {
            var n = Math.ceil
              , i = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                if (void 0 == t)
                    throw TypeError("Can't call method on  " + t);
                return t
            }
        }
        , function(t, e, n) {
            var i = n(10);
            t.exports = function(t, e) {
                if (!i(t))
                    return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
                    return r;
                if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t)))
                    return r;
                if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
                    return r;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        , function(t, e) {
            t.exports = {}
        }
        , function(t, e, n) {
            var i = n(19)
              , r = n(90)
              , o = n(42)
              , a = n(40)("IE_PROTO")
              , s = function() {}
              , u = function() {
                var t, e = n(57)("iframe"), i = o.length;
                for (e.style.display = "none",
                n(95).appendChild(e),
                e.src = "javascript:",
                (t = e.contentWindow.document).open(),
                t.write("<script>document.F=Object<\/script>"),
                t.close(),
                u = t.F; i--; )
                    delete u.prototype[o[i]];
                return u()
            };
            t.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (s.prototype = i(t),
                n = new s,
                s.prototype = null,
                n[a] = t) : n = u(),
                void 0 === e ? n : r(n, e)
            }
        }
        , function(t, e, n) {
            var i = n(59)
              , r = n(42);
            t.exports = Object.keys || function(t) {
                return i(t, r)
            }
        }
        , function(t, e, n) {
            var i = n(41)("keys")
              , r = n(27);
            t.exports = function(t) {
                return i[t] || (i[t] = r(t))
            }
        }
        , function(t, e, n) {
            var i = n(3)
              , r = n(0)
              , o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            (t.exports = function(t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {})
            }
            )("versions", []).push({
                version: i.version,
                mode: n(25) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        }
        , function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }
        , function(t, e, n) {
            var i = n(4).f
              , r = n(6)
              , o = n(11)("toStringTag");
            t.exports = function(t, e, n) {
                t && !r(t = n ? t : t.prototype, o) && i(t, o, {
                    configurable: !0,
                    value: e
                })
            }
        }
        , function(t, e, n) {
            e.f = n(11)
        }
        , function(t, e, n) {
            var i = n(0)
              , r = n(3)
              , o = n(25)
              , a = n(44)
              , s = n(4).f;
            t.exports = function(t) {
                var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: a.f(t)
                })
            }
        }
        , function(t, e) {
            e.f = {}.propertyIsEnumerable
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function r(t) {
                return !!t && "object" === (void 0 === t ? "undefined" : (0,
                a.default)(t)) && "[object Object]" === t.toString() && t.constructor === Object
            }
            function o() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift({}),
                t.push(u),
                s.default.apply(null, t),
                t[0]
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = i(n(17));
            e.default = o;
            var s = i(n(129))
              , u = function(t, e) {
                return r(e) ? r(t) ? void 0 : o(e) : e
            }
        }
        , function(t, e, n) {
            var i = n(7)
              , r = "[object String]"
              , o = Object.prototype.toString;
            t.exports = function(t) {
                return "string" == typeof t || i(t) && o.call(t) == r
            }
        }
        , function(t, e, n) {
            var i = n(66)
              , r = n(29)
              , o = n(31)
              , a = n(69)
              , s = n(50)
              , u = n(23)
              , c = n(14)
              , l = n(48)
              , d = n(30)
              , f = "[object Error]"
              , p = "[object Object]"
              , h = "[object String]"
              , v = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
              , g = Error.prototype
              , _ = Object.prototype
              , m = String.prototype
              , b = _.hasOwnProperty
              , y = _.toString
              , w = {};
            w["[object Array]"] = w["[object Date]"] = w["[object Number]"] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            },
            w["[object Boolean]"] = w[h] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            },
            w[f] = w["[object Function]"] = w["[object RegExp]"] = {
                constructor: !0,
                toString: !0
            },
            w[p] = {
                constructor: !0
            },
            i(v, function(t) {
                for (var e in w)
                    if (b.call(w, e)) {
                        var n = w[e];
                        n[t] = b.call(n, t)
                    }
            }),
            t.exports = function(t) {
                if (null == t)
                    return [];
                c(t) || (t = Object(t));
                var e = t.length;
                e = e && u(e) && (o(t) || r(t) || l(t)) && e || 0;
                for (var n = t.constructor, i = -1, x = a(n) && n.prototype || _, k = x === t, O = Array(e), E = e > 0, S = d.enumErrorProps && (t === g || t instanceof Error), C = d.enumPrototypes && a(t); ++i < e; )
                    O[i] = i + "";
                for (var T in t)
                    C && "prototype" == T || S && ("message" == T || "name" == T) || E && s(T, e) || "constructor" == T && (k || !b.call(t, T)) || O.push(T);
                if (d.nonEnumShadows && t !== _) {
                    var j = t === m ? h : t === g ? f : y.call(t)
                      , L = w[j] || w[p];
                    for (j == p && (x = _),
                    e = v.length; e--; ) {
                        var P = L[T = v[e]];
                        k && P || (P ? !b.call(t, T) : t[T] === x[T]) || O.push(T)
                    }
                }
                return O
            }
        }
        , function(t, e) {
            var n = /^\d+$/
              , i = 9007199254740991;
            t.exports = function(t, e) {
                return t = "number" == typeof t || n.test(t) ? +t : -1,
                e = null == e ? i : e,
                t > -1 && t % 1 == 0 && t < e
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }
            function r(t, e, n) {
                if (Array.isArray(e))
                    return u(r, t, e, n);
                var i = c.getElData(t);
                i.handlers || (i.handlers = {}),
                i.handlers[e] || (i.handlers[e] = []),
                n.guid || (n.guid = l.newGUID()),
                i.handlers[e].push(n),
                i.dispatcher || (i.disabled = !1,
                i.dispatcher = function(e, n) {
                    if (!i.disabled) {
                        e = a(e);
                        var r = i.handlers[e.type];
                        if (r)
                            for (var o = r.slice(0), s = 0, u = o.length; s < u && !e.isImmediatePropagationStopped(); s++)
                                o[s].call(t, e, n)
                    }
                }
                ),
                1 === i.handlers[e].length && (t.addEventListener ? t.addEventListener(e, i.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, i.dispatcher))
            }
            function o(t, e, n) {
                if (c.hasElData(t)) {
                    var i = c.getElData(t);
                    if (i.handlers) {
                        if (Array.isArray(e))
                            return u(o, t, e, n);
                        var r = function(e) {
                            i.handlers[e] = [],
                            s(t, e)
                        };
                        if (e) {
                            var a = i.handlers[e];
                            if (a) {
                                if (!n)
                                    return void r(e);
                                if (n.guid)
                                    for (var l = 0; l < a.length; l++)
                                        a[l].guid === n.guid && a.splice(l--, 1);
                                s(t, e)
                            }
                        } else
                            for (var d in i.handlers)
                                r(d)
                    }
                }
            }
            function a(t) {
                function e() {
                    return !0
                }
                function n() {
                    return !1
                }
                if (!t || !t.isPropagationStopped) {
                    var i = t || window.event;
                    for (var r in t = {},
                    i)
                        "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && i.preventDefault || (t[r] = i[r]));
                    if (t.target || (t.target = t.srcElement || document),
                    t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement),
                    t.preventDefault = function() {
                        i.preventDefault && i.preventDefault(),
                        t.returnValue = !1,
                        i.returnValue = !1,
                        t.defaultPrevented = !0
                    }
                    ,
                    t.defaultPrevented = !1,
                    t.stopPropagation = function() {
                        i.stopPropagation && i.stopPropagation(),
                        t.cancelBubble = !0,
                        i.cancelBubble = !0,
                        t.isPropagationStopped = e
                    }
                    ,
                    t.isPropagationStopped = n,
                    t.stopImmediatePropagation = function() {
                        i.stopImmediatePropagation && i.stopImmediatePropagation(),
                        t.isImmediatePropagationStopped = e,
                        t.stopPropagation()
                    }
                    ,
                    t.isImmediatePropagationStopped = n,
                    null != t.clientX) {
                        var o = document.documentElement
                          , a = document.body;
                        t.pageX = t.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0),
                        t.pageY = t.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode,
                    null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }
                return t
            }
            function s(t, e) {
                var n = c.getElData(t);
                0 === n.handlers[e].length && (delete n.handlers[e],
                t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)),
                Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers,
                delete n.dispatcher,
                delete n.disabled),
                0 === Object.getOwnPropertyNames(n).length && c.removeElData(t)
            }
            function u(t, e, n, i) {
                n.forEach(function(n) {
                    t(e, n, i)
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.on = r,
            e.off = o,
            e.trigger = function t(e, n, i) {
                var r = c.hasElData(e) ? c.getElData(e) : {}
                  , o = e.parentNode || e.ownerDocument;
                if ("string" == typeof n && (n = {
                    type: n,
                    target: e
                }),
                n = a(n),
                r.dispatcher && r.dispatcher.call(e, n, i),
                o && !n.isPropagationStopped() && !0 === n.bubbles)
                    t.call(null, o, n, i);
                else if (!o && !n.defaultPrevented) {
                    var s = c.getElData(n.target);
                    n.target[n.type] && (s.disabled = !0,
                    "function" == typeof n.target[n.type] && n.target[n.type](),
                    s.disabled = !1)
                }
                return !n.defaultPrevented
            }
            ,
            e.one = function t(e, n, i) {
                if (Array.isArray(n))
                    return u(t, e, n, i);
                var a = function t() {
                    o(e, n, t),
                    i.apply(this, arguments)
                };
                a.guid = i.guid = i.guid || l.newGUID(),
                r(e, n, a)
            }
            ,
            e.fixEvent = a;
            var c = i(n(13))
              , l = i(n(64))
        }
        , function(t, e, n) {
            var i = n(35);
            t.exports = function(t) {
                return Object(i(t))
            }
        }
        , function(t, e, n) {
            var i = n(46)
              , r = n(26)
              , o = n(8)
              , a = n(36)
              , s = n(6)
              , u = n(56)
              , c = Object.getOwnPropertyDescriptor;
            e.f = n(5) ? c : function(t, e) {
                if (t = o(t),
                e = a(e, !0),
                u)
                    try {
                        return c(t, e)
                    } catch (t) {}
                if (s(t, e))
                    return r(!i.f.call(t, e), t[e])
            }
        }
        , function(t, e, n) {
            "use strict";
            var i = n(25)
              , r = n(18)
              , o = n(58)
              , a = n(9)
              , s = n(37)
              , u = n(89)
              , c = n(43)
              , l = n(76)
              , d = n(11)("iterator")
              , f = !([].keys && "next"in [].keys())
              , p = function() {
                return this
            };
            t.exports = function(t, e, n, h, v, g, _) {
                u(n, e, h);
                var m, b, y, w = function(t) {
                    if (!f && t in E)
                        return E[t];
                    switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this,t)
                        }
                    }
                    return function() {
                        return new n(this,t)
                    }
                }, x = e + " Iterator", k = "values" == v, O = !1, E = t.prototype, S = E[d] || E["@@iterator"] || v && E[v], C = S || w(v), T = v ? k ? w("entries") : C : void 0, j = "Array" == e && E.entries || S;
                if (j && (y = l(j.call(new t))) !== Object.prototype && y.next && (c(y, x, !0),
                i || "function" == typeof y[d] || a(y, d, p)),
                k && S && "values" !== S.name && (O = !0,
                C = function() {
                    return S.call(this)
                }
                ),
                i && !_ || !f && !O && E[d] || a(E, d, C),
                s[e] = C,
                s[x] = p,
                v)
                    if (m = {
                        values: k ? C : w("values"),
                        keys: g ? C : w("keys"),
                        entries: T
                    },
                    _)
                        for (b in m)
                            b in E || o(E, b, m[b]);
                    else
                        r(r.P + r.F * (f || O), e, m);
                return m
            }
        }
        , function(t, e, n) {
            var i = n(88);
            t.exports = function(t, e, n) {
                if (i(t),
                void 0 === e)
                    return t;
                switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    }
                    ;
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    }
                    ;
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        , function(t, e, n) {
            t.exports = !n(5) && !n(24)(function() {
                return 7 != Object.defineProperty(n(57)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(t, e, n) {
            var i = n(10)
              , r = n(0).document
              , o = i(r) && i(r.createElement);
            t.exports = function(t) {
                return o ? r.createElement(t) : {}
            }
        }
        , function(t, e, n) {
            t.exports = n(9)
        }
        , function(t, e, n) {
            var i = n(6)
              , r = n(8)
              , o = n(92)(!1)
              , a = n(40)("IE_PROTO");
            t.exports = function(t, e) {
                var n, s = r(t), u = 0, c = [];
                for (n in s)
                    n != a && i(s, n) && c.push(n);
                for (; e.length > u; )
                    i(s, n = e[u++]) && (~o(c, n) || c.push(n));
                return c
            }
        }
        , function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        }
        , function(t, e) {
            e.f = Object.getOwnPropertySymbols
        }
        , function(t, e, n) {
            var i = n(59)
              , r = n(42).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return i(t, r)
            }
        }
        , function(t, e, n) {
            "use strict";
            function i() {
                this.protocol = null,
                this.slashes = null,
                this.auth = null,
                this.host = null,
                this.port = null,
                this.hostname = null,
                this.hash = null,
                this.search = null,
                this.query = null,
                this.pathname = null,
                this.path = null,
                this.href = null
            }
            function r(t, e, n) {
                if (t && a.isObject(t) && t instanceof i)
                    return t;
                var r = new i;
                return r.parse(t, e, n),
                r
            }
            var o = n(123)
              , a = n(125);
            e.parse = r,
            e.resolve = function(t, e) {
                return r(t, !1, !0).resolve(e)
            }
            ,
            e.resolveObject = function(t, e) {
                return t ? r(t, !1, !0).resolveObject(e) : e
            }
            ,
            e.format = function(t) {
                return a.isString(t) && (t = r(t)),
                t instanceof i ? t.format() : i.prototype.format.call(t)
            }
            ,
            e.Url = i;
            var s = /^([a-z0-9.+-]+:)/i
              , u = /:[0-9]*$/
              , c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
              , l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"])
              , d = ["'"].concat(l)
              , f = ["%", "/", "?", ";", "#"].concat(d)
              , p = ["/", "?", "#"]
              , h = /^[+a-z0-9A-Z_-]{0,63}$/
              , v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
              , g = {
                javascript: !0,
                "javascript:": !0
            }
              , _ = {
                javascript: !0,
                "javascript:": !0
            }
              , m = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }
              , b = n(126);
            i.prototype.parse = function(t, e, n) {
                if (!a.isString(t))
                    throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var i = t.indexOf("?")
                  , r = -1 !== i && i < t.indexOf("#") ? "?" : "#"
                  , u = t.split(r);
                u[0] = u[0].replace(/\\/g, "/");
                var l = t = u.join(r);
                if (l = l.trim(),
                !n && 1 === t.split("#").length) {
                    var y = c.exec(l);
                    if (y)
                        return this.path = l,
                        this.href = l,
                        this.pathname = y[1],
                        y[2] ? (this.search = y[2],
                        this.query = e ? b.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "",
                        this.query = {}),
                        this
                }
                var w = s.exec(l);
                if (w) {
                    var x = (w = w[0]).toLowerCase();
                    this.protocol = x,
                    l = l.substr(w.length)
                }
                if (n || w || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var k = "//" === l.substr(0, 2);
                    !k || w && _[w] || (l = l.substr(2),
                    this.slashes = !0)
                }
                if (!_[w] && (k || w && !m[w])) {
                    for (var O = -1, E = 0; E < p.length; E++) {
                        -1 !== (T = l.indexOf(p[E])) && (-1 === O || T < O) && (O = T)
                    }
                    var S, C;
                    -1 !== (C = -1 === O ? l.lastIndexOf("@") : l.lastIndexOf("@", O)) && (S = l.slice(0, C),
                    l = l.slice(C + 1),
                    this.auth = decodeURIComponent(S)),
                    O = -1;
                    for (E = 0; E < f.length; E++) {
                        var T;
                        -1 !== (T = l.indexOf(f[E])) && (-1 === O || T < O) && (O = T)
                    }
                    -1 === O && (O = l.length),
                    this.host = l.slice(0, O),
                    l = l.slice(O),
                    this.parseHost(),
                    this.hostname = this.hostname || "";
                    var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!j)
                        for (var L = this.hostname.split(/\./), P = (E = 0,
                        L.length); E < P; E++) {
                            var A = L[E];
                            if (A && !A.match(h)) {
                                for (var I = "", N = 0, R = A.length; N < R; N++)
                                    A.charCodeAt(N) > 127 ? I += "x" : I += A[N];
                                if (!I.match(h)) {
                                    var M = L.slice(0, E)
                                      , V = L.slice(E + 1)
                                      , D = A.match(v);
                                    D && (M.push(D[1]),
                                    V.unshift(D[2])),
                                    V.length && (l = "/" + V.join(".") + l),
                                    this.hostname = M.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
                    j || (this.hostname = o.toASCII(this.hostname));
                    var X = this.port ? ":" + this.port : ""
                      , U = this.hostname || "";
                    this.host = U + X,
                    this.href += this.host,
                    j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
                    "/" !== l[0] && (l = "/" + l))
                }
                if (!g[x])
                    for (E = 0,
                    P = d.length; E < P; E++) {
                        var B = d[E];
                        if (-1 !== l.indexOf(B)) {
                            var F = encodeURIComponent(B);
                            F === B && (F = escape(B)),
                            l = l.split(B).join(F)
                        }
                    }
                var W = l.indexOf("#");
                -1 !== W && (this.hash = l.substr(W),
                l = l.slice(0, W));
                var H = l.indexOf("?");
                if (-1 !== H ? (this.search = l.substr(H),
                this.query = l.substr(H + 1),
                e && (this.query = b.parse(this.query)),
                l = l.slice(0, H)) : e && (this.search = "",
                this.query = {}),
                l && (this.pathname = l),
                m[x] && this.hostname && !this.pathname && (this.pathname = "/"),
                this.pathname || this.search) {
                    X = this.pathname || "";
                    var $ = this.search || "";
                    this.path = X + $
                }
                return this.href = this.format(),
                this
            }
            ,
            i.prototype.format = function() {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"),
                t += "@");
                var e = this.protocol || ""
                  , n = this.pathname || ""
                  , i = this.hash || ""
                  , r = !1
                  , o = "";
                this.host ? r = t + this.host : this.hostname && (r = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
                this.port && (r += ":" + this.port)),
                this.query && a.isObject(this.query) && Object.keys(this.query).length && (o = b.stringify(this.query));
                var s = this.search || o && "?" + o || "";
                return e && ":" !== e.substr(-1) && (e += ":"),
                this.slashes || (!e || m[e]) && !1 !== r ? (r = "//" + (r || ""),
                n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""),
                i && "#" !== i.charAt(0) && (i = "#" + i),
                s && "?" !== s.charAt(0) && (s = "?" + s),
                e + r + (n = n.replace(/[?#]/g, function(t) {
                    return encodeURIComponent(t)
                })) + (s = s.replace("#", "%23")) + i
            }
            ,
            i.prototype.resolve = function(t) {
                return this.resolveObject(r(t, !1, !0)).format()
            }
            ,
            i.prototype.resolveObject = function(t) {
                if (a.isString(t)) {
                    var e = new i;
                    e.parse(t, !1, !0),
                    t = e
                }
                for (var n = new i, r = Object.keys(this), o = 0; o < r.length; o++) {
                    var s = r[o];
                    n[s] = this[s]
                }
                if (n.hash = t.hash,
                "" === t.href)
                    return n.href = n.format(),
                    n;
                if (t.slashes && !t.protocol) {
                    for (var u = Object.keys(t), c = 0; c < u.length; c++) {
                        var l = u[c];
                        "protocol" !== l && (n[l] = t[l])
                    }
                    return m[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
                    n.href = n.format(),
                    n
                }
                if (t.protocol && t.protocol !== n.protocol) {
                    if (!m[t.protocol]) {
                        for (var d = Object.keys(t), f = 0; f < d.length; f++) {
                            var p = d[f];
                            n[p] = t[p]
                        }
                        return n.href = n.format(),
                        n
                    }
                    if (n.protocol = t.protocol,
                    t.host || _[t.protocol])
                        n.pathname = t.pathname;
                    else {
                        for (var h = (t.pathname || "").split("/"); h.length && !(t.host = h.shift()); )
                            ;
                        t.host || (t.host = ""),
                        t.hostname || (t.hostname = ""),
                        "" !== h[0] && h.unshift(""),
                        h.length < 2 && h.unshift(""),
                        n.pathname = h.join("/")
                    }
                    if (n.search = t.search,
                    n.query = t.query,
                    n.host = t.host || "",
                    n.auth = t.auth,
                    n.hostname = t.hostname || t.host,
                    n.port = t.port,
                    n.pathname || n.search) {
                        var v = n.pathname || ""
                          , g = n.search || "";
                        n.path = v + g
                    }
                    return n.slashes = n.slashes || t.slashes,
                    n.href = n.format(),
                    n
                }
                var b = n.pathname && "/" === n.pathname.charAt(0)
                  , y = t.host || t.pathname && "/" === t.pathname.charAt(0)
                  , w = y || b || n.host && t.pathname
                  , x = w
                  , k = n.pathname && n.pathname.split("/") || []
                  , O = (h = t.pathname && t.pathname.split("/") || [],
                n.protocol && !m[n.protocol]);
                if (O && (n.hostname = "",
                n.port = null,
                n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)),
                n.host = "",
                t.protocol && (t.hostname = null,
                t.port = null,
                t.host && ("" === h[0] ? h[0] = t.host : h.unshift(t.host)),
                t.host = null),
                w = w && ("" === h[0] || "" === k[0])),
                y)
                    n.host = t.host || "" === t.host ? t.host : n.host,
                    n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname,
                    n.search = t.search,
                    n.query = t.query,
                    k = h;
                else if (h.length)
                    k || (k = []),
                    k.pop(),
                    k = k.concat(h),
                    n.search = t.search,
                    n.query = t.query;
                else if (!a.isNullOrUndefined(t.search)) {
                    if (O)
                        n.hostname = n.host = k.shift(),
                        (j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = j.shift(),
                        n.host = n.hostname = j.shift());
                    return n.search = t.search,
                    n.query = t.query,
                    a.isNull(n.pathname) && a.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                    n.href = n.format(),
                    n
                }
                if (!k.length)
                    return n.pathname = null,
                    n.search ? n.path = "/" + n.search : n.path = null,
                    n.href = n.format(),
                    n;
                for (var E = k.slice(-1)[0], S = (n.host || t.host || k.length > 1) && ("." === E || ".." === E) || "" === E, C = 0, T = k.length; T >= 0; T--)
                    "." === (E = k[T]) ? k.splice(T, 1) : ".." === E ? (k.splice(T, 1),
                    C++) : C && (k.splice(T, 1),
                    C--);
                if (!w && !x)
                    for (; C--; C)
                        k.unshift("..");
                !w || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""),
                S && "/" !== k.join("/").substr(-1) && k.push("");
                var j, L = "" === k[0] || k[0] && "/" === k[0].charAt(0);
                O && (n.hostname = n.host = L ? "" : k.length ? k.shift() : "",
                (j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = j.shift(),
                n.host = n.hostname = j.shift()));
                return (w = w || n.host && k.length) && !L && k.unshift(""),
                k.length ? n.pathname = k.join("/") : (n.pathname = null,
                n.path = null),
                a.isNull(n.pathname) && a.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                n.auth = t.auth || n.auth,
                n.slashes = n.slashes || t.slashes,
                n.href = n.format(),
                n
            }
            ,
            i.prototype.parseHost = function() {
                var t = this.host
                  , e = u.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)),
                t = t.substr(0, t.length - e.length)),
                t && (this.hostname = t)
            }
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.newGUID = function() {
                return i++
            }
            ;
            var i = 1
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(n(1))
              , a = r(n(2))
              , s = r(n(15))
              , u = r(n(16))
              , c = i(n(13))
              , l = r(n(47))
              , d = r(n(21))
              , f = r(n(149))
              , p = r(n(154))
              , h = i(n(51))
              , v = i(n(32))
              , g = i(n(155))
              , _ = r(n(28))
              , m = r(n(20))
              , b = r(n(12))
              , y = function(t) {
                return t.preventDefault && t.preventDefault(),
                t.returnValue = !1,
                t.stopPropagation && t.stopPropagation(),
                !1
            };
            JSON.stringify(window.navigator.userAgent).indexOf("DingTalk");
            var w = function(t) {
                function e(t) {
                    (0,
                    o.default)(this, e);
                    var n = (0,
                    s.default)(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
                      , i = n.player = n.videox = t
                      , r = n.opts = t.config;
                    return n.options = {
                        playButtonClassName: "vjs-play-control",
                        playStatusButtonClassName: "vjs-playing",
                        playFullscreenClassName: "vjs-fullscreen-control",
                        showHiddenFullscreenClassName: "vjs-fullscreen",
                        itemClassName: "J_Interact_Item"
                    },
                    n.options = (0,
                    l.default)(n.options, r),
                    n.rootElement = i.rootElement,
                    n.screen = "Vertical",
                    n.rootElement = t.rootElement,
                    n.player = i,
                    n._addEventListener(),
                    n
                }
                return (0,
                u.default)(e, t),
                (0,
                a.default)(e, [{
                    key: "_addEventListener",
                    value: function() {
                        this.videox.on(m.default.INIT, this.onInit.bind(this)),
                        this.videox.on(m.default.VIDEO_CLICK, this.onVideoClick.bind(this)),
                        this.videox.on(b.default.VIDEO_PLAY, this.onVideoPlay.bind(this)),
                        this.videox.on(b.default.VIDEO_ENDED, this.onVideoEnded.bind(this)),
                        this.videox.on(b.default.VIDEO_PAUSE, this.onVideoPause.bind(this))
                    }
                }, {
                    key: "onInit",
                    value: function() {
                        this.el = this.createEl(),
                        this.playBtnEl = c.$(".vjs-play-control", this.el),
                        this.fullScreenBtnEl = c.$(".vjs-fullscreen-control", this.el),
                        !0 !== this.options.live && (this.controlProgress = new f.default(this.videox)),
                        this.options.volumeControls && !1 !== this.options.controls && (this.volumeProgress = new p.default(this.videox)),
                        this.bindEvent()
                    }
                }, {
                    key: "onVideoPlay",
                    value: function(t) {
                        c.addElClass(this.playBtnEl, this.options.playStatusButtonClassName)
                    }
                }, {
                    key: "onVideoPause",
                    value: function(t) {
                        this.exePause(this.playBtnEl, !0)
                    }
                }, {
                    key: "onVideoEnded",
                    value: function(t) {
                        this.exePause(this.playBtnEl, !0)
                    }
                }, {
                    key: "onVideoClick",
                    value: function(t) {
                        this.triggerShowHideBar()
                    }
                }, {
                    key: "createEl",
                    value: function() {
                        var t = ""
                          , e = ""
                          , n = "vjs-hidden"
                          , i = navigator.userAgent.match(/UCBrowser/);
                        (v.aliapp && "TB" == v.aliapp.appname && !i && v.os.isAndroid || this.options.noFullscreen || !1 === this.options.controls) && (t = "vjs-hidden"),
                        !1 !== this.options.controls && !0 !== this.options.live || (e = "vjs-hidden"),
                        this.options.interact && (n = "");
                        var r = c.createEl("div", {
                            className: "vjs-control-bar",
                            innerHTML: '\n        <button class="' + e + ' vjs-play-control vjs-control vjs-button" tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Play</span>\n        </button>\n        <div class="progress-wrap"></div>\n        <div class="volume-wrap"></div>\n        <button class="interact-item J_Interact_Item ' + n + '"></button>\n        <button class="' + t + ' vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Fullscreen</span>\n        </button>\n      '
                        });
                        return c.appendContent(this.rootElement, r),
                        r
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        h.on(this.el, "click", function(e) {
                            return t._triggerControllBarClick(e)
                        }),
                        this.options.disableAutoHideControlbar && (h.on(this.el, "mouseover", function(e) {
                            return t.showControlBar()
                        }),
                        h.on(this.el, "mouseleave", function(e) {
                            return t.hiddenControlBar_()
                        }))
                    }
                }, {
                    key: "volumeupdate",
                    value: function(t) {
                        this.volumeProgress && this.volumeProgress.volumeupdate(t)
                    }
                }, {
                    key: "triggerShowHideBar",
                    value: function() {
                        c.hasElClass(this.el, "vjs-opacity-hidden") ? this.showControlBar() : this.hiddenControlBar_()
                    }
                }, {
                    key: "showControlBar",
                    value: function() {
                        var t = this
                          , e = this.options.disableAutoHideControlbar || !1;
                        this.timer_ && clearTimeout(this.timer_),
                        c.removeElClass(this.el, "vjs-hidden"),
                        setTimeout(function() {
                            c.removeElClass(t.el, "vjs-opacity-hidden")
                        }, 0),
                        e || this.autoHiddenControlBar()
                    }
                }, {
                    key: "hiddenControlBar_",
                    value: function() {
                        var t = this;
                        c.addElClass(this.el, "vjs-opacity-hidden"),
                        setTimeout(function() {
                            c.addElClass(t.el, "vjs-hidden")
                        }, 300)
                    }
                }, {
                    key: "autoHiddenControlBar",
                    value: function() {
                        var t = this;
                        this.timer_ = setTimeout(function() {
                            var e = t.controlProgress && t.controlProgress.progressing
                              , n = t.volumeProgress && t.volumeProgress.progressing;
                            e || n ? t.showControlBar() : t.hiddenControlBar_()
                        }, 4e3)
                    }
                }, {
                    key: "_triggerControllBarClick",
                    value: function(t) {
                        (0,
                        d.default)("ControlBar::triggerControllBarClick_()");
                        var e = t.target;
                        t.preventDefault(),
                        c.hasElClass(e, this.options.playButtonClassName) ? this.playButton(e) : c.hasElClass(e, this.options.playFullscreenClassName) ? this.fullscreenButton(e) : c.hasElClass(e, this.options.itemClassName) && this.player.emit("video:item:click")
                    }
                }, {
                    key: "fullscreenButton",
                    value: function(t) {
                        "default" != this.options.fullscreen && v.os.isIPhone && g.isAvailable ? this.mockFullScreen_(t || this.fullScreenBtnEl) : "default" != this.options.fullscreen && v.os.isAndroid && g.isAvailable ? this.mockFullScreenRotateY_(t || this.fullScreenBtnEl) : "default" == this.options.fullscreen ? this.mockFullScreenVertical_(t || this.fullScreenBtnEl) : this.enterFullScreen()
                    }
                }, {
                    key: "enterFullScreen",
                    value: function() {
                        var t = this.videox.videoDom;
                        "webkitDisplayingFullscreen"in t && h.one(t, "webkitbeginfullscreen", function() {
                            h.one(t, "webkitendfullscreen", function() {
                                h.trigger(t, "fullscreenchange", {
                                    isFullscreen: !1
                                })
                            }),
                            h.trigger(t, "fullscreenchange", {
                                isFullscreen: !0
                            })
                        }),
                        t.paused && t.networkState <= t.HAVE_METADATA ? (t.play(),
                        setTimeout(function() {
                            t.pause(),
                            t.webkitEnterFullScreen()
                        }, 0)) : this.canFullScreen_() || v.os.isIPhone ? t.webkitEnterFullScreen() : this.rotatePage_(),
                        this.videox.emit(b.default.VIDEO_ENTERFULLSCREEN)
                    }
                }, {
                    key: "mockFullScreen_",
                    value: function(t) {
                        var e = this
                          , n = "Vertical" === this.screen;
                        this.transverseFullScreen_(n, function(t) {
                            !t && n ? (c.addElClass(document.body, "vjs-body-fullscreen"),
                            c.addElClass(e.rootElement, "vjs-player-fullscreen"),
                            window.scrollTo(0, 0),
                            e.screen = "landscape",
                            e.player.emit("video:enterFullscreen")) : t || n ? (e.videoPlayer.enterFullScreen(),
                            e.player.emit("video:enterFullscreen")) : (c.removeElClass(document.body, "vjs-body-fullscreen"),
                            c.removeElClass(e.rootElement, "vjs-player-fullscreen"),
                            e.screen = "Vertical",
                            window.scrollTo(0, e.rootElement.offsetTop - window.scrollY),
                            e.player.emit("video:exitFullscreen"))
                        })
                    }
                }, {
                    key: "mockFullScreenRotateY_",
                    value: function(t) {
                        var e = this
                          , n = "Vertical" === this.screen
                          , i = document.documentElement.getBoundingClientRect();
                        i.width,
                        i.height,
                        document.querySelector('meta[name="viewport"]'),
                        this.options["initial-scale"],
                        this.androidBgMaskEl = c.$(".vjs-android-bg-mask"),
                        this.androidBgMaskEl || (this.androidBgMaskEl = c.createEl("div", {
                            className: "vjs-android-bg-mask"
                        })),
                        this.oldWidth || (this.oldWidth = this.rootElement.offsetWidth,
                        this.oldHeight = this.rootElement.offsetHeight),
                        n ? window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                            hidden: "1",
                            animated: "1"
                        }, function() {
                            e._canSetNav = !0,
                            e.rotatePage_(),
                            e.player.emit("video:enterFullscreen")
                        }, function() {
                            e._canSetNav = !1,
                            e.videoPlayer.enterFullScreen(),
                            e.player.emit("video:enterFullscreen")
                        }) : (window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                            hidden: "0",
                            animated: "0"
                        }, function() {}, function() {}),
                        this.rotateBackPage_(),
                        this.player.emit("video:exitFullscreen"))
                    }
                }, {
                    key: "mockFullScreenVertical_",
                    value: function(t) {
                        "Vertical" === this.screen ? (c.addElClass(document.body, "vjs-body-fullscreen"),
                        c.addElClass(this.rootElement, "vjs-player-fullscreen"),
                        window.scrollTo(0, 0),
                        this.screen = "landscape",
                        this.player.emit("video:enterFullscreen")) : (c.removeElClass(document.body, "vjs-body-fullscreen"),
                        c.removeElClass(this.rootElement, "vjs-player-fullscreen"),
                        this.screen = "Vertical",
                        window.scrollTo(0, this.rootElement.offsetTop - window.scrollY),
                        this.player.emit("video:exitFullscreen"))
                    }
                }, {
                    key: "transverseFullScreen_",
                    value: function(t, e) {
                        window.WindVane.call("WebAppInterface", "transverseFullScreen", {
                            open: t.toString()
                        }, function(t) {
                            e(null, !0)
                        }, function(t) {
                            e(!0, t)
                        })
                    }
                }, {
                    key: "playButton",
                    value: function(t, e) {
                        this.showControlBar(),
                        c.hasElClass(t, this.options.playStatusButtonClassName) ? this.exePause(t, e) : this.exePlay(t, e)
                    }
                }, {
                    key: "playEnded",
                    value: function() {
                        this.exePause(this.playBtnEl, !0)
                    }
                }, {
                    key: "playPause",
                    value: function() {
                        this.exePause(this.playBtnEl, !0)
                    }
                }, {
                    key: "realPlay",
                    value: function() {
                        this.showControlBar(),
                        this.exePlay(this.playBtnEl, !0)
                    }
                }, {
                    key: "exePlay",
                    value: function(t, e) {
                        c.addElClass(this.playBtnEl, this.options.playStatusButtonClassName),
                        !e && this.videox.emit(m.default.TRIGGER_PLAY, {})
                    }
                }, {
                    key: "exePause",
                    value: function(t, e) {
                        c.removeElClass(this.playBtnEl, this.options.playStatusButtonClassName),
                        e || this.videox.emit(m.default.TRIGGER_PAUSE, {})
                    }
                }, {
                    key: "canFullScreen_",
                    value: function() {
                        return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                    }
                }, {
                    key: "requestFullScreen_",
                    value: function() {
                        var t = this.videoPlayer.video;
                        t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                    }
                }, {
                    key: "rotatePage_",
                    value: function() {
                        var t = this._canSetNav ? 0 : 70
                          , e = document.documentElement.getBoundingClientRect()
                          , n = e.width + "px"
                          , i = e.height + 50 / (this.options["initial-scale"] || 1) - t + "px";
                        c.addElClass(document.body, "vjs-body-fullscreen"),
                        c.addElClass(this.rootElement, "vjs-player-fullscreen-rotate"),
                        c.appendContent(this.rootElement.parentNode.parentNode, this.androidBgMaskEl),
                        this.rootElement.style.height = n,
                        this.rootElement.style.width = i,
                        document.body.style.height = n,
                        this.screen = "landscape",
                        window.scrollTo(0, 0),
                        h.on(this.rootElement, "touchmove", y),
                        this.player.emit("video:enterFullscreen")
                    }
                }, {
                    key: "rotateBackPage_",
                    value: function() {
                        var t = this;
                        c.removeElClass(document.body, "vjs-body-fullscreen"),
                        c.removeElClass(this.rootElement, "vjs-player-fullscreen-rotate"),
                        this.androidBgMaskEl && this.rootElement.parentNode.parentNode.removeChild(this.androidBgMaskEl),
                        this.rootElement.style.height = this.oldHeight + "px",
                        this.rootElement.style.width = this.oldWidth + "px",
                        document.body.style.height = "100%",
                        this.screen = "Vertical",
                        h.off(this.rootElement, "touchmove", y),
                        setTimeout(function() {
                            window.scrollTo(0, t.rootElement.offsetTop - window.scrollY)
                        }, 500)
                    }
                }]),
                e
            }(_.default);
            e.default = w
        }
        , function(t, e) {
            t.exports = function(t, e) {
                for (var n = -1, i = t.length; ++n < i && !1 !== e(t[n], n, t); )
                    ;
                return t
            }
        }
        , function(t, e, n) {
            var i = n(14)
              , r = n(48)
              , o = n(30);
            t.exports = function(t) {
                if (o.unindexedChars && r(t)) {
                    for (var e = -1, n = t.length, a = Object(t); ++e < n; )
                        a[e] = t.charAt(e);
                    return a
                }
                return i(t) ? t : Object(t)
            }
        }
        , function(t, e, n) {
            var i = n(135);
            t.exports = function(t, e) {
                var n = null == t ? void 0 : t[e];
                return i(n) ? n : void 0
            }
        }
        , function(t, e, n) {
            var i = n(14)
              , r = "[object Function]"
              , o = Object.prototype.toString;
            t.exports = function(t) {
                return i(t) && o.call(t) == r
            }
        }
        , function(t, e) {
            var n = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (t) {
                    return function() {
                        return !1
                    }
                }
                return function(t) {
                    return "function" != typeof t.toString && "string" == typeof (t + "")
                }
            }();
            t.exports = n
        }
        , function(t, e, n) {
            var i = n(23)
              , r = n(7)
              , o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
            o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            var a = Object.prototype.toString;
            t.exports = function(t) {
                return r(t) && i(t.length) && !!o[a.call(t)]
            }
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, r, o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(33)), a = window.navigator.userAgent;
            if (r = a.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/))
                i = {
                    name: "Windows Phone",
                    isWindowsPhone: !0,
                    version: new o.default(r[1])
                };
            else if (a.match(/Safari/) && (r = a.match(/Android[\s\/]([\d\.]+)/)))
                i = {
                    version: new o.default(r[1])
                },
                a.match(/Mobile\s+Safari/) ? (i.name = "Android",
                i.isAndroid = !0) : (i.name = "AndroidPad",
                i.isAndroidPad = !0);
            else if (r = a.match(/(iPhone|iPad|iPod)/)) {
                var s = r[1];
                (r = a.match(/OS ([\d_\.]+) like Mac OS X/)) && (i = {
                    name: s,
                    isIPhone: "iPhone" === s || "iPod" === s,
                    isIPad: "iPad" === s,
                    isIOS: !0,
                    version: new o.default(r[1].split("_").join("."))
                })
            }
            i || (i = {
                name: "unknown",
                version: new o.default("0.0.0")
            }),
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(63);
            e.default = function(t) {
                try {
                    var e = (0,
                    i.parse)(t);
                    return "rtmp:" === e.protocol ? "rtmp" : e.pathname.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                } catch (t) {
                    return ""
                }
            }
        }
        , function(t, e, n) {
            "use strict";
            var i = function() {
                return function(t, e) {
                    if (Array.isArray(t))
                        return t;
                    if (Symbol.iterator in Object(t))
                        return function(t, e) {
                            var n = []
                              , i = !0
                              , r = !1
                              , o = void 0;
                            try {
                                for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
                                !e || n.length !== e); i = !0)
                                    ;
                            } catch (t) {
                                r = !0,
                                o = t
                            } finally {
                                try {
                                    !i && s.return && s.return()
                                } finally {
                                    if (r)
                                        throw o
                                }
                            }
                            return n
                        }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
              , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }
              , o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n),
                    i && t(e, i),
                    e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")
              , s = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, t),
                    this._params = {},
                    this._hash = "",
                    e && this.assign(e.toString())
                }
                return o(t, [{
                    key: "assign",
                    value: function(t) {
                        var e = (t = t || "").match(a);
                        if (!e)
                            throw new Error("Parse Error");
                        this.protocol = e[1] || ("object" === ("undefined" == typeof location ? "undefined" : r(location)) ? location.protocol : ""),
                        this.username = e[2] || "",
                        this.password = e[3] || "",
                        this.hostname = e[4],
                        this.port = e[5] || "",
                        this.pathname = e[6] || "/",
                        this.search = e[7] || "",
                        this.hash = e[8] || "",
                        this.origin = this.protocol + "//" + this.host
                    }
                }, {
                    key: "toString",
                    value: function() {
                        var t = this.protocol + "//";
                        return this.username && (t += this.username,
                        this.password && (t += ":" + this.password),
                        t += "@"),
                        t += this.hostname,
                        this.port && "80" !== this.port && (t += ":" + this.port),
                        this.pathname && (t += this.pathname),
                        this.search && (t += this.search),
                        this.hash && (t += this.hash),
                        t
                    }
                }, {
                    key: "params",
                    get: function() {
                        return this._params
                    },
                    set: function(t) {
                        if (t && "object" === (void 0 === t ? "undefined" : r(t)) && !(t instanceof Date) && !(t instanceof RegExp) && !(t instanceof Array) && !(t instanceof String) && !(t instanceof Number) && !(t instanceof Boolean)) {
                            for (var e in this._params)
                                delete this._params[e];
                            for (var e in t)
                                this._params[e] = t[e]
                        }
                    }
                }, {
                    key: "search",
                    get: function() {
                        var t = [];
                        for (var e in this._params)
                            if (void 0 !== this._params[e])
                                if ("" !== this._params[e])
                                    try {
                                        t.push(encodeURIComponent(e) + "=" + encodeURIComponent(this._params[e]))
                                    } catch (n) {
                                        t.push(e + "=" + this._params[e])
                                    }
                                else
                                    try {
                                        t.push(encodeURIComponent(e))
                                    } catch (n) {
                                        t.push(e)
                                    }
                        return t.length ? "?" + t.join("&") : ""
                    },
                    set: function(t) {
                        if ("string" == typeof t || t instanceof String) {
                            0 === (t = t.toString()).indexOf("?") && (t = t.substr(1));
                            var e = t.split("&");
                            for (var n in this._params)
                                delete this._params[n];
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r].split("=")
                                  , a = i(o, 2)
                                  , s = a[0]
                                  , u = a[1];
                                if (void 0 !== u && (u = u.toString()),
                                s)
                                    try {
                                        this._params[decodeURIComponent(s)] = decodeURIComponent(u)
                                    } catch (t) {
                                        this._params[s] = u
                                    }
                            }
                        }
                    }
                }, {
                    key: "hash",
                    get: function() {
                        return this._hash
                    },
                    set: function(t) {
                        ("string" == typeof t || t instanceof String) && ((t = t.toString()) && t.indexOf("#") < 0 && (t = "#" + t),
                        this._hash = t || "")
                    }
                }, {
                    key: "host",
                    get: function() {
                        return this.hostname + (this.port ? ":" + this.port : "")
                    },
                    set: function(t) {
                        if ("string" == typeof t || t instanceof String) {
                            var e = (t = t.toString()).match(/([^:/?#]+)(?:[:]([0-9]+))?/);
                            e && (this.hostname = e[1],
                            this.port = e[2] || "")
                        }
                    }
                }]),
                t
            }();
            e.default = s
        }
        , function(t, e, n) {
            "use strict";
            function i() {
                i.init.call(this)
            }
            function r(t) {
                return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
            }
            function o(t, e, n, i) {
                var o, a, s;
                if ("function" != typeof n)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
                if (void 0 === (a = t._events) ? (a = t._events = Object.create(null),
                t._eventsCount = 0) : (void 0 !== a.newListener && (t.emit("newListener", e, n.listener ? n.listener : n),
                a = t._events),
                s = a[e]),
                void 0 === s)
                    s = a[e] = n,
                    ++t._eventsCount;
                else if ("function" == typeof s ? s = a[e] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n),
                (o = r(t)) > 0 && s.length > o && !s.warned) {
                    s.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning",
                    u.emitter = t,
                    u.type = e,
                    u.count = s.length,
                    function(t) {
                        console && console.warn && console.warn(t)
                    }(u)
                }
                return t
            }
            function a(t, e, n) {
                var i = {
                    fired: !1,
                    wrapFn: void 0,
                    target: t,
                    type: e,
                    listener: n
                }
                  , r = function() {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t.push(arguments[e]);
                    this.fired || (this.target.removeListener(this.type, this.wrapFn),
                    this.fired = !0,
                    f(this.listener, this.target, t))
                }
                .bind(i);
                return r.listener = n,
                i.wrapFn = r,
                r
            }
            function s(t, e, n) {
                var i = t._events;
                if (void 0 === i)
                    return [];
                var r = i[e];
                return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                        e[n] = t[n].listener || t[n];
                    return e
                }(r) : c(r, r.length)
            }
            function u(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n)
                        return 1;
                    if (void 0 !== n)
                        return n.length
                }
                return 0
            }
            function c(t, e) {
                for (var n = new Array(e), i = 0; i < e; ++i)
                    n[i] = t[i];
                return n
            }
            var l, d = "object" == typeof Reflect ? Reflect : null, f = d && "function" == typeof d.apply ? d.apply : function(t, e, n) {
                return Function.prototype.apply.call(t, e, n)
            }
            ;
            l = d && "function" == typeof d.ownKeys ? d.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            }
            : function(t) {
                return Object.getOwnPropertyNames(t)
            }
            ;
            var p = Number.isNaN || function(t) {
                return t != t
            }
            ;
            t.exports = i,
            i.EventEmitter = i,
            i.prototype._events = void 0,
            i.prototype._eventsCount = 0,
            i.prototype._maxListeners = void 0;
            var h = 10;
            Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || p(t))
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    h = t
                }
            }),
            i.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
            }
            ,
            i.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || p(t))
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t,
                this
            }
            ,
            i.prototype.getMaxListeners = function() {
                return r(this)
            }
            ,
            i.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e.push(arguments[n]);
                var i = "error" === t
                  , r = this._events;
                if (void 0 !== r)
                    i = i && void 0 === r.error;
                else if (!i)
                    return !1;
                if (i) {
                    var o;
                    if (e.length > 0 && (o = e[0]),
                    o instanceof Error)
                        throw o;
                    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o,
                    a
                }
                var s = r[t];
                if (void 0 === s)
                    return !1;
                if ("function" == typeof s)
                    f(s, this, e);
                else {
                    var u = s.length
                      , l = c(s, u);
                    for (n = 0; n < u; ++n)
                        f(l[n], this, e)
                }
                return !0
            }
            ,
            i.prototype.addListener = function(t, e) {
                return o(this, t, e, !1)
            }
            ,
            i.prototype.on = i.prototype.addListener,
            i.prototype.prependListener = function(t, e) {
                return o(this, t, e, !0)
            }
            ,
            i.prototype.once = function(t, e) {
                if ("function" != typeof e)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.on(t, a(this, t, e)),
                this
            }
            ,
            i.prototype.prependOnceListener = function(t, e) {
                if ("function" != typeof e)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.prependListener(t, a(this, t, e)),
                this
            }
            ,
            i.prototype.removeListener = function(t, e) {
                var n, i, r, o, a;
                if ("function" != typeof e)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                if (void 0 === (i = this._events))
                    return this;
                if (void 0 === (n = i[t]))
                    return this;
                if (n === e || n.listener === e)
                    0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t],
                    i.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" != typeof n) {
                    for (r = -1,
                    o = n.length - 1; o >= 0; o--)
                        if (n[o] === e || n[o].listener === e) {
                            a = n[o].listener,
                            r = o;
                            break
                        }
                    if (r < 0)
                        return this;
                    0 === r ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++)
                            t[e] = t[e + 1];
                        t.pop()
                    }(n, r),
                    1 === n.length && (i[t] = n[0]),
                    void 0 !== i.removeListener && this.emit("removeListener", t, a || e)
                }
                return this
            }
            ,
            i.prototype.off = i.prototype.removeListener,
            i.prototype.removeAllListeners = function(t) {
                var e, n, i;
                if (void 0 === (n = this._events))
                    return this;
                if (void 0 === n.removeListener)
                    return 0 === arguments.length ? (this._events = Object.create(null),
                    this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]),
                    this;
                if (0 === arguments.length) {
                    var r, o = Object.keys(n);
                    for (i = 0; i < o.length; ++i)
                        "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
                    return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
                }
                if ("function" == typeof (e = n[t]))
                    this.removeListener(t, e);
                else if (void 0 !== e)
                    for (i = e.length - 1; i >= 0; i--)
                        this.removeListener(t, e[i]);
                return this
            }
            ,
            i.prototype.listeners = function(t) {
                return s(this, t, !0)
            }
            ,
            i.prototype.rawListeners = function(t) {
                return s(this, t, !1)
            }
            ,
            i.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : u.call(t, e)
            }
            ,
            i.prototype.listenerCount = u,
            i.prototype.eventNames = function() {
                return this._eventsCount > 0 ? l(this._events) : []
            }
        }
        , function(t, e, n) {
            var i = n(6)
              , r = n(52)
              , o = n(40)("IE_PROTO")
              , a = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = r(t),
                i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(110),
                __esModule: !0
            }
        }
        , function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0,
                eval)("this")
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }
        , function(t, e) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }
            function i() {
                throw new Error("clearTimeout has not been defined")
            }
            function r(t) {
                if (c === setTimeout)
                    return setTimeout(t, 0);
                if ((c === n || !c) && setTimeout)
                    return c = setTimeout,
                    setTimeout(t, 0);
                try {
                    return c(t, 0)
                } catch (e) {
                    try {
                        return c.call(null, t, 0)
                    } catch (e) {
                        return c.call(this, t, 0)
                    }
                }
            }
            function o() {
                h && f && (h = !1,
                f.length ? p = f.concat(p) : v = -1,
                p.length && a())
            }
            function a() {
                if (!h) {
                    var t = r(o);
                    h = !0;
                    for (var e = p.length; e; ) {
                        for (f = p,
                        p = []; ++v < e; )
                            f && f[v].run();
                        v = -1,
                        e = p.length
                    }
                    f = null,
                    h = !1,
                    function(t) {
                        if (l === clearTimeout)
                            return clearTimeout(t);
                        if ((l === i || !l) && clearTimeout)
                            return l = clearTimeout,
                            clearTimeout(t);
                        try {
                            l(t)
                        } catch (e) {
                            try {
                                return l.call(null, t)
                            } catch (e) {
                                return l.call(this, t)
                            }
                        }
                    }(t)
                }
            }
            function s(t, e) {
                this.fun = t,
                this.array = e
            }
            function u() {}
            var c, l, d = t.exports = {};
            !function() {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    c = n
                }
                try {
                    l = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (t) {
                    l = i
                }
            }();
            var f, p = [], h = !1, v = -1;
            d.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                p.push(new s(t,e)),
                1 !== p.length || h || r(a)
            }
            ,
            s.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            d.title = "browser",
            d.browser = !0,
            d.env = {},
            d.argv = [],
            d.version = "",
            d.versions = {},
            d.on = u,
            d.addListener = u,
            d.once = u,
            d.off = u,
            d.removeListener = u,
            d.removeAllListeners = u,
            d.emit = u,
            d.prependListener = u,
            d.prependOnceListener = u,
            d.listeners = function(t) {
                return []
            }
            ,
            d.binding = function(t) {
                throw new Error("process.binding is not supported")
            }
            ,
            d.cwd = function() {
                return "/"
            }
            ,
            d.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            d.umask = function() {
                return 0
            }
        }
        , function(t, e) {
            function n(t, e) {
                var n = t[1] || ""
                  , i = t[3];
                if (!i)
                    return n;
                if (e && "function" == typeof btoa) {
                    var r = function(t) {
                        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                    }(i);
                    return [n].concat(i.sources.map(function(t) {
                        return "/*# sourceURL=" + i.sourceRoot + t + " */"
                    })).concat([r]).join("\n")
                }
                return [n].join("\n")
            }
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(e) {
                        var i = n(e, t);
                        return e[2] ? "@media " + e[2] + "{" + i + "}" : i
                    }).join("")
                }
                ,
                e.i = function(t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var i = {}, r = 0; r < this.length; r++) {
                        var o = this[r][0];
                        "number" == typeof o && (i[o] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var a = t[r];
                        "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                        e.push(a))
                    }
                }
                ,
                e
            }
        }
        , function(t, e, n) {
            function i(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n]
                      , r = f[i.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++)
                            r.parts[o](i.parts[o]);
                        for (; o < i.parts.length; o++)
                            r.parts.push(l(i.parts[o], e))
                    } else {
                        var a = [];
                        for (o = 0; o < i.parts.length; o++)
                            a.push(l(i.parts[o], e));
                        f[i.id] = {
                            id: i.id,
                            refs: 1,
                            parts: a
                        }
                    }
                }
            }
            function r(t, e) {
                for (var n = [], i = {}, r = 0; r < t.length; r++) {
                    var o = t[r]
                      , a = e.base ? o[0] + e.base : o[0]
                      , s = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    i[a] ? i[a].parts.push(s) : n.push(i[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return n
            }
            function o(t, e) {
                var n = h(t.insertInto);
                if (!n)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var i = _[_.length - 1];
                if ("top" === t.insertAt)
                    i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
                    _.push(e);
                else {
                    if ("bottom" !== t.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e)
                }
            }
            function a(t) {
                if (null === t.parentNode)
                    return !1;
                t.parentNode.removeChild(t);
                var e = _.indexOf(t);
                e >= 0 && _.splice(e, 1)
            }
            function s(t) {
                var e = document.createElement("style");
                return t.attrs.type = "text/css",
                c(e, t.attrs),
                o(t, e),
                e
            }
            function u(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css",
                t.attrs.rel = "stylesheet",
                c(e, t.attrs),
                o(t, e),
                e
            }
            function c(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n])
                })
            }
            function l(t, e) {
                var n, i, r, o;
                if (e.transform && t.css) {
                    if (!(o = e.transform(t.css)))
                        return function() {}
                        ;
                    t.css = o
                }
                if (e.singleton) {
                    var c = g++;
                    n = v || (v = s(e)),
                    i = d.bind(null, n, c, !1),
                    r = d.bind(null, n, c, !0)
                } else
                    t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e),
                    i = function(t, e, n) {
                        var i = n.css
                          , r = n.sourceMap
                          , o = void 0 === e.convertToAbsoluteUrls && r;
                        (e.convertToAbsoluteUrls || o) && (i = m(i)),
                        r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                        var a = new Blob([i],{
                            type: "text/css"
                        })
                          , s = t.href;
                        t.href = URL.createObjectURL(a),
                        s && URL.revokeObjectURL(s)
                    }
                    .bind(null, n, e),
                    r = function() {
                        a(n),
                        n.href && URL.revokeObjectURL(n.href)
                    }
                    ) : (n = s(e),
                    i = function(t, e) {
                        var n = e.css
                          , i = e.media;
                        if (i && t.setAttribute("media", i),
                        t.styleSheet)
                            t.styleSheet.cssText = n;
                        else {
                            for (; t.firstChild; )
                                t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(n))
                        }
                    }
                    .bind(null, n),
                    r = function() {
                        a(n)
                    }
                    );
                return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                            return;
                        i(t = e)
                    } else
                        r()
                }
            }
            function d(t, e, n, i) {
                var r = n ? "" : i.css;
                if (t.styleSheet)
                    t.styleSheet.cssText = b(e, r);
                else {
                    var o = document.createTextNode(r)
                      , a = t.childNodes;
                    a[e] && t.removeChild(a[e]),
                    a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
                }
            }
            var f = {}
              , p = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = function() {
                        return window && document && document.all && !window.atob
                    }
                    .apply(this, arguments)),
                    e
                }
            }()
              , h = function(t) {
                var e = {};
                return function(t) {
                    return void 0 === e[t] && (e[t] = function(t) {
                        return document.querySelector(t)
                    }
                    .call(this, t)),
                    e[t]
                }
            }()
              , v = null
              , g = 0
              , _ = []
              , m = n(82);
            t.exports = function(t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
                e.singleton || (e.singleton = p()),
                e.insertInto || (e.insertInto = "head"),
                e.insertAt || (e.insertAt = "bottom");
                var n = r(t, e);
                return i(n, e),
                function(t) {
                    for (var o = [], a = 0; a < n.length; a++) {
                        var s = n[a];
                        (u = f[s.id]).refs--,
                        o.push(u)
                    }
                    t && i(r(t, e), e);
                    for (a = 0; a < o.length; a++) {
                        var u;
                        if (0 === (u = o[a]).refs) {
                            for (var c = 0; c < u.parts.length; c++)
                                u.parts[c]();
                            delete f[u.id]
                        }
                    }
                }
            }
            ;
            var b = function() {
                var t = [];
                return function(e, n) {
                    return t[e] = n,
                    t.filter(Boolean).join("\n")
                }
            }()
        }
        , function(t, e) {
            t.exports = function(t) {
                var e = "undefined" != typeof window && window.location;
                if (!e)
                    throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t)
                    return t;
                var n = e.protocol + "//" + e.host
                  , i = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                    var r, o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? t : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""),
                    "url(" + JSON.stringify(r) + ")")
                })
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(1))
              , o = i(n(15))
              , a = i(n(2))
              , s = i(n(16))
              , u = n(119)
              , c = i(n(75))
              , l = i(n(120))
              , d = i(n(65))
              , f = i(n(12))
              , p = i(n(20))
              , h = n(13);
            n.p = "//g.alicdn.com/mtb/lcps-videox/" + u.version + "/";
            var v = function(t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0,
                    r.default)(this, e);
                    var n = (0,
                    o.default)(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return n.Events = f.default,
                    n.config = t,
                    n.rootElement = (0,
                    h.createEl)("div", {
                        className: "lib-video"
                    }),
                    n.player = new l.default(n),
                    !1 !== t.controls && (n.controlBar = new d.default(n)),
                    n.emit(p.default.INIT, {}),
                    n._bindEvent(),
                    n
                }
                return (0,
                s.default)(e, t),
                (0,
                a.default)(e, null, [{
                    key: "version",
                    get: function() {
                        return u.version
                    }
                }]),
                (0,
                a.default)(e, [{
                    key: "getVideoEl",
                    value: function() {
                        return this.videoDom
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.player.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.player.pause()
                    }
                }, {
                    key: "reload",
                    value: function(t) {
                        this.player.reload(t)
                    }
                }, {
                    key: "updateErrorMsg",
                    value: function(t) {
                        this.player.updateErrorMsg(t)
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(t) {
                        this.videoDom.currentTime = t
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.player._cleanPlayer(),
                        this.player.container.innerHTML = ""
                    }
                }, {
                    key: "_bindEvent",
                    value: function() {
                        var t = this;
                        this.rootElement.addEventListener("touchend", function(e) {
                            return t._triggerPlayerClick(e)
                        }, !0),
                        this.rootElement.addEventListener("click", function(e) {
                            return t._triggerPlayerClick(e)
                        }, !0)
                    }
                }, {
                    key: "_triggerPlayerClick",
                    value: function(t) {
                        "VIDEO" === t.target.nodeName.toUpperCase() && ("touchend" == t.type && (t.stopPropagation(),
                        t.preventDefault()),
                        this.emit(p.default.VIDEO_CLICK))
                    }
                }], [{
                    key: "videoDom",
                    set: function(t) {
                        e.videoDom = t
                    }
                }]),
                e
            }(c.default);
            e.default = v
        }
        , function(t, e, n) {
            t.exports = {
                default: n(85),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            n(86),
            n(96),
            t.exports = n(44).f("iterator")
        }
        , function(t, e, n) {
            "use strict";
            var i = n(87)(!0);
            n(54)(String, "String", function(t) {
                this._t = String(t),
                this._i = 0
            }, function() {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = i(e, n),
                this._i += t.length,
                {
                    value: t,
                    done: !1
                })
            })
        }
        , function(t, e, n) {
            var i = n(34)
              , r = n(35);
            t.exports = function(t) {
                return function(e, n) {
                    var o, a, s = String(r(e)), u = i(n), c = s.length;
                    return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
                }
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t)
                    throw TypeError(t + " is not a function!");
                return t
            }
        }
        , function(t, e, n) {
            "use strict";
            var i = n(38)
              , r = n(26)
              , o = n(43)
              , a = {};
            n(9)(a, n(11)("iterator"), function() {
                return this
            }),
            t.exports = function(t, e, n) {
                t.prototype = i(a, {
                    next: r(1, n)
                }),
                o(t, e + " Iterator")
            }
        }
        , function(t, e, n) {
            var i = n(4)
              , r = n(19)
              , o = n(39);
            t.exports = n(5) ? Object.defineProperties : function(t, e) {
                r(t);
                for (var n, a = o(e), s = a.length, u = 0; s > u; )
                    i.f(t, n = a[u++], e[n]);
                return t
            }
        }
        , function(t, e, n) {
            var i = n(60);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == i(t) ? t.split("") : Object(t)
            }
        }
        , function(t, e, n) {
            var i = n(8)
              , r = n(93)
              , o = n(94);
            t.exports = function(t) {
                return function(e, n, a) {
                    var s, u = i(e), c = r(u.length), l = o(a, c);
                    if (t && n != n) {
                        for (; c > l; )
                            if ((s = u[l++]) != s)
                                return !0
                    } else
                        for (; c > l; l++)
                            if ((t || l in u) && u[l] === n)
                                return t || l || 0;
                    return !t && -1
                }
            }
        }
        , function(t, e, n) {
            var i = n(34)
              , r = Math.min;
            t.exports = function(t) {
                return t > 0 ? r(i(t), 9007199254740991) : 0
            }
        }
        , function(t, e, n) {
            var i = n(34)
              , r = Math.max
              , o = Math.min;
            t.exports = function(t, e) {
                return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
            }
        }
        , function(t, e, n) {
            var i = n(0).document;
            t.exports = i && i.documentElement
        }
        , function(t, e, n) {
            n(97);
            for (var i = n(0), r = n(9), o = n(37), a = n(11)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
                var c = s[u]
                  , l = i[c]
                  , d = l && l.prototype;
                d && !d[a] && r(d, a, c),
                o[c] = o.Array
            }
        }
        , function(t, e, n) {
            "use strict";
            var i = n(98)
              , r = n(99)
              , o = n(37)
              , a = n(8);
            t.exports = n(54)(Array, "Array", function(t, e) {
                this._t = a(t),
                this._i = 0,
                this._k = e
            }, function() {
                var t = this._t
                  , e = this._k
                  , n = this._i++;
                return !t || n >= t.length ? (this._t = void 0,
                r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
            }, "values"),
            o.Arguments = o.Array,
            i("keys"),
            i("values"),
            i("entries")
        }
        , function(t, e) {
            t.exports = function() {}
        }
        , function(t, e) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(101),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            n(102),
            n(107),
            n(108),
            n(109),
            t.exports = n(3).Symbol
        }
        , function(t, e, n) {
            "use strict";
            var i = n(0)
              , r = n(6)
              , o = n(5)
              , a = n(18)
              , s = n(58)
              , u = n(103).KEY
              , c = n(24)
              , l = n(41)
              , d = n(43)
              , f = n(27)
              , p = n(11)
              , h = n(44)
              , v = n(45)
              , g = n(104)
              , _ = n(105)
              , m = n(19)
              , b = n(10)
              , y = n(52)
              , w = n(8)
              , x = n(36)
              , k = n(26)
              , O = n(38)
              , E = n(106)
              , S = n(53)
              , C = n(61)
              , T = n(4)
              , j = n(39)
              , L = S.f
              , P = T.f
              , A = E.f
              , I = i.Symbol
              , N = i.JSON
              , R = N && N.stringify
              , M = p("_hidden")
              , V = p("toPrimitive")
              , D = {}.propertyIsEnumerable
              , X = l("symbol-registry")
              , U = l("symbols")
              , B = l("op-symbols")
              , F = Object.prototype
              , W = "function" == typeof I && !!C.f
              , H = i.QObject
              , $ = !H || !H.prototype || !H.prototype.findChild
              , z = o && c(function() {
                return 7 != O(P({}, "a", {
                    get: function() {
                        return P(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var i = L(F, e);
                i && delete F[e],
                P(t, e, n),
                i && t !== F && P(F, e, i)
            }
            : P
              , Y = function(t) {
                var e = U[t] = O(I.prototype);
                return e._k = t,
                e
            }
              , G = W && "symbol" == typeof I.iterator ? function(t) {
                return "symbol" == typeof t
            }
            : function(t) {
                return t instanceof I
            }
              , K = function(t, e, n) {
                return t === F && K(B, e, n),
                m(t),
                e = x(e, !0),
                m(n),
                r(U, e) ? (n.enumerable ? (r(t, M) && t[M][e] && (t[M][e] = !1),
                n = O(n, {
                    enumerable: k(0, !1)
                })) : (r(t, M) || P(t, M, k(1, {})),
                t[M][e] = !0),
                z(t, e, n)) : P(t, e, n)
            }
              , q = function(t, e) {
                m(t);
                for (var n, i = g(e = w(e)), r = 0, o = i.length; o > r; )
                    K(t, n = i[r++], e[n]);
                return t
            }
              , J = function(t) {
                var e = D.call(this, t = x(t, !0));
                return !(this === F && r(U, t) && !r(B, t)) && (!(e || !r(this, t) || !r(U, t) || r(this, M) && this[M][t]) || e)
            }
              , Q = function(t, e) {
                if (t = w(t),
                e = x(e, !0),
                t !== F || !r(U, e) || r(B, e)) {
                    var n = L(t, e);
                    return !n || !r(U, e) || r(t, M) && t[M][e] || (n.enumerable = !0),
                    n
                }
            }
              , Z = function(t) {
                for (var e, n = A(w(t)), i = [], o = 0; n.length > o; )
                    r(U, e = n[o++]) || e == M || e == u || i.push(e);
                return i
            }
              , tt = function(t) {
                for (var e, n = t === F, i = A(n ? B : w(t)), o = [], a = 0; i.length > a; )
                    !r(U, e = i[a++]) || n && !r(F, e) || o.push(U[e]);
                return o
            };
            W || (s((I = function() {
                if (this instanceof I)
                    throw TypeError("Symbol is not a constructor!");
                var t = f(arguments.length > 0 ? arguments[0] : void 0)
                  , e = function(n) {
                    this === F && e.call(B, n),
                    r(this, M) && r(this[M], t) && (this[M][t] = !1),
                    z(this, t, k(1, n))
                };
                return o && $ && z(F, t, {
                    configurable: !0,
                    set: e
                }),
                Y(t)
            }
            ).prototype, "toString", function() {
                return this._k
            }),
            S.f = Q,
            T.f = K,
            n(62).f = E.f = Z,
            n(46).f = J,
            C.f = tt,
            o && !n(25) && s(F, "propertyIsEnumerable", J, !0),
            h.f = function(t) {
                return Y(p(t))
            }
            ),
            a(a.G + a.W + a.F * !W, {
                Symbol: I
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
                p(et[nt++]);
            for (var it = j(p.store), rt = 0; it.length > rt; )
                v(it[rt++]);
            a(a.S + a.F * !W, "Symbol", {
                for: function(t) {
                    return r(X, t += "") ? X[t] : X[t] = I(t)
                },
                keyFor: function(t) {
                    if (!G(t))
                        throw TypeError(t + " is not a symbol!");
                    for (var e in X)
                        if (X[e] === t)
                            return e
                },
                useSetter: function() {
                    $ = !0
                },
                useSimple: function() {
                    $ = !1
                }
            }),
            a(a.S + a.F * !W, "Object", {
                create: function(t, e) {
                    return void 0 === e ? O(t) : q(O(t), e)
                },
                defineProperty: K,
                defineProperties: q,
                getOwnPropertyDescriptor: Q,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: tt
            });
            var ot = c(function() {
                C.f(1)
            });
            a(a.S + a.F * ot, "Object", {
                getOwnPropertySymbols: function(t) {
                    return C.f(y(t))
                }
            }),
            N && a(a.S + a.F * (!W || c(function() {
                var t = I();
                return "[null]" != R([t]) || "{}" != R({
                    a: t
                }) || "{}" != R(Object(t))
            })), "JSON", {
                stringify: function(t) {
                    for (var e, n, i = [t], r = 1; arguments.length > r; )
                        i.push(arguments[r++]);
                    if (n = e = i[1],
                    (b(e) || void 0 !== t) && !G(t))
                        return _(e) || (e = function(t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)),
                            !G(e))
                                return e
                        }
                        ),
                        i[1] = e,
                        R.apply(N, i)
                }
            }),
            I.prototype[V] || n(9)(I.prototype, V, I.prototype.valueOf),
            d(I, "Symbol"),
            d(Math, "Math", !0),
            d(i.JSON, "JSON", !0)
        }
        , function(t, e, n) {
            var i = n(27)("meta")
              , r = n(10)
              , o = n(6)
              , a = n(4).f
              , s = 0
              , u = Object.isExtensible || function() {
                return !0
            }
              , c = !n(24)(function() {
                return u(Object.preventExtensions({}))
            })
              , l = function(t) {
                a(t, i, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            }
              , d = t.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t))
                        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, i)) {
                        if (!u(t))
                            return "F";
                        if (!e)
                            return "E";
                        l(t)
                    }
                    return t[i].i
                },
                getWeak: function(t, e) {
                    if (!o(t, i)) {
                        if (!u(t))
                            return !0;
                        if (!e)
                            return !1;
                        l(t)
                    }
                    return t[i].w
                },
                onFreeze: function(t) {
                    return c && d.NEED && u(t) && !o(t, i) && l(t),
                    t
                }
            }
        }
        , function(t, e, n) {
            var i = n(39)
              , r = n(61)
              , o = n(46);
            t.exports = function(t) {
                var e = i(t)
                  , n = r.f;
                if (n)
                    for (var a, s = n(t), u = o.f, c = 0; s.length > c; )
                        u.call(t, a = s[c++]) && e.push(a);
                return e
            }
        }
        , function(t, e, n) {
            var i = n(60);
            t.exports = Array.isArray || function(t) {
                return "Array" == i(t)
            }
        }
        , function(t, e, n) {
            var i = n(8)
              , r = n(62).f
              , o = {}.toString
              , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function(t) {
                return a && "[object Window]" == o.call(t) ? function(t) {
                    try {
                        return r(t)
                    } catch (t) {
                        return a.slice()
                    }
                }(t) : r(i(t))
            }
        }
        , function(t, e) {}
        , function(t, e, n) {
            n(45)("asyncIterator")
        }
        , function(t, e, n) {
            n(45)("observable")
        }
        , function(t, e, n) {
            n(111);
            var i = n(3).Object;
            t.exports = function(t, e, n) {
                return i.defineProperty(t, e, n)
            }
        }
        , function(t, e, n) {
            var i = n(18);
            i(i.S + i.F * !n(5), "Object", {
                defineProperty: n(4).f
            })
        }
        , function(t, e, n) {
            t.exports = {
                default: n(113),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            n(114),
            t.exports = n(3).Object.setPrototypeOf
        }
        , function(t, e, n) {
            var i = n(18);
            i(i.S, "Object", {
                setPrototypeOf: n(115).set
            })
        }
        , function(t, e, n) {
            var i = n(10)
              , r = n(19)
              , o = function(t, e) {
                if (r(t),
                !i(e) && null !== e)
                    throw TypeError(e + ": can't set as prototype!")
            };
            t.exports = {
                set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, i) {
                    try {
                        (i = n(55)(Function.call, n(53).f(Object.prototype, "__proto__").set, 2))(t, []),
                        e = !(t instanceof Array)
                    } catch (t) {
                        e = !0
                    }
                    return function(t, n) {
                        return o(t, n),
                        e ? t.__proto__ = n : i(t, n),
                        t
                    }
                }({}, !1) : void 0),
                check: o
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(117),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            n(118);
            var i = n(3).Object;
            t.exports = function(t, e) {
                return i.create(t, e)
            }
        }
        , function(t, e, n) {
            var i = n(18);
            i(i.S, "Object", {
                create: n(38)
            })
        }
        , function(t, e) {
            t.exports = {
                name: "@ali/lcps-videox",
                description: "支持多种视频格式、适用于点播和直播场景的统一播放器",
                version: "0.1.50",
                repository: {
                    type: "git",
                    url: "git@gitlab.alibaba-inc.com:mtb/lcps-videox.git"
                },
                author: [{
                    name: "yingyi.zj",
                    email: "yingyi.zj@alibaba-inc.com"
                }],
                license: "MIT",
                keywords: ["lib", "mtb", "javascript", "es6", "es2015"],
                publishConfig: {
                    registry: "http://registry.npm.alibaba-inc.com"
                },
                scripts: {
                    clear: "rm -rf dist coverage release",
                    build: "webpack --config ./webpack/webpack.pub.js",
                    bundle: "webpack --config ./webpack/webpack.dev.js",
                    dev: "webpack --config ./webpack/webpack.dev.js --watch",
                    lint: "eslint --fix --config .eslintrc src/**/*.js test/**/*.js",
                    test: "mocha --compilers js:babel-core/register test/**/*.js",
                    cover: "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha test/**/*.js --reporter dot",
                    ci: "tnpm run lint && tnpm run test",
                    release: "tnpm run build && sh ./build/release.sh && sh ./build/pubcdn.sh",
                    "site:update": "sh ./build/site.sh update",
                    "site:build": "sh ./build/site.sh build",
                    "site:watch": 'watch -p "doc/**/*.md" -p "README.md" -c "tnpm run site:build"',
                    "site:serve": "sh ./build/site.sh serve",
                    "site:publish": "sh ./build/site.sh publish"
                },
                dependencies: {
                    "@ali/lib-httpurl": "~2.0.0",
                    "@ali/lib-video-tool": "^0.1.1",
                    "@ali/lib-windvane": "^2.1.8",
                    "amfe-env": "^2.0.0",
                    "es6-promise": "^4.0.5",
                    "lodash-compat": "^3.10.2",
                    url: "^0.11.0",
                    "url-toolkit": "^2.0.1",
                    webworkify: "^1.4.0"
                },
                devDependencies: {
                    autoprefixer: "^7.1.1",
                    babel: "^6.23.0",
                    "babel-cli": "~6.4.5",
                    "babel-core": "^6.25.0",
                    "babel-loader": "^7.1.1",
                    "babel-plugin-syntax-async-functions": "^6.13.0",
                    "babel-plugin-syntax-dynamic-import": "^6.18.0",
                    "babel-plugin-transform-async-to-generator": "^6.24.1",
                    "babel-plugin-transform-regenerator": "^6.24.1",
                    "babel-plugin-transform-runtime": "^6.23.0",
                    "babel-preset-es2015": "~6.3.13",
                    "babel-runtime": "^6.23.0",
                    chai: "~3.4.1",
                    "css-loader": "^0.28.4",
                    cssnano: "^3.10.0",
                    eslint: "~2.1.0",
                    "gitbook-cli": "~1.0.1",
                    isparta: "~4.0.0",
                    mocha: "~2.4.5",
                    "postcss-loader": "^2.0.6",
                    "postcss-px2rem": "^0.3.0",
                    precss: "^2.0.0",
                    serve: "~1.4.0",
                    "style-loader": "^0.18.2",
                    "watch-cli": "~0.2.1",
                    webpack: "^3.0.0",
                    "webworkify-webpack": "^2.1.0"
                },
                main: "./src/videox.js"
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(17))
              , o = i(n(1))
              , a = i(n(2))
              , s = i(n(15))
              , u = i(n(16));
            n(121);
            var c = i(n(28))
              , l = i(n(20))
              , d = i(n(12))
              , f = i(n(122))
              , p = n(13)
              , h = function(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }((i(n(65)),
            n(32)))
              , v = i(n(21))
              , g = n(156)
              , _ = i(n(164))
              , m = new g.VideoTool
              , b = {
                m3u8: "application/x-mpegURL",
                mp4: "video/mp4",
                flv: "video/x-flv"
            }
              , y = function(t) {
                function e(t) {
                    (0,
                    o.default)(this, e);
                    var n = (0,
                    s.default)(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    n.videox = t;
                    var i = n.opts = t.config;
                    return n.hlsPlayer = null,
                    n.flvPlayer = null,
                    n.options = {
                        controls: !1,
                        autoplay: !1,
                        flvOptions: {}
                    },
                    n.firstPlay = !0,
                    n.flvHadPlayed = !1,
                    Object.assign(n.options, i),
                    n.rootElement = t.rootElement,
                    n._addEventListener(),
                    n
                }
                return (0,
                u.default)(e, t),
                (0,
                a.default)(e, [{
                    key: "_addEventListener",
                    value: function() {
                        this.videox.on(l.default.INIT, this.onInit.bind(this)),
                        this.videox.on(l.default.SOURCE_ATTACHED, this.onSourceAttached.bind(this)),
                        this.videox.on(l.default.TRIGGER_PAUSE, this.onTriggerPause.bind(this)),
                        this.videox.on(l.default.TRIGGER_PLAY, this.onTriggerPlay.bind(this)),
                        this.videox.on(d.default.VIDEO_PLAY, this.onVideoPlay.bind(this)),
                        this.videox.on(d.default.VIDEO_WAITING, this.onVideoWaiting.bind(this)),
                        this.videox.on(d.default.VIDEO_PLAYING, this.onVideoPlaying.bind(this)),
                        this.videox.on(d.default.VIDEO_ERROR, this.onVideoError.bind(this)),
                        this.videox.on(d.default.VIDEO_PAUSE, this.onVideoPause.bind(this))
                    }
                }, {
                    key: "onInit",
                    value: function() {
                        var t = this.opts;
                        "object" === (0,
                        r.default)(t.container) ? this.container = t.container : "string" == typeof t.container && (this.container = (0,
                        p.$)(t.container)),
                        t.from || console.error("参数from为必填项，用作业务埋点统计，请联系@霜草进行分配"),
                        this.video = (0,
                        p.createEl)("video", {
                            className: "lib-video",
                            loop: t.loop || !1,
                            volume: void 0 == t.volume ? 1 : t.volume,
                            muted: t.muted || !1
                        }, {
                            "webkit-playsinline": "webkit-playsinline",
                            playsinline: "playsinline",
                            poster: t.poster || ""
                        }),
                        this.logParams = {
                            videoId: "",
                            type: t.live ? "live" : "video"
                        },
                        this._render(),
                        this._appendSource(),
                        this._bindEvent(!1),
                        this._bindDomEvent(),
                        this.videox.videoDom = this.getVideoEl(),
                        this._initLogTrack()
                    }
                }, {
                    key: "onTriggerPause",
                    value: function() {
                        this.pause()
                    }
                }, {
                    key: "onTriggerPlay",
                    value: function() {
                        this.play()
                    }
                }, {
                    key: "onVideoWaiting",
                    value: function() {
                        (0,
                        p.removeElClass)(this.startPlayEl.parentNode, "error"),
                        (0,
                        p.addElClass)(this.startPlayEl.parentNode, "loading"),
                        (0,
                        p.removeElClass)(this.rootElement, "vjs-has-started")
                    }
                }, {
                    key: "onVideoPlay",
                    value: function(t) {
                        (0,
                        p.addElClass)(this.startPlayEl.parentNode, "loading"),
                        (0,
                        p.removeElClass)(this.startPlayEl.parentNode, "error")
                    }
                }, {
                    key: "onVideoPlaying",
                    value: function(t) {
                        (0,
                        p.removeElClass)(this.startPlayEl.parentNode, "loading"),
                        (0,
                        p.addElClass)(this.rootElement, "vjs-has-started")
                    }
                }, {
                    key: "onVideoPause",
                    value: function(t) {}
                }, {
                    key: "onVideoError",
                    value: function(t) {
                        (0,
                        p.removeElClass)(this.rootElement, "vjs-has-started"),
                        (0,
                        p.removeElClass)(this.rootElement, "vjs-has-paused"),
                        (0,
                        p.removeElClass)(this.startPlayEl.parentNode, "loading"),
                        this.videox.videoDom.poster = "",
                        (0,
                        p.addElClass)(this.startPlayEl.parentNode, "error")
                    }
                }, {
                    key: "onSourceAttached",
                    value: function(t) {
                        this.tagType = t.tagType,
                        t.reload ? this.play() : this.options.autoplay && ("NATIVE" == this.tagType ? this.video.autoplay = !0 : this.play())
                    }
                }, {
                    key: "_appendSource",
                    value: function(t) {
                        var e = this
                          , i = t || this.options.url
                          , r = !!t
                          , o = f.default.checkFileType(i);
                        if (this.video.innerHTML = "",
                        m.canPlay(i)) {
                            this.video.removeAttribute("src");
                            var a = (0,
                            p.createEl)("source", {
                                src: i
                            });
                            this.video.appendChild(a),
                            this.videox.emit(l.default.SOURCE_ATTACHED, {
                                tagType: "NATIVE",
                                reload: r
                            }),
                            f.default.isSafari() && (this.video.removeAttribute("autoplay"),
                            this.video.pause())
                        } else if ("flv" === o)
                            n.e(1).then(n.bind(null, 165)).then(function(t) {
                                if (t.isSupported()) {
                                    var n = {}
                                      , i = t.Events
                                      , o = i.ERROR
                                      , a = i.LOADING_COMPLETE
                                      , s = i.RECOVERED_EARLY_EOF
                                      , u = i.MEDIA_INFO
                                      , c = i.STATISTICS_INFO;
                                    Object.assign(n, e.options, {
                                        type: "flv"
                                    });
                                    var f = e.flvPlayer = t.createPlayer(n, e.options.flvOptions);
                                    f.attachMediaElement(e.video),
                                    f.load(),
                                    e.videox.emit(l.default.SOURCE_ATTACHED, {
                                        tagType: "FLV",
                                        reload: r
                                    }),
                                    f.on(o, function(t, n, i) {
                                        var r = {
                                            event: t,
                                            detail: n,
                                            info: i
                                        };
                                        e.videox.emit(d.default.VIDEO_ERROR, t),
                                        e.videox.emit(l.default.PLAYER_INNER_ERROR, r)
                                    }),
                                    f.on(a, function(t) {
                                        e.videox.emit(d.default.VIDEO_LOADING_COMPLETE, t)
                                    }),
                                    f.on(s, function(t) {
                                        e.videox.emit(d.default.VIDEO_RECOVERED_EARLY_EOF, t)
                                    }),
                                    f.on(u, function(t) {
                                        return e.videox.emit(u, t)
                                    }),
                                    f.on(c, function(t) {
                                        return e.videox.emit(c, t)
                                    })
                                } else
                                    e.videox.emit(d.default.VIDEO_ERROR, {
                                        isSupport: !1
                                    }),
                                    console.error("FLV is not support!")
                            });
                        else if ("m3u8" === o)
                            f.default.hlsSupport() ? (this.video.setAttribute("type", b[o] || ""),
                            this.video.setAttribute("src", i),
                            this.videox.emit(l.default.SOURCE_ATTACHED, {
                                tagType: "NATIVE",
                                reload: r
                            })) : n.e(0).then(n.bind(null, 166)).then(function(t) {
                                var n = e.options.oldhls ? t.oldHls : t.hls;
                                n.isSupported() ? (e.hlsPlayer = new n(e.options.codecConfig),
                                e.hlsPlayer.attachMedia(e.video),
                                e.hlsPlayer.loadSource(i),
                                e.videoPlayerType = "hls",
                                e.videox.emit(l.default.SOURCE_ATTACHED, {
                                    tagType: "HLS",
                                    reload: r
                                }),
                                e.hlsPlayer.on(n.Events.ERROR, function(t, n) {
                                    var i = {
                                        event: t,
                                        data: n
                                    };
                                    e.videox.emit(l.default.PLAYER_INNER_ERROR, i)
                                })) : (e.videox.emit(d.default.VIDEO_ERROR, {
                                    isSupport: !1
                                }),
                                console.error("HLS is not support!"))
                            });
                        else {
                            this.video.removeAttribute("src");
                            var s = (0,
                            p.createEl)("source", {
                                src: i
                            });
                            this.video.appendChild(s),
                            this.videox.emit(l.default.SOURCE_ATTACHED, {
                                tagType: "NATIVE",
                                reload: r
                            })
                        }
                    }
                }, {
                    key: "play",
                    value: function() {
                        var t = this.video.play();
                        void 0 !== t && t.then(function() {}).catch(function(t) {
                            console.log(t)
                        })
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.video.pause()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.pause(),
                        this.video.currentTime = 0
                    }
                }, {
                    key: "flvPlay",
                    value: function() {
                        this.flvPlayer.pause(),
                        this.flvPlayer.unload(),
                        this.flvPlayer.load(),
                        this.flvPlayer.play()
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(t) {
                        this.video.currentTime = t
                    }
                }, {
                    key: "getVideoEl",
                    value: function() {
                        return this.video
                    }
                }, {
                    key: "updateErrorMsg",
                    value: function(t) {
                        if (t && this.rootElement) {
                            var e = this.rootElement.getElementsByClassName("error-message-wrap");
                            e && e[0] && (e[0].innerHTML = t)
                        }
                    }
                }, {
                    key: "getStatus",
                    value: function() {
                        return this.video.networkState
                    }
                }, {
                    key: "enterFullScreen",
                    value: function() {
                        this.controlBar && this.controlBar.enterFullScreen(),
                        this.logTrack.fullScreenLog()
                    }
                }, {
                    key: "reload",
                    value: function(t) {
                        if (this.video) {
                            var e = t || this.options.url;
                            e && (this.onVideoWaiting(),
                            this._cleanPlayer(),
                            this.options.url = e,
                            this._appendSource(this.options.url, this.options.codecConfig))
                        } else
                            console.error("Unable to find a video element")
                    }
                }, {
                    key: "_initLogTrack",
                    value: function() {
                        var t = {
                            videox: this.videox
                        };
                        Object.assign(t, this.videox.config),
                        this.logTrack = new _.default(t)
                    }
                }, {
                    key: "_cleanPlayer",
                    value: function() {
                        this.video.pause(),
                        this.flvPlayer && this.flvPlayer.destroy(),
                        this.flvPlayer = null,
                        this.hlsPlayer && this.hlsPlayer.destroy(),
                        this.hlsPlayer = null,
                        this.video.src = "",
                        this.video.load(),
                        this.video.currentTime = 0,
                        this.video.innerHTML = ""
                    }
                }, {
                    key: "_render",
                    value: function() {
                        var t = this.options.stalledText || "有点小卡，请重试"
                          , e = void 0 === this.options.showRetry || !0 === this.options.showRetry ? '\n      <button class="vjs-center-retry vjs-button" role="button" type="button">\n        <span class="vjs-control-text">retry</span>\n      </button>' : ""
                          , n = (0,
                        p.createEl)("div", {
                            className: "vjs-center-container",
                            innerHTML: '\n        <button class="vjs-center-load vjs-button" role="button" type="button">\n          <span class="vjs-control-text">Load</span>\n        </button>\n        <button class="vjs-center-start vjs-button" role="button" type="button">\n          <span class="vjs-control-text">start</span>\n        </button>\n        <div class="error-content">\n          <p class="error-message-wrap">' + t + "</p>\n          " + e + "\n        </div>\n      "
                        });
                        (0,
                        p.createEl)("div", {
                            className: "vjs-center-container error",
                            innerHTML: "\n\n        \n      "
                        }),
                        (0,
                        p.appendContent)(this.rootElement, [this.video, n]),
                        this.startPlayEl = (0,
                        p.$)(".vjs-center-start", this.rootElement),
                        this.retryEl = (0,
                        p.$)(".vjs-center-retry", this.rootElement),
                        this.container.appendChild(this.rootElement)
                    }
                }, {
                    key: "_bindEvent",
                    value: function(t) {
                        var e = this;
                        this.rootElement,
                        !t && this.startPlayEl.addEventListener("click", function(t) {
                            return e._triggerStartPlayerClick(t)
                        }),
                        !t && this.retryEl.addEventListener("click", function(t) {
                            return e.reload()
                        })
                    }
                }, {
                    key: "_bindDomEvent",
                    value: function() {
                        var t = this;
                        this.video.addEventListener("error", function(e) {
                            return t._errorEmit(e)
                        }),
                        this.video.addEventListener("ended", function(e) {
                            return t._endedEmit(e)
                        }),
                        this.video.addEventListener("progress", function(e) {
                            return t._progressEmit(e)
                        }),
                        this.video.addEventListener("play", function(e) {
                            return t._playEmit(e)
                        }),
                        this.video.addEventListener("loadstart", function(e) {
                            return t._loadstartEmit(e)
                        }),
                        this.video.addEventListener("playing", function(e) {
                            return t._playingEmit(e)
                        }),
                        this.video.addEventListener("suspend", function(e) {
                            return t._suspendEmit(e)
                        }),
                        this.video.addEventListener("abort", function(e) {
                            return t._abortEmit(e)
                        }),
                        this.video.addEventListener("stalled", function(e) {
                            return t._stalledEmit(e)
                        }),
                        this.video.addEventListener("waiting", function(e) {
                            return t._waitingEmit(e)
                        }),
                        this.video.addEventListener("canplay", function(e) {
                            return t._canplayEmit(e)
                        }),
                        this.video.addEventListener("canplaythrough", function(e) {
                            return t._canplaythroughEmit(e)
                        }),
                        this.video.addEventListener("timeupdate", function(e) {
                            return t._timeupdateEmit(e)
                        }),
                        this.video.addEventListener("seeking", function(e) {
                            return t._seekingEmit(e)
                        }),
                        this.video.addEventListener("seeked", function(e) {
                            return t._seekedEmit(e)
                        }),
                        this.video.addEventListener("pause", function(e) {
                            return t._pauseEmit(e)
                        }),
                        this.video.addEventListener("volumechange", function(e) {
                            return t._volumechangeEmit(e)
                        })
                    }
                }, {
                    key: "_error",
                    value: function() {
                        (0,
                        p.addElClass)(this.rootElement, "vjs-error"),
                        (0,
                        p.removeElClass)(this.startPlayEl.parentNode, "loading"),
                        this.videoLoading = !1
                    }
                }, {
                    key: "_triggerStartPlayerClick",
                    value: function(t) {
                        t && t.preventDefault(),
                        (0,
                        v.default)("Player::triggerStartPlayerClick_()"),
                        this.play()
                    }
                }, {
                    key: "_checkUC",
                    value: function() {
                        var t = navigator.userAgent.match(/UCBrowser/);
                        return !(!h.aliapp || !t)
                    }
                }, {
                    key: "_pauseEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:pause::" + (new Date).getTime()),
                        this.videox.emit(d.default.VIDEO_PAUSE, t),
                        this.logTrack.pauseLog()
                    }
                }, {
                    key: "_emitFlvEvent",
                    value: function(t, e) {
                        (0,
                        v.default)("HTML5:emit:::flv:" + t + "::" + (new Date).getTime()),
                        this.emit(t, e)
                    }
                }, {
                    key: "_seekingEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:seeking::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_SEEKING, t)
                    }
                }, {
                    key: "_seekedEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:seeked::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_SEEKED, t)
                    }
                }, {
                    key: "_stalledEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:stalled::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_STALLED, t)
                    }
                }, {
                    key: "_waitingEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:waiting::" + (new Date).getTime()),
                        this.videox.emit(l.default.LOADING),
                        this.videox.emit(d.default.VIDEO_WAITING, t),
                        this._setTimeoutError()
                    }
                }, {
                    key: "_abortEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:abort::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_ABORT, t)
                    }
                }, {
                    key: "_suspendEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:suspend::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_SUSPEND, t)
                    }
                }, {
                    key: "_canplayEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:canplay::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_CANPLAY, t)
                    }
                }, {
                    key: "_canplaythroughEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:canplaythrough::" + (new Date).getTime()),
                        this.emit && this.emit(d.default.VIDEO_CANPLAYTHROUGH, t)
                    }
                }, {
                    key: "_errorEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:error::" + (new Date).getTime()),
                        this.videox.emit(d.default.VIDEO_ERROR, t),
                        this.logTrack.errorLog(t)
                    }
                }, {
                    key: "_progressEmit",
                    value: function() {
                        (0,
                        v.default)("HTML5:emit:::video:progress::" + (new Date).getTime()),
                        this.controlBar && this.controlBar.emit(d.default.VIDEO_PROGRESS)
                    }
                }, {
                    key: "_endedEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:ended::"),
                        this.videox.emit(d.default.VIDEO_ENDED, t)
                    }
                }, {
                    key: "_timeupdateEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:timeupdate::" + this.video.currentTime);
                        var e = t.currentTarget.currentTime;
                        navigator.userAgent.match(/UCBrowser/),
                        this.playEmited || (e > 0 || this.videoLoading && this.options.live && h.os.isAndroid) && (this.waitTimer_ && (clearTimeout(this.waitTimer_),
                        this.waitTimer_ = 0),
                        this.videox.emit(d.default.VIDEO_TIMEUPDATE, t))
                    }
                }, {
                    key: "_volumechangeEmit",
                    value: function(t) {
                        this.videox.emit(d.default.VIDEO_VOLUMECHANGE, t),
                        (0,
                        v.default)("HTML5:emit:::video:volumechange::" + this.video.volume + "::muted::" + this.video.muted)
                    }
                }, {
                    key: "_playEmit",
                    value: function(t) {
                        this.videox.emit(d.default.VIDEO_PLAY, t),
                        this.logTrack.playLog()
                    }
                }, {
                    key: "_loadstartEmit",
                    value: function(t) {
                        (0,
                        v.default)("HTML5:emit:::video:loadstart::" + (new Date).getTime()),
                        this.videox.emit(d.default.VIDEO_LOADSTART)
                    }
                }, {
                    key: "_playingEmit",
                    value: function() {
                        (0,
                        v.default)("HTML5:emit:::video:playing::" + (new Date).getTime()),
                        this.videox.emit(d.default.VIDEO_PLAYING)
                    }
                }, {
                    key: "_setTimeoutError",
                    value: function() {
                        var t = this;
                        this.waitTimer_ || (this.waitTimer_ = setTimeout(function() {
                            t.video.networkState === t.video.NETWORK_NO_SOURCE ? t.videox.emit(d.default.VIDEO_ERROR, {
                                errorCode: "NETWORK_NO_SOURCE"
                            }) : t.videox.emit(d.default.VIDEO_ERROR, {
                                errorCode: "NETWORK_TIMEOUT"
                            }),
                            t.waitTimer_ = null
                        }, this.options.timeout || 1e4))
                    }
                }]),
                e
            }(c.default);
            e.default = y
        }
        , function(t, e, n) {
            "use strict";
            "function" != typeof Object.assign && (Object.assign = function(t, e) {
                if (null == t)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(t), i = 1; i < arguments.length; i++) {
                    var r = arguments[i];
                    if (null != r)
                        for (var o in r)
                            Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
                }
                return n
            }
            )
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(63);
            e.default = {
                checkFileType: function(t) {
                    return (0,
                    i.parse)(t).pathname.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                },
                isSafari: function() {
                    return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
                },
                hlsSupport: function() {
                    return document.createElement("video").canPlayType("application/x-mpegURL")
                }
            }
        }
        , function(t, e, n) {
            (function(t, i) {
                var r;
                !function(i) {
                    function o(t) {
                        throw new RangeError(T[t])
                    }
                    function a(t, e) {
                        for (var n = t.length, i = []; n--; )
                            i[n] = e(t[n]);
                        return i
                    }
                    function s(t, e) {
                        var n = t.split("@")
                          , i = "";
                        return n.length > 1 && (i = n[0] + "@",
                        t = n[1]),
                        i + a((t = t.replace(C, ".")).split("."), e).join(".")
                    }
                    function u(t) {
                        for (var e, n, i = [], r = 0, o = t.length; r < o; )
                            (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < o ? 56320 == (64512 & (n = t.charCodeAt(r++))) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e),
                            r--) : i.push(e);
                        return i
                    }
                    function c(t) {
                        return a(t, function(t) {
                            var e = "";
                            return t > 65535 && (e += P((t -= 65536) >>> 10 & 1023 | 55296),
                            t = 56320 | 1023 & t),
                            e + P(t)
                        }).join("")
                    }
                    function l(t) {
                        return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : _
                    }
                    function d(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }
                    function f(t, e, n) {
                        var i = 0;
                        for (t = n ? L(t / w) : t >> 1,
                        t += L(t / e); t > j * b >> 1; i += _)
                            t = L(t / j);
                        return L(i + (j + 1) * t / (t + y))
                    }
                    function p(t) {
                        var e, n, i, r, a, s, u, d, p, h, v = [], y = t.length, w = 0, E = k, S = x;
                        for ((n = t.lastIndexOf(O)) < 0 && (n = 0),
                        i = 0; i < n; ++i)
                            t.charCodeAt(i) >= 128 && o("not-basic"),
                            v.push(t.charCodeAt(i));
                        for (r = n > 0 ? n + 1 : 0; r < y; ) {
                            for (a = w,
                            s = 1,
                            u = _; r >= y && o("invalid-input"),
                            ((d = l(t.charCodeAt(r++))) >= _ || d > L((g - w) / s)) && o("overflow"),
                            w += d * s,
                            !(d < (p = u <= S ? m : u >= S + b ? b : u - S)); u += _)
                                s > L(g / (h = _ - p)) && o("overflow"),
                                s *= h;
                            S = f(w - a, e = v.length + 1, 0 == a),
                            L(w / e) > g - E && o("overflow"),
                            E += L(w / e),
                            w %= e,
                            v.splice(w++, 0, E)
                        }
                        return c(v)
                    }
                    function h(t) {
                        var e, n, i, r, a, s, c, l, p, h, v, y, w, E, S, C = [];
                        for (y = (t = u(t)).length,
                        e = k,
                        n = 0,
                        a = x,
                        s = 0; s < y; ++s)
                            (v = t[s]) < 128 && C.push(P(v));
                        for (i = r = C.length,
                        r && C.push(O); i < y; ) {
                            for (c = g,
                            s = 0; s < y; ++s)
                                (v = t[s]) >= e && v < c && (c = v);
                            for (c - e > L((g - n) / (w = i + 1)) && o("overflow"),
                            n += (c - e) * w,
                            e = c,
                            s = 0; s < y; ++s)
                                if ((v = t[s]) < e && ++n > g && o("overflow"),
                                v == e) {
                                    for (l = n,
                                    p = _; !(l < (h = p <= a ? m : p >= a + b ? b : p - a)); p += _)
                                        S = l - h,
                                        E = _ - h,
                                        C.push(P(d(h + S % E, 0))),
                                        l = L(S / E);
                                    C.push(P(d(l, 0))),
                                    a = f(n, w, i == r),
                                    n = 0,
                                    ++i
                                }
                            ++n,
                            ++e
                        }
                        return C.join("")
                    }
                    "object" == typeof e && e && e.nodeType,
                    "object" == typeof t && t && t.nodeType;
                    var v, g = 2147483647, _ = 36, m = 1, b = 26, y = 38, w = 700, x = 72, k = 128, O = "-", E = /^xn--/, S = /[^\x20-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, T = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, j = _ - m, L = Math.floor, P = String.fromCharCode;
                    v = {
                        version: "1.4.1",
                        ucs2: {
                            decode: u,
                            encode: c
                        },
                        decode: p,
                        encode: h,
                        toASCII: function(t) {
                            return s(t, function(t) {
                                return S.test(t) ? "xn--" + h(t) : t
                            })
                        },
                        toUnicode: function(t) {
                            return s(t, function(t) {
                                return E.test(t) ? p(t.slice(4).toLowerCase()) : t
                            })
                        }
                    },
                    void 0 !== (r = function() {
                        return v
                    }
                    .call(e, n, e, t)) && (t.exports = r)
                }()
            }
            ).call(e, n(124)(t), n(78))
        }
        , function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}
                ,
                t.paths = [],
                t.children || (t.children = []),
                Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }),
                Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }),
                t.webpackPolyfill = 1),
                t
            }
        }
        , function(t, e, n) {
            "use strict";
            t.exports = {
                isString: function(t) {
                    return "string" == typeof t
                },
                isObject: function(t) {
                    return "object" == typeof t && null !== t
                },
                isNull: function(t) {
                    return null === t
                },
                isNullOrUndefined: function(t) {
                    return null == t
                }
            }
        }
        , function(t, e, n) {
            "use strict";
            e.decode = e.parse = n(127),
            e.encode = e.stringify = n(128)
        }
        , function(t, e, n) {
            "use strict";
            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            t.exports = function(t, e, n, o) {
                e = e || "&",
                n = n || "=";
                var a = {};
                if ("string" != typeof t || 0 === t.length)
                    return a;
                var s = /\+/g;
                t = t.split(e);
                var u = 1e3;
                o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                var c = t.length;
                u > 0 && c > u && (c = u);
                for (var l = 0; l < c; ++l) {
                    var d, f, p, h, v = t[l].replace(s, "%20"), g = v.indexOf(n);
                    g >= 0 ? (d = v.substr(0, g),
                    f = v.substr(g + 1)) : (d = v,
                    f = ""),
                    p = decodeURIComponent(d),
                    h = decodeURIComponent(f),
                    i(a, p) ? r(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
                }
                return a
            }
            ;
            var r = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t, e) {
                if (t.map)
                    return t.map(e);
                for (var n = [], i = 0; i < t.length; i++)
                    n.push(e(t[i], i));
                return n
            }
            var r = function(t) {
                switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
                }
            };
            t.exports = function(t, e, n, s) {
                return e = e || "&",
                n = n || "=",
                null === t && (t = void 0),
                "object" == typeof t ? i(a(t), function(a) {
                    var s = encodeURIComponent(r(a)) + n;
                    return o(t[a]) ? i(t[a], function(t) {
                        return s + encodeURIComponent(r(t))
                    }).join(e) : s + encodeURIComponent(r(t[a]))
                }).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : ""
            }
            ;
            var o = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
              , a = Object.keys || function(t) {
                var e = [];
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
        }
        , function(t, e, n) {
            var i = n(130)
              , r = n(144)(i);
            t.exports = r
        }
        , function(t, e, n) {
            var i = n(66)
              , r = n(131)
              , o = n(31)
              , a = n(22)
              , s = n(14)
              , u = n(7)
              , c = n(71)
              , l = n(142);
            t.exports = function t(e, n, d, f, p) {
                if (!s(e))
                    return e;
                var h = a(n) && (o(n) || c(n))
                  , v = h ? void 0 : l(n);
                return i(v || n, function(i, o) {
                    if (v && (i = n[o = i]),
                    u(i))
                        f || (f = []),
                        p || (p = []),
                        r(e, n, o, t, d, f, p);
                    else {
                        var a = e[o]
                          , s = d ? d(a, i, o, e, n) : void 0
                          , c = void 0 === s;
                        c && (s = i),
                        void 0 === s && (!h || o in e) || !c && (s == s ? s === a : a != a) || (e[o] = s)
                    }
                }),
                e
            }
        }
        , function(t, e, n) {
            var i = n(132)
              , r = n(29)
              , o = n(31)
              , a = n(22)
              , s = n(136)
              , u = n(71)
              , c = n(140);
            t.exports = function(t, e, n, l, d, f, p) {
                for (var h = f.length, v = e[n]; h--; )
                    if (f[h] == v)
                        return void (t[n] = p[h]);
                var g = t[n]
                  , _ = d ? d(g, v, n, t, e) : void 0
                  , m = void 0 === _;
                m && (_ = v,
                a(v) && (o(v) || u(v)) ? _ = o(g) ? g : a(g) ? i(g) : [] : s(v) || r(v) ? _ = r(g) ? c(g) : s(g) ? g : {} : m = !1),
                f.push(v),
                p.push(_),
                m ? t[n] = l(_, v, d, f, p) : (_ == _ ? _ !== g : g == g) && (t[n] = _)
            }
        }
        , function(t, e) {
            t.exports = function(t, e) {
                var n = -1
                  , i = t.length;
                for (e || (e = Array(i)); ++n < i; )
                    e[n] = t[n];
                return e
            }
        }
        , function(t, e, n) {
            var i = n(134)("length");
            t.exports = i
        }
        , function(t, e, n) {
            var i = n(67);
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : i(e)[t]
                }
            }
        }
        , function(t, e, n) {
            var i = n(69)
              , r = n(70)
              , o = n(7)
              , a = /^\[object .+?Constructor\]$/
              , s = Object.prototype
              , u = Function.prototype.toString
              , c = s.hasOwnProperty
              , l = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return null != t && (i(t) ? l.test(u.call(t)) : o(t) && (r(t) ? l : a).test(t))
            }
        }
        , function(t, e, n) {
            var i = n(137)
              , r = n(29)
              , o = n(70)
              , a = n(7)
              , s = n(30)
              , u = "[object Object]"
              , c = Object.prototype
              , l = c.hasOwnProperty
              , d = c.toString;
            t.exports = function(t) {
                var e, n;
                return !(!a(t) || d.call(t) != u || o(t) || r(t) || !(l.call(t, "constructor") || "function" != typeof (e = t.constructor) || e instanceof e)) && (s.ownLast ? (i(t, function(t, e, i) {
                    return n = l.call(i, e),
                    !1
                }),
                !1 !== n) : (i(t, function(t, e) {
                    n = e
                }),
                void 0 === n || l.call(t, n)))
            }
        }
        , function(t, e, n) {
            var i = n(138)
              , r = n(49);
            t.exports = function(t, e) {
                return i(t, e, r)
            }
        }
        , function(t, e, n) {
            var i = n(139)();
            t.exports = i
        }
        , function(t, e, n) {
            var i = n(67);
            t.exports = function(t) {
                return function(e, n, r) {
                    for (var o = i(e), a = r(e), s = a.length, u = t ? s : -1; t ? u-- : ++u < s; ) {
                        var c = a[u];
                        if (!1 === n(o[c], c, o))
                            break
                    }
                    return e
                }
            }
        }
        , function(t, e, n) {
            var i = n(141)
              , r = n(49);
            t.exports = function(t) {
                return i(t, r(t))
            }
        }
        , function(t, e) {
            t.exports = function(t, e, n) {
                n || (n = {});
                for (var i = -1, r = e.length; ++i < r; ) {
                    var o = e[i];
                    n[o] = t[o]
                }
                return n
            }
        }
        , function(t, e, n) {
            var i = n(68)
              , r = n(22)
              , o = n(14)
              , a = n(143)
              , s = n(30)
              , u = i(Object, "keys")
              , c = u ? function(t) {
                var e = null == t ? void 0 : t.constructor;
                return "function" == typeof e && e.prototype === t || ("function" == typeof t ? s.enumPrototypes : r(t)) ? a(t) : o(t) ? u(t) : []
            }
            : a;
            t.exports = c
        }
        , function(t, e, n) {
            var i = n(29)
              , r = n(31)
              , o = n(50)
              , a = n(23)
              , s = n(48)
              , u = n(49)
              , c = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                for (var e = u(t), n = e.length, l = n && t.length, d = !!l && a(l) && (r(t) || i(t) || s(t)), f = -1, p = []; ++f < n; ) {
                    var h = e[f];
                    (d && o(h, l) || c.call(t, h)) && p.push(h)
                }
                return p
            }
        }
        , function(t, e, n) {
            var i = n(145)
              , r = n(147)
              , o = n(148);
            t.exports = function(t) {
                return o(function(e, n) {
                    var o = -1
                      , a = null == e ? 0 : n.length
                      , s = a > 2 ? n[a - 2] : void 0
                      , u = a > 2 ? n[2] : void 0
                      , c = a > 1 ? n[a - 1] : void 0;
                    for ("function" == typeof s ? (s = i(s, c, 5),
                    a -= 2) : a -= (s = "function" == typeof c ? c : void 0) ? 1 : 0,
                    u && r(n[0], n[1], u) && (s = a < 3 ? void 0 : s,
                    a = 1); ++o < a; ) {
                        var l = n[o];
                        l && t(e, l, s)
                    }
                    return e
                })
            }
        }
        , function(t, e, n) {
            var i = n(146);
            t.exports = function(t, e, n) {
                if ("function" != typeof t)
                    return i;
                if (void 0 === e)
                    return t;
                switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    }
                    ;
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    }
                    ;
                case 4:
                    return function(n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    }
                    ;
                case 5:
                    return function(n, i, r, o, a) {
                        return t.call(e, n, i, r, o, a)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                return t
            }
        }
        , function(t, e, n) {
            var i = n(22)
              , r = n(50)
              , o = n(14);
            t.exports = function(t, e, n) {
                if (!o(n))
                    return !1;
                var a = typeof e;
                if ("number" == a ? i(n) && r(e, n.length) : "string" == a && e in n) {
                    var s = n[e];
                    return t == t ? t === s : s != s
                }
                return !1
            }
        }
        , function(t, e) {
            var n = "Expected a function"
              , i = Math.max;
            t.exports = function(t, e) {
                if ("function" != typeof t)
                    throw new TypeError(n);
                return e = i(void 0 === e ? t.length - 1 : +e || 0, 0),
                function() {
                    for (var n = arguments, r = -1, o = i(n.length - e, 0), a = Array(o); ++r < o; )
                        a[r] = n[e + r];
                    switch (e) {
                    case 0:
                        return t.call(this, a);
                    case 1:
                        return t.call(this, n[0], a);
                    case 2:
                        return t.call(this, n[0], n[1], a)
                    }
                    var s = Array(e + 1);
                    for (r = -1; ++r < e; )
                        s[r] = n[r];
                    return s[e] = a,
                    t.apply(this, s)
                }
            }
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(n(1))
              , a = r(n(2))
              , s = r(n(15))
              , u = r(n(16))
              , c = i(n(13))
              , l = i((r((r(n(47)),
            n(21))),
            n(32)))
              , d = i(n(51))
              , f = r(n(28))
              , p = r(n(20))
              , h = r(n(12))
              , v = function(t) {
                function e(t) {
                    (0,
                    o.default)(this, e);
                    var n = (0,
                    s.default)(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, h.default.VIDEO_TIMEUPDATE));
                    return n.videox = t,
                    n.options = n.videox.config,
                    n.media = n.videox.videoDom,
                    n.parent_ = n.videox.controlBar.el,
                    n.el = n.getProgressEl(),
                    n.totalTimeEl = c.$(".J_TotalTime", n.el),
                    n.currentTimeEl = c.$(".J_CurrentTime", n.el),
                    n.progressBarEl = c.$(".J_ProgressBar", n.el),
                    n.progressEl = c.$(".J_Progress", n.el),
                    n.videox.videoDom.addEventListener("loadedmetadata", function(t) {
                        n.updateTimeCount_(t)
                    }),
                    n.bindEvent(),
                    n._addEventListener(),
                    n
                }
                return (0,
                u.default)(e, t),
                (0,
                a.default)(e, [{
                    key: "_addEventListener",
                    value: function() {
                        this.videox.on(p.default.INIT, this.onInit.bind(this)),
                        this.videox.on(h.default.VIDEO_TIMEUPDATE, this.onVideoTimeupdate.bind(this))
                    }
                }, {
                    key: "onInit",
                    value: function() {}
                }, {
                    key: "onVideoTimeupdate",
                    value: function(t) {
                        this.timeupdate(t)
                    }
                }, {
                    key: "getProgressEl",
                    value: function() {
                        var t = !0 === this.options.live ? "vjs-hidden" : ""
                          , e = c.createEl("div", {
                            className: "vjs-progress-bar " + t,
                            innerHTML: '\n        <span class="current-time"><em class="J_CurrentTime">00:00</em></span>\n        <span class="progress-bar J_ProgressBar">\n          <span class="progress J_Progress">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n        <span class="total-time"><em class="J_TotalTime">--:--</em></span>\n      '
                        });
                        return c.appendContent(c.$(".progress-wrap", this.parent_), e),
                        e
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this
                          , e = !1
                          , n = !1
                          , i = ""
                          , r = this.videox.videoDom
                          , o = function(i) {
                            t.progressing = !0,
                            e = !0,
                            n = !r.paused,
                            t.setMediaProgress(i)
                        }
                          , a = function(r) {
                            console.log(r.type + ":::mouseUp"),
                            r.preventDefault(),
                            clearInterval(i),
                            e = !1,
                            1 == n && (n = !1),
                            t.progressing = !1
                        }
                          , s = function(n) {
                            n.preventDefault(),
                            !0 === e && (i = setInterval(t.setMediaProgress(n), 1e3))
                        };
                        d.on(this.el, "touchstart", function(t) {
                            return o(t)
                        }),
                        d.on(this.el, "touchmove", function(t) {
                            return s(t)
                        }),
                        d.on(this.el, "touchend", function(t) {
                            return a(t)
                        }),
                        d.on(this.el, "mousedown", function(t) {
                            return o(t)
                        }),
                        d.on(this.el, "mousemove", function(t) {
                            return s(t)
                        }),
                        d.on(this.el, "mouseup", function(t) {
                            return a(t)
                        })
                    }
                }, {
                    key: "setMediaProgress",
                    value: function(t) {
                        var e = this.media
                          , n = this.timeFromCursorPosition(this.progressBarEl, t, e.duration);
                        e.currentTime = n,
                        this.updateProgress_()
                    }
                }, {
                    key: "timeFromCursorPosition",
                    value: function(t, e, n) {
                        var i = t.getBoundingClientRect()
                          , r = (e.clientX || e.changedTouches[0].clientX) - i.left
                          , o = i.width;
                        return l.aliapp && "TB" == l.aliapp.appname && l.os.isAndroid && (r = (e.clientY || e.changedTouches[0].clientY) - i.top,
                        o = i.height),
                        r / o * n
                    }
                }, {
                    key: "timeupdate",
                    value: function(t) {
                        this.updateProgress_(t),
                        this.updateTimeCount_(t)
                    }
                }, {
                    key: "updateProgress_",
                    value: function(t) {
                        var e = this.media
                          , n = 0;
                        e.currentTime > 0 && (n = 100 / e.duration * e.currentTime),
                        this.progressEl.style.width = n + "%"
                    }
                }, {
                    key: "updateTimeCount_",
                    value: function(t) {
                        var e = this.media
                          , n = this.formatTime(e.currentTime)
                          , i = this.formatTime(e.duration);
                        !0 === isNaN(e.duration) && (i = "00:00"),
                        this.currentTimeEl.innerHTML = n,
                        this.totalTimeEl.innerHTML = i
                    }
                }, {
                    key: "formatTime",
                    value: function(t) {
                        return Math.floor(t / 60) + ":" + ("0" + parseInt(t % 60, 10)).slice(-2)
                    }
                }, {
                    key: "setTimeline",
                    value: function(t) {
                        var e = c.createEl("span", {
                            className: "vjs-progress-tag"
                        })
                          , n = 100 / this.media.duration * t;
                        return e.style.left = n + "%",
                        c.appendContent(this.progressBarEl, e),
                        e
                    }
                }]),
                e
            }(f.default);
            e.default = v
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r, o, a = i(n(33)), s = i(n(72)), u = window.navigator.userAgent, c = !1, l = "", d = "", f = "";
            (o = u.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (r = o[1]),
            (o = u.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (c = !0,
            l = o[1],
            f = o[2],
            d = l.indexOf("-PD") > 0 ? s.default.isIOS ? "iPad" : s.default.isAndroid ? "AndroidPad" : s.default.name : s.default.name),
            !l && u.indexOf("TBIOS") > 0 && (l = "TB");
            var p = window._ua_popLayer || ""
              , h = !1
              , v = "";
            p && (o = p.match(/PopLayer\/([\d\.]+)/i)) && (h = !0,
            v = o[1]),
            c && (c = {
                windvane: new a.default(r || "0.0.0"),
                appname: l || "unkown",
                version: new a.default(f || "0.0.0"),
                platform: d || s.default.name,
                poplayer: h || !1,
                poplayerVersion: new a.default(v || "0.0.0")
            }),
            e.default = c
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, r, o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(33)), a = window.navigator.userAgent;
            (r = a.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? i = {
                name: "UC",
                isUC: !0,
                version: new o.default(r[1])
            } : (r = a.match(/MQQBrowser\/([\d\.]+)/)) ? i = {
                name: "QQ",
                isQQ: !0,
                version: new o.default(r[1])
            } : (r = a.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? i = {
                name: "Firefox",
                isFirefox: !0,
                version: new o.default(r[1])
            } : (r = a.match(/MSIE\s([\d\.]+)/)) || (r = a.match(/IEMobile\/([\d\.]+)/)) ? (i = {
                version: new o.default(r[1])
            },
            a.match(/IEMobile/) ? (i.name = "IEMobile",
            i.isIEMobile = !0) : (i.name = "IE",
            i.isIE = !0),
            a.match(/Android|iPhone/) && (i.isIELikeWebkit = !0)) : (r = a.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (i = {
                name: "Chrome",
                isChrome: !0,
                version: new o.default(r[1])
            },
            a.match(/Version\/[\d+\.]+\s*Chrome/) && (i.name = "Chrome Webview",
            i.isWebview = !0)) : a.match(/Safari/) && (r = a.match(/Android[\s\/]([\d\.]+)/)) ? i = {
                name: "Android",
                isAndroid: !0,
                version: new o.default(r[1])
            } : a.match(/iPhone|iPad|iPod/) && (a.match(/Safari/) && (r = a.match(/Version\/([\d\.]+)/)) ? i = {
                name: "Safari",
                isSafari: !0,
                version: new o.default(r[1])
            } : (r = a.match(/OS ([\d_\.]+) like Mac OS X/)) && (i = {
                name: "iOS Webview",
                isWebview: !0,
                version: new o.default(r[1].replace(/\_/g, "."))
            })),
            i || (i = {
                name: "unknown",
                version: new o.default("0.0.0")
            }),
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, r = window.navigator.userAgent;
            i = r.match(/Weibo/i) ? {
                appname: "Weibo",
                isWeibo: !0
            } : !!r.match(/MicroMessenger/i) && {
                appname: "Weixin",
                isWeixin: !0
            },
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {}
              , r = window.location.search.replace(/^\?/, "");
            if (r)
                for (var o = r.split("&"), a = 0; a < o.length; a++) {
                    o[a] = o[a].split("=");
                    try {
                        i[o[a][0]] = decodeURIComponent(o[a][1])
                    } catch (t) {
                        i[o[a][0]] = o[a][1]
                    }
                }
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                if (t && t.__esModule)
                    return t;
                var e = {};
                if (null != t)
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t,
                e
            }
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(n(1))
              , a = r(n(2))
              , s = r(n(15))
              , u = r(n(16))
              , c = i(n(13))
              , l = i((i((r((r(n(47)),
            n(21))),
            n(32))),
            n(51)))
              , d = r(n(28))
              , f = r(n(20))
              , p = r(n(12))
              , h = function(t) {
                function e(t) {
                    (0,
                    o.default)(this, e);
                    var n = (0,
                    s.default)(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return n.videox = t,
                    n.media = n.videox.videoDom,
                    n.parent_ = n.videox.controlBar.el,
                    n.el = n.getVolumeEl(),
                    n.progressBarEl = c.$(".J_VolumeBar", n.el),
                    n.progressEl = c.$(".J_Volume", n.el),
                    n.volumeIcon = c.$(".J_VolumeIcon", n.el),
                    n.initStatus(),
                    n.bindEvent(),
                    n._addEventListener(),
                    n.loadImage(),
                    n
                }
                return (0,
                u.default)(e, t),
                (0,
                a.default)(e, [{
                    key: "initStatus",
                    value: function() {
                        this.updateVolumn_()
                    }
                }, {
                    key: "getVolumeEl",
                    value: function() {
                        var t = c.createEl("div", {
                            className: "vjs-volume-bar",
                            innerHTML: '\n        <span class="vjs-icon-volume J_VolumeIcon"></span>\n        <span class="volume-bar J_VolumeBar">\n          <span class="volume J_Volume">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n      '
                        });
                        return c.appendContent(c.$(".volume-wrap", this.parent_), t),
                        t
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this
                          , e = !1
                          , n = ""
                          , i = (this.media,
                        function(n) {
                            t.progressing = !0,
                            e = !0,
                            t.setMediaVolume(n)
                        }
                        )
                          , r = function(i) {
                            i.preventDefault(),
                            clearInterval(n),
                            e = !1,
                            t.progressing = !1
                        }
                          , o = function(i) {
                            i.preventDefault(),
                            !0 === e && (n = setInterval(t.setMediaVolume(i), 1e3))
                        }
                          , a = function(e) {
                            var n = t.media;
                            n.muted = !n.muted
                        };
                        l.on(this.el, "touchstart", function(t) {
                            return i(t)
                        }),
                        l.on(this.el, "touchmove", function(t) {
                            return o(t)
                        }),
                        l.on(this.el, "touchend", function(t) {
                            return r(t)
                        }),
                        l.on(this.volumeIcon, "touch", function(t) {
                            return a()
                        }),
                        l.on(this.el, "mousedown", function(t) {
                            return i(t)
                        }),
                        l.on(this.el, "mousemove", function(t) {
                            return o(t)
                        }),
                        l.on(this.el, "mouseup", function(t) {
                            return r(t)
                        }),
                        l.on(this.volumeIcon, "click", function(t) {
                            return a()
                        })
                    }
                }, {
                    key: "_addEventListener",
                    value: function() {
                        this.videox.on(f.default.INIT, this.volumeupdate.bind(this)),
                        this.videox.on(p.default.VIDEO_VOLUMECHANGE, this.volumeupdate.bind(this))
                    }
                }, {
                    key: "loadImage",
                    value: function() {
                        (new Image).src = "//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png",
                        (new Image).src = "//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png"
                    }
                }, {
                    key: "setMediaMutedStatus",
                    value: function(t) {
                        this.media.muted ? c.addElClass(this.volumeIcon, "vjs-icon-volume-muted") : c.removeElClass(this.volumeIcon, "vjs-icon-volume-muted")
                    }
                }, {
                    key: "setMediaVolume",
                    value: function(t) {
                        var e = this.media
                          , n = this.volumeFromCursorPosition(this.progressBarEl, t, 1);
                        n < 0 || n > 1 || (e.volume = n,
                        this.updateVolumn_())
                    }
                }, {
                    key: "volumeFromCursorPosition",
                    value: function(t, e, n) {
                        var i = t.getBoundingClientRect();
                        return ((e.clientX || e.changedTouches[0].clientX) - i.left) / i.width * n
                    }
                }, {
                    key: "updateVolumn_",
                    value: function() {
                        var t = this.media
                          , e = (t.muted,
                        0);
                        t.volume > 0 && (e = 100 * t.volume),
                        this.progressEl.style.width = e + "%",
                        this.setMediaMutedStatus(t)
                    }
                }, {
                    key: "volumeupdate",
                    value: function() {
                        this.updateVolumn_()
                    }
                }]),
                e
            }(d.default);
            e.default = h
        }
        , function(t, e) {
            "undefined" == typeof window && (window = {
                ctrl: {},
                lib: {}
            }),
            !window.ctrl && (window.ctrl = {}),
            !window.lib && (window.lib = {}),
            function(t, e) {
                function n(t, e) {
                    t = t.toString().split("."),
                    e = e.toString().split(".");
                    for (var n = 0; n < t.length || n < e.length; n++) {
                        var i = parseInt(t[n], 10)
                          , r = parseInt(e[n], 10);
                        if (window.isNaN(i) && (i = 0),
                        window.isNaN(r) && (r = 0),
                        r > i)
                            return -1;
                        if (i > r)
                            return 1
                    }
                    return 0
                }
                var i = t.Promise
                  , r = t.document
                  , o = t.navigator.userAgent
                  , a = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o)
                  , s = a && t.WindVane_Win_Private && t.WindVane_Win_Private.call
                  , u = /iPhone|iPad|iPod/i.test(o)
                  , c = /Android/i.test(o)
                  , l = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/)
                  , d = Object.prototype.hasOwnProperty
                  , f = e.windvane = t.WindVane || (t.WindVane = {
                    version: "2.1.12"
                })
                  , p = Math.floor(65536 * Math.random())
                  , h = 1
                  , v = []
                  , g = "hybrid"
                  , _ = "iframe_"
                  , m = "param_"
                  , b = {
                    isAvailable: 1 === n(l = l ? (l[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", "0"),
                    isNewBridgeAvailable: 1 === n(l, c ? "8.3.0" : "8.2.0"),
                    call2: function(t, e, n, i, r) {
                        var o = t.indexOf(".");
                        return b.call(t.substr(0, o), t.substr(o + 1), e, n, i, r)
                    },
                    call: function(e, n, r, o, a, s) {
                        var u, l;
                        if ("number" == typeof arguments[arguments.length - 1] && (s = arguments[arguments.length - 1]),
                        "function" != typeof o && (o = null),
                        "function" != typeof a && (a = null),
                        !i || o || a || (l = new i(function(t, e) {
                            o = t,
                            a = e
                        }
                        )),
                        !c && b.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.call)
                            return t.__windvane__.call(e + "." + n, r, o, a, s),
                            l;
                        u = y.getSid();
                        var d = {
                            success: o,
                            failure: a
                        };
                        return s > 0 && (d.timeout = setTimeout(function() {
                            b.onFailure(u, {
                                ret: "HY_TIMEOUT"
                            })
                        }, s)),
                        y.registerCall(u, d),
                        y.registerGC(u, s),
                        b.isAvailable ? y.callMethod(e, n, r, u) : b.onFailure(u, {
                            ret: "HY_NOT_IN_WINDVANE"
                        }),
                        l
                    },
                    fireEvent: function(t, e, n) {
                        var i = r.createEvent("HTMLEvents");
                        i.initEvent(t, !1, !0),
                        i.param = y.parseData(e),
                        r.dispatchEvent(i)
                    },
                    getParam: function(t) {
                        return y.getParam(t)
                    },
                    setData: function(t, e) {},
                    find: function(t, e) {
                        e || y.unregisterCall(t, !1)
                    },
                    onSuccess: function(t, e, n) {
                        y.onComplete(t, e, "success", n)
                    },
                    onFailure: function(t, e) {
                        y.onComplete(t, e, "failure")
                    }
                };
                b.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.callSync && (b.callSync = function(e, n) {
                    if (u)
                        return t.__windvane__.callSync(e, n);
                    if (c) {
                        var i = {
                            name: e
                        };
                        n && (i.params = JSON.stringify(n));
                        var r = t.__windvane__.callSync(i);
                        if (r)
                            try {
                                return JSON.parse(r)
                            } catch (t) {}
                    }
                }
                );
                var y = {
                    params: {},
                    calls: {},
                    getSid: function() {
                        return (p + h++) % 65536 + ""
                    },
                    buildParam: function(t) {
                        return t && "object" == typeof t ? JSON.stringify(t) : t || ""
                    },
                    getParam: function(t) {
                        return this.params[m + t] || ""
                    },
                    setParam: function(t, e) {
                        this.params[m + t] = e
                    },
                    parseData: function(t) {
                        var e;
                        if (t && "string" == typeof t)
                            try {
                                e = JSON.parse(t)
                            } catch (n) {
                                e = {
                                    ret: "HY_RESULT_PARSE_ERROR",
                                    originValue: t
                                }
                            }
                        else
                            e = t || {};
                        return e
                    },
                    registerCall: function(t, e) {
                        this.calls[t] = e
                    },
                    unregisterCall: function(t, e) {
                        var n = this.calls[t] || {}
                          , i = n.timeout;
                        return i && clearTimeout(i),
                        e || delete this.calls[t],
                        n
                    },
                    useIframe: function(t, e) {
                        var n = _ + t
                          , i = v.pop();
                        i || ((i = r.createElement("iframe")).setAttribute("frameborder", "0"),
                        i.style.cssText = "width:0;height:0;border:0;display:none;"),
                        i.setAttribute("id", n),
                        i.setAttribute("src", e),
                        i.parentNode || setTimeout(function() {
                            r.body.appendChild(i)
                        }, 5)
                    },
                    retrieveIframe: function(t) {
                        var e = _ + t
                          , n = r.querySelector("#" + e);
                        if (n)
                            if (v.length >= 3)
                                try {
                                    r.body.removeChild(n)
                                } catch (t) {}
                            else
                                v.indexOf(n) < 0 && v.push(n)
                    },
                    callMethod: function(e, n, i, r) {
                        var o = y.buildParam(i);
                        if (a)
                            s ? t.WindVane_Win_Private.call(e, n, r, o) : this.onComplete(r, {
                                ret: "HY_NO_HANDLER_ON_WP"
                            }, "failure");
                        else if (u) {
                            this.setParam(r, o);
                            var l = g + "://" + e + ":" + r + "/" + n + "?" + encodeURIComponent(o);
                            this.useIframe(r, l)
                        } else if (c) {
                            this.setParam(r, i);
                            l = g + "://" + e + ":" + r + "/" + n + "?" + o;
                            window.prompt(l, "wv_hybrid:")
                        } else
                            this.onComplete(r, {
                                ret: "HY_NOT_SUPPORT_DEVICE"
                            }, "failure")
                    },
                    registerGC: function(t, e) {
                        var n = this
                          , i = Math.max(e || 0, 6e5)
                          , r = Math.max(e || 0, 6e4);
                        setTimeout(function() {
                            n.unregisterCall(t)
                        }, i),
                        u && setTimeout(function() {
                            n.params[m + t] && delete n.params[m + t]
                        }, r)
                    },
                    onComplete: function(t, e, n, i) {
                        var r = this.unregisterCall(t, i)
                          , o = r.success
                          , a = r.failure
                          , s = (e = this.parseData(e)).ret;
                        "string" == typeof s && ((e = e.value || e).ret || (e.ret = [s])),
                        "success" === n ? o && o(e) : "failure" === n && a && a(e),
                        u && (this.retrieveIframe(t),
                        this.params[m + t] && delete this.params[m + t])
                    }
                };
                for (var w in b)
                    d.call(f, w) || (f[w] = b[w])
            }(window, window.lib || (window.lib = {})),
            t.exports = window.lib.windvane
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.HttpURL = e.VideoTool = e.version = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , o = i(n(157))
              , a = i(n(74))
              , s = (new o.default).version;
            "function" == typeof alert && ("undefined" == typeof console || r(console)),
            e.version = s,
            e.VideoTool = o.default,
            e.HttpURL = a.default
        }
        , function(t, e, n) {
            "use strict";
            (function(t) {
                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value"in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n),
                        i && t(e, i),
                        e
                    }
                }()
                  , o = i(n(158))
                  , a = i(n(162))
                  , s = i(n(73))
                  , u = t.env.VERSION
                  , c = function() {
                    function t() {
                        (function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        )(this, t),
                        this.version = u
                    }
                    return r(t, [{
                        key: "getFileType",
                        value: function(t) {
                            return (0,
                            s.default)(t)
                        }
                    }, {
                        key: "getDuration",
                        value: function(t) {
                            return (0,
                            o.default)(t)
                        }
                    }, {
                        key: "canPlay",
                        value: function(t) {
                            return (0,
                            a.default)(t)
                        }
                    }]),
                    t
                }();
                e.default = c
            }
            ).call(e, n(79))
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(73))
              , o = i(n(159))
              , a = n(161)
              , s = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""),"g")
              , u = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/
              , c = function(t, e) {
                var n = t.data;
                0 === n.indexOf("#EXTM3U") && n.indexOf("#EXTINF:") > 0 && e(function(t, e, n, i) {
                    var r, o, a = 0, c = {};
                    for (s.lastIndex = 0; null !== (r = s.exec(t)); ) {
                        var l = r[1];
                        if (l)
                            c.duration = parseFloat(l);
                        else if (r[3])
                            isNaN(c.duration) || (a += c.duration);
                        else if (r[4])
                            ;
                        else if (r[5])
                            ;
                        else
                            for (r = r[0].match(u),
                            o = 1; o < r.length && void 0 === r[o]; o++)
                                ;
                    }
                    return a
                }(n)),
                e(void 0)
            };
            e.default = function(t) {
                var e = (0,
                r.default)(t);
                return new Promise(function(n, i) {
                    if ("mp4" == e)
                        return function(t, e) {
                            var n = document.createElement("video");
                            n.src = t,
                            n.preload = "metadata",
                            n.onloadedmetadata = function() {
                                e(n.duration),
                                n = null
                            }
                        }(t, n);
                    if ("m3u8" == e) {
                        var r = new o.default
                          , s = {
                            url: t,
                            responseType: ""
                        };
                        r.load(s, a.loaderConfig, {
                            onSuccess: function(t) {
                                c(t, n)
                            }
                        })
                    } else
                        n(void 0)
                }
                )
            }
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n),
                    i && t(e, i),
                    e
                }
            }()
              , r = n(160)
              , o = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, t),
                    e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }
                return i(t, [{
                    key: "destroy",
                    value: function() {
                        this.abort(),
                        this.loader = null
                    }
                }, {
                    key: "abort",
                    value: function() {
                        var t = this.loader;
                        t && 4 !== t.readyState && (this.stats.aborted = !0,
                        t.abort()),
                        window.clearTimeout(this.requestTimeout),
                        this.requestTimeout = null,
                        window.clearTimeout(this.retryTimeout),
                        this.retryTimeout = null
                    }
                }, {
                    key: "load",
                    value: function(t, e, n) {
                        this.context = t,
                        this.config = e,
                        this.callbacks = n,
                        this.stats = {
                            trequest: performance.now(),
                            retry: 0
                        },
                        this.retryDelay = e.retryDelay,
                        this.loadInternal()
                    }
                }, {
                    key: "loadInternal",
                    value: function() {
                        var t, e = this.context;
                        t = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest;
                        var n = this.stats;
                        n.tfirst = 0,
                        n.loaded = 0;
                        var i = this.xhrSetup;
                        try {
                            if (i)
                                try {
                                    i(t, e.url)
                                } catch (n) {
                                    t.open("GET", e.url, !0),
                                    i(t, e.url)
                                }
                            t.readyState || t.open("GET", e.url, !0)
                        } catch (n) {
                            return void this.callbacks.onError({
                                code: t.status,
                                text: n.message
                            }, e, t)
                        }
                        e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)),
                        t.onreadystatechange = this.readystatechange.bind(this),
                        t.onprogress = this.loadprogress.bind(this),
                        t.responseType = e.responseType,
                        this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                        t.send()
                    }
                }, {
                    key: "readystatechange",
                    value: function(t) {
                        var e = t.currentTarget
                          , n = e.readyState
                          , i = this.stats
                          , o = this.context
                          , a = this.config;
                        if (!i.aborted && n >= 2)
                            if (window.clearTimeout(this.requestTimeout),
                            0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)),
                            4 === n) {
                                var s = e.status;
                                if (s >= 200 && s < 300) {
                                    i.tload = Math.max(i.tfirst, performance.now());
                                    var u = void 0
                                      , c = void 0;
                                    "arraybuffer" === o.responseType ? c = (u = e.response).byteLength : c = (u = e.responseText).length,
                                    i.loaded = i.total = c;
                                    var l = {
                                        url: e.responseURL,
                                        data: u
                                    };
                                    this.callbacks.onSuccess(l, i, o, e)
                                } else
                                    i.retry >= a.maxRetry || s >= 400 && s < 499 ? (r.logger.error(s + " while loading " + o.url),
                                    this.callbacks.onError({
                                        code: s,
                                        text: e.statusText
                                    }, o, e)) : (r.logger.warn(s + " while loading " + o.url + ", retrying in " + this.retryDelay + "..."),
                                    this.destroy(),
                                    this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                                    this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay),
                                    i.retry++)
                            } else
                                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                    }
                }, {
                    key: "loadtimeout",
                    value: function() {
                        r.logger.warn("timeout while loading " + this.context.url),
                        this.callbacks.onTimeout(this.stats, this.context, null)
                    }
                }, {
                    key: "loadprogress",
                    value: function(t) {
                        var e = t.currentTarget
                          , n = this.stats;
                        n.loaded = t.loaded,
                        t.lengthComputable && (n.total = t.total);
                        var i = this.callbacks.onProgress;
                        i && i(n, this.context, null, e)
                    }
                }]),
                t
            }();
            e.default = o
        }
        , function(t, e, n) {
            "use strict";
            function i() {}
            function r(t) {
                var e = self.console[t];
                return e ? function() {
                    for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    i[0] && (i[0] = function(t, e) {
                        return "[" + t + "] > " + e
                    }(t, i[0])),
                    e.apply(self.console, i)
                }
                : i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , a = {
                trace: i,
                debug: i,
                log: i,
                warn: i,
                info: i,
                error: i
            }
              , s = a;
            e.enableLogs = function(t) {
                if (!0 === t || "object" === (void 0 === t ? "undefined" : o(t))) {
                    !function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                            n[i - 1] = arguments[i];
                        n.forEach(function(e) {
                            s[e] = t[e] ? t[e].bind(t) : r(e)
                        })
                    }(t, "debug", "log", "info", "warn", "error");
                    try {
                        s.log()
                    } catch (t) {
                        s = a
                    }
                } else
                    s = a
            }
            ,
            e.logger = s
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = e.loaderConfig = {
                maxRetry: 1,
                maxRetryDelay: 64e3,
                retryDelay: 1e3,
                timeout: 1e4
            };
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(163)
              , r = function(t) {
                var e = o(t, i.MIMETYPES);
                return 0 == e.length && (e = o(t, i.AUDIO_MIMETYPES)),
                e
            }
              , o = function(t, e, n) {
                var i = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1]
                  , r = n || i && e[i.toLowerCase()] || [];
                return r.constructor === Array ? r : [r]
            };
            e.default = function(t, e, n) {
                var i = r(t)
                  , o = document.createElement("video");
                return !!i.filter(function(t) {
                    return !!o.canPlayType(t).replace(/no/, "")
                })[0]
            }
        }
        , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = e.MIMETYPES = {
                mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240"].map(function(t) {
                    return "video/mp4; codecs=" + t + ", mp4a.40.2"
                }),
                ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                webm: ['video/webm; codecs="vp8, vorbis"'],
                mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                m3u8: ["application/x-mpegURL"]
            };
            i.ogv = i.ogg,
            i["3gp"] = i["3gpp"],
            e.AUDIO_MIMETYPES = {
                wav: ["audio/wav"],
                mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                aac: ['audio/mp4;codecs="mp4a.40.5"'],
                oga: ["audio/ogg"]
            },
            e.default = i
        }
        , function(t, e, n) {
            "use strict";
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(1))
              , o = i(n(2))
              , a = i(n(74))
              , s = i(n(12))
              , u = window.goldlog
              , c = function() {
                function t(e) {
                    (0,
                    r.default)(this, t),
                    this.options = {},
                    Object.assign(this.options, e),
                    this._initLogParams(),
                    this.initLog(),
                    this.videox = e.videox,
                    this._bindEvent(),
                    this._isPlaying = !1,
                    this._isInView = !1,
                    this._startPlayTime = 0,
                    this._playTime = 0,
                    this._startExposeTime = 0,
                    this._startSeekTime = 0
                }
                return (0,
                o.default)(t, [{
                    key: "_initLogParams",
                    value: function() {
                        var t = "";
                        try {
                            t = new a.default(this.options.url)
                        } catch (t) {
                            return void console.error(t, "url不合法")
                        }
                        var e = t.pathname.split(".").pop()
                          , n = ""
                          , i = "unkown"
                          , r = this.options.live ? "live" : "video";
                        switch (e) {
                        case "m3u8":
                            i = t.pathname.split("/")[1],
                            n = t.pathname.split("/")[2].split(".")[0];
                            break;
                        case "mp4":
                            i = "tbvideo",
                            n = t.pathname.split("/").pop().split(".")[0];
                            break;
                        case "flv":
                            i = t.pathname.split("/")[1],
                            n = t.pathname.split("/")[2].split(".")[0]
                        }
                        this.logParams = {
                            app: i,
                            media_id: n,
                            ext: e,
                            video_type: r,
                            from: this.options.from
                        }
                    }
                }, {
                    key: "_bindEvent",
                    value: function() {
                        var t = this
                          , e = this.videox;
                        e.on(s.default.VIDEO_PLAY, function(e) {
                            t._isPlaying = !0,
                            t._recordStartTime()
                        }),
                        e.on(s.default.VIDEO_PAUSE, function(e) {
                            t._isPlaying = !1,
                            t._addPlayTime()
                        }),
                        e.on(s.default.VIDEO_ERROR, function(e) {
                            t.errorLog(e)
                        }),
                        e.on(s.default.VIDEO_SEEKING, function(e) {
                            t.seekLog(),
                            t._recordStartSeekTime()
                        }),
                        e.on(s.default.VIDEO_SEEKED, function(e) {
                            t.seekLog()
                        }),
                        document.addEventListener("visibilitychange", function(e) {
                            "hidden" === document.visibilityState && (t._addPlayTime(),
                            t.exposeLog(),
                            t.playTimeLog())
                        });
                        var n = function() {
                            var e = t._getOffset(window)
                              , n = t._getOffset(t.videox.getVideoEl())
                              , i = t._compareOffset(e, n);
                            i && !t._isInView ? (t._isInView = !0,
                            t._recordStartExposeTime(),
                            t._isPlaying && t._recordStartTime()) : !i && t._isInView && (t._isInView = !1,
                            t.exposeLog(),
                            t._isPlaying && t._addPlayTime())
                        };
                        document.addEventListener("scroll", this._throttle(n, 300)),
                        n()
                    }
                }, {
                    key: "_throttle",
                    value: function(t, e) {
                        var n = (Date.now(),
                        0)
                          , i = null
                          , r = void 0
                          , o = void 0
                          , a = void 0
                          , s = function() {
                            n = Date.now(),
                            i = null,
                            t.apply(r, o)
                        };
                        return function() {
                            var u = Date.now();
                            r = this,
                            o = arguments;
                            var c = e - (u - n);
                            return c <= 0 || c >= e ? (clearTimeout(i),
                            i = null,
                            a = t.apply(r, o)) : null == i && (i = setTimeout(s, c)),
                            a
                        }
                    }
                }, {
                    key: "_addPlayTime",
                    value: function() {
                        this._startPlayTime > 0 && (this._playTime += Date.now() - this._startPlayTime)
                    }
                }, {
                    key: "_recordStartTime",
                    value: function() {
                        this._startPlayTime = Date.now()
                    }
                }, {
                    key: "_recordStartExposeTime",
                    value: function() {
                        this._startExposeTime = Date.now()
                    }
                }, {
                    key: "_recordStartSeekTime",
                    value: function() {
                        this._startSeekTime = this.videox.getVideoEl().currentTime
                    }
                }, {
                    key: "_getOffset",
                    value: function(t, e) {
                        var n, i, r, o, a = window.innerHeight, s = window.innerWidth;
                        if (t)
                            return e || (e = {
                                x: 0,
                                y: 0
                            }),
                            t != window ? (n = (t = t.getBoundingClientRect()).left,
                            i = t.top,
                            r = t.right,
                            o = t.bottom) : (r = (n = 0) + s,
                            o = (i = 0) + a),
                            e.w && (r = e.w),
                            e.h && (i = a - e.h),
                            {
                                left: n,
                                top: i,
                                right: r + e.x,
                                bottom: o + e.y
                            }
                    }
                }, {
                    key: "_compareOffset",
                    value: function(t, e) {
                        var n = e.right > t.left && e.left < t.right
                          , i = e.bottom > t.top && e.top < t.bottom;
                        return n && i
                    }
                }, {
                    key: "_getLogParamsString",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , e = this.logParams
                          , n = Object.keys(e).map(function(t) {
                            return t + "=" + e[t]
                        })
                          , i = Object.keys(t).map(function(e) {
                            return e + "=" + t[e]
                        });
                        return n.concat(i).join("&")
                    }
                }, {
                    key: "initLog",
                    value: function() {
                        var t = this._getLogParamsString();
                        u && u.record("/taobaolive.videox.init", "CLK", t, "H1479648468")
                    }
                }, {
                    key: "playLog",
                    value: function() {
                        var t = this._getLogParamsString();
                        u && u.record("/taobaolive.videox.play", "CLK", t, "H1479648494")
                    }
                }, {
                    key: "pauseLog",
                    value: function() {
                        var t = this._getLogParamsString();
                        u && u.record("/taobaolive.videox.pause", "CLK", t, "H1480571953")
                    }
                }, {
                    key: "fullScreenLog",
                    value: function() {
                        var t = this._getLogParamsString();
                        u && u.record("/taobaolive.videox.fullscreen", "CLK", t, "H1485189588")
                    }
                }, {
                    key: "playTimeLog",
                    value: function() {
                        var t = this._getLogParamsString({
                            duration: this._playTime
                        });
                        u && u.record("/taobaolive.videox.playtime", "OTHER", t, "H1483342516")
                    }
                }, {
                    key: "exposeLog",
                    value: function() {
                        var t = this._getLogParamsString({
                            duration: Date.now() - this._startExposeTime
                        });
                        u && u.record("/taobaolive.videox.expose", "EXP", t, "H1481495474")
                    }
                }, {
                    key: "errorLog",
                    value: function(t) {
                        var e = this.videox.getVideoEl().error
                          , n = e ? e.code : t.errorCode
                          , i = this._getLogParamsString({
                            error_type: n
                        });
                        u && u.record("/taobaolive.videox.error", "OTHER", i, "H1480571987")
                    }
                }, {
                    key: "seekLog",
                    value: function() {
                        var t = 1e3 * (this.videox.getVideoEl().currentTime - this._startSeekTime);
                        if (t > 10) {
                            var e = this._getLogParamsString({
                                duration: t
                            });
                            u && u.record("/taobaolive.videox.seek", "OTHER", e, "H1479648438"),
                            this._startSeekTime = 0
                        }
                    }
                }]),
                t
            }();
            e.default = c
        }
        , , , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            n(168);
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(83));
            e.default = i.default
        }
        , function(t, e, n) {
            var i = n(169);
            "string" == typeof i && (i = [[t.i, i, ""]]);
            var r = {
                transform: void 0
            };
            n(81)(i, r),
            i.locals && (t.exports = i.locals)
        }
        , function(t, e, n) {
            (t.exports = n(80)(!1)).push([t.i, '.lib-video,body,html{height:100%}.lib-video{position:relative;width:100%}.lib-video::-webkit-media-controls-start-playback-button{display:none}.lib-video video{background:#000;width:100%;height:100%}.vjs-hidden{display:none!important}.vjs-opacity-hidden{opacity:0!important}.lib-video .interact-item{display:-webkit-box;display:-webkit-flex;display:flex;width:1.173333rem;height:.533333rem;background-image:url(//gw.alicdn.com/mt/TB1_qhcPVXXXXcNXpXXXXXXXXXX-88-40.png);background-size:contain;background-repeat:no-repeat;border:none;background-color:transparent;margin-right:.266667rem;margin-left:.133333rem}.lib-video .vjs-big-play-button:before,.lib-video .vjs-control:before{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.vjs-body-fullscreen{overflow-x:hidden;overflow-y:hidden;overflow:hidden;max-width:100%}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen{position:fixed;left:0;top:0;bottom:0;right:0;z-index:100;width:100%!important;height:100%!important}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen-rotate{position:fixed;left:100%;top:0;z-index:9999;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:0 0;transform-origin:0 0}.vjs-body-fullscreen .vjs-android-bg-mask{width:100%;height:100%;position:fixed;background:#000;z-index:1;left:0;top:0}.lib-video .vjs-control-bar{width:100%;position:absolute;z-index:2;bottom:0;left:0;right:0;padding:.133333rem 0;background-image:url(//gw.alicdn.com/mt/TB1xK4uPVXXXXcRXXXXXXXXXXXX-750-80.png);background-size:cover;-webkit-transition:all .3s ease;transition:all .3s ease;opacity:1;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.lib-video .vjs-control{outline:none;position:relative;text-align:center;margin:0;padding:0;height:.533333rem;width:.533333rem;-webkit-box-flex:none;-webkit-flex:none;flex:none}.lib-video .vjs-play-control,.vjs-icon-play{left:0}.vjs-button{background:none;border:none;color:#fff;outline:none}.lib-video .vjs-play-control:before,.vjs-icon-play:before{background-image:url(//gw.alicdn.com/mt/TB1..XoPVXXXXX2XpXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.vjs-icon-volume{width:.533333rem;height:.533333rem;margin-right:.133333rem;cursor:pointer}.vjs-icon-volume:before{background-image:url(//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png);background-size:.4rem .4rem;background-repeat:no-repeat;background-position:center center;width:.533333rem;height:.533333rem;content:"";position:absolute;top:0;left:0;text-align:center}.vjs-icon-volume-muted:before{background-image:url(//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png)}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:"\\F102"}.lib-video .vjs-playing:before,.vjs-icon-pause:before{background-image:url(//gw.alicdn.com/mt/TB1gkQVPFXXXXcwXVXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video,.lib-video .vjs-fullscreen-control,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video .vjs-fullscreen-control:before,.vjs-icon-fullscreen-enter:before{background-image:url(//gw.alicdn.com/mt/TB1pIhEPVXXXXayXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video.vjs-player-fullscreen .vjs-fullscreen-control,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video.vjs-player-fullscreen-rotate .vjs-fullscreen-control:before,.lib-video.vjs-player-fullscreen .vjs-fullscreen-control:before,.vjs-icon-fullscreen-exit:before{background-image:url(//gw.alicdn.com/mt/TB1l9n5PVXXXXahXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video .vjs-control:focus,.lib-video .vjs-control:focus:before,.lib-video .vjs-control:hover:before{text-shadow:0 0 1em #fff}.lib-video .vjs-control-text{border:0;clip:rect(0 0 0 0);height:.013333rem;margin:-.013333rem;overflow:hidden;padding:0;position:absolute;width:.013333rem}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.vjs-center-container{position:absolute;left:0;right:0;bottom:0;top:0;width:1.333333rem;height:1.333333rem;text-align:center;margin:auto;z-index:2}.vjs-center-container.loading .vjs-center-load{opacity:1;display:inline-block}.vjs-center-container.loading .vjs-center-start{display:none}.vjs-center-start{width:1.333333rem;height:1.333333rem;background-image:url(https://gw.alicdn.com/mt/TB1exduPVXXXXcIXpXXXXXXXXXX-136-136.png)}.vjs-center-retry,.vjs-center-start{background-size:contain;border:none;background-repeat:no-repeat}.vjs-center-retry{width:.8rem;height:.8rem;background-image:url(https://gw.alicdn.com/mt/TB1U1JfXMfHK1Jjy1zbXXahRFXa-200-200.png)}.vjs-center-container.error{color:#fff;width:100%;height:1.066667rem;font-size:.266667rem}.error-content{opacity:0;display:none}.vjs-center-container.error .error-content{opacity:1;display:inline-block}.vjs-center-container.error .vjs-center-start,.vjs-center-load{opacity:0;display:none}.vjs-center-load{border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:.013333rem solid #fff;border-bottom-color:transparent;width:1.2rem;height:1.2rem;background:transparent!important;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vjs-center-poster,.vjs-mock-mask{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;opacity:0;z-index:1;background:#000}.vjs-center-poster{opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-position:center center}.vjs-has-started .vjs-center-container,.vjs-has-started .vjs-center-poster,.vjs-has-started .vjs-mock-mask{display:none}.vjs-flash{width:100%;height:100%}.progress-wrap{-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.progress-wrap,.volume-wrap{overflow:hidden}.vjs-progress-bar,.vjs-volume-bar{position:relative;display:inline-block;width:100%;vertical-align:top;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-progress-bar .current-time,.vjs-progress-bar .total-time{color:#fff;line-height:.373333rem;height:.373333rem;text-align:center;display:inline-block;vertical-align:middle;font-weight:400!important}.vjs-progress-bar .current-time em,.vjs-progress-bar .total-time em{display:inline-block;margin:0 .133333rem;font-size:.293333rem;font-weight:400!important;float:left;color:#fff;vertical-align:middle;font-style:normal}.vjs-progress-bar .progress-bar,.vjs-volume-bar .volume-bar{display:block;height:.04rem;border-radius:.04rem;background-color:hsla(0,0%,100%,.4);position:relative;-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.vjs-volume-bar .volume-bar{margin-right:.133333rem;width:1.6rem}.vjs-progress-bar .progress,.vjs-volume-bar .volume{width:0;top:0;left:0;background:#ff5000;position:absolute;border-radius:.04rem;height:.04rem}// .vjs-volume-bar .volume{margin-right:.133333rem}.vjs-progress-bar .progress .control,.vjs-volume-bar .volume .control{position:absolute;background:0 0;right:0;top:0}.vjs-progress-bar .progress .control:after,.vjs-volume-bar .volume .control:after{position:absolute;content:"";border-radius:100%;background:#fff;top:-.08rem;left:-.106667rem;width:.186667rem;height:.186667rem}.vjs-progress-bar .vjs-progress-tag{width:.133333rem;height:.133333rem;top:-.04rem;border-radius:100%;background:#fff;position:absolute}.vjs-danmaku-container{position:absolute;left:0;top:0;overflow:"hidden";width:100%;height:100%}.vjs-danmaku-item{-webkit-transition:all 4s linear;transition:all 4s linear;overflow:hidden;vertical-align:middle}.vjs-danmaku-item p{padding:.013333rem .053333rem .026667rem;vertical-align:middle;border-radius:.053333rem}', ""])
        }
        ])
    }
    ,
    t.exports = i()
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(105), n(106), !1, function(t) {
        n(103)
    }, "data-v-71d2be07", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(104);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("542acf92", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.message-main[data-v-71d2be07]{position:absolute;z-index:10000;left:0;top:0;width:100%;height:100%;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.message-main[data-v-71d2be07],.message-wrap[data-v-71d2be07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal\n}\n.message-wrap[data-v-71d2be07]{width:5.6rem;height:2.64rem;border-radius:.08rem;background-color:#fff;box-shadow:0 0 .12rem 0 rgba(0,0,0,.1),0 .12rem .24rem 0 rgba(0,0,0,.3);overflow:hidden;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column\n}\n.message-header[data-v-71d2be07]{width:100%;height:.64rem;background:rgba(230,235,240,.88);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:.4rem;padding-right:.266667rem;box-sizing:border-box\n}\n.message-header .tit[data-v-71d2be07]{font-size:.213333rem;color:#333\n}\n.message-header .close-btn[data-v-71d2be07]{width:.266667rem;height:.266667rem;background-repeat:no-repeat;background-position:center center;background-size:.266667rem .266667rem;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer;background-image:url(//gw.alicdn.com/tfs/TB1Mx3ZrgMPMeJjy1XcXXXpppXa-32-32.png)\n}\n.message-content[data-v-71d2be07]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:.186667rem;color:#333;line-height:1.5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:.4rem;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.message-footer[data-v-71d2be07]{height:.72rem;box-shadow:0 -.013333rem 0 0 rgba(0,0,0,.06);-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-right:.4rem\n}\n.comfirm-btn[data-v-71d2be07],.message-footer[data-v-71d2be07]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.comfirm-btn[data-v-71d2be07]{background:#3296fa;border-radius:.053333rem;padding:.106667rem .32rem;font-size:.186667rem;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:.48rem;cursor:pointer\n}\n.comfirm-btn-danger[data-v-71d2be07]{background-color:#f25643;color:#fff;margin-right:.2rem\n}\n.comfirm-btn-default[data-v-71d2be07]{background-color:#fbfbfb;color:#333;border:.013333rem solid rgba(25,31,37,.12)\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8);
    e.default = {
        props: {
            message: {
                default: ""
            },
            title: {
                default: i.i18next.t("pc_grouplive_notice")
            },
            comfirmText: {
                default: i.i18next.t("pc_grouplive_i_know")
            },
            type: {
                default: "confirm"
            },
            cancelText: {
                default: i.i18next.t("pc_grouplive_live_message_box_cancel")
            }
        },
        components: {},
        data: function() {
            return {}
        },
        created: function() {},
        mounted: function() {},
        methods: {
            close: function() {
                this.$emit("close")
            },
            comfirm: function() {
                this.$emit("comfirm")
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "message-main"
            }, [n("div", {
                staticClass: "message-wrap"
            }, [n("div", {
                staticClass: "message-header"
            }, [n("span", {
                staticClass: "tit"
            }, [t._v(t._s(t.title))]), t._v(" "), n("span", {
                staticClass: "close-btn",
                on: {
                    click: t.close
                }
            })]), t._v(" "), n("div", {
                staticClass: "message-content"
            }, [t._v("\n        " + t._s(t.message) + "\n    ")]), t._v(" "), n("div", {
                staticClass: "message-footer"
            }, ["confirm" === t.type ? n("div", {
                staticClass: "comfirm-btn",
                on: {
                    click: t.comfirm
                }
            }, [t._v(t._s(t.comfirmText))]) : t._e(), t._v(" "), "dialog" === t.type ? n("div", {
                staticClass: "comfirm-btn comfirm-btn-danger",
                on: {
                    click: t.comfirm
                }
            }, [t._v(t._s(t.comfirmText))]) : t._e(), t._v(" "), "dialog" === t.type ? n("div", {
                staticClass: "comfirm-btn comfirm-btn-default",
                on: {
                    click: t.close
                }
            }, [t._v(t._s(t.cancelText))]) : t._e()])])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(110), n(111), !1, function(t) {
        n(108)
    }, "data-v-104d8d2e", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(109);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("48a1ba2a", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.barrage-switch-wrap[data-v-104d8d2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-104d8d2e]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(https://img.alicdn.com/tfs/TB1FAHSXStYBeNjSspaXXaOOFXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-on[data-v-104d8d2e]{background-image:url(https://img.alicdn.com/tfs/TB1FAHSXStYBeNjSspaXXaOOFXa-48-48.png)\n}\n.switch-btn-off[data-v-104d8d2e]{background-image:url(https://img.alicdn.com/tfs/TB1NdybXL5TBuNjSspcXXbnGFXa-48-48.png)\n}\n.switch-btn-release[data-v-104d8d2e]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-104d8d2e]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8);
    e.default = {
        props: {
            switchOnOrOff: {
                default: !0
            }
        },
        components: {},
        data: function() {
            return {
                activitCls: "",
                tips: i.i18next.t("pc_grouplive_live_player_barrage_btn_tips")
            }
        },
        created: function() {},
        mounted: function() {},
        methods: {
            switchEvent: function() {
                var t = this;
                this.activitCls = "switch-btn-release",
                setTimeout(function() {
                    t.activitCls = ""
                }, 300),
                this.$emit("switchEvent")
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "barrage-switch-wrap"
            }, [e("div", {
                staticClass: "switch-container",
                attrs: {
                    title: this.tips
                }
            }, [e("div", {
                ref: "btn",
                class: ["switch-btn", this.switchOnOrOff ? "switch-btn-off" : "switch-btn-on", this.activitCls],
                on: {
                    click: this.switchEvent
                }
            })])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        for (; t; ) {
            var e = t
              , n = e.closed
              , r = e.destination
              , o = e.isStopped;
            if (n || o)
                return !1;
            t = r && r instanceof i.a ? r : null
        }
        return !0
    }
    ;
    var i = n(1)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        setTimeout(function() {
            throw t
        }, 0)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return null !== t && "object" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return r(t)
    }
    ,
    e.b = r;
    var i = n(49);
    function r(t) {
        return t ? 1 === t.length ? t[0] : function(e) {
            return t.reduce(function(t, e) {
                return e(t)
            }, e)
        }
        : i.a
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new o(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t) {
            this.connectable = t
        }
        return t.prototype.call = function(t, e) {
            var n = this.connectable;
            n._refCount++;
            var i = new a(t,n)
              , r = e.subscribe(i);
            return i.closed || (i.connection = n.connect()),
            r
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.connectable = n,
            i
        }
        return i.a(e, t),
        e.prototype._unsubscribe = function() {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0)
                    this.connection = null;
                else if (t._refCount = e - 1,
                e > 1)
                    this.connection = null;
                else {
                    var n = this.connection
                      , i = t._connection;
                    this.connection = null,
                    !i || n && i !== n || i.unsubscribe()
                }
            } else
                this.connection = null
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return l
    });
    var i = n(0)
      , r = n(11)
      , o = n(141)
      , a = n(9)
      , s = n(143)
      , u = n(50)
      , c = n(138)
      , l = function(t) {
        function e(e, n, i) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
            void 0 === n && (n = Number.POSITIVE_INFINITY);
            var r = t.call(this) || this;
            return r.scheduler = i,
            r._events = [],
            r._infiniteTimeWindow = !1,
            r._bufferSize = e < 1 ? 1 : e,
            r._windowTime = n < 1 ? 1 : n,
            n === Number.POSITIVE_INFINITY ? (r._infiniteTimeWindow = !0,
            r.next = r.nextInfiniteTimeWindow) : r.next = r.nextTimeWindow,
            r
        }
        return i.a(e, t),
        e.prototype.nextInfiniteTimeWindow = function(e) {
            var n = this._events;
            n.push(e),
            n.length > this._bufferSize && n.shift(),
            t.prototype.next.call(this, e)
        }
        ,
        e.prototype.nextTimeWindow = function(e) {
            this._events.push(new d(this._getNow(),e)),
            this._trimBufferThenGetEvents(),
            t.prototype.next.call(this, e)
        }
        ,
        e.prototype._subscribe = function(t) {
            var e, n = this._infiniteTimeWindow, i = n ? this._events : this._trimBufferThenGetEvents(), r = this.scheduler, o = i.length;
            if (this.closed)
                throw new u.a;
            if (this.isStopped || this.hasError ? e = a.a.EMPTY : (this.observers.push(t),
            e = new c.a(this,t)),
            r && t.add(t = new s.a(t,r)),
            n)
                for (var l = 0; l < o && !t.closed; l++)
                    t.next(i[l]);
            else
                for (l = 0; l < o && !t.closed; l++)
                    t.next(i[l].value);
            return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(),
            e
        }
        ,
        e.prototype._getNow = function() {
            return (this.scheduler || o.a).now()
        }
        ,
        e.prototype._trimBufferThenGetEvents = function() {
            for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, i = this._events, r = i.length, o = 0; o < r && !(t - i[o].time < n); )
                o++;
            return r > e && (o = Math.max(o, r - e)),
            o > 0 && i.splice(0, o),
            i
        }
        ,
        e
    }(r.a)
      , d = function() {
        return function(t, e) {
            this.time = t,
            this.value = e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return new i.a(function(n) {
            var i = new r.a
              , o = 0;
            return i.add(e.schedule(function() {
                o !== t.length ? (n.next(t[o++]),
                n.closed || i.add(this.schedule())) : n.complete()
            })),
            i
        }
        )
    }
    ;
    var i = n(2)
      , r = n(9)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return e ? new i.a(function(n) {
            return e.schedule(r, 0, {
                error: t,
                subscriber: n
            })
        }
        ) : new i.a(function(e) {
            return e.error(t)
        }
        )
    }
    ;
    var i = n(2);
    function r(t) {
        var e = t.error;
        t.subscriber.error(e)
    }
}
, function(t, e, n) {
    "use strict";
    e.b = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = null
          , i = null;
        Object(r.a)(t[t.length - 1]) && (i = t.pop());
        "function" == typeof t[t.length - 1] && (n = t.pop());
        1 === t.length && Object(o.a)(t[0]) && (t = t[0]);
        return Object(u.a)(t, i).lift(new l(n))
    }
    ,
    n.d(e, "a", function() {
        return l
    });
    var i = n(0)
      , r = n(17)
      , o = n(12)
      , a = n(3)
      , s = n(4)
      , u = n(40)
      , c = {};
    var l = function() {
        function t(t) {
            this.resultSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new d(t,this.resultSelector))
        }
        ,
        t
    }()
      , d = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.resultSelector = n,
            i.active = 0,
            i.values = [],
            i.observables = [],
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.values.push(c),
            this.observables.push(t)
        }
        ,
        e.prototype._complete = function() {
            var t = this.observables
              , e = t.length;
            if (0 === e)
                this.destination.complete();
            else {
                this.active = e,
                this.toRespond = e;
                for (var n = 0; n < e; n++) {
                    var i = t[n];
                    this.add(Object(s.a)(this, i, i, n))
                }
            }
        }
        ,
        e.prototype.notifyComplete = function(t) {
            0 == (this.active -= 1) && this.destination.complete()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            var o = this.values
              , a = o[n]
              , s = this.toRespond ? a === c ? --this.toRespond : this.toRespond : 0;
            o[n] = e,
            0 === s && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
        }
        ,
        e.prototype._tryResultSelector = function(t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }
        ,
        e
    }(a.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return f
    });
    var i = n(144)
      , r = n(244)
      , o = n(245)
      , a = n(246)
      , s = n(147)
      , u = n(148)
      , c = n(114)
      , l = n(43)
      , d = n(28)
      , f = function(t) {
        if (t && "function" == typeof t[d.a])
            return Object(a.a)(t);
        if (Object(s.a)(t))
            return Object(i.a)(t);
        if (Object(u.a)(t))
            return Object(r.a)(t);
        if (t && "function" == typeof t[l.a])
            return Object(o.a)(t);
        var e = Object(c.a)(t) ? "an invalid object" : "'" + t + "'";
        throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = Number.POSITIVE_INFINITY);
        return Object(i.a)(r.a, t)
    }
    ;
    var i = n(44)
      , r = n(29)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return new i.a(function(e) {
            var n;
            try {
                n = t()
            } catch (t) {
                return void e.error(t)
            }
            var i = n ? Object(r.a)(n) : Object(o.b)();
            return i.subscribe(e)
        }
        )
    }
    ;
    var i = n(2)
      , r = n(18)
      , o = n(16)
}
, function(t, e, n) {
    "use strict";
    e.b = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = t[t.length - 1];
        "function" == typeof n && t.pop();
        return Object(r.a)(t, void 0).lift(new l(n))
    }
    ,
    n.d(e, "a", function() {
        return l
    });
    var i = n(0)
      , r = n(40)
      , o = n(12)
      , a = n(1)
      , s = n(3)
      , u = n(4)
      , c = n(43);
    var l = function() {
        function t(t) {
            this.resultSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new d(t,this.resultSelector))
        }
        ,
        t
    }()
      , d = function(t) {
        function e(e, n, i) {
            void 0 === i && (i = Object.create(null));
            var r = t.call(this, e) || this;
            return r.iterators = [],
            r.active = 0,
            r.resultSelector = "function" == typeof n ? n : null,
            r.values = i,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.iterators;
            Object(o.a)(t) ? e.push(new p(t)) : "function" == typeof t[c.a] ? e.push(new f(t[c.a]())) : e.push(new h(this.destination,this,t))
        }
        ,
        e.prototype._complete = function() {
            var t = this.iterators
              , e = t.length;
            if (this.unsubscribe(),
            0 !== e) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                    var i = t[n];
                    if (i.stillUnsubscribed)
                        this.destination.add(i.subscribe(i, n));
                    else
                        this.active--
                }
            } else
                this.destination.complete()
        }
        ,
        e.prototype.notifyInactive = function() {
            this.active--,
            0 === this.active && this.destination.complete()
        }
        ,
        e.prototype.checkIterators = function() {
            for (var t = this.iterators, e = t.length, n = this.destination, i = 0; i < e; i++) {
                if ("function" == typeof (a = t[i]).hasValue && !a.hasValue())
                    return
            }
            var r = !1
              , o = [];
            for (i = 0; i < e; i++) {
                var a, s = (a = t[i]).next();
                if (a.hasCompleted() && (r = !0),
                s.done)
                    return void n.complete();
                o.push(s.value)
            }
            this.resultSelector ? this._tryresultSelector(o) : n.next(o),
            r && n.complete()
        }
        ,
        e.prototype._tryresultSelector = function(t) {
            var e;
            try {
                e = this.resultSelector.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }
        ,
        e
    }(a.a)
      , f = function() {
        function t(t) {
            this.iterator = t,
            this.nextResult = t.next()
        }
        return t.prototype.hasValue = function() {
            return !0
        }
        ,
        t.prototype.next = function() {
            var t = this.nextResult;
            return this.nextResult = this.iterator.next(),
            t
        }
        ,
        t.prototype.hasCompleted = function() {
            var t = this.nextResult;
            return t && t.done
        }
        ,
        t
    }()
      , p = function() {
        function t(t) {
            this.array = t,
            this.index = 0,
            this.length = 0,
            this.length = t.length
        }
        return t.prototype[c.a] = function() {
            return this
        }
        ,
        t.prototype.next = function(t) {
            var e = this.index++
              , n = this.array;
            return e < this.length ? {
                value: n[e],
                done: !1
            } : {
                value: null,
                done: !0
            }
        }
        ,
        t.prototype.hasValue = function() {
            return this.array.length > this.index
        }
        ,
        t.prototype.hasCompleted = function() {
            return this.array.length === this.index
        }
        ,
        t
    }()
      , h = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.parent = n,
            r.observable = i,
            r.stillUnsubscribed = !0,
            r.buffer = [],
            r.isComplete = !1,
            r
        }
        return i.a(e, t),
        e.prototype[c.a] = function() {
            return this
        }
        ,
        e.prototype.next = function() {
            var t = this.buffer;
            return 0 === t.length && this.isComplete ? {
                value: null,
                done: !0
            } : {
                value: t.shift(),
                done: !1
            }
        }
        ,
        e.prototype.hasValue = function() {
            return this.buffer.length > 0
        }
        ,
        e.prototype.hasCompleted = function() {
            return 0 === this.buffer.length && this.isComplete
        }
        ,
        e.prototype.notifyComplete = function() {
            this.buffer.length > 0 ? (this.isComplete = !0,
            this.parent.notifyInactive()) : this.destination.complete()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.buffer.push(e),
            this.parent.checkIterators()
        }
        ,
        e.prototype.subscribe = function(t, e) {
            return Object(u.a)(this, this.observable, this, e)
        }
        ,
        e
    }(s.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return 0 === t ? Object(a.b)() : e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(41)
      , a = n(16);
    var s = function() {
        function t(t) {
            if (this.total = t,
            this.total < 0)
                throw new o.a
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.total))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.total = n,
            i.count = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.total
              , n = ++this.count;
            n <= e && (this.destination.next(t),
            n === e && (this.destination.complete(),
            this.unsubscribe()))
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return 0 === t ? Object(a.b)() : e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(41)
      , a = n(16);
    var s = function() {
        function t(t) {
            if (this.total = t,
            this.total < 0)
                throw new o.a
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.total))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.total = n,
            i.ring = new Array,
            i.count = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.ring
              , n = this.total
              , i = this.count++;
            e.length < n ? e.push(t) : e[i % n] = t
        }
        ,
        e.prototype._complete = function() {
            var t = this.destination
              , e = this.count;
            if (e > 0)
                for (var n = this.count >= this.total ? this.total : this.count, i = this.ring, r = 0; r < n; r++) {
                    var o = e++ % n;
                    t.next(i[o])
                }
            t.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        var n = !1;
        arguments.length >= 2 && (n = !0);
        return function(i) {
            return i.lift(new o(t,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e, n) {
            void 0 === n && (n = !1),
            this.accumulator = t,
            this.seed = e,
            this.hasSeed = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.accumulator,this.seed,this.hasSeed))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this, e) || this;
            return o.accumulator = n,
            o._seed = i,
            o.hasSeed = r,
            o.index = 0,
            o
        }
        return i.a(e, t),
        Object.defineProperty(e.prototype, "seed", {
            get: function() {
                return this._seed
            },
            set: function(t) {
                this.hasSeed = !0,
                this._seed = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype._next = function(t) {
            if (this.hasSeed)
                return this._tryNext(t);
            this.seed = t,
            this.destination.next(t)
        }
        ,
        e.prototype._tryNext = function(t) {
            var e, n = this.index++;
            try {
                e = this.accumulator(this.seed, t, n)
            } catch (t) {
                this.destination.error(t)
            }
            this.seed = e,
            this.destination.next(e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n) {
        if ("function" == typeof n)
            return function(i) {
                return i.pipe(t(function(t, i) {
                    return Object(u.a)(e(t, i)).pipe(Object(s.a)(function(e, r) {
                        return n(t, e, i, r)
                    }))
                }))
            }
            ;
        return function(t) {
            return t.lift(new c(e))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(21)
      , a = n(4)
      , s = n(14)
      , u = n(18);
    var c = function() {
        function t(t) {
            this.project = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new l(t,this.project))
        }
        ,
        t
    }()
      , l = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.project = n,
            i.index = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this._innerSub(e, t, n)
        }
        ,
        e.prototype._innerSub = function(t, e, n) {
            var i = this.innerSubscription;
            i && i.unsubscribe();
            var r = new o.a(this,e,n)
              , s = this.destination;
            s.add(r),
            this.innerSubscription = Object(a.a)(this, t, void 0, void 0, r),
            this.innerSubscription !== r && s.add(this.innerSubscription)
        }
        ,
        e.prototype._complete = function() {
            var e = this.innerSubscription;
            e && !e.closed || t.prototype._complete.call(this),
            this.unsubscribe()
        }
        ,
        e.prototype._unsubscribe = function() {
            this.innerSubscription = null
        }
        ,
        e.prototype.notifyComplete = function(e) {
            this.destination.remove(e),
            this.innerSubscription = null,
            this.isStopped && t.prototype._complete.call(this)
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(202)
      , r = n(207)
      , o = n(210)
      , a = n(211)
      , s = i.getENV()
      , u = i.getUA().toLocaleLowerCase();
    e.isInDingTalk = function() {
        return s.platform !== i.ENV_ENUM.notInDingTalk
    }
    ,
    e.isWeixin = function() {
        return -1 !== u.indexOf("micromessenger")
    }
    ,
    e.isAndroid = function() {
        return -1 !== u.indexOf("android") || -1 !== u.indexOf("adr")
    }
    ,
    e.isAndroidDingTalk = function() {
        return s.platform === i.ENV_ENUM.android
    }
    ,
    e.isIOS = function() {
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)
    }
    ,
    e.isIOSDingTalk = function() {
        return s.platform === i.ENV_ENUM.ios
    }
    ,
    e.isPCDingTalk = function() {
        return s.platform === i.ENV_ENUM.pc
    }
    ,
    e.isXueXi = function() {
        return -1 !== u.indexOf("device/xuexi")
    }
    ,
    e.isMobile = function() {
        return e.isIOSDingTalk() || e.isAndroidDingTalk() || /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(u)
    }
    ,
    e.isDingTalkLite = function() {
        return r.isDingTalkLite() || o.isDingTalkLite() || a.isDingTalkLite()
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(203);
    function r(t, e) {
        var n = t && t.vs;
        return "object" == typeof n && (n = n[e.platformSub]),
        n
    }
    e.APP_TYPE = i.APP_TYPE,
    e.LogLevel = i.LogLevel,
    e.isFunction = i.isFunction,
    e.compareVersion = i.compareVersion,
    e.ENV_ENUM = i.ENV_ENUM,
    e.ENV_ENUM_SUB = i.ENV_ENUM_SUB;
    var o = function() {
        return function(t, e) {
            var n = this;
            this.configJsApiList = [],
            this.hadConfig = !1,
            this.p = {},
            this.config$ = new Promise(function(t, e) {
                n.p.reject = e,
                n.p.resolve = t
            }
            ),
            this.logQueue = [],
            this.devConfig = {
                debug: !1
            },
            this.platformConfigMap = {},
            this.invokeAPIConfigMapByMethod = {},
            this.isBridgeDrity = !0,
            this.getExportSdk = function() {
                return n.exportSdk
            }
            ,
            this.setAPI = function(t, e) {
                n.invokeAPIConfigMapByMethod[t] = e
            }
            ,
            this.setPlatform = function(t) {
                n.isBridgeDrity = !0,
                n.platformConfigMap[t.platform] = t,
                t.platform === n.env.platform && t.bridgeInit().catch(function(t) {
                    n.customLog(i.LogLevel.WARNING, ["auto bridgeInit error", t || ""])
                })
            }
            ,
            this.getPlatformConfigMap = function() {
                return n.platformConfigMap
            }
            ,
            this.deleteApiConfig = function(t, e) {
                var i = n.invokeAPIConfigMapByMethod[t];
                i && delete i[e]
            }
            ,
            this.invokeAPI = function(t, e, o) {
                void 0 === e && (e = {}),
                void 0 === o && (o = !0),
                n.customLog(i.LogLevel.INFO, ['==> "' + t + '" params: ', e]);
                var a = +new Date
                  , s = a + "_" + Math.floor(1e3 * Math.random());
                if (n.devConfig.onBeforeInvokeAPI)
                    try {
                        n.devConfig.onBeforeInvokeAPI({
                            invokeId: s,
                            method: t,
                            params: e,
                            startTime: a
                        })
                    } catch (t) {
                        n.customLog(i.LogLevel.ERROR, ["call Hook:onBeforeInvokeAPI failed, reason:", t])
                    }
                return !1 === n.devConfig.isAuthApi && (o = !1),
                n.bridgeInitFn().then(function(u) {
                    var c = n.invokeAPIConfigMapByMethod[t]
                      , l = !(n.devConfig.forceEnableDealApiFnMap && n.devConfig.forceEnableDealApiFnMap[t] && !0 === n.devConfig.forceEnableDealApiFnMap[t](e)) && (!0 === n.devConfig.isDisableDeal || n.devConfig.disbaleDealApiWhiteList && -1 !== n.devConfig.disbaleDealApiWhiteList.indexOf(t));
                    if (c || !o) {
                        var d;
                        if (c && (d = c[n.env.platform]),
                        d || !o) {
                            var f = {};
                            f = !l && d && d.paramsDeal && i.isFunction(d.paramsDeal) ? d.paramsDeal(e) : Object.assign({}, e);
                            var p = function(t) {
                                return !l && d && d.resultDeal && i.isFunction(d.resultDeal) ? d.resultDeal(t) : t
                            };
                            if (i.isFunction(f.onSuccess)) {
                                var h = f.onSuccess;
                                f.onSuccess = function(t) {
                                    h(p(t))
                                }
                            }
                            return u(t, f).then(p, function(e) {
                                var a = n.hadConfig && void 0 === n.isReady && -1 !== n.configJsApiList.indexOf(t)
                                  , s = "object" == typeof e && "string" == typeof e.errorCode && e.errorCode === i.ERROR_CODE.no_permission
                                  , c = "object" == typeof e && "string" == typeof e.errorCode && e.errorCode === i.ERROR_CODE.cancel
                                  , l = r(d, n.env)
                                  , h = l && n.env.version && i.compareVersion(n.env.version, l)
                                  , v = (n.env.platform === i.ENV_ENUM.ios || n.env.platform === i.ENV_ENUM.android) && a && s
                                  , g = n.env.platform === i.ENV_ENUM.pc && a && (h && !c && o || s);
                                return v || g ? n.config$.then(function() {
                                    return u(t, f).then(p)
                                }) : Promise.reject(e)
                            }).then(function(r) {
                                if (n.devConfig.onAfterInvokeAPI)
                                    try {
                                        n.devConfig.onAfterInvokeAPI({
                                            invokeId: s,
                                            method: t,
                                            params: e,
                                            payload: r,
                                            isSuccess: !0,
                                            startTime: a,
                                            duration: +new Date - a
                                        })
                                    } catch (t) {
                                        n.customLog(i.LogLevel.ERROR, ["call Hook:onAfterInvokeAPI failed, reason:", t])
                                    }
                                return n.customLog(i.LogLevel.INFO, ['<== "' + t + '" success result: ', r]),
                                r
                            }, function(r) {
                                if (n.devConfig.onAfterInvokeAPI)
                                    try {
                                        n.devConfig.onAfterInvokeAPI({
                                            invokeId: s,
                                            method: t,
                                            params: e,
                                            payload: r,
                                            startTime: a,
                                            duration: +new Date - a,
                                            isSuccess: !1
                                        })
                                    } catch (r) {
                                        n.customLog(i.LogLevel.ERROR, ["call Hook:onAfterInvokeAPI failed, reason:", r])
                                    }
                                return n.customLog(i.LogLevel.WARNING, ['<== "' + t + '" fail result: ', r]),
                                Promise.reject(r)
                            })
                        }
                        var v = '"' + t + '" do not support the current platform (' + n.env.platform + ")";
                        return n.customLog(i.LogLevel.ERROR, [v]),
                        Promise.reject({
                            errorCode: i.ERROR_CODE.jsapi_internal_error,
                            errorMessage: v
                        })
                    }
                    return v = "This API method is not configured for the platform (" + n.env.platform + ")",
                    n.customLog(i.LogLevel.ERROR, [v]),
                    Promise.reject({
                        errorCode: i.ERROR_CODE.jsapi_internal_error,
                        errorMessage: v
                    })
                })
            }
            ,
            this.customLog = function(t, e) {
                var i = {
                    level: t,
                    text: e,
                    time: new Date
                };
                !0 === n.devConfig.debug ? n.customLogInstance(i) : (n.logQueue.push(i),
                n.logQueue.length > 10 && (n.logQueue = n.logQueue.slice(n.logQueue.length - 10)))
            }
            ,
            this.clearLogQueue = function() {
                n.logQueue.forEach(function(t) {
                    n.customLogInstance(t)
                }),
                n.logQueue = []
            }
            ,
            this.customLogInstance = e,
            this.env = t,
            this.bridgeInitFn = function() {
                if (n.bridgeInitFnPromise && !n.isBridgeDrity)
                    return n.bridgeInitFnPromise;
                n.isBridgeDrity = !1;
                var e = n.platformConfigMap[t.platform];
                if (e)
                    n.bridgeInitFnPromise = e.bridgeInit().catch(function(t) {
                        return n.customLog(i.LogLevel.ERROR, ["\b\b\b\b\bJsBridge initialization fails, jsapi will not work"]),
                        Promise.reject(t)
                    });
                else {
                    var r = "Do not support the current environment：" + t.platform;
                    n.customLog(i.LogLevel.WARNING, [r]),
                    n.bridgeInitFnPromise = Promise.reject(new Error(r))
                }
                return n.bridgeInitFnPromise
            }
            ;
            var o = function(t) {
                void 0 === t && (t = {}),
                n.devConfig = Object.assign(n.devConfig, t),
                !0 === t.debug && n.clearLogQueue(),
                t.extraPlatform && n.setPlatform(t.extraPlatform)
            };
            this.exportSdk = {
                config: function(e) {
                    void 0 === e && (e = {});
                    var r = !0;
                    Object.keys(e).forEach(function(t) {
                        -1 === ["debug", "usePromise"].indexOf(t) && (r = !1)
                    }),
                    r ? (n.customLog(i.LogLevel.WARNING, ["This is a deprecated feature, recommend use dd.devConfig"]),
                    o(e)) : n.hadConfig ? n.customLog(i.LogLevel.WARNING, ["Config has been executed"]) : (e.jsApiList && (n.configJsApiList = e.jsApiList),
                    n.hadConfig = !0,
                    n.bridgeInitFn().then(function(i) {
                        var r = n.platformConfigMap[t.platform]
                          , o = e;
                        r.authParamsDeal && (o = r.authParamsDeal(o)),
                        i(r.authMethod, o).then(function(t) {
                            n.isReady = !0,
                            n.p.resolve(t)
                        }).catch(function(t) {
                            n.isReady = !1,
                            n.p.reject(t)
                        })
                    }, function() {
                        n.customLog(i.LogLevel.ERROR, ['\b\b\b\b\bJsBridge initialization failed and "dd.config" failed to call'])
                    }))
                },
                devConfig: o,
                ready: function(t) {
                    !1 === n.hadConfig ? (n.customLog(i.LogLevel.WARNING, ["You don 't use a dd.config, so you don't need to wrap dd.ready, recommend remove dd.ready"]),
                    n.bridgeInitFn().then(function() {
                        t()
                    })) : n.config$.then(function(e) {
                        t()
                    })
                },
                error: function(t) {
                    n.config$.catch(function(e) {
                        t(e)
                    })
                },
                on: function(e, i) {
                    n.bridgeInitFn().then(function() {
                        n.platformConfigMap[t.platform].event.on(e, i)
                    })
                },
                off: function(e, i) {
                    n.bridgeInitFn().then(function() {
                        n.platformConfigMap[t.platform].event.off(e, i)
                    })
                },
                env: t,
                checkJsApi: function(e) {
                    void 0 === e && (e = {});
                    var o = {};
                    return e.jsApiList && e.jsApiList.forEach(function(e) {
                        var a = n.invokeAPIConfigMapByMethod[e];
                        if (a) {
                            var s = r(a[t.platform], t);
                            s && t.version && i.compareVersion(t.version, s) && (o[e] = !0)
                        }
                        o[e] || (o[e] = !1)
                    }),
                    Promise.resolve(o)
                },
                _invoke: function(t, e) {
                    return void 0 === e && (e = {}),
                    n.invokeAPI(t, e, !1)
                }
            }
        }
    }();
    e.Sdk = o
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.RUNTIME = {
        WEB: "Web",
        WEEX: "Weex",
        UNKNOWN: "Unknown"
    },
    e.PLATFORM = {
        MAC: "Mac",
        WINDOWS: "Windows",
        IOS: "iOS",
        ANDROID: "Android",
        IPAD: "iPad",
        BROWSER: "Browser",
        UNKNOWN: "Unknown"
    },
    e.FRAMEWORK = {
        VUE: "Vue",
        RAX: "Rax",
        UNKNOWN: "Unknown"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(208)
      , r = n(134);
    e.isDingTalkLite = function() {
        return i.default() === r.sendType.LITE
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.secondTypeReg = /\s2ndType\/([^\s]*)/i,
    e.dingTalkReg = /DingTalk/i,
    e.iPadReg = /iPad/i,
    e.macKeywords = "Macintosh; Intel Mac OS",
    e.winKeywords = "dingtalk-win",
    e.mobileDTVersionReg = /DingTalk\/([\d\.]+)/,
    e.pcDTVersionReg = /DingTalk\(([a-zA-Z0-9\.-]+)\)/,
    e.androidKeywords = "Android",
    e.DEFAULT_VERSION = "100.0.0",
    e.iOSReg = /iPhone|iPad|iPod|iOS/i,
    e.miniAppRuntimeReg = /Nebula/i,
    e.webviewInMiniAppRuntimeReg = /dd-web/i,
    e.IDEKeywords = "AlipayIDE",
    function(t) {
        t.LITE = "lite"
    }(e.sendType || (e.sendType = {}))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var i = n(48)
      , r = n(113)
      , o = {
        closed: !0,
        next: function(t) {},
        error: function(t) {
            if (i.a.useDeprecatedSynchronousErrorHandling)
                throw t;
            Object(r.a)(t)
        },
        complete: function() {}
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t(t) {
            return Error.call(this),
            this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(t, e) {
                return e + 1 + ") " + t.toString()
            }).join("\n  ") : "",
            this.name = "UnsubscriptionError",
            this.errors = t,
            this
        }
        return t.prototype = Object.create(Error.prototype),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return c
    }),
    n.d(e, "b", function() {
        return l
    });
    var i = n(0)
      , r = n(11)
      , o = n(2)
      , a = n(1)
      , s = n(9)
      , u = n(117)
      , c = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.source = e,
            i.subjectFactory = n,
            i._refCount = 0,
            i._isComplete = !1,
            i
        }
        return i.a(e, t),
        e.prototype._subscribe = function(t) {
            return this.getSubject().subscribe(t)
        }
        ,
        e.prototype.getSubject = function() {
            var t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()),
            this._subject
        }
        ,
        e.prototype.connect = function() {
            var t = this._connection;
            return t || (this._isComplete = !1,
            (t = this._connection = new s.a).add(this.source.subscribe(new d(this.getSubject(),this))),
            t.closed && (this._connection = null,
            t = s.a.EMPTY)),
            t
        }
        ,
        e.prototype.refCount = function() {
            return Object(u.a)()(this)
        }
        ,
        e
    }(o.a)
      , l = function() {
        var t = c.prototype;
        return {
            operator: {
                value: null
            },
            _refCount: {
                value: 0,
                writable: !0
            },
            _subject: {
                value: null,
                writable: !0
            },
            _connection: {
                value: null,
                writable: !0
            },
            _subscribe: {
                value: t._subscribe
            },
            _isComplete: {
                value: t._isComplete,
                writable: !0
            },
            getSubject: {
                value: t.getSubject
            },
            connect: {
                value: t.connect
            },
            refCount: {
                value: t.refCount
            }
        }
    }()
      , d = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.connectable = n,
            i
        }
        return i.a(e, t),
        e.prototype._error = function(e) {
            this._unsubscribe(),
            t.prototype._error.call(this, e)
        }
        ,
        e.prototype._complete = function() {
            this.connectable._isComplete = !0,
            this._unsubscribe(),
            t.prototype._complete.call(this)
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.connectable;
            if (t) {
                this.connectable = null;
                var e = t._connection;
                t._refCount = 0,
                t._subject = null,
                t._connection = null,
                e && e.unsubscribe()
            }
        }
        ,
        e
    }(r.b);
    a.a
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.subject = e,
            i.subscriber = n,
            i.closed = !1,
            i
        }
        return i.a(e, t),
        e.prototype.unsubscribe = function() {
            if (!this.closed) {
                this.closed = !0;
                var t = this.subject
                  , e = t.observers;
                if (this.subject = null,
                e && 0 !== e.length && !t.isStopped && !t.closed) {
                    var n = e.indexOf(this.subscriber);
                    -1 !== n && e.splice(n, 1)
                }
            }
        }
        ,
        e
    }(n(9).a)
}
, function(t, e, n) {
    "use strict";
    e.b = function(t, e, n, i) {
        return function(r) {
            return r.lift(new u(t,e,n,i))
        }
    }
    ,
    n.d(e, "a", function() {
        return d
    });
    var i = n(0)
      , r = n(1)
      , o = n(9)
      , a = n(2)
      , s = n(11);
    var u = function() {
        function t(t, e, n, i) {
            this.keySelector = t,
            this.elementSelector = e,
            this.durationSelector = n,
            this.subjectSelector = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            return a.keySelector = n,
            a.elementSelector = i,
            a.durationSelector = r,
            a.subjectSelector = o,
            a.groups = null,
            a.attemptedToUnsubscribe = !1,
            a.count = 0,
            a
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e;
            try {
                e = this.keySelector(t)
            } catch (t) {
                return void this.error(t)
            }
            this._group(t, e)
        }
        ,
        e.prototype._group = function(t, e) {
            var n = this.groups;
            n || (n = this.groups = new Map);
            var i, r = n.get(e);
            if (this.elementSelector)
                try {
                    i = this.elementSelector(t)
                } catch (t) {
                    this.error(t)
                }
            else
                i = t;
            if (!r) {
                r = this.subjectSelector ? this.subjectSelector() : new s.a,
                n.set(e, r);
                var o = new d(e,r,this);
                if (this.destination.next(o),
                this.durationSelector) {
                    var a = void 0;
                    try {
                        a = this.durationSelector(new d(e,r))
                    } catch (t) {
                        return void this.error(t)
                    }
                    this.add(a.subscribe(new l(e,r,this)))
                }
            }
            r.closed || r.next(i)
        }
        ,
        e.prototype._error = function(t) {
            var e = this.groups;
            e && (e.forEach(function(e, n) {
                e.error(t)
            }),
            e.clear()),
            this.destination.error(t)
        }
        ,
        e.prototype._complete = function() {
            var t = this.groups;
            t && (t.forEach(function(t, e) {
                t.complete()
            }),
            t.clear()),
            this.destination.complete()
        }
        ,
        e.prototype.removeGroup = function(t) {
            this.groups.delete(t)
        }
        ,
        e.prototype.unsubscribe = function() {
            this.closed || (this.attemptedToUnsubscribe = !0,
            0 === this.count && t.prototype.unsubscribe.call(this))
        }
        ,
        e
    }(r.a)
      , l = function(t) {
        function e(e, n, i) {
            var r = t.call(this, n) || this;
            return r.key = e,
            r.group = n,
            r.parent = i,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.complete()
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.parent
              , e = this.key;
            this.key = this.parent = null,
            t && t.removeGroup(e)
        }
        ,
        e
    }(r.a)
      , d = function(t) {
        function e(e, n, i) {
            var r = t.call(this) || this;
            return r.key = e,
            r.groupSubject = n,
            r.refCountSubscription = i,
            r
        }
        return i.a(e, t),
        e.prototype._subscribe = function(t) {
            var e = new o.a
              , n = this.refCountSubscription
              , i = this.groupSubject;
            return n && !n.closed && e.add(new f(n)),
            e.add(i.subscribe(t)),
            e
        }
        ,
        e
    }(a.a)
      , f = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n.parent = e,
            e.count++,
            n
        }
        return i.a(e, t),
        e.prototype.unsubscribe = function() {
            var e = this.parent;
            e.closed || this.closed || (t.prototype.unsubscribe.call(this),
            e.count -= 1,
            0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe())
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    });
    var i = n(0)
      , r = n(11)
      , o = n(50)
      , a = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n._value = e,
            n
        }
        return i.a(e, t),
        Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.getValue()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype._subscribe = function(e) {
            var n = t.prototype._subscribe.call(this, e);
            return n && !n.closed && e.next(this._value),
            n
        }
        ,
        e.prototype.getValue = function() {
            if (this.hasError)
                throw this.thrownError;
            if (this.closed)
                throw new o.a;
            return this._value
        }
        ,
        e.prototype.next = function(e) {
            t.prototype.next.call(this, this._value = e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(231)
      , r = new (n(233).a)(i.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t(e, n) {
            void 0 === n && (n = t.now),
            this.SchedulerAction = e,
            this.now = n
        }
        return t.prototype.schedule = function(t, e, n) {
            return void 0 === e && (e = 0),
            new this.SchedulerAction(this,t).schedule(n, e)
        }
        ,
        t.now = function() {
            return Date.now()
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    e.b = function(t, e) {
        void 0 === e && (e = 0);
        return function(n) {
            return n.lift(new a(t,e))
        }
    }
    ,
    n.d(e, "a", function() {
        return s
    });
    var i = n(0)
      , r = n(1)
      , o = n(51);
    var a = function() {
        function t(t, e) {
            void 0 === e && (e = 0),
            this.scheduler = t,
            this.delay = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.scheduler,this.delay))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            void 0 === i && (i = 0);
            var r = t.call(this, e) || this;
            return r.scheduler = n,
            r.delay = i,
            r
        }
        return i.a(e, t),
        e.dispatch = function(t) {
            var e = t.notification
              , n = t.destination;
            e.observe(n),
            this.unsubscribe()
        }
        ,
        e.prototype.scheduleMessage = function(t) {
            this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new u(t,this.destination)))
        }
        ,
        e.prototype._next = function(t) {
            this.scheduleMessage(o.a.createNext(t))
        }
        ,
        e.prototype._error = function(t) {
            this.scheduleMessage(o.a.createError(t)),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.scheduleMessage(o.a.createComplete()),
            this.unsubscribe()
        }
        ,
        e
    }(r.a)
      , u = function() {
        return function(t, e) {
            this.notification = t,
            this.destination = e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function(t) {
        return function(e) {
            for (var n = 0, i = t.length; n < i && !e.closed; n++)
                e.next(t[n]);
            e.complete()
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(234)
      , r = new (n(236).a)(i.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function() {
        function t() {
            return Error.call(this),
            this.message = "Timeout has occurred",
            this.name = "TimeoutError",
            this
        }
        return t.prototype = Object.create(Error.prototype),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var i = function(t) {
        return t && "number" == typeof t.length && "function" != typeof t
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return Object(i.a)(1)
    }
    ;
    var i = n(123)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (null != t) {
            if (Object(s.a)(t))
                return Object(i.a)(t, e);
            if (Object(u.a)(t))
                return Object(r.a)(t, e);
            if (Object(c.a)(t))
                return Object(o.a)(t, e);
            if (Object(l.a)(t) || "string" == typeof t)
                return Object(a.a)(t, e)
        }
        throw new TypeError((null !== t && typeof t || t) + " is not observable")
    }
    ;
    var i = n(247)
      , r = n(248)
      , o = n(119)
      , a = n(249)
      , s = n(250)
      , u = n(148)
      , c = n(147)
      , l = n(251)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY
          , s = null
          , u = t[t.length - 1];
        Object(r.a)(u) ? (s = t.pop(),
        t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof u && (n = t.pop());
        if (null === s && 1 === t.length && t[0]instanceof i.a)
            return t[0];
        return Object(o.a)(n)(Object(a.a)(t, s))
    }
    ;
    var i = n(2)
      , r = n(17)
      , o = n(123)
      , a = n(40)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }),
    e.b = function() {
        return o
    }
    ;
    var i = n(2)
      , r = n(49)
      , o = new i.a(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        function n() {
            return !n.pred.apply(n.thisArg, arguments)
        }
        return n.pred = t,
        n.thisArg = e,
        n
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (1 === t.length) {
            if (!Object(r.a)(t[0]))
                return t[0];
            t = t[0]
        }
        return Object(o.a)(t, void 0).lift(new u)
    }
    ;
    var i = n(0)
      , r = n(12)
      , o = n(40)
      , a = n(3)
      , s = n(4);
    var u = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.hasFirst = !1,
            n.observables = [],
            n.subscriptions = [],
            n
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.observables.push(t)
        }
        ,
        e.prototype._complete = function() {
            var t = this.observables
              , e = t.length;
            if (0 === e)
                this.destination.complete();
            else {
                for (var n = 0; n < e && !this.hasFirst; n++) {
                    var i = t[n]
                      , r = Object(s.a)(this, i, i, n);
                    this.subscriptions && this.subscriptions.push(r),
                    this.add(r)
                }
                this.observables = null
            }
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var o = 0; o < this.subscriptions.length; o++)
                    if (o !== n) {
                        var a = this.subscriptions[o];
                        a.unsubscribe(),
                        this.remove(a)
                    }
                this.subscriptions = null
            }
            this.destination.next(e)
        }
        ,
        e
    }(a.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === t && (t = 0);
        var u = -1;
        Object(o.a)(e) ? u = Number(e) < 1 ? 1 : Number(e) : Object(a.a)(e) && (n = e);
        Object(a.a)(n) || (n = r.a);
        return new i.a(function(e) {
            var i = Object(o.a)(t) ? t : +t - n.now();
            return n.schedule(s, i, {
                index: 0,
                period: u,
                subscriber: e
            })
        }
        )
    }
    ;
    var i = n(2)
      , r = n(13)
      , o = n(55)
      , a = n(17);
    function s(t) {
        var e = t.index
          , n = t.period
          , i = t.subscriber;
        if (i.next(e),
        !i.closed) {
            if (-1 === n)
                return i.complete();
            t.index = e + 1,
            this.schedule(t, n)
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t) {
            this.durationSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.durationSelector))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.durationSelector = n,
            i.hasValue = !1,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            if (this.value = t,
            this.hasValue = !0,
            !this.throttled) {
                var e = void 0;
                try {
                    e = (0,
                    this.durationSelector)(t)
                } catch (t) {
                    return this.destination.error(t)
                }
                var n = Object(o.a)(this, e);
                !n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
            }
        }
        ,
        e.prototype.clearThrottle = function() {
            var t = this.value
              , e = this.hasValue
              , n = this.throttled;
            n && (this.remove(n),
            this.throttled = null,
            n.unsubscribe()),
            e && (this.value = null,
            this.hasValue = !1,
            this.destination.next(t))
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i) {
            this.clearThrottle()
        }
        ,
        e.prototype.notifyComplete = function() {
            this.clearThrottle()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return Object(i.a)(t, e, 1)
    }
    ;
    var i = n(44)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t instanceof Date && !isNaN(+t)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.compare = t,
            this.keySelector = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.compare,this.keySelector))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.keySelector = i,
            r.hasKey = !1,
            "function" == typeof n && (r.compare = n),
            r
        }
        return i.a(e, t),
        e.prototype.compare = function(t, e) {
            return t === e
        }
        ,
        e.prototype._next = function(t) {
            var e;
            try {
                var n = this.keySelector;
                e = n ? n(t) : t
            } catch (t) {
                return this.destination.error(t)
            }
            var i = !1;
            if (this.hasKey)
                try {
                    i = (0,
                    this.compare)(this.key, e)
                } catch (t) {
                    return this.destination.error(t)
                }
            else
                this.hasKey = !0;
            i || (this.key = e,
            this.destination.next(t))
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.b = function(t, e) {
        if ("function" != typeof t)
            throw new TypeError("predicate is not a function");
        return function(n) {
            return n.lift(new o(t,n,!1,e))
        }
    }
    ,
    n.d(e, "a", function() {
        return o
    });
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e, n, i) {
            this.predicate = t,
            this.source = e,
            this.yieldIndex = n,
            this.thisArg = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate,this.source,this.yieldIndex,this.thisArg))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            return a.predicate = n,
            a.source = i,
            a.yieldIndex = r,
            a.thisArg = o,
            a.index = 0,
            a
        }
        return i.a(e, t),
        e.prototype.notifyComplete = function(t) {
            var e = this.destination;
            e.next(t),
            e.complete(),
            this.unsubscribe()
        }
        ,
        e.prototype._next = function(t) {
            var e = this.predicate
              , n = this.thisArg
              , i = this.index++;
            try {
                e.call(n || this, t, i, this.source) && this.notifyComplete(this.yieldIndex ? i : t)
            } catch (t) {
                this.destination.error(t)
            }
        }
        ,
        e.prototype._complete = function() {
            this.notifyComplete(this.yieldIndex ? -1 : void 0)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return a
    }),
    e.b = function(t, e) {
        void 0 === e && (e = a);
        return function(n) {
            return n.lift(new s(t,e.leading,e.trailing))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4)
      , a = {
        leading: !0,
        trailing: !1
    };
    var s = function() {
        function t(t, e, n) {
            this.durationSelector = t,
            this.leading = e,
            this.trailing = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.durationSelector,this.leading,this.trailing))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this, e) || this;
            return o.destination = e,
            o.durationSelector = n,
            o._leading = i,
            o._trailing = r,
            o._hasValue = !1,
            o
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this._hasValue = !0,
            this._sendValue = t,
            this._throttled || (this._leading ? this.send() : this.throttle(t))
        }
        ,
        e.prototype.send = function() {
            var t = this._hasValue
              , e = this._sendValue;
            t && (this.destination.next(e),
            this.throttle(e)),
            this._hasValue = !1,
            this._sendValue = null
        }
        ,
        e.prototype.throttle = function(t) {
            var e = this.tryDurationSelector(t);
            e && this.add(this._throttled = Object(o.a)(this, e))
        }
        ,
        e.prototype.tryDurationSelector = function(t) {
            try {
                return this.durationSelector(t)
            } catch (t) {
                return this.destination.error(t),
                null
            }
        }
        ,
        e.prototype.throttlingDone = function() {
            var t = this._throttled
              , e = this._trailing;
            t && t.unsubscribe(),
            this._throttled = null,
            e && this.send()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.throttlingDone()
        }
        ,
        e.prototype.notifyComplete = function() {
            this.throttlingDone()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === n && (n = r.a);
        return function(i) {
            var r = Object(o.a)(t)
              , a = r ? +t - n.now() : Math.abs(t);
            return i.lift(new u(a,r,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(13)
      , o = n(158)
      , a = n(3)
      , s = n(4);
    var u = function() {
        function t(t, e, n, i) {
            this.waitFor = t,
            this.absoluteTimeout = e,
            this.withObservable = n,
            this.scheduler = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            return a.absoluteTimeout = n,
            a.waitFor = i,
            a.withObservable = r,
            a.scheduler = o,
            a.action = null,
            a.scheduleTimeout(),
            a
        }
        return i.a(e, t),
        e.dispatchTimeout = function(t) {
            var e = t.withObservable;
            t._unsubscribeAndRecycle(),
            t.add(Object(s.a)(t, e))
        }
        ,
        e.prototype.scheduleTimeout = function() {
            var t = this.action;
            t ? this.action = t.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this))
        }
        ,
        e.prototype._next = function(e) {
            this.absoluteTimeout || this.scheduleTimeout(),
            t.prototype._next.call(this, e)
        }
        ,
        e.prototype._unsubscribe = function() {
            this.action = null,
            this.scheduler = null,
            this.withObservable = null
        }
        ,
        e
    }(a.a)
}
, function(t, e, n) {
    "use strict";
    var i, r = n(22), o = (i = r) && i.__esModule ? i : {
        default: i
    };
    addEventListener("DOMContentLoaded", function() {
        var t = n(164)
          , e = new o.default(t).$mount("#app");
        window.app = e
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(167), n(346), !1, function(t) {
        n(165)
    }, null, null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(166);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("6af45682", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.toast-wrap{position:fixed;z-index:99999;bottom:10%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%\n}\n.toast{padding:.066667rem .266667rem;background-color:rgba(0,0,0,.6);color:#fff;border-radius:.133333rem;font-size:.32rem\n}\n.main{width:100%;height:100%\n}\n.anchor-info-wrap{position:absolute;top:0;left:0;z-index:1;width:100%\n}\n.stop-live-btn{right:.533333rem;top:.133333rem\n}\n.favor,.stop-live-btn{position:absolute;z-index:1\n}\n.favor{right:.306667rem;bottom:0\n}\n#canvasBarrage{position:absolute;z-index:1;width:100%;height:100%\n}\n.control-btns{position:absolute;left:0;bottom:.266667rem;z-index:99;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%\n}\n.lianmai{position:absolute;z-index:1;right:.706667rem;bottom:0\n}\n.control-bar-active{-webkit-transition:all .3s ease-in;transition:all .3s ease-in\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = E(n(26))
      , r = E(n(84))
      , o = E(n(168))
      , a = E(n(173))
      , s = E(n(92))
      , u = E(n(178))
      , c = E(n(102))
      , l = E(n(183))
      , d = E(n(107))
      , f = E(n(188))
      , p = E(n(193))
      , h = E(n(198))
      , v = E(n(213))
      , g = E(n(218))
      , _ = E(n(223))
      , m = n(8)
      , b = E(n(228))
      , y = n(20)
      , w = n(229)
      , x = (n(263),
    n(27))
      , k = n(25)
      , O = n(130);
    function E(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var S = r.default.decode(location.search.slice(1))
      , C = S.cid
      , T = S.uuid
      , j = S.anchorId;
    e.default = {
        components: {
            vAnchorInfo: o.default,
            vAnchorControl: a.default,
            vVideo: u.default,
            vMessageBox: c.default,
            vFavor: s.default,
            vMessageBarrage: l.default,
            vBarrageSwitch: d.default,
            vRotateSwitch: f.default,
            vClaritySelector: p.default,
            vLianmaiBtn: h.default,
            vShareSwitch: v.default,
            vCommentInput: g.default,
            vPunchCard: _.default
        },
        mixins: [i.default],
        props: {},
        data: function() {
            return {
                playUrl: "",
                coverUrl: "",
                title: "",
                avatarUrl: "",
                displayName: "",
                uuid: "",
                cid: "",
                anchorId: "",
                myOpenId: "",
                viewCount: "-",
                type: "live",
                showMessage: !1,
                showStopLive: !1,
                messageText: "",
                stopLiveMessage: m.i18next.t("pc_grouplive_live_player_force_stop"),
                status: "living",
                stopLiveBtnVisible: !1,
                favorCount: 0,
                favorCountType: "",
                cancelTitleText: m.i18next.t("pc_grouplive_live_player_force_stop_title"),
                cancelBtnText: m.i18next.t("pc_grouplive_live_player_force_stop_ok_btn"),
                favorCountCache: 0,
                msgList: [],
                newChatMsg: {},
                showBarrage: !0,
                showCrossBarrage: !1,
                isInitBarrageBtn: !1,
                isFirstTimePlay: !0,
                rotateCounter: 1,
                videoRatio: 0,
                isShowClaritySelector: !1,
                liveUrlVO: null,
                playUrlArr: [],
                currentUrlVO: null,
                liveStatus: 0,
                linkingMembers: [],
                enableLinkMic: "0",
                hasAppliedLink: !1,
                isFirstTimeUserApplyLinkFlag: !0,
                showHeaderAndControlSwitch: !0,
                shouldShowApplyLinkBtn: !1,
                liveType: 0,
                isFirstFrameRenderedInSec: 0,
                isStalled: 0,
                stallCount: 0,
                isBroken: 0,
                brokenCount: 0,
                firstFrameRenderedMs: -999,
                firstFrameRenderedMsFromDomready: -999,
                openCode: x.LIVE_OPEN_CODE.OPEN_LIVE_SUCCESS,
                isSurportLocalSignedPlayUrl: !1,
                isOpenSuc: 0,
                viewerShareType: void 0,
                hasInitedLikesCount: !1,
                disableThumbup: !1,
                enableSendCommentGrayer: !1,
                isEducationGroup: !1,
                punchInfo: null,
                anchorName: "",
                enableLiteRpcSendCommentGrayer: !1,
                enableRpcSendCommentGrayer: !1,
                isDingTalkLite: (0,
                O.isDingTalkLite)(),
                isSurportRpcSendLiveText: !1
            }
        },
        computed: {
            enableShare: function() {
                return this.viewerShareType === x.PUBLIC_GROUP_LIVE_TYPE.PUBLIC
            }
        },
        methods: {
            favor: function() {
                /* this.disableThumbup ? this.messageBox(m.i18next.t("pc_grouplive_live_favor_ban_tips"), [m.i18next.t("pc_grouplive_i_know"), ""]) : */
                (this.favorCountType = "action",
                //this.favorCount++, this.favorCountCache++
                this.favorCountCache = this.favorCountCache + 300)
            },
            viewsCountChanged: function(t) {
                var e = t.count;
                e && 0 !== e && (this.viewCount = e),
                console.log("viewsCountChanged")
            },
            likesCountChanged: function(t) {
                var e = t.count;
                this.hasInitedLikesCount && this.favorCount < e && (this.favorCountType = "message",
                this.favorCount = e),
                console.log("likesCountChanged")
            },
            videoStreamRestore: function() {
                var t = this;
                this.localLog("INFO", "videoStreamRestore event trigger; isLive=" + ("live" === this.type) + ", live uuid=" + T),
                setTimeout(function() {
                    t.getData(C, T, j).catch(function(e) {
                        -583 === (e || {}).code && t.myVideoxDestroy()
                    }).then(function() {
                        t.$refs.videox.clearContainer(),
                        t.$refs.videox.initPlayer(),
                        t.recordRotatePosition(),
                        t.status = "living"
                    })
                }, 5e3),
                console.log("videoStreamRestore")
            },
            videoStreamBreak: function() {
                this.localLog("INFO", "videoStreamBreak event trigger; isLive=" + ("live" === this.type) + ", live uuid=" + T);
                try {
                    var t = this.$refs.videox
                      , e = t.$el.querySelector(".error-content");
                    t.videox.pause(),
                    this.status = "pause",
                    e && (e.innerHTML = "<p>" + m.i18next.t("pc_grouplive_pause_status") + "</p>",
                    t.videox.player.videox.emit("video:error"))
                } catch (t) {}
                this.brokenCount++,
                this.isBroken || (this.isBroken = 1),
                console.log("videoStreamBreak")
            },
            getDisplayName: function() {
                return new Promise(function(t, e) {
                    dingtalk.my.getMyOpenId(function(n, i) {
                        n ? e() : dingtalk.user.getProfile(i, function(n, i) {
                            n ? e() : t({
                                name: i.userProfile.nick || i.userProfile.name,
                                uid: i.userProfile.uid
                            })
                        })
                    })
                }
                )
            },
            getLiveDetail: function(t, e) {
                return new Promise(function(n, i) {
                    dingtalk.grouplive.getLiveDetail(t, e, function(t, e) {
                        t ? i(t) : n(e)
                    })
                }
                )
            },
            getGroupOwerId: function() {
                return new Promise(function(t, e) {
                    dingtalk.conversation.getBaseConversation(C, function(n, i) {
                        n ? e(n) : t({
                            uid: i.ownerId
                        })
                    })
                }
                )
            },
            getMyOpenId: function() {
                return new Promise(function(t, e) {
                    dingtalk.my.getMyOpenId(C, function(n, i) {
                        n ? e(n) : t({
                            uid: i
                        })
                    })
                }
                )
            },
            closeWindow: function() {
                dingtalk.window.closeLiveWindow()
            },
            openStopLiveConfirm: function() {
                this.showStopLive = !0
            },
            closeStopLive: function() {
                this.showStopLive = !1
            },
            stopLive: function() {
                dingtalk.grouplive.stopLive(C, T, function(t, e) {}),
                this.closeWindow()
            },
            report: function() {
                dingtalk.grouplive.report(T, j)
            },
            addBarrageMessage: function(t) {
                if (this.msgList.push(t),
                this.msgList.length > 500) {
                    var e = this.msgList.length - 500;
                    this.msgList = this.msgList.splice(e)
                }
            },
            addLivePunchInfo: function(t) {
                t && t.livePunchId && (this.punchInfo = t)
            },
            showBarrageSwitch: function() {
                this.showBarrage = !this.showBarrage
            },
            isSurportBarrage: function() {
                try {
                    var t = /DingTalk\((\d+\.\d+\.\d+)/.exec(window.navigator.userAgent)[1];
                    this.isInitBarrageBtn = (0,
                    y.compareVersion)("4.3.0", t, !0)
                } catch (t) {}
            },
            isSurportApplyLink: function() {
                try {
                    var t = /DingTalk\((\d+\.\d+\.\d+)/.exec(window.navigator.userAgent)[1];
                    return (0,
                    y.compareVersion)("4.5.3", t, !1)
                } catch (t) {
                    return !1
                }
            },
            rotateVideo: function() {
                if (this.$refs.videox && this.$refs.videox.videox && this.$refs.videox.videox.videoDom) {
                    var t = this.$refs.videox.videox.videoDom
                      , e = this.$refs.videox.videox.rootElement
                      , n = this.rotateCounter;
                    this.videoRatio || (this.videoRatio = t.videoHeight / t.videoWidth),
                    t.style.transition || (t.style.transition = "0.5s linear"),
                    this.videoRatio < 1 ? this.crossScreenRotation(t, e, n) : t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)",
                    this.rotateCounter++
                }
            },
            crossScreenRotation: function(t, e, n) {
                var i = this
                  , r = this.rotateCounter % 4;
                this.oddRotateTimer && clearTimeout(this.oddRotateTimer),
                this.evenRotateTimer && clearTimeout(this.evenRotateTimer),
                1 === r || 3 === r ? (e.style.display = "flex",
                e.style.justifyContent = "center",
                this.oddRotateTimer = setTimeout(function() {
                    t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)",
                    t.style.width = 100 * i.videoRatio + "%",
                    t.style.height = "100%"
                }, 100)) : this.evenRotateTimer = setTimeout(function() {
                    t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)",
                    t.style.width = "100%",
                    t.style.height = "100%"
                }, 100)
            },
            recordRotatePosition: function() {
                var t = this;
                window.__videox && window.__videox.on("video:loadstart", function(e) {
                    if (t.$refs.videox && t.$refs.videox.videox && t.$refs.videox.videox.videoDom) {
                        var n = t.$refs.videox.videox.videoDom
                          , i = t.rotateCounter - 1;
                        n.style.display = "none",
                        n.style.transform = "rotate(-" + 90 * i + "deg)",
                        setTimeout(function(t) {
                            n.style.display = "block"
                        }, 500)
                    }
                })
            },
            switchClarityUrlHalder: function(t) {
                var e = this
                  , n = t.url
                  , i = t.name;
                this.$eventBus && this.$eventBus.$emit("video:url:switch:start"),
                this.signLiveUrl(C, T, n).then(function(n) {
                    e.playUrl = n,
                    e.currentUrlVO = t,
                    window.__videox.reload(n),
                    e.$eventBus && (i && (0,
                    y.toast)("SUCCESS", m.i18next.t("pc_grouplive_switch_clarity_success_text", {
                        value1: i
                    })),
                    e.$eventBus.$emit("video:url:switch:end"))
                }).catch(function(t) {
                    return e.toast(t.message)
                })
            },
            doLianmaiHandler: function() {
                var t = this;
                this.applyLink(C, T).then(function(e) {
                    t.hasAppliedLink = !0
                })
            },
            doCancelApplyLinkHandler: function() {
                var t = this;
                this.cancelApplyLink(C, T).then(function(e) {
                    t.hasAppliedLink = !1
                })
            },
            applyCountChange: function(t) {
                t.cid;
                var e = t.users;
                e && Array.isArray(e) && (this.linkingMembers = e)
            },
            addVedioClickEventEmiter: function() {
                var t = this
                  , e = this.$refs["v-barrage-wrap"]
                  , n = this.$refs["v-favor-wrap"];
                e && e.$el && (e.$el.onclick = function(e) {
                    t.$eventBus.$emit("videowrap:click")
                }
                ),
                n && n.$el && (n.$el.onclick = function(e) {
                    t.$eventBus.$emit("videowrap:click")
                }
                )
            },
            initObservable: function() {
                var t = this
                  , e = this.$refs["v-main"];
                if (e) {
                    var n = void 0
                      , i = void 0;
                    i = setTimeout(function() {
                        t.showHeaderAndControlSwitch = !1
                    }, 2e3),
                    this.hideCtlBarAndHeader$ = (0,
                    w.fromEvent)(e, "mousemove", {}, function(e) {
                        return i && (clearTimeout(i),
                        i = null),
                        t.showHeaderAndControlSwitch || (t.showHeaderAndControlSwitch = !0),
                        e
                    }).subscribe(function(e) {
                        n && (clearTimeout(n),
                        n = void 0);
                        var i = e.target.className;
                        if (!(["clarity-item", "lianmai-btn-wrap", "lianmai-preview-box-header", "lianmai-preview-box", "lianmai-btns", "webrtc-video", "lianmai-preview-box-confirm-btn", "lianmai-preview-box-cancel-btn", "lianmai-preview-box-view-btn", "lianmai-audio-visulization-box-canvas", "lianmai-audio-visulization-box-icon"].indexOf(i) > -1)) {
                            var r = t.$refs["v-control-btns"]
                              , o = t.$refs["v-header-bar"];
                            e.pageY > o.offsetTop + o.offsetHeight && e.pageY < r.offsetTop && (n = setTimeout(function() {
                                t.showHeaderAndControlSwitch && (t.showHeaderAndControlSwitch = !1)
                            }, 2e3))
                        }
                    })
                }
            },
            stallCounter: function() {
                var t = this;
                setTimeout(function() {
                    t.globalHasEndedLive || t.stallCount++
                }, 2e3)
            },
            isFirstFrameRenderedInSecond: function() {
                this.isFirstFrameRenderedInSec || (this.isFirstFrameRenderedInSec = 1)
            },
            firstFrameRenderedTime: function(t) {
                if (this.firstFrameRenderedMs < 0) {
                    var e = t.loadstartToPlayingTime
                      , n = t.pageReadyToPlayingTime;
                    this.firstFrameRenderedMs = e,
                    this.firstFrameRenderedMsFromDomready = n
                }
            },
            recordOpenCode: function(t) {
                void 0 !== t && (this.openCode = t)
            },
            recordOpenSuccess: function(t) {
                void 0 !== t && (this.isOpenSuc = t)
            },
            reportVideoQuota: function() {
                if (this.recordLiveQuota) {
                    this.stallCount >= 1 && (this.isStalled = 1);
                    var t = x.VIDDEO_CLARITY_ENUM.OTHERS;
                    this.currentUrlVO && void 0 !== this.currentUrlVO.enumNumber && (t = this.currentUrlVO.enumNumber);
                    var e = {
                        live_resolution: t,
                        broken_count: this.brokenCount,
                        is_broken: this.isBroken,
                        stall_count: this.stallCount,
                        is_stalled: this.isStalled,
                        is_first_frame_rendered_in_sec: this.isFirstFrameRenderedInSec,
                        first_frame_rendered_ms: this.firstFrameRenderedMs,
                        consume_from_dom_ready_to_first_frame: this.firstFrameRenderedMsFromDomready,
                        open_code: this.openCode,
                        is_open_suc: this.isOpenSuc
                    };
                    this.recordLiveQuota(C, T, e)
                }
            },
            fetchLiveData: function() {
                var t = this;
                this.getData(C, T, j).then(function() {
                    t.isSurportLocalSignedPlayUrl || t.$refs.videox.initPlayer(),
                    t.liveUrlVO && (t.isShowClaritySelector = !0)
                }).catch(function(e) {
                    -583 === (e || {}).code && t.myVideoxDestroy()
                }),
                Promise.all([this.getGroupOwerId(), this.getMyOpenId()]).then(function(e) {
                    var n = e[0]
                      , i = e[1]
                      , r = t.isSurportApplyLink();
                    n.uid !== i.uid && j !== i.uid || (t.stopLiveBtnVisible = !0),
                    r && j !== i.uid && (t.shouldShowApplyLinkBtn = !0),
                    t.myOpenId = i
                }),
                this.getLiveStats(C, T).then(function(e) {
                    var n = e.thumbsUp
                      , i = parseInt(n);
                    isNaN(i) || (t.favorCountType = "init",
                    t.favorCount = e.thumbsUp),
                    t.hasInitedLikesCount = !0
                }),
                this.getDisplayName().then(function(e) {
                    t.displayName = e.name
                }),
                this.getLiveDetail(C, T).then(function(e) {
                    var n = e.liveInfo
                      , i = n.status
                      , r = n.viewerShareType
                      , o = n.disableThumbup
                      , a = void 0 !== o && o;
                    t.viewCount = e.liveStats.audienceCount,
                    t.liveStatus = i,
                    t.viewerShareType = r,
                    t.disableThumbup = a,
                    2 === i && (t.status = "pause");
                    var s = e.activeLivePunch;
                    t.localLog("INFO", "getLiveDetail success, uuid: " + T + ", activeLivePunch: " + JSON.stringify(s)),
                    s && t.addLivePunchInfo(s)
                }),
                this.getApplyLinkData(C, T).then(function(e) {
                    var n = e[0].users;
                    n && Array.isArray(n) && n.length > 0 && (t.hasAppliedLink = !0,
                    t.linkingMembers = n)
                }).catch(function(t) {}),
                this.getLiveLatestMessage(C, (new Date).getTime() + "", x.LATEST_LIVE_BARRAGE_COUNT).then(function(e) {
                    e && Array.isArray(e) && e.length && (t.msgList = e.reverse())
                }).catch(function(t) {})
            },
            onShareHandler: function() {
                var t = this;
                dingtalk.grouplive && dingtalk.grouplive.showShareLinkWnd && dingtalk.grouplive.showShareLinkWnd(C, T, function(e, n) {
                    e ? t.localLog("INFO", "[showShareLinkWnd error][live uuid]" + T) : t.localLog("INFO", "[showShareLinkWnd success][live uuid]" + T)
                })
            },
            sendedCommentEvent: function() {
                this.showBarrage || (this.showBarrage = !0)
            },
            myVideoxDestroy: function() {
                try {
                    var t = document.querySelector("video");
                    t.muted = !0,
                    t && t.pause(),
                    t && t.parentNode && (t.parentNode.innerHTML = ""),
                    window.__videox && window.__videox.destroy && window.__videox.destroy()
                } catch (t) {
                    window.__videox && window.__videox.destroy && (this.destroyVideoxTimer = setTimeout(function() {
                        window.__videox.destroy()
                    }, 1e3))
                }
            },
            isSurportRpcSendBarrage: function() {
                try {
                    var t = /DingTalk\((\d+\.\d+\.\d+)/.exec(window.navigator.userAgent)[1];
                    this.isSurportRpcSendLiveText = (0,
                    y.compareVersion)("5.0.7", t, !0)
                } catch (t) {}
            }
        },
        created: function() {
            this.cid = C,
            this.uuid = T,
            this.anchorId = j
        },
        mounted: function() {
            var t = this;
            window.__WPO && window.__WPO.logPageMount(),
            dingtalk.grouplive.getLivePlayUrl ? (this.isSurportLocalSignedPlayUrl = !0,
            this.getLiveSignedPlayUrl(C, T).then(function(e) {
                t.$refs.videox.initPlayer(),
                t.fetchLiveData()
            }).catch(function(t) {})) : this.fetchLiveData();
            if (this.bindLog(C, T, 1),
            this.bindOverEvent(C, T, j),
            this.addVedioClickEventEmiter(),
            this.likeCounterTimer = setInterval(function() {
                // t.favorCountCache > 0 && (dingtalk.grouplive.uploadLikesClick(T, t.favorCountCache), t.favorCountCache = 0)
                if (t.favorCountCache > 0)
                {
                    // t.favorCount = t.favorCount + 20;
                    dingtalk.grouplive.uploadLikesClick(H, 20);
                    --t.favorCountCache;
                }
            }, 1e-2),
            this.showCrossBarrage) {
                var e = document.getElementById("canvasBarrage");
                this.canvasBarrage = new b.default(e,{
                    data: []
                })
            }
            (0,
            k.getGrayValueOfCssconfigByKey)("im_live_comment_degrade").then(function(e) {
                "true" !== e && t.isSurportBarrage()
            }),
            (0,
            y.boolValueForModuleKey)("live", "enable_grouplive_send_coment").then(function(e) {
                t.enableSendCommentGrayer = e
            }),
            (0,
            y.boolValueForModuleKey)("live", "enable_foreign_live_comment").then(function(e) {
                t.enableLiteRpcSendCommentGrayer = e
            }),
            (0,
            y.boolValueForModuleKey)("live", "enable_new_live_comment").then(function(e) {
                t.enableRpcSendCommentGrayer = e
            }),
            this.isFirstTimeUserApplyLinkFunc().then(function(e) {
                t.isFirstTimeUserApplyLinkFlag = !e
            }).catch(function() {}),
            this.initObservable(),
            window.addEventListener("beforeunload", function(e) {
                t.hasAppliedLink && t.doCancelApplyLinkHandler(),
                t.reportVideoQuota()
            }),
            (0,
            y.checkIsClassGroup)(C).then(function(e) {
                t.isEducationGroup = e
            }),
            this.isSurportRpcSendBarrage()
        },
        destroyed: function() {
            this.hideCtlBarAndHeader$ && this.hideCtlBarAndHeader$.unsubscribe(),
            this.likeCounterTimer && clearInterval(this.likeCounterTimer),
            this.destroyVideoxTimer && clearInterval(this.destroyVideoxTimer),
            window.removeEventListener("beforeunload")
        }
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(171), n(172), !1, function(t) {
        n(169)
    }, "data-v-6b95405c", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(170);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("f263bfea", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n@-webkit-keyframes flash-data-v-6b95405c{\n0%{opacity:1\n}\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes flash-data-v-6b95405c{\n0%{opacity:1\n}\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n.anchor-wrap[data-v-6b95405c]{-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;height:.853333rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(rgba(25,31,37,.36),rgba(25,31,37,0));background:linear-gradient(rgba(25,31,37,.36),rgba(25,31,37,0))\n}\n.anchor-info[data-v-6b95405c],.anchor-wrap[data-v-6b95405c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal\n}\n.anchor-info[data-v-6b95405c]{color:#fff;text-shadow:0 .026667rem .026667rem rgba(0,0,0,.5);height:100%;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:.16rem\n}\n.anchor-name[data-v-6b95405c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:.186667rem;height:.213333rem;line-height:1;margin-bottom:.106667rem\n}\n.anchor-name>span[data-v-6b95405c]:first-child{-webkit-transform:translateX(.04rem);transform:translateX(.04rem)\n}\n.live-info[data-v-6b95405c]{font-size:.16rem;height:.16rem;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start\n}\n.dot[data-v-6b95405c]{border-radius:.08rem;width:.08rem;height:.08rem;margin-left:.053333rem;-webkit-animation:flash-data-v-6b95405c 2s infinite;animation:flash-data-v-6b95405c 2s infinite\n}\n.dot[data-v-6b95405c],.status[data-v-6b95405c]{background:#f25643\n}\n.status[data-v-6b95405c]{border-radius:.026667rem;padding:.053333rem;text-shadow:none;-webkit-transform:scale(.83);transform:scale(.83)\n}\n.view-status[data-v-6b95405c]{margin-left:.266667rem;padding-left:.333333rem;background-repeat:no-repeat;background-position:left center;background-size:contain;background-image:url(https://gw.alicdn.com/tfs/TB1F8Uwf0zJ8KJjSspkXXbF7VXa-24-24.png);height:.266667rem;line-height:.266667rem\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    n(20);
    var i, r = n(8), o = n(87), a = (i = o) && i.__esModule ? i : {
        default: i
    };
    e.default = {
        props: {
            title: {
                default: ""
            },
            type: {
                default: ""
            },
            viewCount: {
                default: "-"
            },
            status: {
                default: "living"
            },
            liveType: {
                default: 0
            }
        },
        components: {
            vLiveTypeTag: a.default
        },
        data: function() {
            return {
                liveStatusText: r.i18next.t("pc_grouplive_live_status"),
                pauseStatusText: r.i18next.t("pc_grouplive_pause_status"),
                viewerText: r.i18next.t("pc_grouplive_live_views")
            }
        },
        created: function() {},
        mounted: function() {},
        methods: {},
        watch: {},
        filters: {},
        computed: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "anchor-wrap"
            }, [n("div", {
                staticClass: "anchor-info"
            }, [n("p", {
                staticClass: "anchor-name"
            }, [n("span", [t._v(t._s(t.title))]), t._v(" "), n("v-live-type-tag", {
                attrs: {
                    "live-type": t.liveType
                }
            })], 1), t._v(" "), "live" === t.type ? n("p", {
                staticClass: "live-info"
            }, [n("span", {
                staticClass: "status"
            }, [t._v(t._s("living" === t.status ? t.liveStatusText : t.pauseStatusText))]), t._v(" "), n("span", {
                staticClass: "dot"
            }), t._v(" "), n("span", {
                staticClass: "view-status"
            }, [t._v(t._s(t.viewCount) + " " + t._s(t.viewerText))])]) : t._e()])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(176), n(177), !1, function(t) {
        n(174)
    }, "data-v-e6bde73e", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(175);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("2600414a", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.control-wrap[data-v-e6bde73e]{color:#fff;font-size:.16rem;text-shadow:0 .026667rem .026667rem rgba(0,0,0,.5)\n}\n.division[data-v-e6bde73e]{display:inline-block;padding-left:.066667rem;padding-right:.066667rem\n}\n.handler[data-v-e6bde73e]{cursor:pointer\n}\n.live-intro-wrap[data-v-e6bde73e]{position:relative;display:inline-block\n}\n.live-intro-iframe[data-v-e6bde73e]{position:absolute;top:.373333rem;right:-50%;width:5.333333rem;height:2.666667rem\n}\n.live-intro-iframe>iframe[data-v-e6bde73e]{width:5.333333rem;height:100%;border-radius:.08rem\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(8), o = n(26), a = (i = o) && i.__esModule ? i : {
        default: i
    };
    e.default = {
        mixins: [a.default],
        props: {
            stopVisible: {
                default: !1
            }
        },
        components: {},
        data: function() {
            return {
                positionText: r.i18next.t("pc_grouplive_live_player_force_stop_ok_btn"),
                reportText: r.i18next.t("pc_grouplive_live_player_report"),
                liveIntroText: r.i18next.t("pc_grouplive_introduction_btn_text"),
                liveIntroVisible: !1,
                liveIntroSwitch: !1,
                introPageUrl: ""
            }
        },
        created: function() {
            this.liveIntroVisible = "zh-CN" === r.i18next.language,
            this.introPageUrl = "https://h5.m.taobao.com/tblive/dingtalk/live-introduce.html"
        },
        mounted: function() {
            this.subscribeVideoWrapClickListener()
        },
        methods: {
            click: function() {
                this.$emit("click")
            },
            report: function() {
                this.$emit("report")
            },
            showOrHideIntroduce: function() {
                this.liveIntroSwitch = !this.liveIntroSwitch,
                __WPO && __WPO.custom("count", "live_introduction_view")
            },
            subscribeVideoWrapClickListener: function() {
                var t = this;
                this.$eventBus.$on("videowrap:click", function(e) {
                    t.liveIntroSwitch && (t.liveIntroSwitch = !1)
                })
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "control-wrap"
            }, [t.stopVisible ? n("span", {
                staticClass: "handler",
                on: {
                    click: t.click
                }
            }, [t._v(t._s(t.positionText))]) : t._e(), t._v(" "), t.stopVisible ? n("span", {
                staticClass: "division"
            }, [t._v("|")]) : t._e(), t._v(" "), t.liveIntroVisible ? n("div", {
                staticClass: "live-intro-wrap"
            }, [n("span", {
                staticClass: "handler",
                on: {
                    click: t.showOrHideIntroduce
                }
            }, [t._v(t._s(t.liveIntroText))]), t._v(" "), n("span", {
                staticClass: "division"
            }, [t._v("|")]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.liveIntroSwitch,
                    expression: "liveIntroSwitch"
                }],
                staticClass: "live-intro-iframe"
            }, [n("iframe", {
                attrs: {
                    src: t.introPageUrl,
                    frameborder: "”no”",
                    border: "”0″",
                    marginwidth: "”0″",
                    marginheight: "”0″",
                    scrolling: "”no”",
                    allowtransparency: "”yes”"
                }
            })])]) : t._e(), t._v(" "), n("span", {
                staticClass: "handler",
                on: {
                    click: t.report
                }
            }, [t._v(t._s(t.reportText))])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(181), n(182), !1, function(t) {
        n(179)
    }, "data-v-225471da", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(180);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("687e2273", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.video-wrap[data-v-225471da]{position:relative;width:100%;height:100%;background-color:#000\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = s(n(101))
      , r = s(n(26))
      , o = n(8)
      , a = n(27);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        mixins: [r.default],
        props: {
            type: {
                default: "live"
            },
            src: {
                default: ""
            },
            cid: {
                default: ""
            },
            uuid: {
                default: ""
            },
            anchorId: {
                default: ""
            },
            displayName: {
                default: ""
            },
            liveStatus: {
                default: 0
            }
        },
        components: {},
        data: function() {
            return {
                hasPlayed: !1,
                isSwitchingClarity: !1
            }
        },
        created: function() {},
        mounted: function() {
            var t = this;
            this.$eventBus.$on("video:pause", function(e) {
                t.videox && t.videox.pause(),
                "live" === t.type && t.clearTimer()
            }),
            this.$eventBus.$on("video:url:switch:start", function(e) {
                t.isSwitchingClarity = !0
            }),
            this.$eventBus.$on("video:url:switch:end", function(e) {
                setTimeout(function() {
                    t.isSwitchingClarity = !1
                }, 2e3)
            })
        },
        methods: {
            initPlayer: function() {
                var t = this
                  , e = this
                  , n = "live" !== this.type
                  , r = "live" !== this.type
                  , a = {};
                "live" === this.type && (a = {
                    isLive: !0
                }),
                this.src && (this.videox = new i.default({
                    container: this.$refs["video-wrap"],
                    from: "dingtalk-group-live",
                    url: this.src,
                    controls: n,
                    autoplay: !0,
                    volumeControls: r,
                    flvOptions: a,
                    stalledText: o.i18next.t("pc_grouplive_live_player_pausing")
                }),
                window.__videox = this.videox,
                window.__videox.on("video:error", function(e) {
                    t.showErrorMsg(e),
                    t.logError(e)
                }),
                window.__videox.on("video:playing", function(e) {
                    t.localLog("INFO", "initPlayer success and success to play; isLive=" + !n + " and live uuid=" + t.uuid)
                }),
                window.__videox.on("vx:playererror", function(e) {
                    var i = void 0;
                    try {
                        i = JSON.stringify(e)
                    } catch (t) {
                        i = "stringify error object failed"
                    }
                    t.localLog("ERROR", "[vx:playererror]" + i + "[isLive]" + !n + "[uuid]" + t.uuid)
                }),
                this.$refs["video-wrap"].ondblclick = function() {
                    e.liveToggleFullScreen()
                }
                ,
                this.$refs["video-wrap"].onclick = function() {
                    e.$eventBus.$emit("videowrap:click")
                }
                ,
                this.recordVideoQuota(),
                this.retCodeLogStuckInfo())
            },
            clearContainer: function() {
                this.$refs["video-wrap"] && (this.$refs["video-wrap"].innerHTML = ""),
                this.clearTimer()
            },
            showErrorMsg: function(t) {
                var e = this.liveStatus
                  , n = void 0;
                if (window.__videox.updateErrorMsg)
                    if (2 === e)
                        n = a.LIVE_OPEN_CODE.OPEN_LIVE_PAUSE;
                    else if (1 === e) {
                        var i = t.errorCode
                          , r = t.isSupport;
                        i ? "NETWORK_TIMEOUT" === i ? (n = a.LIVE_OPEN_CODE.NETWORK_TIMEOUT,
                        window.__videox.updateErrorMsg(o.i18next.t("pc_grouplive_live_player_network_timeout_text"))) : "NETWORK_NO_SOURCE" === i ? (n = a.LIVE_OPEN_CODE.NETWORK_NO_SOURCE,
                        window.__videox.updateErrorMsg(o.i18next.t("pc_grouplive_live_player_network_timeout_text"))) : (n = a.LIVE_OPEN_CODE.OPEN_LIVE_OTHERS,
                        window.__videox.updateErrorMsg(o.i18next.t("pc_grouplive_live_player_stalled_text"))) : void 0 !== r && !1 === r && (n = a.LIVE_OPEN_CODE.CEF_NOT_SUPPORT_FLV,
                        window.__videox.updateErrorMsg(o.i18next.t("pc_grouplive_live_player_unsurpport_text")))
                    }
                this.hasPlayed || this.$emit("openCode", n)
            },
            recordVideoQuota: function() {
                var t = this;
                if (window.__videox) {
                    var e = void 0
                      , n = void 0
                      , i = void 0
                      , r = void 0;
                    window.__videox.on("video:loadstart", function(t) {
                        n = (new Date).getTime()
                    }),
                    window.__videox.on("video:playing", function(o) {
                        if (t.hasPlayed || (t.hasPlayed = !0,
                        t.recordUserExperience(),
                        window.__videox.rootElement && window.__videox.rootElement.querySelector("video") && (t.stuckIntervalTimer = t.detectVideoStuck(window.__videox.rootElement.querySelector("video"))),
                        t.$emit("openSuccess", a.LIVE_OPEN_SUCCESS_CODE.OPEN_LIVE_SUCCESS)),
                        !e) {
                            var s = (new Date).getTime();
                            i = s - n,
                            r = s - window.pageDomReadyTime;
                            var u = {
                                loadstartToPlayingTime: i,
                                pageReadyToPlayingTime: r
                            };
                            t.$emit("renderSecondTime", u),
                            i <= 1e3 && t.$emit("renderSecond"),
                            e = !0
                        }
                    }),
                    window.__videox.on("video:error", function(e) {
                        t.recordUserExperience(e)
                    })
                }
            },
            recordUserExperience: function(t) {
                if (this.startWatching && !this.hasCallStartWatching) {
                    if (t) {
                        var e = t.errorCode
                          , n = t.isSupport
                          , i = void 0;
                        e ? "NETWORK_TIMEOUT" === e ? i = a.LIVE_ERROR_CODE.NETWORK_TIMEOUT : "NETWORK_NO_SOURCE" === e && (i = a.LIVE_ERROR_CODE.NETWORK_NO_SOURCE) : i = void 0 !== n && !1 === n ? a.LIVE_ERROR_CODE.CEF_NOT_SUPPORT_FLV : a.LIVE_ERROR_CODE.OTHERS_ERROR,
                        this.hasPlayed || this.startWatching(this.cid, this.uuid, {
                            is_open_suc: !1,
                            err_code: i,
                            type: 1
                        })
                    } else
                        this.hasPlayed && this.startWatching(this.cid, this.uuid, {
                            is_open_suc: !0,
                            err_code: a.LIVE_ERROR_CODE.LIVE_SUCCESS,
                            type: 1
                        });
                    this.hasCallStartWatching = !0
                }
            },
            logError: function(t) {
                var e = void 0
                  , n = void 0
                  , i = "live" !== this.type;
                if (t) {
                    var r = {
                        errorCode: t.errorCode,
                        message: t.message,
                        name: t.name,
                        url: this.src,
                        cid: this.cid,
                        uuid: this.uuid,
                        anchorId: this.anchorId,
                        displayName: this.displayName
                    };
                    __WPO.log(JSON.stringify({
                        errorCode: t.errorCode,
                        message: t.message,
                        name: t.name,
                        cid: this.cid,
                        uuid: this.uuid
                    }), 1),
                    n = r
                } else
                    __WPO.log("has no error message", 1),
                    n = "has no error message";
                try {
                    e = JSON.stringify(t)
                } catch (t) {
                    e = JSON.stringify(t)
                }
                this.vipAlarm("GroupLive fail to play", [{
                    key: "error",
                    value: JSON.stringify(n)
                }, {
                    key: "internalError",
                    value: e
                }]),
                this.localLog("ERROR", "player fail to play, internal error: " + e + "; isLive=" + !i + " and live uuid=" + this.uuid)
            },
            retCodeLogStuckInfo: function() {
                var t = this
                  , e = void 0
                  , n = void 0;
                window.__videox.on("video:playing", function(i) {
                    if (e) {
                        var r = {
                            stuckTime: (new Date).getTime() - n,
                            uuid: t.uuid,
                            cid: t.cid
                        };
                        __WPO && __WPO.log(JSON.stringify(r), 1)
                    }
                    e = !1
                }),
                window.__videox.on("video:waiting", function(i) {
                    t.hasPlayed && (e = !0,
                    n = (new Date).getTime())
                })
            },
            detectVideoStuck: function(t, e) {
                var n = this
                  , i = void 0;
                if (!t)
                    return i;
                var r = e || 500
                  , o = 0
                  , a = 0
                  , s = !1;
                return i = setInterval(function() {
                    a = t.currentTime;
                    var e = (r - 200) / 1e3;
                    !s && a < o + e && !t.paused && (s = !0,
                    n.isSwitchingClarity || (n.$emit("waiting"),
                    n.localLog("INFO", "detected video stuck [uuid]" + n.uuid))),
                    s && a > o + e && !t.paused && (s = !1),
                    o = a
                }, r)
            },
            clearTimer: function() {
                this.stuckIntervalTimer && clearInterval(this.stuckIntervalTimer)
            }
        },
        watch: {},
        destroyed: function() {
            this.clearTimer()
        }
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                ref: "video-wrap",
                staticClass: "video-wrap"
            })
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(186), n(187), !1, function(t) {
        n(184)
    }, null, null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(185);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("1371392f", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n::-webkit-scrollbar{display:none\n}\n.message-barrage-wrap-65dj{position:absolute;bottom:1.2rem;left:0;width:40%;height:30%;max-height:5.333333rem;overflow-x:hidden;overflow-y:scroll;background-color:transparent;z-index:9\n}\n.barrage-item-65dj{float:left;clear:both;margin:0 .2rem .066667rem;padding:.053333rem;background:rgba(0,0,0,.4);border-radius:.046667rem;font-size:.2rem;line-height:.266667rem;letter-spacing:-.0032rem;text-shadow:0 .013333rem .013333rem rgba(0,0,0,.56)\n}\n.chat-message-content-wrap-65dj{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;color:#fff\n}\n.username-65dj{color:#3296fa\n}\n.chat-message-65dj,.chat-message-colon-65dj{color:#fff\n}\n.specail-message-65dj{color:#ff943e;text-shadow:0 .013333rem .013333rem rgba(0,0,0,.5)\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    n(8);
    e.default = {
        props: {
            msgList: {
                default: []
            },
            newChatMsg: {},
            showBarrage: {
                default: !0
            }
        },
        components: {},
        data: function() {
            return {}
        },
        created: function() {},
        mounted: function() {},
        methods: {},
        watch: {
            msgList: function(t, e) {
                var n = this.$refs["message-barrage-wrap"];
                setTimeout(function() {
                    n.scrollTop = n.scrollHeight
                }, 300)
            },
            showBarrage: function(t, e) {
                var n = this.$refs["message-barrage-wrap"];
                t ? n.removeAttribute("style") : n.style.display = "none"
            }
        },
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "message-barrage-wrap",
                staticClass: "message-barrage-wrap-65dj"
            }, t._l(t.msgList, function(e, i) {
                return n("div", {
                    staticClass: "barrage-item-65dj"
                }, [0 === e.type ? n("span", [n("span", {
                    staticClass: "specail-message-65dj",
                    domProps: {
                        textContent: t._s(e.content)
                    }
                })]) : n("span", {
                    staticClass: "chat-message-content-wrap-65dj"
                }, [n("span", {
                    staticClass: "username-65dj",
                    domProps: {
                        textContent: t._s(e.username)
                    }
                }), t._v(" "), e.username ? n("span", {
                    staticClass: "chat-message-colon-65dj"
                }, [t._v(":")]) : t._e(), t._v(" "), t._v("\n            " + t._s(e.content) + "\n        ")])])
            }), 0)
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(191), n(192), !1, function(t) {
        n(189)
    }, "data-v-39017211", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(190);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("186feee7", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.rotate-switch-wrap[data-v-39017211]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-39017211]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(//img.alicdn.com/tfs/TB1GYnqJbSYBuNjSspiXXXNzpXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-release[data-v-39017211]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-39017211]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8);
    e.default = {
        props: {},
        components: {},
        data: function() {
            return {
                activitCls: "",
                tips: i.i18next.t("pc_grouplive_live_player_rotate_btn_tips")
            }
        },
        created: function() {},
        mounted: function() {},
        methods: {
            rotate: function() {
                var t = this;
                this.debounceFlag || (this.debounceFlag = !0,
                this.clickTimeOut && clearTimeout(this.clickTimeOut),
                this.activitCls = "switch-btn-release",
                this.clickTimeOut = setTimeout(function() {
                    t.activitCls = "",
                    t.debounceFlag = !1
                }, 300),
                this.$emit("rotate"))
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "rotate-switch-wrap"
            }, [e("div", {
                staticClass: "switch-container",
                attrs: {
                    title: this.tips
                }
            }, [e("div", {
                ref: "btn",
                class: ["switch-btn", this.activitCls],
                on: {
                    click: this.rotate
                }
            })])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(196), n(197), !1, function(t) {
        n(194)
    }, "data-v-72fb8f74", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(195);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("64953fa5", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.clarity-selector-wrap[data-v-72fb8f74]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#fff;font-size:.16rem\n}\n.clarity-items-wrap[data-v-72fb8f74]{position:absolute;bottom:.546667rem;left:20%;display:none;width:.853333rem;border:.013333rem solid hsla(0,0%,100%,.12);background:rgba(2,2,2,.72);border-radius:.08rem\n}\n.clarity-item[data-v-72fb8f74]{padding:.066667rem .026667rem;text-align:center;cursor:pointer\n}\n.active[data-v-72fb8f74]{color:#0089ff\n}\n.clarity-item[data-v-72fb8f74]:hover{background:hsla(0,0%,100%,.12)\n}\n.selector-btn[data-v-72fb8f74]{-webkit-box-flex:1.0;-webkit-flex:1.0;flex:1.0;cursor:pointer;width:.853333rem;height:.533333rem;line-height:.533333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap\n}\n.icon-down[data-v-72fb8f74]{width:.266667rem\n}\n.arrow-down[data-v-72fb8f74]{content:'';width:0;height:0;border-left:.053333rem solid transparent;border-right:.053333rem solid transparent;border-top:.053333rem solid #fff\n}\n.selector-container[data-v-72fb8f74]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:.853333rem;height:.533333rem;margin-left:.2rem;border-radius:.666667rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);cursor:pointer\n}\n.clarity-selector-wrap:hover .clarity-items-wrap[data-v-72fb8f74]{display:block\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    n(8);
    e.default = {
        props: {
            liveUrlVO: {
                default: {}
            },
            playUrlArr: {
                default: []
            },
            current: {
                default: {
                    name: "",
                    url: ""
                }
            }
        },
        components: {},
        data: function() {
            return {
                activitCls: ""
            }
        },
        created: function() {},
        computed: {},
        mounted: function() {},
        methods: {
            switchClarityUrl: function(t, e) {
                t.url !== this.current.url && this.$emit("switchClarityUrlHalder", t)
            },
            isActive: function(t) {
                return t.url === this.current.url ? "active" : ""
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "clarity-selector-wrap"
            }, [n("div", {
                staticClass: "clarity-items-wrap"
            }, [n("ul", t._l(t.playUrlArr, function(e, i) {
                return n("li", {
                    class: ["clarity-item", t.isActive(e)],
                    on: {
                        click: function(n) {
                            return t.switchClarityUrl(e)
                        }
                    }
                }, [t._v(t._s(e.name))])
            }), 0)]), t._v(" "), n("div", {
                staticClass: "selector-container"
            }, [n("div", {
                staticClass: "selector-btn"
            }, [t._v(t._s(t.current.name))]), t._v(" "), t._m(0)])])
        },
        staticRenderFns: [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "icon-down"
            }, [e("div", {
                staticClass: "arrow-down"
            })])
        }
        ]
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(201), n(212), !1, function(t) {
        n(199)
    }, "data-v-7ad0261b", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(200);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("635b796c", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.lianmai-btn-wrap[data-v-7ad0261b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#fff;font-size:.16rem\n}\n.lianmai-btn-wrap[data-v-7ad0261b],.lianmai-member-list-container[data-v-7ad0261b],.members-and-btn-wrap[data-v-7ad0261b]{display:-webkit-box;display:-webkit-flex;display:flex\n}\n.lianmai-member-list-container[data-v-7ad0261b]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-right:.213333rem\n}\n.lianmai-member-list-header[data-v-7ad0261b]{font-size:.186667rem;color:#333;margin:.133333rem 0 .133333rem .2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.lianmai-member-list[data-v-7ad0261b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1.0;-webkit-flex:1.0;flex:1.0;overflow-y:scroll\n}\n.lianmai-member[data-v-7ad0261b]{height:.533333rem;width:.533333rem;border-radius:50%;background:#3296fa;border:.013333rem solid #fff\n}\n.lianmai-member-num[data-v-7ad0261b]{background:#fff;font-size:.186667rem;color:rgba(25,31,37,.72);letter-spacing:-.002933rem\n}\n.lianmai-member-avatar[data-v-7ad0261b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.lianmai-member-avatar[data-v-7ad0261b],.lianmai-member-avatar img[data-v-7ad0261b]{height:.533333rem;width:.533333rem;border-radius:50%\n}\n.lianmai-member-nick[data-v-7ad0261b]{font-size:.173333rem;color:#333\n}\n.btn-container[data-v-7ad0261b]{width:.533333rem;margin-right:.4rem;border-radius:.666667rem;cursor:pointer\n}\n.btn[data-v-7ad0261b]{position:relative;-webkit-transform:scale(1);transform:scale(1);padding:0 .026667rem\n}\n.btn-active[data-v-7ad0261b]{background:#3296fa\n}\n.btn-text[data-v-7ad0261b]{max-width:1.333333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.new-red-dot[data-v-7ad0261b]{position:absolute;top:-.093333rem;right:-.026667rem;width:.08rem;height:.08rem;border-radius:50%;background:#f25643\n}\n.lianmai-btns[data-v-7ad0261b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:.64rem;padding:0 .213333rem\n}\n.link-mic-btn[data-v-7ad0261b]{cursor:pointer;width:.533333rem;height:.533333rem;max-height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(//gw.alicdn.com/tfs/TB1mPgayNn1gK0jSZKPXXXvUXXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.link-mic-btn-edu[data-v-7ad0261b]{background-image:url(//gw.alicdn.com/tfs/TB13n3dyKL2gK0jSZFmXXc7iXXa-48-48.png)\n}\n.link-mic-btn-edu[data-v-7ad0261b]:hover{background-image:url(//gw.alicdn.com/tfs/TB1opAeyND1gK0jSZFKXXcJrVXa-48-48.png)\n}\n.btn-active .link-mic-btn[data-v-7ad0261b]{background-color:transparent\n}\n.btn-active .link-mic-btn-edu[data-v-7ad0261b]{background-image:url(//gw.alicdn.com/tfs/TB1opAeyND1gK0jSZFKXXcJrVXa-48-48.png)\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(8), o = n(26), a = (i = o) && i.__esModule ? i : {
        default: i
    }, s = n(130);
    e.default = {
        mixins: [a.default],
        props: {
            linkingMembers: {
                default: []
            },
            hasAppliedLink: {
                default: !1
            },
            isNewUser: {
                default: !0
            },
            isEducationGroup: {
                default: !1
            }
        },
        components: {},
        data: function() {
            return {
                activitCls: "",
                userProfiles: [],
                shouldShowNewRedDot: !0,
                linkingWatingLable: r.i18next.t("pc_grouplive_apply_link_waiting_text"),
                isDingTalkLiteVerion: (0,
                s.isDingTalkLite)()
            }
        },
        created: function() {},
        computed: {
            lianmaiBtnText: function() {
                return this.isEducationGroup ? r.i18next.t("pc_grouplive_edu_apply_link_btn_text") : r.i18next.t("pc_grouplive_apply_link_btn_text")
            },
            cancelLianmaiBtnText: function() {
                return this.isEducationGroup ? r.i18next.t("pc_grouplive_edu_apply_link_cancle_btn_text") : r.i18next.t("pc_grouplive_apply_link_cancel_btn_text")
            }
        },
        mounted: function() {},
        methods: {
            toggleClickLinmaiBtn: function() {
                this.linkingMembers.length <= 0 ? this.handleLianmai() : this.handleCancelApplyLink(),
                this.isNewUser && (this.shouldShowNewRedDot = !1,
                this.setNativeHasApplied())
            },
            handleCancelApplyLink: function() {
                this.$emit("cancelLinmaiHandler"),
                this.activitCls = "",
                __WPO && __WPO.custom("count", "group_live_cancel_apply_link_click")
            },
            handleLianmai: function() {
                this.$emit("lianmaiHandler"),
                this.activitCls = "btn-active",
                __WPO && __WPO.custom("count", "group_live_apply_link_click")
            }
        },
        watch: {
            linkingMembers: function(t, e) {
                if (t.length > 0) {
                    var n = t.slice(-3).reverse();
                    this.userProfiles = n
                } else
                    this.userProfiles = []
            }
        },
        filters: {}
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(131)
      , r = n(131);
    e.ENV_ENUM = r.ENV_ENUM,
    e.APP_TYPE = r.APP_TYPE,
    e.ENV_ENUM_SUB = r.ENV_ENUM_SUB;
    var o, a = n(204);
    !function(t) {
        t.singlePage = "singlePage",
        t.miniApp = "miniApp",
        t.miniWidget = "miniWidget"
    }(o || (o = {})),
    e.getUA = function() {
        var t = "";
        try {
            "undefined" != typeof navigator && (t = navigator && (navigator.userAgent || navigator.swuserAgent) || "")
        } catch (e) {
            t = ""
        }
        return t
    }
    ,
    e.getENV = function() {
        var t = e.getUA()
          , n = /iPhone|iPad|iPod|iOS/i.test(t)
          , r = /Android/i.test(t)
          , s = /Nebula/i.test(t)
          , u = /DingTalk/i.test(t)
          , c = /dd-web/i.test(t)
          , l = "object" == typeof nuva
          , d = "object" == typeof dd && "function" == typeof dd.dtBridge
          , f = d && n || l && n
          , p = u || a.default.isDingTalk
          , h = n && p || a.default.isWeexiOS || f
          , v = r && p || a.default.isWeexAndroid
          , g = s && p || d
          , _ = c
          , m = i.APP_TYPE.WEB;
        if (_)
            m = i.APP_TYPE.WEBVIEW_IN_MINIAPP;
        else if (g)
            m = i.APP_TYPE.MINI_APP;
        else if (a.default.isWeexiOS || a.default.isWeexAndroid)
            try {
                m = weex.config.ddWeexEnv === o.miniWidget ? i.APP_TYPE.WEEX_WIDGET : i.APP_TYPE.WEEX
            } catch (t) {
                m = i.APP_TYPE.WEEX
            }
        var b, y, w = "*", x = t.match(/AliApp\(\w+\/([a-zA-Z0-9.-]+)\)/);
        null === x && (x = t.match(/DingTalk\/([a-zA-Z0-9.-]+)/)),
        x && x[1] && (y = x[1]);
        var k = "";
        if ("undefined" != typeof name && (k = name),
        k)
            try {
                var O = JSON.parse(k);
                O.hostVersion && (y = O.hostVersion),
                w = O.language || navigator.language || "*",
                b = O.containerId
            } catch (t) {}
        var E, S = !!b;
        S && !y && (x = t.match(/DingTalk\(([a-zA-Z0-9\.-]+)\)/)) && x[1] && (y = x[1]);
        var C = i.ENV_ENUM_SUB.noSub;
        if (h)
            E = i.ENV_ENUM.ios;
        else if (v)
            E = i.ENV_ENUM.android;
        else if (S) {
            C = t.indexOf("Macintosh; Intel Mac OS") > -1 ? i.ENV_ENUM_SUB.mac : i.ENV_ENUM_SUB.win,
            E = i.ENV_ENUM.pc
        } else
            E = i.ENV_ENUM.notInDingTalk;
        return {
            platform: E,
            platformSub: C,
            version: y,
            appType: m,
            language: w
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isFunction = function(t) {
        return "function" == typeof t
    }
    ,
    e.compareVersion = function(t, e) {
        function n(t) {
            return parseInt(t, 10) || 0
        }
        for (var i = t.split(".").map(n), r = e.split(".").map(n), o = 0; o < i.length; o++) {
            if (void 0 === r[o])
                return !1;
            if (i[o] < r[o])
                return !1;
            if (i[o] > r[o])
                return !0
        }
        return !0
    }
    ,
    function(t) {
        t.cancel = "-1",
        t.not_exist = "1",
        t.no_permission = "7",
        t.jsapi_internal_error = "22"
    }(e.ERROR_CODE || (e.ERROR_CODE = {})),
    function(t) {
        t.pc = "pc",
        t.android = "android",
        t.ios = "ios",
        t.notInDingTalk = "notInDingTalk"
    }(e.ENV_ENUM || (e.ENV_ENUM = {})),
    function(t) {
        t.mac = "mac",
        t.win = "win",
        t.noSub = "noSub"
    }(e.ENV_ENUM_SUB || (e.ENV_ENUM_SUB = {})),
    function(t) {
        t.WEB = "WEB",
        t.MINI_APP = "MINI_APP",
        t.WEEX = "WEEX",
        t.WEBVIEW_IN_MINIAPP = "WEBVIEW_IN_MINIAPP",
        t.WEEX_WIDGET = "WEEX_WIDGET"
    }(e.APP_TYPE || (e.APP_TYPE = {})),
    function(t) {
        t[t.INFO = 1] = "INFO",
        t[t.WARNING = 2] = "WARNING",
        t[t.ERROR = 3] = "ERROR"
    }(e.LogLevel || (e.LogLevel = {}))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(205)
      , r = n(206)
      , o = n(132)
      , a = i.default().split(".")
      , s = a[0]
      , u = a[1];
    var c = function() {
        var t = {};
        switch (u) {
        case o.FRAMEWORK.VUE:
            var e = weex.config.env;
            t.platform = e.platform,
            o.RUNTIME.WEEX === s && (t.appVersion = e.appVersion,
            t.appName = e.appName);
            break;
        case o.FRAMEWORK.RAX:
            o.RUNTIME.WEEX === s && (t.platform = navigator.platform,
            t.appName = navigator.appName,
            t.appVersion = navigator.appVersion);
            break;
        case o.FRAMEWORK.UNKNOWN:
            o.RUNTIME.WEB === s && (t.platform = o.RUNTIME.WEB),
            o.RUNTIME.UNKNOWN === s && (t.platform = o.RUNTIME.UNKNOWN)
        }
        return t
    }()
      , l = r.default(s, u, c);
    e.default = l
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "undefined" != typeof window
      , r = "undefined" != typeof weex
      , o = "undefined" != typeof callNative
      , a = ["__weex_config__", "__weex_options__", "__weex_require__"]
      , s = ["localStorage", "location", "navigator", "XMLHttpRequest"]
      , u = ["config", "requireModule", "document"];
    function c(t, e) {
        for (var n = t.length, i = 0, r = !0; i < n; i++)
            try {
                if (!(t[i]in e)) {
                    r = !1;
                    break
                }
            } catch (t) {
                r = !1;
                break
            }
        return r
    }
    e.default = function() {
        return i && r ? c(u, weex) ? "Web.Vue" : "Web.Unknown" : !i && r ? c(u, weex) ? "Weex.Vue" : "Weex.Unknown" : i && o && !r ? c(a, window) ? "Weex.Rax" : "Weex.Unknown" : i && c(s, window) ? "Web.Unknown" : "Unknown.Unknown"
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(132);
    e.default = function(t, e, n) {
        var r = "Web" === n.platform
          , o = "iOS" === n.platform
          , a = "android" === n.platform
          , s = a || o
          , u = r ? window.navigator.userAgent.toLowerCase() : ""
          , c = function() {
            var t = {};
            if (r) {
                var e = window.name;
                try {
                    var n = JSON.parse(e);
                    t.containerId = n.containerId,
                    t.version = n.hostVersion,
                    t.language = n.language || "*"
                } catch (t) {}
            }
            return t
        }()
          , l = s ? "DingTalk" === n.appName || "com.alibaba.android.rimet" === n.appName : u.indexOf("dingtalk") > -1 || !!c.containerId
          , d = function() {
            if (r) {
                if (c.version)
                    return c.version;
                var t = u.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);
                return null === t && (t = u.match(/dingtalk\/([a-zA-Z0-9.-]+)/)),
                t && t[1] || "Unknown"
            }
            return n.appVersion
        }()
          , f = !!c.containerId
          , p = /iphone|ipod|ios/.test(u)
          , h = /ipad/.test(u)
          , v = u.indexOf("android") > -1
          , g = u.indexOf("mac") > -1 && f
          , _ = u.indexOf("win") > -1 && f
          , m = !g && !_ && f;
        return {
            isDingTalk: l,
            isWebiOS: p,
            isWebAndroid: v,
            isWeexiOS: o,
            isWeexAndroid: a,
            isDingTalkPCMac: g,
            isDingTalkPCWeb: m,
            isDingTalkPCWindows: _,
            isDingTalkPC: f,
            runtime: t,
            framework: e,
            platform: l ? p || o ? i.PLATFORM.IOS : v || a ? i.PLATFORM.ANDROID : h ? i.PLATFORM.IPAD : g ? i.PLATFORM.MAC : _ ? i.PLATFORM.WINDOWS : m ? i.PLATFORM.BROWSER : i.PLATFORM.UNKNOWN : i.PLATFORM.UNKNOWN,
            version: d,
            isWeex: s
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n])
    }(n(133))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(209)
      , r = n(134);
    e.default = function() {
        var t = ""
          , e = i.default().match(r.secondTypeReg);
        return e && e[1] && (t = e[1]),
        t
    }
}
, function(t, e, n) {
    "use strict";
    var i;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = function() {
        if (void 0 === i) {
            i = "";
            try {
                "undefined" != typeof navigator && (i = navigator && (navigator.userAgent || navigator.swuserAgent) || "")
            } catch (t) {
                i = ""
            }
        }
        return i
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n])
    }(n(133))
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "object" == typeof weex && weex.config.env.appType;
    e.isDingTalkLite = function() {
        return "2ndType/lite" === i
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "lianMai",
                staticClass: "lianmai-btn-wrap"
            }, [n("div", {
                staticClass: "members-and-btn-wrap"
            }, [n("div", {
                staticClass: "lianmai-member-list-container"
            }, [n("div", {
                staticClass: "lianmai-member-list",
                style: {
                    transform: "translateX(" + 10 * t.userProfiles.length + "px)"
                }
            }, [t._l(t.userProfiles, function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "lianmai-member",
                    style: {
                        zIndex: t.userProfiles.length - i,
                        transform: "translateX(-" + 10 * i + "px)"
                    }
                }, [e.avatar_url ? n("div", {
                    staticClass: "lianmai-member-avatar"
                }, [n("img", {
                    attrs: {
                        src: e.avatar_url
                    }
                })]) : n("div", {
                    staticClass: "lianmai-member-avatar"
                }, [t._v(t._s(e.nick))])])
            }), t._v(" "), t.userProfiles.length > 3 ? n("div", {
                staticClass: "lianmai-member lianmai-member-num",
                style: {
                    transform: "translateX(-" + 10 * t.userProfiles.length + "px)"
                }
            }, [n("div", {
                staticClass: "lianmai-member-avatar"
            }, [t._v(t._s(t.userProfiles.length))])]) : t._e()], 2)]), t._v(" "), n("div", {
                class: ["btn-container", t.activitCls],
                on: {
                    click: t.toggleClickLinmaiBtn
                }
            }, [n("div", [t.isNewUser ? n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.shouldShowNewRedDot,
                    expression: "shouldShowNewRedDot"
                }],
                staticClass: "new-red-dot"
            }) : t._e(), t._v(" "), t.isEducationGroup ? n("div", {
                staticClass: "link-mic-btn link-mic-btn-edu",
                attrs: {
                    title: t.isDingTalkLiteVerion ? "" : t.linkingMembers.length <= 0 ? t.lianmaiBtnText : t.cancelLianmaiBtnText
                }
            }) : n("div", {
                staticClass: "link-mic-btn",
                attrs: {
                    title: t.isDingTalkLiteVerion ? "" : t.linkingMembers.length <= 0 ? t.lianmaiBtnText : t.cancelLianmaiBtnText
                }
            })])])])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(216), n(217), !1, function(t) {
        n(214)
    }, "data-v-f66ce83e", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(215);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("033b7ace", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.share-switch-wrap[data-v-f66ce83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-f66ce83e]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(//gw.alicdn.com/tfs/TB1F71wo4v1gK0jSZFFXXb0sXXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-release[data-v-f66ce83e]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-f66ce83e]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8);
    e.default = {
        props: {},
        components: {},
        data: function() {
            return {
                activitCls: "",
                tips: i.i18next.t("pc_grouplive_live_player_share_btn_tips")
            }
        },
        created: function() {},
        mounted: function() {},
        methods: {
            share: function() {
                var t = this;
                __WPO && __WPO.custom("count", "group_live_share_click"),
                this.debounceFlag || (this.debounceFlag = !0,
                this.clickTimeOut && clearTimeout(this.clickTimeOut),
                this.activitCls = "switch-btn-release",
                this.clickTimeOut = setTimeout(function() {
                    t.activitCls = "",
                    t.debounceFlag = !1
                }, 300),
                this.$emit("share"))
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "share-switch-wrap"
            }, [e("div", {
                staticClass: "switch-container",
                attrs: {
                    title: this.tips
                }
            }, [e("div", {
                ref: "btn",
                class: ["switch-btn", this.activitCls],
                on: {
                    click: this.share
                }
            })])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(221), n(222), !1, function(t) {
        n(219)
    }, "data-v-af96dc92", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(220);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("5ecd276f", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.comment-input-wrap[data-v-af96dc92]{width:4rem;height:.546667rem;margin-left:.2rem;background:rgba(0,0,0,.4);border-radius:.273333rem;border:.013333rem solid hsla(0,0%,100%,.12);overflow:hidden\n}\n.comment-input-container[data-v-af96dc92]{position:relative;display:table;width:100%;border-collapse:separate;border-spacing:0;line-height:1.5\n}\n.comment-input-container>input[data-v-af96dc92]{display:table-cell;box-sizing:border-box;float:left;width:100%;height:.533333rem;padding:.133333rem 0 .133333rem .213333rem;list-style:none;line-height:1.5;-webkit-transition:all .3s;transition:all .3s;background:transparent;text-align:left;font-size:.186667rem;color:#fff;letter-spacing:-.002933rem;border:0;-webkit-appearance:none;appearance:none;box-shadow:none;outline:none\n}\n.comment-input-container>input[data-v-af96dc92]::-webkit-input-placeholder{color:#fff\n}\n.comment-send-btn[data-v-af96dc92]{position:relative;display:table-cell;padding:.026667rem .24rem 0 .16rem;width:.013333rem;max-width:.786667rem;white-space:nowrap;vertical-align:middle;color:#fff;overflow:hidden;text-overflow:ellipsis;word-break:break-all;font-size:.186667rem;text-align:center;-webkit-transition:all .3s;transition:all .3s;cursor:pointer\n}\n.comment-send-btn[data-v-af96dc92]:hover{color:#0089ff!important\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8)
      , r = n(20)
      , o = n(25);
    e.default = {
        props: {
            cid: {
                default: "",
                type: String
            },
            uuid: {
                default: "",
                type: String
            },
            useRpcSendComment: {
                default: !1,
                type: Boolean
            },
            localLog: {
                type: Function
            }
        },
        components: {},
        data: function() {
            return {
                commentValue: "",
                sendBtnText: i.i18next.t("pc_grouplive_live_send_comment_btn_text"),
                commentInputPlaceholder: i.i18next.t("pc_grouplive_live_send_comment_input_placeholder")
            }
        },
        created: function() {},
        mounted: function() {},
        methods: {
            onSendComment: function(t) {
                this.commentValue && this.commentValue.trim() && (this.useRpcSendComment ? this.sendLiveTextMsgByRpc(this.commentValue.trim()) : this.sendTextMsg(this.commentValue.trim()))
            },
            sendLiveTextMsgByRpc: function(t) {
                var e = this;
                try {
                    var n = (t || "").trim()
                      , a = n.length
                      , s = n.substring(0, 50);
                    a <= 3e3 && this.cid ? (this.localLog("INFO", "[sendLiveTextMsgByRpc start][msg]" + s + "[conv]" + this.cid + "[uuid]" + this.uuid),
                    (0,
                    o.commonRpc)(o.apiList.sendLiveTextMsg, {}, [{
                        cid: this.cid,
                        uuid: this.uuid,
                        content: t.trim(),
                        extension: {}
                    }]).then(function(t) {
                        t && t.uuid ? (e.commentValue = "",
                        e.$emit("sended"),
                        e.localLog("INFO", "[sendLiveTextMsgByRpc success][msg]" + s + "[conv]" + e.cid + "[uuid]" + e.uuid)) : ((0,
                        r.toast)("ERROR", i.i18next.t("pc_grouplive_live_send_comment_exception_text")),
                        e.localLog("ERROR", "[sendLiveTextMsgByRpc fail][err]" + JSON.stringify(err) + "[msg]" + s + "[conv]" + e.cid + "[uuid]" + e.uuid))
                    }).catch(function(t) {
                        (0,
                        r.toast)("ERROR", i.i18next.t("pc_grouplive_live_send_comment_exception_text")),
                        e.localLog("ERROR", "[sendLiveTextMsgByRpc fail][err]" + JSON.stringify(t) + "[msg]" + s + "[conv]" + e.cid + "[uuid]" + e.uuid)
                    })) : a > 3e3 && ((0,
                    r.toast)("ERROR", i.i18next.t("pc_text_too_long", {
                        value1: 3e3
                    })),
                    this.localLog("WARN", "[sendLiveTextMsgByRpc warn]msg is too long[msg]" + s + "[conv]" + this.cid + "[uuid]" + this.uuid))
                } catch (t) {
                    this.localLog("ERROR", "[sendLiveTextMsgByRpc]throw exception[msg]" + commentLogStr + "[conv]" + this.cid + "[uuid]" + this.uuid)
                }
            },
            sendTextMsg: function(t) {
                var e = this;
                try {
                    var n = (t || "").trim()
                      , o = n.length
                      , a = n.substring(0, 50);
                    o <= 3e3 && this.cid ? (this.localLog("INFO", "[sendTextMsg start][msg]" + a + "[conv]" + this.cid + "[uuid]" + this.uuid),
                    dingtalk.message.sendTextMsg(this.cid, t.trim(), {}, function(t) {
                        t ? ((0,
                        r.toast)("ERROR", i.i18next.t("pc_grouplive_live_send_comment_exception_text")),
                        e.localLog("ERROR", "[sendTextMsg fail][err]" + JSON.stringify(t) + "[msg]" + a + "[conv]" + e.cid + "[uuid]" + e.uuid)) : (e.commentValue = "",
                        e.$emit("sended"),
                        e.localLog("INFO", "[sendTextMsg success][msg]" + a + "[conv]" + e.cid + "[uuid]" + e.uuid))
                    })) : o > 3e3 && ((0,
                    r.toast)("ERROR", i.i18next.t("pc_text_too_long", {
                        value1: 3e3
                    })),
                    this.localLog("WARN", "[sendTextMsg warn]msg is too long[msg]" + a + "[conv]" + this.cid + "[uuid]" + this.uuid))
                } catch (t) {
                    this.localLog("ERROR", "[sendTextMsg]throw exception[msg]" + commentLogStr + "[conv]" + this.cid + "[uuid]" + this.uuid)
                }
            }
        },
        watch: {},
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "comment-input-wrap"
            }, [n("span", {
                staticClass: "comment-input-container"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.commentValue,
                    expression: "commentValue"
                }],
                attrs: {
                    type: "text",
                    placeholder: t.commentInputPlaceholder
                },
                domProps: {
                    value: t.commentValue
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onSendComment(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.commentValue = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "comment-send-btn",
                on: {
                    click: t.onSendComment
                }
            }, [t._v("\n      " + t._s(t.sendBtnText) + "\n    ")])])])
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(7)(n(226), n(227), !1, function(t) {
        n(224)
    }, "data-v-4a97d454", null);
    t.exports = i.exports
}
, function(t, e, n) {
    var i = n(225);
    "string" == typeof i && (i = [[t.i, i, ""]]),
    i.locals && (t.exports = i.locals);
    n(6)("3e4fa016", i, !0, {})
}
, function(t, e, n) {
    (t.exports = n(5)()).push([t.i, "\n.punch-card[data-v-4a97d454]{position:absolute;z-index:100;bottom:.933333rem;right:1.2rem;background:rgba(25,31,37,.72);border-radius:.04rem;width:auto;height:2.106667rem;padding-top:.32rem;padding-left:.346667rem;padding-right:.346667rem;box-sizing:border-box\n}\n.close-btn[data-v-4a97d454]{position:absolute;top:.106667rem;right:.106667rem;line-height:1;cursor:pointer;width:.16rem;height:.16rem;opacity:.72\n}\n.punch-card-title[data-v-4a97d454]{opacity:.7;font-family:PingFangSC-Medium;font-size:.213333rem;color:#fff;letter-spacing:0;text-align:center\n}\n.punch-btn[data-v-4a97d454]{width:1.066667rem;height:1.066667rem;border-radius:.533333rem;overflow:hidden;background-image:-webkit-linear-gradient(top,#fb0 1%,#ff9f00);background-image:linear-gradient(180deg,#fb0 1%,#ff9f00);box-shadow:0 .066667rem .173333rem 0 rgba(230,143,0,.3);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 auto;margin-top:.106667rem;cursor:pointer\n}\n.punch-btn-content[data-v-4a97d454]{margin:0 auto\n}\n.punch-btn-text[data-v-4a97d454]{font-size:.173333rem\n}\n.punch-btn-desc[data-v-4a97d454],.punch-btn-text[data-v-4a97d454]{font-family:PingFangSC-Medium;color:#fff;text-align:center\n}\n.punch-btn-desc[data-v-4a97d454]{opacity:.8;font-size:.16rem\n}\n.punch-successs-icon[data-v-4a97d454]{width:.8rem;height:.8rem;margin:0 auto;display:block\n}", ""])
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(8), o = n(25), a = n(47), s = (i = a) && i.__esModule ? i : {
        default: i
    };
    e.default = {
        props: {
            creatorName: {
                default: ""
            },
            punchEndTimeMillis: {
                default: 0
            },
            liveUuid: {
                default: ""
            },
            livePunchId: {
                default: ""
            }
        },
        components: {},
        data: function() {
            return {
                countdown: "",
                closed: !1,
                punchSuccess: !1,
                punchRightnowText: "",
                inviteText: "",
                countdownText: "",
                timeoutId: null
            }
        },
        created: function() {},
        mounted: function() {
            __WPO && __WPO.custom("count", "live_punch_card_mount"),
            this.startCountdown(this.punchEndTimeMillis),
            this.punchRightnowText = r.i18next.t("pc_grouplive_punch_rightnow"),
            this.inviteText = r.i18next.t("pc_grouplive_invite_you_to_punch", {
                value1: this.creatorName
            })
        },
        destroyed: function() {
            this.timeoutId && clearTimeout(this.timeoutId)
        },
        methods: {
            close: function() {
                this.closed = !0
            },
            startCountdown: function(t) {
                var e = this
                  , n = (new Date).getTime();
                t > n ? (this.countdown = Math.floor((t - n) / 1e3),
                this.countdownText = r.i18next.t("pc_grouplive_count_down", {
                    value1: this.countdown
                }),
                setTimeout(function() {
                    e.startCountdown(t)
                }, 1e3)) : this.close()
            },
            punch: function() {
                var t = this;
                (0,
                s.default)("INFO", "startPunch"),
                __WPO && __WPO.custom("count", "live_punch_start_punch"),
                (0,
                o.commonRpc)(o.apiList.punch, {}, [{
                    liveUuid: this.liveUuid,
                    livePunchId: this.livePunchId
                }]).then(function(e) {
                    e ? (__WPO && __WPO.custom("count", "live_punch_start_punch_success"),
                    t.punchSuccess = !0,
                    (0,
                    s.default)("INFO", "punch success, liveUuid: " + t.liveUuid + ", livePunchId: " + t.livePunchId),
                    t.timeoutId = setTimeout(function() {
                        t.close()
                    }, 1500)) : ((0,
                    s.default)("INFO", "punch failed, liveUuid: " + t.liveUuid + ", livePunchId: " + t.livePunchId),
                    __WPO && __WPO.custom("count", "live_punch_start_punch_failed"))
                }).catch(function(e) {
                    (0,
                    s.default)("INFO", "punch error, liveUuid: " + t.liveUuid + ", livePunchId: " + t.livePunchId + ", " + JSON.stringify(e)),
                    __WPO && __WPO.custom("count", "live_punch_start_punch_failed")
                })
            },
            closePunchManually: function() {
                var t = this;
                window.dingtalk.window.openConfirm(r.i18next.t("pc_grouplive_close_punch_confirm_text"), r.i18next.t("pc_grouplive_confirm"), r.i18next.t("dt_common_confirm"), r.i18next.t("dt_common_cancel"), function(e, n) {
                    0 === n.buttonIndex && (t.close(),
                    __WPO && __WPO.custom("count", "live_punch_close_manually"))
                })
            }
        },
        watch: {
            livePunchId: function(t, e) {
                t !== e && (__WPO && __WPO.custom("count", "live_punch_card_punchId_change"),
                (0,
                s.default)("INFO", "livePunchId changed, pre: " + e + ", next: " + t),
                this.closed = !1,
                this.punchSuccess = !1)
            },
            punchEndTimeMillis: function(t, e) {
                t !== e && this.startCountdown(t)
            }
        },
        filters: {}
    }
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return !0 !== t.closed ? n("div", {
                staticClass: "punch-card"
            }, [n("img", {
                staticClass: "close-btn",
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAsdKCMKBoWA0ej+JCwnbxT8Pg4wAAArlJREFUeNrtm9tyhCAMQEVAQbzw/19bp1OnymW5JaGdMY/F8Zy6uCRZGIY33njjjTeuUJxJrvpx9GjPGAU2X0Q46vvv+Abih2O0M3DYnzCoBsJcnCPCxzX45Z+c+wC3tzArFn81d85yG2GWwuDJt+w2JC2BgcO38jY2PYfsgWCwHg5kjk4CFAOPz5/jO7KBx9/dKzyDGZI/J/n+PLCABrNN8wNXzWj8KfO6mZaPZVBy1xXBoGxurdlPC4d/rlfABuXvFqyBx8/4foM0qOEHDPZa/l7FhzOo5Z8ZMoiBxy/I9SAMeAM/YMBp+afB0Wbg8XXpf9Bm4GVYuvwzVE4O+UijE7EA8FsMXL7Rde/xVS+WGnj86pq7zgCOf8Zm48VEJJwix45ty2mxATDfLRuTBuD8QgOXv0EklTLfAIXv35blPiwgfrYByxUtD/fVZoFXWyHycwxw+WkDbL5vsD0MVMVXZmuKs92WOE3A/2RAw48bePxlQIo9aEDH9w1GfbXZafgBAyHG1gS+0YCYHyh4gQpZIAMC/keDaRi6GhDxA403Yn7EYB6GrgakfMzG8v94Ar3nwPw338L+30NEBh/Xgqkzn2A1mlL5wE7M9zMiVIOsnJDT8SNZMafl0+Xle35ltNDyaQx4WXW8YPOT/QFJy8c24DU9IonIB2mqNvSHcvuEDIdf0CllxHwUA1n2wYJ3i2XpxAI2kOUTG9SAQfxmtBHzfYORmA9m0LDAgRg0JVq83aAx1XQNDDG/2QAg2W8yMBh7SI7s35CVgSl2ag3UAVVs1Rl4fMCdVDkGCncvmabllxso8JZHmYGm2FGpafmBppqg5ecbYPFzDQTlzmqR5iPvLRdJPvbueuf+K/35gpWWHzAQ8SSS5ozJEk1AiU7ZbLEn0OOcUfeTVv3PmvU/bdf9vGH/E5dv9IovTL3X6vMhS1kAAAAASUVORK5CYII="
                },
                on: {
                    click: t.closePunchManually
                }
            }), t._v(" "), n("div", {
                staticClass: "punch-card-title"
            }, [t._v(t._s(t.inviteText))]), t._v(" "), !0 !== t.punchSuccess ? n("div", {
                staticClass: "punch-btn",
                on: {
                    click: t.punch
                }
            }, [n("div", {
                staticClass: "punch-btn-content"
            }, [n("div", {
                staticClass: "punch-btn-text"
            }, [t._v(t._s(t.punchRightnowText))]), t._v(" "), n("div", {
                staticClass: "punch-btn-desc"
            }, [t._v(t._s(t.countdownText))])])]) : n("div", {
                staticClass: "punch-btn disabled"
            }, [n("img", {
                staticClass: "punch-successs-icon",
                attrs: {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAACnRSTlMAgGQttehKFJnOjkSN8wAAAbxJREFUaN7tmLFOwzAQhmsiQceIMVM2UKcOMJQNdcsIEgMTS/YKdeABEEh5gA7dghpR7ilJQxPs1nHs+wcG7l+TO3+5375zOxqJRCKRSCSC9fx6vkDiT9dED0iChGql/PjxLp4+2fFnWZNgw04wa+KpYlfw8ScBTZkJJoQlUG089xOKNgGziC9tPN2z4qOsS5AiFtYqMQuJYsxCJkBnIRegAAGWIEC0BgFyEOCEQIAJCKBQgAIEWIIAmoU8gBwE0CzkASReAJe3F85RNARQN5uvJ9coGgBoPnNrfXTlBXDTPF/1DHOPCmS9K+R+Fuzb5WbqstABELXv3DksdAF0Cei930LnJuw6vumlbqF7E2b2dWa+AKPr3xfn1lE0dAq0YleprY8NHkOt2tvFcR8bPob6yyuLhWXImd2vNqagPqAjNBvSsLAMaxv0cWChVyMySjY3LSxDOxdVbwUFd0IDwVAZ3jxN+bZiBQL0IvjPAgUC9CCEDCMFAlgRwqahAgEsCKHjWIEARwjh9wEFAhwgcC4kitA7YYL+LlAggIYQMxMoEKBDiNkJFAiwR4iBBLur2epP/+kRiUQikejf6htQPp3MYqygxwAAAABJRU5ErkJggg=="
                }
            })])]) : t._e()
        },
        staticRenderFns: []
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = function(t, e) {
        if (t) {
            var n = {
                opacity: 100,
                fontSize: 24,
                speed: 2,
                range: [0, 1],
                color: "white",
                data: []
            };
            e = e || {};
            var i = {};
            for (var r in n)
                e[r] ? i[r] = e[r] : i[r] = n[r],
                this[r] = i[r];
            var o = this
              , a = o.data;
            if (a) {
                if ("string" == typeof t)
                    return t = document.querySelector(t),
                    void canvasBarrage(t, a);
                var s = t.getContext("2d");
                t.width = t.clientWidth,
                t.height = t.clientHeight;
                var u = {}
                  , c = function(e, n) {
                    this.value = e.value,
                    this.init = function() {
                        var n = o.speed;
                        e.hasOwnProperty("speed") && (n = e.speed),
                        0 !== n && (n += e.value.length / 100);
                        var i = e.fontSize || o.fontSize
                          , r = e.color || o.color;
                        r = function() {
                            var t = document.createElement("div");
                            t.style.backgroundColor = r,
                            document.body.appendChild(t);
                            var e = window.getComputedStyle(t).backgroundColor;
                            return document.body.removeChild(t),
                            e
                        }();
                        var a = e.range || o.range
                          , s = e.opacity || o.opacity;
                        s /= 100;
                        var u = document.createElement("span");
                        u.style.position = "absolute",
                        u.style.whiteSpace = "nowrap",
                        u.style.font = "bold " + i + 'px "microsoft yahei", sans-serif',
                        u.innerText = e.value,
                        u.textContent = e.value,
                        document.body.appendChild(u),
                        this.width = u.clientWidth,
                        document.body.removeChild(u),
                        this.x = t.width,
                        0 == n && (this.x = (this.x - this.width) / 2),
                        this.actualX = t.width,
                        this.y = a[0] * t.height + (a[1] - a[0]) * t.height * Math.random(),
                        this.y < i ? this.y = i : this.y > t.height - i && (this.y = t.height - i),
                        this.moveX = n,
                        this.opacity = s,
                        this.color = r,
                        this.range = a,
                        this.fontSize = i
                    }
                    ,
                    this.draw = function() {
                        s.shadowColor = "rgba(0,0,0," + this.opacity + ")",
                        s.shadowBlur = 2,
                        s.font = this.fontSize + 'px "microsoft yahei", sans-serif',
                        /rgb\(/.test(this.color) ? s.fillStyle = "rgba(" + this.color.split("(")[1].split(")")[0] + "," + this.opacity + ")" : s.fillStyle = this.color,
                        s.fillText(this.value, this.x, this.y)
                    }
                };
                a.forEach(function(t, e) {
                    u[e] = new c(t,e)
                }),
                !function e() {
                    s.clearRect(0, 0, t.width, t.height);
                    try {
                        "{}" !== JSON.stringify(u) && function() {
                            for (var t in u) {
                                var e = u[t];
                                e && !e.disabled && (e.inited || (e.init(),
                                e.inited = !0),
                                e.x -= e.moveX,
                                0 == e.moveX ? e.actualX -= o.speed : e.actualX = e.x,
                                e.actualX < -1 * e.width && (e.x = e.actualX,
                                e.disabled = !0,
                                u[t] && delete u[t]),
                                e.draw())
                            }
                        }()
                    } catch (t) {}
                    requestAnimationFrame(e)
                }(),
                this.add = function(t) {
                    u[Object.keys(u).length] = new c(t)
                }
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2);
    n.d(e, "Observable", function() {
        return i.a
    });
    var r = n(137);
    n.d(e, "ConnectableObservable", function() {
        return r.a
    });
    var o = n(139);
    n.d(e, "GroupedObservable", function() {
        return o.a
    });
    var a = n(28);
    n.d(e, "observable", function() {
        return a.a
    });
    var s = n(11);
    n.d(e, "Subject", function() {
        return s.a
    });
    var u = n(140);
    n.d(e, "BehaviorSubject", function() {
        return u.a
    });
    var c = n(118);
    n.d(e, "ReplaySubject", function() {
        return c.a
    });
    var l = n(53);
    n.d(e, "AsyncSubject", function() {
        return l.a
    });
    var d = n(145);
    n.d(e, "asapScheduler", function() {
        return d.a
    });
    var f = n(13);
    n.d(e, "asyncScheduler", function() {
        return f.a
    });
    var p = n(141);
    n.d(e, "queueScheduler", function() {
        return p.a
    });
    var h = n(237);
    n.d(e, "animationFrameScheduler", function() {
        return h.a
    });
    var v = n(240);
    n.d(e, "VirtualTimeScheduler", function() {
        return v.b
    }),
    n.d(e, "VirtualAction", function() {
        return v.a
    });
    var g = n(142);
    n.d(e, "Scheduler", function() {
        return g.a
    });
    var _ = n(9);
    n.d(e, "Subscription", function() {
        return _.a
    });
    var m = n(1);
    n.d(e, "Subscriber", function() {
        return m.a
    });
    var b = n(51);
    n.d(e, "Notification", function() {
        return b.a
    }),
    n.d(e, "NotificationKind", function() {
        return b.b
    });
    var y = n(116);
    n.d(e, "pipe", function() {
        return y.a
    });
    var w = n(49);
    n.d(e, "noop", function() {
        return w.a
    });
    var x = n(29);
    n.d(e, "identity", function() {
        return x.a
    });
    var k = n(241);
    n.d(e, "isObservable", function() {
        return k.a
    });
    var O = n(41);
    n.d(e, "ArgumentOutOfRangeError", function() {
        return O.a
    });
    var E = n(42);
    n.d(e, "EmptyError", function() {
        return E.a
    });
    var S = n(50);
    n.d(e, "ObjectUnsubscribedError", function() {
        return S.a
    });
    var C = n(136);
    n.d(e, "UnsubscriptionError", function() {
        return C.a
    });
    var T = n(146);
    n.d(e, "TimeoutError", function() {
        return T.a
    });
    var j = n(242);
    n.d(e, "bindCallback", function() {
        return j.a
    });
    var L = n(243);
    n.d(e, "bindNodeCallback", function() {
        return L.a
    });
    var P = n(121);
    n.d(e, "combineLatest", function() {
        return P.b
    });
    var A = n(54);
    n.d(e, "concat", function() {
        return A.a
    });
    var I = n(124);
    n.d(e, "defer", function() {
        return I.a
    });
    var N = n(16);
    n.d(e, "empty", function() {
        return N.b
    });
    var R = n(252);
    n.d(e, "forkJoin", function() {
        return R.a
    });
    var M = n(18);
    n.d(e, "from", function() {
        return M.a
    });
    var V = n(253);
    n.d(e, "fromEvent", function() {
        return V.a
    });
    var D = n(254);
    n.d(e, "fromEventPattern", function() {
        return D.a
    });
    var X = n(255);
    n.d(e, "generate", function() {
        return X.a
    });
    var U = n(256);
    n.d(e, "iif", function() {
        return U.a
    });
    var B = n(257);
    n.d(e, "interval", function() {
        return B.a
    });
    var F = n(151);
    n.d(e, "merge", function() {
        return F.a
    });
    var W = n(152);
    n.d(e, "never", function() {
        return W.b
    });
    var H = n(52);
    n.d(e, "of", function() {
        return H.a
    });
    var $ = n(258);
    n.d(e, "onErrorResumeNext", function() {
        return $.a
    });
    var z = n(259);
    n.d(e, "pairs", function() {
        return z.a
    });
    var Y = n(260);
    n.d(e, "partition", function() {
        return Y.a
    });
    var G = n(154);
    n.d(e, "race", function() {
        return G.a
    });
    var K = n(261);
    n.d(e, "range", function() {
        return K.a
    });
    var q = n(120);
    n.d(e, "throwError", function() {
        return q.a
    });
    var J = n(155);
    n.d(e, "timer", function() {
        return J.a
    });
    var Q = n(262);
    n.d(e, "using", function() {
        return Q.a
    });
    var Z = n(125);
    n.d(e, "zip", function() {
        return Z.b
    });
    var tt = n(150);
    n.d(e, "scheduled", function() {
        return tt.a
    }),
    n.d(e, "EMPTY", function() {
        return N.a
    }),
    n.d(e, "NEVER", function() {
        return W.a
    });
    var et = n(48);
    n.d(e, "config", function() {
        return et.a
    })
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        if (t) {
            if (t instanceof i.a)
                return t;
            if (t[r.a])
                return t[r.a]()
        }
        if (!t && !e && !n)
            return new i.a(o.a);
        return new i.a(t,e,n)
    }
    ;
    var i = n(1)
      , r = n(115)
      , o = n(135)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n) {
            var i = t.call(this, e, n) || this;
            return i.scheduler = e,
            i.work = n,
            i
        }
        return i.a(e, t),
        e.prototype.schedule = function(e, n) {
            return void 0 === n && (n = 0),
            n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n,
            this.state = e,
            this.scheduler.flush(this),
            this)
        }
        ,
        e.prototype.execute = function(e, n) {
            return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
        }
        ,
        e.prototype.requestAsyncId = function(e, n, i) {
            return void 0 === i && (i = 0),
            null !== i && i > 0 || null === i && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, i) : e.flush(this)
        }
        ,
        e
    }(n(38).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n) {
            return t.call(this) || this
        }
        return i.a(e, t),
        e.prototype.schedule = function(t, e) {
            return void 0 === e && (e = 0),
            this
        }
        ,
        e
    }(n(9).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i.a(e, t),
        e
    }(n(39).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var i = n(0)
      , r = n(235)
      , o = function(t) {
        function e(e, n) {
            var i = t.call(this, e, n) || this;
            return i.scheduler = e,
            i.work = n,
            i
        }
        return i.a(e, t),
        e.prototype.requestAsyncId = function(e, n, i) {
            return void 0 === i && (i = 0),
            null !== i && i > 0 ? t.prototype.requestAsyncId.call(this, e, n, i) : (e.actions.push(this),
            e.scheduled || (e.scheduled = r.a.setImmediate(e.flush.bind(e, null))))
        }
        ,
        e.prototype.recycleAsyncId = function(e, n, i) {
            if (void 0 === i && (i = 0),
            null !== i && i > 0 || null === i && this.delay > 0)
                return t.prototype.recycleAsyncId.call(this, e, n, i);
            0 === e.actions.length && (r.a.clearImmediate(n),
            e.scheduled = void 0)
        }
        ,
        e
    }(n(38).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var i = 1
      , r = function() {
        return Promise.resolve()
    }()
      , o = {};
    function a(t) {
        return t in o && (delete o[t],
        !0)
    }
    var s = {
        setImmediate: function(t) {
            var e = i++;
            return o[e] = !0,
            r.then(function() {
                return a(e) && t()
            }),
            e
        },
        clearImmediate: function(t) {
            a(t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i.a(e, t),
        e.prototype.flush = function(t) {
            this.active = !0,
            this.scheduled = void 0;
            var e, n = this.actions, i = -1, r = n.length;
            t = t || n.shift();
            do {
                if (e = t.execute(t.state, t.delay))
                    break
            } while (++i < r && (t = n.shift()));if (this.active = !1,
            e) {
                for (; ++i < r && (t = n.shift()); )
                    t.unsubscribe();
                throw e
            }
        }
        ,
        e
    }(n(39).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(238)
      , r = new (n(239).a)(i.a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e(e, n) {
            var i = t.call(this, e, n) || this;
            return i.scheduler = e,
            i.work = n,
            i
        }
        return i.a(e, t),
        e.prototype.requestAsyncId = function(e, n, i) {
            return void 0 === i && (i = 0),
            null !== i && i > 0 ? t.prototype.requestAsyncId.call(this, e, n, i) : (e.actions.push(this),
            e.scheduled || (e.scheduled = requestAnimationFrame(function() {
                return e.flush(null)
            })))
        }
        ,
        e.prototype.recycleAsyncId = function(e, n, i) {
            if (void 0 === i && (i = 0),
            null !== i && i > 0 || null === i && this.delay > 0)
                return t.prototype.recycleAsyncId.call(this, e, n, i);
            0 === e.actions.length && (cancelAnimationFrame(n),
            e.scheduled = void 0)
        }
        ,
        e
    }(n(38).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0)
      , r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i.a(e, t),
        e.prototype.flush = function(t) {
            this.active = !0,
            this.scheduled = void 0;
            var e, n = this.actions, i = -1, r = n.length;
            t = t || n.shift();
            do {
                if (e = t.execute(t.state, t.delay))
                    break
            } while (++i < r && (t = n.shift()));if (this.active = !1,
            e) {
                for (; ++i < r && (t = n.shift()); )
                    t.unsubscribe();
                throw e
            }
        }
        ,
        e
    }(n(39).a)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return o
    }),
    n.d(e, "a", function() {
        return a
    });
    var i = n(0)
      , r = n(38)
      , o = function(t) {
        function e(e, n) {
            void 0 === e && (e = a),
            void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this, e, function() {
                return i.frame
            }) || this;
            return i.maxFrames = n,
            i.frame = 0,
            i.index = -1,
            i
        }
        return i.a(e, t),
        e.prototype.flush = function() {
            for (var t, e, n = this.actions, i = this.maxFrames; (e = n[0]) && e.delay <= i && (n.shift(),
            this.frame = e.delay,
            !(t = e.execute(e.state, e.delay))); )
                ;
            if (t) {
                for (; e = n.shift(); )
                    e.unsubscribe();
                throw t
            }
        }
        ,
        e.frameTimeFactor = 10,
        e
    }(n(39).a)
      , a = function(t) {
        function e(e, n, i) {
            void 0 === i && (i = e.index += 1);
            var r = t.call(this, e, n) || this;
            return r.scheduler = e,
            r.work = n,
            r.index = i,
            r.active = !0,
            r.index = e.index = i,
            r
        }
        return i.a(e, t),
        e.prototype.schedule = function(n, i) {
            if (void 0 === i && (i = 0),
            !this.id)
                return t.prototype.schedule.call(this, n, i);
            this.active = !1;
            var r = new e(this.scheduler,this.work);
            return this.add(r),
            r.schedule(n, i)
        }
        ,
        e.prototype.requestAsyncId = function(t, n, i) {
            void 0 === i && (i = 0),
            this.delay = t.frame + i;
            var r = t.actions;
            return r.push(this),
            r.sort(e.sortActions),
            !0
        }
        ,
        e.prototype.recycleAsyncId = function(t, e, n) {
            void 0 === n && (n = 0)
        }
        ,
        e.prototype._execute = function(e, n) {
            if (!0 === this.active)
                return t.prototype._execute.call(this, e, n)
        }
        ,
        e.sortActions = function(t, e) {
            return t.delay === e.delay ? t.index === e.index ? 0 : t.index > e.index ? 1 : -1 : t.delay > e.delay ? 1 : -1
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return !!t && (t instanceof i.a || "function" == typeof t.lift && "function" == typeof t.subscribe)
    }
    ;
    var i = n(2)
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n, l) {
        if (n) {
            if (!Object(u.a)(n))
                return function() {
                    for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    return t(e, l).apply(void 0, i).pipe(Object(o.a)(function(t) {
                        return Object(s.a)(t) ? n.apply(void 0, t) : n(t)
                    }))
                }
                ;
            l = n
        }
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var o, s = this, u = {
                context: s,
                subject: o,
                callbackFunc: e,
                scheduler: l
            };
            return new i.a(function(n) {
                if (l) {
                    var i = {
                        args: t,
                        subscriber: n,
                        params: u
                    };
                    return l.schedule(c, 0, i)
                }
                if (!o) {
                    o = new r.a;
                    try {
                        e.apply(s, t.concat([function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            o.next(t.length <= 1 ? t[0] : t),
                            o.complete()
                        }
                        ]))
                    } catch (t) {
                        Object(a.a)(o) ? o.error(t) : console.warn(t)
                    }
                }
                return o.subscribe(n)
            }
            )
        }
    }
    ;
    var i = n(2)
      , r = n(53)
      , o = n(14)
      , a = n(112)
      , s = n(12)
      , u = n(17);
    function c(t) {
        var e = this
          , n = t.args
          , i = t.subscriber
          , o = t.params
          , a = o.callbackFunc
          , s = o.context
          , u = o.scheduler
          , c = o.subject;
        if (!c) {
            c = o.subject = new r.a;
            try {
                a.apply(s, n.concat([function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    var i = t.length <= 1 ? t[0] : t;
                    e.add(u.schedule(l, 0, {
                        value: i,
                        subject: c
                    }))
                }
                ]))
            } catch (t) {
                c.error(t)
            }
        }
        this.add(c.subscribe(i))
    }
    function l(t) {
        var e = t.value
          , n = t.subject;
        n.next(e),
        n.complete()
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n, l) {
        if (n) {
            if (!Object(s.a)(n))
                return function() {
                    for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    return t(e, l).apply(void 0, i).pipe(Object(o.a)(function(t) {
                        return Object(u.a)(t) ? n.apply(void 0, t) : n(t)
                    }))
                }
                ;
            l = n
        }
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            var o = {
                subject: void 0,
                args: t,
                callbackFunc: e,
                scheduler: l,
                context: this
            };
            return new i.a(function(n) {
                var i = o.context
                  , s = o.subject;
                if (l)
                    return l.schedule(c, 0, {
                        params: o,
                        subscriber: n,
                        context: i
                    });
                if (!s) {
                    s = o.subject = new r.a;
                    try {
                        e.apply(i, t.concat([function() {
                            for (var t = [], e = 0; e < arguments.length; e++)
                                t[e] = arguments[e];
                            var n = t.shift();
                            if (n)
                                return void s.error(n);
                            s.next(t.length <= 1 ? t[0] : t),
                            s.complete()
                        }
                        ]))
                    } catch (t) {
                        Object(a.a)(s) ? s.error(t) : console.warn(t)
                    }
                }
                return s.subscribe(n)
            }
            )
        }
    }
    ;
    var i = n(2)
      , r = n(53)
      , o = n(14)
      , a = n(112)
      , s = n(17)
      , u = n(12);
    function c(t) {
        var e = this
          , n = t.params
          , i = t.subscriber
          , o = t.context
          , a = n.callbackFunc
          , s = n.args
          , u = n.scheduler
          , c = n.subject;
        if (!c) {
            c = n.subject = new r.a;
            try {
                a.apply(o, s.concat([function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    var i = t.shift();
                    if (i)
                        e.add(u.schedule(d, 0, {
                            err: i,
                            subject: c
                        }));
                    else {
                        var r = t.length <= 1 ? t[0] : t;
                        e.add(u.schedule(l, 0, {
                            value: r,
                            subject: c
                        }))
                    }
                }
                ]))
            } catch (t) {
                this.add(u.schedule(d, 0, {
                    err: t,
                    subject: c
                }))
            }
        }
        this.add(c.subscribe(i))
    }
    function l(t) {
        var e = t.value
          , n = t.subject;
        n.next(e),
        n.complete()
    }
    function d(t) {
        var e = t.err;
        t.subject.error(e)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(113)
      , r = function(t) {
        return function(e) {
            return t.then(function(t) {
                e.closed || (e.next(t),
                e.complete())
            }, function(t) {
                return e.error(t)
            }).then(null, i.a),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(43)
      , r = function(t) {
        return function(e) {
            for (var n = t[i.a](); ; ) {
                var r = n.next();
                if (r.done) {
                    e.complete();
                    break
                }
                if (e.next(r.value),
                e.closed)
                    break
            }
            return "function" == typeof n.return && e.add(function() {
                n.return && n.return()
            }),
            e
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(28)
      , r = function(t) {
        return function(e) {
            var n = t[i.a]();
            if ("function" != typeof n.subscribe)
                throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return n.subscribe(e)
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return new i.a(function(n) {
            var i = new r.a;
            return i.add(e.schedule(function() {
                var r = t[o.a]();
                i.add(r.subscribe({
                    next: function(t) {
                        i.add(e.schedule(function() {
                            return n.next(t)
                        }))
                    },
                    error: function(t) {
                        i.add(e.schedule(function() {
                            return n.error(t)
                        }))
                    },
                    complete: function() {
                        i.add(e.schedule(function() {
                            return n.complete()
                        }))
                    }
                }))
            })),
            i
        }
        )
    }
    ;
    var i = n(2)
      , r = n(9)
      , o = n(28)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return new i.a(function(n) {
            var i = new r.a;
            return i.add(e.schedule(function() {
                return t.then(function(t) {
                    i.add(e.schedule(function() {
                        n.next(t),
                        i.add(e.schedule(function() {
                            return n.complete()
                        }))
                    }))
                }, function(t) {
                    i.add(e.schedule(function() {
                        return n.error(t)
                    }))
                })
            })),
            i
        }
        )
    }
    ;
    var i = n(2)
      , r = n(9)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (!t)
            throw new Error("Iterable cannot be null");
        return new i.a(function(n) {
            var i, a = new r.a;
            return a.add(function() {
                i && "function" == typeof i.return && i.return()
            }),
            a.add(e.schedule(function() {
                i = t[o.a](),
                a.add(e.schedule(function() {
                    if (!n.closed) {
                        var t, e;
                        try {
                            var r = i.next();
                            t = r.value,
                            e = r.done
                        } catch (t) {
                            return void n.error(t)
                        }
                        e ? n.complete() : (n.next(t),
                        this.schedule())
                    }
                }))
            })),
            a
        }
        )
    }
    ;
    var i = n(2)
      , r = n(9)
      , o = n(43)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t && "function" == typeof t[i.a]
    }
    ;
    var i = n(28)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t && "function" == typeof t[i.a]
    }
    ;
    var i = n(43)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (1 === t.length) {
            var n = t[0];
            if (Object(r.a)(n))
                return u(n, null);
            if (Object(a.a)(n) && Object.getPrototypeOf(n) === Object.prototype) {
                var i = Object.keys(n);
                return u(i.map(function(t) {
                    return n[t]
                }), i)
            }
        }
        if ("function" == typeof t[t.length - 1]) {
            var s = t.pop();
            return u(t = 1 === t.length && Object(r.a)(t[0]) ? t[0] : t, null).pipe(Object(o.a)(function(t) {
                return s.apply(void 0, t)
            }))
        }
        return u(t, null)
    }
    ;
    var i = n(2)
      , r = n(12)
      , o = n(14)
      , a = n(114)
      , s = n(18);
    function u(t, e) {
        return new i.a(function(n) {
            var i = t.length;
            if (0 !== i)
                for (var r = new Array(i), o = 0, a = 0, u = function(u) {
                    var c = Object(s.a)(t[u])
                      , l = !1;
                    n.add(c.subscribe({
                        next: function(t) {
                            l || (l = !0,
                            a++),
                            r[u] = t
                        },
                        error: function(t) {
                            return n.error(t)
                        },
                        complete: function() {
                            ++o !== i && l || (a === i && n.next(e ? e.reduce(function(t, e, n) {
                                return t[e] = r[n],
                                t
                            }, {}) : r),
                            n.complete())
                        }
                    }))
                }, c = 0; c < i; c++)
                    u(c);
            else
                n.complete()
        }
        )
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n, s, u) {
        Object(o.a)(s) && (u = s,
        s = void 0);
        if (u)
            return t(e, n, s).pipe(Object(a.a)(function(t) {
                return Object(r.a)(t) ? u.apply(void 0, t) : u(t)
            }));
        return new i.a(function(t) {
            !function t(e, n, i, r, o) {
                var a;
                if (function(t) {
                    return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                }(e)) {
                    var s = e;
                    e.addEventListener(n, i, o),
                    a = function() {
                        return s.removeEventListener(n, i, o)
                    }
                } else if (function(t) {
                    return t && "function" == typeof t.on && "function" == typeof t.off
                }(e)) {
                    var u = e;
                    e.on(n, i),
                    a = function() {
                        return u.off(n, i)
                    }
                } else if (function(t) {
                    return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                }(e)) {
                    var c = e;
                    e.addListener(n, i),
                    a = function() {
                        return c.removeListener(n, i)
                    }
                } else {
                    if (!e || !e.length)
                        throw new TypeError("Invalid event target");
                    for (var l = 0, d = e.length; l < d; l++)
                        t(e[l], n, i, r, o)
                }
                r.add(a)
            }(e, n, function(e) {
                arguments.length > 1 ? t.next(Array.prototype.slice.call(arguments)) : t.next(e)
            }, t, s)
        }
        )
    }
    ;
    var i = n(2)
      , r = n(12)
      , o = n(37)
      , a = n(14)
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n, s) {
        if (s)
            return t(e, n).pipe(Object(a.a)(function(t) {
                return Object(r.a)(t) ? s.apply(void 0, t) : s(t)
            }));
        return new i.a(function(t) {
            var i, r = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                return t.next(1 === e.length ? e[0] : e)
            };
            try {
                i = e(r)
            } catch (e) {
                return void t.error(e)
            }
            if (Object(o.a)(n))
                return function() {
                    return n(r, i)
                }
        }
        )
    }
    ;
    var i = n(2)
      , r = n(12)
      , o = n(37)
      , a = n(14)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n, s, u) {
        var c, l;
        if (1 == arguments.length) {
            var d = t;
            l = d.initialState,
            e = d.condition,
            n = d.iterate,
            c = d.resultSelector || r.a,
            u = d.scheduler
        } else
            void 0 === s || Object(o.a)(s) ? (l = t,
            c = r.a,
            u = s) : (l = t,
            c = s);
        return new i.a(function(t) {
            var i = l;
            if (u)
                return u.schedule(a, 0, {
                    subscriber: t,
                    iterate: n,
                    condition: e,
                    resultSelector: c,
                    state: i
                });
            for (; ; ) {
                if (e) {
                    var r = void 0;
                    try {
                        r = e(i)
                    } catch (e) {
                        return void t.error(e)
                    }
                    if (!r) {
                        t.complete();
                        break
                    }
                }
                var o = void 0;
                try {
                    o = c(i)
                } catch (e) {
                    return void t.error(e)
                }
                if (t.next(o),
                t.closed)
                    break;
                try {
                    i = n(i)
                } catch (e) {
                    return void t.error(e)
                }
            }
        }
        )
    }
    ;
    var i = n(2)
      , r = n(29)
      , o = n(17);
    function a(t) {
        var e = t.subscriber
          , n = t.condition;
        if (!e.closed) {
            if (t.needIterate)
                try {
                    t.state = t.iterate(t.state)
                } catch (t) {
                    return void e.error(t)
                }
            else
                t.needIterate = !0;
            if (n) {
                var i = void 0;
                try {
                    i = n(t.state)
                } catch (t) {
                    return void e.error(t)
                }
                if (!i)
                    return void e.complete();
                if (e.closed)
                    return
            }
            var r;
            try {
                r = t.resultSelector(t.state)
            } catch (t) {
                return void e.error(t)
            }
            if (!e.closed && (e.next(r),
            !e.closed))
                return this.schedule(t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === e && (e = r.a);
        void 0 === n && (n = r.a);
        return Object(i.a)(function() {
            return t() ? e : n
        })
    }
    ;
    var i = n(124)
      , r = n(16)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === t && (t = 0);
        void 0 === e && (e = r.a);
        (!Object(o.a)(t) || t < 0) && (t = 0);
        e && "function" == typeof e.schedule || (e = r.a);
        return new i.a(function(n) {
            return n.add(e.schedule(a, t, {
                subscriber: n,
                counter: 0,
                period: t
            })),
            n
        }
        )
    }
    ;
    var i = n(2)
      , r = n(13)
      , o = n(55);
    function a(t) {
        var e = t.subscriber
          , n = t.counter
          , i = t.period;
        e.next(n),
        this.schedule({
            subscriber: e,
            counter: n + 1,
            period: i
        }, i)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function t() {
        var e = [];
        for (var n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
        if (0 === e.length)
            return a.a;
        var s = e[0]
          , u = e.slice(1);
        if (1 === e.length && Object(o.a)(s))
            return t.apply(void 0, s);
        return new i.a(function(e) {
            var n = function() {
                return e.add(t.apply(void 0, u).subscribe(e))
            };
            return Object(r.a)(s).subscribe({
                next: function(t) {
                    e.next(t)
                },
                error: n,
                complete: n
            })
        }
        )
    }
    ;
    var i = n(2)
      , r = n(18)
      , o = n(12)
      , a = n(16)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return e ? new i.a(function(n) {
            var i = Object.keys(t)
              , a = new r.a;
            return a.add(e.schedule(o, 0, {
                keys: i,
                index: 0,
                subscriber: n,
                subscription: a,
                obj: t
            })),
            a
        }
        ) : new i.a(function(e) {
            for (var n = Object.keys(t), i = 0; i < n.length && !e.closed; i++) {
                var r = n[i];
                t.hasOwnProperty(r) && e.next([r, t[r]])
            }
            e.complete()
        }
        )
    }
    ;
    var i = n(2)
      , r = n(9);
    function o(t) {
        var e = t.keys
          , n = t.index
          , i = t.subscriber
          , r = t.subscription
          , o = t.obj;
        if (!i.closed)
            if (n < e.length) {
                var a = e[n];
                i.next([a, o[a]]),
                r.add(this.schedule({
                    keys: e,
                    index: n + 1,
                    subscriber: i,
                    subscription: r,
                    obj: o
                }))
            } else
                i.complete()
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        return [Object(o.a)(e, n)(new a.a(Object(r.a)(t))), Object(o.a)(Object(i.a)(e, n))(new a.a(Object(r.a)(t)))]
    }
    ;
    var i = n(153)
      , r = n(122)
      , o = n(30)
      , a = n(2)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === t && (t = 0);
        return new i.a(function(i) {
            void 0 === e && (e = t,
            t = 0);
            var o = 0
              , a = t;
            if (n)
                return n.schedule(r, 0, {
                    index: o,
                    count: e,
                    start: t,
                    subscriber: i
                });
            for (; ; ) {
                if (o++ >= e) {
                    i.complete();
                    break
                }
                if (i.next(a++),
                i.closed)
                    break
            }
        }
        )
    }
    ;
    var i = n(2);
    function r(t) {
        var e = t.start
          , n = t.index
          , i = t.count
          , r = t.subscriber;
        n >= i ? r.complete() : (r.next(e),
        r.closed || (t.index = n + 1,
        t.start = e + 1,
        this.schedule(t)))
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return new i.a(function(n) {
            var i, a;
            try {
                i = t()
            } catch (t) {
                return void n.error(t)
            }
            try {
                a = e(i)
            } catch (t) {
                return void n.error(t)
            }
            var s = a ? Object(r.a)(a) : o.a
              , u = s.subscribe(n);
            return function() {
                u.unsubscribe(),
                i && i.unsubscribe()
            }
        }
        )
    }
    ;
    var i = n(2)
      , r = n(18)
      , o = n(16)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(156);
    n.d(e, "audit", function() {
        return i.a
    });
    var r = n(264);
    n.d(e, "auditTime", function() {
        return r.a
    });
    var o = n(265);
    n.d(e, "buffer", function() {
        return o.a
    });
    var a = n(266);
    n.d(e, "bufferCount", function() {
        return a.a
    });
    var s = n(267);
    n.d(e, "bufferTime", function() {
        return s.a
    });
    var u = n(268);
    n.d(e, "bufferToggle", function() {
        return u.a
    });
    var c = n(269);
    n.d(e, "bufferWhen", function() {
        return c.a
    });
    var l = n(270);
    n.d(e, "catchError", function() {
        return l.a
    });
    var d = n(271);
    n.d(e, "combineAll", function() {
        return d.a
    });
    var f = n(272);
    n.d(e, "combineLatest", function() {
        return f.a
    });
    var p = n(273);
    n.d(e, "concat", function() {
        return p.a
    });
    var h = n(149);
    n.d(e, "concatAll", function() {
        return h.a
    });
    var v = n(157);
    n.d(e, "concatMap", function() {
        return v.a
    });
    var g = n(274);
    n.d(e, "concatMapTo", function() {
        return g.a
    });
    var _ = n(275);
    n.d(e, "count", function() {
        return _.a
    });
    var m = n(276);
    n.d(e, "debounce", function() {
        return m.a
    });
    var b = n(277);
    n.d(e, "debounceTime", function() {
        return b.a
    });
    var y = n(45);
    n.d(e, "defaultIfEmpty", function() {
        return y.a
    });
    var w = n(278);
    n.d(e, "delay", function() {
        return w.a
    });
    var x = n(279);
    n.d(e, "delayWhen", function() {
        return x.a
    });
    var k = n(280);
    n.d(e, "dematerialize", function() {
        return k.a
    });
    var O = n(281);
    n.d(e, "distinct", function() {
        return O.a
    });
    var E = n(159);
    n.d(e, "distinctUntilChanged", function() {
        return E.a
    });
    var S = n(282);
    n.d(e, "distinctUntilKeyChanged", function() {
        return S.a
    });
    var C = n(283);
    n.d(e, "elementAt", function() {
        return C.a
    });
    var T = n(284);
    n.d(e, "endWith", function() {
        return T.a
    });
    var j = n(285);
    n.d(e, "every", function() {
        return j.a
    });
    var L = n(286);
    n.d(e, "exhaust", function() {
        return L.a
    });
    var P = n(287);
    n.d(e, "exhaustMap", function() {
        return P.a
    });
    var A = n(288);
    n.d(e, "expand", function() {
        return A.a
    });
    var I = n(30);
    n.d(e, "filter", function() {
        return I.a
    });
    var N = n(289);
    n.d(e, "finalize", function() {
        return N.a
    });
    var R = n(160);
    n.d(e, "find", function() {
        return R.b
    });
    var M = n(290);
    n.d(e, "findIndex", function() {
        return M.a
    });
    var V = n(291);
    n.d(e, "first", function() {
        return V.a
    });
    var D = n(139);
    n.d(e, "groupBy", function() {
        return D.b
    });
    var X = n(292);
    n.d(e, "ignoreElements", function() {
        return X.a
    });
    var U = n(293);
    n.d(e, "isEmpty", function() {
        return U.a
    });
    var B = n(294);
    n.d(e, "last", function() {
        return B.a
    });
    var F = n(14);
    n.d(e, "map", function() {
        return F.a
    });
    var W = n(295);
    n.d(e, "mapTo", function() {
        return W.a
    });
    var H = n(296);
    n.d(e, "materialize", function() {
        return H.a
    });
    var $ = n(297);
    n.d(e, "max", function() {
        return $.a
    });
    var z = n(298);
    n.d(e, "merge", function() {
        return z.a
    });
    var Y = n(123);
    n.d(e, "mergeAll", function() {
        return Y.a
    });
    var G = n(44);
    n.d(e, "mergeMap", function() {
        return G.a
    }),
    n.d(e, "flatMap", function() {
        return G.a
    });
    var K = n(299);
    n.d(e, "mergeMapTo", function() {
        return K.a
    });
    var q = n(300);
    n.d(e, "mergeScan", function() {
        return q.a
    });
    var J = n(301);
    n.d(e, "min", function() {
        return J.a
    });
    var Q = n(31);
    n.d(e, "multicast", function() {
        return Q.a
    });
    var Z = n(143);
    n.d(e, "observeOn", function() {
        return Z.b
    });
    var tt = n(302);
    n.d(e, "onErrorResumeNext", function() {
        return tt.a
    });
    var et = n(303);
    n.d(e, "pairwise", function() {
        return et.a
    });
    var nt = n(304);
    n.d(e, "partition", function() {
        return nt.a
    });
    var it = n(305);
    n.d(e, "pluck", function() {
        return it.a
    });
    var rt = n(306);
    n.d(e, "publish", function() {
        return rt.a
    });
    var ot = n(307);
    n.d(e, "publishBehavior", function() {
        return ot.a
    });
    var at = n(308);
    n.d(e, "publishLast", function() {
        return at.a
    });
    var st = n(309);
    n.d(e, "publishReplay", function() {
        return st.a
    });
    var ut = n(310);
    n.d(e, "race", function() {
        return ut.a
    });
    var ct = n(57);
    n.d(e, "reduce", function() {
        return ct.a
    });
    var lt = n(311);
    n.d(e, "repeat", function() {
        return lt.a
    });
    var dt = n(312);
    n.d(e, "repeatWhen", function() {
        return dt.a
    });
    var ft = n(313);
    n.d(e, "retry", function() {
        return ft.a
    });
    var pt = n(314);
    n.d(e, "retryWhen", function() {
        return pt.a
    });
    var ht = n(117);
    n.d(e, "refCount", function() {
        return ht.a
    });
    var vt = n(315);
    n.d(e, "sample", function() {
        return vt.a
    });
    var gt = n(316);
    n.d(e, "sampleTime", function() {
        return gt.a
    });
    var _t = n(128);
    n.d(e, "scan", function() {
        return _t.a
    });
    var mt = n(317);
    n.d(e, "sequenceEqual", function() {
        return mt.a
    });
    var bt = n(318);
    n.d(e, "share", function() {
        return bt.a
    });
    var yt = n(319);
    n.d(e, "shareReplay", function() {
        return yt.a
    });
    var wt = n(320);
    n.d(e, "single", function() {
        return wt.a
    });
    var xt = n(321);
    n.d(e, "skip", function() {
        return xt.a
    });
    var kt = n(322);
    n.d(e, "skipLast", function() {
        return kt.a
    });
    var Ot = n(323);
    n.d(e, "skipUntil", function() {
        return Ot.a
    });
    var Et = n(324);
    n.d(e, "skipWhile", function() {
        return Et.a
    });
    var St = n(325);
    n.d(e, "startWith", function() {
        return St.a
    });
    var Ct = n(326);
    n.d(e, "subscribeOn", function() {
        return Ct.a
    });
    var Tt = n(328);
    n.d(e, "switchAll", function() {
        return Tt.a
    });
    var jt = n(129);
    n.d(e, "switchMap", function() {
        return jt.a
    });
    var Lt = n(329);
    n.d(e, "switchMapTo", function() {
        return Lt.a
    });
    var Pt = n(126);
    n.d(e, "take", function() {
        return Pt.a
    });
    var At = n(127);
    n.d(e, "takeLast", function() {
        return At.a
    });
    var It = n(330);
    n.d(e, "takeUntil", function() {
        return It.a
    });
    var Nt = n(331);
    n.d(e, "takeWhile", function() {
        return Nt.a
    });
    var Rt = n(332);
    n.d(e, "tap", function() {
        return Rt.a
    });
    var Mt = n(161);
    n.d(e, "throttle", function() {
        return Mt.b
    });
    var Vt = n(333);
    n.d(e, "throttleTime", function() {
        return Vt.a
    });
    var Dt = n(56);
    n.d(e, "throwIfEmpty", function() {
        return Dt.a
    });
    var Xt = n(334);
    n.d(e, "timeInterval", function() {
        return Xt.a
    });
    var Ut = n(335);
    n.d(e, "timeout", function() {
        return Ut.a
    });
    var Bt = n(162);
    n.d(e, "timeoutWith", function() {
        return Bt.a
    });
    var Ft = n(336);
    n.d(e, "timestamp", function() {
        return Ft.a
    });
    var Wt = n(337);
    n.d(e, "toArray", function() {
        return Wt.a
    });
    var Ht = n(338);
    n.d(e, "window", function() {
        return Ht.a
    });
    var $t = n(339);
    n.d(e, "windowCount", function() {
        return $t.a
    });
    var zt = n(340);
    n.d(e, "windowTime", function() {
        return zt.a
    });
    var Yt = n(341);
    n.d(e, "windowToggle", function() {
        return Yt.a
    });
    var Gt = n(342);
    n.d(e, "windowWhen", function() {
        return Gt.a
    });
    var Kt = n(343);
    n.d(e, "withLatestFrom", function() {
        return Kt.a
    });
    var qt = n(344);
    n.d(e, "zip", function() {
        return qt.a
    });
    var Jt = n(345);
    n.d(e, "zipAll", function() {
        return Jt.a
    })
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = i.a);
        return Object(r.a)(function() {
            return Object(o.a)(t, e)
        })
    }
    ;
    var i = n(13)
      , r = n(156)
      , o = n(155)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t) {
            this.closingNotifier = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.closingNotifier))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.buffer = [],
            i.add(Object(o.a)(i, n)),
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.buffer.push(t)
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            var o = this.buffer;
            this.buffer = [],
            this.destination.next(o)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = null);
        return function(n) {
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.bufferSize = t,
            this.startBufferEvery = e,
            this.subscriberClass = e && t !== e ? s : a
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new this.subscriberClass(t,this.bufferSize,this.startBufferEvery))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.bufferSize = n,
            i.buffer = [],
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.buffer;
            e.push(t),
            e.length == this.bufferSize && (this.destination.next(e),
            this.buffer = [])
        }
        ,
        e.prototype._complete = function() {
            var e = this.buffer;
            e.length > 0 && this.destination.next(e),
            t.prototype._complete.call(this)
        }
        ,
        e
    }(r.a)
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.bufferSize = n,
            r.startBufferEvery = i,
            r.buffers = [],
            r.count = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.bufferSize
              , n = this.startBufferEvery
              , i = this.buffers
              , r = this.count;
            this.count++,
            r % n == 0 && i.push([]);
            for (var o = i.length; o--; ) {
                var a = i[o];
                a.push(t),
                a.length === e && (i.splice(o, 1),
                this.destination.next(a))
            }
        }
        ,
        e.prototype._complete = function() {
            for (var e = this.buffers, n = this.destination; e.length > 0; ) {
                var i = e.shift();
                i.length > 0 && n.next(i)
            }
            t.prototype._complete.call(this)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = arguments.length
          , n = r.a;
        Object(a.a)(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1],
        e--);
        var i = null;
        e >= 2 && (i = arguments[1]);
        var o = Number.POSITIVE_INFINITY;
        e >= 3 && (o = arguments[2]);
        return function(e) {
            return e.lift(new s(t,i,o,n))
        }
    }
    ;
    var i = n(0)
      , r = n(13)
      , o = n(1)
      , a = n(17);
    var s = function() {
        function t(t, e, n, i) {
            this.bufferTimeSpan = t,
            this.bufferCreationInterval = e,
            this.maxBufferSize = n,
            this.scheduler = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))
        }
        ,
        t
    }()
      , u = function() {
        return function() {
            this.buffer = []
        }
    }()
      , c = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            a.bufferTimeSpan = n,
            a.bufferCreationInterval = i,
            a.maxBufferSize = r,
            a.scheduler = o,
            a.contexts = [];
            var s = a.openContext();
            if (a.timespanOnly = null == i || i < 0,
            a.timespanOnly) {
                var u = {
                    subscriber: a,
                    context: s,
                    bufferTimeSpan: n
                };
                a.add(s.closeAction = o.schedule(l, n, u))
            } else {
                var c = {
                    subscriber: a,
                    context: s
                }
                  , p = {
                    bufferTimeSpan: n,
                    bufferCreationInterval: i,
                    subscriber: a,
                    scheduler: o
                };
                a.add(s.closeAction = o.schedule(f, n, c)),
                a.add(o.schedule(d, i, p))
            }
            return a
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            for (var e, n = this.contexts, i = n.length, r = 0; r < i; r++) {
                var o = n[r]
                  , a = o.buffer;
                a.push(t),
                a.length == this.maxBufferSize && (e = o)
            }
            e && this.onBufferFull(e)
        }
        ,
        e.prototype._error = function(e) {
            this.contexts.length = 0,
            t.prototype._error.call(this, e)
        }
        ,
        e.prototype._complete = function() {
            for (var e = this.contexts, n = this.destination; e.length > 0; ) {
                var i = e.shift();
                n.next(i.buffer)
            }
            t.prototype._complete.call(this)
        }
        ,
        e.prototype._unsubscribe = function() {
            this.contexts = null
        }
        ,
        e.prototype.onBufferFull = function(t) {
            this.closeContext(t);
            var e = t.closeAction;
            if (e.unsubscribe(),
            this.remove(e),
            !this.closed && this.timespanOnly) {
                t = this.openContext();
                var n = this.bufferTimeSpan
                  , i = {
                    subscriber: this,
                    context: t,
                    bufferTimeSpan: n
                };
                this.add(t.closeAction = this.scheduler.schedule(l, n, i))
            }
        }
        ,
        e.prototype.openContext = function() {
            var t = new u;
            return this.contexts.push(t),
            t
        }
        ,
        e.prototype.closeContext = function(t) {
            this.destination.next(t.buffer);
            var e = this.contexts;
            (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1)
        }
        ,
        e
    }(o.a);
    function l(t) {
        var e = t.subscriber
          , n = t.context;
        n && e.closeContext(n),
        e.closed || (t.context = e.openContext(),
        t.context.closeAction = this.schedule(t, t.bufferTimeSpan))
    }
    function d(t) {
        var e = t.bufferCreationInterval
          , n = t.bufferTimeSpan
          , i = t.subscriber
          , r = t.scheduler
          , o = i.openContext();
        i.closed || (i.add(o.closeAction = r.schedule(f, n, {
            subscriber: i,
            context: o
        })),
        this.schedule(t, e))
    }
    function f(t) {
        var e = t.subscriber
          , n = t.context;
        e.closeContext(n)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new s(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(9)
      , o = n(4)
      , a = n(3);
    var s = function() {
        function t(t, e) {
            this.openings = t,
            this.closingSelector = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.openings,this.closingSelector))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.openings = n,
            r.closingSelector = i,
            r.contexts = [],
            r.add(Object(o.a)(r, n)),
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            for (var e = this.contexts, n = e.length, i = 0; i < n; i++)
                e[i].buffer.push(t)
        }
        ,
        e.prototype._error = function(e) {
            for (var n = this.contexts; n.length > 0; ) {
                var i = n.shift();
                i.subscription.unsubscribe(),
                i.buffer = null,
                i.subscription = null
            }
            this.contexts = null,
            t.prototype._error.call(this, e)
        }
        ,
        e.prototype._complete = function() {
            for (var e = this.contexts; e.length > 0; ) {
                var n = e.shift();
                this.destination.next(n.buffer),
                n.subscription.unsubscribe(),
                n.buffer = null,
                n.subscription = null
            }
            this.contexts = null,
            t.prototype._complete.call(this)
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            t ? this.closeBuffer(t) : this.openBuffer(e)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.closeBuffer(t.context)
        }
        ,
        e.prototype.openBuffer = function(t) {
            try {
                var e = this.closingSelector.call(this, t);
                e && this.trySubscribe(e)
            } catch (t) {
                this._error(t)
            }
        }
        ,
        e.prototype.closeBuffer = function(t) {
            var e = this.contexts;
            if (e && t) {
                var n = t.buffer
                  , i = t.subscription;
                this.destination.next(n),
                e.splice(e.indexOf(t), 1),
                this.remove(i),
                i.unsubscribe()
            }
        }
        ,
        e.prototype.trySubscribe = function(t) {
            var e = this.contexts
              , n = new r.a
              , i = {
                buffer: [],
                subscription: n
            };
            e.push(i);
            var a = Object(o.a)(this, t, i);
            !a || a.closed ? this.closeBuffer(i) : (a.context = i,
            this.add(a),
            n.add(a))
        }
        ,
        e
    }(a.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(9)
      , o = n(3)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.closingSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.closingSelector))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.closingSelector = n,
            i.subscribing = !1,
            i.openBuffer(),
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.buffer.push(t)
        }
        ,
        e.prototype._complete = function() {
            var e = this.buffer;
            e && this.destination.next(e),
            t.prototype._complete.call(this)
        }
        ,
        e.prototype._unsubscribe = function() {
            this.buffer = null,
            this.subscribing = !1
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.openBuffer()
        }
        ,
        e.prototype.notifyComplete = function() {
            this.subscribing ? this.complete() : this.openBuffer()
        }
        ,
        e.prototype.openBuffer = function() {
            var t = this.closingSubscription;
            t && (this.remove(t),
            t.unsubscribe());
            var e, n = this.buffer;
            this.buffer && this.destination.next(n),
            this.buffer = [];
            try {
                e = (0,
                this.closingSelector)()
            } catch (t) {
                return this.error(t)
            }
            t = new r.a,
            this.closingSubscription = t,
            this.add(t),
            this.subscribing = !0,
            t.add(Object(a.a)(this, e)),
            this.subscribing = !1
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            var n = new s(t)
              , i = e.lift(n);
            return n.caught = i
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(21)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.selector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.selector,this.caught))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.selector = n,
            r.caught = i,
            r
        }
        return i.a(e, t),
        e.prototype.error = function(e) {
            if (!this.isStopped) {
                var n = void 0;
                try {
                    n = this.selector(e, this.caught)
                } catch (e) {
                    return void t.prototype.error.call(this, e)
                }
                this._unsubscribeAndRecycle();
                var i = new o.a(this,void 0,void 0);
                this.add(i);
                var r = Object(a.a)(this, n, void 0, void 0, i);
                r !== i && this.add(r)
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new i.a(t))
        }
    }
    ;
    var i = n(121)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = null;
        "function" == typeof t[t.length - 1] && (n = t.pop());
        1 === t.length && Object(i.a)(t[0]) && (t = t[0].slice());
        return function(e) {
            return e.lift.call(Object(o.a)([e].concat(t)), new r.a(n))
        }
    }
    ;
    var i = n(12)
      , r = n(121)
      , o = n(18)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            return e.lift.call(i.a.apply(void 0, [e].concat(t)))
        }
    }
    ;
    var i = n(54)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return Object(i.a)(function() {
            return t
        }, e)
    }
    ;
    var i = n(157)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.predicate = t,
            this.source = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate,this.source))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.predicate = n,
            r.source = i,
            r.count = 0,
            r.index = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.predicate ? this._tryPredicate(t) : this.count++
        }
        ,
        e.prototype._tryPredicate = function(t) {
            var e;
            try {
                e = this.predicate(t, this.index++, this.source)
            } catch (t) {
                return void this.destination.error(t)
            }
            e && this.count++
        }
        ,
        e.prototype._complete = function() {
            this.destination.next(this.count),
            this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t) {
            this.durationSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.durationSelector))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.durationSelector = n,
            i.hasValue = !1,
            i.durationSubscription = null,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            try {
                var e = this.durationSelector.call(this, t);
                e && this._tryNext(t, e)
            } catch (t) {
                this.destination.error(t)
            }
        }
        ,
        e.prototype._complete = function() {
            this.emitValue(),
            this.destination.complete()
        }
        ,
        e.prototype._tryNext = function(t, e) {
            var n = this.durationSubscription;
            this.value = t,
            this.hasValue = !0,
            n && (n.unsubscribe(),
            this.remove(n)),
            (n = Object(o.a)(this, e)) && !n.closed && this.add(this.durationSubscription = n)
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.emitValue()
        }
        ,
        e.prototype.notifyComplete = function() {
            this.emitValue()
        }
        ,
        e.prototype.emitValue = function() {
            if (this.hasValue) {
                var e = this.value
                  , n = this.durationSubscription;
                n && (this.durationSubscription = null,
                n.unsubscribe(),
                this.remove(n)),
                this.value = null,
                this.hasValue = !1,
                t.prototype._next.call(this, e)
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = o.a);
        return function(n) {
            return n.lift(new a(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(13);
    var a = function() {
        function t(t, e) {
            this.dueTime = t,
            this.scheduler = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.dueTime,this.scheduler))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.dueTime = n,
            r.scheduler = i,
            r.debouncedSubscription = null,
            r.lastValue = null,
            r.hasValue = !1,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.clearDebounce(),
            this.lastValue = t,
            this.hasValue = !0,
            this.add(this.debouncedSubscription = this.scheduler.schedule(u, this.dueTime, this))
        }
        ,
        e.prototype._complete = function() {
            this.debouncedNext(),
            this.destination.complete()
        }
        ,
        e.prototype.debouncedNext = function() {
            if (this.clearDebounce(),
            this.hasValue) {
                var t = this.lastValue;
                this.lastValue = null,
                this.hasValue = !1,
                this.destination.next(t)
            }
        }
        ,
        e.prototype.clearDebounce = function() {
            var t = this.debouncedSubscription;
            null !== t && (this.remove(t),
            t.unsubscribe(),
            this.debouncedSubscription = null)
        }
        ,
        e
    }(r.a);
    function u(t) {
        t.debouncedNext()
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = r.a);
        var n = Object(o.a)(t) ? +t - e.now() : Math.abs(t);
        return function(t) {
            return t.lift(new u(n,e))
        }
    }
    ;
    var i = n(0)
      , r = n(13)
      , o = n(158)
      , a = n(1)
      , s = n(51);
    var u = function() {
        function t(t, e) {
            this.delay = t,
            this.scheduler = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.delay,this.scheduler))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.delay = n,
            r.scheduler = i,
            r.queue = [],
            r.active = !1,
            r.errored = !1,
            r
        }
        return i.a(e, t),
        e.dispatch = function(t) {
            for (var e = t.source, n = e.queue, i = t.scheduler, r = t.destination; n.length > 0 && n[0].time - i.now() <= 0; )
                n.shift().notification.observe(r);
            if (n.length > 0) {
                var o = Math.max(0, n[0].time - i.now());
                this.schedule(t, o)
            } else
                this.unsubscribe(),
                e.active = !1
        }
        ,
        e.prototype._schedule = function(t) {
            this.active = !0,
            this.destination.add(t.schedule(e.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: t
            }))
        }
        ,
        e.prototype.scheduleNotification = function(t) {
            if (!0 !== this.errored) {
                var e = this.scheduler
                  , n = new l(e.now() + this.delay,t);
                this.queue.push(n),
                !1 === this.active && this._schedule(e)
            }
        }
        ,
        e.prototype._next = function(t) {
            this.scheduleNotification(s.a.createNext(t))
        }
        ,
        e.prototype._error = function(t) {
            this.errored = !0,
            this.queue = [],
            this.destination.error(t),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.scheduleNotification(s.a.createComplete()),
            this.unsubscribe()
        }
        ,
        e
    }(a.a)
      , l = function() {
        return function(t, e) {
            this.time = t,
            this.notification = e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (e)
            return function(n) {
                return new l(n,e).lift(new u(t))
            }
            ;
        return function(e) {
            return e.lift(new u(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(2)
      , a = n(3)
      , s = n(4);
    var u = function() {
        function t(t) {
            this.delayDurationSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.delayDurationSelector))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.delayDurationSelector = n,
            i.completed = !1,
            i.delayNotifierSubscriptions = [],
            i.index = 0,
            i
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(t),
            this.removeSubscription(r),
            this.tryComplete()
        }
        ,
        e.prototype.notifyError = function(t, e) {
            this._error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            var e = this.removeSubscription(t);
            e && this.destination.next(e),
            this.tryComplete()
        }
        ,
        e.prototype._next = function(t) {
            var e = this.index++;
            try {
                var n = this.delayDurationSelector(t, e);
                n && this.tryDelay(n, t)
            } catch (t) {
                this.destination.error(t)
            }
        }
        ,
        e.prototype._complete = function() {
            this.completed = !0,
            this.tryComplete(),
            this.unsubscribe()
        }
        ,
        e.prototype.removeSubscription = function(t) {
            t.unsubscribe();
            var e = this.delayNotifierSubscriptions.indexOf(t);
            return -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
            t.outerValue
        }
        ,
        e.prototype.tryDelay = function(t, e) {
            var n = Object(s.a)(this, t, e);
            n && !n.closed && (this.destination.add(n),
            this.delayNotifierSubscriptions.push(n))
        }
        ,
        e.prototype.tryComplete = function() {
            this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
        }
        ,
        e
    }(a.a)
      , l = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.source = e,
            i.subscriptionDelay = n,
            i
        }
        return i.a(e, t),
        e.prototype._subscribe = function(t) {
            this.subscriptionDelay.subscribe(new d(t,this.source))
        }
        ,
        e
    }(o.a)
      , d = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.parent = e,
            i.source = n,
            i.sourceSubscribed = !1,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.subscribeToSource()
        }
        ,
        e.prototype._error = function(t) {
            this.unsubscribe(),
            this.parent.error(t)
        }
        ,
        e.prototype._complete = function() {
            this.unsubscribe(),
            this.subscribeToSource()
        }
        ,
        e.prototype.subscribeToSource = function() {
            this.sourceSubscribed || (this.sourceSubscribed = !0,
            this.unsubscribe(),
            this.source.subscribe(this.parent))
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new o)
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            t.observe(this.destination)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new a(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t, e) {
            this.keySelector = t,
            this.flushes = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.keySelector,this.flushes))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.keySelector = n,
            r.values = new Set,
            i && r.add(Object(o.a)(r, i)),
            r
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.values.clear()
        }
        ,
        e.prototype.notifyError = function(t, e) {
            this._error(t)
        }
        ,
        e.prototype._next = function(t) {
            this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t)
        }
        ,
        e.prototype._useKeySelector = function(t) {
            var e, n = this.destination;
            try {
                e = this.keySelector(t)
            } catch (t) {
                return void n.error(t)
            }
            this._finalizeNext(e, t)
        }
        ,
        e.prototype._finalizeNext = function(t, e) {
            var n = this.values;
            n.has(t) || (n.add(t),
            this.destination.next(e))
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return Object(i.a)(function(n, i) {
            return e ? e(n[t], i[t]) : n[t] === i[t]
        })
    }
    ;
    var i = n(159)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (t < 0)
            throw new i.a;
        var n = arguments.length >= 2;
        return function(u) {
            return u.pipe(Object(r.a)(function(e, n) {
                return n === t
            }), Object(s.a)(1), n ? Object(a.a)(e) : Object(o.a)(function() {
                return new i.a
            }))
        }
    }
    ;
    var i = n(41)
      , r = n(30)
      , o = n(56)
      , a = n(45)
      , s = n(126)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            return Object(i.a)(e, r.a.apply(void 0, t))
        }
    }
    ;
    var i = n(54)
      , r = n(52)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new o(t,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e, n) {
            this.predicate = t,
            this.thisArg = e,
            this.source = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate,this.thisArg,this.source))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this, e) || this;
            return o.predicate = n,
            o.thisArg = i,
            o.source = r,
            o.index = 0,
            o.thisArg = i || o,
            o
        }
        return i.a(e, t),
        e.prototype.notifyComplete = function(t) {
            this.destination.next(t),
            this.destination.complete()
        }
        ,
        e.prototype._next = function(t) {
            var e = !1;
            try {
                e = this.predicate.call(this.thisArg, t, this.index++, this.source)
            } catch (t) {
                return void this.destination.error(t)
            }
            e || this.notifyComplete(!1)
        }
        ,
        e.prototype._complete = function() {
            this.notifyComplete(!0)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new a)
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.hasCompleted = !1,
            n.hasSubscription = !1,
            n
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.hasSubscription || (this.hasSubscription = !0,
            this.add(Object(o.a)(this, t)))
        }
        ,
        e.prototype._complete = function() {
            this.hasCompleted = !0,
            this.hasSubscription || this.destination.complete()
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.remove(t),
            this.hasSubscription = !1,
            this.hasCompleted && this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function t(e, n) {
        if (n)
            return function(i) {
                return i.pipe(t(function(t, i) {
                    return Object(u.a)(e(t, i)).pipe(Object(s.a)(function(e, r) {
                        return n(t, e, i, r)
                    }))
                }))
            }
            ;
        return function(t) {
            return t.lift(new c(e))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(21)
      , a = n(4)
      , s = n(14)
      , u = n(18);
    var c = function() {
        function t(t) {
            this.project = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new l(t,this.project))
        }
        ,
        t
    }()
      , l = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.project = n,
            i.hasSubscription = !1,
            i.hasCompleted = !1,
            i.index = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.hasSubscription || this.tryNext(t)
        }
        ,
        e.prototype.tryNext = function(t) {
            var e, n = this.index++;
            try {
                e = this.project(t, n)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.hasSubscription = !0,
            this._innerSub(e, t, n)
        }
        ,
        e.prototype._innerSub = function(t, e, n) {
            var i = new o.a(this,e,n)
              , r = this.destination;
            r.add(i);
            var s = Object(a.a)(this, t, void 0, void 0, i);
            s !== i && r.add(s)
        }
        ,
        e.prototype._complete = function() {
            this.hasCompleted = !0,
            this.hasSubscription || this.destination.complete(),
            this.unsubscribe()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.destination.next(e)
        }
        ,
        e.prototype.notifyError = function(t) {
            this.destination.error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.destination.remove(t),
            this.hasSubscription = !1,
            this.hasCompleted && this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === e && (e = Number.POSITIVE_INFINITY);
        void 0 === n && (n = void 0);
        return e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e,
        function(i) {
            return i.lift(new a(t,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t, e, n) {
            this.project = t,
            this.concurrent = e,
            this.scheduler = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.project,this.concurrent,this.scheduler))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this, e) || this;
            return o.project = n,
            o.concurrent = i,
            o.scheduler = r,
            o.index = 0,
            o.active = 0,
            o.hasCompleted = !1,
            i < Number.POSITIVE_INFINITY && (o.buffer = []),
            o
        }
        return i.a(e, t),
        e.dispatch = function(t) {
            var e = t.subscriber
              , n = t.result
              , i = t.value
              , r = t.index;
            e.subscribeToProjection(n, i, r)
        }
        ,
        e.prototype._next = function(t) {
            var n = this.destination;
            if (n.closed)
                this._complete();
            else {
                var i = this.index++;
                if (this.active < this.concurrent) {
                    n.next(t);
                    try {
                        var r = (0,
                        this.project)(t, i);
                        if (this.scheduler) {
                            var o = {
                                subscriber: this,
                                result: r,
                                value: t,
                                index: i
                            };
                            this.destination.add(this.scheduler.schedule(e.dispatch, 0, o))
                        } else
                            this.subscribeToProjection(r, t, i)
                    } catch (t) {
                        n.error(t)
                    }
                } else
                    this.buffer.push(t)
            }
        }
        ,
        e.prototype.subscribeToProjection = function(t, e, n) {
            this.active++,
            this.destination.add(Object(o.a)(this, t, e, n))
        }
        ,
        e.prototype._complete = function() {
            this.hasCompleted = !0,
            this.hasCompleted && 0 === this.active && this.destination.complete(),
            this.unsubscribe()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this._next(e)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            var e = this.buffer;
            this.destination.remove(t),
            this.active--,
            e && e.length > 0 && this._next(e.shift()),
            this.hasCompleted && 0 === this.active && this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(9);
    var a = function() {
        function t(t) {
            this.callback = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.callback))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.add(new o.a(n)),
            i
        }
        return i.a(e, t),
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new i.a(t,n,!0,e))
        }
    }
    ;
    var i = n(160)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        var n = arguments.length >= 2;
        return function(c) {
            return c.pipe(t ? Object(r.a)(function(e, n) {
                return t(e, n, c)
            }) : u.a, Object(o.a)(1), n ? Object(a.a)(e) : Object(s.a)(function() {
                return new i.a
            }))
        }
    }
    ;
    var i = n(42)
      , r = n(30)
      , o = n(126)
      , a = n(45)
      , s = n(56)
      , u = n(29)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new o)
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t))
        }
        ,
        t
    }()
      , a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i.a(e, t),
        e.prototype._next = function(t) {}
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new o)
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return i.a(e, t),
        e.prototype.notifyComplete = function(t) {
            var e = this.destination;
            e.next(t),
            e.complete()
        }
        ,
        e.prototype._next = function(t) {
            this.notifyComplete(!1)
        }
        ,
        e.prototype._complete = function() {
            this.notifyComplete(!0)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        var n = arguments.length >= 2;
        return function(c) {
            return c.pipe(t ? Object(r.a)(function(e, n) {
                return t(e, n, c)
            }) : u.a, Object(o.a)(1), n ? Object(s.a)(e) : Object(a.a)(function() {
                return new i.a
            }))
        }
    }
    ;
    var i = n(42)
      , r = n(30)
      , o = n(127)
      , a = n(56)
      , s = n(45)
      , u = n(29)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new o(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t) {
            this.value = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.value))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.value = n,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.destination.next(this.value)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new a)
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(51);
    var a = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.destination.next(o.a.createNext(t))
        }
        ,
        e.prototype._error = function(t) {
            var e = this.destination;
            e.next(o.a.createError(t)),
            e.complete()
        }
        ,
        e.prototype._complete = function() {
            var t = this.destination;
            t.next(o.a.createComplete()),
            t.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = "function" == typeof t ? function(e, n) {
            return t(e, n) > 0 ? e : n
        }
        : function(t, e) {
            return t > e ? t : e
        }
        ;
        return Object(i.a)(e)
    }
    ;
    var i = n(57)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            return e.lift.call(i.a.apply(void 0, [e].concat(t)))
        }
    }
    ;
    var i = n(151)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === n && (n = Number.POSITIVE_INFINITY);
        if ("function" == typeof e)
            return Object(i.a)(function() {
                return t
            }, e, n);
        "number" == typeof e && (n = e);
        return Object(i.a)(function() {
            return t
        }, n)
    }
    ;
    var i = n(44)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === n && (n = Number.POSITIVE_INFINITY);
        return function(i) {
            return i.lift(new s(t,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(4)
      , o = n(3)
      , a = n(21);
    var s = function() {
        function t(t, e, n) {
            this.accumulator = t,
            this.seed = e,
            this.concurrent = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.accumulator,this.seed,this.concurrent))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i, r) {
            var o = t.call(this, e) || this;
            return o.accumulator = n,
            o.acc = i,
            o.concurrent = r,
            o.hasValue = !1,
            o.hasCompleted = !1,
            o.buffer = [],
            o.active = 0,
            o.index = 0,
            o
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            if (this.active < this.concurrent) {
                var e = this.index++
                  , n = this.destination
                  , i = void 0;
                try {
                    i = (0,
                    this.accumulator)(this.acc, t, e)
                } catch (t) {
                    return n.error(t)
                }
                this.active++,
                this._innerSub(i, t, e)
            } else
                this.buffer.push(t)
        }
        ,
        e.prototype._innerSub = function(t, e, n) {
            var i = new a.a(this,e,n)
              , o = this.destination;
            o.add(i);
            var s = Object(r.a)(this, t, void 0, void 0, i);
            s !== i && o.add(s)
        }
        ,
        e.prototype._complete = function() {
            this.hasCompleted = !0,
            0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc),
            this.destination.complete()),
            this.unsubscribe()
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            var o = this.destination;
            this.acc = e,
            this.hasValue = !0,
            o.next(e)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            var e = this.buffer;
            this.destination.remove(t),
            this.active--,
            e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc),
            this.destination.complete())
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = "function" == typeof t ? function(e, n) {
            return t(e, n) < 0 ? e : n
        }
        : function(t, e) {
            return t < e ? t : e
        }
        ;
        return Object(i.a)(e)
    }
    ;
    var i = n(57)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        1 === t.length && Object(r.a)(t[0]) && (t = t[0]);
        return function(e) {
            return e.lift(new u(t))
        }
    }
    ;
    var i = n(0)
      , r = (n(18),
    n(12))
      , o = n(3)
      , a = n(21)
      , s = n(4);
    var u = function() {
        function t(t) {
            this.nextSources = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.nextSources))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.destination = e,
            i.nextSources = n,
            i
        }
        return i.a(e, t),
        e.prototype.notifyError = function(t, e) {
            this.subscribeToNextSource()
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.subscribeToNextSource()
        }
        ,
        e.prototype._error = function(t) {
            this.subscribeToNextSource(),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.subscribeToNextSource(),
            this.unsubscribe()
        }
        ,
        e.prototype.subscribeToNextSource = function() {
            var t = this.nextSources.shift();
            if (t) {
                var e = new a.a(this,void 0,void 0)
                  , n = this.destination;
                n.add(e);
                var i = Object(s.a)(this, t, void 0, void 0, e);
                i !== e && n.add(i)
            } else
                this.destination.complete()
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return t.lift(new o)
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t() {}
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.hasPrev = !1,
            n
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e;
            this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0,
            this.prev = t,
            e && this.destination.next(e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return [Object(r.a)(t, e)(n), Object(r.a)(Object(i.a)(t, e))(n)]
        }
    }
    ;
    var i = n(153)
      , r = n(30)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = t.length;
        if (0 === n)
            throw new Error("list of properties cannot be empty.");
        return function(e) {
            return Object(i.a)(function(t, e) {
                return function(n) {
                    for (var i = n, r = 0; r < e; r++) {
                        var o = i[t[r]];
                        if (void 0 === o)
                            return;
                        i = o
                    }
                    return i
                }
            }(t, n))(e)
        }
    }
    ;
    var i = n(14)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return t ? Object(r.a)(function() {
            return new i.a
        }, t) : Object(r.a)(new i.a)
    }
    ;
    var i = n(11)
      , r = n(31)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return Object(r.a)(new i.a(t))(e)
        }
    }
    ;
    var i = n(140)
      , r = n(31)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return Object(r.a)(new i.a)(t)
        }
    }
    ;
    var i = n(53)
      , r = n(31)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n, o) {
        n && "function" != typeof n && (o = n);
        var a = "function" == typeof n ? n : void 0
          , s = new i.a(t,e,o);
        return function(t) {
            return Object(r.a)(function() {
                return s
            }, a)(t)
        }
    }
    ;
    var i = n(118)
      , r = n(31)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            return 1 === t.length && Object(i.a)(t[0]) && (t = t[0]),
            e.lift.call(r.a.apply(void 0, [e].concat(t)))
        }
    }
    ;
    var i = n(12)
      , r = n(154)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = -1);
        return function(e) {
            return 0 === t ? Object(o.b)() : t < 0 ? e.lift(new a(-1,e)) : e.lift(new a(t - 1,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(16);
    var a = function() {
        function t(t, e) {
            this.count = t,
            this.source = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.count,this.source))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.count = n,
            r.source = i,
            r
        }
        return i.a(e, t),
        e.prototype.complete = function() {
            if (!this.isStopped) {
                var e = this.source
                  , n = this.count;
                if (0 === n)
                    return t.prototype.complete.call(this);
                n > -1 && (this.count = n - 1),
                e.subscribe(this._unsubscribeAndRecycle())
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(3)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.notifier = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.notifier,e))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.notifier = n,
            r.source = i,
            r.sourceIsBeingSubscribedTo = !0,
            r
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.sourceIsBeingSubscribedTo = !0,
            this.source.subscribe(this)
        }
        ,
        e.prototype.notifyComplete = function(e) {
            if (!1 === this.sourceIsBeingSubscribedTo)
                return t.prototype.complete.call(this)
        }
        ,
        e.prototype.complete = function() {
            if (this.sourceIsBeingSubscribedTo = !1,
            !this.isStopped) {
                if (this.retries || this.subscribeToRetries(),
                !this.retriesSubscription || this.retriesSubscription.closed)
                    return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(),
                this.notifications.next()
            }
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.notifications
              , e = this.retriesSubscription;
            t && (t.unsubscribe(),
            this.notifications = null),
            e && (e.unsubscribe(),
            this.retriesSubscription = null),
            this.retries = null
        }
        ,
        e.prototype._unsubscribeAndRecycle = function() {
            var e = this._unsubscribe;
            return this._unsubscribe = null,
            t.prototype._unsubscribeAndRecycle.call(this),
            this._unsubscribe = e,
            this
        }
        ,
        e.prototype.subscribeToRetries = function() {
            var e;
            this.notifications = new r.a;
            try {
                e = (0,
                this.notifier)(this.notifications)
            } catch (e) {
                return t.prototype.complete.call(this)
            }
            this.retries = e,
            this.retriesSubscription = Object(a.a)(this, e)
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = -1);
        return function(e) {
            return e.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.count = t,
            this.source = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.count,this.source))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.count = n,
            r.source = i,
            r
        }
        return i.a(e, t),
        e.prototype.error = function(e) {
            if (!this.isStopped) {
                var n = this.source
                  , i = this.count;
                if (0 === i)
                    return t.prototype.error.call(this, e);
                i > -1 && (this.count = i - 1),
                n.subscribe(this._unsubscribeAndRecycle())
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(3)
      , a = n(4);
    var s = function() {
        function t(t, e) {
            this.notifier = t,
            this.source = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.notifier,this.source))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.notifier = n,
            r.source = i,
            r
        }
        return i.a(e, t),
        e.prototype.error = function(e) {
            if (!this.isStopped) {
                var n = this.errors
                  , i = this.retries
                  , o = this.retriesSubscription;
                if (i)
                    this.errors = null,
                    this.retriesSubscription = null;
                else {
                    n = new r.a;
                    try {
                        i = (0,
                        this.notifier)(n)
                    } catch (e) {
                        return t.prototype.error.call(this, e)
                    }
                    o = Object(a.a)(this, i)
                }
                this._unsubscribeAndRecycle(),
                this.errors = n,
                this.retries = i,
                this.retriesSubscription = o,
                n.next(e)
            }
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.errors
              , e = this.retriesSubscription;
            t && (t.unsubscribe(),
            this.errors = null),
            e && (e.unsubscribe(),
            this.retriesSubscription = null),
            this.retries = null
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            var o = this._unsubscribe;
            this._unsubscribe = null,
            this._unsubscribeAndRecycle(),
            this._unsubscribe = o,
            this.source.subscribe(this)
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t) {
            this.notifier = t
        }
        return t.prototype.call = function(t, e) {
            var n = new s(t)
              , i = e.subscribe(n);
            return i.add(Object(o.a)(n, this.notifier)),
            i
        }
        ,
        t
    }()
      , s = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.hasValue = !1,
            e
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.value = t,
            this.hasValue = !0
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.emitValue()
        }
        ,
        e.prototype.notifyComplete = function() {
            this.emitValue()
        }
        ,
        e.prototype.emitValue = function() {
            this.hasValue && (this.hasValue = !1,
            this.destination.next(this.value))
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = o.a);
        return function(n) {
            return n.lift(new a(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(13);
    var a = function() {
        function t(t, e) {
            this.period = t,
            this.scheduler = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.period,this.scheduler))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.period = n,
            r.scheduler = i,
            r.hasValue = !1,
            r.add(i.schedule(u, n, {
                subscriber: r,
                period: n
            })),
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.lastValue = t,
            this.hasValue = !0
        }
        ,
        e.prototype.notifyNext = function() {
            this.hasValue && (this.hasValue = !1,
            this.destination.next(this.lastValue))
        }
        ,
        e
    }(r.a);
    function u(t) {
        var e = t.subscriber
          , n = t.period;
        e.notifyNext(),
        this.schedule(t, n)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.compareTo = t,
            this.comparator = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.compareTo,this.comparator))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.compareTo = n,
            r.comparator = i,
            r._a = [],
            r._b = [],
            r._oneComplete = !1,
            r.destination.add(n.subscribe(new s(e,r))),
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(t),
            this.checkValues())
        }
        ,
        e.prototype._complete = function() {
            this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0,
            this.unsubscribe()
        }
        ,
        e.prototype.checkValues = function() {
            for (var t = this._a, e = this._b, n = this.comparator; t.length > 0 && e.length > 0; ) {
                var i = t.shift()
                  , r = e.shift()
                  , o = !1;
                try {
                    o = n ? n(i, r) : i === r
                } catch (t) {
                    this.destination.error(t)
                }
                o || this.emit(!1)
            }
        }
        ,
        e.prototype.emit = function(t) {
            var e = this.destination;
            e.next(t),
            e.complete()
        }
        ,
        e.prototype.nextB = function(t) {
            this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(t),
            this.checkValues())
        }
        ,
        e.prototype.completeB = function() {
            this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
        }
        ,
        e
    }(r.a)
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.parent = n,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.parent.nextB(t)
        }
        ,
        e.prototype._error = function(t) {
            this.parent.error(t),
            this.unsubscribe()
        }
        ,
        e.prototype._complete = function() {
            this.parent.completeB(),
            this.unsubscribe()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return function(t) {
            return Object(r.a)()(Object(i.a)(a)(t))
        }
    }
    ;
    var i = n(31)
      , r = n(117)
      , o = n(11);
    function a() {
        return new o.a
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        var r;
        r = t && "object" == typeof t ? t : {
            bufferSize: t,
            windowTime: e,
            refCount: !1,
            scheduler: n
        };
        return function(t) {
            return t.lift((a = (e = r).bufferSize,
            s = void 0 === a ? Number.POSITIVE_INFINITY : a,
            u = e.windowTime,
            c = void 0 === u ? Number.POSITIVE_INFINITY : u,
            l = e.refCount,
            d = e.scheduler,
            f = 0,
            p = !1,
            h = !1,
            function(t) {
                f++,
                n && !p || (p = !1,
                n = new i.a(s,c,d),
                o = t.subscribe({
                    next: function(t) {
                        n.next(t)
                    },
                    error: function(t) {
                        p = !0,
                        n.error(t)
                    },
                    complete: function() {
                        h = !0,
                        o = void 0,
                        n.complete()
                    }
                }));
                var e = n.subscribe(this);
                this.add(function() {
                    f--,
                    e.unsubscribe(),
                    o && !h && l && 0 === f && (o.unsubscribe(),
                    o = void 0,
                    n = void 0)
                })
            }
            ));
            var e, n, o, a, s, u, c, l, d, f, p, h
        }
    }
    ;
    var i = n(118)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(42);
    var a = function() {
        function t(t, e) {
            this.predicate = t,
            this.source = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.predicate,this.source))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.predicate = n,
            r.source = i,
            r.seenValue = !1,
            r.index = 0,
            r
        }
        return i.a(e, t),
        e.prototype.applySingleValue = function(t) {
            this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0,
            this.singleValue = t)
        }
        ,
        e.prototype._next = function(t) {
            var e = this.index++;
            this.predicate ? this.tryNext(t, e) : this.applySingleValue(t)
        }
        ,
        e.prototype.tryNext = function(t, e) {
            try {
                this.predicate(t, e, this.source) && this.applySingleValue(t)
            } catch (t) {
                this.destination.error(t)
            }
        }
        ,
        e.prototype._complete = function() {
            var t = this.destination;
            this.index > 0 ? (t.next(this.seenValue ? this.singleValue : void 0),
            t.complete()) : t.error(new o.a)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new o(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t) {
            this.total = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.total))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.total = n,
            i.count = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            ++this.count > this.total && this.destination.next(t)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(41);
    var a = function() {
        function t(t) {
            if (this._skipCount = t,
            this._skipCount < 0)
                throw new o.a
        }
        return t.prototype.call = function(t, e) {
            return 0 === this._skipCount ? e.subscribe(new r.a(t)) : e.subscribe(new s(t,this._skipCount))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i._skipCount = n,
            i._count = 0,
            i._ring = new Array(n),
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this._skipCount
              , n = this._count++;
            if (n < e)
                this._ring[n] = t;
            else {
                var i = n % e
                  , r = this._ring
                  , o = r[i];
                r[i] = t,
                this.destination.next(o)
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(21)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.notifier = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.notifier))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            i.hasValue = !1;
            var r = new o.a(i,void 0,void 0);
            i.add(r),
            i.innerSubscription = r;
            var s = Object(a.a)(i, n, void 0, void 0, r);
            return s !== r && (i.add(s),
            i.innerSubscription = s),
            i
        }
        return i.a(e, t),
        e.prototype._next = function(e) {
            this.hasValue && t.prototype._next.call(this, e)
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.hasValue = !0,
            this.innerSubscription && this.innerSubscription.unsubscribe()
        }
        ,
        e.prototype.notifyComplete = function() {}
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new o(t))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t) {
            this.predicate = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.predicate = n,
            i.skipping = !0,
            i.index = 0,
            i
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.destination;
            this.skipping && this.tryCallPredicate(t),
            this.skipping || e.next(t)
        }
        ,
        e.prototype.tryCallPredicate = function(t) {
            try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e)
            } catch (t) {
                this.destination.error(t)
            }
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(r.a)(n) ? (t.pop(),
        function(e) {
            return Object(i.a)(t, e, n)
        }
        ) : function(e) {
            return Object(i.a)(t, e)
        }
    }
    ;
    var i = n(54)
      , r = n(17)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = 0);
        return function(n) {
            return n.lift(new r(t,e))
        }
    }
    ;
    var i = n(327);
    var r = function() {
        function t(t, e) {
            this.scheduler = t,
            this.delay = e
        }
        return t.prototype.call = function(t, e) {
            return new i.a(e,this.delay,this.scheduler).subscribe(t)
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var i = n(0)
      , r = n(2)
      , o = n(145)
      , a = n(55)
      , s = function(t) {
        function e(e, n, i) {
            void 0 === n && (n = 0),
            void 0 === i && (i = o.a);
            var r = t.call(this) || this;
            return r.source = e,
            r.delayTime = n,
            r.scheduler = i,
            (!Object(a.a)(n) || n < 0) && (r.delayTime = 0),
            i && "function" == typeof i.schedule || (r.scheduler = o.a),
            r
        }
        return i.a(e, t),
        e.create = function(t, n, i) {
            return void 0 === n && (n = 0),
            void 0 === i && (i = o.a),
            new e(t,n,i)
        }
        ,
        e.dispatch = function(t) {
            var e = t.source
              , n = t.subscriber;
            return this.add(e.subscribe(n))
        }
        ,
        e.prototype._subscribe = function(t) {
            var n = this.delayTime
              , i = this.source;
            return this.scheduler.schedule(e.dispatch, n, {
                source: i,
                subscriber: t
            })
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return Object(i.a)(r.a)
    }
    ;
    var i = n(129)
      , r = n(29)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return e ? Object(i.a)(function() {
            return t
        }, e) : Object(i.a)(function() {
            return t
        })
    }
    ;
    var i = n(129)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new a(t))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t) {
            this.notifier = t
        }
        return t.prototype.call = function(t, e) {
            var n = new s(t)
              , i = Object(o.a)(n, this.notifier);
            return i && !n.seenValue ? (n.add(i),
            e.subscribe(n)) : n
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.seenValue = !1,
            n
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.seenValue = !0,
            this.complete()
        }
        ,
        e.prototype.notifyComplete = function() {}
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = !1);
        return function(n) {
            return n.lift(new o(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1);
    var o = function() {
        function t(t, e) {
            this.predicate = t,
            this.inclusive = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new a(t,this.predicate,this.inclusive))
        }
        ,
        t
    }()
      , a = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.predicate = n,
            r.inclusive = i,
            r.index = 0,
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e, n = this.destination;
            try {
                e = this.predicate(t, this.index++)
            } catch (t) {
                return void n.error(t)
            }
            this.nextOrComplete(t, e)
        }
        ,
        e.prototype.nextOrComplete = function(t, e) {
            var n = this.destination;
            Boolean(e) ? n.next(t) : (this.inclusive && n.next(t),
            n.complete())
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        return function(i) {
            return i.lift(new s(t,e,n))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(49)
      , a = n(37);
    var s = function() {
        function t(t, e, n) {
            this.nextOrObserver = t,
            this.error = e,
            this.complete = n
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.nextOrObserver,this.error,this.complete))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i, r) {
            var s = t.call(this, e) || this;
            return s._tapNext = o.a,
            s._tapError = o.a,
            s._tapComplete = o.a,
            s._tapError = i || o.a,
            s._tapComplete = r || o.a,
            Object(a.a)(n) ? (s._context = s,
            s._tapNext = n) : n && (s._context = n,
            s._tapNext = n.next || o.a,
            s._tapError = n.error || o.a,
            s._tapComplete = n.complete || o.a),
            s
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            try {
                this._tapNext.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(t)
        }
        ,
        e.prototype._error = function(t) {
            try {
                this._tapError.call(this._context, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.error(t)
        }
        ,
        e.prototype._complete = function() {
            try {
                this._tapComplete.call(this._context)
            } catch (t) {
                return void this.destination.error(t)
            }
            return this.destination.complete()
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e, n) {
        void 0 === e && (e = o.a);
        void 0 === n && (n = a.a);
        return function(i) {
            return i.lift(new s(t,e,n.leading,n.trailing))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(13)
      , a = n(161);
    var s = function() {
        function t(t, e, n, i) {
            this.duration = t,
            this.scheduler = e,
            this.leading = n,
            this.trailing = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.duration,this.scheduler,this.leading,this.trailing))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            return a.duration = n,
            a.scheduler = i,
            a.leading = r,
            a.trailing = o,
            a._hasTrailingValue = !1,
            a._trailingValue = null,
            a
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            this.throttled ? this.trailing && (this._trailingValue = t,
            this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(c, this.duration, {
                subscriber: this
            })),
            this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t,
            this._hasTrailingValue = !0))
        }
        ,
        e.prototype._complete = function() {
            this._hasTrailingValue ? (this.destination.next(this._trailingValue),
            this.destination.complete()) : this.destination.complete()
        }
        ,
        e.prototype.clearThrottle = function() {
            var t = this.throttled;
            t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue),
            this._trailingValue = null,
            this._hasTrailingValue = !1),
            t.unsubscribe(),
            this.remove(t),
            this.throttled = null)
        }
        ,
        e
    }(r.a);
    function c(t) {
        t.subscriber.clearThrottle()
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = i.a);
        return function(e) {
            return Object(o.a)(function() {
                return e.pipe(Object(r.a)(function(e, n) {
                    var i = e.current;
                    return {
                        value: n,
                        current: t.now(),
                        last: i
                    }
                }, {
                    current: t.now(),
                    value: void 0,
                    last: void 0
                }), Object(a.a)(function(t) {
                    var e = t.current
                      , n = t.last
                      , i = t.value;
                    return new s(i,e - n)
                }))
            })
        }
    }
    ;
    var i = n(13)
      , r = n(128)
      , o = n(124)
      , a = n(14);
    var s = function() {
        return function(t, e) {
            this.value = t,
            this.interval = e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = i.a);
        return Object(o.a)(t, Object(a.a)(new r.a), e)
    }
    ;
    var i = n(13)
      , r = n(146)
      , o = n(162)
      , a = n(120)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        void 0 === t && (t = i.a);
        return Object(r.a)(function(e) {
            return new o(e,t.now())
        })
    }
    ;
    var i = n(13)
      , r = n(14);
    var o = function() {
        return function(t, e) {
            this.value = t,
            this.timestamp = e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        return Object(i.a)(r, [])
    }
    ;
    var i = n(57);
    function r(t, e, n) {
        return 0 === n ? [e] : (t.push(e),
        t)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(3)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.windowBoundaries = t
        }
        return t.prototype.call = function(t, e) {
            var n = new u(t)
              , i = e.subscribe(n);
            return i.closed || n.add(Object(a.a)(n, this.windowBoundaries)),
            i
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.window = new r.a,
            e.next(n.window),
            n
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.openWindow()
        }
        ,
        e.prototype.notifyError = function(t, e) {
            this._error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this._complete()
        }
        ,
        e.prototype._next = function(t) {
            this.window.next(t)
        }
        ,
        e.prototype._error = function(t) {
            this.window.error(t),
            this.destination.error(t)
        }
        ,
        e.prototype._complete = function() {
            this.window.complete(),
            this.destination.complete()
        }
        ,
        e.prototype._unsubscribe = function() {
            this.window = null
        }
        ,
        e.prototype.openWindow = function() {
            var t = this.window;
            t && t.complete();
            var e = this.destination
              , n = this.window = new r.a;
            e.next(n)
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        void 0 === e && (e = 0);
        return function(n) {
            return n.lift(new a(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(1)
      , o = n(11);
    var a = function() {
        function t(t, e) {
            this.windowSize = t,
            this.startWindowEvery = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.windowSize,this.startWindowEvery))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.destination = e,
            r.windowSize = n,
            r.startWindowEvery = i,
            r.windows = [new o.a],
            r.count = 0,
            e.next(r.windows[0]),
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            for (var e = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, n = this.destination, i = this.windowSize, r = this.windows, a = r.length, s = 0; s < a && !this.closed; s++)
                r[s].next(t);
            var u = this.count - i + 1;
            if (u >= 0 && u % e == 0 && !this.closed && r.shift().complete(),
            ++this.count % e == 0 && !this.closed) {
                var c = new o.a;
                r.push(c),
                n.next(c)
            }
        }
        ,
        e.prototype._error = function(t) {
            var e = this.windows;
            if (e)
                for (; e.length > 0 && !this.closed; )
                    e.shift().error(t);
            this.destination.error(t)
        }
        ,
        e.prototype._complete = function() {
            var t = this.windows;
            if (t)
                for (; t.length > 0 && !this.closed; )
                    t.shift().complete();
            this.destination.complete()
        }
        ,
        e.prototype._unsubscribe = function() {
            this.count = 0,
            this.windows = null
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = o.a
          , n = null
          , i = Number.POSITIVE_INFINITY;
        Object(u.a)(arguments[3]) && (e = arguments[3]);
        Object(u.a)(arguments[2]) ? e = arguments[2] : Object(s.a)(arguments[2]) && (i = arguments[2]);
        Object(u.a)(arguments[1]) ? e = arguments[1] : Object(s.a)(arguments[1]) && (n = arguments[1]);
        return function(r) {
            return r.lift(new c(t,n,i,e))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(13)
      , a = n(1)
      , s = n(55)
      , u = n(17);
    var c = function() {
        function t(t, e, n, i) {
            this.windowTimeSpan = t,
            this.windowCreationInterval = e,
            this.maxWindowSize = n,
            this.scheduler = i
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new d(t,this.windowTimeSpan,this.windowCreationInterval,this.maxWindowSize,this.scheduler))
        }
        ,
        t
    }()
      , l = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._numberOfNextedValues = 0,
            e
        }
        return i.a(e, t),
        e.prototype.next = function(e) {
            this._numberOfNextedValues++,
            t.prototype.next.call(this, e)
        }
        ,
        Object.defineProperty(e.prototype, "numberOfNextedValues", {
            get: function() {
                return this._numberOfNextedValues
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(r.a)
      , d = function(t) {
        function e(e, n, i, r, o) {
            var a = t.call(this, e) || this;
            a.destination = e,
            a.windowTimeSpan = n,
            a.windowCreationInterval = i,
            a.maxWindowSize = r,
            a.scheduler = o,
            a.windows = [];
            var s = a.openWindow();
            if (null !== i && i >= 0) {
                var u = {
                    subscriber: a,
                    window: s,
                    context: null
                }
                  , c = {
                    windowTimeSpan: n,
                    windowCreationInterval: i,
                    subscriber: a,
                    scheduler: o
                };
                a.add(o.schedule(h, n, u)),
                a.add(o.schedule(p, i, c))
            } else {
                var l = {
                    subscriber: a,
                    window: s,
                    windowTimeSpan: n
                };
                a.add(o.schedule(f, n, l))
            }
            return a
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            for (var e = this.windows, n = e.length, i = 0; i < n; i++) {
                var r = e[i];
                r.closed || (r.next(t),
                r.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(r))
            }
        }
        ,
        e.prototype._error = function(t) {
            for (var e = this.windows; e.length > 0; )
                e.shift().error(t);
            this.destination.error(t)
        }
        ,
        e.prototype._complete = function() {
            for (var t = this.windows; t.length > 0; ) {
                var e = t.shift();
                e.closed || e.complete()
            }
            this.destination.complete()
        }
        ,
        e.prototype.openWindow = function() {
            var t = new l;
            return this.windows.push(t),
            this.destination.next(t),
            t
        }
        ,
        e.prototype.closeWindow = function(t) {
            t.complete();
            var e = this.windows;
            e.splice(e.indexOf(t), 1)
        }
        ,
        e
    }(a.a);
    function f(t) {
        var e = t.subscriber
          , n = t.windowTimeSpan
          , i = t.window;
        i && e.closeWindow(i),
        t.window = e.openWindow(),
        this.schedule(t, n)
    }
    function p(t) {
        var e = t.windowTimeSpan
          , n = t.subscriber
          , i = t.scheduler
          , r = t.windowCreationInterval
          , o = {
            action: this,
            subscription: null
        }
          , a = {
            subscriber: n,
            window: n.openWindow(),
            context: o
        };
        o.subscription = i.schedule(h, e, a),
        this.add(o.subscription),
        this.schedule(t, r)
    }
    function h(t) {
        var e = t.subscriber
          , n = t.window
          , i = t.context;
        i && i.action && i.subscription && i.action.remove(i.subscription),
        e.closeWindow(n)
    }
}
, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        return function(n) {
            return n.lift(new u(t,e))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(9)
      , a = n(3)
      , s = n(4);
    var u = function() {
        function t(t, e) {
            this.openings = t,
            this.closingSelector = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new c(t,this.openings,this.closingSelector))
        }
        ,
        t
    }()
      , c = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            return r.openings = n,
            r.closingSelector = i,
            r.contexts = [],
            r.add(r.openSubscription = Object(s.a)(r, n, n)),
            r
        }
        return i.a(e, t),
        e.prototype._next = function(t) {
            var e = this.contexts;
            if (e)
                for (var n = e.length, i = 0; i < n; i++)
                    e[i].window.next(t)
        }
        ,
        e.prototype._error = function(e) {
            var n = this.contexts;
            if (this.contexts = null,
            n)
                for (var i = n.length, r = -1; ++r < i; ) {
                    var o = n[r];
                    o.window.error(e),
                    o.subscription.unsubscribe()
                }
            t.prototype._error.call(this, e)
        }
        ,
        e.prototype._complete = function() {
            var e = this.contexts;
            if (this.contexts = null,
            e)
                for (var n = e.length, i = -1; ++i < n; ) {
                    var r = e[i];
                    r.window.complete(),
                    r.subscription.unsubscribe()
                }
            t.prototype._complete.call(this)
        }
        ,
        e.prototype._unsubscribe = function() {
            var t = this.contexts;
            if (this.contexts = null,
            t)
                for (var e = t.length, n = -1; ++n < e; ) {
                    var i = t[n];
                    i.window.unsubscribe(),
                    i.subscription.unsubscribe()
                }
        }
        ,
        e.prototype.notifyNext = function(t, e, n, i, a) {
            if (t === this.openings) {
                var u = void 0;
                try {
                    u = (0,
                    this.closingSelector)(e)
                } catch (t) {
                    return this.error(t)
                }
                var c = new r.a
                  , l = new o.a
                  , d = {
                    window: c,
                    subscription: l
                };
                this.contexts.push(d);
                var f = Object(s.a)(this, u, d);
                f.closed ? this.closeWindow(this.contexts.length - 1) : (f.context = d,
                l.add(f)),
                this.destination.next(c)
            } else
                this.closeWindow(this.contexts.indexOf(t))
        }
        ,
        e.prototype.notifyError = function(t) {
            this.error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            t !== this.openSubscription && this.closeWindow(this.contexts.indexOf(t.context))
        }
        ,
        e.prototype.closeWindow = function(t) {
            if (-1 !== t) {
                var e = this.contexts
                  , n = e[t]
                  , i = n.window
                  , r = n.subscription;
                e.splice(t, 1),
                i.complete(),
                r.unsubscribe()
            }
        }
        ,
        e
    }(a.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new s(t))
        }
    }
    ;
    var i = n(0)
      , r = n(11)
      , o = n(3)
      , a = n(4);
    var s = function() {
        function t(t) {
            this.closingSelector = t
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new u(t,this.closingSelector))
        }
        ,
        t
    }()
      , u = function(t) {
        function e(e, n) {
            var i = t.call(this, e) || this;
            return i.destination = e,
            i.closingSelector = n,
            i.openWindow(),
            i
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.openWindow(r)
        }
        ,
        e.prototype.notifyError = function(t, e) {
            this._error(t)
        }
        ,
        e.prototype.notifyComplete = function(t) {
            this.openWindow(t)
        }
        ,
        e.prototype._next = function(t) {
            this.window.next(t)
        }
        ,
        e.prototype._error = function(t) {
            this.window.error(t),
            this.destination.error(t),
            this.unsubscribeClosingNotification()
        }
        ,
        e.prototype._complete = function() {
            this.window.complete(),
            this.destination.complete(),
            this.unsubscribeClosingNotification()
        }
        ,
        e.prototype.unsubscribeClosingNotification = function() {
            this.closingNotification && this.closingNotification.unsubscribe()
        }
        ,
        e.prototype.openWindow = function(t) {
            void 0 === t && (t = null),
            t && (this.remove(t),
            t.unsubscribe());
            var e = this.window;
            e && e.complete();
            var n, i = this.window = new r.a;
            this.destination.next(i);
            try {
                n = (0,
                this.closingSelector)()
            } catch (t) {
                return this.destination.error(t),
                void this.window.error(t)
            }
            this.add(this.closingNotification = Object(a.a)(this, n))
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            var n;
            "function" == typeof t[t.length - 1] && (n = t.pop());
            var i = t;
            return e.lift(new a(i,n))
        }
    }
    ;
    var i = n(0)
      , r = n(3)
      , o = n(4);
    var a = function() {
        function t(t, e) {
            this.observables = t,
            this.project = e
        }
        return t.prototype.call = function(t, e) {
            return e.subscribe(new s(t,this.observables,this.project))
        }
        ,
        t
    }()
      , s = function(t) {
        function e(e, n, i) {
            var r = t.call(this, e) || this;
            r.observables = n,
            r.project = i,
            r.toRespond = [];
            var a = n.length;
            r.values = new Array(a);
            for (var s = 0; s < a; s++)
                r.toRespond.push(s);
            for (s = 0; s < a; s++) {
                var u = n[s];
                r.add(Object(o.a)(r, u, u, s))
            }
            return r
        }
        return i.a(e, t),
        e.prototype.notifyNext = function(t, e, n, i, r) {
            this.values[n] = e;
            var o = this.toRespond;
            if (o.length > 0) {
                var a = o.indexOf(n);
                -1 !== a && o.splice(a, 1)
            }
        }
        ,
        e.prototype.notifyComplete = function() {}
        ,
        e.prototype._next = function(t) {
            if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e)
            }
        }
        ,
        e.prototype._tryProject = function(t) {
            var e;
            try {
                e = this.project.apply(this, t)
            } catch (t) {
                return void this.destination.error(t)
            }
            this.destination.next(e)
        }
        ,
        e
    }(r.a)
}
, function(t, e, n) {
    "use strict";
    e.a = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function(e) {
            return e.lift.call(i.b.apply(void 0, [e].concat(t)))
        }
    }
    ;
    var i = n(125)
}
, function(t, e, n) {
    "use strict";
    e.a = function(t) {
        return function(e) {
            return e.lift(new i.a(t))
        }
    }
    ;
    var i = n(125)
}
, function(t, e) {
    t.exports = {
        render: function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "v-main",
                staticClass: "main"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showHeaderAndControlSwitch,
                    expression: "showHeaderAndControlSwitch"
                }],
                ref: "v-header-bar",
                staticClass: "anchor-info-wrap"
            }, [n("v-anchor-info", {
                attrs: {
                    title: t.title,
                    "view-count": t.viewCount,
                    status: t.status,
                    type: t.type,
                    liveType: t.liveType
                }
            }), t._v(" "), n("v-anchor-control", {
                staticClass: "stop-live-btn",
                attrs: {
                    "stop-visible": t.stopLiveBtnVisible
                },
                on: {
                    click: t.openStopLiveConfirm,
                    report: t.report
                }
            })], 1), t._v(" "), t.showCrossBarrage ? n("canvas", {
                attrs: {
                    id: "canvasBarrage"
                }
            }) : t._e(), t._v(" "), n("v-video", {
                ref: "videox",
                attrs: {
                    src: t.playUrl,
                    cid: t.cid,
                    uuid: t.uuid,
                    "anchor-id": t.anchorId,
                    "display-name": t.displayName,
                    "live-status": t.liveStatus
                },
                on: {
                    waiting: t.stallCounter,
                    renderSecond: t.isFirstFrameRenderedInSecond,
                    renderSecondTime: t.firstFrameRenderedTime,
                    openCode: t.recordOpenCode,
                    openSuccess: t.recordOpenSuccess
                }
            }), t._v(" "), t.isInitBarrageBtn ? n("v-message-barrage", {
                ref: "v-barrage-wrap",
                attrs: {
                    "show-barrage": t.showBarrage,
                    "new-chat-msg": t.newChatMsg,
                    "msg-list": t.msgList
                }
            }) : t._e(), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showHeaderAndControlSwitch,
                    expression: "showHeaderAndControlSwitch"
                }],
                ref: "v-control-btns",
                class: ["control-btns", t.showHeaderAndControlSwitch ? "control-bar-active" : ""]
            }, [t.isInitBarrageBtn ? n("v-barrage-switch", {
                attrs: {
                    "switch-on-or-off": t.showBarrage
                },
                on: {
                    switchEvent: t.showBarrageSwitch
                }
            }) : t._e(), t._v(" "), n("v-rotate-switch", {
                on: {
                    rotate: t.rotateVideo
                }
            }), t._v(" "), t.enableShare ? n("v-share-switch", {
                on: {
                    share: t.onShareHandler
                }
            }) : t._e(), t._v(" "), t.isShowClaritySelector ? n("v-clarity-selector", {
                attrs: {
                    liveUrlVO: t.liveUrlVO,
                    "play-url-arr": t.playUrlArr,
                    current: t.currentUrlVO
                },
                on: {
                    switchClarityUrlHalder: t.switchClarityUrlHalder
                }
            }) : t._e(), t._v(" "), t.enableSendCommentGrayer ? n("v-comment-input", {
                attrs: {
                    cid: t.cid,
                    uuid: t.uuid,
                    "use-rpc-send-comment": t.isDingTalkLite && t.enableLiteRpcSendCommentGrayer || t.enableRpcSendCommentGrayer && t.isSurportRpcSendLiveText,
                    "local-log": t.localLog
                },
                on: {
                    sended: t.sendedCommentEvent
                }
            }) : t._e(), t._v(" "), "1" === t.enableLinkMic ? n("v-lianmai-btn", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.shouldShowApplyLinkBtn,
                    expression: "shouldShowApplyLinkBtn"
                }],
                staticClass: "lianmai",
                attrs: {
                    "linking-members": t.linkingMembers,
                    "has-applied-link": t.hasAppliedLink,
                    "is-new-user": t.isFirstTimeUserApplyLinkFlag,
                    "is-education-group": t.isEducationGroup
                },
                on: {
                    lianmaiHandler: t.doLianmaiHandler,
                    cancelLinmaiHandler: t.doCancelApplyLinkHandler
                }
            }) : t._e(), t._v(" "), n("v-favor", {
                ref: "v-favor-wrap",
                staticClass: "favor",
                attrs: {
                    "favor-count": t.favorCount,
                    "favor-count-type": t.favorCountType
                },
                on: {
                    favor: t.favor
                }
            })], 1), t._v(" "), t.showMessage ? n("v-message-box", {
                attrs: {
                    message: t.messageText
                },
                on: {
                    close: t.closeWindow,
                    comfirm: t.closeWindow
                }
            }) : t._e(), t._v(" "), t.showStopLive ? n("v-message-box", {
                attrs: {
                    title: t.cancelTitleText,
                    message: t.stopLiveMessage,
                    comfirmText: t.cancelBtnText,
                    type: "dialog"
                },
                on: {
                    close: t.closeStopLive,
                    comfirm: t.stopLive
                }
            }) : t._e(), t._v(" "), t.punchInfo ? n("v-punch-card", {
                attrs: {
                    punchEndTimeMillis: t.punchInfo.punchEndTimeMillis,
                    liveUuid: t.punchInfo.liveUuid,
                    livePunchId: t.punchInfo.livePunchId,
                    creatorName: t.anchorName
                }
            }) : t._e()], 1)
        },
        staticRenderFns: []
    }
}
]);
