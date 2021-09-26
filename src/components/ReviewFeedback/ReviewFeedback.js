import {useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react'

function ReviewFeedback(){
const feedbackToAdd = useSelector(store => store)
const history = useHistory();

//GET Review Feedback from the server
useEffect(() => {
    fetchReviewFeedback();
}, [])
const fetchReviewFeedback = () => {
    axios({
        method: 'GET',
        url: '/feedback',
    }).then(response => {
        console.log(response.data);
        dispatch({
        type: 'SET_REVIEW_FEEDBACK',
        payload: response.data,
        })
    }).catch(error => {
        console.log('in fetchReviewFeedback', error)
    });
}
const sendFeedbackToServer = () => {
    axios({
        method: 'POST',
        url: '/feedback',
        data: feedbackToAdd,
    }).then(response => {
        console.log(response.data)
        fetchReviewFeedback();
        history.push('/thankyou')
    }).catch(error => {
        console.log('in sendServerToAdd', error)
    })
}
    return (
        <div>
        <h1> Review Your Feedback</h1>
        <p> </p>
        <p> Feelings:{feedbackToAdd.feelingToAddReducer}</p>
        <p>Understanding:{feedbackToAdd.understandingToAddReducer} </p>
        <p> Support: {feedbackToAdd.supportToAddReducer}</p>
        <p> Comments: {feedbackToAdd.commentsToAddReducer}</p>
        <button onClick={sendFeedbackToServer}> Submit</button>
        </div>
    )
}

export default ReviewFeedback;