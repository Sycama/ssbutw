(function (e) {
    function t(t) {
        for (var r, i, u = t[0], s = t[1], d = t[2], c = 0, p = []; c < u.length; c++) i = u[c], a[i] && p.push(a[i][0]), a[i] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        l && l(t);
        while (p.length) p.shift()();
        return o.push.apply(o, d || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, u = 1; u < n.length; u++) {
                var s = n[u];
                0 !== a[s] && (r = !1)
            }
            r && (o.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            "HIROSUMA-Interval": 0
        },
        o = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = e, i.c = r, i.d = function (e, t, n) {
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
            for (var r in e) i.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
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
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var l = s;
    o.push([8, "chunk-vendors", "chunk-common"]), n()
})({
    "011d": function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("2b0e"),
            a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.state.loading ? e._e() : n("div", [n("div", {
                    attrs: {
                        id: "board3"
                    }
                }, [n("div", {
                    attrs: {
                        id: "intInfo1"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: e.tournament.event
                }, [e._v("\n            " + e._s(e.tournament.event) + "\n          ")])])], 1), n("div", {
                    attrs: {
                        id: "intInfo2"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: e.tournament.location
                }, [e._v("\n            " + e._s(e.tournament.location) + "\n          ")])])], 1)]), n("div", {
                    attrs: {
                        id: "board2"
                    }
                }), n("div", {
                    attrs: {
                        id: "board1"
                    }
                }), n("div", {
                    attrs: {
                        id: "board4"
                    }
                })])
            },
            o = [],
            i = (n("ac6a"), n("109c")),
            u = n("e01a"),
            s = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        tournament: u["f"]
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1, this.$nextTick().then(() => {
                            this.setInitAnimation()
                        })
                    },
                    setInitAnimation() {
                        i["c"].from("#board1", .8, {
                            left: "-200px",
                            repeat: 0,
                            ease: i["a"].easeOut,
                            delay: 0,
                            yoyo: !1
                        }), i["c"].from("#board2", 1.5, {
                            left: "-500px",
                            repeat: 0,
                            ease: i["a"].easeOut,
                            delay: 0,
                            yoyo: !1
                        }), i["c"].from("#board3", 1.5, {
                            left: "-1000px",
                            repeat: 0,
                            ease: i["a"].easeOut,
                            delay: 0,
                            yoyo: !1
                        }), i["c"].from("#board4", 3, {
                            opacity: 0,
                            repeat: 0,
                            ease: i["a"].easeIn,
                            delay: 0,
                            yoyo: !1
                        })
                    }
                },
                created() {
                    this.Rep = {}, Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: u["f"]
                    }), this.Rep.Tournament.on("change", e => {
                        this.tournament = JSON.parse(JSON.stringify(e))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            d = s,
            l = (n("0d018"), n("2877")),
            c = Object(l["a"])(d, a, o, !1, null, null, null),
            p = c.exports;
        r["a"].config.productionTip = !1, new r["a"]({
            render: e => e(p)
        }).$mount("#app")
    },
    "0d018": function (e, t, n) {
        "use strict";
        var r = n("4d16"),
            a = n.n(r);
        a.a
    },
    "4d16": function (e, t, n) { },
    8: function (e, t, n) {
        e.exports = n("011d")
    }
});