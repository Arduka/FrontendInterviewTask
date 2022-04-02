<template>
    <div class=" background clearfix">
        <div class="photo-container">
            <div class="photo-box">
                <img :src="imgUrl" alt="" class="photo">
            </div>
            <div class="photo-box">
                <img :src="imgUrl" alt="" class="photo">
            </div>
            <div class="photo-box">
                <img :src="imgUrl" alt="" class="photo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Task5',

    data() {
        return {
            imgUrl: require('../assets/images/img-1.jpg')
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .background {
        min-height: 100vh;
        background-color: #202529;
    }
    .photo-box {
        width: 300px;
        height: 300px;
    }
    .photo{
        width: 100%;
        height: auto;
    }
    .photo-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:400px){
        .photo-container {
            flex-direction: column;
        }
    }
</style>