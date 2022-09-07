(function(){
    const data: Data = new Data();
    const render: Render = new Render();
    const localStorageManager = new LocalStorageManager();
    data.generate().then(() => render.render(data));
    
    $("#gen-btn").on("click", function(){
        data.generate().then(() => render.render(data));
    })

    $("#save-btn").on("click", function(){
        localStorageManager.addData(data);
    })

    $("#load-btn").hover(function(){
        render.renderSavedUsers(localStorageManager.getSavedUsers());
    })

    $("#dropup-content").on("click", ".saved-users", function(){
        const user = localStorageManager.getDataById($(this).data().id);
        data.setData(user);
        render.render(data);
    })
})()