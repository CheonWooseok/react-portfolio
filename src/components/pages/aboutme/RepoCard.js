import { Button, Card } from "react-bootstrap";
import { Eye, Github, Star } from "react-bootstrap-icons";
import styled from "styled-components";
import useMedia from "../../../utils/hooks/useMedia";
import "../../styles/itemAlign.css";

const CustomCard = styled(Card)`
  /* display: inline-block;
  font-size: 18px;
  list-style-type: none;
  margin: 10px 7px;
   */
  list-style-type: none;
  border: 1px solid gray;
  padding: 5px;
  /* margin: 10px; */
  width: ${(props) => (props.isMobile ? `100%` : "350px")};
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const WatchStar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  label {
    margin-left: 5px;
  }
`;

export default function RepoCard({ repoInfo }) {
  const { media } = useMedia();

  return (
    <CustomCard isMobile={media === "mobile"}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body style={{ width: "auto" }}>
        <Card.Title>
          <Github fontSize="30" style={{ marginRight: "5px" }} />
          {repoInfo.name}
        </Card.Title>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <WatchStar>
            <Star color="#F7EC09" fontSize="20px" />
            <label>{repoInfo.stargazers_count}</label>
          </WatchStar>
          <WatchStar>
            <Eye color="#2C3639" fontSize="20px" />
            <label>{repoInfo.stargazers_count}</label>
          </WatchStar>
        </div>
        <Card.Text
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            wordBreak: "keep-all",
          }}
        >
          <p style={{ height: "30px", color: "#666" }}>
            {repoInfo.description}
          </p>
          {/* <br /> */}
          <label style={{ margin: "5px" }}>
            생성일 {repoInfo.created_at.substring(0, 10)}
          </label>
          <label style={{ margin: "5px" }}>
            수정일 {repoInfo.updated_at.substring(0, 10)}
          </label>
        </Card.Text>
        <Button variant="info" onClick={() => window.open(repoInfo.html_url)}>
          Go Repository
        </Button>
      </Card.Body>
    </CustomCard>
  );
}
