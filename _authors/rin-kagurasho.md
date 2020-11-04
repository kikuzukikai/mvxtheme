---
layout: page
title: 執筆者詳細
name: 神楽所麟
position: 幹事補
twitter: kagurasho
facebook:
---
<h2>{{ page.name }}</h2>
<h3>{{ page.position }}</h3>
{% if page.twitter %}
  <a href="https://twitter.com/{{ page.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a>
{% endif %}
{% if page.facebook %}
  <a href="https://www.facebook.com/{{ page.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a>
{% endif %}
