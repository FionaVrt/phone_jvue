<template>
    <div class="history-list">
        <div v-for="call in history" :key="call.name" class="call">
            <div class="name-part">
                <p v-if="call.name != ''">{{ call.name }}</p>
                <p>{{ call.number }}</p>
            </div>
            <span>{{ call.date }}</span>
            <button @click="callNumber(call.name, call.number)"><i class="fa-solid fa-phone-volume"></i></button>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
    export default {
        name: 'HistorieView',
        
        data() {
            return {
                currentCall: {
                    name: '',
                    number: '',
                    date: null,
                },
            }
        },

        computed: {
            history() {
                return this.$store.state.history
            }
        },

        methods: {
            callNumber(name, number) {
                let currentDate = new Date()
                let currentDay = currentDate.getDate()
                let theMonth = currentDate.getMonth()
                let currentMonth
                theMonth < 10 ? currentMonth = '0' + (theMonth + 1) : currentMonth = theMonth
                let currentHour = currentDate.getHours()
                let currentMinute = currentDate.getMinutes() 

                this.currentCall = {
                    name: name,
                    number: number,
                    date: currentDay + '/' + currentMonth + ' ' + currentHour + ':' + currentMinute
                }
                
                this.$store.commit('addCall', this.currentCall)
            }
        }

    }
</script>

<style scoped>

    .history-list {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding: 20px;
        height: 700px;
        width: 90%;
        margin: 0 0 8vh;
    }
    .call {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 8px 16px -2px rgba(0 0 0 / .2);
        background: orange;
        padding: .5em 2em;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        width: 90%;
    }

    .name-part {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
    }

    p {
        height: 0;
        display: flex;
        align-items: center;
        margin: 0;
    }
    
    button {
        border: 2px solid white;
        background: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover {
        background: white;
    }

    button:hover i {
        color: orange;
        cursor: pointer;
    }

    i {
        font-size: 25px;
        color: white;
    }
</style>