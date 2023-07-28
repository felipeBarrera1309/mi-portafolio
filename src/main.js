import app from './app.js';
import router  from './shared/routes';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';

app.use(router)
app.use(ElementPlus)
app.mount('#app')

