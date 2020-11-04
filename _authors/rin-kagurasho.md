---
layout: page
name: 神楽所麟
position: 幹事補
twitter: kagurasho
facebook:
---
{% for author in page.authors %}
  <h2>{{ author.name }}</h2>
  <h3>{{ author.position }}</h3>
  {% if author.twitter %}
    <p><a href="https://twitter.com/{{ author.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a></p>
  {% endif %}
  {% if author.facebook %}
    <p><a href="https://www.facebook.com/{{ author.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a></p>
  {% endif %}
{% endfor %}
