import 'react-loading-skeleton/dist/skeleton.css'
import 'react-tabs/style/react-tabs.css';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaStar } from "react-icons/fa";
import { BiPlay } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { fetchPersonDetailsRequest } from '../../Redux/actions';
import MovieDetailSkeleton from '../../Components/Skeleton/MovieDetailSkeleton';
import PersonDetailSkeleton from '../../Components/Skeleton/PersonDetailSkeleton';
import MoviesHoverCard from '../../Components/MoviesHoverCard';
import ReadMoreReadLess from '../../Components/ReadMoreReadLess';
import Modal from 'react-modal';
import "./style.css"
import LoginSignupPopup from '../../Components/Auth Form';
import LoginSignupForm from '../../Components/Auth Form';

function MovieDetail() {

  const movie_detail = useSelector(state => state.movieDataWithId);
  const isLoading = useSelector(state => state.isLoading)
  const personData = useSelector(state => state.personDataWithId)
  const personData_isLoading = useSelector(state => state.personDetailsLoading)


  const [activeTab, setActiveTab] = useState(0);
  const [sideModal, setSideModal] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isAuthModalOpen, setAuthModal] = React.useState(false);


  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(movie_detail)

  useEffect(() => {
    console.log("Navigation Changes")
    return () => movie_detail
  }, [navigate, personData_isLoading])


  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);


  function findTrailer() {
    const trailer = movie_detail.videos.results.find((filmVideo) => filmVideo.type == "Trailer")
    return `https://www.youtube.com/embed/${trailer?.key}`;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function sideModalOpen() {
    setSideModal(true);
  }

  function sideModalClose() {
    setSideModal(false);
  }

  // ////////////////////
  function authModalOpen() {
    setAuthModal(true);
  }

  function authModalClose() {
    setAuthModal(false);
  }
  // /////////////////////

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function searchOnGoogle(text) {
    console.log("Clicking")
    var searchText = text.replace(/\s+/g, '+');
    var searchUrl = 'https://www.google.com/search?q=' + searchText;
    window.open(searchUrl, '_blank');
  }

  return (
    <div className='movies_div'>
      {
        isLoading ? <MovieDetailSkeleton /> : <div className="detail_poster_div">
          <div className='movie-detail-flex1'>
            <img src={movie_detail.poster_path} className="movie_detail_poster_img" />
            <div style={{ color: "white", display: "flex", gap: "10px", backgroundColor: "red", borderRadius: "10px", cursor: "pointer" }} className="centered" onClick={openModal}>
              <h4>Watch Trailer</h4>
              <BiPlay size={30} />
            </div>
            <div style={{ display: "flex", gap: "10px", backgroundColor: "goldenrod", borderRadius: "10px", cursor: "pointer", marginTop: "5px" }} className="centered" onClick={authModalOpen}>
              <h4>Sign In To Log</h4>
              <FiUsers size={20} className="nav_icon" color="black" />
            </div>
          </div>
          <div className='movie-detail-flex2'>
            <h2>{movie_detail.original_title}</h2>
            <h4>{movie_detail.tagline}</h4>
            <p>{movie_detail.overview}</p>
            <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
              <TabList>
                <Tab>Cast</Tab>
                <Tab>Crew</Tab>
                <Tab>Details</Tab>
                <Tab>Genres</Tab>
              </TabList>
              <TabPanel>
                <p className='cast_original_name'>
                  {
                    movie_detail.credits.cast.map((castedPerson) => {
                      return (
                        <a
                          key={castedPerson.id}
                          className='cast_person_link' onClick={() => {
                            sideModalOpen()
                            dispatch(fetchPersonDetailsRequest(castedPerson.id))
                          }}>
                          {castedPerson.original_name}
                        </a>
                      )
                    })
                  }
                </p>
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel>
                <div className='tab-crew'>
                  <h3 className='tab-crew-headings'>
                    <span className='crew-heading'>{"Studios"}</span>
                  </h3>
                  <p className='cast_original_name'>
                    {
                      movie_detail.production_companies.map((country, i) => {
                        return (
                          <p
                            key={i}
                            className='cast_person_link'>
                            {country.name}
                          </p>
                        )
                      })
                    }
                  </p>
                </div>

                {!movie_detail.production_countries.length && <div className='tab-crew'>
                  <h3 className='tab-crew-headings'>
                    <span className='crew-heading'>{"Country"}</span>
                  </h3>
                  <p className='cast_original_name'>
                    {
                      movie_detail.production_countries.map((studios, i) => {
                        return (
                          <a
                            key={i}
                            href="#" className='cast_person_link'>
                            {studios.name}
                          </a>
                        )
                      })
                    }
                  </p>
                </div>}
              </TabPanel>

              {/* TAB -----------> 04 */}
              <TabPanel>
                <div className='tab-crew'>
                  <h3 className='tab-crew-headings'>
                    <span className='crew-heading'>{"Genre"}</span>
                  </h3>
                  <p className='cast_original_name'>
                    {
                      movie_detail.genres.map((genre, i) => {
                        return (
                          <p
                            key={i}
                            className='cast_person_link'>
                            {genre}
                          </p>
                        )
                      })
                    }
                  </p>
                </div>

              </TabPanel>

            </Tabs>
            {
              movie_detail.reviews.results.length > 0 &&
              <div className='reviews_div'>
                <h3>Audience Reviews</h3>
                <hr style={{ marginTop: "-10px" }} />
                <div className='review_card_container'>
                  {
                    movie_detail.reviews.results.map((review, index) => {
                      return (
                        <>
                          <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}
                            key={index}
                          >
                            <img src={`https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg`} className="review-avatar-img" />
                            <div>
                              <div style={{ display: "flex", marginLeft: "10px" }}>
                                <p style={{ marginTop: "-1px", marginTop: "5px", fontSize: "15px" }}>Review By</p>
                                <h5 style={{ marginTop: "-1px", marginTop: "5px", marginLeft: "2px", fontSize: "15px" }}>{review.author_details.username}</h5>
                                <div style={{ marginTop: "4px", display: "flex", marginLeft: "5px" }}>
                                  <FaStar color='yellowgreen' />
                                  <h4 style={{ marginTop: "-1px", marginLeft: "5px" }}>{review.author_details.rating}/ 10</h4>
                                </div>
                              </div>
                              <ReadMoreReadLess >
                                {review.content}
                              </ReadMoreReadLess>
                            </div>
                          </div>
                          <hr />
                        </>
                      )
                    })
                  }
                </div>
              </div>
            }
            <div className='similar-movies-container'>
              <h3>Similar Movies</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {
                  movie_detail.similar.results.map((similarMovie, index) => {
                    return (
                      <MoviesHoverCard index={index} height={"150px"} width={"100px"} movie={similarMovie} />
                    )
                  })
                }
              </div>
            </div>
            <hr />
            {/* <div>
              <h3>People also search for</h3>
            </div> */}
          </div>
          <Modal
            isOpen={sideModal}
            onRequestClose={sideModalClose}
            contentLabel="Example Modal"
            ariaHideApp={false}
            className={"SideBarModal"}>
            {
              personData_isLoading ?
                <PersonDetailSkeleton />
                : personData.biography == "" ? (
                  <div>
                    <h2 className='centered'>{"No Data Available"}</h2>
                    <div className="search_google centered" onClick={() => searchOnGoogle(personData.name)}>
                      <button>Search On </button>
                      <h4 style={{ fontFamily: "serif", fontWeight: "bold", color: "#4285F4", letterSpacing: "2px", textTransform: "uppercase" }}>
                        <span style={{ color: "#EA4335" }}>G</span>
                        <span style={{ color: "#FBBC05" }}>o</span>
                        <span style={{ color: "#4285F4" }}>o</span>
                        <span style={{ color: "#34A853" }}>g</span>
                        <span style={{ color: "#FBBC05" }}>l</span>
                        <span style={{ color: "#EA4335" }}>e</span>
                      </h4>
                    </div>
                  </div>
                ) : (
                  <div style={{ margin: "20px" }}>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <img
                        src={personData.profile_path}
                        style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", border: "4px solid #FFA500" }}
                      />
                    </div>
                    <h3 className="centered">{personData.name}</h3>
                    <p style={{ textAlign: "center" }}>{personData.place_of_birth}</p>
                    <p style={{ textAlign: "center" }}>{personData.birthday}</p>
                    <p style={{ textAlign: "justify", textIndent: "50px" }}>
                      {personData.biography}
                    </p>
                  </div>
                )
            }
          </Modal>
        </div>
      }
      {/* <--------------------------- TRAILER MODAL -----------------------------> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      // className={"youtube_trailer_modal"}
      >
        <iframe
          // title={"John Wick On Fire"}
          width="800"
          height="415"
          src={findTrailer()}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
      {/* <--------------------------- AUTH MODAL -----------------------------> */}

      <Modal
        isOpen={isAuthModalOpen}
        onRequestClose={authModalClose}
        ariaHideApp={false}
        className="authModal centered"
        contentLabel="Example Modal">
      <LoginSignupForm />
      </Modal>
    </div >
  )
}

export default MovieDetail