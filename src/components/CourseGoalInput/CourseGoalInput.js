import React, { useState } from "react";
import "./CourseGoalInput.css";

const CourseGoalInput = function(props) {
  const [courseGoal, setCourseGoal] = useState("");

  const courseGoalInputHandler = (e) => {
    setCourseGoal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inputCourseGoal = { id: Math.random(), goal: courseGoal };
    props.onSaveCourseGoal(inputCourseGoal);
  };

  return (
    <section className="course-goal__input">
      <form className="course-goal__form" onSubmit={formSubmitHandler}>
        <label>Course Goal</label>
        <input type="text" onInput={courseGoalInputHandler} />
        <button type="submit" className="btn-submit">
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default CourseGoalInput;
