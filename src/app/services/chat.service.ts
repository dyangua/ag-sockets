import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  sendMessage(message: string) {
    const payload = {
      from: this.wsService.getUsuario().username,
      body: message
    };

    this.wsService.emit('message', payload);
  }

  getMessages() {
    return this.wsService.listen('new-message');
  }

  getMessagesPrivate() {
    return this.wsService.listen('message-private');
  }
}
