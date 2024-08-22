
// ---- listeye eleman ekleme


let liDOM = document.querySelector("#list")

function newElement() {
    let inputDOM = document.querySelector("#task")
    if (inputDOM.value === ""){
        $('#liveToast2').toast('show')
    }else {
        let newLiDOM = document.createElement("li")
        newLiDOM.innerHTML = `${inputDOM.value} 
            <button type="button" class="btn close" style="padding: 12px 12px 12px ; border-radius: 0;" aria-label="Close">&times;</button>`
        liDOM.append(newLiDOM)
        localStorage.setItem(`${inputDOM.value}`, inputDOM.value)  
        inputDOM.value = ""
        $('#liveToast1').toast('show')
    }
}
// sayfa yenilemdğinde local storagedeki verileri tekrar yükler
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  for (let i = 0; i<localStorage.length; i++){
    let key = localStorage.key(i)
    if (key == "loglevel") {
      break
    }
    let value = localStorage.getItem(key)
    let newLiDOM = document.createElement("li")
    newLiDOM.innerHTML = `${value} 
      <button type="button" class="btn close" style="padding: 12px 12px 12px ; border-radius: 0;" aria-label="Close">&times;</button>`
    liDOM.append(newLiDOM)

  }
}


// seçili list item üzerini çizer
liDOM.addEventListener("click", function (e) {
  var clickedlist = e.target;
  if (clickedlist.tagName.toLowerCase() === "li"){
    if (clickedlist.classList.contains("checked") === false) {
      firstClick();
    } else {
      secondClick();
    }
    function firstClick() {
      clickedlist.classList.add("checked");
    }
    function secondClick() {
      clickedlist.classList.remove("checked");
    }
  }
  
})

// seçili list item siler

liDOM.addEventListener("click", function (e) {
  var clickedbutton = e.target;
  if (clickedbutton.type === "button"){
    var listItem = clickedbutton.parentElement;
    var value = listItem.firstChild.textContent.trim();
    console.log(value)
    listItem.remove()
    localStorage.removeItem(`${value}`)
  }
})
