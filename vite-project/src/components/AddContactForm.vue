<template>
    <form @submit.prevent="addContact">
        <h3>Remplissez le formulaire...</h3>
        <input type="text" name="contact-name" v-model="contactForm.name" placeholder="Nom du contact...">
        <input type="text" name="contact-number" v-model="contactForm.number" placeholder="Numéro du contact...">
        <span v-if="this.contactForm.number.length != 10 && error">Le nom ne doit pas être vide et le numéro doit faire 10 chiffres</span>
        <button type="submit"><i class="fa-solid fa-plus"></i></button>
    </form>
</template>
<script>
export default {
    name: 'AddContactForm',

    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },

    data() {
        return {
            error: false,
            contactForm: {
                name: '',
                number: ''
            }
        }
    },

    methods: {
        addContact() {
            if(this.contactForm.name == '' || this.contactForm.number == 'null' || this.contactForm.number.length != 10) {
                this.error = true
                return
            }
            this.$store.commit('insertContact', this.contactForm)
            this.contactForm = {
                name: '',
                number: ''
            }
            this.error = false
        },
    }


}
</script>
<style scoped>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        padding: 1em;
        gap: 15px;
        margin: auto;
        background-color: orange;
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 20px -5px rgba(0 0 0 / .2);
    }

    input {
        padding: 8px;
        width: 70%;
        border-radius: 8px;
        outline: none;
        border: 2px solid white;
        background: orange;
        color: white;
    }

    input::placeholder { 
        color: white;
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
        margin: 10px auto
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
    span {
        width: 70%;
    }
</style>