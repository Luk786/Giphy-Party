console.log("Let's get this party started!");


//api retrieve part
// async function getGiphy(){
//     const res = await axios.get("http://api.giphy.com/v1/gifs/search?", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" }});
//     console.log(res.data);

//     let result = res.data;
//     // createImg(res.data);
//     for(let img of result.data){
//         console.log(img.url);
//     }
// }

const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const input = document.querySelector("#giphyinput");
const imgContainer = document.querySelector("#img-container");
const removeBtn = document.querySelector("#remove");

//add event listener when submit
//once submit, add image src to one of API 
//when the users submits the form, use axios to make a request to GIPHY for info based on that term
form.addEventListener('submit', async function(e){
    e.preventDefault();
    //get the input value
    let searchTerm = input.value;
    //make axios request 
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", 
    {params: 
        //get input val
        {q: searchTerm, 
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" 
        }});

    createImg(res.data);
    input.value = "";
})

function createImg(response){
    //get all data length
    let results = response.data.length;
    if(results){
        let randomImg = Math.floor(Math.random() * results);

        let imageDiv = document.createElement('div');
        imageDiv.classList.add('col-4', 'p-1');
        let img = document.createElement('img');
        img.setAttribute('src', response.data[randomImg].images.original.url);
        img.classList.add('w-100','h-100');
        imageDiv.append(img);
        imgContainer.append(imageDiv);
    }
}

removeBtn.addEventListener("click", function(e){
    console.log(e.target);
    imgContainer.innerHTML = "";
});
