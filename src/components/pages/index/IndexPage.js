import { useEffect, useState } from "react";
import styled from "styled-components";
import typingImg from "../../../assets/image/typing.gif";
import sleep from "../../../utils/function/sleep";

const CustomImg = styled.img`
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  margin-top: -100px;
  height: 100vh;
  &:before {
    content: "";
    background-image: url(${typingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
    /* opacity: 0.8; */
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    filter: brightness(30%);
  }
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@300&display=swap");
  font-family: "Nanum Pen Script", cursive;

  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

export default function IndexPage() {
  const FINISH_TEXT = "Hello World!";

  const [text, setText] = useState("");

  useEffect(() => {
    textToComplete();
  }, []);

  const textToComplete = async () => {
    for (let i = 0; i < FINISH_TEXT.length; i++) {
      await sleep(100);
      setText(FINISH_TEXT.slice(0, i + 1));
    }
  };

  return (
    <div>
      <Container>
        <div
          style={{
            color: "#fff",
            fontSize: "70px",
            fontWeight: "500",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          {text}
          {/* <Dot /> */}
        </div>
      </Container>
    </div>
  );
}

const Dot = () => {
  const [dot, setDot] = useState("|");

  useEffect(() => {
    const interval = setInterval(() => {
      if (dot === "|") setDot("");
      else setDot("|");
    }, 200);
    return () => clearInterval(interval);
  });
  return <>{dot}</>;
};
