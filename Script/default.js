// A Chart
var webskill_tag = document.getElementById("webskill_chart");

var myskill_chart = new Chart(webskill_tag, {
    type: 'polarArea',
    data: {
        labels: ["HTML5/CSS3", "JAVASCRIPT/JQUERY", "RUBY", "RUBY ON RAILS", "PHP/MYSQL", "PYTHON"],
        datasets: [{
            data: [69, 60, 57, 73, 75, 53],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FFCEFF",
                "#FF9E56",
                "#1F2E56"
            ],
            hoverBackgroundColor: [
                "#FF3384",
                "#36C2EB",
                "#FFEE56",
                "#FFEEFF",
                "#FFAE56",
                "#1F2E56"
            ],
            animation: {
                animateScale: true
            }
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        fontFamily: "Roboto",
        fontSize: 30
    },
});

var otherskill_tag = $("#otherskill_chart");
var otherskill_chart = new Chart(otherskill_tag,{
    type: "bar",
    data: {
        labels: ["Adobe Photoshop", "CorelDraw", "Adobe Illustrator", "Drupal", "Wordpress"],
        datasets: [{
            label: "Other Skills",
            data: [53, 61, 65, 63, 69],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FFCEFF",
                "#FF9E56",
                "#1F2E56"
            ],
            hoverBackgroundColor: [
                "#FF3384",
                "#36C2EB",
                "#FFEE56",
                "#FFEEFF",
                "#FFAE56",
                "#1F2E56"
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.responsive = true;

// Map and its functionality
function cvMap(){
    var mapcanvas = document.getElementById("map");
    var map = new google.maps.Map(mapcanvas, {
        center: { lat: 6.6694930, lng: 3.2783730},
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
    map.setTilt(90);
    var marker = new google.maps.Marker({
        position: { lat: 6.6694930, lng: 3.2783730},
        map: map,
        title: '24 Alhaja Kibitu Close, Ijaiye-Ojokoro, Lagos'
    })
}

// Scroll when a link is clicked
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function addclick(object){
    var myclass = object.id;
    console.log(myclass);
}