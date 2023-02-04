<template>
    <section id="skill" class="skill_background">
        <img src="../assets/skill_title_icon.svg" class="skill_title_icon">
        <div class="skill_title">Skill</div>
            <div class="flex justify-center grid grid-cols-4 gap-4 skill_row">
                <div class="skill"  @mouseenter="isHovering = true" @mouseleave="isHovering = false">
                    <div class="skill_header" ref="text" >Language</div>
                    <li class="skill_text">IELTS：6.5</li>
                </div>
                <div class="skill">
                    <div class="skill_header">Operating System</div>
                    <li class="skill_text">Windows</li>
                    <li class="skill_text">MacOS</li>
                    <li class="skill_text">Ubuntu</li>
                    <li class="skill_text">FreeBSD</li>
                </div>
                <div class="skill">
                    <div class="skill_header">Personalities</div>
                    <li class="skill_text">Leadership</li>
                    <li class="skill_text">Stress Resistence</li>
                    <li class="skill_text">Critical Thinking</li>
                    <li class="skill_text">Problem Solving</li>
                </div>
                <div class="skill">
                    <div class="skill_header_programming_language">Programming Language</div>
                    <li class="skill_text">C/C++</li>
                    <li class="skill_text">python</li>
                    <li class="skill_text">shell script</li>
                    <li class="skill_text">html/css/js</li>
                    <li class="skill_text">verilog</li>
                </div>
                <div class="skill2 col-span-2">
                    <div class="skill_header">Courses</div>
                    <transition name="fade">
                        <div v-if="courses_first">
                            <li class="skill_courses_text" style="left: 250px; top: 100px;">Introduction to Machine Learning</li>
                            <li class="skill_courses_text" style="left: 250px; top: 150px;">Introduction to Operating System</li>
                            <li class="skill_courses_text" style="left: 220px; top: 200px;">Introduction to Algorithm</li>
                            <li class="skill_courses_text" style="left: 250px; top: 250px;">Computer System Administration</li>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="courses_second">
                            <li class="skill_courses_text" style="left: 250px; top: 100px;">Intro to Artificial Intelligence</li>
                            <li class="skill_courses_text" style="left: 266px; top: 150px;">Introduction to Database Systems</li>
                            <li class="skill_courses_text" style="left: 469px; top: 200px; width: 700px;">Introduction to Computers and Programming</li>
                            <li class="skill_courses_text" style="left: 255px; top: 250px;">Intro to Network Programming</li>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="courses_third">
                            <li class="skill_courses_text" style="left: 449px; top: 100px; width: 700px;">Data Structures and Object-oriented Programming</li>
                            <li class="skill_courses_text" style="left: 205px; top: 150px;">Computer Organization</li>
                            <li class="skill_courses_text" style="left: 250px; top: 200px;">Introduction to Operating Systems</li>
                            <li class="skill_courses_text" style="left: 189px; top: 250px;">Digital Circuit Lab</li>
                        </div>
                    </transition>
                    <span class="this_dot" ref="CoursesFirstRef" style="position:absolute; top:300px; left:260px;" @click="courses_first=true; courses_second=false; courses_third=false;"></span>
                    <span class="dot" ref="CoursesSecondRef" style="position:absolute; top:300px; left:290px;" @click="courses_second=true; courses_first=false; courses_third=false;"></span>
                    <span class="dot" ref="CoursesThirdRef" style="position:absolute; top:300px; left:320px;" @click="courses_third=true; courses_first=false; courses_second=false;"></span>
                </div>
                <div class="skill2 col-span-2">
                    <div class="skill_header">Frameworks and Tools</div>
                    <li class="skill_text">Django</li>
                    <li class="skill_text">Flask</li>
                    <li class="skill_text">Vue.js</li>
                    <li class="skill_text">Tailwind</li>
                    <li class="skill_text2" style="position: absolute; top: 28%; left: 65%;">Docker</li>
                    <li class="skill_text2" style="position: absolute; top: 40%; left: 63.5%;">WSL</li>
                    <li class="skill_text2" style="position: absolute; top: 52%; left: 64.3%;">Nginx</li>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    props: {
        hoverFx: {
            type: Boolean,
        },
    },
    data() {
        return {
            courses_first: true,
            courses_second: false,
            courses_third: false,
            isHovering: false,
        }
    },
    watch: {
        courses_first() {
            const refs = this.$refs.CoursesFirstRef;
            if ( this.courses_first == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        courses_second() {
            const refs = this.$refs.CoursesSecondRef;
            if ( this.courses_second == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        courses_third() {
            const refs = this.$refs.CoursesThirdRef;
            if ( this.courses_third == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        isHovering() {
            const refs = this.$refs.text;
            if ( this.isHovering == true ) {
                refs.classList.add("hover");
            } else {
                refs.classList.remove("hover");
            }
        }
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.skill_background {
    position: absolute;
    top: 805px;
    left: 0px;
    width: stretch;
    height: 1200px;
    background-color: #FBF9F6;
    z-index:1;
}

.skill_title {
    position: absolute;
    width: 370px;
    height: 77px;
    left: 3.26vw;
    top: 105px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #483E30;
}

.skill_title_icon {
    position: absolute;
    width: 125px;
    height: 72px;
    left: 3.19vw;
    top: 108px;
    opacity: 0.5;
}

.skill {
    position: relative;
    top: 60%;
    left: 50%;
    max-width: 271px;
    height: 363px;
    background-color: #EEE9E2;
    
}

.hover {
    color: #EEE9E2;
}


.skill2 {
    position: relative;
    top: 65%;
    left: 24.3%;
    max-width: 574px;
    height: 363px;
    background-color: #EEE9E2;
}

.skill_row {
    max-width: 1195px;
}

.skill_header {
    position: relative;
    max-width: 275px;
    height: 65.53px;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 70px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #483E30;
}



.skill_header_programming_language {
    position: relative;
    max-width: 275px;
    height: 65.53px;
    left: 50%;
    top: 13%;
    transform: translate(-50%, -50%);

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: #483E30;
}

.skill_text {
    position: relative;
    left: 73%;
    top: 10%;
    transform: translate(-50%, -50%);
    text-align: left;

    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.05em;

    color: #483E30;
}

.skill_text2 {
    transform: translate(-50%, -50%);
    text-align: left;

    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.05em;

    color: #483E30;
}

.skill_courses_text {
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: left;

    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.05em;

    color: #483E30;
}

.dot {
    height: 10px;
    width: 10px;
    background: rgba(118, 106, 89, 0.7);
    opacity: 0.5;
    cursor: pointer;
}

.this_dot {
    height: 10px;
    width: 10px;
    background: rgba(118, 106, 89, 0.7);
    box-shadow: inset 0px 0px 4px rgba(77, 67, 57, 0.5);
    cursor: pointer;
}

</style>