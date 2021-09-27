import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handlePageFourNext = (event) => {
    event.preventDefault();
    console.log("add comments");
    // Send data to Redux
    const action = {
      type: "SET_ADD_COMMENTS",
      payload: comments,
    };
    dispatch(action);
    history.push("/review");
  };
  return (
    <form onSubmit={handlePageFourNext} className={"nextPageFour"}>
      <h1> Any comments you want to leave?</h1>
      <p>Comments?</p>
      <input
        type="text"
        placeholder="comments"
        value={comments}
        onChange={(event) => setComments(event.target.value)}
      />
      <button type="next"> Next</button>
    </form>
  );
}

export default Comments;
