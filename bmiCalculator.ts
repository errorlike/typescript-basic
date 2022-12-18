const calculateBmi = (height: number, mass: number): string => {
    const heightToM = height / 100
    const result = mass / Math.pow(heightToM, 2)
    if (result < 18.5) {
        return ('UnderWeight')
    }
    else if (18.5 <= result && result <= 24.9) {
        return `Normal (healthy weight)`
    }
    else {
        return `Overweight`
    }
}
interface MultiplyValues {
    value1: number;
    value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}


const { value1, value2 } = parseArguments(process.argv);
console.log(calculateBmi(180, 74))
console.log(calculateBmi(value1, value2));

