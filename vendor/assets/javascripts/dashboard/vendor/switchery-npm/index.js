!(function () {
  function u(t) {
    var e = u.modules[t];
    if (!e) throw new Error('failed to req "' + t + '"');
    return (
      "exports" in e ||
        "function" != typeof e.definition ||
        ((e.client = e.component = !0),
        e.definition.call(this, (e.exports = {}), e),
        delete e.definition),
      e.exports
    );
  }
  (u.loader = "component"),
    ((u.helper = {}).semVerSort = function (t, e) {
      for (
        var n = t.version.split("."), i = e.version.split("."), o = 0;
        o < n.length;
        ++o
      ) {
        var s = parseInt(n[o], 10),
          r = parseInt(i[o], 10);
        if (s !== r) return r < s ? 1 : -1;
        var c = n[o].substr(("" + s).length),
          a = i[o].substr(("" + r).length);
        if ("" === c && "" !== a) return 1;
        if ("" !== c && "" === a) return -1;
        if ("" !== c && "" !== a) return a < c ? 1 : -1;
      }
      return 0;
    }),
    (u.latest = function (t, e) {
      function n(t) {
        throw new Error('failed to find latest module of "' + t + '"');
      }
      var i = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;
      /(.*)~(.*)/.test(t) || n(t);
      for (
        var o = Object.keys(u.modules), s = [], r = [], c = 0;
        c < o.length;
        c++
      ) {
        var a = o[c];
        if (new RegExp(t + "@").test(a)) {
          var l = a.substr(t.length + 1);
          null != i.exec(a)
            ? s.push({ version: l, name: a })
            : r.push({ version: l, name: a });
        }
      }
      if ((0 === s.concat(r).length && n(t), 0 < s.length)) {
        var h = s.sort(u.helper.semVerSort).pop().name;
        return !0 === e ? h : u(h);
      }
      h = r.sort(function (t, e) {
        return t.name > e.name;
      })[0].name;
      return !0 === e ? h : u(h);
    }),
    (u.modules = {}),
    (u.register = function (t, e) {
      u.modules[t] = { definition: e };
    }),
    (u.define = function (t, e) {
      u.modules[t] = { exports: e };
    }),
    u.register("abpetkov~transitionize@0.0.3", function (t, e) {
      function n(t, e) {
        if (!(this instanceof n)) return new n(t, e);
        (this.element = t), (this.props = e || {}), this.init();
      }
      ((e.exports = n).prototype.isSafari = function () {
        return (
          /Safari/.test(navigator.userAgent) &&
          /Apple Computer/.test(navigator.vendor)
        );
      }),
        (n.prototype.init = function () {
          var t = [];
          for (var e in this.props) t.push(e + " " + this.props[e]);
          (this.element.style.transition = t.join(", ")),
            this.isSafari() &&
              (this.element.style.webkitTransition = t.join(", "));
        });
    }),
    u.register("ftlabs~fastclick@v0.6.11", function (t, e) {
      function i(o) {
        "use strict";
        var e,
          t = this;
        if (
          ((this.trackingClick = !1),
          (this.trackingClickStart = 0),
          (this.targetElement = null),
          (this.touchStartX = 0),
          (this.touchStartY = 0),
          (this.lastTouchIdentifier = 0),
          (this.touchBoundary = 10),
          !(this.layer = o) || !o.nodeType)
        )
          throw new TypeError("Layer must be a document node");
        (this.onClick = function () {
          return i.prototype.onClick.apply(t, arguments);
        }),
          (this.onMouse = function () {
            return i.prototype.onMouse.apply(t, arguments);
          }),
          (this.onTouchStart = function () {
            return i.prototype.onTouchStart.apply(t, arguments);
          }),
          (this.onTouchMove = function () {
            return i.prototype.onTouchMove.apply(t, arguments);
          }),
          (this.onTouchEnd = function () {
            return i.prototype.onTouchEnd.apply(t, arguments);
          }),
          (this.onTouchCancel = function () {
            return i.prototype.onTouchCancel.apply(t, arguments);
          }),
          i.notNeeded(o) ||
            (this.deviceIsAndroid &&
              (o.addEventListener("mouseover", this.onMouse, !0),
              o.addEventListener("mousedown", this.onMouse, !0),
              o.addEventListener("mouseup", this.onMouse, !0)),
            o.addEventListener("click", this.onClick, !0),
            o.addEventListener("touchstart", this.onTouchStart, !1),
            o.addEventListener("touchmove", this.onTouchMove, !1),
            o.addEventListener("touchend", this.onTouchEnd, !1),
            o.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation ||
              ((o.removeEventListener = function (t, e, n) {
                var i = Node.prototype.removeEventListener;
                "click" === t
                  ? i.call(o, t, e.hijacked || e, n)
                  : i.call(o, t, e, n);
              }),
              (o.addEventListener = function (t, e, n) {
                var i = Node.prototype.addEventListener;
                "click" === t
                  ? i.call(
                      o,
                      t,
                      e.hijacked ||
                        (e.hijacked = function (t) {
                          t.propagationStopped || e(t);
                        }),
                      n
                    )
                  : i.call(o, t, e, n);
              })),
            "function" == typeof o.onclick &&
              ((e = o.onclick),
              o.addEventListener(
                "click",
                function (t) {
                  e(t);
                },
                !1
              ),
              (o.onclick = null)));
      }
      (i.prototype.deviceIsAndroid =
        0 < navigator.userAgent.indexOf("Android")),
        (i.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent)),
        (i.prototype.deviceIsIOS4 =
          i.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent)),
        (i.prototype.deviceIsIOSWithBadTarget =
          i.prototype.deviceIsIOS &&
          /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent)),
        (i.prototype.needsClick = function (t) {
          "use strict";
          switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
              if (t.disabled) return !0;
              break;
            case "input":
              if ((this.deviceIsIOS && "file" === t.type) || t.disabled)
                return !0;
              break;
            case "label":
            case "video":
              return !0;
          }
          return /\bneedsclick\b/.test(t.className);
        }),
        (i.prototype.needsFocus = function (t) {
          "use strict";
          switch (t.nodeName.toLowerCase()) {
            case "textarea":
              return !0;
            case "select":
              return !this.deviceIsAndroid;
            case "input":
              switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                  return !1;
              }
              return !t.disabled && !t.readOnly;
            default:
              return /\bneedsfocus\b/.test(t.className);
          }
        }),
        (i.prototype.sendClick = function (t, e) {
          "use strict";
          var n, i;
          document.activeElement &&
            document.activeElement !== t &&
            document.activeElement.blur(),
            (i = e.changedTouches[0]),
            (n = document.createEvent("MouseEvents")).initMouseEvent(
              this.determineEventType(t),
              !0,
              !0,
              window,
              1,
              i.screenX,
              i.screenY,
              i.clientX,
              i.clientY,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
            (n.forwardedTouchEvent = !0),
            t.dispatchEvent(n);
        }),
        (i.prototype.determineEventType = function (t) {
          "use strict";
          return this.deviceIsAndroid && "select" === t.tagName.toLowerCase()
            ? "mousedown"
            : "click";
        }),
        (i.prototype.focus = function (t) {
          "use strict";
          var e;
          this.deviceIsIOS &&
          t.setSelectionRange &&
          0 !== t.type.indexOf("date") &&
          "time" !== t.type
            ? ((e = t.value.length), t.setSelectionRange(e, e))
            : t.focus();
        }),
        (i.prototype.updateScrollParent = function (t) {
          "use strict";
          var e, n;
          if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
            n = t;
            do {
              if (n.scrollHeight > n.offsetHeight) {
                (e = n), (t.fastClickScrollParent = n);
                break;
              }
              n = n.parentElement;
            } while (n);
          }
          e && (e.fastClickLastScrollTop = e.scrollTop);
        }),
        (i.prototype.getTargetElementFromEventTarget = function (t) {
          "use strict";
          return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
        }),
        (i.prototype.onTouchStart = function (t) {
          "use strict";
          var e, n, i;
          if (1 < t.targetTouches.length) return !0;
          if (
            ((e = this.getTargetElementFromEventTarget(t.target)),
            (n = t.targetTouches[0]),
            this.deviceIsIOS)
          ) {
            if ((i = window.getSelection()).rangeCount && !i.isCollapsed)
              return !0;
            if (!this.deviceIsIOS4) {
              if (n.identifier === this.lastTouchIdentifier)
                return t.preventDefault(), !1;
              (this.lastTouchIdentifier = n.identifier),
                this.updateScrollParent(e);
            }
          }
          return (
            (this.trackingClick = !0),
            (this.trackingClickStart = t.timeStamp),
            (this.targetElement = e),
            (this.touchStartX = n.pageX),
            (this.touchStartY = n.pageY),
            t.timeStamp - this.lastClickTime < 200 && t.preventDefault(),
            !0
          );
        }),
        (i.prototype.touchHasMoved = function (t) {
          "use strict";
          var e = t.changedTouches[0],
            n = this.touchBoundary;
          return (
            Math.abs(e.pageX - this.touchStartX) > n ||
            Math.abs(e.pageY - this.touchStartY) > n
          );
        }),
        (i.prototype.onTouchMove = function (t) {
          "use strict";
          return (
            this.trackingClick &&
              (this.targetElement !==
                this.getTargetElementFromEventTarget(t.target) ||
                this.touchHasMoved(t)) &&
              ((this.trackingClick = !1), (this.targetElement = null)),
            !0
          );
        }),
        (i.prototype.findControl = function (t) {
          "use strict";
          return void 0 !== t.control
            ? t.control
            : t.htmlFor
            ? document.getElementById(t.htmlFor)
            : t.querySelector(
                "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
              );
        }),
        (i.prototype.onTouchEnd = function (t) {
          "use strict";
          var e,
            n,
            i,
            o,
            s,
            r = this.targetElement;
          if (!this.trackingClick) return !0;
          if (t.timeStamp - this.lastClickTime < 200)
            return (this.cancelNextClick = !0);
          if (
            ((this.cancelNextClick = !1),
            (this.lastClickTime = t.timeStamp),
            (n = this.trackingClickStart),
            (this.trackingClick = !1),
            (this.trackingClickStart = 0),
            this.deviceIsIOSWithBadTarget &&
              ((s = t.changedTouches[0]),
              ((r =
                document.elementFromPoint(
                  s.pageX - window.pageXOffset,
                  s.pageY - window.pageYOffset
                ) || r).fastClickScrollParent =
                this.targetElement.fastClickScrollParent)),
            "label" === (i = r.tagName.toLowerCase()))
          ) {
            if ((e = this.findControl(r))) {
              if ((this.focus(r), this.deviceIsAndroid)) return !1;
              r = e;
            }
          } else if (this.needsFocus(r))
            return (
              100 < t.timeStamp - n ||
              (this.deviceIsIOS && window.top !== window && "input" === i)
                ? (this.targetElement = null)
                : (this.focus(r),
                  (this.deviceIsIOS4 && "select" === i) ||
                    ((this.targetElement = null), t.preventDefault())),
              !1
            );
          return (
            !(
              !this.deviceIsIOS ||
              this.deviceIsIOS4 ||
              !(o = r.fastClickScrollParent) ||
              o.fastClickLastScrollTop === o.scrollTop
            ) ||
            (this.needsClick(r) || (t.preventDefault(), this.sendClick(r, t)),
            !1)
          );
        }),
        (i.prototype.onTouchCancel = function () {
          "use strict";
          (this.trackingClick = !1), (this.targetElement = null);
        }),
        (i.prototype.onMouse = function (t) {
          "use strict";
          return (
            !this.targetElement ||
            !!t.forwardedTouchEvent ||
            !t.cancelable ||
            !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
            (t.stopImmediatePropagation
              ? t.stopImmediatePropagation()
              : (t.propagationStopped = !0),
            t.stopPropagation(),
            t.preventDefault(),
            !1)
          );
        }),
        (i.prototype.onClick = function (t) {
          "use strict";
          var e;
          return this.trackingClick
            ? ((this.targetElement = null), !(this.trackingClick = !1))
            : ("submit" === t.target.type && 0 === t.detail) ||
                ((e = this.onMouse(t)) || (this.targetElement = null), e);
        }),
        (i.prototype.destroy = function () {
          "use strict";
          var t = this.layer;
          this.deviceIsAndroid &&
            (t.removeEventListener("mouseover", this.onMouse, !0),
            t.removeEventListener("mousedown", this.onMouse, !0),
            t.removeEventListener("mouseup", this.onMouse, !0)),
            t.removeEventListener("click", this.onClick, !0),
            t.removeEventListener("touchstart", this.onTouchStart, !1),
            t.removeEventListener("touchmove", this.onTouchMove, !1),
            t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1);
        }),
        (i.notNeeded = function (t) {
          "use strict";
          var e, n;
          if (void 0 === window.ontouchstart) return !0;
          if (
            (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
          ) {
            if (!i.prototype.deviceIsAndroid) return !0;
            if ((e = document.querySelector("meta[name=viewport]"))) {
              if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
              if (31 < n && window.innerWidth <= window.screen.width) return !0;
            }
          }
          return "none" === t.style.msTouchAction;
        }),
        (i.attach = function (t) {
          "use strict";
          return new i(t);
        }),
        "undefined" != typeof define && define.amd
          ? define(function () {
              "use strict";
              return i;
            })
          : void 0 !== e && e.exports
          ? ((e.exports = i.attach), (e.exports.FastClick = i))
          : (window.FastClick = i);
    }),
    u.register("component~indexof@0.0.3", function (t, e) {
      e.exports = function (t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
      };
    }),
    u.register("component~classes@1.2.1", function (t, e) {
      var i = u("component~indexof@0.0.3"),
        n = /\s+/,
        o = Object.prototype.toString;
      function s(t) {
        if (!t) throw new Error("A DOM element reference is reqd");
        (this.el = t), (this.list = t.classList);
      }
      (e.exports = function (t) {
        return new s(t);
      }),
        (s.prototype.add = function (t) {
          if (this.list) return this.list.add(t), this;
          var e = this.array();
          return ~i(e, t) || e.push(t), (this.el.className = e.join(" ")), this;
        }),
        (s.prototype.remove = function (t) {
          if ("[object RegExp]" == o.call(t)) return this.removeMatching(t);
          if (this.list) return this.list.remove(t), this;
          var e = this.array(),
            n = i(e, t);
          return ~n && e.splice(n, 1), (this.el.className = e.join(" ")), this;
        }),
        (s.prototype.removeMatching = function (t) {
          for (var e = this.array(), n = 0; n < e.length; n++)
            t.test(e[n]) && this.remove(e[n]);
          return this;
        }),
        (s.prototype.toggle = function (t, e) {
          return (
            this.list
              ? void 0 !== e
                ? e !== this.list.toggle(t, e) && this.list.toggle(t)
                : this.list.toggle(t)
              : void 0 !== e
              ? e
                ? this.add(t)
                : this.remove(t)
              : this.has(t)
              ? this.remove(t)
              : this.add(t),
            this
          );
        }),
        (s.prototype.array = function () {
          var t = this.el.className.replace(/^\s+|\s+$/g, "").split(n);
          return "" === t[0] && t.shift(), t;
        }),
        (s.prototype.has = s.prototype.contains =
          function (t) {
            return this.list ? this.list.contains(t) : !!~i(this.array(), t);
          });
    }),
    u.register("component~event@0.1.4", function (t, e) {
      var o = window.addEventListener ? "addEventListener" : "attachEvent",
        s = window.removeEventListener ? "removeEventListener" : "detachEvent",
        r = "addEventListener" !== o ? "on" : "";
      (t.bind = function (t, e, n, i) {
        return t[o](r + e, n, i || !1), n;
      }),
        (t.unbind = function (t, e, n, i) {
          return t[s](r + e, n, i || !1), n;
        });
    }),
    u.register("component~query@0.0.3", function (e, t) {
      function n(t, e) {
        return e.querySelector(t);
      }
      ((e = t.exports =
        function (t, e) {
          return n(t, (e = e || document));
        }).all = function (t, e) {
        return (e = e || document).querySelectorAll(t);
      }),
        (e.engine = function (t) {
          if (!t.one) throw new Error(".one callback reqd");
          if (!t.all) throw new Error(".all callback reqd");
          return (n = t.one), (e.all = t.all), e;
        });
    }),
    u.register("component~matches-selector@0.1.5", function (t, e) {
      var o = u("component~query@0.0.3"),
        n = Element.prototype,
        s =
          n.matches ||
          n.webkitMatchesSelector ||
          n.mozMatchesSelector ||
          n.msMatchesSelector ||
          n.oMatchesSelector;
      e.exports = function (t, e) {
        if (!t || 1 !== t.nodeType) return !1;
        if (s) return s.call(t, e);
        for (var n = o.all(e, t.parentNode), i = 0; i < n.length; ++i)
          if (n[i] == t) return !0;
        return !1;
      };
    }),
    u.register("component~closest@0.1.4", function (t, e) {
      var o = u("component~matches-selector@0.1.5");
      e.exports = function (t, e, n, i) {
        for (
          t = n ? { parentNode: t } : t, i = i || document;
          (t = t.parentNode) && t !== document;

        ) {
          if (o(t, e)) return t;
          if (t === i) return;
        }
      };
    }),
    u.register("component~delegate@0.2.3", function (t, e) {
      var s = u("component~closest@0.1.4"),
        r = u("component~event@0.1.4");
      (t.bind = function (n, i, t, o, e) {
        return r.bind(
          n,
          t,
          function (t) {
            var e = t.target || t.srcElement;
            (t.delegateTarget = s(e, i, !0, n)),
              t.delegateTarget && o.call(n, t);
          },
          e
        );
      }),
        (t.unbind = function (t, e, n, i) {
          r.unbind(t, e, n, i);
        });
    }),
    u.register("component~events@1.0.9", function (t, e) {
      var l = u("component~event@0.1.4"),
        h = u("component~delegate@0.2.3");
      function n(t, e) {
        if (!(this instanceof n)) return new n(t, e);
        if (!t) throw new Error("element reqd");
        if (!e) throw new Error("object reqd");
        (this.el = t), (this.obj = e), (this._events = {});
      }
      ((e.exports = n).prototype.sub = function (t, e, n) {
        (this._events[t] = this._events[t] || {}), (this._events[t][e] = n);
      }),
        (n.prototype.bind = function (t, e) {
          var n,
            i = { name: (n = t.split(/ +/)).shift(), selector: n.join(" ") },
            o = this.el,
            s = this.obj,
            r = i.name,
            c = ((e = e || "on" + r), [].slice.call(arguments, 2));
          function a() {
            var t = [].slice.call(arguments).concat(c);
            s[e].apply(s, t);
          }
          return (
            i.selector ? (a = h.bind(o, i.selector, r, a)) : l.bind(o, r, a),
            this.sub(r, e, a),
            a
          );
        }),
        (n.prototype.unbind = function (t, e) {
          if (0 == arguments.length) return this.unbindAll();
          if (1 == arguments.length) return this.unbindAllOf(t);
          var n = this._events[t];
          if (n) {
            var i = n[e];
            i && l.unbind(this.el, t, i);
          }
        }),
        (n.prototype.unbindAll = function () {
          for (var t in this._events) this.unbindAllOf(t);
        }),
        (n.prototype.unbindAllOf = function (t) {
          var e = this._events[t];
          if (e) for (var n in e) this.unbind(t, n);
        });
    }),
    u.register("switchery", function (t, e) {
      var n = u("abpetkov~transitionize@0.0.3"),
        i = u("ftlabs~fastclick@v0.6.11"),
        o = u("component~classes@1.2.1"),
        s = u("component~events@1.0.9");
      e.exports = c;
      var r = {
        color: "#64bd63",
        secondaryColor: "#dfdfdf",
        jackColor: "#fff",
        jackSecondaryColor: null,
        className: "switchery",
        disabled: !1,
        disabledOpacity: 0.5,
        speed: "0.4s",
        size: "default",
      };
      function c(t, e) {
        if (!(this instanceof c)) return new c(t, e);
        for (var n in ((this.element = t), (this.options = e || {}), r))
          null == this.options[n] && (this.options[n] = r[n]);
        null != this.element && "checkbox" == this.element.type && this.init(),
          !0 === this.isDisabled() && this.disable();
      }
      (c.prototype.hide = function () {
        this.element.style.display = "none";
      }),
        (c.prototype.show = function () {
          var t = this.create();
          this.insertAfter(this.element, t);
        }),
        (c.prototype.create = function () {
          return (
            (this.switcher = document.createElement("span")),
            (this.jack = document.createElement("small")),
            this.switcher.appendChild(this.jack),
            (this.switcher.className = this.options.className),
            (this.events = s(this.switcher, this)),
            this.switcher
          );
        }),
        (c.prototype.insertAfter = function (t, e) {
          t.parentNode.insertBefore(e, t.nextSibling);
        }),
        (c.prototype.setPosition = function (t) {
          var e = this.isChecked(),
            n = this.switcher,
            i = this.jack;
          t && e ? (e = !1) : t && !e && (e = !0),
            !0 === e
              ? ((this.element.checked = !0),
                window.getComputedStyle
                  ? (i.style.left =
                      parseInt(window.getComputedStyle(n).width) -
                      parseInt(window.getComputedStyle(i).width) +
                      "px")
                  : (i.style.left =
                      parseInt(n.currentStyle.width) -
                      parseInt(i.currentStyle.width) +
                      "px"),
                this.options.color && this.colorize())
              : ((i.style.left = 0),
                (this.element.checked = !1),
                (this.switcher.style.boxShadow =
                  "inset 0 0 0 0 " + this.options.secondaryColor),
                (this.switcher.style.borderColor = this.options.secondaryColor),
                (this.switcher.style.backgroundColor =
                  this.options.secondaryColor !== r.secondaryColor
                    ? this.options.secondaryColor
                    : "#fff"),
                (this.jack.style.backgroundColor =
                  this.options.jackSecondaryColor !== this.options.jackColor
                    ? this.options.jackSecondaryColor
                    : this.options.jackColor)),
            this.setSpeed();
        }),
        (c.prototype.setSpeed = function () {
          var t = {},
            e = {
              "background-color": this.options.speed,
              left: this.options.speed.replace(/[a-z]/, "") / 2 + "s",
            };
          (t = this.isChecked()
            ? {
                border: this.options.speed,
                "box-shadow": this.options.speed,
                "background-color":
                  3 * this.options.speed.replace(/[a-z]/, "") + "s",
              }
            : { border: this.options.speed, "box-shadow": this.options.speed }),
            n(this.switcher, t),
            n(this.jack, e);
        }),
        (c.prototype.setSize = function () {
          switch (this.options.size) {
            case "small":
              o(this.switcher).add("switchery-small");
              break;
            case "large":
              o(this.switcher).add("switchery-large");
              break;
            default:
              o(this.switcher).add("switchery-default");
          }
        }),
        (c.prototype.colorize = function () {
          var t = this.switcher.offsetHeight / 2;
          (this.switcher.style.backgroundColor = this.options.color),
            (this.switcher.style.borderColor = this.options.color),
            (this.switcher.style.boxShadow =
              "inset 0 0 0 " + t + "px " + this.options.color),
            (this.jack.style.backgroundColor = this.options.jackColor);
        }),
        (c.prototype.handleOnchange = function (t) {
          if (document.dispatchEvent) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent("change", !0, !0), this.element.dispatchEvent(e);
          } else this.element.fireEvent("onchange");
        }),
        (c.prototype.handleChange = function () {
          var t = this,
            e = this.element;
          e.addEventListener
            ? e.addEventListener("change", function () {
                t.setPosition();
              })
            : e.attachEvent("onchange", function () {
                t.setPosition();
              });
        }),
        (c.prototype.handleClick = function () {
          var t = this.switcher;
          //i(t), 
          this.events.bind("click", "bindClick");
        }),
        (c.prototype.bindClick = function () {
          var t = "label" !== this.element.parentNode.tagName.toLowerCase();
          this.setPosition(t), this.handleOnchange(this.element.checked);
        }),
        (c.prototype.markAsSwitched = function () {
          this.element.setAttribute("data-switchery", !0);
        }),
        (c.prototype.markedAsSwitched = function () {
          return this.element.getAttribute("data-switchery");
        }),
        (c.prototype.init = function () {
          this.hide(),
            this.show(),
            this.setSize(),
            this.setPosition(),
            this.markAsSwitched(),
            this.handleChange(),
            this.handleClick();
        }),
        (c.prototype.isChecked = function () {
          return this.element.checked;
        }),
        (c.prototype.isDisabled = function () {
          return (
            this.options.disabled ||
            this.element.disabled ||
            this.element.readOnly
          );
        }),
        (c.prototype.destroy = function () {
          this.events.unbind();
        }),
        (c.prototype.enable = function () {
          this.options.disabled && (this.options.disabled = !1),
            this.element.disabled && (this.element.disabled = !1),
            this.element.readOnly && (this.element.readOnly = !1),
            (this.switcher.style.opacity = 1),
            this.events.bind("click", "bindClick");
        }),
        (c.prototype.disable = function () {
          this.options.disabled || (this.options.disabled = !0),
            this.element.disabled || (this.element.disabled = !0),
            this.element.readOnly || (this.element.readOnly = !0),
            (this.switcher.style.opacity = this.options.disabledOpacity),
            this.destroy();
        });
    }),
    "object" == typeof exports
      ? (module.exports = u("switchery"))
      : "function" == typeof define && define.amd
      ? define("Switchery", [], function () {
          return u("switchery");
        })
      : ((this || window).Switchery = u("switchery"));
})();
