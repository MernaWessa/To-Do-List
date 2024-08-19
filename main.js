let addtodobutton=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');
let completed_container=document.getElementById('Completed_container');


addtodobutton.addEventListener('click',function(){
    
  
   var div =document.createElement('DIV');
   var paragraph=document.createElement('P');
  
   var button=document.createElement("BUTTON")
   button.innerText='complete'
   
    
    paragraph.innerText=inputfield.value;

    button.style.display = 'inline-block';
    paragraph.style.display = 'inline-block';
    
   
   
   
    div.appendChild(paragraph);

    div.appendChild(button);

   
    todocontainer.appendChild(div);
     inputfield.value="";
    
        
     button.addEventListener('click',function(){    
        div.removeChild(button)  


        paragraph.style.textDecoration="line-through"
        
        todocontainer.removeChild(div)
        completed_container.appendChild(div)




     })



 })













