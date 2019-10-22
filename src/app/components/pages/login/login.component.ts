import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';

  constructor(public wsService: WebsocketService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.wsService
      .login(this.userName)
      .then(resp => this.router.navigateByUrl('/messages'))
      .catch(err => console.log(err));
  }
}
