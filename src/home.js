import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Foot from "./footer";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="welcome-section">
          {user && <h1>Welcome, {user.name} 👋</h1>}
          <h5>Stay updated with events, announcements, discussions and many more..!</h5 >
        </div>

        <div className="content-sections">
          <div className="events" >
            <h2>📢 Announcements</h2>
            <ul>
              <li> Hostel Announcement is on Apr 15!</li>
              <li> Placement training session on May 20.</li>
            </ul>
          </div>

          <div className="announcements" onClick={() => navigate("/events")}>
            <h2>📅 Upcoming Events</h2>
            <p>📌AI Workshop - Apr 5</p>
            <p>📌 Hackathon 2025 - Apr 10</p>
          </div>

          <div className="announcements">
            <h2>📑 Research Papers</h2>
            <p>📌 Access and contribute to research publications.</p>
            <p>📌 Connect with professors for research projects.</p>
          </div>
        </div>

        <div className="content-sections">
          <div className="events" onClick={() => navigate("/qs")}>
            <h2>📚 Study Resources</h2>
            <ul>
              <li>Lecture notes, previous year papers.</li>
              <li>Reference materials.</li>
              <li>Share,request study guides with other uni' students.</li>
            </ul>
          </div>

          <div className="announcements">
            <h2>💼 Internship & Jobs</h2>
            <p>📌 Get notified about internship and job opportunities !</p>
            <p>📌 Share and find placement experiences and tips.</p>
          </div>

          <div className="trending" >
            <a href="/chatfe"><h2>🗣️ Student Forums</h2></a>
            <p>Discuss academic and non-academic topics with peers.</p>
            <p>Seek help from seniors and mentors.</p>
          </div>
        </div>


        <Foot />
      </div>
    </div>
  );
};

export default Home;
