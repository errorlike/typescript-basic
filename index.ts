import express from 'express';
import qs from 'qs';
import { z } from 'zod';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';
const app = express();
app.use(express.json());
app.set('query parser',
    (str: string) => qs.parse(str));
app.get('/bmi', (request, response) => {

    const weight = +<string>request.query.weight;
    const height = +<string>request.query.height;

    const bmi = calculateBmi(height, weight);
    response.json({
        weight,
        height,
        bmi
    });
}
);
app.get('/hello', (_request, response) => {
    response.send('hello world');
});

app.post('/exercises', (request, response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = request.body;
    try {
        // const parsed = parseInput(z.number().array().parse(daily_exercises), z.string().parse(target));
        response.json(calculateExercises(z.number().array().parse(daily_exercises), z.number().parse(target)));
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            response.status(400).json({ error: error.message });
        }
    }
});
// const parseInput = (dailyExercises: Array<string>, target: string) => {
//     const dailyExerciseNumber: number[] = dailyExercises.map(dailyExercise => {
//         if (isNaN(+dailyExercise)) {
//             throw new Error("malformatted parameters");
//         }
//         return +dailyExercise;
//     });
//     if (isNaN(+target)) {
//         throw new Error("malformatted parameters");
//     }
//     return { dailyExerciseNumber, target: +target };
// };
const PORT = '3002';
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});
