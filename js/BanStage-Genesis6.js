(function (e) {
    function t(t) {
        for (var a, i, o = t[0], u = t[1], c = t[2], p = 0, f = []; p < o.length; p++) i = o[p], r[i] && f.push(r[i][0]), r[i] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        l && l(t);
        while (f.length) f.shift()();
        return s.push.apply(s, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, o = 1; o < n.length; o++) {
                var u = n[o];
                0 !== r[u] && (a = !1)
            }
            a && (s.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            "BanStage-Genesis6": 0
        },
        s = [];

    function i(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = e, i.c = a, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "../";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var c = 0; c < o.length; c++) t(o[c]);
    var l = u;
    s.push([4, "chunk-vendors", "chunk-common"]), n()
})({
    "085a": function (e, t, n) { },
    "1c19": function (e, t, n) {
        "use strict";
        var a = n("085a"),
            r = n.n(a);
        r.a
    },
    4: function (e, t, n) {
        e.exports = n("9d5d")
    },
    "9d5d": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("2b0e"),
            r = (n("402c"), n("d3a4")),
            s = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-app", [e.state.loading ? e._e() : n("v-layout", {
                    attrs: {
                        column: ""
                    }
                }, [n("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [n("transition-group", {
                    staticClass: "stages",
                    attrs: {
                        name: "list",
                        tag: "ul"
                    }
                }, [e._l(e.stages.banPick.ban, function (e, t) {
                    return n("li", {
                        key: "st" + t
                    }, [n("v-img", {
                        staticClass: "stages__block stages--ban",
                        attrs: {
                            src: "../pic/stages/" + parseInt(e) + ".jpg"
                        }
                    })], 1)
                }), e._l(e.stages.banPick.pick, function (t, a) {
                    return n("li", {
                        key: "cp" + a
                    }, [n("v-img", {
                        staticClass: "stages__block stages--pick",
                        attrs: {
                            src: "../pic/stages/" + parseInt(t) + ".jpg"
                        }
                    }, [n("div", {
                        staticClass: "stages__name"
                    }, [e._v("\n              " + e._s(e.STAGES[parseInt(t)]) + "\n            ")])])], 1)
                })], 2)], 1)], 1)], 1)
            },
            i = [],
            o = (n("ac6a"), n("e01a")),
            u = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        stages: {}
                    }
                },
                computed: {},
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1
                    }
                },
                created() {
                    this.STAGES = o["g"], this.Rep = {}, Object.defineProperty(this.STAGES, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Stages = nodecg.Replicant("stage", {
                        defaultValue: o["h"]
                    }), this.Rep.Stages.on("change", e => {
                        this.stages = JSON.parse(JSON.stringify(e))
                    }), this.waitForReplicants()
                }
            },
            c = u,
            l = (n("1c19"), n("2877")),
            p = n("6544"),
            f = n.n(p),
            d = n("7496"),
            g = n("0e8f"),
            b = n("adda"),
            h = n("a722"),
            v = Object(l["a"])(c, s, i, !1, null, null, null),
            y = v.exports;
        f()(v, {
            VApp: d["a"],
            VFlex: g["a"],
            VImg: b["a"],
            VLayout: h["a"]
        }), a["a"].config.productionTip = !1, new a["a"]({
            i18n: r["a"],
            render: e => e(y)
        }).$mount("#app")
    }
});