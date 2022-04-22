import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./GymMembers.css";

const GymMembers = () => {
	const [members, setMembers] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/members`)
			.then((res) => res.json())
			.then((data) => setMembers(data));
	}, []);

	members.map((member) => console.log(member));

	return (
		<div>
			<div className="tableContainer">
				<Table responsive>
					<thead>
						<tr>
							<th>No</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Plan</th>
							<th>Number</th>
							<th>Created On</th>
						</tr>
					</thead>
					{members.map((member, index) => (
						<tbody>
							<tr>
								<td>{index + 1}</td>
								<td>{member.firstName}</td>
								<td>{member.lastName}</td>
								<td>{member.email}</td>
								<td>{member.plan}</td>
								<td>{member.number}</td>
								<td>{member.created}</td>
							</tr>
						</tbody>
					))}
				</Table>
			</div>
		</div>
	);
};

export default GymMembers;
