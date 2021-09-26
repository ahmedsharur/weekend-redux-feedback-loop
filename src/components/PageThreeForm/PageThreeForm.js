import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
function PageThreeForm(){
    const [support, setSupport] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePageThreeNext = event => {
        event.preventDefault();
        console.log('add support', support);
        // Send data to redux
        const action = {
            type: 'SET_ADD_SUPPORT',
            payload: support
        }
        dispatch(action);
        history.push('/comments')
    }
    return (

        <form onSubmit={handlePageThreeNext} className={"nextPageThree"}>
                    <h1> How well are you being supported?</h1>
                <p>Support?</p>
                <input 
                type="text"
                placeholder ="support" 
                value={support}
                onChange={(event) => setSupport(event.target.value)}
                />
                    <button type ="next"> Next</button>
        </form>

    )
}

export default PageThreeForm;