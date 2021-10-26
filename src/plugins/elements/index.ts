import Vue from 'vue';
import { Card, Button, Alert } from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Card, { locale });
Vue.use(Button, { locale });
Vue.use(Alert, { locale });
