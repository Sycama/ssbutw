(function (t) {
    function e(e) {
        for (var o, i, s = e[0], c = e[1], d = e[2], u = 0, p = []; u < s.length; u++) i = s[u], n[i] && p.push(n[i][0]), n[i] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        l && l(e);
        while (p.length) p.shift()();
        return r.push.apply(r, d || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], o = !0, s = 1; s < a.length; s++) {
                var c = a[s];
                0 !== n[c] && (o = !1)
            }
            o && (r.splice(e--, 1), t = i(i.s = a[0]))
        }
        return t
    }
    var o = {},
        n = {
            HIROSUMA: 0
        },
        r = [];

    function i(e) {
        if (o[e]) return o[e].exports;
        var a = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = t, i.c = o, i.d = function (t, e, a) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
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
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(a, o, function (e) {
                return t[e]
            }.bind(null, o));
        return a
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
        c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var d = 0; d < s.length; d++) e(s[d]);
    var l = c;
    r.push([11, "chunk-vendors", "chunk-common"]), a()
})({
    "09fd": function (t, e, a) {
        "use strict";
        a.r(e);
        var o = a("2b0e"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return t.state.loading ? t._e() : a("div", {
                    staticClass: "scoreboard"
                }, [a("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__middle"
                    }
                }), a("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__left"
                    }
                }), a("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__right"
                    }
                }), a("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__stock"
                    }
                }), a("div", {
                    staticClass: "hidden",
                    attrs: {
                        id: "container"
                    }
                }, [a("div", {
                    attrs: {
                        id: "stock"
                    }
                }, [a("div", {
                    attrs: {
                        id: "stock1"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P1-4" + t.tournament.player[0].stock_icon[0],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[0])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P1-3" + t.tournament.player[0].stock_icon[1],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[1])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P1-2" + t.tournament.player[0].stock_icon[2],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[2])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P1-1" + t.tournament.player[0].stock_icon[3],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[3])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P1-0" + t.tournament.player[0].stock_icon[4],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[4])
                })])], 1), a("div", {
                    attrs: {
                        id: "stock2"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P2-0" + t.tournament.player[1].stock_icon[0],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[0])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P2-1" + t.tournament.player[1].stock_icon[1],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[1])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P2-2" + t.tournament.player[1].stock_icon[2],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[2])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P2-3" + t.tournament.player[1].stock_icon[3],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[3])
                })]), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: "P2-4" + t.tournament.player[1].stock_icon[4],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[4])
                })])], 1)]), a("div", {
                    attrs: {
                        id: "score1"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: t.tournament.player[0].score,
                    staticClass: "score",
                    style: t.P1Score
                })])], 1), a("div", {
                    attrs: {
                        id: "score2"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: t.tournament.player[1].score,
                    staticClass: "score",
                    style: t.P2Score
                })])], 1), a("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player1"
                    }
                }, [t._v(t._s(t.playerBoard[0]))]), a("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player2"
                    }
                }, [t._v(t._s(t.playerBoard[1]))]), a("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: t.tournament.progress
                }, [t._v("\n          " + t._s(t.tournament.progress) + "\n        ")])])], 1)])])
            },
            r = [],
            i = (a("ac6a"), a("a705")),
            s = a("d27d"),
            c = a("109c"),
            d = a("e01a"),
            l = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        playerBoard: ["", ""],
                        tl: null,
                        tournament: d["f"]
                    }
                },
                computed: {
                    P1Score() {
                        const t = `url('../pic/score-board/HIROSUMA/bo${this.tournament.bo}-${this.tournament.player[0].score}-L.png')`;
                        return {
                            "background-size": "contain",
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    },
                    P2Score() {
                        const t = `url('../pic/score-board/HIROSUMA/bo${this.tournament.bo}-${this.tournament.player[1].score}-R.png')`;
                        return {
                            "background-size": "contain",
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1, this.toName(), this.$nextTick().then(() => {
                            this.setInitAnimation()
                        })
                    },
                    StockIcon(t) {
                        let e = null;
                        return t ? "-" === t[0] ? (e = `url('../pic/stock-icons/${this.FIGHTERS[t.slice(1)].file}.svg')`, {
                            "background-size": "contain",
                            "background-image": e,
                            "background-repeat": "no-repeat",
                            "background-position": "center center",
                            opacity: .5
                        }) : "+" === t[0] ? (e = `url('../pic/stock-icons/${this.FIGHTERS[t.slice(1)].file}.svg')`, {
                            "background-size": "contain",
                            "background-image": e,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }) : (e = `url('../pic/stock-icons/${this.FIGHTERS[t].file}.svg')`, {
                            "background-size": "contain",
                            "background-image": e,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }) : {}
                    },
                    setInitAnimation() {
                        const t = new c["b"]({
                            pause: !0
                        });
                        t.to("#board__middle", .2, {
                            top: "0px",
                            repeat: 0,
                            ease: c["a"].Linear,
                            delay: 0,
                            yoyo: !1
                        }).to("#board__left", .2, {
                            top: "0px",
                            repeat: 0,
                            ease: c["a"].Linear,
                            delay: 0,
                            yoyo: !1
                        }, "targetPoint").to("#board__right", .2, {
                            top: "0px",
                            repeat: 0,
                            ease: c["a"].Linear,
                            delay: 0,
                            yoyo: !1
                        }, "targetPoint").to("#board__stock", .2, {
                            top: "0px",
                            repeat: 0,
                            ease: c["a"].Linear,
                            delay: 0,
                            yoyo: !1
                        }).to(".hidden", .8, {
                            opacity: 1,
                            repeat: 0,
                            ease: c["a"].Linear,
                            delay: .1,
                            yoyo: !1
                        });
                        const e = new c["b"]({
                            repeat: -1
                        });
                        e.to(".playerboard", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toTwitter
                        }).to(".playerboard", .5, {
                            opacity: 1,
                            repeat: 0,
                            delay: 0
                        }).to(".playerboard", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toName
                        }).to(".playerboard", .5, {
                            opacity: 1,
                            repeat: 0,
                            delay: 0
                        })
                    },
                    toTwitter() {
                        this.playerBoard = [`＠${this.tournament.player[0].twitter}`, `＠${this.tournament.player[1].twitter}`]
                    },
                    toName() {
                        this.playerBoard = [this.tournament.player[0].displayName, this.tournament.player[1].displayName]
                    }
                },
                created() {
                    this.OPTIONS = s, this.FIGHTERS = i, this.Rep = {}, Object.defineProperty(this.OPTIONS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.FIGHTERS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: d["f"]
                    }), this.Rep.Tournament.on("change", t => {
                        this.tournament = JSON.parse(JSON.stringify(t))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            u = l,
            p = (a("aaa1"), a("2877")),
            y = Object(p["a"])(u, n, r, !1, null, null, null),
            m = y.exports;
        o["a"].config.productionTip = !1, new o["a"]({
            render: t => t(m)
        }).$mount("#app")
    },
    11: function (t, e, a) {
        t.exports = a("09fd")
    },
    "3f21": function (t, e, a) { },
    aaa1: function (t, e, a) {
        "use strict";
        var o = a("3f21"),
            n = a.n(o);
        n.a
    }
});