import app from './app.js';
import router  from './shared/routes';
import './style.css';

app.use(router)
app.mount('#app')

