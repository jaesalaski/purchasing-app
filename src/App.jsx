import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import {useState} from 'react'


export default function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text="Sample School" />
      <FeedbackList feedback={feedback}/>
    </>
  );
}