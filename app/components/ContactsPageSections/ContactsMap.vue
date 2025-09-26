<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker
} from 'vue-yandex-maps';

const map = ref(null);

const mapStyle = reactive([
  {
    tags: {
      any: ['transit']
    },
    elements: ['label.icon', 'label.text'],
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['outdoor', 'park', 'cemetery', 'medical']
    },
    elements: 'label',
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: 'poi',
      none: ['outdoor', 'park', 'cemetery', 'medical']
    },
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: 'road'
    },
    types: 'point',
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['food_and_drink', 'shopping', 'commercial_services']
    },
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['traffic_light']
    },
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['entrance']
    },
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['road'],
      none: ['road_1', 'road_2', 'road_3', 'road_4', 'road_5', 'road_6', 'road_7']
    },
    elements: 'label.icon',
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['road_5', 'road_6']
    },
    elements: 'label',
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['address', 'road_7', 'road_limited', 'road_unclassified', 'road_minor', 'road_construction', 'path']
    },
    elements: 'label',
    stylers: {
      visibility: 'off'
    }
  },
  {
    tags: {
      any: ['transit']
    },
    stylers: {
      visibility: 'off'
    }
  }
]);
</script>

<template>
  <div>
    <yandex-map
      v-model="map"
      :scrollZoom="false"
      :settings="{
        location: {
          center: [37.646606, 55.723942],
          zoom: 12
        }
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer :settings="{ customization: mapStyle, theme: 'dark' }" />
      <yandex-map-default-features-layer />
      <yandex-map-default-marker
        :settings="{
          coordinates: [37.646606, 55.723942],
          title: 'Пром-Эко',
          subtitle: 'Москва, Летниковская, 11/10 <br/> Помещение IV'
        }"
      >
      </yandex-map-default-marker>
    </yandex-map>
  </div>
</template>

<style lang="scss" scoped></style>
