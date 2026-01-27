export const getOrdinalSuffix = (n: number): 'st' | 'nd' | 'rd' | 'th' => {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return 'th';

  switch (n % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};
