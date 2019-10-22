import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  public user: User = null;

  constructor(private socket: Socket) {
    this.loadStorage();
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
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

  login(name: string) {
    return new Promise((resolve, reject) => {
      this.emit('configUser', { name }, resp => {
        this.user = new User(name);
        this.saveStorage();
        resolve();
      });
    });
  }

  saveStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadStorage() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
    }
  }
}
