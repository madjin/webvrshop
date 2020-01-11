room.registerElement('strobelight', {
  bpm: 125,
  light_intensity: 40,
  create() {
    this.light = this.createObject('light', {
      col: this.col,
      light_shadow: true,
      light_intensity: 0,
      light_range: 30
    });
  },
  update() {
    this.light.light_intensity = (Math.sin(new Date().getTime() / (1000 / Math.PI / 2) * (this.bpm / 60)) + 1) * (this.light_intensity / 2);
  }
});
room.registerElement('laserprojector', {
  numlasers: 6,
  create() {
    this.lasers = [];
    for (let i = 0; i < this.numlasers; i++) {
      this.lasers[i] = this.createLaser();
    }
  },
  createLaser() {
    let container = this.createObject('object', {});
    let lightshaft = container.createObject('object', {
      id: 'cylinder',
      scale: V(.1, 20, .1),
      col: V(0,1,0),
      pos: V(0, 10, 0)
    });
    return container;
  },
  update(dt) {
    if (this.program) {
      this.program.update(this.lasers);
    }
  }
});
class LaserProgram {
  update(lasers) {
    for (let i = 0; i < lasers.length; i++) {
    }
  }
};

