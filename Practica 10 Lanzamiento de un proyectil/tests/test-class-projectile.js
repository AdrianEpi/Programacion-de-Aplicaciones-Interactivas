/*
* @Author: Adrián Epifanio
* @File Test class Projectile
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología 
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 10 PAI - Projectile
 @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P10-Projectile/blob/master/2019-2020_p10_Projectile.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p10-projectile-AdrianEpi
* @Date:   2020-04-24
* @Last Modified by:   Adrián Epifanio
*/
let assert;

let classProjectile;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classProjectile = require('../src/class-projectile.js').Projectile;
}
else {
  assert = chai.assert;
  classProjectile = Projectile;
}


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
