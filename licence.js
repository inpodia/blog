$(document).ready(function () {

    $("#btngenerate").on("click", function () {
        var generateurl = $("#generateurl").val(),
            generatelink = $("#generatelink"),
            generateloading = $("#generateloading"),
            resulturl = $('#resulturl');
        if (generateurl == "") {
            $("#generateurl").focus();
            return false;
        }

        $("#copytoclipboard").html("<span class='fa fa-floppy-o'></span> Copy URL");
        generateloading.removeClass('hidden');
        generatelink.addClass('hidden');
        $.ajax({
            url: '/feeds/posts/summary?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function (data) {
                var link = '',
                    content = data.feed.entry,
                    links = new Array();
                if (content !== undefined) {
                    for (var i = 0; i < content.length; i++) {
                        for (var j = 0; j < content[i].link.length; j++) {
                            if (content[i].link[j].rel == "alternate") {
                                link = content[i].link[j].href;
                                break;
                            }
                        }
                        links[i] = link;
                        var randindex = Math.random() * links.length;
                        randindex = parseInt(randindex);
                    }
                    if (verifikasi == true) {
                   resultgenerate = window.location.hostname + path_home + aesCrypto.encrypt(convertstr(generateurl), convertstr('root'));
                    } else {
                        resultgenerate = links[randindex] + Path + aesCrypto.encrypt(convertstr(generateurl), convertstr('root'));
                    };
                    generateloading.addClass('hidden');
                    generatelink.removeClass('hidden');
                    resulturl.val(resultgenerate);
                } else {
                    resulturl.val('No result!');
                }
            },
            error: function () {
                resulturl.val('Error loading feed!');
            }
        });
    });

});

function copy(){
// di dalam fungsi ini kita seleksi dengan id yang ada di input
document.querySelector('#resulturl').select(),document.execCommand('copy');
$("#generatelink").addClass('hidden');
		$("#copied").removeClass('hidden');
		$(".broindodone").toggleClass("aktif");
		setTimeout( function(){
		$(".broindodone").toggleClass("aktif");
		}  , 2000 );
}

function gotolinkcountdown(){
          var btn = $('#btn-gotolink');
          btn.text(intro);
          btn.removeClass('d-none');
          var countDown = cdown;
          $('#countdown').removeClass('d-none');
          var x = setInterval(function() {
            var distance = countDown -= 1;
            $('#countdown span').text(distance);
            if (distance < 0) {
              $('#countdown').hide();
              clearInterval(x);
              btn.prop('disabled', false);
              btn.text(gotBtn);
              $('#alert-done').removeClass('d-none');
            }
          }, 1000);
        }
		
		$('body').on('click', '#broindo-btngetlink', function() {
              $(this).parent().fadeOut();
              if (Ascroll == true) {
                  scrooldown_Path();
              };
              gotolinkcountdown();
          });
function scrooldown_Path() {
              $('html, body').animate({
                  scrollTop: $("#middle-post").offset().top
              }, 800);
          };


 $(document).ready(function(){
          $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
              return null;
            }
            else{
              return decodeURI(results[1]) || 0;
            }
          }
if ($.urlParam('url') != null){
var replaceurl = window.location.href;
    replaceurl = replaceurl.replace('?m=1', '');
    replaceurl = replaceurl.replace('?m=0', '');
    replaceurl = replaceurl.replace('%3D', '');
    replaceurl = replaceurl.replace('%3D%3D', '');
    replaceurl = replaceurl.replace('&m=1', '');
    replaceurl = replaceurl.replace('&m=0', '');
var getLongPath = replaceurl.split(Path)[1];
if (remove_long_Path==true) {
get_remove_long_Path();
};
		falseTo();
        str_progressLoad();
		};
		$('body').on('click', '#btn-gotolink', function(){
            var realurl = aesCrypto.decrypt(convertstr(getLongPath),convertstr('root'));
			window.location.href=realurl;
          });
        });
function falseTo() {
    var largeAppendAttempt = '<div class="clearfix" /><div class="center"><div id="progresload"><div class="row"><h5 id="strprogress" class="col s10"><span class="left">Progress : <span id="strload"></span></span></h5><h5 id="strpercent" class="col s2 right-align">0%</h5></div><div class="progress"><div id="strfunction" class="determinate deep-purple lighten-2" style="width: 0%"></div></div></div> </div><div class="clear"></div><div class="clearfix" />',
        postElement1 = $("#topsf"),
        postElement2 = $(".post-body");
    if ($(postElement1).length) {
        postElement1.first().after(largeAppendAttempt)
    } else {
        postElement2.prepend(largeAppendAttempt)
    }
}

// Progress Bar
function str_progressLoad() {
    function setPercentage() {
        var str_percent = document.getElementById("strpercent");
        var str_function = document.getElementById("strfunction");
        var str_progress = document.getElementById("strprogress");
        var str_label = document.getElementById("strload");
        var width = 1;
        var table = str_label;
		var btn = $('#broindo-btngetlink');
		btn.text(getBtn);
        var str_new_array = ["Please waiting...", "Resolving Hostname", "Checking link requests", "Checking link availablity", "Proccessing Link", "Checking Result", "Stopping Current Proccess", "Checking Url Destination", "Terminating Current Proccess", "Getting Link Ready", "Done"];
        var linkDL = document.getElementById("broindo-btngetlink"),
            linkAL = document.getElementById("broindowrapdownload"),
            notif = document.getElementById("progresload"),
            direklink = document.getElementById("broindo-btngetlink");
        str_function.style.width = Number(str_function.style.width.replace("%", "")) + width + "%";
        str_percent.innerText = str_function.style.width;
        if (Number(str_function.style.width.replace("%", "")) === 5) {
            table.innerText = str_new_array[0]
        }
        if (Number(str_function.style.width.replace("%", "")) === 30) {
            table.innerText = str_new_array[3]
        }
        if (Number(str_function.style.width.replace("%", "")) === 50) {
            table.innerText = str_new_array[5]
        }
        if (Number(str_function.style.width.replace("%", "")) === 90) {
            table.innerText = str_new_array[9]
        }
        if (Number(str_function.style.width.replace("%", "")) === 100) {
            table.innerText = str_new_array[10];
            str_percent.classList.remove('text-white'), str_label.classList.remove('text-white');
            str_percent.classList.add('text-success'), str_label.classList.add('text-info');
            clearInterval(percent);
            setTimeout(function() {
                $(notif).fadeOut("medium");
                $(linkDL).fadeIn("medium");
                linkAL.style.display = "block"
            }, 100)
        } else {
            linkDL.style.display = "none"
        }
    }
    var percent = setInterval(setPercentage, 100)
}

    function makenumber(n) {
        for (var r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], a = n, e = new Array, m = 0; m <= a - 1; m++) {
            e[m] = r[parseInt(Math.random() * r.length)];
            e = e;
            randomnumber = e.join("")
        }
    };

    function get_remove_long_Path() {
        var getLinkDefault = window.location.href.split(Path)[0];
        window.history.replaceState({}, document.title, getLinkDefault);
    };


    if (window.location.href.indexOf(path_home) > 0) {
        var getURLpath_home = window.location.href;
    	getURLpath_home = getURLpath_home.replace('?m=1', '');
    	getURLpath_home = getURLpath_home.replace('?m=0', '');
    	getURLpath_home = getURLpath_home.replace('%3D', '');
    	getURLpath_home = getURLpath_home.replace('%3D%3D', '');
    	getURLpath_home = getURLpath_home.replace('&m=1', '');
    	getURLpath_home = getURLpath_home.replace('&m=0', '');
        if (remove_long_Path == true) {
            var getLinkDefault2 = window.location.href.split(path_home)[0];
            window.history.replaceState({}, document.title, getLinkDefault2);
        };
        if (verifikasi == true) {
            document.getElementsByClassName('container')[0].innerHTML = `
<div class='container'><div class="IMGCover" id="elementverifikotak">
    <div class="card border-primary mb-3" style="">
        <div class="card-header text-center" id="judullinkdiverifikasi">
            <div id="judullinkready"><h5 class="card-title">Human Verification</h5></div>
        </div>
        <div class="card-body text-primary text-center">
            <p class="card-text">Human verification is a feature used to ensure that only humans visit protected links.</p>
            <div id='CodeVerifRandom'></div>
<div class="input-group">
<input class='form-control' id='insertCode' placeholder='insert Code'></input>
<span class="input-group-btn text-center">
<button class="btn-klik" id="safelinkready" role="button" onclick='CheckVerif()'>verifikasi</button>
</span>
</div>
            <div id='notifVerif'></div>
        </div>
    </div>
</div></div>`;

            document.getElementsByTagName('body')[0].setAttribute('style', 'background-size: 100% 100%;background: url(#) no-repeat fixed center top #ffffff;');
            
            if (verifikasi_Number == true) {
                document.getElementById('CodeVerifRandom').innerHTML = (makenumber(jumlah_Nomor_Verif), randomnumber);
            } else {
                document.getElementById('CodeVerifRandom').remove();
                document.getElementById('insertCode').remove();
                document.getElementById('safelinkready').setAttribute('onclick', 'NextVerif()')
            };
        };
    };

    function CheckVerif() {
        if (Number(document.getElementById('CodeVerifRandom').innerHTML) == document.getElementById('insertCode').value) {
			document.getElementById('notifVerif').innerHTML = '<span class="greatbung">Success<br/>Please Wait...</span>'
            NextVerif();
        } else {
            document.getElementById('notifVerif').innerHTML = 'Wrong Code !! Check again ...';
            document.getElementById('insertCode').focus();
        };
    };

function NextVerif() {
    $.ajax({
        url: "/feeds/posts/summary?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            var r = "",
                t = e.feed.entry,
                n = new Array;
            if (document.getElementById("notifVerif").innerHTML = '<span class="greatbung">Url accessed...</span>', void 0 !== t) {
                for (var a = 0; a < t.length; a++) {
                    for (var l = 0; l < t[a].link.length; l++)
                        if ("alternate" == t[a].link[l].rel) {
                            r = t[a].link[l].href;
                            break
                        } n[a] = r;
                    var o = Math.random() * n.length;
                    o = parseInt(o), resultgenerate = n[o]
                }
                window.location.href = resultgenerate + Path + getURLpath_home.split(path_home)[1]
            } else resulturl.val("No result!")
        },
        error: function() {
            document.getElementById("notifVerif").innerHTML = "Error loading feed!"
 }})};
