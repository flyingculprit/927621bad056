const express = require('express');
const axios = require('axios');

const app = express();
const port = 9876;
const maxWindowSize = 10;
let storedNumbers = [];

const retrieveNumbers = async (category) => {
    try {
        const response = await axios.get(`http://20.245.56.144/test/${category}`);
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching ${category} numbers:`, error);
        return [];
    }
};

app.use(express.json());

app.get('/numbers/:type', async (req, res) => {
    const retrievedNumbers = await retrieveNumbers(req.params.type);
    let selectedNumbers = [];

    switch (req.params.type) {
        case 'prime':
            selectedNumbers = retrievedNumbers.filter(isPrime);
            break;
        case 'fibino':
            selectedNumbers = retrievedNumbers.filter(isFibonacci);
            break;
        case 'even':
            selectedNumbers = retrievedNumbers.filter(isEven);
            break;
        case 'rand':
            selectedNumbers = retrievedNumbers;
            break;
        default:
            res.status(400).send('Invalid type');
            return;
    }

    selectedNumbers.forEach(number => {
        if (!storedNumbers.includes(number)) {
            storedNumbers.push(number);
            if (storedNumbers.length > maxWindowSize) {
                storedNumbers.shift();
            }
        }
    });

    const average = calculateAverage(storedNumbers);

    const response = {
        windowPrevState: storedNumbers.slice(0, maxWindowSize).join(', '),
        windowCurrState: selectedNumbers.slice(0, maxWindowSize).join(', '),
        numbers: storedNumbers,
        avg: average.toFixed(2)
    };

    res.json(response);
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function isFibonacci(num) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const a = phi * num;
    return num === 0 || Math.abs(Math.round(a) - a) < 1 / num;
}

function isEven(num) {
    return num % 2 === 0;
}

function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
