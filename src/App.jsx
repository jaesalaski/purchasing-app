import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

export default function App(){
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