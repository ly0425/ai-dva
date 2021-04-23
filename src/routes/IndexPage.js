import React from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';
import styles from './IndexPage.less';
import indexJson from '../assets/mock_json/document_tree'

function IndexPage() {
  const ai_data = indexJson.document_tree
  return (
    <div className={styles.normal}>
      <div className={styles.bannerImg}>
        {/*<img src={[require("../assets/img/AIbanner.png")]} alt="图片" />*/}
        <img src={`${window.REACT_APP_CONFIG.staticPath}/static/images/aiImages/AIbanner.png`} alt="图片" />
      </div>
      <div className={styles.center}>
        <div className={styles.products}>产品服务</div>
        <ul className={styles.box}>
          {ai_data && ai_data.length > 0 ?
            ai_data[0].children.map((item, index) =>
              (
                <li className={styles.modular} key={index}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.info} dangerouslySetInnerHTML={{__html: item.body}}/>
                  {
                    item.children.map((obj, index) =>
                      (
                        <Link to={`/ai/detail/${obj.nid}`} className={styles.everyDetails}>{obj.title}&nbsp;&nbsp;<i
                          className="icon iconfont icon-arrow"/></Link>
                      ),
                    )
                  }
                </li>
              ),
            ) : ''
          }
        </ul>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
