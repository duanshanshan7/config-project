import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCardInfo } from "actions";
import "./index.scss";

const Home = (): ReactElement => {
  const { cardInfo } = useSelector((state: IReduxState) => state);
  const dispatch = useDispatch();
  // console.log(state);

  const handleUpdateCardInfo = () => {
    dispatch(
      updateCardInfo({
        cardAmount: 1000,
      })
    );
  };
  return (
    <div>
      <div className="box">{cardInfo.cardAmount}</div>
      <button onClick={handleUpdateCardInfo}>点击</button>
    </div>
  );
};

export default Home;
