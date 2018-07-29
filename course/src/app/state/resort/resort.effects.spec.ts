import { TestBed } from '@angular/core/testing';
import { ResortEffects } from './resort.effects';

describe('ResortEffects', () => {
  // todo: define actions observable
  let effects: ResortEffects;
  // todo: define resortService object

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResortEffects
        // todo: provide ResortService mock
        // todo: use provideMockActions to provide mock actions observable
      ]
    });

    // todo: set actions observable
    effects = TestBed.get(ResortEffects);
    // todo: set resetService object
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // todo: test closeDialogOnSelect

  // todo: test search

  // todo: test setMapZoom
});
