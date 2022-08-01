import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useHabits from '../../hooks/useHabits';

const Speedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false }
)

export default function SpeedometerComponent() {

  const { getTodayProgressPercent } = useHabits();
  const router = useRouter();

  return (
    <div onClick={() => router.push('/dashboard/today')} style={{background: 'gray', width: 170, height: 170, borderRadius: '60%', cursor: ' pointer'}}>
    <Speedometer
      fluidWidth
      needleHeightRatio={0.7}
      minValue={0}
      maxValue={100}
      labelFontSize={'20px'}
      value={getTodayProgressPercent()}
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
  </div>
  )
}

