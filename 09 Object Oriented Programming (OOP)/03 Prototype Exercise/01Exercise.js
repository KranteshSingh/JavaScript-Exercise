function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, 'startTime', {
    get: function() {
      return startTime;
    }
  });

  Object.defineProperty(this, 'endTime', {
    get: function() {
      return endTime;
    }
  });

  Object.defineProperty(this, 'running', {
    get: function() {
      return running;
    }
  });

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(val) {
      duration = val;
    }
  });
}

Stopwatch.prototype.start = function() {
  if (this.running) throw new Error('Stopwatch is already running');

  this.running = true;
  startTime = new Date();
};

Stopwatch.prototype.stop = function() {
  if (!this.running) throw new Error('Stopwatch is not started');

  this.running = false;

  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  duration = 0;
};
let sw = new Stopwatch();

sw.duration = 567;

// Implementing this way is bad idea cuz we can simply modify the duration from out side
// It broke the Abstraction principle

// Premature optimization is the root of all evil
