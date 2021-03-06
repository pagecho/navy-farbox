#获取屏幕宽度，判断设备类型
getWinSize = ->
    phoneLandscape = 568
    padPortrait = 768
    padLandscape = 1024
    pc = 1200
    winWidth = $(window).width()
    if winWidth < phoneLandscape #手机竖屏
        return 1
    else if winWidth >= phoneLandscape and winWidth < padPortrait #手机横屏
        return 2
    else if winWidth >= padPortrait and winWidth < padLandscape #平板
        return 3
    else if winWidth >= padLandscape and winWidth < pc #平板
        return 4
    else # PC
        return 5


on_loading = false
finish_loading = false
next_page = 2


@auto_list_layout = ->
    for post in $(".list .post")
        post_dom = $(post)

        if post_dom.find('a').length and getWinSize() < 3 # 移动端的整个dom点击事件
            link = post_dom.find('a').attr('href')
            post_dom.unbind('click')
            post_dom.click ->
                location.href = link

        if post_dom.find('img').length
            post_dom.addClass('img')
            if getWinSize() < 3 #如果是手机，将第一张图片作为背景图
                post_dom.css("background-image", "url(" + post_dom.find("img").attr("src") + ")")
            else #否则清除背景图
                post_dom.removeAttr('style')
        else
            post_dom.addClass('text')

    if getWinSize() < 3 # 移动端
        for img in $(".list .img")
            img_dom = $(img)
            img_dom.css("background-image", "url(" + img_dom.find("img").attr("src") + ")");
    else
        $(".list .img").removeAttr("style")