//Pare de pensar em classes! | Série - POO para JS (https://www.youtube.com/watch?v=po9Ik_v5koU&feature=youtu.be)

class Calc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    out(){
        console.log(this.num1, this.num2);
    }
}

const a = new Calc(1, 2);

a.out();

//Overwrite params
a.out.bind({num1: 4, num2: 5})();