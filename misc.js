let turn = document.getElementById("turn").innerHTML;
for(i=0;i<board.length;i++){
    let id = 'g'+toString(i);
    
}
turn.innerHTML = 'Hello';





const display = function(){
    let container = document.getElementById("container");
    document.removeChild("container");
    container = document.createElement("div");
    container.id = "container";
    let row1 = document.createElement("div");
    let row2 = document.createElement("div");
    let row3 = document.createElement("div");
    let hello = document.createElement("h1");
    hello.textContent = "You are";
    row1.className = "row1";
    row2.className = "row2";
    row3.className = "row3";
    for(i=0;i<3;i++){
        row1.appendChild(document.createElement("div"));
        row2.appendChild(document.createElement("div"));
        row3.appendChild(document.createElement("div"));
    };
    container.appendChild(row1);
    container.appendChild(row2);
    container.appendChild(row3);
    container.appendChild(hello);
    document.appendChild(container);