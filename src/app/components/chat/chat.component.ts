import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  text: string;
  time: 50;
  element: HTMLElement;
  messages: any[] = [];
  messagesSuscripton: Subscription;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.element = document.getElementById('chat-message');
    this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, this.time);
    });
  }

  ngOnDestroy() {
    this.messagesSuscripton.unsubscribe();
  }

  send() {
    this.chatService.sendMessage(this.text);
    this.text = '';
  }
}
