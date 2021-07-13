declare interface ILoginParams {
  username: string;
  password: string;
}

declare interface IReduxAction {
  type: string;
  playload?: any;
}

declare interface ICardInfo {
  cardNumber: number;
  cardType: string;
  cardAmount: number;
}
declare interface IReduxState {
  cardInfo: ICardInfo;
}
