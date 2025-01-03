
// const salary=2400

// const balance=document.querySelector('.balance');
// balance.textContent=salary;
// const transaction={
//     description:salary,
//     amount:500,
// }
// const person={
//     _name:"kofi",
//     age:10,
//     interest:'football',

// }

// console.log(transaction.amount);
// console.log(person._name ,person.age,person.interest,);

function  transactionBalannce(){
    const totalAmount=50;
    const transaction=20;
    const balance=totalAmount-transaction;
    return balance

}
const result=transactionBalannce();
console.log(result)


const trying = (a,b)=> {
    console.log("see me", a,b)
}
trying(100,200)