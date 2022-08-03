<template>
    <div class="container">
        <h1 class="h1-form">login</h1>
        <a @click="$router.go(-1)" class="form-back"><i class="el-icon-arrow-left"></i> back</a>
        <el-form :model="Form"  status-icon :rules="rules" ref="Form" class="form-login" >
            <vue-tel-input 
                v-model="Form.username"
                @onInput="onInput" 
                placeholder="Введите номер телефона"
                type="phone"
                defaultCountry = 'ru'
                :onlyCountries="['ru','by','kz']">
            </vue-tel-input>
            <el-form-item  prop="pass">
                <el-input prefix-icon="el-icon-key" type="text" v-model="Form.pass" placeholder="Введите пароль" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item class="login-button">
                <el-button type="primary" @click="userLogin">Войти</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {

    return {
        Form: {
            pass: '',
            username: '',
        },
        rules: {

        }
    }
  },
    methods: {
        onInput() {
            
        },
        async userLogin() {
            try {
            const params = new URLSearchParams()
            params.append("username", this.Form.username)
            params.append("password", this.Form.pass)
                let response = await this.$auth.loginWith('local', { data: params })
                console.log(response)
            } catch (err) {
                this.openNoty()
                console.log(err)
            }
        },
        openNoty() {
            this.$notify.error({
                title: 'Ошибка авторизации',
                message: 'Проверьте указанны ли все данные верно!'
            });
        },
    },

}
</script>