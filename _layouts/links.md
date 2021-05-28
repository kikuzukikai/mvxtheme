---
layout: default
---
<section class="blog">
  {{ content }}
  {% for item in site.data.links.toc %}
    <time class="time">{{ item.title }}</time>
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

<script>
{% include js/anchor.min.js %}
</script>
<script>anchors.add('h1, h2, h3, h4, h5, h6');</script>

<script>
function connecttext( textid, ischecked ) {
  document.getElementById(textid).disabled = !ischecked;
}
</script>
