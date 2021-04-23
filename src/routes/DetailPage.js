import React from 'react';
import {connect} from 'dva';
import styles from './DetailPage.less';
import detailJson from '../assets/mock_json/detail_json';

function DetailPage(props) {
  const detail_data = detailJson[props.match.params.id]
  return (
    <div>
      {detail_data.length > 0 && detail_data[0] ?
        <div className={styles.detailsBanner}>
          {/*<img src={[require("../assets/img/AIbanner.png")]} alt="图片" />*/}
          <img src={`${window.REACT_APP_CONFIG.staticPath}/static/images/aiImages/AIbanner.png`} alt="图片" />
          <div className={styles.bannerTitle}>{detail_data[0].title}</div>

        </div> : ''
      }
      {detail_data.length > 0 ?
        detail_data.map((item, index) =>
          <div key={index}>
            <div className={styles.paragraphTitle}>{item.field_paragraph_title_value}</div>
            <div
              className={styles.paragraphContent}
              dangerouslySetInnerHTML={{__html: item.field_paragraph_content_value}}
            />
          </div>,
        ) : ''
      }

    </div>
  );
}

DetailPage.propTypes = {};

export default connect()(DetailPage);
