! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["panguUtils"] = n() : (t["pangu"] = t["pangu"] || {}, t["pangu"]["panguUtils"] = n())
}(this, function() {
    return function(t) {
        function n(r) {
            if(o[r]) return o[r].exports;
            var i = o[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        var o = {};
        return n.m = t, n.c = o, n.i = function(t) {
            return t
        }, n.d = function(t, o, r) {
            n.o(t, o) || Object.defineProperty(t, o, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.n = function(t) {
            var o = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return n.d(o, "a", o), o
        }, n.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        },n(n.s = 4)
    }([function(t, n, o) {
        "use strict";

        function r(t) {
            return t.toLowerCase().replace(/(\-[a-z])/g, function(t) {
                return t.toUpperCase().replace("-", "")
            })
        }
        n.__esModule = !0, n.camelCase = r;
        n.supportCss = function() {
            var t = ["-webkit-", "-o-", "-moz-", "-ms-", ""],
                n = document.createElement("p");
            return function(o) {
                for(var i, a = 0, c = t.length; a < c; a++)
                    if((i = r("" + t[a] + o)) in n.style) return i;
                return !1
            }
        }(), n.raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, n.cancelRaf = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(t) {
            window.clearTimeout(t)
        }
    }, function(t, n, o) {
        "use strict";
        n.__esModule = !0;
        var r = {
            get: function(t) {
                var n = new RegExp("(?:^|;{1}|\\s{1})" + encodeURIComponent(t) + "=([^;]*)"),
                    o = document.cookie.match(n);
                return o ? decodeURIComponent(o[1]) : null
            },
            set: function(t, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : location.host,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/",
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
                    c = new Date(+new Date + 36e5 * a).toUTCString();
                return document.cookie = t + "=" + n + "; expires=" + c + "; path=" + i + "; domain=" + o + ";", r
            },
            remove: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.host,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/";
                return r.set(t, "", n, o, -1)
            }
        };
        n["default"] = r
    }, function(t, n, o) {
        "use strict";

        function r(t, n) {
            if(!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        n.__esModule = !0;
        n.BaseEvent = function() {
            function t() {
                r(this, t), this._handlers = []
            }
            return t.prototype.on = function(t, n) {
                return this._handlers.push({
                    eventName: t,
                    handler: n
                }), this
            }, t.prototype.off = function(t) {
                for(var n = t.split("."), o = n.length > 1, r = 0; r < this._handlers.length; r++)(o ? this._handlers[r].eventName === t : this._handlers[r].eventName === n[0]) && (this._handlers.splice(r, 1), r--);
                return this
            }, t.prototype.trigger = function(t) {
                for(var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                for(var i = 0; i < this._handlers.length; i++) {
                    var a;
                    if(this._handlers[i].eventName.split(".")[0] === t && !1 === (a = this._handlers[i]).handler.apply(a, o)) return this
                }
                return this
            }, t
        }()
    }, function(t, n, o) {
        "use strict";
        n.__esModule = !0;
        var r = o(0),
            i = document.createElement("canvas"),
            a = {
                transition: !!(0, r.supportCss)("transition"),
                animation: !!(0, r.supportCss)("animation"),
                transform: !!(0, r.supportCss)("transform"),
                video: function() {
                    return !!document.createElement("video").play
                }(),
                audio: function() {
                    return !!document.createElement("audio").play
                }(),
                canvas: !!i.getContext,
                webgl: function() {
                    try {
                        return !!i.getContext("webgl")
                    } catch(e) {
                        return !1
                    }
                }(),
                svg: function() {
                    return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
                }()
            };
        n["default"] = a
    }, function(t, n, o) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t) {
            return Object.prototype.toString.call(t)
        }
        n.__esModule = !0;
        var a = o(3),
            c = r(a),
            u = o(0),
            s = o(2),
            l = o(1),
            d = r(l),
            f = document.createElement("a"),
            p = {},
            m = {
                browser: function() {
                    var t = navigator.userAgent.toLowerCase(),
                        n = /(webkit)[ \/]([\w.]+)/,
                        o = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                        r = /(msie) ([\w.]+)/,
                        i = /(mozilla)(?:.*? rv:([\w.]+))?/,
                        a = n.exec(t) || o.exec(t) || r.exec(t) || t.indexOf("compatible") && i.exec(t) || [],
                        c = /iPhone|iPad|iPod|Android/i.test(t);
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0",
                        msie: "msie" == a[1],
                        weixin: !!/micromessenger/.exec(t),
                        yixin: !!/yixin/.exec(t),
                        ios: !!/iphone/.exec(t) || !!/ipad/.exec(t) || !!/ipod/.exec(t),
                        android: !!/android/.exec(t),
                        mobile: c,
                        pc: !c,
                        weibo: !!/weibo/i.exec(t)
                    }
                }(),
                support: c["default"],
                isNumber: function(t) {
                    return "[object Number]" == i(t)
                },
                isBoolean: function(t) {
                    return "[object Boolean]" == i(t)
                },
                isString: function(t) {
                    return "[object String]" == i(t)
                },
                isObject: function(t) {
                    return "[object Object]" == i(t)
                },
                isArray: function(t) {
                    return "[object Array]" == i(t)
                },
                isFunction: function(t) {
                    return "[object Function]" == i(t)
                },
                getAbsoluteUrl: function(t) {
                    return f.href = t, f.href
                },
                loadScript: function(t, n) {
                    try {
                        return new Promise(function(o, r) {
                            var i = document.createElement("script");
                            i.readyState ? i.onreadystatechange = function() {
                                "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, o())
                            } : i.onload = function() {
                                o()
                            }, m.isString(n) && (i.charset = opt.charset), i.type = "text/javascript", i.src = t, document.getElementsByTagName("head")[0].appendChild(i)
                        })
                    } catch(e) {
                        console.error(e), console.warn("You may need promise-polyfill!")
                    }
                },
                loadStyle: function(t) {
                    try {
                        return new Promise(function(n, o) {
                            var r = document.createElement("link");
                            r.onload = function() {
                                n()
                            }, r.rel = "stylesheet", r.type = "text/css", r.href = t, document.getElementsByTagName("head")[0].appendChild(r)
                        })
                    } catch(e) {
                        console.error(e), console.warn("You may need promise-polyfill!")
                    }
                },
                getQueryData: function() {
                    var t = Symbol["for"]("getQueryData");
                    return p[t] || (p[t] = location.search.substring(1).split("&").reduce(function(t, n) {
                        var o = n.indexOf("=");
                        if(o > -1) {
                            var r = n.substring(0, o),
                                i = n.substring(o + 1);
                            t[r] = unescape(decodeURIComponent(i))
                        }
                        return t
                    }, {})), p[t]
                },
                supportCss: u.supportCss,
                BaseEvent: s.BaseEvent,
                cookie: d["default"],
                raf: u.raf,
                cancelRaf: u.cancelRaf
            };
        n["default"] = m
    }])
});// JavaScript Document