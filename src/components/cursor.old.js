/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unused-expressions */
export function setupCursor(t, e, n) {
  'use strict';
  var i = n(0),
    r = n(2),
    o = function () {
      (this.ease = 0.08),
        (this.mouseMoving = !1),
        (this.timer = null),
        (this.shoudDraw = !1),
        (this.line = {
          x: {
            value: 0,
            target: 0,
          },
          y: {
            value: 0,
            target: 0,
          },
          width: {
            value: 3,
          },
          color: 'rgba(234, 15, 50, 1)',
        }),
        (this.border = {
          position: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          },
          angle: {
            start: 0,
            end: 2 * Math.PI,
          },
        }),
        (this.circle = {
          position: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          },
          scale: {
            target: 30,
            value: 30,
          },
        }),
        (this.mouse = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }),
        this.setup();
    };
  (o.prototype.setup = function () {
    (this.draw = this.draw.bind(this)),
      (this.drawPreloader = this.drawPreloader.bind(this)),
      (this.div = document.createElement('div')),
      (this.div.className = 'cursor'),
      document.body.appendChild(this.div),
      (this.canvas = document.createElement('canvas')),
      (this.canvas.className = 'cursor__canvas'),
      (this.canvas.height = window.innerHeight),
      (this.canvas.width = window.innerWidth),
      (this.context = this.canvas.getContext('2d')),
      this.div.appendChild(this.canvas);
  }),
    (o.prototype.init = function () {
      this.trail = new Array(4);
      for (var t = 0; t < 4; t++)
        this.trail[t] = {
          x: i.b.utils.random(-innerWidth, innerWidth),
          y: i.b.utils.random(-innerHeight, innerHeight),
          dx: 0,
          dy: 0,
        };
      this.animate(),
        window.addEventListener('mousemove', this.onMove.bind(this)),
        window.addEventListener('resize', this.onResize.bind(this));
    }),
    (o.prototype.initPreloader = function () {
      var t = this;
      this.trail = new Array(4);
      for (var e = 0; e < 4; e++)
        t.trail[e] = {
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
        };
      setTimeout(function () {
        t.animatePreloader();
      }, 100);
    }),
    (o.prototype.onMove = function (t) {
      var e = this;
      (this.mouseMoving = !0),
        clearTimeout(this.timer),
        (this.timer = setTimeout(function () {
          e.mouseMoving = !1;
        }, 100)),
        t.stopPropagation(),
        (this.mouse.x = t.clientX),
        (this.mouse.y = t.clientY);
    }),
    (o.prototype.animate = function () {
      this.draw(), i.b.ticker.add(this.draw);
    }),
    (o.prototype.animatePreloader = function () {
      this.drawPreloader(), i.b.ticker.add(this.drawPreloader);
    }),
    (o.prototype.draw = function () {
      var t = this;
      if (this.mouseMoving) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.trail.forEach(function (e, n) {
            var i = 0 === n ? t.mouse : t.trail[n - 1];
            (e.dx += 0.3 * (i.x - e.x) + 2 * Math.random()),
              (e.dy += 0.3 * (i.y - e.y) + 2 * Math.random()),
              (e.dx *= 0.5),
              (e.dy *= 0.5),
              (e.x += e.dx),
              (e.y += e.dy);
          }),
          this.context.beginPath(),
          this.context.moveTo(
            this.trail[0].x + 2 * Math.random(),
            this.trail[0].y + 2 * Math.random(),
          );
        for (var e = 0; e < this.trail.length - 1; e++) {
          var n = 0.5 * (t.trail[e].x + t.trail[e + 1].x + 2 * Math.random()),
            i = 0.5 * (t.trail[e].y + t.trail[e + 1].y + 2 * Math.random());
          t.context.quadraticCurveTo(
            t.trail[e].x + 50 * Math.random() - 25,
            t.trail[e].y + 50 * Math.random() - 25,
            n,
            i,
          ),
            (t.context.strokeStyle = 'rgb(234, 15, 50)'),
            (t.context.lineWidth = 3),
            t.context.stroke();
        }
        this.context.lineTo(
          this.trail[this.trail.length - 1].x,
          this.trail[this.trail.length - 1].y,
        ),
          this.context.stroke();
      } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }),
    (o.prototype.drawPreloader = function () {
      var t = this;
      if (!r.a.shoudDrawCursor) {
        (this.line.x.value = this.lerp(this.line.x.value, r.a.line.x.target, 0.008)),
          (this.line.y.value = this.lerp(this.line.y.value, r.a.line.y.target, 0.008)),
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.trail.forEach(function (e, n) {
            var i = 0 === n ? r.a.mouseAlt : t.trail[n - 1];
            (e.dx += 0.3 * (i.x - e.x) + 10 * Math.random() - 5),
              (e.dy += 0.3 * (i.y - e.y) + 10 * Math.random() - 5),
              (e.dx *= 0.5),
              (e.dy *= 0.5),
              (e.x += e.dx),
              (e.y += e.dy);
          }),
          this.context.beginPath();
        for (var e = 0; e < this.trail.length - 1; e++) {
          var n = 0.5 * (t.trail[e].x + t.trail[e + 1].x + 2 * Math.random()),
            i = 0.5 * (t.trail[e].y + t.trail[e + 1].y + 2 * Math.random());
          t.context.quadraticCurveTo(
            t.trail[e].x + 50 * Math.random() - 25,
            t.trail[e].y + 50 * Math.random() - 25,
            n,
            i,
          ),
            (t.context.strokeStyle = 'rgb(234, 15, 50)'),
            (t.context.lineWidth = 3),
            t.context.stroke();
        }
        this.context.lineTo(
          this.trail[this.trail.length - 1].x,
          this.trail[this.trail.length - 1].y,
        ),
          this.context.stroke();
      }
    }),
    (o.prototype.onResize = function (t) {
      var e = t.size;
      (this.ratio = e / 10),
        (this.canvas.height = window.innerHeight),
        (this.canvas.width = window.innerWidth);
    }),
    (o.prototype.lerp = function (t, e, n) {
      return (1 - n) * t + n * e;
    }),
    (o.prototype.destroy = function () {
      i.b.ticker.remove(this.draw), i.b.ticker.remove(this.drawPreloader);
    }),
    (e.a = o);
}
