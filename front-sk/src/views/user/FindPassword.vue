<template>
    <div  class="user" >    
        <!-- 여기 class 추가한거  --> 
        <div class="wrapC">
            <h1>비밀번호 찾기</h1>
            <div>
                <div class="input-with-label">
                    <input v-model="id"
                        id="id" 
                        placeholder="아이디를 입력하세요." type="text"/>
                    <label for="id">아이디</label>
                </div>

                <div class="input-with-label">
                    <input v-model="email"
                        id="email" placeholder="이메일을 입력하세요."
                        type="text"/>
                    <label for="email">이메일</label>

                </div >

                <div class="input-with-label">
                    <input v-model="phone"
                        id="phone" type="text"
                        placeholder="핸드폰 번호를 입력하세요."/>
                    <label for="phone">핸드폰 번호</label>
                </div>
            </div>

            <div class="btn-bottom">
                <button>
                    비밀번호 찾기
                </button>
            </div>
        </div>
    </div>
</template>
