import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TunerComponent } from './tuner/tuner.component';
import {AudioContextModule} from 'angular-audio-context';
import {AudioContextProxy} from 'angular-audio-context/build/es2018/audio-context-proxy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TunerComponent
  ],
  imports: [
    BrowserModule,
    AudioContextModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [AudioContextProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
