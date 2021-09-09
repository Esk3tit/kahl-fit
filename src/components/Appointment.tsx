import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState  } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    DayView,
    Appointments,
    ViewSwitcher,
    WeekView,
    MonthView
} from "@devexpress/dx-react-scheduler-material-ui";
import "../style/Appointment.css";

const currentDate = "2018-11-01";
const schedulerData = [
    {
        startDate: "2018-11-01T09:45",
        endDate: "2018-11-01T11:00",
        title: "Meeting",
    },
    {
        startDate: "2018-11-01T12:00",
        endDate: "2018-11-01T13:30",
        title: "Go to a gym",
    },
];
// use back end to fetch data

function Appointment() {
    const [data, setData] = useState({});
    let [currentViewName, setCurrentViewname] = useState('');



    return (
        <div>
            <Paper>
                <Scheduler data={schedulerData}>
                    <ViewState
                        currentDate={currentDate}
                        defaultCurrentDate="2018-07-25"
                        // currentViewName={currentViewName}
                        // onCurrentViewNameChange={}
                    />
                    <DayView startDayHour={9} endDayHour={18} />
                    <WeekView startDayHour={10} endDayHour={19} />
                    <MonthView />
                    <Appointments />
                </Scheduler>
                <ViewSwitcher />
                <Appointments />
            </Paper>
        </div>
    );
}

export default Appointment;
