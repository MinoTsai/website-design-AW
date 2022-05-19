header = '<style>\
.navbar {\
    padding-bottom: 0;\
}\
\
.navbar-brand {\
    padding: .5rem;\
    width: 10rem;\
}\
\
/* nav */\
.navbar-collapse {\
    display: flex;\
    justify-content: flex-end;\
    font-size: 1rem;\
}\
\
.navbar-toggler {\
    border: none;\
}\
\
.dropdown-menu {\
    border: 1px solid lightgray;\
    padding: 0;\
    line-height: 2.5rem;\
}\
\
.dropdown-item:hover {\
    background-color: #ECF5FF;\
}\
\
.dropdown-item:active {\
    color: #004385;\
}\
\
\
/* multi-setting start */\
.dropdown-submenu {\
    position: relative;\
}\
\
.dropdown-submenu .dropdown-menu {\
    top: 0;\
    left: 100%;\
    margin-top: -1px;\
    background-color: #fff;\
}\
\
.navbar-nav-multi li:hover>ul.dropdown-menu {\
    display: block;\
}\
\
.dropdown-submenu li {\
    padding-left: 0rem;\
}\
\
#navbarNavDropdown {\
    transition: none;\
\
}\
\
@media (min-width: 992px) {\
    .nav-right {\
        display: flex;\
        justify-content: flex-end;\
        align-items: center;\
    }\
    .navbar-expand-lg .navbar-nav .nav-link{\
        padding: 0 1rem;\
    }\
    ul.navbar-nav {\
    align-items: center;\
}\
\
}\
\
@media (max-width: 992px) {\
    .navbar-collapse {\
        display: flex;\
        justify-content: flex-start;\
    }\
\
    .navbar-nav .nav-link {\
        margin: .75rem .75rem;\
    }\
\
    .container-fluid {\
        width: 95%;\
    }\
\
    .navbar-toggler {\
        padding: 0;\
    }\
\
    .dropdown-item {\
        background-color: #f8f9fa;\
        padding-left: 3rem;\
    }\
\
    .navbar-nav .dropdown-menu {\
        border: 0;\
    }\
\
    .navbar-nav .nav-item {\
        border-top: 1px dashed lightgray;\
    }\
\
    .navbar-nav .nav-item:first-child {\
        border-top: 0;\
    }\
\
}\
\
@media (max-width: 576px) {\
 .dropdown-submenu .dropdown-menu {\
        top: 0;\
        left: 100%;\
        margin-top: -1px;\
        background-color: #f8f9fa;\
    }\
\
    .dropdown-submenu li {\
        padding-left: 2rem;\
    }\
}\
\
/* multi-setting end */\
</style>\
\
<nav class="navbar navbar-expand-lg navbar-light bg-light ">\
<div class="container-fluid" style="width:90%;">\
    <a class="navbar-brand" href="home.html">\
        <img src="assets/img/logo.svg" alt="">\
    </a>\
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
\
\
    <div class="collapse navbar-collapse row" id="navbarNavDropdown">\
        <div class="nav-right">\
            <ul class="navbar-nav">\
                \
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="course" role="button" data-bs-toggle="dropdown" aria-expanded="false">關於AIoT</a>\
                    <ul class="dropdown-menu navbar-nav-multi" aria-labelledby="course">\
                        <li><a class="dropdown-item" href="article_list.html">新聞媒體</a></li>\
                        <li><a class="dropdown-item" href="article_list.html">學校使用</a></li>\
                        <li class="dropdown-submenu"><a href="article_list.html" data-bs-toggle="dropdown" class="dropdown-item dropdown-toggle">未來應用</a>\
                            <ul class="dropdown-menu">\
                                <li>\
                                    <a href="article_list.html" class="dropdown-item">智慧家庭</a>\
                                </li>\
                                <li>\
                                    <a href="article_list.html" class="dropdown-item">機器手臂</a>\
                                </li>\
                                <li>\
                                    <a href="article_list.html" class="dropdown-item">凱比機器人</a>\
                                </li>\
                                <li>\
                                    <a href="article_list.html" class="dropdown-item">機房環控</a>\
                                </li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
\
                <li class="nav-item">\
                    <a class="nav-link" href="discuss.html">網路論壇</a>\
                </li>\
\
                <li class="nav-item">\
                <a class="nav-link" href="web_service.html">雲端服務</a>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="#" id="announce" role="button" data-bs-toggle="dropdown" aria-expanded="false">研發團隊</a>\
                    <ul class="dropdown-menu navbar-nav-multi" aria-labelledby="announce">\
                        <li><a class="dropdown-item" href="teacher.html">講師介紹</a></li>\
                        <li><a class="dropdown-item" href="rd_team.html">研發團隊</a></li>\
                    </ul>\
                </li>\
\
                <li class="nav-item dropdown">\
                    <a class="nav-link" href="#" id="course" role="button" data-bs-toggle="dropdown" aria-expanded="false"><div class="user-photo-xs">\
                            <img src="assets/img/member-04.jpg" alt="">\
                        </div></a>\
                    <ul class="dropdown-menu navbar-nav-multi dropdown-menu-end" aria-labelledby="course">\
                        <li><a class="dropdown-item" href="meb_editor.html">編輯會員資料</a></li>\
                        <li><a class="dropdown-item" href="login.html">登出</a></li>\
                    </ul>\
                </li>\
\
            </ul>\
        </div>\
    </div>\
</div>\
</nav>';
document.write(header);