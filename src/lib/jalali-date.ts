const persianCalendarParts = new Intl.DateTimeFormat(
  "en-US-u-ca-persian-nu-latn",
  {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  },
);

const currentPersianCalendarParts = new Intl.DateTimeFormat(
  "en-US-u-ca-persian-nu-latn",
  {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "Asia/Tehran",
  },
);

const persianDisplayDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const PERSIAN_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
] as const;

function getPersianParts(
  date: Date,
  formatter = persianCalendarParts,
) {
  const parts = formatter.formatToParts(date);
  const valueOf = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: valueOf("year"),
    month: valueOf("month"),
    day: valueOf("day"),
  };
}

export function getCurrentPersianYear() {
  return getCurrentPersianDateParts().year;
}

export function getCurrentPersianDateParts() {
  return getPersianParts(new Date(), currentPersianCalendarParts);
}

export function jalaliToIsoDate(year: number, month: number, day: number) {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  const gregorianYear = year + 621;

  for (let offset = 0; offset < 370; offset += 1) {
    const candidate = new Date(
      Date.UTC(gregorianYear, 2, 18 + offset, 12),
    );
    const parts = getPersianParts(candidate);

    if (
      parts.year === year &&
      parts.month === month &&
      parts.day === day
    ) {
      return candidate.toISOString().slice(0, 10);
    }
  }

  return null;
}

export function getPersianMonthLength(year: number, month: number) {
  if (month >= 1 && month <= 6) {
    return 31;
  }

  if (month >= 7 && month <= 11) {
    return 30;
  }

  if (month === 12) {
    return jalaliToIsoDate(year, month, 30) ? 30 : 29;
  }

  return 31;
}

export function jalaliToUtcDate(year: number, month: number, day: number) {
  const isoDate = jalaliToIsoDate(year, month, day);

  return isoDate ? new Date(`${isoDate}T00:00:00.000Z`) : null;
}

export function isoDateToJalaliParts(value: string) {
  const date = new Date(`${value}T12:00:00.000Z`);

  return Number.isNaN(date.getTime()) ? null : getPersianParts(date);
}

export function formatIsoDateToPersian(value: string) {
  const date = new Date(`${value}T12:00:00.000Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return persianDisplayDate.format(date);
}
