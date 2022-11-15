console.log('H A N G M A N');

const input = require('sync-input');
const results = [0, 0];

while (true) {
    console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');

    switch (input()) {
        case 'play':
            const words = ['python', 'java', 'swift', 'javascript'];
            const answer = words[Math.floor(Math.random() * words.length)];
            let current_state = '';
            let guessed_answer = [];
            let attempts = 8;

            while (attempts > 0) {
                let current_answer = [];
                for (let char of answer) current_answer.push(guessed_answer.includes(char) ? char : '-');
                current_state = current_answer.join('');
                console.log(`\n${current_state}`);

                if (current_state !== answer) {
                    let letter = input('\nInput a letter: ');
                    let error_message = letter.length !== 1 ? 'Please, input a single letter.'
                        : letter.toUpperCase() === letter ? 'Please, enter a lowercase letter from the English alphabet.'
                            : guessed_answer.includes(letter) ? "You've already guessed this letter."
                                : '';

                    if (error_message !== '') console.log(error_message);
                    else if (!answer.includes(letter)) {
                        console.log("That letter doesn't appear in the word.");
                        attempts--;
                    }
                    guessed_answer.push(letter);
                } else {
                    console.log(`You guessed the word ${answer}!\nYou survived!`);
                    results[0] += 1;
                    break;
                }
            }

            if (current_state !== answer) {
                console.log('\nYou lost!');
                results[1] += 1;
            }
            break;
        case 'results':
            console.log(`You won: ${results[0]} times.\nYou lost: ${results[1]} times.`)
            break;
        case 'exit':
            return;
    }
}
