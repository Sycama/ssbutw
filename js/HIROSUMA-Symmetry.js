(function (t) {
    function e(e) {
        for (var a, i, s = e[0], c = e[1], d = e[2], u = 0, p = []; u < s.length; u++) i = s[u], n[i] && p.push(n[i][0]), n[i] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        l && l(e);
        while (p.length) p.shift()();
        return r.push.apply(r, d || []), o()
    }

    function o() {
        for (var t, e = 0; e < r.length; e++) {
            for (var o = r[e], a = !0, s = 1; s < o.length; s++) {
                var c = o[s];
                0 !== n[c] && (a = !1)
            }
            a && (r.splice(e--, 1), t = i(i.s = o[0]))
        }
        return t
    }
    var a = {},
        n = {
            "HIROSUMA-Symmetry": 0
        },
        r = [];

    function i(e) {
        if (a[e]) return a[e].exports;
        var o = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = t, i.c = a, i.d = function (t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
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
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) i.d(o, a, function (e) {
                return t[e]
            }.bind(null, a));
        return o
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
    r.push([9, "chunk-vendors", "chunk-common"]), o()
})({
    "59bf": function (t, e, o) {
        "use strict";
        var a = o("abd0"),
            n = o.n(a);
        n.a
    },
    9: function (t, e, o) {
        t.exports = o("c3be")
    },
    abd0: function (t, e, o) { },
    c3be: function (t, e, o) {
        "use strict";
        o.r(e);
        var a = o("2b0e"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return t.state.loading ? t._e() : o("div", {
                    staticClass: "scoreboard"
                }, [o("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__middle"
                    }
                }), o("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__left"
                    }
                }), o("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__right"
                    }
                }), o("div", {
                    staticClass: "board",
                    attrs: {
                        id: "board__stock"
                    }
                }), o("div", {
                    staticClass: "hidden",
                    attrs: {
                        id: "container"
                    }
                }, [o("div", {
                    attrs: {
                        id: "stock"
                    }
                }, [o("div", {
                    attrs: {
                        id: "stock1"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P1-4" + t.tournament.player[0].stock_icon[4],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[4])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P1-3" + t.tournament.player[0].stock_icon[3],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[3])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P1-2" + t.tournament.player[0].stock_icon[2],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[2])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P1-1" + t.tournament.player[0].stock_icon[1],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[1])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P1-0" + t.tournament.player[0].stock_icon[0],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[0].stock_icon[0])
                })])], 1), o("div", {
                    attrs: {
                        id: "stock2"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P2-0" + t.tournament.player[1].stock_icon[0],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[0])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P2-1" + t.tournament.player[1].stock_icon[1],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[1])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P2-2" + t.tournament.player[1].stock_icon[2],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[2])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P2-3" + t.tournament.player[1].stock_icon[3],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[3])
                })]), o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: "P2-4" + t.tournament.player[1].stock_icon[4],
                    staticClass: "icon",
                    style: t.StockIcon(t.tournament.player[1].stock_icon[4])
                })])], 1)]), o("div", {
                    attrs: {
                        id: "score1"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: t.tournament.player[0].score,
                    staticClass: "score",
                    style: t.P1Score
                })]), o("div", {
                    staticClass: "score--after",
                    style: t.BoScore
                })], 1), o("div", {
                    attrs: {
                        id: "score2"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: t.tournament.player[1].score,
                    staticClass: "score",
                    style: t.P2Score
                })]), o("div", {
                    staticClass: "score--after",
                    style: t.BoScore
                })], 1), o("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player1"
                    }
                }, [t._v(t._s(t.playerBoard[0]))]), o("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player2"
                    }
                }, [t._v(t._s(t.playerBoard[1]))]), o("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [o("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [o("div", {
                    key: t.tournament.progress
                }, [t._v("\n          " + t._s(t.tournament.progress) + "\n        ")])])], 1)])])
            },
            r = [],
            i = (o("ac6a"), o("a705")),
            s = o("d27d"),
            c = o("109c"),
            d = o("e01a"),
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
                    BoScore() {
                        const t = `url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-0.png')`;
                        return {
                            "background-size": "contain",
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    },
                    P1Score() {
                        const t = `url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-${this.tournament.player[0].score}.png')`;
                        return {
                            "background-size": "contain",
                            "background-image": t,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    },
                    P2Score() {
                        const t = `url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-${this.tournament.player[1].score}.png')`;
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
            p = (o("59bf"), o("2877")),
            y = Object(p["a"])(u, n, r, !1, null, null, null),
            m = y.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: t => t(m)
        }).$mount("#app")
    }
});