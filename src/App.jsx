import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import {useState} from 'react'
import FeedbackData from "./data/FeedbackData";

export default function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text="Sample School" />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
    </>
  );
}