(function (t) {
    function e(e) {
        for (var r, o, s = e[0], i = e[1], c = e[2], u = 0, m = []; u < s.length; u++) o = s[u], n[o] && m.push(n[o][0]), n[o] = 0;
        for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        p && p(e);
        while (m.length) m.shift()();
        return l.push.apply(l, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < l.length; e++) {
            for (var a = l[e], r = !0, o = 1; o < a.length; o++) {
                var i = a[o];
                0 !== n[i] && (r = !1)
            }
            r && (l.splice(e--, 1), t = s(s.s = a[0]))
        }
        return t
    }
    var r = {},
        n = {
            scoreboard: 0
        },
        l = [];

    function o(t) {
        return s.p + "js/" + ({
            "lang-de_DE": "lang-de_DE",
            "lang-en_AU": "lang-en_AU",
            "lang-en_GB": "lang-en_GB",
            "lang-es_ES": "lang-es_ES",
            "lang-es_LA": "lang-es_LA",
            "lang-fr_CA": "lang-fr_CA",
            "lang-fr_FR": "lang-fr_FR",
            "lang-it_IT": "lang-it_IT",
            "lang-ja_JP": "lang-ja_JP",
            "lang-ko_KR": "lang-ko_KR",
            "lang-nl_NL": "lang-nl_NL",
            "lang-ru_RU": "lang-ru_RU"
        }[t] || t) + "." + {
            "lang-de_DE": "97ab05ac",
            "lang-en_AU": "399529e4",
            "lang-en_GB": "d44029f4",
            "lang-es_ES": "b38708d9",
            "lang-es_LA": "3bedf0ef",
            "lang-fr_CA": "1c259716",
            "lang-fr_FR": "9f04630b",
            "lang-it_IT": "977619fb",
            "lang-ja_JP": "9e325a1e",
            "lang-ko_KR": "3c0c276e",
            "lang-nl_NL": "d17af8d3",
            "lang-ru_RU": "1420f49a"
        }[t] + ".js"
    }

    function s(e) {
        if (r[e]) return r[e].exports;
        var a = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    s.e = function (t) {
        var e = [],
            a = n[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var r = new Promise(function (e, r) {
                    a = n[t] = [e, r]
                });
                e.push(a[2] = r);
                var l, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.src = o(t), l = function (e) {
                    i.onerror = i.onload = null, clearTimeout(c);
                    var a = n[t];
                    if (0 !== a) {
                        if (a) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                l = e && e.target && e.target.src,
                                o = new Error("Loading chunk " + t + " failed.\n(" + r + ": " + l + ")");
                            o.type = r, o.request = l, a[1](o)
                        }
                        n[t] = void 0
                    }
                };
                var c = setTimeout(function () {
                    l({
                        type: "timeout",
                        target: i
                    })
                }, 12e4);
                i.onerror = i.onload = l, document.head.appendChild(i)
            }
        return Promise.all(e)
    }, s.m = t, s.c = r, s.d = function (t, e, a) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) s.d(a, r, function (e) {
                return t[e]
            }.bind(null, r));
        return a
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "../", s.oe = function (t) {
        throw console.error(t), t
    };
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var u = 0; u < i.length; u++) e(i[u]);
    var p = c;
    l.push([2, "chunk-vendors", "chunk-common"]), a()
})({
    "0103": function (t, e, a) {
        "use strict";
        var r = a("0c7a"),
            n = a.n(r);
        n.a
    },
    "0c7a": function (t, e, a) { },
    2: function (t, e, a) {
        t.exports = a("e102")
    },
    ae49: function (t, e, a) { },
    b2a3: function (t, e, a) {
        "use strict";
        var r = a("ae49"),
            n = a.n(r);
        n.a
    },
    e102: function (t, e, a) {
        "use strict";
        a.r(e);
        var r = a("2b0e"),
            n = (a("402c"), a("d3a4")),
            l = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-app", [t.state.loading ? t._e() : a("v-layout", {
                    staticStyle: {
                        padding: "10px"
                    },
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    staticClass: "pr-1",
                    attrs: {
                        xs8: ""
                    }
                }, [a("v-layout", {
                    staticClass: "panel",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "primary"
                    }
                }, [a("v-icon", [t._v("fas fa-gamepad")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v("\n            " + t._s(t.$t("score.scoreboard")) + "\n          ")])], 1), 2 === t.tournament.playerCount ? a("Singles", {
                    attrs: {
                        countryList: t.countryList,
                        Rep: t.Rep,
                        tournament: t.tournament,
                        playerlist: t.playerlist,
                        playerDB: t.playerDB
                    }
                }) : t._e(), 4 === t.tournament.playerCount ? a("Doubles", {
                    attrs: {
                        countryList: t.countryList,
                        Rep: t.Rep,
                        tournament: t.tournament,
                        playerlist: t.playerlist,
                        playerDB: t.playerDB
                    }
                }) : t._e()], 1)], 1), a("v-flex", {
                    staticClass: "pl-1",
                    attrs: {
                        xs4: ""
                    }
                }, [a("v-layout", {
                    staticClass: "panel",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "primary"
                    }
                }, [a("v-icon", [t._v("fas fa-gamepad")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v(t._s(t.$t("score.info")))])], 1), a("v-layout", {
                    staticClass: "pt-2 pb-2 text-xs-center",
                    staticStyle: {
                        "font-size": "1.2rem"
                    },
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            " + t._s(t.$t("score.tournament_name")) + ": " + t._s(t.tournament.event) + "\n          ")]), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            " + t._s(t.$t("score.tournament_location")) + ": " + t._s(t.tournament.location) + "\n          ")]), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            " + t._s(t.$t("score.tournament_progress")) + ": " + t._s(t.tournament.progress) + "\n          ")]), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            BEST OF " + t._s(t.tournament.bo) + "\n          ")])], 1)], 1), a("RuleSetting", {
                    attrs: {
                        Rep: t.Rep,
                        tournament: t.tournament
                    }
                }), a("v-expansion-panel", [a("v-expansion-panel-content", {
                    staticStyle: {
                        "background-color": "#FAFAFA"
                    }
                }, [a("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [t._v("Replicant Data")]), a("div", {
                    staticClass: "pa-2"
                }, [t._v("\n            " + t._s(t.tournament) + "\n          ")])])], 1)], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("LocaleSelector")], 1)], 1)], 1)
            },
            o = [],
            s = (a("ac6a"), function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-layout", {
                    attrs: {
                        column: ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-2"
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-center": "",
                        "align-center": ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        dark: "",
                        color: "teal"
                    },
                    on: {
                        click: function (e) {
                            return t.clearScore()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-eraser")]), t._v("\n        " + t._s(t.$t("score.reset")) + "\n      ")], 1), a("v-btn", {
                    attrs: {
                        dark: "",
                        color: "teal"
                    },
                    on: {
                        click: function (e) {
                            return t.swapPlayer()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-exchange-alt")]), t._v("\n        " + t._s(t.$t("score.swap")) + "\n      ")], 1)], 1)], 1), a("v-flex", [a("v-divider")], 1), a("v-flex", [a("v-layout", {
                    staticClass: "pt-2 pb-2 text-xs-center",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, t._l(2, function (e, r) {
                    return a("v-flex", {
                        key: "singles" + e,
                        attrs: {
                            xs6: ""
                        }
                    }, [a("v-layout", {
                        attrs: {
                            row: "",
                            wrap: "",
                            "justify-center": "",
                            "align-center": ""
                        }
                    }, [a("v-flex", {
                        staticClass: "playername",
                        attrs: {
                            xs12: ""
                        }
                    }, [t._v("\n            " + t._s(t.tournament.player[r].displayName) + "\n          ")]), a("v-flex", {
                        staticClass: "score",
                        attrs: {
                            xs3: ""
                        }
                    }, [t._v(t._s(t.tournament.player[r].score))]), a("v-flex", {
                        attrs: {
                            xs3: ""
                        }
                    }, [a("v-btn", {
                        attrs: {
                            large: "",
                            color: "primary"
                        },
                        on: {
                            click: function (e) {
                                t.Rep.Tournament.value.player[r].score += 1
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-caret-up")])], 1), a("v-btn", {
                        attrs: {
                            large: "",
                            color: "error"
                        },
                        on: {
                            click: function (e) {
                                0 !== t.Rep.Tournament.value.player[r].score && (t.Rep.Tournament.value.player[r].score -= 1)
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-caret-down")])], 1)], 1)], 1), a("v-flex", {
                        staticClass: "pl-3 pr-3",
                        attrs: {
                            xs12: ""
                        }
                    }, [a("v-layout", {
                        attrs: {
                            row: "",
                            wrap: "",
                            "justify-center": "",
                            "align-center": ""
                        }
                    }, [a("v-flex", {
                        staticClass: "pl-2 pr-2",
                        attrs: {
                            xs6: ""
                        }
                    }, [a("v-autocomplete", {
                        attrs: {
                            items: t.playerlist,
                            label: t.$t("players.player") + "#" + e,
                            color: "black",
                            outline: ""
                        },
                        model: {
                            value: t.formData.player[r].tag,
                            callback: function (e) {
                                t.$set(t.formData.player[r], "tag", e)
                            },
                            expression: "formData.player[index].tag"
                        }
                    })], 1), a("v-flex", {
                        staticClass: "pl-2 pr-2",
                        attrs: {
                            xs6: ""
                        }
                    }, [a("v-text-field", {
                        attrs: {
                            label: t.$t("players.twitter"),
                            outline: ""
                        },
                        model: {
                            value: t.Rep.Tournament.value.player[r].twitter,
                            callback: function (e) {
                                t.$set(t.Rep.Tournament.value.player[r], "twitter", e)
                            },
                            expression: "Rep.Tournament.value.player[index].twitter"
                        }
                    })], 1), a("v-flex", {
                        attrs: {
                            xs3: ""
                        }
                    }, [a("v-checkbox", {
                        staticStyle: {
                            margin: "0"
                        },
                        attrs: {
                            label: t.$t("score.use_custom")
                        },
                        model: {
                            value: t.formData.player[r].nameSelect,
                            callback: function (e) {
                                t.$set(t.formData.player[r], "nameSelect", e)
                            },
                            expression: "formData.player[index].nameSelect"
                        }
                    })], 1), a("v-flex", {
                        attrs: {
                            xs9: ""
                        }
                    }, [a("v-text-field", {
                        attrs: {
                            label: t.$t("score.custom_name") + "/" + t.$t("players.name"),
                            disabled: !t.formData.player[r].nameSelect,
                            outline: ""
                        },
                        model: {
                            value: t.formData.player[r].name,
                            callback: function (e) {
                                t.$set(t.formData.player[r], "name", e)
                            },
                            expression: "formData.player[index].name"
                        }
                    })], 1), a("v-flex", {
                        staticClass: "pr-1",
                        attrs: {
                            xs5: ""
                        }
                    }, [a("v-text-field", {
                        attrs: {
                            label: t.$t("players.prefix"),
                            outline: ""
                        },
                        model: {
                            value: t.formData.player[r].prefix,
                            callback: function (e) {
                                t.$set(t.formData.player[r], "prefix", e)
                            },
                            expression: "formData.player[index].prefix"
                        }
                    })], 1), a("v-flex", {
                        attrs: {
                            xs7: ""
                        }
                    }, [a("v-autocomplete", {
                        attrs: {
                            items: t.countryList,
                            label: t.$t("players.country"),
                            outline: ""
                        },
                        model: {
                            value: t.Rep.Tournament.value.player[r].country,
                            callback: function (e) {
                                t.$set(t.Rep.Tournament.value.player[r], "country", e)
                            },
                            expression: "Rep.Tournament.value.player[index].country"
                        }
                    })], 1)], 1)], 1)], 1)
                }), 1)], 1), a("StockIcon", {
                    attrs: {
                        Rep: t.Rep,
                        tournament: t.tournament,
                        IconCharaList: t.IconCharaList
                    }
                })], 1)
            }),
            i = [],
            c = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "primary"
                    }
                }, [a("v-icon", [t._v("fas fa-fist-raised")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v(t._s(t.$t("score.stock_icon")))])], 1), t._l(t.formData.icon.round + 1, function (e, r) {
                    return a("ul", {
                        key: "round" + e,
                        staticClass: "charaicon"
                    }, [a("v-autocomplete", {
                        attrs: {
                            items: t.IconCharaList,
                            label: t.$t("game.use"),
                            outline: "",
                            "hide-details": ""
                        },
                        model: {
                            value: t.formData.icon.player[0][r],
                            callback: function (e) {
                                t.$set(t.formData.icon.player[0], r, e)
                            },
                            expression: "formData.icon.player[0][rdIndex]"
                        }
                    }), a("v-radio-group", {
                        staticStyle: {
                            "margin-top": "0"
                        },
                        attrs: {
                            row: "",
                            "hide-details": ""
                        },
                        model: {
                            value: t.formData.icon.winlose[r],
                            callback: function (e) {
                                t.$set(t.formData.icon.winlose, r, e)
                            },
                            expression: "formData.icon.winlose[rdIndex]"
                        }
                    }, [a("v-radio", {
                        attrs: {
                            label: "#1",
                            color: "red darken-2",
                            value: -1
                        }
                    }), a("v-radio", {
                        attrs: {
                            label: "G" + e,
                            color: "black",
                            value: 0
                        }
                    }), a("v-radio", {
                        attrs: {
                            label: "#2",
                            color: "blue darken-2",
                            value: 1
                        }
                    })], 1), a("v-autocomplete", {
                        attrs: {
                            items: t.IconCharaList,
                            label: t.$t("game.use"),
                            outline: "",
                            "hide-details": ""
                        },
                        model: {
                            value: t.formData.icon.player[1][r],
                            callback: function (e) {
                                t.$set(t.formData.icon.player[1], r, e)
                            },
                            expression: "formData.icon.player[1][rdIndex]"
                        }
                    })], 1)
                }), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    staticClass: "pt-2 pb-2 text-xs-center",
                    attrs: {
                        row: "",
                        "justify-space-around": ""
                    }
                }, [a("div", [a("v-btn", {
                    attrs: {
                        color: "primary",
                        disabled: 4 === t.formData.icon.round
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.addStockIcon()
                        }
                    }
                }, [a("v-icon", [t._v("\n            fas fa-plus-square\n          ")])], 1), a("v-btn", {
                    attrs: {
                        color: "error",
                        disabled: 0 === t.formData.icon.round
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.deleteStockIcon()
                        }
                    }
                }, [a("v-icon", [t._v("\n            fas fa-minus-square\n          ")])], 1)], 1)])], 1)], 2)
            },
            u = [],
            p = {
                name: "StockIcon",
                props: {
                    Rep: Object,
                    tournament: Object,
                    IconCharaList: Array
                },
                data() {
                    return {
                        formData: {
                            icon: {
                                round: 0,
                                winlose: [0, 0, 0, 0, 0],
                                player: [
                                    [null, null, null, null, null],
                                    [null, null, null, null, null]
                                ]
                            }
                        }
                    }
                },
                watch: {
                    WatchP1StockIcon: function (t, e) {
                        let a = !0;
                        t.forEach((t, r) => {
                            t !== e[r] && (a = !1)
                        }), a || (this.Rep.Tournament.value.player[0].stock_icon = t)
                    },
                    WatchP2StockIcon: function (t, e) {
                        let a = !0;
                        t.forEach((t, r) => {
                            t !== e[r] && (a = !1)
                        }), a || (this.Rep.Tournament.value.player[1].stock_icon = t)
                    },
                    ClearSwapDetect: function (t, e) {
                        t[0] || e ? e[0] === t[1] && e[1] === t[0] && this.setStockIcon(this.tournament.player[0].stock_icon, this.tournament.player[1].stock_icon) : (this.formData.icon.round = 0, this.formData.icon.player = [
                            [null, null, null, null, null],
                            [null, null, null, null, null]
                        ])
                    }
                },
                computed: {
                    ClearSwapDetect() {
                        return [this.tournament.player[0].stock_icon[0], this.tournament.player[1].stock_icon[0]]
                    },
                    WatchP1StockIcon() {
                        const t = [];
                        for (let e = 0; e < 5; e += 1)
                            if (this.formData.icon.player[0][e]) switch (this.formData.icon.winlose[e]) {
                                case 1:
                                    t.push(`-${this.formData.icon.player[0][e]}`);
                                    break;
                                case -1:
                                    t.push(`+${this.formData.icon.player[0][e]}`);
                                    break;
                                case 0:
                                    e <= this.formData.icon.round ? t.push(this.formData.icon.player[0][e]) : t.push(null);
                                    break;
                                default:
                                    t.push(null);
                                    break
                            } else t.push(null);
                        return t
                    },
                    WatchP2StockIcon() {
                        const t = [];
                        for (let e = 0; e < 5; e += 1)
                            if (this.formData.icon.player[1][e]) switch (this.formData.icon.winlose[e]) {
                                case 1:
                                    t.push(`+${this.formData.icon.player[1][e]}`);
                                    break;
                                case -1:
                                    t.push(`-${this.formData.icon.player[1][e]}`);
                                    break;
                                case 0:
                                    e <= this.formData.icon.round ? t.push(this.formData.icon.player[1][e]) : t.push(null);
                                    break;
                                default:
                                    t.push(null);
                                    break
                            } else t.push(null);
                        return t
                    }
                },
                methods: {
                    setStockIcon(t, e) {
                        t.forEach((t, e) => {
                            t ? "-" === t[0] ? (this.$set(this.formData.icon.player[0], e, t.slice(1)), this.$set(this.formData.icon.winlose, e, 1), this.formData.icon.round = e) : "+" === t[0] ? (this.$set(this.formData.icon.player[0], e, t.slice(1)), this.$set(this.formData.icon.winlose, e, -1), this.formData.icon.round = e) : (this.$set(this.formData.icon.player[0], e, t), this.$set(this.formData.icon.winlose, e, 0), this.formData.icon.round = e) : (this.$set(this.formData.icon.player[0], e, null), this.$set(this.formData.icon.winlose, e, 0))
                        }), e.forEach((t, e) => {
                            t ? "-" === t[0] || "+" === t[0] ? this.$set(this.formData.icon.player[1], e, t.slice(1)) : this.$set(this.formData.icon.player[1], e, t) : this.$set(this.formData.icon.player[1], e, null)
                        })
                    },
                    addStockIcon() {
                        const t = this.formData.icon.player[0],
                            e = this.formData.icon.player[1];
                        t[this.formData.icon.round + 1] = t[this.formData.icon.round], e[this.formData.icon.round + 1] = e[this.formData.icon.round], this.$set(this.formData.icon.winlose, this.formData.icon.round + 1, 0), this.formData.icon.round += 1
                    },
                    deleteStockIcon() {
                        this.formData.icon.player[0][this.formData.icon.round] = null, this.formData.icon.player[1][this.formData.icon.round] = null, this.$set(this.formData.icon.winlose, this.formData.icon.round, 0), this.formData.icon.round -= 1
                    }
                },
                created() {
                    this.setStockIcon(this.tournament.player[0].stock_icon, this.tournament.player[1].stock_icon)
                }
            },
            m = p,
            f = a("2877"),
            h = a("6544"),
            y = a.n(h),
            v = a("c6a6"),
            d = a("8336"),
            x = a("0e8f"),
            D = a("132d"),
            b = a("a722"),
            g = a("67b6"),
            _ = a("43a6"),
            S = a("71d9"),
            R = a("2a7f"),
            w = Object(f["a"])(m, c, u, !1, null, "3131cbe0", null),
            T = w.exports;
        y()(w, {
            VAutocomplete: v["a"],
            VBtn: d["a"],
            VFlex: x["a"],
            VIcon: D["a"],
            VLayout: b["a"],
            VRadio: g["a"],
            VRadioGroup: _["a"],
            VToolbar: S["a"],
            VToolbarTitle: R["a"]
        });
        var k = a("a705"),
            $ = {
                name: "Singles",
                props: {
                    Rep: Object,
                    tournament: Object,
                    countryList: Array,
                    playerlist: Array,
                    playerDB: Object
                },
                components: {
                    StockIcon: T
                },
                data() {
                    return {
                        formData: {
                            player: [{
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }, {
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }]
                        }
                    }
                },
                watch: {
                    WatchP1Select: function (t) {
                        this.fillPlayerData(0, t)
                    },
                    WatchP2Select: function (t) {
                        this.fillPlayerData(1, t)
                    },
                    WatchP1Name: function (t) {
                        this.Rep.Tournament.value.player[0].displayName = t
                    },
                    WatchP2Name: function (t) {
                        this.Rep.Tournament.value.player[1].displayName = t
                    }
                },
                computed: {
                    IconCharaList() {
                        return this.genCharaList(this.formData.player[0].tag, this.formData.player[1].tag)
                    },
                    WatchP1Name() {
                        const t = this.formData.player[0];
                        let e = "";
                        switch (t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, this.tournament.final) {
                            case 2:
                            case 3:
                                e += " [L]";
                                break;
                            case 1:
                            default:
                                break
                        }
                        return e
                    },
                    WatchP2Name() {
                        const t = this.formData.player[1];
                        let e = "";
                        switch (t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, this.tournament.final) {
                            case 1:
                            case 3:
                                e += " [L]";
                                break;
                            case 2:
                            default:
                                break
                        }
                        return e
                    },
                    WatchP1Select() {
                        return this.formData.player[0].tag
                    },
                    WatchP2Select() {
                        return this.formData.player[1].tag
                    }
                },
                methods: {
                    ShowPlayerName(t) {
                        const e = this.formData.player[t];
                        let a = "";
                        return e.prefix && (a += e.prefix, a += "｜"), e.nameSelect ? a += e.name : a += e.tag, a
                    },
                    fillPlayerData(t, e) {
                        const a = this.formData.player[t];
                        this.playerDB[e] ? (a.nameSelect = !1, a.name = this.playerDB[e].name, a.prefix = this.playerDB[e].prefix, this.Rep.Tournament.value.player[t].twitter = this.playerDB[e].twitter, this.Rep.Tournament.value.player[t].country = this.playerDB[e].country, this.Rep.Tournament.value.player[t].displayName = this.ShowPlayerName(t)) : (a.nameSelect = !1, a.name = "", a.prefix = "", this.Rep.Tournament.value.player[t].twitter = "", this.Rep.Tournament.value.player[t].country = "", this.Rep.Tournament.value.player[t].displayName = this.ShowPlayerName(t))
                    },
                    winnerLoserSide(t) {
                        switch (this.tournament.final) {
                            case 1:
                                return 1 === t ? " [L]" : "";
                            case 2:
                                return 1 === t ? "" : " [L]";
                            case 3:
                                return " [L]";
                            default:
                                break
                        }
                        return ""
                    },
                    genCharaList(t, e) {
                        const a = [];
                        let r = [],
                            n = null;
                        return this.playerDB[t] && 0 !== this.playerDB[t].fighters.length && (r = [...this.playerDB[t].fighters]), this.playerDB[e] && 0 !== this.playerDB[e].fighters.length && (r = [...r, ...this.playerDB[e].fighters]), r.length > 0 && (n = new Set(r)), a.push({
                            text: "NULL",
                            value: null
                        }), Object.entries(this.FIGHTERS).forEach(([t]) => {
                            "zh_Hant_TW" === this.$i18n.locale || "ja_JP" === this.$i18n.locale ? n && n.has(t) ? a.unshift({
                                text: `${this.$t(`fighters.${t}.name`)} (${this.$i18n.messages.en_US.fighters[t].name})`,
                                value: t
                            }) : a.push({
                                text: `${this.$t(`fighters.${t}.name`)} (${this.$i18n.messages.en_US.fighters[t].name})`,
                                value: t
                            }) : n && n.has(t) ? a.unshift({
                                text: `${this.$t(`fighters.${t}.name`)}`,
                                value: t
                            }) : a.push({
                                text: `${this.$t(`fighters.${t}.name`)}`,
                                value: t
                            })
                        }), a
                    },
                    clearScore() {
                        this.Rep.Tournament.value.player[0].score = 0, this.Rep.Tournament.value.player[1].score = 0, this.Rep.Tournament.value.player[0].stock_icon = [null, null, null, null, null], this.Rep.Tournament.value.player[1].stock_icon = [null, null, null, null, null]
                    },
                    swapPlayer() {
                        [this.Rep.Tournament.value.player[0], this.Rep.Tournament.value.player[1]] = [this.Rep.Tournament.value.player[1], this.Rep.Tournament.value.player[0]], [this.formData.player[0], this.formData.player[1]] = [this.formData.player[1], this.formData.player[0]], 1 === this.Rep.Tournament.value.final ? this.Rep.Tournament.value.final = 2 : 2 === this.Rep.Tournament.value.final && (this.Rep.Tournament.value.final = 1)
                    }
                },
                created() {
                    this.FIGHTERS = k, Object.defineProperty(this.FIGHTERS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.tournament.player.forEach((t, e) => {
                        "" !== t.displayName && (this.formData.player[e].nameSelect = !0, this.formData.player[e].name = t.displayName)
                    })
                }
            },
            P = $,
            C = a("ac7c"),
            O = a("ce7e"),
            N = a("2677"),
            L = Object(f["a"])(P, s, i, !1, null, "317e058a", null),
            I = L.exports;
        y()(L, {
            VAutocomplete: v["a"],
            VBtn: d["a"],
            VCheckbox: C["a"],
            VDivider: O["a"],
            VFlex: x["a"],
            VIcon: D["a"],
            VLayout: b["a"],
            VTextField: N["a"]
        });
        var V = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("v-layout", {
                attrs: {
                    column: ""
                }
            }, [a("v-flex", {
                staticClass: "pa-2"
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: "",
                    "justify-center": "",
                    "align-center": ""
                }
            }, [a("v-btn", {
                attrs: {
                    dark: "",
                    color: "teal"
                },
                on: {
                    click: function (e) {
                        return t.clearScore()
                    }
                }
            }, [a("v-icon", {
                attrs: {
                    left: ""
                }
            }, [t._v("fas fa-eraser")]), t._v("\n        " + t._s(t.$t("score.reset")) + "\n      ")], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-divider")], 1), a("v-flex", {
                attrs: {
                    xs8: ""
                }
            }, [a("draggable", {
                model: {
                    value: t.formData.player,
                    callback: function (e) {
                        t.$set(t.formData, "player", e)
                    },
                    expression: "formData.player"
                }
            }, [a("transition-group", {
                staticClass: "layout row wrap justify-center align-center",
                attrs: {
                    name: "draggable"
                }
            }, t._l(t.formData.player, function (e, r) {
                return a("v-flex", {
                    key: "player" + r,
                    staticClass: "swap",
                    class: "bgcolor--" + t.tournament.player[r].color,
                    attrs: {
                        xs3: ""
                    }
                }, [a("span", {
                    staticClass: "swap__text"
                }, [t._v("[" + t._s(t.tournament.player[r].displayName) + "]")])])
            }), 1)], 1)], 1), a("v-flex", {
                staticClass: "pt-1",
                attrs: {
                    xs8: ""
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: "",
                    "justify-center": "",
                    "align-center": ""
                }
            }, t._l(4, function (e, r) {
                return a("v-flex", {
                    key: "player-color" + r,
                    class: "bgcolor--" + t.tournament.player[r].color,
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-select", {
                    attrs: {
                        items: t.COLOR,
                        label: t.$t("score.color"),
                        "hide-details": "",
                        outline: ""
                    },
                    model: {
                        value: t.Rep.Tournament.value.player[r].color,
                        callback: function (e) {
                            t.$set(t.Rep.Tournament.value.player[r], "color", e)
                        },
                        expression: "Rep.Tournament.value.player[index].color"
                    }
                })], 1)
            }), 1)], 1)], 1)], 1), a("v-flex", [a("v-divider")], 1), a("v-flex", [a("v-layout", {
                staticClass: "pt-2 pb-2 text-xs-center",
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [t._l(2, function (e, r) {
                return a("v-flex", {
                    key: "doubles-score" + r,
                    attrs: {
                        xs6: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-center": "",
                        "align-center": ""
                    }
                }, [a("v-flex", {
                    staticClass: "playername",
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            Team #" + t._s(t.getTeamColor(r)) + "\n          ")]), a("v-flex", {
                    staticClass: "score",
                    attrs: {
                        xs3: ""
                    }
                }, [t._v(t._s(t.tournament.player[r].score))]), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        large: "",
                        color: "primary"
                    },
                    on: {
                        click: function (e) {
                            t.Rep.Tournament.value.player[r].score += 1
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-caret-up")])], 1), a("v-btn", {
                    attrs: {
                        large: "",
                        color: "error"
                    },
                    on: {
                        click: function (e) {
                            0 !== t.Rep.Tournament.value.player[r].score && (t.Rep.Tournament.value.player[r].score -= 1)
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-caret-down")])], 1)], 1)], 1)], 1)
            }), t._l(4, function (e, r) {
                return a("v-flex", {
                    key: "doubles-player" + r,
                    staticClass: "pa-3",
                    class: "bgcolor--" + t.tournament.player[r].color,
                    attrs: {
                        xs6: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-center": "",
                        "align-center": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pl-2 pr-2",
                    attrs: {
                        xs6: ""
                    }
                }, [a("v-autocomplete", {
                    attrs: {
                        items: t.playerlist,
                        label: t.$t("players.player") + "#" + e,
                        color: "black",
                        outline: ""
                    },
                    model: {
                        value: t.formData.player[r].tag,
                        callback: function (e) {
                            t.$set(t.formData.player[r], "tag", e)
                        },
                        expression: "formData.player[index].tag"
                    }
                })], 1), a("v-flex", {
                    staticClass: "pl-2 pr-2",
                    attrs: {
                        xs6: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: t.$t("players.twitter"),
                        outline: ""
                    },
                    model: {
                        value: t.Rep.Tournament.value.player[r].twitter,
                        callback: function (e) {
                            t.$set(t.Rep.Tournament.value.player[r], "twitter", e)
                        },
                        expression: "Rep.Tournament.value.player[index].twitter"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-checkbox", {
                    staticStyle: {
                        margin: "0"
                    },
                    attrs: {
                        label: t.$t("score.use_custom")
                    },
                    model: {
                        value: t.formData.player[r].nameSelect,
                        callback: function (e) {
                            t.$set(t.formData.player[r], "nameSelect", e)
                        },
                        expression: "formData.player[index].nameSelect"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: t.$t("score.custom_name") + "/" + t.$t("players.name"),
                        disabled: !t.formData.player[r].nameSelect,
                        outline: ""
                    },
                    model: {
                        value: t.formData.player[r].name,
                        callback: function (e) {
                            t.$set(t.formData.player[r], "name", e)
                        },
                        expression: "formData.player[index].name"
                    }
                })], 1), a("v-flex", {
                    staticClass: "pr-1",
                    attrs: {
                        xs5: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: t.$t("players.prefix"),
                        outline: ""
                    },
                    model: {
                        value: t.formData.player[r].prefix,
                        callback: function (e) {
                            t.$set(t.formData.player[r], "prefix", e)
                        },
                        expression: "formData.player[index].prefix"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs7: ""
                    }
                }, [a("v-autocomplete", {
                    attrs: {
                        items: t.countryList,
                        label: t.$t("players.country"),
                        outline: ""
                    },
                    model: {
                        value: t.Rep.Tournament.value.player[r].country,
                        callback: function (e) {
                            t.$set(t.Rep.Tournament.value.player[r], "country", e)
                        },
                        expression: "Rep.Tournament.value.player[index].country"
                    }
                })], 1)], 1)], 1)
            })], 2)], 1)], 1)
        },
            j = [],
            B = a("e01a"),
            F = a("310e"),
            A = a.n(F),
            E = {
                name: "Singles",
                props: {
                    Rep: Object,
                    tournament: Object,
                    countryList: Array,
                    playerlist: Array,
                    playerDB: Object
                },
                components: {
                    draggable: A.a
                },
                data() {
                    return {
                        formData: {
                            player: [{
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }, {
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }, {
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }, {
                                nameSelect: !1,
                                tag: "",
                                name: "",
                                prefix: ""
                            }]
                        }
                    }
                },
                watch: {
                    WatchP1Select: function (t) {
                        this.fillPlayerData(0, t)
                    },
                    WatchP2Select: function (t) {
                        this.fillPlayerData(1, t)
                    },
                    WatchP3Select: function (t) {
                        this.fillPlayerData(2, t)
                    },
                    WatchP4Select: function (t) {
                        this.fillPlayerData(3, t)
                    },
                    WatchP1Name: function (t) {
                        this.Rep.Tournament.value.player[0].displayName = t
                    },
                    WatchP2Name: function (t) {
                        this.Rep.Tournament.value.player[1].displayName = t
                    },
                    WatchP3Name: function (t) {
                        this.Rep.Tournament.value.player[2].displayName = t
                    },
                    WatchP4Name: function (t) {
                        this.Rep.Tournament.value.player[3].displayName = t
                    }
                },
                computed: {
                    WatchP1Name() {
                        const t = this.formData.player[0];
                        let e = "";
                        return t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, e
                    },
                    WatchP2Name() {
                        const t = this.formData.player[1];
                        let e = "";
                        return t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, e
                    },
                    WatchP3Name() {
                        const t = this.formData.player[2];
                        let e = "";
                        return t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, e
                    },
                    WatchP4Name() {
                        const t = this.formData.player[3];
                        let e = "";
                        return t.prefix && (e += t.prefix, e += "｜"), t.nameSelect ? e += t.name : e += t.tag, e
                    },
                    WatchP1Select() {
                        return this.formData.player[0].tag
                    },
                    WatchP2Select() {
                        return this.formData.player[1].tag
                    },
                    WatchP3Select() {
                        return this.formData.player[2].tag
                    },
                    WatchP4Select() {
                        return this.formData.player[3].tag
                    }
                },
                methods: {
                    getTeamColor(t) {
                        return 0 === t ? this.tournament.player[0].color : this.tournament.player[0].color === this.tournament.player[1].color ? this.tournament.player[2].color : this.tournament.player[1].color
                    },
                    ShowPlayerName(t) {
                        const e = this.formData.player[t];
                        let a = "";
                        return e.prefix && (a += e.prefix, a += "｜"), e.nameSelect ? a += e.name : a += e.tag, a
                    },
                    fillPlayerData(t, e) {
                        const a = this.formData.player[t];
                        this.playerDB[e] ? (a.name = this.playerDB[e].name, a.prefix = this.playerDB[e].prefix, this.Rep.Tournament.value.player[t].twitter = this.playerDB[e].twitter, this.Rep.Tournament.value.player[t].country = this.playerDB[e].country, this.Rep.Tournament.value.player[t].displayName = this.ShowPlayerName(t)) : (a.name = "", a.prefix = "", this.Rep.Tournament.value.player[t].twitter = "", this.Rep.Tournament.value.player[t].country = "", this.Rep.Tournament.value.player[t].displayName = this.ShowPlayerName(t))
                    },
                    clearScore() {
                        this.Rep.Tournament.value.player[0].score = 0, this.Rep.Tournament.value.player[1].score = 0, this.Rep.Tournament.value.player[2].score = 0, this.Rep.Tournament.value.player[3].score = 0
                    }
                },
                created() {
                    this.COLOR = B["a"], this.FIGHTERS = k, Object.defineProperty(this.FIGHTERS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.COLOR, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.tournament.player.forEach((t, e) => {
                        "" !== t.displayName && (this.formData.player[e].nameSelect = !0, this.formData.player[e].name = t.displayName)
                    })
                }
            },
            W = E,
            G = (a("b2a3"), a("b56d")),
            J = Object(f["a"])(W, V, j, !1, null, "0d73fc7e", null),
            U = J.exports;
        y()(J, {
            VAutocomplete: v["a"],
            VBtn: d["a"],
            VCheckbox: C["a"],
            VDivider: O["a"],
            VFlex: x["a"],
            VIcon: D["a"],
            VLayout: b["a"],
            VSelect: G["a"],
            VTextField: N["a"]
        });
        var H = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("v-layout", {
                staticClass: "panel",
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    color: "primary"
                }
            }, [a("v-icon", [t._v("fas fa-gamepad")]), a("v-toolbar-title", {
                staticClass: "white--text"
            }, [t._v(t._s(t.$t("score.rule")))])], 1), a("v-layout", {
                staticClass: "pt-2 pb-2 text-xs-center",
                attrs: {
                    row: "",
                    wrap: "",
                    "justify-space-around": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs10: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    label: t.$t("score.tournament_name")
                },
                model: {
                    value: t.formData.tournament_name,
                    callback: function (e) {
                        t.$set(t.formData, "tournament_name", e)
                    },
                    expression: "formData.tournament_name"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs10: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    label: t.$t("score.tournament_location")
                },
                model: {
                    value: t.formData.tournament_location,
                    callback: function (e) {
                        t.$set(t.formData, "tournament_location", e)
                    },
                    expression: "formData.tournament_location"
                }
            })], 1), a("v-flex", {
                staticClass: "pl-2 pr-2",
                attrs: {
                    xs6: ""
                }
            }, [a("v-select", {
                attrs: {
                    items: t.OPTIONS.playerCount,
                    label: t.$t("score.tournament_progress")
                },
                model: {
                    value: t.formData.playerCount,
                    callback: function (e) {
                        t.$set(t.formData, "playerCount", e)
                    },
                    expression: "formData.playerCount"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-divider")], 1), a("v-flex", {
                attrs: {
                    xs3: ""
                }
            }, [a("v-checkbox", {
                attrs: {
                    label: t.$t("score.use_custom")
                },
                model: {
                    value: t.formData.progress_custom,
                    callback: function (e) {
                        t.$set(t.formData, "progress_custom", e)
                    },
                    expression: "formData.progress_custom"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs8: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    disabled: !t.formData.progress_custom,
                    label: t.$t("score.tournament_progress")
                },
                model: {
                    value: t.formData.tournament_progress,
                    callback: function (e) {
                        t.$set(t.formData, "tournament_progress", e)
                    },
                    expression: "formData.tournament_progress"
                }
            })], 1), a("v-flex", {
                staticClass: "pl-2 pr-2",
                attrs: {
                    xs6: ""
                }
            }, [a("v-select", {
                attrs: {
                    items: t.OPTIONS.winloselist,
                    label: t.$t("score.winlose"),
                    disabled: t.formData.progress === t.OPTIONS.FINAL || t.formData.progress_custom
                },
                model: {
                    value: t.formData.winlose,
                    callback: function (e) {
                        t.$set(t.formData, "winlose", e)
                    },
                    expression: "formData.winlose"
                }
            })], 1), a("v-flex", {
                staticClass: "pl-2 pr-2",
                attrs: {
                    xs6: ""
                }
            }, [a("v-select", {
                attrs: {
                    items: t.OPTIONS.progresslist,
                    disabled: t.formData.progress_custom,
                    label: t.$t("score.tournament_progress")
                },
                model: {
                    value: t.formData.progress,
                    callback: function (e) {
                        t.$set(t.formData, "progress", e)
                    },
                    expression: "formData.progress"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs10: "",
                    "offset-xs1": ""
                }
            }, [a("v-select", {
                attrs: {
                    items: t.OPTIONS.finallist,
                    label: t.$t("score.gf_loser"),
                    disabled: t.formData.progress !== t.OPTIONS.FINAL || t.formData.progress_custom
                },
                model: {
                    value: t.formData.final,
                    callback: function (e) {
                        t.$set(t.formData, "final", e)
                    },
                    expression: "formData.final"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-divider")], 1), a("v-flex", {
                attrs: {
                    xs10: "",
                    "offset-xs1": ""
                }
            }, [a("v-select", {
                attrs: {
                    items: t.OPTIONS.bolist,
                    label: "BEST OF __"
                },
                model: {
                    value: t.formData.bo,
                    callback: function (e) {
                        t.$set(t.formData, "bo", e)
                    },
                    expression: "formData.bo"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-btn", {
                attrs: {
                    dark: "",
                    color: "teal"
                },
                on: {
                    click: function (e) {
                        return t.updateRule()
                    }
                }
            }, [a("v-icon", {
                attrs: {
                    left: ""
                }
            }, [t._v("fas fa-sync-alt")]), t._v("\n        " + t._s(t.$t("score.update")) + "\n      ")], 1)], 1)], 1)], 1)
        },
            M = [],
            q = a("d27d"),
            K = {
                name: "RuleSetting",
                props: {
                    Rep: Object,
                    tournament: Object
                },
                data() {
                    return {
                        formData: {
                            winlose: 0,
                            final: 0,
                            playerCount: 0,
                            progress_custom: !1,
                            progress: 0,
                            bo: 3,
                            tournament_name: "",
                            tournament_progress: "",
                            tournament_location: ""
                        }
                    }
                },
                methods: {
                    updateRule() {
                        let t = "";
                        this.Rep.Tournament.value.event = this.formData.tournament_name, this.Rep.Tournament.value.location = this.formData.tournament_location, this.Rep.Tournament.value.playerCount = this.formData.playerCount, this.formData.progress_custom ? (this.Rep.Tournament.value.progress = this.formData.tournament_progress, this.Rep.Tournament.value.final = 0) : (0 !== this.formData.winlose && this.formData.progress !== this.OPTIONS.FINAL && (t += this.OPTIONS.winloselist.find(t => t.value === this.formData.winlose).text, t += " "), 0 !== this.formData.progress && (t += this.OPTIONS.progresslist.find(t => t.value === this.formData.progress).text), this.Rep.Tournament.value.progress = t, this.formData.progress === this.OPTIONS.FINAL ? this.Rep.Tournament.value.final = this.formData.final : this.Rep.Tournament.value.final = 0, this.Rep.Tournament.value.bo = this.formData.bo)
                    }
                },
                created() {
                    this.OPTIONS = q, Object.defineProperty(this.OPTIONS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.formData.tournament_name = this.tournament.event, this.formData.tournament_location = this.tournament.location, this.formData.playerCount = this.tournament.playerCount
                }
            },
            z = K,
            Q = Object(f["a"])(z, H, M, !1, null, "3c225b2c", null),
            X = Q.exports;
        y()(Q, {
            VBtn: d["a"],
            VCheckbox: C["a"],
            VDivider: O["a"],
            VFlex: x["a"],
            VIcon: D["a"],
            VLayout: b["a"],
            VSelect: G["a"],
            VTextField: N["a"],
            VToolbar: S["a"],
            VToolbarTitle: R["a"]
        });
        var Y = a("62a7"),
            Z = a("422b"),
            tt = {
                name: "App",
                components: {
                    RuleSetting: X,
                    Singles: I,
                    Doubles: U,
                    LocaleSelector: Y["a"]
                },
                data() {
                    return {
                        state: {
                            loading: !0
                        },
                        countryList: [],
                        playerDB: {},
                        playerlist: [],
                        tournament: {}
                    }
                },
                watch: {},
                computed: {},
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1
                    }
                },
                created() {
                    this.FLAGS = Z, this.Rep = {}, Object.defineProperty(this.FLAGS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Tournament = nodecg.Replicant("tournament", {
                        defaultValue: B["f"]
                    }), this.Rep.PlayerList = nodecg.Replicant("playerlist", {
                        defaultValue: B["d"]
                    }), this.Rep.PlayerDB = nodecg.Replicant("playerDB", {
                        defaultValue: B["c"]
                    }), this.Rep.PlayerDB.on("change", t => {
                        this.playerDB = JSON.parse(JSON.stringify(t))
                    }), this.Rep.Tournament.on("change", t => {
                        this.tournament = JSON.parse(JSON.stringify(t))
                    }), this.Rep.PlayerList.on("change", t => {
                        this.playerlist = t
                    }), this.waitForReplicants(), this.countryList.push({
                        text: "NULL",
                        value: null
                    }), Object.entries(this.FLAGS).forEach(([t, e]) => {
                        this.countryList.push({
                            text: `${e} (${t})`,
                            value: t
                        })
                    })
                }
            },
            et = tt,
            at = (a("0103"), a("7496")),
            rt = a("cd55"),
            nt = a("49e2"),
            lt = Object(f["a"])(et, l, o, !1, null, null, null),
            ot = lt.exports;
        y()(lt, {
            VApp: at["a"],
            VExpansionPanel: rt["a"],
            VExpansionPanelContent: nt["a"],
            VFlex: x["a"],
            VIcon: D["a"],
            VLayout: b["a"],
            VToolbar: S["a"],
            VToolbarTitle: R["a"]
        }), r["a"].config.productionTip = !1, new r["a"]({
            i18n: n["a"],
            render: t => t(ot)
        }).$mount("#app")
    }
});