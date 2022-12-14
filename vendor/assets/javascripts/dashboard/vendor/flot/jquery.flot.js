!(function (a) {
  (a.color = {}),
    (a.color.make = function (t, i, e, n) {
      var o = {};
      return (
        (o.r = t || 0),
        (o.g = i || 0),
        (o.b = e || 0),
        (o.a = null != n ? n : 1),
        (o.add = function (t, i) {
          for (var e = 0; e < t.length; ++e) o[t.charAt(e)] += i;
          return o.normalize();
        }),
        (o.scale = function (t, i) {
          for (var e = 0; e < t.length; ++e) o[t.charAt(e)] *= i;
          return o.normalize();
        }),
        (o.toString = function () {
          return 1 <= o.a
            ? "rgb(" + [o.r, o.g, o.b].join(",") + ")"
            : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")";
        }),
        (o.normalize = function () {
          function t(t, i, e) {
            return i < t ? t : e < i ? e : i;
          }
          return (
            (o.r = t(0, parseInt(o.r), 255)),
            (o.g = t(0, parseInt(o.g), 255)),
            (o.b = t(0, parseInt(o.b), 255)),
            (o.a = t(0, o.a, 1)),
            o
          );
        }),
        (o.clone = function () {
          return a.color.make(o.r, o.b, o.g, o.a);
        }),
        o.normalize()
      );
    }),
    (a.color.extract = function (t, i) {
      var e;
      do {
        if ("" != (e = t.css(i).toLowerCase()) && "transparent" != e) break;
        t = t.parent();
      } while (!a.nodeName(t.get(0), "body"));
      return "rgba(0, 0, 0, 0)" == e && (e = "transparent"), a.color.parse(e);
    }),
    (a.color.parse = function (t) {
      var i,
        e = a.color.make;
      if (
        (i =
          /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
            t
          ))
      )
        return e(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
      if (
        (i =
          /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
            t
          ))
      )
        return e(
          parseInt(i[1], 10),
          parseInt(i[2], 10),
          parseInt(i[3], 10),
          parseFloat(i[4])
        );
      if (
        (i =
          /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
            t
          ))
      )
        return e(
          2.55 * parseFloat(i[1]),
          2.55 * parseFloat(i[2]),
          2.55 * parseFloat(i[3])
        );
      if (
        (i =
          /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(
            t
          ))
      )
        return e(
          2.55 * parseFloat(i[1]),
          2.55 * parseFloat(i[2]),
          2.55 * parseFloat(i[3]),
          parseFloat(i[4])
        );
      if ((i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)))
        return e(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16));
      if ((i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)))
        return e(
          parseInt(i[1] + i[1], 16),
          parseInt(i[2] + i[2], 16),
          parseInt(i[3] + i[3], 16)
        );
      var n = a.trim(t).toLowerCase();
      return "transparent" == n
        ? e(255, 255, 255, 0)
        : e((i = o[n] || [0, 0, 0])[0], i[1], i[2]);
    });
  var o = {
    aqua: [0, 255, 255],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    black: [0, 0, 0],
    blue: [0, 0, 255],
    brown: [165, 42, 42],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgrey: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkviolet: [148, 0, 211],
    fuchsia: [255, 0, 255],
    gold: [255, 215, 0],
    green: [0, 128, 0],
    indigo: [75, 0, 130],
    khaki: [240, 230, 140],
    lightblue: [173, 216, 230],
    lightcyan: [224, 255, 255],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    navy: [0, 0, 128],
    olive: [128, 128, 0],
    orange: [255, 165, 0],
    pink: [255, 192, 203],
    purple: [128, 0, 128],
    violet: [128, 0, 128],
    red: [255, 0, 0],
    silver: [192, 192, 192],
    white: [255, 255, 255],
    yellow: [255, 255, 0],
  };
})(jQuery),
  (function (Z) {
    function n(g, t, i, e) {
      var S = [],
        C = {
          colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
          legend: {
            show: !0,
            noColumns: 1,
            labelFormatter: null,
            labelBoxBorderColor: "#ccc",
            container: null,
            position: "ne",
            margin: 5,
            backgroundColor: null,
            backgroundOpacity: 0.85,
            sorted: null,
          },
          xaxis: {
            show: null,
            position: "bottom",
            mode: null,
            timezone: null,
            font: null,
            color: null,
            tickColor: null,
            transform: null,
            inverseTransform: null,
            min: null,
            max: null,
            autoscaleMargin: null,
            ticks: null,
            tickFormatter: null,
            labelWidth: null,
            labelHeight: null,
            reserveSpace: null,
            tickLength: null,
            alignTicksWithAxis: null,
            tickDecimals: null,
            tickSize: null,
            minTickSize: null,
            monthNames: null,
            timeformat: null,
            twelveHourClock: !1,
          },
          yaxis: { autoscaleMargin: 0.02, position: "left" },
          xaxes: [],
          yaxes: [],
          series: {
            points: {
              show: !1,
              radius: 3,
              lineWidth: 2,
              fill: !0,
              fillColor: "#ffffff",
              symbol: "circle",
            },
            lines: { lineWidth: 2, fill: !1, fillColor: null, steps: !1 },
            bars: {
              show: !1,
              lineWidth: 2,
              barWidth: 1,
              fill: !0,
              fillColor: null,
              align: "left",
              horizontal: !1,
              zero: !0,
            },
            shadowSize: 3,
            highlightColor: null,
          },
          grid: {
            show: !0,
            aboveData: !1,
            color: "#545454",
            backgroundColor: null,
            borderColor: null,
            tickColor: null,
            margin: 0,
            labelMargin: 5,
            axisMargin: 8,
            borderWidth: 2,
            minBorderMargin: null,
            markings: null,
            markingsColor: "#f4f4f4",
            markingsLineWidth: 2,
            clickable: !1,
            hoverable: !1,
            autoHighlight: !0,
            mouseActiveRadius: 10,
          },
          interaction: { redrawOverlayInterval: 1e3 / 60 },
          hooks: {},
        },
        n = null,
        o = null,
        h = null,
        x = null,
        c = null,
        p = [],
        m = [],
        b = { left: 0, right: 0, top: 0, bottom: 0 },
        f = 0,
        u = 0,
        v = 0,
        k = 0,
        T = {
          processOptions: [],
          processRawData: [],
          processDatapoints: [],
          processOffset: [],
          drawBackground: [],
          drawSeries: [],
          draw: [],
          bindEvents: [],
          drawOverlay: [],
          shutdown: [],
        },
        y = this;
      function W(t, i) {
        i = [y].concat(i);
        for (var e = 0; e < t.length; ++e) t[e].apply(this, i);
      }
      function a(t) {
        (S = (function (t) {
          for (var i = [], e = 0; e < t.length; ++e) {
            var n = Z.extend(!0, {}, C.series);
            null != t[e].data
              ? ((n.data = t[e].data),
                delete t[e].data,
                Z.extend(!0, n, t[e]),
                (t[e].data = n.data))
              : (n.data = t[e]),
              i.push(n);
          }
          return i;
        })(t)),
          (function () {
            var t,
              i = S.length,
              e = -1;
            for (t = 0; t < S.length; ++t) {
              var n = S[t].color;
              null != n && (i--, "number" == typeof n && e < n && (e = n));
            }
            i <= e && (i = e + 1);
            var o,
              a = [],
              r = C.colors,
              l = r.length,
              s = 0;
            for (t = 0; t < i; t++)
              (o = Z.color.parse(r[t % l] || "#666")),
                t % l == 0 && t && (s = 0 <= s ? (s < 0.5 ? -s - 0.2 : 0) : -s),
                (a[t] = o.scale("rgb", 1 + s));
            var c,
              h = 0;
            for (t = 0; t < S.length; ++t) {
              if (
                (null == (c = S[t]).color
                  ? ((c.color = a[h].toString()), ++h)
                  : "number" == typeof c.color &&
                    (c.color = a[c.color].toString()),
                null == c.lines.show)
              ) {
                var f,
                  u = !0;
                for (f in c)
                  if (c[f] && c[f].show) {
                    u = !1;
                    break;
                  }
                u && (c.lines.show = !0);
              }
              null == c.lines.zero && (c.lines.zero = !!c.lines.fill),
                (c.xaxis = M(p, d(c, "x"))),
                (c.yaxis = M(m, d(c, "y")));
            }
          })(),
          (function () {
            var t,
              i,
              e,
              n,
              o,
              a,
              r,
              l,
              s,
              c,
              h,
              f,
              u = Number.POSITIVE_INFINITY,
              d = Number.NEGATIVE_INFINITY,
              p = Number.MAX_VALUE;
            function m(t, i, e) {
              i < t.datamin && i != -p && (t.datamin = i),
                e > t.datamax && e != p && (t.datamax = e);
            }
            for (
              Z.each(z(), function (t, i) {
                (i.datamin = u), (i.datamax = d), (i.used = !1);
              }),
                t = 0;
              t < S.length;
              ++t
            )
              ((o = S[t]).datapoints = { points: [] }),
                W(T.processRawData, [o, o.data, o.datapoints]);
            for (t = 0; t < S.length; ++t) {
              if (((o = S[t]), (h = o.data), !(f = o.datapoints.format))) {
                if (
                  ((f = []).push({ x: !0, number: !0, required: !0 }),
                  f.push({ y: !0, number: !0, required: !0 }),
                  o.bars.show || (o.lines.show && o.lines.fill))
                ) {
                  var g = !!(
                    (o.bars.show && o.bars.zero) ||
                    (o.lines.show && o.lines.zero)
                  );
                  f.push({
                    y: !0,
                    number: !0,
                    required: !1,
                    defaultValue: 0,
                    autoscale: g,
                  }),
                    o.bars.horizontal &&
                      (delete f[f.length - 1].y, (f[f.length - 1].x = !0));
                }
                o.datapoints.format = f;
              }
              if (null == o.datapoints.pointsize) {
                (o.datapoints.pointsize = f.length),
                  (r = o.datapoints.pointsize),
                  (a = o.datapoints.points);
                var x = o.lines.show && o.lines.steps;
                for (
                  o.xaxis.used = o.yaxis.used = !0, i = e = 0;
                  i < h.length;
                  ++i, e += r
                ) {
                  var b = null == (c = h[i]);
                  if (!b)
                    for (n = 0; n < r; ++n)
                      (l = c[n]),
                        (s = f[n]) &&
                          (s.number &&
                            null != l &&
                            ((l = +l),
                            isNaN(l)
                              ? (l = null)
                              : l == 1 / 0
                              ? (l = p)
                              : l == -1 / 0 && (l = -p)),
                          null == l &&
                            (s.required && (b = !0),
                            null != s.defaultValue && (l = s.defaultValue))),
                        (a[e + n] = l);
                  if (b)
                    for (n = 0; n < r; ++n)
                      null != (l = a[e + n]) &&
                        ((s = f[n]).x && m(o.xaxis, l, l),
                        s.y && m(o.yaxis, l, l)),
                        (a[e + n] = null);
                  else if (
                    x &&
                    0 < e &&
                    null != a[e - r] &&
                    a[e - r] != a[e] &&
                    a[e - r + 1] != a[e + 1]
                  ) {
                    for (n = 0; n < r; ++n) a[e + r + n] = a[e + n];
                    (a[e + 1] = a[e - r + 1]), (e += r);
                  }
                }
              }
            }
            for (t = 0; t < S.length; ++t)
              (o = S[t]), W(T.processDatapoints, [o, o.datapoints]);
            for (t = 0; t < S.length; ++t) {
              (o = S[t]),
                (a = o.datapoints.points),
                (r = o.datapoints.pointsize),
                (f = o.datapoints.format);
              var v = u,
                k = u,
                y = d,
                w = d;
              for (i = 0; i < a.length; i += r)
                if (null != a[i])
                  for (n = 0; n < r; ++n)
                    (l = a[i + n]),
                      (s = f[n]) &&
                        !1 !== s.autoscale &&
                        l != p &&
                        l != -p &&
                        (s.x && (l < v && (v = l), y < l && (y = l)),
                        s.y && (l < k && (k = l), w < l && (w = l)));
              if (o.bars.show) {
                var M;
                switch (o.bars.align) {
                  case "left":
                    M = 0;
                    break;
                  case "right":
                    M = -o.bars.barWidth;
                    break;
                  case "center":
                    M = -o.bars.barWidth / 2;
                    break;
                  default:
                    throw new Error("Invalid bar alignment: " + o.bars.align);
                }
                o.bars.horizontal
                  ? ((k += M), (w += M + o.bars.barWidth))
                  : ((v += M), (y += M + o.bars.barWidth));
              }
              m(o.xaxis, v, y), m(o.yaxis, k, w);
            }
            Z.each(z(), function (t, i) {
              i.datamin == u && (i.datamin = null),
                i.datamax == d && (i.datamax = null);
            });
          })();
      }
      function d(t, i) {
        var e = t[i + "axis"];
        return (
          "object" == typeof e && (e = e.n), "number" != typeof e && (e = 1), e
        );
      }
      function z() {
        return Z.grep(p.concat(m), function (t) {
          return t;
        });
      }
      function w(t) {
        var i,
          e,
          n = {};
        for (i = 0; i < p.length; ++i)
          (e = p[i]) && e.used && (n["x" + e.n] = e.c2p(t.left));
        for (i = 0; i < m.length; ++i)
          (e = m[i]) && e.used && (n["y" + e.n] = e.c2p(t.top));
        return (
          void 0 !== n.x1 && (n.x = n.x1), void 0 !== n.y1 && (n.y = n.y1), n
        );
      }
      function M(t, i) {
        return (
          t[i - 1] ||
            (t[i - 1] = {
              n: i,
              direction: t == p ? "x" : "y",
              options: Z.extend(!0, {}, t == p ? C.xaxis : C.yaxis),
            }),
          t[i - 1]
        );
      }
      function r(t) {
        return (
          (window.devicePixelRatio || 1) /
          (t.webkitBackingStorePixelRatio ||
            t.mozBackingStorePixelRatio ||
            t.msBackingStorePixelRatio ||
            t.oBackingStorePixelRatio ||
            t.backingStorePixelRatio ||
            1)
        );
      }
      function l(t) {
        var i = document.createElement("canvas");
        if (
          ((i.className = t),
          Z(i)
            .css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
            .appendTo(g),
          !i.getContext)
        ) {
          if (!window.G_vmlCanvasManager)
            throw new Error(
              "Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
            );
          i = window.G_vmlCanvasManager.initElement(i);
        }
        var e = i.getContext("2d"),
          n = r(e);
        return (
          (i.width = f * n),
          (i.height = u * n),
          (i.style.width = f + "px"),
          (i.style.height = u + "px"),
          e.save(),
          e.scale(n, n),
          i
        );
      }
      function s() {
        if (((f = g.width()), (u = g.height()), f <= 0 || u <= 0))
          throw new Error(
            "Invalid dimensions for plot, width = " + f + ", height = " + u
          );
      }
      function I(t) {
        var i = t.getContext("2d"),
          e = r(i);
        t.style.width != f && ((t.width = f * e), (t.style.width = f + "px")),
          t.style.height != u &&
            ((t.height = u * e), (t.style.height = u + "px")),
          i.restore(),
          i.save(),
          i.scale(e, e);
      }
      function A(t) {
        var i,
          e = t.labelWidth,
          n = t.labelHeight,
          o = t.options.position,
          a = t.options.tickLength,
          r = C.grid.axisMargin,
          l = C.grid.labelMargin,
          s = "x" == t.direction ? p : m,
          c = Z.grep(s, function (t) {
            return t && t.options.position == o && t.reserveSpace;
          });
        if ((Z.inArray(t, c) == c.length - 1 && (r = 0), null == a)) {
          var h = Z.grep(s, function (t) {
            return t && t.reserveSpace;
          });
          a = (i = 0 == Z.inArray(t, h)) ? "full" : 5;
        }
        isNaN(+a) || (l += +a),
          "x" == t.direction
            ? ((n += l),
              "bottom" == o
                ? ((b.bottom += n + r),
                  (t.box = { top: u - b.bottom, height: n }))
                : ((t.box = { top: b.top + r, height: n }), (b.top += n + r)))
            : ((e += l),
              "left" == o
                ? ((t.box = { left: b.left + r, width: e }), (b.left += e + r))
                : ((b.right += e + r),
                  (t.box = { left: f - b.right, width: e }))),
          (t.position = o),
          (t.tickLength = a),
          (t.box.padding = l),
          (t.innermost = i);
      }
      function F() {
        var t,
          i = z(),
          e = C.grid.show;
        for (var n in b) {
          var o = C.grid.margin || 0;
          b[n] = "number" == typeof o ? o : o[n] || 0;
        }
        for (var n in (W(T.processOffset, [b]), b))
          "object" == typeof C.grid.borderWidth
            ? (b[n] += e ? C.grid.borderWidth[n] : 0)
            : (b[n] += e ? C.grid.borderWidth : 0);
        if (
          (Z.each(i, function (t, i) {
            (i.show = i.options.show),
              null == i.show && (i.show = i.used),
              (i.reserveSpace = i.show || i.options.reserveSpace),
              (function (t) {
                var i = t.options,
                  e = +(null != i.min ? i.min : t.datamin),
                  n = +(null != i.max ? i.max : t.datamax),
                  o = n - e;
                if (0 == o) {
                  var a = 0 == n ? 1 : 0.01;
                  null == i.min && (e -= a),
                    (null != i.max && null == i.min) || (n += a);
                } else {
                  var r = i.autoscaleMargin;
                  null != r &&
                    (null == i.min &&
                      (e -= o * r) < 0 &&
                      null != t.datamin &&
                      0 <= t.datamin &&
                      (e = 0),
                    null == i.max &&
                      0 < (n += o * r) &&
                      null != t.datamax &&
                      t.datamax <= 0 &&
                      (n = 0));
                }
                (t.min = e), (t.max = n);
              })(i);
          }),
          e)
        ) {
          var a = {
              style: g.css("font-style"),
              size: Math.round(
                0.8 * (+g.css("font-size").replace("px", "") || 13)
              ),
              variant: g.css("font-variant"),
              weight: g.css("font-weight"),
              family: g.css("font-family"),
            },
            r = Z.grep(i, function (t) {
              return t.reserveSpace;
            });
          for (
            Z.each(r, function (t, i) {
              var e, n;
              !(function (t) {
                var i,
                  d = t.options;
                i =
                  "number" == typeof d.ticks && 0 < d.ticks
                    ? d.ticks
                    : 0.3 * Math.sqrt("x" == t.direction ? f : u);
                if (
                  ((t.delta = (t.max - t.min) / i),
                  "time" == d.mode && !t.tickGenerator)
                )
                  throw new Error("Time mode requires the flot.time plugin.");
                t.tickGenerator ||
                  ((t.tickGenerator = function (t) {
                    var i = d.tickDecimals,
                      e = -Math.floor(Math.log(t.delta) / Math.LN10);
                    null != i && i < e && (e = i);
                    var n,
                      o,
                      a,
                      r,
                      l,
                      s = Math.pow(10, -e),
                      c = t.delta / s,
                      h = [],
                      f = 0,
                      u = Number.NaN;
                    for (
                      c < 1.5
                        ? (n = 1)
                        : c < 3
                        ? ((n = 2),
                          2.25 < c &&
                            (null == i || e + 1 <= i) &&
                            ((n = 2.5), ++e))
                        : (n = c < 7.5 ? 5 : 10),
                        n *= s,
                        null != d.minTickSize &&
                          n < d.minTickSize &&
                          (n = d.minTickSize),
                        t.tickDecimals = Math.max(0, null != i ? i : e),
                        t.tickSize = d.tickSize || n,
                        r = t.min,
                        l = t.tickSize,
                        o = l * Math.floor(r / l);
                      (a = u),
                        (u = o + f * t.tickSize),
                        h.push(u),
                        ++f,
                        u < t.max && u != a;

                    );
                    return h;
                  }),
                  (t.tickFormatter = function (t, i) {
                    var e = i.tickDecimals ? Math.pow(10, i.tickDecimals) : 1,
                      n = "" + Math.round(t * e) / e;
                    if (null != i.tickDecimals) {
                      var o = n.indexOf("."),
                        a = -1 == o ? 0 : n.length - o - 1;
                      if (a < i.tickDecimals)
                        return (
                          (a ? n : n + ".") +
                          ("" + e).substr(1, i.tickDecimals - a)
                        );
                    }
                    return n;
                  }));
                Z.isFunction(d.tickFormatter) &&
                  (t.tickFormatter = function (t, i) {
                    return "" + d.tickFormatter(t, i);
                  });
                if (null != d.alignTicksWithAxis) {
                  var o = ("x" == t.direction ? p : m)[
                    d.alignTicksWithAxis - 1
                  ];
                  if (o && o.used && o != t) {
                    var e = t.tickGenerator(t);
                    if (
                      (0 < e.length &&
                        (null == d.min && (t.min = Math.min(t.min, e[0])),
                        null == d.max &&
                          1 < e.length &&
                          (t.max = Math.max(t.max, e[e.length - 1]))),
                      (t.tickGenerator = function (t) {
                        var i,
                          e,
                          n = [];
                        for (e = 0; e < o.ticks.length; ++e)
                          (i = (o.ticks[e].v - o.min) / (o.max - o.min)),
                            (i = t.min + i * (t.max - t.min)),
                            n.push(i);
                        return n;
                      }),
                      !t.mode && null == d.tickDecimals)
                    ) {
                      var n = Math.max(
                          0,
                          1 - Math.floor(Math.log(t.delta) / Math.LN10)
                        ),
                        a = t.tickGenerator(t);
                      (1 < a.length &&
                        /\..*0$/.test((a[1] - a[0]).toFixed(n))) ||
                        (t.tickDecimals = n);
                    }
                  }
                }
              })(i),
                (function (t) {
                  var i,
                    e,
                    n = t.options.ticks,
                    o = [];
                  null == n || ("number" == typeof n && 0 < n)
                    ? (o = t.tickGenerator(t))
                    : n && (o = Z.isFunction(n) ? n(t) : n);
                  for (t.ticks = [], i = 0; i < o.length; ++i) {
                    var a = null,
                      r = o[i];
                    "object" == typeof r
                      ? ((e = +r[0]), 1 < r.length && (a = r[1]))
                      : (e = +r),
                      null == a && (a = t.tickFormatter(e, t)),
                      isNaN(e) || t.ticks.push({ v: e, label: a });
                  }
                })(i),
                (n = (e = i).ticks),
                e.options.autoscaleMargin &&
                  0 < n.length &&
                  (null == e.options.min && (e.min = Math.min(e.min, n[0].v)),
                  null == e.options.max &&
                    1 < n.length &&
                    (e.max = Math.max(e.max, n[n.length - 1].v))),
                (i.font = Z.extend({}, a, i.options.font)),
                (function (t) {
                  var i = t.options,
                    e = t.ticks || [],
                    n = i.labelWidth || 0,
                    o = i.labelHeight || 0,
                    a = t.font;
                  x.save(),
                    (x.font =
                      a.style +
                      " " +
                      a.variant +
                      " " +
                      a.weight +
                      " " +
                      a.size +
                      "px '" +
                      a.family +
                      "'");
                  for (var r = 0; r < e.length; ++r) {
                    var l = e[r];
                    if (((l.lines = []), (l.width = l.height = 0), l.label)) {
                      for (
                        var s = (l.label + "")
                            .replace(/<br ?\/?>|\r\n|\r/g, "\n")
                            .split("\n"),
                          c = 0;
                        c < s.length;
                        ++c
                      ) {
                        var h = { text: s[c] },
                          f = x.measureText(h.text);
                        (h.width = f.width),
                          (h.height = null != f.height ? f.height : a.size),
                          (h.height += Math.round(0.15 * a.size)),
                          (l.width = Math.max(h.width, l.width)),
                          (l.height += h.height),
                          l.lines.push(h);
                      }
                      null == i.labelWidth && (n = Math.max(n, l.width)),
                        null == i.labelHeight && (o = Math.max(o, l.height));
                    }
                  }
                  x.restore(),
                    (t.labelWidth = Math.ceil(n)),
                    (t.labelHeight = Math.ceil(o));
                })(i);
            }),
              t = r.length - 1;
            0 <= t;
            --t
          )
            A(r[t]);
          !(function () {
            var t,
              i = C.grid.minBorderMargin,
              n = { x: 0, y: 0 };
            if (null == i)
              for (t = i = 0; t < S.length; ++t)
                i = Math.max(
                  i,
                  2 * (S[t].points.radius + S[t].points.lineWidth / 2)
                );
            (n.x = n.y = Math.ceil(i)),
              Z.each(z(), function (t, i) {
                var e = i.direction;
                i.reserveSpace &&
                  (n[e] = Math.ceil(
                    Math.max(
                      n[e],
                      ("x" == e ? i.labelWidth : i.labelHeight) / 2
                    )
                  ));
              }),
              (b.left = Math.max(n.x, b.left)),
              (b.right = Math.max(n.x, b.right)),
              (b.top = Math.max(n.y, b.top)),
              (b.bottom = Math.max(n.y, b.bottom));
          })(),
            Z.each(r, function (t, i) {
              var e;
              "x" == (e = i).direction
                ? ((e.box.left = b.left - e.labelWidth / 2),
                  (e.box.width = f - b.left - b.right + e.labelWidth))
                : ((e.box.top = b.top - e.labelHeight / 2),
                  (e.box.height = u - b.bottom - b.top + e.labelHeight));
            });
        }
        (v = f - b.left - b.right),
          (k = u - b.bottom - b.top),
          Z.each(i, function (t, i) {
            !(function (t) {
              function i(t) {
                return t;
              }
              var e,
                n,
                o = t.options.transform || i,
                a = t.options.inverseTransform;
              "x" == t.direction
                ? ((e = t.scale = v / Math.abs(o(t.max) - o(t.min))),
                  (n = Math.min(o(t.max), o(t.min))))
                : ((e = -(e = t.scale = k / Math.abs(o(t.max) - o(t.min)))),
                  (n = Math.max(o(t.max), o(t.min)))),
                (t.p2c =
                  o == i
                    ? function (t) {
                        return (t - n) * e;
                      }
                    : function (t) {
                        return (o(t) - n) * e;
                      }),
                (t.c2p = a
                  ? function (t) {
                      return a(n + t / e);
                    }
                  : function (t) {
                      return n + t / e;
                    });
            })(i);
          }),
          (function () {
            if ((g.find(".legend").remove(), !C.legend.show)) return;
            for (
              var t,
                i,
                e = [],
                n = [],
                o = !1,
                a = C.legend.labelFormatter,
                r = 0;
              r < S.length;
              ++r
            )
              (t = S[r]).label &&
                (i = a ? a(t.label, t) : t.label) &&
                n.push({ label: i, color: t.color });
            if (C.legend.sorted)
              if (Z.isFunction(C.legend.sorted)) n.sort(C.legend.sorted);
              else if ("reverse" == C.legend.sorted) n.reverse();
              else {
                var l = "descending" != C.legend.sorted;
                n.sort(function (t, i) {
                  return t.label == i.label
                    ? 0
                    : t.label < i.label != l
                    ? 1
                    : -1;
                });
              }
            for (var r = 0; r < n.length; ++r) {
              var s = n[r];
              r % C.legend.noColumns == 0 &&
                (o && e.push("</tr>"), e.push("<tr>"), (o = !0)),
                e.push(
                  '<td class="legendColorBox"><div style="border:1px solid ' +
                    C.legend.labelBoxBorderColor +
                    ';padding:1px"><div style="width:4px;height:0;border:5px solid ' +
                    s.color +
                    ';overflow:hidden"></div></div></td><td class="legendLabel">' +
                    s.label +
                    "</td>"
                );
            }
            o && e.push("</tr>");
            if (0 == e.length) return;
            var c =
              '<table style="font-size:smaller;color:' +
              C.grid.color +
              '">' +
              e.join("") +
              "</table>";
            if (null != C.legend.container) Z(C.legend.container).html(c);
            else {
              var h = "",
                f = C.legend.position,
                u = C.legend.margin;
              null == u[0] && (u = [u, u]),
                "n" == f.charAt(0)
                  ? (h += "top:" + (u[1] + b.top) + "px;")
                  : "s" == f.charAt(0) &&
                    (h += "bottom:" + (u[1] + b.bottom) + "px;"),
                "e" == f.charAt(1)
                  ? (h += "right:" + (u[0] + b.right) + "px;")
                  : "w" == f.charAt(1) &&
                    (h += "left:" + (u[0] + b.left) + "px;");
              var d = Z(
                '<div class="legend">' +
                  c.replace('style="', 'style="position:absolute;' + h + ";") +
                  "</div>"
              ).appendTo(g);
              if (0 != C.legend.backgroundOpacity) {
                var p = C.legend.backgroundColor;
                null == p &&
                  (((p =
                    (p = C.grid.backgroundColor) && "string" == typeof p
                      ? Z.color.parse(p)
                      : Z.color.extract(d, "background-color")).a = 1),
                  (p = p.toString()));
                var m = d.children();
                Z(
                  '<div style="position:absolute;width:' +
                    m.width() +
                    "px;height:" +
                    m.height() +
                    "px;" +
                    h +
                    "background-color:" +
                    p +
                    ';"> </div>'
                )
                  .prependTo(d)
                  .css("opacity", C.legend.backgroundOpacity);
              }
            }
          })();
      }
      function P() {
        x.clearRect(0, 0, f, u), W(T.drawBackground, [x]);
        var t = C.grid;
        t.show &&
          t.backgroundColor &&
          (x.save(),
          x.translate(b.left, b.top),
          (x.fillStyle = K(
            C.grid.backgroundColor,
            k,
            0,
            "rgba(255, 255, 255, 0)"
          )),
          x.fillRect(0, 0, v, k),
          x.restore()),
          t.show && !t.aboveData && (D(), E());
        for (var i = 0; i < S.length; ++i) W(T.drawSeries, [x, S[i]]), O(S[i]);
        W(T.draw, [x]), t.show && t.aboveData && (D(), E());
      }
      function N(t, i) {
        for (var e, n, o, a, r = z(), l = 0; l < r.length; ++l)
          if (
            (e = r[l]).direction == i &&
            (t[(a = i + e.n + "axis")] || 1 != e.n || (a = i + "axis"), t[a])
          ) {
            (n = t[a].from), (o = t[a].to);
            break;
          }
        if (
          (t[a] ||
            ((e = "x" == i ? p[0] : m[0]), (n = t[i + "1"]), (o = t[i + "2"])),
          null != n && null != o && o < n)
        ) {
          var s = n;
          (n = o), (o = s);
        }
        return { from: n, to: o, axis: e };
      }
      function D() {
        var t, i, e, n;
        x.save(), x.translate(b.left, b.top);
        var o = C.grid.markings;
        if (o)
          for (
            Z.isFunction(o) &&
              (((i = y.getAxes()).xmin = i.xaxis.min),
              (i.xmax = i.xaxis.max),
              (i.ymin = i.yaxis.min),
              (i.ymax = i.yaxis.max),
              (o = o(i))),
              t = 0;
            t < o.length;
            ++t
          ) {
            var a = o[t],
              r = N(a, "x"),
              l = N(a, "y");
            null == r.from && (r.from = r.axis.min),
              null == r.to && (r.to = r.axis.max),
              null == l.from && (l.from = l.axis.min),
              null == l.to && (l.to = l.axis.max),
              r.to < r.axis.min ||
                r.from > r.axis.max ||
                l.to < l.axis.min ||
                l.from > l.axis.max ||
                ((r.from = Math.max(r.from, r.axis.min)),
                (r.to = Math.min(r.to, r.axis.max)),
                (l.from = Math.max(l.from, l.axis.min)),
                (l.to = Math.min(l.to, l.axis.max)),
                (r.from == r.to && l.from == l.to) ||
                  ((r.from = r.axis.p2c(r.from)),
                  (r.to = r.axis.p2c(r.to)),
                  (l.from = l.axis.p2c(l.from)),
                  (l.to = l.axis.p2c(l.to)),
                  r.from == r.to || l.from == l.to
                    ? (x.beginPath(),
                      (x.strokeStyle = a.color || C.grid.markingsColor),
                      (x.lineWidth = a.lineWidth || C.grid.markingsLineWidth),
                      x.moveTo(r.from, l.from),
                      x.lineTo(r.to, l.to),
                      x.stroke())
                    : ((x.fillStyle = a.color || C.grid.markingsColor),
                      x.fillRect(r.from, l.to, r.to - r.from, l.from - l.to))));
          }
        (i = z()), (e = C.grid.borderWidth);
        for (var s = 0; s < i.length; ++s) {
          var c,
            h,
            f,
            u,
            d = i[s],
            p = d.box,
            m = d.tickLength;
          if (d.show && 0 != d.ticks.length) {
            for (
              x.strokeStyle =
                d.options.tickColor ||
                Z.color.parse(d.options.color).scale("a", 0.22).toString(),
                x.lineWidth = 1,
                "x" == d.direction
                  ? ((c = 0),
                    (h =
                      "full" == m
                        ? "top" == d.position
                          ? 0
                          : k
                        : p.top - b.top + ("top" == d.position ? p.height : 0)))
                  : ((h = 0),
                    (c =
                      "full" == m
                        ? "left" == d.position
                          ? 0
                          : v
                        : p.left -
                          b.left +
                          ("left" == d.position ? p.width : 0))),
                d.innermost ||
                  (x.beginPath(),
                  (f = u = 0),
                  "x" == d.direction ? (f = v) : (u = k),
                  1 == x.lineWidth &&
                    ((c = Math.floor(c) + 0.5), (h = Math.floor(h) + 0.5)),
                  x.moveTo(c, h),
                  x.lineTo(c + f, h + u),
                  x.stroke()),
                x.beginPath(),
                t = 0;
              t < d.ticks.length;
              ++t
            ) {
              var g = d.ticks[t].v;
              (f = u = 0),
                isNaN(g) ||
                  g < d.min ||
                  g > d.max ||
                  ("full" == m &&
                    (("object" == typeof e && 0 < e[d.position]) || 0 < e) &&
                    (g == d.min || g == d.max)) ||
                  ("x" == d.direction
                    ? ((c = d.p2c(g)),
                      (u = "full" == m ? -k : m),
                      "top" == d.position && (u = -u))
                    : ((h = d.p2c(g)),
                      (f = "full" == m ? -v : m),
                      "left" == d.position && (f = -f)),
                  1 == x.lineWidth &&
                    ("x" == d.direction
                      ? (c = Math.floor(c) + 0.5)
                      : (h = Math.floor(h) + 0.5)),
                  x.moveTo(c, h),
                  x.lineTo(c + f, h + u));
            }
            x.stroke();
          }
        }
        e &&
          ((n = C.grid.borderColor),
          "object" == typeof e || "object" == typeof n
            ? ("object" != typeof e &&
                (e = { top: e, right: e, bottom: e, left: e }),
              "object" != typeof n &&
                (n = { top: n, right: n, bottom: n, left: n }),
              0 < e.top &&
                ((x.strokeStyle = n.top),
                (x.lineWidth = e.top),
                x.beginPath(),
                x.moveTo(0 - e.left, 0 - e.top / 2),
                x.lineTo(v, 0 - e.top / 2),
                x.stroke()),
              0 < e.right &&
                ((x.strokeStyle = n.right),
                (x.lineWidth = e.right),
                x.beginPath(),
                x.moveTo(v + e.right / 2, 0 - e.top),
                x.lineTo(v + e.right / 2, k),
                x.stroke()),
              0 < e.bottom &&
                ((x.strokeStyle = n.bottom),
                (x.lineWidth = e.bottom),
                x.beginPath(),
                x.moveTo(v + e.right, k + e.bottom / 2),
                x.lineTo(0, k + e.bottom / 2),
                x.stroke()),
              0 < e.left &&
                ((x.strokeStyle = n.left),
                (x.lineWidth = e.left),
                x.beginPath(),
                x.moveTo(0 - e.left / 2, k + e.bottom),
                x.lineTo(0 - e.left / 2, 0),
                x.stroke()))
            : ((x.lineWidth = e),
              (x.strokeStyle = C.grid.borderColor),
              x.strokeRect(-e / 2, -e / 2, v + e, k + e))),
          x.restore();
      }
      function E() {
        x.save(),
          Z.each(z(), function (t, i) {
            if (i.show && 0 != i.ticks.length) {
              var e = i.box,
                n = i.font;
              (x.fillStyle = i.options.color),
                (x.font =
                  n.style +
                  " " +
                  n.variant +
                  " " +
                  n.weight +
                  " " +
                  n.size +
                  "px " +
                  n.family),
                (x.textAlign = "start"),
                (x.textBaseline = "middle");
              for (var o = 0; o < i.ticks.length; ++o) {
                var a = i.ticks[o];
                if (!(!a.label || a.v < i.min || a.v > i.max))
                  for (var r, l, s, c = 0, h = 0; h < a.lines.length; ++h)
                    (s = a.lines[h]),
                      "x" == i.direction
                        ? ((r = b.left + i.p2c(a.v) - s.width / 2),
                          (l =
                            "bottom" == i.position
                              ? e.top + e.padding
                              : e.top + e.height - e.padding - a.height))
                        : ((l = b.top + i.p2c(a.v) - a.height / 2),
                          (r =
                            "left" == i.position
                              ? e.left + e.width - e.padding - s.width
                              : e.left + e.padding)),
                      (l += s.height / 2 + c),
                      (c += s.height),
                      window.opera &&
                        window.opera.version().split(".")[0] < 12 &&
                        ((r = Math.floor(r)), (l = Math.ceil(l - 2))),
                      x.fillText(s.text, r, l);
              }
            }
          }),
          x.restore();
      }
      function O(t) {
        t.lines.show &&
          (function (t) {
            function i(t, i, e, n, o) {
              var a = t.points,
                r = t.pointsize,
                l = null,
                s = null;
              x.beginPath();
              for (var c = r; c < a.length; c += r) {
                var h = a[c - r],
                  f = a[c - r + 1],
                  u = a[c],
                  d = a[c + 1];
                if (null != h && null != u) {
                  if (f <= d && f < o.min) {
                    if (d < o.min) continue;
                    (h = ((o.min - f) / (d - f)) * (u - h) + h), (f = o.min);
                  } else if (d <= f && d < o.min) {
                    if (f < o.min) continue;
                    (u = ((o.min - f) / (d - f)) * (u - h) + h), (d = o.min);
                  }
                  if (d <= f && f > o.max) {
                    if (d > o.max) continue;
                    (h = ((o.max - f) / (d - f)) * (u - h) + h), (f = o.max);
                  } else if (f <= d && d > o.max) {
                    if (f > o.max) continue;
                    (u = ((o.max - f) / (d - f)) * (u - h) + h), (d = o.max);
                  }
                  if (h <= u && h < n.min) {
                    if (u < n.min) continue;
                    (f = ((n.min - h) / (u - h)) * (d - f) + f), (h = n.min);
                  } else if (u <= h && u < n.min) {
                    if (h < n.min) continue;
                    (d = ((n.min - h) / (u - h)) * (d - f) + f), (u = n.min);
                  }
                  if (u <= h && h > n.max) {
                    if (u > n.max) continue;
                    (f = ((n.max - h) / (u - h)) * (d - f) + f), (h = n.max);
                  } else if (h <= u && u > n.max) {
                    if (h > n.max) continue;
                    (d = ((n.max - h) / (u - h)) * (d - f) + f), (u = n.max);
                  }
                  (h == l && f == s) || x.moveTo(n.p2c(h) + i, o.p2c(f) + e),
                    (l = u),
                    (s = d),
                    x.lineTo(n.p2c(u) + i, o.p2c(d) + e);
                }
              }
              x.stroke();
            }
            x.save(), x.translate(b.left, b.top), (x.lineJoin = "round");
            var e = t.lines.lineWidth,
              n = t.shadowSize;
            if (0 < e && 0 < n) {
              (x.lineWidth = n), (x.strokeStyle = "rgba(0,0,0,0.1)");
              var o = Math.PI / 18;
              i(
                t.datapoints,
                Math.sin(o) * (e / 2 + n / 2),
                Math.cos(o) * (e / 2 + n / 2),
                t.xaxis,
                t.yaxis
              ),
                (x.lineWidth = n / 2),
                i(
                  t.datapoints,
                  Math.sin(o) * (e / 2 + n / 4),
                  Math.cos(o) * (e / 2 + n / 4),
                  t.xaxis,
                  t.yaxis
                );
            }
            (x.lineWidth = e), (x.strokeStyle = t.color);
            var a = L(t.lines, t.color, 0, k);
            a &&
              ((x.fillStyle = a),
              (function (t, i, e) {
                var n = t.points,
                  o = t.pointsize,
                  a = Math.min(Math.max(0, e.min), e.max),
                  r = 0,
                  l = !1,
                  s = 1,
                  c = 0,
                  h = 0;
                for (; !(0 < o && r > n.length + o); ) {
                  var f = n[(r += o) - o],
                    u = n[r - o + s],
                    d = n[r],
                    p = n[r + s];
                  if (l) {
                    if (0 < o && null != f && null == d) {
                      (h = r), (o = -o), (s = 2);
                      continue;
                    }
                    if (o < 0 && r == c + o) {
                      x.fill(), (l = !1), (s = 1), (r = c = h + (o = -o));
                      continue;
                    }
                  }
                  if (null != f && null != d) {
                    if (f <= d && f < i.min) {
                      if (d < i.min) continue;
                      (u = ((i.min - f) / (d - f)) * (p - u) + u), (f = i.min);
                    } else if (d <= f && d < i.min) {
                      if (f < i.min) continue;
                      (p = ((i.min - f) / (d - f)) * (p - u) + u), (d = i.min);
                    }
                    if (d <= f && f > i.max) {
                      if (d > i.max) continue;
                      (u = ((i.max - f) / (d - f)) * (p - u) + u), (f = i.max);
                    } else if (f <= d && d > i.max) {
                      if (f > i.max) continue;
                      (p = ((i.max - f) / (d - f)) * (p - u) + u), (d = i.max);
                    }
                    if (
                      (l ||
                        (x.beginPath(), x.moveTo(i.p2c(f), e.p2c(a)), (l = !0)),
                      u >= e.max && p >= e.max)
                    )
                      x.lineTo(i.p2c(f), e.p2c(e.max)),
                        x.lineTo(i.p2c(d), e.p2c(e.max));
                    else if (u <= e.min && p <= e.min)
                      x.lineTo(i.p2c(f), e.p2c(e.min)),
                        x.lineTo(i.p2c(d), e.p2c(e.min));
                    else {
                      var m = f,
                        g = d;
                      u <= p && u < e.min && p >= e.min
                        ? ((f = ((e.min - u) / (p - u)) * (d - f) + f),
                          (u = e.min))
                        : p <= u &&
                          p < e.min &&
                          u >= e.min &&
                          ((d = ((e.min - u) / (p - u)) * (d - f) + f),
                          (p = e.min)),
                        p <= u && u > e.max && p <= e.max
                          ? ((f = ((e.max - u) / (p - u)) * (d - f) + f),
                            (u = e.max))
                          : u <= p &&
                            p > e.max &&
                            u <= e.max &&
                            ((d = ((e.max - u) / (p - u)) * (d - f) + f),
                            (p = e.max)),
                        f != m && x.lineTo(i.p2c(m), e.p2c(u)),
                        x.lineTo(i.p2c(f), e.p2c(u)),
                        x.lineTo(i.p2c(d), e.p2c(p)),
                        d != g &&
                          (x.lineTo(i.p2c(d), e.p2c(p)),
                          x.lineTo(i.p2c(g), e.p2c(p)));
                    }
                  }
                }
              })(t.datapoints, t.xaxis, t.yaxis));
            0 < e && i(t.datapoints, 0, 0, t.xaxis, t.yaxis);
            x.restore();
          })(t),
          t.bars.show &&
            (function (h) {
              var t;
              switch (
                (x.save(),
                x.translate(b.left, b.top),
                (x.lineWidth = h.bars.lineWidth),
                (x.strokeStyle = h.color),
                h.bars.align)
              ) {
                case "left":
                  t = 0;
                  break;
                case "right":
                  t = -h.bars.barWidth;
                  break;
                case "center":
                  t = -h.bars.barWidth / 2;
                  break;
                default:
                  throw new Error("Invalid bar alignment: " + h.bars.align);
              }
              var i = h.bars.fill
                ? function (t, i) {
                    return L(h.bars, h.color, t, i);
                  }
                : null;
              (function (t, i, e, n, o, a, r) {
                for (
                  var l = t.points, s = t.pointsize, c = 0;
                  c < l.length;
                  c += s
                )
                  null != l[c] &&
                    R(
                      l[c],
                      l[c + 1],
                      l[c + 2],
                      i,
                      e,
                      n,
                      o,
                      a,
                      r,
                      x,
                      h.bars.horizontal,
                      h.bars.lineWidth
                    );
              })(h.datapoints, t, t + h.bars.barWidth, 0, i, h.xaxis, h.yaxis),
                x.restore();
            })(t),
          t.points.show &&
            (function (t) {
              function i(t, i, e, n, o, a, r, l) {
                for (
                  var s = t.points, c = t.pointsize, h = 0;
                  h < s.length;
                  h += c
                ) {
                  var f = s[h],
                    u = s[h + 1];
                  null == f ||
                    f < a.min ||
                    f > a.max ||
                    u < r.min ||
                    u > r.max ||
                    (x.beginPath(),
                    (f = a.p2c(f)),
                    (u = r.p2c(u) + n),
                    "circle" == l
                      ? x.arc(f, u, i, 0, o ? Math.PI : 2 * Math.PI, !1)
                      : l(x, f, u, i, o),
                    x.closePath(),
                    e && ((x.fillStyle = e), x.fill()),
                    x.stroke());
                }
              }
              x.save(), x.translate(b.left, b.top);
              var e = t.points.lineWidth,
                n = t.shadowSize,
                o = t.points.radius,
                a = t.points.symbol;
              0 == e && (e = 1e-4);
              if (0 < e && 0 < n) {
                var r = n / 2;
                (x.lineWidth = r),
                  (x.strokeStyle = "rgba(0,0,0,0.1)"),
                  i(t.datapoints, o, null, r + r / 2, !0, t.xaxis, t.yaxis, a),
                  (x.strokeStyle = "rgba(0,0,0,0.2)"),
                  i(t.datapoints, o, null, r / 2, !0, t.xaxis, t.yaxis, a);
              }
              (x.lineWidth = e),
                (x.strokeStyle = t.color),
                i(
                  t.datapoints,
                  o,
                  L(t.points, t.color),
                  0,
                  !1,
                  t.xaxis,
                  t.yaxis,
                  a
                ),
                x.restore();
            })(t);
      }
      function R(t, i, e, n, o, a, r, l, s, c, h, f) {
        var u, d, p, m, g, x, b, v, k;
        h
          ? ((v = x = b = !0),
            (g = !1),
            (m = i + n),
            (p = i + o),
            (d = t) < (u = e) && ((k = d), (d = u), (u = k), (x = !(g = !0))))
          : ((g = x = b = !0),
            (v = !1),
            (u = t + n),
            (d = t + o),
            (m = i) < (p = e) && ((k = m), (m = p), (p = k), (b = !(v = !0)))),
          d < l.min ||
            u > l.max ||
            m < s.min ||
            p > s.max ||
            (u < l.min && ((u = l.min), (g = !1)),
            d > l.max && ((d = l.max), (x = !1)),
            p < s.min && ((p = s.min), (v = !1)),
            m > s.max && ((m = s.max), (b = !1)),
            (u = l.p2c(u)),
            (p = s.p2c(p)),
            (d = l.p2c(d)),
            (m = s.p2c(m)),
            r &&
              (c.beginPath(),
              c.moveTo(u, p),
              c.lineTo(u, m),
              c.lineTo(d, m),
              c.lineTo(d, p),
              (c.fillStyle = r(p, m)),
              c.fill()),
            0 < f &&
              (g || x || b || v) &&
              (c.beginPath(),
              c.moveTo(u, p + a),
              g ? c.lineTo(u, m + a) : c.moveTo(u, m + a),
              b ? c.lineTo(d, m + a) : c.moveTo(d, m + a),
              x ? c.lineTo(d, p + a) : c.moveTo(d, p + a),
              v ? c.lineTo(u, p + a) : c.moveTo(u, p + a),
              c.stroke()));
      }
      function L(t, i, e, n) {
        var o = t.fill;
        if (!o) return null;
        if (t.fillColor) return K(t.fillColor, e, n, i);
        var a = Z.color.parse(i);
        return (
          (a.a = "number" == typeof o ? o : 0.4), a.normalize(), a.toString()
        );
      }
      (y.setData = a),
        (y.setupGrid = F),
        (y.draw = P),
        (y.getPlaceholder = function () {
          return g;
        }),
        (y.getCanvas = function () {
          return n;
        }),
        (y.getPlotOffset = function () {
          return b;
        }),
        (y.width = function () {
          return v;
        }),
        (y.height = function () {
          return k;
        }),
        (y.offset = function () {
          var t = h.offset();
          return (t.left += b.left), (t.top += b.top), t;
        }),
        (y.getData = function () {
          return S;
        }),
        (y.getAxes = function () {
          var e = {};
          return (
            Z.each(p.concat(m), function (t, i) {
              i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i);
            }),
            e
          );
        }),
        (y.getXAxes = function () {
          return p;
        }),
        (y.getYAxes = function () {
          return m;
        }),
        (y.c2p = w),
        (y.p2c = function (t) {
          var i,
            e,
            n,
            o = {};
          for (i = 0; i < p.length; ++i)
            if (
              (e = p[i]) &&
              e.used &&
              ((n = "x" + e.n),
              null == t[n] && 1 == e.n && (n = "x"),
              null != t[n])
            ) {
              o.left = e.p2c(t[n]);
              break;
            }
          for (i = 0; i < m.length; ++i)
            if (
              (e = m[i]) &&
              e.used &&
              ((n = "y" + e.n),
              null == t[n] && 1 == e.n && (n = "y"),
              null != t[n])
            ) {
              o.top = e.p2c(t[n]);
              break;
            }
          return o;
        }),
        (y.getOptions = function () {
          return C;
        }),
        (y.highlight = _),
        (y.unhighlight = Q),
        (y.triggerRedrawOverlay = Y),
        (y.pointOffset = function (t) {
          return {
            left: parseInt(p[d(t, "x") - 1].p2c(+t.x) + b.left, 10),
            top: parseInt(m[d(t, "y") - 1].p2c(+t.y) + b.top, 10),
          };
        }),
        (y.shutdown = function () {
          j && clearTimeout(j);
          h.unbind("mousemove", G),
            h.unbind("mouseleave", H),
            h.unbind("click", V),
            W(T.shutdown, [h]);
        }),
        (y.resize = function () {
          s(), I(n), I(o);
        }),
        (y.hooks = T),
        (function () {
          for (var t = 0; t < e.length; ++t) {
            var i = e[t];
            i.init(y), i.options && Z.extend(!0, C, i.options);
          }
        })(),
        (function (t) {
          var i;
          Z.extend(!0, C, t),
            null == C.xaxis.color && (C.xaxis.color = C.grid.color);
          null == C.yaxis.color && (C.yaxis.color = C.grid.color);
          null == C.xaxis.tickColor && (C.xaxis.tickColor = C.grid.tickColor);
          null == C.yaxis.tickColor && (C.yaxis.tickColor = C.grid.tickColor);
          null == C.grid.borderColor && (C.grid.borderColor = C.grid.color);
          null == C.grid.tickColor &&
            (C.grid.tickColor = Z.color
              .parse(C.grid.color)
              .scale("a", 0.22)
              .toString());
          for (i = 0; i < Math.max(1, C.xaxes.length); ++i)
            C.xaxes[i] = Z.extend(!0, {}, C.xaxis, C.xaxes[i]);
          for (i = 0; i < Math.max(1, C.yaxes.length); ++i)
            C.yaxes[i] = Z.extend(!0, {}, C.yaxis, C.yaxes[i]);
          C.xaxis.noTicks &&
            null == C.xaxis.ticks &&
            (C.xaxis.ticks = C.xaxis.noTicks);
          C.yaxis.noTicks &&
            null == C.yaxis.ticks &&
            (C.yaxis.ticks = C.yaxis.noTicks);
          C.x2axis &&
            ((C.xaxes[1] = Z.extend(!0, {}, C.xaxis, C.x2axis)),
            (C.xaxes[1].position = "top"));
          C.y2axis &&
            ((C.yaxes[1] = Z.extend(!0, {}, C.yaxis, C.y2axis)),
            (C.yaxes[1].position = "right"));
          C.grid.coloredAreas && (C.grid.markings = C.grid.coloredAreas);
          C.grid.coloredAreasColor &&
            (C.grid.markingsColor = C.grid.coloredAreasColor);
          C.lines && Z.extend(!0, C.series.lines, C.lines);
          C.points && Z.extend(!0, C.series.points, C.points);
          C.bars && Z.extend(!0, C.series.bars, C.bars);
          null != C.shadowSize && (C.series.shadowSize = C.shadowSize);
          null != C.highlightColor &&
            (C.series.highlightColor = C.highlightColor);
          for (i = 0; i < C.xaxes.length; ++i) M(p, i + 1).options = C.xaxes[i];
          for (i = 0; i < C.yaxes.length; ++i) M(m, i + 1).options = C.yaxes[i];
          for (var e in T)
            C.hooks[e] && C.hooks[e].length && (T[e] = T[e].concat(C.hooks[e]));
          W(T.processOptions, [C]);
        })(i),
        (function () {
          var t,
            i = g.children("canvas.flot-base"),
            e = g.children("canvas.flot-overlay");
          0 == i.length || 0 == e
            ? (g.html(""),
              g.css({ padding: 0 }),
              "static" == g.css("position") && g.css("position", "relative"),
              s(),
              (n = l("flot-base")),
              (o = l("flot-overlay")),
              (t = !1))
            : ((n = i.get(0)), (o = e.get(0)), (t = !0));
          (x = n.getContext("2d")),
            (c = o.getContext("2d")),
            (h = Z(o)),
            t &&
              (g.data("plot").shutdown(),
              y.resize(),
              c.clearRect(0, 0, f, u),
              h.unbind(),
              g.children().not([n, o]).remove());
          g.data("plot", y);
        })(),
        a(t),
        F(),
        P(),
        (function () {
          C.grid.hoverable && (h.mousemove(G), h.bind("mouseleave", H));
          C.grid.clickable && h.click(V);
          W(T.bindEvents, [h]);
        })();
      var B = [],
        j = null;
      function G(t) {
        C.grid.hoverable &&
          X("plothover", t, function (t) {
            return 0 != t.hoverable;
          });
      }
      function H(t) {
        C.grid.hoverable &&
          X("plothover", t, function (t) {
            return !1;
          });
      }
      function V(t) {
        X("plotclick", t, function (t) {
          return 0 != t.clickable;
        });
      }
      function X(t, i, e) {
        var n = h.offset(),
          o = i.pageX - n.left - b.left,
          a = i.pageY - n.top - b.top,
          r = w({ left: o, top: a });
        (r.pageX = i.pageX), (r.pageY = i.pageY);
        var l = (function (t, i, e) {
          var n,
            o,
            a,
            r = C.grid.mouseActiveRadius,
            l = r * r + 1,
            s = null;
          for (n = S.length - 1; 0 <= n; --n)
            if (e(S[n])) {
              var c = S[n],
                h = c.xaxis,
                f = c.yaxis,
                u = c.datapoints.points,
                d = h.c2p(t),
                p = f.c2p(i),
                m = r / h.scale,
                g = r / f.scale;
              if (
                ((a = c.datapoints.pointsize),
                h.options.inverseTransform && (m = Number.MAX_VALUE),
                f.options.inverseTransform && (g = Number.MAX_VALUE),
                c.lines.show || c.points.show)
              )
                for (o = 0; o < u.length; o += a) {
                  var x = u[o],
                    b = u[o + 1];
                  if (
                    null != x &&
                    !(m < x - d || x - d < -m || g < b - p || b - p < -g)
                  ) {
                    var v = Math.abs(h.p2c(x) - t),
                      k = Math.abs(f.p2c(b) - i),
                      y = v * v + k * k;
                    y < l && ((l = y), (s = [n, o / a]));
                  }
                }
              if (c.bars.show && !s) {
                var w = "left" == c.bars.align ? 0 : -c.bars.barWidth / 2,
                  M = w + c.bars.barWidth;
                for (o = 0; o < u.length; o += a) {
                  (x = u[o]), (b = u[o + 1]);
                  var T = u[o + 2];
                  null != x &&
                    (S[n].bars.horizontal
                      ? d <= Math.max(T, x) &&
                        d >= Math.min(T, x) &&
                        b + w <= p &&
                        p <= b + M
                      : x + w <= d &&
                        d <= x + M &&
                        p >= Math.min(T, b) &&
                        p <= Math.max(T, b)) &&
                    (s = [n, o / a]);
                }
              }
            }
          return s
            ? ((n = s[0]),
              (o = s[1]),
              (a = S[n].datapoints.pointsize),
              {
                datapoint: S[n].datapoints.points.slice(o * a, (o + 1) * a),
                dataIndex: o,
                series: S[n],
                seriesIndex: n,
              })
            : null;
        })(o, a, e);
        if (
          (l &&
            ((l.pageX = parseInt(
              l.series.xaxis.p2c(l.datapoint[0]) + n.left + b.left,
              10
            )),
            (l.pageY = parseInt(
              l.series.yaxis.p2c(l.datapoint[1]) + n.top + b.top,
              10
            ))),
          C.grid.autoHighlight)
        ) {
          for (var s = 0; s < B.length; ++s) {
            var c = B[s];
            c.auto != t ||
              (l &&
                c.series == l.series &&
                c.point[0] == l.datapoint[0] &&
                c.point[1] == l.datapoint[1]) ||
              Q(c.series, c.point);
          }
          l && _(l.series, l.datapoint, t);
        }
        g.trigger(t, [r, l]);
      }
      function Y() {
        var t = C.interaction.redrawOverlayInterval;
        -1 != t ? j || (j = setTimeout(q, t)) : q();
      }
      function q() {
        var t, i;
        for (
          j = null,
            c.save(),
            c.clearRect(0, 0, f, u),
            c.translate(b.left, b.top),
            t = 0;
          t < B.length;
          ++t
        )
          (i = B[t]).series.bars.show
            ? $(i.series, i.point)
            : J(i.series, i.point);
        c.restore(), W(T.drawOverlay, [c]);
      }
      function _(t, i, e) {
        if (("number" == typeof t && (t = S[t]), "number" == typeof i)) {
          var n = t.datapoints.pointsize;
          i = t.datapoints.points.slice(n * i, n * (i + 1));
        }
        var o = U(t, i);
        -1 == o
          ? (B.push({ series: t, point: i, auto: e }), Y())
          : e || (B[o].auto = !1);
      }
      function Q(t, i) {
        null == t && null == i && ((B = []), Y()),
          "number" == typeof t && (t = S[t]),
          "number" == typeof i && (i = t.data[i]);
        var e = U(t, i);
        -1 != e && (B.splice(e, 1), Y());
      }
      function U(t, i) {
        for (var e = 0; e < B.length; ++e) {
          var n = B[e];
          if (n.series == t && n.point[0] == i[0] && n.point[1] == i[1])
            return e;
        }
        return -1;
      }
      function J(t, i) {
        var e = i[0],
          n = i[1],
          o = t.xaxis,
          a = t.yaxis,
          r =
            "string" == typeof t.highlightColor
              ? t.highlightColor
              : Z.color.parse(t.color).scale("a", 0.5).toString();
        if (!(e < o.min || e > o.max || n < a.min || n > a.max)) {
          var l = t.points.radius + t.points.lineWidth / 2;
          (c.lineWidth = l), (c.strokeStyle = r);
          var s = 1.5 * l;
          (e = o.p2c(e)),
            (n = a.p2c(n)),
            c.beginPath(),
            "circle" == t.points.symbol
              ? c.arc(e, n, s, 0, 2 * Math.PI, !1)
              : t.points.symbol(c, e, n, s, !1),
            c.closePath(),
            c.stroke();
        }
      }
      function $(t, i) {
        var e =
            "string" == typeof t.highlightColor
              ? t.highlightColor
              : Z.color.parse(t.color).scale("a", 0.5).toString(),
          n = e,
          o = "left" == t.bars.align ? 0 : -t.bars.barWidth / 2;
        (c.lineWidth = t.bars.lineWidth),
          (c.strokeStyle = e),
          R(
            i[0],
            i[1],
            i[2] || 0,
            o,
            o + t.bars.barWidth,
            0,
            function () {
              return n;
            },
            t.xaxis,
            t.yaxis,
            c,
            t.bars.horizontal,
            t.bars.lineWidth
          );
      }
      function K(t, i, e, n) {
        if ("string" == typeof t) return t;
        for (
          var o = x.createLinearGradient(0, e, 0, i),
            a = 0,
            r = t.colors.length;
          a < r;
          ++a
        ) {
          var l = t.colors[a];
          if ("string" != typeof l) {
            var s = Z.color.parse(n);
            null != l.brightness && (s = s.scale("rgb", l.brightness)),
              null != l.opacity && (s.a *= l.opacity),
              (l = s.toString());
          }
          o.addColorStop(a / (r - 1), l);
        }
        return o;
      }
    }
    (Z.plot = function (t, i, e) {
      return new n(Z(t), i, e, Z.plot.plugins);
    }),
      (Z.plot.version = "0.8-alpha"),
      (Z.plot.plugins = []),
      (Z.fn.plot = function (t, i) {
        return this.each(function () {
          Z.plot(this, t, i);
        });
      });
  })(jQuery);
