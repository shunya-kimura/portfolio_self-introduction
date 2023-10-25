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

 // ページの一番上にゆっくりスクロールする関数
function scrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // アニメーションの期間（ミリ秒）
  
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      window.scrollTo(0, startPosition + distance * progress);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  
  // ボタンをクリックしたときにページを上にゆっくりスクロール
  document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);