import React, { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import CourseGoalInput from "./components/CourseGoalInput/CourseGoalInput";

const DUMMY_COURSE_GOALS = [
  { id: "cg01", goal: "Do all exercises!" },
  { id: "cg02", goal: "Finish the course!" },
];

function App() {
  const [courseGoalList, setCourseGoalList] = useState(DUMMY_COURSE_GOALS);
  const savedCourseGoalHandler = (newCourseGoal) => {
    setCourseGoalList((preCourseGoals) => {
      const courseGoals = [newCourseGoal, ...preCourseGoals];
      return courseGoals;
    });
  };
  const cancledGoalHandler = (cancledGoal) => {
    setCourseGoalList((prevCourseGoals) => {
      const courseGoals = prevCourseGoals.filter(
        (courseGoal) => courseGoal.goal !== cancledGoal
      );
      return courseGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "cente" }}>No goal found.May be add one!!</p>
  );
  if (courseGoalList.length > 0) {
    content = (
      <CourseGoalList
        courseGoals={courseGoalList}
        onCancleGoal={cancledGoalHandler}
      />
    );
  }
  return (
    <main className="main">
      <CourseGoalInput onSaveCourseGoal={savedCourseGoalHandler} />
      {content}
    </main>
  );
}

export default App;
