// storing in variable 
let mainContainer = document.querySelector("#contanier");
let btn = mainContainer.querySelector("#sendButton");
let mainContentArea = mainContainer.querySelector("#mainContent");
let inputArea = document.querySelector("#textInput");

// add click eventlistener to send icon
// this eventlistener are stored in a variable so that we can call this later in below when will work with enter button
btn.addEventListener("click", ()=>{
if(inputArea.value.trim()===""){
alert("empty string can not be searched")
// checked for invalid in put
}else{

let userPrompt = inputArea.value.trim()
//  storing prompt to this variable
mainContentArea.innerHTML += `<p class="inputTextByUser">${userPrompt}</p>`;

inputArea.value="";
// printing prompt on screen and clear input field 

// function for the api call and getting AI response
async function serverResponse(prompt){

const apiUrl = "https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQnBzb0Y0VW9fZ3YyVVlxc0FrQzhEdTRXaTF3VVlrZW1PVFdrOXhfV2YzUXVtM0M0RHo3bkxnY3UyRTctVV9fVjZaSllxa2lRQW91WUxJMHlTRFlES1UtQy15Y3c9PQ==";

// loading message
let loading = document.createElement("div");
loading.innerText = "AI is generating your answer...";
loading.classList.add("ans");

mainContentArea.appendChild(loading);

const response = await fetch(apiUrl,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
prompt: prompt
})
});


const data = await response.json();

// remove loading text
loading.remove();

// storing AI response and showing in the screen

let ans = document.createElement("div");
ans.innerHTML += data.text;
mainContentArea.appendChild(ans);

ans.classList.add("ans")

}

serverResponse(userPrompt)
//  calling function so that it works and print AI response
//  Called here as this is under a eventlistener and when listener will be called function must be called.
}
})

inputArea.addEventListener("keydown", (e)=>{
if(e.key==="Enter"){
    e.preventDefault()
    btn.click()
}
})
