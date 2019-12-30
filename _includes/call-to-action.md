<!-- Call To Action -->
<ul class="pagination">
{% if page.previous %}
<li class="prev"><a href="{{ page.previous.url | relative_url }}" title="{{ page.previous.title }}">&laquo; 前の記事</a></li>
{% else %}
<li class="prev disabled"><a>&laquo; 前の記事</a></li>
{% endif %}
<li><a href="{{ '/blog/' | relative_url }}">記事一覧</a></li>
{% if page.next %}
<li class="next"><a href="{{ page.next.url | relative_url }}" title="{{ page.next.title }}">次の記事 &raquo;</a></li>
{% else %}
<li class="next disabled"><a>次の記事 &raquo;</a>
{% endif %}
</ul>
<!-- End Call To Action -->
