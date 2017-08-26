(function () {
  var _$0 = this;

  function _0() {
    function e(a) {
      c.appendChild(a.dom);
      return a;
    }

    function u(a) {
      for (var d = 0; d < c.children.length; d++) c.children[d].style.display = d === a ? "block" : "none";

      l = a;
    }

    var l = 0,
        c = _$0.document.createElement("div");

    c.style.cssText = "position:fixed;top:100;left:100;cursor:pointer;opacity:0.9;z-index:10000";
    c.addEventListener("click", function (a) {
      a.preventDefault();
      u(++l % c.children.length);
    }, !1);

    var k = (performance || _$0.Date).now(),
        g = k,
        a = 0,
        r = e(new _0.Panel("FPS", "#0ff", "#002")),
        h = e(new _0.Panel("MS", "#0f0", "#020"));

    if (_$0.self.performance && _$0.self.performance.memory) var t = e(new _0.Panel("MB", "#f08", "#201"));
    u(0);
    return {
      REVISION: 16,
      dom: c,
      addPanel: e,
      showPanel: u,
      begin: function () {
        k = (performance || _$0.Date).now();
      },
      end: function () {
        a++;

        var c = (performance || _$0.Date).now();

        h.update(c - k, 200);

        if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
          var d = performance.memory;
          t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
        }

        return c;
      },
      update: function () {
        k = this.end();
      },
      domElement: c,
      setMode: u
    };
  }

  function _1(e, f, l) {
    var c = _$0.Infinity,
        k = 0,
        g = _$0.Math.round,
        a = g(_$0.window.devicePixelRatio || 1),
        r = 80 * a,
        h = 48 * a,
        t = 3 * a,
        v = 2 * a,
        d = 3 * a,
        m = 15 * a,
        n = 74 * a,
        p = 30 * a,
        q = _$0.document.createElement("canvas");

    q.width = r;
    q.height = h;
    q.style.cssText = "width:80px;height:48px";
    var b = q.getContext("2d");
    b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
    b.textBaseline = "top";
    b.fillStyle = l;
    b.fillRect(0, 0, r, h);
    b.fillStyle = f;
    b.fillText(e, t, v);
    b.fillRect(d, m, n, p);
    b.fillStyle = l;
    b.globalAlpha = .9;
    b.fillRect(d, m, n, p);
    return {
      dom: q,
      update: function (h, w) {
        c = _$0.Math.min(c, h);
        k = _$0.Math.max(k, h);
        b.fillStyle = l;
        b.globalAlpha = 1;
        b.fillRect(0, 0, r, m);
        b.fillStyle = f;
        b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);
        b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
        b.fillRect(d + n - a, m, a, p);
        b.fillStyle = l;
        b.globalAlpha = .9;
        b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
      }
    };
  }

  _0.Panel = _1;
  Stats = _0;
}).call(this);