import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { AppRoutingModule } from './app-routing.module';
import { AudioRecordingService } from './services/audio-recording.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecorderComponent } from './recorder/recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    MediaPlayerComponent,
    RecorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers:[AudioRecordingService]
})
export class AppModule { }
