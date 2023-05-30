const name = document.getElementById('name');
const tagsContainer = document.querySelector('.tags')
const addName = () => {

    const fullName = name.value;

    if(fullName===""){
        return null;
    }
    
    const tag = document.createElement('div');
    tag.setAttribute("class","tag");
    tag.innerText= "Hey I'm "+ fullName; 
    tagsContainer.append(tag);
} 