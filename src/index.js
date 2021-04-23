import dva from 'dva';
import {createBrowserHistory as createHistory} from 'history'; // 关键在这里
// import './index.css';
import { getNavData } from './common/nav';
// 1. Initialize
const app = dva({
  history: createHistory(), // 关键在这里
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


const vadpAi = {
  getNavData: getNavData,
}
window.vadpAi = vadpAi;

export { getNavData }

// export default vadpAi
