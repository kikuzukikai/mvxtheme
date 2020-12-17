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
    <dt>
    <h2><a href="{{ author.url }}">{{ author.title }}</a></h2>
    <p class="meta">{{ author.position }}</p>
    </dt>
    <dd>
    {% if author.twitter %}
    <a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a>
    {% endif %}
    {% if author.facebook %}
    <a href="https://www.facebook.com/{{ author.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a>
    {% endif %}
    </dd>
  {% endfor %}
  </dl>
</div>
