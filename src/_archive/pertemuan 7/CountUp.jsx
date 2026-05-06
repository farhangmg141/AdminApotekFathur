import { useEffect, useState } from "react";

export default function CountUp({
  from = 0,
  to = 100,
  duration = 2,
  delay = 0,
  onEnd,
  className,
  children,
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const steps = 60;
      const stepTime = (duration * 1000) / steps;
      const increment = (to - from) / steps;
      let current = from;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setCount(to);
          clearInterval(timer);
          onEnd?.();
        } else {
          setCount(Math.round(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [from, to, duration, delay, onEnd]);

  return (
    <span className={className}>
      {children ? children(count) : count}
    </span>
  );
}
