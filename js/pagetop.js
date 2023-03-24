$(function(){
 
    // 「ページトップへ」の要素を隠す
    $('#page-top').hide();
 
    // スクロールした場合
    $(window).scroll(function(){
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 100) {
            // 「ページトップへ」をフェードイン
            $('#page-top').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#page-top').fadeOut();
        }
    });
 
    // 「ページトップへ」をクリックした場合
    $('#page-top').click(function(){
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
 
});


