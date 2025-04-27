import React from "react";
import Navbar from "./Navbar";
import Foot from ".//footer";
import "./mycampus.css";
import timetableIcon from "./icons/timetable.png";
import attendenceIcon from "./icons/attendence.png";
import libraryIcon from "./icons/library.png";
import assignmentIcon from "./icons/assignment.png";
import courseIcon from "./icons/course.png";
import curriculumIcon from "./icons/curriculum.png";
import examIcon from "./icons/examshe.png";
import gradeIcon from "./icons/grade.png";
import certificateIcon from "./icons/certificate.png";
import cgpaIcon from "./icons/cgpa.png";
import projectIcon from "./icons/project.png";
import ResearchIcon from "./icons/research.png";
import leaveIcon from "./icons/leave.png";
import hostelIcon from "./icons/hostel.png";
import fineIcon from "./icons/fine.png";
import libdueIcon from "./icons/date-due-card.png";
import receiptIcon from "./icons/receipt.png";
import walletIcon from "./icons/wallet.png";
import payreceiptIcon from "./icons/payment-method.png";
import clubsIcon from "./icons/meeting.png";
import eventregIcon from "./icons/mobile-application.png";
import eventattIcon from "./icons/calendar.png";
import messIcon from "./icons/food.png";

const MyCampus = () => {
  return (
    <div>
      <Navbar />
      <div className="campus-container">
        <div className="campus-sections">
          <div className="section">
            <h2>📚 Academics</h2>
            <div className="icon-grid">
              <a href="/timetable"><img src={timetableIcon} alt="Library" /><p>Timetable</p></a>
              <a href="/attendance"><img src={attendenceIcon} alt="Library" /><p>Attendance</p></a>
              <a href="/library"><img src={libraryIcon} alt="Library" /><p>Library</p></a>
              <a href="/assignment"><img src={assignmentIcon} alt="Assignments" /><p>Assignments</p></a>
              <a href="/coursepage"><img src={courseIcon} alt="Course Page" /><p>Course Page</p></a>
              <a href="/curriculum"><img src={curriculumIcon} alt="Curriculum" /><p>Curriculum</p></a>
            </div>
          </div>

          <div className="section">
            <h2>📊 Exams</h2>
            <div className="icon-grid">
              <a href="/exam-schedule"><img src={examIcon} alt="Exam Schedule" /><p>Exam Schedule</p></a>
              <a href="/grades"><img src={gradeIcon} alt="Grades View" /><p>Grades View</p></a>
              <a href="/certificates"><img src={certificateIcon} alt="Certificates" /><p>Certificates</p></a>
              <a href="/cgpa"><img src={cgpaIcon} alt="CGPA View" /><p>CGPA View</p></a>
              <a href="/projects"><img src={projectIcon} alt="Projects" /><p>Projects</p></a>
              <a href="/research"><img src={ResearchIcon} alt="Research" /><p>Research</p></a>
            </div>
          </div>

          <div className="section">
            <h2>💲  Online Payments</h2>
            <div className="icon-grid">
              <a href="/exam-schedule"><img src={payreceiptIcon} alt="Exam Schedule" /><p>Payments</p></a>
              <a href="/grades"><img src={walletIcon} alt="Grades View" /><p>Wallet</p></a>
              <a href="/certificates"><img src={receiptIcon} alt="Certificates" /><p>Payment Receipts</p></a>
              <a href="/certificates"><img src={libdueIcon} alt="Certificates" /><p>Library Due</p></a>
              <a href="/certificates"><img src={fineIcon} alt="Certificates" /><p>Fines</p></a>
            </div>
          </div>

          <div className="section">
            <h2>🏢 Hostel</h2>
            <div className="icon-grid">
              <a href="/exam-schedule"><img src={leaveIcon} alt="Exam Schedule" /><p>Leave Request</p></a>
              <a href="/grades"><img src={hostelIcon} alt="Grades View" /><p>Hostel Change</p></a>
              <a href="/certificates"><img src={messIcon} alt="Certificates" /><p>Mess Change</p></a>
            </div>
          </div>

          <div className="section">
            <h2>📣 Clubs and Chapters</h2>
            <div className="icon-grid">
              <a href="/exam-schedule"><img src={clubsIcon} alt="Exam Schedule" /><p>Clubs Enrollemnt</p></a>
              <a href="/certificates"><img src={eventregIcon} alt="Certificates" /><p>Event Registration</p></a>
              <a href="/grades"><img src={eventattIcon} alt="Grades View" /><p>Event Attendance</p></a>
            </div>
          </div>

          <Foot />

        </div>

      </div>
    </div>
  );
};

export default MyCampus;
