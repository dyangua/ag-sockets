import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {
  constructor(public wsService: WebsocketService, private router: Router) {}
  canActivate() {
    if (this.wsService.getUsuario() && this.wsService.getUsuario().username) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
