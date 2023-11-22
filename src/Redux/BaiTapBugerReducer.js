import Cheese from "../OrderBuger/Cheese";
import Meat from "../OrderBuger/Meat";
import Salad from "../OrderBuger/Salad";

const bugerState = {
    buger: [
        { ma: 'cheese', hinhDang: <Cheese /> },
        { ma: 'meat', hinhDang: <Meat /> },
        { ma: 'salad', hinhDang: <Salad /> },
    ],
    stt: {
        salad: 1,
        cheese: 1,
        meat: 1,
    },
    gia: {
        salad: 10,
        cheese: 20,
        meat: 55,
    },
    tongTien: 85,
};

const BaiTapBugerReducer = (state = bugerState, action) => {
    switch (action.type) {
        case 'TANG_GIAM_SO_LUONG':
            const { maSP, tangGiam, soLuongHienTai } = action;
            const soLuongMoi = tangGiam ? soLuongHienTai + 1 : soLuongHienTai - 1;

            if (soLuongMoi >= 0) {
                let newBurger = [...state.buger];
                if (tangGiam) {
                    newBurger.push({
                        ma: maSP,
                        hinhDang: getComponentFromMaSP(maSP)
                    })
                } else {
                    newBurger.reverse(); // đảo ngược mảng trước khi xóa phần tử
                    const index = newBurger.findIndex((item) => item.ma === maSP);
                    if (index >= 0) {
                        newBurger.splice(index, 1);
                    }
                    newBurger.reverse(); // đảo ngược mảng trở lại để trả về
                }
                return {
                    ...state,
                    buger: newBurger,
                    stt: {
                        ...state.stt,
                        [maSP]: soLuongMoi,
                    },
                };
            } else {
                return state;
            }
        case "TINH_TONG_TIEN": {
            const { stt, gia } = state;
            const tongTien = gia.salad * stt.salad + gia.cheese * stt.cheese + gia.meat * stt.meat;
            return { ...state, tongTien };
        }
        case 'CHON_LAI_BURGER':
            return {
                ...state,
                buger: [
                    { ma: 'cheese', hinhDang: <Cheese /> },
                    { ma: 'meat', hinhDang: <Meat /> },
                    { ma: 'salad', hinhDang: <Salad /> },
                ],
                stt: {
                    salad: 1,
                    cheese: 1,
                    meat: 1,
                },
                tongTien: 85,
            };
        default:
            return state;
    }
};

const getComponentFromMaSP = (maSP) => {
    switch (maSP) {
        case "salad":
            return <Salad />;
        case "cheese":
            return <Cheese />;
        case "meat":
            return <Meat />;
        default:
            return null;
    }
};

export default BaiTapBugerReducer;