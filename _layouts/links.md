---
layout: default
---
<article class="documentation">
<section class="blog">
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
  {{ content }}
  {% for item in site.data.links.toc %}
    <h3>{{ item.title }}</h3>
      <ul class="list">
        {% for entry in item.subfolderitems %}
          <li>
            <h2><a href="{{ entry.url }}">{{ entry.page }}</a></h2>
            <p class="meta">{{ entry.url }}</p>
          </li>
        {% endfor %}
      </ul>
  {% endfor %}
</section>
</article>

<script>
{% include js/anchor.min.js %}
</script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
