let text1 = document.querySelector('.title');
text1.addEventListener('mouseover', function () {
  this.style.backgroundColor = '#00cccc';
  text1.textContent = "じこしょうかいのさいと"
})

text1.addEventListener('mouseleave', function () {
  this.style.backgroundColor = '';
  text1.textContent = "自己紹介のサイト"
})

const action = document.getElementById('action');
action.addEventListener('click', () => {
    window.alert("FINAL FANTASY VII REMAKEのトロフィーコンプしました^^");
})

function changeImage() {
    document.getElementById('myImage').src = 'ff7.jpg';
  }
  
  function restoreImage() {
    document.getElementById('myImage').src = 'ゲーム.jpeg';
  }

  function changeImage2() {
    document.getElementById('myImage2').src = '坂本勇人.jpeg';
  }
  
  function restoreImage2() {
    document.getElementById('myImage2').src = '野球観戦.jpeg';
  }