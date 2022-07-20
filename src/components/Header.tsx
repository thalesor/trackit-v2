import { Avatar } from "@nextui-org/react";
import Text from "@nextui-org/react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

interface IHeaderProps {
    children?: React.ReactNode;
  }
  
  export default function Header({ children }: IHeaderProps){
    const { authData } = useAuth();    
    return (
        <nav style={{ padding: '10px 25px', zIndex: 2, background: '#126BA5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo>TrackIt</Logo>
            <Avatar
                src={authData?.image}
                css={{ size: "$18" }}
                color="gradient"
                bordered
            />
        </nav>
    )
  }

  const Logo = styled('Text') `
  @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
  font-family: "Playball", cursive;
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  `;
  
  
  