<template>
    <div class="subscribe-form">
        <form v-if="!success" @submit.prevent="submitHandler">
            <h2>Хотите получать статьи на почту? Подпишитесь на наш блог</h2>
            <div class="fieldset text-center">
                <input v-model="email" type="email" class="text-center" placeholder="e-mail" required>
            </div>
            <div class="form-bottom">
                <div v-if="error" class="error text-center">{{ error }}</div>
                <br>
                <input type="submit" class="btn btn-small" value="Подписаться">
                <span>Подписываясь на блог, я соглашаюсь с политикой конфиденциальности компании в области обработки персональных данных</span>
            </div>
        </form>
        <form v-else>
            <h2>Вы успешно подписаны на блог!</h2>
        </form>
    </div>
</template>

<script>
export default {
    name: 'subscribe',
    data () {
        return {
            email: '',
            error: false,
            success: false
        }
    },
    methods: {
        async submitHandler () {
            if (this.email.length) {
                this.error = false

                let res = await this.$store.dispatch('Subscribe', {
                    email: this.email,
                    url: location.href
                })
                
                if (res) {
                    this.success = true
                } else {
                    this.error = 'Произошла ошибка.'
                }

            } else {
                this.error = 'поле e-mail обязательное!'
            }
        }
    }
}
</script>