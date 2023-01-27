import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRecycle, FaSeedling, FaTrash } from 'react-icons/fa';

export const Notes = () => {
  const { store, actions } = useContext(Context);

  const [input, setInput] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData().then((list) => {
      setList(list.map((x) => x.label));
    });
  }, []);

  const createUser = async () => {
    try {
      const settings = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([]),
        redirect: "follow",
      };
      return await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/tester",
        settings
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
      return { result: "Problems with POST" };
    }
  };

  const fetchData = async () => {
    try {
      const settings = {
        method: "GET",
        mode: "cors",
        redirect: "follow",
      };
      return await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/tester",
        settings
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const updateTaskUser = async (data = []) => {
    try {
      const settings = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "cors",
        redirect: "follow",
      };
      return await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/tester",
        settings
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
      return { result: "Problems with PUT" };
    }
  };

  const deleteAll = async () => {
    try {
      const settings = {
        method: "DELETE",
        mode: "cors",
        redirect: "follow",
      };
      return await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/tester",
        settings
      ).then((response) => response.json());
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <Container style={{marginTop: 60}}>
      <Row>
        <Col>
          <h1 id="titlenotes" style={{marginBottom: 15}}>
            Notes{" "}
            <span style={{ color: "limegreen" }} className="mytitleicon">
              <FaSeedling />
            </span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            style={{ padding: 8, paddingLeft: 9, backgroundColor: 'lightyellow' }}
            className="input"
			id="inputnotes"
            type="text"
            value={input}
            placeholder="Add in your agenda..."
            onChange={(e) => {
              setInput(e.target.value);
              console.log(input);
            }}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                if (input != "") {
                  if (list.length == 0) {
                    createUser().then((val) => {
                      let register = [];
                      [...list, input].forEach((value) => {
                        register.push({
                          label: value,
                          done: false,
                        });
                      });
                      updateTaskUser(register).then((value) => {
                        fetchData().then((list) => {
                          setList(list.map((register) => register.label));
                        });
                      });
                      setInput("");
                    });
                  } else {
                    let register = [];
                    [...list, input].forEach((value) => {
                      register.push({
                        label: value,
                        done: false,
                      });
                    });
                    updateTaskUser(register).then((value) => {
                      fetchData().then((list) => {
                        setList(list.map((register) => register.label));
                      });
                    });
                    setInput("");
                  }
                }
              }
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {list.map((valuelist, key) => {
              return (
                <li className="d-flex justify-content-between" key={key}>
                  {valuelist}
                  <a
                    onClick={() => {
                      list.splice(key, 1);
                      let register = [];
                      [...list].forEach((value) => {
                        register.push({
                          label: value,
                          done: false,
                        });
                      });
                      if (register.length > 0) {
                        updateTaskUser(register).then((value) => {
                          fetchData().then((list) => {
                            setList(list.map((register) => register.label));
                          });
                        });
                      } else {
                        deleteAll().then((value) => {
                          setList([]);
                        });
                      }
                    }}
                  >
                    <FaTrash style={{ color: "green", marginRight: "2" }} /><FaRecycle style={{ color: "green", margin: "none" }} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{ color: "sienna", fontsize: "medium", fontWeight: 'bold' }}
            className="MyActionsNumb2"
          >
            Number of Notes : {list.length}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
