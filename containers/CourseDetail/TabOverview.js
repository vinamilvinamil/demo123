import React, { useContext } from 'react';

const TabOverview = ({active, course}) => {
    return (
        <div className={`tab-pane fade ${active ? 'active show' : ''}`} id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
           <div dangerouslySetInnerHTML={{__html: course?.description}}></div> 
        </div>
    )
}

export default TabOverview;