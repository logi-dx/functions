export type DateOnly = {
  day: number;
  month: number;
  year: number;
};

export const toDateOnly = (input: Date): DateOnly => {
  const day: number = input.getDate();
  const month: number = input.getMonth() + 1;
  const year: number = input.getFullYear();

  return {
    day,
    month,
    year,
  };
};
