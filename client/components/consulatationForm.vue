<template>
    <div>
        <form v-if="!success" @submit.prevent="submitHandler" >
            <div class="fieldset">
                <input v-model="form.name" type="text" placeholder="Имя" required>
                <div v-if="error.name" class="error">{{ error.name }}</div>
            </div>
            <div class="fieldset">
                <input v-model="form.phone" type="tel" placeholder="Контактный телефон" required>
                <div v-if="error.phone" class="error">{{ error.phone }}</div>
            </div>
            <div class="fieldset">
                <input v-model="form.email" type="email" placeholder="e-mail" required>
                <div v-if="error.email" class="error">{{ error.email }}</div>
            </div>
            <div class="fieldset">
                <input v-model="form.comment" type="text" placeholder="Комментарий">
            </div>
            <div class="form-bottom">
                <div v-if="formError" class="error">{{ formError }}</div>
                <button type="submit" class="btn btn-arrow">Отправить <span></span></button>
                <span class="policy">Нажимая кнопку, я соглашаюсь на обработку данных согласно <nuxt-link to="/policy">политике конфиденциальности</nuxt-link> компании</span>
            </div>
        </form>
        <form v-else>
            <div class="success">
                <h3>Ваша заявка принята</h3>
                <p>Наши менеджеры свяжутся с вами в ближайшее время.</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'consultationForm',
    data () {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                comment: ''
            },
            error: {
                name: false,
                phone: false,
                email: false
            },
            formError: false,
            success: false
        }
    },
    methods: {
        async submitHandler () {
            if (!this.form.name.length) {
                this.error.name = 'укажите имя'
            }
            if (!this.form.phone.length) {
                this.error.phone = 'укажите телефон'
            }
            if (!this.form.email.length) {
                this.error.email = 'укажите email'
            }
            if (!this.error.name && !this.error.phone && !this.error.email && !this.formError) {
                this.error.name = false
                this.error.phone = false
                this.error.email = false
                this.formError = false

                let res = await this.$store.dispatch('Consultation', {
                    name: this.form.name,
                    phone: this.form.phone,
                    email: this.form.email,
                    comment: this.form.comment
                })

                if (res) {
                    this.success = true
                } else {
                    this.success = false
                }


            } else {
                this.formError = 'Заполните обязательные поля'
            }
        }
    }
}
</script>