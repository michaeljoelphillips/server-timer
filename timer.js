class Timer {
  value = 0;
  interval;
  status_;
  timer;

  constructor(server, status_, timer) {
    this.status_ = status_;
    this.timer = timer;

    server.onTimerStart(() => this.start());
    server.onTimerStop(() => this.stop());
  }

  start() {
    this.countdown();

    setTimeout(() => this.interval = setInterval(() => this.tick(), 10), 4000);
  }

  countdown() {
    this.status_.innerHTML = 'Get Ready!';

    setTimeout(() => this.status_.innerHTML = 3, 1000);
    setTimeout(() => this.status_.innerHTML = 2, 2000);
    setTimeout(() => this.status_.innerHTML = 1, 3000);
    setTimeout(() => this.status_.innerHTML = 'Go!', 4000);

  }

  tick() {
    this.value += 10;

    this.timer.innerHTML = (this.value / 1000).toFixed(2);
  }

  stop() {
    this.value = 0;

    clearInterval(this.interval);
  }
}
