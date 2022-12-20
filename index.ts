import express from 'express';
import qs from 'qs';
import calculateBmi from './bmiCalculator';

const app = express();
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
app.get('/hello', (_req, res) => {
    res.json('hello');
});
const PORT = '3002';
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});
