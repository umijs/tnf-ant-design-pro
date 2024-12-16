import React, { useState } from 'react';
import { createFileRoute } from '@umijs/tnf/router';
import { EllipsisOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Col, Dropdown, Row } from 'antd';
import type { PickerProps } from 'antd/es/date-picker/generatePicker';
import type { RadioChangeEvent } from 'antd/es/radio';
import type dayjs from 'dayjs';
import IntroduceRow from '@/components/Dashboard/Analysis/IntroduceRow';
import OfflineData from '@/components/Dashboard/Analysis/OfflineData';
import ProportionSales from '@/components/Dashboard/Analysis/ProportionSales';
import type { TimeType } from '@/components/Dashboard/Analysis/SalesCard';
import SalesCard from '@/components/Dashboard/Analysis/SalesCard';
import TopSearch from '@/components/Dashboard/Analysis/TopSearch';
import { fakeDashboardAnalysisChartData } from '@/services/api';
import { getTimeDistance } from '@/utils/dashboard/utils';
import useStyles from './dashboard.analysis.style';

type RangePickerValue = PickerProps<dayjs.Dayjs>['value'];
type SalesType = 'all' | 'online' | 'stores';

function Analysis() {
  const { styles } = useStyles();
  const [salesType, setSalesType] = useState<SalesType>('all');
  const [currentTabKey, setCurrentTabKey] = useState('');
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    getTimeDistance('year'),
  );
  const { data } = Route.useLoaderData();

  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };
  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };
  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as dayjs.Dayjs, 'day') &&
      rangePickerValue[1].isSame(value[1] as dayjs.Dayjs, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  let salesPieData;

  if (salesType === 'all') {
    salesPieData = data?.salesTypeData;
  } else {
    salesPieData =
      salesType === 'online'
        ? data?.salesTypeDataOnline
        : data?.salesTypeDataOffline;
  }

  const dropdownGroup = (
    <span className={styles.iconGroup}>
      <Dropdown
        menu={{
          items: [
            {
              key: '1',
              label: '操作一',
            },
            {
              key: '2',
              label: '操作二',
            },
          ],
        }}
        placement="bottomRight"
      >
        <EllipsisOutlined />
      </Dropdown>
    </span>
  );
  const handleChangeSalesType = (e: RadioChangeEvent) => {
    setSalesType(e.target.value);
  };
  const handleTabChange = (key: string) => {
    setCurrentTabKey(key);
  };
  const activeKey =
    currentTabKey || (data?.offlineData[0] && data?.offlineData[0].name) || '';
  return (
    <GridContent>
      <>
        <IntroduceRow loading={false} visitData={data?.visitData || []} />

        <SalesCard
          loading={false}
          rangePickerValue={rangePickerValue}
          salesData={data?.salesData || []}
          isActive={isActive}
          handleRangePickerChange={handleRangePickerChange}
          selectDate={selectDate}
        />

        <Row
          gutter={24}
          style={{
            marginTop: 24,
          }}
        >
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <TopSearch
              loading={false}
              visitData2={data?.visitData2 || []}
              searchData={data?.searchData || []}
              dropdownGroup={dropdownGroup}
            />
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <ProportionSales
              loading={false}
              dropdownGroup={dropdownGroup}
              salesType={salesType}
              salesPieData={salesPieData || []}
              handleChangeSalesType={handleChangeSalesType}
            />
          </Col>
        </Row>

        <OfflineData
          loading={false}
          activeKey={activeKey}
          offlineData={data?.offlineData || []}
          offlineChartData={data?.offlineChartData || []}
          handleTabChange={handleTabChange}
        />
      </>
    </GridContent>
  );
}

export const Route = createFileRoute('/dashboard/analysis')({
  component: Analysis,
  loader: fakeDashboardAnalysisChartData,
});
