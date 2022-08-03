<template>
    <div class="container">
        <el-row>
            <SidebarLeft/>
            <el-col :span="16">
                <div class="cabinet-rent">
                    <div class="cabinet-rent-car"
                    v-for="(car,idx) in searchForm" :key="idx">
                        {{car.system}}<br>
                        <div
                        v-for="(caritem,idx) of car.Car" :key="idx">
                        {{caritem.Name}}<br> 
                        {{caritem.CarNumber}}
                        </div>
                        {{car.BeginDate}}- 
                        {{car.EndDate}}<br> 
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

import SidebarLeft from "~/components/cabinet/SidebarLeft";
import { mapGetters,mapActions } from 'vuex'
export default {
    components:{
        SidebarLeft,   
    },
    head(){
        return {
        }
    },
    data(){
        return{
  
        }
    },
    beforeCreate: function() {
    },
    computed:{
        ...mapGetters({
            searchForm: 'main/rentcar'
        })
    },
    methods: {
        ...mapActions({
            rentcarAdd: 'main/getallRent'
        })
    },
    created(){
        this.rentcarAdd()
    }

}
</script>