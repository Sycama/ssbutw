(function (t) {
    function e(e) {
        for (var a, i, s = e[0], l = e[1], p = e[2], c = 0, d = []; c < s.length; c++) i = s[c], n[i] && d.push(n[i][0]), n[i] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
        u && u(e);
        while (d.length) d.shift()();
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
            "Frostbite2019-doubles": 0
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
    var u = l;
    o.push([6, "chunk-vendors", "chunk-common"]), r()
})({
    6: function (t, e, r) {
        t.exports = r("af20")
    },
    af20: function (t, e, r) {
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
                    staticClass: "score",
                    class: t.getTeam1Color,
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
                }, [t._v("\n          " + t._s(t.tournament.player[0].score) + "\n        ")])])], 1), t._l(4, function (e, a) {
                    return r("div", {
                        key: "player" + e,
                        staticClass: "player",
                        attrs: {
                            id: "player" + e
                        }
                    }, [r("div", {
                        staticClass: "player__triangle",
                        class: "player__triangle--" + t.tournament.player[a].color
                    }), r("div", {
                        staticClass: "player__board",
                        class: "player--" + t.tournament.player[a].color
                    }, [r("div", {
                        staticClass: "player__text"
                    }, [t._v(t._s(t.playerBoard[a]))])]), r("div", {
                        staticClass: "player__flag",
                        class: "player--" + t.tournament.player[a].color,
                        style: t.setFlag(a)
                    }), r("div", {
                        staticClass: "player__board--after",
                        class: "player--" + t.tournament.player[a].color
                    })])
                }), r("div", {
                    staticClass: "score",
                    class: t.getTeam2Color,
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
                }, [t._v("\n          " + t._s(t.tournament.player[1].score) + "\n        ")])])], 1)], 2), r("div", {
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
                }, [t._v("\n        " + t._s(t.tournament.progress) + "\n      ")])])], 1)])
            },
            o = [],
            i = (r("ac6a"), r("422b")),
            s = r("109c"),
            l = r("e01a"),
            p = {
                name: "App",
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        playerBoard: ["", "", "", ""],
                        tl: null,
                        tournament: l["f"]
                    }
                },
                computed: {
                    getTeam1Color() {
                        return `score--${this.tournament.player[0].color}`
                    },
                    getTeam2Color() {
                        return this.tournament.player[0].color === this.tournament.player[1].color ? `score--${this.tournament.player[2].color}` : `score--${this.tournament.player[1].color}`
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1, this.toName(), this.$nextTick().then(() => {
                            this.setInitAnimation()
                        })
                    },
                    setInitAnimation() {
                        const t = new s["b"]({
                            pause: !0
                        });
                        t.to(".hidden", .8, {
                            opacity: 1,
                            repeat: 0,
                            ease: s["a"].Linear,
                            delay: .6,
                            yoyo: !1
                        }, "targetPoint");
                        const e = new s["b"]({
                            repeat: -1
                        });
                        e.to(".player__text", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toTwitter
                        }).to(".player__text", .5, {
                            opacity: 1,
                            repeat: 0,
                            delay: 0
                        }).to(".player__text", .5, {
                            opacity: 0,
                            repeat: 0,
                            delay: 5,
                            onComplete: this.toName
                        }).to(".player__text", .5, {
                            opacity: 1,
                            repeat: 0,
                            delay: 0
                        })
                    },
                    toTwitter() {
                        this.playerBoard = [`＠${this.tournament.player[0].twitter}`, `＠${this.tournament.player[1].twitter}`, `＠${this.tournament.player[2].twitter}`, `＠${this.tournament.player[3].twitter}`]
                    },
                    toName() {
                        this.playerBoard = [this.tournament.player[0].displayName, this.tournament.player[1].displayName, this.tournament.player[2].displayName, this.tournament.player[3].displayName]
                    },
                    setFlag(t) {
                        const e = `url('../pic/flag/${this.tournament.player[t].country}.svg')`;
                        return {
                            "background-size": "cover",
                            "background-image": e,
                            "background-repeat": "no-repeat",
                            "background-position": "center center"
                        }
                    }
                },
                created() {
                    this.FLAGS = i, this.Rep = {}, Object.defineProperty(this.FLAGS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: l["f"]
                    }), this.Rep.Tournament.on("change", t => {
                        this.tournament = JSON.parse(JSON.stringify(t))
                    })
                },
                mounted() {
                    this.waitForReplicants()
                }
            },
            u = p,
            c = (r("bd75"), r("2877")),
            d = Object(c["a"])(u, n, o, !1, null, null, null),
            y = d.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: t => t(y)
        }).$mount("#app")
    },
    bd75: function (t, e, r) {
        "use strict";
        var a = r("fca2"),
            n = r.n(a);
        n.a
    },
    fca2: function (t, e, r) { }
});