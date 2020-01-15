
<template>
    <div  class="user" >    
        <div class="wrapC">
            <h1>비밀번호 변경하기</h1>
            <div class="changePassword">
                <div class="input-with-label">
                    <input v-model="oldpassword"
                        id="oldpassword" 
                        placeholder="현재 비밀번호를 입력하세요." type="text"/>
                    <label for="oldpassword">현재 비밀번호</label>
                </div>


                <div class="input-with-label">
                    <input v-model="newpassword"
                        id="newpassword" :type="passwordType"
                        placeholder="새 비밀번호를 입력하세요."/>
                    <label for="newpassword"> 새 비밀번호</label>
                </div>

                <div class="input-with-label">
                    <input v-model="passwordConfirm" :type="passwordConfirmType"
                            id="password-confirm"
                        placeholder="비밀번호를 다시한번 입력하세요."/>
                    <label for="password-confirm">새 비밀번호 확인</label>
                </div>
           
                <div class="btn-bottom">
                    <button>
                        비밀번호 변경하기
                    </button>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/css/style.scss'
    import '../../assets/css/user.scss'
    
    import PV from 'password-validator'

    export default {
         watch: {
            password: function (v) {
                this.checkForm();
            }
        },
        methods: {
            checkForm(){
                
                if (this.password.length >= 0 && !this.passwordSchema.validate(this.password))
                    this.error.password = '영문,숫자 포함 8 자리이상이어야 합니다.'
                else
                    this.error.password = false;


                let isSubmit = true;
                Object.values(this.error).map(v => {
                    if (v) isSubmit = false;
                })
                this.isSubmit = isSubmit;


            }
        },
        data: () => {
            return {
                oldpassword: '',
                newpassword: '',
                passwordConfirm: '',
                isTerm: false,
                isLoading: false,
                error: {
                    oldpassword: false,
                    newpassword: false,
                    passwordConfirm: false,
                },
                isSubmit: false,
                passwordType: "password",
                passwordConfirmType: "password",
                termPopup: false,
            }
        }

    }

</script>


