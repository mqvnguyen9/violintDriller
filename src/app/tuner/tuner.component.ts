import { Component, OnInit } from '@angular/core';
import { AudioContext,  } from 'angular-audio-context';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.css']
})
export class TunerComponent implements OnInit {

  private static readonly G_NOTE = 196.0;
  private static readonly D_NOTE = 293.7;
  private static readonly A_NOTE = 440.0;
  private static readonly E_NOTE = 659.3;

  private oscillatorNode: any;

  private hasStarted = false;

  private previousId = 0;

  constructor(private _audioContext: AudioContext) { }

  ngOnInit() {
    this.oscillatorNode = this._audioContext.createOscillator();

    this.oscillatorNode.onended = () => this.oscillatorNode.disconnect();
    this.oscillatorNode.connect(this._audioContext.destination);
  }

  public async playNote(id) {
    if (!this.hasStarted) {
      this.oscillatorNode.start();
      this.hasStarted = !this.hasStarted;
    }
    if (this.previousId === id) {
      this._audioContext.suspend();
      this.previousId = 0;
    } else {
      switch (id) {
        case 1: {
          this.oscillatorNode.frequency.setValueAtTime(TunerComponent.G_NOTE, this._audioContext.currentTime);
          break;
        }
        case 2: {
          this.oscillatorNode.frequency.setValueAtTime(TunerComponent.D_NOTE, this._audioContext.currentTime);
          break;
        }
        case 3: {
          this.oscillatorNode.frequency.setValueAtTime(TunerComponent.A_NOTE, this._audioContext.currentTime);
          break;
        }
        case 4: {
          this.oscillatorNode.frequency.setValueAtTime(TunerComponent.E_NOTE, this._audioContext.currentTime);
          break;
        }
      }
      this._audioContext.resume();
      this.previousId = id;
    }
    // oscillatorNode.stop(this._audioContext.currentTime + 0.5);
  }

}
