<template>
    <div class="navbar">
        <a href="https://www.youtube.com/watch?v=rt6JWFbFsR8" class="navbar_icon" >James</a>
        <!--<div class="flex flex-col z-20 fixed top-0 right-0 w-[140px] h-[100vh] bg-[#F5F4F4] py-2 space-y-6">-->
        <!--<div class="fixed top-0 z-10 mx-auto w-screen p-6 bg-bgColor">-->
        <div>
            <ul class="grid grid-cols-3 gap-3 navbar_row">
                <li class="navbar_button" ref="HomeRef" @click="ScrollToHome">Home</li>
                <li class="navbar_button" ref="SkillRef" @click="ScrollToSkill">Skill</li>
                <li class="navbar_button" ref="ResumeRef" @click="ScrollToResume">Resume</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            scrollPosition: null,
        }
    },
    methods: {
        ScrollToSkill() {  
            const element = document.getElementById("skill");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollToHome() {  
            const element = document.getElementById("home");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollToResume() {  
            const element = document.getElementById("resume");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollOnHome() {
            var prev = window.pageYOffset;
            const refs = this.$refs.HomeRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr <= 800) {
                    refs.classList.add("ThisPage");
                } else {
                    refs.classList.remove("ThisPage");
                }
            });
        },
        ScrollOnSkill() {
            var prev = window.pageYOffset;
            const refs = this.$refs.SkillRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr > 800 && curr <= 1850) {
                    refs.classList.add("ThisPage");
                } else {
                    refs.classList.remove("ThisPage");
                }
            });
        },
        ScrollOnResume() {
            var prev = window.pageYOffset;
            const refs = this.$refs.ResumeRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr > 1850) {
                    refs.classList.add("ThisPage");
                } else {
                    refs.classList.remove("ThisPage");
                }
            });
        },
    },
    mounted() {
      // run the function when the component's mount
      this.ScrollOnHome();
      this.ScrollOnSkill();
      this.ScrollOnResume();
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    height: 55px;
    width: stretch;
    left: 0px;
    top: 0px;
    background: #FBF9F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
}

.navbar_row {
    position: relative;
    max-width: 330px;
    left: 69.2vw;
}

.navbar_button {
    position: relative;
    top: 90%;
    left: 50%;
    height: 38px;
    transform: translate(-50%, -50%);

    font-family: Noto Serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.05em;
    color: #483E30;
    cursor: pointer;
}

.navbar_icon {
    position: absolute;
    width: 224px;
    height: 38px;
    left: 5%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    font-family: Noto Serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    align-items: center;
    letter-spacing: 0.05em;
    color: #BCAA8F;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ThisPage {
    color: #8C785B;
}

.navbar_button:hover {
    color: #BCAA8F;
}
</style>