import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./AdminDashboard.css";
import GymMembers from "./GymMembers/GymMembers";

const AdminDashboard = () => {
	return (
		<div className="adminDashboard">
			<Header />
			<section>
				<Tabs
					defaultActiveKey="gymMembers"
					id="uncontrolled-tab-example"
					variant="pills"
					className="justify-content-around"
				>
					<Tab eventKey="gymMembers" title="Gym Members">
						<h1>Gym Members</h1>
						<div className="gymMembers">
							<GymMembers />
						</div>
					</Tab>
					<Tab eventKey="pricingPlans" title="Pricing & Plans">
						<h1>Pricing & Plans</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
					<Tab eventKey="services" title="Services">
						<h1>Services</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
					<Tab eventKey="classes" title="Classes">
						<h1>Classes</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
					<Tab eventKey="blog" title="Blog">
						<h1>Blog</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
					<Tab eventKey="pageRole" title="Page Role">
						<h1>Page Role</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
					<Tab eventKey="ourInfo" title="Our Info">
						<h1>Our Info</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Animi, vitae? Magnam, nulla. Inventore magni
							ratione hic nostrum dignissimos exercitationem
							autem, saepe accusamus sequi cumque quo fugiat
							voluptates. Tenetur totam cupiditate ratione,
							tempora voluptatibus ex sed, aspernatur velit,
							incidunt culpa vel!
						</p>
					</Tab>
				</Tabs>
			</section>
			<Footer />
		</div>
	);
};

export default AdminDashboard;
