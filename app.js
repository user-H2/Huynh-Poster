$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        // responsive: [
        // {
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 3,
        //   },
        // },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             infinite: false,
        //         },
        //     },
        // ],
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $(".banner").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-circle-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-circle-arrow-right"></i></button>`,
        // responsive: [
        // {
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 3,
        //   },
        // },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             infinite: false,
        //         },
        //     },
        // ],
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $(".banner-2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: false,
        // responsive: [
        // {
        //   breakpoint: 1025,
        //   settings: {
        //     slidesToShow: 3,
        //   },
        // },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             infinite: false,
        //         },
        //     },
        // ],
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    // Back to top
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0) {
            $('#btn-BackToTop').fadeIn();
        }
        else {
            $('#btn-BackToTop').fadeOut();
        }
    });
    $('#btn-BackToTop').click(function(){
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    //Tăng giảm số lượng
    $(".btn-plus").click(function(){
        //Tăng số lượng
        var amount = $(this).prev().attr("value");
        var a = Number(amount) + 1;
        $(this).prev().attr("value", a); // gán số lượng
    });

    $(".btn-minus").click(function(){
        //Giảm số lượng
        var amount = $(this).next().attr("value");
        var a = 1;
        if(Number(amount) > 1)
            a = Number(amount) - 1;
        $(this).next().attr("value", a); // gán số lượng
    });

    // Add to cart
    $("#addToCart").click(function(){
        var cartAmount = Number(sessionStorage.getItem("cartAmount"));
        if(cartAmount != null)
            cartAmount += 1;
        else
            cartAmount = 0;
        $("#amount").text(cartAmount);
        sessionStorage.setItem("cartAmount",cartAmount);

        var pImg = $("#img1 img").attr("src");
        var pName = $(".right h3").text();
        var pPrice = $(".right .price-discount").text();
        var pQuantity = $(".right .quantity .txt-amount").attr("value");

        var product = {
            "img": pImg,
            "name": pName,
            "price": pPrice,
            "quantity": pQuantity
        }
        //alert(pImg +" "+ pName +" "+ pPrice);
        var cart = sessionStorage.getItem("cart");
        var cartProducts = "";
        if(cart != null){
            cartProducts = cart +","+ JSON.stringify(product);
        }else
            cartProducts = JSON.stringify(product);
        sessionStorage.setItem("cart", cartProducts);
        //alert(cartProducts);
    });
});

function LogOut() {
    window.location.href = "../signin-up.html";
}

function TongQuan() {
    window.location.href = "../admin/TongQuan.html";
}

function LoaiSanPham() {
    window.location.href = "../LoaiSanPham.html";
}

function SanPham() {
    window.location.href = "../admin/SanPham.html";
}

function NhaCungCap() {
    window.location.href = "../admin/NhaCungCap.html";
}

function KhachHang() {
    window.location.href = "../admin/KhachHang.html";
}

function NhanVien() {
    window.location.href = "../admin/NhanVien.html";
}

function HoaDonNhap() {
    window.location.href = "../admin/HoaDonNhap.html";
}

function HoaDonBan() {
    window.location.href = "../admin/HoaDonBan.html";
}

function TinTuc() {
    window.location.href = "../admin/TinTuc.html";
}
