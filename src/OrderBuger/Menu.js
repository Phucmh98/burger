import React, { Component } from 'react'
import { connect } from 'react-redux'

class Menu extends Component {
    handleTangGiamSoLuong = (maSP, tangGiam) => {
        const { stt } = this.props;
        const soLuongHienTai = stt[maSP];
        this.props.tangGiamSoLuong(maSP, tangGiam, soLuongHienTai);
        this.props.tinhTongTien();

    };
    
    handleClearClick = () => {
        this.props.xoaBuger();

    };

    render() {
        const { stt, gia } = this.props;
        return (

            <div >
                <div style={{ backgroundColor: '#282828', boxShadow: '0px 0px 20px 3px #83bb4f' }}>


                    <table style={{ margin: 'auto' }} className="table table-bordered text-center text-white">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Thức ăn</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Salad</td>
                                <td><button className='btn btn-danger' onClick={() => { this.handleTangGiamSoLuong('salad', false, stt.salad) }}>-</button>
                                    <span style={{ margin: '0 5px' }}>{stt.salad}</span>
                                    <button className='btn btn-success' onClick={() => { this.handleTangGiamSoLuong('salad', true, stt.salad) }}>+</button></td>
                                <td>{gia.salad}</td>
                                <td>{gia.salad*stt.salad}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cheese</td>
                                <td><button className='btn btn-danger' onClick={() => { this.handleTangGiamSoLuong('cheese', false, stt.cheese) }}>-</button>
                                    <span style={{ margin: '0 5px' }}>{stt.cheese}</span>                                    
                                    <button className='btn btn-success' onClick={() => { this.handleTangGiamSoLuong('cheese', true, stt.cheese) }}>+</button></td>
                                <td>{gia.cheese}</td>
                                <td>{gia.cheese*stt.cheese}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Meat</td>
                                <td>
                                <button className='btn btn-danger' onClick={() => { this.handleTangGiamSoLuong('meat', false, stt.meat) }}>-</button>
                                    <span style={{ margin: '0 5px' }}>{stt.meat}</span>                                    
                                    <button className='btn btn-success' onClick={() => { this.handleTangGiamSoLuong('meat', true, stt.meat) }}>+</button></td>
                                <td>{gia.meat}</td>
                                <td>{gia.meat*stt.meat}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='font-weight-bold'>
                                <td colSpan={3}>
                                <button className='btn-warning font-weight-bold' type="" onClick={this.handleClearClick}>Chọn lại tất cả</button>
                                </td>
                                <td >Tổng tiền:</td>
                                <td>{this.props.tongTien}</td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
                

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        buger: state.BaiTapBuger.buger,
        stt: state.BaiTapBuger.stt,
        gia: state.BaiTapBuger.gia,
        tongTien: state.BaiTapBuger.tongTien
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: (maSP, tangGiam, soLuongHienTai) => {
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP: maSP,
                tangGiam: tangGiam,
                soLuongHienTai: soLuongHienTai
            };
            dispatch(action);
        },
        tinhTongTien: () => {
            let action = {
                type: 'TINH_TONG_TIEN'
            };
            dispatch(action);
        },
        xoaBuger: () => {
            let action = {
                type: 'CHON_LAI_BURGER'
            };
            dispatch(action);
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)