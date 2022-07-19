class Captcha {
    constructor({
        id,
        width = 300,
        height = 100,
        txtSize = 32,
        txtLength = 5,
        txtFont = 'Arial',
        txtColor = 'orange',
        bgColor = 'rgb(0, 0, 255)'
    }) {
        if(!id) return;
        this.el = document.getElementById(id);
        if(!this.el) return;
        this.txtSize = txtSize;
        this.txtLength = txtLength;
        this.txtFont = txtFont;
        this.txtColor = txtColor;
        this.bgColor = bgColor;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.el.append(canvas);
        this.ctx = canvas.getContext('2d');
        this.generateCaptcha();
    }
    
    generateCaptcha = () => {
        const h = this.ctx.canvas.height;
        const w = this.ctx.canvas.width;
        this.text = this.getRandomText();
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, w, h);
        this.ctx.font = `bold ${this.txtSize}pt ${this.txtFont}`;
        this.ctx.fillStyle = this.txtColor;
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.text, w/2, h - ((h - this.txtSize) / 2));
    }

    validate = (captchaInput) => {
        if(captchaInput.value === this.text) return true;
        alert('Invalid captcha');
        this.generateCaptcha();
        captchaInput.value = '';
        return false;
    }

    getRandomText = () => {
        let result = '';
        const characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.txtLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}