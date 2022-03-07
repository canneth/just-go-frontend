
import sameDateWithinTolerance from './sameDateWithinTolerance';

describe('sameDateWithinTolerance(d1: Date, d2: Date, tolerance?: Tolerance)', () => {
  beforeEach(() => {
    // Cleanups
    jest.restoreAllMocks();
    jest.useRealTimers();
  });
  describe('if tolerance is not provided', () => {
    it('returns true if and only if d1 and d2 are equal down to the millisecond, false otherwise', () => {
      jest.useFakeTimers();
      const date1 = new Date;
      const date2 = new Date(date1);
      expect(sameDateWithinTolerance(date1, date2)).toBe(date1.getTime() === date2.getTime());
      setTimeout(() => {
        const laterDate = new Date;
        expect(sameDateWithinTolerance(date1, laterDate)).toBe(false);
      }, 1);
      jest.runAllTimers();
    });
  });
  describe('if tolerance is specified', () => {
    it('throws a RangeError if any one of the provided tolerance values is negative', () => {
      const date = new Date;
      expect(() => sameDateWithinTolerance(date, date, { hours: -1 })).toThrowError(RangeError);
      expect(() => sameDateWithinTolerance(date, date, { minutes: -1 })).toThrowError(RangeError);
      expect(() => sameDateWithinTolerance(date, date, { seconds: -1 })).toThrowError(RangeError);
      expect(() => sameDateWithinTolerance(date, date, { milliseconds: -1 })).toThrowError(RangeError);
    });
    describe('if only tolerance.hours are specified', () => {
      it('returns true if d1 and d2 are exactly equal', () => {
        const date1 = new Date;
        const date2 = new Date(date1);
        expect(sameDateWithinTolerance(date1, date2, { hours: 5 })).toBe(true);
      });
      it('returns true if d1 and d2 are exactly tolerance.hours apart', () => {
        const hoursApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setHours(date1.getHours() + hoursApart);
        expect(sameDateWithinTolerance(date1, date2, { hours: hoursApart })).toBe(true);
      });
      it('returns true if d1 and d2 are (tolerance.hours - 1ms) apart', () => {
        const hoursApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setHours(date1.getHours() + hoursApart);
        date2.setMilliseconds(date1.getMilliseconds() - 1);
        expect(sameDateWithinTolerance(date1, date2, { hours: hoursApart })).toBe(true);
      });
      it('returns false if d1 and d2 are (tolerance.hours + 1ms) apart', () => {
        const hoursApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setHours(date1.getHours() + hoursApart);
        date2.setMilliseconds(date1.getMilliseconds() + 1);
        expect(sameDateWithinTolerance(date1, date2, { hours: hoursApart })).toBe(false);
      });
    });
    describe('if only tolerance.minutes are specified', () => {
      it('returns true if d1 and d2 are exactly equal', () => {
        const date1 = new Date;
        const date2 = new Date(date1);
        expect(sameDateWithinTolerance(date1, date2, { minutes: 5 })).toBe(true);
      });
      it('returns true if d1 and d2 are exactly tolerance.minutes apart', () => {
        const minutesApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMinutes(date1.getMinutes() + minutesApart);
        expect(sameDateWithinTolerance(date1, date2, { minutes: minutesApart })).toBe(true);
      });
      it('returns true if d1 and d2 are (tolerance.minutes - 1ms) apart', () => {
        const minutesApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMinutes(date1.getMinutes() + minutesApart);
        date2.setMilliseconds(date1.getMilliseconds() - 1);
        expect(sameDateWithinTolerance(date1, date2, { minutes: minutesApart })).toBe(true);
      });
      it('returns false if d1 and d2 are (tolerance.minutes + 1ms) apart', () => {
        const minutesApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMinutes(date1.getMinutes() + minutesApart);
        date2.setMilliseconds(date1.getMilliseconds() + 1);
        expect(sameDateWithinTolerance(date1, date2, { minutes: minutesApart })).toBe(false);
      });
    });
    describe('if only tolerance.seconds are specified', () => {
      it('returns true if d1 and d2 are exactly equal', () => {
        const date1 = new Date;
        const date2 = new Date(date1);
        expect(sameDateWithinTolerance(date1, date2, { seconds: 5 })).toBe(true);
      });
      it('returns true if d1 and d2 are exactly tolerance.seconds apart', () => {
        const secondsApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setSeconds(date1.getSeconds() + secondsApart);
        expect(sameDateWithinTolerance(date1, date2, { seconds: secondsApart })).toBe(true);
      });
      it('returns true if d1 and d2 are (tolerance.seconds - 1ms) apart', () => {
        const secondsApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setSeconds(date1.getSeconds() + secondsApart);
        date2.setMilliseconds(date1.getMilliseconds() - 1);
        expect(sameDateWithinTolerance(date1, date2, { seconds: secondsApart })).toBe(true);
      });
      it('returns false if d1 and d2 are (tolerance.seconds + 1ms) apart', () => {
        const secondsApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setSeconds(date1.getSeconds() + secondsApart);
        date2.setMilliseconds(date1.getMilliseconds() + 1);
        expect(sameDateWithinTolerance(date1, date2, { seconds: secondsApart })).toBe(false);
      });
    });
    describe('if only tolerance.milliseconds are specified', () => {
      it('returns true if d1 and d2 are exactly equal', () => {
        const date1 = new Date;
        const date2 = new Date(date1);
        expect(sameDateWithinTolerance(date1, date2, { milliseconds: 5 })).toBe(true);
      });
      it('returns true if d1 and d2 are exactly tolerance.milliseconds apart', () => {
        const msApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + msApart);
        expect(sameDateWithinTolerance(date1, date2, { milliseconds: msApart })).toBe(true);
      });
      it('returns true if d1 and d2 are (tolerance.milliseconds - 1ms) apart', () => {
        const msApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + msApart - 1);
        expect(sameDateWithinTolerance(date1, date2, { milliseconds: msApart })).toBe(true);
      });
      it('returns false if d1 and d2 are (tolerance.milliseconds + 1ms) apart', () => {
        const msApart = 5;
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + msApart + 1);
        expect(sameDateWithinTolerance(date1, date2, { milliseconds: msApart })).toBe(false);
      });
    });
    describe('if all properties of tolerance are specified', () => {
      it('returns true if d1 and d2 are exactly equal', () => {
        const tolerance = {
          hours: 4,
          minutes: 10,
          seconds: 50,
          milliseconds: 234
        };
        const date1 = new Date;
        const date2 = new Date(date1);
        expect(sameDateWithinTolerance(date1, date2, tolerance)).toBe(true);
      });
      it('returns true if d1 and d2 are exactly totalTolerance apart', () => {
        const tolerance = {
          hours: 4,
          minutes: 10,
          seconds: 50,
          milliseconds: 234
        };
        const totalTolerance = (
          tolerance.hours * 60 * 60 * 1000
          + tolerance.minutes * 60 * 1000
          + tolerance.seconds * 1000
          + tolerance.milliseconds
        );
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + totalTolerance);
        expect(sameDateWithinTolerance(date1, date2, tolerance)).toBe(true);
      });
      it('returns true if d1 and d2 are (totalTolerance - 1ms) apart', () => {
        const tolerance = {
          hours: 4,
          minutes: 10,
          seconds: 50,
          milliseconds: 234
        };
        const totalTolerance = (
          tolerance.hours * 60 * 60 * 1000
          + tolerance.minutes * 60 * 1000
          + tolerance.seconds * 1000
          + tolerance.milliseconds
        );
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + totalTolerance - 1);
        expect(sameDateWithinTolerance(date1, date2, tolerance)).toBe(true);
      });
      it('returns false if d1 and d2 are (totalTolerance + 1ms) apart', () => {
        const tolerance = {
          hours: 4,
          minutes: 10,
          seconds: 50,
          milliseconds: 234
        };
        const totalTolerance = (
          tolerance.hours * 60 * 60 * 1000
          + tolerance.minutes * 60 * 1000
          + tolerance.seconds * 1000
          + tolerance.milliseconds
        );
        const date1 = new Date;
        const date2 = new Date(date1);
        date2.setMilliseconds(date1.getMilliseconds() + totalTolerance + 1);
        expect(sameDateWithinTolerance(date1, date2, tolerance)).toBe(false);
      });
    });
  });
});