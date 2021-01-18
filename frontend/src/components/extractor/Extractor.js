import "./Extractor.css";
import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Links from "../navigation/Links";
import { addTolibrary } from "../../utils/api";
import Form from "react-bootstrap/Form";
const Input = () => {
  const [id, setId] = useState(0);
  const [creatureType, setCreatureType] = useState("");
  const [level, setLevel] = useState(0);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [food, setFood] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meleeDamage, setMeleeDamage] = useState(0);
  const [movementSpeed, setMovementSpeed] = useState(0);
  const [torpor, setTorpor] = useState(0);
  const [imprinting, setImpriniting] = useState(0);
  const [tribeName, setTribeName] = useState("");
  const [server, setServer] = useState(0);
  const [owner, setOwner] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let stats = {
      level,
      creatureType,
      name,
      health,
      stamina,
      oxygen,
      food,
      weight,
      meleeDamage,
      movementSpeed,
      torpor,
      imprinting,
      gender,
      status,
      server,
      owner,
      id,
    };
    addTolibrary(stats);
  };
  return (
    <>
      <Links />
      <div className="extractor-card">
        <CardDeck className="input">
          <Card className="stat-input">
            <form onSubmit={handleSubmit}>
              <div className="ui-form">
                <div className="double-column">
                  <div className="field">
                    <br></br>
                  </div>
                  <Form.Group controlId="CreatureType">
                    <Form.Label>Creature</Form.Label>
                    <br />
                    <Form.Control onChange={(e) => setCreatureType(e.target.value)} value={creatureType} as="select">
                      <option>Choose...</option>
                      <option value="Giganotosaurus">Giganotosaurus</option>
                      <option value="Quetzal">Quetzal</option>
                      <option value="Stegosaurus">Stegosaurus</option>
                      <option value="Tusoteuthis">Tusoteuthis</option>
                      <option value="Yutyrannus">Yutyrannus</option>
                    </Form.Control>
                  </Form.Group>
                  <div className="extractor-headline">
                    <span className="stat-header">Stat</span>
                  </div>
                  <div className="levelRow">
                    <Card.Title>Level</Card.Title>
                    <input
                      className="level"
                      type="number"
                      min="1"
                      max="500"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                    />
                  </div>
                  <div className="healthRow">
                    <Card.Title>Health</Card.Title>
                    <input
                      className="stat"
                      type="number"
                      min="1"
                      value={health}
                      onChange={(e) => setHealth(e.target.value)}
                    />
                  </div>
                </div>
                <div className="staminaRow">
                  <Card.Title>Stamina</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={stamina}
                    onChange={(e) => setStamina(e.target.value)}
                  />
                </div>
                <div className="oxygenRow">
                  <Card.Title>Oxygen</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={oxygen}
                    onChange={(e) => setOxygen(e.target.value)}
                  />
                </div>
                <div className="foodRow">
                  <Card.Title>Food</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                  />
                </div>
                <div className="weightRow">
                  <Card.Title>Weight</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="meleeRow">
                  <Card.Title>Melee Damage</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={meleeDamage}
                    onChange={(e) => setMeleeDamage(e.target.value)}
                  />
                </div>
                <div className="speedRow">
                  <Card.Title>Movement Speed</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={movementSpeed}
                    onChange={(e) => setMovementSpeed(e.target.value)}
                  />
                </div>
                <div className="torporRow">
                  <Card.Title>torpor</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    value={torpor}
                    onChange={(e) => setTorpor(e.target.value)}
                  />
                </div>
                <div className="imprintRow">
                  <Card.Title>Imprinting</Card.Title>
                  <input
                    className="stat"
                    type="number"
                    min="1"
                    max="100"
                    value={imprinting}
                    onChange={(e) => setImpriniting(e.target.value)}
                  />
                </div>
                <br></br>
                <br></br>
                <button className="input-button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </Card>
        </CardDeck>
        <CardDeck className="locker">
          <br />
          lock
        </CardDeck>
        <br />
        <CardDeck className="stat-output">
          <br />
          Breed Value<Card.Title></Card.Title>
        </CardDeck>
        <CardDeck className="input">
          <Card className="stat-input">
            <form onSubmit={handleSubmit}>
              <div className="ui-form">
                <div className="double-column">
                  <div className="field">
                    <br></br>
                    <Card.Title></Card.Title>
                    <br></br>
                    <Form.Group controlId="Gender">
                      <Form.Label>Gender</Form.Label>
                      <br />
                      <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control onChange={(e) => setGender(e.target.value)} value={gender} as="select">
                          <option>Choose...</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Spayed">Spayed</option>
                          <option value="Neutered">Neutered</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group controlId="Status">
                      <Form.Label>Status</Form.Label>
                      <Form.Control onChange={(e) => setStatus(e.target.value)} value={status} as="select">
                        <option>Choose...</option>
                        <option value="Available">Available</option>
                        <option value="On Timer">On Timer</option>
                        <option value="Cryopod">Cryopod</option>
                        <option value="Deceased">Deceased</option>
                      </Form.Control>
                    </Form.Group>
                    <div className="extractor-headline">
                      <span className="stat-header">Info</span>
                    </div>
                    <div className="dinoName">
                      <Card.Title>Name</Card.Title>
                      <input
                        className="name"
                        type="string"
                        min="1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="tribeName">
                    <Card.Title>Tribe Name</Card.Title>
                    <input
                      className="tribe"
                      type="string"
                      value={tribeName}
                      onChange={(e) => setTribeName(e.target.value)}
                    />
                  </div>
                  <div className="server">
                    <Card.Title>Server</Card.Title>
                    <input
                      className="server-input"
                      type="number"
                      min="1"
                      value={server}
                      onChange={(e) => setServer(e.target.value)}
                    />
                  </div>
                  <div className="owner">
                    <Card.Title>Owner</Card.Title>
                    <input
                      className="owner-input"
                      type="string"
                      min="1"
                      value={owner}
                      onChange={(e) => setOwner(e.target.value)}
                    />
                  </div>
                  <div className="ark-id">
                    <Card.Title>Ark Id</Card.Title>
                    <input
                      className="ark-id-input"
                      type="number"
                      min="1"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};
export default Input;
