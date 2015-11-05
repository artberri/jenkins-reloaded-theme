(function ($) {
    // Image replacement
    'use strict';

    var now,
        lastChange = 0,
        delta = 0,
        images = {},
        imageMapping,
        baseUrl = $('script[src$="reloaded.min.js"]').attr('src').replace('reloaded.min.js','');

    function seconds() {
        return Math.floor(Date.now() / 1000);
    }

    if (!Date.now) {
        Date.now = function() { return new Date().getTime(); }
    }

    // Rerender when DOM change
    $('#main-panel-content,#executors').bind('DOMSubtreeModified', function () {
        now = seconds();
        delta = now - lastChange;
        if (delta > 1) {
            images.replace();
            lastChange = now;
        }
    });

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
            selector: 'img.icon-blue-anime.icon-sm',
            image: 'building16.png'
        },
        {
            selector: 'img.icon-yellow-anime.icon-sm',
            image: 'building16.png'
        },
        {
            selector: 'img.icon-red-anime.icon-sm',
            image: 'building16.png'
        },
        {
            selector: 'img.icon-nobuilt-anime.icon-sm',
            image: 'building16.png'
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
            selector: 'img.icon-blue-anime.icon-lg',
            image: 'building.png'
        },
        {
            selector: 'img.icon-yellow-anime.icon-lg',
            image: 'building.png'
        },
        {
            selector: 'img.icon-red-anime.icon-lg',
            image: 'building.png'
        },
        {
            selector: 'img.icon-nobuilt-anime.icon-lg',
            image: 'building.png'
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

    images.replace = function () {
        $.each(imageMapping, function (index, element) {
            var $element = $(element.selector),
                imageUrl = baseUrl + 'images/' + element.image;

            if ($element.attr('src') !== imageUrl) {
                $element.attr('src', imageUrl);
            }
        })
    };

    module.exports = images;

}(jQuery));
