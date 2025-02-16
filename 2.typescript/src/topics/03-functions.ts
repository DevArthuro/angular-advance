const numbers: number[] = []

function addNumbers(n: number): number[] {
    numbers.push(n);
    return numbers
}

const addNumberBySum = (a: number, b: number): number[] => {
    numbers.push(a+b);
    return numbers
}

addNumbers(1)
addNumbers(1);
addNumberBySum(3, 4);

console.log(numbers)