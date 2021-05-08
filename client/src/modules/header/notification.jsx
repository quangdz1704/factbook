import React from 'react';
import { Badge } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

const Notifications = () => {
	return (
		<div className="navbar-custom-menu">
			<ul className="nav navbar-nav">
				<li className="dropdown notifications-menu">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						<Badge badgeContent={10} max={9} {...defaultProps} />
					</a>
					<ul className="dropdown-menu" style={{ width: "25vw" }}>
						<li className="header">You have 10 notifications</li>
						<li>
							<ul className="menu" style={{ minHeight: "40vh", maxHeight: "60vh" }}>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-aqua" /> 5 new members joined today
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
										page and may cause design problems
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-users text-red" /> 5 new members joined
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-shopping-cart text-green" /> 25 sales made
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-user text-red" /> You changed your username
									</a>
								</li>
							</ul>
						</li>
						<li className="footer"><a href="#">View all</a></li>
					</ul>
				</li>

			</ul>
		</div>

	);
};

const defaultProps = {
	color: "secondary",
	children: <NotificationsNoneOutlinedIcon />,
};

export default Notifications;