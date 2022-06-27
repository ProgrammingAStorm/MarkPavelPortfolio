function checkContent(target) {
    const content = $(
        $(target).attr('data-content')
    );

    if(target.hasClass('is-active')) {
        content.removeClass('gone');
    } else {
        content.addClass('gone');
    }
}

$(".tabs").click(event => {
    event.preventDefault();

    const target = $(event.target).parent('li');
    const sibling = $(event.target).parent('li').siblings('li');
    const parent = $(target.parent().parent().parent());

    if(target.hasClass('is-active')) {
        target.removeClass('is-active').addClass('has-text-light');

        if(!sibling.hasClass('is-active') && !target.hasClass('is-active')) {
            parent.removeClass('height-600');
        } else {
            parent.addClass('height-600');
        }

        checkContent(target);
        checkContent(sibling);

        return;
    }

    target.removeClass('has-text-light').addClass('is-active');
    sibling.removeClass('is-active').addClass('has-text-light');

    if(!sibling.hasClass('is-active') && !target.hasClass('is-active')) {
        parent.removeClass('height-600');
    } else {
        parent.addClass('height-600');
    }

    checkContent(sibling);
    checkContent(target);
});