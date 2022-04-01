<template>
    <div>
        <div>Task3</div>
        <a href="javascript:;" @click="sendAjax">发送Ajax</a>
    </div>
</template>

<script>
import {postData} from '../api/task'

export default {
    name: 'Task3',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        sendAjax(){
            postData({}).then(res => {
                alert(res)
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>

<style scoped>

</style>