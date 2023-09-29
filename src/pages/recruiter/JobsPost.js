import React from "react";
import "./JobsPost.css";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
function JobsPost() {
    return (

        <div>
            <div className="scoll-container">
                <div className="jobsPostCard-container">
                    <div className="jobsPostCard">
                        <div className="jobTitle">
                            <span>Java Developer</span>
                            <span>Job vacancies # 05</span>
                            <label>
                                Sample Resume
                            </label>
                            <button>
                                <FileDownloadRoundedIcon /><span>Download Resume</span></button>

                        </div>
                        <div className="jobDescription">
                            <div className="jobDescription-content">
                            <span>Job Descriptions :</span>
                            <div class="description-scroll-container">
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>sit amet, consectetur adipiscing elit.</p>
                                    <p> consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </div>
                            </div>
                            </div>
                           
                           

                        </div>
                        <div className="budget">

                        </div>
                        <div className="taggedEmployees">

                        </div>
                        <div className="ticketTag">
                            <h1>asdf</h1>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default JobsPost;