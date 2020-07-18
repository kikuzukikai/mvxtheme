---
layout: default
---
<article class="post">
    <header class="post-header">
        <h1 itemprop="name headline">{{ page.title | escape }}</h1>
        <p class="meta">
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
    <div class="post-content">
        {{ content }}
    </div>
</article>
