const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log(transactions);

//PIPELINE
const totalDepositsUSD = transactions
  .filter(trans => trans > 0)
  .map((trans, i, arr) => {
    return trans * eurToUsd;
  })
  .reduce((acc, trans) => acc + trans, 0);

console.log(totalDepositsUSD); //5522.000000000001

const totalWithdrawalUSD = transactions
  .filter(trans => trans < 0)
  .map(trans => {
    return trans * eurToUsd;
  })
  .reduce((acc, trans) => acc + trans, 0);

console.log(totalWithdrawalUSD); //-1298.0000000000002

const currBalance = totalDepositsUSD + totalWithdrawalUSD; //4224.000000000001
console.log(currBalance);
