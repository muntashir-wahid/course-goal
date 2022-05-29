import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = function(props) { 

  const cancleCourseGoalHandler = (cancledCourseGoal) => {
    props.onCancleGoal(cancledCourseGoal);
  };

  return (
    <section className="course-goal__list">
      <ul>
        {props.courseGoals.map((courseGoal) => (
          <CourseGoalItem
            key={courseGoal.id}
            goal={courseGoal.goal}
            onCancleCourseGoalItem={cancleCourseGoalHandler}
          />
        ))}
      </ul>
    </section>
  );
};

export default CourseGoalList;
