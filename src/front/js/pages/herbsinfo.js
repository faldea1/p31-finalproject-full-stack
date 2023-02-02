import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Herbs = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
		<div style={{textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: 10}}>
		{
			store.herbsInfo.map(
				(item, index) => {
					return (
						<ul style={{ display: 'inline-block', marginTop: 60 }}>
							<Card key={index} style={{ width: '18rem', color: 'whitesmoke', backgroundColor: 'whitesmoke', border: 'none', alignItems: 'center' }}>
								<Card.Img style={{width: 160, height: 160, borderRadius: 200 }} variant="top" src={item.herburl} />
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