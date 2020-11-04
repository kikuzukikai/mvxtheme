---
layout: default
title: 執筆者一覧
permalink: /authors/
---
<ul>
  {% for author in site.authors %}
    <li>
      <h2>{{ author.name }}</h2>
      <h3>{{ author.position }}</h3>
      {% if author.twitter %}
      <li role="listitem" aria-label="Social link item"><a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a></li>
      {% endif %}
      {% if author.facebook %}
      <li role="listitem" aria-label="Social link item"><a href="https://www.facebook.com/{{ author.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a></li>
      {% endif %}
    </li>
  {% endfor %}
</ul>
