---
layout: compress
---
<!DOCTYPE html>
<html>
<!-- head -->
{% include html-head.md %}
<body class="body">
    <!-- header -->
    {% include header.md %}
    <!-- main content -->
    <main class="container" role="main">
        <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
            <header class="post-header">
                <h1 itemprop="name headline">{{ page.title | escape }}</h1>
                <p class="meta">
                    {{ page.date | date: "%Y年%-m月%-d日" }}投稿&nbsp;<i class="fa fa-pencil fa-fw"></i><a href="https://github.com/kikuzukikai/mvxtheme/blob/master/{{ page.path }}" alt="Edit">編集する</a>
                </p>
            </header>
            <div class="post-content" itemprop="articleBody">
                {{ content }}
            </div>
        </article>
        {% include deeplink.md %}
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
