'use strict';

{
    $(".openbtn").click(function () { //ボタンがクリックされたら
        $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
        $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
    });
    $("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
        $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
    });
    //スクロールした際の動きを関数でまとめる
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) { //上から200pxスクロールしたら
            $('#page-top').removeClass('DownMove'); //#page-topについているDownMoveというクラス名を除く
            $('#page-top').addClass('UpMove'); //#page-topについているUpMoveというクラス名を付与
        } else {
            if ($('#page-top').hasClass('UpMove')) { //すでに#page-topにUpMoveというクラス名がついていたら
                $('#page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
                $('#page-top').addClass('DownMove'); //DownMoveというクラス名を#page-topに付与
            }
        }
    }
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
    });

    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
    });

    // #page-topをクリックした際の設定
    $('#page-top a, .home').click(function () {
        $('body,html').animate({
            scrollTop: 0 //ページトップまでスクロール
        }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false; //リンク自体の無効化
    });
}