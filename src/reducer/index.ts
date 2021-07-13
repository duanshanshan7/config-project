import { UPDATE_CARD_INFO } from "constant";

const initState: IReduxState = {
  cardInfo: {
    cardNumber: 1,
    cardType: "招商",
    cardAmount: 500,
  },
};

const reducer = (state = initState, action: IReduxAction): IReduxState => {
  switch (action.type) {
    case UPDATE_CARD_INFO:
      return {
        ...state,
        cardInfo: action.playload,
      };

    default:
      return state;
  }
};

export default reducer;
