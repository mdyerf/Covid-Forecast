const today = new Date();
function toString(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return `${y}-${m}-${d}`;
}

today.setDate(today.getDate() - 1);
const yesterday = toString(today);
today.setDate(today.getDate() - 6);
const lastWeek = toString(today);
today.setDate(today.getDate() - 23);
const lastMonth = toString(today);

const dateOptions = [
  { value: yesterday, label: "recent 24 hours" },
  { value: lastWeek, label: "last week" },
  { value: lastMonth, label: "last month" },
];
export default dateOptions;
