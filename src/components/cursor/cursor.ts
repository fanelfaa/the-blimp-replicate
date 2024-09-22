import { randomInt } from 'es-toolkit';

export class CursorThunderEffect {
  mouseMoving = false;
  timer: NodeJS.Timeout | null = null;
  shouldDraw = false;
  line = {
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
  };
  border = {
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    angle: {
      start: 0,
      end: 2 * Math.PI,
    },
  };
  circle = {
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    scale: {
      target: 30,
      value: 30,
    },
  };
  mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null = null;

  trail: { x: number; y: number; dx: number; dy: number }[] = new Array(4);
  tickerDrawID: number = NaN;

  constructor(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
    if (this.canvas) {
      this.canvas.className = 'cursor__canvas';
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;
      this.context = this.canvas.getContext('2d');
    }

    this.draw = this.draw.bind(this);
    this.tickerDraw = this.tickerDraw.bind(this);
  }

  init() {
    for (let t = 0; t < 4; t++)
      this.trail[t] = {
        x: randomInt(-innerWidth, innerWidth),
        y: randomInt(-innerHeight, innerHeight),
        dx: 0,
        dy: 0,
      };
    this.animate();
    window.addEventListener('mousemove', this.onMove.bind(this));
    // window.addEventListener('resize', this.onResize.bind(this));
  }

  animate() {
    this.tickerDraw();
  }

  tickerDraw() {
    this.draw();
    this.tickerDrawID = requestAnimationFrame(this.tickerDraw);
  }

  draw() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const t = this;
    if (!this.canvas || !this.context || !t.context) return;
    if (this.mouseMoving) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.trail.forEach(function (e, n) {
        const i = 0 === n ? t.mouse : t.trail[n - 1];
        e.dx += 0.3 * (i.x - e.x) + 2 * Math.random();
        e.dy += 0.3 * (i.y - e.y) + 2 * Math.random();
        e.dx *= 0.5;
        e.dy *= 0.5;
        e.x += e.dx;
        e.y += e.dy;
      });
      this.context.beginPath();
      this.context.moveTo(
        this.trail[0].x + 2 * Math.random(),
        this.trail[0].y + 2 * Math.random(),
      );
      for (let e = 0; e < this.trail.length - 1; e++) {
        const n = 0.5 * (t.trail[e].x + t.trail[e + 1].x + 2 * Math.random()),
          i = 0.5 * (t.trail[e].y + t.trail[e + 1].y + 2 * Math.random());
        t.context.quadraticCurveTo(
          t.trail[e].x + 50 * Math.random() - 25,
          t.trail[e].y + 50 * Math.random() - 25,
          n,
          i,
        );
        t.context.strokeStyle = 'rgb(234, 15, 50)';
        t.context.lineWidth = 3;
        t.context.stroke();
      }
      this.context.lineTo(
        this.trail[this.trail.length - 1].x,
        this.trail[this.trail.length - 1].y,
      );
      this.context.stroke();
    } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  onMove(e: MouseEvent) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const t = this;
    this.mouseMoving = !0;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(function () {
      t.mouseMoving = !1;
    }, 100);
    e.stopPropagation();
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  onResize() {
    if (this.canvas) {
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;
    }
  }

  destroy() {
    cancelAnimationFrame(this.tickerDrawID);
  }
}
