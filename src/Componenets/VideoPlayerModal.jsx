import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

function VideoPlayerModal(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [props.show]);


  return (

    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body id="vps-modal-body">
        {isLoading ? (
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <Button id="vps-modal-btnclose" onClick={props.onHide}>
              <AiOutlineClose id="btnClose-logo" size={20} />
            </Button>
            <ReactPlayer
              width="100%"
              height="500px"
              url={props.url && props.url}
              playing
              controls={true}
            />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default VideoPlayerModal;
