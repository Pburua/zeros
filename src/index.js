module.exports = function zeros(expression) {
    let array = expression.split('*');
    console.log(array);

    function calcAm2(number_what, number_where) {
        // console.log(number_where);
        // ищем количество чисел1 в факториале числа2

        let multiples_amount = Math.floor(number_where / number_what);
        // количество чисел, кратных числу1 в факториале числа2

        let degree_amount = 1, sum_degree_amount = 0;
        for (; Math.pow(number_what, degree_amount) <= number_where; degree_amount++) {
            sum_degree_amount += degree_amount;
        }
        degree_amount--;
        // количество чисел - стпепеней числа1 в факториале числа2
        // количество чисел1 в степенях числа1 в факториале 2

        let non_degree_amount = multiples_amount - degree_amount;
        // количество чисел - не степеней числа 1 в факториале числа2
        let sum_non_degree_amount = non_degree_amount;
        // количество чисел1 не в степенях числа 1 в факториале числа2

        // искомое количество
        return sum_degree_amount + sum_non_degree_amount;
    }

    function calcAm5(number_what, number_where) {

        let multiples_amount = Math.floor(number_where / number_what);

        let degree_amount = 1, sum_degree_amount = 0;
        for (; Math.pow(number_what, degree_amount) <= number_where; degree_amount++) {
            sum_degree_amount += degree_amount;
        }
        degree_amount--;

        let multiples2_amount = Math.floor(number_where / 25)-1;
        if (multiples2_amount < 0)
            multiples2_amount = 0;

        let non_degree_amount = multiples_amount - degree_amount - multiples2_amount;
        let sum_non_degree_amount = non_degree_amount;

        return sum_degree_amount + sum_non_degree_amount + multiples2_amount*2;
    }

    function calcAmEven5(number_where) {
        let number_what = 5;

        let multiples_amount = Math.floor(number_where / 10);

        let multiples2_amount = Math.floor(number_where / 50);

        let degree1_amount = multiples_amount - multiples2_amount;
        let sum_degree1_amount = degree1_amount;

        let sum_degree2_amount = multiples2_amount * 2;

        return sum_degree2_amount + sum_degree1_amount;
    }

    function calcAmOdd5(number_where) {
        let number_what = 5;

        let multiples_amount = Math.floor(number_where / number_what)-Math.floor(number_where / 10);

        let degree_amount = 1, sum_degree_amount = 0;
        for (; Math.pow(number_what, degree_amount) <= number_where; degree_amount++) {
            sum_degree_amount += degree_amount;
        }
        degree_amount--;
        // console.log(multiples_amount);

        let multiples2_amount = Math.floor(number_where / 25)-1-Math.floor(number_where / 50);
        if (multiples2_amount < 0)
            multiples2_amount = 0;

        let non_degree_amount = multiples_amount - degree_amount - multiples2_amount;
        let sum_non_degree_amount = non_degree_amount;

        return sum_degree_amount + sum_non_degree_amount + multiples2_amount * 2;
    }

    let amount_of_2 = 0, amount_of_5 = 0;

    for (let argument in array) {
        let str = array[argument];

        console.log(str);

        if (str.charAt(str.length - 1) === '!') {
            if (str.charAt(str.length - 2) === '!') {
                if (+str.charAt(str.length - 3) % 2 === 0) {

                    // console.log('2!!');
                    amount_of_2 += calcAm2(2, +str.substring(0, str.length - 2));
                    amount_of_5 += calcAmEven5(+str.substring(0, str.length - 2));
                    console.log(amount_of_2);
                    console.log(amount_of_5);

                } else {

                    // console.log('1!!');
                    amount_of_5 += calcAmOdd5(+str.substring(0, str.length - 2));
                    console.log(amount_of_2);
                    console.log(amount_of_5);
                }
            } else {

                // console.log('!');
                amount_of_2 += calcAm2(2, +str.substring(0, str.length - 1));
                amount_of_5 += calcAm5(5, +str.substring(0, str.length - 1));
                console.log(amount_of_2);
                console.log(amount_of_5);
            }
        }
    }

    return Math.min(amount_of_2, amount_of_5);
};
