import { CloseDialogs, OpenDialog } from './dialog.actions';
import { initialState, reducer } from './dialog.reducer';

describe('Sidenav Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('CloseDialogs', () => {
    it('should set the opened property to false', () => {
      const action = new CloseDialogs();
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        opened: false
      });
    });
  });

  describe('ShowDialog', () => {
    it('should set the opened property to true', () => {
      const action = new OpenDialog(jest.fn());
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        opened: true
      });
    });
  });
});
