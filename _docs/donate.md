---
layout: docs
title: 寄付フォーム
---
<div id="CustomDonationsForm"></div>

<script>
  var LoadCDScripts = function () {
    var cdscript = document.createElement('script');
    cdscript.onerror = function (e) {
        document.head.removeChild(this);
        setTimeout(LoadCDScripts, 1750);
    };
    cdscript.onload = function () {
        CustomDonations.BuildForm({
        account: 'd28fa233-3a2a-401c-8412-b5ef67b8a373',
        form: '19d6d719-2bc4-494d-88e4-34abec758a35',
        allocation: null, /* optional. Use an allocation ID, like 'AH664' (w/ quotes) to be default selected on form load */
        memberId: null, /* optional. If the current user is authenticated, you can insert their user ID, like '02943' (with quotes) */
        apiVersion: 'v1',
        interval: null, /* if null, then user must select one time or recurring (if enabled). Optionally can set to 'once', 'monthly','quarterly', or 'yearly' */
        loadingText: 'Loading Secure Form...',
                paymentVersion: 1,
        baseUrl: 'https://api.customdonations.com',
        mode: 'live', /* change to 'test' to run in test mode. Use card 4242 4242 4242 4242 for testing. */
      });
    };
    cdscript.src = "https://api.customdonations.com/v1/js/form-builder.min.js?v=" + new Date().getTime();
    document.head.appendChild(cdscript);
  }
  LoadCDScripts();
</script>
