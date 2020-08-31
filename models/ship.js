import { ctx, height, width } from "../view/screen/play.js";

const shipImg = new Image();

shipImg.src =
  "https://cdn0.iconfinder.com/data/icons/nasa-1/64/spaceship-spacecraft-transportation-rocket-128.png";

const bullet = new Image();

bullet.src = "https://image.flaticon.com/icons/svg/2614/2614487.svg";

export class Ship {
  constructor(size, x, y, velX) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.color = "green";
    this.bullets = [];
    this.blood = 5;
    this.level = 1;
    this.score = 0;
    this.currentScore = 0;
  }

  render() {
    // drawCircle(this.x, this.y, this.size, this.color);
    ctx.drawImage(
      shipImg,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  shoot() {
    if (this.level == 1) {
      let a = new Bullet(this.x, this.y, 10, 0);
      this.bullets.push(a);
    }
    if (this.level == 2) {
      let a = new Bullet(this.x - 20, this.y, 10, 0);
      let b = new Bullet(this.x + 20, this.y, 10, 0);
      this.bullets.push(a, b);
    }
    if (this.level == 3) {
      let a = new Bullet(this.x, this.y, 10, 0);
      let b = new Bullet(this.x - 1, this.y, 10, 1);
      let c = new Bullet(this.x + 1, this.y, 10, -1);
      this.bullets.push(a, b, c);
    }
  }
}

export class Bullet {
  constructor(x, y, speed, dx) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.exist = true;
    // this.width = 4;
    // this.height = 14;
    this.numbers = 3;
    this.dx = dx;
    this.damage = 1;
    this.size = 10;
  }

  render() {
    // drawCircle(this.x, this.y, this.size, "white");
    ctx.drawImage(
      bullet,
      this.x - this.size,
      this.y - this.size,
      2 * this.size,
      2 * this.size
    );
  }

  move() {
    this.y -= this.speed;
    this.x -= this.dx;
    if (this.y <= 0) {
      this.state = false;
    }
  }
}

export const newShip = new Ship(40, 300, 760, 20);
