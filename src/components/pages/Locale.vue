<template>
    <div class="column is-12">
      <div class="field">
        <label for="email" class="field-label">{{ t.email }}</label>
        <input id="email" name="email" v-validate="'required|email'" type="text" class="input" :class="{ 'is-danger': errors.has('email') }">
        <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
      </div>
      <div class="field">
        <label for="phone" class="field-label">{{ t.phone }}</label>
        <input id="phone" name="phone" v-validate="'required|numeric'" type="text" class="input" :class="{ 'is-danger': errors.has('phone') }">
        <small v-if="errors.has('phone')" class="field-text is-danger">{{ errors.first('phone') }}</small>
      </div>

      <button @click="changeLocale" type="button" class="button is-primary">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 20 20" class="icon icon-google-translate">
          <title>google translate</title>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20,5H10.88L10,2H4A2,2,0,0,0,2,4V17a2,2,0,0,0,2,2h7l1,3h8a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2M7.17,14.59a4.09,4.09,0,0,1,0-8.18A3.88,3.88,0,0,1,9.91,7.5l.09,0L8.75,8.72l-.06-.05a2.17,2.17,0,0,0-1.52-.59,2.42,2.42,0,0,0,0,4.84,2,2,0,0,0,2.12-1.46H7.08V9.91H11V10a2.82,2.82,0,0,1,.05.59,3.78,3.78,0,0,1-3.92,4m6-1.71a9.25,9.25,0,0,0,1.19,1.7l-.54.53-.65-2.23m.77-.76H13l-.33-1h4a7.68,7.68,0,0,1-1.56,2.74A9.18,9.18,0,0,1,14,12.12M21,20a1,1,0,0,1-1,1H13l2-2-.81-2.77.92-.92L17.79,18l.71-.73-2.69-2.68a8.73,8.73,0,0,0,1.92-3.51H19V10H15.36V9h-1v1h-2L11.18,6H20a1,1,0,0,1,1,1Z" />
        </svg>
        <span>{{ t.localize }}</span>
      </button>
    </div>
</template>

<script>
import arabic from 'vee-validate/dist/locale/ar';

export default {
  name: 'locale-example',
  data: () => ({
    email: '',
    phone: '',
    locale: 'en',
  }),
  computed: {
    // custom translation object
    t () {
      if (this.locale === 'ar') {
        return {
          email: 'Ø§ÙØ¨Ø±ÙØ¯ Ø§ÙØ§ÙÙÙØªØ±ÙÙÙ',
          phone: 'Ø±ÙÙ Ø§ÙÙØ§ØªÙ',
          localize: 'ØªØºÙÙØ± Ø§ÙÙØºØ© Ø§ÙÙ Ø§ÙØ§ÙØ¬ÙÙØ²ÙØ©'
        };
      }

      return {
        email: 'Email Address',
        phone: 'Phone Number',
        localize: 'Change locale to Arabic'
      };
    }
  },
  methods: {
    changeLocale() {
      this.locale = this.$validator.locale === 'ar' ? 'en' : 'ar';
      this.$validator.localize(this.locale);
    }
  },
  watch: {
    $route () {
      // make sure we revert to english if the user navigated away.
      this.$validator.localize('en');
    }
  },
  created() {
    this.$validator.localize('ar', {
      messages: arabic.messages,
      attributes: {
        email: 'Ø§ÙØ¨Ø±ÙØ¯ Ø§ÙØ§ÙÙÙØªØ±ÙÙÙ',
        phone: 'Ø±ÙÙ Ø§ÙÙØ§ØªÙ'
      }
    });

    // start with english locale.
    this.$validator.localize('en');
  }
};
</script>
