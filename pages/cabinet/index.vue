<template>
    <div class="container">
        <el-row>
            <SidebarLeft/>
            <el-col :span="18">
                <div class="cabinet">
                    <div class="cabinet-user">
                        <el-avatar icon="el-icon-user-solid"></el-avatar>
                        {{this.$auth.user.FirstName}} {{this.$auth.user.LastName}}
                        <div class="cabinet-user-phone">
                            {{this.$auth.user.Phone}}
                        </div>
                        <div class="cabinet-user-email">
                            {{this.$auth.user.EMail}}
                        </div>
                    </div> 
                    <div class="cabinet-bonus">
                        <div class="cabinet-bonus-cart">
                            <div class="cabinet-bonus-cart-block">
                                <span class="bonus-cart-id">id: 55</span>
                                <strong class="bonus-cart-title">
                                    {{this.$auth.user.FirstName}} {{this.$auth.user.LastName}}
                                </strong>
                                <div class="bonus-cart-sttus">
                                    Bronze
                                </div>
                                <div class="bonus-cart-date">
                                    10/22
                                </div>
                            </div>
                        </div>
                        <div class="cabinet-bonus-miles">
                            <div class="bonus-miles-count">
                                <div class="bonus-miles-count-block">
                                    <strong>1563</strong>
                                    <span>мили</span>
                                </div>
                            </div>
                            <div class="bonus-miles-info">
                                Для получения серебряного уровня выполните одно из условий!
                            </div>
                            <div class="bonus-miles-progress">
                                <strong>Расстояние (км.)</strong>
                                <div class="bonus-miles-progress-count"> 
                                    <span>1563</span><b>/</b><span>5000</span>
                                </div>
                            <el-progress :percentage="40" ></el-progress>
                            </div>
                            <div class="bonus-miles-progress"> 
                                <i class="bi bi-dot"></i>
                                <strong>Период аренды (дни)</strong>
                                <div class="bonus-miles-progress-count"> 
                                    <span>3</span><b>/</b><span>30</span>
                                </div>
                              <el-progress :percentage="60" ></el-progress>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>



<script>

import SidebarLeft from "@/components/cabinet/SidebarLeft";

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
    methods: {

    }
}
</script>
