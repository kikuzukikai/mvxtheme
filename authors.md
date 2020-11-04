---
layout: page
title: 執筆者一覧
permalink: /authors/
---
<h1>執筆者一覧</h1>
<ul>
  {% for author in site.authors %}
  <li>
    <h2><a href="{{ author.url }}">{{ author.name }}</a></h2>
    <h3>{{ author.position }}</h3>
    {% if author.twitter %}
    <a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a>
    {% endif %}
    {% if author.facebook %}
    <a href="https://www.facebook.com/{{ author.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a>
    {% endif %}
  </li>
  {% endfor %}
</ul>
