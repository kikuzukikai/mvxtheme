---
layout: docs
---
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/assets/js/lunr.min.js"></script>
<script src="/assets/js/lunr.stemmer.support.js"></script>
<script src="/assets/js/tinyseg.js"></script>
<script src="/assets/js/lunr.ja.js"></script>
<script src="/assets/js/lunr.multi.js"></script>
<script src="{{ "/assets/js/search.js" | absURL }}"></script>

<form class="full-text-search-form" action="{{ .URL }}" onkeyup="search()">
  <input id="search-query" placeholder="Full Text Search" name="query" autocomplete="off" search autofocus/>
</form>

<ul id="results">
