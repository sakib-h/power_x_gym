import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./GymMembers.css";

const GymMembers = () => {
	const [members, setMembers] = useState();
	useEffect(() => {
		fetch(`http://localhost:5000/members`)
			.then((res) => res.json())
			.then((data) => setMembers(data));
	}, []);

	return (
		<div>
			<div className="tableContainer">
				<Table responsive>
					<thead>
						<tr>
							<th>#</th>
							{Array.from({ length: 12 }).map((_, index) => (
								<th key={index}>Table heading</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							{Array.from({ length: 12 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
						<tr>
							<td>2</td>
							{Array.from({ length: 12 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
						<tr>
							<td>3</td>
							{Array.from({ length: 12 }).map((_, index) => (
								<td key={index}>Table cell {index}</td>
							))}
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default GymMembers;
