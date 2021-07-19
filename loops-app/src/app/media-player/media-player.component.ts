import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  public loops: any[];
  public currentLoops: any[];

  constructor() {
    this.loops = new Array();
    this.currentLoops = new Array();
    // this will read all the loop names and add their image and loops
    fetch('assets/playlist.txt')
      .then((response) => response.text())
      .then((data) => {
        var loopsNames = data.split(',');
        for (var i = 0; i < loopsNames.length; i++) {
          var sound = new Howl({
            src: ['assets/loops/' + loopsNames[i] + '.mp3'],
            loop: true,
          });

          this.loops[i] = {
            name: loopsNames[i],
            imgSrc: 'assets/images/' + loopsNames[i] + '.jfif',
            soundTrack: sound,
            isActive: false,
          };
        }
      });
  }
// this will control the pads
  public controlMediaPlayer(padLoop) {
    // this will check if we press stop it will stop the playing loop
    if (!padLoop.isActive) {
      padLoop.soundTrack.stop();
      this.currentLoops?.map((pad) => {
        if (pad == padLoop) {
          this.currentLoops.pop();
        }
      });
    // this will check if nothing playing and will play some new loop
    } else if (this.currentLoops.length == 0 && padLoop.isActive) {
      padLoop.soundTrack.play();
      //the loop will be added to the next loop array
      this.currentLoops.push(padLoop);
      // when the loop will end it will play the next loop playlist
      padLoop.soundTrack.on('end', () => {
        this.currentLoops?.map((currentLoop) => {
          if (currentLoop != padLoop && currentLoop.isActive) {
            currentLoop.soundTrack.play();
          }
        });
      });
    } 
    // this will add the loop on the next loop sync
    else if (padLoop.isActive) {
      if (!this.currentLoops.includes(padLoop)) {
        this.currentLoops.push(padLoop);
        // when the loop will end it will play the next loop playlist
        padLoop.soundTrack.on('end', () => {
          this.currentLoops?.map((currentLoop) => {
            if (currentLoop != padLoop && currentLoop.isActive) {
              currentLoop.soundTrack.play();
            }
          });
        });
      }
    }
  }

}

