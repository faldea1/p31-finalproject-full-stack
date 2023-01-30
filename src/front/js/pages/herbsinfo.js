import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Herbs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{textAlign: 'center', color: 'green', fontWeight: 'bold', marginTop: 10}}>
		{
			store.herbsInfo.map(
				(item, index) => {
					return (
						<ul style={{ display: 'inline-block', marginTop: 60 }}>
							<Card key={index} style={{ width: '18rem', color: 'white', background: 'white', border: 'solid white' }}>
								<Card.Img style={{width: 160, height: 160, borderRadius: 200 }} variant="top" src={item.herburl} />
								<Card.Body>
									<Card.Title style={{ color: 'yellow', paddingRight:120, fontSize: 'medium' }}>{item.common_name}</Card.Title>
									<Card.Text>
										<p style={{ color: 'grey' }}>{item.description}</p>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">
										<Card.Text>
										</Card.Text>
									</small>
								</Card.Footer>
							</Card>
						</ul>
					)
				}
			)
		}
	</div>
	);
};