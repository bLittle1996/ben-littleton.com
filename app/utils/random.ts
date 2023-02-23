export function randomNumberBetween(a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return Math.random() * (max - min) + min;
}
