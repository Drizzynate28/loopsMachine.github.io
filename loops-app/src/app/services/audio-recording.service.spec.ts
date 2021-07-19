import { TestBed } from '@angular/core/testing';

import { AudioRecordingService } from '../services/audio-recording.service';

describe('AudioRecorderService', () => {
  let service: AudioRecordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioRecordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
