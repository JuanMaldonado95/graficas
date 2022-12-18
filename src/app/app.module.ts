import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';


// Graficos

import { NgChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';
import { PieComponent } from './components/pie/pie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolarareaComponent } from './components/polararea/polararea.component';
import { BurbujasComponent } from './components/burbujas/burbujas.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { DinamicaComponent } from './components/dinamica/dinamica.component';
import { WeatherComponent } from './components/weather/weather.component';
import { Weather2Component } from './components/weather2/weather2.component';
import { SidenavComponent } from './sidenav/sidenav.component';



import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent,
    PieComponent,
    PolarareaComponent,
    BurbujasComponent,
    ScatterComponent,
    DinamicaComponent,
    WeatherComponent,
    Weather2Component,
    SidenavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],

  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
