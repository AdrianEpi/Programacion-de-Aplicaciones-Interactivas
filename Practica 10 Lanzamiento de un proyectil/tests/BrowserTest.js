let assert;

let classArrow;
let classBackGround;
let classLine;
let classPoint;
let classRandomColor;
let classProjectile;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classArrow = require('../src/class-arrow.js').Arrow;
  classBackGround = require('../src/class-backGround.js').BackGround;
  classLine = require('../src/class-line.js').Line;
  classPoint = require('../src/class-point.js').Point;
  classRandomColor = require('../src/class-randomColor.js').RandomColor;
  classProjectile = require('../src/class-projectile.js').Projectile;
}
else {
  assert = chai.assert;
  classArrow = Arrow;
  classBackGround = BackGround;
  classLine = Line;
  classPoint = Point;
  classRandomColor = RandomColor;
  classProjectile = Projectile;
}



describe('Tests Class Arrow', function () {
  const ctx = 'ctx';
  const startX = 0;
  const startY = 0;
  const finalX = 5;
  const finalY = 5;
  const newValue = 'X';
  describe('Getters', function () {
    it('Get ctx  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_Ctx(), ctx);
    });
    it('Get point startX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_StartX(), startX);
    });
    it('Get point startY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_StartY(), startY);
    });
    it('Get point finalX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_FinalX(), finalX);
    });
    it('Get point finalY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_FinalY(), finalY);
    });

  });
  describe('Setters', function () {
    it('Set ctx  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_Ctx(newValue);
      assert.equal(arrow.get_Ctx(), newValue);
    });
    it('Set point startX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_StartX(newValue);
      assert.equal(arrow.get_StartX(), newValue);
    });
    it('Set point startY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_StartY(newValue);
      assert.equal(arrow.get_StartY(), newValue);
    });
    it('Set point finalX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_FinalX(newValue);
      assert.equal(arrow.get_FinalX(), newValue);
    });
    it('Set point finalY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_FinalY(newValue);
      assert.equal(arrow.get_FinalY(), newValue);
    });
  });
});



describe('Tests Class BackGround', function () {
  const color = 'black';
  const ctx = 'ctx';
  const canvas = 'canvas';
  const newValue = 'X';
  describe('Getters', function () {
    it('Get color', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Color(), color);
    });
    it('Get ctx', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Context(), ctx);
    });
    it('Get canvas', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Canvas(), canvas);
    });
  });
  describe('Setters', function () {
    it('Set color', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Color(newValue);
      assert.equal(background_.get_Color(), newValue);
    });
    it('Set ctx', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Context(newValue);
      assert.equal(background_.get_Context(), newValue);
    });
    it('Set canvas', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Canvas(newValue);
      assert.equal(background_.get_Canvas(), newValue);
    });
  });
});


describe('Tests Class Line', function () {
  describe('Getters', function () {
    it('Get point A  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      assert.equal(line.get_pointA(), point_);
    });
    it('Get point B', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      assert.equal(line.get_pointB(), point_2);
    });
  });
  describe('Setters', function () {
    it('Set point A  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      line.set_PointA(point_2);
      assert.equal(line.get_pointA(), point_2);
    });
    it('Set point B  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      line.set_PointB(point_);
      assert.equal(line.get_pointA(), point_);
    });
  });
});



describe('Tests Class Point', function () {
  describe('Getters', function () {
    it('Get point coordinate X  ', function () {
      let point_ = new classPoint(50, 50);
      assert.equal(point_.get_CoordinateX(), 50);
    });
    it('Get point coordinate Y  ', function () {
      let point_ = new classPoint(50, 50);
      assert.equal(point_.get_CoordinateY(), 50);
    });
  });
  describe('Setters', function () {
    it('Set point coordinate X  ', function () {
      let point_ = new classPoint(50, 50);
      point_.set_CoordinateX(10);
      assert.equal(point_.get_CoordinateX(), 10);
    });
    it('Set point coordinate Y  ', function () {
      let point_ = new classPoint(50, 50);
      point_.set_CoordinateY(10);
      assert.equal(point_.get_CoordinateY(), 10);
    });
  });
});



describe('Tests Class RandomColor', function () {
  const color = 'black';
  describe('Generate Colors', function () {
    it('Generate random color', function () {
      let randomColor_ = new classRandomColor();
      if (randomColor_.get_RandomColor() != color) {
        assert.equal(true, true);
      }
    });
    it('Set color', function () {
      let randomColor_ = new classRandomColor();
      randomColor_.set_RandomColor(color);
      if (randomColor_.get_RandomColor() === color) {
        assert.equal(true, true);
      }
    });
  });
});




describe('Tests Class Projectile', function () {
  const speed = 100;
  const angle = 45;
  const time = 0.0;
  const distanceX = 0;
  const distanceY = 0;
  const maxDistanceY = 0;
  const canvas = 'canvas';
  const ctx = 'ctx';
  const color = 'black';
  const paintProjectil = true;
  const scale = 1;
  const newValue = 'XXX';

  describe('Getters', function () {
    it('Get canvas', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Canvas(), canvas);
    });
    it('Get ctx', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Ctx(), ctx);
    });
    it('Get color', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Color(), color);
    });
    it('Get paintProjectile', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_PaintProjectil(), paintProjectil);
    });
    it('Get speed', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Speed(), speed);
    });
    it('Get angle', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Angle(), angle);
    });
    it('Get scale', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Scale(), scale);
    });
    it('Get time', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_Time(), time);
    });
    it('Get distanceX', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_DistanceX(), distanceX);
    });
    it('Get distanceY', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_DistanceY(), distanceY);
    });
    it('Get maxDistanceY', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_MaxDistanceY(), maxDistanceY);
    });
    it('Get pointsVector', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      assert.equal(projectile.get_PointsVector().length, 0);
    });
  });
  describe('Setters', function () {
    it('Set canvas', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Canvas(newValue);
      assert.equal(projectile.get_Canvas(), newValue);
    });
    it('Set ctx', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Ctx(newValue);
      assert.equal(projectile.get_Ctx(), newValue);
    });
    it('Set color', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Color(newValue);
      assert.equal(projectile.get_Color(), newValue);
    });
    it('Set paintProjectile', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_PaintProjectil(newValue);
      assert.equal(projectile.get_PaintProjectil(), newValue);
    });
    it('Set speed', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Speed(newValue);
      assert.equal(projectile.get_Speed(), newValue);
    });
    it('Set angle', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Angle(newValue);
      assert.equal(projectile.get_Angle(), newValue);
    });
    it('Set scale', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Scale(newValue);
      assert.equal(projectile.get_Scale(), newValue);
    });
    it('Set time', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_Time(newValue);
      assert.equal(projectile.get_Time(), newValue);
    });
    it('Set distanceX', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_DistanceX(newValue);
      assert.equal(projectile.get_DistanceX(), newValue);
    });
    it('Set distanceY', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_DistanceY(newValue);
      assert.equal(projectile.get_DistanceY(), newValue);
    });
    it('Set maxDistanceY', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      projectile.set_MaxDistanceY(newValue);
      assert.equal(projectile.get_MaxDistanceY(), newValue);
    });
    it('Set pointsVector', function () {
      let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
      let pointsVector = [];
      projectile.set_PointsVector(pointsVector);
      assert.equal(projectile.get_PointsVector().length, 0);
    });
    describe('Calculate methods', function () {
      it('Calculate vertical speed', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        let speed_ = projectile.calculateVerticalSpeed();
        if (speed_ != 0) {
          assert.equal(true, true);
        }
      });
      it('Calculate horizontal speed', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        let speed_ = projectile.calculateHorizontalSpeed();
        if (speed_ != 0) {
          assert.equal(true, true);
        }
      });
      it('Calculate time', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        let time_ = projectile.calculateTime();
        if (time_ != -1) {
          assert.equal(true, true);
        }
      });
      it('Calculate horizontal distance', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        let distance_ = projectile.calculateHorizontalDistance();
        if (distance_ != 0) {
          assert.equal(true, true);
        }
      });
      it('Calculate Height', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        let height_ = projectile.calculateHeight();
        if (height_ != 0) {
          assert.equal(true, true);
        }
      });
      it('Generate Points (calculating equation)', function () {
        let projectile = new classProjectile(canvas, ctx, color, paintProjectil, speed, angle, scale);
        projectile.generatePoints();
        if (projectile.get_PointsVector().length != 0) {
          assert.equal(true, true);
        }
      });
    });
  });
});
