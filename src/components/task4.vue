<template>
    <div>
        <div class="shelter"></div>
        <img src="../assets/images/scape.png" alt="" class="scape">
    </div>
</template>

<script>
export default {
    name: 'Task4',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
@media screen and (orientation: portrait) {
    .shelter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .scape {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-90deg);
        z-index: 99;
        animation-name: scape_animate;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-duration: 2s;
        animation-delay: 0.4s;
    }
}

@media screen and (orientation: landscape) {
    .shelter {
        display: none;
    }

    .scape {
        display: none;
    }
}

@keyframes scape_animate {
    0% {
        transform: translate(-50%,-50%) rotate(-90deg);
    }
    50% {
        transform: translate(-50%,-50%) rotate(-90deg);
    }
    100% {
        transform: translate(-50%,-50%) rotate(0deg);
    }
}
</style>