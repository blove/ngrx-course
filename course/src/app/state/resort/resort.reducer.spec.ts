import { generateResort } from '@app/models/resort.model';
import {
  SearchResorts,
  SearchResortsFail,
  SearchResortsSuccess
} from './resort.actions';
import { initialState, reducer } from './resort.reducer';

describe('Sidenav Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('SearchResorts', () => {
    const q = 'test';

    it('should set the error property to null', () => {
      const action = new SearchResorts(q);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('error', null);
    });

    it('should set the loading boolean to true', () => {
      const action = new SearchResorts(q);
      const result = reducer(
        {
          ...initialState,
          searchResults: [generateResort()]
        },
        action
      );

      expect(result).toHaveProperty('loading', true);
    });

    it('should reset the searchResults array', () => {
      const action = new SearchResorts(q);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('searchResults', []);
    });
  });

  describe('SearchResortsFail', () => {
    const error = new Error('test');

    it('should set the error property', () => {
      const action = new SearchResortsFail(error);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('error', error);
    });

    it('should set the loading boolean to false', () => {
      const action = new SearchResortsFail(error);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('loading', false);
    });
  });

  describe('SearchResortsSuccess', () => {
    const resort = generateResort();

    it('should set the error property to null', () => {
      const action = new SearchResortsSuccess([resort]);
      const result = reducer(
        {
          ...initialState,
          error: new Error('test')
        },
        action
      );

      expect(result).toHaveProperty('error', null);
    });

    it('should set the loading boolean to false', () => {
      const action = new SearchResortsSuccess([resort]);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('loading', false);
    });

    it('should reset the searchResults array', () => {
      const action = new SearchResortsSuccess([resort]);
      const result = reducer(initialState, action);

      expect(result).toHaveProperty('searchResults', [resort]);
    });
  });
});
