<template>
    <div id="education" style="position: relative; top: 10px;"></div>
    <div class="education_title">Education</div>
    <section class="education_title_division">
        <img src="../../assets/education_icon.svg" class="education_icon">
        <div class="education_date">September 2017 - June 2020</div>
        <div class="education_school">Kaohsiung Municipal Kaohsiung Senior High School</div>
    </section>
    <section class="education_school_division">
        <img src="../../assets/education_icon.svg" class="education_icon">
        <div class="education_date">September 2020 - </div>
        <div class="education_school">National Yang Ming Chiao Tung University</div>
        <div class="education_department">Major in Computer Science</div>
        <div class="education_list">
            <li>GPA : 3.95 / 4.3</li>
            <li>Having Passed Graduate Programming Examination (GPE)</li>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Resume',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.education_title {
    position: relative;
    width: 371px;
    height: 77px;
    left: -1.2vw;
    top: 100px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #8C785B;
}

.education_title_division {
    position: relative;
    width: 969px;
    height: 16px;
    left: 5.2vw;
    top: 92px;
    background: #FBF9F6;
}

.education_school_division {
    position: relative;
    width: 969px;
    height: 3px;
    left: 5.2vw;
    top: 230px;
    background: #FBF9F6;
}

.education_icon {
    position: relative;
    width: 77px;
    height: 77px;
    left: 0vw;
    top: 46px;
}

.education_date {
    position: relative; 
    left: 6.5vw; 
    top: -46px;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 70px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #8C785B;
}

.education_school {
    position: relative; 
    left: 6.5vw; 
    top: -80px;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 70px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #483E30;
}

.education_department {
    position: relative; 
    left: 6.5vw; 
    top: -110px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 70px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #8C785B;
}

.education_list {
    position: relative; 
    left: 10vw; 
    top: -120px;
    text-align: left;

    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #483E30;
}


</style>