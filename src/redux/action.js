import axios from "axios";

export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_DATA_REQUEST'});
        axios
            .get('http://api.openweathermap.org')
            .then((response) => {
                dispatch({type: 'FETCH_DATA_SUCCESS', payload: response.data},);
            })
            .catch((error) => {
                dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message,});
            })
    }
}