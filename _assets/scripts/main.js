//= require designsystem.min.js
//= require timeline.js

(function() {

    var el = document.getElementById('timeline');
    if (typeof(el) != 'undefined' && el != null) {
        var timeline = new TL.Timeline('timeline', 'assets/timeline.json', {
            scale_factor: 1
        });
    }

})();