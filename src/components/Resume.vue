<template>
    
    <section id="resume" class="resume_background">
        
        <img src="../assets/resume_icon.svg" class="resume_icon">
        <img src="../assets/skill_title_icon.svg" class="resume_title_icon">
        <div class="resume_title">Resume</div>
        <Education />
        <div class="resume_index">
            <div @click="ScrollToEducation" ref="EducationRef" class="last_resume" style="cursor: pointer;">Education</div>
            <div @click="ScrollToProject" ref="ProjectRef" class="last_resume" style="cursor: pointer;">Project</div>
            <div @click="ScrollToActivity" ref="ActivityRef" class="last_resume" style="cursor: pointer;">Activity and Competition</div>
        </div>
        <Project />
        <Activity />
        
    </section>
    
</template>

<script>
import Education from './Resume/Education.vue'
import Project from './Resume/Project.vue'
import Activity from './Resume/Activity.vue'

export default {
    name: 'Resume',
    data() {
        return {
            scrollPosition: null,
        }
    },
    components: {
        Education,
        Project,
        Activity
    },
    methods: {
        ScrollToEducation() { 
            const element = document.getElementById("education");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollToProject() { 
            const element = document.getElementById("project");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollToActivity() {  
            const element = document.getElementById("activity");
            element.scrollIntoView({ behavior: 'smooth' });
        },
        ScrollOnEducation() {
            var prev = window.pageYOffset;
            const refs = this.$refs.EducationRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr >= 2130 && curr < 2720 ) {
                    refs.classList.add("cur_resume");
                    refs.classList.remove("last_resume");
                } else {
                    refs.classList.remove("cur_resume");
                    refs.classList.add("last_resume");
                }
            });
        },
        ScrollOnProject() {
            var prev = window.pageYOffset;
            const refs = this.$refs.ProjectRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr >= 2720 && curr < 4100) {
                    refs.classList.add("cur_resume");
                    refs.classList.remove("last_resume");
                } else {
                    refs.classList.remove("cur_resume");
                    refs.classList.add("last_resume");
                }
            });
        },
        ScrollOnActivity() {
            var prev = window.pageYOffset;
            const refs = this.$refs.ActivityRef; // assign the reference in variable
            window.addEventListener("scroll", () => {
                var curr = window.pageYOffset;
                if (curr >= 4100) {
                    refs.classList.add("cur_resume");
                    refs.classList.remove("last_resume");
                } else {
                    refs.classList.remove("cur_resume");
                    refs.classList.add("last_resume");
                }
            });
        },
    },
    mounted() {
      // run the function when the component's mount
      this.ScrollOnEducation();
      this.ScrollOnProject();
      this.ScrollOnActivity();
    }
}
</script>

<style scoped>

.resume_background {
    position: absolute;
    top: 1900px;
    left: 0px;
    width: stretch;
    height: 4130px;
    background-color: #EEE9E2;
    z-index:1;
}

.resume_title {
    position: relative;
    width: 370px;
    height: 77px;
    left: 5.2vw;
    top: 34px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #483E30;
}

.resume_title_icon {
    position: relative;
    width: 125px;
    height: 72px;
    left: 3.19vw;
    top: 108px;
    opacity: 0.5;
}

.resume_icon {
    position: relative;
    width: 397px;
    height: 130px;
    left: 64.41vw;
    top: 90px;
}

.resume_index {
    position: sticky;
    width: 250px;
    height: 339px;
    left: 78%;
    top: 100px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 50px;
    text-align: right;
    letter-spacing: 0.05em;
    text-align:left
}

.cur_resume {
    color: #766A59;
}

.last_resume {
    color: #BCAA8F;
}


</style>