import { SetMapZoom } from './map.actions';
import { initialState, reducer } from './map.reducer';

describe('Sidenav Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('SetMapZoom', () => {
    it('should set the opened property to false', () => {
      const zoom = 10;
      const action = new SetMapZoom(zoom);
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        zoom
      });
    });
  });
});
