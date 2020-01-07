import React, { Component } from "react";
import { connect } from "react-redux"; // thu vien ket noi voi redux

class Index extends Component {
  // render banh mi
  renderBanhMi = () => {
    // kiem tra lay ve tu store chua
    // console.log(this.props.banhmi)
    // duyet tu object
    let { banhmi } = this.props;
    // for (let index in banhmi) {console.log(index,banhmi[index])}// index la key banhmi[index] la value
    // Object.entries(banhmi) tu oiject phan tach ra mang con goi tublet
    return Object.entries(banhmi).map(([banhmips, value], index) => {
      //    console.log(banhmips,value )
      let pushBanhMi = [];
      for (let i = 0; i < value; i++) {
        pushBanhMi.push(<div key={i} className={banhmips}></div>);
      }
      return pushBanhMi;
    });
  };
  renderMenuBanhMi = () => {
    let { menu, banhmi } = this.props;

    console.log(this.props.menu);
    return Object.entries(menu).map(([item, value], index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td>
            {/* lay gia tri gui len store thong qua click  */}
            <button onClick={()=>{this.props.addBanhMi(item,1)}} className="btn btn-danger">+</button>
            <span>{banhmi[item]}</span>
            <button onClick={()=>{this.props.addBanhMi(item,-1)}} className="btn btn-warning">-</button> 
          </td>
          <td>{value}</td>
          <td>{banhmi[item] * value}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center display-3">BÁNH MÌ PHÚC MẬP</h1>
        <div className="row mt-3 ">
          <div className="col-7">
            <h1>BÁNH MÌ CỦA BẠN </h1>
            <div className="bread-top  mt-4"></div>
            <div className="mt-4">{this.renderBanhMi()}</div>
            <div className="bread-bottom mt-4"></div>
          </div>
          <div className="col-5">
            <h1> THỰC ĐƠN CỦA BẠN </h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                </tr>
                {this.renderMenuBanhMi()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td>Tổng Cộng</td>
                  <td>{this.props.tong}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
// lay du lieu tu store ve
const mapStateToProps = (state) => {
  // truy xuat toi banhireducer toi bien state tao ra
  return {
    banhmi: state.banhMiReducer.banhmi,
    menu: state.banhMiReducer.menu,
    tong: state.banhMiReducer.tong
  };
};
// dua du lieu len store thong qua action.type
const mapDispatchToProps = (dispatch) =>{
  return {
    addBanhMi : (thanhPhanBanhMi,soLuong)=>{
      // tao ra action thuc hien 
       const action = {
         type:"ADD",
         thanhPhanBanhMi,
         soLuong
       }
       dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
