<template>
  <div class="main">
      <div class="form-part">
      <button v-if="!displayForm" @click="showForm" class="form-button">Ajouter un utilisateur</button>
      <div v-if="displayForm" id="show-form">
        <AddContactForm />
      </div>
    </div>
    <div class="contacts">
      <div v-for="contact in contacts" :key="contact.name" class="contact">
        <div class="name-part">
          <h2>{{ contact.name }}</h2>
          <p>{{ contact.number }}</p>
        </div>
        <button @click="callNumber(contact.name, contact.number)"><i class="fa-solid fa-phone-volume"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import AddContactForm from '@/components/AddContactForm.vue';
export default {
  name: 'ContactView',

  components: {
    AddContactForm,
  },
  
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },

  data() {
    return {
      displayForm: false,
      currentCall: {
          name: '',
          number: '',
          date: null,
      },
    }
  },

  methods: {
    showForm() {
      this.displayForm == false ? this.displayForm = true : this.displayForm = false
    },

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
      this.$router.push('/historie')
    }
  }
}
</script>

<style scoped>

  .main {
    height: 700px;
    overflow-y: auto;
    height: auto;
    padding-bottom: 20px;
    width: 100%;
  }
  .contacts {
    width: 90%;
    margin: 5vh auto 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
  }

  .contact {
    background: rgb(14, 104, 222);
    box-shadow: 0 8px 16px -2px rgba(247, 4, 4, 0.2);
    color: rgb(13, 42, 92);
    border-radius: 8px;
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
  }

  .name-part {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
    height: 100%;
    justify-content: center;
  }

  .contact:hover {
    box-shadow: inset 0px 8px 16px -2px rgba(0 0 0 / .2);;
  }

  p {
    font-weight: bold;
    height: auto;
    margin: 0;
  }

  h2 {
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

  #show-form {
    width: 100%;
  }
  .form-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3vh auto;
    width: 100%;
  }

  .form-button {
    border: 2px solid orange;
    border-radius: 0;
    width: auto;
    height: auto;
    padding: 1em 2em;
    color: orange;
    font-size: 16px;
    font-weight: bold;
  }

  .form-button:hover {
    background-color: orange;
    color: white;
    cursor: pointer;
  }
</style>
