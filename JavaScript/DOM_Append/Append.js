function add(){
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    const element = document.getElementById("mydiv");
    element.appendChild(para);

}

function crash(){
    const element = document.getElementById("mydiv").lastChild;
    element.remove();
}

function del(){
    const element = document.getElementById("mydiv");
    element.remove();
}