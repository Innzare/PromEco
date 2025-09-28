<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { vMaska } from 'maska/vue';

import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const isLoading = ref(false);
const { width } = useWindowSize();

const isTablet = computed(() => width.value <= 768);

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  terms: false
});

const validationSchema = toTypedSchema(
  zod.object({
    name: zod.string().min(1, { message: 'Поле обязательно для заполнения' }).max(100, { message: 'Too long' }),
    phone: zod.string().min(18, { message: 'Введите корректный номер телефона' }).max(20, { message: 'Too long' }),
    email: zod.string().min(1, { message: 'Поле обязательно для заполнения' }).email({ message: 'Некорректный Email' }),
    terms: zod.boolean().refine((val) => val === true, {
      message: 'Вы должны согласиться с условиями'
    }),
    message: zod.string().max(500, { message: 'Too long' }).optional()
  })
);

const onSubmit = async (values) => {
  isLoading.value = true;

  try {
    const response = await $fetch('https://formbold.com/s/oP5RQ', {
      method: 'POST',
      body: values
    });
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="container">
    <section
      class="flex flex-col md:flex-row justify-between bg-black-200 gap-10 p-5 md:p-10 rounded-xl border border-black-100 my-10 md:my-20"
    >
      <div class="max-w-[600px]">
        <h3 class="text-2xl md:text-4xl mb-4">Остались вопросы?</h3>
        <p class="text-stone-500">Заполните форму и мы проконсультируем и ответим на все интересующие вас вопросы</p>
      </div>

      <div class="max-w-[600px] flex-1">
        <Form
          @submit="onSubmit"
          :validation-schema="validationSchema"
          :initialValues="{ terms: false }"
          class="flex flex-col gap-8 w-[100%]"
        >
          <div class="relative">
            <Field
              v-model="form.name"
              name="name"
              type="text"
              placeholder="Имя Фамилия *"
              class="bg-black-100 border border-black-50 rounded-md p-4 w-[100%]"
            />
            <ErrorMessage name="name" class="text-xs text-red-700 absolute -bottom-5 left-0" />
          </div>

          <div class="relative">
            <Field
              v-model="form.phone"
              name="phone"
              type="text"
              v-maska="'+7 (###) ###-##-##'"
              placeholder="Телефон *"
              class="bg-black-100 border border-black-50 rounded-md p-4 w-[100%]"
            />
            <ErrorMessage name="phone" class="text-xs text-red-700 absolute -bottom-5 left-0" />
          </div>

          <div class="relative">
            <Field
              v-model="form.email"
              name="email"
              type="text"
              placeholder="Email *"
              class="bg-black-100 border border-black-50 rounded-md p-4 w-[100%]"
            />
            <ErrorMessage name="email" class="text-xs text-red-700 absolute -bottom-5 left-0" />
          </div>

          <Field
            v-model="form.message"
            as="textarea"
            name="message"
            placeholder="Введите сообщение ..."
            class="bg-black-100 border border-black-50 rounded-md p-4 h-[200px]"
          />

          <Field v-slot="{ field }" name="terms" type="checkbox" :value="true" :unchecked-value="false">
            <label class="flex items-center gap-3">
              <input type="checkbox" name="terms" v-bind="field" :value="true" />

              <span>
                Согласен с <a
                  href="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruDBIv1_HFT_UJhIP5hC4fB6x5M9gltwAx7CAt-oopEH3SAmguvWfeYHNpuLoEe_j4nRu3WlqAuWEAG42-s2_D1ReU-60UnPTGtCHbXB4XtKY2JT3zcmW-5Ij8Na6Qr7w2Q%3D%3D%3Fsign%3DgWl7M8wAwqKeuhV_lySbTrw4wplBATA-jeDhsFqbqtA%3D&name=Политика%20в%20отношении%20обработки%20персональных%20данных.docx&nosw=1"
                  class="text-sky-700 underline mx-1"
                  target="_blank"
                >
                  условиями политики конфиденциальности
                </a>
                ООО “ПромЭко“
              </span>
            </label>
          </Field>

          <ErrorMessage name="terms" class="text-xs text-red-700" />

          <Button :disabled="isLoading" type="submit" class="mt-0" size="small" :block="isTablet">
            <div class="flex items-center gap-2">
              <span>Отправить</span>

              <Icon name="i-lucide-arrow-right" />
            </div>
          </Button>
        </Form>
      </div>
    </section>
  </div>
</template>
