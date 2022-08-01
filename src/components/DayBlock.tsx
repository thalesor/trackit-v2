import styled from "styled-components";
import { Tooltip } from '@nextui-org/react';

export type weekDayRange = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface IDayBlockProps {
    number: weekDayRange;
    onClick?: () => void;
    fill: boolean;
  }

  const daysModel = {
    1 : 'Segunda',
    2 : 'Terça',
    3 : 'Quarta',
    4 : 'Quinta',
    5 : 'Sexta',
    6 : 'Sábado',
    7 : 'Domingo'
  }
  
  export default function DayBlock({ number, fill, onClick }: IDayBlockProps){
  
    return (
      <Tooltip content={daysModel[number]} color={"invert"}>
          <Block onClick={onClick} number={number} fill={fill}>
            <span>{daysModel[number].charAt(0)}</span>
        </Block>
        </Tooltip>
    )
  }

  const Block = styled.div<IDayBlockProps>`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D5D5D5;
    background: ${props => props.fill ? '#CFCFCF' : "#FFF"};
    color: ${props => props.fill ? '#FFF' : "#DBDBDB"};
    
    span {
        font-size: 20px;
        font-weight: 400;
    }
  `;
  
  
  