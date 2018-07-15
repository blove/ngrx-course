import { HideSidenav, ShowSidenav } from './sidenav.actions';
import { initialState, reducer } from './sidenav.reducer';

describe('Sidenav Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('HideSidenav', () => {
    it('should set the opened property to false', () => {
      const action = new HideSidenav();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        opened: false
      });
    });
  });

  describe('ShowSidenav', () => {
    it('should set the opened property to true', () => {
      const action = new ShowSidenav();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        opened: true
      });
    });
  });
});
