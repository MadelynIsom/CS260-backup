const targetDiv = document.getElementById("color-results");
targetDiv.style.display = "none";


//generate color randomly
document.getElementById("generate-color").addEventListener("click", function(event) {
    event.preventDefault();
    
    targetDiv.style.display = "block";
    
    let url = "";
    let hue = document.getElementById("generate-color-by-hue").value;
    
    if(hue === "") {
        url = "https://x-colors.herokuapp.com/api/random";
    }
    else {
        url = "https://x-colors.herokuapp.com/api/random/" + hue;
    }
    
    fetch(url) 
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let hexCode = json.hex;
            let rgbCode = json.rgb;
            let hslCode = json.hsl;
            console.log(hexCode);
            console.log(rgbCode);
            console.log(hslCode);
            
            document.getElementById("color-box").style.backgroundColor = hexCode;
            
            document.getElementById("hex-code").innerHTML = hexCode;
            document.getElementById("rgb-code").innerHTML = rgbCode;
            document.getElementById("hsl-code").innerHTML = hslCode;
        });
});

//convert color code
document.getElementById("convert").addEventListener("click", function(event) {
  event.preventDefault();
  const code = document.getElementById("color-code").value;
  if (code === "")
    return;
  console.log(code);
  
  let s = document.getElementById('selector');
  let conversion = s.options[s.selectedIndex].value;
  
  let url = "https://x-colors.herokuapp.com/api/" + conversion + "?value=" + code;
  
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        
        switch(conversion){
            case "hex2rgb":
            case "hsl2rgb":
                document.getElementById("conversion-results").innerHTML = json.rgb;
                break;
            case "rgb2hex":
            case "hsl2hex":
                document.getElementById("conversion-results").innerHTML = json.hex;
                break;
            case "hex2hsl":
            case "rgb2hsl":
                document.getElementById("conversion-results").innerHTML = json.hsl;
                break;
        }
        
        
    });
});