import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, Navigations } from "./style";
import { imageUrl } from "../../../shared/utility";
import { FlexBox } from "../../../shared/flexBox";
import { rootPath } from "../../../logic/paths";
import ConnectWallet from "../../../shared/connectwallet/ConnectWallet";
import { useWeb3React } from "@web3-react/core";

export const Navbar = () => {
  const { account, deactivate, library, chainId } = useWeb3React();
  console.log(account);
  return (
    <HeaderContainer>
      <FlexBox>
        <LogoContainer>{/* <img src={imageUrl} alt="" /> */}</LogoContainer>

        <Navigations>
          {/* <Link to={rootPath}>Dashboard</Link>
          <Link to={rootPath}>About</Link>
          <Link to={rootPath}>Blog</Link>
          <Link to={rootPath}>Contact Us</Link> */}
          <ConnectWallet
            connectWallet={account ? true : false}
            walletAddress={account}
            setConnectWallet={""}
            showWalletContent
            closeWalletModal={() => null}
            showLogout={(e: any) => null}
            menu={""}
          />
        </Navigations>
      </FlexBox>
    </HeaderContainer>
  );
};
