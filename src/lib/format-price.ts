const tomanFormatter = new Intl.NumberFormat("fa-IR");

export function formatToman(value: number) {
  return `${tomanFormatter.format(value)} تومان`;
}
