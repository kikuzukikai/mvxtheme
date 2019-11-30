---
layout: article
---
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
<header class="post-header">
<h1 itemprop="name headline">{{ page.title | escape }}</h1>
<p class="meta">
<time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
{% assign date_format = site.date_format | default: "%b %-d, %Y" %}
投稿: {{ page.date | date: date_format }}
</time>
&nbsp;
更新: {% last_modified_at %b %-d, %Y %}
&nbsp;
<i class="fa fa-pencil fa-fw"></i>
<a href="https://github.com/kikuzukikai/mvx/blob/master/{{ page.path }}" alt="Edit">
編集する
</a>
</p>
</header>
<div class="post-content" itemprop="articleBody">
{{ content }}
</div>
<div class="fb-comments" data-href="{{ site.url }}{{ page.url }}" data-width="100%" data-numposts="10"></div>
</article>
{% include deeplink.md %}
