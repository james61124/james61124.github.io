<template>
    <div id="footer" class="footer1">
        <div class="footer_header" style="position: absolute; top:20%; left:25%;">Email</div>
        <img src="../assets/email.svg" class="footer_icon" style="position:absolute; top:45%; left:15%;">
        <div class="footer_text" style="position:absolute; top:44%; left:20%;">james61124@gmail.com</div>
        <div class="footer_header" style="position: absolute; top:20%; left:60%;">Social Media</div>
        <a href="https://www.facebook.com/profile.php?id=100006460037940"><img src="../assets/facebook.svg" class="footer_icon" style="position:absolute; top:45%; left:60%;"></a>
        <div class="footer_text" style="position:absolute; top:44%; left:65%;">Facebook</div>
        <a href="https://github.com/james61124"><img src="../assets/github.svg" class="footer_icon" style="position:absolute; top:65%; left:60%;"></a>
        <div class="footer_text" style="position:absolute; top:64%; left:65%;">Github</div>
        <div class="footer_copyright" style="position:absolute; top:85%; left:35%;">Build by James Chiu / Design by Carrie Liang</div>
        <div class="footer_copyright" style="position:absolute; top:91%; left:37%;">Copyright © 2023 all rights preserved</div>
    </div>
    
    
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.footer1 {
    position: absolute;
    width: stretch;
    height: 284px;
    top: 6000px;
    left: 0px;
    background: #BCAA8F;
    
}

.footer_header {
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    color: #766A59;
}

.footer_text {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 45px;
    letter-spacing: 0.05em;
    color: #483E30;
}

.footer_copyright {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #483E30;
}
</style>