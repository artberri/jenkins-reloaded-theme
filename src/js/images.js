(function ($) {
    // Image replacement
    'use strict';

    var images = {},
        imageMapping = [
            {
                selector: 'img.icon-blue.icon-sm',
                image: 'success16.png'
            },
            {
                selector: 'img.icon-yellow.icon-sm',
                image: 'warning16.png'
            },
            {
                selector: 'img.icon-red.icon-sm',
                image: 'fail16.png'
            },
            {
                selector: 'img.icon-nobuilt.icon-sm',
                image: 'nobuilt16.png'
            },
            {
                selector: 'img.icon-blue.icon-lg',
                image: 'success.png'
            },
            {
                selector: 'img.icon-yellow.icon-lg',
                image: 'warning.png'
            },
            {
                selector: 'img.icon-red.icon-lg',
                image: 'fail.png'
            },
            {
                selector: 'img.icon-nobuilt.icon-lg',
                image: 'nobuilt.png'
            },
            {
                selector: 'img.icon-health-00to19.icon-sm',
                image: 'health-00to19-16.png'
            },
            {
                selector: 'img.icon-health-20to39.icon-sm',
                image: 'health-20to39-16.png'
            },
            {
                selector: 'img.icon-health-40to59.icon-sm',
                image: 'health-40to59-16.png'
            },
            {
                selector: 'img.icon-health-60to79.icon-sm',
                image: 'health-60to79-16.png'
            },
            {
                selector: 'img.icon-health-80plus.icon-sm',
                image: 'health-80plus-16.png'
            },
            {
                selector: 'img.icon-health-00to19.icon-lg',
                image: 'health-00to19.png'
            },
            {
                selector: 'img.icon-health-20to39.icon-lg',
                image: 'health-20to39.png'
            },
            {
                selector: 'img.icon-health-40to59.icon-lg',
                image: 'health-40to59.png'
            },
            {
                selector: 'img.icon-health-60to79.icon-lg',
                image: 'health-60to79.png'
            },
            {
                selector: 'img.icon-health-80plus.icon-lg',
                image: 'health-80plus.png'
            },
        ];

    images.replace = function (baseUrl) {
        $.each(imageMapping, function (index, element) {
            $(element.selector)
                .attr('src', baseUrl + 'images/' + element.image);
        })
    };

    module.exports = images;

}(jQuery));
