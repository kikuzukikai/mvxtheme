---
layout: default
---
<section class="blog">
    {{ content }}
    <ul class="list">
    {% for post in paginator.posts %}
        <li>
            <time class="time">
                {% assign date_format = site.date_format | default: "%b %-d, %Y" %}
                {{ post.date | date: date_format }}
            </time>
            <h2>
                <a class="link" href="{{ post.url | relative_url }}" role="link">{{ post.title | escape }}</a>
            </h2>
            <p class="meta">
                {{ post.content | strip_html | escape | truncate: 80 }}
            </p>
        </li>
    {% endfor %}
    </ul>

{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo;</a>
  {% else %}
    <span>&laquo;</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span>{{ page }}</span>
    {% elsif page == 1 %}
      <a href="/blog/">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">&raquo;</a>
  {% else %}
    <span>&raquo;</span>
  {% endif %}
</div>
{% endif %}
<br />
<p class="rss-subscribe">subscribe <a href="{{ '/feed.xml' | relative_url }}" role="link">via RSS</a></p>
</section>
{% include deeplink.md %}
