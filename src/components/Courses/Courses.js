import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="Courses">
      <div className="courses-container">
        <div className="title">
          <h1>Courses & Trainings</h1>
        </div>
        <ul className="course-desc">
          <li className="web-development">
            <h3>Web Development</h3>

            <ul className="sub-category">
              <li>
                <a
                  href="https://www.theodinproject.com/paths/full-stack-javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Odin Project </span>
                  <i className="fas fa-external-link-alt redirect-icon"></i>
                </a>
              </li>
            </ul>
          </li>

          <li className="machine-learning">
            <h3>Machine Learning</h3>

            <ul className="sub-category">
              <li>
                <a
                  href="https://coursera.org/share/fdc714e238361dc5c730248e1afab4bd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Andrew Ng's DeepLearning Specialization </span>

                  <i className="fas fa-external-link-alt redirect-icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://coursera.org/share/6514b5b4bab9d93b7f91baa7b5085e28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Laurence Moroney's DeepLearning.AI TensorFlow Developer{" "}
                  </span>

                  <i className="fas fa-external-link-alt redirect-icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://coursera.org/share/6514b5b4bab9d93b7f91baa7b5085e28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    University of Michigan's Python for Everybody Specialization{" "}
                  </span>

                  <i className="fas fa-external-link-alt redirect-icon"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
