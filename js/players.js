(function (t) {
    function e(e) {
        for (var r, l, i = e[0], o = e[1], c = e[2], u = 0, p = []; u < i.length; u++) l = i[u], s[l] && p.push(s[l][0]), s[l] = 0;
        for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
        f && f(e);
        while (p.length) p.shift()();
        return n.push.apply(n, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], r = !0, l = 1; l < a.length; l++) {
                var o = a[l];
                0 !== s[o] && (r = !1)
            }
            r && (n.splice(e--, 1), t = i(i.s = a[0]))
        }
        return t
    }
    var r = {},
        s = {
            players: 0
        },
        n = [];

    function l(t) {
        return i.p + "js/" + ({
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

    function i(e) {
        if (r[e]) return r[e].exports;
        var a = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.e = function (t) {
        var e = [],
            a = s[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var r = new Promise(function (e, r) {
                    a = s[t] = [e, r]
                });
                e.push(a[2] = r);
                var n, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, i.nc && o.setAttribute("nonce", i.nc), o.src = l(t), n = function (e) {
                    o.onerror = o.onload = null, clearTimeout(c);
                    var a = s[t];
                    if (0 !== a) {
                        if (a) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                n = e && e.target && e.target.src,
                                l = new Error("Loading chunk " + t + " failed.\n(" + r + ": " + n + ")");
                            l.type = r, l.request = n, a[1](l)
                        }
                        s[t] = void 0
                    }
                };
                var c = setTimeout(function () {
                    n({
                        type: "timeout",
                        target: o
                    })
                }, 12e4);
                o.onerror = o.onload = n, document.head.appendChild(o)
            }
        return Promise.all(e)
    }, i.m = t, i.c = r, i.d = function (t, e, a) {
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
            for (var r in t) i.d(a, r, function (e) {
                return t[e]
            }.bind(null, r));
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
    }, i.p = "../", i.oe = function (t) {
        throw console.error(t), t
    };
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var u = 0; u < o.length; u++) e(o[u]);
    var f = c;
    n.push([1, "chunk-vendors", "chunk-common"]), a()
})({
    "0192": function (t, e, a) {
        "use strict";
        var r = a("86ca"),
            s = a.n(r);
        s.a
    },
    1: function (t, e, a) {
        t.exports = a("4d0e")
    },
    "4d0e": function (t, e, a) {
        "use strict";
        a.r(e);
        var r = a("2b0e"),
            s = (a("402c"), a("d3a4")),
            n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-app", [t.state.loading ? t._e() : a("v-layout", {
                    staticStyle: {
                        padding: "10px"
                    },
                    attrs: {
                        column: ""
                    }
                }, [a("v-dialog", {
                    attrs: {
                        persistent: "",
                        "max-width": "800"
                    },
                    model: {
                        value: t.state.edit,
                        callback: function (e) {
                            t.$set(t.state, "edit", e)
                        },
                        expression: "state.edit"
                    }
                }, [a("v-card", [a("v-card-title", {
                    staticClass: "headline"
                }, [t._v("\n          " + t._s(t.$t("DB.new")) + "\n        ")]), a("v-form", {
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
                }, [a("v-card-text", [a("v-text-field", {
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
                }), a("v-text-field", {
                    attrs: {
                        label: t.$t("players.name")
                    },
                    model: {
                        value: t.formData.name,
                        callback: function (e) {
                            t.$set(t.formData, "name", e)
                        },
                        expression: "formData.name"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: t.$t("players.prefix")
                    },
                    model: {
                        value: t.formData.prefix,
                        callback: function (e) {
                            t.$set(t.formData, "prefix", e)
                        },
                        expression: "formData.prefix"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: t.$t("players.twitter")
                    },
                    model: {
                        value: t.formData.twitter,
                        callback: function (e) {
                            t.$set(t.formData, "twitter", e)
                        },
                        expression: "formData.twitter"
                    }
                }), a("v-autocomplete", {
                    attrs: {
                        items: t.formData.countryList,
                        label: t.$t("players.country"),
                        "item-text": "text",
                        "item-value": "value"
                    },
                    model: {
                        value: t.formData.country,
                        callback: function (e) {
                            t.$set(t.formData, "country", e)
                        },
                        expression: "formData.country"
                    }
                }), a("v-layout", {
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-space-around": "",
                        "align-center": ""
                    }
                }, [t._l(t.formData.fighters, function (e, r) {
                    return a("v-flex", {
                        key: "chara" + r,
                        attrs: {
                            xs6: ""
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
                            xs9: ""
                        }
                    }, [a("v-autocomplete", {
                        attrs: {
                            items: t.CharaList,
                            label: r ? t.$t("game.use") + (r + 1) : t.$t("game.use") + t.$t("game.main"),
                            "item-text": "text",
                            "item-value": "value"
                        },
                        model: {
                            value: t.formData.fighters[r],
                            callback: function (e) {
                                t.$set(t.formData.fighters, r, e)
                            },
                            expression: "formData.fighters[index]"
                        }
                    })], 1), a("v-flex", {
                        attrs: {
                            xs2: ""
                        }
                    }, [t.formData.fighters.length > 1 ? a("v-btn", {
                        attrs: {
                            flat: "",
                            icon: "",
                            color: "red lighten-2"
                        },
                        on: {
                            click: function (e) {
                                return e.stopPropagation(), t.formData.fighters.splice(r, 1)
                            }
                        }
                    }, [a("v-icon", [t._v("fas fa-user-slash")])], 1) : t._e()], 1)], 1)], 1)
                }), a("v-flex", {
                    attrs: {
                        xs6: ""
                    }
                }), a("v-flex", {
                    staticClass: "text-xs-center",
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "info"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.formData.fighters.push("1")
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-user-plus")]), t._v("\n                  " + t._s(t.$t("DB.addchara")) + "\n                ")], 1)], 1)], 2)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        flat: ""
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.state.edit = !1
                        }
                    }
                }, [t._v("\n              " + t._s(t.$t("keywords.discard")) + "\n            ")]), a("v-btn", {
                    attrs: {
                        color: "green darken-1",
                        flat: ""
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.updatePlayer(t.formData.tag, t.formData)
                        }
                    }
                }, [t._v("\n              " + t._s(t.$t("keywords.save")) + "\n            ")])], 1)], 1)], 1)], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
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
                }, [a("v-icon", [t._v("fas fa-edit")]), a("v-toolbar-title", {
                    staticClass: "white--text"
                }, [t._v(t._s(t.$t("DB.edit")))])], 1), a("v-layout", {
                    staticClass: "pa-2 pt-5 text-xs-center",
                    staticStyle: {
                        "font-size": "1.2rem"
                    },
                    attrs: {
                        "justify-space-around": "",
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        "prepend-icon": "fas fa-search",
                        label: t.$t("DB.search"),
                        placeholder: "EX: Zackray",
                        outline: "",
                        "clear-icon": "fas fa-times-circle",
                        clearable: ""
                    },
                    model: {
                        value: t.state.search,
                        callback: function (e) {
                            t.$set(t.state, "search", e)
                        },
                        expression: "state.search"
                    }
                })], 1), a("v-flex", {
                    attrs: {
                        xs8: ""
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
                })], 1), a("v-expansion-panel", [a("v-expansion-panel-content", {
                    staticStyle: {
                        "background-color": "#FAFAFA"
                    }
                }, [a("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [t._v(t._s(t.$t("DB.importexport")))]), a("v-layout", {
                    staticClass: "mt-2 mb-2 pa-2 text-xs-center",
                    staticStyle: {
                        "font-size": "1.2rem"
                    },
                    attrs: {
                        row: "",
                        wrap: ""
                    }
                }, [a("v-flex", {
                    class: ["drag-drop-area", t.state.dragging ? "drag-drop-area--enter" : ""],
                    attrs: {
                        xs12: ""
                    },
                    on: {
                        drop: function (e) {
                            return e.preventDefault(), t.dropJsonFile(e)
                        },
                        dragover: function (t) {
                            t.preventDefault()
                        },
                        dragenter: function (e) {
                            e.preventDefault(), t.state.dragging = !0
                        },
                        dragend: function (e) {
                            e.preventDefault(), t.state.dragging = !1
                        },
                        dragleave: function (e) {
                            e.preventDefault(), t.state.dragging = !1
                        }
                    }
                }, [a("v-flex", {
                    staticClass: "drag-drop-area__text",
                    attrs: {
                        xs12: ""
                    }
                }, [t._v("\n                    " + t._s(t.DragDropMsg) + "\n                  ")]), a("input", {
                    attrs: {
                        type: "file",
                        id: "uploadInput",
                        accept: "application/json"
                    },
                    on: {
                        change: function (e) {
                            return t.uploadJsonFile(e.target.files[0])
                        }
                    }
                }), a("label", {
                    staticClass: "v-btn theme--light info",
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        for: "uploadInput"
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: "",
                        color: "white"
                    }
                }, [t._v("fas fa-file-import")]), t._v("\n                    " + t._s(t.$t("DB.importJSON")) + "\n                  ")], 1)], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "info"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.downloadJsonFile()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-file-download")]), t._v("\n                    " + t._s(t.$t("DB.exportJSON")) + "\n                  ")], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("ul", {
                    staticClass: "players__list"
                }, [a("li", {
                    staticClass: "players__list--add",
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.beforeEditPlayer(null)
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        "x-large": ""
                    }
                }, [t._v("fas fa-user-plus")])], 1), t._l(t.SearchFilter, function (e, r) {
                    return a("li", {
                        key: r
                    }, [a("PlayerCard", {
                        attrs: {
                            player: e,
                            tag: r,
                            stateDelete: t.state.delete,
                            editFunc: t.beforeEditPlayer,
                            deleteFunc: t.deletePlayer,
                            search: t.state.search
                        }
                    })], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("LocaleSelector")], 1)], 1)], 1)
            },
            l = [],
            i = (a("ac6a"), a("de29")),
            o = a("62a7"),
            c = a("a705"),
            u = a("422b"),
            f = a("e01a"),
            p = a("21a6"),
            d = {
                name: "App",
                components: {
                    PlayerCard: i["a"],
                    LocaleSelector: o["a"]
                },
                data() {
                    return {
                        state: {
                            loading: !0,
                            selectedItem: null,
                            edit: !1,
                            delete: !1,
                            dragging: !1,
                            search: "",
                            dragDropState: f["m"]
                        },
                        formData: {
                            valid: !0,
                            tagRules: [t => !!t || this.$t("DB.nameRuleNull"), t => !(t !== this.state.selectedItem && this.Rep.PlayerDB.value[this.formData.tag]) || this.$t("DB.nameRuleExist")],
                            tag: "",
                            name: "",
                            prefix: "",
                            country: "",
                            twitter: "",
                            fighters: [],
                            countryList: []
                        },
                        playerDB: {}
                    }
                },
                computed: {
                    SearchFilter() {
                        if (!this.state.search) return this.playerDB;
                        const t = Object.keys(this.playerDB).filter(t => this.playerDB[t].name.toLowerCase().includes(this.state.search.toLowerCase()) || t.toLowerCase().includes(this.state.search.toLowerCase())).reduce((t, e) => ({
                            ...t,
                            [e]: this.playerDB[e]
                        }), {});
                        return t
                    },
                    CharaList() {
                        const t = [];
                        return Object.entries(this.FIGHTERS).forEach(([e]) => {
                            "zh_Hant_TW" === this.$i18n.locale || "ja_JP" === this.$i18n.locale ? t.push({
                                text: `${this.$t(`fighters.${e}.name`)} (${this.$i18n.messages.en_US.fighters[e].name})`,
                                value: e
                            }) : t.push({
                                text: `${this.$t(`fighters.${e}.name`)}`,
                                value: e
                            })
                        }), t
                    },
                    DragDropMsg() {
                        let t;
                        switch (this.state.dragDropState) {
                            case f["l"]:
                                t = this.$t("DB.successMessage");
                                break;
                            case f["j"]:
                                t = this.$t("DB.errorMessage");
                                break;
                            case f["k"]:
                                t = `${this.$t("keywords.import")}...`;
                                break;
                            case f["m"]:
                            default:
                                t = this.$t("DB.dropMessage");
                                break
                        }
                        return t
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
                    beforeEditPlayer(t) {
                        this.state.selectedItem = t, this.formData.tag = t, t ? (this.formData.name = this.playerDB[t].name, this.formData.prefix = this.playerDB[t].prefix, this.formData.country = this.playerDB[t].country, this.formData.twitter = this.playerDB[t].twitter, this.formData.fighters = [...this.playerDB[t].fighters]) : (this.formData.name = "", this.formData.prefix = "", this.formData.twitter = "", this.formData.fighters = ["1"], this.formData.country = this.CurrentLanguage), this.state.edit = !0
                    },
                    updatePlayer(t, e) {
                        this.state.edit && !this.formData.valid || (this.state.edit && this.state.selectedItem !== t && this.deletePlayer(this.state.selectedItem), this.Rep.PlayerDB.value[t] ? (this.Rep.PlayerDB.value[t].name = e.name || "", this.Rep.PlayerDB.value[t].prefix = e.prefix || "", this.Rep.PlayerDB.value[t].country = e.country, this.Rep.PlayerDB.value[t].twitter = e.twitter || "", this.Rep.PlayerDB.value[t].fighters = e.fighters || ["1"]) : this.Rep.PlayerDB.value[t] = {
                            name: e.name || "",
                            prefix: e.prefix || "",
                            country: e.country,
                            twitter: e.twitter || "",
                            fighters: e.fighters || ["1"]
                        }, this.state.edit = !1)
                    },
                    deletePlayer(t) {
                        try {
                            delete this.Rep.PlayerDB.value[t]
                        } catch (e) { }
                    },
                    importJsonData(t) {
                        Object.entries(t).forEach(([t, e]) => {
                            try {
                                this.updatePlayer(t, e)
                            } catch (a) {
                                console.error(a)
                            }
                        })
                    },
                    downloadJsonFile() {
                        const t = JSON.stringify(this.playerDB, null, 2),
                            e = new Blob([t], {
                                type: "application/json"
                            });
                        Object(p["saveAs"])(e, "playerDB.json")
                    },
                    uploadJsonFile(t) {
                        const e = new FileReader;
                        e.onload = this.readJson, e.readAsText(t)
                    },
                    readJson(t) {
                        let e;
                        try {
                            e = JSON.parse(t.target.result), this.state.dragDropState = f["l"]
                        } catch (a) {
                            return console.log(a), void (this.state.dragDropState = f["j"])
                        }
                        this.importJsonData(e)
                    },
                    dropJsonFile(t) {
                        this.state.dragging = !1, t.dataTransfer.files.length <= 0 || (this.state.dragDropState = f["k"], this.uploadJsonFile(t.dataTransfer.files[0]))
                    }
                },
                created() {
                    this.FIGHTERS = c, this.FLAGS = u, this.Rep = {}, Object.defineProperty(this.FIGHTERS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.FLAGS, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.PlayerDB = nodecg.Replicant("playerDB", {
                        defaultValue: f["c"]
                    }), this.Rep.PlayerDB.on("change", t => {
                        this.playerDB = JSON.parse(JSON.stringify(t))
                    }), this.waitForReplicants(), this.formData.countryList.push({
                        text: "NULL",
                        value: null
                    }), Object.entries(this.FLAGS).forEach(([t, e]) => {
                        this.formData.countryList.push({
                            text: `${e} (${t})`,
                            value: t
                        })
                    })
                }
            },
            h = d,
            g = (a("0192"), a("2877")),
            m = a("6544"),
            v = a.n(m),
            y = a("7496"),
            D = a("c6a6"),
            x = a("8336"),
            _ = a("b0af"),
            b = a("99d9"),
            w = a("12b2"),
            $ = a("169a"),
            P = a("cd55"),
            B = a("49e2"),
            k = a("0e8f"),
            S = a("4bd4"),
            R = a("132d"),
            j = a("a722"),
            C = a("9910"),
            F = a("b73d"),
            L = a("2677"),
            J = a("71d9"),
            O = a("2a7f"),
            T = Object(g["a"])(h, n, l, !1, null, "2d57d783", null),
            V = T.exports;
        v()(T, {
            VApp: y["a"],
            VAutocomplete: D["a"],
            VBtn: x["a"],
            VCard: _["a"],
            VCardActions: b["a"],
            VCardText: b["b"],
            VCardTitle: w["a"],
            VDialog: $["a"],
            VExpansionPanel: P["a"],
            VExpansionPanelContent: B["a"],
            VFlex: k["a"],
            VForm: S["a"],
            VIcon: R["a"],
            VLayout: j["a"],
            VSpacer: C["a"],
            VSwitch: F["a"],
            VTextField: L["a"],
            VToolbar: J["a"],
            VToolbarTitle: O["a"]
        }), r["a"].config.productionTip = !1, new r["a"]({
            i18n: s["a"],
            render: t => t(V)
        }).$mount("#app")
    },
    "86ca": function (t, e, a) { }
});