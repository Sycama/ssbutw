(function (e) {
    function t(t) {
        for (var n, i, o = t[0], c = t[1], l = t[2], p = 0, f = []; p < o.length; p++) i = o[p], s[i] && f.push(s[i][0]), s[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        u && u(t);
        while (f.length) f.shift()();
        return r.push.apply(r, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], n = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== s[c] && (n = !1)
            }
            n && (r.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }
    var n = {},
        s = {
            BanStage: 0
        },
        r = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = e, i.c = n, i.d = function (e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
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
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(a, n, function (t) {
                return e[t]
            }.bind(null, n));
        return a
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
        c = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var l = 0; l < o.length; l++) t(o[l]);
    var u = c;
    r.push([5, "chunk-vendors", "chunk-common"]), a()
})({
    "426a": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a("2b0e"),
            s = (a("402c"), a("d3a4")),
            r = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-app", [e.state.loading ? e._e() : a("v-layout", {
                    attrs: {
                        column: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("ul", {
                    staticClass: "stages"
                }, [e._l(e.stages.st, function (t, n) {
                    return a("li", {
                        key: "st" + n
                    }, [a("v-img", {
                        staticClass: "stages__block",
                        class: {
                            "stages--ban": -1 !== e.stages.banPick.ban.indexOf(t), "stages--pick": -1 !== e.stages.banPick.pick.indexOf(t)
                        },
                        attrs: {
                            src: "../pic/stages/" + parseInt(t) + ".jpg"
                        }
                    }, [a("div", {
                        staticClass: "stages__name"
                    }, [e._v("\n              " + e._s(e.STAGES[parseInt(t)]) + "\n            ")])])], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2), a("ul", {
                    staticClass: "stages"
                }, [e._l(e.stages.cp, function (t, n) {
                    return a("li", {
                        key: "cp" + n
                    }, [e.stages.counterPick ? a("v-img", {
                        staticClass: "stages__block",
                        class: {
                            "stages--ban": -1 !== e.stages.banPick.ban.indexOf(t), "stages--pick": -1 !== e.stages.banPick.pick.indexOf(t)
                        },
                        attrs: {
                            src: "../pic/stages/" + parseInt(t) + ".jpg"
                        }
                    }, [a("div", {
                        staticClass: "stages__name"
                    }, [e._v("\n              " + e._s(e.STAGES[parseInt(t)]) + "\n            ")])]) : e._e()], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2)])], 1)], 1)
            },
            i = [],
            o = (a("ac6a"), a("e01a")),
            c = {
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
            l = c,
            u = (a("abd3"), a("2877")),
            p = a("6544"),
            f = a.n(p),
            g = a("7496"),
            d = a("0e8f"),
            b = a("adda"),
            v = a("a722"),
            h = Object(u["a"])(l, r, i, !1, null, null, null),
            _ = h.exports;
        f()(h, {
            VApp: g["a"],
            VFlex: d["a"],
            VImg: b["a"],
            VLayout: v["a"]
        }), n["a"].config.productionTip = !1, new n["a"]({
            i18n: s["a"],
            render: e => e(_)
        }).$mount("#app")
    },
    5: function (e, t, a) {
        e.exports = a("426a")
    },
    7705: function (e, t, a) { },
    abd3: function (e, t, a) {
        "use strict";
        var n = a("7705"),
            s = a.n(n);
        s.a
    }
});