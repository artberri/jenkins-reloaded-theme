(function () {
    jQuery(function($) {

        var myBaseUrl = $('script[src$="reloaded.min.js"]').attr('src').replace('reloaded.min.js','');

        $('#jenkins #side-panel-content .task img').css({
            position: 'relative',
            top: '4px',
            left: '0',
            width: '14px',
            height: '14px'
        });

        $('#bottom-sticker').css({
            width: $('#main-panel-content').width() + 45,
        });

        // Images
        $('img.icon-blue.icon-sm')
            .attr('src', myBaseUrl + 'images/success16.png');

        $('img.icon-yellow.icon-sm')
            .attr('src', myBaseUrl + 'images/warning16.png');

        $('img.icon-red.icon-sm')
            .attr('src', myBaseUrl + 'images/fail16.png');

        $('img.icon-nobuilt.icon-sm')
            .attr('src', myBaseUrl + 'images/nobuilt16.png');

        $('img.icon-blue.icon-lg')
            .attr('src', myBaseUrl + 'images/success.png');

        $('img.icon-yellow.icon-lg')
            .attr('src', myBaseUrl + 'images/warning.png');

        $('img.icon-red.icon-lg')
            .attr('src', myBaseUrl + 'images/fail.png');

        $('img.icon-nobuilt.icon-lg')
            .attr('src', myBaseUrl + 'images/nobuilt.png');

        $('img.icon-health-00to19.icon-lg')
            .attr('src', myBaseUrl + 'images/health-00to19.png');

        $('img.icon-health-20to39.icon-lg')
            .attr('src', myBaseUrl + 'images/health-20to39.png');

        $('img.icon-health-40to59.icon-lg')
            .attr('src', myBaseUrl + 'images/health-40to59.png');

        $('img.icon-health-60to79.icon-lg')
            .attr('src', myBaseUrl + 'images/health-60to79.png');

        $('img.icon-health-80plus.icon-lg')
            .attr('src', myBaseUrl + 'images/health-80plus.png');

    });
}());
