interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: String,
    target: number,
    average: number
}
interface MultiplyValues {
    value1: number;
    value2: number;
}

const calculateExercises = (trainHourOfDays: number[], target: number): Result => {
    const result: Result = {
        periodLength: 0,
        trainingDays: 0,
        success: false,
        rating: 0,
        ratingDescription: '',
        target: 0,
        average: 0
    }

    const totalTrainHour = trainHourOfDays.reduce((sum, hour) => {
        return sum + hour
    }, 0)

    result.trainingDays = trainHourOfDays.reduce((trained, hour) => hour > 0 ? trained + 1 : trained, 0);
    const totalTargetHour = trainHourOfDays.length * target;
    result.periodLength = trainHourOfDays.length
    result.target = target
    result.average = totalTrainHour / result.periodLength;

    if (totalTrainHour >= totalTargetHour) {
        result.success = !result.success
        result.rating = 3;
        result.ratingDescription = 'sucess'
        return result;
    }
    result.rating = 2;
    result.ratingDescription = 'not too bad but could be better'

    return result

}
const v1 = process.argv.slice(2, -1)
const v2 = process.argv.slice(-1)
const numberV1: number[] = v1.map(argv => {
    if (isNaN(Number(argv))) {
        throw new Error("Provided values were not numbers!");
    }
    return +argv
}
)
if (isNaN(Number(v2[0]))) {
    throw new Error("Provided values were not numbers!");
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
console.log(calculateExercises(numberV1, Number(v2[0])));