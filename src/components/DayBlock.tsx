import styled from "styled-components";

type weekDayRange = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface IDayBlockProps {
    number: weekDayRange;
    fill: boolean;
  }

  const daysModel = {
    1 : 'S',
    2 : 'T',
    3 : 'Q',
    4 : 'Q',
    5 : 'S',
    6 : 'S',
    7 : 'D'
  }
  
  export default function DayBlock({ number, fill }: IDayBlockProps){
  
    return (
        <Block number={number} fill={fill}>
            <span>{daysModel[number]}</span>
        </Block>
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
  
  
  