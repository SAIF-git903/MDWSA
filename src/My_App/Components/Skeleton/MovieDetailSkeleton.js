import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function MovieDetailSkeleton() {

  const crewLengthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className='movies_div'>
      <div className="detail_poster_div">
        <div className='movie-detail-flex1'>
          <Skeleton className="movie_detail_poster_img" />
          <Skeleton style={{ color: "white", display: "flex", gap: "10px", marginTop: "10px", padding: "15px 0px 15px 0px" }} className="centered" />
        </div>
        <div className='movie-detail-flex2'>
          <h2 style={{ width: "90%" }}><Skeleton /></h2>
          <h4 style={{ width: "100px" }}><Skeleton /></h4>
          <p><Skeleton count={5} /></p>
          <Tabs>
            <TabList style={{ display: "flex", gap: "30px" }}>
              <Skeleton count={1} style={{ width: "50px", height: "30px" }} />
              <Skeleton count={1} style={{ width: "50px", height: "30px" }} />
              <Skeleton count={1} style={{ width: "50px", height: "30px" }} />
              <Skeleton count={1} style={{ width: "50px", height: "30px" }} />
            </TabList>
            <TabPanel>
              <p style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                {
                  crewLengthArr.map((item) => {
                    return (
                      <a>
                        <Skeleton style={{ width: "100px", height: "30px" }} />
                      </a>
                    )
                  })
                }
              </p>
            </TabPanel>
          </Tabs>
        </div>

        {/* {sideBarDetail && <div className='sideInfo_right' >
          <div style={{ position: "absolute", right: "0", }} onClick={() => setSideBarDetail(false)}>
            <AiOutlineClose size={25} />
          </div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <img src={personData.profile_path} style={{ width: "100px", height: "110px", borderRadius: "50%" }} />
          </div>
          <p className='centered'>{personData.name}</p>
          <p className='centered' style={{ textAlign: "center" }}>{personData.place_of_birth}</p>
          <p className='centered' style={{ textAlign: "center" }}>{personData.birthday}</p>
          <p className='centered' style={{ textAlign: "center" }}>{personData.biography}</p>
        </div>} */}
      </div>
    </div>
  );
}

export default MovieDetailSkeleton