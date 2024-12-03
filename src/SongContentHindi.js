import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons from React-Icons
import ViewContent from "./ViewContent"; // Import the modal component

const videoData = [
  {
    title: "Mere Mehboob Qayamat Hogi",
    description: "Mr. X In Bombay - Kishore Kumar",
    videoUrl: "https://www.youtube.com/embed/yIzCBU0_LyY",
  },
  {
    title: "Aane Se Uske Aaye Bahar",
    description: "Jeene Ki Raah - Mohammed Rafi",
    videoUrl: "https://www.youtube.com/embed/GNTNnp5rk5E",
  },
  {
    title: "Jaadu Teri Nazar",
    description: "Darr | Shah Rukh Khan, Juhi Chawla | Udit Narayan | Shiv-Hari | Anand Bakshi",
    videoUrl: "https://www.youtube.com/embed/n_oP9Onj0r0",
  },
  {
    title: "Baazigar O Baazigar",
    description: "Shahrukh & Kajol | Baazigar | Ishtar | Kumar Sanu & Alka Yagnik",
    videoUrl: "https://www.youtube.com/embed/PUO7_Gi6ipg",
  },
  {
    title: "Aisa Deewana",
    description: "Dil Maange More | Sonu Nigam | Himesh R|Shahid Kapoor, Tulip Joshi",
    videoUrl: "https://www.youtube.com/embed/X4TyG9grBSw",
  },
];

const SongContentHindi = () => {
  const [visibleVideos, setVisibleVideos] = useState(3); // Control the number of videos shown
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the selected video
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  const handleShowModal = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setShowModal(false);
  };

  const handleShowMore = () => {
    setVisibleVideos((prev) => (prev === 3 ? videoData.length : 3));
  };

  return (
    <div
      className="container mt-4"
      style={{
        background: "linear-gradient(to bottom, #ff7f7f, #ffbaba)",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center mb-4" style={{ color: "#3b3b3b", fontWeight: "bold" }}>
        💽 Hindi Song
      </h1>
      <Row className="justify-content-center">
        {videoData.slice(0, visibleVideos).map((video, index) => (
          <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
            <Card
              className="shadow-sm border-0 h-100"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  className="text-primary text-center"
                  style={{
                    minHeight: "60px", // Ensures consistent height for titles
                  }}
                >
                  {video.title}
                </Card.Title>
                <div
                  className="embed-responsive embed-responsive-16by9 rounded shadow-sm flex-grow-1"
                  style={{ minHeight: "200px" }}
                >
                  <iframe
                    className="embed-responsive-item"
                    src={video.videoUrl}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <Card.Text
                  className="mt-3 text-muted text-center flex-grow-1"
                  style={{
                    minHeight: "60px", // Ensures consistent height for descriptions
                    overflowY: "auto", // Allows scrolling for long descriptions
                    WebkitOverflowScrolling: "touch", // Smooth scrolling on mobile
                  }}
                >
                  {video.description}
                </Card.Text>
                <Button
                  variant="primary"
                  className="d-flex align-items-center justify-content-center mt-auto w-100"
                  onClick={() => handleShowModal(video)}
                >
                  <FaPlay className="me-2" />
                  Watch This
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button
          variant="outline-primary"
          className="d-flex align-items-center justify-content-center mx-auto"
          onClick={handleShowMore}
          style={{ width: "200px", borderRadius: "50px" }}
        >
          {visibleVideos === 3 ? (
            <>
              <FaChevronDown className="me-2" />
              Show More
            </>
          ) : (
            <>
              <FaChevronUp className="me-2" />
              Show Less
            </>
          )}
        </Button>
      </div>

      {/* Modal Component */}
      {selectedVideo && (
        <ViewContent show={showModal} onHide={handleCloseModal} video={selectedVideo} />
      )}
    </div>
  );
};

export default SongContentHindi;
