import React, { useState, useEffect } from "react";
import ALayout from "../Layouts/ALayout";
import ExerciseList from "../components/ExerciseList";
import UserService from "../services/user.service"
export default function ActivityPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return <ALayout  main={<ExerciseList></ExerciseList>}><h3>{content}</h3>
  </ALayout>;
}
