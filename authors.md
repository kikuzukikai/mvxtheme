---
layout: authors
title: 投稿者一覧
permalink: /authors/
pagination: 
  enabled: true
roster: true
---
<div class="about-dl">
  <dl>
  {% for author in site.authors %}
    <dt><a href="{{ author.url }}">{{ author.title }}</a></dt>
    <dd>{{ author.position }}<br />
    {% if author.twitter %}
    <a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter"></i></a>
    {% endif %}
    {% if author.facebook %}
    <a href="https://www.facebook.com/{{ author.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook"></i></a>
    {% endif %}
    </dd>
  {% endfor %}
  </dl>
</div>
