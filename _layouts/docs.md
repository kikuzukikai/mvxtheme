---
layout: default
---
<div class="doc-container">
    <div class="doc-menu">
        <ul>
<li class="category"><h2>
{% if item.url == page.url %}
    <a href="/docs/" class="active">団体概要</a>
{% else %}
    <a href="/docs/">団体概要</a>
{% endif %}
</h2></li>
        {% for item in site.docs %}
        {% unless item.unless %}
            <li>
            {% if item.url == page.url %}
                <a href="{{ item.url | relative_url }}" class="active doc-link" role="link">  {{ item.title }} </a>
            {% else %}
                <a href="{{ item.url | relative_url }}" class="doc-link" role="link">  {{ item.title }} </a>
            {% endif %}
            </li>
        {% endunless %}
        {% endfor %}

<li class="category"><h2>
{% if item.url == page.url %}
    <a href="/rules/" class="active">会則及び規程</a>
{% else %}
    <a href="/rules/">会則及び規程</a>
{% endif %}
</h2></li>

        {% for item in site.rules %}
            <li>
            {% if item.url == page.url %}
                <a href="{{ item.url | relative_url }}" class="active doc-link" role="link">  {{ item.title }} </a>
            {% else %}
                <a href="{{ item.url | relative_url }}" class="doc-link" role="link">  {{ item.title }} </a>
            {% endif %}
            </li>
        {% endfor %}

<li class="category"><h2>
{% if item.url == page.url %}
    <a href="/special/" class="active">特設ページ</a>
{% else %}
    <a href="/special/">特設ページ</a>
{% endif %}
</h2></li>

        {% for item in site.special %}
            <li>
            {% if item.url == page.url %}
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
