
function updateChar() {
    var text = document.getElementById('textbox').value;

    var charCount = 0;
    for(var i = 0; i < text.length;i++){
        if(text[i] != ""){
        charCount++;
        } 
        else if (text[i] == 0){
            charCount+=0;
        }
    }

    document.getElementById('charNum').innerHTML = charCount;
    
}


function updateWords() {
    var text = document.getElementById('textbox').value;

    var wordCount = 1;
    var space = " ";
        
    for(var i = 0; i < text.length; i++){
        if(text[i] != space && text[i+1] == space){
            wordCount++;
        }
        
    }

    if(text[text.length-1] == space){
        wordCount--;
    }

    if(text == ""){
        wordCount=0;
    }
    

    document.getElementById("wordNum").innerHTML = wordCount;
}




