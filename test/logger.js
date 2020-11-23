import EventEmitter from 'events';

const url = 'https://mylogger.io/log'

export class Logger extends EventEmitter {
  // Send HTTP Request
  log(message) {
    console.log(message)

    //Raise an event
    this.emit('logging', {data: message, id: 123, url})
  };
}

