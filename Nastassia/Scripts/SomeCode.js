$(function () {
    $("#main-nav ul li a").click(function (e) {
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
});
