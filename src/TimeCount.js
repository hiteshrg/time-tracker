import React, { useState } from "react";
import { Grid } from '@mui/material'
import moment from "moment-timezone";

const TimeCount = () => {
  const [time, setTime] = useState({
    starttime: "", endtime: "", break: "", totalHours: "", answer:false
  });
  const [error, setError] = useState(false)

  // handleChange function called when page input changes
  const handleChange = (e) => {
    setError(false)
    setTime({...time, [e.target.name]:e.target.value})
  };

  // getTimeFromMins gives you exact time in hours from minutes
  function getTimeFromMins(mins) {
    let h = mins / 60 | 0, m = mins % 60 | 0;
    let totalHour = moment.utc().hours(h).minutes(m).format("hh:mm")
    const afterMinus = moment(totalHour, "hh:mm").diff(moment(`00:${time.break}`, "hh:mm"), 'minutes')
    afterBreakFunc(afterMinus)
  }

  // afterBreakFunc gives you the total working hours from your totalTime after reducing the break time.
  function afterBreakFunc(mins) {
    let h = mins / 60 | 0, m = mins % 60 | 0;
    let afterBreak = moment.utc().hours(h).minutes(m).format("hh:mm")
    setTime({...time, totalHours: afterBreak, answer:true })
  }

  // handlesubmit function calculate the time after user submitted all inputs.
  const handlesubmit = () => { 
    if(!time.starttime || !time.endtime){
      setError(true)
      setTime({...time, answer:false})
    } else {
      const totalWorkedTime = moment(time.endtime, "hh:mm").diff(moment(time.starttime, "hh:mm"), 'minutes')
      getTimeFromMins(totalWorkedTime)
    }
    
  }

  return (
    <div className="text-center">
      <div className="bg-light text-dark p-4">
        <h1>⏱ Time Tracker ⏱</h1>
      </div>
      <hr className="my-5" />

          {error && <Grid container justifyContent="center" my={2}> 
          <div className="alert alert-danger d-flex align-items-center w-25" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div> Please fill Start Time and End Time !!! </div>
            </div> </Grid>}

          <Grid container justifyContent="center" my={2}> 
              <Grid item lg={1}>
                  <label className="mt-2" htmlFor="starttime">Start Time : </label>
              </Grid>
              <Grid item lg={2}>
                  <input type="time" name="starttime" className="form-control" id="starttime" value={time.starttime} onChange={(e) => handleChange(e) } />
              </Grid>
          </Grid>

          <Grid container justifyContent="center" my={2}> 
              <Grid item lg={1}>
                <label className="mt-2" htmlFor="break">Break :</label>
              </Grid>
              <Grid item lg={2}>
                <input type="text" name="break" className="form-control" id="break" value={time.break} onChange={(e) => handleChange(e) } />
              </Grid>
          </Grid>

          <Grid container justifyContent="center" my={2}> 
              <Grid item lg={1}>
              <label className="mt-2" htmlFor="endtime">End Time :</label>
              </Grid>
              <Grid item lg={2}>
              <input type="time" name="endtime" className="form-control" id="endtime" value={time.endtime} onChange={(e) => handleChange(e) } />
              </Grid>
          </Grid>
        
      <hr className="my-5" />
      <button className="btn btn-outline-light w-25" onClick={() => handlesubmit()}>Submit</button>

      {time.answer && <div className="bg-light text-dark p-4" style={{margin: '5rem 0'}}>
              <h1>🎉 🎉  Great ! You Worked <span className="text-danger">{time.totalHours}</span> hours  🎉 🎉</h1>
      </div> }

      
    </div>
    );
};

export default TimeCount;
