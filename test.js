const words = [
  "один", "два", "три", "чотири", "п'ять",
  "шість", "сім", "вісім", "дев'ять", "десять",
  "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять",
  "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять", "двадцять"
];

const tensWords = [
  "", "", "двадцять", "тридцять", "сорок", "п'ятдесят",
  "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"
];

for (let i = 1; i <= 100; i++) {
  if (i <= 20) {
    console.log(i + " " + words[i - 1]);
  } else if (i % 10 === 0 && i < 100) {
    console.log(i + " " + tensWords[i / 10]);
  } else if (i < 100) {
    const tensDigit = Math.floor(i / 10);
    const onesDigit = i % 10;
    console.log(i + " " + tensWords[tensDigit] + "-" + words[onesDigit - 1]);
  } else {
    console.log("100 сто");
  }
}
