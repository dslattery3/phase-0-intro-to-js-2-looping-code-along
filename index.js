const giftsFrom = ['sarah','mom'];
function writeCards(names, gift) {
    let length = names.length;
    let thankYouCards = [];
    for (let x = 0; x < length; x++) {
        thankYouCards[x] = `Thank you, ${names[x]}, for the wonderful ${gift} gift!`;
    }
    return thankYouCards;
}
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}