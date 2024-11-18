const getQuotes = [
    {
        'speaker': 'Franklin D. Roosevelt',
        'quote': 'The only limit to our realization of tomorrow is our doubts of today'
    },
    {
        'speaker': ' Robert Frost',
        'quote': 'In three words I can sum up everything I have learned about life: it goes on.'
    },
    {
        'speaker': ' Winston Churchil',
        'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts'
    },
    {
        'speaker': 'Lao Tzu',
        'quote': 'The journey of a thousand miles begins with one step.'
    },
    {
        'speaker': ' John Lennon',
        'quote': 'ife is what happens when you are busy making other plans.'
    },
    {
        'speaker': 'Ralph Waldo Emerson',
        'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment'
    },
    {
        'speaker': ' Martin Luther King Jr',
        'quote': 'In the end, we will remember not the words of our enemies, but the silence of our friends.'
    },
    {
        'speaker': 'Alan Kay',
        'quote': 'The best way to predict the future is to invent it.'
    },
    {
        'speaker': 'Mark Twain',
        'quote': 'If you tell the truth, you do not have to remember anything.'
    },
    {
        'speaker': 'Dalai Lama',
        'quote': 'Happiness is not something ready-made. It comes from your own actions.'
    },
    {
        'speaker': 'Steve Jobs',
        'quote': 'Your time is limited, so do not waste it living someone else life.'
    },
    {
        'speaker': 'Nelson Mandela',
        'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        'speaker': 'George Bernard Shaw',
        'quote': 'Life is not about finding yourself. Life is about creating yourself'
    },
];

function generateQuote() {
    const random = Math.floor(Math.random() * getQuotes.length);
    document.getElementById('quotes').innerHTML = `\"${getQuotes[random].quote}\"`;
    document.getElementById('speakers').innerHTML = `--${getQuotes[random].speaker}`;
}
