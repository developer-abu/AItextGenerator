let mainContainer = document.querySelector("#contanier");
let btn = mainContainer.querySelector("#sendButton");
let mainContentArea = mainContainer.querySelector("#mainContent");
let inputArea = document.querySelector("#textInput");


btn.addEventListener("click", ()=>{
if(inputArea.value.trim()===""){
alert("empty string can not be searched")
}else{

let userPrompt = inputArea.value.trim()

mainContentArea.innerHTML += `<p class="inputTextByUser">${userPrompt}</p>`;

inputArea.value="";

async function serverResponse(prompt){

const apiUrl = "https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQnBzb0Y0VW9fZ3YyVVlxc0FrQzhEdTRXaTF3VVlrZW1PVFdrOXhfV2YzUXVtM0M0RHo3bkxnY3UyRTctVV9fVjZaSllxa2lRQW91WUxJMHlTRFlES1UtQy15Y3c9PQ==";

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
// console.log(data.text)
let ans = document.createElement("div");
ans.innerHTML += data.text;
mainContentArea.appendChild(ans);
ans.classList.add("ans")
}
serverResponse(userPrompt)
}
})