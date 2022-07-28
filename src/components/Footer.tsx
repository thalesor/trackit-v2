import { Link } from "@nextui-org/react";
import { useRouter } from "next/router";
import useHabits from "../../hooks/useHabits";
import SpeedometerComponent from './ProgressSpeedometer';

  export default function Footer(){
    const { getTodayProgressPercent } = useHabits();
    const router = useRouter();
    const calculateProgressColor = () =>
    {
      const percent = getTodayProgressPercent();
      if(percent <= 35)
      return 'red';
      else if(percent > 35 && percent <= 65)
      return 'yellow';

      return 'green';
    }

    return (
        <footer style={{ height: 70, padding: '10px 25px', zIndex: 2, background: '#EBEBEB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link onClick={() => router.push('/dashboard/habits')} block color="primary">
        Hábitos
      </Link>
      <div>
      <SpeedometerComponent/>
    </div>
      <Link onClick={() => router.push('/dashboard/history')} block color="primary">
        Histórico
      </Link>
        </footer>
    )
  }


  
  
  