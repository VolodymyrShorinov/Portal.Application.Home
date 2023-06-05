import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortalAuthModule } from '@3shapeinternal/portal-authentication';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortalAuthModule.forRoot({
      oidcConfig: {
        identityServerUrl: 'https://staging-identity.3shape.com',
        clientId: 'portal_preview',
        responseType: 'code',
        scope:
          'openid api data.users.manage data.companies.manage ' +
          'treatmentreview.orderformservice.manage treatmentreview.proposalfeedbackservice.manage ' +
          'treatmentreview.modelservice.manage communicate.connections.manage',
        redirectUri: `${window.location.protocol}//${window.location.host}/auth-callback`,
        postLogoutRedirectUri: `${window.location.protocol}//${window.location.host}/login`,
        hasSilentRefresh: true,
        silentRefreshRedirectUri: `${window.location.protocol}//${window.location.host}/silent-refresh.html`,
        timeoutFactor: 0.8,
      },
      loginRouterPath: '/login',
      postLoginUrlSessionKey: 'redirectURL',
      logoutSesionTime: 15,
      syncTokenUrl:
        'https://we-portal-sync-access-service-as.azurewebsites.net/v1/api/GetJwtToken',
      wrongClientTimeErrorUrl: `${window.location.protocol}//${window.location.host}/wrongcomputertime`,
      basePath: '/',
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
