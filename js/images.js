lightGallery(document.querySelector('#gallery'), {
    plugins: [lgZoom, lgThumbnail, lgFullscreen],
    thumbWidth: 80,
    controls: true,
    getCaptionFromTitleOrAlt: true,
    loop : true,
    actualSize: false,
    counter: true,
    fullScreen: true,
    zoom: true,
    mode: 'lg-fade'
});