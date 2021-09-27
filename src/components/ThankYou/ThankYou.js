import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function ThankYou() {
    const dispatch = useDispatch();
    const history = useHistory();
  const backToFeeling = () => {
    const action = {
      type: "SET_BACK_TO_FEELING",
      payload: null,
    };
    dispatch(action);
    history.push("/feeling");
  };

  return (
    <>
      <h1> Thank You!</h1>
      <button onClick={backToFeeling}> Leave New Feedback</button>
    </>
  );
}

export default ThankYou;
