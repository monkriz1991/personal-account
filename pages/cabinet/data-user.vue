<template>
    <div class="container">
        <el-row>
            <SidebarLeft/>
            <el-col :span="16">
                <div class="cabinet-form">
                    <div class="cabinet-form-block">
                        <el-form :model="Form"  status-icon  ref="Form" class="form-login" >
                            <el-form-item  prop="Email">
                                <el-input type="text" v-model="Form.email" placeholder="Введите Email" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item  prop="FirstName">
                                <el-input type="text" v-model="Form.FirstName" placeholder="Введите имя" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item  prop="MiddleName">
                                <el-input type="text" v-model="Form.MiddleName" placeholder="Введите отчество" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item  prop="LastName">
                                <el-input type="text" v-model="Form.LastName" placeholder="Введите фамилию" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item  prop="Phone">
                                <el-input type="text" v-model="Form.Phone" placeholder="Введите телефон" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item class="login-button">
                                <el-button type="primary" @click="userForm('Form')">Сохранить</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

import SidebarLeft from "~/components/cabinet/SidebarLeft";

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
            Form: {
                email: this.checkUser('EMail'),
                FirstName: this.checkUser('FirstName'),
                MiddleName: this.checkUser('MiddleName'),
                LastName: this.checkUser('LastName'),
                Phone: this.checkUser('Phone'),
            },
        }
    },
    beforeCreate: function() {
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.Form))
      },
    checkUser(p){           
        return this.$auth.user!==null&&this.$auth.user[p]!=this.$auth.user.type_of_user?this.$auth.user[p]:''
      },
    userForm(){
        alert(this.Form)
    }
    }

}
</script>