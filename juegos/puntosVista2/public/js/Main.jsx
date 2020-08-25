!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var c = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 7));
})([
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        Math.radians = function (e) {
            return (e * Math.PI) / 180;
        };
        var c = (function (e) {
            function t() {
                return (
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    (function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "render",
                        value: function () {
                            var e = 10 * Math.cos(Math.radians(this.props.angulo - 45)) + this.props.cx,
                                t = 10 * Math.sin(Math.radians(this.props.angulo - 45)) + this.props.cy,
                                n = 10 * Math.cos(Math.radians(this.props.angulo - 135)) + this.props.cx,
                                r = 10 * Math.sin(Math.radians(this.props.angulo - 135)) + this.props.cy;
                            if (this.props.seleccionado == this.props.indice) var c = "#FFD400";
                            else c = "#32CD32";
                            return React.createElement(
                                "g",
                                null,
                                React.createElement("line", { x1: this.props.cx, y1: this.props.cy, x2: e, y2: t, stroke: c, "stroke-width": "1" }),
                                React.createElement("line", { x1: this.props.cx, y1: this.props.cy, x2: n, y2: r, stroke: c, "stroke-width": "1" }),
                                React.createElement("circle", { cx: this.props.cx, cy: this.props.cy, r: this.props.r, fill: c })
                            );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        var c = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (n.seleccionar = n.seleccionar.bind(n)), n;
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "componentDidMount",
                        value: function () {
                            this.refs.image;
                        },
                    },
                    {
                        key: "seleccionar",
                        value: function (e) {
                            this.props.seleccionar(e);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this;
                            if (null == this.props.id);
                            else if (this.props.id == this.props.seleccionado)
                                return React.createElement("img", {
                                    className: "border border-success",
                                    ref: "image",
                                    src: this.props.url,
                                    onClick: function () {
                                        return e.seleccionar(e.props.id);
                                    },
                                });
                            return React.createElement("img", {
                                ref: "image",
                                src: this.props.url,
                                onClick: function () {
                                    return e.seleccionar(e.props.id);
                                },
                            });
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            c = a(n(1)),
            o = a(n(0));
        function a(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var i = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    (n.puntaje = 0),
                    (n.numeroPreguntas = 4),
                    (n.state = { seleccionado: -1, pregunta: 0 }),
                    n.seleccionarEjercicios(),
                    (n.seleccionar = n.seleccionar.bind(n)),
                    (n.siguiente = n.siguiente.bind(n)),
                    (n.respuesta = shuffle([0, 1, 2, 3, 4, 5, 6, 7])),
                    n
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "seleccionar",
                        value: function (e) {
                            this.setState({ seleccionado: e });
                        },
                    },
                    {
                        key: "siguiente",
                        value: function () {
                            -1 != this.state.seleccionado
                                ? (45 * this.state.seleccionado == this.ejercicios[this.state.pregunta][1] && (this.puntaje += 1),
                                  this.state.pregunta + 1 == this.numeroPreguntas
                                      ? this.props.terminar((this.puntaje / this.numeroPreguntas) * 100)
                                      : (this.setState({ seleccionado: -1, pregunta: this.state.pregunta + 1 }), (this.respuesta = shuffle([0, 1, 2, 3, 4, 5, 6, 7]))))
                                : toastr("¡Usted no ha seleccionado una respuesta!");
                        },
                    },
                    {
                        key: "seleccionarEjercicios",
                        value: function () {
                            this.ejercicios = [];
                            for (var e = 0; e < this.numeroPreguntas; e++) {
                                10 == (n = Math.floor(10 * Math.random())) && n--, n++, 8 == (r = Math.floor(8 * Math.random())) && (r -= 1), (r *= 45);
                                for (var t = this.ejercicios.indexOf(n); -1 != t && -1 != this.ejercicios[t].indexOf(r); ) {
                                    var n, r;
                                    10 == (n = Math.floor(10 * Math.random())) && n--, n++, 8 == (r = Math.floor(8 * Math.random())) && (r -= 1), (r *= 45);
                                    t = this.ejercicios.indexOf(n);
                                }
                                this.ejercicios.push([n, r]);
                            }
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.props.nivel + "/" + this.ejercicios[this.state.pregunta][0],
                                n = this.ejercicios[this.state.pregunta][1] / 45,
                                r = "./../../../../public/common/img/puntosVista/" + t;
                            if (-1 == this.state.seleccionado) var a = "./../../../../public/common/img/puntosVista/notselected.jpg";
                            else a = r + "/" + 45 * this.state.seleccionado + ".png";
                            return React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                      "div", { className: "col-6" }, React.createElement(c.default, { url: a })),
                                    React.createElement(
                                        "div",
                                        { className: "col-6" },
                                        React.createElement(
                                            "svg",
                                            { viewBox: "0 0 100 60" },
                                            React.createElement("image", { y: "10", width: "100", height: "40", href: "./../../../../public/common/img/puntosVista/" + t + "/aereo.png" }),
                                            React.createElement(o.default, { seleccionado: n, indice: 5, angulo: 135, cx: 29, cy: 10, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 4, angulo: 180, cx: 50, cy: 6, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 3, angulo: 225, cx: 71, cy: 10, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 6, angulo: 90, cx: 25, cy: 29, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 2, angulo: 270, cx: 75, cy: 29, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 7, angulo: 45, cx: 29, cy: 50, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 0, angulo: 0, cx: 50, cy: 54, r: 2 }),
                                            React.createElement(o.default, { seleccionado: n, indice: 1, angulo: 315, cx: 71, cy: 50, r: 2 })
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[0]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[0] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[1]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[1] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[2]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[2] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[3]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[3] + ".png" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row mt-2" },
                                    React.createElement(
                                        "div",
                                        {
                                            className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[4]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[4] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[5]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[5] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[6]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[6] + ".png" })
                                    ),
                                    React.createElement(
                                        "div",
                                        {className: "col-2",
                                            onClick: function () {
                                                e.seleccionar(e.respuesta[7]);
                                            },
                                        },
                                        React.createElement(c.default, { url: r + "/" + 45 * this.respuesta[7] + ".png" })
                                    )
                                ),
                                React.createElement("div", { className: "row mt-3" }, React.createElement("div", { className: "col-2 offset-10" }, React.createElement("button", { className: "btn btn-principal btn-lg", onClick: this.siguiente }, "Siguiente")))
                            );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = i;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        var c = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    Consulta.post("/paciente/registrar/avance/", { juego: n.props.juego, paciente: n.props.paciente, porcentaje: n.props.porcentaje, nivel: n.props.nivel, fechaInicio: n.props.fechaInicio, fechaFin: new Date() }, function (
                        e
                    ) {
                        console.log(e);
                    }),
                    n
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "render",
                        value: function () {
                            var e = "";
                            return (
                                (e = this.props.porcentaje >= 80 ? "bg-success" : this.props.porcentaje >= 25 ? "bg-warning" : "bg-danger"),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { className: "row border rounded " + e },
                                        React.createElement("div", { className: "col-6 offset-3 text-center text-white" }, React.createElement("h1", { className: "display-1" }, this.props.porcentaje.toFixed(2), "%"))
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "row mt-3" },
                                        React.createElement("div", { className: "col-4" }, React.createElement("a", { href: "/juegos/", className: "btn btn-principal btn-lg" }, "Regresar")),
                                        React.createElement("div", { className: "col-4 text-center" }, React.createElement("button", { onClick: this.props.reiniciar, className: "btn btn-principal btn-lg" }, "Volver a jugar"))
                                    )
                                )
                            );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        var c = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (n.state = { index: 0 }), (n.seleccionar = n.seleccionar.bind(n)), n;
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "seleccionar",
                        value: function () {
                            0 == this.state.index ? toastr("¡Usted no ha seleccionado un nivel de dificultad!") : this.props.seleccionar(this.state.index);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            for (var e = this, t = [], n = 0; n < 3; n++) this.state.index == n + 1 ? t.push("col-4 bg-verde border text-white py-3 unselectable") : t.push("col-4 bg-light border py-3 unselectable");
                            return React.createElement(
                                "div",
                                null,
                                React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-6 offset-3 text-center" }, React.createElement("h3", null, "Seleccione el nivel de dificultad"))),
                                React.createElement(
                                    "div",
                                    { className: "row text-center" },
                                    React.createElement(
                                        "div",
                                        {
                                            className: t[0],
                                            onClick: function () {
                                                e.setState({ index: 1 });
                                            },
                                        },
                                        "Fácil"
                                    ),
                                    React.createElement(
                                        "div",
                                        {
                                            className: t[1],
                                            onClick: function () {
                                                e.setState({ index: 2 });
                                            },
                                        },
                                        "Medio"
                                    ),
                                    React.createElement(
                                        "div",
                                        {
                                            className: t[2],
                                            onClick: function () {
                                                e.setState({ index: 3 });
                                            },
                                        },
                                        "Difícil"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement("div", { className: "col-4 text-center mt-3" }, React.createElement("a", { className: "btn btn-principal btn-lg", href: "/juegos/" }, "Regresar")),
                                    React.createElement("div", { className: "col-4 offset-4 text-center mt-3" }, React.createElement("button", { onClick: this.seleccionar, className: "btn btn-principal btn-lg" }, "Continuar"))
                                )
                            );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        var c = (function (e) {
            function t() {
                return (
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    (function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "render",
                        value: function () {
                          var regresar;
                              if(typeof this.props.regresar === 'undefined'){
                                  regresar = (
                                      <div className="col-4">
                                          <a
                                              className="btn btn-principal btn-lg"
                                              href="/juegos/">
                                              Lista de juegos
                                          </a>
                                      </div>
                                  );
                              }else{
                                  regresar = (
                                      <div className="col-4"></div>
                                  );
                              }
                              var audio = $("#player")
                            if(audio[0] != undefined){
                              audio[0].pause()
                              audio[0].load()
                            }
                          return (
                            <div>
                              <div className="row border rounder my-3">
                                <div className="col-12 text-center bg-white">
                                  <p>{this.props.instrucciones}</p>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-13">
                                  <audio id="player" controls>
                                    <source src={'./data/audio.mp3'} type="audio/mpeg">
                                    </source>
                                      Your browser does not support the audio element.
                                  </audio>
                                </div>
                                <div className="col-12 text-center">
                                  <button
                                    className="btn btn-principal btn-lg"
                                    onClick={this.props.iniciar}>
                                    Iniciar Juego
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        })();
        var c = (function (e) {
            function t(e) {
                return (
                    (function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    (function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                    })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "render",
                        value: function () {
                            return React.createElement(
                                "div",
                                { className: "row mt-3 border rounded p-3 bg-principal" },
                                React.createElement("div", { className: "col-6 offset-3 text-center" }, React.createElement("h1", null, this.props.nombre)),
                                React.createElement("div", { className: "col-12" }, this.props.children)
                            );
                        },
                    },
                ]),
                t
            );
        })();
        t.default = c;
    },
    function (e, t, n) {
        "use strict";
        var r = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            c = l(n(6)),
            o = l(n(5)),
            a = l(n(4)),
            i = l(n(3)),
            s = l(n(2));
        function l(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var u = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    (n.juego = "puntosVista2"),
                    (n.state = { inicio: !1, fin: !1, seleccionNivel: !0, porcentaje: null }),
                    (n.iniciar = n.iniciar.bind(n)),
                    (n.seleccionarNivel = n.seleccionarNivel.bind(n)),
                    (n.terminar = n.terminar.bind(n)),
                    (n.reiniciar = n.reiniciar.bind(n)),
                    n
                );
            }
            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, React.Component),
                r(t, [
                    {
                        key: "iniciar",
                        value: function () {
                            this.setState({ seleccionNivel: !1, inicio: !0 });
                        },
                    },
                    {
                        key: "reiniciar",
                        value: function () {
                            this.setState({ inicio: !1, fin: !1, seleccionNivel: !0, porcentaje: null });
                        },
                    },
                    {
                        key: "terminar",
                        value: function (e) {
                            this.setState({ fin: !0, porcentaje: e });
                        },
                    },
                    {
                        key: "seleccionarNivel",
                        value: function (e) {
                            (this.nivel = e), this.setState({ seleccionNivel: !1 });
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            return this.state.seleccionNivel
                                ? React.createElement(c.default, { nombre: this.props.nombre }, React.createElement(a.default, { seleccionar: this.seleccionarNivel }))
                                : this.state.fin
                                ? React.createElement(
                                      c.default,
                                      { nombre: this.props.nombre },
                                      React.createElement(i.default, { juego: this.juego, fechaInicio: this.fechaInicio, nivel: this.nivel, paciente: this.props.paciente, reiniciar: this.reiniciar, porcentaje: this.state.porcentaje })
                                  )
                                : this.state.inicio
                                ? React.createElement(c.default, { nombre: this.props.nombre }, React.createElement(s.default, { nivel: this.nivel, terminar: this.terminar }))
                                : React.createElement(c.default, { nombre: this.props.nombre }, React.createElement(o.default, { iniciar: this.iniciar, instrucciones: this.props.instrucciones }));
                        },
                    },
                ]),
                t
            );
        })();
        $(document).ready(function () {
            var e;
            (e = function (e, t, n, r) {
                ReactDOM.render(React.createElement(u, { paciente: e, nombre: t, instrucciones: n }), document.getElementById("main"));
            }),
                d3.json("./data/info.json", function (t, n) {
                    d3.json("./meta.json", function (t, r) {
                        Consulta.get("/paciente/actual/", function (t) {
                            null != t.id ? (mostrarPerfil(t), e(t.id, r.nombre, n.instrucciones)) : toastr("No has seleccionado un paciente");
                        });
                    });
                });
        });
    },
]);
