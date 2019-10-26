<!-- Call To Action -->
<section class="g-pa-30" style="background: rgba(0, 0, 0, .1);">
<div class="d-md-flex justify-content-md-center text-center">
<div class="align-self-md-center">
<p class="lead g-font-weight-400 g-mr-20--md g-mb-0--md" style="margin-bottom: 0px; color: #fff;">
{% if page.previous %}
<a href="{{ page.previous.url }}">前のページ: {{ page.previous.title }}</a>
{% endif %}
{% if page.previous %}
{% if page.next %}
&bull;
{% endif %}
{% endif %}
{% if page.next %}
<a href="{{ page.next.url }}">次のページ: {{ page.next.title }}</a>
{% endif %}
</p>
</div>
</div>
</section>
<!-- End Call To Action -->
