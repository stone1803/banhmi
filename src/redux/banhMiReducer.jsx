let banhMiState = {
  banhmi: { chalua: 1, pate: 3, thitheo: 1 },
  menu: {
    chalua: 20,
    pate: 10,
    thitheo: 30
  },
  tong: 60
};

export const banhMiReducer = (state = banhMiState, action) => {
  switch (action.type) {
    case "ADD":
      // LUU Y KHI XU LY DOI TUONG NAY TREN REDUX MAC DINH KOH RENDER LAI GIAO DIEN
      // PHAI TAO LAI BIEN MOI GAN NGUOC LAI GIA TRI
      // lay ra gia tri thong qua opera es6
      // lay tach thanh phan trong goi action gui len
      let { thanhPhanBanhMi, soLuong } = action;
      // xu ly sl
      if (soLuong === -1 && state.banhmi[thanhPhanBanhMi] < 1) {
        // chi tra ve trang thai dau tien state koh lam them moi
        return { ...state };
      }
      let banhmiUpdate = { ...state.banhmi };
      banhmiUpdate[thanhPhanBanhMi] += soLuong;
      // cap nhat
      state.banhmi = banhmiUpdate;
      // TINH TONG TIEN DOI BIEN CO BAN TA CO THE GAN THANG GIA TRI VAO
      state.tong += soLuong * state.menu[thanhPhanBanhMi];
      return { ...state };
      // thay doi so luong
      //
      break;
    default:
      break;
  }
  return { ...state };
};
