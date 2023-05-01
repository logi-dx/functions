export type TimeOnly = {
  second: number;
  minute: number;
  hour: number;
};

export const toTimeOnly = (input: Date): TimeOnly => {
  const second: number = input.getSeconds();
  const minute: number = input.getMinutes();
  const hour: number = input.getHours();

  return {
    second,
    minute,
    hour,
  };
};
