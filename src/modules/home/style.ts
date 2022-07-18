import styled from "styled-components";
import { imageUrl } from "../../shared/utility";
import { colors } from "../../styles/theme";

export const HomeBody = styled.div`
  color: #ffff;
`;
export const HeadingBlock = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
`;
export const SectionBlock = styled.section`
  margin: 100px 30px;
  padding-right: 85px;
  .headings {
    font-size: 40px;
    text-transform: uppercase;
    overflow-wrap: normal;
    font-weight: 400;
    cursor: pointer;
    color: #ffff;
  }
`;
export const InfoContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;

export const Grid_2 = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  align-items: center;
`;
export const Block1 = styled.div`
  .heading {
    font-size: 40px;
    overflow-wrap: normal;
    max-width: 900px;
    font-weight: 400;
    cursor: pointer;
  }
  .subHeading {
    max-width: 360px;
    font-size: 32px;
  }
  .descriptions {
    max-width: 360px;
    line-height: 140%;
    font-weight: 200;
    font-size: 20px;
    opacity: 0.8;
    color: rgb(136, 141, 155);
  }
`;
export const Block2 = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid #ffff;
  border-radius: 7px;
  overflow: hidden;
  img {
    overflow: hidden;
  }
`;
export const Grid_3 = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  row-gap: 30px;
  column-gap: 19px;
`;
export const GridRowLeft = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 16px;
  height: 100%;
`;
export const GridRowRight = styled.div`
  max-width: 375px;
  .block {
    grid-row: span 2;
    border: 1px solid #ffff;
    border-radius: 8px;
    min-height: 100%;
    background-color: #ffff;
  }
`;
export const GR_First = styled.div`
  padding: 0 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-start;
  border: 1px solid #ffff;
  border-radius: 8px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: url(${imageUrl}) no-repeat center;
    background-size: cover;
  }
  .subHeading {
    max-width: 360px;
    font-size: 32px;
  }
  .descriptions {
    max-width: 360px;
    line-height: 140%;
    font-weight: 200;
    font-size: 20px;
    opacity: 0.8;
    color: rgb(136, 141, 155);
  }
`;

export const GR_Second = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  .block {
    color: #ffff;
    border-radius: 8px;
    font-weight: 400px;
    font-size: 36px;
    border: 1px solid #ffff;
    padding: 10px 25px;
  }
`;

export const ForumStyle = styled.div`
  display: grid;
  margin: 20px 0;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  .left {
    grid-row: span 3;
    border: 1px solid #ffff;
    background: rgb(0 0 0 / 40%);
    border-radius: 8px;
  }
  .right {
    display: grid;
    grid-template-rows: auto auto auto;
    row-gap: 10px;
  }
`;

export const VoteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VoteSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const VoteInput = styled.input`
  width: 200px;
  height: 50px;
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
`;

export const VoteButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${colors.black};
  color: ${colors.white};
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;

export const CandidateCountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CountConatiner = styled.div``;
