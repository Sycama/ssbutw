(function (t) {
    function e(e) {
        for (var a, i, s = e[0], l = e[1], p = e[2], u = 0, c = []; u < s.length; u++) i = s[u], n[i] && c.push(n[i][0]), n[i] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
        d && d(e);
        while (c.length) c.shift()();
        return o.push.apply(o, p || []), r()
    }

    function r() {
        for (var t, e = 0; e < o.length; e++) {
            for (var r = o[e], a = !0, s = 1; s < r.length; s++) {
                var l = r[s];
                0 !== n[l] && (a = !1)
            }
            a && (o.splice(e--, 1), t = i(i.s = r[0]))
        }
        return t
    }
    var a = {},
        n = {
            Genesis6: 0
        },
        o = [];

    function i(e) {
        if (a[e]) return a[e].exports;
        var r = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = t, i.c = a, i.d = function (t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) i.d(r, a, function (e) {
                return t[e]
            }.bind(null, a));
        return r
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
        l = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var p = 0; p < s.length; p++) e(s[p]);
    var d = l;
    o.push([7, "chunk-vendors", "chunk-common"]), r()
})({
    "6a02": function (t, e, r) {
        "use strict";
        var a = r("8c4d"),
            n = r.n(a);
        n.a
    },
    7: function (t, e, r) {
        t.exports = r("7541")
    },
    7541: function (t, e, r) {
        "use strict";
        r.r(e);
        var a = r("2b0e"),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return t.state.loading ? t._e() : r("div", {
                    staticClass: "scoreboard hidden"
                }, [r("div", {
                    attrs: {
                        id: "board1"
                    }
                }), r("div", {
                    attrs: {
                        id: "container"
                    }
                }, [r("div", {
                    attrs: {
                        id: "player1container"
                    }
                }, [r("div", {
                    staticClass: "score",
                    attrs: {
                        id: "score1"
                    }
                }, [r("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [r("div", {
                    key: t.tournament.player[0].score
                }, [t._v("\n            " + t._s(t.tournament.player[0].score) + "\n          ")])])], 1), r("div", {
                    attrs: {
                        id: "triangle1"
                    }
                }), r("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player1"
                    }
                }, [r("div", {
                    staticClass: "playertext"
                }, [t._v(t._s(t.playerBoard[0]))])])]), r("div", {
                    attrs: {
                        id: "player2container"
                    }
                }, [r("div", {
                    staticClass: "score",
                    attrs: {
                        id: "score2"
                    }
                }, [r("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [r("div", {
                    key: t.tournament.player[1].score
                }, [t._v("\n            " + t._s(t.tournament.player[1].score) + "\n          ")])])], 1), r("div", {
                    attrs: {
                        id: "triangle2"
                    }
                }), r("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player2"
                    }
                }, [r("div", {
                    staticClass: "playertext"
                }, [t._v(t._s(t.playerBoard[1]))])])])]), r("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [r("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [r("div", {
                    key: t.tournament.progress
                }, [t._v("\n        " + t._s(t.tournament.progress) + " - BEST OF " + t._s(t.tournament.bo) + "\n      ")])])], 1)])
            },
            o = [],
            i = (r("ac6a"), r("109c")),
            s = r("e01a"),
            l = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        playerBoard: ["", ""],
                        tl: null,
                        tournament: s["f"]
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1, this.toName(), this.$nextTick().then(() => {
                            this.setInitAnimation()
                        })
                    },
                    setInitAnimation() {
                        const t = new i["b"]({
                            pause: !0
                        });
                        t.to(".hidden", .8, {
                            opacity: 1,
                            repeat: 0,
                            ease: i["a"].Linear,
                            delay: .6,
                            yoyo: !1
                        }, "targetPoint");
                        const e = new i["b"]({
                            repeat: -1
                        });
                        e.to(".playertext", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toTwitter
                        }).to(".playertext", .5, {
                            opacity: 1,
                            repeat: 0,
                            delay: 0
                        }).to(".playertext", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toName
                        }).to(".playertext", .5, {
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
                    this.Rep = {}, Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: s["f"]
                    }), this.Rep.Tournament.on("change", t => {
                        this.tournament = JSON.parse(JSON.stringify(t))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            p = l,
            d = (r("6a02"), r("2877")),
            u = Object(d["a"])(p, n, o, !1, null, null, null),
            c = u.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: t => t(c)
        }).$mount("#app")
    },
    "8c4d": function (t, e, r) { }
});