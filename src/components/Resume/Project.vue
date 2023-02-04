<template>
    <div id="project" style="position: relative; top: 120px;"></div>
    <div class="project_title">Project</div>
    <section class="project_title_division">
        <div class="flex justify-center grid grid-cols-3 gap-3 project_row">
            <div class="project" @click="didadream = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Dida Dream</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">The runner-up project in LINE Fresh 2022</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="job_fair_2022 = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Job Fair Compaigning System for 2022 MeiChu Hackthon</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">A Linebot project designed for all 500 participants in MeiChu Hackthon</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="job_fair_2021 = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Job Fair Compaigning System for 2021 MeiChu Hackthon</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">A Linebot project designed for all 500 participants in MeiChu Hackthon</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="personal_website = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Personal Website</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">An introduction of myself</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="hex = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Hex Game Artificial Intelligence</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">a Best-Honorable-Mention-Reward project</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="havannah = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Havanah game Aritificial Intelligence</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">an in-progress research aiming to improve deep reinforcement learning on Havannah Game</div>
                    </div>
                </div>
            </div>
            <div class="project" @click="kaggle = true">
                <div class="project-inner">
                    <div class="project-front">
                        <div class="project_header">Tabular Playground Series Aug 2022 on Kaggle</div>
                    </div>
                    <div class="project-back">
                        <div class="project_text">A project on Kaggle competition</div>
                    </div>
                </div>
            </div>
            
        </div>

        <transition name="fade" appear>
            <div
                v-show="didadream" 
                @click="didadream = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="didadream"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="didadream = false"
            >
                <section class="project_modal" @click.stop="didadream = true">
                    <div class="project_modal_header">Dida-Dream</div>
                    <div class="project_modal_text">
                        <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                        <div style="position: relative; left: 3%;">python, html, CSS, javascript</div>
                        <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                        <div style="position: relative; left: 3%;">Django, LINE Bot, phpmyadmin, Vultr, Apache, LINE APIs, bootstrap</div>
                        <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                        <ul class="project_modal_introduction">
                            <li style="position: relative; left: 7%;">This is a project aiming to solve the problems of leftovers. </li>
                            <li style="position: relative; left: 7%;">For the short term, we utilize API from FamilyMart and collect data of leftovers. We send these informations through LINE Bot based on one's favor and position to motivate them to buy these food.</li>
                            <li style="position: relative; left: 7%;">For the long term, we will let some shops join our systems so that they could also provide their informations of leftovers to customers.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </transition>

        <transition name="fade" appear>
            <div
                v-show="job_fair_2022" 
                @click="job_fair_2022 = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="job_fair_2022"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="job_fair_2022 = false"
            >
                <section class="project_modal" @click.stop="job_fair_2022 = true">
                    <div class="project_modal_header">Job Fair Compaigning System for 2022 MeiChu Hackthon</div>
                    <div class="project_modal_text">
                        <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                        <div style="position: relative; left: 3%;">python</div>
                        <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                        <div style="position: relative; left: 3%;">Django, heroku, LINE Bot, Django Administration, LINE APIs</div>
                        <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                        <ul class="project_modal_introduction">
                            <li style="position: relative; left: 7%;">People in MeiChu Hackthon came to job fair. LINE Bot serves as a medium to attract people to visit different incorporations.</li>
                            <li style="position: relative; left: 7%;">Once they visit an incorporation, they could get some points, randomly ranging from 100 to 300.</li>
                            <li style="position: relative; left: 7%;">As soon as they get enough points, they can join the lottery.</li>
                        </ul>
                        <div style="font-weight: 550; font-size: 19px;">Github Link：</div>
                        <div><a href="https://github.com/james61124/Job-Fair-Compaigning-System-for-2022-MeiChu-Hackthon">https://reurl.cc/4XAMLj</a></div>
                    </div>
                </section>
            </div>
        </transition>

        <transition name="fade" appear>
            <div
                v-show="job_fair_2021" 
                @click="job_fair_2021 = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="job_fair_2021"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="job_fair_2021 = false"
            >
                <section class="project_modal" @click.stop="job_fair_2021 = true">
                    <div class="project_modal_header">Job Fair Compaigning System for 2021 MeiChu Hackthon</div>
                    <div class="project_modal_text">
                        <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                        <div style="position: relative; left: 3%;">python</div>
                        <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                        <div style="position: relative; left: 3%;">Flask, heroku, LINE Bot, LINE APIs</div>
                        <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                        <ul class="project_modal_introduction">
                            <li style="position: relative; left: 7%;">People in MeiChu Hackthon came to job fair. LINE Bot serves as a medium to attract people to visit different incorporations.</li>
                            <li style="position: relative; left: 7%;">Due to Covid-19, Hackthon this year was held online through Gather Town. We designed an online RPG game for participants to join. During the process, they have to find the clew and try to solve the puzzle among different incorporations.</li>
                            <li style="position: relative; left: 7%;">As soon as they finished the game, they could join the lottery.</li>
                        </ul>
                        <div style="font-weight: 550; font-size: 19px;">Github Link：</div>
                        <div><a href="https://github.com/james61124/Job-Fair-Compaigning-System-for-2021-MeiChu-Hackthon">https://reurl.cc/6L1r0y</a></div>
                    </div>
                </section>
            </div>
        </transition>

        <transition name="fade" appear>
            <div
                v-show="personal_website" 
                @click="personal_website = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="personal_website"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="personal_website = false"
            >
                <section class="project_modal" @click.stop="personal_website = true">
                    <div class="project_modal_header">Personal Website</div>
                    <div class="project_modal_text">
                        <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                        <div style="position: relative; left: 3%;">Html, CSS, Javascript</div>
                        <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                        <div style="position: relative; left: 3%;">Vue, Tailwind</div>
                        <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                        <ul class="project_modal_introduction">
                            <li style="position: relative; left: 7%;">Through Vue, I could use the concept of component to administrate my project. </li>
                            <li style="position: relative; left: 7%;">To make my website interactive, I utilized some of the css animations such as fade-in, fade-out, flip card, etc.</li>
                        </ul>
                        <div style="font-weight: 550; font-size: 19px;">Github Link：</div>
                        <div><a href="https://github.com/james61124/Job-Fair-Compaigning-System-for-2021-MeiChu-Hackthon">待補</a></div>
                    </div>
                </section>
            </div>
        </transition>

        <transition name="fade" appear>
            <div
                v-show="hex" 
                @click="hex = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="hex"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="hex = false"
            >
                <section class="project_modal" @click.stop="hex = true">
                    <div class="project_modal_header">Hex Game Artificial Intelligence</div>
                    <div class="project_modal_text">
                        <transition name="fade">
                            <div v-if="hex_first">
                                <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                                <div style="position: relative; left: 3%;">python</div>
                                <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                                <div style="position: relative; left: 3%;">Alphazero, Adaboost, selenium</div>
                                <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                                <ul class="project_modal_introduction">
                                    <li style="position: relative; left: 7%; top: 0%;">Hex Game is a two player abstract strategy board game in which players attempt to connect opposite sides of a rhombus-shaped board made of hexagonal cells. Our objective is to build a powerful Hex Game AI.</li>
                                    <li style="position: relative; left: 7%;">In order to determine whether our model is accurate or not, we used Adaboost as our baseline.</li>
                                    <li style="position: relative; left: 7%;">We use Selenium to crawl a website that hosts a Hex game and then let our model interact with the website's bot to play games.</li>
                                </ul>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="hex_second">
                                <ol class="project_modal_introduction" start="4">
                                    <li style="position: absolute; left: 6%; top: 0%; max-width:520px;">We chose to make Alphazero our major strategy. It consists of three steps. The first one is self-play. To choose which action the model should play, we utilized Monte Carlo Tree Search. We then allowed two models to play against each other, which produced a large amount of data. These datasets are used to test a novel model and train it before deciding whether or not to keep it. We simultaneously train the value network and the policy network for the neural network.</li>
                                </ol>
                                <div style="position: absolute;  left: 1%; top: 300px; font-weight: 550; font-size: 19px;">Github Link：</div>
                                <div style="position: absolute;  left: 4%; top: 335px;"><a href="https://github.com/james61124/Alphazero-on-Hex-game">https://reurl.cc/Ayo13Q</a></div>
                            </div>
                        </transition>
                    </div>
                    <span class="this_dot" ref="HexFirstRef" style="position:absolute; top:85%; left:49%; z-index:5;" @click="hex_first=true; hex_second=false;"></span>
                    <span class="dot" ref="HexSecondRef" style="position:absolute; top:85%; left:51%; z-index:5;" @click="hex_second=true; hex_first=false;"></span>
                </section>
            </div>
        </transition>


        <transition name="fade" appear>
            <div
                v-show="havannah" 
                @click="havannah = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="havannah"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="havannah = false"
            >
                <section class="project_modal" @click.stop="havannah = true">
                    <div class="project_modal_header">Havannah game Aritificial Intelligence</div>
                    <div class="project_modal_text">
                        <transition name="fade">
                            <div v-if="havannah_first">
                                <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                                <div style="position: relative; left: 3%;">python</div>
                                <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                                <div style="position: relative; left: 3%;">Alphazero, CUDA, protobuf</div>
                                <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                                <ul class="project_modal_introduction">
                                    <li style="position: relative; left: 7%;">In addition to simply implementing Alphazero on Havannah Game, we are also researching ways to make Alphazero perform better.</li>
                                </ul>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="havannah_second">
                                <div style="font-weight: 550; font-size: 19px; position: absolute; left: 0%; top: 0%; ">Methodology：</div>
                                <ol class="project_modal_introduction">
                                    <li style="position: absolute; left: 6%; top:34px; max-width:520px;">Increasing the efficiency of self-play.</li>
                                    <li style="position: absolute; left: 6%; top:68px; max-width:520px;">Forced playout and policy target pruning</li>
                                    <li style="position: absolute; left: 6%; top:102px; max-width:520px;">Global pooling</li>
                                    <li style="position: absolute; left: 6%; top:136px; max-width:520px;">Improvement of loss function</li>
                                    <li style="position: absolute; left: 6%; top:170px; max-width:520px;">Increasing input number of channels</li>
                                    <li style="position: absolute; left: 6%; top:204px; max-width:520px;">Different neural networks</li>
                                </ol>
                            </div>
                        </transition>
                    </div>
                    <span class="this_dot" ref="HavannahFirstRef" style="position:absolute; top:85%; left:49%; z-index:5;" @click="havannah_first=true; havannah_second=false;"></span>
                    <span class="dot" ref="HavannahSecondRef" style="position:absolute; top:85%; left:51%; z-index:5;" @click="havannah_second=true; havannah_first=false;"></span>
                </section>
            </div>
        </transition>

        <transition name="fade" appear>
            <div
                v-show="kaggle" 
                @click="kaggle = false"></div>
        </transition>
        <transition name="pop" appear>
            <div
                v-show="kaggle"
                class="fixed inset-0 flex items-center justify-center bg-transparent"
                @click="kaggle = false"
            >
                <section class="project_modal" @click.stop="kaggle = true">
                    <div class="project_modal_header">Tabular Playground Series Aug 2022 on Kaggle</div>
                    <div class="project_modal_text">
                        <transition name="fade">
                            <div v-if="kaggle_first">
                                <div style="font-weight: 550; font-size: 19px;">Programming Language：</div>
                                <div style="position: relative; left: 3%;">python</div>
                                <div style="font-weight: 550; font-size: 19px;">Frameworks and tools：</div>
                                <div style="position: relative; left: 3%;">Logistic Regression, ablation study</div>
                                <div style="font-weight: 550; font-size: 19px;">Introduction：</div>
                                <ul class="project_modal_introduction">
                                    <li style="position: relative; left: 7%;">The purpose of this project is to predict the failure of Super Soaker made by Keep It Dry. The dataset includes information on measurement, attribute, and product code. These numbers are the results of many experiments. To increase accuracy, we must train our model using these data.</li>
                                </ul>
                                <div style="font-weight: 550; font-size: 19px;">Github Link：</div>
                                <div><a href="https://github.com/james61124/james61124-Tabular-Playground-Series-Aug-2022-on-Kaggle">https://reurl.cc/qZQAqg</a></div>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="kaggle_second">
                                <div style="font-weight: 550; font-size: 19px; position: absolute; left: 0%; top: 0%; ">Methodology：</div>
                                <ol class="project_modal_introduction">
                                    <li style="position: absolute; left: 6%; top:34px; max-width:520px;">Set flags of missing values</li>
                                    <li style="position: absolute; left: 6%; top:68px; max-width:520px;">Drop the columns that are useless</li>
                                    <li style="position: absolute; left: 6%; top:102px; max-width:520px;">Fill the missing values</li>
                                    <li style="position: absolute; left: 6%; top:136px; max-width:520px;">Incorporate some similar columns through mean</li>
                                    <li style="position: absolute; left: 6%; top:170px; max-width:520px;">Incorporate two of those columns which represent the area of the soaks</li>
                                    <li style="position: absolute; left: 6%; top:238px; max-width:520px;">Standardization</li>
                                </ol>
                            </div>
                        </transition>
                    </div>
                    <span class="this_dot" ref="KaggleFirstRef" style="position:absolute; top:85%; left:49%; z-index:5;" @click="kaggle_first=true; kaggle_second=false;"></span>
                    <span class="dot" ref="KaggleSecondRef" style="position:absolute; top:85%; left:51%; z-index:5;" @click="kaggle_second=true; kaggle_first=false;"></span>
                </section>
            </div>
        </transition>

        
    </section>
    

</template>

<script>
export default {
    name: 'Resume',
    data() {
        return {
            didadream: false,
            job_fair_2022: false,
            job_fair_2021: false,
            personal_website: false,
            hex: false,
            havannah: false,
            kaggle: false,
            hex_first: true,
            hex_second: false,
            havannah_first: true,
            havannah_second: false,
            kaggle_first: false,
            kaggle_second: false,
        }
    },
    watch: {
        job_fair_2022() {
            if ( this.job_fair_2022 == true ) {
                // document.documentElement.style.overflow = 'hidden'
                return
            }
            document.documentElement.style.overflow = 'auto'
        },
        hex_first() {
            const refs = this.$refs.HexFirstRef;
            if ( this.hex_first == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        hex_second() {
            const refs = this.$refs.HexSecondRef;
            if ( this.hex_second == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        havannah_first() {
            const refs = this.$refs.HavannahFirstRef;
            if ( this.havannah_first == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        havannah_second() {
            const refs = this.$refs.HavannahSecondRef;
            if ( this.havannah_second == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        kaggle_first() {
            const refs = this.$refs.KaggleFirstRef;
            if ( this.kaggle_first == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        },
        kaggle_second() {
            const refs = this.$refs.KaggleSecondRef;
            if ( this.kaggle_second == true ) {
                refs.classList.add("this_dot");
                refs.classList.remove("dot");
            } else {
                refs.classList.add("dot");
                refs.classList.remove("this_dot");
            }
        }
    },
    methods: {
        ModalClick(event){
            var x = event.clientX;
            var y = event.clientY;
            console.log(event.screenX);
            console.log(event.screenY);
        }
    }
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.project_modal {
    position: static;
    width: 700px;
    height: 580px;
    background: #E4D8C6;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}

.project_modal_header {
    position: relative;
    top: 30px;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #483E30;
}

.project_modal_text {
    position: relative;
    top: 50px;
    left: 10%;
    text-align:left;

    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #766A59;
}

.project_header {
    max-width: 200px;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center; 
    letter-spacing: 0.05em;
    color: #483E30;
}

.project_text {
    max-width: 200px;
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 0.05em;
    color: #766A59;
}

.project_modal_introduction {
    max-width: 550px;
    list-style-type: decimal;
}

.project_title {
    position: relative;
    width: 371px;
    height: 77px;
    left: -1.2vw;
    top: 200px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #8C785B;
}

.project_title_division {
    position: relative;
    width: 969px;
    height: 16px;
    left: 5.2vw;
    top: 200px;
    background: #FBF9F6;
}

.project_row {
    max-width: 875px;
}

.project {
    position: relative;
    top: 30%;
    left: 30%;
    max-width: 271px;
    height: 340px;
    background: transparent; 
    cursor: pointer;
}

.project-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.project:hover .project-inner {
    transform: rotateY(180deg);
}

.project-front, .project-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.project-front {
    position: relative;
    max-width: 271px;
    height: 271px;
    background: #BCAA8F;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.project-back {
    position: relative;
    top: -80%;
    left: 0%;
    max-width: 271px;
    height: 271px;
    transform: rotateY(180deg);
    background: #FBF9F6;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.slider_container {
    margin: 30px auto;
    width: 400px;
    height: 280px;
    position: relative;
    border: 20px solid;    
    border-color: #fff;
    border-bottom-width: 100px;
    background-color: #f5f5f5;
    box-shadow: #666 0 0 5px;
}

.slider_container div {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    filter: alpha(opacity=0);
}

.slider_container div {
    -webkit-animation: round 25s linear infinite;
            animation: round 25s linear infinite;
}

@-webkit-keyframes round {
    4% {
        opacity: 1;
        filter: alpha(opacity=100);
        /* 0 - 1秒 淡入*/
    }
    20% {
        opacity: 1;
        filter: alpha(opacity=100);
        /* 1- 5秒靜止*/
    }
    24% {
        opacity: 0;
        filter: alpha(opacity=0);
        /* 5-6秒淡出*/
    }
}
@keyframes round {
    4% {
        opacity: 1;
        filter: alpha(opacity=100);
        /* 0 - 1秒 淡入*/
    }
    20% {
        opacity: 1;
        filter: alpha(opacity=100);
        /* 1- 5秒靜止*/
    }
    24% {
        opacity: 0;
        filter: alpha(opacity=0);
        /* 5-6秒淡出*/
    }
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