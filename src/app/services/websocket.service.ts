import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Connect to server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnect to server');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  // return an observable
  listen(event: string) {
    return this.socket.fromEvent(event);
  }
}
