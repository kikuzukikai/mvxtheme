---
layout: article
---
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
<header class="post-header">
<h1 itemprop="name headline">{{ page.title | escape }}</h1>
<p class="meta">
{{ page.date | date: "%Y年%-m月%-d日" }}投稿
&nbsp;
<i class="fa fa-pencil fa-fw"></i>
<a href="https://github.com/kikuzukikai/mvxtheme/blob/master/{{ page.path }}" alt="Edit">
編集する
</a>
</p>
</header>
<div class="post-content" itemprop="articleBody">
{{ content }}
</div>
</article>
{% include deeplink.md %}
