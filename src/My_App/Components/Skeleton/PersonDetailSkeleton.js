import React from 'react'
import Skeleton from 'react-loading-skeleton'

function PersonDetailSkeleton() {
    return (
        <div style={{ margin: "20px" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Skeleton style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
            </div>
            <Skeleton className='centered' style={{ marginTop: "10px" }} />
            <div className='centered' style={{ marginTop: "10px" }}>
                <Skeleton style={{ textAlign: "center", width: "100px" }} />
            </div>
            <div className='centered' style={{ marginTop: "10px" }}>
                <Skeleton style={{ textAlign: "center", width: "150px" }} />
            </div>
            <div  style={{ marginTop: "40px" }}>
                <Skeleton count={8} style={{ textAlign: "center" }} />
            </div>
        </div>
    )
}

export default PersonDetailSkeleton