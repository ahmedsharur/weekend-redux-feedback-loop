import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewFeedback(){
    const reviewFeedback = useSelector(store => store);

    const dispatch = useDispatch();
    const history = useHistory ();

    //GET Review Feedback from the server

    useEffect(() => {
        fetchReviewFeedback();
    }, [])

    // const fetchReviewFeedback = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/feedback',
    //     }).then(response => {
    //         console.log(response.data);
    //         dispatch({
    //         type: 'SET_REVIEW_FEEDBACK',
    //         payload: response.data,
    //         })
    //     }).catch(error => {
    //         console.log('in fetchReviewFeedback', error)
    //     });
    
    // }
    return (
        
        <h1> Review Your Feedback</h1>
        
    )
}

export default ReviewFeedback;