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
