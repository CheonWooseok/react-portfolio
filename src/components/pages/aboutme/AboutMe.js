import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import getGitRepo from "../../../utils/api/getGitRepo";
import useFetch from "../../../utils/hooks/useFetch";
import useMedia from "../../../utils/hooks/useMedia";
import "../../styles/itemAlign.css";
import RepoCard from "./RepoCard";

const RepoCardContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.isMobile ? "center" : "flex-start")};
  width: ${(props) => (props.isMobile ? "100vh" : "1000px")}; */

  display: grid;
  grid-template-columns: ${(props) =>
    props.isMobile
      ? "repeat(auto-fit, minmax(90%, max-content))"
      : `repeat(auto-fit, minmax(350px, max-content))`};
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;

export default function AboutMe() {
  const { media } = useMedia();

  const { data = [], loading } = useFetch(getGitRepo);

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );
  else
    return (
      <div>
        <Skills />
        <RepoCardContainer isMobile={media === "mobile"}>
          {data.map((repo) => (
            <RepoCard key={repo.id} repoInfo={repo} />
          ))}
        </RepoCardContainer>
      </div>
    );
}

function Skills() {}
