import React, { useState } from "react";
import Modal from "react-modal";
// import "./components/dinocard/DinoCard";
import './DinoCard.css'

Modal.setAppElement("#root");

function DinoCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img src={props.img} onClick={() => setModalIsOpen(true)} alt="default-dino" />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Dino Library</h2>
        <p>Welcome to default Ark library</p>
        <div>
          <button className="button" onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default DinoCard;

// import DinoCard from "DinoCard.js";
// import giantdino from "../../assests/defaultdinos/gigantosaurus.JPG";
// import quetzaldino from "../../assests/defaultdinos/quetzal.JPG";
// import stegosaurus from "../../assests/defaultdinos/stegosaurus.JPG";
// import tusoteuthis from "../../assests/defaultdinos/tusoteuthis.JPG";
// import yutyrannus from "../../assests/defaultdinos/yutyrannus.JPG";
// function Library(props) {
//   return (
//     <div>
//       <DinoCard img={giantdino} />
//       <DinoCard img={quetzaldino} />
//       <DinoCard img={stegosaurus} />
//       <DinoCard img={tusoteuthis} />
//       <DinoCard img={yutyrannus} />
//     </div>
//   );
// }
// export default Library;
