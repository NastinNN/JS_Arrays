function task1() {
      let arr=[4, 9, 36, 49, 16, 100];
      let summa=arr.reduce(function(sum, elem) {
            if (elem%2==0)
                  sum+=Math.sqrt(elem);
            return sum;
      }, 0);
      alert (`Сумма квадратных корней для всех четных чисел целочисленного массива ${arr} = ${summa}`);
}

function task2() {
      let arr=[4, -1, 36, 5, 16, -45, 9, -3];
      let summa=arr.reduce(function(sum, elem) {
            if (elem>0 && elem<10)
                  sum+=elem;
            return sum;
      }, 0);
      alert (`Сумма элементов массива ${arr}, которые больше 0  меньше 10 = ${summa}`);
}

function task3() {
      let arr=[];
      while(true)
      {
            let x=prompt("Введите число массива");
            if (!isNaN(x) && Number.isInteger(Number(x))) /* Проверка того, введено ли число и целое ли оно */
                  arr.push(x);
            else alert("Введено не число или нецелое число");
            if (!confirm("Внести еще один элемент?")) break;
      }
      let check=arr.every((elem) => elem%2==0);
      return check;
}