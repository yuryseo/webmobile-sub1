<template>
    <div class="user">
        <!-- 여기 class 추가한거 -->
        <div class="wrapC">
            <h1>비밀번호 찾기</h1>
            <div>
                <div class="input-with-label">
                    <input v-model="id" id="id" placeholder="아이디를 입력하세요." type="text"/>
                    <label for="id">아이디</label>
                     <br/> <br/> <br/> <br/> <br/>
                </div>
            </div>

            <div class="add-option">

                <div>

                    <div class="wrap">
                        <router-link  v-bind:to="{name:'ChangePassword'}" >
                        <button class="btn btn--back btn--login">이메일로 임시 비밀번호 받기</button></router-link>
                        <br/> <br/> <br/>
                    </div>
                </div>
            </div>


            <div class="add-option">

                <div>

                    <div class="wrap">
                        <router-link  v-bind:to="{name:'ChangePassword'}" >
                        <button class="btn btn--back btn--login">핸드폰으로 임시 비밀번호 받기</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>

    import '../../assets/css/style.scss'
    import '../../assets/css/user.scss'

    export default {
        name: "FindPassword"
    }

</script>