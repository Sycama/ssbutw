(function (t) {
    function e(e) {
        for (var r, i, s = e[0], u = e[1], c = e[2], d = 0, p = []; d < s.length; d++) i = s[d], a[i] && p.push(a[i][0]), a[i] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
        l && l(e);
        while (p.length) p.shift()();
        return o.push.apply(o, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
                var u = n[s];
                0 !== a[u] && (r = !1)
            }
            r && (o.splice(e--, 1), t = i(i.s = n[0]))
        }
        return t
    }
    var r = {},
        a = {
            "HIROSUMA-Thumbnail": 0
        },
        o = [];

    function i(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = t, i.c = r, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "../";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var l = u;
    o.push([10, "chunk-vendors", "chunk-common"]), n()
})({
    10: function (t, e, n) {
        t.exports = n("162c")
    },
    "162c": function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2b0e"),
            a = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.state.loading ? t._e() : n("div", [n("div", {
                    attrs: {
                        id: "board"
                    }
                }, [n("div", {
                    attrs: {
                        id: "bg"
                    }
                }), n("div", {
                    attrs: {
                        id: "cobgL"
                    }
                }), n("div", {
                    attrs: {
                        id: "cobgR"
                    }
                }), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.P1,
                    style: t.P1chara,
                    attrs: {
                        id: "charaL"
                    }
                })]), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.P2,
                    style: t.P2chara,
                    attrs: {
                        id: "charaR"
                    }
                })]), n("div", {
                    attrs: {
                        id: "coL"
                    }
                }), n("div", {
                    attrs: {
                        id: "coR"
                    }
                }), n("div", {
                    attrs: {
                        id: "boardtop"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.tournament.player[0].displayName,
                    attrs: {
                        id: "pName1"
                    }
                }, [t._v("\n          " + t._s(t.tournament.player[0].displayName) + "\n        ")])]), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.tournament.player[1].displayName,
                    attrs: {
                        id: "pName2"
                    }
                }, [t._v("\n          " + t._s(t.tournament.player[1].displayName) + "\n        ")])]), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    attrs: {
                        id: "number"
                    }
                }, [t._v("\n          " + t._s(t.TournamentNumber) + "\n        ")])]), n("div", {
                    attrs: {
                        id: "date"
                    }
                }, [t._v("\n        " + t._s(t.nowDate) + "\n      ")]), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.tournament.location,
                    attrs: {
                        id: "place"
                    }
                }, [t._v("\n          " + t._s(t.tournament.location) + "\n        ")])]), n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    key: t.tournament.progress,
                    attrs: {
                        id: "bracket"
                    }
                }, [t._v("\n          " + t._s(t.tournament.progress) + "\n        ")])])], 1)], 1)])
            },
            o = [],
            i = (n("ac6a"), n("e01a")),
            s = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        tournament: i["f"]
                    }
                },
                computed: {
                    nowDate() {
                        const t = new Date,
                            e = `0${t.getDate()}`.slice(-2),
                            n = `0${t.getMonth() + 1}`.slice(-2),
                            r = t.getFullYear();
                        return `${r}/${n}/${e}`
                    },
                    P1() {
                        let t = 0;
                        for (let e = 4; e >= 0; e -= 1)
                            if (null !== this.tournament.player[0].stock_icon[e]) {
                                t = "-" === this.tournament.player[0].stock_icon[e][0] || "+" === this.tournament.player[0].stock_icon[e][0] ? this.tournament.player[0].stock_icon[e].slice(1) : this.tournament.player[0].stock_icon[e];
                                break
                            }
                        return t
                    },
                    P2() {
                        let t = 0;
                        for (let e = 4; e >= 0; e -= 1)
                            if (null !== this.tournament.player[1].stock_icon[e]) {
                                t = "-" === this.tournament.player[1].stock_icon[e][0] || "+" === this.tournament.player[1].stock_icon[e][0] ? this.tournament.player[1].stock_icon[e].slice(1) : this.tournament.player[1].stock_icon[e];
                                break
                            }
                        return t
                    },
                    P1chara() {
                        const t = `url('../pic/score-board/HIROSUMA/standings/${this.P1}.png')`;
                        return {
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "left center"
                        }
                    },
                    P2chara() {
                        const t = `url('../pic/score-board/HIROSUMA/standings/${this.P2}.png')`;
                        return {
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "left center"
                        }
                    },
                    TournamentNumber() {
                        const t = this.tournament.event.match("#[0-9]*$");
                        return t.length > 0 ? t[0] : ""
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1
                    }
                },
                created() {
                    this.Rep = {}, Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: i["f"]
                    }), this.Rep.Tournament.on("change", t => {
                        this.tournament = JSON.parse(JSON.stringify(t))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            u = s,
            c = (n("460b"), n("2877")),
            l = Object(c["a"])(u, a, o, !1, null, null, null),
            d = l.exports;
        r["a"].config.productionTip = !1, new r["a"]({
            render: t => t(d)
        }).$mount("#app")
    },
    "460b": function (t, e, n) {
        "use strict";
        var r = n("68b2"),
            a = n.n(r);
        a.a
    },
    "68b2": function (t, e, n) { }
});