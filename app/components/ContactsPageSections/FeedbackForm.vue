<script setup>
import { Form, Field } from 'vee-validate';

const onSubmit = (values) => {
  console.log(values);

  // const form = e.target;
  // const formData = new FormData(form);

  // for (const [name, value] of formData) {
  //   console.log(`${name}: ${value}`);
  // }
};
</script>

<template>
  <div class="container">
    <section class="flex justify-between bg-black-200 gap-10 p-10 rounded-xl border border-black-100 my-20">
      <div class="text-left max-w-[600px]">
        <h3 class="text-2xl md:text-4xl mb-4">Остались вопросы?</h3>
        <p class="text-stone-500">Заполните форму и мы проконсультируем и ответим на все интересующие вас вопросы</p>
      </div>

      <div class="max-w-[600px] flex-1">
        <Form @submit="onSubmit" class="flex flex-col gap-4 w-[100%]">
          <Field
            name="name"
            type="text"
            placeholder="Имя Фамилия*"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <Field
            name="phone"
            type="text"
            placeholder="Телефон*"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <Field
            name="email"
            type="text"
            placeholder="Email*"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <Field
            as="textarea"
            name="message"
            placeholder="Введите сообщение..."
            class="bg-black-100 border border-black-50 rounded-md p-4 h-[200px]"
          />

          <Field v-slot="{ field }" name="terms" type="checkbox" :value="true" :unchecked-value="false">
            <label class="flex items-center gap-3">
              <input type="checkbox" name="terms" v-bind="field" :value="true" class="accent-red-700" />
              <span>
                Согласен с <a
                  href="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruDBIv1_HFT_UJhIP5hC4fB6x5M9gltwAx7CAt-oopEH3SAmguvWfeYHNpuLoEe_j4nRu3WlqAuWEAG42-s2_D1ReU-60UnPTGtCHbXB4XtKY2JT3zcmW-5Ij8Na6Qr7w2Q%3D%3D%3Fsign%3DgWl7M8wAwqKeuhV_lySbTrw4wplBATA-jeDhsFqbqtA%3D&name=Политика%20в%20отношении%20обработки%20персональных%20данных.docx&nosw=1"
                  class="text-red-700 underline mx-1"
                  target="_blank"
                >
                  условиями политики конфиденциальности
                </a>
                ООО “ПромЭко“
              </span>
            </label>
          </Field>

          <Button type="submit" class="mt-4" size="small">
            <div class="flex items-center gap-2">
              <span>Отправить</span>

              <Icon name="i-lucide-arrow-right" />
            </div>
          </Button>
        </Form>
        <!-- <form @submit="onSubmit" class="flex flex-col gap-4 w-[100%]">
          <input
            type="text"
            placeholder="Имя Фамилия*"
            name="Name"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <input
            type="text"
            placeholder="Телефон*"
            name="Phone"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <input
            type="email"
            placeholder="Email*"
            name="Email"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          />
          <textarea
            name="Message"
            placeholder="Сообщение"
            class="bg-black-100 border border-black-50 rounded-md p-4"
          ></textarea>

          <div class="flex gap-3 items-center">
            <input type="checkbox" id="consent" name="consent" class="accent-red-700" />
            <label for="consent" class="text-sm text-stone-500">
              Согласен с <a href="" class="text-red-700 underline">
                условиями политики конфиденциальности ООО“ПромЭко“
              </a>
            </label>
          </div>

          <Button type="submit" class="mt-4" size="small">
            <div class="flex items-center gap-2">
              <span>Отправить</span>

              <Icon name="i-lucide-arrow-right" />
            </div>
          </Button>
        </form> -->
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
