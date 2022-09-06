"use strict";
(function () {
    const data = new Data();
    const render = new Render();
    data.generate().then(() => render.render(data));
    $("#gen-btn").on("click", function () {
        data.generate().then(() => render.render(data));
    });
    $("#save-btn").on("click", function () {
        localStorage["saved-user"] = JSON.stringify(data);
    });
    $("#load-btn").on("click", function () {
        const loadUser = JSON.parse(localStorage["saved-user"]);
        data.setData(loadUser);
        render.render(data);
    });
})();
