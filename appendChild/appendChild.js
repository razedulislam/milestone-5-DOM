const special = document.getElementById('special');
special.style.color = 'red';
special.style.backgroundColor = 'black';
special.style.padding = '14px';

special.innerHTML = `
    <h3>This is special blogs </h3>
    <p>Dignissimos rem eius ut omnis sunt voluptatibus facere illo delectus fugit! Architecto nihil incidunt iusto temporibus minima rem deleniti dolorem. special blog</p>
` ;

// remove chid 
// first catch parent 
const friends = document.getElementById('friends');
// find child index to remove 
const fourth = friends.children[3];
// remove child from parent 
friends.removeChild(fourth);