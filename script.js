function audio() {
    var audioElement = document.getElementById('btn_audio');
    audioElement.currentTime = 0; // 連続クリックに対応
    audioElement.play(); // クリックしたら音を再生
}
