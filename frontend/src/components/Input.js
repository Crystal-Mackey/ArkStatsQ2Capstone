import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Links from "../components/navigation/Links";
import { addTolibrary } from "../utils/api";
import Form from "react-bootstrap/Form";
import "./Input.css";

const Input = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [food, setFood] = useState(0);
  const [weight, setWeight] = useState(0);
  const [meleeDamage, setMeleeDamage] = useState(0);
  const [movementSpeed, setMovementSpeed] = useState(0);
  const [torpidity, setTorpidity] = useState(0);
  const [imprinting, setImprinting] = useState(0);
  const [gender, setGender] = useState("Choose...");
  const [creatureType, setCreatureType] = useState("Choose...");
  const [status, setStatus] = useState("Choose...");
  const [level, setLevel] = useState(1);
  const stats = {
    creatureType,
    level,
    status,
    id,
    gender,
    name,
    health,
    stamina,
    oxygen,
    food,
    weight,
    meleeDamage,
    movementSpeed,
    torpidity,
    imprinting,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTolibrary(uniqueUser);
    setCreatureType("Choose...");
    setGender();
    setId(0);
    setName("");
    setHealth(0);
    setStamina(0);
    setOxygen(0);
    setFood(0);
    setWeight(0);
    setMeleeDamage(0);
    setMovementSpeed(0);
    setTorpidity(0);
    setImprinting(0);
  };

  const uniqueUser = {
    userID: "",
    dinoData: stats,
  };

  uniqueUser.userID = useSelector((state) => state.id);

  return (
    <>
      <Links />
      <CardDeck>
        <Card>
          <form onSubmit={handleSubmit}>
            <div className="ui-form">
              <div className="fields">
                <br></br>
                <Card.Title>
                  <h3>Enter stats</h3>
                </Card.Title>
                <br></br>
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
                <Card.Title>
                  <>Name</>
                </Card.Title>
                <input className="name" type="string" value={name} required onChange={(e) => setName(e.target.value)} />
                <Card.Title> Health</Card.Title>
                <input
                  className="health"
                  type="number"
                  min="1"
                  value={health}
                  onChange={(e) => setHealth(e.target.value)}
                />
                <Card.Title>Stamina</Card.Title>
                <input
                  className="stamina"
                  type="number"
                  min="1"
                  value={stamina}
                  onChange={(e) => setStamina(e.target.value)}
                />
                <Card.Title>Oxygen</Card.Title>
                <input
                  className="oxygen"
                  type="number"
                  min="1"
                  value={oxygen}
                  onChange={(e) => setOxygen(e.target.value)}
                />
                <Card.Title>Food</Card.Title>
                <input className="food" type="number" min="1" value={food} onChange={(e) => setFood(e.target.value)} />
                <Card.Title>Weight</Card.Title>
                <input
                  className="weight"
                  type="number"
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <Card.Title>Melee Damage</Card.Title>
                <input
                  className="meleeDamage"
                  type="number"
                  min="1"
                  value={meleeDamage}
                  onChange={(e) => setMeleeDamage(e.target.value)}
                />
                <Card.Title>Movement Speed</Card.Title>
                <input
                  className="movementSpeed"
                  type="number"
                  min="1"
                  value={movementSpeed}
                  onChange={(e) => setMovementSpeed(e.target.value)}
                />
                <Card.Title>Torpidity</Card.Title>
                <input
                  className="torpidity"
                  type="number"
                  min="1"
                  value={torpidity}
                  onChange={(e) => setTorpidity(e.target.value)}
                />
                <Card.Title> Ark Sample ID</Card.Title>
                <input className="id" type="number" min="1" value={id} onChange={(e) => setId(e.target.value)} />
                <Card.Title>Imprinting</Card.Title>
                <input
                  className="imprinting"
                  type="number"
                  min="0"
                  max="100"
                  value={imprinting}
                  onChange={(e) => setImprinting(e.target.value)}
                />
                <br></br>
                <br></br>
                <button className="input-button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Card>
      </CardDeck>
    </>
  );
};
export default Input;
