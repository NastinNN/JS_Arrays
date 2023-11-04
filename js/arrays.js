function task1() {
      let arr=[4, 9, 36, 49, 16, 100];
      let summa=arr.reduce(function(sum, elem) {
            if (elem%2==0)
                  sum+=Math.sqrt(elem);
            return sum;
      }, 0);
      console.log(`Исходный массив: ${arr}`);
      console.log(`Сумма квадратных корней для всех четных чисел целочисленного массива [${arr}] = ${summa}`);
}

function task2() {
      let arr=[4, -1, 36, 5, 16, -45, 9, -3];
      let summa=arr.reduce(function(sum, elem) {
            if (elem>0 && elem<10)
                  sum+=elem;
            return sum;
      }, 0);
      console.log(`Исходный массив: ${arr}`);
      console.log(`Сумма элементов массива [${arr}], которые больше 0 и меньше 10 = ${summa}`);
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
      console.log(`Исходный массив: ${arr}`);
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
      console.log(`Исходный массив: ${arr}`);
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
      console.log(`Исходный массив: ${arr}`);
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

function task7() {
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
      console.log (`Исходный массив: ${arr}`);
      let sumchet=arr.reduce((sum, elem, index) =>{
            if (index%2==0)
            sum=+sum + +elem;
            return sum;
      }, 0);
      let sumnechet=arr.reduce((sum, elem, index) =>{
            if (index%2!=0)
            sum=+sum+ +elem;
            return sum;
      }, 0);
      console.log(`Сумма элементов на четных позиях, деленная на сумму элементов на нечетных позициях = ${sumchet/sumnechet}`);
}

function task8() {
      let num;
      while (true) {
            num=prompt(`Введите число`);
            if (isNaN(num))
                  alert(`Введено не число. Попробуйте снова`);
            else
                  break;
      }
      console.log(`Изначальное число: ${num}`);
      num=num.toString(8);
      let arr=num.split("").map((elem) => +elem+1);
      console.log(`Преобразованное число: ${arr.join("")}`);
}