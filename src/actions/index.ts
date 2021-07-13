import { UPDATE_CARD_INFO } from "constant";

export const updateCardInfo = (info: ICardInfo): IReduxAction => ({
  type: UPDATE_CARD_INFO,
  playload: info,
});
