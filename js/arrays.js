function task1() {
      let arr=[4, 9, 36, 49, 16, 100];
      let summa=arr.reduce(function(sum, elem) {
            if (elem%2==0)
                  sum+=Math.sqrt(elem);
            return sum;
      }, 0);
      alert (`Сумма квадратных корней для всех четных чисел целочисленного массива [${arr}] = ${summa}`);
}

function task2() {
      let arr=[4, -1, 36, 5, 16, -45, 9, -3];
      let summa=arr.reduce(function(sum, elem) {
            if (elem>0 && elem<10)
                  sum+=elem;
            return sum;
      }, 0);
      alert (`Сумма элементов массива [${arr}], которые больше 0 и меньше 10 = ${summa}`);
}

function task3() {
      let arr=[];
      while(true)
      {
            while(true) /* если пользователь ввел неправильное значение, попытка ввода будет повторяться до тех пор, пока не будет введено целое число */
            {
            let x=prompt("Введите целое число массива");
            if (!isNaN(x) && Number.isInteger(Number(x))) /* Проверка того, введено ли число и целое ли оно */
                 {
                  arr.push(x);
                  break;
                 }
            else 
                  alert("Введено не число или нецелое число. Попробуйте снова");
            }
            if (!confirm("Внести еще один элемент?")) break;
      }
      let check=arr.every((elem) => elem%2==0);
      return check;
}

function task4() {
      let arr=[];
      while(true)
      {
            while(true) /* если пользователь ввел неправильное значение, попытка ввода будет повторяться до тех пор, пока не будет введено целое число */
            {
            let x=prompt("Введите целое число массива");
            if (!isNaN(x) && Number.isInteger(Number(x))) /* Проверка того, введено ли число и целое ли оно */
                 {
                  arr.push(x);
                  break;
                 }
            else 
                  alert("Введено не число или нецелое число. Попробуйте снова");
            }
            if (!confirm("Внести еще один элемент?")) break;
      }
      let newArr=arr.filter((elem) => (elem%5==0 && elem!=0));
      return newArr;
}

function task5 () {
      let arr=[];
      while(true)
      {
            while(true) /* если пользователь ввел неправильное значение, попытка ввода будет повторяться до тех пор, пока не будет введено целое число */
            {
            let x=prompt("Введите число массива");
            if (!isNaN(x)) 
                 {
                  arr.push(x);
                  break;
                 }
            else 
                  alert("Введено не число. Попробуйте снова");
            }
            if (!confirm("Внести еще один элемент?")) break;
      }
      let sum=arr.reduce((summa,elem) => +summa + +elem, 0);
      let srAr=sum/arr.length;
      return srAr.toFixed(1);
}

function task6() {
      let arr=[];
      while(true)
      {
            while(true) /* если пользователь ввел неправильное значение, попытка ввода будет повторяться до тех пор, пока не будет введено целое число */
            {
            let x=prompt("Введите число массива");
            if (!isNaN(x)) 
                 {
                  arr.push(x);
                  break;
                 }
            else 
                  alert("Введено не число. Попробуйте снова");
            }
            if (!confirm("Внести еще один элемент?")) break;
      }
      console.log(`Изначальный массив: ${arr}`);
      let elem=arr.shift();
      arr.push(elem);
      console.log(`Измененный массив: ${arr}`);
}