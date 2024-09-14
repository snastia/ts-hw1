// 1 (last -)

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback()  = (a) => { return 100 + a };

// 2 

let anything: any = -20;
anything = 'Text';
anything = {};

// 3 

let some: string;
some = 'Text';

let str: string;

str = some;

// 4

let person: [string, number] = ['Max', 21];

// 5, Зробіть змінну, яка може приймати або рядок, або число.

let smth: string | number = "fff"

// 7, Зробіть змінну, яка може приймати лише одне значення з двох: 
// 'enable' або 'disable'

// let toggle: 'enable' | 'disable'

// 8 

function showMessage(message: string){
    console.log(message);
   }
   
   function calc(num1: number, num2: number) {
    return num1 + num2;
   }
   
   function customError(): void {
    throw new Error('Error');
   }

// 9

const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
}
   
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}

const page3 = {
    title: 'How are you',
    likes: 9,
    accounts: ['Andrei'],
    status: 'open'
}