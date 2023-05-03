import { PortalAuthService, PortalAuthState } from '@3shapeinternal/portal-authentication';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get user(): string {
    return this.authState.authState?.userInfo?.firstName + ' ' + this.authState.authState?.userInfo?.lastName;
  }

  constructor(
    private readonly authService: PortalAuthService,
    private readonly authState: PortalAuthState,
  ) {}

  login(): void {
    this.authService.startAuthentication();
  }

  logout(): void {
    if (this.authState.authState?.isAuthenticated) {
      this.authService.logout().subscribe();
    } else {
      this.authService.startAuthentication();
    }
  }
}
