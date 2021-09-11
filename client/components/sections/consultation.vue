<template>
    <section class="section active section-heigth--auto">
        <section class="section-consultation">
            <div class="container">
                <div class="consultation">
                    <div class="consultation-left">
                        <h2>Нужна помощь?</h2>
                        <p>Пожалуйста, оставьте ваши контактные данные и мы свяжемся с вами для назначения даты консультации</p>
                    </div>
                    <div class="consultation-right">
                        <div class="consultaion-form">
                            <consiltationForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import consiltationForm from '~/components/consulatationForm'

export default {
    name: 'consultationSection',
    components: {
        consiltationForm
    }
}
</script>