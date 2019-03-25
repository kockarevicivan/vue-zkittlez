import Vue from 'vue';

import ZButton from './ZButton.vue';
import ZCard from './ZCard.vue';
import ZCheckbox from './ZCheckbox.vue';
import ZHeader from './ZHeader.vue';
import ZInput from './ZInput.vue';
import ZSpacer from './ZSpacer.vue';
import ZTextarea from './ZTextarea.vue';

import ZCenter from './layout/ZCenter.vue';
import ZHalf from './layout/ZHalf.vue';
import ZThird from './layout/ZThird.vue';
import ZQuarter from './layout/ZQuarter.vue';

const Components = {
    ZButton,
    ZCard,
    ZCheckbox,
    ZHeader,
    ZInput,
    ZSpacer,
    ZTextarea,
    ZCenter,
    ZHalf,
    ZThird,
    ZQuarter
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;