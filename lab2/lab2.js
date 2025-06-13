/*
 * Возвращает x в степени целого числа n.
 *
 * @param {number} x - возводимое в степень число.
 * @param {number} n - степень, должна быть целым числом.
 * @return {number} NaN, если n - нецелое или x = 0 и n = 0, в остальных случаях x в степени n.
*/
export function pow(x, n) {

    if (Math.floor(n) - n >= Number.EPSILON) {
        return NaN;
    }

    if (n == 0) {
        if (x == 0) {
            return NaN;
        }
        return 1;
    }

    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    let x1 = x;
    for (let i = 1; i < n; i++) {
        x *= x1;
    }

    return x;

}

/*
 * Возвращает сумму всех натуральных чисел от 1 до n.
 *
 * @param {number} n - максимальное натуральное число, входящее в сумму.
 * @return {number} NaN, если n - не натуральное, в остальных случаях сумму чисел от 1 до n.
*/
export let sumTo = new Function('n', `if (Math.floor(n) - n >= Number.EPSILON || n < 1) {
        return NaN;
    }
    
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    
    return s;`);

/*
 * Определяет, високосный ли год под номером year.
 * Високосным считается год, делящийся на 4, но не делящийся на 100, или делящийся на 400.
 *
 * @param {number} year - номер года.
 * @return {boolean} true, если year соответствует високосному году, а в остальных случаях - false.
*/
export function isLeapYear(year) {

    return year % 4 == 0 ?
        year % 100 == 0 ?
            year % 400 == 0 ? true
            : false
        : true
    : false;
        
}

/*
 * Возвращает факториал n.
 *
 * @param {number} n - неотрицательное число.
 * @return {BigInt|number} NaN, если n - отрицательное или дробное, в остальных случаях - факториал n.
*/
export function factorial(n) {

    if (Math.floor(n) - n >= Number.EPSILON || n < 0) {
        return NaN;
    }

    if (n == 0n) {
        return 1n;
    }
    else {
        return BigInt(n) * factorial(n - 1);
    }

}

/*
 * Возвращает число Фибоначчи под номером n.
 * Считается, что fib(0) = 0 и fib(1) = 1.
 *
 * @param {number} n - целое число.
 * @return {number|BigInt} NaN, если n - нецелое, в остальных случаях - соответствующее число Фибоначчи.
*/
export function fib(n) {
	
    if (Math.floor(n) - n >= Number.EPSILON) {
        return NaN;
    }
	
    let prev = -1n;
    let cur = 0n;
    let t = 0n;
    
    let i = 0;
    if (n) {
        // Количество знаков в двоичной записи
	    i = Math.floor(Math.log2(Math.abs(n))) + 1;
    }

    while (i--) {

        // Удвоение номера числа Фибоначчи
	    t = cur * (2n * prev + cur);
        prev = prev * prev + cur * cur;
        cur = t;

        // Если i-ый разряд n == 1, то рассчитывается следующее число Фибоначчи
        if (Math.floor(n % 2 ** (i + 1) / 2 ** i) != 0) {
            t = cur + prev;
            prev = cur;
            cur = t;
        }
        
    }
    
	cur = n < 0 && n % 2 == 0 ? -cur : cur; 
    
    return cur;
    
}

/*
 * Возвращает функцию сравнения с x.
 * Возвращаемая функция возвращает true, если её аргумент больше x, null, если он равен x, и false, если он меньше x.
 *
 * @param {number} x - целое число.
 * @return {null|Function} null, если x - нецелое, в остальных случаях - вышеописанную функцию.
*/
export function compare(x) {
	
    if (Math.floor(x) - x >= Number.EPSILON) {
        return null;
    }
	
    return function(y) {

        return y > x ? true
            : y == x ? null
            : false;

    }

}

/*
 * Возвращает сумму передаваемых чисел.
 *
 * @param {Array} ...args - массив чисел.
 * @return {number} сумму чисел из ...args.
*/
export function sum(...args) {

    let s = 0;

    for (let i of args) {
        s += i;
    }

    return s;

}

/*
 * Возвращает объект с добавленным скрытым свойством blackSpot со значением true.
 *
 * @param {object} obj - объект.
 * @return {object} тот же объект obj, но с новым свойством blackSpot.
*/
export function addBlackSpot(obj) {
	
    obj[Symbol.for('blackSpot')] = true;
    return obj;
	
}
