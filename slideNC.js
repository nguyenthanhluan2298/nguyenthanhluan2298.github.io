






//  if(chisoHienTai < (soluongSlides-1)){
//     ;
// }
// else if(chisoHienTai = (soluongSlides-1) ){
//     chisoHienTai = 0;
// }
// chisoHienTai = (chisoHienTai < (soluongSlides-1) ? (chisoHienTai+1) : 0);

// if(chisoHienTai > 0){
//     chisoHienTai--;
// }
// else if(chisoHienTai <= 0) {
//     chisoHienTai = soluongSlides - 1 ;
// }
// chisoHienTai = (chisoHienTai > 0) ? (chisoHienTai-1) : (soluongSlides - 1);

// if(nutnao == 'nutPhai'){
//     chisoHienTai = (chisoHienTai < (soluongSlides-1) ? (chisoHienTai+1) : 0);
//     phantuTiepTheo = slides[chisoHienTai];    
// }
// else if(nutnao =='nutTrai'){
//     chisoHienTai = (chisoHienTai > 0) ? (chisoHienTai-1) : (soluongSlides - 1);
//     phantuTiepTheo = slides[chisoHienTai];
// }

// chisoHienTai=(nutnao == 'nutPhai') ? ((chisoHienTai < (soluongSlides-1) ? (chisoHienTai+1) : 0)) : (chisoHienTai > 0) ? (chisoHienTai-1) : (soluongSlides - 1) ;

// if(nutnao == 'nutPhai'){
//     this.classList.remove('bienMatKhiNext');
// }
// else if(nutnao == 'nutTrai'){
//     this.classList.remove('bienMatKhiPre');
// }

// click_nut = (nutnao == 'nutPhai') ? ('bienMatKhiNext') : ('bienMatKhiPre');
// this.classList.remove(click_nut);

// if(nutnao == 'nutPhai'){
//     this.classList.remove('diVaoKhiNext');
// }
// else if(nutnao == 'nutTrai'){
//     this.classList.remove('diVaoKhiPre');
// }
// click_nut = (nutnao == 'nutPhai') ? ('diVaoKhiNext') : ('diVaoKhiPre');
// this.classList.remove(click_nut);

// if (nutnao == 'nutPhai'){
//     phantuHienTai.classList.add('bienMatKhiNext');
//     phantuTiepTheo.classList.add('diVaoKhiNext');
   
// }
// else if (nutnao == 'nutTrai') {
//     phantuHienTai.classList.add('bienMatKhiPre');
//     phantuTiepTheo.classList.add('diVaoKhiPre');
// }

// click_nut =(nutnao == 'nutPhai') ? ('bienMatKhiNext','diVaoKhiNext' ) : ('bienMatKhiPre','diVaoKhiPre'); 
// this.classList.remove(click_nut);

// HienTai =(nutnao == 'nutPhai') ? ('bienMatKhiNext') : ('bienMatKhiPre'); 
// phantuHienTai.classList.add(HienTai);
// TiepTheo =(nutnao == 'nutPhai') ? ('diVaoKhiNext') : ('diVaoKhiPre'); 
// phantuTiepTheo.classList.add(TiepTheo);




// RUT GON CODE bawngf toan tu
document.addEventListener('DOMContentLoaded', function(){
     var nutPhai = document.querySelector('.nutslide b.phai');
     var nutTrai = document.querySelector('.nutslide b.trai');
     var slides = document.querySelectorAll('.ndslide ul li');
     var chisoHienTai = 0;
     var trangthai = 'dangDungYen';
    //  Đóng gói code(packet code)
    function xacDinh2SlideCD(nutnao){
        phantuHienTai = slides[chisoHienTai];    
        soluongSlides = slides.length;
        // KIEM tra dau tien
        if(trangthai == 'dangChuyenDong'){return false;}
        trangthai = 'dangChuyenDong'; // đánh dấu chuyển động
        // XÁC ĐỊNH 2 PHẦN TỬ HIEN TAI VÀ TIEP THEO
        // if(nutnao == 'nutPhai'){
        //     // console.log('Đay là Nút Phải');
        //     chisoHienTai = (chisoHienTai < (soluongSlides-1) ? (chisoHienTai+1) : 0);
        //     var phantuTiepTheo = slides[chisoHienTai];    
        //     // console.log(phantuTiepTheo);
        // }
        // else if(nutnao =='nutTrai'){
        //     // console.log('Đây là nút Trái');
        //     chisoHienTai = (chisoHienTai > 0) ? (chisoHienTai-1) : (soluongSlides - 1);
        //     phantuTiepTheo = slides[chisoHienTai];
        //     // console.log(phantuTiepTheo);
        // }
        // Thay the if else
        chisoHienTai=(nutnao == 'nutPhai') ? ((chisoHienTai < (soluongSlides-1) ? (chisoHienTai+1) : 0)) : (chisoHienTai > 0) ? (chisoHienTai-1) : (soluongSlides - 1) ;
        phantuTiepTheo = slides[chisoHienTai];
          // --------------------------
        // HAM xu li khi click nhieu lan
        var trangthaiof2CD = 0;
        var HienTaiKetThucCD = function(){
            console.log('đã ket thuc');
            this.classList.remove('active');
            // if(nutnao == 'nutPhai'){
            //     this.classList.remove('bienMatKhiNext');
            // }
            // else if(nutnao == 'nutTrai'){
            //     this.classList.remove('bienMatKhiPre');
            // }
            click_nut = (nutnao == 'nutPhai') ? ('bienMatKhiNext') : ('bienMatKhiPre');
            this.classList.remove(click_nut);
            trangthaiof2CD++;
            if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        }
        var TiepTheoKetThucCD = function(){
            console.log('Tiep theo kết thúc');
            this.classList.add('active');
            // if(nutnao == 'nutPhai'){
            //     this.classList.remove('diVaoKhiNext');
            // }
            // else if(nutnao == 'nutTrai'){
            //     this.classList.remove('diVaoKhiPre');
            // }
            // THay the
            click_nut = (nutnao == 'nutPhai') ? ('diVaoKhiNext') : ('diVaoKhiPre');
            this.classList.remove(click_nut);
            // ---------------
            trangthaiof2CD++;
            if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        }
        // if (nutnao == 'nutPhai'){
        //     phantuHienTai.classList.add('bienMatKhiNext');
        //     phantuTiepTheo.classList.add('diVaoKhiNext');
           
        // }
        // else if (nutnao == 'nutTrai') {
        //     phantuHienTai.classList.add('bienMatKhiPre');
        //     phantuTiepTheo.classList.add('diVaoKhiPre');
        // }
        // THAY THE
        HienTai =(nutnao == 'nutPhai') ? ('bienMatKhiNext') : ('bienMatKhiPre'); 
        phantuHienTai.classList.add(HienTai);
        TiepTheo =(nutnao == 'nutPhai') ? ('diVaoKhiNext') : ('diVaoKhiPre'); 
        phantuTiepTheo.classList.add(TiepTheo);
        // ------------------
        phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
        phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
        //                                  oke






        // if(nutnao == 'nutPhai'){}
        // var HienTaiKetThucCD = function(){
        //     console.log('đã ket thuc');
        //     this.classList.remove('bienMatKhiNext');
        //     this.classList.remove('active');
            // trangthaiof2CD++;
            // if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        // };
        // var TiepTheoKetThucCD = function(){
        //     console.log('Tiep theo kết thúc');
        //     this.classList.add('active');
        //     this.classList.remove('diVaoKhiNext');
        //     trangthaiof2CD++;
        //     if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        // };
        // phantuHienTai.classList.add('bienMatKhiNext');
        // phantuTiepTheo.classList.add('diVaoKhiNext');
        // }
        // else if(nutnao == 'nutTrai'){
        //     var HienTaiKetThucCD = function(){
        //         console.log('đã ket thuc');
        //         this.classList.remove('bienMatKhiPre');
        //         this.classList.remove('active');
        //         trangthaiof2CD++;
        //         if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        //     };
        //     var TiepTheoKetThucCD = function(){
        //         console.log('Tiep theo kết thúc');
        //         this.classList.add('active');
        //         this.classList.remove('diVaoKhiPre');
        //         trangthaiof2CD++;
        //         if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        //     };
        //     phantuHienTai.classList.add('bienMatKhiPre');
        //     phantuTiepTheo.classList.add('diVaoKhiPre');
        // }
        // phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
        // phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
    }
    chuyenSlideNutPhai = function(){
        xacDinh2SlideCD('nutPhai');
//         if(trangthai == 'dangChuyenDong'){return false;}
//         trangthai = 'dangChuyenDong'; // đánh dấu chuyển động
//         // console.log(slides[chisoHienTai]);
//         phantuHienTai = slides[chisoHienTai];    //*
//         soluongSlides = slides.length;
//         if(chisoHienTai < (soluongSlides-1)){
//             chisoHienTai++;
//         }
//         else if(chisoHienTai = (soluongSlides-1) ){
//             chisoHienTai = 0;
//         }
//         var phantuTiepTheo = slides[chisoHienTai];    //*
//             // xử li click nhieu lan
       
//         var trangthaiof2CD = 0;
// // B6-1: chuyen class active sang slide tiep theo
// // B6-2: bỏ đi các class của 2 phan tử
// // B6-3: Kiểm tra xem chuyển dộng xong rồi hay chưa
//             // LÀM bước 3 trước
//         var HienTaiKetThucCD = function(){
//             console.log('đã ket thuc');
//             this.classList.remove('bienMatKhiNext');
//             this.classList.remove('active');
//             trangthaiof2CD++;
//             if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
//         };
//         var TiepTheoKetThucCD = function(){
//             console.log('Tiep theo kết thúc');
//             this.classList.add('active');
//             this.classList.remove('diVaoKhiNext');
//             trangthaiof2CD++;
//             if(trangthaiof2CD == 2){trangthai = 'dangDungYen';}
        // };
//         phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
//         phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
// // --------------------------------------------------------------------
// // Xủ lí lỗi khi click lien tiep nhieu lan
//         // console.log(phantuTiepTheo);
//         // Sau khi tim duoc han tu hien tai va tiep theo cho cho slide chay
//         phantuHienTai.classList.add('bienMatKhiNext');
//         phantuTiepTheo.classList.add('diVaoKhiNext');
    }
     nutPhai.addEventListener('click',chuyenSlideNutPhai);
     chuyenSlideNutTrai = function(){
        xacDinh2SlideCD('nutTrai');

//         //  Xử lí lỗi Click nhiều lần
//         if(trangthai == 'dangChuyenDong'){return false;}
//         trangthai = 'dangChuyenDong';
//         var trangthaiof2CD = 0;
//         phantuHienTai = slides[chisoHienTai];
//         soluongSlides = slides.length;
//         if(chisoHienTai > 0){
//             chisoHienTai--;
//         }
//         else if(chisoHienTai <= 0) {
//             chisoHienTai = soluongSlides - 1 ;
//         }
//         phantuTiepTheo = slides[chisoHienTai];
//         // ------------------------------------------
//         // xử lí chuyển động xong hay chưa:(b1 thay đổi class,b2 là xóa class, b3 checkchuyeenr dộng)
//         HienTaiKetThucCD = function(){
//             console.log('ĐÃ END HT');
//             this.classList.remove('bienMatKhiPre');
//             this.classList.remove('active');
//             trangthaiof2CD ++;
//             if(trangthaiof2CD ==2){trangthai = 'dangDungYen';}
//         }
//         TiepTheoKetThucCD = function(){
//             console.log('ĐÃ END TT');
//             this.classList.remove('diVaoKhiPre');
//             this.classList.add('active');
//             trangthaiof2CD ++;
//             if(trangthaiof2CD ==2){trangthai = 'dangDungYen';}
//         }
//         phantuHienTai.addEventListener('webkitAnimationEnd',HienTaiKetThucCD);
//         phantuTiepTheo.addEventListener('webkitAnimationEnd',TiepTheoKetThucCD);
//         //------------------------------------------------
//         phantuHienTai.classList.add('bienMatKhiPre');
//         phantuTiepTheo.classList.add('diVaoKhiPre');
     }
     nutTrai.addEventListener('click',chuyenSlideNutTrai);

},false)