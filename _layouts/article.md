---
layout: compress
---
<!DOCTYPE html>
<html>
<!-- head -->
{% include html-head.md %}
<body class="body">
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&autoLogAppEvents=1&version=v4.0&appId=2448247268557394"></script>
    <!-- header -->
    {% include header.md %}
    <!-- main content -->
    <main class="container" role="main">
        {{ content }}
        <div id="back-to-top" role="button" aria-label="Back to top">
            <i class="fa fa-angle-double-up fa-fw" aria-hidden="true"></i>
        </div>
    </main>
    <!-- footer -->
    {% include article-footer.md %}
    {% include footer.md %}
    <!-- scripts -->
    {% include scripts.md %}
</body>
</html>
