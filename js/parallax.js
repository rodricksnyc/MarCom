! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }
}


(function() {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(r, !0);
                    if (s) return s(r, !0);
                    var h = new Error("Cannot find module '" + r + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function(t) {
                    var i = e[r][1][t];
                    return o(i || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function(t, e, i) {
            "use strict";

            function n(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                            return e[t]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
                    i = Object(arguments[h]);
                    for (var u in i) s.call(i, u) && (l[u] = i[u]);
                    if (o) {
                        a = o(i);
                        for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]])
                    }
                }
                return l
            }
        }, {}],
        2: [function(t, e, i) {
            (function(t) {
                (function() {
                    var i, n, o, s, r, a;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now()
                    } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function() {
                        return (i() - r) / 1e6
                    }, n = t.hrtime, s = (i = function() {
                        var t;
                        return 1e9 * (t = n())[0] + t[1]
                    })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function() {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            }).call(this, t("_process"))
        }, {
            _process: 3
        }],
        3: [function(t, e, i) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (c === setTimeout) return setTimeout(t, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
                try {
                    return c(t, 0)
                } catch (e) {
                    try {
                        return c.call(null, t, 0)
                    } catch (e) {
                        return c.call(this, t, 0)
                    }
                }
            }

            function r(t) {
                if (d === clearTimeout) return clearTimeout(t);
                if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                try {
                    return d(t)
                } catch (e) {
                    try {
                        return d.call(null, t)
                    } catch (e) {
                        return d.call(this, t)
                    }
                }
            }

            function a() {
                v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l())
            }

            function l() {
                if (!v) {
                    var t = s(a);
                    v = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) p && p[y].run();
                        y = -1, e = f.length
                    }
                    p = null, v = !1, r(t)
                }
            }

            function h(t, e) {
                this.fun = t, this.array = e
            }

            function u() {}
            var c, d, m = e.exports = {};
            ! function() {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    c = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                    d = o
                }
            }();
            var p, f = [],
                v = !1,
                y = -1;
            m.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                f.push(new h(t, e)), 1 !== f.length || v || s(l)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function(t) {
                return []
            }, m.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, m.cwd = function() {
                return "/"
            }, m.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, m.umask = function() {
                return 0
            }
        }, {}],
        4: [function(t, e, i) {
            (function(i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                if (!a || !l) {
                    var u = 0,
                        c = 0,
                        d = [];
                    a = function(t) {
                        if (0 === d.length) {
                            var e = n(),
                                i = Math.max(0, 1e3 / 60 - (e - u));
                            u = i + e, setTimeout(function() {
                                var t = d.slice(0);
                                d.length = 0;
                                for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try {
                                        t[e].callback(u)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                            }, Math.round(i))
                        }
                        return d.push({
                            handle: ++c,
                            callback: t,
                            cancelled: !1
                        }), c
                    }, l = function(t) {
                        for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
                    }
                }
                e.exports = function(t) {
                    return a.call(o, t)
                }, e.exports.cancel = function() {
                    l.apply(o, arguments)
                }, e.exports.polyfill = function() {
                    o.requestAnimationFrame = a, o.cancelAnimationFrame = l
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "performance-now": 2
        }],
        5: [function(t, e, i) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }(),
                s = t("raf"),
                r = t("object-assign"),
                a = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function(t, e, i) {
                        return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
                    },
                    data: function(t, e) {
                        return a.deserialize(t.getAttribute("data-" + e))
                    },
                    deserialize: function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                    },
                    camelCase: function(t) {
                        return t.replace(/-+(.)?/g, function(t, e) {
                            return e ? e.toUpperCase() : ""
                        })
                    },
                    accelerate: function(t) {
                        a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden")
                    },
                    transformSupport: function(t) {
                        for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
                            if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
                                i = !0;
                                break
                            }
                        switch (t) {
                            case "2D":
                                o = i;
                                break;
                            case "3D":
                                if (i) {
                                    var u = document.body || document.createElement("body"),
                                        c = document.documentElement,
                                        d = c.style.overflow,
                                        m = !1;
                                    document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                }
                        }
                        return o
                    },
                    css: function(t, e, i) {
                        var n = a.propertyCache[e];
                        if (!n)
                            for (var o = 0, s = a.vendors.length; o < s; o++)
                                if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
                                    a.propertyCache[e] = n;
                                    break
                                }
                        t.style[n] = i
                    }
                },
                l = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                },
                h = function() {
                    function t(e, i) {
                        n(this, t), this.element = e;
                        var o = {
                            calibrateX: a.data(this.element, "calibrate-x"),
                            calibrateY: a.data(this.element, "calibrate-y"),
                            invertX: a.data(this.element, "invert-x"),
                            invertY: a.data(this.element, "invert-y"),
                            limitX: a.data(this.element, "limit-x"),
                            limitY: a.data(this.element, "limit-y"),
                            scalarX: a.data(this.element, "scalar-x"),
                            scalarY: a.data(this.element, "scalar-y"),
                            frictionX: a.data(this.element, "friction-x"),
                            frictionY: a.data(this.element, "friction-y"),
                            originX: a.data(this.element, "origin-x"),
                            originY: a.data(this.element, "origin-y"),
                            pointerEvents: a.data(this.element, "pointer-events"),
                            precision: a.data(this.element, "precision"),
                            relativeInput: a.data(this.element, "relative-input"),
                            clipRelativeInput: a.data(this.element, "clip-relative-input"),
                            hoverOnly: a.data(this.element, "hover-only"),
                            inputElement: document.querySelector(a.data(this.element, "input-element")),
                            selector: a.data(this.element, "selector")
                        };
                        for (var s in o) null === o[s] && delete o[s];
                        r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return o(t, [{
                        key: "initialise",
                        value: function() {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function() {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function() {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "absolute", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                var i = a.data(e, "depth") || 0;
                                this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function() {
                            this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function(t) {
                            clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function(t, e) {
                            this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                        }
                    }, {
                        key: "invert",
                        value: function(t, e) {
                            this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                        }
                    }, {
                        key: "friction",
                        value: function(t, e) {
                            this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                        }
                    }, {
                        key: "scalar",
                        value: function(t, e) {
                            this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                        }
                    }, {
                        key: "limit",
                        value: function(t, e) {
                            this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                        }
                    }, {
                        key: "origin",
                        value: function(t, e) {
                            this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                        }
                    }, {
                        key: "setInputElement",
                        value: function(t) {
                            this.inputElement = t, this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function(t, e, i) {
                            e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0) rotate(46deg)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function() {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function() {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function() {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function() {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i],
                                    o = this.depthsX[i],
                                    r = this.depthsY[i],
                                    l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                    h = this.velocityY * (r * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, h)
                            }
                            this.raf = s(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(t, e) {
                            var i = (t || 0) / 30,
                                n = (e || 0) / 30,
                                o = this.windowHeight > this.windowWidth;
                            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(t) {
                            var e = t.beta,
                                i = t.gamma;
                            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(t) {
                            var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(t) {
                            var e = t.clientX,
                                i = t.clientY;
                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function() {
                            return "3.1.0"
                        }
                    }]), t
                }();
            e.exports = h
        }, {
            "object-assign": 1,
            raf: 4
        }]
    }, {}, [5])(5)
})


//end of page stuff

jQuery(function($) {
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            jQuery('.ajx-load-more-link').trigger('click')
        }
    });
    jQuery(window).load(function() {
        if (window.innerWidth >= 741) {
            var is_mobile = 0;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
                is_mobile = 1
            }
            if (is_mobile == 0) {
                skrollr.init({
                    forceHeight: !1,
                    smoothScrollingDuration: 600
                })
            }
        }
        $('body').addClass('loaded')
    });

    var scenes = [];
    var scenesSelector = document.querySelectorAll('.shapes-background-parallax');
    var input = document.getElementById('parallax-area');
    for (i = 0; i < scenesSelector.length; i++) {
        scenes[i] = new Parallax(scenesSelector[i], {
            hoverOnly: !0,
            relativeInput: !0,
            inputElement: input
        })
    };
    (function(window) {
        'use strict';

        function extend(a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key]
                }
            }
            return a
        }

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args)
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args)
            }
        };

        function createRandIntOrderedArray(minVal, maxVal, size) {
            var arr = [];
            for (var i = 0; i < size; ++i) {
                arr.push(anime.random(minVal, maxVal))
            }
            arr.sort(function(a, b) {
                return a - b
            });
            return arr
        }

        function isObjEmpty(obj) {
            return Object.getOwnPropertyNames(obj).length > 0
        }

        function collect() {
            var ret = {};
            var len = arguments.length;
            for (var i = 0; i < len; i++) {
                for (var p in arguments[i]) {
                    if (arguments[i].hasOwnProperty(p)) {
                        ret[p] = arguments[i][p]
                    }
                }
            }
            return ret
        }

        function areClipPathShapesSupported() {
            var base = 'clipPath',
                prefixes = ['webkit', 'moz', 'ms', 'o'],
                properties = [base],
                testElement = document.createElement('testelement'),
                attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            for (var i = 0, l = prefixes.length; i < l; i++) {
                var prefixedProperty = prefixes[i] + base.charAt(0).toUpperCase() + base.slice(1);
                properties.push(prefixedProperty)
            }
            for (var i = 0, l = properties.length; i < l; i++) {
                var property = properties[i];
                if (testElement.style[property] === '') {
                    testElement.style[property] = attribute;
                    if (testElement.style[property] !== '') {
                        return !0
                    }
                }
            }
            return !1
        };

        function Segmenter(el, options) {
            this.el = el;
            this.options = extend({}, this.options);
            extend(this.options, options);
            var self = this;
            imagesLoaded(this.el, {
                background: !0
            }, function() {
                self._init();
                self._initEvents();
                self.options.onReady()
            })
        }
        Segmenter.prototype.options = {
            pieces: 4,
            renderOnLoad: !1,
            shadows: !0,
            shadowsAnimation: {
                opacity: 1,
            },
            parallax: !1,
            parallaxMovement: {
                min: 10,
                max: 40
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuad',
                delay: 0,
                translateZ: {
                    min: 10,
                    max: 65
                },
            },
            onReady: function() {
                return !1
            },
            onAnimationComplete: function() {
                return !1
            },
            onAnimationStart: function() {
                return !1
            },
            positions: [{
                top: 80,
                left: 10,
                width: 30,
                height: 20
            }, {
                top: 2,
                left: 2,
                width: 40,
                height: 40
            }, {
                top: 30,
                left: 60,
                width: 30,
                height: 60
            }, {
                top: 10,
                left: 20,
                width: 50,
                height: 60
            }]
        };
        Segmenter.prototype._init = function() {
            this.dimensions = {
                width: this.el.offsetWidth,
                height: this.el.offsetHeight
            };
            var background = this.el.style.backgroundImage;
            this.imgsrc = background.replace('url(', '').replace(')', '').replace(/\"/gi, "");
            this._layout();
            var self = this;
            this.pieces = [].slice.call(this.el.querySelectorAll('.segmenter__piece-wrap'));
            this.pieces.forEach(function(piece, pos) {
                piece.style.WebkitTransform = piece.style.transform = 'translateZ(0.0001px)';
                if (self.options.renderOnLoad) {
                    self._renderPiece(piece)
                }
            });
            if (this.options.renderOnLoad) {
                this.active = !0
            }
        };
        Segmenter.prototype._layout = function() {
            var clipPath = areClipPathShapesSupported();
            var segBgEl = document.createElement('div');
            segBgEl.className = 'segmenter__background';
            segBgEl.style.backgroundImage = 'url(' + this.imgsrc + ')';
            var segPieces = document.createElement('div'),
                segPiecesHTML = '',
                positionsTotal = this.options.positions.length;
            segPieces.className = 'segmenter__pieces';
            for (var i = 0, len = this.options.pieces; i < len; ++i) {
                if (this.options.parallax) {
                    segPiecesHTML += '<div class="segmenter__piece-parallax">'
                }
                segPiecesHTML += '<div class="segmenter__piece-wrap">';
                var top, left, width, height, clipTop, clipLeft, clipRight, clipBottom, pos = i <= positionsTotal - 1 ? i : 0,
                    isRandom = this.options.positions === 'random';
                top = isRandom ? anime.random(0, 100) : this.options.positions[pos].top;
                left = isRandom ? anime.random(0, 100) : this.options.positions[pos].left;
                width = isRandom ? anime.random(0, 100) : this.options.positions[pos].width;
                height = isRandom ? anime.random(0, 100) : this.options.positions[pos].height;
                if (!clipPath) {
                    clipTop = isRandom ? top / 100 * this.dimensions.height : this.options.positions[pos].top / 100 * this.dimensions.height;
                    clipLeft = isRandom ? left / 100 * this.dimensions.width : this.options.positions[pos].left / 100 * this.dimensions.width;
                    clipRight = isRandom ? width / 100 * this.dimensions.width + clipLeft : this.options.positions[pos].width / 100 * this.dimensions.width + clipLeft;
                    clipBottom = isRandom ? height / 100 * this.dimensions.height + clipTop : this.options.positions[pos].height / 100 * this.dimensions.height + clipTop
                }
                if (this.options.shadows) {
                    segPiecesHTML += '<div class="segmenter__shadow" style="top: ' + top + '%; left: ' + left + '%; width: ' + width + '%; height: ' + height + '%"></div>'
                }
                segPiecesHTML += clipPath ? '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)"></div>' : '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)"></div>';
                segPiecesHTML += '</div>'
                if (this.options.parallax) {
                    segPiecesHTML += '</div>'
                }
            }
            segPieces.innerHTML = segPiecesHTML;
            this.el.innerHTML = '';
            this.el.appendChild(segBgEl);
            this.el.appendChild(segPieces)
        };
        Segmenter.prototype._renderPiece = function(piece) {
            var idx = this.pieces.indexOf(piece);
            if (self.options.animation.translateZ != undefined) {
                if (typeof self.options.animation.translateZ === 'object') {
                    var randArr = createRandIntOrderedArray(self.options.animation.translateZ.min, self.options.animation.translateZ.max, self.options.pieces);
                    piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + randArr[idx] + 'px)'
                } else {
                    piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + self.options.animation.translateZ + 'px)'
                }
            }
            if (self.options.animation.translateY != undefined) {
                if (typeof self.options.animation.translateY === 'object') {
                    var randArr = createRandIntOrderedArray(self.options.animation.translateY.min, self.options.animation.translateY.max, self.options.pieces);
                    piece.style.transform = piece.style.WebkitTransform = 'translateY(' + randArr[idx] + 'px)'
                } else {
                    piece.style.transform = piece.style.WebkitTransform = 'translateY(' + self.options.animation.translateY + 'px)'
                }
            }
            if (self.options.animation.translateX != undefined) {
                if (typeof self.options.animation.translateX === 'object') {
                    var randArr = createRandIntOrderedArray(self.options.animation.translateX.min, self.options.animation.translateX.max, self.options.pieces);
                    piece.style.transform = piece.style.WebkitTransform = 'translateX(' + randArr[idx] + 'px)'
                } else {
                    piece.style.transform = piece.style.WebkitTransform = 'translateX(' + self.options.animation.translateX + 'px)'
                }
            }
            if (self.options.animation.opacity != undefined) {
                piece.style.opacity = self.options.animation.opacity
            }
            if (self.options.shadows && isObjEmpty(self.options.shadowsAnimation)) {
                var shadowEl = piece.querySelector('.segmenter__shadow');
                shadowEl.style.opacity = self.options.shadowsAnimation.opacity != undefined ? self.options.shadowsAnimation.opacity : 0;
                shadowEl.style.transform = shadowEl.style.WebkitTransform = 'translateX(' + (self.options.shadowsAnimation.translateX != undefined ? self.options.shadowsAnimation.translateX : 0) + 'px) translateY(' + (self.options.shadowsAnimation.translateY != undefined ? self.options.shadowsAnimation.translateY : 0) + 'px)'
            }
        };
        Segmenter.prototype.animate = function() {
            if (this.active) {
                return !1
            }
            this.active = !0;
            var self = this,
                animProps = {
                    targets: this.pieces,
                    duration: this.options.animation.duration,
                    delay: function(el, index) {
                        return (self.options.pieces - index - 1) * self.options.animation.delay
                    },
                    easing: this.options.animation.easing,
                    begin: this.options.onAnimationStart,
                    complete: this.options.onAnimationComplete
                };
            if (this.options.animation.translateZ != undefined) {
                var randArr = createRandIntOrderedArray(this.options.animation.translateZ.min, this.options.animation.translateZ.max, this.options.pieces);
                animProps.translateZ = typeof this.options.animation.translateZ === 'object' ? function(el, index) {
                    return randArr[index]
                } : this.options.animation.translateZ
            }
            if (this.options.animation.translateX != undefined) {
                animProps.translateX = typeof this.options.animation.translateX === 'object' ? function(el, index) {
                    return anime.random(self.options.animation.translateX.min, self.options.animation.translateX.max)
                } : this.options.animation.translateX
            }
            if (this.options.animation.translateY != undefined) {
                animProps.translateY = typeof this.options.animation.translateY === 'object' ? function(el, index) {
                    return anime.random(self.options.animation.translateY.min, self.options.animation.translateY.max)
                } : this.options.animation.translateY
            }
            if (this.options.animation.opacity != undefined) {
                animProps.opacity = this.options.animation.opacity
            }
            anime(animProps);
            if (this.options.shadows && isObjEmpty(this.options.shadowsAnimation)) {
                anime(collect({
                    targets: this.el.querySelectorAll('.segmenter__shadow'),
                    duration: this.options.animation.duration,
                    delay: function(el, index) {
                        return (self.options.pieces - index - 1) * self.options.animation.delay
                    },
                    easing: this.options.animation.easing
                }, this.options.shadowsAnimation))
            }
        };
        Segmenter.prototype._initEvents = function() {
            var self = this;
            this.debounceResize = debounce(function(ev) {
                var positionsTotal = self.options.positions.length;
                self.dimensions = {
                    width: self.el.offsetWidth,
                    height: self.el.offsetHeight
                };
                self.pieces.forEach(function(piece, position) {
                    var clipTop, clipLeft, clipRight, clipBottom, segmenterPiece = piece.querySelector('.segmenter__piece');
                    if (self.options.positions === 'random') {
                        var randT = anime.random(0, 100),
                            randL = anime.random(0, 100),
                            randW = anime.random(0, 100),
                            randH = anime.random(0, 100);
                        clipTop = randT / 100 * self.dimensions.height;
                        clipLeft = randL / 100 * self.dimensions.width;
                        clipRight = randW / 100 * self.dimensions.width + clipLeft;
                        clipBottom = randH / 100 * self.dimensions.height + clipTop
                    } else {
                        var pos = position <= positionsTotal - 1 ? position : 0;
                        clipTop = self.options.positions[pos].top / 100 * self.dimensions.height;
                        clipLeft = self.options.positions[pos].left / 100 * self.dimensions.width;
                        clipRight = self.options.positions[pos].width / 100 * self.dimensions.width + clipLeft;
                        clipBottom = self.options.positions[pos].height / 100 * self.dimensions.height + clipTop
                    }
                    segmenterPiece.style.clip = 'rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)'
                })
            }, 10);
            window.addEventListener('resize', this.debounceResize);
            if (this.options.parallax) {
                var arrRand = createRandIntOrderedArray(this.options.parallaxMovement.min, this.options.parallaxMovement.max, this.options.pieces);
                this.pieces.forEach(function(piece, pos) {
                    piece.setAttribute('data-parallax-translation', typeof self.options.parallaxMovement === 'object' ? arrRand[pos] : self.options.parallaxMovement)
                });
                this.mousemove = function(ev) {
                    if (!self.active) {
                        return !1
                    }
                    requestAnimationFrame(function() {
                        self.pieces.forEach(function(piece) {
                            var t = piece.getAttribute('data-parallax-translation'),
                                transX = t / (self.dimensions.width) * ev.clientX - t / 2,
                                transY = t / (self.dimensions.height) * ev.clientY - t / 2;
                            piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)'
                        })
                    })
                };
                window.addEventListener('mousemove', this.mousemove);
                this.handleOrientation = function() {
                    if (!self.active) {
                        return !1
                    }
                    var y = event.gamma;
                    y += 90;
                    requestAnimationFrame(function() {
                        self.pieces.forEach(function(piece) {
                            var t = piece.getAttribute('data-parallax-translation'),
                                transX = t / (self.dimensions.width) * y - t / 2,
                                transY = t / (self.dimensions.height) * y - t / 2;
                            piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)'
                        })
                    })
                }
                window.addEventListener('deviceorientation', this.handleOrientation)
            }
        };
        window.Segmenter = Segmenter
    })(window);




    $(document).ready(function() {

        if (jQuery('.tilter').length > 0) {
            (function() {
                var tiltSettings = [{}, {
                    movement: {
                        imgWrapper: {
                            translation: {
                                x: 10,
                                y: 10,
                                z: 30
                            },
                            rotation: {
                                x: 0,
                                y: -10,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 200,
                                easing: 'easeOutQuad'
                            }
                        },
                        lines: {
                            translation: {
                                x: 10,
                                y: 10,
                                z: [0, 70]
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: -2
                            },
                            reverseAnimation: {
                                duration: 2000,
                                easing: 'easeOutExpo'
                            }
                        },
                        caption: {
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 1
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutQuad'
                            }
                        },
                        overlay: {
                            translation: {
                                x: 10,
                                y: -10,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 2
                            },
                            reverseAnimation: {
                                duration: 2000,
                                easing: 'easeOutExpo'
                            }
                        },
                        shine: {
                            translation: {
                                x: 100,
                                y: 100,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 200,
                                easing: 'easeOutQuad'
                            }
                        }
                    }
                }, {
                    movement: {
                        imgWrapper: {
                            rotation: {
                                x: -5,
                                y: 10,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 900,
                                easing: 'easeOutCubic'
                            }
                        },
                        caption: {
                            translation: {
                                x: 15,
                                y: 15,
                                z: [0, 20]
                            },
                            rotation: {
                                x: [0, 15],
                                y: 0,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutExpo'
                            }
                        },
                        overlay: {
                            translation: {
                                x: 10,
                                y: 10,
                                z: [0, 20]
                            },
                            reverseAnimation: {
                                duration: 1000,
                                easing: 'easeOutExpo'
                            }
                        },
                        shine: {
                            translation: {
                                x: 100,
                                y: 100,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 900,
                                easing: 'easeOutCubic'
                            }
                        }
                    }
                }, {
                    movement: {
                        imgWrapper: {
                            rotation: {
                                x: -5,
                                y: 10,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 50,
                                easing: 'easeOutQuad'
                            }
                        },
                        caption: {
                            translation: {
                                x: 10,
                                y: 10,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutQuad'
                            }
                        },
                        overlay: {
                            translation: {
                                x: 5,
                                y: -5,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 6
                            },
                            reverseAnimation: {
                                duration: 1000,
                                easing: 'easeOutQuad'
                            }
                        },
                        shine: {
                            translation: {
                                x: 50,
                                y: 50,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 50,
                                easing: 'easeOutQuad'
                            }
                        }
                    }
                },

                {
                    movement: {
                        imgWrapper: {
                            translation: {
                                x: 0,
                                y: -8,
                                z: 0
                            },
                            rotation: {
                                x: 3,
                                y: 3,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 1200,
                                easing: 'easeOutExpo'
                            }
                        },
                        lines: {
                            translation: {
                                x: 15,
                                y: 15,
                                z: [0, 15]
                            },
                            reverseAnimation: {
                                duration: 1200,
                                easing: 'easeOutExpo'
                            }
                        },
                        overlay: {
                            translation: {
                                x: 0,
                                y: 8,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 600,
                                easing: 'easeOutExpo'
                            }
                        },
                        caption: {
                            translation: {
                                x: 5,
                                y: -8,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutExpo'
                            }
                        },
                        shine: {
                            translation: {
                                x: 50,
                                y: 50,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 1200,
                                easing: 'easeOutExpo'
                            }
                        }
                    }
                }, {
                    movement: {
                        lines: {
                            translation: {
                                x: -5,
                                y: 5,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 1000,
                                easing: 'easeOutExpo'
                            }
                        },
                        caption: {
                            translation: {
                                x: 8,
                                y: 8,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 3
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutElastic',
                                elasticity: 700
                            }
                        },
                        overlay: {
                            translation: {
                                x: 15,
                                y: -15,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 500,
                                easing: 'easeOutExpo'
                            }
                        },
                        shine: {
                            translation: {
                                x: 50,
                                y: 50,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 500,
                                easing: 'easeOutExpo'
                            }
                        }
                    }
                }, {
                    movement: {
                        imgWrapper: {
                            translation: {
                                x: 5,
                                y: 5,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 800,
                                easing: 'easeOutQuart'
                            }
                        },
                        caption: {
                            translation: {
                                x: 5,
                                y: 5,
                                z: [0, 25]
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutQuart'
                            }
                        },
                        shine: {
                            translation: {
                                x: 50,
                                y: 50,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 800,
                                easing: 'easeOutQuart'
                            }
                        }
                    }
                }, {
                    movement: {
                        lines: {
                            translation: {
                                x: 40,
                                y: 40,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 1500,
                                easing: 'easeOutElastic'
                            }
                        },
                        caption: {
                            translation: {
                                x: 10,
                                y: 10,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: -5
                            },
                            reverseAnimation: {
                                duration: 10000,
                                easing: 'easeOutExpo'
                            }
                        },
                        overlay: {
                            translation: {
                                x: -30,
                                y: -30,
                                z: 0
                            },
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 3
                            },
                            reverseAnimation: {
                                duration: 750,
                                easing: 'easeOutExpo'
                            }
                        },
                        shine: {
                            translation: {
                                x: 100,
                                y: 100,
                                z: 0
                            },
                            reverseAnimation: {
                                duration: 750,
                                easing: 'easeOutExpo'
                            }
                        }
                    }
                }];

                function init() {
                    var idx = 1;
                    [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) {
                        new TiltFx(el, tiltSettings)
                    })
                }



                imagesLoaded(document.querySelector('.smooth'), function() {
                    document.body.classList.remove('loading');
                    init()
                })
            })()
        }
        $(window).load(function() {
            window.setTimeout(function() {
                $("body").addClass("show-items")
            }, 100)
        });

    });

})
