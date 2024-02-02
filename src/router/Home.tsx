import styled from "styled-components";
import layout from "../style/layout";

const HomePage = () => {
  return (
    <Side>
      <div>this is sidebar</div>
      <div>this is page</div>
    </Side>
  );
};

export default HomePage;

const Side = styled.div`
  ${layout}
`;
