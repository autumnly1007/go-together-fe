import { instance } from '@/apis/instance';
import PageTitle from '@/components/common/PageTitle';
import withAuth from '@/components/common/PrivateRouter';
import { Button } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styled from '@emotion/styled';
import { orderColumns } from '@/components/Admin/Order/orderColumns';
import AdminOrderTable from '@/components/Admin/Order/AdminOrderTable';
import { formatPrice } from '@/utils/format';
import { alterModal } from '@/components/SignIn/function';
import { useDispatch } from 'react-redux';

const Order = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [datas, setdatas] = useState({
    content: [
      {
        paymentMethod: '',
        reservationDate: '',
        reservationId: 0,
        reservationProductList: [
          {
            productId: 0,
            productName: '',
            reservationDetailId: 0,
            reservationStatus: '',
          },
        ],
        totalAmount: '',
        userId: 0,
        userName: '',
      },
    ],
    totalPages: 1,
  });

  useEffect(() => {
    instance({
      method: 'GET',
      url: `https://www.go-together.store:443/admin/reservations?page=${page}`,
    })
      .then((res) => {
        setdatas(res.data);
      })
      .catch(() =>
        alterModal('서버장해로 인해 데이터를 불러올 수 없습니다\n다시 시도해주세요', dispatch),
      );
  }, [page]);

  const columns = useMemo(() => orderColumns, []);

  return (
    <div>
      <PageTitle title="예약 관리" />
      <AdminOrderTable columns={columns} data={datas.content} />
      <ArrowBox>
        {page > 1 && (
          <span>
            <Button
              onClick={() => {
                setPage(1);
              }}
              variant="outlined"
              color="inherit"
            >
              <KeyboardDoubleArrowLeftIcon />
            </Button>
            <Button
              onClick={() => {
                setPage(page - 1);
              }}
              variant="outlined"
              color="inherit"
            >
              <KeyboardArrowLeftIcon />
            </Button>
          </span>
        )}
        <NowPage>현재 페이지 : {page}</NowPage>
        {datas.totalPages > 1 && page !== datas.totalPages && (
          <span>
            <Button onClick={() => setPage(page + 1)} variant="outlined" color="inherit">
              <KeyboardArrowRightIcon />
            </Button>
            <Button
              onClick={() => {
                setPage(datas.totalPages);
              }}
              variant="outlined"
              color="inherit"
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          </span>
        )}
      </ArrowBox>
    </div>
  );
};

export default withAuth(Order);

const NowPage = styled.span`
  display: inline-block;
  padding: 0 15px;
`;
const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
