const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
];

function displayArray() {
    const arrayString = users.map(user => user.name).join(', ');
    window.alert(`Array: ${arrayString}`);
}

function showMobileAlert() {
    const yourName = 'Your Name'; 
    window.alert(`Thank you for choosing mobile, ${yourName}`);
}
