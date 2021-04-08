class Server {
  constructor(host, port) {
    this.host = host;
    this.port = port;

    this.socket = new WebSocket('ws://localhost:8080');
  }

  onTimerStart(callback) {
    this.socket.addEventListener('message', function (event) {
      if (event.data === 'start') {
        callback(event);
      }
    });
  }

  onTimerStop(callback) {
    this.socket.addEventListener('message', function (event) {
      if (event.data === 'stop') {
        callback(event);
      }
    });
  }

  emitTimerStart() {
    this.socket.send('start');
  }

  emitTimerStop() {
    this.socket.send('stop');
  }
}
