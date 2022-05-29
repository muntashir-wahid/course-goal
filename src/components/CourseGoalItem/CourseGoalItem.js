import React from "react";
import "./CourseGoalItem.css";

const CourseGoalItem = function(props) {
  const removeCourseGoalHandler = (e) => {
    props.onCancleCourseGoalItem(e.target.innerText);
  };
  return (
    <li className="course-goal__item" onClick={removeCourseGoalHandler}>
      {props.goal}
    </li>
  );
};

export default CourseGoalItem;
