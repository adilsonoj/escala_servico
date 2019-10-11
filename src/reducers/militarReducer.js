const initialState = {
    militarAtivo: ''
  };
  
  export const changeMilitarAtivo = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_MILITAR_ATIVO':
        return {
          ...state,
          militarAtivo: action.militarAtivo
        };
      default:
        return state;
    }
  };