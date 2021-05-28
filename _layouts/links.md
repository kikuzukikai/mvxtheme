---
layout: default
---
<section class="blog">
  {{ content }}
  {% for group in site.data.links %}
    <h2>{{ group.title}}</h2>
    <ul>
    {% for link in site.data.links.group[1] %}
      <li>
        <a href="{{ link.url }}">{{ link.name }}</a>
      </li>
    {% endfor %}
    </ul>
  {% endfor %}

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
      <a href="/links/">{{ page }}</a>
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

<script>
{% include js/anchor.min.js %}
</script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
