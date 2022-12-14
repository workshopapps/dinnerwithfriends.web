import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import userServices from "../../services/userServices";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import calender from "../../assets/img/g-calendar.png";
import Event from "../../components/Event";
import add from "../../assets/img/add.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import CalenderSyncModal from "../../components/CalenderSyncModal";
/* global gapi */
const UpcomingEvent = () => {
	const [status, setStatus] = useState("not-decided");
	const { events, setEvents } = CatchUpEventContextUse();
	const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await userServices.getAllEvents();
      setEvents(data);
      const eventsJson = JSON.stringify(data);
      localStorage.setItem("eventsArr", eventsJson);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredEvents =
    events.length === 0
      ? events
      : events.filter((event) => event.published === status);

	const userEvents =
		filteredEvents.length === 0 ? (
			<Event
				filteredEvents={filteredEvents}
				status={status === 'not-decided' ? "upcoming" : "Rsvp"}
			/>
		) : (
			filteredEvents.map(
				({
					_id,
					event_title,
					event_description,
					final_event_date,
					participant_number,
				}) => {

					return (
					<Event
					status={status}
						key={_id}
						id={_id}
						event_title={event_title}
						event_description={event_description}
						final_event_date={final_event_date}
						participant_number={participant_number}
						filteredEvents={filteredEvents}
					/>)
				}
			)
		);

  function authenticate() {
    return gapi.auth2
      .getAuthInstance()
      .signIn({
        scope:
          "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly",
        plugin_name: "dinnerwithfriends",
      })
      .then(
        function () {
          console.log("Sign-in successful");
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
  }

  function loadClient() {
    gapi.client.setApiKey("AIzaSyA7G2ANAJI6rm_DpTW84lsKUJT-c8bmirI");
    return gapi.client
      .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(
        function () {
          console.log("GAPI client loaded for API");
          execute();
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.calendar.calendarList.list({}).then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);

				if (response.status === 200) {
					setModal(true);
				}
			},
			function (err) {
				console.error("Execute error", err);
			}
		);
	}
	gapi.load("client:auth2", function () {
		gapi.auth2.init({
			client_id:
			"102076896830-4il8ncmrd6qfoippk2ut4uujb8cci54v.apps.googleusercontent.com",
		});
	});

  const googleCalenderApi = async () => {
    await authenticate().then(loadClient);
  };

	return (
		<>
			<CreateEventNavbar setModal={setModal}/>
			<section className='px-[22px] lg:px-20 pt-[6rem] lg:pt-[7rem] mb-16'>
				<div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-x-4 mb-4 lg:mb-8'>
					<div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4'>
						<h2 className='text-[#151517] text-2xl font-bold lg:text-[40px]'>
							Welcome
						</h2>
						<p className='text-[#898989] text-center font-bold lg:font-normal text-sm lg:text-lg'>
							Create events, send invites and keep up with your friends
						</p>
					</div>
					<Button
						type='button'
						onClick={googleCalenderApi}
						className='hidden lg:flex justify-between items-center gap-x-3.5 rounded-lg border border-solid border-[#344054] px-4 outline-0'>
						<div className='w-[28px] h-[28px]'>
							<img src={calender} alt='google-calender' />
						</div>
						<p className='text-[#344054] text-lg'>Sync with Google Calendar</p>
					</Button>
				</div>
				<div className='flex flex-col p-8 gap-y-8 mt-9 justify-center items-center border border-solid border-[#CDCDCD] bg-[#FAFAFA] lg:bg-white'>
					<Button
						type='button'
						className='font-bold text-sm lg:text-xl  gap-x-3.5 text-white bg-[#0056D6] rounded py-3 px-4 lg:px-8 outline-0'>
						<Link
							to='/create_event'
							className='flex justify-between items-center'>
							<span>
								<img src={add} alt='add' />
							</span>
							<span>Create Event</span>
						</Link>
					</Button>
					<div className='flex flex-col justify-center items-center gap-y-2'>
						<span className='text-[#151517] font-bold lg:font-medium text-xl'>
							New Catch Up Event
						</span>
						<span className='text-[#898989] font-bold lg:font-normal text-lg text-center'>
							Create event and let people chip in
						</span>
					</div>
				</div>
				<div className='lg:border border-solid border-[#CDCDCD] lg:px-[46px] py-9'>
					<h3 className='text-[#151517] text-center lg:text-left font-bold lg:font-medium text-2xl mb-[40px]'>
						All Events
					</h3>
					<ul className='flex justify-start items-center gap-x-8'>
						<li>
							<Button
								className={`${
									status === 'not-decided' ? "pb-3 border-[#0056D6] border-b-4 " : ""
								}'pb-3 outline-0 border-0 text-[#717172] bg-inherit lg:text-lg'`}
								onClick={() => setStatus('not-decided')}>
								Upcoming Event
							</Button>
						</li>
						<li>
							<Button
								className={`${
									status === 'decided' ? "pb-3 border-[#0056D6] border-b-4 " : ""
								}' pb-3 outline-0 border-0 text-[#717172] bg-inherit lg:text-lg'`}
								onClick={() => setStatus('decided')}>
								Reserved Event
							</Button>
						</li>
					</ul>
				</div>
				<div
					className={`${
						filteredEvents.length === 0 ? "pt-12" : "pt-[10px]"
					} "flex flex-col justify-center items-center gap-y-8 lg:border border-solid border-[#CDCDCD] lg:pb-[200px] lg:px-[20px] max-h-[30rem] overflow-y-scroll "`}>
					{status === 'not-decided' && (
						<div
							className={`${
								filteredEvents.length === 0
									? ""
									: "lg:grid lg:grid-cols-2 grid-flow-row content-start gap-4 px-0 pr-[15px] lg:pr-[20px] lg:px-8 w-[100%] py-4"
							}`}>
							{userEvents}
						</div>
					)}
					{status === 'decided' && (
						<div
							className={`${
								filteredEvents.length === 0
									? ""
									: "lg:grid lg:grid-cols-2 grid-flow-row content-start gap-4 px-0 lg:px-8 py-4 pr-[15px] lg:pr-[20px] w-[100%]"
							}`}>
							{userEvents}
						</div>
					)}
				</div>
			</section>
			<Footer />
			{modal && <CalenderSyncModal setModal={setModal} />}
		</>
	);
};

export default UpcomingEvent;
