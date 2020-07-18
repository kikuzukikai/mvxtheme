---
layout: default
---
<div class="doc-container">
    <div class="doc-menu">
        <ul>
        {% for item in site.docs %}
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
{{ page.date | date: "%Y年%-m月%-d日" }}投稿
&nbsp;
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
        </section>
    </article>
</div>

<script src="/assets/js/anchor.min.js"></script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
