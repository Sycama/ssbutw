(function (t) {
    function e(e) {
        for (var s, i, o = e[0], c = e[1], l = e[2], u = 0, p = []; u < o.length; u++) i = o[u], n[i] && p.push(n[i][0]), n[i] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        g && g(e);
        while (p.length) p.shift()();
        return r.push.apply(r, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== n[c] && (s = !1)
            }
            s && (r.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var s = {},
        n = {
            stage: 0
        },
        r = [];

    function i(t) {
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
            a = n[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var s = new Promise(function (e, s) {
                    a = n[t] = [e, s]
                });
                e.push(a[2] = s);
                var r, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = i(t), r = function (e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var a = n[t];
                    if (0 !== a) {
                        if (a) {
                            var s = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src,
                                i = new Error("Loading chunk " + t + " failed.\n(" + s + ": " + r + ")");
                            i.type = s, i.request = r, a[1](i)
                        }
                        n[t] = void 0
                    }
                };
                var l = setTimeout(function () {
                    r({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = r, document.head.appendChild(c)
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
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var g = l;
    r.push([3, "chunk-vendors", "chunk-common"]), a()
})({
    3: function (t, e, a) {
        t.exports = a("f984")
    },
    "6ba6": function (t, e, a) {
        "use strict";
        var s = a("a3cd"),
            n = a.n(s);
        n.a
    },
    a3cd: function (t, e, a) { },
    f984: function (t, e, a) {
        "use strict";
        a.r(e);
        var s = a("2b0e"),
            n = (a("402c"), a("d3a4")),
            r = function () {
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
                }, [a("v-flex", {
                    staticClass: "panel",
                    attrs: {
                        xs12: ""
                    }
                }, [a("v-expansion-panel", [a("v-expansion-panel-content", {
                    staticStyle: {
                        "background-color": "#FAFAFA"
                    }
                }, [a("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [t._v(t._s(t.$t("keywords.config")))]), a("v-layout", {
                    staticClass: "mt-2 mb-2 pa-2 text-xs-center",
                    staticStyle: {
                        "font-size": "1.2rem"
                    },
                    attrs: {
                        row: "",
                        wrap: "",
                        "justify-space-around": ""
                    }
                }, [a("v-flex", {
                    attrs: {
                        xs9: ""
                    }
                }, [a("v-text-field", {
                    attrs: {
                        label: "EX: 1h-44h-40h-3h-39h_62h-42h-85h-19h-79h-37h",
                        required: ""
                    },
                    model: {
                        value: t.formData.stageParam,
                        callback: function (e) {
                            t.$set(t.formData, "stageParam", e)
                        },
                        expression: "formData.stageParam"
                    }
                }), a("div", [a("a", {
                    attrs: {
                        href: "https://bans.page/",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("stages.banspage")))])]), a("v-btn", {
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.setStages()
                        }
                    }
                }, [a("v-icon", {
                    attrs: {
                        left: ""
                    }
                }, [t._v("fas fa-map-marked-alt")]), t._v("\n                " + t._s(t.$t("stages.set")) + "\n              ")], 1)], 1), a("v-flex", {
                    attrs: {
                        xs4: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.formData.gridSize += 25
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-search-plus")])], 1)], 1), a("v-flex", {
                    staticStyle: {
                        "line-height": "48px",
                        "verticle-align": "middle"
                    },
                    attrs: {
                        xs4: ""
                    }
                }, [t._v("\n              Size:" + t._s(t.formData.gridSize) + "\n            ")]), a("v-flex", {
                    attrs: {
                        xs4: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        color: "error"
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.formData.gridSize -= 25
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-search-minus")])], 1)], 1)], 1)], 1)], 1), a("ul", {
                    staticClass: "stages",
                    style: t.ResizeGrid
                }, [t._l(t.stages.st, function (e, s) {
                    return a("li", {
                        key: "st" + s
                    }, [a("v-img", {
                        staticClass: "stages__block",
                        class: {
                            "stages--ban": -1 !== t.stages.banPick.ban.indexOf(e), "stages--pick": -1 !== t.stages.banPick.pick.indexOf(e)
                        },
                        attrs: {
                            src: "../pic/stages/" + parseInt(e) + ".jpg"
                        },
                        on: {
                            click: function (a) {
                                return a.stopPropagation(), t.banPick("st", e)
                            }
                        }
                    }, [a("div", {
                        staticClass: "stages__name"
                    }, [t._v("\n              " + t._s(t.STAGES[parseInt(e)]) + "\n            ")])])], 1)
                }), t._l(t.stages.cp, function (e, s) {
                    return a("li", {
                        key: "cp" + s
                    }, [t.stages.counterPick ? a("v-img", {
                        staticClass: "stages__block",
                        class: {
                            "stages--ban": -1 !== t.stages.banPick.ban.indexOf(e), "stages--pick": -1 !== t.stages.banPick.pick.indexOf(e)
                        },
                        attrs: {
                            src: "../pic/stages/" + parseInt(e) + ".jpg"
                        },
                        on: {
                            click: function (a) {
                                return a.stopPropagation(), t.banPick("cp", e)
                            }
                        }
                    }, [a("div", {
                        staticClass: "stages__name"
                    }, [t._v("\n              " + t._s(t.STAGES[parseInt(e)]) + "\n            ")])]) : t._e()], 1)
                }), a("li"), a("li"), a("li"), a("li")], 2)], 1), a("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [a("LocaleSelector")], 1)], 1), a("v-layout", {
                    staticClass: "buttons",
                    attrs: {
                        row: ""
                    }
                }, [a("v-btn", {
                    attrs: {
                        fab: "",
                        dark: "",
                        large: "",
                        color: "blue"
                    },
                    on: {
                        click: function (e) {
                            e.stopPropagation(), t.Rep.Stages.value.counterPick = !t.stages.counterPick, t.resetStage()
                        }
                    }
                }, [t.stages.counterPick ? t._e() : a("div", [t._v(t._s(t.$t("stages.starter")))]), t.stages.counterPick ? a("div", [t._v(t._s(t.$t("stages.counter")))]) : t._e()]), a("v-btn", {
                    attrs: {
                        fab: "",
                        dark: "",
                        large: "",
                        color: "red"
                    },
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.resetStage()
                        }
                    }
                }, [a("v-icon", [t._v("fas fa-redo")])], 1), a("div", {
                    staticClass: "hint"
                }, [t._v(t._s(t.BanPickHint))])], 1)], 1)
            },
            i = [],
            o = (a("ac6a"), a("62a7")),
            c = a("e01a"),
            l = {
                name: "App",
                components: {
                    LocaleSelector: o["a"]
                },
                data() {
                    return {
                        state: {
                            loading: !0,
                            banNumber: 0
                        },
                        formData: {
                            stageParam: "",
                            stageRegex: new RegExp("^([0-9]+h?)$"),
                            gridSize: 200
                        },
                        stages: {}
                    }
                },
                watch: {
                    "$i18n.locale": function (t) {
                        "ja_JP" === t ? (this.STAGES = c["i"], this.resetStage()) : (this.STAGES = c["g"], this.resetStage())
                    }
                },
                computed: {
                    ResizeGrid() {
                        return {
                            "grid-template-columns": `repeat(auto-fit, minmax(${this.formData.gridSize}px,1fr))`
                        }
                    },
                    BanPickHint() {
                        if (this.stages.counterPick) switch (this.state.banNumber) {
                            case 0:
                                return this.$t("stages.ban_2", ["1", "2", "2"]);
                            case 1:
                                return this.$t("stages.ban_2", ["1", "2", "1"]);
                            case 2:
                                return this.$t("stages.pick_1", ["2", "1"]);
                            default:
                                return ""
                        } else switch (this.state.banNumber) {
                            case 0:
                                return this.$t("stages.ban_1", ["1", "1"]);
                            case 1:
                                return this.$t("stages.ban_2", ["2", "2", "2"]);
                            case 2:
                                return this.$t("stages.ban_2", ["2", "2", "1"]);
                            case 3:
                                return this.$t("stages.ban_1", ["1", "1"]);
                            default:
                                return ""
                        }
                    }
                },
                methods: {
                    async waitForReplicants() {
                        await NodeCG.waitForReplicants(...Object.values(this.Rep)), this.state.loading = !1
                    },
                    setStages() {
                        const t = this.formData.stageParam,
                            e = t.split("_")[0].split("-"),
                            a = t.split("_")[1].split("-");
                        e.every(t => this.formData.stageRegex.test(t)) && a.every(t => this.formData.stageRegex.test(t)) && (this.Rep.Stages.value.st = e, this.Rep.Stages.value.cp = a)
                    },
                    banPick(t, e) {
                        -1 === this.stages.banPick.ban.indexOf(e) && (this.stages.counterPick || "st" !== t ? this.stages.counterPick && (this.state.banNumber += 1, this.state.banNumber <= 2 ? this.Rep.Stages.value.banPick.ban.push(e) : 3 === this.state.banNumber && this.Rep.Stages.value.banPick.pick.push(e)) : (this.state.banNumber += 1, this.state.banNumber < 4 ? this.Rep.Stages.value.banPick.ban.push(e) : 4 === this.state.banNumber && (this.stages.banPick.ban.push(e), this.Rep.Stages.value.banPick.ban.push(e), this.stages.st.forEach(t => {
                            -1 === this.stages.banPick.ban.indexOf(t) && this.Rep.Stages.value.banPick.pick.push(t)
                        }))))
                    },
                    resetStage() {
                        this.state.banNumber = 0, this.Rep.Stages.value.banPick = {
                            ban: [],
                            pick: []
                        }
                    }
                },
                created() {
                    this.STAGES = c["g"], this.Rep = {}, Object.defineProperty(this.STAGES, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), Object.defineProperty(this.Rep, "_isVue", {
                        value: !0,
                        enumerable: !1
                    }), this.Rep.Stages = nodecg.Replicant("stage", {
                        defaultValue: c["h"]
                    }), this.Rep.Stages.on("change", (t, e) => {
                        this.stages = JSON.parse(JSON.stringify(t)), this.state.banNumber = this.stages.banPick.ban.length + this.stages.banPick.pick.length, e || this.resetStage()
                    }), this.waitForReplicants()
                }
            },
            u = l,
            g = (a("6ba6"), a("2877")),
            p = a("6544"),
            f = a.n(p),
            h = a("7496"),
            b = a("8336"),
            d = a("cd55"),
            _ = a("49e2"),
            v = a("0e8f"),
            m = a("132d"),
            k = a("adda"),
            P = a("a722"),
            S = a("2677"),
            x = Object(g["a"])(u, r, i, !1, null, "768ed42f", null),
            y = x.exports;
        f()(x, {
            VApp: h["a"],
            VBtn: b["a"],
            VExpansionPanel: d["a"],
            VExpansionPanelContent: _["a"],
            VFlex: v["a"],
            VIcon: m["a"],
            VImg: k["a"],
            VLayout: P["a"],
            VTextField: S["a"]
        }), s["a"].config.productionTip = !1, new s["a"]({
            i18n: n["a"],
            render: t => t(y)
        }).$mount("#app")
    }
});