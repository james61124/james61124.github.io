<template>
    <div id="activity" style="position: relative; top: 1410px;"></div>
    <div class="activity">
        <div class="activity_title">Activity And Competition</div>
        <section class="activity_title_division">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">September 2022 - January 2023</div>
            <div class="activity_school">LINE Fresh</div>
            <div class="activity_department">A campus competition held by LINE</div>
            <div class="activity_list">
                <li>The first-runner in Taiwan</li>
                <li>Create a project called "Dida-Dream", aiming to solve the issues of leftovers</li>
            </div>
        </section>
        <section class="activity_school_division">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">October 2021 - October 2022</div>
            <div class="activity_school">10th MeiChu Hackathon</div>
            <div class="activity_department">The biggest campus hackthon in Taiwan</div>
            <div class="activity_list">
                <li>Event Planning Team Leader</li>
                <li>Create Job Fair Compaigning System</li>
            </div>
        </section>
        <section class="activity_school_division" style="position:relative; top:1490px;">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">October 2020 - October 2021</div>
            <div class="activity_school">9th MeiChu Hackathon</div>
            <div class="activity_department">The biggest campus hackthon in Taiwan</div>
            <div class="activity_list">
                <li>Event Planning Team Member</li>
                <li>Create Job Fair Compaigning System</li>
            </div>
        </section>
        <section class="activity_school_division" style="position:relative; top:1750px;">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">June 2021 - June 2022</div>
            <div class="activity_school">NYCU Guitar Club</div>
            <div class="activity_department">Assembly of a large group of music enthusiasts</div>
            <div class="activity_list">
                <li>President</li>
                <li>held a lot of performances such as school talent show, final performance, etc.</li>
            </div>
        </section>
        <section class="activity_school_division" style="position:relative; top:2010px;">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">June 2021 - June 2022</div>
            <div class="activity_school">Badminton Team of Department</div>
            <div class="activity_department">Assembly of a large group of badminton enthusiasts</div>
            <div class="activity_list">
                <li>Vice Captain</li>
            </div>
        </section>
        <section class="activity_school_division" style="position:relative; top:2230px;">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">March 2021 - October 2022</div>
            <div class="activity_school">CS Orientation Camp</div>
            <div class="activity_department">Cohesion of CS students</div>
            <div class="activity_list">
                <li>Event Planning Team Member</li>
            </div>
        </section>
        <section class="activity_school_division" style="position:relative; top:2450px;">
            <img src="../../assets/activity_icon.svg" class="activity_icon">
            <div class="activity_date">June 2021 - June 2022</div>
            <div class="activity_school">CS Student Association</div>
            <div class="activity_department">Provice service for students in CS</div>
            <div class="activity_list">
                <li>Public Relations Team Member</li>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'Activity',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.activity {
    position: relative;
    top: 500px;
}
.activity_title {
    position: relative;
    width: 500px;
    height: 77px;
    left: 5vw;
    top: 1000px;

    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 70px;
    letter-spacing: 0.05em;
    color: #8C785B;
}

.activity_title_division {
    position: relative;
    width: 969px;
    height: 16px;
    left: 5.2vw;
    top: 992px;
    background: #FBF9F6;
}

.activity_school_division {
    position: relative;
    width: 969px;
    height: 3px;
    left: 5.2vw;
    top: 1230px;
    background: #FBF9F6;
}

.activity_icon {
    position: relative;
    width: 77px;
    height: 77px;
    left: 0vw;
    top: 46px;
}

.activity_date {
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

.activity_school {
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

.activity_department {
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

.activity_list {
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