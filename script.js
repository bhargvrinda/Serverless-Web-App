const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');
const counter = document.querySelector(".counter-number");


counter.textContent = 'Loading views...';


async function updateCounter() {
    try {
        let response = await fetch(
            "https://gldjorrmjeuxjj54dbiykm5vjy0shohw.lambda-url.ap-southeast-2.on.aws/"
        );
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        counter.innerHTML = 'Failed to load views';
        console.error('Error fetching views:', error);
    }
}

updateCounter();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    greeting.textContent = `Hello, ${name}!`;
});

