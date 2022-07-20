import { exampleData } from "./utility";
import {
  HomeBody,
  HeadingBlock,
  SectionBlock,
  InfoContainer,
  Grid_2,
  Block1,
  Block2,
  Grid_3,
  GridRowLeft,
  GridRowRight,
  GR_First,
  GR_Second,
  ForumStyle,
  VoteContainer,
  VoteInput,
  VoteButton,
  VoteSubmitContainer,
  CandidateCountContainer,
  CountConatiner,
} from "./style";

import { withTheme, ThemeProps } from "styled-components";
import { Navbar } from "../app/navbar/Navbar";
import { PageContainer } from "../../styles/styled";
import {
  SharedTitle,
  SharedDescription,
  SharedButton,
  SharedDetailBlock,
  SharedForum,
} from "../../shared/shared";
import { FlexBox } from "../../shared/flexBox";
import { imageUrl } from "../../shared/utility";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useVote } from "../../shared/hooks/useVote";
import { voteAbi } from "../../blockchain/contracts/abi";
import { voteAddress } from "../../blockchain/contracts/addresses";
import Web3 from "web3";

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props;
  const { account, active } = useWeb3React();
  const [candidateCount, setCandidateCount] = useState<string>("");
  const { getCandidatesCount, checkIfVoted, vote } = useVote();
  const [isVoted, setIsVoted] = useState<boolean>(false);

  const getCandidateDetails = async () => {
    if (account && active) {
      let count = await getCandidatesCount();
      setCandidateCount(count);
    }
  };

  const isVoters = async () => {
    if (account) {
      let value = await checkIfVoted(account);
      setIsVoted(value);
    }
  };

  const onVote = async (candidateId: string) => {
    if (account) {
      let voteTx = await vote(candidateId);
      isVoters();
      console.log("voteTx", voteTx);
    }
  };

  const event = async () => {
    const web3 = new Web3(
      Web3.givenProvider || "https://ropsten.infura.io/v3/"
    );

    const contractInstance = new web3.eth.Contract(voteAbi, voteAddress);

    let options = {
      filter: { _candidateId: "1" },
      fromBlock: 0,
      toBlock: "latest",
    };

    const pastEvent = await contractInstance.getPastEvents(
      "votedEvent",
      options,
      (err, events) => {
        console.log("events", events);
      }
    );
  };

  useEffect(() => {
    getCandidateDetails();
    isVoters();
    event();
  }, [account]);

  return (
    <PageContainer noPadding={true}>
      <Navbar />
      <VoteContainer>
        <VoteSubmitContainer>
          <CandidateCountContainer>
            <CountConatiner>Candidate Count: {candidateCount}</CountConatiner>
            {isVoted && <CountConatiner>You have already voted</CountConatiner>}
          </CandidateCountContainer>
          <VoteButton onClick={() => onVote("1")} disabled={isVoted}>
            Vote For Candidate 1
          </VoteButton>
          <VoteButton onClick={() => onVote("2")} disabled={isVoted}>
            Vote For Candidate 2
          </VoteButton>
        </VoteSubmitContainer>
      </VoteContainer>
      {/* <HomeBody>
        <HeadingBlock>
          <SharedTitle>
            <span>Magnifient</span>
            Traverse
          </SharedTitle>

          <SharedDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, nihil odio modi sed asperiores facere? Nobis
            consectetur distinctio voluptatum maiores, maxime aliquid commodi
            harum ipsum?
          </SharedDescription>
          <SharedButton>Explore More</SharedButton>
        </HeadingBlock>

        <SectionBlock>
          <InfoContainer>
            <FlexBox>
              {exampleData.map((volume, i: number) => (
                <SharedDetailBlock key={i}>
                  <div className="title">{volume.title}</div>
                  <div className="description">{volume.description}</div>
                </SharedDetailBlock>
              ))}
            </FlexBox>
          </InfoContainer>
        </SectionBlock>

        <SectionBlock>
          <Grid_2>
            <Block1>
              <h1 className="headings and system">Ecosystem</h1>
              <h3 className="subHeading">Lorem ipsum dolor sit amet.</h3>
              <p className="descriptions">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                ducimus quis quasi numquam, officiis ratione dignissimos non
                aspernatur minima nemo.
              </p>
            </Block1>
            <Block2>
              <img src={imageUrl} alt="" />
            </Block2>
          </Grid_2>
        </SectionBlock>

        <SectionBlock>
          <h1 className="headings">Developers</h1>
          <Grid_3>
            <GridRowLeft>
              <GR_First>
                <h3 className="subHeading">Lorem ipsum dolor sit amet.</h3>
                <p className="descriptions">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere ducimus quis quasi numquam, officiis ratione
                  dignissimos non aspernatur minima nemo.
                </p>
                <SharedButton>Explore</SharedButton>
              </GR_First>
              <GR_Second>
                <div className="block">WhitePaper</div>
                <div className="block">Test</div>
              </GR_Second>
            </GridRowLeft>
            <GridRowRight>
              <div className="block"></div>
            </GridRowRight>
          </Grid_3>
        </SectionBlock>
        <SectionBlock>
          <div className="headings">protocol governance</div>
          <ForumStyle>
            <div className="left"></div>
            <div className="right">
              <SharedForum>
                <h3>headings</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </SharedForum>
              <SharedForum>
                <h3>headings</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </SharedForum>
              <SharedForum>
                <h3>headings</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, earum!
                </p>
              </SharedForum>
            </div>
          </ForumStyle>
        </SectionBlock>
      </HomeBody> */}
    </PageContainer>
  );
});
