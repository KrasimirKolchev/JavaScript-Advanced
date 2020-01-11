function solve() {
    let correctAnswers = 0;
    let counter = 0;

    Array.from(document.querySelectorAll('.answer-wrap'))
        .map(e => e.addEventListener('click', function goToNextQuestion(e) {
            if (e.target.textContent === 'onclick' || e.target.textContent === 'JSON.stringify()'
                    || e.target.textContent === 'A programming API for HTML and XML documents') {
                correctAnswers++;
            }

            let sectionToClose = document.querySelectorAll('section')[counter];
            sectionToClose.style.display = 'none';
            sectionToClose.classList.add('hidden');

            let sectionToOpen = document.querySelectorAll('section')[counter + 1];
            if (sectionToOpen) {
                sectionToOpen.style.display = 'block';
                sectionToOpen.classList.remove('hidden');
            } else {
                displaySummary(correctAnswers);
            }

            counter++;
        }));
    function displaySummary(answers) {
        let summaryText = document.querySelector("#results > li > h1");
        document.querySelector("#results").style.display = 'block';
        if (answers === 3) {
            summaryText.textContent = "You are recognized as top JavaScript fan!";
        } else {
            summaryText.textContent = `You have ${answers} right answers`;
        }

    }
}
