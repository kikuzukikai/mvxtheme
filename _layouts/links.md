---
layout: default
---
<section class="blog">
	{{ content }}
    	<ul>
	{% for org_hash in site.data.links %}
	{% assign org = org_hash[1] %}
		<li>
    			<a href="{{ site.url }}/links#{{ org.name }}">
      				{{ org.name }}
    			</a>
			({{ org.links | size }} members)
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
