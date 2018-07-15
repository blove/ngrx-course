import { DialogAction, DialogActionTypes } from './dialog.actions';

export interface State {
  opened: boolean;
}

export const initialState: State = {
  opened: false
};

export function reducer(state = initialState, action: DialogAction): State {
  switch (action.type) {
    case DialogActionTypes.CloseDialogs:
      return {
        ...state,
        opened: false
      };
    case DialogActionTypes.OpenDialog:
      return {
        ...state,
        opened: true
      };
    default:
      return state;
  }
}
