---
layout: default
---
<div class="doc-container">
    <div class="doc-menu">
        <ul>
        {% for item in site.authors %}
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
        <header class="doc-header">
            <h1 class="doc-title">{{ page.title | escape }}</h1>
<p class="meta">
{{ page.last_modified_at | date: "%Y年%-m月%-d日" }}更新
&nbsp;
<i class="fa-pencil"></i>
<a href="https://github.com/{{ site.repository }}/blob/master/{{ page.path }}" alt="Edit">
編集する
</a>
</p>
        </header>
        <section>
            {{ content }}
{% if page.roster %}
{% else %}
<h2>投稿した記事</h2>
<ul>
  {% assign filtered_posts = site.posts | where: 'author', page.title %}
  {% for post in filtered_posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endif %}
            
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
        <a href="/authors/">{{ page }}</a>
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
  
            {% if page.twitter %}
            <a href="https://twitter.com/{{ page.twitter }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fa-twitter fa-2x"></i></a>
            {% endif %}
            {% if page.facebook %}
            <a href="https://www.facebook.com/{{ page.facebook }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fa-facebook fa-2x"></i></a>
            {% endif %}
        </section>
    </article>
</div>

<script>
{% include js/anchor.min.js %}
</script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
