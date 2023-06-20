window.onload = function () {
    /*----------------------------------------------------------*/
    //変数定義
    function menuOpener(e) {
        let globalMenu = e.target.closest('.globalmenu');
        let menuList = globalMenu.querySelector('.list');
        menuList.classList.toggle('hidden');
    }
    /*----------------------------------------------------------*/
    //メニューのクリックを取得
    let menuButton = document.querySelectorAll('.menu-button');
    for (var i = 0; i < menuButton.length; i++) {
        menuButton[i].addEventListener('click', menuOpener);
    }
}