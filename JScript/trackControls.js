const list = document.querySelector('.list');
const play_settings = document.querySelector('.playlist');
const exit_settings = document.querySelector('.exit');

list.addEventListener('click', () => {
    const content = list.getAttribute('data-playlist');

    if (content === 'false') {
        list.setAttribute('data-playlist', true);
        play_settings.setAttribute('data-playlist', true);
        exit_settings.setAttribute('data-playlist', false)
    } else {
        list.setAttribute('data-playlist', false);
        play_settings.setAttribute('data-playlist', false);
        exit_settings.setAttribute('data-playlist', true);
    }
});

exit_settings.addEventListener('click', () => {
    const content = exit_settings.getAttribute('data-playlist');

    if (content === 'false') {
        list.setAttribute('data-playlist', false);
        play_settings.setAttribute('data-playlist', false);
        exit_settings.setAttribute('data-playlist', true)
    } else {
        list.setAttribute('data-playlist', true);
        play_settings.setAttribute('data-playlist', true);
        exit_settings.setAttribute('data-playlist', false);
    }
});