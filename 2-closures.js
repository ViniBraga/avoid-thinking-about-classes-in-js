//Pare de pensar em classes! | Série - POO para JS (https://www.youtube.com/watch?v=po9Ik_v5koU&feature=youtu.be)

console.log('---Calc 1---')
const Calc1 = function(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    return{
        out: function() {
            console.log(this.num1, this.num2);
        }
    }
}


const a = new Calc1(1, 2);
a.out();

//Overwriting 'THIS'
a.out.bind({num1: 4, num2: 5})();

//---------------------------------------

console.log('\n---Calc 2 (improving: arrow function)---')

const Calc2 = function(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    return{
        out: () => {//With arrow function, there is no way to overrite 'this'
            console.log(this.num1, this.num2);
        }
    }
}


const b = new Calc2(1, 2);
b.out();

//Overwriting 'THIS'
b.out.bind({num1: 4, num2: 5})();

//---------------------------------------

console.log('\n---Calc 3 (improving further: no attributes)---')

const Calc3 = function(num1, num2) {
    return{
        out: () => {//With arrow function, there is no way to overrite 'this'
            console.log(num1, num2);
        }
    }
}

const c = new Calc3(1, 2);
c.out();

//Overwriting 'THIS'
c.out.bind({num1: 4, num2: 5})();