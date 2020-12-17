---
layout: docs
title: 特設ページ
permalink: /special/
pagination: 
  enabled: true
---
## このページについて
過去に実施した[クラウドファンディング](https://readyfor.jp/users/409425)などの特設ページの一覧です。

<section>
  <ul class="list">
  {% for item in site.data.list.item %}
  {% if item.version == 3 %}
  {% for entry in item.entry %}
    <li>
      <h2>
        <a class="link" href="{{ entry.url | relative_url }}" role="link">{{ entry.page | escape }}</a>
      </h2>
      <p class="meta">
        {{ entry.content | strip_html | escape | truncate: 80 }}
      </p>
    </li>
  {% endfor %}
  {% endif %}
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
        <a href="/special/">{{ page }}</a>
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
</section>
