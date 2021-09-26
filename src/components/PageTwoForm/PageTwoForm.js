import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PageTwoForm(){
    const [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePageTwoNext = event => {
        event.preventDefault();
        console.log('add understanding', understanding)
        // send data to Redux
    const action = {
        type: 'SET_ADD_UNDERSTANDING'
    }
    dispatch(action)
    history.push('/support')
    }
    
    return (
        <form onSubmit={handlePageTwoNext} className={"nextPageTwo"}> 
                <h1> How well are you understanding the content?</h1>
                <p>understanding?</p>
                <input 
                type="text"
                placeholder ="understanding" 
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
                />
                    <button type ="next"> Next</button>
        </form>
    );
}



export default PageTwoForm;