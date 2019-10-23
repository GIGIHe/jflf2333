! function(t) {
    function n(o) {
        if(i[o]) return i[o].exports;
        var a = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    var i = {};
    n.m = t, n.c = i, n.i = function(t) {
        return t
    }, n.d = function(t, i, o) {
        n.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(i, "a", i), i
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },n(n.s = 5)
}([function(t, n) {
    t.exports = pangu.panguUtils
}, function(t, n, i) {
    "use strict";

    function o(t, n, i) {
        this.init(t, n, i)
    }
    var a = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(a);
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }, window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(t) {
        window.clearTimeout(t)
    };
    var r = $(".js-bubble-img")[0];
    o.prototype = {
        init: function(t, n, i) {
            this.alive = !0, this.radius = i || 10, this.wander = .15, this.theta = random(TWO_PI), this.drag = .1, this.x = t || 0, this.y = n || 0, this.vx = 0, this.vy = 0
        },
        move: function() {
            this.x += this.vx, this.y += this.vy, this.vx *= this.drag, this.vy *= this.drag, this.theta += random(-.5, .5) * this.wander, this.vx += .1 * sin(this.theta), this.vy += .1 * cos(this.theta), this.radius *= .96, this.alive = this.radius > .5
        },
        draw: function(t) {
            var n = 2 * this.radius;
            t.drawImage(r, this.x, this.y, n, n)
        }
    }, s["default"].support.canvas && !s["default"].browser.msie ? s["default"].loadScript("js/sketch.min.js").then(function(t) {
        var n = null,
            i = 0,
            a = 3,
            s = 0,
            r = [],
            c = [],
            u = Sketch.create({
                container: $(".js-bubble")[0]
            });
        u.setup = function() {
            var t, n, i;
            for(t = 0; t < 30; t++) n = .5 * u.width + random(-100, 100), i = .5 * u.height + random(-100, 100), u.spawn(n, i)
        }, u.spawn = function(t, s) {
            r.length >= 100 && c.push(r.shift()), n = c.length ? c.pop() : new o, n.init(t, s, random(5, 30)), n.wander = random(.5, 2), n.drag = random(.9, .99), i = random(TWO_PI), a = random(2, 8), n.vx = sin(i) * a, n.vy = -a, r.push(n)
        }, u.update = function() {
            var t, n;
            for(t = r.length - 1; t >= 0; t--) n = r[t], n.alive ? n.move() : c.push(r.splice(t, 1)[0])
        }, u.draw = function() {
            u.globalCompositeOperation = "lighter";
            for(var t = r.length - 1; t >= 0; t--) r[t].draw(u)
        }, $(document.body).on("mousemove", function(e) {
            cancelAnimationFrame(s), s = requestAnimationFrame(function() {
                u.spawn(e.clientX, e.clientY)
            })
        })
    }): $(".js-bubble").remove()
},function(t, n, i) {
    "use strict";
    function o(t, n) {
        if(!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    var a = i(0),
        s = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(a),
        r = function() {
            function t(n) {
                o(this, t), this.renderer = PIXI.autoDetectRenderer(1920, n.height(), {
                    transparent: !0
                }), this.stage = new PIXI.Stage, this.container = new PIXI.Container, this.stage.addChild(this.container);
                var a = PIXI.Sprite.fromImage(i(8)),
                    s = new PIXI.filters.DisplacementFilter(a);
                a.scale.y = 3, a.scale.x = 3, a.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, this.container.filters = [s], this.stage.addChild(a), this.displacementSprite = a, n.prepend(this.renderer.view), this.initStageBg(n), this.render()
            }
            return t.prototype.render = function() {
                var t = this,
                    n = function i() {
                        t.displacementSprite.x += 1, t.displacementSprite.y += 1, t.renderer.render(t.stage), requestAnimationFrame(i)
                    };
                requestAnimationFrame(n)
            }, t.prototype.initStageBg = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.container,
                    i = t.css("background-image").match(/url\("?(\S+?)"?\)/);
                if(i) {
                    var o = PIXI.Sprite.fromImage(i[1]);
                    n.addChild(o), o.width = 1920, o.height = t.outerHeight()
                }
            }, t
        }();
}, function(t, n, i) {}, function(t, n) {}, function(t, n, i) {
    "use strict";
    i(4), i(2), i(1), i(3);
}]);