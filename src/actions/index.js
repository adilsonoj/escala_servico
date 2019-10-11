//são criados as ações retornando um objeto com type e um valor(se necessario)
export const clickButton = value => ({
    type: 'CLICK_UPDATE_VALUE',
    newValue: value
  });

export const changeMilitarAtivo = value => ({
    type: 'CHANGE_MILITAR_ATIVO',
    militarAtivo: value
});