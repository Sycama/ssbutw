(function (t) {
    function e(e) {
        for (var s, n, o = e[0], i = e[1], c = e[2], p = 0, g = []; p < o.length; p++) n = o[p], l[n] && g.push(l[n][0]), l[n] = 0;
        for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
        u && u(e);
        while (g.length) g.shift()();
        return r.push.apply(r, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, n = 1; n < a.length; n++) {
                var i = a[n];
                0 !== l[i] && (s = !1)
            }
            s && (r.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var s = {},
        l = {
            list: 0
        },
        r = [];

    function n(t) {
        return o.p + "js/" + ({
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

    function o(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.e = function (t) {
        var e = [],
            a = l[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var s = new Promise(function (e, s) {
                    a = l[t] = [e, s]
                });
                e.push(a[2] = s);
                var r, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.src = n(t), r = function (e) {
                    i.onerror = i.onload = null, clearTimeout(c);
                    var a = l[t];
                    if (0 !== a) {
                        if (a) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src,
                                n = new Error("Loading chunk " + t + " failed.\n(" + s + ": " + r + ")");
                            n.type = s, n.request = r, a[1](n)
                        }
                        l[t] = void 0
                    }
                };
                var c = setTimeout(function () {
                    r({
                        type: "timeout",
                        target: i
                    })
                }, 12e4);
                i.onerror = i.onload = r, document.head.appendChild(i)
            }
        return Promise.all(e)
    }, o.m = t, o.c = s, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var s in t) o.d(a, s, function (e) {
                return t[e]
            }.bind(null, s));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "../", o.oe = function (t) {
        throw console.error(t), t
    };
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var p = 0; p < i.length; p++) e(i[p]);
    var u = c;
    r.push([0, "chunk-vendors", "chunk-common"]), a()
})({
    0: function (t, e, a) {
        t.exports = a("ce0f")
    },
    "56ff": function (t, e, a) { },
    5724: function (t, e, a) {
        "use strict";
        var s = a("edef"),
            l = a.n(s);
        l.a
    },
    "5c8d": function (t, e, a) {
        "use strict";
        var s = a("685e"),
            l = a.n(s);
        l.a
    },
    6430: function (t, e, a) {
        "use strict";
        var s = a("56ff"),
            l = a.n(s);
        l.a
    },
    "685e": function (t, e, a) { },
    accb: function (t, e, a) {
        "use strict";
        var s = a("bf1d"),
            l = a.n(s);
        l.a
    },
    bf1d: function (t, e, a) { },
    ce0f: function (t, e, a) {
        "use strict";
        a.r(e);
        var s = a("2b0e"),
            l = (a("402c"), a("d3a4")),
            r = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-app", [t.state.loading ? t._e() : a("v-layout", {
                    staticClass: "sidebar",
                    class: {
                        "sidebar--active": t.ScrollLock
                    },
                    attrs: {
                        row: ""
                    }
                }, [a("v-flex", {
                    staticClass: "sidebar__content",
                    class: {
                        "sidebar__content--challonge": t.state.challonge, "sidebar__content--smashgg": t.state.smashgg
                    }
                }, [t.state.challonge ? a("Challonge", {
                    attrs: {
                        Rep: t.Rep,
                        playerDB: t.playerDB,
                        playerlist: t.playerlist
                    }
                }) : t._e(), t.state.smashgg ? a("Smashgg", {
                    attrs: {
                        Rep: t.Rep,
                        playerDB: t.playerDB,
                        playerlist: t.playerlist
                    }
                }) : t._e()], 1), a("v-flex", {
                    staticClass: "sidebar__btn",
                    class: {
                        "sidebar__btn--active": t.ScrollLock
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.state.sidebar = !1
                        }
                    }
                }, [a("div", {
                    staticClass: "sidebar__icon sidebar__icon--challonge",
                    class: {
                        "sidebar__icon--active": t.ScrollLock && t.state.challonge
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.state.sidebar = !0, t.state.challonge = !0, t.state.smashgg = !1
                        }
                    }
                }), a("div", {
                    staticClass: "sidebar__icon sidebar__icon--smashgg",
                    class: {
                        "sidebar__icon--active": t.ScrollLock && t.state.smashgg
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.state.sidebar = !0, t.state.smashgg = !0, t.state.challonge = !1
                        }
                    }
                })])], 1), t.state.loading ? t._e() : a("v-layout", {
                    staticStyle: {
                        padding: "10px"
                    },
                    attrs: {
                        "justify-space-around": "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    staticClass: "panel--fillheight panel",
                    attrs: {
                        xs11: ""
                    }
                }, [a("div", {
                    staticClass: "pa-2"
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-space-around": "",
                        "align-center": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-switch", {
                    attrs: {
                        label: t.$t("DB.editmode")
                    },
                    model: {
                        value: t.state.delete,
                        callback: function (e) {
                            t.$set(t.state, "delete", e)
                        },
                        expression: "state.delete"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "error",
                        disabled: !t.state.delete
                    },
                    on: {
                        click: function (e) {
                            t.Rep.PlayerList.value = []
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-trash-alt")]), t._v("\n              " + t._s(t.$t("import.delete_all")) + "\n            ")], 1)], 1), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "primary",
                        disabled: !t.state.delete
                    },
                    on: {
                        click: t.saveAll
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-save")]), t._v("\n              " + t._s(t.$t("import.save_all")) + "\n            ")], 1)], 1)], 1)], 1), a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "primary"
                    }
                }, [a("v-icon", [t._v("fas fa-user")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v(t._s(t.$t("import.player_list")))])], 1), a("ul", {
                    staticClass: "players__list"
                }, [a("li", {
                    staticClass: "players__list--add"
                }, [a("v-form", {
                    ref: "form",
                    attrs: {
                        "lazy-validation": ""
                    },
                    model: {
                        value: t.formData.valid,
                        callback: function (e) {
                            t.$set(t.formData, "valid", e)
                        },
                        expression: "formData.valid"
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: t.$t("players.tag"),
                        rules: t.formData.tagRules,
                        required: ""
                    },
                    model: {
                        value: t.formData.tag,
                        callback: function (e) {
                            t.$set(t.formData, "tag", e)
                        },
                        expression: "formData.tag"
                    }
                }), a("v-btn", {
                    attrs: {
                        color: "info"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.addPlayer()
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-user-plus")])], 1)], 1)], 1), t._l(t.PlayerList, function (e) {
                    return a("li", {
                        key: e.tag,
                        staticClass: "players__card"
                    }, [a("PlayerCard", {
                        attrs: {
                            player: e,
                            tag: e.tag,
                            color: e.new ? "red darken-2" : null,
                            stateDelete: t.state.delete,
                            deleteFunc: t.deletePlayer
                        }
                    }), a("div", {
                        staticClass: "players__save"
                    }, [a("v-btn", {
                        attrs: {
                            flat: "",
                            icon: "",
                            color: "white",
                            disabled: !e.new
                        },
                        on: {
                            click: function (a) {
                                return t.savePlayer(e.tag)
                            }
                        }
                    }, [e.new ? t._e() : a("v-icon", [t._v("fas fa-save")]), e.new ? a("v-icon", [t._v("far fa-save")]) : t._e()], 1)], 1)], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2)], 1), a("LocaleSelector")], 1)], 1)
            },
            n = [],
            o = (a("ac6a"), a("de29")),
            i = a("62a7"),
            c = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-layout", {
                    staticClass: "scroll",
                    attrs: {
                        row: ""
                    }
                }, [a("v-flex", {
                    staticClass: "panel--fillheight panel__left",
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
                        color: "orange darken-4"
                    }
                }, [a("v-icon", [t._v("fas fa-key")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v("\n          Challonge - " + t._s(t.$t("import.key")) + "\n        ")])], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    staticClass: "pt-2 pb-2 text-xs-center",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    staticClass: "pt-2 pb-2",
                    attrs: {
                        xs10: "",
                        "offset-xs1": ""
                    }
                }, [a("a", {
                    attrs: {
                        href: "https://challonge.com/settings/developer",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("import.developer")))]), a("div", {
                    staticStyle: {
                        color: "#D32F2F"
                    }
                }, [t._v("\n              " + t._s(t.$t("import.keywarning")) + "\n            ")])]), a("v-flex", {
                    attrs: {
                        xs8: "",
                        "offset-xs2": ""
                    }
                }, [a("v-text-field", {
                    staticClass: "input-group--focused",
                    attrs: {
                        "append-icon": t.state.showKey ? "fas fa-eye-slash" : "fas fa-eye",
                        type: t.state.showKey ? "text" : "password",
                        label: "Challonge " + t.$t("import.key")
                    },
                    on: {
                        "click:append": function (e) {
                            t.state.showKey = !t.state.showKey
                        }
                    },
                    model: {
                        value: t.Rep.Setting.value.chkey,
                        callback: function (e) {
                            t.$set(t.Rep.Setting.value, "chkey", e)
                        },
                        expression: "Rep.Setting.value.chkey"
                    }
                })], 1)], 1)], 1)], 1), a("v-layout", {
                    staticClass: "panel",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "orange darken-4"
                    }
                }, [a("v-icon", [t._v("fas fa-calendar-alt")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v("\n          " + t._s(t.$t("import.tournament_challonge_id")) + "\n        ")])], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    staticClass: "pa-2 text-xs-center",
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-space-around": ""
                    }
                }, [a("v-flex", {
                    staticClass: "pa-1",
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n            " + t._s(t.$t("import.tournament_challonge_ex")) + "\n          ")]), a("v-flex", {
                    staticClass: "pa-2",
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: t.$t("game.tournament") + " ID"
                    },
                    model: {
                        value: t.challonge.tId,
                        callback: function (e) {
                            t.$set(t.challonge, "tId", e)
                        },
                        expression: "challonge.tId"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        dark: "",
                        color: "teal",
                        disabled: !t.challonge.key
                    },
                    on: {
                        click: function (e) {
                            return t.getChallongePlayer(t.challonge.tId)
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-file-import")]), t._v("\n              " + t._s(t.$t("import.tournament_import")) + "\n            ")], 1)], 1)], 1)], 1)], 1), a("v-layout", {
                    staticClass: "panel",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-toolbar", {
                    attrs: {
                        dark: "",
                        color: "orange darken-4"
                    }
                }, [a("v-icon", [t._v("fas fa-calendar-alt")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v(t._s(t.$t("import.my_tournament")))])], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-layout", {
                    staticClass: "pt-2 pb-2 text-xs-center",
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        dark: "",
                        color: "teal",
                        disabled: !t.challonge.key
                    },
                    on: {
                        click: function (e) {
                            return t.getChallongeTournament()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-cloud-download-alt")]), t._v("\n                " + t._s(t.$t("import.my_tournament_import")) + "\n              ")], 1)], 1), t._l(t.TournamentList, function (e, s) {
                    return a("v-flex", {
                        key: "tm" + s,
                        attrs: {
                            xs12: ""
                        }
                    }, [a("v-layout", {
                        staticClass: "text-xs-center justify-center",
                        attrs: {
                            row: "",
                            wrap: ""
                        }
                    }, [a("v-flex", {
                        attrs: {
                            xs12: ""
                        }
                    }, [a("v-divider")], 1), a("v-flex", {
                        attrs: {
                            xs8: ""
                        }
                    }, [a("a", {
                        staticClass: "tmtitle",
                        attrs: {
                            href: e.url
                        }
                    }, [a("div", [t._v(t._s(e.name))])])]), a("v-flex", {
                        attrs: {
                            xs4: ""
                        }
                    }, [a("v-btn", {
                        attrs: {
                            dark: "",
                            color: "primary"
                        },
                        on: {
                            click: function (a) {
                                return t.getChallongePlayer(e.id)
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-file-import")])], 1)], 1)], 1)], 1)
                }), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [t.challonge.tMax !== t.challonge.tournamentArr.length ? a("v-btn", {
                    attrs: {
                        dark: "",
                        color: "blue-grey darken-2"
                    },
                    on: {
                        click: function (e) {
                            t.challonge.tMax = t.challonge.tMax + 5 >= t.challonge.tournamentArr.length ? t.challonge.tournamentArr.length : t.challonge.tMax + 5
                        }
                    }
                }, [t._v("\n                " + t._s(t.$t("import.more")) + "\n              ")]) : t._e()], 1)], 2)], 1)], 1)], 1), a("v-flex", {
                    staticClass: "panel--fillheight panel__right",
                    attrs: {
                        xs8: ""
                    }
                }, [a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-space-around": "",
                        "align-center": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-switch", {
                    attrs: {
                        label: t.$t("DB.editmode")
                    },
                    model: {
                        value: t.state.delete,
                        callback: function (e) {
                            t.$set(t.state, "delete", e)
                        },
                        expression: "state.delete"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "error",
                        disabled: !t.state.delete
                    },
                    on: {
                        click: function (e) {
                            t.challonge.playerArr = []
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-trash-alt")]), t._v("\n          " + t._s(t.$t("import.delete_all")) + "\n        ")], 1)], 1), a("v-flex", {
                    attrs: {
                        xs3: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "primary",
                        disabled: !t.state.delete
                    },
                    on: {
                        click: function (e) {
                            return t.addAllToPlayerList()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-save")]), t._v("\n          " + t._s(t.$t("import.import_all")) + "\n        ")], 1)], 1)], 1), a("ul", {
                    staticClass: "players__list"
                }, [t._l(t.challonge.playerArr, function (e, s) {
                    return a("li", {
                        key: "challonge-player" + s,
                        staticClass: "players__card"
                    }, [a("PlayerCard", {
                        attrs: {
                            tag: e,
                            player: t.playerDB[e] ? t.playerDB[e] : t.emptyPlayerObj
                        }
                    }), a("div", {
                        staticClass: "players__save"
                    }, [a("v-btn", {
                        attrs: {
                            flat: "",
                            icon: "",
                            color: "white",
                            disabled: -1 !== t.playerlist.indexOf(e)
                        },
                        on: {
                            click: function (a) {
                                return a.stopPropagation(), t.addPlayerList(e)
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-file-import")])], 1)], 1)], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2)], 1)], 1)
            },
            p = [],
            u = {
                name: "Challonge",
                props: {
                    Rep: Object,
                    playerDB: Object,
                    playerlist: Array
                },
                components: {
                    PlayerCard: o["a"]
                },
                data() {
                    return {
                        state: {
                            delete: !1,
                            showKey: !1
                        },
                        challonge: {
                            tId: null,
                            tMax: 0,
                            tournamentArr: [],
                            playerArr: [],
                            key: null
                        }
                    }
                },
                computed: {
                    TournamentList() {
                        return this.challonge.tournamentArr.slice(0, this.challonge.tMax)
                    }
                },
                methods: {
                    getChallongeTournament() {
                        this.challonge.tMax = 0, nodecg.sendMessage("challonge_api", "tournaments").then(t => {
                            t !== {} && (console.log(t), this.challonge.tournamentArr = [], t.forEach(t => {
                                this.challonge.tournamentArr.push({
                                    name: t.tournament.name,
                                    id: t.tournament.id,
                                    url: t.tournament.full_challonge_url
                                })
                            }), this.challonge.tMax = t.length > 5 ? 5 : t.length)
                        }).catch(t => {
                            console.error(t)
                        })
                    },
                    getChallongePlayer(t) {
                        t && nodecg.sendMessage("challonge_api", `tournaments/${t}/participants`).then(t => {
                            if (t !== {})
                                if (t.errors) [this.error_text] = t.errors;
                                else {
                                    const e = new Set;
                                    t.forEach(t => {
                                        e.add(t.participant.display_name)
                                    }), this.challonge.playerArr = [...e]
                                }
                        }).catch(t => {
                            console.error(t)
                        })
                    },
                    addPlayerList(t) {
                        this.playerlist.push(t)
                    },
                    addAllToPlayerList() {
                        this.challonge.playerArr.forEach(t => {
                            -1 === this.playerlist.indexOf(t) && this.playerlist.push(t)
                        }), this.Rep.PlayerList.value = this.playerlist
                    },
                    RepSetKey(t) {
                        this.challonge.key = t.chkey
                    }
                },
                created() {
                    this.Rep.Setting.on("change", this.RepSetKey), this.emptyPlayerObj = {
                        name: "",
                        prefix: "",
                        country: null,
                        twitter: "",
                        fighters: []
                    }
                },
                beforeDestroy() {
                    this.Rep.Setting.removeListener("change", this.RepSetKey)
                }
            },
            g = u,
            h = (a("accb"), a("2877")),
            f = a("6544"),
            d = a.n(f),
            v = a("8336"),
            y = a("ce7e"),
            m = a("0e8f"),
            _ = a("132d"),
            x = a("a722"),
            b = a("b73d"),
            w = a("2677"),
            k = a("71d9"),
            C = a("2a7f"),
            P = Object(h["a"])(g, c, p, !1, null, "b4c077ee", null),
            R = P.exports;
        d()(P, {
            VBtn: v["a"],
            VDivider: y["a"],
            VFlex: m["a"],
            VIcon: _["a"],
            VLayout: x["a"],
            VSwitch: b["a"],
            VTextField: w["a"],
            VToolbar: k["a"],
            VToolbarTitle: C["a"]
        });
        var D = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("v-layout", {
                staticClass: "scroll",
                attrs: {
                    row: ""
                }
            }, [a("v-flex", {
                staticClass: "panel--fillheight panel__left",
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
                    color: "red darken-3"
                }
            }, [a("v-icon", [t._v("fas fa-key")]), a("v-toolbar-title", {
                staticClass: "white--text"
            }, [t._v("\n          Smashgg - " + t._s(t.$t("import.key")) + "\n        ")])], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-layout", {
                staticClass: "pt-2 pb-2 text-xs-center",
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-flex", {
                staticClass: "pt-2 pb-2",
                attrs: {
                    xs10: "",
                    "offset-xs1": ""
                }
            }, [a("a", {
                attrs: {
                    href: "https://smash.gg/admin/profile/developer",
                    target: "_blank"
                }
            }, [t._v(t._s(t.$t("import.developer")))]), a("div", {
                staticStyle: {
                    color: "#D32F2F"
                }
            }, [t._v("\n              " + t._s(t.$t("import.keywarning")) + "\n            ")])]), a("v-flex", {
                attrs: {
                    xs8: "",
                    "offset-xs2": ""
                }
            }, [a("v-text-field", {
                staticClass: "input-group--focused",
                attrs: {
                    "append-icon": t.state.showKey ? "fas fa-eye-slash" : "fas fa-eye",
                    type: t.state.showKey ? "text" : "password",
                    label: "Smash.gg " + t.$t("import.key")
                },
                on: {
                    "click:append": function (e) {
                        t.state.showKey = !t.state.showKey
                    }
                },
                model: {
                    value: t.Rep.Setting.value.sggkey,
                    callback: function (e) {
                        t.$set(t.Rep.Setting.value, "sggkey", e)
                    },
                    expression: "Rep.Setting.value.sggkey"
                }
            })], 1)], 1)], 1)], 1), a("v-layout", {
                staticClass: "panel",
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    color: "red darken-3"
                }
            }, [a("v-icon", [t._v("fas fa-calendar-alt")]), a("v-toolbar-title", {
                staticClass: "white--text"
            }, [t._v("\n          " + t._s(t.$t("import.tournament_smashgg_slug")) + "\n        ")])], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-layout", {
                staticClass: "pa-2 text-xs-center",
                attrs: {
                    row: "",
                    wrap: "",
                    "justify-space-around": ""
                }
            }, [a("v-flex", {
                staticClass: "pa-1",
                attrs: {
                    xs12: ""
                }
            }, [t._v("\n            " + t._s(t.$t("import.tournament_smashgg_ex")) + "\n          ")]), a("v-flex", {
                staticClass: "pa-2",
                attrs: {
                    xs12: ""
                }
            }, [a("v-text-field", {
                attrs: {
                    rules: t.urlRules,
                    label: t.$t("game.tournament") + " URL"
                },
                model: {
                    value: t.smashgg.url,
                    callback: function (e) {
                        t.$set(t.smashgg, "url", e)
                    },
                    expression: "smashgg.url"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-btn", {
                attrs: {
                    dark: "",
                    color: "teal",
                    disabled: !t.smashgg.key
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.getSmashggPhase(t.smashgg.url)
                    }
                }
            }, [a("v-icon", {
                attrs: {
                    left: ""
                }
            }, [t._v("fas fa-file-import")]), t._v("\n              " + t._s(t.$t("import.tournament_import")) + "\n            ")], 1)], 1)], 1)], 1)], 1), a("v-layout", {
                staticClass: "panel",
                attrs: {
                    row: "",
                    wrap: ""
                }
            }, [a("v-toolbar", {
                attrs: {
                    dark: "",
                    color: "red darken-3"
                }
            }, [a("v-icon", [t._v("fas fa-calendar-alt")]), a("v-toolbar-title", {
                staticClass: "white--text"
            }, [t._v(t._s(t.$t("import.bracket_list")))])], 1), a("v-flex", {
                attrs: {
                    xs12: ""
                }
            }, [a("v-expansion-panel", {
                attrs: {
                    dark: ""
                }
            }, t._l(t.smashgg.phases, function (e, s) {
                return a("v-expansion-panel-content", {
                    key: "phase" + s
                }, [a("div", {
                    staticClass: "bracketlist__text",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [t._v("\n                " + t._s(e.name) + " (" + t._s(e.groupCount) + ")\n              ")]), t._l(e.bracket, function (e, l) {
                    return a("v-layout", {
                        key: s + "bracket" + l,
                        staticClass: "bracketlist",
                        attrs: {
                            row: "",
                            wrap: ""
                        }
                    }, [a("v-flex", {
                        staticClass: "bracketlist__text",
                        attrs: {
                            xs8: ""
                        }
                    }, [t._v("Pool " + t._s(e.displayIdentifier))]), a("v-flex", {
                        attrs: {
                            xs4: ""
                        }
                    }, [a("v-btn", {
                        attrs: {
                            dark: ""
                        },
                        on: {
                            click: function (a) {
                                return a.stopPropagation(), t.getSmashggPlayer(e.id)
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-file-import")])], 1)], 1)], 1)
                })], 2)
            }), 1)], 1)], 1)], 1), a("v-flex", {
                staticClass: "panel--fillheight panel__right",
                attrs: {
                    xs8: ""
                }
            }, [a("v-layout", {
                attrs: {
                    row: "",
                    wrap: "",
                    "justify-space-around": "",
                    "align-center": ""
                }
            }, [a("v-flex", {
                attrs: {
                    xs3: ""
                }
            }, [a("v-switch", {
                attrs: {
                    label: t.$t("DB.editmode")
                },
                model: {
                    value: t.state.delete,
                    callback: function (e) {
                        t.$set(t.state, "delete", e)
                    },
                    expression: "state.delete"
                }
            })], 1), a("v-flex", {
                attrs: {
                    xs3: ""
                }
            }, [a("v-btn", {
                attrs: {
                    color: "error",
                    disabled: !t.state.delete
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), t.smashgg.playerArr = []
                    }
                }
            }, [a("v-icon", {
                attrs: {
                    left: ""
                }
            }, [t._v("fas fa-trash-alt")]), t._v("\n          " + t._s(t.$t("import.delete_all")) + "\n        ")], 1)], 1), a("v-flex", {
                attrs: {
                    xs3: ""
                }
            }, [a("v-btn", {
                attrs: {
                    color: "primary",
                    disabled: !t.state.delete
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(), t.addAllToPlayerList()
                    }
                }
            }, [a("v-icon", {
                attrs: {
                    left: ""
                }
            }, [t._v("fas fa-save")]), t._v("\n          " + t._s(t.$t("import.import_all")) + "\n        ")], 1)], 1)], 1), a("ul", {
                staticClass: "players__list"
            }, [t._l(t.smashgg.playerArr, function (e, s) {
                return a("li", {
                    key: "smashgg-player" + s,
                    staticClass: "players__card"
                }, [a("PlayerCard", {
                    attrs: {
                        tag: e,
                        player: t.playerDB[e] ? t.playerDB[e] : t.smashgg.playerData[e]
                    }
                }), a("div", {
                    staticClass: "players__save"
                }, [a("v-btn", {
                    attrs: {
                        flat: "",
                        icon: "",
                        color: "white",
                        disabled: -1 !== t.playerlist.indexOf(e)
                    },
                    on: {
                        click: function (a) {
                            return a.stopPropagation(), t.addPlayerList(e)
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-file-import")])], 1)], 1)], 1)
            }), a("li"), a("li"), a("li"), a("li")], 2)], 1)], 1)
        },
            S = [],
            $ = {
                name: "Smashgg",
                props: {
                    Rep: Object,
                    playerDB: Object,
                    playerlist: Array
                },
                components: {
                    PlayerCard: o["a"]
                },
                data() {
                    return {
                        state: {
                            delete: !1,
                            showKey: !1
                        },
                        urlRules: [t => this.urlRegexTest(t) || this.$t("import.urlRuleError")],
                        smashgg: {
                            url: null,
                            playerArr: [],
                            playerData: {},
                            phases: {},
                            key: null
                        }
                    }
                },
                computed: {
                    TournamentList() {
                        return []
                    }
                },
                methods: {
                    urlRegexTest(t) {
                        const e = new RegExp("https?://smash.gg/tournament/([-a-zA-Z0-9]*)/events/([-a-zA-Z0-9]*)");
                        return e.test(t)
                    },
                    getSmashggPhase(t) {
                        const e = new RegExp("https?://smash.gg/tournament/([-a-zA-Z0-9]*)/events/([-a-zA-Z0-9]*)"),
                            a = e.exec(t);
                        a && 3 === a.length && (this.smashgg.phases = {}, nodecg.sendMessage("smashgg_phase", `tournament/${a[1]}/event/${a[2]}`).then(t => {
                            t !== {} && t.data.event.phases.forEach(t => {
                                this.$set(this.smashgg.phases, t.id, {
                                    name: t.name,
                                    groupCount: t.groupCount,
                                    bracket: t.phaseGroups.nodes
                                })
                            })
                        }).catch(t => {
                            console.error(t)
                        }))
                    },
                    getSmashggPlayer(t) {
                        t && nodecg.sendMessage("smashgg_players", t).then(t => {
                            if (console.log(t), t !== {})
                                if (t.errors) [this.error_text] = t.errors;
                                else {
                                    const e = new Set;
                                    t.data.phaseGroup.seeds.nodes.forEach(t => {
                                        t.players && t.players.forEach(t => {
                                            e.add(t.gamerTag), this.smashgg.playerData[t.gamerTag] = {
                                                country: null,
                                                tag: t.gamerTag,
                                                name: "",
                                                prefix: t.prefix || "",
                                                twitter: t.twitterHandle || "",
                                                fighters: []
                                            }
                                        })
                                    }), this.smashgg.playerArr = [...e]
                                }
                        }).catch(t => {
                            console.error(t)
                        })
                    },
                    addPlayerList(t) {
                        !this.playerDB[t] && this.smashgg.playerData[t] ? this.Rep.PlayerDB.value[t] = {
                            name: "",
                            prefix: this.smashgg.playerData[t].prefix,
                            country: null,
                            twitter: this.smashgg.playerData[t].twitter,
                            fighters: ["1"]
                        } : (this.Rep.PlayerDB.value[t].prefix = this.smashgg.playerData[t].prefix, this.Rep.PlayerDB.value[t].twitter = this.smashgg.playerData[t].twitter), this.playerlist.push(t), this.Rep.PlayerList.value = this.playerlist
                    },
                    addAllToPlayerList() {
                        const t = {};
                        this.smashgg.playerArr.forEach(e => {
                            -1 === this.playerlist.indexOf(e) && (!this.playerDB[e] && this.smashgg.playerData[e] ? t[e] = {
                                name: "",
                                prefix: this.smashgg.playerData[e].prefix,
                                country: null,
                                twitter: this.smashgg.playerData[e].twitter,
                                fighters: ["1"]
                            } : (this.Rep.PlayerDB.value[e].prefix = this.smashgg.playerData[e].prefix, this.Rep.PlayerDB.value[e].twitter = this.smashgg.playerData[e].twitter), this.playerlist.push(e))
                        }), this.Rep.PlayerList.value = this.playerlist, this.Rep.PlayerDB.value = {
                            ...this.playerDB,
                            ...t
                        }
                    },
                    RepSetKey(t) {
                        this.smashgg.key = t.sggkey
                    }
                },
                created() {
                    this.Rep.Setting.on("change", this.RepSetKey)
                },
                beforeDestroy() {
                    this.Rep.Setting.removeListener("change", this.RepSetKey)
                }
            },
            L = $,
            A = (a("6430"), a("cd55")),
            B = a("49e2"),
            T = Object(h["a"])(L, D, S, !1, null, "261ddc13", null),
            V = T.exports;
        d()(T, {
            VBtn: v["a"],
            VExpansionPanel: A["a"],
            VExpansionPanelContent: B["a"],
            VFlex: m["a"],
            VIcon: _["a"],
            VLayout: x["a"],
            VSwitch: b["a"],
            VTextField: w["a"],
            VToolbar: k["a"],
            VToolbarTitle: C["a"]
        });
        var j = a("e01a"),
            O = {
                name: "App",
                components: {
                    PlayerCard: o["a"],
                    LocaleSelector: i["a"],
                    Challonge: R,
                    Smashgg: V
                },
                data() {
                    return {
                        state: {
                            delete: !1,
                            showKey: !1,
                            loading: !0,
                            challonge: !1,
                            smashgg: !1,
                            sidebar: !1
                        },
                        formData: {
                            valid: !0,
                            tagRules: [t => !!t || this.$t("DB.nameRuleNull"), t => !(-1 !== this.playerlist.indexOf(t)) || this.$t("DB.nameRuleExist")],
                            tag: null
                        },
                        playerlist: [],
                        playerDB: {}
                    }
                },
                watch: {
                    ScrollLock(t) {
                        t ? document.documentElement.classList.add("scroll-lock") : document.documentElement.classList.remove("scroll-lock")
                    }
                },
                computed: {
                    ScrollLock() {
                        return this.state.sidebar
                    },
                    PlayerList() {
                        const t = [],
                            e = {
                                new: !0,
                                name: "",
                                team: "",
                                country: this.CurrentLanguage,
                                twitter: "",
                                fighters: ["1"]
                            };
                        return this.playerlist.forEach(a => {
                            this.playerDB[a] ? t.unshift({
                                tag: a,
                                ...this.playerDB[a]
                            }) : t.push({
                                tag: a,
                                ...e
                            })
                        }), t
                    },
                    CurrentLanguage() {
                        switch (this.$i18n.locale) {
                            case "zh_Hant_TW":
                                return "TW";
                            case "ja_JP":
                                return "JP";
                            default:
                                return "US"
                        }
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1
                    },
                    addPlayer() {
                        this.formData.valid = this.$refs.form.validate(), this.formData.valid && (this.playerlist.push(this.formData.tag), this.Rep.PlayerList.value = this.playerlist, this.formData.tag = "", this.$refs.form.resetValidation())
                    },
                    deletePlayer(t) {
                        const e = this.playerlist.indexOf(t); - 1 !== e && (this.playerlist.splice(e, 1), this.Rep.PlayerList.value = this.playerlist)
                    },
                    savePlayer(t) {
                        this.Rep.PlayerDB.value[t] = {
                            name: "",
                            team: "",
                            country: this.CurrentLanguage,
                            twitter: "",
                            fighters: ["1"]
                        }
                    },
                    saveAll() {
                        const t = {},
                            e = {
                                name: "",
                                team: "",
                                country: "",
                                twitter: "",
                                fighters: ["1"]
                            };
                        this.playerlist.forEach(a => {
                            this.playerDB[a] || (t[a] = {
                                ...e
                            })
                        }), this.Rep.PlayerDB.value = {
                            ...this.playerDB,
                            ...t
                        }
                    }
                },
                created() {
                    this.Rep = {}, Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.PlayerDB = nodecg.Replicant("playerDB", {
                        defaultValue: j["c"]
                    }), this.Rep.PlayerList = nodecg.Replicant("playerlist", {
                        defaultValue: j["d"]
                    }), this.Rep.PlayerDB.on("change", t => {
                        this.playerDB = JSON.parse(JSON.stringify(t))
                    }), this.Rep.PlayerList.on("change", t => {
                        this.playerlist = JSON.parse(JSON.stringify(t))
                    }), this.Rep.Setting = nodecg.Replicant("setting", {
                        defaultValue: j["e"]
                    }), console.log(this.Rep.Setting), this.waitForReplicants()
                }
            },
            E = O,
            K = (a("5c8d"), a("5724"), a("7496")),
            F = a("4bd4"),
            M = Object(h["a"])(E, r, n, !1, null, "19686d89", null),
            I = M.exports;
        d()(M, {
            VApp: K["a"],
            VBtn: v["a"],
            VFlex: m["a"],
            VForm: F["a"],
            VIcon: _["a"],
            VLayout: x["a"],
            VSwitch: b["a"],
            VTextField: w["a"],
            VToolbar: k["a"],
            VToolbarTitle: C["a"]
        }), s["a"].config.productionTip = !1, new s["a"]({
            i18n: l["a"],
            render: t => t(I)
        }).$mount("#app")
    },
    edef: function (t, e, a) { }
});