import React from "react";
import { useSelector } from "react-redux";
import MoviesHoverCard from "../MoviesHoverCard";
import Footer from "../Footer";
import "./style.css";
// import Skeleton from "react-loading-skeleton";

function Content() {

    const data = useSelector(state => state.popularMoviesLatest);


    return (
        <>
            <div className="movies_div" >
                {/* <Skeleton count={5} /> */}
                <div style={{ marginBottom: "70px" }}>
                    <h1 className="trending_movies_latest" id="trending_movies_scroll">Trending Movies</h1>
                </div>
                <div className="image_poster">
                    {data.map((movie, index) => {
                        return (
                            <MoviesHoverCard index={index} movie={movie} />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Content;
