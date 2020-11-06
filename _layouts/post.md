---
layout: article
---
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
<header class="post-header">
<h1 itemprop="name headline">{{ page.title | escape }}</h1>
<p class="meta">
{% assign author = site.authors | where: 'title', page.author | first %}
{% if author %}
<a href="{{ author.url }}">{{ author.title }}</a>
{% endif %}
&nbsp;
{{ page.date | date: "%Y年%-m月%-d日" }}投稿
&nbsp;
{{ page.last_modified_at | date: "%Y年%-m月%-d日" }}更新
&nbsp;
<i class="fa-pencil"></i>
<a href="https://github.com/{{ site.repository }}/blob/master/{{ page.path }}" alt="Edit">
編集する
</a>
</p>
</header>
<div class="post-content" itemprop="articleBody">
{{ content }}
</div>
</article>
