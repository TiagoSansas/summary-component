import { Circle } from "./Circule/Circule";
import { Message } from "./Message/Message";
import { Title } from "./Title/Title";
import "./Result.css";

export function Result() {
  return (
    <div className="containerResult">
      <Title title="Your Result" />
      <Circle />
      <Message />
    </div>
  );
}
