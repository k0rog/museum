

;(function (){


    // *******************************************************

    /* Список кнопок */
    var buttonsList = new Array(
        new Button(
            "Улица",
            "../Panorams/Military_Glory/street/index.html",
            "../images/military_street.jpg"),

        new Button("Зал 1", 
            "../Panorams/Military_Glory/hall1/index.html",
            "../images/military_hall1.jpg"),

        new Button("Зал 2", 
            "../Panorams/Military_Glory/hall2/index.html",
            "../images/military_hall2.jpg"),

        new Button("Зал 3", 
            "../Panorams/Military_Glory/hall3/index.html",
            "../images/military_hall3.jpg"),

        new Button("Зал 4", 
            "../Panorams/Military_Glory/hall4/index.html",
            "../images/military_hall4.jpg"),

        new Button("Главная",
            "../index.html",
            "../images/main.jpg"),

        );

    var hoverText = document.createElement("p");
    // hoverText.innerHTML = "Аллея героев, декабрь 2017";
    hoverText.className = "hover-text";


    /* Стили */
    var NAV_DIV_STYLES = "nav-div";
    var BAR_DIV_STYLES = "bar-div";
    var BAR_STYLE = "bar-hr";
    var UL_STLYE = "nav-ul-list";
    var LI_STYLE = "nav-li";


    /* Остальные настройки */
    var A_TARGET = "_self";
    var IMG_WIDTH = "200px";
    var IMG_HEIGHT = "140px";


    // *******************************************************
    

    /* Текущий URL */
    var htmlUrl  = window.location.href;
    /* Адрес этого скрипта */
    var scriptUrl = document.currentScript.src;
    /* Определение каталога, в котором находится скрипт */
    var scriptPosition = scriptUrl.lastIndexOf("/"); 
    var SCRIPT_PATH = scriptUrl.substring(0,scriptPosition+1);
    /* Адрес текущей страницы относительно скрипта */
    var currentHtml = htmlUrl.substring(scriptPosition+1);
    var docName = htmlUrl.substring(htmlUrl.lastIndexOf("/")+1);
    


    
    // *******************************************************

    /* Конструктор кнопок */
    function Button(title, ref, image){
        this.title = title + "";
        this.ref = ref + "";
        this.image = image + "";
    }


    /* Навигационный список */
    var buttonsUl = document.createElement("ul");
    buttonsUl.className = UL_STLYE;

    /* Серая панель */
    var navigationDiv = document.createElement("div");
    navigationDiv.className = NAV_DIV_STYLES;

    /* Навигационный блок */
    var barsDiv = document.createElement("div");
    barsDiv.className = BAR_DIV_STYLES;



    // Формирование баров
    for(var i = 0; i<3 ; i++){
        var bar = document.createElement("hr");
        bar.className = BAR_STYLE;

        barsDiv.appendChild(bar);
    }
    
    buttonsUl.appendChild(barsDiv);

    // Формирование кнопок
    buttonsList.forEach(button => {
        // li
        var liButton = document.createElement("li");
        liButton.className = LI_STYLE;
        // li > a
        var buttonLink = document.createElement("a");
        // li > img
        var buttonImage = document.createElement("img");


        // ссылка на страницу
        buttonLink.href = SCRIPT_PATH + button.ref;
        // содержимое кнопки
        buttonLink.innerHTML = button.title;
        // способ открытия страницы
        buttonLink.target = A_TARGET;


        // путь к изображению
        buttonImage.src = SCRIPT_PATH + button.image;
        // ширина изображения
        buttonImage.style.width = IMG_WIDTH;
        // высота изображения
        buttonImage.style.height = IMG_HEIGHT;

        if (button.ref.indexOf(docName)!=-1){
            hoverText.innerHTML = button.title;
        }

        liButton.appendChild(buttonLink);
        liButton.appendChild(buttonImage);
        buttonsUl.appendChild(liButton);
    });

    
    // *******************************************************


    navigationDiv.appendChild(buttonsUl);
    navigationDiv.appendChild(hoverText);
    document.body.appendChild(navigationDiv);

    // /* Добавление div с bars */
    // navigationDiv.appendChild(barsDiv);
    // buttonsUl.appendChild(navigationDiv);
    // document.body.appendChild(buttonsUl);
})();