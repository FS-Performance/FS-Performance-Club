import React, { useState, useEffect, useCallback } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft | {} => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft] && timeLeft[interval as keyof TimeLeft] !== 0) {
      return;
    }
    
    timerComponents.push(
      <div key={interval} className="text-center bg-white/10 p-4 rounded-lg flex-1">
        <span className="text-4xl md:text-5xl font-bold text-brand-orange">
          {String(timeLeft[interval as keyof TimeLeft]).padStart(2, '0')}
        </span>
        <span className="block text-sm uppercase text-gray-300 mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
      {timerComponents.length ? timerComponents : <span>Inscrições encerradas!</span>}
    </div>
  );
};

export default CountdownTimer;