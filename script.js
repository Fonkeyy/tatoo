// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(
//     (p) =>
//         (p.onclick = (event) => {
//             let iterations = 0;
//             const length = event.target.dataset.value.length;

//             const interval = setInterval(() => {
//                 event.target.innerText = event.target.innerText
//                     .slice(0, length)
//                     .split('')
//                     .map((letter, index) => {
//                         if (index < iterations) {
//                             return event.target.dataset.value[index];
//                         }
//                         return letters[Math.floor(Math.random() * 26)];
//                     })
//                     .join('');

//                 if (iterations >= event.target.dataset.value.length) clearInterval(interval);

//                 iterations += 1 / 3;
//             }, 30);
//         })
// );

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

document.querySelector('p').onclick = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 2;
    }, 30);
};

document.querySelector('.answer').onclick = (event) => {
    let iterations = 0;
    const length = event.target.dataset.value.length;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .slice(0, length)
            .split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 8;
    }, 10);
};
