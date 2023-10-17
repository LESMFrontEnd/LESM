// import React, { useEffect } from "react";

import React, { useEffect, useState } from "react";

import ApiService from "../../services/ApiService";

import ring from "../../images/ring.png";
import { Button, Form } from "react-bootstrap";

import Jobs from "../jobNotifications/Jobs";
import bgImage from "../../images/Rectangle 62.png"
import "./AllJobs.css"
import Filter from "./Filter";
import JobRoleFilter from "./JobRoleFilter";
import HireTypeFilter from "./HireTypeFilter";
import JobsPost from "./JobsPost";

function AllJobs() {



  return (

    <div>
      <div className="imgNav">
        <img src={bgImage} style={{ width: '100%' }} alt="Background" />
        <h5 >Jobs</h5>
        <div className="radio-labels">
          <label>
            <input className="radio-input" type="radio" name="status" defaultChecked="true" value="true" />
            <h6>Open Jobs</h6>
          </label>
          <label>
            <input className="radio-input" type="radio" name="status" defaultChecked="false" value="false" />
            <h6>Closed Jobs</h6>
          </label>
        </div>
      </div>

      <div className="grid-container">
        <div className="jobsFilter">
          <div className="filter">
            <div className="fRow1">
              <h6>Filter</h6>
              <h6>Clear All</h6>
            </div>
            <div className="divider"></div>

            <div className="fRow2">
              <label>Date Post</label>
              <Filter className="dataPostFilter"></Filter>
            </div>
            <div className="divider"></div>

            <div className="fRow3">
              <label>Job type</label>
              <JobRoleFilter></JobRoleFilter>
            </div>
            <div className="divider"></div>
            <div className="fRow4">
              <label>Hire type</label>
              <HireTypeFilter></HireTypeFilter>
            </div>
          </div>
        </div>

        <div className="jobPost">

          <div className="jobsPostCard-scroll-container">
            <JobsPost></JobsPost>
            <JobsPost></JobsPost>
            <JobsPost></JobsPost><JobsPost></JobsPost>
            

          </div>


        </div>

      </div>


    </div>




  )
}

export default AllJobs;
