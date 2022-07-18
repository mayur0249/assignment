import { useWeb3React } from "@web3-react/core";
import { voteAbi } from "../../blockchain/contracts/abi";
import { voteAddress } from "../../blockchain/contracts/addresses";
import Web3 from "web3";

export const useVote = () => {
  const { account } = useWeb3React();

  const web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/");

  const contractInstance = new web3.eth.Contract(voteAbi, voteAddress);

  const vote = async (id: string) => {
    try {
      const tx = await contractInstance.methods.vote(id).send({
        from: account,
      });

      return tx;
    } catch (error) {
      console.error("vote error", error);
    }
  };

  const checkIfVoted = async (address: string): Promise<any> => {
    try {
      const tx = await contractInstance.methods.voters(address).call();
      return tx;
    } catch (error) {
      console.error("getVoters error", error);
    }
  };

  const getCandidatesCount = async () => {
    try {
      const candidatesCount = await contractInstance.methods
        .candidatesCount()
        .call();
      return candidatesCount;
    } catch (error) {
      console.error("getCandidatesCount error", error);
    }
  };

  return {
    vote,
    checkIfVoted,
    getCandidatesCount,
  };
};
