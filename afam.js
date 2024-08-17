<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 12980670;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
    document.querySelector('.calculate-btn').addEventListener('click', function() {
            let totalWeightedScore = 0;
            let totalCredits = 0;

            document.querySelectorAll('.course-entry').forEach(function(entry) {
                const creditUnit = parseFloat(entry.querySelector('.credit-unit').value) || 0;
                const gradeScore = parseFloat(entry.querySelector('.grade-score').value) || 0;
                const weightedScore = creditUnit * gradeScore;
                const gpa = (weightedScore / creditUnit) || 0;

                entry.querySelector('.weighted-score').value = weightedScore.toFixed(2);
                entry.querySelector('.gpa').value = gpa.toFixed(2);

                totalWeightedScore += weightedScore;
                totalCredits += creditUnit;
            });

            const cgpa = (totalWeightedScore / totalCredits) || 0;

            document.getElementById('total-weighted-score').textContent = totalWeightedScore.toFixed(2);
            document.getElementById('gpa').textContent = (totalWeightedScore / totalCredits).toFixed(2);
            document.getElementById('cgpa').textContent = cgpa.toFixed(2);
            html data-wf-domain="final-year-3ede91.webflow.io" data-wf-page="60dda59e22f535bb3b01b94e" data-wf-site="60dda59e22f5355fde01b94d" class="w-mod-js w-mod-ix wf-montserrat-n1-active wf-montserrat-i1-active wf-montserrat-n2-active wf-montserrat-i2-active wf-montserrat-n3-active wf-montserrat-i3-active wf-montserrat-n4-active wf-montserrat-i4-active wf-montserrat-n5-active wf-montserrat-i5-active wf-montserrat-n6-active wf-montserrat-i6-active wf-montserrat-n7-active wf-montserrat-i7-active wf-montserrat-n8-active wf-montserrat-i8-active wf-montserrat-n9-active wf-montserrat-i9-active wf-oswald-n2-active wf-oswald-n3-active wf-oswald-n4-active wf-oswald-n5-active wf-oswald-n6-active wf-oswald-n7-active wf-opensans-n3-active wf-opensans-i3-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n6-active wf-opensans-i6-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-n8-active wf-opensans-i8-active wf-active"><head><style>.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}</style><meta charset="utf-8"><title>FINAL YEAR</title><meta content="width=device-width, initial-scale=1" name="viewport"><meta content="Webflow" name="generator"><link href="https://uploads-ssl.webflow.com/60dda59e22f5355fde01b94d/css/final-year-3ede91.webflow.dc84646a9.css" rel="stylesheet" type="text/css"><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7COswald:200,300,400,500,600,700%7COpen+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic" media="all"><script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Oswald:200,300,400,500,600,700","Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic"]  }});</script><!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif]--><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon"><link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon"><!-- Memberstack --> 
<script src="https://api.memberstack.io/static/memberstack.js?webflow" data-memberstack-id="f0686534737ef57fe5c3dcc04c34965d"> </script><style type="text/css" data-ms-style="">[ms-hide='undefined'],[href$='#ms-hide-undefined'], .hide-undefined {display: none !important;}[data-ms-content='undefined'],[href$='#/ms/content/undefined'] {display: none !important;}[data-ms-membership='redirect'],[href*='#/ms/membership/redirect'],[data-ms-content='members'],[href$='#/ms/content/members'],[data-ms-modal='profile'],[href*='#/ms/profile'],[ms-profile],[href='#ms-profile'] {display: none !important;}[ms-logout],[href='#ms-logout'],[href*='#/ms/logout'] {display: none !important;}[ms-member-page] {display: none !important;}</style> <script async="" type="text/javascript" src="https://cdn.livechatinc.com/tracking.js"></script><script charset="utf-8" src="https://api.memberstack.io/static/6.bf7acb6f7324ce381858.bundle.js"></script><script charset="utf-8" src="https://api.memberstack.io/static/10.c45463d135d12849938e.bundle.js"></script><script charset="utf-8" src="https://api.memberstack.io/static/1.b18d54ae9a0b1122b1e5.bundle.js"></script><script charset="utf-8" src="https://api.memberstack.io/static/8.a59d5a5e837a238ccd95.bundle.js"></script><style type="text/css">[class*="ms-"][class$="-button"] {
  -webkit-appearance: none;
  -moz-appearance: none;
}
        });
</script>

