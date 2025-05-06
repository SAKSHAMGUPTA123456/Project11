
let hacking1=document.getElementById("typingouttext")
hacking1.style.overflowY = "auto";
async function fetchCohereResponse(prompt) {


try{
 
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'tinyllama',
        prompt: prompt,
        stream: false  // important for readable JSON response
      })
    });

  const data = await response.json();
  console.log("Full Gemini response:", data);

  const text= data.response||"noresponse"
 
    const hacking = document.createElement("div");
    hacking.style.display = "flex";
    hacking.style.justifyContent = "start";

    const inputField = document.createElement("div");
    inputField.style.outline = "none";
    inputField.style.borderRadius = "8px";
    inputField.style.boxShadow = "3px 3px 10px black";
    inputField.style.padding = "10px";
    inputField.innerText = text;
    inputField.style.backgroundColor = "gray";
    inputField.style.color = "white";

    hacking.appendChild(inputField);
    hacking1.appendChild(hacking);
    hacking1.scrollTop = hacking1.scrollHeight;

    console.log(text);
  } catch (error) {
    console.error("AI error:", error);
  }
}

  
let first=document.getElementById('first')
let second=document.getElementById('third')
let hacking2=document.getElementById('typingtext2')

second.onclick=()=>{
  if(first.value!==""){
   let hacking=document.createElement('div')
   hacking.style.display="flex"
   hacking.style.justifyContent="end"
    let inputField=document.createElement('div')
    inputField.style.padding = "10px";
    inputField.style.border = "1px solid #d1d5db"; 
    inputField.style.borderRadius = "8px"; 
    inputField.style.outline = "none";
    inputField.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)"; 
    inputField.innerText=`${first.value}`;
  //  inputField.style.display="flex"
  //  inputField.style.justifyContent = "flex-start";
   hacking.append(inputField)
       hacking1.append(hacking)
fetchCohereResponse(first.value);
 first.value=""
hacking1.scrollTop=hacking1.scrollHeight
  }
  else{
    alert('please write something ')
  }
 // Delay for visual update
};

let d=document.getElementById('op')
let erot=document.getElementById('action')
let m=document.getElementById('actions')
erot.onmouseover=()=>{
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
          alert('pls wait for some second to access content')
              // Perform OCR using Tesseract.js
              Tesseract.recognize(selectedFile, 'eng', {
    
                  logger: (m) => 
                   
                    console.log(m) // Show progress in the console

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




























































// // // Select file input and buttons
// // const imageUpload = document.getElementById('hacking');
// // const extractButton = document.getElementById('extractBtn');

// // let selectedFile;

// // // Handle file input change event
// // imageUpload.addEventListener('change', (event) => {
// //     selectedFile = event.target.files[0];
// //     if (selectedFile) {
// //         const reader = new FileReader();
// //         reader.onload = function (e) {
// //             const img = document.createElement('img');
// //             img.src = e.target.result;
// //             img.style.maxWidth = '400px';
// //             img.onload = function () {
// //                 document.body.appendChild(img);
// //             };
// //         };
// //         reader.readAsDataURL(selectedFile);
// //     }
// // });

// // // Handle text extraction on button click
// // extractButton.addEventListener('click', () => {
// //     if (!selectedFile) {
// //         alert("Please upload an image first.");
// //         return;
// //     }

// //     // Perform OCR using Tesseract.js
// //     Tesseract.recognize(selectedFile, 'eng', {
// //         logger: (m) => console.log(m) // Show progress in the console
// //     })
// //     .then(({ data: { text } }) => {
//         // alert(`Extracted Text:\n${text || "No text detected."}`);
//         // fetchCohereResponse(` whats this code tell explain briefly${text}`)
// //     })
// //     .catch((err) => {
// //         console.error('Error:', err);
// //         alert("Error occurred during text extraction.");
// //     });
// // });
