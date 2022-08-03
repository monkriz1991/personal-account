<template>
        <el-col :span="6">
            <div class="cabinet-sidebar"> 
                <el-menu default-active="1">
                    <!-- <b-collapse id="collapse-a">
                        <b-list-group-item href="#some-link">Повреждения АМ</b-list-group-item>
                        <b-list-group-item href="#" >Штрафы ПДД</b-list-group-item>
                    </b-collapse>
                    <b-list-group-item href="#foobar">Потратить мили</b-list-group-item> -->
                        <el-menu-item index="2" >
                            <nuxt-link :to="`/cabinet/`">Мой счёт</nuxt-link>
                        </el-menu-item>
                        <el-menu-item index="3" >
                            <nuxt-link :to="`/cabinet/data-user/`">Настройки</nuxt-link>
                        </el-menu-item>
                        <el-menu-item index="4" >
                            <nuxt-link :to="`/cabinet/history-rent/`">История бронирования</nuxt-link>
                        </el-menu-item>
                        <el-menu-item index="4" >
                            <span @click="logout">
                                <i class="el-icon-arrow-left"></i>Выход
                            </span>
                        </el-menu-item>
                </el-menu>
            </div>
        </el-col>
</template>



<script>
export default {
    head () {
        
    },
    data(){
        return{

        }
    },
    methods: {
        logout(){
            this.$auth.logout();
        },
    },
}
</script>