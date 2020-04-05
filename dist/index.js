var divam = document.getElementById('output');
var search = document.getElementById('tedad');
var but = document.getElementById('but');
var inv = document.getElementById('inv');

but.addEventListener("click", () => {
    var number = parseInt(tedad.value);
    if (number >= 1 && number <= 100) {
        inv.innerText = "don't worry it's loading!";
        setTimeout(() => {
            inv.innerText = '';
        }, 5000);
        fetch(`http://meme-api.herokuapp.com/gimme/${number}`)
            .then(res => res.json())
            .then(res => {
                output = '';
                arr = res.memes;
                arr.forEach(meme => {
                    output +=
                        `
                <div class="each">
                    <a target="_blank" href=${meme.url}>
                    <img src=${meme.url} alt="not today"></img>
                    </a>
                </div>
            `;
                })
                divam.innerHTML = output;
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        inv.innerText = 'Invalid input'
        setTimeout(() => {
            inv.innerText = '';
        }, 2000);
    }
})