const toggleButton=document.querySelector('.dropdown-toggle');
const menu=document.querySelector('.dropdown-menu');
const options=document.querySelectorAll('.dropdown-option');
const nextButton=document.querySelector('.next-button');

toggleButton.addEventListener('click',function(){
  menu.classList.toggle('show');
})
toggleButton.addEventListener('blur', function () {
  menu.classList.remove('show');
})

// options.forEach(function (item) {
//     item.addEventListener('click', selectOption)
//   })

menu.addEventListener('click',function(e){
    if(e.target.tagName==='UL'){
        return;
    }
    const value = e.target.textContent.trim();
    console.log(value);
    toggleButton.textContent=value;
    toggleButton.classList.add('selected');
    nextButton.removeAttribute('disabled');
    }
)
