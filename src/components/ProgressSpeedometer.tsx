import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useHabits from '../../hooks/useHabits';
import styled from "styled-components";

const Speedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false }
)

interface IContainerSpeedometerProps {
  onClick: () => void;
  rainbow: boolean
}

export default function SpeedometerComponent() {

  const { progressAmount } = useHabits();
  const router = useRouter();

  return (
    <ContainerSpeedometer onClick={() => router.push('/dashboard/today')} rainbow={progressAmount >= 100}>
    <Speedometer
      fluidWidth
      needleHeightRatio={0.7}
      minValue={0}
      maxValue={100}
      labelFontSize={'20px'}
      value={progressAmount}
      currentValueText="Nível de progresso"
      customSegmentLabels={[
        {
          text: '😪',
          position: 'INSIDE',
          color: '#555',
        },
        {
          text: '😞',
          position: 'INSIDE',
          color: '#555',
        },
        {
          text: '🙂',
          position: 'INSIDE',
          color: '#555',
          fontSize: '19px',
        },
        {
          text: '😄',
          position: 'INSIDE',
          color: '#555',
        },
        {
          text: '😝',
          position: 'INSIDE',
          color: '#555',
        },
      ]}
      ringWidth={30}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#fff'}
      textColor={'#fff'}
    />
  </ContainerSpeedometer>
  )
}

const ContainerSpeedometer = styled.div<IContainerSpeedometerProps>`
    animate: 0.5s;
    transition: 0.5s;
    opacity: 1;
    background: gray;
    width: 170px;
    height: 170px;
    border-radius: 60%;
    cursor: pointer;
    position: relative;

    ${props => props.rainbow === true && ` 
    animation: animate 8s linear infinite;
	  animate: 0.5s;
	  transition: 0.5s;

    &:before 
    {
      animate: 0.5s;
      transition: 0.5s;
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      top: -10px;
      left: -15px;
      right: -5px;
      bottom: -5px;
      z-index: -1;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 400%;
      border-radius: 60%;
      opacity: 0;
      transition: 0.5s;

      filter: blur(10px);
      opacity: 1;
      animation: animate 8s linear infinite;
    }
    `}

    @keyframes animate {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }
  `;


