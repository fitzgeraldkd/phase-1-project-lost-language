

const init = () => {
    
    
    fetch(`https://picsum.photos/v2/list?page=${randomNumber(1, 10)}&limit=100`)
    .then(resp => resp.json())
    .then(data => {
        renderPic(data)
    })
}


function renderPic(data){ ///render

   const imageContainer = document.getElementById("image_container")
   const picBttn = document.getElementById("random_pic_btn")
   const randomImg = document.createElement("img")

   
    picBttn.addEventListener("click", () => {
        randomImg.src = data[randomNumber(0, 99)]["download_url"];
        randomImg.height = 200;
        randomImg.width = 200;
        imageContainer.appendChild(randomImg)

    })
}

const submitSentence = document.getElementById("sentence_form");
submitSentence.addEventListener("submit", createPicBox)

//when submit sentence button is clicked 
// a container appears with sentence and pic inside. 
// as well as a thumbs up or thumbs down counter
// and an opportunity to write and post a correct sentence
function createPicBox(e){ 
    e.preventDefault();

}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

   

document.addEventListener("DOMContentLoaded", init)