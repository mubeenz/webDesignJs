// const scrollBtn = document.getElementById('circle');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('circle').style.display = 'block';
      } else {
        document.getElementById('circle').style.display = 'none';
      }
})

window.onload=function(){

const test = document.querySelector('#circle');

test.addEventListener("click", () => { 
  window.scroll ({
    top: 0,
    behavior: "smooth",
  })
});

}