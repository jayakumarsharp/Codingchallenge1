import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { TwoDigitDecimaNumberDirective } from './DecimalDirective';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from './app.service';
import { Observable } from 'rxjs/Observable'; 


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    TwoDigitDecimaNumberDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
