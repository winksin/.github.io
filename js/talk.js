new TypeIt("#type_title", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("低氧课题组全体成员")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("祝曹老师教师节快乐！")
    .pause(3000)
    .go();

new TypeIt('#words2teacher', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();