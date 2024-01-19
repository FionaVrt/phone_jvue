<template lang="">
    <button>{{value}}</button>
</template>

<script>
export default {
    name: 'KeypadKey',

    props: [
        'value',
    ]
}
</script>
<style scoped>
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        border: 1px solid white;
        background-color: orange;
        font-size: 20px;
    }

    button:hover {
        background: white;
        color: orange;
        border: 2px solid orange;
        cursor: pointer;
    }
</style>