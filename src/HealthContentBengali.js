import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaPlay, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons from React-Icons
import ViewContent from "./ViewContent"; // Import the modal component

const videoData = [
  {
    title: "ডায়াবেটিস আর নয়, ডায়াবেটিসের মূল কারন জানুন এবং চিরতরে নির্মূল করুন",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/x_XqMyqa4l4",
  },
  {
    title: "চুল পড়া এবং তার পূর্ণাঙ্গ সমাধান",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/lmLfDuMadUA",
  },
  {
    title: "ভিটামিন ডি কি এবং কিভাবে গ্রহণ করবেন?",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/6RIezZuk0qk",
  },
  {
    title: "তিন ধরনের শ্বাস-প্রশ্বাসের ব্যায়াম যা জানা থাকলে আপনি পাবেন সর্বোত্তম সুস্থতা",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/RSGDzstzTKM",
  },
  {
    title: "প্রদাহ নিরাময়কারি হলুদ চা এর উপকারিতা, কীভাবে বানাবেন ?",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/oQZDWHLJjx4",
  },
  {
    title: "নারিকেল তেল এক মহা ঔষধ",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/MZHTDfN6AmM",
  },
  {
    title: "পেটের মেদ কমানোর সহজ উপায়",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/ZMFaQ9MiL3o",
  },
  {
    title: "অ্যালার্জি প্রতিরোধের প্রাকৃতিক উপায়",
    description: "ডাঃ মুজিবুর রহমান এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/HFkFT4vYzNY",
  },
  {
    title: "যে সকল চর্বি খেলে শরীরে জমে থাকা চর্বি গলে যায়",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/1arCsrFgGKI",
  },
  {
    title: "ওষুধ ছাড়া ডায়াবেটিস নিয়ন্ত্রনের কার্যকরী কিছু পরামর্শ",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/YnEgQOci8D0",
  },
  {
    title: "আপেল সিডার ভিনেগার কি, কেন, কিভাবে খাবেন?",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/0d13azDOGOY",
  },
  {
    title: "IBS এবং গ্যাস্ট্রিক এর সমস্যা এবং সমাধান বিস্তারিত পরামর্শ",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/B-5wCEpCYxk",
  },
  {
    title: "ফ্যাটি লিভার কি? কেন হয়? বাঁচার উপায় কি?",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/e3HKUrFo47U",
  },
  {
    title: "শ্বাসের নিয়ন্ত্রন করুন পুরো পৃথিবী আপনার নিয়ন্ত্রনে থাকবে",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/d8L-kKEmQRw",
  },
  {
    title: "অটোফেজি: আপনার হারানো যৌবন ফিরিয়ে দেয়",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/hrAUGwXsjUg",
  },
  {
    title: "আমরা কিভাবে কাঁচা সবজি খাবো, আর ভাত কিভাবে খাবো",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/vk15UcLQl4M",
  },
  {
    title: "Sex Hormone Testosterone এবং পুরুষ ও নারীদের হারানো শক্তি ফিরে পাবার উপায়",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/2hTVS5V-AHg",
  },
  {
    title: "হাঁচি-কাশি এবং চোখ চুলকানো সহ অ্যালার্জিজনিত রোগ হলে কি করবেন?",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/thfJcejdvUo",
  },
  {
    title: "না খেয়ে থাকলে কি গ্যাস্ট্রিক হয়?",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/R1Nj5Wk6K_c",
  },
  {
    title: "মানসিক প্রশান্তি আনতে এবং ডিপ্রেশন কাটিয়ে উঠতে কি করবেন?",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/8ucBeuKuDo0",
  },
  {
    title: "ভালো ঘুমের গোপন রহস্য",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/IrDB6slR6FA",
  },
  {
    title: "থাইরয়েড নিয়ে কিছু গুরুত্বপূর্ন কথা",
    description: "ডাঃ জাহাঙ্গীর কবির এর ভিডিও",
    videoUrl: "https://www.youtube.com/embed/yQ9zKY4MSpw",
  },
];

const HealthContentBengali = () => {
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
        background: "linear-gradient(to bottom, #85e085, #ccffcc)",
        padding: "30px",
        borderRadius: "10px",
        fontFamily: "'Noto Sans Bengali', sans-serif",
      }}
    >
      <h1 className="text-center mb-4" style={{ color: "#3b3b3b", fontWeight: "bold" }}>
        💪 স্বাস্থ্যের ভিডিও
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

export default HealthContentBengali;
