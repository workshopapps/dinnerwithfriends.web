import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Footer from "../../components/Footer";
import SettingsFooter from "../../components/settingsPage/setFooter";
import { Link } from "react-router-dom";
import userServices from "../../services/userServices";
import "./profilePage.css";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import { getInitials } from "../../helpers/getInitials";

const ProfilePage = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		birthday: "",
		gender: "",
		mobile: "",
	});

	const fetchData = async () => {
		const data = await userServices.getUser();

		setUser(data);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<CreateEventNavbar />

			<div className='settings_body w-[95%] md:w-[85%] mx-auto'>
				<div className='body_title_container'>
					<Link to='/dashboard/upcoming_events'>
						<div className='body_title'>
							<MdOutlineArrowBack />
							<h1>Account Settings</h1>
						</div>
					</Link>
					<div className='body_subTitles'>
						<h5>Profile</h5>
					</div>
				</div>

				<div className='user_details_field'>
					<div className='bg-[#0056D6] rounded-full h-[85px] w-[85px] flex justify-center items-center text-4xl text-white font-semibold'>
						<h2>{getInitials(user?.name)}</h2>
					</div>

					<Link to='/update_details'>
						<div>
							<button className='edit_btn'>
								<BiEdit />
								Edit
							</button>
						</div>
					</Link>
				</div>

				<section className='more_user_details'>
					<label>
						Fullname
						<div className='field'>{user?.name}</div>
					</label>

					<label>
						Gender
						<div className='field'>{user?.gender}</div>
					</label>

					<label>
						Email
						<div className='field'>{user?.email}</div>
					</label>

					<label>
						Mobile
						<div className='field'>{user?.mobile}</div>
					</label>

					<label>
						Birthday
						<div className='field'>{user?.birthday}</div>
					</label>
				</section>
			</div>
			<SettingsFooter className='settings-footer' />
			<div id='main_footer'>
				<Footer />
			</div>
		</div>
	);
};

export default ProfilePage;
