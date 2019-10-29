---
layout: article
---
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
<header class="post-header">
<h1 itemprop="name headline">{{ page.title | escape }}</h1>
<p class="meta">
<time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
{% assign date_format = site.date_format | default: "%b %-d, %Y" %}
{{ page.date | date: date_format }}
</time>
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
<div class="fb-comments"></div>
</article>
{% include deeplink.md %}
