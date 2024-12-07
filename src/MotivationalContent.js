import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons from React-Icons
import ViewContent from "./ViewContent"; // Import the modal component

const videoData = [
  {
    title: "Motivational Video 1",
    description: "Arnold Schwarzenegger Motivational Speech",
    videoUrl: "https://www.youtube.com/embed/1bumPyvzCyo",
  },
  {
    title: "Motivational Video 2",
    description: "Steve Jobs Motivational Speech",
    videoUrl: "https://www.youtube.com/embed/Tuw8hxrFBH8",
  },
  {
    title: "Motivational Video 3",
    description: "Denzel Washington Motivational Speech",
    videoUrl: "https://www.youtube.com/embed/tbnzAVRZ9Xc",
  },
  {
    title: "Motivational Video 4",
    description: "Admiral McRaven Motivational Speech",
    videoUrl: "https://www.youtube.com/embed/TBuIGBCF9jc",
  },
];

const MotivationalContent = () => {
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
      id="motivational"
      className="container mt-4"
      style={{
        background: "linear-gradient(to bottom, #f0f8ff, #e6f7ff)",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1
        className="text-center mb-4"
        style={{ color: "#3b3b3b", fontWeight: "bold" }}
      >
        🌟 Motivational Content
      </h1>
      <Row className="justify-content-center">
        {videoData.slice(0, visibleVideos).map((video, index) => (
          <Col xs={12} sm={12} md={6} lg={4} key={index} className="mb-4">
            <Card
              className="shadow-sm border-0 h-100"
              style={{ borderRadius: "15px" }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-primary text-center">
                  {video.title}
                </Card.Title>
                <div
                  className="embed-responsive embed-responsive-16by9 rounded shadow-sm flex-grow-1"
                  style={{ minHeight: "200px" }} // Ensure responsiveness
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
                  style={{ minHeight: "60px" }} // Uniform height for descriptions
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

export default MotivationalContent;
