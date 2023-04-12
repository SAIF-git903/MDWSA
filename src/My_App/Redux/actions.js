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


// actions for Home page posters
export const fetchMoviesRequest = () => ({
    type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});

export const fetchMoviesError = (error) => ({
    type: FETCH_MOVIES_ERROR,
    payload: error,
});



// actions for Movie Details
export const fetchMovieDetailsRequest = (movieId) => ({
    type: FETCH_MOVIE_DETAIL_REQUEST,
    payload: movieId,
});

export const fetchMovieDetailSuccess = (movieData) => ({
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: movieData,
});

export const fetchMovieDetailError = (error) => ({
    type: FETCH_MOVIE_DETAIL_ERROR,
    payload: error,
});


// actions for Person Details
export const fetchPersonDetailsRequest = (personId) => ({
    type: FETCH_PERSON_DETAIL_REQUEST,
    payload: personId,
});

export const fetchPersonDetailSuccess = (personData) => ({
    type: FETCH_PERSON_DETAIL_SUCCESS,
    payload: personData,
});

export const fetchPersonDetailError = (error) => ({
    type: FETCH_PERSON_DETAIL_ERROR,
    payload: error,
});