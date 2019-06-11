//= require designsystem.min.js
//= require timeline.js

(function() {

    var el = document.getElementById('timeline');
    if (typeof(el) != 'undefined' && el != null) {
        var timeline = new TL.Timeline('timeline', 'assets/timeline.json', {
            scale_factor: 1
        });
    }

    var el = document.getElementById('non-interactive-timeline');
    if (typeof(el) != 'undefined' && el != null) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var tl = JSON.parse(this.responseText);
            var html = '';
            for ( i = 0; i < tl.events.length; i++ ) {
                html += '<h2>' + tl.events[i].start_date.year + ' - ' + tl.events[i].text.headline + '</h2>';
                if ( tl.events[i].media )
                    html += '<img src="' + tl.events[i].media.url + '" alt="">';
                html += tl.events[i].text.text + '<br clear="all">';
            }
            el.innerHTML = html;
          }
        };
        xmlhttp.open('GET', 'assets/timeline.json', true);
        xmlhttp.send();
    }

})();