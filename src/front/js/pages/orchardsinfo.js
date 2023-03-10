import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Orchards = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
		<div style={{textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: 10}}>
		{
			store.orchardsInfo.map(
				(item, index) => {
					return (
						<ul style={{ display: 'inline-block', marginTop: 60 }}>
							<Card key={index} style={{ width: '18rem', color: 'white', background: 'whitesmoke', border: 'none', alignItems: 'center' }}>
								<Card.Img style={{width: 160, height: 160, borderRadius: 200 }} variant="top" src={item.orchardurl} />
								<Card.Body>
									<Card.Title style={{ color: 'black', fontSize: 'medium', alignText: 'center' }}>{item.common_name}</Card.Title>
									<Card.Text>
										<p style={{ color: 'grey' }}>{item.description}</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</ul>
					)
				}
			)
		}
	</div>
	</Container>
	);
};