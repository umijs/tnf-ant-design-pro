import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pie } from '@ant-design/plots';
import { Card, Radio, Typography } from 'antd';
import type { RadioChangeEvent } from 'antd/es/radio';
import numeral from 'numeral';
import useStyles from '@/pages/dashboard.analysis.style';
import type { DataItem } from '@/types';

const { Text } = Typography;
const ProportionSales = ({
  dropdownGroup,
  salesType,
  loading,
  salesPieData,
  handleChangeSalesType,
}: {
  loading: boolean;
  dropdownGroup: React.ReactNode;
  salesType: 'all' | 'online' | 'stores';
  salesPieData: DataItem[];
  handleChangeSalesType?: (e: RadioChangeEvent) => void;
}) => {
  const { t } = useTranslation('dashboard');
  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      title={t('salesProportion')}
      style={{
        height: '100%',
      }}
      extra={
        <div className={styles.salesCardExtra}>
          {dropdownGroup}
          <div className={styles.salesTypeRadio}>
            <Radio.Group value={salesType} onChange={handleChangeSalesType}>
              <Radio.Button value="all">全部渠道</Radio.Button>
              <Radio.Button value="online">线上</Radio.Button>
              <Radio.Button value="stores">门店</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      }
    >
      <div>
        <Text>{t('sales')}</Text>
        <Pie
          height={340}
          radius={0.8}
          innerRadius={0.5}
          angleField="y"
          colorField="x"
          data={salesPieData as any}
          legend={false}
          label={{
            position: 'spider',
            text: (item: { x: number; y: number }) => {
              return `${item.x}: ${numeral(item.y).format('0,0')}`;
            },
          }}
        />
      </div>
    </Card>
  );
};
export default ProportionSales;
