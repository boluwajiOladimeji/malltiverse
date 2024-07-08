// export const generateAmountOptions = (number) => {
//   return Array.from({ length: 4 }, (_, index) => {
//     return <FaRegStar className={`${index < number ? 'bg-yellow-400' : ''}`} />;
//   });
// };

export function formatNumber(number) {
  return 'N' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
}

export function total() {}

export function calculateTotal(arr) {
  let total = 0;
  for (let item of arr) {
    total += item.totalPrice;
  }
  return total;
}
export function calculateDiscount(arr) {
  let total = calculateTotal(arr);
  let discount = 0.05 * total;
  return Math.round(discount);
}

export function fullTotal(arr) {
  let total = calculateTotal(arr);
  let discount = calculateDiscount(arr);
  let fullAmount = total + 1500 - discount;
  return fullAmount;
}

// Example usage:
