var newString;

document.querySelector('#myForm').addEventListener('submit', function() {
    var newWord2 = this.elements.newWord.value;
    newString = newWord2;
});

export default newString;