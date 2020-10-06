---
layout: compress
---
<!DOCTYPE html>
<html lang="ja">
<!-- head -->
{% include html-head.md %}
<body class="body">
    <!-- header -->
    {% include_cached header.md %}
    <!-- main content -->
    <main class="container" role="main">
        {{ content }}
        <div id="back-to-top" role="button" aria-label="Back to top">
            <i class="fa-angle-up"></i>
        </div>
    </main>
    <!-- footer -->
    {% include_cached default-footer.md %}
    {% include_cached footer.md %}
    <!-- scripts -->
    {% include_cached scripts.md %}
</body>
</html>
