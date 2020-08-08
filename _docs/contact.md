---
layout: docs
title: お問い合わせフォーム
---

- [情報提供のお願い](/docs/seek.html)も併せてご確認ください。
- 匿名でのお問い合わせにもお答えできるようになりました。

原則、匿名でのお問い合わせとその回答はこのページに公開いたします。

非公開や返信を希望される場合は、返信先を記入いただくか、[トップページ]({{ site.url }})掲載のアドレス(contact@kikuzuki<span class="obfuscate">-</span>kai.org)にメールをお送りください。
いただいた個人情報は、こちらからご連絡する目的以外では使用いたしません。

また、お問い合わせの内容によっては回答までにお時間を頂く場合がございますので、予めご了承ください。

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div align="center">
<form name="contact" id="contact" action="/docs/contact/success.html" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
  <div class="form-group hidden">
    <input class="controls" name="bot-field" />
  </div>
  <div class="form-group">
    <textarea class="controls" name="お問い合わせ内容" placeholder="お問い合わせ内容" required></textarea>
  </div>
  <div class="form-group">
    <label><input type="checkbox" onclick="connecttext('email',this.checked);" checked /> 非公開または返信を希望する:</label>
    <input type="email" class="controls" name="返信先メールアドレス" placeholder="返信先メールアドレス" id="email" pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$" required />
  </div>
  <small>
    This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
  </small>
  <div class="g-recaptcha" data-sitekey="6Lde8LsZAAAAAK2WqwddCyfadxv7F80Yz09sW98z" data-callback="onSubmit" data-size="invisible"></div>
  <button type="submit" class="button">送信</button>
</form>
<script>
$('contact').submit(function() {
    event.preventDefault();
    grecaptcha.ready(function() {
    grecaptcha.execute('6Lde8LsZAAAAAK2WqwddCyfadxv7F80Yz09sW98z', {action: '/docs/contact/success.html'}).then(function(token) {
      $('contact').prepend('<input type="hidden" name="g-recaptcha-token" value="' + token + '">');
      $('contact').unbind('submit').submit();
    });;
  });
});
</script>
</div>

**Ticket ID:**
- TOC
{:toc}

## 2020-03-18
- (この質問は駆逐艦菊月及び当会に関するご質問ではないと判断いたしましたので、公開を中止させていただきます。)

<!--

- 質問: 
菊月保存会の社章「月輪に覗き菊」は寄贈されたのですか？
- 回答: 
いいえ。当該図案に関する譲渡契約は無く、また著作者人格権は消滅しておりません。

-->
