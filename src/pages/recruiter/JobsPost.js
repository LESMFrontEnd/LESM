import React from "react";
import "./JobsPost.css";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
function JobsPost() {
    return (

        <div>
           
                    <div className="jobsPostCard">
                        <div className="jobTitle">
                            <span>Java Developer</span>
                            <span>Job vacancies # 05</span>
                            <label>
                                Sample Resume
                            </label>
                            <button>
                                <FileDownloadRoundedIcon /><span className="buttonText">Download Resume</span></button>

                        </div>
                        <div className="jobDescription">
                            <div className="jobDescription-card">
                                <span>Job Descriptions :</span>
                                <div class="description-scroll-container">
                                    <div class="description">
                                        <p>Java developer roles will vary greatly depending on companies and job positions. Here are some typical roles and responsibilities of java developers:</p>
                                        <p>Contribute to all stages of software development lifecycle</p>
                                        <p> Design, implement and maintain Java-based applications that can be high-volume and low-latency</p>
                                        <p>Analyze user requirements to define business objectives</p>
                                        <p>Envisioning system features and functionality</p>
                                        <p>Define application objectives and functionality</p>
                                        <p>Ensure application designs conform with business goals.</p>
                                        <p>Develop and test software</p>
                                        <p>Identify and resolve any technical issues arising</p>
                                        <p>Create detailed design documentation</p>
                                        <p>Define application objectives and functionality</p>
                                        <p>Ensure application designs conform with business goals.</p>
                                        <p>Develop and test software</p>
                                        <p>Identify and resolve any technical issues arising</p>
                                        <p>Create detailed design documentation</p>
                                        
                                        

                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="budget">
                            <div className="budgetCard">
                                    <div className="budgerCardRow1">
                                        <span className="dateStatus"> Open </span>
                                        <span className="date">28 - Sep -2022  </span>
                                    </div>
                                    <div className="budgetCard-divider"></div>
                                    <div className="budgerCardRow2" > 
                                        <span  className="dateStatus"> Close </span>
                                        <span className="date"> 12 - Oct -2022 </span>
                                    </div>
                                    <div className="budgetCard-divider"></div>
                                    <div className="budgerCardRow3">
                                        <h4> Budget </h4>
                                        <span> 34 Lpa </span>
                                    </div>


                            </div>

                        </div>
                        <div className="taggedEmployees">
                            <div className="taggedEmployees-card">
                                <h6>Tagged Employees</h6>
                                <div className="taggedEmpRow">
                                    <span>Employee Name</span>
                                    <span>Employee ID</span>
                                </div>
                                <div className="taggdeEmp-divider"></div>
                                <div className="taggedEmployees-scroll-container">
                                    <div class="taggedEmployeesList">
                                        <div class="listRow">
                                            <span class="name">Srinivas Gandi</span>
                                            <span class="id">LSI1007</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Venkata Koteswara Rao Vankayalapati</span>
                                            <span class="id">LSI10177</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Srikanth nallavelli</span>
                                            <span class="id">LSI10147</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">John</span>
                                            <span class="id">LSI1097</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">William</span>
                                            <span class="id">LSI10187</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Michael</span>
                                            <span class="id">LSI10154</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Thomas</span>
                                            <span class="id">LSI1057</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Jack</span>
                                            <span class="id">LSI10277</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Srinivas Gandi</span>
                                            <span class="id">LSI1007</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Venkata Koteswara Rao Vankayalapati</span>
                                            <span class="id">LSI10177</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Srikanth</span>
                                            <span class="id">LSI10147</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">John</span>
                                            <span class="id">LSI1097</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">William</span>
                                            <span class="id">LSI10187</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Michael</span>
                                            <span class="id">LSI10154</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Thomas</span>
                                            <span class="id">LSI1057</span>
                                        </div>
                                        <div class="listRow">
                                            <span class="name">Jack</span>
                                            <span class="id">LSI10277</span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="ticketTag">
                         <span className="ticketNumber"><h6>Ticket No #<span>TCS_15_28.September.2022_12.October.2022_34lpa_2022-09-28T17:19:06.968113400</span></h6></span>
                        <span><button className="profileButtons"><span>Create Profiles</span></button><button className="profileButtons"><span>View Profiles</span></button></span>
                        </div>

                    </div>

                </div>

       
    )
}

export default JobsPost;