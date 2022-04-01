<template>
    <div>
        <json-viewer
            :value="jsonData"
            :expand-depth=5
            copyable
            boxed
            sort></json-viewer>
    </div>
</template>

<script>
import {postData} from '../api/task'

export default {
    name: 'Task6',

    data() {
        return {
            jsonData:null
        };
    },

    mounted() {
        this.sendAjax()
    },

    methods: {
        sendAjax(){
            postData({}).then(res => {
                console.log(res)
                this.jsonData = res
            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>

<style scoped>
::v-deep .jv-node {
    text-align: left;
}
</style>