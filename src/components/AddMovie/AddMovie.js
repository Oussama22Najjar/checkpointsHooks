import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Col, Button} from "react-bootstrap"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  const AddMovie = ({ addMovie }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    const [movieName, setMovieName] = useState("");
    const [date, setDate] = useState("");
    const [season, setSeason] = useState("");
    const [photo, setPhoto] = useState("");
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    const submitMovie = (e) => {
      e.preventDefault();
      let newMovie = {
        movieName: movieName,
        date: date,
        season: season,
        photo: photo,
      };
  
      addMovie(newMovie);
      closeModal();
    };
    return (
      <div>
        <button onClick={openModal}>Add Movie</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <Form>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Movie Name : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie name .."
                onChange={(e) => setMovieName(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Movie Date :</Form.Label>
              <Form.Control
                placeholder="Movie date .."
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label> Photo : </Form.Label>
              <Form.Control
                placeholder="Enter you image adress ..."
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label> Season : </Form.Label>
              <Form.Control
                placeholder="Season ..."
                onChange={(e) => setSeason(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
  
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => submitMovie(e)}
            >
              Submit
            </Button>
          </Form>
        </Modal>
      </div>
    );
  };
  
  export default AddMovie;
