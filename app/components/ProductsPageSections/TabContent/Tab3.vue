<script setup>
const LIST = [
  {
    title: 'Ингибиторы коррозии',
    text: 'Предотвращают химическую коррозию оборудования'
  },
  {
    title: 'Деэмульгаторы',
    text: 'Разделяют водонефтяные эмульсии, ускоряя подготовку нефти'
  },
  {
    title: 'Антипенные присадки',
    text: 'Предотвращают пенообразование в технологических системах'
  }
];
</script>

<template>
  <div>
    <h3 class="text-xl text-left mb-6">
      Высокоэффективные химические реагенты, предназначенные для стабилизации процессов в нефтехимии и повышения
      эффективности переработки.
    </h3>

    <ul>
      <li v-for="item in LIST" :key="item.title" class="mb-6 text-left">
        <h6 class="text-xl">{{ item.title }}</h6>
        <p class="text-stone-500">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>
