<template>
    <v-app>
        <v-toolbar app>
            Sarafan
            {{profile.name}}&nbsp;<a href="/logout">Выйти</a>
        </v-toolbar>
        <v-content>
            <div v-if="!profile">Необходимо авторизоваться через
                <a href="/login">Google</a>
            </div>
            <div>
                <messages-list :messages="messages"/>
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import MessagesList from 'components/messages/MessageList.vue';
    import {addHandler} from "util/ws";
    import {getIndex} from "util/collections";

    export default {
        components: {
            MessagesList
        },
        data() {
            return {
                messages: frontendData.messages,
                profile: frontendData.profile
            }
        },
        created() {
            addHandler(data => {
                var index = getIndex(this.messages, data.id);
                if (index > -1 ){
                    this.messages.splice(index, 1, data)
                }else {
                    this.messages.push(data)
                }
            })
        }
    }
</script>
<style>
</style>