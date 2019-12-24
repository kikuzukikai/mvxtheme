---
layout: default
---
<div class="doc-container">
    <div class="doc-menu">
        <ul>
        {% for item in site.special %}
            <li>
            {% if item.url == navurl %}
                <a href="{{ item.url | relative_url }}" class="active doc-link" role="link">  {{ item.title }} </a>
            {% else %}
                <a href="{{ item.url | relative_url }}" class="doc-link" role="link">  {{ item.title }} </a>
            {% endif %}
            </li>
        {% endfor %}
        </ul>
    </div>
  <article class="documentation">
    <section class="blog">
      {{ content }}
      <ul class="list">
      {% for item in site.special %}
        <li>
          <time class="time">
            {% assign date_format = site.date_format | default: "%b %-d, %Y" %}
            {{ item.date | date: date_format }}
          </time>
          <h2>
            <a class="link" href="{{ item.url | relative_url }}" role="link">{{ item.title | escape }}</a>
          </h2>
          <p class="meta">
            {{ item.content | strip_html | escape | truncate: 80 }}
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
  </section>
 </article>
</div>
{% include deeplink.md %}
{% include doc-scroll.md %}
