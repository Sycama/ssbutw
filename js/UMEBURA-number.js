(function (e) {
    function t(t) {
        for (var r, i, s = t[0], l = t[1], d = t[2], p = 0, c = []; p < s.length; p++) i = s[p], n[i] && c.push(n[i][0]), n[i] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        u && u(t);
        while (c.length) c.shift()();
        return o.push.apply(o, d || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], r = !0, s = 1; s < a.length; s++) {
                var l = a[s];
                0 !== n[l] && (r = !1)
            }
            r && (o.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }
    var r = {},
        n = {
            "UMEBURA-number": 0
        },
        o = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.e = function () {
        return Promise.resolve()
    }, i.m = e, i.c = r, i.d = function (e, t, a) {
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
            for (var r in e) i.d(a, r, function (t) {
                return e[t]
            }.bind(null, r));
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
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var u = l;
    o.push([13, "chunk-vendors", "chunk-common"]), a()
})({
    13: function (e, t, a) {
        e.exports = a("ae12")
    },
    "319c": function (e, t, a) {
        "use strict";
        var r = a("c9f9"),
            n = a.n(r);
        n.a
    },
    ae12: function (e, t, a) {
        "use strict";
        a.r(t);
        var r = a("2b0e"),
            n = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return e.state.loading ? e._e() : a("div", {
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
                    staticClass: "hidden",
                    attrs: {
                        id: "container"
                    }
                }, [a("div", {
                    attrs: {
                        id: "flags"
                    }
                }, [a("div", {
                    style: e.P1Flag,
                    attrs: {
                        id: "flag1"
                    }
                }), a("div", {
                    style: e.P2Flag,
                    attrs: {
                        id: "flag2"
                    }
                })]), a("div", {
                    attrs: {
                        id: "score1"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: e.tournament.player[0].score
                }, [e._v("\n          " + e._s(e.tournament.player[0].score) + "\n        ")])])], 1), a("div", {
                    attrs: {
                        id: "score2"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: e.tournament.player[1].score
                }, [e._v("\n          " + e._s(e.tournament.player[1].score) + "\n        ")])])], 1), a("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player1"
                    }
                }, [e._v(e._s(e.playerBoard[0]))]), a("div", {
                    staticClass: "playerboard",
                    attrs: {
                        id: "player2"
                    }
                }, [e._v(e._s(e.playerBoard[1]))]), a("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("div", {
                    key: e.tournament.progress
                }, [e._v("\n          " + e._s(e.tournament.progress) + "\n        ")])])], 1)])])
            },
            o = [],
            i = (a("ac6a"), a("422b")),
            s = a("d27d"),
            l = a("109c"),
            d = a("e01a"),
            u = {
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
                    P1Flag() {
                        const e = `url('../pic/flag/${this.tournament.player[0].country}.svg')`;
                        return {
                            "background-size": "cover",
                            "background-image": e,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    },
                    P2Flag() {
                        const e = `url('../pic/flag/${this.tournament.player[1].country}.svg')`;
                        return {
                            "background-size": "cover",
                            "background-image": e,
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
                    setInitAnimation() {
                        const e = new l["b"]({
                            pause: !0
                        });
                        e.to("#board__middle", .5, {
                            top: "0px",
                            repeat: 0,
                            ease: l["a"].Linear,
                            delay: 0,
                            yoyo: !1
                        }).to("#board__left", .8, {
                            left: "0px",
                            repeat: 0,
                            ease: l["a"].Linear,
                            delay: .4,
                            yoyo: !1
                        }, "targetPoint").to("#board__right", .8, {
                            left: "0px",
                            repeat: 0,
                            ease: l["a"].Linear,
                            delay: .4,
                            yoyo: !1
                        }, "targetPoint").to(".hidden", .8, {
                            opacity: 1,
                            repeat: 0,
                            ease: l["a"].Linear,
                            delay: .6,
                            yoyo: !1
                        }, "targetPoint");
                        const t = new l["b"]({
                            repeat: -1
                        });
                        t.to(".playerboard", .5, {
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
                    this.OPTIONS = s, this.FLAGS = i, this.Rep = {}, Object.defineProperty(this.OPTIONS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.FLAGS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: d["f"]
                    }), this.Rep.Tournament.on("change", e => {
                        this.tournament = JSON.parse(JSON.stringify(e))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            p = u,
            c = (a("319c"), a("2877")),
            y = Object(c["a"])(p, n, o, !1, null, null, null),
            f = y.exports;
        r["a"].config.productionTip = !1, new r["a"]({
            render: e => e(f)
        }).$mount("#app")
    },
    c9f9: function (e, t, a) { }
});