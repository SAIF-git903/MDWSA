import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_ERROR,
    FETCH_PERSON_DETAIL_REQUEST,
    FETCH_PERSON_DETAIL_SUCCESS,
    FETCH_PERSON_DETAIL_ERROR
} from "./constants";


const initalState = {
    popularMoviesLatest: [],
    movieDataWithId: [],
    personDataWithId: [],
    isLoading: false,
    error: null,
    personDetailsLoading: false
}

const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES_REQUEST:
        case FETCH_MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PERSON_DETAIL_REQUEST:
            return {
                ...state,
                personDetailsLoading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                popularMoviesLatest: payload
            }
        case FETCH_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movieDataWithId: payload,
            }
        case FETCH_PERSON_DETAIL_SUCCESS:
            return {
                ...state,
                personDetailsLoading: false,
                personDataWithId: payload,
            }
        case FETCH_MOVIES_ERROR:
        case FETCH_MOVIE_DETAIL_ERROR:
        case FETCH_PERSON_DETAIL_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        default:
            return state
    }
}

export default reducer