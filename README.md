# Simple JS captcha

## Usage/Examples

Javascript:
```html
<form action="" method="POST">
    <div class="container">
        <div id="captcha"></div>
    </div>
    <input type="text" id="captchaInput"></input>
    ...
    <button type="submit" id="formSubmit">Submit</button>
</form>
```
Javascript:
```javascript
  const captcha = new Captcha({
      id: 'captcha',
      width: 300,
      height: 100
  });

  const submitBtn = document.getElementById('formSubmit');
  const captchaInput = document.getElementById('captchaInput');
  submitBtn.addEventListener('click', (e) => {
      if(captchaInput.value !== captcha.text) {
          alert('Invalid captcha');
          captcha.generateCaptcha();
          captchaInput.value = '';
          e.preventDefault();
          return;
      }
  });
```
