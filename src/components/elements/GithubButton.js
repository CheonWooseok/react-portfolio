import { Github } from "react-bootstrap-icons";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  border-radius: 50%;
  padding: 0;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const MY_GITHUB = "https://github.com/CheonWooseok";

export default function GithubButton() {
  return (
    <ButtonWrapper onClick={() => window.open(MY_GITHUB)}>
      <Github fontSize="100px" color="black" />
    </ButtonWrapper>
  );
}
