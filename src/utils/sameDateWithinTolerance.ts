
interface Tolerance {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export default function sameDateWithinTolerance(d1: Date, d2: Date, tolerance?: Tolerance) {
  if (!tolerance) return (d1.getTime() === d2.getTime());

  if (tolerance.hours && tolerance.hours < 0) throw new RangeError('hours must be a non-negative number');
  if (tolerance.minutes && tolerance.minutes < 0) throw new RangeError('minutes must be a non-negative number');
  if (tolerance.seconds && tolerance.seconds < 0) throw new RangeError('seconds must be a non-negative number');
  if (tolerance.milliseconds && tolerance.milliseconds < 0) throw new RangeError('milliseconds must be a non-negative number');

  const toleranceHoursInMs = tolerance.hours ? tolerance.hours * 60 * 60 * 1000 : 0;
  const toleranceMinutesinMs = tolerance.minutes ? tolerance.minutes * 60 * 1000 : 0;
  const toleranceSecondsinMs = tolerance.seconds ? tolerance.seconds * 1000 : 0;
  const totalToleranceInMs = (
    toleranceHoursInMs
    + toleranceMinutesinMs
    + toleranceSecondsinMs
    + (tolerance.milliseconds ? tolerance.milliseconds : 0)
  );
  return (Math.abs(d1.getTime() - d2.getTime()) <= totalToleranceInMs);
}