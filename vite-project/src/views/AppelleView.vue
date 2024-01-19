<template >
    <div class="keypad">
        <div class="number-name">
            <p>{{ currentNumber}}</p>
            <p>{{ contactName }}</p>
        </div>
        <div class="key-pad">
            <div class="key-div">
                <KeypadKey @click="keyupKey(i)" v-for="i in 9" :key="i" :value="i"/>
                <KeypadKey @click="keyupKey(0)" :value="0"/>
            </div>
            <button class="submit-btn" @click="callNumber()"><i class="fa-solid fa-phone-volume"></i></button>
        </div>
    </div>
</template>
<script>
import KeypadKey from '@/components/KeypadKey.vue';
export default {
    name: 'KeypadView',

    data() {
        return {
            currentNumber: '',
            contactName: '',

            currentCall: {
                name: '',
                number: '',
                date: null,
            },
        }
    },

    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },

    components: {
        KeypadKey,
    },

    methods: {
        keyupKey(number) {
            this.currentNumber.length < 11 ? this.currentNumber += number : this.currentNumber

            if (this.contacts.find(contact => this.currentNumber == contact.number)) {
                this.contactName = this.contacts.find(contact => this.currentNumber == contact.number).name
            }
        },

        callNumber() {
            if (this.currentNumber.length != 0) {
                let currentDate = new Date()
                let currentDay = currentDate.getDate()
                let theMonth = currentDate.getMonth()
                let currentMonth
                theMonth < 10 ? currentMonth = '0' + (theMonth + 1) : currentMonth = theMonth
                let currentHour = currentDate.getHours()
                let currentMinute = currentDate.getMinutes() 

                this.currentCall = {
                    name: this.contactName,
                    number: this.currentNumber,
                    date: currentDay + '/' + currentMonth + ' ' + currentHour + ':' + currentMinute
                }
                this.$store.commit('addCall', this.currentCall)
                this.$router.push('/historie')
            } else {
                alert("Faut entrer un numéro chakal")
                return
            }
        }
    }
}
</script>
<style scoped>

    .keypad {
        margin: 10vh auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .number-name {
        font-weight: bold;
        font-size: 20px;
        width: 250px;
        margin: 10px auto;
        color: rgba(114, 20, 92, 0.49);
        height: 50px;
    }

    p {
        margin: 0;
    }
    .key-div {
        display: flex;
        flex-wrap: wrap;
        width: 200px;
        justify-content: center;
        gap: 10px;
    }

    .key-pad {
        border: 2px solid rgb(18, 17, 15);
        padding: 3em 2em;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 250px;
        margin: auto;
    }
    .submit-btn {
        border: 2px solid white;
        background: rgb(0, 17, 255);
        border-radius: 50px;
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto
    }

    .submit-btn:hover {
        background: white;
        border: 2px solid rgb(15, 14, 12);
        cursor: pointer;
    }

    .submit-btn:hover i {
        color: rgb(0, 234, 255);
        cursor: pointer;
    }

    i {
        font-size: 25px;
        color: white;
    }
</style>