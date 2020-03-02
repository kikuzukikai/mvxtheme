---
layout: compress
---
<!DOCTYPE html>
<html lang="ja">
<!-- head -->
{% include html-head.md %}
<body class="body">
    <!-- header -->
    {% include header.md %}
    <!-- main content -->
    <main class="container" role="main">
        {{ content }}
        <div id="back-to-top" role="button" aria-label="Back to top">
            <i class="fas fa-angle-double-up"></i>
        </div>
    </main>
    <!-- footer -->
    {% include article-footer.md %}
    {% include footer.md %}
    <!-- scripts -->
    {% include scripts.md %}
</body>
</html>
