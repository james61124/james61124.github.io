<template>
    <section class="background"></section>
    <section id="home" class="home_background">
        <img src="../assets/home_photo_background.svg" class="home_photo">
        <div class="contact_me" @click="ScrollToFooter">Contact Me >>></div>
        <div class="home_message text-left">
            <div style="font-size: 40px;"> Hello!</div>
            <div style="font-size: 64px;">I am <span style="color: #8C785B;">James Chiu</span></div>
            <div class="active_title" style="font-size: 40px;" >Junior In NYCU</div>
        </div>
        
    </section>

</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        }
    },
    methods: {
        ScrollToFooter() {  
            const element = document.getElementById("footer");
            element.scrollIntoView({ behavior: 'smooth' });
        },
    }
}
</script>

<style scoped>
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.home_message {
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #483E30;
    position: absolute;
    max-width: 600px;
    top: 258px;
    left: 140px;
    z-index:2;
}

.background {
    position: absolute;
    top: 55px;
    left: 0px;
    width: stretch;
    height: 750px;
    background-color: #EEE9E2;
    z-index:1;
}

.home_background {
    position: absolute;
    top: 55px;
    left: 50px;
    width: stretch;
    height: 750px;
    background-color: #EEE9E2;
    z-index:1;
}

.home_photo {
    position: absolute;
    top: -50px;
    left: 0vw;
    max-width: 91.84vw;
    height: 909px;
    z-index:1;
}

.contact_me {
    position: absolute;
    top: 475px;
    left: 140px;
    width: 204.41px;
    height: 33.52px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 33px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.05em;
    color: #8C785B;
    cursor: pointer;
    z-index: 2;
}

.active_title {
    width: 5ch;
	white-space: nowrap;
	overflow: hidden;
	border-right: .05em solid;
	animation: typing 3s steps(14) infinite,
	           caret 1s steps(1) infinite;
}

</style>