import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PageOneForm (){
    const [feeling, setFeeling] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePageOneNext = event => {
        event.preventDefault();

        console.log('add feeling', feeling);

        //Send data to Redux
        const action = {
            type: 'SET_ADD_FEELING',
            payload: feeling
        }
        dispatch(action)
        history.push('/understanding')
    }
    return (
        <form onSubmit={handlePageOneNext} className="nextPageOne">
    <h1> How are you feeling today?</h1>
    <p>Feeling? </p>
    <input 
    required
    placeholder ="feeling" 
    value={feeling}
    onChange={(event) => setFeeling(event.target.value)}/>
        <button type="next"> Next </button>
        </form>
    ) 
}


export default PageOneForm;