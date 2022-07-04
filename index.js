const $detailed = $('#detailed');
const $tabs= $('.tabs');
const $modal = $('.modal');
const $html = $('html');
const $description = $('#description');

window.scrollTo(0, 0);

$tabs.click(event => {
    event.preventDefault();

    const target = $(event.target).parent('li');
    const sibling = $(event.target).parent('li').siblings('li');

    if(target.hasClass('is-active')) {
        target.removeClass('is-active').addClass('has-text-light');

        checkTabs(target);
        checkTabs(sibling);

        return;
    }

    target.removeClass('has-text-light').addClass('is-active');
    sibling.removeClass('is-active').addClass('has-text-light');

    checkTabs(sibling);
    checkTabs(target);
});

$detailed.on('click', 'a', event => {
    event.preventDefault();

    const target = $(event.target);
    const content = $(event.target).siblings('ul');

    if(target.parent().parent().hasClass('border-tertiary')) {
        $modal.addClass('is-active');
        $html.addClass('is-clipped')

        return;
    }   

    $detailed.find('.border-tertiary').each(function() {
        $(this).addClass('gone');
    });

    if(target.hasClass('is-active')) {
        target.removeClass('is-active');
        content.addClass('gone');
    } else {
        $detailed.find('.is-active').each(function() {
            $(this).removeClass('is-active');
        });

        target.addClass('is-active');
        content.removeClass('gone');
    }    
});

$modal.on("click", ".modal-background, .close", function() {
    $modal.removeClass("is-active");
    $("html").removeClass("is-clipped");
});

function checkTabs(target) {
    const content = $(
        $(target).attr('data-content')
    );

    if(target.hasClass('is-active')) {
        if(content.attr('id') === 'detailed') {
            $description.removeClass('gone');
        }

        content.removeClass('gone');
    } else {
        if(content.attr('id') === 'detailed') {
            $description.addClass('gone');
        }

        content.addClass('gone');
    }

    if(target.attr('id') === 'detailed') {

    }
}