!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery", "vendor/datatables.net/js/jquery.dataTables"], function (e) {
        return t(e, window, document);
      })
    : "object" == typeof exports
    ? (module.exports = function (e, a) {
        return (
          e || (e = window),
          (a && a.fn.dataTable) || (a = require("vendor/datatables.net/js/jquery.dataTables")(e, a).$),
          t(a, e, e.document)
        );
      })
    : t(jQuery, window, document);
})(function (h, e, n, o) {
  "use strict";
  var s = h.fn.dataTable;
  return (
    h.extend(!0, s.defaults, {
      dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      renderer: "bootstrap",
    }),
    h.extend(s.ext.classes, {
      sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4",
      sFilterInput: "form-control form-control-sm",
      sLengthSelect: "form-control form-control-sm",
      sProcessing: "dataTables_processing card",
      sPageButton: "paginate_button page-item",
    }),
    (s.ext.renderer.pageButton.bootstrap = function (i, e, d, a, l, c) {
      var u,
        p,
        t,
        f = new s.Api(i),
        b = i.oClasses,
        m = i.oLanguage.oPaginate,
        g = i.oLanguage.oAria.paginate || {},
        x = 0,
        w = function (e, a) {
          var t,
            n,
            o,
            s,
            r = function (e) {
              e.preventDefault(),
                h(e.currentTarget).hasClass("disabled") ||
                  f.page() == e.data.action ||
                  f.page(e.data.action).draw("page");
            };
          for (t = 0, n = a.length; t < n; t++)
            if (((s = a[t]), h.isArray(s))) w(e, s);
            else {
              switch (((p = u = ""), s)) {
                case "ellipsis":
                  (u = "&#x2026;"), (p = "disabled");
                  break;
                case "first":
                  (u = m.sFirst), (p = s + (0 < l ? "" : " disabled"));
                  break;
                case "previous":
                  (u = m.sPrevious), (p = s + (0 < l ? "" : " disabled"));
                  break;
                case "next":
                  (u = m.sNext), (p = s + (l < c - 1 ? "" : " disabled"));
                  break;
                case "last":
                  (u = m.sLast), (p = s + (l < c - 1 ? "" : " disabled"));
                  break;
                default:
                  (u = s + 1), (p = l === s ? "active" : "");
              }
              u &&
                ((o = h("<li>", {
                  class: b.sPageButton + " " + p,
                  id:
                    0 === d && "string" == typeof s
                      ? i.sTableId + "_" + s
                      : null,
                })
                  .append(
                    h("<a>", {
                      href: "#",
                      "aria-controls": i.sTableId,
                      "aria-label": g[s],
                      "data-dt-idx": x,
                      tabindex: i.iTabIndex,
                      class: "page-link",
                    }).html(u)
                  )
                  .appendTo(e)),
                i.oApi._fnBindAction(o, { action: s }, r),
                x++);
            }
        };
      try {
        t = h(e).find(n.activeElement).data("dt-idx");
      } catch (e) {}
      w(h(e).empty().html('<ul class="pagination"/>').children("ul"), a),
        t !== o &&
          h(e)
            .find("[data-dt-idx=" + t + "]")
            .focus();
    }),
    s
  );
});
