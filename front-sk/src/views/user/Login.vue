
<template>
    <div class="user" id="login" >
        <div class="wrapC"> <!-- #621582 -->
            <h1 >로그인을 하고 <br>뉴스피드를 확인하세요!</h1>


            <div class="input-with-label">
                <input v-model="email" v-bind:class="{error : error.email, complete:!error.email&&email.length!==0}"
                       @keyup.enter="login"
                       id="email" placeholder="이메일을 입력하세요."
                       type="text"/>
                <label for="email">이메일</label>
                <div class="error-text" v-if="error.email">
                    {{error.email}}
                </div>
            </div>

            <div class="input-with-label">
                <input v-model="password" type="password"
                       v-bind:class="{error : error.password, complete:!error.password&&password.length!==0}"
                       id="password"
                       @keyup.enter="login"
                       placeholder="비밀번호를 입력하세요."/>
                <label for="password">비밀번호</label>
                <div class="error-text" v-if="error.password">
                    {{error.password}}

                </div>
            </div>
             <div class="wrap">
                    비밀번호를 잊으셨나요?
                    <router-link v-bind:to="{name:'FindPassword'}" class="btn--text">비밀번호 찾기</router-link>
               
               <br/> <br/> </div>

            <button class="btn btn--back btn--login" v-on:click="login" :disabled="!isSubmit"
                    :class="{disabled : !isSubmit}">
                로그인

            </button>

            <div class="sns-login">
                <div class="text">
                    <p>SNS 간편 로그인</p>
                    <div class="bar"></div>
                </div>

                <kakaoLogin :component="component"/>
                <GoogleLogin :component="component"/>
                <NaverLogin :component="component"/>

            </div>
            <div class="add-option">
                <div class="text">
                    <p>처음 오셨나요?</p>
                    <div class="bar"></div>
                </div>
               
                <div class="wrap">
                    <router-link v-bind:to="{name:'Join'}" class="btn--text">회원 가입하기</router-link>
                    
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import '../../assets/css/style.scss'
    import '../../assets/css/user.scss'
    import PV from 'password-validator'
    import * as EmailValidator from 'email-validator';
    import KakaoLogin from '../../components/user/snsLogin/Kakao.vue'
    import GoogleLogin from '../../components/user/snsLogin/Google.vue'
    import NaverLogin from '../../components/user/snsLogin/Naver.vue'
    import UserApi from '../../apis/UserApi'

    export default {
        components: {
            KakaoLogin,
            GoogleLogin,
            NaverLogin
        },
        created(){
            this.component = this;


            this.passwordSchema
                .is().min(8)
                .is().max(100)
                .has().digits()
                .has().letters();
        },
        watch: {
            password: function (v) {
                this.checkForm();
            },
            email: function (v) {
                this.checkForm();
            },
        },
        methods: {
            checkForm(){
                if (this.email.length > 0 && !EmailValidator.validate(this.email)){
                    this.error.email = "이메일 형식이 아닙니다."
                    console.log("email"+this.email);
                    console.log("password"+this.password);
                }
                else this.error.email = false;

                if (this.password.length > 0 && !this.passwordSchema.validate(this.password))
                    this.error.password = '영문,숫자 포함 8 자리이상이어야 합니다.'
                else
                    this.error.password = false;


                let isSubmit = true;
                Object.values(this.error).map(v => {
                    if (v) isSubmit = false;
                })
                this.isSubmit = isSubmit;


            }
            , login(){
                if (this.isSubmit) {
                    let {email,password} = this;
                    let data = {
                        email,password

                    }

                    //요청 후에는 버튼 비활성화
                    this.isSubmit = false;

                    UserApi.requestLogin(data,res=>{
                        //통신을 통해 전달받은 값 콘솔에 출력
                        console.log(res.data);

                        alert("로그인실패");
                        //요청이 끝나면 버튼 활성화
                        this.isSubmit = true;
                    },error=>{  
                        //요청이 끝나면 버튼 활성화
                        this.isSubmit = true;
                    })


                }
            }
        },
        data: () => {
            return {
                email: '',
                password: '',
                passwordSchema: new PV(),
                error: {
                    email: false,
                    passowrd: false,
                },
                isSubmit: false,
                component: this
            }
        }

    }

</script>


