const apiKey = "LXvsR6l5IN8P6qHTxGXsE1kj13NKi0SjvhVwSIgf";
let hacking1=document.getElementById("typingouttext")
hacking1.style.overflowY = "auto";
hacking1.style.maxHeight = "540px";

async function fetchCohereResponse(prompt) {
   
  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command-xlarge-nightly",
      prompt: prompt,
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  let inputField=document.createElement('div')
  inputField.style.outline = "none";
  inputField.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)"; 
  inputField.innerText=`${data.text}`
  inputField.style.backgroundColor="gray"
  inputField.style.color="white"
hacking1.append(inputField)
hacking1.scrollTop=hacking1.scrollHeight
  console.log(data.text);
}

let first=document.getElementById('first')
let second=document.getElementById('third')
let hacking2=document.getElementById('typingtext2')
second.onclick=()=>{
   
    let inputField=document.createElement('div')
    inputField.style.width = "100%";
    inputField.style.padding = "10px";
    inputField.style.border = "1px solid #d1d5db"; 
    inputField.style.borderRadius = "8px"; 
    inputField.style.outline = "none";
    inputField.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)"; 
    inputField.innerText=`${first.value}`;
   inputField.style.display="flex"
   inputField.style.justifyContent="flex-end"
       hacking1.append(inputField)
fetchCohereResponse(first.value);
 first.value=""
hacking1.scrollTop=hacking1.scrollHeight
 // Delay for visual update
};

let d=document.getElementById('op')
let m=document.getElementById('actions')
d.onmouseover=()=>{
m.style.visibility='visible'
}
d.onmouseout=()=>{
  m.style.visibility="hidden"
}

let selectedFile;


d.addEventListener('change', (event) => {
    selectedFile = event.target.files[0];
    console.log(selectedFile)
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
  
            let rt=document.createElement('div')
            let inputField=document.createElement('img')
            inputField.style.width = "380px";
            inputField.style.padding = "10px";
            inputField.style.border = "1px solid #d1d5db"; 
            inputField.style.borderRadius = "8px"; 
            inputField.style.outline = "none";
            inputField.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)"; 
            inputField.src=e.target.result
        
            rt.append(inputField)
          rt.style.display="flex"
           rt.style.justifyContent="flex-end"
            
            inputField.onload = function () {
              
                hacking1.append(rt)
                hacking1.scrollTop=hacking1.scrollHeight;
            };
        };
        reader.readAsDataURL(selectedFile);
        if (!selectedFile) {
                  alert("Please upload an image first.");
                  return;
              }
          
              // Perform OCR using Tesseract.js
              Tesseract.recognize(selectedFile, 'eng', {
                  logger: (m) => console.log(m) // Show progress in the console
              })
              .then(({ data: { text } }) => {
                  // alert(`Extracted Text:\n${text || "No text detected."}`);
                  fetchCohereResponse(` whats this code tell explain briefly${text}`)
              })
              .catch((err) => {
                  console.error('Error:', err);
                  alert("Error occurred during text extraction.");
              });
    }
});




// // Select file input and buttons
// const imageUpload = document.getElementById('hacking');
// const extractButton = document.getElementById('extractBtn');

// let selectedFile;

// // Handle file input change event
// imageUpload.addEventListener('change', (event) => {
//     selectedFile = event.target.files[0];
//     if (selectedFile) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.style.maxWidth = '400px';
//             img.onload = function () {
//                 document.body.appendChild(img);
//             };
//         };
//         reader.readAsDataURL(selectedFile);
//     }
// });

// // Handle text extraction on button click
// extractButton.addEventListener('click', () => {
//     if (!selectedFile) {
//         alert("Please upload an image first.");
//         return;
//     }

//     // Perform OCR using Tesseract.js
//     Tesseract.recognize(selectedFile, 'eng', {
//         logger: (m) => console.log(m) // Show progress in the console
//     })
//     .then(({ data: { text } }) => {
        // alert(`Extracted Text:\n${text || "No text detected."}`);
        // fetchCohereResponse(` whats this code tell explain briefly${text}`)
//     })
//     .catch((err) => {
//         console.error('Error:', err);
//         alert("Error occurred during text extraction.");
//     });
// });
