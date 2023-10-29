function task1() {
      let arr=[4, 9, 36, 49, 16, 100];
      let summa=arr.reduce(function(sum, elem) {
            if (elem%2==0)
                  sum+=Math.sqrt(elem);
            return sum;
      }, 0);
      alert (`Сумма квадратных корней для всех четных чисел целочисленного массива ${arr} = ${summa}`);
}