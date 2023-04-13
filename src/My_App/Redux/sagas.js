import { genreMap } from "../../Genre"
import { put, take, takeLatest, call, all } from "redux-saga/effects"
import {
    fetchMoviesSuccess,
    fetchMoviesError,
    fetchMovieDetailSuccess,
    fetchMovieDetailError,
    fetchPersonDetailSuccess,
    fetchPersonDetailError
} from "./actions"
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_PERSON_DETAIL_REQUEST
} from "./constants"
import iso6391 from 'iso-639-1';
import axios from "axios"


function* fetchPopularMovies() {
    try {
        const response = yield call(axios.get, `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=popularity.desc&primary_release_year=2023`)
        const movies = response.data.results
        let movieData = movies.map((movie) => ({
            ...movie,
            poster_path: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            backdrop_path: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
            genre_ids: movie.genre_ids.map((genre) => genreMap[genre])
        }))
        yield put(fetchMoviesSuccess(movieData))
    } catch (error) {
        yield put(fetchMoviesError(error))
    }
}


function* fetchMovieDetail(movieId) {
    try {
        const response = yield call(axios.get, `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=credits,reviews,articles,similar,videos`)
        const movieDetail = response.data
        const { credits: { cast, crew } } = movieDetail
        let movieData = {
            ...movieDetail,
            poster_path: "https://image.tmdb.org/t/p/w500" + movieDetail.poster_path,
            backdrop_path: "https://image.tmdb.org/t/p/w500" + movieDetail.backdrop_path,
            genres: movieDetail.genres.map((genre) => genre.name),
            original_language: iso6391.getName(movieDetail.original_language),
            credits: {
                cast: cast.filter((item) => item.profile_path !== null),
                crew: crew
            }
        }
        yield put(fetchMovieDetailSuccess(movieData))
    } catch (error) {
        yield put(fetchMovieDetailError(error))
    }
}


function* fetchPersonDetail(personId) {
    try {
        const response = yield call(axios.get, `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
        const personDetail = response.data
        let personData = {
            ...personDetail,
            profile_path: "https://image.tmdb.org/t/p/w500" + personDetail.profile_path,
        }
        yield put(fetchPersonDetailSuccess(personData))

    } catch (error) {
        yield put(fetchPersonDetailError(error))
    }
}


function* watchFetchMovieDetail() {
    while (true) {
        const action = yield take(FETCH_MOVIE_DETAIL_REQUEST)
        const movieId = action.payload
        yield call(fetchMovieDetail, movieId)
    }
}

function* watchFetchPersonDetail() {
    while (true) {
        const action = yield take(FETCH_PERSON_DETAIL_REQUEST)
        const personId = action.payload
        yield call(fetchPersonDetail, personId)
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(FETCH_MOVIES_REQUEST, fetchPopularMovies),
        watchFetchMovieDetail(),
        watchFetchPersonDetail()
    ])
}


// https://api.themoviedb.org/3/movie/603692?api_key=583d43563d202f1e6dd6e28704ca9624&language=en-US&append_to_response=credits,reviews,articles,similar,videos

// https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=YOUR_API_KEY&session_id=YOUR_SESSION_ID